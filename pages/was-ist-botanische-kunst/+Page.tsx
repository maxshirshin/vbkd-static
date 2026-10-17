export default Page

import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'
import { Grid, Col } from '@/components/ui/Layout'

function Page() {
  return (
    <Grid>
      <Col lg={12} md={12} sm={12}>
        <Heading as="h1" className="text-center">
          Was ist botanische Kunst?
        </Heading>
        <Prose>
          <p>
            Botanische Kunst ist der Schnittpunkt von Wissenschaft und Kunst. Sie ist die
            sorgfältige und kunstvolle Darstellung von Pflanzen, Pilzen und Flechten auf der
            Grundlage direkter Beobachtung und eines gründlichen Verständnisses ihrer Struktur.
            Jedes botanische Kunstwerk muss botanisch korrekt sein und die Form, Farbe, Proportionen
            sowie die charakteristischen Merkmale des Motivs originalgetreu wiedergeben, während es
            dem Künstler gleichzeitig ermöglicht, eine ästhetisch ansprechende Komposition zu
            schaffen.
          </p>
          <p>
            Seit Jahrhunderten spielen Künstler eine wesentliche Rolle bei der Dokumentation des
            Pflanzenreichs. Lange vor der Erfindung der Fotografie schufen botanische Künstler und
            Illustratoren die visuellen Aufzeichnungen, die von Medizinern, Botanikern,
            Gartengestaltern und Gärtnern zur Identifizierung und Erforschung von Pflanzen genutzt
            wurden. Auch heute noch führt die botanische Kunst diese reiche Tradition fort und
            verbindet wissenschaftliche Erkenntnisse mit künstlerischem Können, um Neugier,
            Wertschätzung und ein tieferes Verständnis für die Natur zu wecken.
          </p>
          <p>
            Botanische Künstler arbeiten, wann immer möglich, mit lebenden Exemplaren und beobachten
            ihre Motive während der verschiedenen Wachstumsstadien genauestens. Dieser Prozess
            erfordert Geduld, Disziplin und Liebe zum Detail, offenbart aber auch die
            außergewöhnliche Vielfalt, Komplexität und Schönheit von Pflanzen, die oft unbemerkt
            bleibt.
          </p>
          <p>
            Obwohl die moderne Fotografie die Art und Weise, wie wir die Natur dokumentieren,
            verändert hat, bleibt die botanische Kunst von einzigartigem Wert. Ein Künstler kann
            verschiedene Phasen des Lebenszyklus einer Pflanze in einem einzigen Bild vereinen,
            komplexe Strukturen verdeutlichen und wichtige Merkmale hervorheben – mit einem Maß an
            Verständnis und Interpretation, das Fotos allein nicht erreichen können.
          </p>
        </Prose>
      </Col>
    </Grid>
  )
}
