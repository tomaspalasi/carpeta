import { Link, useLocation } from "wouter";
import { useEffect, type ReactNode } from "react";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const links = [
    ["/", "Inicio"],
    ["/work", "Trabajos"],
    ["/about", "Sobre mí"],
    ["/contact", "Contacto"],
  ];
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Link href="/" className="brand" aria-label="Tomás Palasi — inicio">
        TP<span className="brand-dot">®</span>
      </Link>
      <nav aria-label="Navegación principal">
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={
              (
                href === "/work"
                  ? location.startsWith("/work")
                  : location === href
              )
                ? "page"
                : undefined
            }
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
        TOMÁS PALASI<span>®</span>
      </Link>
      <div>
        <span>Una cabeza. Muchas ideas.</span>
        <span>© {new Date().getFullYear()} · Tomás Julián Palasi</span>
      </div>
      <Link href="/contact">¿Hacemos algo? ↗</Link>
    </footer>
  );
}
export default function SiteLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`portfolio ${className}`}>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
