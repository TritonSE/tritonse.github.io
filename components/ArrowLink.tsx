import Link from "next/link";
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";

export default function ArrowLink({ href, children, dark }: { href: string, children: React.ReactNode, dark?: boolean }) {
  const className = dark ? "text-dark" : "";
  const arrowStyles = { marginLeft: "0.25em" };
  return (
    <span>
      {href.indexOf(":") >= 0 ? (
        <a href={href} className={className}>
          {children}
          <BsBoxArrowUpRight style={{ position: "relative", top: "-0.2em", ...arrowStyles }} />
        </a>
      ) : (
        <Link href={href}>
          <a className={className}>
            {children}
            <BsArrowRight style={arrowStyles}/>
          </a>
        </Link>
      )}
    </span>
  );
}
