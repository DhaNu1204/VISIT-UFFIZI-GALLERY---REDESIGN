import { getContent, type PageContent } from "./types";

export type ToursPrivateContent = {
  meta: { title: string; description: string };
  breadcrumbs: { tours: string; privateTour: string };
  h1: string;
  intro: string;
  bookingCtaTop: string;
  whyChoose: {
    h2: string;
    intro: string;
    items: { label: string; text: string }[];
  };
  whatsIncluded: {
    h2: string;
    details: { label: string; value: string }[];
  };
  customRoutes: {
    h2: string;
    intro: string;
    items: { label: string; text: string }[];
  };
  comparison: {
    h2: string;
    p: string;
  };
  bookingCtaBottom: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
};

const en: ToursPrivateContent = {
  meta: {
    title: "Private Uffizi Gallery Tour 2026 | Your Own Expert Guide",
    description:
      "Book a private Uffizi tour with your own licensed art historian. Customized route, family-friendly options, flexible pace. From \u20AC189 per group.",
  },
  breadcrumbs: {
    tours: "Tours",
    privateTour: "Private Tour",
  },
  h1: "Private Uffizi Gallery Tour",
  intro:
    'A private Uffizi tour is the most rewarding way to experience the gallery. Your own licensed art historian, your own pace, and a route designed around your interests. Want to spend 20 minutes in front of the Birth of Venus? You can. Want to skip the crowds in the popular rooms and discover lesser-known gems? Your guide will know exactly where to take you.',
  bookingCtaTop: "Private Uffizi Gallery Tour",
  whyChoose: {
    h2: "Why Choose a Private Tour?",
    intro: "I recommend private tours for three types of visitors:",
    items: [
      {
        label: "Families with children",
        text: 'Kids lose interest after 30 minutes of a standard group tour. A private guide adapts the narrative, turns art history into storytelling, and knows when it\'s time for a gelato break on the terrace. Your children will actually remember this visit.',
      },
      {
        label: "Art enthusiasts",
        text: 'If you want to discuss Caravaggio\'s use of chiaroscuro, debate whether Michelangelo\'s Doni Tondo anticipates Mannerism, or understand the technical differences between Florentine and Venetian color theory, you need a guide who can match your level of interest.',
      },
      {
        label: "Couples and special occasions",
        text: "An anniversary, birthday, or honeymoon in Florence deserves more than following a flag through crowded rooms. A private tour feels exclusive and unhurried.",
      },
    ],
  },
  whatsIncluded: {
    h2: "What's Included",
    details: [
      { label: "Duration", value: "2.5 hours (extendable)" },
      { label: "Group Size", value: "Just you and your group" },
      { label: "Languages", value: "English, Italian, Spanish, French, German" },
      { label: "Entry", value: "Skip-the-line tickets included" },
      { label: "Price", value: "From \u20AC189 per group (not per person)" },
      { label: "Cancellation", value: "Free up to 24 hours before" },
    ],
  },
  customRoutes: {
    h2: "Customizable Routes",
    intro:
      "Before your tour, you can discuss your preferences with your guide. Some popular customizations include:",
    items: [
      {
        label: "Renaissance Masters:",
        text: "Deep dive into Botticelli, Leonardo, Michelangelo, and Raphael",
      },
      {
        label: "Medici History:",
        text: "Focus on how Florence's ruling family shaped the art collection",
      },
      {
        label: "Women in Art:",
        text: "Artemisia Gentileschi and the representation of women across centuries",
      },
      {
        label: "Kid-Friendly:",
        text: "Interactive scavenger hunt approach with stories and games",
      },
      {
        label: "Photography Focus:",
        text: "Your guide helps you find the best angles and lighting for stunning photos",
      },
    ],
  },
  comparison: {
    h2: "Private vs. Group Tour \u2014 Honest Comparison",
    p: 'A guided group tour costs about \u20AC49 per person. A private tour starts at \u20AC189 for the entire group. For a couple, that\'s about \u20AC95 per person \u2014 more expensive, but you get a completely personalized experience. For a family of four, it\'s about \u20AC47 per person \u2014 roughly the same as a group tour but with your own guide. For larger groups (6\u20138 people), a private tour becomes the clear value choice.',
  },
  bookingCtaBottom: "Book Your Private Uffizi Tour",
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      q: "How much does a private Uffizi tour cost?",
      a: "Private tours start from \u20AC189 per group (not per person). This typically covers up to 6 people including skip-the-line entry, a licensed guide, and headsets. Larger groups may pay a small supplement.",
    },
    {
      q: "Can I customize the tour route?",
      a: "Absolutely. Before your tour, you can discuss your interests with your guide. Want to focus on Botticelli? Medici history? A kid-friendly approach? Your guide will plan the route around your preferences.",
    },
    {
      q: "Is a private tour good for kids?",
      a: "Private tours are the best option for families. Your guide can adjust the pace, use storytelling to engage children, and include fun activities like art scavenger hunts. Kids under 18 enter free.",
    },
    {
      q: "How far in advance should I book?",
      a: "Book at least 1\u20132 weeks ahead during peak season (March\u2013October). During holidays and weekends, popular guides book out even earlier. Low season bookings can usually be made a few days in advance.",
    },
  ],
};

