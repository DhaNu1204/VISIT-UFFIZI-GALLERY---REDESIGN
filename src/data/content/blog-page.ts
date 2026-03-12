import { getContent, type PageContent } from "./types";

export type BlogPageContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  intro: string;
  minRead: string;
  updated: string;
  ctaHubTitle: string;
  // Detail page UI strings
  inThisGuide: string;
  ctaDetailTitle: string;
  moreGuidesH2: string;
};

const en: BlogPageContent = {
  meta: {
    title: "Uffizi Gallery Blog | Tips, Guides & Florence Travel Advice",
    description:
      "Insider guides for visiting the Uffizi Gallery & Florence. Best times to visit, free days, itineraries, museum comparisons & money-saving tips.",
  },
  breadcrumb: "Blog",
  h1: "Uffizi Gallery Blog",
  intro:
    "Practical guides, insider tips, and everything you need to plan the perfect Uffizi visit. Written by someone who actually lives in Florence.",
  minRead: "min read",
  updated: "Updated",
  ctaHubTitle: "Skip the Research — Book Your Uffizi Tickets Now",
  inThisGuide: "In This Guide",
  ctaDetailTitle: "Ready to Visit? Book Your Uffizi Tickets",
  moreGuidesH2: "More Guides",
};

const it: BlogPageContent = {
  meta: {
    title: "Blog della Galleria degli Uffizi | Consigli e Guide su Firenze",
    description:
      "Guide pratiche per visitare gli Uffizi e Firenze. Periodi migliori, giorni gratuiti, itinerari, confronti tra musei e consigli per risparmiare.",
  },
  breadcrumb: "Blog",
  h1: "Blog della Galleria degli Uffizi",
  intro:
    "Guide pratiche, consigli da insider e tutto il necessario per pianificare la visita perfetta agli Uffizi. Scritto da chi vive davvero a Firenze.",
  minRead: "min di lettura",
  updated: "Aggiornato",
  ctaHubTitle: "Salta la Ricerca — Prenota Subito i Tuoi Biglietti",
  inThisGuide: "In Questa Guida",
  ctaDetailTitle: "Pronto a Visitare? Prenota i Tuoi Biglietti",
  moreGuidesH2: "Altre Guide",
};

const de: BlogPageContent = {
  meta: {
    title: "Uffizien Blog | Tipps, Reisefuehrer & Florenz-Ratgeber",
    description:
      "Insider-Tipps fuer die Uffizien und Florenz. Beste Besuchszeiten, freie Eintritte, Rundgaenge, Museumsvergleiche und Spartipps.",
  },
  breadcrumb: "Blog",
  h1: "Uffizien Blog",
  intro:
    "Praktische Ratgeber, Insider-Tipps und alles, was Sie fuer den perfekten Uffizien-Besuch brauchen. Geschrieben von jemandem, der wirklich in Florenz lebt.",
  minRead: "Min. Lesezeit",
  updated: "Aktualisiert",
  ctaHubTitle: "Recherche ueberspringen — Jetzt Tickets buchen",
  inThisGuide: "In Diesem Ratgeber",
  ctaDetailTitle: "Bereit fuer den Besuch? Uffizien-Tickets Buchen",
  moreGuidesH2: "Weitere Ratgeber",
};

const fr: BlogPageContent = {
  meta: {
    title: "Blog de la Galerie des Offices | Conseils & Guides Florence",
    description:
      "Guides pratiques pour visiter les Offices et Florence. Meilleurs moments, jours gratuits, itineraires, comparaisons et astuces pour economiser.",
  },
  breadcrumb: "Blog",
  h1: "Blog de la Galerie des Offices",
  intro:
    "Guides pratiques, conseils d'initie et tout ce qu'il faut pour planifier la visite parfaite aux Offices. Ecrit par quelqu'un qui vit vraiment a Florence.",
  minRead: "min de lecture",
  updated: "Mis a jour",
  ctaHubTitle: "Arretez de Chercher — Reservez Vos Billets Maintenant",
  inThisGuide: "Dans Ce Guide",
  ctaDetailTitle: "Pret a Visiter ? Reservez Vos Billets",
  moreGuidesH2: "Autres Guides",
};

const es: BlogPageContent = {
  meta: {
    title: "Blog de la Galeria Uffizi | Consejos y Guias de Florencia",
    description:
      "Guias practicas para visitar los Uffizi y Florencia. Mejores momentos, dias gratuitos, itinerarios, comparaciones y consejos para ahorrar.",
  },
  breadcrumb: "Blog",
  h1: "Blog de la Galeria Uffizi",
  intro:
    "Guias practicas, consejos de expertos y todo lo que necesitas para planificar la visita perfecta a los Uffizi. Escrito por alguien que realmente vive en Florencia.",
  minRead: "min de lectura",
  updated: "Actualizado",
  ctaHubTitle: "Deja de Buscar — Reserva Tus Entradas Ahora",
  inThisGuide: "En Esta Guia",
  ctaDetailTitle: "Listo para Visitar? Reserva Tus Entradas",
  moreGuidesH2: "Mas Guias",
};

const content: PageContent<BlogPageContent> = { en, it, de, fr, es };

export function getBlogPageContent(locale: string): BlogPageContent {
  return getContent(content, locale);
}
