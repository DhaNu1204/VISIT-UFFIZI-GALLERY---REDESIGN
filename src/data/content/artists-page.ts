import { getContent, type PageContent } from "./types";

export type ArtistsPageContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  intro: string;
  ctaTitle: string;
  // Detail page UI strings
  atTheUffiziH2Suffix: string; // " at the Uffizi"
  biographyH2: string;
  legacyH2: string;
  ctaDetailPrefix: string; // "See "
  ctaDetailSuffix: string; // "'s Masterpieces with a Guide"
  moreArtistsH2: string;
  artistsBreadcrumb: string;
  minRead: string;
};

const en: ArtistsPageContent = {
  meta: {
    title: "Uffizi Gallery Artists | Renaissance Masters & Masterpieces",
    description:
      "Explore the artists of the Uffizi Gallery: Botticelli, Leonardo, Michelangelo, Raphael, Titian & more. Room guides, biographies & masterpieces.",
  },
  breadcrumb: "Artists",
  h1: "Artists at the Uffizi Gallery",
  intro:
    'The Uffizi holds works by virtually every major artist of the Italian Renaissance — and several from beyond Italy\'s borders. From Giotto\'s 14th-century revolution to Caravaggio\'s dramatic Baroque, these artists collectively changed the course of Western art. Each page below includes room locations, major works, and what to look for when you visit.',
  ctaTitle: "See These Masterpieces with an Expert Guide",
  atTheUffiziH2Suffix: " at the Uffizi",
  biographyH2: "Biography",
  legacyH2: "Legacy",
  ctaDetailPrefix: "See ",
  ctaDetailSuffix: "'s Masterpieces with a Guide",
  moreArtistsH2: "More Uffizi Artists",
  artistsBreadcrumb: "Artists",
  minRead: "min read",
};

const it: ArtistsPageContent = {
  meta: {
    title: "Artisti della Galleria degli Uffizi | Maestri del Rinascimento",
    description:
      "Scopri gli artisti degli Uffizi: Botticelli, Leonardo, Michelangelo, Raffaello, Tiziano e altri. Guide alle sale, biografie e capolavori.",
  },
  breadcrumb: "Artisti",
  h1: "Artisti della Galleria degli Uffizi",
  intro:
    'Gli Uffizi custodiscono opere di praticamente ogni grande artista del Rinascimento italiano — e di diversi artisti oltre i confini italiani. Dalla rivoluzione di Giotto nel XIV secolo al drammatico Barocco di Caravaggio, questi artisti hanno collettivamente cambiato il corso dell\'arte occidentale. Ogni pagina include le sale, le opere principali e cosa cercare durante la visita.',
  ctaTitle: "Ammira Questi Capolavori con una Guida Esperta",
  atTheUffiziH2Suffix: " agli Uffizi",
  biographyH2: "Biografia",
  legacyH2: "Eredita",
  ctaDetailPrefix: "Ammira i Capolavori di ",
  ctaDetailSuffix: " con una Guida",
  moreArtistsH2: "Altri Artisti degli Uffizi",
  artistsBreadcrumb: "Artisti",
  minRead: "min di lettura",
};

const de: ArtistsPageContent = {
  meta: {
    title: "Kuenstler der Uffizien | Meister der Renaissance",
    description:
      "Entdecken Sie die Kuenstler der Uffizien: Botticelli, Leonardo, Michelangelo, Raffael, Tizian und mehr. Raumfuehrer, Biografien und Meisterwerke.",
  },
  breadcrumb: "Kuenstler",
  h1: "Kuenstler der Uffizien",
  intro:
    'Die Uffizien beherbergen Werke praktisch jedes bedeutenden Kuenstlers der italienischen Renaissance — und einiger Kuenstler jenseits der italienischen Grenzen. Von Giottos Revolution im 14. Jahrhundert bis zu Caravaggios dramatischem Barock veraenderten diese Kuenstler gemeinsam den Lauf der westlichen Kunst. Jede Seite enthaelt Raumangaben, Hauptwerke und worauf Sie bei Ihrem Besuch achten sollten.',
  ctaTitle: "Erleben Sie Diese Meisterwerke mit einem Experten",
  atTheUffiziH2Suffix: " in den Uffizien",
  biographyH2: "Biografie",
  legacyH2: "Vermaechtnis",
  ctaDetailPrefix: "",
  ctaDetailSuffix: "s Meisterwerke mit einem Guide erleben",
  moreArtistsH2: "Weitere Uffizien-Kuenstler",
  artistsBreadcrumb: "Kuenstler",
  minRead: "Min. Lesezeit",
};

const fr: ArtistsPageContent = {
  meta: {
    title: "Artistes des Offices | Maitres de la Renaissance",
    description:
      "Decouvrez les artistes des Offices : Botticelli, Leonard de Vinci, Michel-Ange, Raphael, Titien et plus. Guides des salles, biographies et chefs-d'oeuvre.",
  },
  breadcrumb: "Artistes",
  h1: "Artistes de la Galerie des Offices",
  intro:
    'Les Offices abritent des oeuvres de pratiquement tous les grands artistes de la Renaissance italienne — et de plusieurs artistes au-dela des frontieres italiennes. De la revolution de Giotto au XIVe siecle au Baroque dramatique du Caravage, ces artistes ont collectivement change le cours de l\'art occidental. Chaque page comprend les emplacements des salles, les oeuvres majeures et ce qu\'il faut observer lors de votre visite.',
  ctaTitle: "Admirez Ces Chefs-d'oeuvre avec un Guide Expert",
  atTheUffiziH2Suffix: " aux Offices",
  biographyH2: "Biographie",
  legacyH2: "Heritage",
  ctaDetailPrefix: "Decouvrez les Chefs-d'oeuvre de ",
  ctaDetailSuffix: " avec un Guide",
  moreArtistsH2: "Autres Artistes des Offices",
  artistsBreadcrumb: "Artistes",
  minRead: "min de lecture",
};

const es: ArtistsPageContent = {
  meta: {
    title: "Artistas de los Uffizi | Maestros del Renacimiento",
    description:
      "Explora los artistas de los Uffizi: Botticelli, Leonardo, Miguel Angel, Rafael, Tiziano y mas. Guias de salas, biografias y obras maestras.",
  },
  breadcrumb: "Artistas",
  h1: "Artistas de la Galeria Uffizi",
  intro:
    'Los Uffizi albergan obras de practicamente todos los grandes artistas del Renacimiento italiano — y de varios artistas mas alla de las fronteras italianas. Desde la revolucion de Giotto en el siglo XIV hasta el dramatico Barroco de Caravaggio, estos artistas cambiaron colectivamente el curso del arte occidental. Cada pagina incluye ubicaciones de salas, obras principales y que buscar durante tu visita.',
  ctaTitle: "Contempla Estas Obras Maestras con un Guia Experto",
  atTheUffiziH2Suffix: " en los Uffizi",
  biographyH2: "Biografia",
  legacyH2: "Legado",
  ctaDetailPrefix: "Contempla las Obras de ",
  ctaDetailSuffix: " con un Guia",
  moreArtistsH2: "Mas Artistas de los Uffizi",
  artistsBreadcrumb: "Artistas",
  minRead: "min de lectura",
};

const content: PageContent<ArtistsPageContent> = { en, it, de, fr, es };

export function getArtistsPageContent(locale: string): ArtistsPageContent {
  return getContent(content, locale);
}
