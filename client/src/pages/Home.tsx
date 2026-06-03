import { Link } from "wouter";
import { PORTFOLIO_WORKS } from "@/const";

/**
 * Design Philosophy: Creative Portfolio - Inspired by Marga Peces
 * - Light/white background
 * - Masonic grid layout with varying image sizes
 * - Titles below images
 * - Minimalist navigation
 * - Playful decorative elements
 */

export default function Home() {
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

      {/* Works Grid - Masonic Layout */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
          {PORTFOLIO_WORKS.map((work, index) => {
            // Varying heights for masonic effect
            const heights = ["h-100", "h-100", "h-100", "h-100"];
            const colSpans = ["md:col-span-1", "md:col-span-2", "md:col-span-1", "md:col-span-2"];
            
            return (
              <Link key={work.id} href={work.link}>
                <div className={`group cursor-pointer ${colSpans[index % 4]}`}>
                  <div className={`relative overflow-hidden bg-gray-100 ${heights[index % 4]}`}>
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg md:text-xl font-bold group-hover:opacity-70 transition-opacity">
                      {work.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{work.year}</p>
                  </div>
                </div>
              </Link>
            );
          })}
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
