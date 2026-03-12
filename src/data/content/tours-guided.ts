import { getContent, type PageContent } from "./types";

export type ToursGuidedContent = {
  meta: { title: string; description: string };
  breadcrumbs: { tours: string; guidedTour: string };
  h1: string;
  intro: string;
  bookingCtaTop: string;
  whatYouSee: {
    h2: string;
    p: string;
    highlights: { label: string; text: string }[];
  };
  tourDetails: {
    h2: string;
    duration: { label: string; value: string };
    groupSize: { label: string; value: string };
    languages: { label: string; value: string };
    meetingPoint: { label: string; value: string };
    includes: { label: string; value: string };
    cancellation: { label: string; value: string };
  };
  guides: {
    h2: string;
    p: string;
  };
  tips: {
    h2: string;
    items: string[];
  };
  bookingCtaBottom: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
};

const en: ToursGuidedContent = {
  meta: {
    title: "Uffizi Gallery Guided Tour 2026 | Expert-Led, Skip the Line",
    description:
      "Join a small-group Uffizi guided tour with a licensed Florentine art historian. Skip the line, see Botticelli, Leonardo & Michelangelo. From \u20AC49.",
  },
  breadcrumbs: {
    tours: "Tours",
    guidedTour: "Guided Tour",
  },
  h1: "Uffizi Gallery Guided Tour",
  intro:
    "Imagine standing in front of Botticelli's Birth of Venus while a Florentine art historian explains why the goddess's pose mirrors an ancient Roman sculpture, how the orange trees behind her reference the Medici family's coat of arms, and why Botticelli himself appears as a figure in the crowd of his other masterpiece, Primavera. That's what a guided tour gives you \u2014 not just access, but understanding.",
  bookingCtaTop: "Guided Uffizi Gallery Tour",
  whatYouSee: {
    h2: "What You'll See",
    p: "Your guide will lead you through the Uffizi's most important rooms in a carefully planned route that follows the evolution of Italian art. Here are the highlights you'll experience:",
    highlights: [
      {
        label: "Room 2 \u2014 Giotto's Revolution:",
        text: "See how one artist broke free from the flat, gold-ground style of the Middle Ages and invented naturalism. Compare the three great Maest\u00E0 panels side by side.",
      },
      {
        label: "Rooms 10-14 \u2014 Botticelli Hall:",
        text: "The centerpiece of the entire Uffizi. Stand before the Birth of Venus and Primavera \u2014 two paintings so iconic they define an entire era. Your guide will reveal the hidden symbolism most visitors never notice.",
      },
      {
        label: "Room 35 \u2014 Leonardo & Michelangelo:",
        text: "See Leonardo's Annunciation, painted when he was just 20, and Michelangelo's Doni Tondo \u2014 his only finished panel painting, with colors so vivid they seem to glow.",
      },
      {
        label: "Room 66 \u2014 Raphael:",
        text: "The Madonna of the Goldfinch, damaged in a building collapse and painstakingly restored over decades.",
      },
      {
        label: "Room 83 \u2014 Titian:",
        text: "The Venus of Urbino, a painting so provocative that Mark Twain called it \"the foulest, the vilest, the obscenest picture the world possesses.\" Your guide will explain why it's actually a masterpiece of composition and color.",
      },
      {
        label: "The Panoramic Terrace:",
        text: "A brief stop at the second-floor terrace with stunning views over the Piazza della Signoria and the Palazzo Vecchio tower.",
      },
    ],
  },
  tourDetails: {
    h2: "Tour Details",
    duration: { label: "Duration", value: "Approximately 2 hours" },
    groupSize: { label: "Group Size", value: "Maximum 15 people" },
    languages: {
      label: "Languages",
      value: "English, Italian, Spanish, French, German",
    },
    meetingPoint: {
      label: "Meeting Point",
      value: "Piazza della Signoria (exact location sent after booking)",
    },
    includes: {
      label: "Includes",
      value: "Skip-the-line ticket, licensed guide, audio headsets",
    },
    cancellation: {
      label: "Cancellation",
      value: "Free up to 24 hours before",
    },
  },
  guides: {
    h2: "Who Are the Guides?",
    p: "All guides are licensed by the Italian Ministry of Cultural Heritage. Most hold degrees in art history from the University of Florence and have been leading tours for years. They're not reading from a script \u2014 they're sharing their genuine passion for the art they grew up with. Many of them can answer questions about techniques, materials, and art theory that go far beyond the standard tour narrative.",
  },
  tips: {
    h2: "Tips for Your Tour",
    items: [
      "Arrive 10-15 minutes before the meeting time",
      "Wear comfortable shoes \u2014 you'll be standing and walking for 2 hours",
      "Bring your charged phone \u2014 you'll want to take photos",
      "Don't bring large bags \u2014 they must be checked and can delay your entry",
      "After the tour, stay to explore rooms your guide didn't cover \u2014 your ticket lets you stay until closing",
    ],
  },
  bookingCtaBottom: "Book Your Guided Uffizi Tour",
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      q: "How big is the tour group?",
      a: "Groups are limited to 15 people maximum. This ensures everyone can hear the guide clearly and see the artworks without crowding. Audio headsets are provided so you can hear the guide even when standing at the back.",
    },
    {
      q: "Can I explore on my own after the guided tour?",
      a: "Yes! After the 2-hour guided portion ends, you're free to stay in the Uffizi as long as you want. Many visitors spend an additional 1-2 hours exploring rooms the tour didn't cover.",
    },
    {
      q: "Is this tour suitable for children?",
      a: "Children are welcome, but the standard guided tour is designed for adults. For families with young children, consider a private tour where the guide can adapt content and pacing. Children under 18 enter free but must be accompanied by an adult.",
    },
    {
      q: "What happens if it rains?",
      a: "The tour is entirely indoors, so rain doesn't affect the experience. You'll meet your guide outside at Piazza della Signoria, so bring an umbrella for the brief outdoor meeting point \u2014 then it's straight inside.",
    },
  ],
};

