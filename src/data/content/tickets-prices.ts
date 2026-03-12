import { getContent, type PageContent } from "./types";

export type TicketPricesContent = {
  meta: { title: string; description: string };
  breadcrumbs: { tickets: string; prices: string };
  h1: string;
  intro: string;
  standardPrices: {
    h2: string;
    tableTitle: string;
    rows: { type: string; price: string; notes: string }[];
  };
  reducedFree: {
    h2: string;
    p: string;
    tableTitle: string;
    rows: { type: string; price: string; notes: string }[];
  };
  onlineVsWalkUp: {
    h2: string;
    p: string;
    tableTitle: string;
    rows: { type: string; price: string; notes: string }[];
    footnote: string;
    recommendation: string;
  };
  ctaTop: string;
  freeEntryDays: {
    h2: string;
    pPrefix: string;
    pBold: string;
    pSuffix: string;
  };
  comboTickets: {
    h2: string;
    p: string;
    options: {
      label: string;
      description: string;
      hasLink: boolean;
      linkText?: string;
    }[];
  };
  moneySaving: {
    h2: string;
    tips: string[];
  };
  ctaBottom: string;
  faq: { q: string; a: string }[];
};

const en: TicketPricesContent = {
  meta: {
    title: "Uffizi Gallery Ticket Prices 2026 | Full Cost Guide & Discounts",
    description:
      "Complete Uffizi Gallery ticket prices for 2026. Standard, reduced & free entry. Seasonal pricing, online booking fees & money-saving tips.",
  },
  breadcrumbs: {
    tickets: "Tickets",
    prices: "Prices",
  },
  h1: "Uffizi Gallery Ticket Prices 2026",
  intro:
    "Starting in 2026, the Uffizi Gallery has simplified its pricing structure with year-round rates. No more confusion about high season vs. low season \u2014 just consistent pricing throughout the year. Here's the complete breakdown of every ticket type, discount, and cost so you know exactly what to budget.",
  standardPrices: {
    h2: "Standard Ticket Prices",
    tableTitle: "2026 Uffizi Gallery Admission",
    rows: [
      {
        type: "Online Ticket",
        price: "\u20ac29",
        notes: "Official website booking",
      },
      {
        type: "Ticket Office",
        price: "\u20ac25",
        notes: "Walk-up at Door 2",
      },
      {
        type: "Afternoon Entry (after 4 PM)",
        price: "\u20ac20",
        notes: "Online booking",
      },
    ],
  },
  reducedFree: {
    h2: "Reduced & Free Tickets",
    p: "Italy's state museums offer generous discounts for certain categories. At the Uffizi, these apply year-round regardless of season:",
    tableTitle: "Discounted & Free Entry",
    rows: [
      {
        type: "EU Citizens aged 18-25",
        price: "\u20ac2",
        notes: "Valid ID or passport required",
      },
      {
        type: "Under 18 (any nationality)",
        price: "Free",
        notes: "Proof of age required",
      },
      {
        type: "EU Citizens over 65",
        price: "\u20ac2",
        notes: "Valid ID required",
      },
      {
        type: "Disabled visitors + 1 companion",
        price: "Free",
        notes: "Disability certificate required",
      },
      {
        type: "Licensed tour guides",
        price: "Free",
        notes: "Must show official guide license",
      },
      {
        type: "EU art/architecture students",
        price: "Free",
        notes: "Valid university enrollment",
      },
      {
        type: "ICOM members",
        price: "Free",
        notes: "Valid ICOM card",
      },
    ],
  },
  onlineVsWalkUp: {
    h2: "Online vs. Walk-Up Prices",
    p: "Here's where people get confused. The base ticket price is the same whether you buy online or at the door. The difference is the booking fee and the time you save:",
    tableTitle: "Cost Comparison",
    rows: [
      {
        type: "Walk-up (Door 2)",
        price: "\u20ac25",
        notes: "1-3 hour wait",
      },
      {
        type: "Official site pre-book",
        price: "\u20ac29",
        notes: "Standard entry, skip the line",
      },
      {
        type: "Authorized reseller",
        price: "From \u20ac26",
        notes: "Skip the line, free cancellation",
      },
    ],
    footnote: "Afternoon tickets (after 4 PM) available for \u20ac20 online.",
    recommendation:
      "My honest recommendation: book through an authorized reseller. The price is competitive, you get skip-the-line access, and most offer free cancellation up to 24 hours before your visit. That flexibility alone is worth it \u2014 Florence weather can be unpredictable, and plans change.",
  },
  ctaTop: "Best Value \u2014 Skip the Line Uffizi Tickets",
  freeEntryDays: {
    h2: "Free Entry Days",
    pPrefix: "The Uffizi offers free admission on the ",
    pBold: "first Sunday of every month",
    pSuffix:
      ". However, I need to be honest about this: free Sundays are a mixed blessing. The gallery becomes incredibly crowded, with wait times of 3-4 hours common. The experience inside is also less enjoyable when every room is packed. If budget is a concern, visiting during low season (\u20ac12) on a weekday gives you a much better experience than a free Sunday.",
  },
  comboTickets: {
    h2: "Combo Tickets & Passes",
    p: "If you're visiting multiple museums in Florence, consider these options:",
    options: [
      {
        label: "Uffizi + Accademia combo tour",
        description:
          "See both museums in one day with a guide. Typically \u20ac89-120 per person including skip-the-line entry to both.",
        hasLink: true,
        linkText: "See combo tour details \u2192",
      },
      {
        label: "Firenze Card",
        description:
          "\u20ac85 for 72 hours of museum access across Florence (72+ museums). Worth it if you're visiting 5+ museums. Includes the Uffizi, Accademia, Palazzo Pitti, and Boboli Gardens.",
        hasLink: false,
      },
      {
        label: "Uffizi + Palazzo Pitti + Boboli",
        description:
          "A combined 5-day pass is sometimes available through the official booking system. Check availability at the ticket office.",
        hasLink: false,
      },
    ],
  },
  moneySaving: {
    h2: "Money-Saving Tips",
    tips: [
      "Book afternoon tickets (after 4 PM) for \u20ac20 instead of \u20ac29 standard entry",
      "EU citizens aged 18-25 pay only \u20ac2 \u2014 always bring valid ID",
      "Under 18? Entry is free for all nationalities \u2014 carry proof of age",
      "Art and architecture students at EU universities get free entry \u2014 bring your enrollment certificate",
      "Book through an authorized reseller for skip-the-line access and cancellation flexibility",
    ],
  },
  ctaBottom: "Book Uffizi Gallery Tickets",
  faq: [
    {
      q: "How much does the Uffizi Gallery cost in 2026?",
      a: "\u20ac29 for online bookings, \u20ac25 at the ticket office. Afternoon tickets (after 4 PM) are \u20ac20 online. EU citizens 18-25 pay \u20ac2. Under 18 is free. Skip-the-line tickets from authorized resellers start from \u20ac26.",
    },
    {
      q: "Is there a booking fee for Uffizi tickets?",
      a: "The official museum booking site price of \u20ac29 includes all fees. Authorized resellers typically charge from \u20ac26 for skip-the-line tickets, and most offer free cancellation.",
    },
    {
      q: "What ID do I need for reduced-price tickets?",
      a: "Bring a valid passport or national ID card showing your date of birth and nationality. EU citizens 18-25 need proof they're under 26 and an EU citizen. Under-18s need age verification.",
    },
    {
      q: "Is the Firenze Card worth buying?",
      a: "At \u20ac85 for 72 hours, the Firenze Card is worth it if you'll visit 5+ museums. The Uffizi alone costs \u20ac29 online (or \u20ac25 at the door), so the card pays for itself after about 3-4 museum visits.",
    },
  ],
};

