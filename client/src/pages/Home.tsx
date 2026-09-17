import { Link } from "wouter";
import SiteLayout, { Globo } from "@/components/SiteLayout";
export default function Home() {
  return (
    <SiteLayout className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-eyebrow">
          <span>CARPETA CREATIVA — VOL. 01</span>
          <span>REDACCIÓN + DISEÑO + IDEAS</span>
        </div>
        <h1 id="hero-title">
          IDEAS QUE
          <br />
          SALEN DE MI
          <br />
          <span>CABEZA.</span>
        </h1>
        <div className="hero-art">
          <img
            src={`${import.meta.env.BASE_URL}images/tomas-sculpture.webp`}
            alt="Retrato escultórico de Tomás con gorro, antiparras y la lengua afuera, sostenido por una mano roja"
            width="1024"
            height="1536"
            fetchPriority="high"
          />
        </div>
        <div className="hero-intro" style="margin-top: 350px;">
          <p>
            Soy Tomi Palasi.
            <br />
            Le doy una vuelta a las cosas.
            <br />A veces, unas cuantas.
          </p>
          <Link href="/about" className="text-link">
            Conocé al de la cabeza
          </Link>
        </div>
        <Link href="/work" className="round-cta">
          <span>
            VER
            <br />
            TRABAJOS
          </span>
        </Link>
        <div className="hero-signature">Tomi Palasi</div>
        <div className="hero-bottom">
          <span>
            CON LOS PIES EN LA TIERRA.
            <br />Y LA CABEZA EN CUALQUIER LADO.
          </span>
          <Globo className="hero-globo" />
          <span>DESLIZÁ PARA CONOCERME</span>
        </div>
      </section>
      <div className="checker" aria-hidden="true" />
      <section className="manifesto">
        <span className="eyebrow">UN POCO DE LO QUE ME MUEVE</span>
        <h2>
          LA CURIOSIDAD NO PARA.
          <br />
          LA CABEZA, <em>TAMPOCO.</em>
        </h2>
        <p>
          Ingenio, estética y un poco de humor. Me gusta desarmar lo cotidiano
          para encontrar una idea que todavía no estaba ahí.
        </p>
        <Link href="/work" className="pill-link">
          Pasá a ver lo que salió
        </Link>
        <div className="manifesto-note">
          <Globo />
          <span>
            DEL GLOBO.
            <br />
            DE LAS BUENAS IDEAS.
          </span>
        </div>
      </section>
    </SiteLayout>
  );
}
