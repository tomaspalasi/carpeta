import {
  WORK_SECTIONS,
  getWorkSection,
  getSectionWorks,
} from "@/lib/workSections";
import { SiteHeader, SiteFooter } from "@/components/SiteLayout";
import { Link, useParams } from "wouter";
import { PORTFOLIO_WORKS } from "@/const";
import { useEffect } from "react";
import ProjectGallery from "@/components/ProjectGallery";

/**
 * Design Philosophy: Creative Portfolio - Inspired by Marga Peces
 * - Light/white background
 * - Full-width work showcase
 * - Clean typography
 */

export default function WorkDetail() {
  const params = useParams();
  const slug = params.slug;

  const work = PORTFOLIO_WORKS.find(w => w.slug === slug);

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
          <Link
            href="/work"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Volver a trabajos
          </Link>
        </div>
      </div>
    );
  }

  const section = getWorkSection(work.id);
  const sectionConfig = WORK_SECTIONS[section];
  const sectionWorks = getSectionWorks(section);
  const currentIndex = sectionWorks.findIndex(w => w.id === work.id);
  const nextWork = sectionWorks[(currentIndex + 1) % sectionWorks.length];
  const prevWork =
    sectionWorks[
      (currentIndex - 1 + sectionWorks.length) % sectionWorks.length
    ];
  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return "";

    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;

    const match = url.match(regExp);

    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  return (
    <div className="portfolio detail-page">
      <SiteHeader />
      <main id="main">
        {/* Back Button */}
        <div className="container py-8">
          <Link
            href={sectionConfig.path}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            Volver a {sectionConfig.label}
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

            <ProjectGallery
              key={work.slug}
              title={work.title}
              images={Object.entries(work)
                .filter(
                  ([key, value]) =>
                    /^board\d*$/.test(key) &&
                    typeof value === "string" &&
                    value.trim().length > 0
                )
                .sort(
                  ([a], [b]) =>
                    Number(a.slice(5) || 1) - Number(b.slice(5) || 1)
                )
                .map(([, value]) => value as string)}
            />

            {work.youtube && (
              <div className="w-full rounded-lg overflow-hidden bg-black">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={getYoutubeEmbedUrl(work.youtube)}
                    title={work.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Description */}
            <div className="max-w-full">
              <h2 className="text-2xl font-bold mb-4">Acerca del proyecto</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {work.description}
              </p>
              <p className="text-gray-600">{work.subDescription}</p>
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
      </main>
      <SiteFooter />
    </div>
  );
}
