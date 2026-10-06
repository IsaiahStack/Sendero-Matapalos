# Sendero Los Matapalos · Sitio web

Sitio en Next.js con dos páginas:

- **Inicio** (`/`): portada, información del sendero, llamada a la acción, tarjetas, sobre el proyecto y footer.
- **Recorrido virtual** (`/recorrido`): el visor 360° de Marzipano ocupando casi toda la pantalla.

## Requisitos

- [Node.js](https://nodejs.org/) 20.9 o superior (recomendado: la versión LTS).

## Uso

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

Para producción:

```bash
npm run build
npm start
```

## Cómo se integra el recorrido de Marzipano

El recorrido sigue viviendo en `../app-files` (lo que exporta Marzipano Tool) y **no se modifica**.
Antes de `dev` y `build`, el script `scripts/sync-tour.mjs` lo copia a `public/tour/`
(carpeta ignorada por git), y la página `/recorrido` lo muestra dentro de un `iframe`.

- Si se vuelve a exportar el recorrido desde Marzipano, basta con reemplazar `../app-files`;
  la próxima vez que se corra `npm run dev` o `npm run build` se copian solo los archivos que cambiaron.
- En la copia, el script cambia los colores grises de las barras del visor por los verdes del sitio.

## Dónde editar los textos

Todo el contenido está en [`src/content/sendero.ts`](src/content/sendero.ts).
Las fuentes de cada dato y lo que falta confirmar están en [`CONTENIDO.md`](CONTENIDO.md).

## Tema claro / oscuro

El sitio abre en modo oscuro; el botón de sol/luna del menú cambia a modo claro y la preferencia se guarda
en el navegador. Los colores de ambos temas están en `src/app/globals.css` (variables `--fondo`, `--texto`,
`--acento`, etc.).

Las fotos del sitio (`src/assets/`) se generaron a partir de las mismas panorámicas 360° del recorrido.

## Despliegue

Funciona en cualquier hosting de Next.js (por ejemplo Vercel, indicando `web` como directorio raíz).
Defina la variable de entorno `SITIO_URL` con la dirección pública (por ejemplo `https://matapalos.ejemplo.cr`)
para que las vistas previas al compartir en redes sociales usen la URL correcta.
