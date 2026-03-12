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
    title: "Uffizi Gallery Reserved Ticket & Digital Audio Guide | Priority Entrance 2026",
    description:
      "Skip the Uffizi queue with pre-booked timed entry. How skip-the-line works, which door to use, best time slots & booking tips from a local guide.",
  },
  breadcrumbs: {
    tickets: "Tickets",
    skipTheLine: "Skip the Line",
  },
  h1: "Uffizi Gallery Reserved Ticket & Digital Audio Guide",
  intro:
    "I've been guiding tours in Florence for years, and the single biggest mistake visitors make is underestimating the Uffizi queue. During peak season \u2014 March through October \u2014 I've seen the line wrap around the building and stretch past the Piazza della Signoria. That's a 2-3 hour wait in the sun, and it's completely avoidable.",
  ctaTop: "Skip the Line \u2014 Uffizi Gallery Entry",
  howItWorks: {
    h2: "How Skip-the-Line Works",
    paragraphs: [
      "When you book a skip-the-line ticket, you select a specific 15-minute entry window (for example, 9:00-9:15 AM). On the day of your visit, go directly to Door 1 on the east side of the Uffizi building \u2014 this is the priority entrance. Show your mobile voucher (or printed ticket) along with a valid photo ID, pass through the security screening, and you're inside.",
      "The entire process \u2014 from arriving at Door 1 to standing in the first gallery \u2014 typically takes 5-10 minutes. Compare that to the general admission line at Door 2, where even on a quiet winter Tuesday you might wait 30-45 minutes.",
    ],
  },
  whichDoor: {
    h2: "Which Door Do I Use?",
    p: "This causes more confusion than it should. Here's the simple version:",
    doors: [
      {
        label: "Door 1",
        description:
          "Pre-booked tickets & skip-the-line entry. East side of the building (closest to the Arno river). This is where you go.",
      },
      {
        label: "Door 2",
        description: "Walk-up ticket purchases. West side. Long queue.",
      },
      {
        label: "Door 3",
        description: "Group tours and school groups.",
      },
    ],
    door3LinkText: "Door 3 guide",
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
          "The day-trippers and cruise ship groups leave around 3 PM. Late afternoon light through the windows is beautiful, and you can stay until closing at 6:30 PM.",
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
    p: "Your skip-the-line ticket includes:",
    items: [
      "Full access to all 101 rooms of the Uffizi Gallery",
      "Timed priority entry via Door 1 (skip the general queue)",
      "Stay as long as you want \u2014 there's no time limit once inside",
      "Free cloakroom for bags and jackets",
      "Access to the second-floor caf\u00e9 and terrace",
    ],
    notePrefix: "Note: the ticket does ",
    noteBold: "not",
    noteSuffix: " include a guide. For an expert-led experience, check our ",
    guidedTourLinkText: "guided tour options",
    guidedTourSuffix:
      ", which include skip-the-line entry plus a licensed art historian.",
  },
  cancellation: {
    h2: "Cancellation & Refund Policy",
    p: "Most skip-the-line tickets booked through authorized resellers offer free cancellation up to 24 hours before your visit. This is one of the biggest advantages over the official museum booking system, which typically does not offer refunds. Always check the specific cancellation terms when booking.",
  },
  ctaBottom: "Skip the Line \u2014 Book Your Time Slot",
  faq: [
    {
      q: "What does 'skip the line' mean at the Uffizi?",
      a: "You get a timed entry ticket that lets you bypass the general admission queue. Instead of waiting at Door 2, you go directly to Door 1 (priority entrance) at your reserved time. Entry takes 5-10 minutes through security.",
    },
    {
      q: "Which door do I go to with skip-the-line tickets?",
      a: "Door 1 \u2014 on the east side of the Uffizi building (closest to the Arno river). Do not go to Door 2 (that's for walk-up purchases) or Door 3 (groups).",
    },
    {
      q: "What if I arrive late for my time slot?",
      a: "Most skip-the-line tickets have a 15-minute window (e.g., 9:00-9:15 AM). Try to arrive within this window. If you're slightly late, staff will usually accommodate you, but arriving more than 30 minutes late may require rebooking.",
    },
    {
      q: "Can I still skip the line with a free/reduced ticket?",
      a: "Free entry (under 18) and reduced tickets (EU 18-25) are available at the ticket office (Door 2) but don't include skip-the-line access. To skip the queue with free entry, you'd need to pre-book through the official museum reservation system with a \u20ac4 booking fee.",
    },
  ],
};

