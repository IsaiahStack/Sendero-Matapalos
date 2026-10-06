import type { Metadata } from "next";
import VisorRecorrido from "@/components/VisorRecorrido";
import { recorrido } from "@/content/sendero";

export const metadata: Metadata = {
  title: recorrido.titulo,
  description: "Explora en 360° el Sendero Los Matapalos del Campus Liberia de la Universidad Nacional.",
};

export default function Recorrido() {
  return (
    <main className="h-[100dvh] px-2 pt-[4.5rem] pb-2 sm:px-3 sm:pb-3">
      <h1 className="sr-only">{recorrido.titulo}</h1>
      <VisorRecorrido titulo={`${recorrido.titulo} del Sendero Los Matapalos`} ayuda={recorrido.ayuda} />
    </main>
  );
}
