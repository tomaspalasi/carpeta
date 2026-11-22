import { Link } from "wouter";
import SiteLayout, { Globo } from "@/components/SiteLayout";
import "./home-centered.css";

export default function Home() {
  return (
    <SiteLayout className="home-page home-centered">
      <section className="hero" aria-labelledby="hero-title">
        <figure className="home-person home-person-fran">
          <img
            src={`${import.meta.env.BASE_URL}images/fran-busto.webp`}
            alt="Busto de Fran sostenido por una mano azul"
            width="1024"
            height="1536"
            fetchPriority="high"
          />
          <figcaption>FRAN RODRIGUEZ</figcaption>
        </figure>
        <div className="home-message">
          <h1 id="hero-title">
            IDEAS QUE<br />
            SALEN DE<br />
            <span>DOS CABEZAS</span><span className="dos">.</span>
          </h1>
          <Link href="/work" className="round-cta">
            <span>VER<br />TRABAJOS</span>
          </Link>
        </div>
        <figure className="home-person home-person-tomi">
          <img
            src={`${import.meta.env.BASE_URL}images/busto.png`}
            alt="Retrato escultórico de Tomás con gorro, antiparras y la lengua afuera, sostenido por una mano roja"
            width="1024"
            height="1536"
            fetchPriority="high"
          />
          <figcaption>TOMI PALASI</figcaption>
        </figure>
      </section>
      <div className="contour-band" aria-hidden="true" />
      <Globo className="contact-globo" />
    </SiteLayout>
  );
}