const it: ToursGuidedContent = {
  meta: {
    title: "Visita Guidata Uffizi 2026 | Tour con Guida Esperta, Salta la Fila",
    description:
      "Partecipa a una visita guidata agli Uffizi in piccolo gruppo con storico dell'arte fiorentino. Salta la fila, ammira Botticelli, Leonardo e Michelangelo. Da \u20AC49.",
  },
  breadcrumbs: {
    tours: "Tour",
    guidedTour: "Visita Guidata",
  },
  h1: "Visita Guidata alla Galleria degli Uffizi",
  intro:
    "Immagina di trovarti davanti alla Nascita di Venere di Botticelli mentre uno storico dell'arte fiorentino ti spiega perch\u00E9 la posa della dea richiama una scultura romana antica, come gli aranci sullo sfondo rimandino allo stemma dei Medici, e perch\u00E9 Botticelli stesso appare tra la folla nel suo altro capolavoro, la Primavera. Questo ti offre una visita guidata agli Uffizi \u2014 non solo l'accesso, ma la comprensione.",
  bookingCtaTop: "Visita Guidata Galleria degli Uffizi",
  whatYouSee: {
    h2: "Cosa Vedrai",
    p: "La guida ti accompagner\u00E0 attraverso le sale pi\u00F9 importanti degli Uffizi seguendo un percorso studiato che ripercorre l'evoluzione dell'arte italiana. Ecco i punti salienti della visita:",
    highlights: [
      {
        label: "Sala 2 \u2014 La Rivoluzione di Giotto:",
        text: "Scopri come un solo artista si liber\u00F2 dallo stile piatto e su fondo oro del Medioevo, inventando il naturalismo. Confronta le tre grandi Maest\u00E0 una accanto all'altra.",
      },
      {
        label: "Sale 10-14 \u2014 Sala di Botticelli:",
        text: "Il cuore di tutto il museo. Ammira la Nascita di Venere e la Primavera \u2014 due dipinti cos\u00EC iconici da definire un'intera epoca. La guida ti sveler\u00E0 il simbolismo nascosto che la maggior parte dei visitatori non nota.",
      },
      {
        label: "Sala 35 \u2014 Leonardo e Michelangelo:",
        text: "Ammira l'Annunciazione di Leonardo, dipinta quando aveva solo 20 anni, e il Tondo Doni di Michelangelo \u2014 il suo unico dipinto su tavola completato, con colori cos\u00EC vividi da sembrare luminescenti.",
      },
      {
        label: "Sala 66 \u2014 Raffaello:",
        text: "La Madonna del Cardellino, danneggiata dal crollo di un edificio e pazientemente restaurata nel corso di decenni.",
      },
      {
        label: "Sala 83 \u2014 Tiziano:",
        text: "La Venere di Urbino, un dipinto cos\u00EC provocatorio che Mark Twain lo defin\u00EC \"il quadro pi\u00F9 volgare e osceno che il mondo possieda\". La guida ti spiegher\u00E0 perch\u00E9 \u00E8 in realt\u00E0 un capolavoro di composizione e colore.",
      },
      {
        label: "La Terrazza Panoramica:",
        text: "Una breve sosta sulla terrazza del secondo piano con una vista mozzafiato su Piazza della Signoria e la torre di Palazzo Vecchio.",
      },
    ],
  },
  tourDetails: {
    h2: "Dettagli del Tour",
    duration: { label: "Durata", value: "Circa 2 ore" },
    groupSize: { label: "Gruppo", value: "Massimo 15 persone" },
    languages: {
      label: "Lingue",
      value: "Italiano, inglese, spagnolo, francese, tedesco",
    },
    meetingPoint: {
      label: "Punto d'incontro",
      value: "Piazza della Signoria (posizione esatta inviata dopo la prenotazione)",
    },
    includes: {
      label: "Include",
      value: "Biglietto salta la fila, guida abilitata, auricolari",
    },
    cancellation: {
      label: "Cancellazione",
      value: "Gratuita fino a 24 ore prima",
    },
  },
  guides: {
    h2: "Chi Sono le Guide?",
    p: "Tutte le guide sono abilitate dal Ministero dei Beni Culturali italiano. La maggior parte \u00E8 laureata in storia dell'arte all'Universit\u00E0 di Firenze e conduce visite guidate da anni. Non leggono da un copione \u2014 condividono la passione autentica per l'arte con cui sono cresciuti. Molti di loro sanno rispondere a domande su tecniche, materiali e teoria dell'arte che vanno ben oltre il racconto standard del tour.",
  },
  tips: {
    h2: "Consigli per la Visita",
    items: [
      "Arriva 10-15 minuti prima dell'orario di incontro",
      "Indossa scarpe comode \u2014 starai in piedi e camminerai per 2 ore",
      "Porta il telefono carico \u2014 vorrai scattare foto",
      "Non portare borse grandi \u2014 vanno lasciate al guardaroba e possono ritardare l'ingresso",
      "Dopo il tour, fermati a esplorare le sale non coperte dalla guida \u2014 il biglietto ti permette di restare fino alla chiusura",
    ],
  },
  bookingCtaBottom: "Prenota la Tua Visita Guidata agli Uffizi",
  faqTitle: "Domande Frequenti",
  faq: [
    {
      q: "Quante persone ci sono nel gruppo?",
      a: "I gruppi sono limitati a massimo 15 persone. Questo garantisce che tutti possano sentire la guida chiaramente e vedere le opere senza ressa. Vengono forniti auricolari per sentire la guida anche stando in fondo al gruppo.",
    },
    {
      q: "Posso esplorare per conto mio dopo la visita guidata?",
      a: "Certo! Al termine delle 2 ore di visita guidata, sei libero di restare agli Uffizi quanto vuoi. Molti visitatori trascorrono 1-2 ore aggiuntive esplorando le sale non coperte dal tour.",
    },
    {
      q: "Il tour \u00E8 adatto ai bambini?",
      a: "I bambini sono i benvenuti, ma il tour guidato standard \u00E8 pensato per gli adulti. Per le famiglie con bambini piccoli, consigliamo un tour privato in cui la guida pu\u00F2 adattare contenuti e ritmo. I minori di 18 anni entrano gratis ma devono essere accompagnati da un adulto.",
    },
    {
      q: "Cosa succede se piove?",
      a: "Il tour si svolge interamente al coperto, quindi la pioggia non influisce sull'esperienza. Incontrerai la guida all'aperto in Piazza della Signoria, quindi porta un ombrello per il breve momento all'esterno \u2014 poi si entra subito dentro.",
    },
  ],
};

