import { useState, type CSSProperties } from "react";
import { Link } from "wouter";
import {
  WORK_SECTIONS,
  getSectionWorks,
  type WorkSection,
} from "@/lib/workSections";
import SiteLayout from "@/components/SiteLayout";
const filters = ["Todos", "Diseño", "Redacción", "Acción"];
function Works({ section = "work" }: { section?: WorkSection }) {
  const config = WORK_SECTIONS[section];
  const sectionWorks = getSectionWorks(section);
  const sectionFilters = filters.filter(
    f => f === "Todos" || sectionWorks.some(w => w.category.includes(f))
  );
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [filter, setFilter] = useState("Todos");
  const works = sectionWorks.filter(
    w => filter === "Todos" || w.category.includes(filter)
  );
  return (
    <SiteLayout className="works-page">
      <section className="works-heading">
        <span className="eyebrow">
          {config.eyebrow} / {String(sectionWorks.length).padStart(2, "0")}{" "}
          PROYECTOS
        </span>
        <h1>
          {config.title}
          <br />
          <span>{config.subtitle}</span>
        </h1>
        <p>{config.description}</p>
      </section>
      <div className="work-toolbar">
        <div className="work-filters" aria-label="Filtrar trabajos">
          {sectionFilters.map(f => (
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
                  <small>Vista previa no disponible · Ver proyecto</small>
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
        <Link href="/contact">La podemos pensar juntos.</Link>
      </section>
    </SiteLayout>
  );
}

export function Ideas() {
  return <Works key="ideas" section="ideas" />;
}
export function RealTimes() {
  return <Works key="real-times" section="realTimes" />;
}

export default function SelectedWorks() {
  return <Works key="work" section="work" />;
}
