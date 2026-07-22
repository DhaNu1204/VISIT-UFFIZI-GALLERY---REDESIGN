import { getContent, type PageContent } from "./types";

export type Door3Content = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  quickAnswer: { label: string; text: string };
  ctaTicketTitle: string;
  changed: { h2: string; paragraphs: string[] };
  whereEnter: { h2: string; lead: string; paragraphs: string[] };
  bookedOnline: {
    h2: string;
    paragraphs: string[];
    stepsIntro: string;
    steps: string[];
    closing: string;
  };
  mainCta: {
    title: string;
    intro: string;
    bullets: string[];
    button: string;
  };
  onTheDay: {
    h2: string;
    paragraphs: string[];
    paymentIntro: string;
    payment: string[];
    closing: string;
  };
  guidedTours: {
    h2: string;
    paragraphs: string[];
    ctaTitle: string;
    ctaLabel: string;
  };
  quickFacts: { h2: string; items: { label: string; value: string }[] };
  finalCta: { text: string; ticketLabel: string; toursLabel: string };
  faq: { q: string; a: string }[];
};

const en: Door3Content = {
  meta: {
    title: "Uffizi Gallery Door 3 (2026 Update): Where to Enter Now",
    description:
      "Confused about Uffizi Door 3? Here's what changed in 2025 and exactly where to enter in 2026 — plus how to book a timed-entry ticket with audio guide.",
  },
  breadcrumb: "Door 3 & Entrance Info",
  h1: "Uffizi Gallery Door 3: What It Was, and Where You Actually Enter in 2026",
  quickAnswer: {
    label: "Quick answer",
    text: "Door 3 used to be where online visitors exchanged their voucher for a ticket. That system ended in September 2025. Today, every visitor enters the Uffizi through Door 1. If you booked online, there's nothing to collect — just show the QR code on your phone at Door 1 and go through security.",
  },
  ctaTicketTitle: "Book Your Uffizi Ticket + Audio Guide",
  changed: {
    h2: "The Uffizi Changed Its Entrance System in 2025",
    paragraphs: [
      "If you've been reading older guides, you've seen instructions about \"Door 3\" — which queue to join, how to exchange your voucher. Here's the thing: most of that is now out of date.",
      "In September 2025, ticketing at the Gallerie degli Uffizi passed to CoopCulture, and the entrance system was reorganized. The separate voucher-exchange point at Door 3 no longer operates. Having worked at the Uffizi for years, I can tell you the new setup is genuinely simpler — once you know how it works.",
    ],
  },
  whereEnter: {
    h2: "Where Do You Enter the Uffizi Now?",
    lead: "Everyone enters through Door 1.",
    paragraphs: [
      "There's no longer a separate door for collecting tickets or picking up pre-booked reservations. Whether you booked months ago or you're buying on the spot, Door 1 is your entrance — where you'll pass through the security check before heading up to the galleries. It's under the arcade on the Piazzale degli Uffizi, the courtyard between the two wings that opens toward the Arno.",
    ],
  },
  bookedOnline: {
    h2: "If You've Already Booked Online",
    paragraphs: [
      "Good news — your visit just got easier. When you book online, there's no physical ticket and nothing to collect. Your ticket is the QR code in your email; show it on your phone (or print it if you prefer).",
    ],
    stepsIntro: "Exactly what to do:",
    steps: [
      "Arrive at Door 1 a few minutes before your reserved time slot",
      "Have the QR code ready on your phone",
      "Show it at the entrance and pass through the security check",
      "You're in — head up to the galleries",
    ],
    closing:
      "Because your entry time is reserved, you skip the ticket-office queue entirely — no standing in the long line of people buying tickets on the day. (One honest note: everyone, ticket-holders included, passes through a short security screening at Door 1, so allow a few minutes.)",
  },
  mainCta: {
    title: "Haven't Booked Yet?",
    intro:
      "Reserve your timed-entry slot before you travel. Our most popular option includes your Uffizi admission plus a digital audio guide, so you'll understand what you're seeing — from Botticelli's Birth of Venus to Caravaggio's Medusa.",
    bullets: [
      "Reserved timed entry (choose your date & time)",
      "Digital audio guide included",
      "Skip the ticket-office queue — enter at Door 1",
      "Instant confirmation to your phone",
    ],
    button: "Book Uffizi Ticket + Audio Guide — from €26",
  },
  onTheDay: {
    h2: "What If You Buy Your Ticket on the Day?",
    paragraphs: [
      "You can still buy on arrival, but I'll be honest as someone who works here: in high season it's a gamble. Timed slots sell out, and the queue to buy can eat an hour or more of your day.",
    ],
    paymentIntro: "If you do buy on-site, there's a ticket office with two options:",
    payment: [
      "Paying by cash? Use the self-service ticket machines.",
      "Paying by card? Buy at the staffed counters.",
    ],
    closing:
      "Same-day tickets are €25 for standard entry (before 4:00 PM) or €16 for afternoon entry (from 4:00 PM). But you're buying whatever slot is still available — in summer that might be hours later, or nothing at all. Booking ahead costs just €4 more and guarantees your time. For most visitors, that's the easiest decision of the trip.",
  },
  guidedTours: {
    h2: "Want to Skip the Guesswork Entirely?",
    paragraphs: [
      "If it's your first time at the Uffizi — over 100 rooms, one of the most overwhelming museums in the world — consider a guided tour. You'll meet your guide outside, walk in together at Door 1, and spend two hours with a licensed Florentine art historian who shows you exactly what matters and why. No maps, no missing the masterpieces, no wondering which room is next.",
    ],
    ctaTitle: "Explore Guided Uffizi Tours",
    ctaLabel: "Small-group & private options, entry included.",
  },
  quickFacts: {
    h2: "Uffizi Gallery Entrance: Quick Facts (2026)",
    items: [
      { label: "Everyone enters at:", value: "Door 1" },
      {
        label: "Door 3 voucher exchange:",
        value: "Discontinued (September 2025)",
      },
      {
        label: "Online tickets:",
        value: "QR code on your phone — no collection needed",
      },
      {
        label: "Opening hours:",
        value: "Tue–Sun, 8:15 AM–6:30 PM (last entry 5:30 PM)",
      },
      { label: "Closed:", value: "Mondays, 1 January, 25 December" },
      {
        label: "On-site payment:",
        value: "Cash at machines, card at counters",
      },
    ],
  },
  finalCta: {
    text: "Ready to plan your visit?",
    ticketLabel: "Book Ticket + Audio Guide (from €26)",
    toursLabel: "See Guided Tour Options",
  },
  faq: [
    {
      q: "Is there still a Door 3 at the Uffizi Gallery?",
      a: "The physical door exists, but it no longer works as a ticket-collection or voucher-exchange point. Since September 2025, all visitors enter through Door 1. If a guide or website tells you to collect your ticket at Door 3, that information is out of date.",
    },
    {
      q: "Where do I enter if I booked online?",
      a: "Go to Door 1 at your reserved time and show the QR code on your phone. There's nothing to collect and no separate line — through security and straight into the museum.",
    },
    {
      q: "Do I need to print my Uffizi ticket?",
      a: "No. Your ticket is a QR code in your email. Show it on your phone at Door 1, or print it if you'd rather — both work.",
    },
    {
      q: "Can I still buy tickets at the Uffizi in person?",
      a: "Yes — pay by cash at the self-service machines or by card at the counters. But in busy months slots often sell out, so booking online in advance is strongly recommended.",
    },
    {
      q: "What time should I arrive?",
      a: "About 10–15 minutes before your slot. The 8:15 AM slot is quietest; from mid-morning the museum fills with tour groups.",
    },
  ],
};

