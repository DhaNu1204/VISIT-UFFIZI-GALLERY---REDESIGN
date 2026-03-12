import { getContent, type PageContent } from "./types";

export type ToursContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  introParagraphs: string[];
  tourCards: {
    title: string;
    description: string;
  }[];
  whyGuided: {
    h2: string;
    paragraphs: string[];
  };
  whichTour: {
    h2: string;
    guided: { h3: string; p: string; link: string };
    private: { h3: string; p: string; link: string };
    combo: { h3: string; p: string; link: string };
  };
  whatToExpect: {
    h2: string;
    paragraphs: string[];
  };
  bookingCtaTitle: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
};

const en: ToursContent = {
  meta: {
    title: "Uffizi Gallery Tours 2026 | Guided, Private & Combo Tours",
    description:
      "Book an Uffizi Gallery tour with a licensed Florentine guide. Guided group tours, private tours & Uffizi + Accademia combos. Skip-the-line included.",
  },
  breadcrumb: "Tours",
  h1: "Uffizi Gallery Tours",
  introParagraphs: [
    "Let me share something most visitors discover too late: the Uffizi is overwhelming without context. Over 2,000 artworks across 101 rooms, spanning five centuries of art history. Without a guide, you'll walk past masterpieces without understanding why a particular brushstroke changed the course of Western art. With a licensed Florentine art historian by your side, every painting tells a story.",
    "All our recommended tours include skip-the-line entry — you bypass the queue entirely and start your experience the moment you arrive. Your guide handles everything: tickets, entry logistics, and navigation through the gallery's most important rooms.",
  ],
  tourCards: [
    {
      title: "Guided Uffizi Gallery Tour",
      description:
        "Small-group tour (max 15) led by a licensed art historian. Covers Botticelli, Leonardo, Michelangelo & more. Skip-the-line entry included.",
    },
    {
      title: "Private Uffizi Tour",
      description:
        "Your own expert guide at your own pace. Tailored to your interests — Renaissance masters, Medici history, or hidden gems. Perfect for families.",
    },
    {
      title: "Uffizi + Accademia Combo",
      description:
        "Both of Florence's greatest museums in one day. Uffizi in the morning, Michelangelo's David in the afternoon. Lunch break between visits.",
    },
  ],
  whyGuided: {
    h2: "Why Take a Guided Tour?",
    paragraphs: [
      "I used to think guides were for people who didn't do their homework. Then I took my first guided tour of the Uffizi with a Florentine art historian who had studied these paintings for decades. In two hours, she pointed out details I'd walked past a hundred times — the hidden self-portrait of Botticelli in his Adoration of the Magi, the way Leonardo's Annunciation uses a mathematical trick to appear three-dimensional, the political symbolism encoded in nearly every Medici commission.",
      "A good guide doesn't just recite facts. They bring the Renaissance to life — the rivalries between artists, the scandals of the Medici court, the technical innovations that changed how humans see the world. It's the difference between looking at a painting and seeing it.",
    ],
  },
  whichTour: {
    h2: "Which Tour Is Right for You?",
    guided: {
      h3: "Guided Group Tour — Best for Most Visitors",
      p: "The sweet spot between value and experience. Small groups (max 15 people) with a licensed guide, covering all the highlights in about 2 hours. You'll see Botticelli Hall, the Leonardo room, Michelangelo's Doni Tondo, and the panoramic terrace. Skip-the-line entry is included.",
      link: "Full details →",
    },
    private: {
      h3: "Private Tour — Best for Families & Enthusiasts",
      p: "Your own guide, your own pace, your own interests. Private tours can be customized — want to focus on Botticelli? Spend extra time with Leonardo? Have kids who need a more engaging approach? A private tour adapts to you. Typically 2.5 hours, with the option to extend.",
      link: "Full details →",
    },
    combo: {
      h3: "Uffizi + Accademia Combo — Best for First-Time Florence Visitors",
      p: "If this is your first time in Florence, this combo covers both must-see museums in one efficient day. Morning at the Uffizi for Renaissance paintings, a lunch break (on your own), then afternoon at the Accademia to see Michelangelo's David. Both skip-the-line entries included.",
      link: "Full details →",
    },
  },
  whatToExpect: {
    h2: "What to Expect on Your Tour",
    paragraphs: [
      "All tours follow a similar pattern. You'll meet your guide at a designated point near the Uffizi (usually Piazza della Signoria). They'll give a brief introduction to the gallery's history, then walk you through security via the priority entrance. Inside, your guide uses a whisper system so you can hear clearly even in crowded rooms.",
      "A typical guided route covers 15-20 key rooms, stopping at approximately 25-30 artworks. The guide won't rush you — there's always time for questions and photos. After the tour ends inside the gallery, you're free to continue exploring on your own. Your entry ticket doesn't have an expiration time once you're inside.",
    ],
  },
  bookingCtaTitle: "Book a Guided Uffizi Tour",
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      q: "How long is a guided Uffizi tour?",
      a: "Most guided tours are about 2 hours long, covering 15-20 key rooms and 25-30 major artworks. Private tours are typically 2.5 hours but can be extended. After the tour, you're free to continue exploring on your own.",
    },
    {
      q: "Are Uffizi tours worth the money?",
      a: "For first-time visitors, absolutely. A licensed guide transforms the experience — you'll understand not just what you're looking at, but why these paintings changed the history of art. The skip-the-line entry alone saves 1-3 hours of waiting.",
    },
    {
      q: "What's the difference between a guided and private tour?",
      a: "A guided tour is a small group (typically 10-15 people) following a set route at a fixed time. A private tour is just you and your guide — you choose the pace, the focus areas, and can ask as many questions as you want. Private tours cost more but offer a fully personalized experience.",
    },
    {
      q: "Can children join guided tours?",
      a: "Yes, children are welcome on most tours. For families with young children, a private tour is often better as the guide can adjust the content and pace. Some operators offer family-specific tours designed to keep kids engaged.",
    },
    {
      q: "What if my tour is cancelled?",
      a: "Most tours offer free cancellation up to 24 hours in advance. If the tour operator cancels (very rare), you'll receive a full refund or alternative date. Always check the specific cancellation policy when booking.",
    },
  ],
};

