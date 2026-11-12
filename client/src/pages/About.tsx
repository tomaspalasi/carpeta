import SiteLayout from "@/components/SiteLayout";
import { Link } from "wouter";
export default function About() {
  const photos = [
    "https://i.imgur.com/YLZLA1i.jpeg",
    "https://i.imgur.com/qxvJtvb.jpeg",
    "https://i.imgur.com/YfxuKp5.gif",
  ];

  return (
    <SiteLayout className="about-page">
      {/* Content */}
      <section className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Texto a la izquierda */}
          <div className="md:col-span-3">
            <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
              LAS CABEZAS DETRÁS.
            </h1>

            <div className="space-y-8 text-lg leading-relaxed">
              <p>Somos Tomi Palasi y Fran Rodriguez. Dos cabezas, una dupla creativa. Compartimos esta carpeta para mostrar las ideas que nos gusta pensar y hacer.</p>
              <h2 className="duo-person-title">Tomi Palasi</h2>

              <p>
                Esquelense de nacimiento. La vida me fue llevando por diferentes
                partes del mapa como Trelew (Chubut), Mar del Plata (Buenos
                Aires), 25 de Mayo (Buenos Aires) y finalmente, hoy tiro ideas
                desde Parque Chacabuco (Capital Federal).
              </p>

              <p>
                En el camino estudié Diseño Industrial y Desarrollo Web, una
                mezcla rara que me dejó una obsesión: desarmar la realidad para
                volverla a armar con un toque de ingenio, estética, humor y
                funcionalidad.
              </p>

              <p>
                Me gustan los tatuajes, el ski, el surf, el bodyboard y la
                naturaleza. Cuando no estoy maquinando ideas o escuchando
                música, me meto en partidas de rol de mesa, un espacio donde la
                cabeza explota sin límites en cada decisión. En mis tiempos
                libres me dedico a pensar conceptos cómicos y ver cómo bajarlos
                a la realidad.
              </p>

              <p>
                Actualmente estudio en Brother Buenos Aires, el lugar donde
                encontré el espacio para potenciar todo esto. Creo en las buenas
                ideas, en el trabajo en dupla y en cranear proyectos copados que
                valgan la pena.
              </p>
              <h2 className="duo-person-title">Fran Rodriguez</h2>
              <p>La otra cabeza de la dupla. Hincha de Boca y compañero de Tomi en esta carpeta de ideas.</p>
              <Link href="/contact">Hablemos de la próxima idea.</Link>
            </div>
          </div>

          {/* Cuadrícula de fotos a la derecha */}
          <div className="md:col-span-3">
            <div className="about-photos">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden bg-gray-100"
                >
                  <img
                    src={photo}
                    alt={`Tomás Palasi — foto ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
