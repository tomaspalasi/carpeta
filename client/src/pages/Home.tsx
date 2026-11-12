import { Link } from "wouter";
import SiteLayout, { Globo } from "@/components/SiteLayout";
export default function Home() {
  return (
    <SiteLayout className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-eyebrow">
          <span>CARPETA CREATIVA — VOL. 01</span>
          <span>REDACCIÓN DISEÑO IDEAS</span>
        </div>
        <h1 id="hero-title">
          IDEAS QUE
          <br />
          SALEN DE
          <br />
          <span>DOS CABEZAS.</span>
        </h1>
        <div className="hero-art">
          <img
            src={`${import.meta.env.BASE_URL}images/busto.png`}
            alt="Retrato escultórico de Tomás con gorro, antiparras y la lengua afuera, sostenido por una mano roja"
            width="1024"
            height="1536"
            fetchPriority="high"
          />
        </div>
        <div className="hero-art hero-art-fran">
          <img src={`${import.meta.env.BASE_URL}images/fran-busto.webp`} alt="Busto de Fran sostenido por una mano azul" width="1024" height="1536" fetchPriority="high" />
        </div>
        <div className="hero-intro">
          <p>
            Somos Tomi y Fran.
            <br />
            Le damos una vuelta a las cosas.
            <br />A veces, unas cuantas.
          </p>
          <Link href="/about" className="text-link">
            Conocé a la dupla
          </Link>
        </div>
        <Link href="/work" className="round-cta">
          <span>
            VER
            <br />
            TRABAJOS
          </span>
        </Link>
        <div className="hero-bottom">
          <span>
            CON LOS PIES EN LA TIERRA.
            <br />Y LAS CABEZAS EN CUALQUIER LADO.
          </span>
          <span>BUENOS AIRES, ARGENTINA</span>
        </div>
      </section>
      <div className="contour-band" aria-hidden="true" />
    </SiteLayout>
  );
}