const it: Door3Content = {
  meta: {
    title: "Porta 3 Galleria degli Uffizi (2026): Dove Si Entra Ora",
    description:
      "Dubbi sulla Porta 3 degli Uffizi? Ecco cosa è cambiato nel 2025 e dove si entra davvero nel 2026 — e come prenotare un biglietto con orario e audioguida.",
  },
  breadcrumb: "Porta 3 e Ingressi",
  h1: "Porta 3 della Galleria degli Uffizi: Cos'era e Dove Si Entra Davvero nel 2026",
  quickAnswer: {
    label: "Risposta rapida",
    text: "La Porta 3 era il punto in cui chi aveva prenotato online scambiava il voucher con il biglietto. Quel sistema è finito a settembre 2025. Oggi tutti i visitatori entrano agli Uffizi dalla Porta 1. Se hai prenotato online non devi ritirare nulla: mostra il QR code sul telefono alla Porta 1 e passa il controllo di sicurezza.",
  },
  ctaTicketTitle: "Prenota il Tuo Biglietto Uffizi + Audioguida",
  changed: {
    h2: "Nel 2025 gli Uffizi Hanno Cambiato Sistema d'Ingresso",
    paragraphs: [
      "Se hai letto guide più vecchie, avrai trovato istruzioni sulla \"Porta 3\": in quale fila mettersi, come scambiare il voucher. Il punto è questo: gran parte di quelle informazioni oggi non è più valida.",
      "A settembre 2025 la biglietteria delle Gallerie degli Uffizi è passata a CoopCulture e il sistema d'ingresso è stato riorganizzato. Il punto di scambio voucher alla Porta 3 non è più operativo. Avendo lavorato agli Uffizi per anni, posso dirti che il nuovo sistema è davvero più semplice — una volta che sai come funziona.",
    ],
  },
  whereEnter: {
    h2: "Dove Si Entra Adesso agli Uffizi?",
    lead: "Tutti entrano dalla Porta 1.",
    paragraphs: [
      "Non esiste più una porta separata per ritirare i biglietti o le prenotazioni fatte in anticipo. Che tu abbia prenotato mesi fa o stia comprando sul momento, il tuo ingresso è la Porta 1 — dove passerai il controllo di sicurezza prima di salire alle sale. Si trova sotto il loggiato del Piazzale degli Uffizi, il cortile tra le due ali che si apre verso l'Arno.",
    ],
  },
  bookedOnline: {
    h2: "Se Hai Già Prenotato Online",
    paragraphs: [
      "Buone notizie: la tua visita è appena diventata più semplice. Quando prenoti online non c'è nessun biglietto cartaceo e non devi ritirare nulla. Il tuo biglietto è il QR code che ricevi via email: mostralo sul telefono (o stampalo, se preferisci).",
    ],
    stepsIntro: "Cosa fare, esattamente:",
    steps: [
      "Arriva alla Porta 1 qualche minuto prima della tua fascia oraria",
      "Tieni pronto il QR code sul telefono",
      "Mostralo all'ingresso e passa il controllo di sicurezza",
      "Sei dentro — sali alle sale",
    ],
    closing:
      "Poiché il tuo orario d'ingresso è già riservato, salti completamente la fila alla biglietteria — niente attesa nella lunga coda di chi compra il biglietto in giornata. (Una nota onesta: tutti, anche chi ha già il biglietto, passano un breve controllo di sicurezza alla Porta 1, quindi metti in conto qualche minuto.)",
  },
  mainCta: {
    title: "Non Hai Ancora Prenotato?",
    intro:
      "Riserva la tua fascia oraria prima di partire. La nostra opzione più richiesta comprende l'ingresso agli Uffizi e un'audioguida digitale, così capirai davvero quello che stai guardando — dalla Nascita di Venere di Botticelli alla Medusa di Caravaggio.",
    bullets: [
      "Ingresso a orario prestabilito (scegli data e ora)",
      "Audioguida digitale inclusa",
      "Salta la fila alla biglietteria — si entra dalla Porta 1",
      "Conferma immediata sul telefono",
    ],
    button: "Prenota Biglietto Uffizi + Audioguida — da €26",
  },
  onTheDay: {
    h2: "E Se Compri il Biglietto in Giornata?",
    paragraphs: [
      "Puoi ancora acquistarlo all'arrivo, ma sarò onesto, da chi lavora qui: in alta stagione è un azzardo. Le fasce orarie si esauriscono e la coda per comprare può portarti via un'ora o più della giornata.",
    ],
    paymentIntro: "Se acquisti sul posto, la biglietteria offre due possibilità:",
    payment: [
      "Paghi in contanti? Usa le macchinette self-service.",
      "Paghi con carta? Acquista agli sportelli con operatore.",
    ],
    closing:
      "Il biglietto acquistato in giornata costa €25 per l'ingresso standard (prima delle 16:00) o €16 per l'ingresso pomeridiano (dalle 16:00). Ma prendi la fascia oraria rimasta libera — d'estate può essere diverse ore dopo, o non essercene affatto. Prenotare in anticipo costa solo €4 in più e ti garantisce l'orario. Per la maggior parte dei visitatori è la decisione più facile del viaggio.",
  },
  guidedTours: {
    h2: "Vuoi Evitare Ogni Dubbio?",
    paragraphs: [
      "Se è la tua prima volta agli Uffizi — oltre 100 sale, uno dei musei più travolgenti al mondo — valuta una visita guidata. Incontri la guida all'esterno, entrate insieme dalla Porta 1 e passi due ore con uno storico dell'arte fiorentino abilitato che ti mostra esattamente cosa conta e perché. Niente mappe, nessun capolavoro perso, nessun dubbio su quale sia la sala successiva.",
    ],
    ctaTitle: "Scopri le Visite Guidate agli Uffizi",
    ctaLabel: "Opzioni in piccolo gruppo e private, ingresso incluso.",
  },
  quickFacts: {
    h2: "Ingresso Galleria degli Uffizi: Fatti in Breve (2026)",
    items: [
      { label: "Tutti entrano da:", value: "Porta 1" },
      {
        label: "Scambio voucher Porta 3:",
        value: "Non più attivo (settembre 2025)",
      },
      {
        label: "Biglietti online:",
        value: "QR code sul telefono — niente da ritirare",
      },
      {
        label: "Orari di apertura:",
        value: "Mar–Dom, 8:15–18:30 (ultimo ingresso 17:30)",
      },
      { label: "Chiuso:", value: "Lunedì, 1 gennaio, 25 dicembre" },
      {
        label: "Pagamento sul posto:",
        value: "Contanti alle macchinette, carta agli sportelli",
      },
    ],
  },
  finalCta: {
    text: "Pronto a organizzare la visita?",
    ticketLabel: "Prenota Biglietto + Audioguida (da €26)",
    toursLabel: "Vedi le Visite Guidate",
  },
  faq: [
    {
      q: "La Porta 3 degli Uffizi esiste ancora?",
      a: "La porta fisica c'è, ma non funziona più come punto di ritiro biglietti o scambio voucher. Da settembre 2025 tutti i visitatori entrano dalla Porta 1. Se una guida o un sito ti dice di ritirare il biglietto alla Porta 3, quell'informazione non è aggiornata.",
    },
    {
      q: "Da dove entro se ho prenotato online?",
      a: "Vai alla Porta 1 all'orario che hai riservato e mostra il QR code sul telefono. Non c'è nulla da ritirare e non esiste una fila separata: passi il controllo di sicurezza ed entri direttamente nel museo.",
    },
    {
      q: "Devo stampare il biglietto degli Uffizi?",
      a: "No. Il tuo biglietto è un QR code che ricevi via email. Mostralo sul telefono alla Porta 1 oppure stampalo se preferisci: funzionano entrambi.",
    },
    {
      q: "Posso ancora comprare i biglietti di persona agli Uffizi?",
      a: "Sì: paghi in contanti alle macchinette self-service o con carta agli sportelli. Ma nei mesi di punta le fasce orarie si esauriscono spesso, quindi prenotare online in anticipo è vivamente consigliato.",
    },
    {
      q: "A che ora conviene arrivare?",
      a: "Circa 10–15 minuti prima della tua fascia oraria. Lo slot delle 8:15 è il più tranquillo; da metà mattina il museo si riempie di gruppi.",
    },
  ],
};

