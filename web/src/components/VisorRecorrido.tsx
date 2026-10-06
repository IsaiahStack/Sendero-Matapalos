"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { CompressIcon, ExpandIcon } from "@/components/Icons";

const sinSuscripcion = () => () => {};

function suscribirPantallaCompleta(avisar: () => void) {
  document.addEventListener("fullscreenchange", avisar);
  return () => document.removeEventListener("fullscreenchange", avisar);
}

type Props = { titulo: string; ayuda: string };

export default function VisorRecorrido({ titulo, ayuda }: Props) {
  const contenedor = useRef<HTMLDivElement>(null);
  const [cargado, setCargado] = useState(false);
  const [mostrarAyuda, setMostrarAyuda] = useState(true);

  // El iframe se monta después de hidratar para que onLoad no se pierda.
  const hidratado = useSyncExternalStore(sinSuscripcion, () => true, () => false);
  const puedePantallaCompleta = useSyncExternalStore(
    sinSuscripcion,
    () => document.fullscreenEnabled,
    () => false,
  );
  const enPantallaCompleta = useSyncExternalStore(
    suscribirPantallaCompleta,
    () => document.fullscreenElement !== null,
    () => false,
  );

  useEffect(() => {
    if (!cargado) return;
    const t = window.setTimeout(() => setMostrarAyuda(false), 7000);
    return () => window.clearTimeout(t);
  }, [cargado]);

  const alternarPantallaCompleta = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else contenedor.current?.requestFullscreen();
  };

  return (
    <div ref={contenedor} className="relative h-full w-full overflow-hidden rounded-[1.75rem_0.6rem_1.75rem_0.6rem] bg-noche">
      {hidratado && (
        <iframe
          src="/tour/index.html"
          title={titulo}
          className="h-full w-full border-0"
          allow="fullscreen; accelerometer; gyroscope; xr-spatial-tracking"
          allowFullScreen
          onLoad={() => setCargado(true)}
        />
      )}

      {!cargado && (
        <div className="absolute inset-0 grid place-items-center bg-noche text-hueso/80">
          <div className="flex flex-col items-center gap-4">
            <span className="size-10 animate-spin rounded-full border-2 border-hueso/20 border-t-hoja" />
            <p className="text-sm">Cargando el recorrido…</p>
          </div>
        </div>
      )}

      {cargado && mostrarAyuda && (
        <div className="pointer-events-none absolute inset-x-0 bottom-18 flex sm:bottom-6 justify-center px-4">
          <p className="pointer-events-auto flex items-center gap-3 rounded-full bg-noche/85 py-2 pr-2 pl-5 text-sm text-hueso shadow-lg backdrop-blur">
            {ayuda}
            <button
              type="button"
              onClick={() => setMostrarAyuda(false)}
              className="rounded-full px-3 py-1 text-hoja hover:bg-hueso/10"
            >
              Entendido
            </button>
          </p>
        </div>
      )}

      {puedePantallaCompleta && (
        <button
          type="button"
          onClick={alternarPantallaCompleta}
          aria-label={enPantallaCompleta ? "Salir de pantalla completa" : "Ver en pantalla completa"}
          title={enPantallaCompleta ? "Salir de pantalla completa" : "Pantalla completa"}
          className="absolute right-4 bottom-4 grid size-11 place-items-center rounded-full bg-noche/85 text-hueso shadow-lg backdrop-blur transition hover:bg-noche"
        >
          {enPantallaCompleta ? <CompressIcon className="size-5" /> : <ExpandIcon className="size-5" />}
        </button>
      )}
    </div>
  );
}