const it: TicketPricesContent = {
  meta: {
    title:
      "Prezzi Biglietti Uffizi 2026 | Costi, Sconti e Riduzioni",
    description:
      "Tutti i prezzi dei biglietti per gli Uffizi 2026. Tariffe standard, ridotte e gratuite. Costi stagionali, commissioni online e consigli per risparmiare.",
  },
  breadcrumbs: {
    tickets: "Biglietti",
    prices: "Prezzi",
  },
  h1: "Prezzi Biglietti Galleria degli Uffizi 2026",
  intro:
    "Dal 2026, la Galleria degli Uffizi ha semplificato la struttura dei prezzi con tariffe annuali. Niente pi\u00f9 confusione tra alta e bassa stagione \u2014 solo prezzi costanti tutto l'anno. Ecco il riepilogo completo di ogni tipo di biglietto, sconto e costo per sapere esattamente quanto mettere a budget.",
  standardPrices: {
    h2: "Prezzi Biglietti Standard",
    tableTitle: "Tariffe Uffizi 2026",
    rows: [
      {
        type: "Biglietto Online",
        price: "\u20ac29",
        notes: "Prenotazione sito ufficiale",
      },
      {
        type: "Biglietteria",
        price: "\u20ac25",
        notes: "In cassa alla Porta 2",
      },
      {
        type: "Ingresso Pomeridiano (dopo le 16:00)",
        price: "\u20ac20",
        notes: "Prenotazione online",
      },
    ],
  },
  reducedFree: {
    h2: "Biglietti Ridotti e Gratuiti",
    p: "I musei statali italiani offrono sconti generosi per determinate categorie. Agli Uffizi si applicano tutto l'anno, indipendentemente dalla stagione:",
    tableTitle: "Ingressi Scontati e Gratuiti",
    rows: [
      {
        type: "Cittadini UE 18-25 anni",
        price: "\u20ac2",
        notes: "Documento d'identit\u00e0 o passaporto richiesto",
      },
      {
        type: "Minori di 18 anni (qualsiasi nazionalit\u00e0)",
        price: "Gratis",
        notes: "Documento che attesti l'et\u00e0",
      },
      {
        type: "Cittadini UE over 65",
        price: "\u20ac2",
        notes: "Documento d'identit\u00e0 richiesto",
      },
      {
        type: "Visitatori disabili + 1 accompagnatore",
        price: "Gratis",
        notes: "Certificato di invalidit\u00e0 richiesto",
      },
      {
        type: "Guide turistiche abilitate",
        price: "Gratis",
        notes: "Esibire il tesserino ufficiale",
      },
      {
        type: "Studenti UE di arte/architettura",
        price: "Gratis",
        notes: "Certificato di iscrizione universitaria",
      },
      {
        type: "Membri ICOM",
        price: "Gratis",
        notes: "Tessera ICOM valida",
      },
    ],
  },
  onlineVsWalkUp: {
    h2: "Prezzi Online vs. Biglietteria",
    p: "Ecco dove nasce la confusione. Il prezzo base del biglietto \u00e8 lo stesso sia che acquisti online sia in cassa. La differenza sta nella commissione di prenotazione e nel tempo risparmiato:",
    tableTitle: "Confronto Costi",
    rows: [
      {
        type: "In cassa (Porta 2)",
        price: "\u20ac25",
        notes: "1-3 ore di coda",
      },
      {
        type: "Prenotazione sito ufficiale",
        price: "\u20ac29",
        notes: "Ingresso standard, salta la fila",
      },
      {
        type: "Rivenditore autorizzato",
        price: "Da \u20ac26",
        notes: "Salta la fila, cancellazione gratuita",
      },
    ],
    footnote:
      "Biglietti pomeridiani (dopo le 16:00) disponibili a \u20ac20 online.",
    recommendation:
      "Il mio consiglio sincero: prenota tramite un rivenditore autorizzato. Il prezzo \u00e8 competitivo, hai l'accesso salta la fila e la maggior parte offre cancellazione gratuita fino a 24 ore prima. Questa flessibilit\u00e0 da sola vale la differenza \u2014 il meteo a Firenze \u00e8 imprevedibile e i piani possono cambiare.",
  },
  ctaTop: "Miglior Prezzo \u2014 Biglietti Salta la Fila Uffizi",
  freeEntryDays: {
    h2: "Giornate ad Ingresso Gratuito",
    pPrefix: "Gli Uffizi offrono l'ingresso gratuito la ",
    pBold: "prima domenica di ogni mese",
    pSuffix:
      ". Devo per\u00f2 essere sincero: le domeniche gratuite sono un'arma a doppio taglio. La galleria diventa incredibilmente affollata, con tempi di attesa di 3-4 ore. Anche l'esperienza all'interno \u00e8 meno piacevole quando ogni sala \u00e8 stipata. Se il budget \u00e8 un problema, visitare in bassa stagione (\u20ac12) in un giorno feriale offre un'esperienza decisamente migliore di una domenica gratuita.",
  },
  comboTickets: {
    h2: "Biglietti Combinati e Pass",
    p: "Se stai visitando pi\u00f9 musei a Firenze, considera queste opzioni:",
    options: [
      {
        label: "Tour combo Uffizi + Accademia",
        description:
          "Visita entrambi i musei in un giorno con una guida. Generalmente \u20ac89-120 a persona, ingresso salta la fila incluso per entrambi.",
        hasLink: true,
        linkText: "Dettagli tour combinato \u2192",
      },
      {
        label: "Firenze Card",
        description:
          "\u20ac85 per 72 ore di accesso ai musei fiorentini (72+ musei). Conviene se visiti 5 o pi\u00f9 musei. Include Uffizi, Accademia, Palazzo Pitti e Giardino di Boboli.",
        hasLink: false,
      },
      {
        label: "Uffizi + Palazzo Pitti + Boboli",
        description:
          "Un pass cumulativo di 5 giorni \u00e8 talvolta disponibile tramite il sistema di prenotazione ufficiale. Verifica la disponibilit\u00e0 in biglietteria.",
        hasLink: false,
      },
    ],
  },
  moneySaving: {
    h2: "Consigli per Risparmiare",
    tips: [
      "Prenota biglietti pomeridiani (dopo le 16:00) a \u20ac20 invece di \u20ac29 per l'ingresso standard",
      "I cittadini UE tra 18 e 25 anni pagano solo \u20ac2 \u2014 porta sempre un documento valido",
      "Hai meno di 18 anni? L'ingresso \u00e8 gratuito per tutte le nazionalit\u00e0 \u2014 porta un documento che attesti l'et\u00e0",
      "Gli studenti di arte e architettura in universit\u00e0 UE entrano gratis \u2014 porta il certificato di iscrizione",
      "Prenota tramite un rivenditore autorizzato per l'accesso salta la fila e la flessibilit\u00e0 di cancellazione",
    ],
  },
  ctaBottom: "Prenota i Biglietti per gli Uffizi",
  faq: [
    {
      q: "Quanto costa il biglietto per gli Uffizi nel 2026?",
      a: "\u20ac29 per prenotazioni online, \u20ac25 in biglietteria. Biglietti pomeridiani (dopo le 16:00) a \u20ac20 online. Cittadini UE 18-25 anni: \u20ac2. Under 18: gratis. Biglietti salta la fila da rivenditori autorizzati a partire da \u20ac26.",
    },
    {
      q: "C'\u00e8 una commissione per la prenotazione dei biglietti?",
      a: "Il prezzo del sito ufficiale di \u20ac29 include tutte le commissioni. I rivenditori autorizzati in genere applicano da \u20ac26 per biglietti salta la fila, e la maggior parte offre cancellazione gratuita.",
    },
    {
      q: "Quale documento serve per i biglietti ridotti?",
      a: "Porta un passaporto o una carta d'identit\u00e0 valida che mostri data di nascita e nazionalit\u00e0. I cittadini UE 18-25 devono dimostrare di avere meno di 26 anni e la cittadinanza europea. I minori di 18 anni necessitano di un documento che attesti l'et\u00e0.",
    },
    {
      q: "Conviene acquistare la Firenze Card?",
      a: "A \u20ac85 per 72 ore, la Firenze Card conviene se visiti 5 o pi\u00f9 musei. Il solo biglietto degli Uffizi costa \u20ac29 online (o \u20ac25 in biglietteria), quindi la card si ripaga dopo circa 3-4 visite a musei.",
    },
  ],
};