const de: Door3Content = {
  meta: {
    title: "Uffizien Tür 3 (Update 2026): Wo Sie jetzt hineingehen",
    description:
      "Unklar, was mit Tür 3 der Uffizien ist? Das hat sich 2025 geändert, und hier gehen Sie 2026 hinein — plus Ticket mit Zeitfenster und Audioguide buchen.",
  },
  breadcrumb: "Tür 3 & Eingang",
  h1: "Tür 3 der Uffizien: Was sie war und wo Sie 2026 wirklich hineingehen",
  quickAnswer: {
    label: "Kurze Antwort",
    text: "An Tür 3 tauschten Online-Besucher früher ihren Voucher gegen ein Ticket. Dieses System endete im September 2025. Heute betreten alle Besucher die Uffizien durch Eingang 1. Wenn Sie online gebucht haben, gibt es nichts abzuholen — zeigen Sie einfach den QR-Code auf Ihrem Handy an Eingang 1 und gehen Sie durch die Sicherheitskontrolle.",
  },
  ctaTicketTitle: "Buchen Sie Ihr Uffizien-Ticket + Audioguide",
  changed: {
    h2: "Die Uffizien haben 2025 ihr Eingangssystem geändert",
    paragraphs: [
      "Wenn Sie ältere Reiseführer gelesen haben, kennen Sie die Hinweise zu \"Tür 3\" — in welche Schlange man sich stellt, wie man den Voucher eintauscht. Die Sache ist: Das meiste davon ist inzwischen überholt.",
      "Im September 2025 ging der Ticketverkauf der Gallerie degli Uffizi an CoopCulture über, und das Eingangssystem wurde neu organisiert. Die separate Voucher-Ausgabe an Tür 3 ist nicht mehr in Betrieb. Da ich jahrelang in den Uffizien gearbeitet habe, kann ich Ihnen sagen: Das neue System ist wirklich einfacher — sobald man weiß, wie es funktioniert.",
    ],
  },
  whereEnter: {
    h2: "Wo betritt man die Uffizien jetzt?",
    lead: "Alle gehen durch Eingang 1 hinein.",
    paragraphs: [
      "Es gibt keine separate Tür mehr, um Tickets oder vorab gebuchte Reservierungen abzuholen. Ob Sie vor Monaten gebucht haben oder spontan kaufen — Eingang 1 ist Ihr Eingang, dort durchlaufen Sie die Sicherheitskontrolle, bevor es hinauf in die Säle geht. Er liegt unter den Arkaden am Piazzale degli Uffizi, dem Innenhof zwischen den beiden Flügeln, der sich zum Arno hin öffnet.",
    ],
  },
  bookedOnline: {
    h2: "Wenn Sie bereits online gebucht haben",
    paragraphs: [
      "Gute Nachricht — Ihr Besuch ist gerade einfacher geworden. Bei einer Online-Buchung gibt es kein physisches Ticket und nichts abzuholen. Ihr Ticket ist der QR-Code in Ihrer E-Mail; zeigen Sie ihn auf dem Handy (oder drucken Sie ihn aus, wenn Ihnen das lieber ist).",
    ],
    stepsIntro: "Genau das tun Sie:",
    steps: [
      "Kommen Sie ein paar Minuten vor Ihrem reservierten Zeitfenster an Eingang 1 an",
      "Halten Sie den QR-Code auf dem Handy bereit",
      "Zeigen Sie ihn am Eingang und gehen Sie durch die Sicherheitskontrolle",
      "Sie sind drin — hinauf in die Säle",
    ],
    closing:
      "Da Ihre Eintrittszeit reserviert ist, umgehen Sie die Warteschlange an der Kasse komplett — kein Anstehen in der langen Reihe derer, die ihr Ticket am selben Tag kaufen. (Eine ehrliche Anmerkung: Alle, auch Ticketinhaber, durchlaufen an Eingang 1 eine kurze Sicherheitskontrolle — planen Sie also ein paar Minuten ein.)",
  },
  mainCta: {
    title: "Noch nicht gebucht?",
    intro:
      "Reservieren Sie Ihr Zeitfenster vor der Reise. Unsere beliebteste Option enthält den Eintritt in die Uffizien plus einen digitalen Audioguide, damit Sie verstehen, was Sie sehen — von Botticellis Geburt der Venus bis zu Caravaggios Medusa.",
    bullets: [
      "Reserviertes Zeitfenster (Datum & Uhrzeit frei wählbar)",
      "Digitaler Audioguide inklusive",
      "Warteschlange an der Kasse umgehen — Einlass an Eingang 1",
      "Sofortige Bestätigung aufs Handy",
    ],
    button: "Uffizien-Ticket + Audioguide buchen — ab €26",
  },
  onTheDay: {
    h2: "Was, wenn Sie Ihr Ticket vor Ort kaufen?",
    paragraphs: [
      "Sie können weiterhin bei der Ankunft kaufen, aber ehrlich gesagt, als jemand der hier arbeitet: In der Hochsaison ist das ein Glücksspiel. Zeitfenster sind ausverkauft, und die Warteschlange am Ticketschalter kann eine Stunde oder mehr Ihres Tages kosten.",
    ],
    paymentIntro:
      "Wenn Sie vor Ort kaufen, bietet die Ticketkasse zwei Möglichkeiten:",
    payment: [
      "Sie zahlen bar? Nutzen Sie die Self-Service-Ticketautomaten.",
      "Sie zahlen mit Karte? Kaufen Sie an den besetzten Schaltern.",
    ],
    closing:
      "Tickets am selben Tag kosten €25 für den Standardeintritt (vor 16:00 Uhr) oder €16 für den Nachmittagseintritt (ab 16:00 Uhr). Aber Sie bekommen nur das Zeitfenster, das noch frei ist — im Sommer kann das Stunden später sein oder gar nicht mehr verfügbar. Vorab buchen kostet nur €4 mehr und sichert Ihnen Ihre Uhrzeit. Für die meisten Besucher ist das die einfachste Entscheidung der ganzen Reise.",
  },
  guidedTours: {
    h2: "Sie wollen sich das Rätselraten ganz sparen?",
    paragraphs: [
      "Wenn Sie zum ersten Mal in den Uffizien sind — über 100 Säle, eines der überwältigendsten Museen der Welt — denken Sie über eine Führung nach. Sie treffen Ihren Guide draußen, gehen gemeinsam durch Eingang 1 hinein und verbringen zwei Stunden mit einem lizenzierten Florentiner Kunsthistoriker, der Ihnen genau zeigt, worauf es ankommt und warum. Keine Karten, keine verpassten Meisterwerke, kein Rätseln, welcher Saal als Nächstes kommt.",
    ],
    ctaTitle: "Uffizien-Führungen entdecken",
    ctaLabel: "Kleingruppen & private Touren, Eintritt inklusive.",
  },
  quickFacts: {
    h2: "Eingang der Uffizien: Fakten auf einen Blick (2026)",
    items: [
      { label: "Alle betreten das Museum durch:", value: "Eingang 1" },
      {
        label: "Voucher-Tausch an Tür 3:",
        value: "Eingestellt (September 2025)",
      },
      {
        label: "Online-Tickets:",
        value: "QR-Code auf dem Handy — nichts abzuholen",
      },
      {
        label: "Öffnungszeiten:",
        value: "Di–So, 8:15–18:30 Uhr (letzter Einlass 17:30 Uhr)",
      },
      { label: "Geschlossen:", value: "Montags, 1. Januar, 25. Dezember" },
      {
        label: "Zahlung vor Ort:",
        value: "Bar an Automaten, Karte an den Schaltern",
      },
    ],
  },
  finalCta: {
    text: "Bereit, Ihren Besuch zu planen?",
    ticketLabel: "Ticket + Audioguide buchen (ab €26)",
    toursLabel: "Führungen ansehen",
  },
  faq: [
    {
      q: "Gibt es die Tür 3 an den Uffizien noch?",
      a: "Die Tür existiert physisch, funktioniert aber nicht mehr als Ticketausgabe oder Voucher-Tauschstelle. Seit September 2025 betreten alle Besucher das Museum durch Eingang 1. Wenn ein Reiseführer oder eine Website Ihnen sagt, Sie sollen Ihr Ticket an Tür 3 abholen, ist diese Information veraltet.",
    },
    {
      q: "Wo gehe ich hinein, wenn ich online gebucht habe?",
      a: "Gehen Sie zu Ihrer reservierten Zeit zu Eingang 1 und zeigen Sie den QR-Code auf Ihrem Handy. Es gibt nichts abzuholen und keine separate Schlange: durch die Sicherheitskontrolle und direkt ins Museum.",
    },
    {
      q: "Muss ich mein Uffizien-Ticket ausdrucken?",
      a: "Nein. Ihr Ticket ist ein QR-Code in Ihrer E-Mail. Zeigen Sie ihn auf dem Handy an Eingang 1 oder drucken Sie ihn aus, wenn Sie möchten — beides funktioniert.",
    },
    {
      q: "Kann ich Tickets weiterhin vor Ort an den Uffizien kaufen?",
      a: "Ja — bar an den Self-Service-Automaten oder mit Karte an den Schaltern. In den stark besuchten Monaten sind die Zeitfenster aber oft ausverkauft, deshalb wird die Online-Buchung im Voraus dringend empfohlen.",
    },
    {
      q: "Wann sollte ich ankommen?",
      a: "Etwa 10–15 Minuten vor Ihrem Zeitfenster. Der Slot um 8:15 Uhr ist am ruhigsten; ab dem späten Vormittag füllt sich das Museum mit Reisegruppen.",
    },
  ],
};