const de: ToursGuidedContent = {
  meta: {
    title: "Geführte Uffizi Tour 2026 | Führung mit Kunstexperte, ohne Anstehen",
    description:
      "Geführte Uffizi Galerie Tour in Kleingruppe mit lizenziertem Florentiner Kunsthistoriker. Ohne Anstehen, Botticelli, Leonardo & Michelangelo. Ab 49 €.",
  },
  breadcrumbs: {
    tours: "Touren",
    guidedTour: "Geführte Tour",
  },
  h1: "Geführte Tour durch die Uffizi Galerie",
  intro:
    "Stellen Sie sich vor, Sie stehen vor Botticellis Geburt der Venus, während Ihnen ein Florentiner Kunsthistoriker erklärt, warum die Pose der Göttin eine antike römische Skulptur widerspiegelt, wie die Orangenbäume im Hintergrund auf das Wappen der Medici verweisen und warum Botticelli selbst als Figur in der Menge seines anderen Meisterwerks, der Primavera, auftaucht. Genau das bietet Ihnen eine geführte Uffizi Tour — nicht nur Zugang, sondern echtes Verständnis.",
  bookingCtaTop: "Geführte Uffizi Galerie Tour",
  whatYouSee: {
    h2: "Was Sie sehen werden",
    p: "Ihr Guide führt Sie durch die bedeutendsten Säle der Uffizien auf einer sorgfältig geplanten Route, die der Entwicklung der italienischen Kunst folgt. Dies sind die Höhepunkte Ihres Rundgangs:",
    highlights: [
      {
        label: "Saal 2 — Giottos Revolution:",
        text: "Erleben Sie, wie ein einziger Künstler sich vom flachen, goldgrundigen Stil des Mittelalters befreite und den Naturalismus erfand. Vergleichen Sie die drei großen Maestà-Tafeln direkt nebeneinander.",
      },
      {
        label: "Säle 10–14 — Botticelli-Saal:",
        text: "Das Herzstück der gesamten Uffizien. Stehen Sie vor der Geburt der Venus und der Primavera — zwei Gemälde, so ikonisch, dass sie eine ganze Epoche definieren. Ihr Guide enthüllt die verborgene Symbolik, die den meisten Besuchern entgeht.",
      },
      {
        label: "Saal 35 — Leonardo & Michelangelo:",
        text: "Bestaunen Sie Leonardos Verkündigung, gemalt im Alter von nur 20 Jahren, und Michelangelos Tondo Doni — sein einziges vollendetes Tafelbild mit so lebhaften Farben, dass sie regelrecht zu leuchten scheinen.",
      },
      {
        label: "Saal 66 — Raffael:",
        text: "Die Madonna mit dem Stieglitz, durch einen Gebäudeeinsturz beschädigt und über Jahrzehnte hinweg aufwendig restauriert.",
      },
      {
        label: "Saal 83 — Tizian:",
        text: 'Die Venus von Urbino — ein Gemälde so provokant, dass Mark Twain es als "das gemeinste, niedrigste und obszönste Bild, das die Welt besitzt" bezeichnete. Ihr Guide erklärt Ihnen, warum es tatsächlich ein Meisterwerk der Komposition und Farbgebung ist.',
      },
      {
        label: "Die Panoramaterrasse:",
        text: "Ein kurzer Halt auf der Terrasse im zweiten Stock mit atemberaubendem Blick über die Piazza della Signoria und den Turm des Palazzo Vecchio.",
      },
    ],
  },
  tourDetails: {
    h2: "Tour-Details",
    duration: { label: "Dauer", value: "Etwa 2 Stunden" },
    groupSize: { label: "Gruppengröße", value: "Maximal 15 Personen" },
    languages: {
      label: "Sprachen",
      value: "Deutsch, Englisch, Italienisch, Spanisch, Französisch",
    },
    meetingPoint: {
      label: "Treffpunkt",
      value: "Piazza della Signoria (genauer Standort wird nach der Buchung mitgeteilt)",
    },
    includes: {
      label: "Inklusive",
      value: "Eintrittskarte ohne Anstehen, lizenzierter Guide, Audio-Headsets",
    },
    cancellation: {
      label: "Stornierung",
      value: "Kostenlos bis 24 Stunden vorher",
    },
  },
  guides: {
    h2: "Wer sind die Guides?",
    p: "Alle Guides sind vom italienischen Kulturministerium lizenziert. Die meisten haben Kunstgeschichte an der Universität Florenz studiert und führen seit Jahren Besuchergruppen durch die Galerie. Sie lesen nicht von einem Skript ab — sie teilen ihre echte Leidenschaft für die Kunst, mit der sie aufgewachsen sind. Viele von ihnen können Fragen zu Techniken, Materialien und Kunsttheorie beantworten, die weit über die übliche Tourerzählung hinausgehen.",
  },
  tips: {
    h2: "Tipps für Ihren Besuch",
    items: [
      "Seien Sie 10–15 Minuten vor der vereinbarten Treffzeit vor Ort",
      "Tragen Sie bequeme Schuhe — Sie werden 2 Stunden lang stehen und gehen",
      "Bringen Sie Ihr aufgeladenes Handy mit — Sie werden fotografieren wollen",
      "Verzichten Sie auf große Taschen — diese müssen abgegeben werden und können den Einlass verzögern",
      "Bleiben Sie nach der Führung, um Säle zu erkunden, die Ihr Guide nicht behandelt hat — Ihr Ticket gilt bis zur Schließung",
    ],
  },
  bookingCtaBottom: "Geführte Uffizi Tour jetzt buchen",
  faqTitle: "Häufig gestellte Fragen",
  faq: [
    {
      q: "Wie groß ist die Gruppe bei der Führung?",
      a: "Gruppen sind auf maximal 15 Personen begrenzt. So kann jeder den Guide klar verstehen und die Kunstwerke ohne Gedränge betrachten. Audio-Headsets werden bereitgestellt, damit Sie den Guide auch vom hinteren Teil der Gruppe aus hören.",
    },
    {
      q: "Kann ich nach der Führung auf eigene Faust weiter erkunden?",
      a: "Ja, selbstverständlich! Nach dem zweistündigen geführten Teil können Sie so lange in den Uffizien bleiben, wie Sie möchten. Viele Besucher verbringen noch 1–2 zusätzliche Stunden in Sälen, die der Rundgang nicht abgedeckt hat.",
    },
    {
      q: "Ist die Tour für Kinder geeignet?",
      a: "Kinder sind willkommen, allerdings ist die reguläre Gruppenführung auf Erwachsene ausgelegt. Für Familien mit kleinen Kindern empfehlen wir eine Privatführung, bei der der Guide Inhalte und Tempo anpassen kann. Kinder und Jugendliche unter 18 Jahren haben freien Eintritt, müssen aber von einem Erwachsenen begleitet werden.",
    },
    {
      q: "Was passiert bei Regen?",
      a: "Die Tour findet vollständig in Innenräumen statt, Regen beeinträchtigt das Erlebnis also nicht. Sie treffen Ihren Guide draußen an der Piazza della Signoria — bringen Sie für diesen kurzen Moment im Freien einen Regenschirm mit, danach geht es direkt hinein.",
    },
  ],
};

