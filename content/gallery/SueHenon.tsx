import { CDNImage } from "@/components/CDNImage";

export default function SueHenon() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <figure>
          <figcaption className="text-sm mt-2 text-center text-muted">Fritilla (Fritillaria meleagris) - Schachblume</figcaption>
        </figure>
        <figure>
          <figcaption className="text-sm mt-2 text-center text-muted">Sonnenhut Gelb I (Echinacea)</figcaption>
        </figure>
        <figure>
          <figcaption className="text-sm mt-2 text-center text-muted">Lupinen II (Lupinus)</figcaption>
        </figure>
      </div>

      <div className="prose max-w-none mt-8 text-neutral-800">
        <p className="font-semibold text-lg">
          Sue Hénon wurde am 8. Januar 1961 in Hayes, Middlesex, England geboren. Sie lebt seit 1987 in Deutschland und ist mit dem französischen Künstler Sylvain Hénon verheiratet. Gemeinsam betreiben sie das Atelier Hénon in Dieburg, Hessen.
        </p>
        <p>
          Meine Schwerpunkte liegen in der botanischen Malerei und Illustration. Am liebsten verwende ich Farbstifte, Graphit, Aquarelle, Öl und Drucktechniken. Ich unterrichte Botanische Kunst in meinem Atelier und gebe Workshops in Botanischen Gärten, Schulen und Museen.
        </p>
        <h4 className="font-semibold mt-4">Warum fasziniert mich Botanische Malerei?</h4>
        <p>
          Schon als Kind war ich fasziniert von den Blumen und Pflanzen im Garten meiner Mutter. Ich fand Frieden mit mir selbst, wenn ich durch die Wälder ging und die Natur mit all ihren kleinen Überraschungen beobachtete. Jede Blüte, jedes Blatt und jeder Stängel waren mir wichtig.
        </p>
      </div>

      <div className="mt-8 pt-8 border-t text-sm">
        <p>Atelier Hénon, Steinstraße 23, 64807 Dieburg</p>
        <p>Webseite: <a href="https://www.atelierhenon.de/" target="_blank" className="font-semibold text-primary">www.atelierhenon.de</a></p>
        <p>Instagram: <a href="https://instagram.com/henonsue" target="_blank" className="font-semibold text-primary">@henonsue</a></p>
      </div>
    </div>
  );
}