const es: Door3Content = {
  meta: {
    title: "Puerta 3 Galería Uffizi (2026): Dónde Se Entra Ahora",
    description:
      "¿Dudas sobre la Puerta 3 de los Uffizi? Esto es lo que cambió en 2025 y por dónde se entra en 2026 — y cómo reservar una entrada con hora y audioguía.",
  },
  breadcrumb: "Puerta 3 y Entrada",
  h1: "Puerta 3 de la Galería Uffizi: Qué Era y Por Dónde Se Entra Realmente en 2026",
  quickAnswer: {
    label: "Respuesta rápida",
    text: "La Puerta 3 era donde los visitantes con reserva online cambiaban su voucher por la entrada. Ese sistema terminó en septiembre de 2025. Hoy todos los visitantes entran a los Uffizi por la Puerta 1. Si reservaste online no tienes que recoger nada: solo muestra el código QR en el móvil en la Puerta 1 y pasa el control de seguridad.",
  },
  ctaTicketTitle: "Reserva Tu Entrada Uffizi + Audioguía",
  changed: {
    h2: "Los Uffizi Cambiaron Su Sistema de Entrada en 2025",
    paragraphs: [
      "Si has leído guías más antiguas, habrás visto instrucciones sobre la \"Puerta 3\": en qué fila ponerte, cómo canjear el voucher. La cuestión es que la mayor parte de eso ya no es válido.",
      "En septiembre de 2025 la venta de entradas de las Gallerie degli Uffizi pasó a CoopCulture y se reorganizó el sistema de acceso. El punto de canje de vouchers de la Puerta 3 ya no funciona. Habiendo trabajado en los Uffizi durante años, puedo decirte que el nuevo sistema es realmente más sencillo, una vez que sabes cómo funciona.",
    ],
  },
  whereEnter: {
    h2: "¿Por Dónde Se Entra Ahora a los Uffizi?",
    lead: "Todos entran por la Puerta 1.",
    paragraphs: [
      "Ya no hay una puerta aparte para recoger entradas ni reservas hechas con antelación. Tanto si reservaste hace meses como si compras en el momento, tu entrada es la Puerta 1, donde pasarás el control de seguridad antes de subir a las salas. Está bajo los soportales del Piazzale degli Uffizi, el patio entre las dos alas que se abre hacia el Arno.",
    ],
  },
  bookedOnline: {
    h2: "Si Ya Has Reservado Online",
    paragraphs: [
      "Buenas noticias: tu visita acaba de volverse más fácil. Cuando reservas online no hay entrada física ni nada que recoger. Tu entrada es el código QR de tu correo; muéstralo en el móvil (o imprímelo si lo prefieres).",
    ],
    stepsIntro: "Qué hacer exactamente:",
    steps: [
      "Llega a la Puerta 1 unos minutos antes de tu hora reservada",
      "Ten el código QR listo en el móvil",
      "Muéstralo en la entrada y pasa el control de seguridad",
      "Ya estás dentro: sube a las salas",
    ],
    closing:
      "Como tu hora de entrada está reservada, evitas por completo la cola de la taquilla: nada de esperar en la larga fila de quienes compran la entrada el mismo día. (Una nota honesta: todos, incluidos los que ya tienen entrada, pasan un breve control de seguridad en la Puerta 1, así que cuenta con unos minutos.)",
  },
  mainCta: {
    title: "¿Aún No Has Reservado?",
    intro:
      "Reserva tu franja horaria antes de viajar. Nuestra opción más popular incluye la entrada a los Uffizi más una audioguía digital, para que entiendas lo que estás viendo: del Nacimiento de Venus de Botticelli a la Medusa de Caravaggio.",
    bullets: [
      "Entrada con hora reservada (eliges fecha y hora)",
      "Audioguía digital incluida",
      "Evita la cola de la taquilla: se entra por la Puerta 1",
      "Confirmación inmediata en el móvil",
    ],
    button: "Reservar Entrada Uffizi + Audioguía — desde €26",
  },
  onTheDay: {
    h2: "¿Y Si Compras la Entrada el Mismo Día?",
    paragraphs: [
      "Todavía puedes comprarla al llegar, pero seré honesto, como alguien que trabaja aquí: en temporada alta es una apuesta. Las franjas horarias se agotan y la cola para comprar puede llevarse una hora o más de tu día.",
    ],
    paymentIntro: "Si compras en el lugar, la taquilla ofrece dos opciones:",
    payment: [
      "¿Pagas en efectivo? Usa las máquinas de autoservicio.",
      "¿Pagas con tarjeta? Compra en los mostradores atendidos.",
    ],
    closing:
      "Las entradas del mismo día cuestan €25 para la entrada estándar (antes de las 16:00) o €16 para la entrada de tarde (desde las 16:00). Pero compras la franja que quede libre, y en verano eso puede ser horas más tarde, o nada en absoluto. Reservar con antelación cuesta solo €4 más y te garantiza la hora. Para la mayoría de los visitantes, es la decisión más fácil del viaje.",
  },
  guidedTours: {
    h2: "¿Prefieres No Complicarte?",
    paragraphs: [
      "Si es tu primera vez en los Uffizi —más de 100 salas, uno de los museos más abrumadores del mundo— plantéate una visita guiada. Te reúnes con tu guía fuera, entráis juntos por la Puerta 1 y pasas dos horas con un historiador del arte florentino titulado que te muestra exactamente qué importa y por qué. Sin mapas, sin perderte las obras maestras, sin dudar qué sala viene después.",
    ],
    ctaTitle: "Descubre las Visitas Guiadas a los Uffizi",
    ctaLabel: "Opciones en grupo reducido y privadas, entrada incluida.",
  },
  quickFacts: {
    h2: "Entrada a la Galería Uffizi: Datos Rápidos (2026)",
    items: [
      { label: "Todos entran por:", value: "Puerta 1" },
      {
        label: "Canje de vouchers en la Puerta 3:",
        value: "Suprimido (septiembre de 2025)",
      },
      {
        label: "Entradas online:",
        value: "Código QR en el móvil — no hay que recoger nada",
      },
      {
        label: "Horario:",
        value: "Mar–Dom, 8:15–18:30 (última entrada 17:30)",
      },
      { label: "Cerrado:", value: "Lunes, 1 de enero, 25 de diciembre" },
      {
        label: "Pago en el lugar:",
        value: "Efectivo en máquinas, tarjeta en mostradores",
      },
    ],
  },
  finalCta: {
    text: "¿Listo para planificar tu visita?",
    ticketLabel: "Reservar Entrada + Audioguía (desde €26)",
    toursLabel: "Ver Visitas Guiadas",
  },
  faq: [
    {
      q: "¿Sigue existiendo la Puerta 3 en la Galería Uffizi?",
      a: "La puerta física existe, pero ya no funciona como punto de recogida de entradas ni de canje de vouchers. Desde septiembre de 2025 todos los visitantes entran por la Puerta 1. Si una guía o una web te dice que recojas tu entrada en la Puerta 3, esa información está desactualizada.",
    },
    {
      q: "¿Por dónde entro si reservé online?",
      a: "Ve a la Puerta 1 a tu hora reservada y muestra el código QR en el móvil. No hay nada que recoger ni una fila aparte: pasas el control de seguridad y entras directamente al museo.",
    },
    {
      q: "¿Necesito imprimir mi entrada de los Uffizi?",
      a: "No. Tu entrada es un código QR en tu correo. Muéstralo en el móvil en la Puerta 1, o imprímelo si lo prefieres: ambas opciones funcionan.",
    },
    {
      q: "¿Puedo comprar entradas en persona en los Uffizi?",
      a: "Sí: en efectivo en las máquinas de autoservicio o con tarjeta en los mostradores. Pero en los meses de más afluencia las franjas horarias suelen agotarse, así que se recomienda encarecidamente reservar online con antelación.",
    },
    {
      q: "¿A qué hora debería llegar?",
      a: "Unos 10–15 minutos antes de tu franja horaria. La franja de las 8:15 es la más tranquila; a partir de media mañana el museo se llena de grupos.",
    },
  ],
};