const de: TicketPricesContent = {
  meta: {
    title:
      "Eintrittspreise Uffizi Galerie 2026 | Kosten, Ermäßigungen & Tipps",
    description:
      "Alle Eintrittspreise der Uffizi Galerie 2026: Standard-, Ermäßigungs- und Gratis-Tickets. Saisonpreise, Online-Gebühren und Spartipps für Ihren Besuch.",
  },
  breadcrumbs: {
    tickets: "Tickets",
    prices: "Preise",
  },
  h1: "Eintrittspreise Uffizi Galerie 2026",
  intro:
    "Ab 2026 hat die Uffizi Galerie ihre Preisstruktur mit ganzjährigen Tarifen vereinfacht. Keine Verwirrung mehr zwischen Haupt- und Nebensaison — nur konstante Preise das ganze Jahr über. Hier finden Sie die vollständige Übersicht aller Ticketarten, Ermäßigungen und Kosten, damit Sie Ihr Budget genau planen können.",
  standardPrices: {
    h2: "Standard-Eintrittspreise",
    tableTitle: "Uffizi Galerie Eintritt 2026",
    rows: [
      {
        type: "Online-Ticket",
        price: "29 €",
        notes: "Offizielle Website-Buchung",
      },
      {
        type: "Tageskasse",
        price: "25 €",
        notes: "An Tür 2",
      },
      {
        type: "Nachmittagseintritt (nach 16:00 Uhr)",
        price: "20 €",
        notes: "Online-Buchung",
      },
    ],
  },
  reducedFree: {
    h2: "Ermäßigte und kostenlose Tickets",
    p: "Italiens staatliche Museen bieten großzügige Ermäßigungen für bestimmte Besuchergruppen. In den Uffizien gelten diese ganzjährig, unabhängig von der Saison:",
    tableTitle: "Ermäßigter und freier Eintritt",
    rows: [
      {
        type: "EU-Bürger 18–25 Jahre",
        price: "2 €",
        notes: "Gültiger Ausweis oder Reisepass erforderlich",
      },
      {
        type: "Unter 18 Jahren (alle Nationalitäten)",
        price: "Kostenlos",
        notes: "Altersnachweis erforderlich",
      },
      {
        type: "EU-Bürger über 65 Jahre",
        price: "2 €",
        notes: "Gültiger Ausweis erforderlich",
      },
      {
        type: "Besucher mit Behinderung + 1 Begleitperson",
        price: "Kostenlos",
        notes: "Behindertenausweis erforderlich",
      },
      {
        type: "Lizenzierte Reiseführer",
        price: "Kostenlos",
        notes: "Offizieller Führerausweis vorzeigen",
      },
      {
        type: "EU-Studierende der Kunst/Architektur",
        price: "Kostenlos",
        notes: "Gültige Immatrikulationsbescheinigung",
      },
      {
        type: "ICOM-Mitglieder",
        price: "Kostenlos",
        notes: "Gültiger ICOM-Ausweis",
      },
    ],
  },
  onlineVsWalkUp: {
    h2: "Online-Preise vs. Tageskasse",
    p: "Hier entsteht oft Verwirrung. Der Grundpreis des Tickets ist identisch — ob Sie online oder an der Kasse kaufen. Der Unterschied liegt in der Reservierungsgebühr und der Zeitersparnis:",
    tableTitle: "Kostenvergleich",
    rows: [
      {
        type: "Tageskasse (Tür 2)",
        price: "25 €",
        notes: "1–3 Stunden Wartezeit",
      },
      {
        type: "Offizielle Website vorbuchen",
        price: "29 €",
        notes: "Standard-Eintritt, ohne Anstehen",
      },
      {
        type: "Autorisierter Wiederverkäufer",
        price: "Ab 26 €",
        notes: "Ohne Anstehen, kostenlose Stornierung",
      },
    ],
    footnote:
      "Nachmittagstickets (nach 16:00 Uhr) für 20 € online verfügbar.",
    recommendation:
      "Meine ehrliche Empfehlung: Buchen Sie über einen autorisierten Wiederverkäufer. Der Preis ist wettbewerbsfähig, Sie erhalten Ohne-Anstehen-Zugang, und die meisten bieten kostenlose Stornierung bis 24 Stunden vor dem Besuch. Allein diese Flexibilität ist es wert — das Wetter in Florenz kann unberechenbar sein, und Pläne ändern sich.",
  },
  ctaTop: "Bester Preis — Uffizi Galerie Tickets Ohne Anstehen",
  freeEntryDays: {
    h2: "Tage mit freiem Eintritt",
    pPrefix: "Die Uffizien bieten freien Eintritt am ",
    pBold: "ersten Sonntag jedes Monats",
    pSuffix:
      ". Allerdings muss ich ehrlich sein: Die kostenlosen Sonntage sind ein zweischneidiges Schwert. Die Galerie wird unglaublich voll, Wartezeiten von 3–4 Stunden sind keine Seltenheit. Auch das Erlebnis im Inneren leidet, wenn jeder Raum überfüllt ist. Wenn das Budget eine Rolle spielt, bietet ein Besuch in der Nebensaison (12 €) an einem Wochentag ein deutlich besseres Erlebnis als ein kostenloser Sonntag.",
  },
  comboTickets: {
    h2: "Kombi-Tickets und Pässe",
    p: "Wenn Sie mehrere Museen in Florenz besuchen möchten, lohnen sich folgende Optionen:",
    options: [
      {
        label: "Kombi-Tour Uffizi + Accademia",
        description:
          "Besuchen Sie beide Museen an einem Tag mit einem Führer. In der Regel 89–120 € pro Person, inklusive Ohne-Anstehen-Einlass für beide Museen.",
        hasLink: true,
        linkText: "Details zur Kombi-Tour ansehen \u2192",
      },
      {
        label: "Firenze Card",
        description:
          "85 € für 72 Stunden Zugang zu über 72 Museen in Florenz. Lohnt sich ab 5 Museumsbesuchen. Beinhaltet die Uffizien, Accademia, Palazzo Pitti und den Boboli-Garten.",
        hasLink: false,
      },
      {
        label: "Uffizi + Palazzo Pitti + Boboli",
        description:
          "Ein kombinierter 5-Tage-Pass ist gelegentlich über das offizielle Buchungssystem erhältlich. Erkundigen Sie sich an der Tageskasse nach Verfügbarkeit.",
        hasLink: false,
      },
    ],
  },
  moneySaving: {
    h2: "Spartipps",
    tips: [
      "Buchen Sie Nachmittagstickets (nach 16:00 Uhr) für 20 € statt 29 € Standard-Eintritt",
      "EU-Bürger zwischen 18 und 25 Jahren zahlen nur 2 € — bringen Sie immer einen gültigen Ausweis mit",
      "Unter 18? Der Eintritt ist für alle Nationalitäten kostenlos — Altersnachweis mitbringen",
      "Kunst- und Architekturstudenten an EU-Universitäten erhalten freien Eintritt — Immatrikulationsbescheinigung nicht vergessen",
      "Buchen Sie über einen autorisierten Wiederverkäufer für Ohne-Anstehen-Zugang und Stornierungsflexibilität",
    ],
  },
  ctaBottom: "Uffizi Galerie Tickets buchen",
  faq: [
    {
      q: "Was kostet der Eintritt in die Uffizi Galerie 2026?",
      a: "29 € für Online-Buchungen, 25 € an der Tageskasse. Nachmittagstickets (nach 16:00 Uhr) kosten 20 € online. EU-Bürger 18–25 Jahre zahlen 2 €. Unter 18 ist der Eintritt kostenlos. Ohne-Anstehen-Tickets von autorisierten Wiederverkäufern ab 26 €.",
    },
    {
      q: "Gibt es eine Buchungsgebühr für Uffizi-Tickets?",
      a: "Der Preis von 29 € auf der offiziellen Website beinhaltet alle Gebühren. Autorisierte Wiederverkäufer verlangen in der Regel ab 26 € für Ohne-Anstehen-Tickets, und die meisten bieten kostenlose Stornierung.",
    },
    {
      q: "Welchen Ausweis brauche ich für ermäßigte Tickets?",
      a: "Bringen Sie einen gültigen Reisepass oder Personalausweis mit, auf dem Ihr Geburtsdatum und Ihre Staatsangehörigkeit ersichtlich sind. EU-Bürger von 18–25 Jahren müssen nachweisen, dass sie unter 26 sind und die EU-Staatsbürgerschaft besitzen. Bei unter 18-Jährigen ist ein Altersnachweis erforderlich.",
    },
    {
      q: "Lohnt sich die Firenze Card?",
      a: "Bei 85 € für 72 Stunden lohnt sich die Firenze Card, wenn Sie 5 oder mehr Museen besuchen. Allein das Uffizi-Ticket kostet 29 € online (oder 25 € an der Kasse), sodass sich die Karte ab etwa 3-4 Museumsbesuchen rechnet.",
    },
  ],
};

