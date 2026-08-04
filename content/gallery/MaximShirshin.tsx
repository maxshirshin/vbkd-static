import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { MultiCol, Col } from '@/components/ui/Layout'

export default function MaximShirshin() {
  return (
    <>
      <Section className="pb-0 pt-32">
        <Container>
          <Heading as="h1" className="mb-0 text-center">
            {'Maxim Shirshin'}
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container>
          <GalleryLightboxWrapper>
            <MultiCol>
              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/maxim-shirshin/image-1.jpg"
                  localFull={'gallery/maxim-shirshin/image-1-full.jpg'}
                  alt=""
                  title="Rote Papageitulpe, Tulipa x gesneriana | 'Meine Zärtlichkeit'"
                  width={1200}
                  height={900}
                />
                <Prose className="text-center text-sm md:text-sm">
                  <p
                    dangerouslySetInnerHTML={{ __html: `Rote Papageitulpe, Tulipa x gesneriana` }}
                  />
                  <p dangerouslySetInnerHTML={{ __html: `"Meine Zärtlichkeit"` }} />
                </Prose>
              </Col>

              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/maxim-shirshin/image-2.jpg"
                  localFull={'gallery/maxim-shirshin/image-2-full.jpg'}
                  alt=""
                  title="Centaurea cyanus | Kornblumen"
                  width={1200}
                  height={900}
                />
                <Prose className="text-center text-sm md:text-sm">
                  <p dangerouslySetInnerHTML={{ __html: `Centaurea cyanus` }} />
                  <p dangerouslySetInnerHTML={{ __html: `Kornblumen` }} />
                </Prose>
              </Col>

              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/maxim-shirshin/image-3.jpg"
                  localFull={'gallery/maxim-shirshin/image-3-full.jpg'}
                  alt=""
                  title="Olea europaea
Buntstifte auf Papier
 | Sieben Oliven aus Malta | Maxim Shirshin ist Softwareentwickler und Künstler. Er versucht, die Natur in verschiedenen Formen und Gestalten mit künstlerischen Mitteln zu erfassen und ihre Pracht sowie ihre Unvollkommenheiten gleichermaßen darzustellen. | Ich komme ursprünglich aus Moskau. An der Universität studierte ich Mathematik und Informatik und bin seit 2001 als Softwareentwickler tätig. Ich bin ein großer Fan meines IT-Berufs und habe an großen und spannenden Projekten für Unternehmen wie Yandex, Zalando und Shopify gearbeitet. 2013 zog ich nach Berlin, Deutschland und begann 2016 meine ersten Hobby-Experimente mit naturwissenschaftlicher Malerei. Jetzt suche ich die perfekte Balance zwischen meiner Karriere im IT-Bereich und den Herausforderungen der botanischen Kunst. | Maxim arbeitet mit Aquarellfarben und Farbstiften. Er interessiert sich auch für Pigmente, Herstellung der Farben und Archivierungseigenschaften von Kunstmaterialen. In seinen Werken stellt er nicht den Mensch, sondern die Lebewesen rund um uns Menschen in den Fokus. | Unsere Gesellschaft engagiert sich in der Natur hauptsächlich durch Gewalt und Zerstörung. Die Kunst ist doch in der Lage, die Grausamkeit dieser Beziehung zu lindern, indem sie der Gesellschaft zeigt, dass die Dinge, die wir zerstören, immens schön und einzigartig sind."
                  width={1200}
                  height={900}
                />
              </Col>

              <Col>
                <GalleryLightboxItem
                  localPreview="gallery/maxim-shirshin/image-4.jpg"
                  localFull={undefined}
                  alt=""
                  title=""
                  width={1200}
                  height={900}
                />
              </Col>
            </MultiCol>
          </GalleryLightboxWrapper>
          <Prose className="text-center text-sm md:text-sm">
            <p
              dangerouslySetInnerHTML={{
                __html: `Olea europaea
Buntstifte auf Papier
`,
              }}
            />
            <p dangerouslySetInnerHTML={{ __html: `Sieben Oliven aus Malta` }} />
            <p
              dangerouslySetInnerHTML={{
                __html: `<strong>Maxim Shirshin ist Softwareentwickler und Künstler. Er versucht, die Natur in verschiedenen Formen und Gestalten mit künstlerischen Mitteln zu erfassen und ihre Pracht sowie ihre Unvollkommenheiten gleichermaßen darzustellen.</strong>`,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: `<i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">Ich komme ursprünglich aus Moskau. An der Universität studierte ich Mathematik und Informatik und bin seit 2001 als Softwareentwickler tätig. Ich bin ein großer Fan meines IT-Berufs und habe an großen und spannenden Projekten für Unternehmen wie Yandex, Zalando und Shopify gearbeitet. 2013 zog ich nach Berlin, Deutschland und begann 2016 meine ersten Hobby-Experimente mit naturwissenschaftlicher Malerei. Jetzt suche ich die perfekte Balance zwischen meiner Karriere im IT-Bereich und den Herausforderungen der botanischen Kunst.</i>`,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: `Maxim arbeitet mit Aquarellfarben und Farbstiften. Er interessiert sich auch für Pigmente, Herstellung der Farben und Archivierungseigenschaften von Kunstmaterialen. In seinen Werken stellt er nicht den Mensch, sondern die Lebewesen rund um uns Menschen in den Fokus.`,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: `<i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">Unsere Gesellschaft engagiert sich in der Natur hauptsächlich durch Gewalt und Zerstörung. Die Kunst ist doch in der Lage, die Grausamkeit dieser Beziehung zu lindern, indem sie der Gesellschaft zeigt, dass die Dinge, die wir zerstören, immens schön und einzigartig sind.</i>`,
              }}
            />
          </Prose>
          <Prose className="text-center text-sm md:text-sm">
            <p
              dangerouslySetInnerHTML={{
                __html: `Instagram: <a className="text-primary hover:underline" target="_blank" href="https://instagram.com/max.shirshin">@max.shirshin</a>`,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: `Free E-Book “An Engineer Who Paints”: <a className="text-primary hover:underline" target="_blank" href="https://bit.ly/shirshin-ebook">https://bit.ly/shirshin-ebook</a>`,
              }}
            />
          </Prose>
        </Container>
      </Section>
    </>
  )
}