const fr: Door3Content = {
  meta: {
    title: "Porte 3 Galerie des Offices (2026) : Où Entrer Maintenant",
    description:
      "Perdu avec la Porte 3 des Offices ? Voici ce qui a changé en 2025 et où entrer en 2026 — et comment réserver un billet à horaire réservé avec audioguide.",
  },
  breadcrumb: "Porte 3 & Entrée",
  h1: "Porte 3 de la Galerie des Offices : Ce Qu'elle Était et Où Vous Entrez Vraiment en 2026",
  quickAnswer: {
    label: "Réponse rapide",
    text: "La Porte 3 était l'endroit où les visiteurs ayant réservé en ligne échangeaient leur voucher contre un billet. Ce système a pris fin en septembre 2025. Aujourd'hui, tous les visiteurs entrent aux Offices par la Porte 1. Si vous avez réservé en ligne, il n'y a rien à retirer : montrez simplement le QR code sur votre téléphone à la Porte 1 et passez le contrôle de sécurité.",
  },
  ctaTicketTitle: "Réservez Votre Billet Offices + Audioguide",
  changed: {
    h2: "Les Offices Ont Changé Leur Système d'Entrée en 2025",
    paragraphs: [
      "Si vous avez lu des guides plus anciens, vous y avez vu des consignes sur la « Porte 3 » : dans quelle file se placer, comment échanger son voucher. Le problème, c'est que la plupart de ces informations ne sont plus d'actualité.",
      "En septembre 2025, la billetterie des Gallerie degli Uffizi est passée à CoopCulture et le système d'entrée a été réorganisé. Le point d'échange des vouchers à la Porte 3 n'est plus en service. Ayant travaillé aux Offices pendant des années, je peux vous dire que le nouveau fonctionnement est vraiment plus simple — une fois qu'on sait comment il marche.",
    ],
  },
  whereEnter: {
    h2: "Par Où Entre-t-on aux Offices Aujourd'hui ?",
    lead: "Tout le monde entre par la Porte 1.",
    paragraphs: [
      "Il n'y a plus de porte séparée pour retirer les billets ou les réservations faites à l'avance. Que vous ayez réservé il y a des mois ou que vous achetiez sur place, votre entrée est la Porte 1 — c'est là que vous passerez le contrôle de sécurité avant de monter dans les salles. Elle se trouve sous les arcades du Piazzale degli Uffizi, la cour entre les deux ailes qui s'ouvre vers l'Arno.",
    ],
  },
  bookedOnline: {
    h2: "Si Vous Avez Déjà Réservé en Ligne",
    paragraphs: [
      "Bonne nouvelle : votre visite vient de devenir plus simple. Quand vous réservez en ligne, il n'y a pas de billet physique et rien à retirer. Votre billet, c'est le QR code reçu par e-mail ; montrez-le sur votre téléphone (ou imprimez-le si vous préférez).",
    ],
    stepsIntro: "Ce qu'il faut faire, exactement :",
    steps: [
      "Présentez-vous à la Porte 1 quelques minutes avant votre créneau réservé",
      "Ayez le QR code prêt sur votre téléphone",
      "Montrez-le à l'entrée et passez le contrôle de sécurité",
      "Vous êtes entré — montez dans les salles",
    ],
    closing:
      "Comme votre heure d'entrée est réservée, vous évitez entièrement la file d'attente à la billetterie — pas besoin de patienter dans la longue queue de ceux qui achètent leur billet le jour même. (Une note honnête : tout le monde, y compris les détenteurs de billets, passe un bref contrôle de sécurité à la Porte 1, prévoyez donc quelques minutes.)",
  },
  mainCta: {
    title: "Pas Encore Réservé ?",
    intro:
      "Réservez votre créneau horaire avant de partir. Notre option la plus demandée comprend l'entrée aux Offices ainsi qu'un audioguide numérique, pour comprendre ce que vous regardez — de la Naissance de Vénus de Botticelli à la Méduse du Caravage.",
    bullets: [
      "Entrée à horaire réservé (vous choisissez la date et l'heure)",
      "Audioguide numérique inclus",
      "Évitez la file d'attente à la billetterie — entrée par la Porte 1",
      "Confirmation immédiate sur votre téléphone",
    ],
    button: "Réserver Billet Offices + Audioguide — dès €26",
  },
  onTheDay: {
    h2: "Et Si Vous Achetez Votre Billet sur Place ?",
    paragraphs: [
      "Vous pouvez toujours acheter à l'arrivée, mais je serai honnête, en tant que personne qui travaille ici : en haute saison, c'est un pari. Les créneaux se remplissent, et la queue pour acheter peut vous coûter une heure ou plus de votre journée.",
    ],
    paymentIntro: "Si vous achetez sur place, la billetterie propose deux options :",
    payment: [
      "Vous payez en espèces ? Utilisez les bornes automatiques.",
      "Vous payez par carte ? Achetez aux guichets avec personnel.",
    ],
    closing:
      "Les billets du jour coûtent €25 pour l'entrée standard (avant 16h00) ou €16 pour l'entrée de l'après-midi (à partir de 16h00). Mais vous prenez le créneau encore disponible — en été, cela peut être plusieurs heures plus tard, voire rien du tout. Réserver à l'avance ne coûte que €4 de plus et vous garantit votre horaire. Pour la plupart des visiteurs, c'est la décision la plus facile du voyage.",
  },
  guidedTours: {
    h2: "Envie de Ne Rien Laisser au Hasard ?",
    paragraphs: [
      "Si c'est votre première visite aux Offices — plus de 100 salles, l'un des musées les plus déroutants au monde — envisagez une visite guidée. Vous retrouvez votre guide à l'extérieur, vous entrez ensemble par la Porte 1, et vous passez deux heures avec un historien de l'art florentin diplômé qui vous montre exactement ce qui compte et pourquoi. Pas de plan à déchiffrer, aucun chef-d'œuvre manqué, aucune hésitation sur la salle suivante.",
    ],
    ctaTitle: "Découvrir les Visites Guidées des Offices",
    ctaLabel: "Petits groupes et visites privées, entrée incluse.",
  },
  quickFacts: {
    h2: "Entrée de la Galerie des Offices : L'Essentiel (2026)",
    items: [
      { label: "Tout le monde entre par :", value: "Porte 1" },
      {
        label: "Échange de vouchers Porte 3 :",
        value: "Supprimé (septembre 2025)",
      },
      {
        label: "Billets en ligne :",
        value: "QR code sur votre téléphone — rien à retirer",
      },
      {
        label: "Horaires :",
        value: "Mar–Dim, 8h15–18h30 (dernière entrée 17h30)",
      },
      { label: "Fermé :", value: "Lundis, 1er janvier, 25 décembre" },
      {
        label: "Paiement sur place :",
        value: "Espèces aux bornes, carte aux guichets",
      },
    ],
  },
  finalCta: {
    text: "Prêt à préparer votre visite ?",
    ticketLabel: "Réserver Billet + Audioguide (dès €26)",
    toursLabel: "Voir les Visites Guidées",
  },
  faq: [
    {
      q: "Y a-t-il encore une Porte 3 à la Galerie des Offices ?",
      a: "La porte existe physiquement, mais elle ne sert plus de point de retrait des billets ni d'échange de vouchers. Depuis septembre 2025, tous les visiteurs entrent par la Porte 1. Si un guide ou un site vous dit de retirer votre billet à la Porte 3, cette information n'est plus à jour.",
    },
    {
      q: "Par où entrer si j'ai réservé en ligne ?",
      a: "Rendez-vous à la Porte 1 à l'heure que vous avez réservée et montrez le QR code sur votre téléphone. Il n'y a rien à retirer et pas de file séparée : contrôle de sécurité, puis directement dans le musée.",
    },
    {
      q: "Dois-je imprimer mon billet pour les Offices ?",
      a: "Non. Votre billet est un QR code reçu par e-mail. Montrez-le sur votre téléphone à la Porte 1, ou imprimez-le si vous préférez — les deux fonctionnent.",
    },
    {
      q: "Puis-je encore acheter des billets sur place aux Offices ?",
      a: "Oui — en espèces aux bornes automatiques ou par carte aux guichets. Mais pendant les mois d'affluence, les créneaux sont souvent complets : réserver en ligne à l'avance est vivement recommandé.",
    },
    {
      q: "À quelle heure faut-il arriver ?",
      a: "Environ 10 à 15 minutes avant votre créneau. Le créneau de 8h15 est le plus calme ; à partir du milieu de la matinée, le musée se remplit de groupes.",
    },
  ],
};

const content: PageContent<Door3Content> = { en, it, de, fr, es };

export function getDoor3Content(locale: string): Door3Content {
  return getContent(content, locale);
}
