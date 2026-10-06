"use client";

import { MoonIcon, SunIcon } from "@/components/Icons";

// El ícono visible depende del atributo data-tema (vía CSS), así no hay parpadeo al hidratar.
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const alternar = () => {
    const raiz = document.documentElement;
    const nuevo = raiz.getAttribute("data-tema") === "claro" ? "oscuro" : "claro";
    raiz.setAttribute("data-tema", nuevo);
    try {
      localStorage.setItem("tema", nuevo);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label="Cambiar entre modo claro y oscuro"
      title="Cambiar entre modo claro y oscuro"
      className={`group grid size-10 place-items-center rounded-[46%_54%_52%_48%/52%_46%_54%_48%] transition-colors ${className}`}
    >
      <SunIcon className="size-[1.15rem] transition-transform duration-500 group-hover:rotate-45 claro:hidden" />
      <MoonIcon className="hidden size-[1.15rem] transition-transform duration-500 group-hover:-rotate-12 claro:block" />
    </button>
  );
}