const fr: TicketPricesContent = {
  meta: {
    title: "Tarifs Billets Galerie des Offices 2026 | Prix, Reductions et Conseils",
    description:
      "Tous les tarifs des billets Offices 2026. Tarifs standard, reduits et gratuits. Prix saisonniers, frais de reservation en ligne et astuces pour economiser.",
  },
  breadcrumbs: {
    tickets: "Billets",
    prices: "Tarifs",
  },
  h1: "Tarifs des Billets Galerie des Offices 2026",
  intro:
    "A partir de 2026, la Galerie des Offices a simplifie sa structure tarifaire avec des tarifs annuels. Plus de confusion entre haute et basse saison \u2014 seulement des prix constants tout au long de l'annee. Voici le detail complet de chaque type de billet, reduction et cout pour savoir exactement quel budget prevoir.",
  standardPrices: {
    h2: "Tarifs Standard",
    tableTitle: "Tarifs Galerie des Offices 2026",
    rows: [
      {
        type: "Billet en ligne",
        price: "29 \u20ac",
        notes: "Reservation site officiel",
      },
      {
        type: "Guichet",
        price: "25 \u20ac",
        notes: "Sur place a la Porte 2",
      },
      {
        type: "Entree apres-midi (apres 16h)",
        price: "20 \u20ac",
        notes: "Reservation en ligne",
      },
    ],
  },
  reducedFree: {
    h2: "Billets Reduits et Gratuits",
    p: "Les musees nationaux italiens offrent des reductions genereuses pour certaines categories. Aux Offices, elles s'appliquent toute l'annee, quelle que soit la saison :",
    tableTitle: "Entrees Reduites et Gratuites",
    rows: [
      {
        type: "Citoyens UE de 18 a 25 ans",
        price: "2 \u20ac",
        notes: "Piece d'identite ou passeport requis",
      },
      {
        type: "Moins de 18 ans (toute nationalite)",
        price: "Gratuit",
        notes: "Justificatif d'age requis",
      },
      {
        type: "Citoyens UE de plus de 65 ans",
        price: "2 \u20ac",
        notes: "Piece d'identite requise",
      },
      {
        type: "Visiteurs handicapes + 1 accompagnateur",
        price: "Gratuit",
        notes: "Certificat de handicap requis",
      },
      {
        type: "Guides touristiques agrees",
        price: "Gratuit",
        notes: "Licence officielle de guide a presenter",
      },
      {
        type: "Etudiants UE en art/architecture",
        price: "Gratuit",
        notes: "Certificat d'inscription universitaire valide",
      },
      {
        type: "Membres ICOM",
        price: "Gratuit",
        notes: "Carte ICOM valide",
      },
    ],
  },
  onlineVsWalkUp: {
    h2: "Tarifs en Ligne vs. Guichet",
    p: "C'est la que les gens se perdent. Le prix de base du billet est le meme, que vous achetiez en ligne ou sur place. La difference reside dans les frais de reservation et le temps gagne :",
    tableTitle: "Comparaison des Couts",
    rows: [
      {
        type: "Guichet (Porte 2)",
        price: "25 \u20ac",
        notes: "1 a 3 heures d'attente",
      },
      {
        type: "Reservation site officiel",
        price: "29 \u20ac",
        notes: "Entree standard, coupe-file",
      },
      {
        type: "Revendeur autorise",
        price: "A partir de 26 \u20ac",
        notes: "Coupe-file, annulation gratuite",
      },
    ],
    footnote:
      "Billets apres-midi (apres 16h) disponibles a 20 \u20ac en ligne.",
    recommendation:
      "Mon conseil sincere : reservez via un revendeur autorise. Le prix est competitif, vous beneficiez de l'acces coupe-file, et la plupart offrent l'annulation gratuite jusqu'a 24 heures avant votre visite. Cette flexibilite a elle seule en vaut la peine \u2014 la meteo a Florence peut etre imprevisible, et les plans changent.",
  },
  ctaTop: "Meilleur Prix \u2014 Billets Coupe-File Offices",
  freeEntryDays: {
    h2: "Jours d'Entree Gratuite",
    pPrefix: "Les Offices offrent l'entree gratuite le ",
    pBold: "premier dimanche de chaque mois",
    pSuffix:
      ". Cependant, je dois etre honnete : les dimanches gratuits sont une arme a double tranchant. La galerie devient incroyablement bondee, avec des temps d'attente de 3 a 4 heures courants. L'experience a l'interieur est aussi moins agreable quand chaque salle est pleine a craquer. Si le budget est un souci, visiter en basse saison (12 \u20ac) un jour de semaine offre une bien meilleure experience qu'un dimanche gratuit.",
  },
  comboTickets: {
    h2: "Billets Combines et Pass",
    p: "Si vous visitez plusieurs musees a Florence, considerez ces options :",
    options: [
      {
        label: "Tour combine Offices + Accademia",
        description:
          "Visitez les deux musees en une journee avec un guide. Generalement 89-120 \u20ac par personne, entree coupe-file incluse pour les deux.",
        hasLink: true,
        linkText: "Voir les details du tour combine \u2192",
      },
      {
        label: "Firenze Card",
        description:
          "85 \u20ac pour 72 heures d'acces aux musees florentins (72+ musees). Rentable si vous visitez 5 musees ou plus. Inclut les Offices, l'Accademia, le Palazzo Pitti et les Jardins de Boboli.",
        hasLink: false,
      },
      {
        label: "Offices + Palazzo Pitti + Boboli",
        description:
          "Un pass combine de 5 jours est parfois disponible via le systeme de reservation officiel. Verifiez la disponibilite au guichet.",
        hasLink: false,
      },
    ],
  },
  moneySaving: {
    h2: "Astuces pour Economiser",
    tips: [
      "Reservez des billets apres-midi (apres 16h) a 20 \u20ac au lieu de 29 \u20ac pour l'entree standard",
      "Les citoyens UE de 18 a 25 ans ne paient que 2 \u20ac \u2014 ayez toujours une piece d'identite valide",
      "Moins de 18 ans ? L'entree est gratuite pour toutes les nationalites \u2014 munissez-vous d'un justificatif d'age",
      "Les etudiants en art et architecture des universites de l'UE entrent gratuitement \u2014 apportez votre certificat d'inscription",
      "Reservez via un revendeur autorise pour l'acces coupe-file et la flexibilite d'annulation",
    ],
  },
  ctaBottom: "Reservez Vos Billets pour les Offices",
  faq: [
    {
      q: "Combien coutent les billets des Offices en 2026 ?",
      a: "29 \u20ac pour les reservations en ligne, 25 \u20ac au guichet. Billets apres-midi (apres 16h) a 20 \u20ac en ligne. Citoyens UE 18-25 ans : 2 \u20ac. Moins de 18 ans : gratuit. Billets coupe-file des revendeurs autorises a partir de 26 \u20ac.",
    },
    {
      q: "Y a-t-il des frais de reservation pour les billets des Offices ?",
      a: "Le prix de 29 \u20ac sur le site officiel inclut tous les frais. Les revendeurs autorises facturent generalement a partir de 26 \u20ac pour les billets coupe-file, et la plupart offrent l'annulation gratuite.",
    },
    {
      q: "Quelle piece d'identite faut-il pour les billets a tarif reduit ?",
      a: "Apportez un passeport ou une carte d'identite valide indiquant votre date de naissance et votre nationalite. Les citoyens UE de 18 a 25 ans doivent prouver qu'ils ont moins de 26 ans et qu'ils sont citoyens de l'UE. Les moins de 18 ans doivent fournir un justificatif d'age.",
    },
    {
      q: "La Firenze Card vaut-elle le coup ?",
      a: "A 85 \u20ac pour 72 heures, la Firenze Card est rentable si vous visitez 5 musees ou plus. Le billet des Offices seul coute 29 \u20ac en ligne (ou 25 \u20ac au guichet), donc la carte est amortie apres environ 3-4 visites de musees.",
    },
  ],
};

