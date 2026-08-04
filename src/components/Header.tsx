import { useState } from "react";
import { NavLink } from "@/components/NavLink";

const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Galerie", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Über uns", href: "/about" },
  { label: "Mitgliedschaft", href: "/mitgliedschaft" },
  { label: "Kontakt", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm h-[80px]">
      <div className="container mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo / Site Name */}
        <a
          href="/"
          className="flex flex-col leading-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-xl tracking-[0.3em] uppercase font-heading text-primary-dark">
            VBKD
          </span>
          <span className="text-xs tracking-[0.15em] uppercase text-text-muted">
            Verein für Botanische Kunst
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-primary-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border-light bg-surface px-6 py-4 space-y-3">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-sm tracking-wide uppercase text-text-muted hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