const it: ToursContent = {
  meta: {
    title: "Visite Guidate Uffizi 2026 | Tour Guidati, Privati e Combinati",
    description:
      "Prenota un tour degli Uffizi con guida fiorentina abilitata. Visite guidate, tour privati e combo Uffizi + Accademia. Ingresso salta la fila incluso.",
  },
  breadcrumb: "Tour",
  h1: "Tour della Galleria degli Uffizi",
  introParagraphs: [
    "C'è una cosa che molti visitatori capiscono troppo tardi: gli Uffizi, senza contesto, disorientano. Oltre 2.000 opere in 101 sale, cinque secoli di storia dell'arte. Senza una guida, passerai davanti a capolavori senza capire perché una certa pennellata ha cambiato il corso dell'arte occidentale. Con uno storico dell'arte fiorentino al tuo fianco, ogni dipinto racconta una storia.",
    "Tutti i tour che consigliamo includono l'ingresso salta la fila — salti completamente la coda e inizi la tua esperienza appena arrivi. La guida si occupa di tutto: biglietti, logistica d'ingresso e navigazione attraverso le sale più importanti della galleria.",
  ],
  tourCards: [
    {
      title: "Visita Guidata Galleria degli Uffizi",
      description:
        "Tour in piccoli gruppi (max 15) con storico dell'arte abilitato. Botticelli, Leonardo, Michelangelo e molto altro. Ingresso salta la fila incluso.",
    },
    {
      title: "Tour Privato degli Uffizi",
      description:
        "La tua guida personale, i tuoi ritmi. Su misura per i tuoi interessi — maestri del Rinascimento, storia dei Medici o gioielli nascosti. Perfetto per famiglie.",
    },
    {
      title: "Combo Uffizi + Accademia",
      description:
        "I due musei più importanti di Firenze in un giorno. Uffizi la mattina, il David di Michelangelo il pomeriggio. Pausa pranzo tra le due visite.",
    },
  ],
  whyGuided: {
    h2: "Perché Scegliere una Visita Guidata?",
    paragraphs: [
      "Pensavo che le visite guidate fossero per chi non si era preparato. Poi ho fatto il mio primo tour degli Uffizi con una storica dell'arte fiorentina che studiava questi dipinti da decenni. In due ore mi ha mostrato dettagli davanti ai quali ero passato cento volte — l'autoritratto nascosto di Botticelli nella sua Adorazione dei Magi, il trucco matematico con cui l'Annunciazione di Leonardo appare tridimensionale, il simbolismo politico codificato in quasi ogni commissione medicea.",
      "Una buona guida non si limita a recitare nozioni. Ti fa rivivere il Rinascimento — le rivalità tra artisti, gli scandali della corte medicea, le innovazioni tecniche che hanno cambiato il modo in cui l'umanità vede il mondo. È la differenza tra guardare un dipinto e vederlo davvero.",
    ],
  },
  whichTour: {
    h2: "Quale Tour Fa per Te?",
    guided: {
      h3: "Tour di Gruppo — Ideale per la Maggior Parte dei Visitatori",
      p: "Il miglior rapporto qualità-prezzo. Piccoli gruppi (max 15 persone) con guida abilitata, che copre tutti i punti salienti in circa 2 ore. Vedrai la Sala di Botticelli, la sala di Leonardo, il Tondo Doni di Michelangelo e la terrazza panoramica. Ingresso salta la fila incluso.",
      link: "Tutti i dettagli →",
    },
    private: {
      h3: "Tour Privato — Ideale per Famiglie e Appassionati",
      p: "La tua guida, i tuoi ritmi, i tuoi interessi. I tour privati sono personalizzabili — vuoi concentrarti su Botticelli? Dedicare più tempo a Leonardo? Hai bambini che hanno bisogno di un approccio più coinvolgente? Il tour privato si adatta a te. Dura circa 2,5 ore, con possibilità di prolungamento.",
      link: "Tutti i dettagli →",
    },
    combo: {
      h3: "Combo Uffizi + Accademia — Ideale per Chi Visita Firenze per la Prima Volta",
      p: "Se è la tua prima volta a Firenze, questo combo copre entrambi i musei imperdibili in una giornata. La mattina agli Uffizi per i dipinti rinascimentali, pausa pranzo (libera), poi il pomeriggio all'Accademia per ammirare il David di Michelangelo. Entrambi gli ingressi salta la fila inclusi.",
      link: "Tutti i dettagli →",
    },
  },
  whatToExpect: {
    h2: "Cosa Aspettarti dal Tour",
    paragraphs: [
      "Tutti i tour seguono una struttura simile. Incontrerai la guida in un punto designato vicino agli Uffizi (di solito Piazza della Signoria). Ti darà una breve introduzione sulla storia della galleria, poi ti accompagnerà attraverso i controlli di sicurezza dall'ingresso prioritario. All'interno, la guida usa un sistema di auricolari per farti sentire chiaramente anche nelle sale affollate.",
      "Un percorso guidato tipico copre 15-20 sale principali, con soste davanti a circa 25-30 opere. La guida non ti metterà fretta — c'è sempre tempo per domande e foto. Quando il tour finisce all'interno della galleria, sei libero di continuare a esplorare per conto tuo. Il tuo biglietto d'ingresso non ha scadenza una volta dentro.",
    ],
  },
  bookingCtaTitle: "Prenota una Visita Guidata agli Uffizi",
  faqTitle: "Domande Frequenti",
  faq: [
    {
      q: "Quanto dura una visita guidata agli Uffizi?",
      a: "La maggior parte delle visite guidate dura circa 2 ore, coprendo 15-20 sale principali e 25-30 opere importanti. I tour privati durano in genere 2,5 ore ma possono essere prolungati. Dopo il tour, sei libero di continuare a esplorare per conto tuo.",
    },
    {
      q: "Vale la pena fare un tour guidato agli Uffizi?",
      a: "Per chi visita per la prima volta, assolutamente sì. Una guida abilitata trasforma l'esperienza — capirai non solo cosa stai guardando, ma perché questi dipinti hanno cambiato la storia dell'arte. Il solo ingresso salta la fila ti fa risparmiare 1-3 ore di coda.",
    },
    {
      q: "Che differenza c'è tra tour guidato e tour privato?",
      a: "Il tour guidato è un piccolo gruppo (10-15 persone) che segue un percorso prestabilito a un orario fisso. Il tour privato è solo tu e la tua guida — scegli tu il ritmo, gli argomenti e puoi fare tutte le domande che vuoi. Il tour privato costa di più ma offre un'esperienza completamente personalizzata.",
    },
    {
      q: "I bambini possono partecipare alle visite guidate?",
      a: "Sì, i bambini sono benvenuti nella maggior parte dei tour. Per famiglie con bambini piccoli, il tour privato è spesso la scelta migliore perché la guida può adattare contenuti e ritmo. Alcuni operatori offrono tour pensati appositamente per le famiglie.",
    },
    {
      q: "Cosa succede se il tour viene cancellato?",
      a: "La maggior parte dei tour offre la cancellazione gratuita fino a 24 ore prima. Se l'operatore cancella il tour (cosa molto rara), riceverai un rimborso completo o una data alternativa. Controlla sempre la politica di cancellazione al momento della prenotazione.",
    },
  ],
};

