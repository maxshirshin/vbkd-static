export default Page;

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Prose } from "@/components/ui/Prose";

function Page() {
  return (
    <Section>
      <Container size="md">
        <Heading as="h1" className="text-center">Neuigkeiten</Heading>
        <Prose>
          <p>Neueste Informationen vom VBKD e.V.</p>
          <p>Demnächst...</p>
        </Prose>
      </Container>
    </Section>
  );
}
