import Link from "next/link";
import { LeafIcon } from "@/components/Icons";
import { Onda } from "@/components/Organico";
import { sitio } from "@/content/sendero";

export default function SiteFooter() {
  return (
    <>
      <Onda className="-mb-px block h-8 w-full text-pie sm:h-12" />
      <footer className="bg-pie text-hueso/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pt-8 pb-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div>
            <p className="flex items-center gap-2 font-display text-2xl text-hueso">
              <LeafIcon className="size-6 text-hoja" />
              <span>
                <span className="italic">Sendero</span> Los Matapalos
              </span>
            </p>
            <p className="mt-2 text-sm">
              {sitio.institucion} · {sitio.sede} · {sitio.campus}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <nav className="flex gap-5">
              <Link href="/" className="enlace-tallo hover:text-hueso">
                Inicio
              </Link>
              <Link href="/recorrido" className="enlace-tallo hover:text-hueso">
                Recorrido virtual
              </Link>
            </nav>
            <p className="text-hueso/45">
              © {new Date().getFullYear()} {sitio.institucion} de Costa Rica
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
