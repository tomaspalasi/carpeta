import { useState, type CSSProperties } from "react";
import { Link } from "wouter";
import { PORTFOLIO_WORKS } from "@/const";
import SiteLayout from "@/components/SiteLayout";
const filters = ["Todos", "Diseño", "Redacción", "Acción"];
export default function Works() {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [filter, setFilter] = useState("Todos");
  const works = PORTFOLIO_WORKS.filter(
    w => filter === "Todos" || w.category.includes(filter)
  );
  return (
    <SiteLayout className="works-page">
      <section className="works-heading">
        <span className="eyebrow">
          EL ARCHIVO CREATIVO /{" "}
          {String(PORTFOLIO_WORKS.length).padStart(2, "0")} PROYECTOS
        </span>
        <h1>
          FUERA DE
          <br />
          <span>MI CABEZA.</span>
        </h1>
        <p>
          Ideas que se hicieron imagen,
          <br />
          palabra y alguna que otra locura.
        </p>
        <span className="works-spark" aria-hidden="true">
          ✳
        </span>
      </section>
      <div className="work-toolbar">
        <div className="work-filters" aria-label="Filtrar trabajos">
          {filters.map(f => (
            <button
              key={f}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <span aria-live="polite">
          {String(works.length).padStart(2, "0")} trabajos
        </span>
      </div>
      <section className="poster-wall" aria-label="Proyectos">
        {works.map((work, index) => (
          <Link
            key={work.id}
            href={work.link}
            className="work-poster"
            style={
              {
                "--tilt": `${[-3, 2, -1.5, 2.5][index % 4]}deg`,
              } as CSSProperties
            }
          >
            <div className="poster-pin" aria-hidden="true" />
            <div className="poster-topline">
              <span>IDEA Nº {String(work.id).padStart(2, "0")}</span>
              <span>{work.year}</span>
            </div>
            <div className="poster-image">
              {failedImages.has(work.id) ? (
                <div className="poster-fallback">
                  <span>{String(work.id).padStart(2, "0")}</span>
                  <strong>{work.title}</strong>
                  <small>Vista previa no disponible · Ver proyecto ↗</small>
                </div>
              ) : (
                <img
                  src={work.image}
                  alt={work.title}
                  loading={index < 2 ? "eager" : "lazy"}
                  onError={() =>
                    setFailedImages(previous => new Set(previous).add(work.id))
                  }
                />
              )}
              <span className="poster-open" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="poster-caption">
              <h2>{work.title}</h2>
              <span>{work.category}</span>
            </div>
          </Link>
        ))}
      </section>
      <section className="work-end">
        <span>¿LA PRÓXIMA IDEA?</span>
        <Link href="/contact">La podemos pensar juntos. ↗</Link>
      </section>
    </SiteLayout>
  );
}
