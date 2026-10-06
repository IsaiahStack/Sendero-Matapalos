import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import { sitio } from "@/content/sendero";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  // Dirección pública del sitio, para las vistas previas al compartir en redes.
  metadataBase: new URL(process.env.SITIO_URL ?? "http://localhost:3000"),
  title: {
    default: `${sitio.nombre} · Recorrido virtual 360°`,
    template: `%s · ${sitio.nombre}`,
  },
  description: sitio.descripcion,
  openGraph: {
    title: `${sitio.nombre} · Recorrido virtual 360°`,
    description: sitio.descripcion,
    locale: "es_CR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#111a14",
};

// Aplica el tema guardado antes de pintar la página (oscuro si no hay preferencia).
const scriptTema = `(function(){try{if(localStorage.getItem("tema")==="claro")document.documentElement.setAttribute("data-tema","claro")}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-tema="oscuro"
      suppressHydrationWarning
      className={`${instrument.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
