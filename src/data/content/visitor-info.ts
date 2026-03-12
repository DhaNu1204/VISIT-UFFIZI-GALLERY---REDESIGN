import { getContent, type PageContent } from "./types";

export type VisitorInfoContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  intro: string;
  essential: {
    h2: string;
    rows: { label: string; value: string }[];
  };
  whatToBring: {
    h2: string;
    allowedH3: string;
    allowed: string[];
    notAllowedH3: string;
    notAllowed: string[];
  };
  facilities: {
    h2: string;
    items: { label: string; text: string }[];
  };
  accessibility: {
    h2: string;
    p: string;
    doorLinkText: string;
    pAfterLink: string;
  };
  photography: {
    h2: string;
    p: string;
  };
  usefulLinks: {
    h2: string;
    titles: string[];
  };
  ctaTitle: string;
  faq: { q: string; a: string }[];
};

const en: VisitorInfoContent = {
  meta: {
    title: "Uffizi Gallery Visitor Info 2026 | Practical Guide",
    description:
      "Complete Uffizi Gallery visitor guide: tickets, hours, rules, accessibility, facilities, photography policy, cloakroom & practical tips from a local.",
  },
  breadcrumb: "Visitor Info",
  h1: "Uffizi Gallery Visitor Information",
  intro:
    "Everything you need to know before stepping inside the Uffizi Gallery. This page covers the practical details \u2014 from what you can bring inside to where the bathrooms are \u2014 so you can focus on the art.",
  essential: {
    h2: "Essential Information at a Glance",
    rows: [
      { label: "Address", value: "Piazzale degli Uffizi, 6 \u2014 50122 Florence, Italy" },
      { label: "Hours", value: "Tue\u2013Sun: 8:15 AM \u2013 6:30 PM | Closed Mondays" },
      { label: "Last Entry", value: "5:30 PM" },
      { label: "Tickets", value: "\u20AC29 (online) / \u20AC25 (ticket office) | Under 18 free" },
      { label: "Phone", value: "+39 055 294883" },
      { label: "Website", value: "uffizi.it" },
    ],
  },
  whatToBring: {
    h2: "What to Bring (and What Not to Bring)",
    allowedH3: "Allowed",
    allowed: [
      "Small bags and handbags",
      "Cameras and phones (no flash photography)",
      "Water bottles",
      "Sketchbooks and pencils (no pens or markers)",
      "Baby strollers (compact)",
    ],
    notAllowedH3: "Not Allowed",
    notAllowed: [
      "Selfie sticks and tripods",
      "Large backpacks and luggage (must be checked)",
      "Food and beverages (except water)",
      "Umbrellas (must be checked)",
      "Flash photography",
    ],
  },
  facilities: {
    h2: "Facilities Inside the Uffizi",
    items: [
      {
        label: "Cloakroom:",
        text: 'Free bag check located near the ground floor entrance. You\'ll need to check any large bags before entering the galleries.',
      },
      {
        label: "Restrooms:",
        text: "Located on the ground floor and second floor. Can be busy during peak hours.",
      },
      {
        label: "Caf\u00E9:",
        text: "The second-floor terrace caf\u00E9 offers espresso, drinks, and light snacks with panoramic views over the Piazza della Signoria.",
      },
      {
        label: "Bookshop:",
        text: "Museum shop on the ground floor with art books, prints, postcards, and souvenirs.",
      },
      {
        label: "Audio guides:",
        text: "Available for rental at the entrance (approximately \u20AC6). Covers major works in multiple languages.",
      },
    ],
  },
  accessibility: {
    h2: "Accessibility",
    p: "The Uffizi is partially accessible for visitors with mobility challenges. Elevators connect the ground floor to the gallery levels. Most gallery rooms are on the same level, but some sections require stairs. Wheelchair visitors should enter through",
    doorLinkText: "Door 3",
    pAfterLink: ". Visitors with disabilities and one companion enter free with a valid disability certificate.",
  },
  photography: {
    h2: "Photography Policy",
    p: 'Photography is allowed throughout the Uffizi \u2014 but no flash, no selfie sticks, and no tripods. Video recording is also permitted for personal use. Some temporary exhibitions may have photography restrictions, which will be clearly posted. The best photos come from the Botticelli rooms, the panoramic terrace, and the corridor views over the Arno.',
  },
  usefulLinks: {
    h2: "Useful Links",
    titles: [
      "Opening Hours & Best Times",
      "Ticket Prices & How to Buy",
      "Getting to the Uffizi",
      "Door Entry Guide",
      "2-Hour Itinerary",
      "Guided Tours",
    ],
  },
  ctaTitle: "Book Skip-the-Line Tickets",
  faq: [
    {
      q: "Can I bring a bag into the Uffizi?",
      a: "Small handbags and camera bags are fine. Large backpacks, luggage, and umbrellas must be checked at the free cloakroom on the ground floor. Leave large bags at your hotel to save time.",
    },
    {
      q: "Is there a caf\u00E9 inside the Uffizi?",
      a: 'Yes \u2014 on the second-floor terrace with views over Piazza della Signoria. They serve espresso, drinks, and light snacks. It\'s a great spot to rest mid-visit.',
    },
    {
      q: "Can I take photos in the Uffizi?",
      a: "Yes. Photography and video are allowed for personal use. No flash, selfie sticks, or tripods. Some temporary exhibitions may restrict photography.",
    },
    {
      q: "Is the Uffizi wheelchair accessible?",
      a: "Partially. Elevators connect the main floors, and most gallery rooms are on the same level. Enter through Door 3 for accessible entry. Visitors with disabilities plus one companion enter free.",
    },
  ],
};

