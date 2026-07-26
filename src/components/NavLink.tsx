import { usePageContext } from "vike-react/usePageContext";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;

  const isActive =
    href === "/" ? urlPathname === "/" : urlPathname.startsWith(href);

  return (
    <a
      href={href}
      className={`text-sm tracking-wide uppercase transition-colors duration-200 ${className}`}
      style={{
        color: isActive ? "var(--color-primary)" : "var(--color-text-muted)",
        borderBottom: isActive
          ? "2px solid var(--color-accent)"
          : "2px solid transparent",
        paddingBottom: "2px",
      }}
    >
      {children}
    </a>
  );
}
