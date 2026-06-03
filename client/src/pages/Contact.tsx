import { Link } from "wouter";
import { Linkedin } from "lucide-react";

/**
 * Design Philosophy: Creative Portfolio - Inspired by Marga Peces
 * - Light/white background
 * - Clean typography
 * - Minimalist layout
 */

export default function About() {
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

      {/* Content */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
          Get in Touch
          </h1>


      {/* Contact Section */}
      <section className="container py-16 border-t-2 border-black">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-8"></h2>
          <div className="space-y-4">
            <p>
              <a href="mailto:tomi.palasi@gmail.comm" className="hover:opacity-70 transition-opacity text-5xl md:text-2xl font-bold mb-12 leading-tight">
                tomi.palasi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
        </div>
        <div>
            <div className="flex gap-4 mt-8">
              <a href="https://www.linkedin.com/in/tom%C3%A1s-juli%C3%A1n-palasi-44810b251/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
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
