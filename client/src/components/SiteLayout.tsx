import { PORTFOLIO_WORKS } from "@/const";
import { WORK_SECTIONS, getWorkSection } from "@/lib/workSections";
import { Link, useLocation } from "wouter";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Globo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 3C11 3 4 12 4 23c0 14 20 28 20 28s20-14 20-28C44 12 37 3 24 3Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M24 3c-14 13-12 30 0 48C36 33 38 16 24 3ZM5 23h38M24 3v48M18 53h12v8H18z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
export function SiteHeader() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const closeEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeEscape);
    };
  }, [menuOpen]);
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);
  const currentWork = PORTFOLIO_WORKS.find(w => w.link === location);
  const activePath = currentWork
    ? WORK_SECTIONS[getWorkSection(currentWork.id)].path
    : location;
  const links = [
    ["/", "Inicio"],
    ["/work", "Trabajos"],
    ["/ideas", "Baúl de ideas"],
    ["/about", "Sobre mí"],
    ["/contact", "Contacto"],
  ];
  return (
    <header className="site-header" ref={headerRef}>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Link href="/" className="brand" aria-label="Tomás Palasi — inicio">
        TP<span className="brand-dot">®</span>
      </Link>
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen(open => !open)}
      >
        {menuOpen ? "Cerrar" : "Menú"}
        <span className="menu-icon" aria-hidden="true"><i /><i /><i /></span>
      </button>
      <nav id="site-navigation" data-open={menuOpen} aria-label="Navegación principal">
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            aria-current={activePath === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <span className="header-note">
        IDEAS CON PERSONALIDAD.
        <br />
        BUENOS AIRES, ARG.
      </span>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-name">
        TOMÁS JULIÁN PALASI<span>®</span>
      </Link>
      <div>
        <span>Una cabeza. Muchas ideas.</span>
        <span>© {new Date().getFullYear()} · Tomás Julián Palasi</span>
      </div>
      <Globo className="hero-globo" />
    </footer>
  );
}
export default function SiteLayout({
  children,
  className = "",
  showFooter = true,
}: {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
}) {
  return (
    <div className={`portfolio ${className}`}>
      <SiteHeader />
      <main id="main">{children}</main>
      {showFooter && <SiteFooter />}
    </div>
  );
}
