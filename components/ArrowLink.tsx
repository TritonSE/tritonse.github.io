import Link from "next/link";
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";

export default function ArrowLink({ href, children, dark }: { href: string, children: React.ReactNode, dark?: boolean }) {
  const className = dark ? "text-dark" : "";
  return (
    <span>
      {href.indexOf(":") >= 0 ? (
        <a href={href} className={className}>
          {children}
          <BsBoxArrowUpRight style={{ position: "relative", top: "-0.2em", marginLeft: "0.25em" }} />
        </a>
      ) : (
        <Link href={href}>
          <a className={className}>
            {children}
            <BsArrowRight />
          </a>
        </Link>
      )}
    </span>
  );
}
