import { getContent, type PageContent } from "./types";

export type ToursComboContent = {
  meta: { title: string; description: string };
  breadcrumbs: { tours: string; comboTour: string };
  h1: string;
  intro: string;
  bookingCtaTop: string;
  yourDay: {
    h2: string;
    morning: { h3: string; p: string };
    lunch: { h3: string; p: string };
    afternoon: { h3: string; p1: string; p2: string; p3: string };
  };
  tourDetails: {
    h2: string;
    details: { label: string; value: string }[];
  };
  worthIt: {
    h2: string;
    intro: string;
    items: string[];
    total: string;
    closing: string;
  };
  bookingCtaBottom: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
};

const en: ToursComboContent = {
  meta: {
    title: "Uffizi & Accademia Combo Tour 2026 | Both Museums, One Day",
    description:
      "See the Uffizi Gallery and Accademia (Michelangelo's David) in one day. Skip-the-line entry to both museums with a licensed guide. From \u20AC89.",
  },
  breadcrumbs: {
    tours: "Tours",
    comboTour: "Uffizi + Accademia",
  },
  h1: "Uffizi & Accademia Combo Tour",
  intro:
    "If you only have one full day for museums in Florence, this is how to spend it. The Uffizi Gallery and the Galleria dell'Accademia are the city's two essential museums \u2014 one holds the greatest collection of Renaissance paintings in the world, the other is home to the most famous sculpture ever created. This combo tour covers both with skip-the-line entry and an expert guide.",
  bookingCtaTop: "Uffizi + Accademia Combo Tour",
  yourDay: {
    h2: "Your Day: How It Works",
    morning: {
      h3: "Morning: Uffizi Gallery (2 hours)",
      p: "You'll meet your guide at Piazza della Signoria and walk straight into the Uffizi via the priority entrance. Over the next two hours, your guide leads you through the gallery's greatest hits: Botticelli's Birth of Venus and Primavera, Leonardo's Annunciation, Michelangelo's Doni Tondo, Raphael's Madonna of the Goldfinch, and Titian's Venus of Urbino. You'll understand how each artist pushed the boundaries of what painting could be.",
    },
    lunch: {
      h3: "Lunch Break (1 hour, on your own)",
      p: "After the Uffizi, you'll have about an hour for lunch. Your guide will recommend nearby restaurants \u2014 not the tourist traps on the main streets, but the places where Florentines actually eat. Try a lampredotto sandwich from a street cart (a Florence specialty) or sit down for a plate of ribollita at a trattoria.",
    },
    afternoon: {
      h3: "Afternoon: Accademia Gallery (1.5 hours)",
      p1: "The Accademia is a 15-minute walk from the Uffizi, through the heart of Florence. Your guide will point out landmarks along the way \u2014 the Duomo, the Baptistery, the Medici Chapels. At the Accademia, you'll skip the line (which can be even longer than the Uffizi) and head straight to the main event: Michelangelo's David.",
      p2: "Standing at 17 feet tall, carved from a single block of Carrara marble that two other sculptors had already rejected, the David is genuinely breathtaking in person. No photograph prepares you for the scale and the detail \u2014 the veins on his hands, the tension in his neck. Your guide will explain the sculpture's remarkable history and point out anatomical details that reveal Michelangelo's genius.",
      p3: "You'll also see Michelangelo's unfinished Prisoners (Slaves), four figures that seem to struggle to free themselves from the marble. These give a rare insight into Michelangelo's sculpting process \u2014 he believed the figure was already inside the stone, and his job was to liberate it.",
    },
  },
  tourDetails: {
    h2: "Tour Details",
    details: [
      { label: "Total Duration", value: "~5 hours (including lunch break)" },
      { label: "Uffizi Time", value: "2 hours guided" },
      { label: "Accademia Time", value: "1.5 hours guided" },
      { label: "Group Size", value: "Maximum 15 people" },
      { label: "Includes", value: "Skip-the-line to both, guide, headsets" },
      { label: "Cancellation", value: "Free up to 24 hours before" },
    ],
  },
  worthIt: {
    h2: "Is the Combo Tour Worth It?",
    intro: "Let's do the math. Buying separately:",
    items: [
      "Uffizi skip-the-line ticket: ~\u20AC20\u201329",
      "Accademia skip-the-line ticket: ~\u20AC20\u201325",
      "Guided Uffizi tour: ~\u20AC49",
      "Guided Accademia tour: ~\u20AC39",
    ],
    total: "Total if bought separately: ~\u20AC88\u201393+",
    closing:
      "The combo tour starts at \u20AC89 and includes everything \u2014 skip-the-line entry to both museums, a licensed guide for both, and headsets. You save money and time, and you don't have to organize logistics between the two visits. For first-time Florence visitors, it's the most efficient way to see both museums.",
  },
  bookingCtaBottom: "Book Uffizi + Accademia Combo Tour",
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      q: "How long is the Uffizi and Accademia combo tour?",
      a: "The total experience takes about 5 hours: 2 hours at the Uffizi, approximately 1 hour for lunch (on your own), and 1.5 hours at the Accademia. You'll meet your guide in the morning and finish in the early afternoon.",
    },
    {
      q: "Is lunch included in the combo tour?",
      a: "Lunch is not included, but the hour-long break gives you time to eat. Your guide will recommend nearby restaurants and local favorites. Budget about \u20AC10\u201320 for a casual Florentine lunch.",
    },
    {
      q: "Can I do the combo tour in reverse order?",
      a: "Most combo tours start at the Uffizi in the morning, but some operators offer flexibility. Check when booking if you prefer to visit the Accademia first. Morning slots at the Uffizi tend to be less crowded.",
    },
    {
      q: "Is this tour too long for children?",
      a: "Five hours is a lot for young children. For families with kids under 10, consider doing the museums on separate days or booking a private tour that can be shortened and adapted. Children under 18 enter both museums free.",
    },
  ],
};

