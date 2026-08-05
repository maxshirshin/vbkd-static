import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Prose } from '@/components/ui/Prose'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { MultiCol, Col } from '@/components/ui/Layout'

export default function MaximShirshin() {
  return (
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
                width={1080}
                height={1350}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p>Rote Papageitulpe, Tulipa x gesneriana</p>
                <p>"Meine Zärtlichkeit"</p>
              </Prose>
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/maxim-shirshin/image-2.jpg"
                localFull={'gallery/maxim-shirshin/image-2-full.jpg'}
                alt=""
                title="Centaurea cyanus | Kornblumen"
                width={1393}
                height={2000}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p>Centaurea cyanus</p>
                <p>Kornblumen</p>
              </Prose>
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/maxim-shirshin/image-3.jpg"
                localFull={'gallery/maxim-shirshin/image-3-full.jpg'}
                alt=""
                title="Olea europaea | Sieben Oliven aus Malta"
                width={2000}
                height={1428}
              />
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/maxim-shirshin/image-4.jpg"
                localFull={undefined}
                alt=""
                title=""
                width={768}
                height={768}
              />
            </Col>
          </MultiCol>
        </GalleryLightboxWrapper>
        <Prose className="text-center text-sm md:text-sm">
          <p>
            <strong>
              Maxim Shirshin ist Softwareentwickler und Künstler. Er versucht, die Natur in
              verschiedenen Formen und Gestalten mit künstlerischen Mitteln zu erfassen und ihre
              Pracht sowie ihre Unvollkommenheiten gleichermaßen darzustellen.
            </strong>
          </p>
          <p>
            <i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">
              Ich komme ursprünglich aus Moskau. An der Universität studierte ich Mathematik und
              Informatik und bin seit 2001 als Softwareentwickler tätig. Ich bin ein großer Fan
              meines IT-Berufs und habe an großen und spannenden Projekten für Unternehmen wie
              Yandex, Zalando und Shopify gearbeitet. 2013 zog ich nach Berlin, Deutschland und
              begann 2016 meine ersten Hobby-Experimente mit naturwissenschaftlicher Malerei. Jetzt
              suche ich die perfekte Balance zwischen meiner Karriere im IT-Bereich und den
              Herausforderungen der botanischen Kunst.
            </i>
          </p>
          <p>
            Maxim arbeitet mit Aquarellfarben und Farbstiften. Er interessiert sich auch für
            Pigmente, Herstellung der Farben und Archivierungseigenschaften von Kunstmaterialen. In
            seinen Werken stellt er nicht den Mensch, sondern die Lebewesen rund um uns Menschen in
            den Fokus.
          </p>
          <p>
            <i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">
              Unsere Gesellschaft engagiert sich in der Natur hauptsächlich durch Gewalt und
              Zerstörung. Die Kunst ist doch in der Lage, die Grausamkeit dieser Beziehung zu
              lindern, indem sie der Gesellschaft zeigt, dass die Dinge, die wir zerstören, immens
              schön und einzigartig sind.
            </i>
          </p>
        </Prose>
        <Prose className="text-center text-sm md:text-sm">
          <p>
            Instagram:{' '}
            <a
              className="text-primary hover:underline"
              target="_blank"
              href="https://instagram.com/max.shirshin"
            >
              @max.shirshin
            </a>
          </p>
          <p>
            Free E-Book “An Engineer Who Paints”:{' '}
            <a
              className="text-primary hover:underline"
              target="_blank"
              href="https://bit.ly/shirshin-ebook"
            >
              https://bit.ly/shirshin-ebook
            </a>
          </p>
        </Prose>
      </Container>
    </Section>
  )
}
