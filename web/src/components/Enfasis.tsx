/** Muestra en cursiva (y en color de acento) las partes del texto escritas entre _guiones bajos_. */
export default function Enfasis({ texto, clase = "text-acento" }: { texto: string; clase?: string }) {
  return texto.split(/_(.+?)_/).map((parte, i) =>
    i % 2 === 1 ? (
      <em key={i} className={`italic ${clase}`}>
        {parte}
      </em>
    ) : (
      parte
    ),
  );
}