const it: ToursComboContent = {
  meta: {
    title: "Tour Uffizi e Accademia 2026 | Due Musei in un Giorno",
    description:
      "Visita Uffizi e Accademia (il David di Michelangelo) in un giorno. Ingresso salta la fila a entrambi i musei con guida abilitata. Da \u20AC89.",
  },
  breadcrumbs: {
    tours: "Tour",
    comboTour: "Uffizi + Accademia",
  },
  h1: "Tour Combinato Uffizi e Accademia",
  intro:
    "Se avete solo una giornata intera per i musei a Firenze, ecco come sfruttarla al meglio. La Galleria degli Uffizi e la Galleria dell'Accademia sono i due musei imprescindibili della citt\u00E0 \u2014 uno conserva la pi\u00F9 grande collezione di dipinti rinascimentali al mondo, l'altro ospita la scultura pi\u00F9 famosa mai realizzata. Questo tour combinato li copre entrambi con ingresso salta la fila e una guida esperta.",
  bookingCtaTop: "Tour Combinato Uffizi + Accademia",
  yourDay: {
    h2: "La vostra giornata: come funziona",
    morning: {
      h3: "Mattina: Galleria degli Uffizi (2 ore)",
      p: "Incontrerete la guida in Piazza della Signoria ed entrerete direttamente agli Uffizi dall'ingresso prioritario. Nelle due ore successive, la guida vi condurr\u00E0 attraverso i capolavori della galleria: la Nascita di Venere e la Primavera di Botticelli, l'Annunciazione di Leonardo, il Tondo Doni di Michelangelo, la Madonna del Cardellino di Raffaello e la Venere di Urbino di Tiziano. Capirete come ogni artista abbia spinto i confini di ci\u00F2 che la pittura poteva essere.",
    },
    lunch: {
      h3: "Pausa pranzo (1 ora, per conto vostro)",
      p: "Dopo gli Uffizi, avrete circa un'ora per il pranzo. La guida vi consiglier\u00E0 ristoranti nelle vicinanze \u2014 non le trappole per turisti sulle strade principali, ma i posti dove mangiano davvero i fiorentini. Provate un panino al lampredotto da un chiosco ambulante (specialit\u00E0 fiorentina) o sedetevi per un piatto di ribollita in trattoria.",
    },
    afternoon: {
      h3: "Pomeriggio: Galleria dell'Accademia (1,5 ore)",
      p1: "L'Accademia si trova a 15 minuti a piedi dagli Uffizi, attraverso il cuore di Firenze. La guida vi indicher\u00E0 i monumenti lungo il tragitto \u2014 il Duomo, il Battistero, le Cappelle Medicee. All'Accademia salterete la fila (che pu\u00F2 essere anche pi\u00F9 lunga di quella degli Uffizi) e andrete dritti all'evento principale: il David di Michelangelo.",
      p2: "Alto oltre 5 metri, scolpito da un unico blocco di marmo di Carrara che altri due scultori avevano gi\u00E0 rifiutato, il David \u00E8 davvero mozzafiato dal vivo. Nessuna fotografia vi prepara alla scala e al dettaglio \u2014 le vene sulle mani, la tensione nel collo. La guida vi racconter\u00E0 la straordinaria storia della scultura e vi indicher\u00E0 i dettagli anatomici che rivelano il genio di Michelangelo.",
      p3: "Vedrete anche i Prigioni (Schiavi) incompiuti di Michelangelo, quattro figure che sembrano lottare per liberarsi dal marmo. Offrono un raro sguardo sul processo scultoreo di Michelangelo \u2014 credeva che la figura fosse gi\u00E0 dentro la pietra, e il suo compito fosse liberarla.",
    },
  },
  tourDetails: {
    h2: "Dettagli del tour",
    details: [
      { label: "Durata totale", value: "~5 ore (pausa pranzo inclusa)" },
      { label: "Tempo agli Uffizi", value: "2 ore con guida" },
      { label: "Tempo all'Accademia", value: "1,5 ore con guida" },
      { label: "Gruppo", value: "Massimo 15 persone" },
      { label: "Include", value: "Salta la fila per entrambi, guida, auricolari" },
      { label: "Cancellazione", value: "Gratuita fino a 24 ore prima" },
    ],
  },
  worthIt: {
    h2: "Il tour combinato conviene?",
    intro: "Facciamo due conti. Acquistando separatamente:",
    items: [
      "Biglietto salta la fila Uffizi: ~\u20AC20\u201329",
      "Biglietto salta la fila Accademia: ~\u20AC20\u201325",
      "Tour guidato Uffizi: ~\u20AC49",
      "Tour guidato Accademia: ~\u20AC39",
    ],
    total: "Totale acquistando separatamente: ~\u20AC88\u201393+",
    closing:
      "Il tour combinato parte da \u20AC89 e include tutto \u2014 ingresso salta la fila a entrambi i musei, guida abilitata per entrambi e auricolari. Risparmiate tempo e denaro, e non dovete organizzare la logistica tra le due visite. Per chi visita Firenze per la prima volta, \u00E8 il modo pi\u00F9 efficiente per vedere entrambi i musei.",
  },
  bookingCtaBottom: "Prenota il tour combinato Uffizi + Accademia",
  faqTitle: "Domande frequenti",
  faq: [
    {
      q: "Quanto dura il tour combinato Uffizi e Accademia?",
      a: "L'esperienza totale dura circa 5 ore: 2 ore agli Uffizi, circa 1 ora per il pranzo (per conto vostro) e 1,5 ore all'Accademia. Incontrerete la guida al mattino e finirete nel primo pomeriggio.",
    },
    {
      q: "Il pranzo \u00E8 incluso nel tour combinato?",
      a: "Il pranzo non \u00E8 incluso, ma la pausa di un'ora vi d\u00E0 il tempo per mangiare. La guida vi consiglier\u00E0 ristoranti vicini e locali tipici. Prevedete circa \u20AC10\u201320 per un pranzo fiorentino informale.",
    },
    {
      q: "Posso fare il tour combinato in ordine inverso?",
      a: "La maggior parte dei tour combinati inizia agli Uffizi al mattino, ma alcuni operatori offrono flessibilit\u00E0. Verificate al momento della prenotazione se preferite visitare prima l'Accademia. Le fasce mattutine agli Uffizi tendono ad essere meno affollate.",
    },
    {
      q: "Questo tour \u00E8 troppo lungo per i bambini?",
      a: "Cinque ore sono tante per i bambini piccoli. Per le famiglie con bambini sotto i 10 anni, considerate di visitare i musei in giorni separati o di prenotare un tour privato che pu\u00F2 essere accorciato e adattato. I minori di 18 anni entrano gratis in entrambi i musei.",
    },
  ],
};

