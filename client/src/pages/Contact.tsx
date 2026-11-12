import SiteLayout, { Globo } from "@/components/SiteLayout";
export default function Contact() {
  return (
    <SiteLayout className="contact-page">
      <section className="contact-content">
        <span className="eyebrow">LAS BUENAS IDEAS EMPIEZAN CON UN HOLA.</span>
        <h1>
          ¿QUÉ TENÉS
          <br />
          EN <em>MENTE</em><em className="signo">?</em>
        </h1>
        <div className="duo-contacts"><div className="contact-links"><h2>Tomi Palasi</h2>
          <a href="mailto:tomi.palasi@gmail.com">
            tomi.palasi@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/tom%C3%A1s-juli%C3%A1n-palasi-44810b251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact-links clfran"><h2>Fran Rodriguez</h2>
          <a href="mailto:franrodriguezprod@gmail.com">franrodriguezprod@gmail.com</a>
          <a href="https://www.linkedin.com/in/francisco-rodriguez-945821285/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div></div>
        <Globo className="contact-globo" />
        <p>
          Buenos Aires, Argentina.
          <br />
          Abiertos a nuevas ideas, proyectos y conversaciones.
        </p>
      </section>
    </SiteLayout>
  );
}