const fr: ToursGuidedContent = {
  meta: {
    title: "Visite Guidee Offices 2026 | Avec Expert, Coupe-file",
    description:
      "Visite guidee de la Galerie des Offices en petit groupe avec historien de l'art florentin agree. Coupe-file, Botticelli, Leonard de Vinci et Michel-Ange. Des 49 EUR.",
  },
  breadcrumbs: {
    tours: "Visites",
    guidedTour: "Visite Guidee",
  },
  h1: "Visite Guidee de la Galerie des Offices",
  intro:
    "Imaginez-vous devant la Naissance de Venus de Botticelli tandis qu'un historien de l'art florentin vous explique pourquoi la pose de la deesse reprend celle d'une sculpture romaine antique, comment les orangers en arriere-plan font reference aux armoiries des Medicis, et pourquoi Botticelli lui-meme apparait dans la foule de son autre chef-d'oeuvre, le Printemps. Voila ce qu'une visite guidee des Offices vous offre -- non seulement l'acces, mais la comprehension.",
  bookingCtaTop: "Visite Guidee Galerie des Offices",
  whatYouSee: {
    h2: "Ce que vous verrez",
    p: "Votre guide vous conduira a travers les salles les plus importantes des Offices selon un parcours soigneusement concu qui retrace l'evolution de l'art italien. Voici les temps forts de votre visite :",
    highlights: [
      {
        label: "Salle 2 -- La Revolution de Giotto :",
        text: "Decouvrez comment un seul artiste s'est affranchi du style plat a fond dore du Moyen Age pour inventer le naturalisme. Comparez les trois grandes Maesta cote a cote.",
      },
      {
        label: "Salles 10-14 -- Salle Botticelli :",
        text: "Le coeur de tout le musee. Admirez la Naissance de Venus et le Printemps -- deux tableaux si emblematiques qu'ils definissent une epoque entiere. Votre guide vous revelera le symbolisme cache que la plupart des visiteurs ne remarquent jamais.",
      },
      {
        label: "Salle 35 -- Leonard de Vinci et Michel-Ange :",
        text: "Contemplez l'Annonciation de Leonard de Vinci, peinte alors qu'il n'avait que 20 ans, et le Tondo Doni de Michel-Ange -- son seul tableau sur bois acheve, aux couleurs si vives qu'elles semblent irradier.",
      },
      {
        label: "Salle 66 -- Raphael :",
        text: "La Madone au Chardonneret, endommagee lors de l'effondrement d'un batiment et patiemment restauree au fil des decennies.",
      },
      {
        label: "Salle 83 -- Titien :",
        text: "La Venus d'Urbino, un tableau si provocant que Mark Twain l'a qualifie de \"la plus vile, la plus ignoble et la plus obscene peinture que le monde possede\". Votre guide vous expliquera pourquoi c'est en realite un chef-d'oeuvre de composition et de couleur.",
      },
      {
        label: "La Terrasse Panoramique :",
        text: "Un bref arret sur la terrasse du deuxieme etage offrant une vue imprenable sur la Piazza della Signoria et la tour du Palazzo Vecchio.",
      },
    ],
  },
  tourDetails: {
    h2: "Details de la Visite",
    duration: { label: "Duree", value: "Environ 2 heures" },
    groupSize: { label: "Taille du groupe", value: "15 personnes maximum" },
    languages: {
      label: "Langues",
      value: "Francais, anglais, italien, espagnol, allemand",
    },
    meetingPoint: {
      label: "Point de rendez-vous",
      value: "Piazza della Signoria (emplacement exact communique apres la reservation)",
    },
    includes: {
      label: "Inclus",
      value: "Billet coupe-file, guide agree, casques audio",
    },
    cancellation: {
      label: "Annulation",
      value: "Gratuite jusqu'a 24 heures avant",
    },
  },
  guides: {
    h2: "Qui sont les guides ?",
    p: "Tous les guides sont agrees par le Ministere italien du Patrimoine culturel. La plupart sont diplomes en histoire de l'art de l'Universite de Florence et menent des visites guidees depuis des annees. Ils ne lisent pas un texte appris par coeur -- ils partagent leur veritable passion pour l'art avec lequel ils ont grandi. Beaucoup d'entre eux peuvent repondre a des questions sur les techniques, les materiaux et la theorie de l'art qui vont bien au-dela du recit habituel d'une visite.",
  },
  tips: {
    h2: "Conseils pour votre visite",
    items: [
      "Arrivez 10 a 15 minutes avant l'heure du rendez-vous",
      "Portez des chaussures confortables -- vous serez debout et marcherez pendant 2 heures",
      "Apportez votre telephone charge -- vous voudrez prendre des photos",
      "N'apportez pas de grands sacs -- ils doivent etre deposes au vestiaire et peuvent retarder votre entree",
      "Apres la visite, restez pour explorer les salles non couvertes par le guide -- votre billet vous permet de rester jusqu'a la fermeture",
    ],
  },
  bookingCtaBottom: "Reservez votre visite guidee des Offices",
  faqTitle: "Questions Frequentes",
  faq: [
    {
      q: "Quelle est la taille du groupe pour la visite guidee ?",
      a: "Les groupes sont limites a 15 personnes maximum. Cela garantit que chacun puisse entendre le guide clairement et voir les oeuvres sans cohue. Des casques audio sont fournis pour entendre le guide meme depuis l'arriere du groupe.",
    },
    {
      q: "Puis-je explorer par moi-meme apres la visite guidee ?",
      a: "Bien sur ! A la fin des 2 heures de visite guidee, vous etes libre de rester aux Offices aussi longtemps que vous le souhaitez. De nombreux visiteurs passent 1 a 2 heures supplementaires a explorer les salles non couvertes par la visite.",
    },
    {
      q: "Cette visite est-elle adaptee aux enfants ?",
      a: "Les enfants sont les bienvenus, mais la visite guidee standard est concue pour les adultes. Pour les familles avec de jeunes enfants, envisagez une visite privee ou le guide peut adapter le contenu et le rythme. Les moins de 18 ans entrent gratuitement mais doivent etre accompagnes d'un adulte.",
    },
    {
      q: "Que se passe-t-il s'il pleut ?",
      a: "La visite se deroule entierement en interieur, la pluie n'affecte donc pas l'experience. Vous retrouverez votre guide en exterieur sur la Piazza della Signoria -- prevoyez un parapluie pour ce bref moment dehors, puis c'est directement a l'interieur.",
    },
  ],
};

