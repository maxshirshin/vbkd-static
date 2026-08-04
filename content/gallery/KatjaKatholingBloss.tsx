import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { MultiCol, Col } from '@/components/ui/Layout'

export default function KatjaKatholingBloss() {
  return (
    <>
      <Section className="pb-0 pt-32">
        <Container>
          <Heading as="h1" className="mb-0 text-center">
            {'Katja Katholing-Bloss'}
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container>
          <GalleryLightboxWrapper>
            <MultiCol>
              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/katja-katholing-bloss/image-1.jpg"
                  localFull={'gallery/katja-katholing-bloss/image-1-full.jpg'}
                  alt=""
                  title="Too good to go"
                  width={1200}
                  height={900}
                />
                <Prose className="text-center text-sm md:text-sm">
                  <p>Too good to go</p>
                </Prose>
              </Col>

              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/katja-katholing-bloss/image-2.jpg"
                  localFull={'gallery/katja-katholing-bloss/image-2-full.jpg'}
                  alt=""
                  title="Anemone"
                  width={1200}
                  height={900}
                />
                <Prose className="text-center text-sm md:text-sm">
                  <p>Anemone</p>
                </Prose>
              </Col>

              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/katja-katholing-bloss/image-3.jpg"
                  localFull={'gallery/katja-katholing-bloss/image-3-full.jpg'}
                  alt=""
                  title="Nuts all around | Alles begann im Jahr 2008 mit dem spontanem Besuch der Ausstellung “Botanica” im Botanischen Garten in Sydney. Dort begegnete Katja schier unglaublich realistisch und detailliert gezeichneten Pflanzen von botanischen Illustratoren und Künstlern. | In Hof an der Saale, ganz im Norden Bayerns geboren und aufgewachsen, war Katja stehts von Blumen umgeben; das Blumengeschäft ihrer Mutter war wohl eine Inspiration, die sie bis heute nicht loslässt. Als gelernte Industriefachwirtin arbeitete Katja sowohl in Deutschland als auch mehr als ein Jahrzehnt in England und Australien. Im Jahr 2015 hat es sie dann in die Heimat zurückgezogen. Erst nach Bayreuth und seit 2019 wohnt sie wieder in ihrer Heimatstadt Hof. | Ihre Ausbildung in der Botanischen Illustration hat Katja in mehreren Kursen in England, unter anderem bei dem leider bereits verstorbenen Stuart Lafford erhalten. Nach mehreren Fortbildungen wurde sie zur Kunstlehrerin für den Bereich Botanische Illustration - auf Englisch „Botanical Art“ - am Hereford College of Technology berufen. | Mittlerweile ist Katja unter anderem Vorstandsmitglied in der Society of Botanical Artists (SBA, England), Mitglied der American Society of Botanical Artists (ASBA) sowie im Kunstverein Hof/Saale. Ihre Arbeiten hat sie bereits in mehreren Einzel- und Gemeinschafts-Ausstellungen in England und Deutschland gezeigt. Werke von ihr befinden sich in vielen Ländern in Privatbesitz, unter anderem in England, Australien, Italien und Dubai. | Katja arbeitet als freischaffende Künstlerin und Dozentin für Botanische Illustration in Deutschland und Österreich. In ihrem Studio in Hof/Oberfranken bietet sie verschiedene Workshops sowie individuelle Intensiv-Einzel-Coachings an. Ihr vorrangiges Ziel ist es, diese einzigartige Art von Kunst in Deutschland wieder publik zu machen und dem Betrachter die wunderbare Welt der Pflanzen mit einem ganz speziellen Blick fürs Detail zu öffnen. Das ist Katjas Ziel, dafür “brennt” sie und hofft, dass sie auch dich begeistern kann."
                  width={1200}
                  height={900}
                />
                <Prose className="text-center text-sm md:text-sm">
                  <p>Nuts all around</p>
                  <p>
                    <strong>
                      Alles begann im Jahr 2008 mit dem spontanem Besuch der Ausstellung “Botanica”
                      im Botanischen Garten in Sydney. Dort begegnete Katja schier unglaublich
                      realistisch und detailliert gezeichneten Pflanzen von botanischen
                      Illustratoren und Künstlern.
                    </strong>
                  </p>
                  <p>
                    In Hof an der Saale, ganz im Norden Bayerns geboren und aufgewachsen, war Katja
                    stehts von Blumen umgeben; das Blumengeschäft ihrer Mutter war wohl eine
                    Inspiration, die sie bis heute nicht loslässt. Als gelernte Industriefachwirtin
                    arbeitete Katja sowohl in Deutschland als auch mehr als ein Jahrzehnt in England
                    und Australien. Im Jahr 2015 hat es sie dann in die Heimat zurückgezogen. Erst
                    nach Bayreuth und seit 2019 wohnt sie wieder in ihrer Heimatstadt Hof.
                  </p>
                  <p>
                    Ihre Ausbildung in der Botanischen Illustration hat Katja in mehreren Kursen in
                    England, unter anderem bei dem leider bereits verstorbenen Stuart Lafford
                    erhalten. Nach mehreren Fortbildungen wurde sie zur Kunstlehrerin für den
                    Bereich Botanische Illustration - auf Englisch „Botanical Art“ - am Hereford
                    College of Technology berufen.
                  </p>
                  <p>
                    Mittlerweile ist Katja unter anderem Vorstandsmitglied in der Society of
                    Botanical Artists (SBA, England), Mitglied der American Society of Botanical
                    Artists (ASBA) sowie im Kunstverein Hof/Saale. Ihre Arbeiten hat sie bereits in
                    mehreren Einzel- und Gemeinschafts-Ausstellungen in England und Deutschland
                    gezeigt. Werke von ihr befinden sich in vielen Ländern in Privatbesitz, unter
                    anderem in England, Australien, Italien und Dubai.
                  </p>
                  <p>
                    Katja arbeitet als freischaffende Künstlerin und Dozentin für Botanische
                    Illustration in Deutschland und Österreich. In ihrem Studio in Hof/Oberfranken
                    bietet sie verschiedene Workshops sowie individuelle Intensiv-Einzel-Coachings
                    an. Ihr vorrangiges Ziel ist es, diese einzigartige Art von Kunst in Deutschland
                    wieder publik zu machen und dem Betrachter die wunderbare Welt der Pflanzen mit
                    einem ganz speziellen Blick fürs Detail zu öffnen. Das ist Katjas Ziel, dafür
                    “brennt” sie und hofft, dass sie auch dich begeistern kann.
                  </p>
                </Prose>
              </Col>

              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/katja-katholing-bloss/image-4.jpg"
                  localFull={undefined}
                  alt=""
                  title=""
                  width={1200}
                  height={900}
                />
                <Prose className="text-center text-sm md:text-sm">
                  <p>
                    Website:{' '}
                    <a
                      className="text-primary hover:underline"
                      target="_blank"
                      href="https://katjakatholing-bloss.com"
                    >
                      https://katjakatholing-bloss.com
                    </a>
                  </p>
                  <p>
                    Instagram:{' '}
                    <a
                      className="text-primary hover:underline"
                      target="_blank"
                      href="https://www.instagram.com/katjakatholingbloss"
                    >
                      @katjakatholingbloss
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