const it: VisitorInfoContent = {
  meta: {
    title: "Informazioni Visitatori Uffizi 2026 | Guida Pratica",
    description:
      "Guida completa per visitare gli Uffizi: biglietti, orari, regole, accessibilita, servizi, politica fotografica, guardaroba e consigli pratici da un locale.",
  },
  breadcrumb: "Info Visitatori",
  h1: "Informazioni per i Visitatori della Galleria degli Uffizi",
  intro:
    "Tutto quello che devi sapere prima di entrare nella Galleria degli Uffizi. Questa pagina copre i dettagli pratici \u2014 da cosa puoi portare dentro a dove si trovano i bagni \u2014 per permetterti di concentrarti sull\u2019arte.",
  essential: {
    h2: "Informazioni Essenziali",
    rows: [
      { label: "Indirizzo", value: "Piazzale degli Uffizi, 6 \u2014 50122 Firenze, Italia" },
      { label: "Orari", value: "Mar\u2013Dom: 8:15 \u2013 18:30 | Chiuso il luned\u00EC" },
      { label: "Ultimo ingresso", value: "17:40" },
      { label: "Biglietti", value: "\u20AC25 (alta stagione) / \u20AC12 (bassa stagione) | Sotto i 18 anni gratis" },
      { label: "Telefono", value: "+39 055 294883" },
      { label: "Sito web", value: "uffizi.it" },
    ],
  },
  whatToBring: {
    h2: "Cosa Portare (e Cosa No)",
    allowedH3: "Consentito",
    allowed: [
      "Borse piccole e borsette",
      "Fotocamere e telefoni (senza flash)",
      "Bottiglie d\u2019acqua",
      "Album da disegno e matite (no penne o pennarelli)",
      "Passeggini (compatti)",
    ],
    notAllowedH3: "Non Consentito",
    notAllowed: [
      "Bastoni per selfie e treppiedi",
      "Zaini grandi e valigie (devono essere lasciati al guardaroba)",
      "Cibo e bevande (tranne acqua)",
      "Ombrelli (devono essere lasciati al guardaroba)",
      "Fotografia con flash",
    ],
  },
  facilities: {
    h2: "Servizi all\u2019Interno degli Uffizi",
    items: [
      {
        label: "Guardaroba:",
        text: "Deposito bagagli gratuito vicino all\u2019ingresso al piano terra. \u00C8 necessario depositare le borse grandi prima di entrare nelle gallerie.",
      },
      {
        label: "Bagni:",
        text: "Situati al piano terra e al secondo piano. Possono essere affollati nelle ore di punta.",
      },
      {
        label: "Caff\u00E8:",
        text: "La caffetteria sulla terrazza del secondo piano offre espresso, bevande e snack leggeri con vista panoramica su Piazza della Signoria.",
      },
      {
        label: "Libreria:",
        text: "Negozio del museo al piano terra con libri d\u2019arte, stampe, cartoline e souvenir.",
      },
      {
        label: "Audioguide:",
        text: "Disponibili a noleggio all\u2019ingresso (circa \u20AC6). Coprono le opere principali in diverse lingue.",
      },
    ],
  },
  accessibility: {
    h2: "Accessibilit\u00E0",
    p: "Gli Uffizi sono parzialmente accessibili per i visitatori con difficolt\u00E0 motorie. Gli ascensori collegano il piano terra ai piani delle gallerie. La maggior parte delle sale si trova sullo stesso livello, ma alcune sezioni richiedono le scale. I visitatori in sedia a rotelle devono entrare dalla",
    doorLinkText: "Porta 3",
    pAfterLink: ". I visitatori con disabilit\u00E0 e un accompagnatore entrano gratis con un certificato di invalidit\u00E0 valido.",
  },
  photography: {
    h2: "Politica Fotografica",
    p: "La fotografia \u00E8 consentita in tutti gli Uffizi \u2014 ma senza flash, senza bastoni per selfie e senza treppiedi. Anche le riprese video sono permesse per uso personale. Alcune mostre temporanee possono avere restrizioni sulla fotografia, chiaramente indicate. Le foto migliori si scattano nelle sale Botticelli, sulla terrazza panoramica e nel corridoio con vista sull\u2019Arno.",
  },
  usefulLinks: {
    h2: "Link Utili",
    titles: [
      "Orari di Apertura e Momenti Migliori",
      "Prezzi Biglietti e Come Acquistare",
      "Come Arrivare agli Uffizi",
      "Guida agli Ingressi",
      "Itinerario di 2 Ore",
      "Visite Guidate",
    ],
  },
  ctaTitle: "Prenota Biglietti Salta-la-Fila",
  faq: [
    {
      q: "Posso portare una borsa agli Uffizi?",
      a: "Borsette e borse per fotocamere vanno bene. Zaini grandi, valigie e ombrelli devono essere depositati al guardaroba gratuito al piano terra. Lascia le borse grandi in hotel per risparmiare tempo.",
    },
    {
      q: "C\u2019\u00E8 un caff\u00E8 dentro gli Uffizi?",
      a: "S\u00EC \u2014 sulla terrazza del secondo piano con vista su Piazza della Signoria. Servono espresso, bevande e snack leggeri. \u00C8 un ottimo posto per riposarsi a met\u00E0 visita.",
    },
    {
      q: "Posso scattare foto agli Uffizi?",
      a: "S\u00EC. Fotografia e video sono consentiti per uso personale. Niente flash, bastoni per selfie o treppiedi. Alcune mostre temporanee possono limitare la fotografia.",
    },
    {
      q: "Gli Uffizi sono accessibili in sedia a rotelle?",
      a: "Parzialmente. Gli ascensori collegano i piani principali e la maggior parte delle sale si trova sullo stesso livello. Entra dalla Porta 3 per l\u2019accesso facilitato. I visitatori con disabilit\u00E0 pi\u00F9 un accompagnatore entrano gratis.",
    },
  ],
};