const it: SkipTheLineContent = {
  meta: {
    title:
      "Biglietti Salta la Fila Uffizi | Ingresso Prioritario 2026",
    description:
      "Evita la coda agli Uffizi con il biglietto salta la fila a ingresso programmato. Come funziona, quale porta usare, fasce orarie migliori e consigli per la prenotazione.",
  },
  breadcrumbs: {
    tickets: "Biglietti",
    skipTheLine: "Salta la Fila",
  },
  h1: "Biglietto Riservato Galleria degli Uffizi e Audioguida Digitale",
  intro:
    "Faccio la guida a Firenze da anni e l'errore pi\u00f9 grande che vedo commettere ai visitatori \u00e8 sottovalutare la coda agli Uffizi. In alta stagione \u2014 da marzo a ottobre \u2014 ho visto la fila avvolgere l'intero edificio e superare Piazza della Signoria. Significa 2-3 ore sotto il sole, e si pu\u00f2 evitare completamente.",
  ctaTop: "Salta la Fila \u2014 Ingresso Galleria degli Uffizi",
  howItWorks: {
    h2: "Come Funziona il Salta la Fila",
    paragraphs: [
      "Quando prenoti un biglietto salta la fila, selezioni una fascia oraria precisa di 15 minuti (ad esempio 9:00-9:15). Il giorno della visita, vai direttamente alla Porta 1 sul lato est dell'edificio degli Uffizi \u2014 \u00e8 l'ingresso prioritario. Mostra il voucher sul telefono (o il biglietto stampato) insieme a un documento d'identit\u00e0 con foto, supera il controllo di sicurezza e sei dentro.",
      "L'intero processo \u2014 dall'arrivo alla Porta 1 fino alla prima sala \u2014 richiede in genere 5-10 minuti. Confrontalo con la coda dell'ingresso generale alla Porta 2, dove anche in un tranquillo marted\u00ec invernale potresti aspettare 30-45 minuti.",
    ],
  },
  whichDoor: {
    h2: "Quale Porta Devo Usare?",
    p: "Questo punto genera pi\u00f9 confusione del dovuto. Ecco la versione semplice:",
    doors: [
      {
        label: "Porta 1",
        description:
          "Biglietti prenotati e ingresso salta la fila. Lato est dell'edificio (il pi\u00f9 vicino all'Arno). \u00c8 qui che devi andare.",
      },
      {
        label: "Porta 2",
        description:
          "Acquisto biglietti senza prenotazione. Lato ovest. Coda lunga.",
      },
      {
        label: "Porta 3",
        description: "Gruppi organizzati e scolaresche.",
      },
    ],
    door3LinkText: "guida alla Porta 3",
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
          "I turisti giornalieri e i gruppi delle crociere se ne vanno intorno alle 15:00. La luce del tardo pomeriggio attraverso le finestre \u00e8 splendida e puoi restare fino alla chiusura alle 18:30.",
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
    p: "Il tuo biglietto salta la fila include:",
    items: [
      "Accesso completo a tutte le 101 sale della Galleria degli Uffizi",
      "Ingresso prioritario a orario dalla Porta 1 (salti la coda generale)",
      "Puoi restare quanto vuoi \u2014 nessun limite di tempo una volta dentro",
      "Guardaroba gratuito per borse e giacche",
      "Accesso al caff\u00e8 e alla terrazza del secondo piano",
    ],
    notePrefix: "Nota: il biglietto ",
    noteBold: "non",
    noteSuffix:
      " include la guida. Per un'esperienza con un esperto, scopri le nostre ",
    guidedTourLinkText: "opzioni di visita guidata",
    guidedTourSuffix:
      ", che includono l'ingresso salta la fila e uno storico dell'arte abilitato.",
  },
  cancellation: {
    h2: "Cancellazione e Rimborso",
    p: "La maggior parte dei biglietti salta la fila prenotati tramite rivenditori autorizzati offre la cancellazione gratuita fino a 24 ore prima della visita. Questo \u00e8 uno dei maggiori vantaggi rispetto al sistema di prenotazione ufficiale del museo, che generalmente non prevede rimborsi. Verifica sempre le condizioni specifiche di cancellazione al momento della prenotazione.",
  },
  ctaBottom: "Salta la Fila \u2014 Prenota la Tua Fascia Oraria",
  faq: [
    {
      q: "Cosa significa 'salta la fila' agli Uffizi?",
      a: "Ricevi un biglietto con ingresso a orario che ti permette di bypassare la coda dell'ingresso generale. Invece di aspettare alla Porta 2, vai direttamente alla Porta 1 (ingresso prioritario) all'orario prenotato. L'ingresso richiede 5-10 minuti per il controllo di sicurezza.",
    },
    {
      q: "A quale porta devo andare con il biglietto salta la fila?",
      a: "Porta 1 \u2014 sul lato est dell'edificio degli Uffizi (il pi\u00f9 vicino all'Arno). Non andare alla Porta 2 (acquisti senza prenotazione) n\u00e9 alla Porta 3 (gruppi).",
    },
    {
      q: "Cosa succede se arrivo in ritardo per la mia fascia oraria?",
      a: "La maggior parte dei biglietti salta la fila ha una finestra di 15 minuti (es. 9:00-9:15). Cerca di arrivare entro questa finestra. Se sei leggermente in ritardo, il personale di solito ti fa entrare, ma un ritardo superiore ai 30 minuti potrebbe richiedere una nuova prenotazione.",
    },
    {
      q: "Posso saltare la fila con un biglietto gratuito o ridotto?",
      a: "L'ingresso gratuito (under 18) e i biglietti ridotti (UE 18-25) si ottengono in biglietteria (Porta 2) ma non includono il salta la fila. Per saltare la coda con ingresso gratuito, \u00e8 necessario prenotare tramite il sistema ufficiale del museo con un supplemento di \u20ac4.",
    },
  ],
};

