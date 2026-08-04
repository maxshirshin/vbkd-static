export default Page;

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

function Page() {
  return (
    <Section>
      <Container size="sm">
        <Heading as="h1" className="text-center">Kontakt</Heading>
        <p className="text-center mb-12 text-text-muted">
          Haben Sie Fragen? Wir freuen uns über Ihre Nachricht.
        </p>

        <form
          action="mailto:info@verein-botanischekunst.de"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-border bg-surface rounded focus:outline-none focus:ring-1 focus:ring-primary"
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
              className="w-full px-4 py-2 border border-border bg-surface rounded focus:outline-none focus:ring-1 focus:ring-primary"
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
              className="w-full px-4 py-2 border border-border bg-surface rounded focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <Button type="submit" className="w-full">
            Nachricht senden
          </Button>
        </form>
      </Container>
    </Section>
  );
}
