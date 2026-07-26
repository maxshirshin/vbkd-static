export default Page;

function Page() {
  return (
    <>
      <section className="py-16 container max-w-3xl">
        <h1 className="text-center mb-8">Startseite</h1>
        
        <div className="space-y-6 text-lg">
          <p className="font-bold">Willkommen beim Verein für Botanische Kunst Deutschland!</p>
          <p>Wir sind eine Gruppe von pflanzenbegeisterten Künstlern und Illustratoren.</p>
          <p>Wir möchten viele Menschen für die botanische Kunst begeistern und sie ermutigen sich uns anzuschließen.</p>
          <p>Professionelle und semiprofessionelle Künstler, Anfänger, Förderer und Naturinteressierte genießen die Vorteile einer Mitgliedschaft und unterstützen botanische Kunst in ganz Deutschland.</p>
          
          <hr className="my-8" />
          
          <p className="font-bold">Welcome to the German Society for Botanical Art!</p>
          <p>We are a group of plant-loving artists and illustrators.</p>
          <p>We want to arouse interest in botanical art and encourage people to join us.</p>
          <p>Professional and semi-professional artists, beginners, patrons and nature enthusiasts can enjoy the benefits of membership and support botanical art throughout Germany.</p>
        </div>
      </section>
    </>
  );
}
