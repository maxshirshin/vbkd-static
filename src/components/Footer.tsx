export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-light py-12 bg-surface-muted">
      <div className="container max-w-[var(--container-max)] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg tracking-[0.2em] uppercase mb-3 font-heading text-primary-dark">
              VBKD e.V.
            </h3>
            <p className="text-sm text-text-muted">Verein Botanische Kunst Deutschland</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-3 text-text">Links</h4>
            <ul className="space-y-2 text-sm text-text-muted flex flex-col">
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/mitgliedschaft" className="hover:text-primary transition-colors">
                  Mitgliedschaft
                </a>
              </li>
              <li>
                <a
                  href="/Satzung-VBKD.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Satzung
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-3 text-text">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm text-text-muted flex flex-col">
              <li>
                <a href="/impressum" className="hover:text-primary transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-primary transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-text-light">
          Urheberrecht © {currentYear} Verein Botanische Kunst Deutschland e.V. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  )
}