const de: ToursContent = {
  meta: {
    title: "Uffizi Galerie Führungen 2026 | Geführte, Private & Kombi-Touren",
    description:
      "Buchen Sie eine Uffizi Galerie Führung mit lizenziertem Florentiner Kunsthistoriker. Gruppenführungen, Privattouren & Uffizi + Accademia Kombis. Ohne Anstehen.",
  },
  breadcrumb: "Touren",
  h1: "Uffizi Galerie Touren & Führungen",
  introParagraphs: [
    "Was viele Besucher erst zu spät erkennen: Die Uffizien sind ohne Kontext schlicht überwältigend. Über 2.000 Kunstwerke in 101 Sälen, fünf Jahrhunderte Kunstgeschichte. Ohne Führung gehen Sie an Meisterwerken vorbei, ohne zu verstehen, warum ein bestimmter Pinselstrich den Lauf der westlichen Kunst verändert hat. Mit einem lizenzierten Florentiner Kunsthistoriker an Ihrer Seite erzählt jedes Gemälde eine Geschichte.",
    "Alle unsere empfohlenen Touren beinhalten bevorzugten Einlass ohne Anstehen — Sie umgehen die Warteschlange vollständig und beginnen Ihr Erlebnis sofort nach Ankunft. Ihr Guide kümmert sich um alles: Tickets, Einlasslogistik und die Navigation durch die wichtigsten Säle der Galerie.",
  ],
  tourCards: [
    {
      title: "Geführte Uffizi Galerie Tour",
      description:
        "Kleingruppen-Führung (max. 15 Personen) mit lizenziertem Kunsthistoriker. Botticelli, Leonardo, Michelangelo und mehr. Einlass ohne Anstehen inklusive.",
    },
    {
      title: "Private Uffizi Führung",
      description:
        "Ihr persönlicher Experte in Ihrem eigenen Tempo. Maßgeschneidert nach Ihren Interessen — Renaissance-Meister, Medici-Geschichte oder verborgene Schätze. Ideal für Familien.",
    },
    {
      title: "Uffizi + Accademia Kombi-Tour",
      description:
        "Beide großen Florentiner Museen an einem Tag. Vormittags die Uffizien, nachmittags Michelangelos David in der Accademia. Mittagspause zwischen den Besuchen.",
    },
  ],
  whyGuided: {
    h2: "Warum eine geführte Tour buchen?",
    paragraphs: [
      "Ich dachte früher, Führungen seien für Besucher, die sich nicht vorbereitet hatten. Dann nahm ich an meiner ersten Uffizi-Führung mit einer Florentiner Kunsthistorikerin teil, die diese Gemälde seit Jahrzehnten studiert hatte. In zwei Stunden zeigte sie mir Details, an denen ich hunderte Male vorbeigegangen war — das versteckte Selbstporträt Botticellis in seiner Anbetung der Könige, den mathematischen Trick, mit dem Leonardos Verkündigung dreidimensional erscheint, die politische Symbolik, die in nahezu jedem Medici-Auftrag verschlüsselt ist.",
      "Ein guter Guide rezitiert nicht einfach Fakten. Er erweckt die Renaissance zum Leben — die Rivalitäten zwischen Künstlern, die Skandale am Medici-Hof, die technischen Innovationen, die verändert haben, wie die Menschheit die Welt sieht. Es ist der Unterschied zwischen ein Gemälde anzuschauen und es wirklich zu sehen.",
    ],
  },
  whichTour: {
    h2: "Welche Tour passt zu Ihnen?",
    guided: {
      h3: "Gruppenführung — Die beste Wahl für die meisten Besucher",
      p: "Das optimale Verhältnis von Preis und Erlebnis. Kleine Gruppen (max. 15 Personen) mit lizenziertem Guide, alle Highlights in etwa 2 Stunden. Sie sehen den Botticelli-Saal, den Leonardo-Raum, Michelangelos Tondo Doni und die Panoramaterrasse. Einlass ohne Anstehen ist inklusive.",
      link: "Alle Details →",
    },
    private: {
      h3: "Privatführung — Ideal für Familien & Kunstbegeisterte",
      p: "Ihr eigener Guide, Ihr eigenes Tempo, Ihre eigenen Schwerpunkte. Privatführungen sind individuell gestaltbar — möchten Sie sich auf Botticelli konzentrieren? Mehr Zeit bei Leonardo verbringen? Reisen Sie mit Kindern, die einen spielerischeren Zugang brauchen? Eine Privatführung passt sich an Sie an. In der Regel 2,5 Stunden, mit Verlängerungsmöglichkeit.",
      link: "Alle Details →",
    },
    combo: {
      h3: "Uffizi + Accademia Kombi — Ideal beim ersten Florenz-Besuch",
      p: "Wenn Sie zum ersten Mal in Florenz sind, deckt dieses Kombi-Angebot beide Pflichtmuseen an einem Tag ab. Vormittags die Uffizien mit ihren Renaissance-Gemälden, Mittagspause in Eigenregie, nachmittags die Accademia mit Michelangelos David. Beide Eintritte ohne Anstehen inklusive.",
      link: "Alle Details →",
    },
  },
  whatToExpect: {
    h2: "Was Sie bei Ihrer Führung erwartet",
    paragraphs: [
      "Alle Touren folgen einem ähnlichen Ablauf. Sie treffen Ihren Guide an einem festgelegten Treffpunkt nahe den Uffizien (in der Regel Piazza della Signoria). Nach einer kurzen Einführung in die Geschichte der Galerie führt er Sie über den Prioritätseingang durch die Sicherheitskontrolle. Im Inneren nutzt Ihr Guide ein Flüstersystem mit Kopfhörern, damit Sie auch in vollen Sälen alles klar verstehen.",
      "Eine typische Führung umfasst 15–20 wichtige Säle mit Halt vor etwa 25–30 Kunstwerken. Der Guide hetzt Sie nicht — es bleibt immer Zeit für Fragen und Fotos. Nach Ende der Führung innerhalb der Galerie können Sie auf eigene Faust weiter erkunden. Ihr Eintrittticket hat nach dem Einlass keine zeitliche Begrenzung.",
    ],
  },
  bookingCtaTitle: "Geführte Uffizi Tour buchen",
  faqTitle: "Häufig gestellte Fragen",
  faq: [
    {
      q: "Wie lange dauert eine geführte Uffizi-Tour?",
      a: "Die meisten Gruppenführungen dauern etwa 2 Stunden und umfassen 15–20 wichtige Säle mit 25–30 bedeutenden Kunstwerken. Privatführungen dauern in der Regel 2,5 Stunden, können aber verlängert werden. Nach der Tour können Sie die Galerie auf eigene Faust weiter erkunden.",
    },
    {
      q: "Lohnt sich eine geführte Tour durch die Uffizien?",
      a: "Für Erstbesucher auf jeden Fall. Ein lizenzierter Guide verwandelt das Erlebnis — Sie verstehen nicht nur, was Sie sehen, sondern warum diese Gemälde die Kunstgeschichte verändert haben. Allein der Einlass ohne Anstehen spart Ihnen 1–3 Stunden Wartezeit.",
    },
    {
      q: "Was ist der Unterschied zwischen Gruppenführung und Privatführung?",
      a: "Bei der Gruppenführung folgen 10–15 Personen einer festgelegten Route zu einer festen Uhrzeit. Bei der Privatführung sind nur Sie und Ihr Guide unterwegs — Sie bestimmen das Tempo, die Schwerpunkte und können so viele Fragen stellen, wie Sie möchten. Privatführungen kosten mehr, bieten aber ein vollständig individuelles Erlebnis.",
    },
    {
      q: "Können Kinder an der Gruppenführung teilnehmen?",
      a: "Ja, Kinder sind bei den meisten Touren willkommen. Für Familien mit kleinen Kindern ist eine Privatführung oft besser, da der Guide Inhalte und Tempo anpassen kann. Einige Anbieter bieten spezielle Familienführungen an, die auf Kinder zugeschnitten sind.",
    },
    {
      q: "Was passiert, wenn meine Tour storniert wird?",
      a: "Die meisten Touren bieten kostenlose Stornierung bis 24 Stunden vor Beginn. Falls der Anbieter die Tour absagt (sehr selten), erhalten Sie eine vollständige Rückerstattung oder einen Alternativtermin. Prüfen Sie beim Buchen immer die genauen Stornierungsbedingungen.",
    },
  ],
};

