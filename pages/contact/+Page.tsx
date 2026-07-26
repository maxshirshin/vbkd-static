export default Page;

function Page() {
  return (
    <div className="container py-16 max-w-2xl">
      <h1 className="text-center mb-8">Kontakt</h1>
      <p className="text-center mb-12" style={{ color: "var(--color-text-muted)" }}>
        Haben Sie Fragen? Wir freuen uns über Ihre Nachricht.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 text-sm font-semibold tracking-wider uppercase transition-colors"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-surface)",
          }}
        >
          Nachricht senden
        </button>
      </form>
    </div>
  );
}
