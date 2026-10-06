// Textos del sitio. Para actualizar la información del sendero basta con editar este archivo.
// Las fuentes de cada dato están en CONTENIDO.md. Los datos marcados con «POR CONFIRMAR»
// vienen de prensa y deben validarse con la información oficial del sendero.
// En los títulos, la palabra entre _guiones bajos_ se muestra en cursiva como énfasis.

import type { StaticImageData } from "next/image";
import meliponario from "@/assets/meliponario.jpg";
import arboretum from "@/assets/arboretum.jpg";
import laguna from "@/assets/laguna.jpg";

export const sitio = {
  nombre: "Sendero Los Matapalos",
  institucion: "Universidad Nacional",
  sede: "Sede Regional Chorotega",
  campus: "Campus Liberia",
  descripcion:
    "Recorrido virtual 360° del Sendero Los Matapalos, un bosque tropical seco en el Campus Liberia de la Universidad Nacional de Costa Rica.",
};

export const portada = {
  antetitulo: "Universidad Nacional · Campus Liberia",
  titulo: "Sendero Los Matapalos",
  frase: "Un bosque tropical seco en el corazón del Campus Liberia. Recórrelo en 360°, desde donde estés.",
  pieDeFoto: "Matapalos en el punto 7 del recorrido",
  lugar: "Liberia, Guanacaste · Costa Rica",
};

export const queEs = {
  titulo: "Un bosque que _volvió_ a crecer",
  destacado: "Donde hace más de un siglo hubo una hacienda, hoy crece un bosque.",
  pieDeFoto: "Camino del sendero, punto 19 del recorrido",
  parrafos: [
    "El Sendero Los Matapalos es un espacio natural de la Universidad Nacional dedicado a la conservación y la educación ambiental. Recorre un fragmento de bosque tropical seco que creció en terrenos que hace más de un siglo formaron parte de una hacienda.",
    "Su nombre viene de los matapalos o higuerones (género Ficus), árboles de raíces y ramas enormes que abundan a lo largo del camino. El sendero nació en 2017 dentro del Programa de Gestión Ambiental Institucional de la sede y abrió a visitantes en 2019.",
  ],
  // POR CONFIRMAR: la prensa reporta 600–610 m y 1,45–1,5 km.
  rutas: [
    { nombre: "Ruta corta", distancia: "600 m" },
    { nombre: "Ruta larga", distancia: "1,5 km" },
  ],
  notaRutas: "Terreno plano, apto para todas las edades.",
};

export const ubicacion = {
  titulo: "Dónde _está_",
  texto:
    "Dentro del Campus Liberia de la Universidad Nacional, Sede Regional Chorotega, en Liberia, Guanacaste, Costa Rica. Forma parte de unas 11 hectáreas dedicadas a la conservación: 6 de bosque y 2,5 en regeneración.",
  lugar: "Liberia, Guanacaste, Costa Rica",
  mapaUrl: "https://www.google.com/maps/search/?api=1&query=Universidad+Nacional+Campus+Liberia+Guanacaste",
};

// Inventarios de biodiversidad reportados por UNA Comunica (febrero 2024).
export const cifras = [
  { valor: "75", etiqueta: "especies de árboles" },
  { valor: "93", etiqueta: "especies de aves" },
  { valor: "16", etiqueta: "mamíferos" },
  { valor: "6", etiqueta: "reptiles" },
];
export const notaCifras = "Según los inventarios de biodiversidad del sendero (UNA, 2024).";

export const importanciaTitulo = "Educación, _conservación_ y encuentro";

export type Importancia = {
  tipo: string;
  titulo: string;
  texto: string;
  lugar: string;
  imagen: StaticImageData;
  alt: string;
};

export const importancia: Importancia[] = [
  {
    tipo: "Educativa",
    titulo: "Un aula al aire libre",
    texto:
      "Estudiantes voluntarios guían las visitas como intérpretes ambientales. El sendero reúne siete subproyectos para aprender haciendo: bosque tropical seco, meliponario, arboretum, vivero de agricultura alternativa, reservorio de agua de lluvia, microorganismos benéficos y un rancho de la cultura guanacasteca.",
    lugar: "Meliponario Nahua",
    imagen: meliponario,
    alt: "Rótulo del Meliponario Nahua junto a las colmenas de abejas nativas",
  },
  {
    tipo: "Ecológica",
    titulo: "Refugio de biodiversidad",
    texto:
      "Protege un fragmento de bosque tropical seco, ecosistema característico de Guanacaste. Además del bosque, el arboretum y el meliponario conservan árboles nativos y abejas sin aguijón, y el reservorio capta agua de lluvia para el campus.",
    lugar: "Arboretum",
    imagen: arboretum,
    alt: "Entrada al Arboretum del sendero con rótulo informativo y una banca",
  },
  {
    tipo: "Turística",
    titulo: "Naturaleza y cultura abiertas a todos",
    texto:
      "Recibe a centros educativos, turistas y público general en visitas guiadas coordinadas con el campus. Su rancho guanacasteco acoge celebraciones tradicionales, como la conmemoración de la Anexión del Partido de Nicoya.",
    lugar: "Laguna",
    imagen: laguna,
    alt: "Laguna del sendero rodeada de vegetación",
  },
];

export const llamada = {
  titulo: "¿Listo para conocer el _sendero_?",
  texto:
    "Explora el Sendero Los Matapalos de forma virtual: más de 40 puntos fotografiados en 360°, desde el meliponario hasta el interior del bosque.",
  boton: "Iniciar recorrido 360°",
};

export const tarjetas = [
  {
    icono: "360",
    titulo: "Exploración 360°",
    texto: "Recorre distintos puntos del sendero mediante fotografías panorámicas.",
  },
  {
    icono: "libro",
    titulo: "Información educativa",
    texto: "Conoce datos y elementos importantes del sendero.",
  },
  {
    icono: "mundo",
    titulo: "Acceso desde cualquier lugar",
    texto: "Explora el sendero sin necesidad de visitar físicamente el campus.",
  },
] as const;

export const proyecto = {
  titulo: "Sobre el proyecto",
  subtitulo: "Hecho en la UNA, _para_ la UNA",
  texto:
    "Este recorrido virtual fue desarrollado para la Universidad Nacional, Sede Regional Chorotega, Campus Liberia, con el fin de fortalecer la promoción educativa y turística del Sendero Los Matapalos. Las fotografías se capturaron con una cámara 360° en el propio sendero y se integraron en un recorrido interactivo con Marzipano.",
  curso: "Investigación de Operaciones y sus Aplicaciones · II ciclo 2026",
  equipo: ["Fabricio Alvarez Rodríguez", "Diana Alicia Monterrey Castillo", "Isaiah Raust Dussin"],
  profesor: "Ph.D. Carlos Luis Chanto Espinoza",
};

export const recorrido = {
  titulo: "Recorrido virtual 360°",
  ayuda: "Arrastra para mirar alrededor y toca las flechas para avanzar por el sendero.",
};
