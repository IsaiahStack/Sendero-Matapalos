"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { LeafIcon } from "@/components/Icons";
import ThemeToggle from "@/components/ThemeToggle";

const enlaces = [
  { href: "/", texto: "Inicio", corto: "Inicio" },
  { href: "/recorrido", texto: "Recorrido virtual", corto: "Recorrido" },
] as const;

function suscribirScroll(avisar: () => void) {
  window.addEventListener("scroll", avisar, { passive: true });
  return () => window.removeEventListener("scroll", avisar);
}
const bajoLaPortada = () => window.scrollY > 48;

export default function SiteHeader() {
  const pathname = usePathname();
  const enInicio = pathname === "/";
  const desplazado = useSyncExternalStore(suscribirScroll, bajoLaPortada, () => false);
  // Sobre la foto de portada el encabezado es transparente y de texto claro.
  const sobreFoto = enInicio && !desplazado;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        sobreFoto
          ? "border-transparent bg-transparent text-hueso"
          : "border-linea bg-fondo/85 text-texto backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <LeafIcon
            className={`hidden size-6 shrink-0 origin-bottom-left min-[400px]:block transition-transform duration-700 group-hover:animate-[mecer_2.4s_ease-in-out_infinite] ${
              sobreFoto ? "text-hoja" : "text-acento"
            }`}
          />
          <span className="font-display text-base tracking-tight whitespace-nowrap sm:text-lg">
            <span className="hidden italic sm:inline">Sendero </span>Los Matapalos
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <ul className="flex items-center gap-0.5 text-sm">
            {enlaces.map(({ href, texto, corto }) => {
              const activo = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={activo ? "page" : undefined}
                    className={`rounded-full px-2 py-2 sm:px-3 transition-colors ${
                      activo
                        ? sobreFoto
                          ? "bg-hueso/15"
                          : "bg-superficie-2"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    <span className="hidden sm:inline">{texto}</span>
                    <span className="sm:hidden">{corto}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle className={sobreFoto ? "hover:bg-hueso/15" : "hover:bg-superficie-2"} />
        </div>
      </nav>
    </header>
  );
}