const it: ToursPrivateContent = {
  meta: {
    title: "Tour Privato Uffizi 2026 | La Tua Guida Personale",
    description:
      "Prenota un tour privato degli Uffizi con il tuo storico dell'arte abilitato. Percorso personalizzato, opzioni per famiglie, ritmo flessibile. Da \u20AC189 a gruppo.",
  },
  breadcrumbs: {
    tours: "Tour",
    privateTour: "Tour Privato",
  },
  h1: "Tour Privato della Galleria degli Uffizi",
  intro:
    "Un tour privato degli Uffizi \u00E8 il modo pi\u00F9 appagante per vivere la galleria. Il tuo storico dell'arte abilitato, il tuo ritmo, e un percorso pensato attorno ai tuoi interessi. Vuoi fermarti 20 minuti davanti alla Nascita di Venere? Puoi farlo. Vuoi evitare la folla nelle sale pi\u00F9 affollate e scoprire gioielli meno conosciuti? La tua guida sapr\u00E0 esattamente dove portarti.",
  bookingCtaTop: "Tour Privato Galleria degli Uffizi",
  whyChoose: {
    h2: "Perch\u00E9 scegliere un tour privato?",
    intro: "Consiglio i tour privati a tre tipi di visitatori:",
    items: [
      {
        label: "Famiglie con bambini",
        text: "I bambini perdono interesse dopo 30 minuti di un tour di gruppo standard. Una guida privata adatta il racconto, trasforma la storia dell'arte in narrazione coinvolgente, e sa quando \u00E8 il momento per una pausa gelato sulla terrazza. I vostri bambini ricorderanno davvero questa visita.",
      },
      {
        label: "Appassionati d'arte",
        text: "Se volete discutere dell'uso del chiaroscuro di Caravaggio, dibattere se il Tondo Doni di Michelangelo anticipa il Manierismo, o comprendere le differenze tecniche tra la teoria del colore fiorentina e veneziana, avete bisogno di una guida che possa essere alla vostra altezza.",
      },
      {
        label: "Coppie e occasioni speciali",
        text: "Un anniversario, un compleanno o una luna di miele a Firenze meritano pi\u00F9 che seguire una bandierina tra sale affollate. Un tour privato \u00E8 esclusivo e senza fretta.",
      },
    ],
  },
  whatsIncluded: {
    h2: "Cosa include",
    details: [
      { label: "Durata", value: "2,5 ore (prolungabile)" },
      { label: "Gruppo", value: "Solo voi e il vostro gruppo" },
      { label: "Lingue", value: "Italiano, inglese, spagnolo, francese, tedesco" },
      { label: "Ingresso", value: "Biglietti salta la fila inclusi" },
      { label: "Prezzo", value: "Da \u20AC189 a gruppo (non a persona)" },
      { label: "Cancellazione", value: "Gratuita fino a 24 ore prima" },
    ],
  },
  customRoutes: {
    h2: "Percorsi personalizzabili",
    intro:
      "Prima del tour potete discutere le vostre preferenze con la guida. Alcune personalizzazioni popolari includono:",
    items: [
      {
        label: "Maestri del Rinascimento:",
        text: "Approfondimento su Botticelli, Leonardo, Michelangelo e Raffaello",
      },
      {
        label: "Storia dei Medici:",
        text: "Come la famiglia regnante di Firenze ha plasmato la collezione artistica",
      },
      {
        label: "Donne nell'arte:",
        text: "Artemisia Gentileschi e la rappresentazione delle donne nei secoli",
      },
      {
        label: "Per i bambini:",
        text: "Caccia al tesoro interattiva con storie e giochi",
      },
      {
        label: "Focus fotografia:",
        text: "La guida vi aiuta a trovare le migliori angolazioni e luci per foto spettacolari",
      },
    ],
  },
  comparison: {
    h2: "Tour privato vs. tour di gruppo \u2014 confronto onesto",
    p: "Un tour di gruppo guidato costa circa \u20AC49 a persona. Un tour privato parte da \u20AC189 per l'intero gruppo. Per una coppia, sono circa \u20AC95 a persona \u2014 pi\u00F9 caro, ma con un'esperienza completamente personalizzata. Per una famiglia di quattro, sono circa \u20AC47 a persona \u2014 pi\u00F9 o meno come un tour di gruppo, ma con la vostra guida personale. Per gruppi pi\u00F9 numerosi (6\u20138 persone), il tour privato diventa la scelta pi\u00F9 conveniente.",
  },
  bookingCtaBottom: "Prenota il tuo tour privato agli Uffizi",
  faqTitle: "Domande frequenti",
  faq: [
    {
      q: "Quanto costa un tour privato degli Uffizi?",
      a: "I tour privati partono da \u20AC189 a gruppo (non a persona). Il prezzo copre fino a 6 persone e include ingresso salta la fila, guida abilitata e auricolari. I gruppi pi\u00F9 numerosi possono avere un piccolo supplemento.",
    },
    {
      q: "Posso personalizzare il percorso del tour?",
      a: "Assolutamente. Prima del tour potete discutere i vostri interessi con la guida. Volete concentrarvi su Botticelli? Sulla storia dei Medici? Su un approccio adatto ai bambini? La guida organizzer\u00E0 il percorso in base alle vostre preferenze.",
    },
    {
      q: "Il tour privato \u00E8 adatto ai bambini?",
      a: "I tour privati sono la scelta migliore per le famiglie. La guida pu\u00F2 adattare il ritmo, usare la narrazione per coinvolgere i bambini e includere attivit\u00E0 divertenti come cacce al tesoro artistiche. I minori di 18 anni entrano gratis.",
    },
    {
      q: "Con quanto anticipo devo prenotare?",
      a: "Prenotate almeno 1\u20132 settimane prima durante l'alta stagione (marzo\u2013ottobre). Durante le festivit\u00E0 e i fine settimana, le guide pi\u00F9 richieste si esauriscono ancora prima. In bassa stagione si pu\u00F2 solitamente prenotare con pochi giorni di anticipo.",
    },
  ],
};

