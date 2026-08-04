export default Page;

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Prose } from "@/components/ui/Prose";

function Page() {
  return (
    <Section>
      <Container size="md">
        <Heading as="h1" className="text-center">Impressum</Heading>
        <Prose>
          <p>Verein Botanische Kunst Deutschland e.V.</p>
          <p>Angaben gemäß § 5 TMG</p>
          <p>Inhalt hier einfügen...</p>
        </Prose>
      </Container>
    </Section>
  );
}
