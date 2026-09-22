import { useRef, useState } from "react";
import { Controlled as Zoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./project-gallery.css";

export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const start = useRef<{ x: number; y: number } | null>(null);
  const multiple = images.length > 1;
  const move = (direction: number) =>
    setIndex(current => (current + direction + images.length) % images.length);
  if (!images.length) return null;

  return (
    <section
      className="project-gallery"
      aria-label={`Imágenes de ${title}`}
      aria-roledescription={multiple ? "carrusel" : undefined}
      onKeyDown={event => {
        if (
          !multiple ||
          zoomed ||
          !["ArrowLeft", "ArrowRight"].includes(event.key)
        )
          return;
        event.preventDefault();
        move(event.key === "ArrowRight" ? 1 : -1);
      }}
    >
      <div
        className="project-gallery-stage"
        tabIndex={multiple ? 0 : undefined}
        onTouchStart={event => {
          start.current =
            !zoomed && event.touches.length === 1
              ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
              : null;
        }}
        onTouchMove={event => {
          if (event.touches.length !== 1) start.current = null;
        }}
        onTouchCancel={() => {
          start.current = null;
        }}
        onTouchEnd={event => {
          const point = start.current;
          start.current = null;
          if (!point || zoomed || !multiple) return;
          const dx = event.changedTouches[0].clientX - point.x;
          const dy = event.changedTouches[0].clientY - point.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5)
            move(dx < 0 ? 1 : -1);
        }}
      >
        <Zoom
          key={images[index]}
          isZoomed={zoomed}
          onZoomChange={setZoomed}
          zoomMargin={16}
          a11yNameButtonZoom="Ampliar imagen"
          a11yNameButtonUnzoom="Cerrar imagen ampliada"
        >
          <img
            src={images[index]}
            alt={`${title} — imagen ${index + 1} de ${images.length}`}
            className="project-gallery-image"
          />
        </Zoom>
      </div>
      {multiple && (
        <div className="project-gallery-controls">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Imagen anterior"
          >
            Anterior
          </button>
          <div className="project-gallery-position">
            <span aria-live="polite" aria-atomic="true">
              {index + 1} / {images.length}
            </span>
            <div className="project-gallery-dots" aria-label="Elegir imagen">
              {images.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  aria-label={`Ver imagen ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Imagen siguiente"
          >
            Siguiente
          </button>
        </div>
      )}
    </section>
  );
}
