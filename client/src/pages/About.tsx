import SiteLayout from "@/components/SiteLayout";
import { Link } from "wouter";
export default function About() {
  const photos = [
    "https://i.imgur.com/YLZLA1i.jpeg",
    "https://i.imgur.com/qxvJtvb.jpeg",
    "https://i.imgur.com/YfxuKp5.gif",
  ];

  const photos2 = [
    "https://i.imgur.com/0YRk3Zg.jpeg",
    "https://i.imgur.com/0GO8z2A.jpeg",
    "https://i.imgur.com/OHASuvk.jpeg",
  ];


  return (
    <SiteLayout className="about-page">
      {/* Content */}
      <section className="container py-20 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Texto a la izquierda */}
          <div className="md:col-span-3">
            <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
              <span className="titlework">LAS CABEZAS</span>
              <br />
              <span className="primero"> DETRÁS</span>
              <span className="segundo">.</span>
            </h1>

            <div className="space-y-8 text-lg leading-relaxed">
              <p>Somos Tomi Palasi y Fran Rodriguez. Dos cabezas, una dupla creativa. Compartimos esta carpeta para mostrar las ideas que nos gusta pensar y hacer.</p>

              <h2 className="duo-person-title">Fran Rodriguez</h2>

              <p>Un entrerriano que disfruta viajar y conocer el mundo, aunque por ahora vivo en Capital. Hincha de Boca.</p>
              <p>Me gusta el deporte, caminar, el arte y todo lo que mantenga a la cabeza y el cuerpo en movimiento. También las cámaras y la música: me encanta hacer videoclips, documentar mi vida y ponerle música de fondo. Una vez intenté hacer música y es re difícil, así que eso se lo dejo a los que saben.</p>
              <p>Nunca me gustó mucho el cine, pero estudié cine… o mejor dicho: “Producción y Realización Audiovisual”. Trabajé en televisión, radio, medios y redes. También organizó una fiesta muy divertida y supe ser un vendedor bastante exitoso en Facebook Marketplace.</p>
              <p>Por suerte, en 2026 encontré el mundo de la publicidad. Hoy estoy en Brother, donde conocí a Tomi y a un montón de creativos talentosos. Es un lugar hermoso para impulsar la creatividad y las buenas ideas (algunas no tanto), y me pone muy contento lo que pudimos hacer juntos y lo que van a encontrar en esta carpeta</p>  
              {/* Cuadrícula de fotos a la derecha */}
              <div className="md:col-span-3">
                <div className="about-photos">
                  {photos2.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden bg-gray-100"
                    >
                      <img
                        src={photo}
                        alt={`Francisco Rodriguez — foto ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="duo-person-title-tomi">Tomi Palasi</h2>

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
                Actualmente estudio en Brother Buenos Aires, el lugar donde lo
                encontré al Checha (Fran) y al espacio para potenciar todo esto. Creo en las buenas
                ideas, en el trabajo en dupla y en cranear proyectos copados que
                valgan la pena.
              </p>

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

              <Link href="/contact">Hablemos de la próxima idea.</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
