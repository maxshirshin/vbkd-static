import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Prose } from '@/components/ui/Prose';
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox';
import { MultiCol, Col } from '@/components/ui/Layout';

export default function AudreyReilly() {
  return (
    <>
      <Section className="pb-0 pt-32">
        <Container>
          <Heading as="h1" className="mb-0 text-center">{ "Audrey Reilly" }</Heading>
        </Container>
      </Section>

      <Section>
        <Container>
         <GalleryLightboxWrapper>
          <MultiCol>
            
            <Col>
              <GalleryLightboxItem
                localPreview="gallery/audrey-reilly/image-1.jpg"
                localFull={"gallery/audrey-reilly/image-1-full.jpg"}
                alt=""
                title="Asiatische Apfelbirne (Pyrus pyrifolia)"
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p dangerouslySetInnerHTML={{ __html: `Asiatische Apfelbirne (Pyrus pyrifolia)` }} />
              </Prose>
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/audrey-reilly/image-2.jpg"
                localFull={"gallery/audrey-reilly/image-2-full.jpg"}
                alt=""
                title="Beef tomato (Solanum lycopersicum)"
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p dangerouslySetInnerHTML={{ __html: `Beef tomato (Solanum lycopersicum)` }} />
              </Prose>
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/audrey-reilly/image-3.jpg"
                localFull={"gallery/audrey-reilly/image-3-full.jpg"}
                alt=""
                title="Kohlrabi (Brassica oleracea) | Audrey Reilly ist in Irland geboren und aufgewachsen. Heute lebt und arbeitet sie in der Wedemark, nördlich von Hannover. | Der künstlerische Weg und der Übergang zur Botanischen Kunst | Ich bin in der Seenplatte in den irischen Midlands aufgewachsen und fühlte mich von klein auf zu Tieren und der Natur hingezogen. Nach meinem Kunststudium an der Nordwestküste habe ich einige Jahre in Dublin gearbeitet, bevor ich nach Deutschland zog. So trat ich 2006 der Künstlergruppe Atelier Block 16 bei, die ihre Ateliers in einem umgebauten Fabrikgebäude in Hannovers Nordstadt einrichtete. Meine Arbeit war damals eher figurativ und expressionistisch. | Als ich 2011 aufs Land zog, wendete ich mich in meiner Malerei mehr und mehr der Natur zu. Mir fiel auf, dass Botanische Kunst in Deutschland so in Vergessenheit geraten war, dass ich sie als zeitgenössische Kunstpraxis gar nicht kannte. Die Begegnung mit einer Botanischen Künstlerin in Irland im Jahr 2018 weckte meine Neugier. | Botanische Kunst erfüllt für mich alle für mich wichtigen Kriterien: Kunst, Geschichte, Natur, Interesse an Wissenschaft, Biodiversität und Umweltbewusstsein vereinen sich auf einem Blatt. Bis jetzt war es definitiv eine fruchtbare und lohnende Reise. | Im Jahr 2020 schloss Audrey Reilly das Certificate in Botanical Illustration am Royal Botanical Garden Edinburgh mit Auszeichnung ab. Danach wurde sie sofort in den anspruchsvollen Online-Diplomkurs aufgenommen, mit dem sie bis März 2024 beschäftigt sein wird. | Audrey ist Initiatorin und Vorstandsvorsitzende des Vereins für Botanische Kunst Deutschland (VBKD). Sie ist auch Mitglied der Irish Society of Botanical Art (ISBA), der American Society of Botanical Art (ASBA) und der Association of Botanical Artists (ABA)."
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p dangerouslySetInnerHTML={{ __html: `Kohlrabi (Brassica oleracea)` }} />
                <p dangerouslySetInnerHTML={{ __html: `<strong>Audrey Reilly ist in Irland geboren und aufgewachsen. Heute lebt und arbeitet sie in der Wedemark, nördlich von Hannover.</strong>` }} />
                <p dangerouslySetInnerHTML={{ __html: `<a href="/workshops-in-niedersachsen/"><strong>Workshops von Audrey Reilly</strong></a>` }} />
                <p dangerouslySetInnerHTML={{ __html: `Der künstlerische Weg und der Übergang zur Botanischen Kunst` }} />
                <p dangerouslySetInnerHTML={{ __html: `<i>Ich bin in der Seenplatte in den irischen Midlands aufgewachsen und fühlte mich von klein auf zu Tieren und der Natur hingezogen. Nach meinem Kunststudium an der Nordwestküste habe ich einige Jahre in Dublin gearbeitet, bevor ich nach Deutschland zog. So trat ich 2006 der Künstlergruppe Atelier Block 16 bei, die ihre Ateliers in einem umgebauten Fabrikgebäude in Hannovers Nordstadt einrichtete. Meine Arbeit war damals eher figurativ und expressionistisch.</i>` }} />
                <p dangerouslySetInnerHTML={{ __html: `<i>Als ich 2011 aufs Land zog, wendete ich mich in meiner Malerei mehr und mehr der Natur zu. Mir fiel auf, dass Botanische Kunst in Deutschland so in Vergessenheit geraten war, dass ich sie als zeitgenössische Kunstpraxis gar nicht kannte. Die Begegnung mit einer Botanischen Künstlerin in Irland im Jahr 2018 weckte meine Neugier.</i>` }} />
                <p dangerouslySetInnerHTML={{ __html: `<i>Botanische Kunst erfüllt für mich alle für mich wichtigen Kriterien: Kunst, Geschichte, Natur, Interesse an Wissenschaft, Biodiversität und Umweltbewusstsein vereinen sich auf einem Blatt. Bis jetzt war es definitiv eine fruchtbare und lohnende Reise.</i>` }} />
                <p dangerouslySetInnerHTML={{ __html: `Im Jahr 2020 schloss Audrey Reilly das Certificate in Botanical Illustration am Royal Botanical Garden Edinburgh mit Auszeichnung ab. Danach wurde sie sofort in den anspruchsvollen Online-Diplomkurs aufgenommen, mit dem sie bis März 2024 beschäftigt sein wird.` }} />
                <p dangerouslySetInnerHTML={{ __html: `Audrey ist Initiatorin und Vorstandsvorsitzende des Vereins für Botanische Kunst Deutschland (VBKD). Sie ist auch Mitglied der Irish Society of Botanical Art (ISBA), der American Society of Botanical Art (ASBA) und der Association of Botanical Artists (ABA).` }} />
              </Prose>
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/audrey-reilly/image-4.jpg"
                localFull={undefined}
                alt=""
                title=""
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p dangerouslySetInnerHTML={{ __html: `Webseite: <a className="text-primary hover:underline" target="_blank" href="https://www.audreyreilly-art.com">www.audreyreilly-art.com</a>` }} />
                <p dangerouslySetInnerHTML={{ __html: `Instagram: <a className="text-primary hover:underline" target="_blank" href="https://instagram.com/audrey.reilly">@audrey.reilly</a>` }} />
              </Prose>
            </Col>
          </MultiCol>
         </GalleryLightboxWrapper>
        </Container>
      </Section>
    </>
  );
}
