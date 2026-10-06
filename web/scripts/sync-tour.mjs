// Copia el recorrido de Marzipano (../app-files) a public/tour para que Next.js lo sirva.
// - Las teselas (tiles) solo se copian si faltan o cambiaron de tamaño/fecha.
// - En la copia de style.css se cambian los grises por verdes del sitio; el original no se toca.
// Uso: node scripts/sync-tour.mjs   (se ejecuta solo antes de `dev` y `build`)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const src = path.resolve(root, "..", "app-files");
const dest = path.resolve(root, "public", "tour");

if (!fs.existsSync(path.join(src, "index.html"))) {
  console.error(`[sync-tour] No se encontró el recorrido en ${src}`);
  process.exit(1);
}

const recolor = (css) =>
  css
    .replaceAll("58,68,84", "22,46,33") // barras y listas
    .replaceAll("103,115,131", "52,96,64"); // botones y elemento activo

const transforms = { "style.css": recolor };

let copied = 0;
let checked = 0;

function sync(from, to) {
  const stat = fs.statSync(from);
  if (stat.isDirectory()) {
    fs.mkdirSync(to, { recursive: true });
    for (const name of fs.readdirSync(from)) sync(path.join(from, name), path.join(to, name));
    return;
  }
  checked++;
  const rel = path.relative(src, from).replaceAll("\\", "/");
  const transform = transforms[rel];
  if (transform) {
    const out = transform(fs.readFileSync(from, "utf8"));
    if (!fs.existsSync(to) || fs.readFileSync(to, "utf8") !== out) {
      fs.writeFileSync(to, out);
      copied++;
    }
    return;
  }
  if (fs.existsSync(to)) {
    const prev = fs.statSync(to);
    if (prev.size === stat.size && prev.mtimeMs >= stat.mtimeMs) return;
  }
  fs.copyFileSync(from, to);
  copied++;
}

sync(src, dest);
console.log(`[sync-tour] ${checked} archivos revisados, ${copied} copiados → public/tour`);
