import { getContent, type PageContent } from "./types";

export type SkipTheLineContent = {
  meta: { title: string; description: string };
  breadcrumbs: { tickets: string; skipTheLine: string };
  h1: string;
  intro: string;
  ctaTop: string;
  howItWorks: {
    h2: string;
    paragraphs: string[];
  };
  whichDoor: {
    h2: string;
    p: string;
    doors: { label: string; description: string }[];
    door3LinkText: string;
  };
  bestTimeSlots: {
    h2: string;
    p: string;
    slots: { label: string; description: string }[];
  };
  whatsIncluded: {
    h2: string;
    p: string;
    items: string[];
    notePrefix: string;
    noteBold: string;
    noteSuffix: string;
    guidedTourLinkText: string;
    guidedTourSuffix: string;
  };
  cancellation: {
    h2: string;
    p: string;
  };
  ctaBottom: string;
  faq: { q: string; a: string }[];
};

const en: SkipTheLineContent = {
  meta: {
    title: "Uffizi Timed-Entry Tickets 2026 | Reserved Entry Guide",
    description:
      "Book a reserved timed-entry Uffizi ticket with digital audio guide from \u20ac26. Skip the ticket-office queue, lock in a slot before it sells out, enter at Door 1.",
  },
  breadcrumbs: {
    tickets: "Tickets",
    skipTheLine: "Timed Entry",
  },
  h1: "Uffizi Gallery Reserved Ticket & Digital Audio Guide",
  intro:
    "I've been guiding tours in Florence for years, and the single biggest mistake visitors make is turning up at the Uffizi without a reserved time. Every ticket is now timed entry, and during peak season \u2014 March through October \u2014 the day's slots are often gone long before you reach the building. Booking ahead doesn't make the security check disappear, but it does mean you're not standing at the ticket office hoping for a gap.",
  ctaTop: "Reserved Timed Entry \u2014 Uffizi Gallery",
  howItWorks: {
    h2: "How Timed Entry Works",
    paragraphs: [
      "When you book, you choose a specific 15-minute entry window (for example, 9:00-9:15 AM). You'll receive a QR code by email \u2014 show it on your phone or print it. There is nothing to collect and no voucher to exchange.",
      "On the day, walk to Door 1 at your entry time. Since September 2025, under the new CoopCulture management, every visitor enters through Door 1 \u2014 pre-booked and same-day alike \u2014 and everyone passes the same short security screening. What the reservation buys you is the ticket-office queue you never have to join, and a guaranteed place inside on a day that may otherwise be sold out. From Door 1 to the first gallery usually takes 5-10 minutes.",
    ],
  },
  whichDoor: {
    h2: "Which Door Do I Use?",
    p: "Short answer: Door 1, whoever you are. The old three-door split is gone \u2014 here's what changed:",
    doors: [
      {
        label: "Door 1",
        description:
          "The entrance for everyone. East side of the building (closest to the Arno river). Pre-booked QR codes and tickets bought on the day both go through here, and all visitors pass the same security check.",
      },
      {
        label: "Door 3",
        description:
          "The old voucher-exchange point. It no longer operates and paper vouchers no longer exist, so if you booked online there is nothing to swap \u2014 go straight to Door 1.",
      },
    ],
    door3LinkText: "what happened to Door 3",
  },
  bestTimeSlots: {
    h2: "Best Time Slots to Book",
    p: "Not all time slots are equal. Here's what I recommend based on years of experience:",
    slots: [
      {
        label: "8:15 AM (Best)",
        description:
          "The very first slot. You'll have Botticelli Hall almost to yourself for the first 20 minutes. The museum feels peaceful and uncrowded until about 10 AM.",
      },
      {
        label: "4:00-4:30 PM (Good)",
        description:
          "The day-trippers and cruise ship groups leave around 3 PM. Late afternoon light through the windows is beautiful, last entry is 5:30 PM and you can stay until closing at 6:30 PM. It's also the cheapest slot: €16 on the day, €20 in advance.",
      },
      {
        label: "10:00 AM \u2013 2:00 PM (Avoid)",
        description:
          "Peak hours. This is when every tour group, school trip, and cruise excursion hits the Uffizi simultaneously.",
      },
    ],
  },
  whatsIncluded: {
    h2: "What's Included in Your Ticket",
    p: "Your reserved timed-entry ticket includes:",
    items: [
      "Full access to all 101 rooms of the Uffizi Gallery",
      "A guaranteed 15-minute entry slot at Door 1 \u2014 you skip the ticket-office queue",
      "A digital audio guide you can follow at your own pace",
      "Stay as long as you want \u2014 there's no time limit once inside",
      "Free cloakroom for bags and jackets",
      "Access to the second-floor caf\u00e9 and terrace",
    ],
    notePrefix: "Note: the digital audio guide is included, but the ticket does ",
    noteBold: "not",
    noteSuffix:
      " come with a live guide. For an expert-led experience, check our ",
    guidedTourLinkText: "guided tour options",
    guidedTourSuffix:
      ", which include reserved timed entry plus a licensed art historian.",
  },
  cancellation: {
    h2: "Cancellation & Refund Policy",
    p: "Most timed-entry tickets booked through independent local agencies offer free cancellation up to 24 hours before your visit. This is one of the biggest advantages over the official museum booking system, which typically does not offer refunds. Always check the specific cancellation terms when booking.",
  },
  ctaBottom: "Book Your Uffizi Entry Time",
  faq: [
    {
      q: "Is there still a skip-the-line ticket for the Uffizi?",
      a: "No \u2014 there is no separate skip-the-line product anymore. Every Uffizi ticket is timed entry and everyone enters through Door 1. What a reservation gets you is a guaranteed slot and the ticket-office queue you never have to join; the short security screening applies to all visitors.",
    },
    {
      q: "Which door do I go to with a pre-booked ticket?",
      a: "Door 1 \u2014 on the east side of the Uffizi building (closest to the Arno river). Everyone uses it now. Door 3, the old voucher-exchange point, no longer operates, and there are no paper vouchers to collect: the QR code on your phone is the ticket.",
    },
    {
      q: "What if I arrive late for my time slot?",
      a: "Most timed-entry tickets have a 15-minute window (e.g., 9:00-9:15 AM). Try to arrive within this window. If you're slightly late, staff will usually accommodate you, but arriving more than 30 minutes late may require rebooking.",
    },
    {
      q: "Do free and reduced tickets need a reserved time too?",
      a: "Yes. Free entry (under 18, on a nominative ticket whose name must match the child's ID) and reduced tickets (EU citizens 18-25, \u20ac2) are still timed entry. Book them through the official museum reservation system \u2014 reserving in advance adds the \u20ac4 reservation fee \u2014 and enter at Door 1 with everyone else.",
    },
  ],
};