const de: VisitorInfoContent = {
  meta: {
    title: "Uffizi Besucherinfo 2026 | Praktischer Leitfaden",
    description:
      "Kompletter Uffizi-Besucherleitfaden: Tickets, Zeiten, Regeln, Barrierefreiheit, Einrichtungen, Fotoregeln, Garderobe und praktische Tipps von einem Einheimischen.",
  },
  breadcrumb: "Besucherinfo",
  h1: "Besucherinformationen der Uffizien",
  intro:
    "Alles, was Sie wissen m\u00FCssen, bevor Sie die Uffizien betreten. Diese Seite behandelt die praktischen Details \u2014 von dem, was Sie mitbringen d\u00FCrfen, bis hin zu den Toiletten \u2014 damit Sie sich ganz auf die Kunst konzentrieren k\u00F6nnen.",
  essential: {
    h2: "Wichtige Informationen auf einen Blick",
    rows: [
      { label: "Adresse", value: "Piazzale degli Uffizi, 6 \u2014 50122 Florenz, Italien" },
      { label: "\u00D6ffnungszeiten", value: "Di\u2013So: 8:15 \u2013 18:30 Uhr | Montags geschlossen" },
      { label: "Letzter Einlass", value: "17:40 Uhr" },
      { label: "Tickets", value: "\u20AC25 (Hochsaison) / \u20AC12 (Nebensaison) | Unter 18 Jahren kostenlos" },
      { label: "Telefon", value: "+39 055 294883" },
      { label: "Website", value: "uffizi.it" },
    ],
  },
  whatToBring: {
    h2: "Was Sie mitbringen d\u00FCrfen (und was nicht)",
    allowedH3: "Erlaubt",
    allowed: [
      "Kleine Taschen und Handtaschen",
      "Kameras und Handys (kein Blitzlicht)",
      "Wasserflaschen",
      "Skizzenb\u00FCcher und Bleistifte (keine Kugelschreiber oder Marker)",
      "Kinderwagen (kompakt)",
    ],
    notAllowedH3: "Nicht erlaubt",
    notAllowed: [
      "Selfie-Sticks und Stative",
      "Gro\u00DFe Rucks\u00E4cke und Gep\u00E4ck (m\u00FCssen abgegeben werden)",
      "Speisen und Getr\u00E4nke (au\u00DFer Wasser)",
      "Regenschirme (m\u00FCssen abgegeben werden)",
      "Blitzlichtfotografie",
    ],
  },
  facilities: {
    h2: "Einrichtungen in den Uffizien",
    items: [
      {
        label: "Garderobe:",
        text: "Kostenlose Gep\u00E4ckaufbewahrung nahe dem Eingang im Erdgeschoss. Gro\u00DFe Taschen m\u00FCssen vor dem Betreten der Galerien abgegeben werden.",
      },
      {
        label: "Toiletten:",
        text: "Im Erdgeschoss und im zweiten Stock. In Sto\u00DFzeiten kann es voll werden.",
      },
      {
        label: "Caf\u00E9:",
        text: "Das Terrassencaf\u00E9 im zweiten Stock bietet Espresso, Getr\u00E4nke und leichte Snacks mit Panoramablick auf die Piazza della Signoria.",
      },
      {
        label: "Buchhandlung:",
        text: "Museumsshop im Erdgeschoss mit Kunstb\u00FCchern, Drucken, Postkarten und Souvenirs.",
      },
      {
        label: "Audioguides:",
        text: "Am Eingang zum Ausleihen erh\u00E4ltlich (ca. \u20AC6). Deckt die wichtigsten Werke in mehreren Sprachen ab.",
      },
    ],
  },
  accessibility: {
    h2: "Barrierefreiheit",
    p: "Die Uffizien sind f\u00FCr Besucher mit eingeschr\u00E4nkter Mobilit\u00E4t teilweise zug\u00E4nglich. Aufz\u00FCge verbinden das Erdgeschoss mit den Galerieebenen. Die meisten Galerier\u00E4ume befinden sich auf derselben Ebene, aber einige Bereiche erfordern Treppen. Rollstuhlfahrer sollten durch",
    doorLinkText: "Eingang 3",
    pAfterLink: " eintreten. Besucher mit Behinderung und eine Begleitperson erhalten freien Eintritt mit g\u00FCltigem Behindertenausweis.",
  },
  photography: {
    h2: "Fotoregeln",
    p: "Fotografieren ist in den gesamten Uffizien erlaubt \u2014 jedoch ohne Blitz, ohne Selfie-Sticks und ohne Stative. Videoaufnahmen sind ebenfalls f\u00FCr den pers\u00F6nlichen Gebrauch gestattet. Bei einigen Sonderausstellungen k\u00F6nnen Fotobeschr\u00E4nkungen gelten, die deutlich ausgeschildert sind. Die besten Fotos gelingen in den Botticelli-S\u00E4len, auf der Panoramaterrasse und im Korridor mit Blick auf den Arno.",
  },
  usefulLinks: {
    h2: "N\u00FCtzliche Links",
    titles: [
      "\u00D6ffnungszeiten & beste Besuchszeiten",
      "Ticketpreise & Kaufanleitung",
      "Anfahrt zu den Uffizien",
      "Eingangs\u00FCbersicht",
      "2-Stunden-Rundgang",
      "Gef\u00FChrte Touren",
    ],
  },
  ctaTitle: "Ohne-Anstehen-Tickets buchen",
  faq: [
    {
      q: "Darf ich eine Tasche in die Uffizien mitnehmen?",
      a: "Kleine Handtaschen und Kamerataschen sind erlaubt. Gro\u00DFe Rucks\u00E4cke, Gep\u00E4ck und Regenschirme m\u00FCssen an der kostenlosen Garderobe im Erdgeschoss abgegeben werden. Lassen Sie gro\u00DFe Taschen am besten im Hotel, um Zeit zu sparen.",
    },
    {
      q: "Gibt es ein Caf\u00E9 in den Uffizien?",
      a: "Ja \u2014 auf der Terrasse im zweiten Stock mit Blick auf die Piazza della Signoria. Es gibt Espresso, Getr\u00E4nke und leichte Snacks. Ein wunderbarer Ort f\u00FCr eine Pause w\u00E4hrend des Besuchs.",
    },
    {
      q: "Darf ich in den Uffizien fotografieren?",
      a: "Ja. Fotografie und Video sind f\u00FCr den pers\u00F6nlichen Gebrauch erlaubt. Kein Blitz, keine Selfie-Sticks, keine Stative. Bei einigen Sonderausstellungen kann das Fotografieren eingeschr\u00E4nkt sein.",
    },
    {
      q: "Sind die Uffizien rollstuhlgerecht?",
      a: "Teilweise. Aufz\u00FCge verbinden die Hauptetagen und die meisten Galerier\u00E4ume befinden sich auf derselben Ebene. Nutzen Sie Eingang 3 f\u00FCr den barrierefreien Zugang. Besucher mit Behinderung und eine Begleitperson erhalten freien Eintritt.",
    },
  ],
};

