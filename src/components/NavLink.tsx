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

  const isActive = href === "/" ? urlPathname === "/" : urlPathname.startsWith(href);

  return (
    <a
      href={href}
      className={`text-sm tracking-wide uppercase transition-colors duration-200 border-b-2 pb-[2px] ${
        isActive 
          ? "text-primary border-accent" 
          : "text-text-muted border-transparent hover:text-primary"
      } ${className}`}
    >
      {children}
    </a>
  );
}