const de: ToursComboContent = {
  meta: {
    title: "Uffizi & Accademia Kombi-Tour 2026 | Beide Museen, ein Tag",
    description:
      "Uffizi Galerie und Accademia (Michelangelos David) an einem Tag. Eintritt ohne Anstehen in beide Museen mit lizenziertem Guide. Ab 89 \u20AC.",
  },
  breadcrumbs: {
    tours: "Touren",
    comboTour: "Uffizi + Accademia",
  },
  h1: "Uffizi & Accademia Kombi-Tour",
  intro:
    "Wenn Sie nur einen vollen Tag f\u00FCr Museen in Florenz haben, sollten Sie ihn so verbringen. Die Uffizi Galerie und die Galleria dell'Accademia sind die beiden unverzichtbaren Museen der Stadt \u2014 das eine beherbergt die gr\u00F6\u00DFte Sammlung von Renaissance-Gem\u00E4lden weltweit, das andere die ber\u00FChmteste Skulptur, die je geschaffen wurde. Diese Kombi-Tour umfasst beide mit Eintritt ohne Anstehen und einem fachkundigen Guide.",
  bookingCtaTop: "Uffizi + Accademia Kombi-Tour",
  yourDay: {
    h2: "Ihr Tag: So funktioniert es",
    morning: {
      h3: "Vormittag: Uffizi Galerie (2 Stunden)",
      p: "Sie treffen Ihren Guide an der Piazza della Signoria und gehen direkt \u00FCber den Priorit\u00E4tseingang in die Uffizien. In den folgenden zwei Stunden f\u00FChrt Ihr Guide Sie zu den gr\u00F6\u00DFten Meisterwerken der Galerie: Botticellis Geburt der Venus und Primavera, Leonardos Verk\u00FCndigung, Michelangelos Tondo Doni, Raffaels Madonna mit dem Stieglitz und Tizians Venus von Urbino. Sie werden verstehen, wie jeder K\u00FCnstler die Grenzen der Malerei verschoben hat.",
    },
    lunch: {
      h3: "Mittagspause (1 Stunde, auf eigene Faust)",
      p: "Nach den Uffizien haben Sie etwa eine Stunde f\u00FCr das Mittagessen. Ihr Guide empfiehlt Ihnen Restaurants in der N\u00E4he \u2014 nicht die Touristenfallen an den Hauptstra\u00DFen, sondern die Orte, an denen Florentiner wirklich essen. Probieren Sie ein Lampredotto-Sandwich von einem Stra\u00DFenstand (eine Florentiner Spezialit\u00E4t) oder setzen Sie sich f\u00FCr einen Teller Ribollita in eine Trattoria.",
    },
    afternoon: {
      h3: "Nachmittag: Accademia Galerie (1,5 Stunden)",
      p1: "Die Accademia ist 15 Gehminuten von den Uffizien entfernt, mitten durch das Herz von Florenz. Ihr Guide zeigt Ihnen unterwegs Sehensw\u00FCrdigkeiten \u2014 den Dom, das Baptisterium, die Medici-Kapellen. An der Accademia \u00FCberspringen Sie die Warteschlange (die sogar l\u00E4nger als bei den Uffizien sein kann) und gehen direkt zum Hauptereignis: Michelangelos David.",
      p2: "\u00DCber 5 Meter hoch, aus einem einzigen Block Carrara-Marmor gemeisselt, den zwei andere Bildhauer bereits abgelehnt hatten, ist der David in natura wirklich atemberaubend. Kein Foto bereitet Sie auf die Gr\u00F6\u00DFe und die Details vor \u2014 die Adern an seinen H\u00E4nden, die Spannung in seinem Hals. Ihr Guide erkl\u00E4rt die bemerkenswerte Geschichte der Skulptur und weist auf anatomische Details hin, die Michelangelos Genie offenbaren.",
      p3: "Sie sehen auch Michelangelos unvollendete Gefangene (Sklaven), vier Figuren, die sich aus dem Marmor zu befreien scheinen. Diese geben einen seltenen Einblick in Michelangelos Bildhauerprozess \u2014 er glaubte, die Figur sei bereits im Stein, und seine Aufgabe sei es, sie zu befreien.",
    },
  },
  tourDetails: {
    h2: "Tour-Details",
    details: [
      { label: "Gesamtdauer", value: "~5 Stunden (inkl. Mittagspause)" },
      { label: "Zeit in den Uffizien", value: "2 Stunden mit Guide" },
      { label: "Zeit in der Accademia", value: "1,5 Stunden mit Guide" },
      { label: "Gruppengr\u00F6\u00DFe", value: "Maximal 15 Personen" },
      { label: "Inklusive", value: "Ohne Anstehen in beide, Guide, Headsets" },
      { label: "Stornierung", value: "Kostenlos bis 24 Stunden vorher" },
    ],
  },
  worthIt: {
    h2: "Lohnt sich die Kombi-Tour?",
    intro: "Rechnen wir nach. Einzeln gekauft:",
    items: [
      "Uffizi-Ticket ohne Anstehen: ~20\u201329 \u20AC",
      "Accademia-Ticket ohne Anstehen: ~20\u201325 \u20AC",
      "Gef\u00FChrte Uffizi-Tour: ~49 \u20AC",
      "Gef\u00FChrte Accademia-Tour: ~39 \u20AC",
    ],
    total: "Gesamtkosten einzeln: ~88\u201393+ \u20AC",
    closing:
      "Die Kombi-Tour beginnt bei 89 \u20AC und beinhaltet alles \u2014 Eintritt ohne Anstehen in beide Museen, einen lizenzierten Guide f\u00FCr beide und Headsets. Sie sparen Geld und Zeit und m\u00FCssen die Logistik zwischen den beiden Besuchen nicht selbst organisieren. F\u00FCr Florenz-Erstbesucher ist es die effizienteste Art, beide Museen zu sehen.",
  },
  bookingCtaBottom: "Uffizi + Accademia Kombi-Tour buchen",
  faqTitle: "H\u00E4ufig gestellte Fragen",
  faq: [
    {
      q: "Wie lange dauert die Uffizi und Accademia Kombi-Tour?",
      a: "Das Gesamterlebnis dauert etwa 5 Stunden: 2 Stunden in den Uffizien, ca. 1 Stunde Mittagspause (auf eigene Faust) und 1,5 Stunden in der Accademia. Sie treffen Ihren Guide am Morgen und sind am fr\u00FChen Nachmittag fertig.",
    },
    {
      q: "Ist das Mittagessen in der Kombi-Tour enthalten?",
      a: "Das Mittagessen ist nicht inbegriffen, aber die einst\u00FCndige Pause gibt Ihnen Zeit zum Essen. Ihr Guide empfiehlt Restaurants in der N\u00E4he und lokale Favoriten. Planen Sie etwa 10\u201320 \u20AC f\u00FCr ein zwangloses Florentiner Mittagessen ein.",
    },
    {
      q: "Kann ich die Kombi-Tour in umgekehrter Reihenfolge machen?",
      a: "Die meisten Kombi-Touren beginnen morgens in den Uffizien, aber einige Anbieter bieten Flexibilit\u00E4t. Pr\u00FCfen Sie bei der Buchung, ob Sie lieber zuerst die Accademia besuchen m\u00F6chten. Morgens sind die Uffizien tendenziell weniger \u00FCberlaufen.",
    },
    {
      q: "Ist diese Tour f\u00FCr Kinder zu lang?",
      a: "F\u00FCnf Stunden sind viel f\u00FCr kleine Kinder. F\u00FCr Familien mit Kindern unter 10 Jahren empfehlen wir, die Museen an verschiedenen Tagen zu besuchen oder eine private Tour zu buchen, die gek\u00FCrzt und angepasst werden kann. Kinder unter 18 Jahren haben in beiden Museen freien Eintritt.",
    },
  ],
};

