import { Link } from "wouter";
// import foto1 from "./../../public/imgs/about/1.jpeg";
// import foto2 from "./../../public/imgs/about/2.jpeg";
// import foto3 from "./../../public/imgs/about/3.jpeg";
// import gif from "./../../public/imgs/about/4.gif";

export default function About() {
  // Array con las URLs de tus 4 fotos
  // const photos = [
  //   foto1, foto2, foto3, gif, 
  // ];

  const photos = [
    "https://i.imgur.com/ViA9r5i.jpeg",
    "https://i.imgur.com/YLZLA1i.jpeg",
    "https://i.imgur.com/7fsiozs.jpeg",
    "https://i.imgur.com/YfxuKp5.gif",
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b-2 border-black bg-white">
        <div className="container flex items-center justify-between py-6">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity">
          TOMÁS J. PALASI
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:opacity-70 transition-opacity">
              ABOUT
            </Link>
            <Link href="/" className="text-sm font-medium hover:opacity-70 transition-opacity">
              WORK
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:opacity-70 transition-opacity">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Texto a la izquierda */}
          <div className="md:col-span-2">
            <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
              About Tomi Palasi
            </h1>

            <div className="space-y-8 text-lg leading-relaxed">
              <p>
                Soy Tomás Julián Palasi
              </p>

              <p>
                Esquelense de nacimiento. La vida me fue llevando por diferentes partes del mapa como Trelew (Chubut ), Mar del Plata (Buenos Aires), 25 de Mayo (Buenos Aires) y finalmente, hoy tiro ideas desde Parque Chacabuco (Capital Federal).
              </p>

              <p>
                En el camino estudié Diseño Industrial y Desarrollo Web, una mezcla rara que me dejó una obsesión: desarmar la realidad para volverla a armar con un toque de ingenio, estética, humor y funcionalidad.
              </p>

              <p>
              Me gustan los tatuajes, el ski, el surf, el bodyboard y la naturaleza. Cuando no estoy maquinando ideas o escuchando música, me meto en partidas de rol de mesa, un espacio donde la cabeza explota sin límites en cada decisión. En mis tiempos libres me dedico a pensar conceptos cómicos y ver cómo bajarlos a la realidad.
              </p>

              <p>
              Actualmente estudio en Brother Buenos Aires, el lugar donde encontré el espacio para potenciar todo esto. Creo en las buenas ideas, en el trabajo en dupla y en cranear proyectos copados que valgan la pena. Podés ver un poco de todo eso <Link href="/" className="text-sm font-medium hover:opacity-70 transition-opacity">
                acá
              </Link>.
              </p>
            </div>
          </div>

          {/* Cuadrícula de fotos a la derecha */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-4">
              {photos.map((photo, index ) => (
                <div key={index} className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={photo}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-gray-50 py-8">
        <div className="container text-center text-sm text-gray-600">
        <p>© 2026 TJP - design. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}