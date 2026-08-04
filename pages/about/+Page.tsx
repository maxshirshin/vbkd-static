export default Page;

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Prose } from "@/components/ui/Prose";

function Page() {
  return (
    <Section>
      <Container size="md">
        <Heading as="h1" className="text-center">Über uns</Heading>
        <Prose>
          <p>Der gemeinnützige Verein für Botanische Kunst Deutschland (VBKD) wurde im September 2022 von Botanischen Künstlern aus Deutschland gegründet.</p>
          <p>Wir sind alle Liebhaber der Botanischen Kunst, die uns an unterschiedlichen Punkten unseres Lebens verzaubert hat. Unser Ziel ist es, in der Tradition Georg Ehrets, Sibylla Merians und Ernst Häckels die Botanische Kunst in Deutschland wieder aufleben zu lassen, sie zu fördern und ihre moderne Entwicklung zu begleiten.</p>
          <p>Wir förderen das Bewusstsein und das Verständnis für Botanische Kunst im Verein durch Veranstaltungen und Ausstellungen. Wir schaffen für unsere Mitglieder Möglichkeiten, ihre Kunstwerke einem breiten Publikum zu präsentieren. Weiterhin wollen wir die Techniken und Fähigkeiten unserer Mitglieder durch Workshops und Austausch verbessern.</p>
        </Prose>
      </Container>
    </Section>
  );
}
