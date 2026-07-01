import { Link, useParams } from "wouter";
import { ChevronLeft } from "lucide-react";
import { PORTFOLIO_WORKS } from "@/const";
import { useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

/**
 * Design Philosophy: Creative Portfolio - Inspired by Marga Peces
 * - Light/white background
 * - Full-width work showcase
 * - Clean typography
 */

export default function WorkDetail() {
  const params = useParams();
  const slug = params.slug;

  const work = PORTFOLIO_WORKS.find(
    (w) => w.slug === slug
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, [slug]);

  if (!work) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link href="/" className="text-gray-600 hover:text-black transition-colors">
            Volver a trabajos
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = PORTFOLIO_WORKS.findIndex(
    (w) => w.slug === slug
  );
  
  const nextWork =
    PORTFOLIO_WORKS[(currentIndex + 1) % PORTFOLIO_WORKS.length];
  
  const prevWork =
    PORTFOLIO_WORKS[
      (currentIndex - 1 + PORTFOLIO_WORKS.length) %
        PORTFOLIO_WORKS.length
    ];
    const getYoutubeEmbedUrl = (url: string) => {
      if (!url) return "";
    
      const regExp =
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    
      const match = url.match(regExp);
    
      return match
        ? `https://www.youtube.com/embed/${match[1]}`
        : "";
    };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b-2 border-black bg-white">
        <div className="container flex items-center justify-between py-6">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity">
          TOMÁS J. PALASI
          </Link>
          <div className="flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium hover:opacity-70 transition-opacity">
              ABOUT
            </Link>
            <Link href="/" className="text-sm font-medium hover:opacity-70 transition-opacity">
              WORK
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:opacity-70 transition-opacity">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Volver a trabajos
        </Link>
      </div>

      {/* Work Hero */}
      <section className="container pb-20">
        <div className="space-y-12">
          {/* Title and Meta */}
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {work.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600">
              <span>{work.year}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{work.category}</span>
            </div>
          </div>

{/* Imagen principal */}
{work.board && (
  <div className="w-full rounded-lg overflow-hidden bg-gray-100">
    <Zoom>
      <img
        src={work.board}
        alt={work.title}
        className="w-full h-auto object-contain cursor-zoom-in transition-all duration-300 hover:opacity-95"
      />
    </Zoom>
  </div>
)}

{/* Segunda imagen o Video */}
{work.youtube ? (
  <div className="w-full rounded-lg overflow-hidden bg-black">
    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={getYoutubeEmbedUrl(work.youtube)}
        title={work.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
) : (
  work.board2 && (
    <div className="w-full rounded-lg overflow-hidden bg-gray-100">
      <Zoom>
        <img
          src={work.board2}
          alt={work.title}
          className="w-full h-auto object-contain cursor-zoom-in transition-all duration-300 hover:opacity-95"
        />
      </Zoom>
    </div>
  )
)}

          {/* Description */}
          <div className="max-w-full">
            <h2 className="text-2xl font-bold mb-4">Acerca del proyecto</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {work.description}
            </p>
            <p className="text-gray-600">
            {work.subDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Between Works */}
      <section className="container py-20 border-t-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Previous Work */}
          <Link href={prevWork.link}>
            <div className="group cursor-pointer">
              <p className="text-sm text-gray-600 mb-4">Proyecto Anterior</p>
              <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg aspect-[3/2] bg-gray-100">
                  <img
                    src={prevWork.image}
                    alt={prevWork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold group-hover:opacity-70 transition-opacity">
                  {prevWork.title}
                </h3>
              </div>
            </div>
          </Link>

          {/* Next Work */}
          <Link href={nextWork.link}>
            <div className="group cursor-pointer">
              <p className="text-sm text-gray-600 mb-4">Siguiente Proyecto</p>
              <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg aspect-[3/2] bg-gray-100">
                  <img
                    src={nextWork.image}
                    alt={nextWork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold group-hover:opacity-70 transition-opacity">
                  {nextWork.title}
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-gray-50 py-8">
        <div className="container text-center text-sm text-gray-600">
        <p>© 2026 TJP - design. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