const es: TicketPricesContent = {
  meta: {
    title: "Precios Entradas Uffizi 2026 | Guia Completa de Costes y Descuentos",
    description:
      "Todos los precios de entradas Uffizi 2026. Tarifas estandar, reducidas y gratuitas. Precios por temporada, gastos de reserva online y consejos para ahorrar.",
  },
  breadcrumbs: {
    tickets: "Entradas",
    prices: "Precios",
  },
  h1: "Precios de Entradas Galeria Uffizi 2026",
  intro:
    "A partir de 2026, la Galeria Uffizi ha simplificado su estructura de precios con tarifas anuales. Ya no hay confusion entre temporada alta y baja \u2014 solo precios constantes durante todo el ano. Aqui tienes el desglose completo de cada tipo de entrada, descuento y coste para que sepas exactamente cuanto presupuestar.",
  standardPrices: {
    h2: "Precios Estandar de Entradas",
    tableTitle: "Tarifas Galeria Uffizi 2026",
    rows: [
      {
        type: "Entrada online",
        price: "29 \u20ac",
        notes: "Reserva web oficial",
      },
      {
        type: "Taquilla",
        price: "25 \u20ac",
        notes: "En la Puerta 2",
      },
      {
        type: "Entrada de tarde (despues de las 16:00)",
        price: "20 \u20ac",
        notes: "Reserva online",
      },
    ],
  },
  reducedFree: {
    h2: "Entradas Reducidas y Gratuitas",
    p: "Los museos estatales italianos ofrecen generosos descuentos para determinadas categorias. En los Uffizi se aplican durante todo el ano, independientemente de la temporada:",
    tableTitle: "Entradas con Descuento y Gratuitas",
    rows: [
      {
        type: "Ciudadanos UE de 18 a 25 anos",
        price: "2 \u20ac",
        notes: "Documento de identidad o pasaporte requerido",
      },
      {
        type: "Menores de 18 anos (cualquier nacionalidad)",
        price: "Gratis",
        notes: "Documento que acredite la edad",
      },
      {
        type: "Ciudadanos UE mayores de 65 anos",
        price: "2 \u20ac",
        notes: "Documento de identidad requerido",
      },
      {
        type: "Visitantes con discapacidad + 1 acompanante",
        price: "Gratis",
        notes: "Certificado de discapacidad requerido",
      },
      {
        type: "Guias turisticos con licencia",
        price: "Gratis",
        notes: "Presentar licencia oficial de guia",
      },
      {
        type: "Estudiantes UE de arte/arquitectura",
        price: "Gratis",
        notes: "Certificado de matriculacion universitaria",
      },
      {
        type: "Miembros ICOM",
        price: "Gratis",
        notes: "Tarjeta ICOM valida",
      },
    ],
  },
  onlineVsWalkUp: {
    h2: "Precios Online vs. Taquilla",
    p: "Aqui es donde la gente se confunde. El precio base de la entrada es el mismo tanto si compras online como en taquilla. La diferencia esta en los gastos de reserva y el tiempo que ahorras:",
    tableTitle: "Comparacion de Costes",
    rows: [
      {
        type: "Taquilla (Puerta 2)",
        price: "25 \u20ac",
        notes: "1-3 horas de espera",
      },
      {
        type: "Reserva web oficial",
        price: "29 \u20ac",
        notes: "Entrada estandar, sin colas",
      },
      {
        type: "Revendedor autorizado",
        price: "Desde 26 \u20ac",
        notes: "Sin colas, cancelacion gratuita",
      },
    ],
    footnote:
      "Entradas de tarde (despues de las 16:00) disponibles por 20 \u20ac online.",
    recommendation:
      "Mi recomendacion sincera: reserva a traves de un revendedor autorizado. El precio es competitivo, obtienes acceso sin colas, y la mayoria ofrece cancelacion gratuita hasta 24 horas antes de tu visita. Esa flexibilidad por si sola merece la pena \u2014 el tiempo en Florencia puede ser impredecible, y los planes cambian.",
  },
  ctaTop: "Mejor Precio \u2014 Entradas Sin Colas Uffizi",
  freeEntryDays: {
    h2: "Dias de Entrada Gratuita",
    pPrefix: "Los Uffizi ofrecen entrada gratuita el ",
    pBold: "primer domingo de cada mes",
    pSuffix:
      ". Sin embargo, debo ser honesto: los domingos gratuitos son un arma de doble filo. La galeria se llena increiblemente, con tiempos de espera de 3-4 horas habituales. La experiencia dentro tambien es menos agradable cuando cada sala esta abarrotada. Si el presupuesto es un problema, visitar en temporada baja (12 \u20ac) entre semana ofrece una experiencia mucho mejor que un domingo gratuito.",
  },
  comboTickets: {
    h2: "Entradas Combinadas y Pases",
    p: "Si vas a visitar varios museos en Florencia, considera estas opciones:",
    options: [
      {
        label: "Tour combinado Uffizi + Accademia",
        description:
          "Visita ambos museos en un dia con un guia. Normalmente 89-120 \u20ac por persona, con entrada sin colas incluida para ambos.",
        hasLink: true,
        linkText: "Ver detalles del tour combinado \u2192",
      },
      {
        label: "Firenze Card",
        description:
          "85 \u20ac por 72 horas de acceso a museos en Florencia (72+ museos). Merece la pena si visitas 5 o mas museos. Incluye los Uffizi, Accademia, Palazzo Pitti y Jardines de Boboli.",
        hasLink: false,
      },
      {
        label: "Uffizi + Palazzo Pitti + Boboli",
        description:
          "Un pase combinado de 5 dias esta disponible ocasionalmente a traves del sistema de reserva oficial. Consulta disponibilidad en taquilla.",
        hasLink: false,
      },
    ],
  },
  moneySaving: {
    h2: "Consejos para Ahorrar",
    tips: [
      "Reserva entradas de tarde (despues de las 16:00) por 20 \u20ac en lugar de 29 \u20ac para entrada estandar",
      "Los ciudadanos UE de 18 a 25 anos pagan solo 2 \u20ac \u2014 lleva siempre un documento de identidad valido",
      "Menos de 18 anos? La entrada es gratuita para todas las nacionalidades \u2014 lleva un justificante de edad",
      "Los estudiantes de arte y arquitectura de universidades de la UE entran gratis \u2014 lleva tu certificado de matriculacion",
      "Reserva a traves de un revendedor autorizado para acceso sin colas y flexibilidad de cancelacion",
    ],
  },
  ctaBottom: "Reserva Entradas para los Uffizi",
  faq: [
    {
      q: "Cuanto cuestan las entradas de los Uffizi en 2026?",
      a: "29 \u20ac para reservas online, 25 \u20ac en taquilla. Entradas de tarde (despues de las 16:00) por 20 \u20ac online. Ciudadanos UE 18-25 anos: 2 \u20ac. Menores de 18: gratis. Entradas sin colas de revendedores autorizados desde 26 \u20ac.",
    },
    {
      q: "Hay gastos de reserva para las entradas de los Uffizi?",
      a: "El precio de 29 \u20ac en la web oficial incluye todos los gastos. Los revendedores autorizados normalmente cobran desde 26 \u20ac por entradas sin colas, y la mayoria ofrece cancelacion gratuita.",
    },
    {
      q: "Que documento necesito para las entradas con descuento?",
      a: "Lleva un pasaporte o documento de identidad valido que muestre tu fecha de nacimiento y nacionalidad. Los ciudadanos UE de 18 a 25 anos deben demostrar que tienen menos de 26 anos y la ciudadania europea. Los menores de 18 necesitan un justificante de edad.",
    },
    {
      q: "Merece la pena la Firenze Card?",
      a: "A 85 \u20ac por 72 horas, la Firenze Card merece la pena si visitas 5 o mas museos. Solo la entrada de los Uffizi cuesta 29 \u20ac online (o 25 \u20ac en taquilla), asi que la tarjeta se amortiza despues de unas 3-4 visitas a museos.",
    },
  ],
};

const content: PageContent<TicketPricesContent> = { en, it, de, fr, es };

export function getTicketPricesContent(locale: string): TicketPricesContent {
  return getContent(content, locale);
}