const es: ToursGuidedContent = {
  meta: {
    title: "Visita Guiada Uffizi 2026 | Con Experto, Sin Colas",
    description:
      "Visita guiada a la Galeria Uffizi en grupo reducido con historiador del arte florentino autorizado. Sin colas, Botticelli, Leonardo y Miguel Angel. Desde 49 EUR.",
  },
  breadcrumbs: {
    tours: "Tours",
    guidedTour: "Visita Guiada",
  },
  h1: "Visita Guiada a la Galeria Uffizi",
  intro:
    "Imagina estar frente al Nacimiento de Venus de Botticelli mientras un historiador del arte florentino te explica por que la postura de la diosa reproduce la de una escultura romana antigua, como los naranjos del fondo hacen referencia al escudo de los Medici, y por que el propio Botticelli aparece como un personaje entre la multitud de su otra obra maestra, la Primavera. Eso es lo que te ofrece una visita guiada a los Uffizi -- no solo acceso, sino comprension.",
  bookingCtaTop: "Visita Guiada Galeria Uffizi",
  whatYouSee: {
    h2: "Que veras",
    p: "Tu guia te llevara a traves de las salas mas importantes de los Uffizi siguiendo un recorrido cuidadosamente planificado que sigue la evolucion del arte italiano. Estos son los puntos destacados de tu visita:",
    highlights: [
      {
        label: "Sala 2 -- La Revolucion de Giotto:",
        text: "Descubre como un solo artista rompio con el estilo plano y de fondo dorado de la Edad Media e invento el naturalismo. Compara los tres grandes paneles de la Maesta uno junto a otro.",
      },
      {
        label: "Salas 10-14 -- Sala Botticelli:",
        text: "El corazon de todo el museo. Contempla el Nacimiento de Venus y la Primavera -- dos cuadros tan iconicos que definen toda una epoca. Tu guia te revelara el simbolismo oculto que la mayoria de los visitantes nunca nota.",
      },
      {
        label: "Sala 35 -- Leonardo y Miguel Angel:",
        text: "Admira la Anunciacion de Leonardo, pintada cuando tenia solo 20 anos, y el Tondo Doni de Miguel Angel -- su unico cuadro sobre tabla terminado, con colores tan vividos que parecen brillar.",
      },
      {
        label: "Sala 66 -- Rafael:",
        text: "La Virgen del Jilguero, danada en el derrumbe de un edificio y pacientemente restaurada a lo largo de decadas.",
      },
      {
        label: "Sala 83 -- Tiziano:",
        text: "La Venus de Urbino, un cuadro tan provocador que Mark Twain lo llamo \"la pintura mas vil, mas baja y mas obscena que posee el mundo\". Tu guia te explicara por que en realidad es una obra maestra de composicion y color.",
      },
      {
        label: "La Terraza Panoramica:",
        text: "Una breve parada en la terraza del segundo piso con vistas impresionantes sobre la Piazza della Signoria y la torre del Palazzo Vecchio.",
      },
    ],
  },
  tourDetails: {
    h2: "Detalles del Tour",
    duration: { label: "Duracion", value: "Aproximadamente 2 horas" },
    groupSize: { label: "Tamano del grupo", value: "Maximo 15 personas" },
    languages: {
      label: "Idiomas",
      value: "Espanol, ingles, italiano, frances, aleman",
    },
    meetingPoint: {
      label: "Punto de encuentro",
      value: "Piazza della Signoria (ubicacion exacta enviada tras la reserva)",
    },
    includes: {
      label: "Incluye",
      value: "Entrada sin colas, guia autorizado, auriculares de audio",
    },
    cancellation: {
      label: "Cancelacion",
      value: "Gratuita hasta 24 horas antes",
    },
  },
  guides: {
    h2: "Quienes son los guias?",
    p: "Todos los guias estan autorizados por el Ministerio italiano de Patrimonio Cultural. La mayoria tiene titulos en historia del arte por la Universidad de Florencia y lleva anos dirigiendo visitas. No leen de un guion -- comparten su autentica pasion por el arte con el que crecieron. Muchos de ellos pueden responder preguntas sobre tecnicas, materiales y teoria del arte que van mucho mas alla de la narrativa estandar del tour.",
  },
  tips: {
    h2: "Consejos para tu visita",
    items: [
      "Llega 10-15 minutos antes de la hora de encuentro",
      "Lleva calzado comodo -- estaras de pie y caminando durante 2 horas",
      "Trae tu telefono cargado -- querras hacer fotos",
      "No traigas bolsas grandes -- deben dejarse en el guardarropa y pueden retrasar tu entrada",
      "Despues del tour, quedate a explorar las salas que tu guia no cubrio -- tu entrada te permite permanecer hasta el cierre",
    ],
  },
  bookingCtaBottom: "Reserva tu visita guiada a los Uffizi",
  faqTitle: "Preguntas Frecuentes",
  faq: [
    {
      q: "Cual es el tamano del grupo en la visita guiada?",
      a: "Los grupos estan limitados a un maximo de 15 personas. Esto garantiza que todos puedan escuchar al guia con claridad y ver las obras sin aglomeraciones. Se proporcionan auriculares de audio para que puedas escuchar al guia incluso desde la parte trasera del grupo.",
    },
    {
      q: "Puedo explorar por mi cuenta despues de la visita guiada?",
      a: "Por supuesto! Tras las 2 horas de visita guiada, eres libre de quedarte en los Uffizi todo el tiempo que quieras. Muchos visitantes dedican 1-2 horas adicionales a explorar salas que el tour no cubrio.",
    },
    {
      q: "Es adecuado este tour para ninos?",
      a: "Los ninos son bienvenidos, pero la visita guiada estandar esta disenada para adultos. Para familias con ninos pequenos, considera un tour privado donde el guia pueda adaptar el contenido y el ritmo. Los menores de 18 anos entran gratis, pero deben ir acompanados de un adulto.",
    },
    {
      q: "Que pasa si llueve?",
      a: "El tour se realiza completamente en interiores, asi que la lluvia no afecta la experiencia. Te encontraras con tu guia al aire libre en la Piazza della Signoria -- lleva un paraguas para ese breve momento en el exterior y luego se entra directamente.",
    },
  ],
};

const content: PageContent<ToursGuidedContent> = { en, it, de, fr, es };

export function getToursGuidedContent(locale: string): ToursGuidedContent {
  return getContent(content, locale);
}