const it: SkipTheLineContent = {
  meta: {
    title:
      "Biglietti Uffizi a Orario Prestabilito | Ingresso 2026",
    description:
      "Prenota il biglietto Uffizi con ingresso a orario prestabilito e audioguida digitale da \u20ac26. Salti la fila alla biglietteria ed entri dalla Porta 1.",
  },
  breadcrumbs: {
    tickets: "Biglietti",
    skipTheLine: "Ingresso a Orario",
  },
  h1: "Biglietto Riservato Galleria degli Uffizi e Audioguida Digitale",
  intro:
    "Faccio la guida a Firenze da anni e l'errore pi\u00f9 grande che vedo commettere ai visitatori \u00e8 presentarsi agli Uffizi senza un orario riservato. Oggi ogni biglietto \u00e8 a orario prestabilito e in alta stagione \u2014 da marzo a ottobre \u2014 le fasce della giornata sono spesso esaurite molto prima che tu arrivi davanti all'edificio. Prenotare non fa sparire il controllo di sicurezza, ma ti evita di restare alla biglietteria a sperare in un posto libero.",
  ctaTop: "Ingresso a Orario Riservato \u2014 Galleria degli Uffizi",
  howItWorks: {
    h2: "Come Funziona l'Ingresso a Orario",
    paragraphs: [
      "Quando prenoti scegli una fascia oraria precisa di 15 minuti (ad esempio 9:00-9:15). Ricevi un QR code via email: mostralo sul telefono o stampalo. Non c'\u00e8 nulla da ritirare e nessun voucher da cambiare.",
      "Il giorno della visita vai alla Porta 1 all'orario di ingresso. Da settembre 2025, con la nuova gestione CoopCulture, tutti entrano dalla Porta 1 \u2014 chi ha prenotato e chi compra in giornata \u2014 e tutti passano lo stesso breve controllo di sicurezza. Quello che ti d\u00e0 la prenotazione \u00e8 la fila alla biglietteria che non dovrai mai fare e un posto garantito in una giornata che potrebbe essere esaurita. Dalla Porta 1 alla prima sala servono in genere 5-10 minuti.",
    ],
  },
  whichDoor: {
    h2: "Quale Porta Devo Usare?",
    p: "Risposta breve: la Porta 1, chiunque tu sia. La vecchia divisione in tre porte non esiste pi\u00f9 \u2014 ecco cosa \u00e8 cambiato:",
    doors: [
      {
        label: "Porta 1",
        description:
          "L'ingresso per tutti. Lato est dell'edificio (il pi\u00f9 vicino all'Arno). Da qui passano sia i QR code prenotati sia i biglietti comprati in giornata, e tutti i visitatori fanno lo stesso controllo di sicurezza.",
      },
      {
        label: "Porta 3",
        description:
          "Il vecchio punto di cambio voucher. Non \u00e8 pi\u00f9 operativo e i voucher cartacei non esistono pi\u00f9: se hai prenotato online non c'\u00e8 nulla da scambiare, vai direttamente alla Porta 1.",
      },
    ],
    door3LinkText: "cosa \u00e8 successo alla Porta 3",
  },
  bestTimeSlots: {
    h2: "Le Fasce Orarie Migliori da Prenotare",
    p: "Non tutte le fasce orarie sono uguali. Ecco cosa consiglio dopo anni di esperienza:",
    slots: [
      {
        label: "8:15 (Migliore)",
        description:
          "La primissima fascia. Avrai la Sala di Botticelli quasi tutta per te nei primi 20 minuti. Il museo resta tranquillo e poco affollato fino alle 10 circa.",
      },
      {
        label: "16:00-16:30 (Buona)",
        description:
          "I turisti giornalieri e i gruppi delle crociere se ne vanno intorno alle 15:00. La luce del tardo pomeriggio attraverso le finestre \u00e8 splendida, l'ultimo ingresso \u00e8 alle 17:30 e puoi restare fino alla chiusura alle 18:30. \u00c8 anche la fascia pi\u00f9 economica: \u20ac16 in giornata, \u20ac20 in prevendita.",
      },
      {
        label: "10:00 \u2013 14:00 (Da evitare)",
        description:
          "Ore di punta. \u00c8 il momento in cui tutti i gruppi, le gite scolastiche e le escursioni delle crociere arrivano agli Uffizi contemporaneamente.",
      },
    ],
  },
  whatsIncluded: {
    h2: "Cosa Include il Biglietto",
    p: "Il tuo biglietto con ingresso a orario prestabilito include:",
    items: [
      "Accesso completo a tutte le 101 sale della Galleria degli Uffizi",
      "Una fascia di ingresso garantita di 15 minuti alla Porta 1 \u2014 salti la fila alla biglietteria",
      "Un'audioguida digitale da seguire al tuo ritmo",
      "Puoi restare quanto vuoi \u2014 nessun limite di tempo una volta dentro",
      "Guardaroba gratuito per borse e giacche",
      "Accesso al caff\u00e8 e alla terrazza del secondo piano",
    ],
    notePrefix: "Nota: l'audioguida digitale \u00e8 inclusa, ma il biglietto ",
    noteBold: "non",
    noteSuffix:
      " prevede una guida dal vivo. Per un'esperienza con un esperto, scopri le nostre ",
    guidedTourLinkText: "opzioni di visita guidata",
    guidedTourSuffix:
      ", che includono l'ingresso a orario riservato e uno storico dell'arte abilitato.",
  },
  cancellation: {
    h2: "Cancellazione e Rimborso",
    p: "La maggior parte dei biglietti a orario prestabilito prenotati tramite agenzie locali indipendenti offre la cancellazione gratuita fino a 24 ore prima della visita. Questo \u00e8 uno dei maggiori vantaggi rispetto al sistema di prenotazione ufficiale del museo, che generalmente non prevede rimborsi. Verifica sempre le condizioni specifiche di cancellazione al momento della prenotazione.",
  },
  ctaBottom: "Prenota il Tuo Orario di Ingresso agli Uffizi",
  faq: [
    {
      q: "Esiste ancora un biglietto salta fila per gli Uffizi?",
      a: "No \u2014 non esiste pi\u00f9 un prodotto salta fila separato. Ogni biglietto degli Uffizi \u00e8 a orario prestabilito e tutti entrano dalla Porta 1. Quello che ti d\u00e0 la prenotazione \u00e8 una fascia oraria garantita e la fila alla biglietteria che non dovrai fare; il breve controllo di sicurezza vale per tutti i visitatori.",
    },
    {
      q: "A quale porta devo andare con un biglietto prenotato?",
      a: "Porta 1 \u2014 sul lato est dell'edificio degli Uffizi (il pi\u00f9 vicino all'Arno). Oggi la usano tutti. La Porta 3, il vecchio punto di cambio voucher, non \u00e8 pi\u00f9 operativa e non ci sono voucher cartacei da ritirare: il QR code sul telefono \u00e8 il tuo biglietto.",
    },
    {
      q: "Cosa succede se arrivo in ritardo per la mia fascia oraria?",
      a: "La maggior parte dei biglietti a orario prestabilito ha una finestra di 15 minuti (es. 9:00-9:15). Cerca di arrivare entro questa finestra. Se sei leggermente in ritardo, il personale di solito ti fa entrare, ma un ritardo superiore ai 30 minuti potrebbe richiedere una nuova prenotazione.",
    },
    {
      q: "Anche i biglietti gratuiti e ridotti hanno bisogno di un orario riservato?",
      a: "S\u00ec. L'ingresso gratuito (under 18, con biglietto nominativo il cui nome deve corrispondere al documento) e i biglietti ridotti (cittadini UE 18-25, \u20ac2) sono comunque a orario prestabilito. Si prenotano tramite il sistema ufficiale del museo \u2014 la prenotazione anticipata aggiunge \u20ac4 di diritto di prenotazione \u2014 e si entra dalla Porta 1 come tutti.",
    },
  ],
};