const de: SkipTheLineContent = {
  meta: {
    title:
      "Ohne Anstehen Uffizi Galerie Tickets | Bevorzugter Einlass 2026",
    description:
      "Uffizi Galerie ohne Anstehen: Tickets mit Zeitfenster online buchen. So funktioniert der bevorzugte Einlass, welche Tür, beste Uhrzeiten & Buchungstipps.",
  },
  breadcrumbs: {
    tickets: "Tickets",
    skipTheLine: "Ohne Anstehen",
  },
  h1: "Uffizi Galerie Reserviertes Ticket & Digitaler Audioguide",
  intro:
    "Ich führe seit Jahren Touren durch Florenz, und der größte Fehler, den Besucher machen, ist die Warteschlange an den Uffizien zu unterschätzen. In der Hauptsaison — von März bis Oktober — habe ich erlebt, wie sich die Schlange um das gesamte Gebäude wickelt und weit über die Piazza della Signoria hinausreicht. Das bedeutet 2-3 Stunden Wartezeit in der Sonne — und das lässt sich komplett vermeiden.",
  ctaTop: "Ohne Anstehen — Eintritt Uffizi Galerie",
  howItWorks: {
    h2: 'So funktioniert "Ohne Anstehen"',
    paragraphs: [
      "Wenn Sie ein Ohne-Anstehen-Ticket buchen, wählen Sie ein bestimmtes 15-Minuten-Zeitfenster (zum Beispiel 9:00–9:15 Uhr). Am Besuchstag gehen Sie direkt zu Tür 1 auf der Ostseite des Uffizien-Gebäudes — das ist der bevorzugte Eingang. Zeigen Sie Ihren mobilen Voucher (oder das ausgedruckte Ticket) zusammen mit einem gültigen Lichtbildausweis vor, passieren Sie die Sicherheitskontrolle, und Sie sind drin.",
      "Der gesamte Vorgang — vom Ankommen an Tür 1 bis zum Stehen im ersten Ausstellungsraum — dauert in der Regel 5-10 Minuten. Vergleichen Sie das mit der regulären Warteschlange an Tür 2, wo Sie selbst an einem ruhigen Dienstag im Winter 30-45 Minuten warten können.",
    ],
  },
  whichDoor: {
    h2: "Welche Tür muss ich benutzen?",
    p: "Das sorgt für mehr Verwirrung als nötig. Hier die einfache Übersicht:",
    doors: [
      {
        label: "Tür 1",
        description:
          "Vorgebuchte Tickets und bevorzugter Einlass. Ostseite des Gebäudes (am nächsten zum Arno). Hierhin müssen Sie gehen.",
      },
      {
        label: "Tür 2",
        description:
          "Tageskasse ohne Reservierung. Westseite. Lange Warteschlange.",
      },
      {
        label: "Tür 3",
        description: "Gruppenführungen und Schulklassen.",
      },
    ],
    door3LinkText: "Informationen zu Tür 3",
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
          "Die Tagesausflügler und Kreuzfahrtgruppen verlassen das Museum gegen 15 Uhr. Das Nachmittagslicht durch die Fenster ist wunderschön, und Sie können bis zur Schließung um 18:30 Uhr bleiben.",
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
    p: "Ihr Ohne-Anstehen-Ticket beinhaltet:",
    items: [
      "Vollständiger Zugang zu allen 101 Sälen der Uffizi Galerie",
      "Bevorzugter Einlass über Tür 1 zu Ihrem gewählten Zeitfenster (an der Warteschlange vorbei)",
      "Unbegrenzte Aufenthaltsdauer — Sie können so lange bleiben, wie Sie möchten",
      "Kostenlose Garderobe für Taschen und Jacken",
      "Zugang zum Café und zur Terrasse im zweiten Stock",
    ],
    notePrefix: "Hinweis: Das Ticket beinhaltet ",
    noteBold: "keine",
    noteSuffix: " Führung. Für ein Erlebnis mit fachkundiger Begleitung sehen Sie sich unsere ",
    guidedTourLinkText: "Optionen für geführte Touren",
    guidedTourSuffix:
      " an — inklusive Ohne-Anstehen-Einlass und einem lizenzierten Kunsthistoriker.",
  },
  cancellation: {
    h2: "Stornierung und Erstattung",
    p: "Die meisten Ohne-Anstehen-Tickets, die über autorisierte Wiederverkäufer gebucht werden, bieten eine kostenlose Stornierung bis 24 Stunden vor dem Besuch. Das ist einer der größten Vorteile gegenüber dem offiziellen Buchungssystem des Museums, das in der Regel keine Erstattungen vorsieht. Prüfen Sie bei der Buchung immer die genauen Stornierungsbedingungen.",
  },
  ctaBottom: "Ohne Anstehen — Jetzt Zeitfenster buchen",
  faq: [
    {
      q: "Was bedeutet ‚Ohne Anstehen' an den Uffizien?",
      a: "Sie erhalten ein Ticket mit festem Zeitfenster, mit dem Sie die reguläre Warteschlange umgehen. Anstatt an Tür 2 anzustehen, gehen Sie zur reservierten Zeit direkt zu Tür 1 (bevorzugter Eingang). Der Einlass dauert einschließlich Sicherheitskontrolle 5-10 Minuten.",
    },
    {
      q: "Zu welcher Tür muss ich mit dem Ohne-Anstehen-Ticket?",
      a: "Tür 1 — auf der Ostseite des Uffizien-Gebäudes (am nächsten zum Arno). Gehen Sie nicht zu Tür 2 (Tageskasse ohne Reservierung) oder Tür 3 (Gruppen).",
    },
    {
      q: "Was passiert, wenn ich mein Zeitfenster verpasse?",
      a: "Die meisten Ohne-Anstehen-Tickets haben ein 15-Minuten-Fenster (z. B. 9:00–9:15 Uhr). Versuchen Sie, innerhalb dieses Fensters zu erscheinen. Bei leichter Verspätung wird das Personal Sie in der Regel trotzdem einlassen. Bei mehr als 30 Minuten Verspätung kann eine Umbuchung nötig sein.",
    },
    {
      q: "Kann ich mit einem kostenlosen oder ermäßigten Ticket die Schlange überspringen?",
      a: "Der kostenlose Eintritt (unter 18 Jahren) und ermäßigte Tickets (EU-Bürger 18-25) sind an der Tageskasse (Tür 2) erhältlich, beinhalten aber keinen bevorzugten Einlass. Um mit kostenlosem Eintritt die Schlange zu umgehen, müssen Sie über das offizielle Reservierungssystem des Museums vorbuchen — mit einer Reservierungsgebühr von 4 €.",
    },
  ],
};

