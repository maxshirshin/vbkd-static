import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { MultiCol, Col } from '@/components/ui/Layout'

export default function DrSabineLoos() {
  return (
    <>
      <Section className="pb-0 pt-32">
        <Container>
          <Heading as="h1" className="mb-0 text-center">
            {'Dr. Sabine Loos'}
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container>
          <GalleryLightboxWrapper>
            <MultiCol>
              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/dr-sabine-loos/image-1.jpg"
                  localFull={'gallery/dr-sabine-loos/image-1-full.jpg'}
                  alt=""
                  title="Aquarell auf Pergament | Orientalische Nieswurz (Helleborus orientalis)"
                  width={1370}
                  height={2000}
                />
                <Prose className="text-center text-sm md:text-sm">
                  <p>Aquarell auf Pergament</p>
                  <p>Orientalische Nieswurz (Helleborus orientalis)</p>
                </Prose>
              </Col>

              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/dr-sabine-loos/image-2.jpg"
                  localFull={'gallery/dr-sabine-loos/image-2-full.jpg'}
                  alt=""
                  title="Efeu (Hedera helix)"
                  width={2000}
                  height={1946}
                />
                <Prose className="text-center text-sm md:text-sm">
                  <p>Efeu (Hedera helix)</p>
                </Prose>
              </Col>

              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/dr-sabine-loos/image-3.jpg"
                  localFull={'gallery/dr-sabine-loos/image-3-full.jpg'}
                  alt=""
                  title="Alpen-Mannstreu (Eryngium alpinum) | Sabine Loos lebt seit 1995 mit ihrer Familie im idyllischen Rudolstadt an der Saale, einem der Lieblingsorte Friedrich Schillers. Hier fertigt sie in ihrem idyllisch gelegenen Atelier unterhalb der Heidecksburg Botanische Illustrationen und Botanische Kunst. | Ich studierte Biologie an der altehrwürdigen Friedrich-Schiller-Universität in Jena und an der ETH Zürich und promovierte in meinem Hauptfach Mikrobiologie über Sekundärmetaboliten in filamentösen Pilzen. | Mein Nebenfach Botanik faszinierte mich ebenfalls. Besonders die Pharmakologie natürlicher pflanzlicher Sekundärmetabolite zog mich in ihren Bann. Als ich einen Anfängerkurs für Botanische Illustration bei Katja Katholing-Bloss belegte, fühlte es sich an, wie nach Hause zu kommen. Etwas Magisches passierte in mir an diesem Tag und ich wusste, dass Botanische Illustrationen mit meiner Zukunft verbunden sein würden. Botanische Kunst und Illustrationen verbinden meinen Kopf mit meinem Herzen. Es gibt nichts Schöneres für mich, als mit den Beinen zu baumeln und über den Blütenbau eines Doldenblütlers nachzudenken. Mit dem Pinsel in der Hand bin ich glücklich. Ich bin davon überzeugt, dass in jedem Menschen ein Künstler schlummert, den man einfach aufwecken muss. | Nach vielen Stunden des Selbststudiums und Online-Kursen, die mir viel Freude bereiteten, beschloss ich, meine künstlerischen Fähigkeiten weiter zu vertiefen. &nbsp;Seitdem studiere ich Botanische Illustration im Diplomstudiengang am Royal Botanical Garden Edinburgh. Den werde ich 2024 abschließen. Mein Herzensanliegen ist es, die historischen Wurzeln der Botanischen Illustration in Deutschland wieder zu beleben und die Botanische Kunst in Deutschland wieder aufblühen zu lassen. | Herzliche Grüße | Aus dem Botanischen Atelier unter dem Schlosshain | Eure Sabine"
                  width={1153}
                  height={1537}
                />
                <Prose className="text-center text-sm md:text-sm">
                  <p>Alpen-Mannstreu (Eryngium alpinum)</p>
                  <p>
                    <strong>
                      Sabine Loos lebt seit 1995 mit ihrer Familie im idyllischen Rudolstadt an der
                      Saale, einem der Lieblingsorte Friedrich Schillers. Hier fertigt sie in ihrem
                      idyllisch gelegenen Atelier unterhalb der Heidecksburg Botanische
                      Illustrationen und Botanische Kunst.
                    </strong>
                  </p>
                  <p>
                    <i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">
                      Ich studierte Biologie an der altehrwürdigen Friedrich-Schiller-Universität in
                      Jena und an der ETH Zürich und promovierte in meinem Hauptfach Mikrobiologie
                      über Sekundärmetaboliten in filamentösen Pilzen.
                    </i>
                  </p>
                  <p>
                    <i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">
                      Mein Nebenfach Botanik faszinierte mich ebenfalls. Besonders die Pharmakologie
                      natürlicher pflanzlicher Sekundärmetabolite zog mich in ihren Bann. Als ich
                      einen Anfängerkurs für Botanische Illustration bei Katja Katholing-Bloss
                      belegte, fühlte es sich an, wie nach Hause zu kommen. Etwas Magisches
                      passierte in mir an diesem Tag und ich wusste, dass Botanische Illustrationen
                      mit meiner Zukunft verbunden sein würden. Botanische Kunst und Illustrationen
                      verbinden meinen Kopf mit meinem Herzen. Es gibt nichts Schöneres für mich,
                      als mit den Beinen zu baumeln und über den Blütenbau eines Doldenblütlers
                      nachzudenken. Mit dem Pinsel in der Hand bin ich glücklich. Ich bin davon
                      überzeugt, dass in jedem Menschen ein Künstler schlummert, den man einfach
                      aufwecken muss.
                    </i>
                  </p>
                  <p>
                    <i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">
                      Nach vielen Stunden des Selbststudiums und Online-Kursen, die mir viel Freude
                      bereiteten, beschloss ich, meine künstlerischen Fähigkeiten weiter zu
                      vertiefen. &nbsp;Seitdem studiere ich Botanische Illustration im
                      Diplomstudiengang am Royal Botanical Garden Edinburgh. Den werde ich 2024
                      abschließen. Mein Herzensanliegen ist es, die historischen Wurzeln der
                      Botanischen Illustration in Deutschland wieder zu beleben und die Botanische
                      Kunst in Deutschland wieder aufblühen zu lassen.
                    </i>
                  </p>
                  <p>
                    <i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">
                      Herzliche Grüße
                    </i>
                  </p>
                  <p>
                    <i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">
                      Aus dem Botanischen Atelier unter dem Schlosshain
                    </i>
                  </p>
                  <p>
                    <i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">
                      Eure Sabine
                    </i>
                  </p>
                </Prose>
              </Col>

              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/dr-sabine-loos/image-4.jpg"
                  localFull={undefined}
                  alt=""
                  title=""
                  width={768}
                  height={512}
                />
                <Prose className="text-center text-sm md:text-sm">
                  <p>
                    Website:{' '}
                    <a
                      className="text-primary hover:underline"
                      target="_blank"
                      href="https://www.sabine-loos.de/"
                    >
                      www.sabine-loos.de
                    </a>
                    <br />
                    Instagram:{' '}
                    <a
                      className="text-primary hover:underline"
                      target="_blank"
                      href="https://instagram.com/losbine"
                    >
                      @losbine
                    </a>
                    <br />
                    Facebook:{' '}
                    <a
                      className="text-primary hover:underline"
                      target="_blank"
                      href="https://www.facebook.com/drsabineloos"
                    >
                      https://www.facebook.com/drsabineloos
                    </a>
                    <br />
                    TikTok:{' '}
                    <a
                      className="text-primary hover:underline"
                      target="_blank"
                      href="https://www.tiktok.com/@sabineloosartist"
                    >
                      @sabineloosartist
                    </a>
                  </p>
                </Prose>
              </Col>
            </MultiCol>
          </GalleryLightboxWrapper>
        </Container>
      </Section>
    </>
  )
}