const de: SkipTheLineContent = {
  meta: {
    title:
      "Uffizi Tickets mit Zeitfenster 2026 | Reservierter Einlass",
    description:
      "Uffizi Ticket mit festem Zeitfenster und digitalem Audioguide ab 26 € buchen. Warteschlange an der Kasse umgehen, Slot sichern, Einlass an Eingang 1.",
  },
  breadcrumbs: {
    tickets: "Tickets",
    skipTheLine: "Zeitfenster-Ticket",
  },
  h1: "Uffizi Galerie Reserviertes Ticket & Digitaler Audioguide",
  intro:
    "Ich führe seit Jahren Touren durch Florenz, und der größte Fehler, den Besucher machen, ist, ohne reservierte Uhrzeit zu den Uffizien zu kommen. Jedes Ticket ist heute ein Zeitfenster-Ticket, und in der Hauptsaison — von März bis Oktober — sind die Zeitfenster eines Tages oft längst vergeben, bevor Sie überhaupt am Gebäude sind. Eine Buchung lässt die Sicherheitskontrolle nicht verschwinden, aber Sie stehen damit nicht an der Kasse und hoffen auf eine Lücke.",
  ctaTop: "Reservierter Einlass mit Zeitfenster — Uffizi Galerie",
  howItWorks: {
    h2: "So funktioniert der Zeitfenster-Einlass",
    paragraphs: [
      "Bei der Buchung wählen Sie ein bestimmtes 15-Minuten-Zeitfenster (zum Beispiel 9:00–9:15 Uhr). Sie erhalten einen QR-Code per E-Mail — zeigen Sie ihn auf dem Handy vor oder drucken Sie ihn aus. Es gibt nichts abzuholen und keinen Voucher einzutauschen.",
      "Am Besuchstag gehen Sie zu Ihrer Eintrittszeit zu Eingang 1. Seit September 2025 betreten unter der neuen CoopCulture-Verwaltung alle Besucher das Museum durch Eingang 1 — vorgebucht wie spontan — und alle durchlaufen dieselbe kurze Sicherheitskontrolle. Was Ihnen die Reservierung bringt: die Warteschlange an der Kasse, in der Sie nie stehen müssen, und einen sicheren Platz an einem Tag, der sonst ausverkauft sein kann. Von Eingang 1 bis zum ersten Ausstellungsraum dauert es meist 5-10 Minuten.",
    ],
  },
  whichDoor: {
    h2: "Welchen Eingang muss ich benutzen?",
    p: "Kurze Antwort: Eingang 1, für alle. Die alte Aufteilung auf drei Türen gibt es nicht mehr — das hat sich geändert:",
    doors: [
      {
        label: "Eingang 1",
        description:
          "Der Eingang für alle. Ostseite des Gebäudes (am nächsten zum Arno). Vorgebuchte QR-Codes und am Tag gekaufte Tickets laufen beide hier durch, und alle Besucher durchlaufen dieselbe Sicherheitskontrolle.",
      },
      {
        label: "Eingang 3",
        description:
          "Die alte Voucher-Umtauschstelle. Sie ist nicht mehr in Betrieb, und Papier-Voucher gibt es nicht mehr: Wer online gebucht hat, muss nichts eintauschen — gehen Sie direkt zu Eingang 1.",
      },
    ],
    door3LinkText: "Was aus Eingang 3 wurde",
  },
  bestTimeSlots: {
    h2: "Die besten Zeitfenster zum Buchen",
    p: "Nicht alle Zeitfenster sind gleich gut. Hier meine Empfehlung aus jahrelanger Erfahrung:",
    slots: [
      {
        label: "8:15 Uhr (Am besten)",
        description:
          "Das allererste Zeitfenster. Sie haben den Botticelli-Saal in den ersten 20 Minuten fast für sich allein. Das Museum bleibt ruhig und wenig besucht bis etwa 10 Uhr.",
      },
      {
        label: "16:00–16:30 Uhr (Gut)",
        description:
          "Die Tagesausflügler und Kreuzfahrtgruppen verlassen das Museum gegen 15 Uhr. Das Nachmittagslicht durch die Fenster ist wunderschön, der letzte Einlass ist um 17:30 Uhr und Sie können bis zur Schließung um 18:30 Uhr bleiben. Es ist außerdem das günstigste Zeitfenster: 16 € am Besuchstag, 20 € im Vorverkauf.",
      },
      {
        label: "10:00–14:00 Uhr (Meiden)",
        description:
          "Stoßzeiten. In diesem Zeitraum treffen sämtliche Reisegruppen, Schulklassen und Kreuzfahrt-Ausflüge gleichzeitig in den Uffizien ein.",
      },
    ],
  },
  whatsIncluded: {
    h2: "Was ist im Ticket enthalten?",
    p: "Ihr Ticket mit reserviertem Zeitfenster beinhaltet:",
    items: [
      "Vollständiger Zugang zu allen 101 Sälen der Uffizi Galerie",
      "Ein garantiertes 15-Minuten-Zeitfenster an Eingang 1 — Sie umgehen die Warteschlange an der Kasse",
      "Einen digitalen Audioguide, dem Sie in Ihrem eigenen Tempo folgen",
      "Unbegrenzte Aufenthaltsdauer — Sie können so lange bleiben, wie Sie möchten",
      "Kostenlose Garderobe für Taschen und Jacken",
      "Zugang zum Café und zur Terrasse im zweiten Stock",
    ],
    notePrefix:
      "Hinweis: Der digitale Audioguide ist enthalten, eine persönliche Führung ist ",
    noteBold: "nicht",
    noteSuffix: " dabei. Für ein Erlebnis mit fachkundiger Begleitung sehen Sie sich unsere ",
    guidedTourLinkText: "Optionen für geführte Touren",
    guidedTourSuffix:
      " an — inklusive reserviertem Zeitfenster-Einlass und einem lizenzierten Kunsthistoriker.",
  },
  cancellation: {
    h2: "Stornierung und Erstattung",
    p: "Die meisten Zeitfenster-Tickets, die über unabhängige lokale Agenturen gebucht werden, bieten eine kostenlose Stornierung bis 24 Stunden vor dem Besuch. Das ist einer der größten Vorteile gegenüber dem offiziellen Buchungssystem des Museums, das in der Regel keine Erstattungen vorsieht. Prüfen Sie bei der Buchung immer die genauen Stornierungsbedingungen.",
  },
  ctaBottom: "Jetzt Ihre Uffizi-Eintrittszeit buchen",
  faq: [
    {
      q: "Gibt es an den Uffizien noch ein Ticket ohne Anstehen?",
      a: "Nein — ein separates Ohne-Anstehen-Produkt existiert nicht mehr. Jedes Uffizi-Ticket ist ein Zeitfenster-Ticket, und alle betreten das Museum durch Eingang 1. Was Ihnen eine Reservierung bringt, ist ein garantiertes Zeitfenster und die Warteschlange an der Kasse, in der Sie nie stehen müssen; die kurze Sicherheitskontrolle gilt für alle Besucher.",
    },
    {
      q: "Zu welchem Eingang muss ich mit einem vorgebuchten Ticket?",
      a: "Eingang 1 — auf der Ostseite des Uffizien-Gebäudes (am nächsten zum Arno). Ihn benutzen inzwischen alle. Eingang 3, die alte Voucher-Umtauschstelle, ist nicht mehr in Betrieb, und es gibt keine Papier-Voucher abzuholen: Der QR-Code auf Ihrem Handy ist das Ticket.",
    },
    {
      q: "Was passiert, wenn ich mein Zeitfenster verpasse?",
      a: "Die meisten Zeitfenster-Tickets haben ein 15-Minuten-Fenster (z. B. 9:00–9:15 Uhr). Versuchen Sie, innerhalb dieses Fensters zu erscheinen. Bei leichter Verspätung wird das Personal Sie in der Regel trotzdem einlassen. Bei mehr als 30 Minuten Verspätung kann eine Umbuchung nötig sein.",
    },
    {
      q: "Brauchen auch kostenlose und ermäßigte Tickets eine reservierte Uhrzeit?",
      a: "Ja. Der kostenlose Eintritt (unter 18 Jahren, mit personalisiertem Ticket, dessen Name mit dem Ausweis übereinstimmen muss) und ermäßigte Tickets (EU-Bürger 18-25, 2 €) sind ebenfalls Zeitfenster-Tickets. Buchen Sie sie über das offizielle Reservierungssystem des Museums — eine Reservierung im Voraus kostet zusätzlich 4 € Reservierungsgebühr — und gehen Sie wie alle anderen zu Eingang 1.",
    },
  ],
};

