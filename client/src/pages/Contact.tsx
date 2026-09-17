import SiteLayout, { Globo } from "@/components/SiteLayout";
export default function Contact() {
  return (
    <SiteLayout className="contact-page">
      <section className="contact-content">
        <span className="eyebrow">LAS BUENAS IDEAS EMPIEZAN CON UN HOLA.</span>
        <h1>
          ¿QUÉ TENÉS
          <br />
          EN <em>MENTE?</em>
        </h1>
        <div className="contact-links">
          <a href="mailto:tomi.palasi@gmail.com">
            tomi.palasi@gmail.com <span>↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tom%C3%A1s-juli%C3%A1n-palasi-44810b251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>
        </div>
        <Globo className="contact-globo" />
        <p>
          Buenos Aires, Argentina.
          <br />
          Abierto a nuevas ideas, proyectos y conversaciones.
        </p>
      </section>
    </SiteLayout>
  );
}
