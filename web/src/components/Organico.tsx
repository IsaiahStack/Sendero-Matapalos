// Detalles orgánicos y botánicos que se repiten en el sitio.

type Props = { className?: string };

/** Lámina botánica de una hoja de Ficus (matapalo), dibujada a línea. */
export function HojaFicus({ className }: Props) {
  const venas = [44, 64, 84, 104, 124, 144, 162];
  return (
    <svg
      viewBox="0 0 120 220"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M60 10C92 38 104 104 60 186 16 104 28 38 60 10z" />
      <path d="M60 14v196" />
      {venas.map((y, i) => {
        const largo = 26 - Math.abs(i - 3) * 3;
        return (
          <g key={y}>
            <path d={`M60 ${y}q${largo * 0.55} -4 ${largo} -${largo * 0.55}`} />
            <path d={`M60 ${y}q-${largo * 0.55} -4 -${largo} -${largo * 0.55}`} />
          </g>
        );
      })}
    </svg>
  );
}

/** Borde ondulado para separar secciones, como la orilla de un camino. */
export function Onda({ className }: Props) {
  return (
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M0 56c96-18 196-34 318-28 150 8 238 46 404 44 170-2 262-50 430-52 120-1 210 18 288 34V90H0z"
      />
    </svg>
  );
}

/** Trazo hecho a mano para subrayar una palabra. */
export function TrazoMano({ className }: Props) {
  return (
    <svg viewBox="0 0 300 18" preserveAspectRatio="none" className={className} fill="none" aria-hidden>
      <path
        d="M3 12C52 6 104 4 156 6c48 2 92 5 141 2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