const fr: SkipTheLineContent = {
  meta: {
    title: "Billets Offices à Horaire Réservé 2026 | Entrée Réservée",
    description:
      "Réservez un billet Offices à horaire réservé avec audioguide numérique dès 26 €. Évitez la file d'attente à la billetterie et entrez par la Porte 1.",
  },
  breadcrumbs: {
    tickets: "Billets",
    skipTheLine: "Horaire Réservé",
  },
  h1: "Billet Réservé Galerie des Offices et Audioguide Numérique",
  intro:
    "Je suis guide \u00e0 Florence depuis des ann\u00e9es, et la plus grande erreur que font les visiteurs est de se pr\u00e9senter aux Offices sans horaire r\u00e9serv\u00e9. Tous les billets sont d\u00e9sormais \u00e0 horaire r\u00e9serv\u00e9 et, en haute saison \u2014 de mars \u00e0 octobre \u2014, les cr\u00e9neaux de la journ\u00e9e sont souvent \u00e9puis\u00e9s bien avant que vous n'arriviez devant le b\u00e2timent. R\u00e9server ne fait pas dispara\u00eetre le contr\u00f4le de s\u00e9curit\u00e9, mais cela vous \u00e9vite de patienter \u00e0 la billetterie en esp\u00e9rant une place.",
  ctaTop: "Entr\u00e9e \u00e0 Horaire R\u00e9serv\u00e9 \u2014 Galerie des Offices",
  howItWorks: {
    h2: "Comment Fonctionne l'Entr\u00e9e \u00e0 Horaire R\u00e9serv\u00e9",
    paragraphs: [
      "Au moment de r\u00e9server, vous choisissez un cr\u00e9neau horaire pr\u00e9cis de 15 minutes (par exemple 9h00-9h15). Vous recevez un QR code par e-mail : montrez-le sur votre t\u00e9l\u00e9phone ou imprimez-le. Il n'y a rien \u00e0 retirer et aucun bon \u00e0 \u00e9changer.",
      "Le jour de votre visite, pr\u00e9sentez-vous \u00e0 la Porte 1 \u00e0 votre heure d'entr\u00e9e. Depuis septembre 2025, sous la nouvelle gestion CoopCulture, tous les visiteurs entrent par la Porte 1 \u2014 ceux qui ont r\u00e9serv\u00e9 comme ceux qui ach\u00e8tent sur place \u2014 et tout le monde passe le m\u00eame court contr\u00f4le de s\u00e9curit\u00e9. Ce que vous apporte la r\u00e9servation, c'est la file d'attente \u00e0 la billetterie que vous n'aurez jamais \u00e0 faire, et une place garantie un jour qui peut afficher complet. De la Porte 1 \u00e0 la premi\u00e8re salle, comptez g\u00e9n\u00e9ralement 5 \u00e0 10 minutes.",
    ],
  },
  whichDoor: {
    h2: "Quelle Porte Utiliser ?",
    p: "R\u00e9ponse courte : la Porte 1, pour tout le monde. L'ancienne r\u00e9partition en trois portes n'existe plus \u2014 voici ce qui a chang\u00e9 :",
    doors: [
      {
        label: "Porte 1",
        description:
          "L'entr\u00e9e pour tous. C\u00f4t\u00e9 est du b\u00e2timent (le plus proche de l'Arno). Les QR codes r\u00e9serv\u00e9s et les billets achet\u00e9s sur place passent tous par ici, et tous les visiteurs subissent le m\u00eame contr\u00f4le de s\u00e9curit\u00e9.",
      },
      {
        label: "Porte 3",
        description:
          "L'ancien point d'\u00e9change de bons. Il ne fonctionne plus et les bons papier n'existent plus : si vous avez r\u00e9serv\u00e9 en ligne, il n'y a rien \u00e0 \u00e9changer, allez directement \u00e0 la Porte 1.",
      },
    ],
    door3LinkText: "ce qu'est devenue la Porte 3",
  },
  bestTimeSlots: {
    h2: "Les Meilleurs Creneaux Horaires a Reserver",
    p: "Tous les creneaux ne se valent pas. Voici mes recommandations basees sur des annees d'experience :",
    slots: [
      {
        label: "8h15 (Ideal)",
        description:
          "Le tout premier creneau. Vous aurez la Salle Botticelli presque pour vous seul pendant les 20 premieres minutes. Le musee reste calme et peu frequente jusqu'a environ 10h.",
      },
      {
        label: "16h00-16h30 (Bon choix)",
        description:
          "Les excursionnistes et les groupes de croisieres partent vers 15h. La lumière de fin d'après-midi à travers les fenêtres est magnifique, la dernière entrée est à 17h30 et vous pouvez rester jusqu'à la fermeture à 18h30. C'est aussi le créneau le moins cher : 16 € le jour même, 20 € en prévente.",
      },
      {
        label: "10h00 \u2013 14h00 (A eviter)",
        description:
          "Heures de pointe. C'est le moment ou tous les groupes, les sorties scolaires et les excursions de croisieres convergent aux Offices simultanement.",
      },
    ],
  },
  whatsIncluded: {
    h2: "Ce que Comprend Votre Billet",
    p: "Votre billet \u00e0 horaire r\u00e9serv\u00e9 comprend :",
    items: [
      "Acces complet aux 101 salles de la Galerie des Offices",
      "Un cr\u00e9neau d'entr\u00e9e garanti de 15 minutes \u00e0 la Porte 1 \u2014 vous \u00e9vitez la file d'attente \u00e0 la billetterie",
      "Un audioguide num\u00e9rique que vous suivez \u00e0 votre rythme",
      "Restez aussi longtemps que vous le souhaitez \u2014 aucune limite de temps une fois a l'interieur",
      "Vestiaire gratuit pour sacs et vestes",
      "Acces au cafe et a la terrasse du deuxieme etage",
    ],
    notePrefix:
      "Remarque : l'audioguide num\u00e9rique est inclus, mais le billet ",
    noteBold: "ne comprend pas",
    noteSuffix: " de guide en personne. Pour une exp\u00e9rience avec un expert, d\u00e9couvrez nos ",
    guidedTourLinkText: "options de visite guidee",
    guidedTourSuffix:
      ", qui incluent l'entr\u00e9e \u00e0 horaire r\u00e9serv\u00e9 et un historien de l'art agr\u00e9\u00e9.",
  },
  cancellation: {
    h2: "Annulation et Remboursement",
    p: "La plupart des billets \u00e0 horaire r\u00e9serv\u00e9 achet\u00e9s via des agences locales ind\u00e9pendantes offrent l'annulation gratuite jusqu'\u00e0 24 heures avant votre visite. C'est l'un des plus grands avantages par rapport au syst\u00e8me de r\u00e9servation officiel du mus\u00e9e, qui ne propose g\u00e9n\u00e9ralement pas de remboursements. V\u00e9rifiez toujours les conditions d'annulation sp\u00e9cifiques lors de la r\u00e9servation.",
  },
  ctaBottom: "R\u00e9servez Votre Heure d'Entr\u00e9e aux Offices",
  faq: [
    {
      q: "Existe-t-il encore un billet coupe-file pour les Offices ?",
      a: "Non \u2014 il n'y a plus de produit coupe-file distinct. Tous les billets des Offices sont \u00e0 horaire r\u00e9serv\u00e9 et tout le monde entre par la Porte 1. Ce que vous apporte une r\u00e9servation, c'est un cr\u00e9neau garanti et la file d'attente \u00e0 la billetterie que vous n'aurez pas \u00e0 faire ; le court contr\u00f4le de s\u00e9curit\u00e9 s'applique \u00e0 tous les visiteurs.",
    },
    {
      q: "A quelle porte dois-je me rendre avec un billet r\u00e9serv\u00e9 ?",
      a: "Porte 1 \u2014 sur le c\u00f4t\u00e9 est du b\u00e2timent des Offices (le plus proche de l'Arno). Tout le monde l'utilise d\u00e9sormais. La Porte 3, l'ancien point d'\u00e9change de bons, ne fonctionne plus et il n'y a aucun bon papier \u00e0 retirer : le QR code sur votre t\u00e9l\u00e9phone est votre billet.",
    },
    {
      q: "Que se passe-t-il si j'arrive en retard pour mon creneau ?",
      a: "La plupart des billets \u00e0 horaire r\u00e9serv\u00e9 ont une fen\u00eatre de 15 minutes (ex. 9h00-9h15). Essayez d'arriver dans ce cr\u00e9neau. Si vous \u00eates l\u00e9g\u00e8rement en retard, le personnel vous laissera g\u00e9n\u00e9ralement entrer, mais un retard de plus de 30 minutes peut n\u00e9cessiter une nouvelle r\u00e9servation.",
    },
    {
      q: "Les billets gratuits et r\u00e9duits ont-ils aussi besoin d'un horaire r\u00e9serv\u00e9 ?",
      a: "Oui. L'entr\u00e9e gratuite (moins de 18 ans, sur un billet nominatif dont le nom doit correspondre \u00e0 la pi\u00e8ce d'identit\u00e9) et les billets \u00e0 tarif r\u00e9duit (citoyens UE de 18 \u00e0 25 ans, 2 \u20ac) sont eux aussi \u00e0 horaire r\u00e9serv\u00e9. R\u00e9servez-les via le syst\u00e8me officiel du mus\u00e9e \u2014 une r\u00e9servation \u00e0 l'avance ajoute 4 \u20ac de frais de r\u00e9servation \u2014 et entrez par la Porte 1 comme tout le monde.",
    },
  ],
};

