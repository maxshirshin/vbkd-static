import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Prose } from '@/components/ui/Prose';
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox';
import { MultiCol, Col } from '@/components/ui/Layout';

export default function DanielRupic() {
  return (
    <>
      <Section className="pb-0 pt-32">
        <Container>
          <Heading as="h1" className="mb-0 text-center">{ "Daniel Rupić" }</Heading>
        </Container>
      </Section>

      <Section>
        <Container>
         <GalleryLightboxWrapper>
          <MultiCol>
            
            <Col>
              <GalleryLightboxItem
                localPreview="gallery/daniel-rupic/image-1.jpg"
                localFull={"gallery/daniel-rupic/image-1-full.jpg"}
                alt=""
                title="Rosa rugosa"
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p dangerouslySetInnerHTML={{ __html: `Rosa rugosa` }} />
              </Prose>
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/daniel-rupic/image-2.jpg"
                localFull={"gallery/daniel-rupic/image-2-full.jpg"}
                alt=""
                title="Cyrtosperma johnstonii"
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p dangerouslySetInnerHTML={{ __html: `Cyrtosperma johnstonii` }} />
              </Prose>
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/daniel-rupic/image-3.jpg"
                localFull={"gallery/daniel-rupic/image-3-full.jpg"}
                alt=""
                title="Goethea strictiflora | Daniel Rupić wurde in Berlin als Kind kroatischer Gastarbeiter geboren. Er lebt und arbeitet als Physiotherapeut in Potsdam. | Schon als Kind begeisterte mich die Flora und Fauna meiner familiären Heimat Kroatien. Ich erschnorchelte die Adria, sammelte Bonsai, Sukkulenten, Insektivoren und erbte von meiner Mutter, die Floristin war, ihre Faszination für Pflanzen. Jahre später, mittlerweile Physiotherapeut, begann ich mit der Kamera die Natur zu erfassen und nahm unter anderem an Ausstellungen von Pentax und Olympus teil. Mich begeisterten schon immer die Farben, Formen und Details die man entdecken kann, wenn man sich die Zeit nimmt, die Natur wirken zu lassen. Ich versuchte die Pflanzen perfekt festzuhalten, als Individuen, wie ich sie stets sah. | Schließlich befiel mich 2018 eine innere Unruhe. Ich wollte mich den Details, dem Charakter und der Schönheit der Pflanzen irgendwie intensiver annähern, dabei auch kreativer und handwerklicher sein. Die Erinnerungen an meine zeichnerische Jugend wurden wach und auch mein Gefallen an den Malereien Humboldts. So beschloss ich, die Botanik zu illustrieren. Einmal, um meiner Pflanzenliebe einen kreativeren Ausdruck zu verleihen, aber auch als Ausgleich zu meinem Berufsleben. | Ich begann alles zu verschlingen über die Kunst des Farbstifts. Autodidaktisch, mit Unmengen von Literatur aus den USA und Grossbritannien sowie dem Internet begann ich zu lernen. Das Feuer für die detaillierte und realistische Botanische Kunst war entfacht. | Auf Anregung der großartigen Botanischen Künstlerin Julia Asenbaum bewarb ich mich erstmalig 2020 bei der Society of botanical Arts in London SBA für die Ausstellung Plantae 20 und wurde direkt angenommen, welch Freude und Ehre! Weitere Illustrationen nahmen Teil an Ausstellungen der Colouredpencil Society of UK sowie dem Colored Pencil Magazine. | Mir wurde sehr schnell klar, was für eine Diskrepanz zwischen Deutschland und den englischsprachigen Ländern herrscht, was die Botanische Kunst als solches und deren Stellenwert hierzulande angeht. Dabei gab es hier einst großartige Künstler wie Merian, Humboldt und andere mehr. | Ich fühle mich geehrt als Gründungsmitglied und Vorstand des VBKD beizutragen, die Botanische Kunst auch bei uns wieder sichtbarer zu machen, Gleichgesinnte zu finden und vor allem zu zeigen: | Die Botanische Kunst in Deutschland lebt!"
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p dangerouslySetInnerHTML={{ __html: `Goethea strictiflora` }} />
                <p dangerouslySetInnerHTML={{ __html: `<strong>Daniel Rupić wurde in Berlin als Kind kroatischer Gastarbeiter geboren. Er lebt und arbeitet als Physiotherapeut in Potsdam.</strong>` }} />
                <p dangerouslySetInnerHTML={{ __html: `Schon als Kind begeisterte mich die Flora und Fauna meiner familiären Heimat Kroatien. Ich erschnorchelte die Adria, sammelte Bonsai, Sukkulenten, Insektivoren und erbte von meiner Mutter, die Floristin war, ihre Faszination für Pflanzen. Jahre später, mittlerweile Physiotherapeut, begann ich mit der Kamera die Natur zu erfassen und nahm unter anderem an Ausstellungen von Pentax und Olympus teil. Mich begeisterten schon immer die Farben, Formen und Details die man entdecken kann, wenn man sich die Zeit nimmt, die Natur wirken zu lassen. Ich versuchte die Pflanzen perfekt festzuhalten, als Individuen, wie ich sie stets sah.` }} />
                <p dangerouslySetInnerHTML={{ __html: `Schließlich befiel mich 2018 eine innere Unruhe. Ich wollte mich den Details, dem Charakter und der Schönheit der Pflanzen irgendwie intensiver annähern, dabei auch kreativer und handwerklicher sein. Die Erinnerungen an meine zeichnerische Jugend wurden wach und auch mein Gefallen an den Malereien Humboldts. So beschloss ich, die Botanik zu illustrieren. Einmal, um meiner Pflanzenliebe einen kreativeren Ausdruck zu verleihen, aber auch als Ausgleich zu meinem Berufsleben.` }} />
                <p dangerouslySetInnerHTML={{ __html: `Ich begann alles zu verschlingen über die Kunst des Farbstifts. Autodidaktisch, mit Unmengen von Literatur aus den USA und Grossbritannien sowie dem Internet begann ich zu lernen. Das Feuer für die detaillierte und realistische Botanische Kunst war entfacht.` }} />
                <p dangerouslySetInnerHTML={{ __html: `Auf Anregung der großartigen Botanischen Künstlerin Julia Asenbaum bewarb ich mich erstmalig 2020 bei der Society of botanical Arts in London SBA für die Ausstellung Plantae 20 und wurde direkt angenommen, welch Freude und Ehre! Weitere Illustrationen nahmen Teil an Ausstellungen der Colouredpencil Society of UK sowie dem Colored Pencil Magazine.` }} />
                <p dangerouslySetInnerHTML={{ __html: `Mir wurde sehr schnell klar, was für eine Diskrepanz zwischen Deutschland und den englischsprachigen Ländern herrscht, was die Botanische Kunst als solches und deren Stellenwert hierzulande angeht. Dabei gab es hier einst großartige Künstler wie Merian, Humboldt und andere mehr.` }} />
                <p dangerouslySetInnerHTML={{ __html: `Ich fühle mich geehrt als Gründungsmitglied und Vorstand des VBKD beizutragen, die Botanische Kunst auch bei uns wieder sichtbarer zu machen, Gleichgesinnte zu finden und vor allem zu zeigen:` }} />
                <p dangerouslySetInnerHTML={{ __html: `<strong>Die Botanische Kunst in Deutschland lebt!</strong>` }} />
              </Prose>
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/daniel-rupic/image-4.jpg"
                localFull={undefined}
                alt=""
                title=""
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p dangerouslySetInnerHTML={{ __html: `Instagram: <a className="text-primary hover:underline" target="_blank" href="https://www.instagram.com/daniel.rupic/">@daniel.rupic</a>` }} />
                <p dangerouslySetInnerHTML={{ __html: `Website: <a className="text-primary hover:underline" target="_blank" href="http://www.danielrupic.com/">www.danielrupic.com</a>` }} />
                <p dangerouslySetInnerHTML={{ __html: `E-Mail: <a href="mailto:illustration@danielrupic.com">illustration@danielrupic.com</a>` }} />
              </Prose>
            </Col>
          </MultiCol>
         </GalleryLightboxWrapper>
        </Container>
      </Section>
    </>
  );
}