const fr: VisitorInfoContent = {
  meta: {
    title: "Infos Visiteurs Offices 2026 | Guide Pratique",
    description:
      "Guide complet pour visiter les Offices : billets, horaires, regles, accessibilite, services, politique photo, vestiaire et conseils pratiques d'un local.",
  },
  breadcrumb: "Infos Visiteurs",
  h1: "Informations Pratiques pour la Galerie des Offices",
  intro:
    "Tout ce que vous devez savoir avant d'entrer dans la Galerie des Offices. Cette page couvre les details pratiques \u2014 de ce que vous pouvez apporter a l'emplacement des toilettes \u2014 pour que vous puissiez vous concentrer sur l'art.",
  essential: {
    h2: "Informations Essentielles",
    rows: [
      { label: "Adresse", value: "Piazzale degli Uffizi, 6 \u2014 50122 Florence, Italie" },
      { label: "Horaires", value: "Mar\u2013Dim : 8h15 \u2013 18h30 | Ferm\u00E9 le lundi" },
      { label: "Derni\u00E8re entr\u00E9e", value: "17h40" },
      { label: "Billets", value: "\u20AC25 (haute saison) / \u20AC12 (basse saison) | Moins de 18 ans gratuit" },
      { label: "T\u00E9l\u00E9phone", value: "+39 055 294883" },
      { label: "Site web", value: "uffizi.it" },
    ],
  },
  whatToBring: {
    h2: "Quoi Apporter (et Quoi \u00C9viter)",
    allowedH3: "Autoris\u00E9",
    allowed: [
      "Petits sacs et sacs a main",
      "Appareils photo et t\u00E9l\u00E9phones (pas de flash)",
      "Bouteilles d'eau",
      "Carnets de croquis et crayons (pas de stylos ni de marqueurs)",
      "Poussettes (compactes)",
    ],
    notAllowedH3: "Non autoris\u00E9",
    notAllowed: [
      "Perches a selfie et tr\u00E9pieds",
      "Grands sacs a dos et bagages (doivent \u00EAtre d\u00E9pos\u00E9s au vestiaire)",
      "Nourriture et boissons (sauf eau)",
      "Parapluies (doivent \u00EAtre d\u00E9pos\u00E9s au vestiaire)",
      "Photographie au flash",
    ],
  },
  facilities: {
    h2: "Services dans la Galerie des Offices",
    items: [
      {
        label: "Vestiaire :",
        text: "D\u00E9p\u00F4t de bagages gratuit pr\u00E8s de l'entr\u00E9e au rez-de-chauss\u00E9e. Vous devez y d\u00E9poser tout grand sac avant d'acc\u00E9der aux galeries.",
      },
      {
        label: "Toilettes :",
        text: "Situ\u00E9es au rez-de-chauss\u00E9e et au deuxi\u00E8me \u00E9tage. Elles peuvent \u00EAtre fr\u00E9quent\u00E9es aux heures de pointe.",
      },
      {
        label: "Caf\u00E9 :",
        text: "Le caf\u00E9 en terrasse au deuxi\u00E8me \u00E9tage propose espresso, boissons et en-cas l\u00E9gers avec vue panoramique sur la Piazza della Signoria.",
      },
      {
        label: "Librairie :",
        text: "Boutique du mus\u00E9e au rez-de-chauss\u00E9e avec livres d'art, estampes, cartes postales et souvenirs.",
      },
      {
        label: "Audioguides :",
        text: "Disponibles en location a l'entr\u00E9e (environ \u20AC6). Couvrent les oeuvres majeures en plusieurs langues.",
      },
    ],
  },
  accessibility: {
    h2: "Accessibilit\u00E9",
    p: "La Galerie des Offices est partiellement accessible aux visiteurs a mobilit\u00E9 r\u00E9duite. Des ascenseurs relient le rez-de-chauss\u00E9e aux \u00E9tages des galeries. La plupart des salles sont au m\u00EAme niveau, mais certaines sections n\u00E9cessitent des escaliers. Les visiteurs en fauteuil roulant doivent entrer par la",
    doorLinkText: "Porte 3",
    pAfterLink: ". Les visiteurs en situation de handicap et un accompagnateur entrent gratuitement sur pr\u00E9sentation d'un certificat d'invalidit\u00E9 valide.",
  },
  photography: {
    h2: "Politique Photographique",
    p: "La photographie est autoris\u00E9e dans toute la Galerie des Offices \u2014 mais sans flash, sans perche a selfie et sans tr\u00E9pied. L'enregistrement vid\u00E9o est \u00E9galement autoris\u00E9 pour un usage personnel. Certaines expositions temporaires peuvent comporter des restrictions de photographie, clairement indiqu\u00E9es. Les meilleures photos se prennent dans les salles Botticelli, sur la terrasse panoramique et dans le couloir avec vue sur l'Arno.",
  },
  usefulLinks: {
    h2: "Liens Utiles",
    titles: [
      "Horaires et meilleurs moments",
      "Prix des billets et comment acheter",
      "Comment se rendre aux Offices",
      "Guide des entr\u00E9es",
      "Itin\u00E9raire de 2 heures",
      "Visites guid\u00E9es",
    ],
  },
  ctaTitle: "R\u00E9servez vos billets coupe-file",
  faq: [
    {
      q: "Puis-je apporter un sac aux Offices ?",
      a: "Les petits sacs a main et sacs pour appareils photo sont accept\u00E9s. Les grands sacs a dos, valises et parapluies doivent \u00EAtre d\u00E9pos\u00E9s au vestiaire gratuit au rez-de-chauss\u00E9e. Laissez vos grands bagages a l'h\u00F4tel pour gagner du temps.",
    },
    {
      q: "Y a-t-il un caf\u00E9 dans les Offices ?",
      a: "Oui \u2014 sur la terrasse du deuxi\u00E8me \u00E9tage avec vue sur la Piazza della Signoria. On y sert espresso, boissons et en-cas l\u00E9gers. C'est un endroit id\u00E9al pour se reposer en cours de visite.",
    },
    {
      q: "Peut-on prendre des photos aux Offices ?",
      a: "Oui. La photographie et la vid\u00E9o sont autoris\u00E9es pour un usage personnel. Pas de flash, de perche a selfie ni de tr\u00E9pied. Certaines expositions temporaires peuvent restreindre la photographie.",
    },
    {
      q: "Les Offices sont-ils accessibles en fauteuil roulant ?",
      a: "Partiellement. Des ascenseurs relient les \u00E9tages principaux et la plupart des salles de galerie sont au m\u00EAme niveau. Entrez par la Porte 3 pour l'acc\u00E8s adapt\u00E9. Les visiteurs en situation de handicap et un accompagnateur entrent gratuitement.",
    },
  ],
};

