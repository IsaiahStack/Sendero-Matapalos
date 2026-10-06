import Image from "next/image";
import Link from "next/link";
import Enfasis from "@/components/Enfasis";
import SiteFooter from "@/components/SiteFooter";
import { HojaFicus, Onda, TrazoMano } from "@/components/Organico";
import {
  ArrowRightIcon,
  BookIcon,
  ChevronDownIcon,
  GlobeIcon,
  LeafIcon,
  PanoramaIcon,
} from "@/components/Icons";
import {
  cifras,
  importancia,
  importanciaTitulo,
  llamada,
  notaCifras,
  portada,
  proyecto,
  queEs,
  tarjetas,
  ubicacion,
} from "@/content/sendero";
import hero from "@/assets/hero.jpg";
import sendero from "@/assets/sendero.jpg";
import cta from "@/assets/cta.jpg";

const iconos = { "360": PanoramaIcon, libro: BookIcon, mundo: GlobeIcon };

/** Encabezado de sección al estilo de revista: número, etiqueta y una línea fina. */
function Seccion({ numero, etiqueta, claro = false }: { numero: string; etiqueta: string; claro?: boolean }) {
  return (
    <div
      className={`flex items-center gap-4 text-[0.7rem] font-semibold tracking-[0.22em] uppercase ${
        claro ? "text-hoja" : "text-acento-2"
      }`}
    >
      <span className="font-display text-base font-normal tracking-normal normal-case italic">{numero}</span>
      <span>{etiqueta}</span>
      <span className={`h-px flex-1 ${claro ? "bg-hueso/25" : "bg-linea"}`} />
    </div>
  );
}

function PieDeFoto({ numero, children }: { numero: string; children: React.ReactNode }) {
  return (
    <figcaption className="mt-3 flex gap-2 text-xs text-texto-suave">
      <span className="font-display italic">Fig. {numero}</span>
      <span aria-hidden>—</span>
      <span>{children}</span>
    </figcaption>
  );
}

