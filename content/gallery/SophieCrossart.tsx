import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Prose } from '@/components/ui/Prose';
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox';
import { MultiCol, Col } from '@/components/ui/Layout';

export default function SophieCrossart() {
  return (
    <>
      <Section className="pb-0 pt-32">
        <Container>
          <Heading as="h1" className="mb-0 text-center">{ "Sophie Crossart" }</Heading>
        </Container>
      </Section>

      <Section>
        <Container>
         <GalleryLightboxWrapper>
          <MultiCol>
            
            <Col>
              <GalleryLightboxItem
                localPreview="gallery/sophie-crossart/image-1.jpg"
                localFull={"gallery/sophie-crossart/image-1-full.jpg"}
                alt=""
                title=""
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                
              </Prose>
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/sophie-crossart/image-2.jpg"
                localFull={"gallery/sophie-crossart/image-2-full.jpg"}
                alt=""
                title=""
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                
              </Prose>
            </Col>

            <Col>
              <GalleryLightboxItem
                localPreview="gallery/sophie-crossart/image-3.jpg"
                localFull={"gallery/sophie-crossart/image-3-full.jpg"}
                alt=""
                title="Sophie ist eine botanische Künstlerin und Illustratorin, die mit Aquarellfarben auf Papier undPergament malt. | In unserem modernen digitalen Zeitalter ist das Malen der Natur ihre Art, ein Gefühl von Authentizität, Verbundenheit und Gewissheit im Leben zu bewahren. Im Mittelpunkt ihrer Arbeit steht ihre Faszination für komplizierte natürliche Details. Sie beobachtet und isoliert diese sorgfältig in ihre Bilder, um die Erfüllung einzufangen, die wir erfahren, wenn wir auf etwas scheinbar Unbedeutendes stoßen, das sich aber als liebevoll schön herausstellt. | Indem sie die flüchtigen Qualitäten, die sie in der Natur findet, auf Kunstwerke überträgt, möchtetSophie sie zu eine bleibende Erfahrung und Quelle der Vertrautheit und Inspiration machen. Indemsie ihre botanischen Motive gelegentlich mit Gegenständen aus der Naturgeschichte kombiniert,erforscht sie die Beziehung der Menschheit zu den größeren Themen Wandel und Zeit. Ihre eigeneInterpretation von „Memento Mori“ plädiert für die Erfahrung der Schönheit des Lebens statt derAngst für Verlust. Momentan arbeitet Sie an eine Serie der die grandiose Strukturen des Weltraumverbindet mit die Einzigartigkeit der irdische Natur — der Natur als Teil des Alls. | Sophie studierte Kunstgeschichte in den Niederlanden und Deutschland und promovierte inMünchen. Ihre Werke sind geprägt von ihrem akademischen Forschung nach der historischenAbbildung des Alltags und der Natur. Sophie lebt in Heidelberg, Deutschland, und arbeitet sowohlan kommerziellen als auch privaten Aufträgen und Zusammenarbeiten. Ihre Werke werdenweltweit gesammelt.&nbsp;"
                width={1200}
                height={900}
              />
              <Prose className="text-center text-sm md:text-sm">
                <p dangerouslySetInnerHTML={{ __html: `<strong>Sophie ist eine botanische Künstlerin und Illustratorin, die mit Aquarellfarben auf Papier und</strong><br><strong>Pergament malt.</strong>` }} />
                <p dangerouslySetInnerHTML={{ __html: `In unserem modernen digitalen Zeitalter ist das Malen der Natur ihre Art, ein Gefühl von Authentizität, Verbundenheit und Gewissheit im Leben zu bewahren. Im Mittelpunkt ihrer Arbeit steht ihre Faszination für komplizierte natürliche Details. Sie beobachtet und isoliert diese sorgfältig in ihre Bilder, um die Erfüllung einzufangen, die wir erfahren, wenn wir auf etwas scheinbar Unbedeutendes stoßen, das sich aber als liebevoll schön herausstellt.` }} />
                <p dangerouslySetInnerHTML={{ __html: `<br>Indem sie die flüchtigen Qualitäten, die sie in der Natur findet, auf Kunstwerke überträgt, möchtet<br>Sophie sie zu eine bleibende Erfahrung und Quelle der Vertrautheit und Inspiration machen. Indem<br>sie ihre botanischen Motive gelegentlich mit Gegenständen aus der Naturgeschichte kombiniert,<br>erforscht sie die Beziehung der Menschheit zu den größeren Themen Wandel und Zeit. Ihre eigene<br>Interpretation von „Memento Mori“ plädiert für die Erfahrung der Schönheit des Lebens statt der<br>Angst für Verlust. Momentan arbeitet Sie an eine Serie der die grandiose Strukturen des Weltraum<br>verbindet mit die Einzigartigkeit der irdische Natur — der Natur als Teil des Alls.` }} />
                <p dangerouslySetInnerHTML={{ __html: `<br>Sophie studierte Kunstgeschichte in den Niederlanden und Deutschland und promovierte in<br>München. Ihre Werke sind geprägt von ihrem akademischen Forschung nach der historischen<br>Abbildung des Alltags und der Natur. Sophie lebt in Heidelberg, Deutschland, und arbeitet sowohl<br>an kommerziellen als auch privaten Aufträgen und Zusammenarbeiten. Ihre Werke werden<br>weltweit gesammelt.&nbsp;` }} />
                <p dangerouslySetInnerHTML={{ __html: `Homepage: <a className="text-primary hover:underline" target="_blank" href="https://www.sophiecrossart.com">www.sophiecrossart.com</a><br>Instagram: <a className="text-primary hover:underline" target="_blank" href="https://www.instagram.com/sophiecrossart">www.instagram.com/sophiecrossart</a><br>E-mail: <a href="mailto:contact@sophiecrossart.com">contact@sophiecrossart.com</a>` }} />
              </Prose>
            </Col>
          </MultiCol>
         </GalleryLightboxWrapper>
        </Container>
      </Section>
    </>
  );
}
