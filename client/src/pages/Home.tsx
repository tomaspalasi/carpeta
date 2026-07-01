import { Link } from "wouter";
import { PORTFOLIO_WORKS } from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-black bg-white">
        <div className="px-8 py-6 flex items-center justify-between">
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

{/* Works Grid */}
<section>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
    {PORTFOLIO_WORKS.map((work) => (
      <Link key={work.id} href={work.link}>
        <div className="group relative aspect-video overflow-hidden cursor-pointer">
          {/* Imagen */}
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-center justify-center">
            <div className="text-center text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-2xl font-bold tracking-wide">
                {work.title}
              </h3>
              <p className="mt-2 text-sm tracking-[0.25em] uppercase opacity-80">
                {work.year}
              </p>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-black py-8">
  <div className="text-center text-sm text-gray-600">
    © 2026 TJP – design. Todos los derechos reservados.
  </div>
</footer>
    </div>
  );
}