const fr: ToursContent = {
  meta: {
    title: "Visites Guidees Offices 2026 | Tours Guides, Prives & Combos",
    description:
      "Reservez une visite guidee de la Galerie des Offices avec un guide florentin agree. Visites en groupe, tours prives & combos Offices + Accademia. Coupe-file inclus.",
  },
  breadcrumb: "Visites",
  h1: "Visites de la Galerie des Offices",
  introParagraphs: [
    "Permettez-moi de partager ce que la plupart des visiteurs decouvrent trop tard : la Galerie des Offices est ecrasante sans contexte. Plus de 2 000 oeuvres reparties dans 101 salles, couvrant cinq siecles d'histoire de l'art. Sans guide, vous passerez devant des chefs-d'oeuvre sans comprendre pourquoi un certain coup de pinceau a change le cours de l'art occidental. Avec un historien de l'art florentin a vos cotes, chaque tableau raconte une histoire.",
    "Toutes nos visites recommandees incluent l'entree coupe-file -- vous evitez entierement la queue et commencez votre experience des votre arrivee. Votre guide s'occupe de tout : billets, logistique d'entree et parcours a travers les salles les plus importantes de la galerie.",
  ],
  tourCards: [
    {
      title: "Visite Guidee de la Galerie des Offices",
      description:
        "Visite en petit groupe (max 15) avec un historien de l'art agree. Botticelli, Leonard de Vinci, Michel-Ange et plus encore. Entree coupe-file incluse.",
    },
    {
      title: "Visite Privee des Offices",
      description:
        "Votre propre guide expert, a votre rythme. Adapte a vos interets -- maitres de la Renaissance, histoire des Medicis ou tresors caches. Ideal pour les familles.",
    },
    {
      title: "Combo Offices + Accademia",
      description:
        "Les deux plus grands musees de Florence en une journee. Les Offices le matin, le David de Michel-Ange l'apres-midi. Pause dejeuner entre les deux visites.",
    },
  ],
  whyGuided: {
    h2: "Pourquoi choisir une visite guidee des Offices ?",
    paragraphs: [
      "Je pensais autrefois que les visites guidees etaient pour ceux qui n'avaient pas fait leurs recherches. Puis j'ai fait ma premiere visite guidee des Offices avec une historienne de l'art florentine qui etudiait ces tableaux depuis des decennies. En deux heures, elle m'a montre des details devant lesquels j'etais passe des centaines de fois -- l'autoportrait cache de Botticelli dans son Adoration des Mages, l'astuce mathematique par laquelle l'Annonciation de Leonard de Vinci parait tridimensionnelle, le symbolisme politique encode dans presque chaque commande des Medicis.",
      "Un bon guide ne se contente pas de reciter des faits. Il fait revivre la Renaissance -- les rivalites entre artistes, les scandales de la cour des Medicis, les innovations techniques qui ont change la facon dont l'humanite voit le monde. C'est la difference entre regarder un tableau et le voir vraiment.",
    ],
  },
  whichTour: {
    h2: "Quelle visite guidee des Offices vous convient ?",
    guided: {
      h3: "Visite en Groupe -- Le meilleur choix pour la plupart des visiteurs",
      p: "Le meilleur equilibre entre prix et experience. Petits groupes (max 15 personnes) avec un guide agree, couvrant tous les points forts en environ 2 heures. Vous verrez la Salle Botticelli, la salle Leonard de Vinci, le Tondo Doni de Michel-Ange et la terrasse panoramique. Entree coupe-file incluse.",
      link: "Tous les details \u2192",
    },
    private: {
      h3: "Visite Privee -- Ideal pour les familles et les passionnes",
      p: "Votre propre guide, votre propre rythme, vos propres centres d'interet. Les visites privees sont personnalisables -- vous souhaitez vous concentrer sur Botticelli ? Passer plus de temps avec Leonard de Vinci ? Vous voyagez avec des enfants qui ont besoin d'une approche plus ludique ? La visite privee s'adapte a vous. Environ 2h30, avec possibilite de prolongation.",
      link: "Tous les details \u2192",
    },
    combo: {
      h3: "Combo Offices + Accademia -- Ideal pour une premiere visite a Florence",
      p: "Si c'est votre premiere visite a Florence, ce combo couvre les deux musees incontournables en une journee. Les Offices le matin pour les peintures de la Renaissance, une pause dejeuner (libre), puis l'Accademia l'apres-midi pour admirer le David de Michel-Ange. Les deux entrees coupe-file incluses.",
      link: "Tous les details \u2192",
    },
  },
  whatToExpect: {
    h2: "A quoi s'attendre lors de votre visite guidee",
    paragraphs: [
      "Toutes les visites suivent un deroulement similaire. Vous retrouverez votre guide a un point de rendez-vous designe pres des Offices (generalement Piazza della Signoria). Il vous donnera une breve introduction sur l'histoire de la galerie, puis vous accompagnera a travers les controles de securite par l'entree prioritaire. A l'interieur, votre guide utilise un systeme de chuchotement avec ecouteurs pour que vous puissiez entendre clairement meme dans les salles bondees.",
      "Un parcours guide typique couvre 15 a 20 salles cles, avec des arrets devant environ 25 a 30 oeuvres. Le guide ne vous pressera pas -- il y a toujours du temps pour les questions et les photos. A la fin de la visite a l'interieur de la galerie, vous etes libre de continuer a explorer par vous-meme. Votre billet d'entree n'a pas de limite de temps une fois que vous etes a l'interieur.",
    ],
  },
  bookingCtaTitle: "Reservez une visite guidee des Offices",
  faqTitle: "Questions Frequentes",
  faq: [
    {
      q: "Combien de temps dure une visite guidee des Offices ?",
      a: "La plupart des visites guidees durent environ 2 heures, couvrant 15 a 20 salles cles et 25 a 30 oeuvres majeures. Les visites privees durent generalement 2h30 mais peuvent etre prolongees. Apres la visite, vous etes libre de continuer a explorer par vous-meme.",
    },
    {
      q: "Une visite guidee des Offices vaut-elle le prix ?",
      a: "Pour les visiteurs qui decouvrent le musee pour la premiere fois, absolument. Un guide agree transforme l'experience -- vous comprendrez non seulement ce que vous regardez, mais pourquoi ces peintures ont change l'histoire de l'art. L'entree coupe-file seule vous fait economiser 1 a 3 heures d'attente.",
    },
    {
      q: "Quelle est la difference entre une visite guidee et une visite privee ?",
      a: "La visite guidee est un petit groupe (generalement 10 a 15 personnes) suivant un parcours defini a un horaire fixe. La visite privee, c'est vous et votre guide uniquement -- vous choisissez le rythme, les themes et vous pouvez poser autant de questions que vous le souhaitez. La visite privee coute plus cher mais offre une experience entierement personnalisee.",
    },
    {
      q: "Les enfants peuvent-ils participer aux visites guidees ?",
      a: "Oui, les enfants sont les bienvenus dans la plupart des visites. Pour les familles avec de jeunes enfants, une visite privee est souvent preferable car le guide peut adapter le contenu et le rythme. Certains operateurs proposent des visites specifiquement concues pour les familles.",
    },
    {
      q: "Que se passe-t-il si ma visite est annulee ?",
      a: "La plupart des visites offrent l'annulation gratuite jusqu'a 24 heures a l'avance. Si l'operateur annule la visite (tres rare), vous recevrez un remboursement complet ou une date alternative. Verifiez toujours la politique d'annulation au moment de la reservation.",
    },
  ],
};