const de: ToursPrivateContent = {
  meta: {
    title: "Private Uffizi Tour 2026 | Ihr eigener Experten-Guide",
    description:
      "Buchen Sie eine private Uffizi Tour mit Ihrem eigenen lizenzierten Kunsthistoriker. Individuelle Route, familienfreundlich, flexibles Tempo. Ab 189 \u20AC pro Gruppe.",
  },
  breadcrumbs: {
    tours: "Touren",
    privateTour: "Private Tour",
  },
  h1: "Private Tour durch die Uffizi Galerie",
  intro:
    "Eine private Uffizi Tour ist die lohnendste Art, die Galerie zu erleben. Ihr eigener lizenzierter Kunsthistoriker, Ihr eigenes Tempo und eine Route, die auf Ihre Interessen zugeschnitten ist. M\u00F6chten Sie 20 Minuten vor der Geburt der Venus verbringen? Das k\u00F6nnen Sie. M\u00F6chten Sie die Menschenmassen in den beliebten S\u00E4len umgehen und weniger bekannte Sch\u00E4tze entdecken? Ihr Guide wei\u00DF genau, wohin er Sie f\u00FChren muss.",
  bookingCtaTop: "Private Uffizi Galerie Tour",
  whyChoose: {
    h2: "Warum eine private Tour w\u00E4hlen?",
    intro: "Ich empfehle private Touren f\u00FCr drei Arten von Besuchern:",
    items: [
      {
        label: "Familien mit Kindern",
        text: "Kinder verlieren nach 30 Minuten einer Standard-Gruppenf\u00FChrung das Interesse. Ein privater Guide passt die Erz\u00E4hlung an, verwandelt Kunstgeschichte in Geschichtenerz\u00E4hlen und wei\u00DF, wann es Zeit f\u00FCr eine Gelato-Pause auf der Terrasse ist. Ihre Kinder werden sich wirklich an diesen Besuch erinnern.",
      },
      {
        label: "Kunstbegeisterte",
        text: "Wenn Sie \u00FCber Caravaggios Einsatz von Chiaroscuro diskutieren, dar\u00FCber debattieren m\u00F6chten, ob Michelangelos Tondo Doni den Manierismus vorwegnimmt, oder die technischen Unterschiede zwischen florentinischer und venezianischer Farbtheorie verstehen wollen, brauchen Sie einen Guide, der Ihrem Wissensdurst gewachsen ist.",
      },
      {
        label: "Paare und besondere Anl\u00E4sse",
        text: "Ein Jahrestag, Geburtstag oder Honeymoon in Florenz verdient mehr, als einer Fahne durch \u00FCberf\u00FCllte S\u00E4le zu folgen. Eine private Tour f\u00FChlt sich exklusiv und entspannt an.",
      },
    ],
  },
  whatsIncluded: {
    h2: "Was ist enthalten",
    details: [
      { label: "Dauer", value: "2,5 Stunden (verl\u00E4ngerbar)" },
      { label: "Gruppengr\u00F6\u00DFe", value: "Nur Sie und Ihre Gruppe" },
      { label: "Sprachen", value: "Deutsch, Englisch, Italienisch, Spanisch, Franz\u00F6sisch" },
      { label: "Eintritt", value: "Tickets ohne Anstehen inklusive" },
      { label: "Preis", value: "Ab 189 \u20AC pro Gruppe (nicht pro Person)" },
      { label: "Stornierung", value: "Kostenlos bis 24 Stunden vorher" },
    ],
  },
  customRoutes: {
    h2: "Individuelle Routen",
    intro:
      "Vor Ihrer Tour k\u00F6nnen Sie Ihre W\u00FCnsche mit Ihrem Guide besprechen. Beliebte Anpassungen sind unter anderem:",
    items: [
      {
        label: "Renaissance-Meister:",
        text: "Vertiefung in Botticelli, Leonardo, Michelangelo und Raffael",
      },
      {
        label: "Geschichte der Medici:",
        text: "Wie Florenz' herrschende Familie die Kunstsammlung pr\u00E4gte",
      },
      {
        label: "Frauen in der Kunst:",
        text: "Artemisia Gentileschi und die Darstellung von Frauen \u00FCber die Jahrhunderte",
      },
      {
        label: "Kinderfreundlich:",
        text: "Interaktive Schnitzeljagd mit Geschichten und Spielen",
      },
      {
        label: "Fotografie-Fokus:",
        text: "Ihr Guide hilft Ihnen, die besten Winkel und Lichtsituationen f\u00FCr atemberaubende Fotos zu finden",
      },
    ],
  },
  comparison: {
    h2: "Privat vs. Gruppenf\u00FChrung \u2014 ehrlicher Vergleich",
    p: "Eine gef\u00FChrte Gruppentour kostet etwa 49 \u20AC pro Person. Eine private Tour beginnt bei 189 \u20AC f\u00FCr die gesamte Gruppe. F\u00FCr ein Paar sind das etwa 95 \u20AC pro Person \u2014 teurer, aber Sie erhalten ein v\u00F6llig individuelles Erlebnis. F\u00FCr eine vierK\u00F6pfige Familie sind es etwa 47 \u20AC pro Person \u2014 ungef\u00E4hr so viel wie eine Gruppenf\u00FChrung, aber mit Ihrem eigenen Guide. F\u00FCr gr\u00F6\u00DFere Gruppen (6\u20138 Personen) wird die private Tour zur klar besseren Wahl.",
  },
  bookingCtaBottom: "Private Uffizi Tour jetzt buchen",
  faqTitle: "H\u00E4ufig gestellte Fragen",
  faq: [
    {
      q: "Was kostet eine private Uffizi Tour?",
      a: "Private Touren beginnen ab 189 \u20AC pro Gruppe (nicht pro Person). Dies deckt in der Regel bis zu 6 Personen ab, inklusive Eintritt ohne Anstehen, lizenziertem Guide und Headsets. Gr\u00F6\u00DFere Gruppen zahlen eventuell einen kleinen Aufpreis.",
    },
    {
      q: "Kann ich die Tour-Route individuell anpassen?",
      a: "Selbstverst\u00E4ndlich. Vor Ihrer Tour k\u00F6nnen Sie Ihre Interessen mit Ihrem Guide besprechen. M\u00F6chten Sie sich auf Botticelli konzentrieren? Auf die Geschichte der Medici? Einen kindgerechten Ansatz? Ihr Guide plant die Route nach Ihren W\u00FCnschen.",
    },
    {
      q: "Ist eine private Tour f\u00FCr Kinder geeignet?",
      a: "Private Touren sind die beste Wahl f\u00FCr Familien. Ihr Guide kann das Tempo anpassen, Geschichtenerz\u00E4hlen einsetzen, um Kinder zu begeistern, und unterhaltsame Aktivit\u00E4ten wie Kunst-Schnitzeljagden einbauen. Kinder unter 18 Jahren haben freien Eintritt.",
    },
    {
      q: "Wie weit im Voraus sollte ich buchen?",
      a: "Buchen Sie mindestens 1\u20132 Wochen im Voraus w\u00E4hrend der Hochsaison (M\u00E4rz\u2013Oktober). An Feiertagen und Wochenenden sind beliebte Guides noch fr\u00FCher ausgebucht. In der Nebensaison kann in der Regel wenige Tage vorher gebucht werden.",
    },
  ],
};

