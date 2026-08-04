export default Page;

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Prose } from "@/components/ui/Prose";

function Page() {
  return (
    <Section>
      <Container size="md">
        <Heading as="h1" className="text-center">Mitgliedschaft</Heading>
        <Prose>
          <p>
            Möchten Sie Mitglied im Verein für Botanische Kunst Deutschland werden? 
            Wir freuen uns über neue Mitglieder!
          </p>
          <p>
            Als Mitglied haben Sie die Möglichkeit, an unseren Ausstellungen und 
            Veranstaltungen teilzunehmen, sowie sich mit anderen Künstlern zu 
            vernetzen und auszutauschen.
          </p>
          <p>
            Bitte kontaktieren Sie uns für weitere Informationen zur Mitgliedschaft.
          </p>
        </Prose>
      </Container>
    </Section>
  );
}