const es: ToursContent = {
  meta: {
    title: "Tours Uffizi 2026 | Visitas Guiadas, Privadas y Combinadas",
    description:
      "Reserva un tour de la Galeria Uffizi con guia florentino autorizado. Visitas guiadas, tours privados y combos Uffizi + Accademia. Entrada sin colas incluida.",
  },
  breadcrumb: "Tours",
  h1: "Tours de la Galeria Uffizi",
  introParagraphs: [
    "Permiteme compartir algo que la mayoria de los visitantes descubren demasiado tarde: los Uffizi son abrumadores sin contexto. Mas de 2.000 obras en 101 salas, abarcando cinco siglos de historia del arte. Sin un guia, pasaras frente a obras maestras sin entender por que una pincelada concreta cambio el curso del arte occidental. Con un historiador del arte florentino a tu lado, cada cuadro cuenta una historia.",
    "Todos nuestros tours recomendados incluyen entrada sin colas -- te saltas la fila por completo y comienzas tu experiencia en el momento en que llegas. Tu guia se encarga de todo: entradas, logistica de acceso y recorrido por las salas mas importantes de la galeria.",
  ],
  tourCards: [
    {
      title: "Visita Guiada a la Galeria Uffizi",
      description:
        "Tour en grupo reducido (max 15) con un historiador del arte autorizado. Botticelli, Leonardo, Miguel Angel y mas. Entrada sin colas incluida.",
    },
    {
      title: "Tour Privado de los Uffizi",
      description:
        "Tu propio guia experto, a tu ritmo. Adaptado a tus intereses -- maestros del Renacimiento, historia de los Medici o joyas ocultas. Perfecto para familias.",
    },
    {
      title: "Combo Uffizi + Accademia",
      description:
        "Los dos museos mas importantes de Florencia en un dia. Los Uffizi por la manana, el David de Miguel Angel por la tarde. Pausa para almorzar entre ambas visitas.",
    },
  ],
  whyGuided: {
    h2: "Por que elegir una visita guiada por los Uffizi?",
    paragraphs: [
      "Solia pensar que las visitas guiadas eran para quienes no habian hecho su tarea. Entonces hice mi primera visita guiada a los Uffizi con una historiadora del arte florentina que habia estudiado estos cuadros durante decadas. En dos horas, me senalo detalles ante los que habia pasado cientos de veces -- el autorretrato oculto de Botticelli en su Adoracion de los Magos, el truco matematico con el que la Anunciacion de Leonardo parece tridimensional, el simbolismo politico codificado en casi cada encargo de los Medici.",
      "Un buen guia no se limita a recitar datos. Hace revivir el Renacimiento -- las rivalidades entre artistas, los escandalos de la corte de los Medici, las innovaciones tecnicas que cambiaron la forma en que la humanidad ve el mundo. Es la diferencia entre mirar un cuadro y verlo de verdad.",
    ],
  },
  whichTour: {
    h2: "Cual es el tour Uffizi adecuado para ti?",
    guided: {
      h3: "Tour en Grupo -- La mejor opcion para la mayoria de los visitantes",
      p: "El mejor equilibrio entre precio y experiencia. Grupos reducidos (max 15 personas) con guia autorizado, cubriendo todos los puntos destacados en unas 2 horas. Veras la Sala Botticelli, la sala de Leonardo, el Tondo Doni de Miguel Angel y la terraza panoramica. Entrada sin colas incluida.",
      link: "Todos los detalles \u2192",
    },
    private: {
      h3: "Tour Privado -- Ideal para familias y entusiastas",
      p: "Tu propio guia, tu propio ritmo, tus propios intereses. Los tours privados son personalizables -- quieres centrarte en Botticelli? Dedicar mas tiempo a Leonardo? Viajas con ninos que necesitan un enfoque mas dinamico? El tour privado se adapta a ti. Normalmente 2,5 horas, con opcion de ampliacion.",
      link: "Todos los detalles \u2192",
    },
    combo: {
      h3: "Combo Uffizi + Accademia -- Ideal para quienes visitan Florencia por primera vez",
      p: "Si es tu primera vez en Florencia, este combo cubre los dos museos imprescindibles en un solo dia. Los Uffizi por la manana para las pinturas renacentistas, una pausa para almorzar (por tu cuenta) y la Accademia por la tarde para admirar el David de Miguel Angel. Ambas entradas sin colas incluidas.",
      link: "Todos los detalles \u2192",
    },
  },
  whatToExpect: {
    h2: "Que esperar de tu visita guiada Uffizi",
    paragraphs: [
      "Todos los tours siguen una estructura similar. Te encontraras con tu guia en un punto de encuentro designado cerca de los Uffizi (normalmente en la Piazza della Signoria). Te dara una breve introduccion sobre la historia de la galeria y luego te acompanara a traves del control de seguridad por la entrada prioritaria. En el interior, tu guia utiliza un sistema de susurro con auriculares para que puedas escuchar con claridad incluso en las salas mas concurridas.",
      "Un recorrido guiado tipico cubre entre 15 y 20 salas clave, con paradas ante unas 25 a 30 obras. El guia no te metera prisa -- siempre hay tiempo para preguntas y fotos. Cuando la visita termina dentro de la galeria, eres libre de seguir explorando por tu cuenta. Tu entrada no tiene limite de tiempo una vez que estas dentro.",
    ],
  },
  bookingCtaTitle: "Reserva una visita guiada a los Uffizi",
  faqTitle: "Preguntas Frecuentes",
  faq: [
    {
      q: "Cuanto dura una visita guiada a los Uffizi?",
      a: "La mayoria de las visitas guiadas duran unas 2 horas, cubriendo entre 15 y 20 salas clave y entre 25 y 30 obras importantes. Los tours privados suelen durar 2,5 horas, pero pueden ampliarse. Despues del tour, eres libre de seguir explorando por tu cuenta.",
    },
    {
      q: "Merece la pena una visita guiada a los Uffizi?",
      a: "Para quienes visitan por primera vez, absolutamente. Un guia autorizado transforma la experiencia -- entenderas no solo lo que estas mirando, sino por que estas pinturas cambiaron la historia del arte. Solo la entrada sin colas te ahorra entre 1 y 3 horas de espera.",
    },
    {
      q: "Cual es la diferencia entre un tour guiado y un tour privado?",
      a: "El tour guiado es un grupo reducido (generalmente 10-15 personas) que sigue un recorrido establecido en un horario fijo. El tour privado sois solo tu y tu guia -- tu eliges el ritmo, los temas y puedes hacer todas las preguntas que quieras. El tour privado cuesta mas, pero ofrece una experiencia completamente personalizada.",
    },
    {
      q: "Pueden los ninos participar en las visitas guiadas?",
      a: "Si, los ninos son bienvenidos en la mayoria de los tours. Para familias con ninos pequenos, un tour privado suele ser mejor, ya que el guia puede adaptar el contenido y el ritmo. Algunos operadores ofrecen tours especificamente disenados para familias.",
    },
    {
      q: "Que pasa si mi tour se cancela?",
      a: "La mayoria de los tours ofrecen cancelacion gratuita hasta 24 horas antes. Si el operador cancela el tour (algo muy raro), recibiras un reembolso completo o una fecha alternativa. Consulta siempre la politica de cancelacion al momento de reservar.",
    },
  ],
};

const content: PageContent<ToursContent> = { en, it, de, fr, es };

export function getToursContent(locale: string): ToursContent {
  return getContent(content, locale);
}
