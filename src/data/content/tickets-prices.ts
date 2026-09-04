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
    title: "Uffizi Ticket Prices 2026 | Full Cost & Discount Guide",
    description:
      "Every Uffizi ticket price for 2026: \u20ac25/\u20ac29 standard, \u20ac16/\u20ac20 afternoon, \u20ac2 reduced, free under 18, plus Vasari Corridor, PassePartout and money-saving tips.",
  },
  breadcrumbs: {
    tickets: "Tickets",
    prices: "Prices",
  },
  h1: "Uffizi Gallery Ticket Prices 2026",
  intro:
    "For 2026 the Uffizi Gallery keeps one set of rates all year \u2014 no more high-season/low-season confusion. The one thing worth understanding before you book is the advance/on-the-day split: any ticket bought before the calendar date of your visit costs \u20ac4 more, and that \u20ac4 is the reservation fee for locking in a date and time. Here's the complete breakdown of every ticket type, discount, and cost so you know exactly what to budget.",
  standardPrices: {
    h2: "Standard Ticket Prices",
    tableTitle: "2026 Uffizi Gallery & Combined Tickets",
    rows: [
      {
        type: "Standard entry (before 4:00 PM)",
        price: "\u20ac25 on the day / \u20ac29 in advance",
        notes: "Timed entry \u2014 the \u20ac4 difference is the reservation fee",
      },
      {
        type: "Afternoon entry (from 4:00 PM)",
        price: "\u20ac16 on the day / \u20ac20 in advance",
        notes: "The cheapest way in; last entry 5:30 PM, gallery closes 6:30 PM",
      },
      {
        type: "Uffizi + Vasari Corridor",
        price: "\u20ac43 on the day / \u20ac47 in advance",
        notes: "Combined ticket for the gallery and the Vasari Corridor",
      },
      {
        type: "PassePartout 5 Days",
        price: "\u20ac40 per adult",
        notes:
          "5 consecutive days: one entry each to the Uffizi, Pitti Palace museums, Boboli Gardens and Bardini Garden",
      },
      {
        type: "Pitti Palace + Boboli Gardens (one day)",
        price: "\u20ac22 on the day / \u20ac25 in advance",
        notes: "Combined ticket, valid for a single day",
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
        notes:
          "Nominative ticket — the name on it must match the child's ID",
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
    h2: "In Advance vs. On the Day",
    p: "Here's where people get confused. The base ticket price is the same either way. What changes is the \u20ac4 reservation fee: buy before the calendar date of your visit and you pay it, buy on the day itself and you don't. What the fee actually buys is a guaranteed time slot \u2014 and in peak season the slots for a given day are often gone well before you arrive:",
    tableTitle: "Cost Comparison",
    rows: [
      {
        type: "On the day, at the ticket office",
        price: "\u20ac25",
        notes:
          "Cash at the self-service machines, card at the staffed counters; whatever slot is left",
      },
      {
        type: "In advance, official site",
        price: "\u20ac29",
        notes: "Standard entry plus the \u20ac4 reservation fee, timed slot",
      },
      {
        type: "In advance, independent local agency",
        price: "From \u20ac26",
        notes: "Timed slot + digital audio guide, free cancellation",
      },
    ],
    footnote:
      "Afternoon entry (from 4:00 PM) is \u20ac16 on the day or \u20ac20 in advance.",
    recommendation:
      "My honest recommendation: book through an independent local agency. The price is competitive, you get a guaranteed entry slot plus a digital audio guide, and most offer free cancellation up to 24 hours before your visit. That flexibility alone is worth it \u2014 Florence weather can be unpredictable, and plans change. On the day itself you simply walk to Door 1 at your reserved time and skip the ticket-office queue; the short security screening applies to everyone.",
  },
  ctaTop: "Best Value \u2014 Uffizi Timed-Entry Ticket & Guide-Book App",
  freeEntryDays: {
    h2: "Free Entry Days",
    pPrefix: "The Uffizi and the Vasari Corridor are both free on the ",
    pBold: "first Sunday of every month",
    pSuffix:
      ". A ticket is still required, and it is nominative \u2014 the visitor's name is on it. The Uffizi's free ticket is issued only at the ticket-office counter on the day and cannot be booked online, so expect to queue for it. The Vasari Corridor's must be booked online in advance, or collected at the ticket office on the day if a spot is still available. I also need to be honest: free Sundays are a mixed blessing. The gallery becomes incredibly crowded, with wait times of 3-4 hours common, and the experience inside is less enjoyable when every room is packed. If budget is a concern, an afternoon ticket at \u20ac16 on the day, on a quiet weekday, gives you a far better experience than a free Sunday.",
  },
  comboTickets: {
    h2: "Combo Tickets & Passes",
    p: "If you're visiting multiple museums in Florence, consider these options:",
    options: [
      {
        label: "Uffizi + Accademia combo tour",
        description:
          "See both museums in one day with a guide. Typically \u20ac89-120 per person including reserved entry to both.",
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
        label: "Uffizi + Vasari Corridor",
        description:
          "\u20ac43 on the day or \u20ac47 in advance \u2014 one combined ticket for the gallery and the Vasari Corridor.",
        hasLink: false,
      },
      {
        label: "PassePartout 5 Days",
        description:
          "\u20ac40 per adult, valid 5 consecutive days with one entry each to the Uffizi Gallery, the Pitti Palace museums, the Boboli Gardens and the Bardini Garden. You must reserve a specific date and time for the Uffizi, and the Uffizi has to be the first museum you visit. It gives priority admission, except during free-admission periods.",
        hasLink: false,
      },
      {
        label: "Pitti Palace + Boboli Gardens",
        description:
          "\u20ac22 on the day or \u20ac25 in advance for both on a single day \u2014 a good add-on if you're not doing the full 5-day pass.",
        hasLink: false,
      },
    ],
  },
  moneySaving: {
    h2: "Money-Saving Tips",
    tips: [
      "Choose afternoon entry (from 4:00 PM): \u20ac16 on the day or \u20ac20 in advance, against \u20ac25/\u20ac29 for standard entry",
      "Buying on the day saves the \u20ac4 reservation fee \u2014 but you're gambling on availability, and busy days do sell out",
      "EU citizens aged 18-25 pay only \u20ac2 \u2014 always bring valid ID",
      "Under 18? Entry is free for all nationalities \u2014 but you still need a free nominative ticket, and the name on it must match the ID",
      "Art and architecture students at EU universities get free entry \u2014 bring your enrollment certificate",
      "Visiting Pitti Palace and the Boboli Gardens too? The PassePartout 5 Days covers all of them for \u20ac40",
      "Book through an independent local agency for a guaranteed entry slot, a digital audio guide and cancellation flexibility",
    ],
  },
  ctaBottom: "Book Uffizi Gallery Tickets",
  faq: [
    {
      q: "How much does the Uffizi Gallery cost in 2026?",
      a: "Standard entry (before 4:00 PM) is \u20ac25 on the day or \u20ac29 in advance. Afternoon entry (from 4:00 PM) is \u20ac16 on the day or \u20ac20 in advance. EU citizens 18-25 pay \u20ac2, and under 18 is free with a nominative ticket. Uffizi + Vasari Corridor is \u20ac43 on the day or \u20ac47 in advance. Reserved timed-entry tickets with a digital audio guide start from \u20ac26.",
    },
    {
      q: "Is there a booking fee for Uffizi tickets?",
      a: "Yes \u2014 \u20ac4. That's the whole difference between the on-the-day price and the advance price (\u20ac25 versus \u20ac29 for standard entry): a reservation fee for locking in a specific date and time. Independent local agencies charge from \u20ac26 for a timed-entry ticket with a digital audio guide, and most offer free cancellation.",
    },
    {
      q: "What is the PassePartout 5 Days pass?",
      a: "\u20ac40 per adult for 5 consecutive days, with one entry each to the Uffizi Gallery, the Pitti Palace museums, the Boboli Gardens and the Bardini Garden. You reserve a specific date and time for the Uffizi, and the Uffizi must be the first of the four you visit. It gives priority admission, except during free-admission periods.",
    },
    {
      q: "What ID do I need for reduced-price tickets?",
      a: "Bring a valid passport or national ID card showing your date of birth and nationality. EU citizens 18-25 need proof they're under 26 and an EU citizen. Under-18s get a free nominative ticket, so the name on it has to match their ID.",
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
      "Tutti i prezzi dei biglietti Uffizi 2026: \u20ac25/\u20ac29 standard, \u20ac16/\u20ac20 pomeriggio, \u20ac2 ridotto, gratis under 18, pi\u00f9 Corridoio Vasariano e PassePartout.",
  },
  breadcrumbs: {
    tickets: "Biglietti",
    prices: "Prezzi",
  },
  h1: "Prezzi Biglietti Galleria degli Uffizi 2026",
  intro:
    "Per il 2026 la Galleria degli Uffizi mantiene le stesse tariffe tutto l'anno: niente pi\u00f9 confusione tra alta e bassa stagione. L'unica cosa da capire prima di prenotare \u00e8 la differenza tra prevendita e acquisto in giornata: ogni biglietto acquistato prima della data della visita costa \u20ac4 in pi\u00f9, e quei \u20ac4 sono il diritto di prenotazione che ti blocca data e orario. Ecco il riepilogo completo di ogni tipo di biglietto, sconto e costo per sapere esattamente quanto mettere a budget.",
  standardPrices: {
    h2: "Prezzi Biglietti Standard",
    tableTitle: "Tariffe Uffizi e Biglietti Cumulativi 2026",
    rows: [
      {
        type: "Ingresso standard (prima delle 16:00)",
        price: "\u20ac25 in giornata / \u20ac29 in prevendita",
        notes:
          "Ingresso a orario prestabilito \u2014 la differenza di \u20ac4 \u00e8 il diritto di prenotazione",
      },
      {
        type: "Ingresso pomeridiano (dalle 16:00)",
        price: "\u20ac16 in giornata / \u20ac20 in prevendita",
        notes:
          "La tariffa pi\u00f9 economica; ultimo ingresso alle 17:30, chiusura alle 18:30",
      },
      {
        type: "Uffizi + Corridoio Vasariano",
        price: "\u20ac43 in giornata / \u20ac47 in prevendita",
        notes: "Biglietto cumulativo per la galleria e il Corridoio Vasariano",
      },
      {
        type: "PassePartout 5 Days",
        price: "\u20ac40 a persona (adulti)",
        notes:
          "5 giorni consecutivi: un ingresso ciascuno a Uffizi, musei di Palazzo Pitti, Giardino di Boboli e Giardino Bardini",
      },
      {
        type: "Palazzo Pitti + Giardino di Boboli (un giorno)",
        price: "\u20ac22 in giornata / \u20ac25 in prevendita",
        notes: "Biglietto cumulativo, valido per un solo giorno",
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
        notes:
          "Biglietto nominativo \u2014 il nome deve corrispondere al documento",
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
    h2: "Prevendita vs. Acquisto in Giornata",
    p: "Ecco dove nasce la confusione. Il prezzo base del biglietto \u00e8 lo stesso in entrambi i casi. Quello che cambia \u00e8 il diritto di prenotazione di \u20ac4: lo paghi se acquisti prima della data della visita, non lo paghi se compri il giorno stesso. Quei \u20ac4 servono a garantirti una fascia oraria \u2014 e in alta stagione le fasce di una giornata si esauriscono molto prima che tu arrivi:",
    tableTitle: "Confronto Costi",
    rows: [
      {
        type: "In giornata, in biglietteria",
        price: "\u20ac25",
        notes:
          "Contanti alle casse automatiche, carta agli sportelli con personale; prendi la fascia che resta",
      },
      {
        type: "In prevendita, sito ufficiale",
        price: "\u20ac29",
        notes:
          "Ingresso standard pi\u00f9 \u20ac4 di diritto di prenotazione, orario prestabilito",
      },
      {
        type: "In prevendita, agenzia locale indipendente",
        price: "Da \u20ac26",
        notes:
          "Orario prestabilito + audioguida digitale, cancellazione gratuita",
      },
    ],
    footnote:
      "L'ingresso pomeridiano (dalle 16:00) costa \u20ac16 in giornata o \u20ac20 in prevendita.",
    recommendation:
      "Il mio consiglio sincero: prenota tramite un'agenzia locale indipendente. Il prezzo \u00e8 competitivo, ti garantisci una fascia oraria e un'audioguida digitale, e la maggior parte offre cancellazione gratuita fino a 24 ore prima. Questa flessibilit\u00e0 da sola vale la differenza \u2014 il meteo a Firenze \u00e8 imprevedibile e i piani possono cambiare. Il giorno della visita ti presenti alla Porta 1 all'orario prenotato e salti la fila alla biglietteria; il rapido controllo di sicurezza vale per tutti.",
  },
  ctaTop: "Miglior Prezzo \u2014 Biglietto Uffizi a Orario e App Guida",
  freeEntryDays: {
    h2: "Giornate ad Ingresso Gratuito",
    pPrefix: "Gli Uffizi e il Corridoio Vasariano sono entrambi gratuiti la ",
    pBold: "prima domenica di ogni mese",
    pSuffix:
      ". Il biglietto serve comunque ed \u00e8 nominativo: riporta il nome del visitatore. Quello gratuito degli Uffizi si ritira solo allo sportello della biglietteria il giorno stesso e non \u00e8 prenotabile online, quindi mettete in conto la fila. Quello del Corridoio Vasariano va invece prenotato online in anticipo, oppure ritirato in biglietteria il giorno stesso se resta ancora posto. Devo per\u00f2 essere sincero: le domeniche gratuite sono un'arma a doppio taglio. La galleria diventa incredibilmente affollata, con tempi di attesa di 3-4 ore. Anche l'esperienza all'interno \u00e8 meno piacevole quando ogni sala \u00e8 stipata. Se il budget \u00e8 un problema, un biglietto pomeridiano a \u20ac16 in giornata, in un giorno feriale tranquillo, offre un'esperienza decisamente migliore di una domenica gratuita.",
  },
  comboTickets: {
    h2: "Biglietti Combinati e Pass",
    p: "Se stai visitando pi\u00f9 musei a Firenze, considera queste opzioni:",
    options: [
      {
        label: "Tour combo Uffizi + Accademia",
        description:
          "Visita entrambi i musei in un giorno con una guida. Generalmente \u20ac89-120 a persona, ingresso riservato incluso per entrambi.",
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
        label: "Uffizi + Corridoio Vasariano",
        description:
          "\u20ac43 in giornata o \u20ac47 in prevendita \u2014 un unico biglietto per la galleria e il Corridoio Vasariano.",
        hasLink: false,
      },
      {
        label: "PassePartout 5 Days",
        description:
          "\u20ac40 a persona per gli adulti, valido 5 giorni consecutivi con un ingresso ciascuno alla Galleria degli Uffizi, ai musei di Palazzo Pitti, al Giardino di Boboli e al Giardino Bardini. Devi prenotare data e orario precisi per gli Uffizi, che devono essere il primo museo che visiti. D\u00e0 diritto all'ingresso prioritario, tranne nei periodi di ingresso gratuito.",
        hasLink: false,
      },
      {
        label: "Palazzo Pitti + Giardino di Boboli",
        description:
          "\u20ac22 in giornata o \u20ac25 in prevendita per entrambi in un solo giorno \u2014 una buona aggiunta se non prendi il pass di 5 giorni.",
        hasLink: false,
      },
    ],
  },
  moneySaving: {
    h2: "Consigli per Risparmiare",
    tips: [
      "Scegli l'ingresso pomeridiano (dalle 16:00): \u20ac16 in giornata o \u20ac20 in prevendita, contro \u20ac25/\u20ac29 dell'ingresso standard",
      "Comprare in giornata ti fa risparmiare i \u20ac4 di prenotazione \u2014 ma \u00e8 una scommessa sulla disponibilit\u00e0, e nei giorni di punta i posti si esauriscono",
      "I cittadini UE tra 18 e 25 anni pagano solo \u20ac2 \u2014 porta sempre un documento valido",
      "Hai meno di 18 anni? L'ingresso \u00e8 gratuito per tutte le nazionalit\u00e0 \u2014 serve comunque un biglietto nominativo gratuito e il nome deve corrispondere al documento",
      "Gli studenti di arte e architettura in universit\u00e0 UE entrano gratis \u2014 porta il certificato di iscrizione",
      "Visiti anche Palazzo Pitti e il Giardino di Boboli? Il PassePartout 5 Days li comprende tutti a \u20ac40",
      "Prenota tramite un'agenzia locale indipendente per avere una fascia oraria garantita, l'audioguida digitale e la flessibilit\u00e0 di cancellazione",
    ],
  },
  ctaBottom: "Prenota i Biglietti per gli Uffizi",
  faq: [
    {
      q: "Quanto costa il biglietto per gli Uffizi nel 2026?",
      a: "L'ingresso standard (prima delle 16:00) costa \u20ac25 in giornata o \u20ac29 in prevendita. L'ingresso pomeridiano (dalle 16:00) costa \u20ac16 in giornata o \u20ac20 in prevendita. I cittadini UE 18-25 anni pagano \u20ac2, gli under 18 entrano gratis con biglietto nominativo. Uffizi + Corridoio Vasariano costa \u20ac43 in giornata o \u20ac47 in prevendita. I biglietti con ingresso a orario prestabilito e audioguida digitale partono da \u20ac26.",
    },
    {
      q: "C'\u00e8 una commissione per la prenotazione dei biglietti?",
      a: "S\u00ec \u2014 \u20ac4. \u00c8 tutta la differenza tra il prezzo in giornata e quello in prevendita (\u20ac25 contro \u20ac29 per l'ingresso standard): \u00e8 il diritto di prenotazione che ti blocca data e orario. Le agenzie locali indipendenti partono da \u20ac26 per un biglietto a orario prestabilito con audioguida digitale, e la maggior parte offre cancellazione gratuita.",
    },
    {
      q: "Cos'\u00e8 il PassePartout 5 Days?",
      a: "\u20ac40 a persona per gli adulti, valido 5 giorni consecutivi con un ingresso ciascuno alla Galleria degli Uffizi, ai musei di Palazzo Pitti, al Giardino di Boboli e al Giardino Bardini. Per gli Uffizi devi prenotare data e orario precisi, e gli Uffizi devono essere il primo dei quattro che visiti. D\u00e0 diritto all'ingresso prioritario, tranne nei periodi di ingresso gratuito.",
    },
    {
      q: "Quale documento serve per i biglietti ridotti?",
      a: "Porta un passaporto o una carta d'identit\u00e0 valida che mostri data di nascita e nazionalit\u00e0. I cittadini UE 18-25 devono dimostrare di avere meno di 26 anni e la cittadinanza europea. I minori di 18 anni ricevono un biglietto nominativo gratuito: il nome deve corrispondere a quello sul documento.",
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
      "Eintrittspreise Uffizi 2026 | Kosten & Ermäßigungen",
    description:
      "Alle Uffizi-Preise 2026: 25/29 € Standard, 16/20 € nachmittags, 2 € ermäßigt, unter 18 frei, dazu Vasari-Korridor, PassePartout und Spartipps.",
  },
  breadcrumbs: {
    tickets: "Tickets",
    prices: "Preise",
  },
  h1: "Eintrittspreise Uffizi Galerie 2026",
  intro:
    "Für 2026 gelten in der Uffizi Galerie dieselben Tarife das ganze Jahr über — keine Verwirrung mehr zwischen Haupt- und Nebensaison. Wichtig zu verstehen ist nur der Unterschied zwischen Vorverkauf und Tageskasse: Jedes Ticket, das Sie vor dem Kalendertag Ihres Besuchs kaufen, kostet 4 € mehr, und diese 4 € sind die Reservierungsgebühr für ein festes Datum mit Uhrzeit. Hier finden Sie die vollständige Übersicht aller Ticketarten, Ermäßigungen und Kosten, damit Sie Ihr Budget genau planen können.",
  standardPrices: {
    h2: "Standard-Eintrittspreise",
    tableTitle: "Uffizi Galerie & Kombitickets 2026",
    rows: [
      {
        type: "Standardeintritt (vor 16:00 Uhr)",
        price: "25 € am Besuchstag / 29 € im Vorverkauf",
        notes:
          "Zeitfenster-Ticket — die Differenz von 4 € ist die Reservierungsgebühr",
      },
      {
        type: "Nachmittagseintritt (ab 16:00 Uhr)",
        price: "16 € am Besuchstag / 20 € im Vorverkauf",
        notes:
          "Der günstigste Weg hinein; letzter Einlass 17:30 Uhr, Schließung 18:30 Uhr",
      },
      {
        type: "Uffizi + Vasari-Korridor",
        price: "43 € am Besuchstag / 47 € im Vorverkauf",
        notes: "Kombiticket für die Galerie und den Vasari-Korridor",
      },
      {
        type: "PassePartout 5 Days",
        price: "40 € pro Erwachsenem",
        notes:
          "5 aufeinanderfolgende Tage: je ein Eintritt in die Uffizien, die Museen des Palazzo Pitti, den Boboli-Garten und den Bardini-Garten",
      },
      {
        type: "Palazzo Pitti + Boboli-Garten (ein Tag)",
        price: "22 € am Besuchstag / 25 € im Vorverkauf",
        notes: "Kombiticket, gültig für einen einzigen Tag",
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
        notes:
          "Personalisiertes Ticket — der Name muss mit dem Ausweis übereinstimmen",
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
    h2: "Vorverkauf vs. Tageskasse",
    p: "Hier entsteht oft Verwirrung. Der Grundpreis des Tickets ist in beiden Fällen identisch. Der Unterschied ist die Reservierungsgebühr von 4 €: Sie zahlen sie, wenn Sie vor dem Kalendertag Ihres Besuchs kaufen, und Sie zahlen sie nicht, wenn Sie am Tag selbst kaufen. Wofür die Gebühr steht, ist ein garantiertes Zeitfenster — und in der Hauptsaison sind die Zeitfenster eines Tages längst vergeben, bevor Sie vor Ort sind:",
    tableTitle: "Kostenvergleich",
    rows: [
      {
        type: "Am Besuchstag, an der Kasse",
        price: "25 €",
        notes:
          "Bar an den Selbstbedienungsautomaten, Karte an den besetzten Schaltern; Sie nehmen, was frei ist",
      },
      {
        type: "Im Vorverkauf, offizielle Website",
        price: "29 €",
        notes: "Standardeintritt plus 4 € Reservierungsgebühr, festes Zeitfenster",
      },
      {
        type: "Im Vorverkauf, unabhängige lokale Agentur",
        price: "Ab 26 €",
        notes: "Festes Zeitfenster + digitaler Audioguide, kostenlose Stornierung",
      },
    ],
    footnote:
      "Der Nachmittagseintritt (ab 16:00 Uhr) kostet 16 € am Besuchstag oder 20 € im Vorverkauf.",
    recommendation:
      "Meine ehrliche Empfehlung: Buchen Sie über eine unabhängige lokale Agentur. Der Preis ist wettbewerbsfähig, Sie sichern sich ein garantiertes Zeitfenster samt digitalem Audioguide, und die meisten bieten kostenlose Stornierung bis 24 Stunden vor dem Besuch. Allein diese Flexibilität ist es wert — das Wetter in Florenz kann unberechenbar sein, und Pläne ändern sich. Am Besuchstag gehen Sie zu Ihrer reservierten Zeit einfach zu Eingang 1 und umgehen die Warteschlange an der Kasse; die kurze Sicherheitskontrolle gilt für alle.",
  },
  ctaTop: "Bester Preis — Uffizi Ticket mit Zeitfenster & Guide-App",
  freeEntryDays: {
    h2: "Tage mit freiem Eintritt",
    pPrefix: "Die Uffizien und der Vasarikorridor sind beide kostenlos am ",
    pBold: "ersten Sonntag jedes Monats",
    pSuffix:
      ". Ein Ticket ist trotzdem nötig und personalisiert: Der Name des Besuchers steht darauf. Das kostenlose Uffizien-Ticket gibt es ausschliesslich am Schalter der Ticketkasse am Tag selbst und ist online nicht buchbar — rechnen Sie also mit der Schlange. Das Ticket für den Vasarikorridor muss dagegen online im Voraus gebucht oder am Tag selbst an der Kasse abgeholt werden, sofern noch ein Platz frei ist. Allerdings muss ich ehrlich sein: Die kostenlosen Sonntage sind ein zweischneidiges Schwert. Die Galerie wird unglaublich voll, Wartezeiten von 3–4 Stunden sind keine Seltenheit. Auch das Erlebnis im Inneren leidet, wenn jeder Raum überfüllt ist. Wenn das Budget eine Rolle spielt, bietet ein Nachmittagsticket für 16 € am Besuchstag, an einem ruhigen Wochentag, ein deutlich besseres Erlebnis als ein kostenloser Sonntag.",
  },
  comboTickets: {
    h2: "Kombi-Tickets und Pässe",
    p: "Wenn Sie mehrere Museen in Florenz besuchen möchten, lohnen sich folgende Optionen:",
    options: [
      {
        label: "Kombi-Tour Uffizi + Accademia",
        description:
          "Besuchen Sie beide Museen an einem Tag mit einem Führer. In der Regel 89–120 € pro Person, inklusive reserviertem Einlass für beide Museen.",
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
        label: "Uffizi + Vasari-Korridor",
        description:
          "43 € am Besuchstag oder 47 € im Vorverkauf — ein Kombiticket für die Galerie und den Vasari-Korridor.",
        hasLink: false,
      },
      {
        label: "PassePartout 5 Days",
        description:
          "40 € pro Erwachsenem, gültig an 5 aufeinanderfolgenden Tagen mit je einem Eintritt in die Uffizi Galerie, die Museen des Palazzo Pitti, den Boboli-Garten und den Bardini-Garten. Für die Uffizien müssen Sie ein festes Datum mit Uhrzeit reservieren, und die Uffizien müssen das erste Museum sein, das Sie besuchen. Der Pass gewährt bevorzugten Einlass, außer an Tagen mit freiem Eintritt.",
        hasLink: false,
      },
      {
        label: "Palazzo Pitti + Boboli-Garten",
        description:
          "22 € am Besuchstag oder 25 € im Vorverkauf für beides an einem Tag — eine gute Ergänzung, wenn Sie den 5-Tage-Pass nicht nehmen.",
        hasLink: false,
      },
    ],
  },
  moneySaving: {
    h2: "Spartipps",
    tips: [
      "Wählen Sie den Nachmittagseintritt (ab 16:00 Uhr): 16 € am Besuchstag oder 20 € im Vorverkauf statt 25/29 € für den Standardeintritt",
      "Der Kauf am Besuchstag spart die 4 € Reservierungsgebühr — Sie wetten damit aber auf die Verfügbarkeit, und stark besuchte Tage sind ausverkauft",
      "EU-Bürger zwischen 18 und 25 Jahren zahlen nur 2 € — bringen Sie immer einen gültigen Ausweis mit",
      "Unter 18? Der Eintritt ist für alle Nationalitäten kostenlos — Sie brauchen trotzdem ein kostenloses personalisiertes Ticket, dessen Name mit dem Ausweis übereinstimmt",
      "Kunst- und Architekturstudenten an EU-Universitäten erhalten freien Eintritt — Immatrikulationsbescheinigung nicht vergessen",
      "Besuchen Sie auch Palazzo Pitti und den Boboli-Garten? Der PassePartout 5 Days deckt alles für 40 € ab",
      "Buchen Sie über eine unabhängige lokale Agentur für ein garantiertes Zeitfenster, einen digitalen Audioguide und Stornierungsflexibilität",
    ],
  },
  ctaBottom: "Uffizi Galerie Tickets buchen",
  faq: [
    {
      q: "Was kostet der Eintritt in die Uffizi Galerie 2026?",
      a: "Der Standardeintritt (vor 16:00 Uhr) kostet 25 € am Besuchstag oder 29 € im Vorverkauf. Der Nachmittagseintritt (ab 16:00 Uhr) kostet 16 € am Besuchstag oder 20 € im Vorverkauf. EU-Bürger von 18–25 Jahren zahlen 2 €, unter 18 ist der Eintritt mit personalisiertem Ticket kostenlos. Uffizi + Vasari-Korridor kostet 43 € am Besuchstag oder 47 € im Vorverkauf. Tickets mit festem Zeitfenster und digitalem Audioguide gibt es ab 26 €.",
    },
    {
      q: "Gibt es eine Buchungsgebühr für Uffizi-Tickets?",
      a: "Ja — 4 €. Das ist genau die Differenz zwischen dem Preis am Besuchstag und im Vorverkauf (25 € gegenüber 29 € beim Standardeintritt): die Reservierungsgebühr dafür, dass Sie sich ein festes Datum mit Uhrzeit sichern. Unabhängige lokale Agenturen verlangen ab 26 € für ein Ticket mit Zeitfenster und digitalem Audioguide, und die meisten bieten kostenlose Stornierung.",
    },
    {
      q: "Was ist der PassePartout 5 Days?",
      a: "40 € pro Erwachsenem für 5 aufeinanderfolgende Tage, mit je einem Eintritt in die Uffizi Galerie, die Museen des Palazzo Pitti, den Boboli-Garten und den Bardini-Garten. Für die Uffizien reservieren Sie ein festes Datum mit Uhrzeit, und die Uffizien müssen das erste der vier Häuser sein, das Sie besuchen. Der Pass gewährt bevorzugten Einlass, außer an Tagen mit freiem Eintritt.",
    },
    {
      q: "Welchen Ausweis brauche ich für ermäßigte Tickets?",
      a: "Bringen Sie einen gültigen Reisepass oder Personalausweis mit, auf dem Ihr Geburtsdatum und Ihre Staatsangehörigkeit ersichtlich sind. EU-Bürger von 18–25 Jahren müssen nachweisen, dass sie unter 26 sind und die EU-Staatsbürgerschaft besitzen. Unter 18-Jährige erhalten ein kostenloses personalisiertes Ticket, dessen Name mit dem Ausweis übereinstimmen muss.",
    },
    {
      q: "Lohnt sich die Firenze Card?",
      a: "Bei 85 € für 72 Stunden lohnt sich die Firenze Card, wenn Sie 5 oder mehr Museen besuchen. Allein das Uffizi-Ticket kostet 29 € online (oder 25 € an der Kasse), sodass sich die Karte ab etwa 3-4 Museumsbesuchen rechnet.",
    },
  ],
};

const fr: TicketPricesContent = {
  meta: {
    title: "Tarifs Billets Offices 2026 | Prix, R\u00e9ductions et Conseils",
    description:
      "Tous les tarifs Offices 2026 : 25/29 \u20ac standard, 16/20 \u20ac l'apr\u00e8s-midi, 2 \u20ac r\u00e9duit, gratuit avant 18 ans, plus Corridor de Vasari et PassePartout.",
  },
  breadcrumbs: {
    tickets: "Billets",
    prices: "Tarifs",
  },
  h1: "Tarifs des Billets Galerie des Offices 2026",
  intro:
    "Pour 2026, la Galerie des Offices applique les m\u00eames tarifs toute l'ann\u00e9e : plus de confusion entre haute et basse saison. La seule chose \u00e0 comprendre avant de r\u00e9server, c'est la diff\u00e9rence entre pr\u00e9vente et achat le jour m\u00eame : tout billet achet\u00e9 avant la date de votre visite co\u00fbte 4 \u20ac de plus, et ces 4 \u20ac correspondent aux frais de r\u00e9servation qui bloquent une date et un horaire. Voici le d\u00e9tail complet de chaque type de billet, r\u00e9duction et co\u00fbt pour savoir exactement quel budget pr\u00e9voir.",
  standardPrices: {
    h2: "Tarifs Standard",
    tableTitle: "Tarifs Offices et Billets Combin\u00e9s 2026",
    rows: [
      {
        type: "Entr\u00e9e standard (avant 16h)",
        price: "25 \u20ac le jour m\u00eame / 29 \u20ac en pr\u00e9vente",
        notes:
          "Entr\u00e9e \u00e0 horaire r\u00e9serv\u00e9 \u2014 l'\u00e9cart de 4 \u20ac correspond aux frais de r\u00e9servation",
      },
      {
        type: "Entr\u00e9e de l'apr\u00e8s-midi (\u00e0 partir de 16h)",
        price: "16 \u20ac le jour m\u00eame / 20 \u20ac en pr\u00e9vente",
        notes:
          "Le tarif le plus bas ; derni\u00e8re entr\u00e9e \u00e0 17h30, fermeture \u00e0 18h30",
      },
      {
        type: "Offices + Corridor de Vasari",
        price: "43 \u20ac le jour m\u00eame / 47 \u20ac en pr\u00e9vente",
        notes: "Billet combin\u00e9 pour la galerie et le Corridor de Vasari",
      },
      {
        type: "PassePartout 5 Days",
        price: "40 \u20ac par adulte",
        notes:
          "5 jours cons\u00e9cutifs : une entr\u00e9e \u00e0 chacun des Offices, des mus\u00e9es du Palazzo Pitti, des Jardins de Boboli et du Jardin Bardini",
      },
      {
        type: "Palazzo Pitti + Jardins de Boboli (une journ\u00e9e)",
        price: "22 \u20ac le jour m\u00eame / 25 \u20ac en pr\u00e9vente",
        notes: "Billet combin\u00e9, valable une seule journ\u00e9e",
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
        notes:
          "Billet nominatif — le nom doit correspondre à la pièce d'identité",
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
    h2: "Pr\u00e9vente vs. Achat le Jour M\u00eame",
    p: "C'est l\u00e0 que les gens se perdent. Le prix de base du billet est identique dans les deux cas. Ce qui change, ce sont les 4 \u20ac de frais de r\u00e9servation : vous les payez si vous achetez avant la date de votre visite, vous ne les payez pas le jour m\u00eame. Ce que ces 4 \u20ac ach\u00e8tent, c'est un cr\u00e9neau horaire garanti \u2014 et en haute saison, les cr\u00e9neaux d'une journ\u00e9e sont pris bien avant votre arriv\u00e9e :",
    tableTitle: "Comparaison des Couts",
    rows: [
      {
        type: "Le jour m\u00eame, \u00e0 la billetterie",
        price: "25 \u20ac",
        notes:
          "Esp\u00e8ces aux bornes automatiques, carte aux guichets avec personnel ; vous prenez le cr\u00e9neau qui reste",
      },
      {
        type: "En pr\u00e9vente, site officiel",
        price: "29 \u20ac",
        notes:
          "Entr\u00e9e standard plus 4 \u20ac de frais de r\u00e9servation, horaire r\u00e9serv\u00e9",
      },
      {
        type: "En pr\u00e9vente, agence locale ind\u00e9pendante",
        price: "A partir de 26 \u20ac",
        notes: "Horaire r\u00e9serv\u00e9 + audioguide num\u00e9rique, annulation gratuite",
      },
    ],
    footnote:
      "L'entr\u00e9e de l'apr\u00e8s-midi (\u00e0 partir de 16h) co\u00fbte 16 \u20ac le jour m\u00eame ou 20 \u20ac en pr\u00e9vente.",
    recommendation:
      "Mon conseil sinc\u00e8re : r\u00e9servez via une agence locale ind\u00e9pendante. Le prix est comp\u00e9titif, vous vous assurez un cr\u00e9neau horaire garanti et un audioguide num\u00e9rique, et la plupart offrent l'annulation gratuite jusqu'\u00e0 24 heures avant votre visite. Cette flexibilit\u00e9 \u00e0 elle seule en vaut la peine \u2014 la m\u00e9t\u00e9o \u00e0 Florence peut \u00eatre impr\u00e9visible, et les plans changent. Le jour de la visite, vous vous pr\u00e9sentez \u00e0 la Porte 1 \u00e0 l'heure r\u00e9serv\u00e9e et vous \u00e9vitez la file d'attente \u00e0 la billetterie ; le court contr\u00f4le de s\u00e9curit\u00e9 s'applique \u00e0 tout le monde.",
  },
  ctaTop: "Meilleur Prix \u2014 Billet Offices \u00e0 Horaire R\u00e9serv\u00e9 et Appli Guide",
  freeEntryDays: {
    h2: "Jours d'Entree Gratuite",
    pPrefix: "Les Offices et le Corridor de Vasari sont tous deux gratuits le ",
    pBold: "premier dimanche de chaque mois",
    pSuffix:
      ". Un billet reste obligatoire et il est nominatif : le nom du visiteur y figure. Le billet gratuit des Offices est delivre uniquement au guichet de la billetterie le jour meme et n'est pas reservable en ligne — prevoyez donc la file. Celui du Corridor de Vasari doit au contraire etre reserve en ligne a l'avance, ou retire a la billetterie le jour meme s'il reste une place. Cependant, je dois etre honnete : les dimanches gratuits sont une arme a double tranchant. La galerie devient incroyablement bondee, avec des temps d'attente de 3 a 4 heures courants. L'experience a l'interieur est aussi moins agreable quand chaque salle est pleine a craquer. Si le budget est un souci, un billet de l'apr\u00e8s-midi \u00e0 16 \u20ac le jour m\u00eame, un jour de semaine tranquille, offre une bien meilleure exp\u00e9rience qu'un dimanche gratuit.",
  },
  comboTickets: {
    h2: "Billets Combines et Pass",
    p: "Si vous visitez plusieurs musees a Florence, considerez ces options :",
    options: [
      {
        label: "Tour combine Offices + Accademia",
        description:
          "Visitez les deux mus\u00e9es en une journ\u00e9e avec un guide. G\u00e9n\u00e9ralement 89-120 \u20ac par personne, entr\u00e9e r\u00e9serv\u00e9e incluse pour les deux.",
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
        label: "Offices + Corridor de Vasari",
        description:
          "43 \u20ac le jour m\u00eame ou 47 \u20ac en pr\u00e9vente \u2014 un seul billet pour la galerie et le Corridor de Vasari.",
        hasLink: false,
      },
      {
        label: "PassePartout 5 Days",
        description:
          "40 \u20ac par adulte, valable 5 jours cons\u00e9cutifs avec une entr\u00e9e \u00e0 chacun : Galerie des Offices, mus\u00e9es du Palazzo Pitti, Jardins de Boboli et Jardin Bardini. Vous devez r\u00e9server une date et un horaire pr\u00e9cis pour les Offices, qui doivent \u00eatre le premier mus\u00e9e visit\u00e9. Il donne droit \u00e0 l'admission prioritaire, sauf pendant les p\u00e9riodes d'entr\u00e9e gratuite.",
        hasLink: false,
      },
      {
        label: "Palazzo Pitti + Jardins de Boboli",
        description:
          "22 \u20ac le jour m\u00eame ou 25 \u20ac en pr\u00e9vente pour les deux sur une seule journ\u00e9e \u2014 un bon compl\u00e9ment si vous ne prenez pas le pass de 5 jours.",
        hasLink: false,
      },
    ],
  },
  moneySaving: {
    h2: "Astuces pour Economiser",
    tips: [
      "Choisissez l'entr\u00e9e de l'apr\u00e8s-midi (\u00e0 partir de 16h) : 16 \u20ac le jour m\u00eame ou 20 \u20ac en pr\u00e9vente, contre 25/29 \u20ac pour l'entr\u00e9e standard",
      "Acheter le jour m\u00eame \u00e9conomise les 4 \u20ac de frais de r\u00e9servation \u2014 mais c'est un pari sur la disponibilit\u00e9, et les journ\u00e9es charg\u00e9es affichent complet",
      "Les citoyens UE de 18 a 25 ans ne paient que 2 \u20ac \u2014 ayez toujours une piece d'identite valide",
      "Moins de 18 ans ? L'entr\u00e9e est gratuite pour toutes les nationalit\u00e9s \u2014 il faut tout de m\u00eame un billet nominatif gratuit, au nom figurant sur la pi\u00e8ce d'identit\u00e9",
      "Les etudiants en art et architecture des universites de l'UE entrent gratuitement \u2014 apportez votre certificat d'inscription",
      "Vous visitez aussi le Palazzo Pitti et les Jardins de Boboli ? Le PassePartout 5 Days couvre le tout pour 40 \u20ac",
      "R\u00e9servez via une agence locale ind\u00e9pendante pour un cr\u00e9neau garanti, un audioguide num\u00e9rique et la flexibilit\u00e9 d'annulation",
    ],
  },
  ctaBottom: "Reservez Vos Billets pour les Offices",
  faq: [
    {
      q: "Combien coutent les billets des Offices en 2026 ?",
      a: "L'entr\u00e9e standard (avant 16h) co\u00fbte 25 \u20ac le jour m\u00eame ou 29 \u20ac en pr\u00e9vente. L'entr\u00e9e de l'apr\u00e8s-midi (\u00e0 partir de 16h) co\u00fbte 16 \u20ac le jour m\u00eame ou 20 \u20ac en pr\u00e9vente. Les citoyens UE de 18 \u00e0 25 ans paient 2 \u20ac, les moins de 18 ans entrent gratuitement avec un billet nominatif. Offices + Corridor de Vasari : 43 \u20ac le jour m\u00eame ou 47 \u20ac en pr\u00e9vente. Les billets \u00e0 horaire r\u00e9serv\u00e9 avec audioguide num\u00e9rique d\u00e9marrent \u00e0 26 \u20ac.",
    },
    {
      q: "Y a-t-il des frais de reservation pour les billets des Offices ?",
      a: "Oui \u2014 4 \u20ac. C'est tout l'\u00e9cart entre le prix du jour m\u00eame et celui de la pr\u00e9vente (25 \u20ac contre 29 \u20ac pour l'entr\u00e9e standard) : ce sont les frais de r\u00e9servation qui bloquent une date et un horaire pr\u00e9cis. Les agences locales ind\u00e9pendantes facturent \u00e0 partir de 26 \u20ac pour un billet \u00e0 horaire r\u00e9serv\u00e9 avec audioguide num\u00e9rique, et la plupart offrent l'annulation gratuite.",
    },
    {
      q: "Qu'est-ce que le PassePartout 5 Days ?",
      a: "40 \u20ac par adulte pour 5 jours cons\u00e9cutifs, avec une entr\u00e9e \u00e0 chacun : Galerie des Offices, mus\u00e9es du Palazzo Pitti, Jardins de Boboli et Jardin Bardini. Vous r\u00e9servez une date et un horaire pr\u00e9cis pour les Offices, qui doivent \u00eatre le premier des quatre que vous visitez. Il donne droit \u00e0 l'admission prioritaire, sauf pendant les p\u00e9riodes d'entr\u00e9e gratuite.",
    },
    {
      q: "Quelle piece d'identite faut-il pour les billets a tarif reduit ?",
      a: "Apportez un passeport ou une carte d'identit\u00e9 valide indiquant votre date de naissance et votre nationalit\u00e9. Les citoyens UE de 18 \u00e0 25 ans doivent prouver qu'ils ont moins de 26 ans et qu'ils sont citoyens de l'UE. Les moins de 18 ans re\u00e7oivent un billet nominatif gratuit : le nom doit correspondre \u00e0 celui de la pi\u00e8ce d'identit\u00e9.",
    },
    {
      q: "La Firenze Card vaut-elle le coup ?",
      a: "A 85 \u20ac pour 72 heures, la Firenze Card est rentable si vous visitez 5 musees ou plus. Le billet des Offices seul coute 29 \u20ac en ligne (ou 25 \u20ac au guichet), donc la carte est amortie apres environ 3-4 visites de musees.",
    },
  ],
};

const es: TicketPricesContent = {
  meta: {
    title: "Precios Entradas Uffizi 2026 | Costes y Descuentos",
    description:
      "Todos los precios de entradas Uffizi 2026: 25/29 \u20ac est\u00e1ndar, 16/20 \u20ac de tarde, 2 \u20ac reducida, gratis menores de 18, m\u00e1s Corredor Vasariano y PassePartout.",
  },
  breadcrumbs: {
    tickets: "Entradas",
    prices: "Precios",
  },
  h1: "Precios de Entradas Galeria Uffizi 2026",
  intro:
    "Para 2026, la Galer\u00eda Uffizi mantiene las mismas tarifas todo el a\u00f1o: ya no hay confusi\u00f3n entre temporada alta y baja. Lo \u00fanico que conviene entender antes de reservar es la diferencia entre comprar por adelantado y comprar el mismo d\u00eda: cualquier entrada adquirida antes de la fecha de tu visita cuesta 4 \u20ac m\u00e1s, y esos 4 \u20ac son la tarifa de reserva que te bloquea fecha y hora. Aqu\u00ed tienes el desglose completo de cada tipo de entrada, descuento y coste para que sepas exactamente cu\u00e1nto presupuestar.",
  standardPrices: {
    h2: "Precios Estandar de Entradas",
    tableTitle: "Tarifas Uffizi y Entradas Combinadas 2026",
    rows: [
      {
        type: "Entrada est\u00e1ndar (antes de las 16:00)",
        price: "25 \u20ac el mismo d\u00eda / 29 \u20ac por adelantado",
        notes:
          "Entrada con hora reservada \u2014 la diferencia de 4 \u20ac es la tarifa de reserva",
      },
      {
        type: "Entrada de tarde (desde las 16:00)",
        price: "16 \u20ac el mismo d\u00eda / 20 \u20ac por adelantado",
        notes:
          "La tarifa m\u00e1s econ\u00f3mica; \u00faltimo acceso a las 17:30, cierre a las 18:30",
      },
      {
        type: "Uffizi + Corredor Vasariano",
        price: "43 \u20ac el mismo d\u00eda / 47 \u20ac por adelantado",
        notes: "Entrada combinada para la galer\u00eda y el Corredor Vasariano",
      },
      {
        type: "PassePartout 5 Days",
        price: "40 \u20ac por adulto",
        notes:
          "5 d\u00edas consecutivos: un acceso a cada uno de Uffizi, museos del Palazzo Pitti, Jardines de Boboli y Jard\u00edn Bardini",
      },
      {
        type: "Palazzo Pitti + Jardines de Boboli (un d\u00eda)",
        price: "22 \u20ac el mismo d\u00eda / 25 \u20ac por adelantado",
        notes: "Entrada combinada, v\u00e1lida un solo d\u00eda",
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
        notes:
          "Entrada nominativa — el nombre debe coincidir con el documento de identidad",
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
    h2: "Por Adelantado vs. El Mismo D\u00eda",
    p: "Aqu\u00ed es donde la gente se confunde. El precio base de la entrada es el mismo en ambos casos. Lo que cambia son los 4 \u20ac de tarifa de reserva: los pagas si compras antes de la fecha de tu visita y no los pagas si compras el mismo d\u00eda. Lo que compran esos 4 \u20ac es una franja horaria garantizada \u2014 y en temporada alta las franjas de un d\u00eda se agotan mucho antes de que t\u00fa llegues:",
    tableTitle: "Comparacion de Costes",
    rows: [
      {
        type: "El mismo d\u00eda, en taquilla",
        price: "25 \u20ac",
        notes:
          "Efectivo en las m\u00e1quinas de autoservicio, tarjeta en los mostradores atendidos; te toca la franja que quede",
      },
      {
        type: "Por adelantado, web oficial",
        price: "29 \u20ac",
        notes: "Entrada est\u00e1ndar m\u00e1s 4 \u20ac de tarifa de reserva, hora reservada",
      },
      {
        type: "Por adelantado, agencia local independiente",
        price: "Desde 26 \u20ac",
        notes: "Hora reservada + audiogu\u00eda digital, cancelaci\u00f3n gratuita",
      },
    ],
    footnote:
      "La entrada de tarde (desde las 16:00) cuesta 16 \u20ac el mismo d\u00eda o 20 \u20ac por adelantado.",
    recommendation:
      "Mi recomendaci\u00f3n sincera: reserva a trav\u00e9s de una agencia local independiente. El precio es competitivo, te aseguras una franja horaria garantizada y una audiogu\u00eda digital, y la mayor\u00eda ofrece cancelaci\u00f3n gratuita hasta 24 horas antes de tu visita. Esa flexibilidad por s\u00ed sola merece la pena \u2014 el tiempo en Florencia puede ser impredecible y los planes cambian. El d\u00eda de la visita te presentas en la Puerta 1 a tu hora reservada y te ahorras la cola de la taquilla; el breve control de seguridad se aplica a todo el mundo.",
  },
  ctaTop: "Mejor Precio \u2014 Entrada Uffizi con Hora Reservada y App Gu\u00eda",
  freeEntryDays: {
    h2: "Dias de Entrada Gratuita",
    pPrefix: "Los Uffizi y el Corredor Vasariano son gratuitos el ",
    pBold: "primer domingo de cada mes",
    pSuffix:
      ". La entrada sigue siendo necesaria y es nominativa: lleva el nombre del visitante. La de los Uffizi se emite unicamente en el mostrador de taquilla el mismo dia y no se puede reservar online, asi que cuenta con la cola. La del Corredor Vasariano, en cambio, debe reservarse online con antelacion o recogerse en taquilla el mismo dia si queda alguna plaza. Sin embargo, debo ser honesto: los domingos gratuitos son un arma de doble filo. La galeria se llena increiblemente, con tiempos de espera de 3-4 horas habituales. La experiencia dentro tambien es menos agradable cuando cada sala esta abarrotada. Si el presupuesto es un problema, una entrada de tarde por 16 \u20ac el mismo d\u00eda, entre semana y en un d\u00eda tranquilo, ofrece una experiencia mucho mejor que un domingo gratuito.",
  },
  comboTickets: {
    h2: "Entradas Combinadas y Pases",
    p: "Si vas a visitar varios museos en Florencia, considera estas opciones:",
    options: [
      {
        label: "Tour combinado Uffizi + Accademia",
        description:
          "Visita ambos museos en un d\u00eda con un gu\u00eda. Normalmente 89-120 \u20ac por persona, con entrada reservada incluida para ambos.",
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
        label: "Uffizi + Corredor Vasariano",
        description:
          "43 \u20ac el mismo d\u00eda o 47 \u20ac por adelantado \u2014 una sola entrada para la galer\u00eda y el Corredor Vasariano.",
        hasLink: false,
      },
      {
        label: "PassePartout 5 Days",
        description:
          "40 \u20ac por adulto, v\u00e1lido 5 d\u00edas consecutivos con un acceso a cada uno: Galer\u00eda Uffizi, museos del Palazzo Pitti, Jardines de Boboli y Jard\u00edn Bardini. Debes reservar fecha y hora concretas para los Uffizi, que adem\u00e1s tienen que ser el primer museo que visites. Da acceso prioritario, salvo en los periodos de entrada gratuita.",
        hasLink: false,
      },
      {
        label: "Palazzo Pitti + Jardines de Boboli",
        description:
          "22 \u20ac el mismo d\u00eda o 25 \u20ac por adelantado por ambos en una sola jornada \u2014 un buen complemento si no coges el pase de 5 d\u00edas.",
        hasLink: false,
      },
    ],
  },
  moneySaving: {
    h2: "Consejos para Ahorrar",
    tips: [
      "Elige la entrada de tarde (desde las 16:00): 16 \u20ac el mismo d\u00eda o 20 \u20ac por adelantado, frente a 25/29 \u20ac de la entrada est\u00e1ndar",
      "Comprar el mismo d\u00eda te ahorra los 4 \u20ac de tarifa de reserva \u2014 pero es una apuesta a la disponibilidad, y los d\u00edas de mucha afluencia se agotan",
      "Los ciudadanos UE de 18 a 25 anos pagan solo 2 \u20ac \u2014 lleva siempre un documento de identidad valido",
      "\u00bfMenos de 18 a\u00f1os? La entrada es gratuita para todas las nacionalidades \u2014 aun as\u00ed necesitas una entrada nominativa gratuita, y el nombre debe coincidir con el documento",
      "Los estudiantes de arte y arquitectura de universidades de la UE entran gratis \u2014 lleva tu certificado de matriculacion",
      "\u00bfVisitas tambi\u00e9n el Palazzo Pitti y los Jardines de Boboli? El PassePartout 5 Days lo cubre todo por 40 \u20ac",
      "Reserva a trav\u00e9s de una agencia local independiente para una franja horaria garantizada, audiogu\u00eda digital y flexibilidad de cancelaci\u00f3n",
    ],
  },
  ctaBottom: "Reserva Entradas para los Uffizi",
  faq: [
    {
      q: "Cuanto cuestan las entradas de los Uffizi en 2026?",
      a: "La entrada est\u00e1ndar (antes de las 16:00) cuesta 25 \u20ac el mismo d\u00eda o 29 \u20ac por adelantado. La entrada de tarde (desde las 16:00) cuesta 16 \u20ac el mismo d\u00eda o 20 \u20ac por adelantado. Los ciudadanos de la UE de 18 a 25 a\u00f1os pagan 2 \u20ac, y los menores de 18 entran gratis con entrada nominativa. Uffizi + Corredor Vasariano: 43 \u20ac el mismo d\u00eda o 47 \u20ac por adelantado. Las entradas con hora reservada y audiogu\u00eda digital parten de 26 \u20ac.",
    },
    {
      q: "Hay gastos de reserva para las entradas de los Uffizi?",
      a: "S\u00ed \u2014 4 \u20ac. Es toda la diferencia entre el precio del mismo d\u00eda y el de la compra anticipada (25 \u20ac frente a 29 \u20ac en la entrada est\u00e1ndar): es la tarifa de reserva por bloquear una fecha y una hora concretas. Las agencias locales independientes cobran desde 26 \u20ac por una entrada con hora reservada y audiogu\u00eda digital, y la mayor\u00eda ofrece cancelaci\u00f3n gratuita.",
    },
    {
      q: "Que es el PassePartout 5 Days?",
      a: "40 \u20ac por adulto para 5 d\u00edas consecutivos, con un acceso a cada uno: Galer\u00eda Uffizi, museos del Palazzo Pitti, Jardines de Boboli y Jard\u00edn Bardini. Para los Uffizi reservas fecha y hora concretas, y los Uffizi deben ser el primero de los cuatro que visites. Da acceso prioritario, salvo en los periodos de entrada gratuita.",
    },
    {
      q: "Que documento necesito para las entradas con descuento?",
      a: "Lleva un pasaporte o documento de identidad v\u00e1lido que muestre tu fecha de nacimiento y nacionalidad. Los ciudadanos de la UE de 18 a 25 a\u00f1os deben demostrar que tienen menos de 26 a\u00f1os y la ciudadan\u00eda europea. Los menores de 18 reciben una entrada nominativa gratuita: el nombre debe coincidir con el del documento.",
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