const fr: ToursPrivateContent = {
  meta: {
    title: "Visite Privee Offices 2026 | Votre Guide Personnel",
    description:
      "Reservez une visite privee des Offices avec votre propre historien de l'art agree. Parcours sur mesure, adapte aux familles, rythme flexible. Des 189 EUR.",
  },
  breadcrumbs: {
    tours: "Visites",
    privateTour: "Visite Privee",
  },
  h1: "Visite Privee de la Galerie des Offices",
  intro:
    "Une visite privee des Offices est la facon la plus enrichissante de decouvrir la galerie. Votre propre historien de l'art agree, votre rythme, et un parcours concu autour de vos interets. Envie de passer 20 minutes devant la Naissance de Venus ? C'est possible. Envie d'eviter la foule dans les salles populaires et de decouvrir des tresors moins connus ? Votre guide saura exactement ou vous emmener.",
  bookingCtaTop: "Visite Privee Galerie des Offices",
  whyChoose: {
    h2: "Pourquoi choisir une visite privee ?",
    intro: "Je recommande les visites privees a trois types de visiteurs :",
    items: [
      {
        label: "Familles avec enfants",
        text: "Les enfants perdent leur interet apres 30 minutes d'un tour de groupe classique. Un guide prive adapte le recit, transforme l'histoire de l'art en contes captivants, et sait quand il est temps de faire une pause gelato sur la terrasse. Vos enfants se souviendront vraiment de cette visite.",
      },
      {
        label: "Passionnes d'art",
        text: "Si vous souhaitez discuter de l'utilisation du clair-obscur par Le Caravage, debattre de la facon dont le Tondo Doni de Michel-Ange anticipe le manierisme, ou comprendre les differences techniques entre les theories florentine et venitienne de la couleur, vous avez besoin d'un guide a la hauteur de votre curiosite.",
      },
      {
        label: "Couples et occasions speciales",
        text: "Un anniversaire de mariage, un anniversaire ou une lune de miel a Florence merite mieux que de suivre un drapeau a travers des salles bondees. Une visite privee est exclusive et sans pression.",
      },
    ],
  },
  whatsIncluded: {
    h2: "Ce qui est inclus",
    details: [
      { label: "Duree", value: "2h30 (prolongeable)" },
      { label: "Taille du groupe", value: "Vous et votre groupe uniquement" },
      { label: "Langues", value: "Francais, anglais, italien, espagnol, allemand" },
      { label: "Entree", value: "Billets coupe-file inclus" },
      { label: "Prix", value: "A partir de 189 EUR par groupe (non par personne)" },
      { label: "Annulation", value: "Gratuite jusqu'a 24 heures avant" },
    ],
  },
  customRoutes: {
    h2: "Parcours personnalisables",
    intro:
      "Avant votre visite, vous pouvez discuter de vos preferences avec votre guide. Parmi les personnalisations les plus demandees :",
    items: [
      {
        label: "Maitres de la Renaissance :",
        text: "Immersion approfondie dans Botticelli, Leonard de Vinci, Michel-Ange et Raphael",
      },
      {
        label: "Histoire des Medicis :",
        text: "Comment la famille regnante de Florence a faconne la collection artistique",
      },
      {
        label: "Les femmes dans l'art :",
        text: "Artemisia Gentileschi et la representation des femmes a travers les siecles",
      },
      {
        label: "Adapte aux enfants :",
        text: "Approche de type chasse au tresor interactive avec histoires et jeux",
      },
      {
        label: "Focus photographie :",
        text: "Votre guide vous aide a trouver les meilleurs angles et eclairages pour des photos magnifiques",
      },
    ],
  },
  comparison: {
    h2: "Visite privee vs. groupe -- comparaison honnete",
    p: "Une visite guidee en groupe coute environ 49 EUR par personne. Une visite privee commence a 189 EUR pour le groupe entier. Pour un couple, cela fait environ 95 EUR par personne -- plus cher, mais vous beneficiez d'une experience entierement personnalisee. Pour une famille de quatre, c'est environ 47 EUR par personne -- a peu pres le meme prix qu'un tour de groupe, mais avec votre propre guide. Pour les groupes plus importants (6 a 8 personnes), la visite privee devient clairement le meilleur rapport qualite-prix.",
  },
  bookingCtaBottom: "Reservez votre visite privee des Offices",
  faqTitle: "Questions frequentes",
  faq: [
    {
      q: "Combien coute une visite privee des Offices ?",
      a: "Les visites privees commencent a partir de 189 EUR par groupe (non par personne). Cela couvre generalement jusqu'a 6 personnes, incluant l'entree coupe-file, un guide agree et des casques audio. Les groupes plus importants peuvent avoir un petit supplement.",
    },
    {
      q: "Puis-je personnaliser le parcours de la visite ?",
      a: "Absolument. Avant votre visite, vous pouvez discuter de vos centres d'interet avec votre guide. Vous souhaitez vous concentrer sur Botticelli ? L'histoire des Medicis ? Une approche adaptee aux enfants ? Votre guide concevra le parcours selon vos preferences.",
    },
    {
      q: "Une visite privee est-elle adaptee aux enfants ?",
      a: "Les visites privees sont la meilleure option pour les familles. Votre guide peut adapter le rythme, utiliser le recit pour captiver les enfants et inclure des activites ludiques comme des chasses au tresor artistiques. Les moins de 18 ans entrent gratuitement.",
    },
    {
      q: "Combien de temps a l'avance faut-il reserver ?",
      a: "Reservez au moins 1 a 2 semaines a l'avance en haute saison (mars a octobre). Pendant les jours feries et les week-ends, les guides les plus demandes sont reserves encore plus tot. En basse saison, les reservations peuvent generalement se faire quelques jours avant.",
    },
  ],
};

