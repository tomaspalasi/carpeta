import { Link } from "wouter";
import SiteLayout, { Globo } from "@/components/SiteLayout";
export default function Home() {
  return (
    <SiteLayout className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art herototi">
          <img
            src={`${import.meta.env.BASE_URL}images/busto.png`}
            alt="Retrato escultórico de Tomás con gorro, antiparras y la lengua afuera, sostenido por una mano roja"
            width="1024"
            height="1536"
            fetchPriority="high"
          />
        </div>
                <h1 id="hero-title">
          IDEAS QUE
          <br />
          SALEN DE
          <br />
          <span>DOS</span><span className="uno"> CABEZAS</span>
          <span className="dos">.</span>
        </h1>
        <Link href="/work" className="round-cta">
          <span>
            VER
            <br />
            TRABAJOS
          </span>
        </Link>
        <div className="hero-art hero-art-fran">
          <img src={`${import.meta.env.BASE_URL}images/fran-busto.webp`} alt="Busto de Fran sostenido por una mano azul" width="1024" height="1536" fetchPriority="high" />
        </div>
      </section>
      <div className="contour-band" aria-hidden="true" />
      <Globo className="contact-globo" />
    </SiteLayout>
  );
}