const fr: SkipTheLineContent = {
  meta: {
    title: "Billets Coupe-File Galerie des Offices | Entree Prioritaire 2026",
    description:
      "Evitez la file d'attente aux Offices avec un billet coupe-file a horaire reserve. Comment ca fonctionne, quelle porte utiliser, meilleurs creneaux et conseils de reservation.",
  },
  breadcrumbs: {
    tickets: "Billets",
    skipTheLine: "Coupe-File",
  },
  h1: "Billet Réservé Galerie des Offices et Audioguide Numérique",
  intro:
    "Je suis guide a Florence depuis des annees, et la plus grande erreur que font les visiteurs est de sous-estimer la file d'attente aux Offices. En haute saison \u2014 de mars a octobre \u2014 j'ai vu la queue faire le tour du batiment et depasser la Piazza della Signoria. Cela represente 2 a 3 heures d'attente au soleil, et c'est tout a fait evitable.",
  ctaTop: "Coupe-File \u2014 Entree Galerie des Offices",
  howItWorks: {
    h2: "Comment Fonctionne le Coupe-File",
    paragraphs: [
      "Lorsque vous reservez un billet coupe-file, vous selectionnez un creneau horaire precis de 15 minutes (par exemple 9h00-9h15). Le jour de votre visite, rendez-vous directement a la Porte 1, sur le cote est du batiment des Offices \u2014 c'est l'entree prioritaire. Presentez votre bon electronique (ou billet imprime) avec une piece d'identite avec photo, passez le controle de securite, et vous etes a l'interieur.",
      "L'ensemble du processus \u2014 de l'arrivee a la Porte 1 jusqu'a la premiere salle \u2014 prend generalement 5 a 10 minutes. Comparez cela a la file d'entree generale a la Porte 2, ou meme un mardi tranquille en hiver, vous pourriez attendre 30 a 45 minutes.",
    ],
  },
  whichDoor: {
    h2: "Quelle Porte Utiliser ?",
    p: "Ce point cree plus de confusion qu'il ne devrait. Voici la version simple :",
    doors: [
      {
        label: "Porte 1",
        description:
          "Billets reserves et entree coupe-file. Cote est du batiment (le plus proche de l'Arno). C'est ici que vous devez aller.",
      },
      {
        label: "Porte 2",
        description:
          "Achat de billets sur place. Cote ouest. Longue file d'attente.",
      },
      {
        label: "Porte 3",
        description: "Visites de groupe et groupes scolaires.",
      },
    ],
    door3LinkText: "guide de la Porte 3",
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
          "Les excursionnistes et les groupes de croisieres partent vers 15h. La lumiere de fin d'apres-midi a travers les fenetres est magnifique, et vous pouvez rester jusqu'a la fermeture a 18h30.",
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
    p: "Votre billet coupe-file comprend :",
    items: [
      "Acces complet aux 101 salles de la Galerie des Offices",
      "Entree prioritaire a horaire par la Porte 1 (vous evitez la file generale)",
      "Restez aussi longtemps que vous le souhaitez \u2014 aucune limite de temps une fois a l'interieur",
      "Vestiaire gratuit pour sacs et vestes",
      "Acces au cafe et a la terrasse du deuxieme etage",
    ],
    notePrefix: "Remarque : le billet ",
    noteBold: "ne comprend pas",
    noteSuffix: " de guide. Pour une experience avec un expert, decouvrez nos ",
    guidedTourLinkText: "options de visite guidee",
    guidedTourSuffix:
      ", qui incluent l'entree coupe-file et un historien de l'art agree.",
  },
  cancellation: {
    h2: "Annulation et Remboursement",
    p: "La plupart des billets coupe-file reserves via des revendeurs autorises offrent l'annulation gratuite jusqu'a 24 heures avant votre visite. C'est l'un des plus grands avantages par rapport au systeme de reservation officiel du musee, qui ne propose generalement pas de remboursements. Verifiez toujours les conditions d'annulation specifiques lors de la reservation.",
  },
  ctaBottom: "Coupe-File \u2014 Reservez Votre Creneau",
  faq: [
    {
      q: "Que signifie 'coupe-file' aux Offices ?",
      a: "Vous recevez un billet a horaire reserve qui vous permet de contourner la file d'attente generale. Au lieu d'attendre a la Porte 2, vous allez directement a la Porte 1 (entree prioritaire) a l'heure reservee. L'entree prend 5 a 10 minutes pour le controle de securite.",
    },
    {
      q: "A quelle porte dois-je me rendre avec un billet coupe-file ?",
      a: "Porte 1 \u2014 sur le cote est du batiment des Offices (le plus proche de l'Arno). N'allez pas a la Porte 2 (achats sur place) ni a la Porte 3 (groupes).",
    },
    {
      q: "Que se passe-t-il si j'arrive en retard pour mon creneau ?",
      a: "La plupart des billets coupe-file ont une fenetre de 15 minutes (ex. 9h00-9h15). Essayez d'arriver dans ce creneau. Si vous etes legerement en retard, le personnel vous laissera generalement entrer, mais un retard de plus de 30 minutes peut necessiter une nouvelle reservation.",
    },
    {
      q: "Puis-je eviter la file avec un billet gratuit ou a tarif reduit ?",
      a: "L'entree gratuite (moins de 18 ans) et les billets a tarif reduit (UE 18-25 ans) sont disponibles au guichet (Porte 2) mais n'incluent pas l'acces coupe-file. Pour eviter la file avec une entree gratuite, il faut reserver via le systeme officiel du musee avec des frais de reservation de 4 \u20ac.",
    },
  ],
};