const es: ToursPrivateContent = {
  meta: {
    title: "Tour Privado Uffizi 2026 | Tu Guia Experto Personal",
    description:
      "Reserva un tour privado de los Uffizi con tu propio historiador del arte autorizado. Ruta personalizada, ideal para familias, ritmo flexible. Desde 189 EUR.",
  },
  breadcrumbs: {
    tours: "Tours",
    privateTour: "Tour Privado",
  },
  h1: "Tour Privado de la Galeria Uffizi",
  intro:
    "Un tour privado de los Uffizi es la forma mas gratificante de vivir la galeria. Tu propio historiador del arte autorizado, tu propio ritmo, y una ruta disenada segun tus intereses. Quieres pasar 20 minutos frente al Nacimiento de Venus? Puedes hacerlo. Quieres evitar las multitudes en las salas mas populares y descubrir joyas menos conocidas? Tu guia sabra exactamente adonde llevarte.",
  bookingCtaTop: "Tour Privado Galeria Uffizi",
  whyChoose: {
    h2: "Por que elegir un tour privado?",
    intro: "Recomiendo los tours privados para tres tipos de visitantes:",
    items: [
      {
        label: "Familias con ninos",
        text: "Los ninos pierden el interes despues de 30 minutos de un tour de grupo estandar. Un guia privado adapta la narrativa, convierte la historia del arte en cuentos, y sabe cuando es momento para una pausa de gelato en la terraza. Tus hijos realmente recordaran esta visita.",
      },
      {
        label: "Entusiastas del arte",
        text: "Si quieres discutir el uso del claroscuro de Caravaggio, debatir si el Tondo Doni de Miguel Angel anticipa el Manierismo, o comprender las diferencias tecnicas entre la teoria del color florentina y veneciana, necesitas un guia que este a la altura de tu interes.",
      },
      {
        label: "Parejas y ocasiones especiales",
        text: "Un aniversario, cumpleanos o luna de miel en Florencia merece mas que seguir una bandera por salas abarrotadas. Un tour privado se siente exclusivo y sin prisas.",
      },
    ],
  },
  whatsIncluded: {
    h2: "Que incluye",
    details: [
      { label: "Duracion", value: "2,5 horas (ampliable)" },
      { label: "Tamano del grupo", value: "Solo tu y tu grupo" },
      { label: "Idiomas", value: "Espanol, ingles, italiano, frances, aleman" },
      { label: "Entrada", value: "Entradas sin colas incluidas" },
      { label: "Precio", value: "Desde 189 EUR por grupo (no por persona)" },
      { label: "Cancelacion", value: "Gratuita hasta 24 horas antes" },
    ],
  },
  customRoutes: {
    h2: "Rutas personalizables",
    intro:
      "Antes de tu tour, puedes comentar tus preferencias con tu guia. Algunas personalizaciones populares incluyen:",
    items: [
      {
        label: "Maestros del Renacimiento:",
        text: "Inmersion profunda en Botticelli, Leonardo, Miguel Angel y Rafael",
      },
      {
        label: "Historia de los Medici:",
        text: "Como la familia gobernante de Florencia moldeo la coleccion artistica",
      },
      {
        label: "Mujeres en el arte:",
        text: "Artemisia Gentileschi y la representacion de la mujer a lo largo de los siglos",
      },
      {
        label: "Adaptado a ninos:",
        text: "Enfoque de busqueda del tesoro interactiva con historias y juegos",
      },
      {
        label: "Enfoque en fotografia:",
        text: "Tu guia te ayuda a encontrar los mejores angulos e iluminacion para fotos impresionantes",
      },
    ],
  },
  comparison: {
    h2: "Tour privado vs. en grupo -- comparacion honesta",
    p: "Un tour guiado en grupo cuesta alrededor de 49 EUR por persona. Un tour privado empieza en 189 EUR para todo el grupo. Para una pareja, eso es unos 95 EUR por persona -- mas caro, pero obtienes una experiencia completamente personalizada. Para una familia de cuatro, son unos 47 EUR por persona -- aproximadamente lo mismo que un tour de grupo pero con tu propio guia. Para grupos mas grandes (6 a 8 personas), el tour privado se convierte claramente en la mejor opcion.",
  },
  bookingCtaBottom: "Reserva tu tour privado de los Uffizi",
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      q: "Cuanto cuesta un tour privado de los Uffizi?",
      a: "Los tours privados empiezan desde 189 EUR por grupo (no por persona). Esto cubre normalmente hasta 6 personas, incluyendo entrada sin colas, guia autorizado y auriculares. Los grupos mas grandes pueden tener un pequeno suplemento.",
    },
    {
      q: "Puedo personalizar la ruta del tour?",
      a: "Por supuesto. Antes de tu tour, puedes comentar tus intereses con tu guia. Quieres centrarte en Botticelli? En la historia de los Medici? En un enfoque adaptado a ninos? Tu guia planificara la ruta segun tus preferencias.",
    },
    {
      q: "Es un tour privado bueno para ninos?",
      a: "Los tours privados son la mejor opcion para familias. Tu guia puede ajustar el ritmo, usar la narracion para involucrar a los ninos e incluir actividades divertidas como busquedas del tesoro artisticas. Los menores de 18 anos entran gratis.",
    },
    {
      q: "Con cuanta antelacion debo reservar?",
      a: "Reserva al menos 1 a 2 semanas antes durante la temporada alta (marzo a octubre). Durante festivos y fines de semana, los guias mas solicitados se agotan incluso antes. En temporada baja, normalmente se puede reservar con pocos dias de antelacion.",
    },
  ],
};

const content: PageContent<ToursPrivateContent> = { en, it, de, fr, es };

export function getToursPrivateContent(locale: string): ToursPrivateContent {
  return getContent(content, locale);
}