const es: SkipTheLineContent = {
  meta: {
    title: "Entradas Uffizi con Hora Reservada 2026 | Acceso Reservado",
    description:
      "Reserva tu entrada Uffizi con hora reservada y audioguía digital desde 26 €. Evita la cola de la taquilla, asegura tu franja y entra por la Puerta 1.",
  },
  breadcrumbs: {
    tickets: "Entradas",
    skipTheLine: "Hora Reservada",
  },
  h1: "Entrada Reservada Galería Uffizi y Audioguía Digital",
  intro:
    "Llevo a\u00f1os haciendo de gu\u00eda en Florencia, y el mayor error que cometen los visitantes es presentarse en los Uffizi sin una hora reservada. Hoy todas las entradas son con hora reservada y, en temporada alta \u2014 de marzo a octubre \u2014, las franjas del d\u00eda suelen agotarse mucho antes de que llegues al edificio. Reservar no hace desaparecer el control de seguridad, pero te evita quedarte en la taquilla esperando que quede alg\u00fan hueco.",
  ctaTop: "Entrada con Hora Reservada \u2014 Galer\u00eda Uffizi",
  howItWorks: {
    h2: "C\u00f3mo Funciona la Entrada con Hora Reservada",
    paragraphs: [
      "Al reservar eliges una franja horaria concreta de 15 minutos (por ejemplo, 9:00-9:15). Recibes un c\u00f3digo QR por correo electr\u00f3nico: mu\u00e9stralo en el m\u00f3vil o impr\u00edmelo. No hay nada que recoger ni ning\u00fan bono que canjear.",
      "El d\u00eda de la visita, ve a la Puerta 1 a tu hora de entrada. Desde septiembre de 2025, con la nueva gesti\u00f3n de CoopCulture, todos los visitantes entran por la Puerta 1 \u2014 los que han reservado y los que compran el mismo d\u00eda \u2014 y todos pasan el mismo breve control de seguridad. Lo que te da la reserva es la cola de la taquilla que no tendr\u00e1s que hacer y una plaza garantizada en un d\u00eda que puede estar agotado. De la Puerta 1 a la primera sala suelen pasar de 5 a 10 minutos.",
    ],
  },
  whichDoor: {
    h2: "Que Puerta Debo Usar?",
    p: "Respuesta corta: la Puerta 1, seas quien seas. La antigua divisi\u00f3n en tres puertas ya no existe; esto es lo que ha cambiado:",
    doors: [
      {
        label: "Puerta 1",
        description:
          "La entrada para todos. Lado este del edificio (el m\u00e1s cercano al r\u00edo Arno). Por aqu\u00ed pasan tanto los c\u00f3digos QR reservados como las entradas compradas el mismo d\u00eda, y todos los visitantes pasan el mismo control de seguridad.",
      },
      {
        label: "Puerta 3",
        description:
          "El antiguo punto de canje de bonos. Ya no funciona y los bonos en papel no existen: si has reservado online no hay nada que canjear, ve directamente a la Puerta 1.",
      },
    ],
    door3LinkText: "qu\u00e9 ha pasado con la Puerta 3",
  },
  bestTimeSlots: {
    h2: "Mejores Horarios para Reservar",
    p: "No todos los horarios son iguales. Esto es lo que recomiendo basandome en anos de experiencia:",
    slots: [
      {
        label: "8:15 (Mejor opcion)",
        description:
          "La primera franja del dia. Tendras la Sala de Botticelli casi para ti solo durante los primeros 20 minutos. El museo se mantiene tranquilo y poco concurrido hasta las 10:00 aproximadamente.",
      },
      {
        label: "16:00-16:30 (Buena opcion)",
        description:
          "Los turistas de un dia y los grupos de cruceros se van alrededor de las 15:00. La luz de la tarde a través de las ventanas es preciosa, el último acceso es a las 17:30 y puedes quedarte hasta el cierre a las 18:30. Además es la franja más económica: 16 € el mismo día, 20 € por adelantado.",
      },
      {
        label: "10:00 \u2013 14:00 (Evitar)",
        description:
          "Horas punta. Es cuando todos los grupos turisticos, las excursiones escolares y los cruceros llegan a los Uffizi al mismo tiempo.",
      },
    ],
  },
  whatsIncluded: {
    h2: "Que Incluye Tu Entrada",
    p: "Tu entrada con hora reservada incluye:",
    items: [
      "Acceso completo a las 101 salas de la Galeria Uffizi",
      "Una franja de entrada garantizada de 15 minutos en la Puerta 1 \u2014 evitas la cola de la taquilla",
      "Una audiogu\u00eda digital que sigues a tu propio ritmo",
      "Quedate todo el tiempo que quieras \u2014 no hay limite de tiempo una vez dentro",
      "Guardarropa gratuito para bolsos y chaquetas",
      "Acceso a la cafeteria y terraza del segundo piso",
    ],
    notePrefix: "Nota: la audiogu\u00eda digital est\u00e1 incluida, pero la entrada ",
    noteBold: "no",
    noteSuffix: " lleva gu\u00eda en persona. Para una experiencia con un experto, consulta nuestras ",
    guidedTourLinkText: "opciones de visita guiada",
    guidedTourSuffix:
      ", que incluyen entrada con hora reservada y un historiador del arte con licencia.",
  },
  cancellation: {
    h2: "Politica de Cancelacion y Reembolso",
    p: "La mayor\u00eda de las entradas con hora reservada compradas a trav\u00e9s de agencias locales independientes ofrecen cancelaci\u00f3n gratuita hasta 24 horas antes de tu visita. Esta es una de las mayores ventajas frente al sistema de reserva oficial del museo, que normalmente no ofrece reembolsos. Comprueba siempre las condiciones de cancelaci\u00f3n espec\u00edficas al reservar.",
  },
  ctaBottom: "Reserva Tu Hora de Entrada a los Uffizi",
  faq: [
    {
      q: "Sigue existiendo una entrada sin colas para los Uffizi?",
      a: "No \u2014 ya no hay un producto sin colas aparte. Todas las entradas de los Uffizi son con hora reservada y todo el mundo entra por la Puerta 1. Lo que te da la reserva es una franja garantizada y la cola de la taquilla que no tendr\u00e1s que hacer; el breve control de seguridad se aplica a todos los visitantes.",
    },
    {
      q: "A que puerta debo ir con una entrada reservada?",
      a: "Puerta 1 \u2014 en el lado este del edificio de los Uffizi (el m\u00e1s cercano al r\u00edo Arno). Hoy la usa todo el mundo. La Puerta 3, el antiguo punto de canje de bonos, ya no funciona y no hay bonos en papel que recoger: el c\u00f3digo QR de tu m\u00f3vil es la entrada.",
    },
    {
      q: "Que pasa si llego tarde a mi franja horaria?",
      a: "La mayor\u00eda de las entradas con hora reservada tienen una ventana de 15 minutos (ej. 9:00-9:15). Intenta llegar dentro de esa ventana. Si llegas con un poco de retraso, el personal normalmente te dejar\u00e1 entrar, pero un retraso de m\u00e1s de 30 minutos puede requerir una nueva reserva.",
    },
    {
      q: "Las entradas gratuitas y reducidas tambien necesitan hora reservada?",
      a: "S\u00ed. La entrada gratuita (menores de 18 a\u00f1os, con entrada nominativa cuyo nombre debe coincidir con el documento de identidad) y las entradas reducidas (ciudadanos de la UE de 18 a 25 a\u00f1os, 2 \u20ac) tambi\u00e9n son con hora reservada. Se reservan a trav\u00e9s del sistema oficial del museo \u2014 reservar por adelantado a\u00f1ade la tarifa de reserva de 4 \u20ac \u2014 y se entra por la Puerta 1 como todo el mundo.",
    },
  ],
};

const content: PageContent<SkipTheLineContent> = { en, it, de, fr, es };

export function getSkipTheLineContent(locale: string): SkipTheLineContent {
  return getContent(content, locale);
}
