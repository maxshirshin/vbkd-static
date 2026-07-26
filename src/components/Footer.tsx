export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t py-12"
      style={{
        borderColor: "var(--color-border-light)",
        backgroundColor: "var(--color-surface-muted)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3
              className="text-lg tracking-[0.2em] uppercase mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary-dark)",
              }}
            >
              VBKD e.V.
            </h3>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Verein Botanische Kunst Deutschland
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Links
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                <a href="/about">Über uns</a>
              </li>
              <li>
                <a href="/mitgliedschaft">Mitgliedschaft</a>
              </li>
              <li>
                <a href="https://verein-botanischekunst.de/wp-content/uploads/go-x/u/da8f6f35-2f5a-4ab9-a1e9-11a83c6a7330/Satzung-VBKD.pdf" target="_blank" rel="noopener noreferrer">Satzung</a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Rechtliches
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                <a href="/impressum">Impressum</a>
              </li>
              <li>
                <a href="/datenschutz">Datenschutz</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center text-xs"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-light)",
          }}
        >
          Urheberrecht © {currentYear} Verein Botanische Kunst Deutschland e.V. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
