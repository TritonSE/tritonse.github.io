#!/bin/bash

log() {
	echo "${0}:" "${@}" >&2
}

warn() {
	log "${format_warn}${@}${format_clear}"
}

error() {
	log "${format_error}${@}${format_clear}"
}

parse_yes_no() {
	case "${1}" in
		[yY]|[yY][eE][sS])
			echo "yes"
			;;
		[nN]|[nN][oO])
			echo "no"
			;;
		"")
			echo ""
			;;
		*)
			echo "invalid"
	esac
}

ask_yes_no() {
	local prompt="${1}"
	local default_selection="$(parse_yes_no "${2}")"

	local yn_letters
	local default_status
	case "${default_selection}" in
		yes)
			yn_letters="Y/n"
			default_status=0
			;;
		no)
			yn_letters="y/N"
			default_status=1
			;;
		*)
			error "An internal error occurred."
			error " The default selection is missing or invalid."
			exit 1
			;;
	esac

	prompt+=" [${yn_letters}] "

	if (( !interactive )); then
		log "${prompt}"
		warn "Skipping interactive prompt (stdin not available)."
		warn " Choosing default selection '${default_selection}'."
		return "${default_status}"
	fi

	local selection
	while :; do
		read -p "${0}: ${prompt}" selection
		selection="$(parse_yes_no "${selection}")"

		case "${selection}" in
			yes)
				return 0
				;;
			no)
				return 1
				;;
			'')
				return "${default_status}"
				;;
			*)
				warn "Invalid input."
				log " Please type 'y' or 'n' and press Enter."
				;;
		esac
	done
}

explain_no_verify() {
	log "If you wish to bypass the lint check entirely,"
	log "use the following command:"
	log "    git commit --no-verify"
}

dir_check() {
	for dir in "${node_dirs[@]}"; do
		if ! [ -d "${dir}" ]; then
			error "Directory '${dir}' does not exist. Please"
			error " edit the 'node_dirs' variable in '${0}'."
			exit 1
		fi
	done
}

autocrlf_check() {
	local core_autocrlf="$(git config --get core.autocrlf || echo "false")"
	if [ "${core_autocrlf}" != "false" ]; then
		warn "core.autocrlf is set to '${core_autocrlf}' in the git config."
		warn " This might produce CRLF line endings in the working"
		warn " tree when Prettier expects LF. This can be fixed by"
		warn " running the following command:"
		warn "    git config core.autocrlf false"
	fi
}

unstaged_changes_check() {
	if git status --porcelain | grep -qv '^[MARCD] '; then
		git status

		warn "The working tree has unstaged changes, which"
		warn " may result in an incorrect lint check result."
		if ! ask_yes_no "Proceed with lint check anyway?" "yes"; then
			log "Please stage (or stash) any unstaged changes,"
			log " then try again."
			exit 1
		fi
	fi
}

lint_check() {
	local failed_dirs=()
	for dir in "${node_dirs[@]}"; do
		log "Running lint check in '${dir}'..."
		if ! (cd "${dir}" && "${check_command[@]}"); then
			failed_dirs+=("${dir}")
		fi
	done

	if (( ${#failed_dirs[@]} == 0 )); then
		log "Lint check passed."
		return 0
	fi

	warn "Lint check failed in the following directories:"
	warn "   $(printf ' %q' "${failed_dirs[@]}")"

	if ask_yes_no "Proceed with commit anyway?" "no"; then
		return 0
	fi

	log "The lint autofix command is:"
	log "   $(printf ' %q' "${fix_command[@]}")"
	if ask_yes_no "Run this command in each failed directory?" "no"; then
		for dir in "${failed_dirs[@]}"; do
			log "Running autofix command in '${dir}'..."
			(cd "${dir}" && "${fix_command[@]}")
		done

		log "Please manually fix any remaining lint errors,"
		log " then stage your changes and try again."
	else
		log "Please fix the lint errors, then stage your"
		log " changes and try again."
	fi

	explain_no_verify
	return 1
}

cancel() {
	>&2 echo
	log "Lint check canceled."
	explain_no_verify
	exit 0
}

find_npm() {
	command -v npm &> /dev/null
}

main() {
	local config_file="$(dirname "${0}")/lint-config.sh"
	if ! source "${config_file}"; then
		error "Error while sourcing config file '${config_file}'."
		exit 1
	fi

	if (( !enabled )); then
		warn "Lint check has been disabled."
		exit 0
	fi

	trap cancel SIGINT
	log "Starting lint check. Use Ctrl+C to cancel."

	interactive=1
	if ! [ -e /dev/tty ] || ! exec < /dev/tty; then
		warn "Cannot open stdin. Disabling interactive prompts."
		warn " If you are currently using a graphical Git tool,"
		warn " consider using Git from the command line to enable"
		warn " interactive prompts for warnings and quick fixes."
		interactive=0
	fi

	if ! find_npm; then
		warn 'Cannot find npm. Adding fallback paths to $PATH:'
		local fallback_path
		for fallback_path in "${npm_fallback_paths[@]}"; do
			warn "   ${fallback_path}"
			PATH="${PATH}:${fallback_path}"
		done

		if ! find_npm; then
			error "Still cannot find npm."
			exit 1
		fi
	fi

	dir_check
	autocrlf_check
	unstaged_changes_check
	lint_check
}

main "${@}"