const fr: ToursComboContent = {
  meta: {
    title: "Tour Offices et Accademia 2026 | Deux Musees en un Jour",
    description:
      "Visitez les Offices et l'Accademia (le David de Michel-Ange) en une journee. Entree coupe-file aux deux musees avec guide agree. Des 89 EUR.",
  },
  breadcrumbs: {
    tours: "Visites",
    comboTour: "Offices + Accademia",
  },
  h1: "Tour Combine Offices et Accademia",
  intro:
    "Si vous n'avez qu'une journee complete pour les musees a Florence, voici comment la passer. La Galerie des Offices et la Galleria dell'Accademia sont les deux musees incontournables de la ville -- l'un abrite la plus grande collection de peintures de la Renaissance au monde, l'autre est le foyer de la sculpture la plus celebre jamais creee. Ce tour combine couvre les deux avec entree coupe-file et un guide expert.",
  bookingCtaTop: "Tour Combine Offices + Accademia",
  yourDay: {
    h2: "Votre journee : comment ca se passe",
    morning: {
      h3: "Matin : Galerie des Offices (2 heures)",
      p: "Vous retrouverez votre guide sur la Piazza della Signoria et entrerez directement aux Offices par l'entree prioritaire. Pendant les deux heures suivantes, votre guide vous conduit a travers les chefs-d'oeuvre de la galerie : la Naissance de Venus et le Printemps de Botticelli, l'Annonciation de Leonard de Vinci, le Tondo Doni de Michel-Ange, la Madone au Chardonneret de Raphael et la Venus d'Urbino de Titien. Vous comprendrez comment chaque artiste a repousse les limites de la peinture.",
    },
    lunch: {
      h3: "Pause dejeuner (1 heure, libre)",
      p: "Apres les Offices, vous aurez environ une heure pour dejeuner. Votre guide vous recommandera des restaurants a proximite -- pas les pieges a touristes des rues principales, mais les endroits ou les Florentins mangent vraiment. Essayez un sandwich au lampredotto aupres d'un vendeur ambulant (une specialite florentine) ou installez-vous pour une assiette de ribollita dans une trattoria.",
    },
    afternoon: {
      h3: "Apres-midi : Galerie de l'Accademia (1h30)",
      p1: "L'Accademia se trouve a 15 minutes a pied des Offices, en traversant le coeur de Florence. Votre guide vous signalera les monuments en chemin -- le Duomo, le Baptistere, les Chapelles des Medicis. A l'Accademia, vous passerez devant la file d'attente (qui peut etre encore plus longue que celle des Offices) et irez directement a l'evenement principal : le David de Michel-Ange.",
      p2: "Mesurant plus de 5 metres de haut, sculpte dans un seul bloc de marbre de Carrare que deux autres sculpteurs avaient deja refuse, le David est veritablement saisissant en personne. Aucune photographie ne vous prepare a l'echelle et aux details -- les veines sur ses mains, la tension dans son cou. Votre guide vous expliquera l'histoire remarquable de la sculpture et vous indiquera les details anatomiques qui revelent le genie de Michel-Ange.",
      p3: "Vous verrez egalement les Prisonniers (Esclaves) inacheves de Michel-Ange, quatre figures qui semblent lutter pour se liberer du marbre. Ils offrent un rare apercu du processus de sculpture de Michel-Ange -- il croyait que la figure etait deja dans la pierre, et que son travail etait de la liberer.",
    },
  },
  tourDetails: {
    h2: "Details de la visite",
    details: [
      { label: "Duree totale", value: "~5 heures (pause dejeuner incluse)" },
      { label: "Temps aux Offices", value: "2 heures avec guide" },
      { label: "Temps a l'Accademia", value: "1h30 avec guide" },
      { label: "Taille du groupe", value: "15 personnes maximum" },
      { label: "Inclus", value: "Coupe-file aux deux, guide, casques audio" },
      { label: "Annulation", value: "Gratuite jusqu'a 24 heures avant" },
    ],
  },
  worthIt: {
    h2: "Le tour combine en vaut-il la peine ?",
    intro: "Faisons le calcul. En achetant separement :",
    items: [
      "Billet coupe-file Offices : ~20 a 29 EUR",
      "Billet coupe-file Accademia : ~20 a 25 EUR",
      "Visite guidee Offices : ~49 EUR",
      "Visite guidee Accademia : ~39 EUR",
    ],
    total: "Total en achetant separement : ~88 a 93+ EUR",
    closing:
      "Le tour combine commence a 89 EUR et inclut tout -- entree coupe-file aux deux musees, un guide agree pour les deux et des casques audio. Vous economisez de l'argent et du temps, et vous n'avez pas a organiser la logistique entre les deux visites. Pour les primo-visiteurs a Florence, c'est le moyen le plus efficace de voir les deux musees.",
  },
  bookingCtaBottom: "Reservez le tour combine Offices + Accademia",
  faqTitle: "Questions frequentes",
  faq: [
    {
      q: "Combien de temps dure le tour combine Offices et Accademia ?",
      a: "L'experience totale dure environ 5 heures : 2 heures aux Offices, environ 1 heure pour le dejeuner (libre) et 1h30 a l'Accademia. Vous retrouverez votre guide le matin et terminerez en debut d'apres-midi.",
    },
    {
      q: "Le dejeuner est-il inclus dans le tour combine ?",
      a: "Le dejeuner n'est pas inclus, mais la pause d'une heure vous laisse le temps de manger. Votre guide vous recommandera des restaurants a proximite et des adresses locales. Prevoyez environ 10 a 20 EUR pour un dejeuner florentin decontracte.",
    },
    {
      q: "Puis-je faire le tour combine dans l'ordre inverse ?",
      a: "La plupart des tours combines commencent aux Offices le matin, mais certains operateurs offrent de la flexibilite. Verifiez lors de la reservation si vous preferez visiter l'Accademia en premier. Les creneaux matinaux aux Offices tendent a etre moins bondes.",
    },
    {
      q: "Ce tour est-il trop long pour les enfants ?",
      a: "Cinq heures, c'est beaucoup pour les jeunes enfants. Pour les familles avec des enfants de moins de 10 ans, envisagez de visiter les musees sur des jours differents ou de reserver une visite privee pouvant etre raccourcie et adaptee. Les moins de 18 ans entrent gratuitement dans les deux musees.",
    },
  ],
};