const es: VisitorInfoContent = {
  meta: {
    title: "Info Visitantes Uffizi 2026 | Guia Practica",
    description:
      "Guia completa para visitar los Uffizi: entradas, horarios, normas, accesibilidad, servicios, politica de fotos, guardarropa y consejos practicos de un local.",
  },
  breadcrumb: "Info Visitantes",
  h1: "Informaci\u00F3n para Visitantes de la Galer\u00EDa Uffizi",
  intro:
    "Todo lo que necesitas saber antes de entrar en la Galer\u00EDa Uffizi. Esta p\u00E1gina cubre los detalles pr\u00E1cticos \u2014 desde lo que puedes llevar hasta d\u00F3nde est\u00E1n los ba\u00F1os \u2014 para que puedas concentrarte en el arte.",
  essential: {
    h2: "Informaci\u00F3n Esencial de un Vistazo",
    rows: [
      { label: "Direcci\u00F3n", value: "Piazzale degli Uffizi, 6 \u2014 50122 Florencia, Italia" },
      { label: "Horario", value: "Mar\u2013Dom: 8:15 \u2013 18:30 | Cerrado los lunes" },
      { label: "\u00DAltima entrada", value: "17:40" },
      { label: "Entradas", value: "\u20AC25 (temporada alta) / \u20AC12 (temporada baja) | Menores de 18 gratis" },
      { label: "Tel\u00E9fono", value: "+39 055 294883" },
      { label: "Sitio web", value: "uffizi.it" },
    ],
  },
  whatToBring: {
    h2: "Qu\u00E9 Llevar (y Qu\u00E9 No)",
    allowedH3: "Permitido",
    allowed: [
      "Bolsos peque\u00F1os y bolsos de mano",
      "C\u00E1maras y tel\u00E9fonos (sin flash)",
      "Botellas de agua",
      "Cuadernos de dibujo y l\u00E1pices (sin bol\u00EDgrafos ni rotuladores)",
      "Cochecitos de beb\u00E9 (compactos)",
    ],
    notAllowedH3: "No Permitido",
    notAllowed: [
      "Palos selfie y tr\u00EDpodes",
      "Mochilas grandes y equipaje (deben dejarse en el guardarropa)",
      "Comida y bebidas (excepto agua)",
      "Paraguas (deben dejarse en el guardarropa)",
      "Fotograf\u00EDa con flash",
    ],
  },
  facilities: {
    h2: "Servicios Dentro de los Uffizi",
    items: [
      {
        label: "Guardarropa:",
        text: "Dep\u00F3sito de equipaje gratuito cerca de la entrada en la planta baja. Es necesario dejar las bolsas grandes antes de acceder a las galer\u00EDas.",
      },
      {
        label: "Ba\u00F1os:",
        text: "Ubicados en la planta baja y en la segunda planta. Pueden estar concurridos en horas punta.",
      },
      {
        label: "Cafeter\u00EDa:",
        text: "La cafeter\u00EDa de la terraza en la segunda planta ofrece espresso, bebidas y aperitivos ligeros con vistas panor\u00E1micas a la Piazza della Signoria.",
      },
      {
        label: "Librer\u00EDa:",
        text: "Tienda del museo en la planta baja con libros de arte, l\u00E1minas, postales y recuerdos.",
      },
      {
        label: "Audiogu\u00EDas:",
        text: "Disponibles en alquiler en la entrada (aproximadamente \u20AC6). Cubren las obras principales en varios idiomas.",
      },
    ],
  },
  accessibility: {
    h2: "Accesibilidad",
    p: "Los Uffizi son parcialmente accesibles para visitantes con movilidad reducida. Los ascensores conectan la planta baja con los pisos de las galer\u00EDas. La mayor\u00EDa de las salas est\u00E1n al mismo nivel, pero algunas secciones requieren escaleras. Los visitantes en silla de ruedas deben entrar por la",
    doorLinkText: "Puerta 3",
    pAfterLink: ". Los visitantes con discapacidad y un acompa\u00F1ante entran gratis con un certificado de discapacidad v\u00E1lido.",
  },
  photography: {
    h2: "Pol\u00EDtica de Fotograf\u00EDa",
    p: "La fotograf\u00EDa est\u00E1 permitida en toda la Galer\u00EDa Uffizi \u2014 pero sin flash, sin palos selfie y sin tr\u00EDpodes. La grabaci\u00F3n de v\u00EDdeo tambi\u00E9n est\u00E1 permitida para uso personal. Algunas exposiciones temporales pueden tener restricciones de fotograf\u00EDa, claramente indicadas. Las mejores fotos se consiguen en las salas Botticelli, la terraza panor\u00E1mica y el corredor con vistas al Arno.",
  },
  usefulLinks: {
    h2: "Enlaces \u00DAtiles",
    titles: [
      "Horarios y mejores momentos",
      "Precios de entradas y c\u00F3mo comprar",
      "C\u00F3mo llegar a los Uffizi",
      "Gu\u00EDa de entradas",
      "Itinerario de 2 horas",
      "Visitas guiadas",
    ],
  },
  ctaTitle: "Reserva entradas sin colas",
  faq: [
    {
      q: "Puedo llevar un bolso a los Uffizi?",
      a: "Los bolsos peque\u00F1os y las bolsas de c\u00E1mara est\u00E1n bien. Las mochilas grandes, el equipaje y los paraguas deben dejarse en el guardarropa gratuito de la planta baja. Deja las bolsas grandes en el hotel para ahorrar tiempo.",
    },
    {
      q: "Hay una cafeter\u00EDa dentro de los Uffizi?",
      a: "S\u00ED \u2014 en la terraza de la segunda planta con vistas a la Piazza della Signoria. Sirven espresso, bebidas y aperitivos ligeros. Es un lugar estupendo para descansar a mitad de la visita.",
    },
    {
      q: "Puedo hacer fotos en los Uffizi?",
      a: "S\u00ED. La fotograf\u00EDa y el v\u00EDdeo est\u00E1n permitidos para uso personal. Sin flash, palos selfie ni tr\u00EDpodes. Algunas exposiciones temporales pueden restringir la fotograf\u00EDa.",
    },
    {
      q: "Son accesibles los Uffizi en silla de ruedas?",
      a: "Parcialmente. Los ascensores conectan las plantas principales y la mayor\u00EDa de las salas est\u00E1n al mismo nivel. Entra por la Puerta 3 para el acceso adaptado. Los visitantes con discapacidad y un acompa\u00F1ante entran gratis.",
    },
  ],
};

const content: PageContent<VisitorInfoContent> = { en, it, de, fr, es };

export function getVisitorInfoContent(locale: string): VisitorInfoContent {
  return getContent(content, locale);
}