export default function Inicio() {
  return (
    <div className="grano flex flex-1 flex-col">
      <main className="flex-1">
        {/* Portada */}
        <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-noche">
          <Image
            src={hero}
            alt="Matapalos de copa amplia sobre el sendero, en el Campus Liberia"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche/95 via-noche/45 to-noche/10" />
          <div className="absolute inset-x-0 top-0 -z-10 h-36 bg-gradient-to-b from-noche/70 to-transparent" />
          <div className="absolute inset-y-0 left-0 -z-10 w-full bg-gradient-to-r from-noche/60 via-noche/20 to-transparent lg:w-2/3" />

          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pt-32 pb-24 [text-shadow:0_1px_18px_rgb(13_26_18/0.45)] sm:px-6 sm:pb-32 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-hoja uppercase">
                {portada.antetitulo}
              </p>
              <h1 className="mt-5 font-display text-hueso">
                <span className="block text-3xl font-light text-hoja italic sm:text-4xl">Sendero</span>
                <span className="relative inline-block text-6xl leading-[0.95] font-normal tracking-tight sm:text-8xl lg:text-[8.5rem]">
                  Los Matapalos
                  <TrazoMano className="absolute -bottom-2 left-[38%] h-3 w-[60%] text-hoja/80 sm:-bottom-3 sm:h-4" />
                </span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-hueso/85 sm:text-xl">{portada.frase}</p>
              <a
                href="#sendero"
                className="group mt-10 inline-flex items-center gap-3 text-sm font-medium text-hueso/80 transition-colors hover:text-hueso"
              >
                <span className="grid size-9 place-items-center rounded-[46%_54%_52%_48%/52%_46%_54%_48%] border border-hueso/30 transition-colors group-hover:border-hoja">
                  <ChevronDownIcon className="size-4 transition-transform group-hover:translate-y-0.5" />
                </span>
                Conocer el sendero
              </a>
            </div>
            <p className="hidden max-w-[14rem] border-l border-hueso/25 pl-4 text-xs leading-relaxed text-hueso/65 lg:block">
              <span className="font-display text-sm text-hueso/85 italic">Fig. 01</span>
              <br />
              {portada.pieDeFoto}
              <br />
              {portada.lugar}
            </p>
          </div>
          <Onda className="absolute inset-x-0 -bottom-px h-10 w-full text-fondo sm:h-16" />
        </section>

        {/* 01 · Qué es */}
        <section id="sendero" className="luz-filtrada scroll-mt-16 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Seccion numero="01" etiqueta="El sendero" />
            <div className="mt-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-4xl leading-[1.05] font-light tracking-tight sm:text-6xl">
                  <Enfasis texto={queEs.titulo} />
                </h2>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-texto-suave">
                  {queEs.parrafos.map((p, i) => (
                    <p key={p} className={i === 0 ? "capitular text-texto" : undefined}>
                      {p}
                    </p>
                  ))}
                </div>
                <dl className="mt-10 max-w-md space-y-3">
                  {queEs.rutas.map((r) => (
                    <div key={r.nombre} className="flex items-baseline gap-3">
                      <dt className="text-sm text-texto-suave">{r.nombre}</dt>
                      <span aria-hidden className="flex-1 -translate-y-1 border-b border-dotted border-linea" />
                      <dd className="font-display text-2xl">{r.distancia}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm text-texto-suave italic">{queEs.notaRutas}</p>
              </div>
              <figure className="lg:col-span-5 lg:pt-6">
                <div className="forma-organica relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={sendero}
                    alt="Camino de tierra del sendero entre la vegetación del bosque seco"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
                <PieDeFoto numero="02">{queEs.pieDeFoto}</PieDeFoto>
              </figure>
            </div>

            <blockquote className="mx-auto mt-20 max-w-3xl border-y border-linea py-10 text-center">
              <LeafIcon className="mx-auto size-6 text-acento" />
              <p className="mt-4 font-display text-3xl leading-snug font-light text-balance italic sm:text-4xl">
                «{queEs.destacado}»
              </p>
            </blockquote>
          </div>
        </section>

        {/* 02 · Dónde está y biodiversidad */}
        <section className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Seccion numero="02" etiqueta="Ubicación y biodiversidad" />
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="relative lg:col-span-5">
                <h2 className="font-display text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl">
                  <Enfasis texto={ubicacion.titulo} />
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-texto-suave">{ubicacion.texto}</p>
                <a
                  href={ubicacion.mapaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enlace-tallo mt-6 inline-flex items-center gap-2 pb-0.5 text-sm font-medium text-acento"
                >
                  Ver en el mapa
                  <ArrowRightIcon className="size-4" />
                </a>
                <figure className="mt-12 hidden items-end gap-4 lg:flex">
                  <HojaFicus className="h-40 w-auto -rotate-12 text-acento/70" />
                  <figcaption className="pb-4 text-xs leading-relaxed text-texto-suave">
                    <span className="font-display text-sm text-texto italic">Ficus sp.</span>
                    <br />
                    Matapalo o higuerón, el árbol que da nombre al sendero.
                  </figcaption>
                </figure>
              </div>
              <div className="forma-hoja bg-superficie p-8 sm:p-12 lg:col-span-7">
                <dl className="grid grid-cols-2 gap-x-8 gap-y-10">
                  {cifras.map((c) => (
                    <div key={c.etiqueta} className="flex flex-col-reverse border-t border-linea pt-5">
                      <dt className="mt-1 text-sm text-texto-suave">{c.etiqueta}</dt>
                      <dd className="font-display text-6xl font-light sm:text-7xl">{c.valor}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-10 text-xs text-texto-suave italic">{notaCifras}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 · Importancia */}
        <section className="luz-filtrada pb-24 sm:pb-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Seccion numero="03" etiqueta="Por qué importa" />
            <h2 className="mt-10 max-w-3xl font-display text-4xl leading-[1.05] font-light tracking-tight sm:text-6xl">
              <Enfasis texto={importanciaTitulo} />
            </h2>
            <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
              {importancia.map((item, i) => (
                <article key={item.tipo} className={i === 1 ? "md:mt-16" : undefined}>
                  <figure>
                    <div
                      className={`group relative aspect-[4/5] overflow-hidden ${
                        i === 1 ? "rounded-[0.75rem_2.75rem_0.75rem_2.75rem]" : "forma-hoja"
                      }`}
                    >
                      <Image
                        src={item.imagen}
                        alt={item.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      />
                    </div>
                    <PieDeFoto numero={`0${i + 3}`}>{item.lugar}</PieDeFoto>
                  </figure>
                  <p className="mt-6 text-[0.7rem] font-semibold tracking-[0.22em] text-acento-2 uppercase">
                    Importancia {item.tipo.toLowerCase()}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{item.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-texto-suave">{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 04 · Llamada a la acción */}
        <section className="px-4 sm:px-6">
          <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[3.5rem_1rem_3.5rem_1rem] bg-noche">
            <Image
              src={cta}
              alt=""
              fill
              placeholder="blur"
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="-z-10 object-cover opacity-70"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-noche/95 via-noche/70 to-noche/5" />
            <HojaFicus className="absolute -right-6 -bottom-10 -z-10 hidden h-72 w-auto rotate-[24deg] text-hoja/25 md:block" />
            <div className="max-w-xl px-6 py-16 sm:px-14 sm:py-24">
              <Seccion numero="04" etiqueta="Recorrido virtual" claro />
              <h2 className="mt-8 font-display text-4xl leading-[1.05] font-light tracking-tight text-hueso sm:text-5xl">
                <Enfasis texto={llamada.titulo} clase="text-hoja" />
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-hueso/80">{llamada.texto}</p>
              <Link
                href="/recorrido"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-hoja py-4 pr-5 pl-6 font-semibold text-noche shadow-lg shadow-black/25 transition-colors hover:bg-hueso"
              >
                <PanoramaIcon className="size-5" />
                {llamada.boton}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Tarjetas informativas */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-3">
            {tarjetas.map((t, i) => {
              const Icono = iconos[t.icono];
              return (
                <div
                  key={t.titulo}
                  className="rounded-[2rem_0.75rem_2rem_0.75rem] border border-linea bg-superficie p-8 transition-colors hover:bg-superficie-2"
                >
                  <span
                    className="forma-organica grid size-14 place-items-center bg-acento/15 text-acento"
                    style={{ animationDelay: `${i * -6}s` }}
                  >
                    <Icono className="size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl">{t.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-texto-suave">{t.texto}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 05 · Sobre el proyecto */}
        <section className="relative overflow-hidden pb-20 sm:pb-28">
          <HojaFicus className="pointer-events-none absolute -top-10 right-[-3rem] hidden h-[26rem] w-auto rotate-[18deg] text-acento/10 lg:block" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <Seccion numero="05" etiqueta={proyecto.titulo} />
            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl leading-[1.1] font-light tracking-tight sm:text-5xl">
                  <Enfasis texto={proyecto.subtitulo} />
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-texto-suave">{proyecto.texto}</p>
              </div>
              <dl className="self-end text-sm lg:col-span-5">
                {[
                  ["Curso", proyecto.curso],
                  ["Equipo", proyecto.equipo.join(" · ")],
                  ["Profesor", proyecto.profesor],
                ].map(([dt, dd]) => (
                  <div key={dt} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-linea py-4">
                    <dt className="font-display text-texto-suave italic">{dt}</dt>
                    <dd>{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
