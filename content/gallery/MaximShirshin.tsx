import { CDNImage } from "@/components/CDNImage";

export default function MaximShirshin() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <figure>
          <figcaption className="text-sm mt-2 text-center text-muted">Meine Zärtlichkeit</figcaption>
        </figure>
        <figure>
          <figcaption className="text-sm mt-2 text-center text-muted">Kornblumen</figcaption>
        </figure>
        <figure>
          <figcaption className="text-sm mt-2 text-center text-muted">Sieben Oliven aus Malta</figcaption>
        </figure>
      </div>

      <div className="prose max-w-none mt-8 text-neutral-800">
        <p className="font-semibold text-lg">
          Maxim Shirshin ist Softwareentwickler und Künstler. Er versucht, die Natur in verschiedenen Formen und Gestalten mit künstlerischen Mitteln zu erfassen und ihre Pracht sowie ihre Unvollkommenheiten gleichermaßen darzustellen.
        </p>
        <p>
          Ich komme ursprünglich aus Moskau. An der Universität studierte ich Mathematik und Informatik und bin seit 2001 als Softwareentwickler tätig. Ich bin ein großer Fan meines IT-Berufs und habe an großen und spannenden Projekten für Unternehmen wie Yandex, Zalando und Shopify gearbeitet. 2013 zog ich nach Berlin, Deutschland und begann 2016 meine ersten Hobby-Experimente mit naturwissenschaftlicher Malerei. Jetzt suche ich die perfekte Balance zwischen meiner Karriere im IT-Bereich und den Herausforderungen der botanischen Kunst.
        </p>
        <p>
          Maxim arbeitet mit Aquarellfarben und Farbstiften. Er interessiert sich auch für Pigmente, Herstellung der Farben und Archivierungseigenschaften von Kunstmaterialen. In seinen Werken stellt er nicht den Mensch, sondern die Lebewesen rund um uns Menschen in den Fokus.
        </p>
        <p>
          Unsere Gesellschaft engagiert sich in der Natur hauptsächlich durch Gewalt und Zerstörung. Die Kunst ist doch in der Lage, die Grausamkeit dieser Beziehung zu lindern, indem sie der Gesellschaft zeigt, dass die Dinge, die wir zerstören, immens schön und einzigartig sind.
        </p>
      </div>

      <div className="mt-8 pt-8 border-t text-sm">
        <p>Instagram: <a href="https://instagram.com/max.shirshin" target="_blank" className="font-semibold text-primary">@max.shirshin</a></p>
        <p>Free E-Book "An Engineer Who Paints": <a href="https://bit.ly/shirshin-ebook" target="_blank" className="font-semibold text-primary">https://bit.ly/shirshin-ebook</a></p>
      </div>
    </div>
  );
}