const es: ToursComboContent = {
  meta: {
    title: "Tour Uffizi y Accademia 2026 | Dos Museos en un Dia",
    description:
      "Visita los Uffizi y la Accademia (el David de Miguel Angel) en un dia. Entrada sin colas a ambos museos con guia autorizado. Desde 89 EUR.",
  },
  breadcrumbs: {
    tours: "Tours",
    comboTour: "Uffizi + Accademia",
  },
  h1: "Tour Combinado Uffizi y Accademia",
  intro:
    "Si solo tienes un dia completo para museos en Florencia, asi es como deberias aprovecharlo. La Galeria Uffizi y la Galleria dell'Accademia son los dos museos imprescindibles de la ciudad -- uno alberga la mayor coleccion de pinturas renacentistas del mundo, el otro es el hogar de la escultura mas famosa jamas creada. Este tour combinado cubre ambos con entrada sin colas y un guia experto.",
  bookingCtaTop: "Tour Combinado Uffizi + Accademia",
  yourDay: {
    h2: "Tu dia: como funciona",
    morning: {
      h3: "Manana: Galeria Uffizi (2 horas)",
      p: "Te encontraras con tu guia en la Piazza della Signoria y entraras directamente a los Uffizi por la entrada prioritaria. Durante las siguientes dos horas, tu guia te lleva por las obras maestras de la galeria: el Nacimiento de Venus y la Primavera de Botticelli, la Anunciacion de Leonardo, el Tondo Doni de Miguel Angel, la Virgen del Jilguero de Rafael y la Venus de Urbino de Tiziano. Entenderas como cada artista llevo la pintura mas alla de sus limites.",
    },
    lunch: {
      h3: "Pausa para el almuerzo (1 hora, por tu cuenta)",
      p: "Despues de los Uffizi, tendras aproximadamente una hora para almorzar. Tu guia te recomendara restaurantes cercanos -- no las trampas para turistas de las calles principales, sino los lugares donde los florentinos realmente comen. Prueba un bocadillo de lampredotto de un puesto callejero (una especialidad florentina) o sientate a disfrutar un plato de ribollita en una trattoria.",
    },
    afternoon: {
      h3: "Tarde: Galeria de la Accademia (1,5 horas)",
      p1: "La Accademia esta a 15 minutos a pie de los Uffizi, atravesando el corazon de Florencia. Tu guia te senalara monumentos en el camino -- el Duomo, el Baptisterio, las Capillas de los Medici. En la Accademia, te saltaras la cola (que puede ser incluso mas larga que la de los Uffizi) e iras directamente al evento principal: el David de Miguel Angel.",
      p2: "Con mas de 5 metros de altura, tallado en un solo bloque de marmol de Carrara que otros dos escultores ya habian rechazado, el David es genuinamente impresionante en persona. Ninguna fotografia te prepara para la escala y el detalle -- las venas en sus manos, la tension en su cuello. Tu guia te explicara la notable historia de la escultura y senalara detalles anatomicos que revelan el genio de Miguel Angel.",
      p3: "Tambien veras los Prisioneros (Esclavos) inacabados de Miguel Angel, cuatro figuras que parecen luchar por liberarse del marmol. Estos ofrecen una rara vision del proceso escultoreo de Miguel Angel -- creia que la figura ya estaba dentro de la piedra, y su trabajo era liberarla.",
    },
  },
  tourDetails: {
    h2: "Detalles del tour",
    details: [
      { label: "Duracion total", value: "~5 horas (pausa almuerzo incluida)" },
      { label: "Tiempo en Uffizi", value: "2 horas con guia" },
      { label: "Tiempo en Accademia", value: "1,5 horas con guia" },
      { label: "Tamano del grupo", value: "Maximo 15 personas" },
      { label: "Incluye", value: "Sin colas en ambos, guia, auriculares" },
      { label: "Cancelacion", value: "Gratuita hasta 24 horas antes" },
    ],
  },
  worthIt: {
    h2: "Merece la pena el tour combinado?",
    intro: "Hagamos cuentas. Comprando por separado:",
    items: [
      "Entrada sin colas Uffizi: ~20 a 29 EUR",
      "Entrada sin colas Accademia: ~20 a 25 EUR",
      "Tour guiado Uffizi: ~49 EUR",
      "Tour guiado Accademia: ~39 EUR",
    ],
    total: "Total comprando por separado: ~88 a 93+ EUR",
    closing:
      "El tour combinado empieza en 89 EUR e incluye todo -- entrada sin colas a ambos museos, guia autorizado para ambos y auriculares. Ahorras dinero y tiempo, y no tienes que organizar la logistica entre las dos visitas. Para quienes visitan Florencia por primera vez, es la forma mas eficiente de ver ambos museos.",
  },
  bookingCtaBottom: "Reserva el tour combinado Uffizi + Accademia",
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      q: "Cuanto dura el tour combinado Uffizi y Accademia?",
      a: "La experiencia total dura unas 5 horas: 2 horas en los Uffizi, aproximadamente 1 hora para el almuerzo (por tu cuenta) y 1,5 horas en la Accademia. Te encontraras con tu guia por la manana y terminaras a primera hora de la tarde.",
    },
    {
      q: "El almuerzo esta incluido en el tour combinado?",
      a: "El almuerzo no esta incluido, pero la pausa de una hora te da tiempo para comer. Tu guia te recomendara restaurantes cercanos y favoritos locales. Calcula unos 10 a 20 EUR para un almuerzo florentino informal.",
    },
    {
      q: "Puedo hacer el tour combinado en orden inverso?",
      a: "La mayoria de los tours combinados comienzan en los Uffizi por la manana, pero algunos operadores ofrecen flexibilidad. Consulta al reservar si prefieres visitar la Accademia primero. Las franjas matutinas en los Uffizi suelen estar menos concurridas.",
    },
    {
      q: "Este tour es demasiado largo para ninos?",
      a: "Cinco horas es mucho para ninos pequenos. Para familias con ninos menores de 10 anos, considera visitar los museos en dias separados o reservar un tour privado que se pueda acortar y adaptar. Los menores de 18 anos entran gratis en ambos museos.",
    },
  ],
};

const content: PageContent<ToursComboContent> = { en, it, de, fr, es };

export function getToursComboContent(locale: string): ToursComboContent {
  return getContent(content, locale);
}