const es: SkipTheLineContent = {
  meta: {
    title: "Entradas Sin Colas Galeria Uffizi | Acceso Prioritario 2026",
    description:
      "Evita las colas en los Uffizi con entradas sin colas con horario reservado. Como funciona, que puerta usar, mejores horarios y consejos de reserva de un guia local.",
  },
  breadcrumbs: {
    tickets: "Entradas",
    skipTheLine: "Sin Colas",
  },
  h1: "Entrada Reservada Galería Uffizi y Audioguía Digital",
  intro:
    "Llevo anos haciendo de guia en Florencia, y el mayor error que cometen los visitantes es subestimar la cola de los Uffizi. En temporada alta \u2014 de marzo a octubre \u2014 he visto la fila rodear el edificio entero y extenderse mas alla de la Piazza della Signoria. Eso supone 2-3 horas de espera bajo el sol, y es completamente evitable.",
  ctaTop: "Sin Colas \u2014 Entrada Galeria Uffizi",
  howItWorks: {
    h2: "Como Funciona la Entrada Sin Colas",
    paragraphs: [
      "Cuando reservas una entrada sin colas, seleccionas una franja horaria concreta de 15 minutos (por ejemplo, 9:00-9:15). El dia de tu visita, ve directamente a la Puerta 1, en el lado este del edificio de los Uffizi \u2014 es la entrada prioritaria. Muestra tu bono electronico (o entrada impresa) junto con un documento de identidad con foto, pasa el control de seguridad y ya estas dentro.",
      "Todo el proceso \u2014 desde llegar a la Puerta 1 hasta estar en la primera sala \u2014 suele durar de 5 a 10 minutos. Comparalo con la cola de entrada general en la Puerta 2, donde incluso un martes tranquilo de invierno puedes esperar de 30 a 45 minutos.",
    ],
  },
  whichDoor: {
    h2: "Que Puerta Debo Usar?",
    p: "Esto genera mas confusion de la necesaria. Aqui tienes la version sencilla:",
    doors: [
      {
        label: "Puerta 1",
        description:
          "Entradas reservadas y acceso sin colas. Lado este del edificio (el mas cercano al rio Arno). Aqui es donde debes ir.",
      },
      {
        label: "Puerta 2",
        description:
          "Compra de entradas sin reserva. Lado oeste. Cola larga.",
      },
      {
        label: "Puerta 3",
        description: "Grupos organizados y grupos escolares.",
      },
    ],
    door3LinkText: "guia de la Puerta 3",
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
          "Los turistas de un dia y los grupos de cruceros se van alrededor de las 15:00. La luz de la tarde a traves de las ventanas es preciosa, y puedes quedarte hasta el cierre a las 18:30.",
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
    p: "Tu entrada sin colas incluye:",
    items: [
      "Acceso completo a las 101 salas de la Galeria Uffizi",
      "Entrada prioritaria con horario por la Puerta 1 (evitas la cola general)",
      "Quedate todo el tiempo que quieras \u2014 no hay limite de tiempo una vez dentro",
      "Guardarropa gratuito para bolsos y chaquetas",
      "Acceso a la cafeteria y terraza del segundo piso",
    ],
    notePrefix: "Nota: la entrada ",
    noteBold: "no",
    noteSuffix: " incluye guia. Para una experiencia con un experto, consulta nuestras ",
    guidedTourLinkText: "opciones de visita guiada",
    guidedTourSuffix:
      ", que incluyen entrada sin colas y un historiador del arte con licencia.",
  },
  cancellation: {
    h2: "Politica de Cancelacion y Reembolso",
    p: "La mayoria de las entradas sin colas reservadas a traves de revendedores autorizados ofrecen cancelacion gratuita hasta 24 horas antes de tu visita. Esta es una de las mayores ventajas frente al sistema de reserva oficial del museo, que normalmente no ofrece reembolsos. Comprueba siempre las condiciones de cancelacion especificas al reservar.",
  },
  ctaBottom: "Sin Colas \u2014 Reserva Tu Horario",
  faq: [
    {
      q: "Que significa 'sin colas' en los Uffizi?",
      a: "Recibes una entrada con horario reservado que te permite evitar la cola de entrada general. En lugar de esperar en la Puerta 2, vas directamente a la Puerta 1 (entrada prioritaria) a la hora reservada. La entrada tarda 5-10 minutos pasando el control de seguridad.",
    },
    {
      q: "A que puerta debo ir con la entrada sin colas?",
      a: "Puerta 1 \u2014 en el lado este del edificio de los Uffizi (el mas cercano al rio Arno). No vayas a la Puerta 2 (compra sin reserva) ni a la Puerta 3 (grupos).",
    },
    {
      q: "Que pasa si llego tarde a mi franja horaria?",
      a: "La mayoria de las entradas sin colas tienen una ventana de 15 minutos (ej. 9:00-9:15). Intenta llegar dentro de esa ventana. Si llegas con un poco de retraso, el personal normalmente te dejara entrar, pero un retraso de mas de 30 minutos puede requerir una nueva reserva.",
    },
    {
      q: "Puedo evitar la cola con una entrada gratuita o reducida?",
      a: "La entrada gratuita (menores de 18 anos) y las entradas reducidas (UE 18-25 anos) se obtienen en taquilla (Puerta 2) pero no incluyen acceso sin colas. Para evitar la cola con entrada gratuita, es necesario reservar a traves del sistema oficial del museo con una tarifa de reserva de 4 \u20ac.",
    },
  ],
};

const content: PageContent<SkipTheLineContent> = { en, it, de, fr, es };

export function getSkipTheLineContent(locale: string): SkipTheLineContent {
  return getContent(content, locale);
}
