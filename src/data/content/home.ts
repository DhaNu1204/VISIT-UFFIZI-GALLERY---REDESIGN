import { getContent, type PageContent } from "./types";

export type HomeContent = {
  meta: { title: string; description: string };
  hero: {
    tagline: string;
    h1: string;
    subtitle: string;
    ctaTickets: string;
    ctaTours: string;
  };
  quickInfo: {
    hours: { label: string; value: string; note: string };
    tickets: { label: string; value: string; note: string };
    location: { label: string; value: string; note: string };
    collection: { label: string; value: string; note: string };
  };
  intro: string[];
  ticketsSection: {
    h2: string;
    p1: string;
    ctaTitle: string;
    p2: string;
    link: string;
  };
  toursSection: {
    h2: string;
    p: string;
    tourCards: { title: string; description: string }[];
    link: string;
  };
  planVisit: {
    h2: string;
    items: { title: string; desc: string }[];
  };
  artworks: {
    h2: string;
    p: string;
  };
  vasari: {
    tagline: string;
    h2: string;
    p: string;
    cta: string;
  };
  whyMatters: {
    h2: string;
    paragraphs: string[];
  };
  beforeYouGo: {
    h2: string;
    paragraphs: string[];
  };
  artistsSection: {
    h2: string;
    p: string;
    link: string;
  };
  bottomCta: string;
  faq: { q: string; a: string }[];
};

const en: HomeContent = {
  meta: {
    title: "Uffizi Gallery Tickets & Tours 2026 | Timed Entry | Visit Uffizi",
    description:
      "Plan your Uffizi Gallery visit. Book timed-entry tickets from \u20AC26, guided tours & masterpieces by Botticelli, Michelangelo & Leonardo. Hours & tips.",
  },
  hero: {
    tagline: "Florence, Italy",
    h1: "Uffizi Gallery Florence",
    subtitle:
      "Home to Botticelli's Birth of Venus, Leonardo's Annunciation, and over 2,000 masterpieces spanning centuries of Italian art. Plan your visit to the world's most important Renaissance art collection.",
    ctaTickets: "Book Timed-Entry Tickets",
    ctaTours: "Explore Guided Tours",
  },
  quickInfo: {
    hours: { label: "Hours", value: "Tue–Sun: 8:15–18:30", note: "Closed Mondays" },
    tickets: { label: "Tickets", value: "From €26 online", note: "Skip the ticket-office queue" },
    location: { label: "Location", value: "Piazzale degli Uffizi, 6", note: "Central Florence" },
    collection: { label: "Collection", value: "2,000+ artworks", note: "Renaissance masterpieces" },
  },
  intro: [
    "The Uffizi Gallery isn't just another museum — it's where the Renaissance came to life. Walking through its corridors, you'll stand face-to-face with the paintings that changed Western art forever. From Botticelli's luminous Birth of Venus to Michelangelo's only panel painting, every room tells the story of Florence's golden age.",
    "As someone who has guided thousands of visitors through these halls, I can tell you this: the Uffizi rewards preparation. Knowing which rooms to prioritize, when to visit for smaller crowds, and how to get the right tickets makes all the difference between a rushed walkthrough and a truly memorable experience.",
  ],
  ticketsSection: {
    h2: "Uffizi Gallery Tickets 2026",
    p1: "Skip the ticket-office queue — seriously. The line at the Uffizi ticket office can stretch over two hours during peak season (March through October). With a pre-booked timed-entry ticket, you walk straight to Door 1 at your reserved time — everyone passes a short security check — and you're inside in minutes. Standard tickets cost €25 on the day at the ticket office or €29 booked in advance online. EU citizens aged 18-25 pay just €2, and under-18s from any country enter free (nominative ticket — the name must match your ID).",
    ctaTitle: "Uffizi Gallery Reserved Ticket & Digital Audio Guide",
    p2: "I always recommend booking the earliest morning slot — 8:15 AM. You'll have Botticelli Hall practically to yourself for the first 20 minutes. By 10:00 AM, the tour groups arrive and the experience changes completely. If mornings don't work, try after 4:00 PM when the day-trippers have left.",
    link: "See all ticket options & prices →",
  },
  toursSection: {
    h2: "Guided Tours of the Uffizi",
    p: "Here's what most visitors miss: without a guide, you'll walk past masterpieces without understanding why they matter. A licensed Florentine art historian will show you the hidden details — the political symbols in Botticelli's Primavera, the revolutionary perspective in Leonardo's Annunciation, the reason Michelangelo's Doni Tondo is shaped like a circle. Our guides are locals who studied these paintings at the University of Florence.",
    tourCards: [
      {
        title: "Guided Uffizi Gallery Tour",
        description:
          "Reserved entry and a licensed art historian to explore the Uffizi with. See Botticelli, Leonardo, Michelangelo & more in a 2-hour expert-led tour.",
      },
      {
        title: "Private Uffizi Tour",
        description:
          "Your own expert guide, your own pace. A private tour tailored to your interests — perfect for families, couples, or art lovers who want to go deep.",
      },
      {
        title: "Uffizi + Accademia Combo Tour",
        description:
          "See both Florence's greatest museums in one day. Uffizi masterpieces in the morning, Michelangelo's David in the afternoon. Reserved timed entry included.",
      },
    ],
    link: "View all tours & experiences →",
  },
  planVisit: {
    h2: "Plan Your Visit",
    items: [
      { title: "Opening Hours", desc: "Daily schedules, closures & best times" },
      { title: "Getting There", desc: "Directions from anywhere in Florence" },
      { title: "Door 1 Entry", desc: "Essential entry info for pre-booked tickets" },
      { title: "2-Hour Guide", desc: "Room-by-room route for a perfect visit" },
    ],
  },
  artworks: {
    h2: "Masterpieces You'll See",
    p: "The Uffizi holds over 2,000 works, but these four are the ones visitors travel from around the world to see. Each one lives in the gallery's permanent collection — and each one will stop you in your tracks.",
  },
  vasari: {
    tagline: "Just Reopened",
    h2: "The Vasari Corridor",
    p: "The legendary elevated passageway connecting the Uffizi to Palazzo Pitti, built in 1565 for Cosimo I de' Medici. Walk above the Ponte Vecchio through a kilometer of history. After years of restoration, it's now open to visitors with advance booking.",
    cta: "Explore the Vasari Corridor",
  },
  whyMatters: {
    h2: "Why the Uffizi Gallery Matters",
    paragraphs: [
      "The Uffizi wasn't built as a museum. Giorgio Vasari designed it in 1560 as offices (uffizi in Italian) for the Florentine magistrates. It was the Medici family — Florence's great patrons of the arts — who gradually filled the upper floors with their private art collection. By the time the last Medici heir, Anna Maria Luisa, bequeathed the entire collection to the city of Florence in 1737, it had become one of the most important art collections in the world.",
      "Today, the Uffizi spans 101 rooms across two floors, arranged chronologically from the 13th century through the 18th century. You'll trace the evolution of Western art from the gold-ground Byzantine icons of Giotto's era through the explosive creativity of the High Renaissance and into the dramatic shadows of the Baroque.",
      "What makes the Uffizi unique isn't just the individual masterpieces — it's how they're arranged. You can literally walk from Cimabue's medieval Madonna to Giotto's revolutionary naturalism, then forward through Masaccio, Fra Angelico, and Filippo Lippi to the explosion of Botticelli, Leonardo, and Michelangelo. No other museum in the world tells this story so completely.",
    ],
  },
  beforeYouGo: {
    h2: "What to Know Before You Go",
    paragraphs: [
      "The Uffizi is open Tuesday through Sunday, 8:15 AM to 6:30 PM (last entry at 5:30 PM). It's closed every Monday, Christmas Day (December 25), and New Year's Day (January 1). Check the opening hours page for current schedules.",
      "Plan at least 2 hours for a meaningful visit. Art enthusiasts will want 3-4 hours to explore the collection in depth. If you're short on time, our 2-hour itinerary covers the essential highlights without rushing.",
      "Large bags and backpacks must be checked at the free cloakroom near the entrance. Photography is allowed (no flash), but selfie sticks and tripods are prohibited. There's a café on the second floor terrace with views over the Piazza della Signoria — it's a perfect spot to rest halfway through your visit.",
    ],
  },
  artistsSection: {
    h2: "Artists at the Uffizi Gallery",
    p: "The Uffizi's collection reads like a who's who of art history. The major artists whose works define the gallery include:",
    link: "Explore all Uffizi artists →",
  },
  bottomCta: "Don't Wait — Book Your Uffizi Tickets",
  faq: [
    {
      q: "How much are Uffizi Gallery tickets in 2026?",
      a: "Standard tickets cost €25 on the day at the ticket office or €29 booked in advance online. Afternoon entry (from 4:00 PM) is €16 on the day or €20 in advance. Our reserved timed-entry ticket with digital audio guide starts at €26. EU citizens aged 18-25 pay a reduced price of €2. Children under 18 from any country enter free (nominative ticket).",
    },
    {
      q: "Do I need to book Uffizi tickets in advance?",
      a: "Strongly recommended. During peak season, the queue to buy at the ticket office can exceed 2 hours. A pre-booked timed-entry ticket lets you skip the ticket-office queue and walk to Door 1 at your reserved time (everyone passes a short security check). During winter months (November–February), same-day tickets are sometimes available, but booking ahead guarantees your preferred time slot.",
    },
    {
      q: "What are the Uffizi Gallery opening hours?",
      a: "The Uffizi is open Tuesday through Sunday, 8:15 AM to 6:30 PM (last entry at 5:30 PM). The gallery is closed every Monday, plus December 25 and January 1.",
    },
    {
      q: "How long do I need to visit the Uffizi?",
      a: "Plan at least 2 hours to see the major highlights. Art enthusiasts typically spend 3-4 hours. If you're short on time, follow our recommended 2-hour route which covers all the must-see masterpieces including Botticelli, Leonardo, and Michelangelo.",
    },
    {
      q: "What are the most famous paintings at the Uffizi?",
      a: "The Uffizi's most celebrated works include Botticelli's Birth of Venus and Primavera (Rooms 10-14), Leonardo da Vinci's Annunciation (Room 35), Michelangelo's Doni Tondo (Room 35), Titian's Venus of Urbino (Room 83), and Caravaggio's Medusa (Room 90).",
    },
    {
      q: "Is a guided tour of the Uffizi worth it?",
      a: "Absolutely. A guided tour with a licensed art historian transforms the experience. You'll understand the context behind each masterpiece — the political intrigue, the artistic innovations, the personal stories of the artists. Guided tours also include reserved timed entry and last about 2 hours.",
    },
  ],
};

const it: HomeContent = {
  meta: {
    title: "Biglietti Uffizi 2026 | Ingresso a Orario | Prezzi e Orari",
    description:
      "Biglietti per la Galleria degli Uffizi da €26 con ingresso a orario prestabilito e audioguida. Visite guidate, capolavori, orari e consigli pratici.",
  },
  hero: {
    tagline: "Firenze, Italia",
    h1: "Galleria degli Uffizi Firenze",
    subtitle:
      "La Nascita di Venere di Botticelli, l'Annunciazione di Leonardo e oltre 2.000 capolavori che hanno definito l'arte del Rinascimento. Tutto quello che devi sapere per organizzare la tua visita.",
    ctaTickets: "Prenota Biglietti con Orario",
    ctaTours: "Scopri le Visite Guidate",
  },
  quickInfo: {
    hours: { label: "Orari", value: "Mar–Dom: 8:15–18:30", note: "Chiuso il lunedì" },
    tickets: { label: "Biglietti", value: "Da €26 online", note: "Salta la fila alla biglietteria" },
    location: { label: "Dove", value: "Piazzale degli Uffizi, 6", note: "Centro di Firenze" },
    collection: { label: "Collezione", value: "2.000+ opere", note: "Capolavori rinascimentali" },
  },
  intro: [
    "La Galleria degli Uffizi non è un museo qualunque — è il luogo dove il Rinascimento ha preso forma. Passeggiando tra le sue sale, ti troverai faccia a faccia con i dipinti che hanno cambiato per sempre la storia dell'arte occidentale. Dalla luminosa Nascita di Venere di Botticelli all'unico dipinto su tavola di Michelangelo, ogni sala racconta la storia dell'età d'oro di Firenze.",
    "Come guida che ha accompagnato migliaia di visitatori in queste sale, posso dirti una cosa: la visita agli Uffizi va preparata. Sapere quali sale privilegiare, quando andare per evitare la ressa e quale biglietto scegliere fa tutta la differenza tra una visita frettolosa e un'esperienza davvero indimenticabile.",
  ],
  ticketsSection: {
    h2: "Biglietti Uffizi 2026",
    p1: "Salta la fila alla biglietteria — sul serio. La coda per comprare il biglietto agli Uffizi può superare le due ore in alta stagione (da marzo a ottobre). Con un biglietto a orario prestabilito prenotato online, vai direttamente alla Porta 1 al tuo orario — tutti passano un breve controllo di sicurezza — e sei dentro in pochi minuti. Il biglietto standard costa €25 alla biglietteria in giornata o €29 prenotato online in anticipo. I cittadini UE tra i 18 e i 25 anni pagano solo €2, e i minori di 18 anni di qualsiasi nazionalità entrano gratis (biglietto nominativo: il nome deve corrispondere al documento).",
    ctaTitle: "Biglietto Riservato Galleria degli Uffizi e Audioguida Digitale",
    p2: "Il mio consiglio è sempre lo stesso: prenota la prima fascia oraria — le 8:15. Avrai la sala di Botticelli praticamente tutta per te nei primi 20 minuti. Dalle 10:00 arrivano i gruppi e l'atmosfera cambia completamente. Se la mattina non è possibile, prova dopo le 16:00 quando i turisti giornalieri sono ripartiti.",
    link: "Vedi tutti i biglietti e i prezzi →",
  },
  toursSection: {
    h2: "Visite Guidate agli Uffizi",
    p: "Ecco cosa si perdono la maggior parte dei visitatori: senza una guida, passerai davanti ai capolavori senza capire perché sono importanti. Uno storico dell'arte fiorentino abilitato ti mostrerà i dettagli nascosti — i simboli politici nella Primavera di Botticelli, la prospettiva rivoluzionaria nell'Annunciazione di Leonardo, il motivo per cui il Tondo Doni di Michelangelo è rotondo. Le nostre guide sono fiorentini che hanno studiato questi dipinti all'Università di Firenze.",
    tourCards: [
      {
        title: "Visita Guidata Galleria degli Uffizi",
        description:
          "Ingresso riservato ed esplorazione degli Uffizi con uno storico dell'arte abilitato. Botticelli, Leonardo, Michelangelo e molto altro in un tour di 2 ore.",
      },
      {
        title: "Tour Privato degli Uffizi",
        description:
          "La tua guida personale, i tuoi ritmi. Un tour su misura per i tuoi interessi — perfetto per famiglie, coppie o appassionati d'arte.",
      },
      {
        title: "Tour Combo Uffizi + Accademia",
        description:
          "I due musei più importanti di Firenze in un giorno. Capolavori degli Uffizi la mattina, il David di Michelangelo il pomeriggio. Ingresso a orario riservato incluso.",
      },
    ],
    link: "Vedi tutti i tour e le esperienze →",
  },
  planVisit: {
    h2: "Organizza la Tua Visita",
    items: [
      { title: "Orari di Apertura", desc: "Orari, chiusure e momenti migliori" },
      { title: "Come Arrivare", desc: "Indicazioni da qualsiasi punto di Firenze" },
      { title: "Ingresso Porta 1", desc: "Info essenziali per chi ha il biglietto prenotato" },
      { title: "Guida 2 Ore", desc: "Percorso sala per sala per una visita perfetta" },
    ],
  },
  artworks: {
    h2: "I Capolavori che Vedrai",
    p: "Gli Uffizi conservano oltre 2.000 opere, ma queste quattro sono quelle per cui i visitatori arrivano da tutto il mondo. Ognuna fa parte della collezione permanente — e ognuna ti lascerà senza fiato.",
  },
  vasari: {
    tagline: "Appena Riaperto",
    h2: "Il Corridoio Vasariano",
    p: "Il leggendario passaggio sopraelevato che collega gli Uffizi a Palazzo Pitti, costruito nel 1565 per Cosimo I de' Medici. Cammina sopra il Ponte Vecchio attraverso un chilometro di storia. Dopo anni di restauro, è ora aperto ai visitatori con prenotazione anticipata.",
    cta: "Scopri il Corridoio Vasariano",
  },
  whyMatters: {
    h2: "Perché la Galleria degli Uffizi è Unica",
    paragraphs: [
      "Gli Uffizi non sono nati come museo. Giorgio Vasari li progettò nel 1560 come uffici (da qui il nome) per i magistrati fiorentini. Fu la famiglia Medici — i grandi mecenati dell'arte fiorentina — a riempire gradualmente i piani superiori con la loro collezione privata. Quando l'ultima erede Medici, Anna Maria Luisa, lasciò l'intera collezione alla città di Firenze nel 1737, era diventata una delle raccolte d'arte più importanti al mondo.",
      "Oggi gli Uffizi si estendono su 101 sale distribuite su due piani, organizzate in ordine cronologico dal XIII al XVIII secolo. Seguirai l'evoluzione dell'arte occidentale dalle icone bizantine su fondo oro dell'epoca di Giotto, attraverso la creatività esplosiva del Rinascimento maturo, fino alle ombre drammatiche del Barocco.",
      "Ciò che rende gli Uffizi unici non sono solo i singoli capolavori — è il modo in cui sono disposti. Puoi letteralmente camminare dalla Madonna medievale di Cimabue al naturalismo rivoluzionario di Giotto, poi proseguire attraverso Masaccio, Beato Angelico e Filippo Lippi fino all'esplosione di Botticelli, Leonardo e Michelangelo. Nessun altro museo al mondo racconta questa storia in modo così completo.",
    ],
  },
  beforeYouGo: {
    h2: "Cosa Sapere Prima della Visita",
    paragraphs: [
      "Gli Uffizi sono aperti da martedì a domenica, dalle 8:15 alle 18:30 (ultimo ingresso alle 17:30). Chiusi ogni lunedì, il giorno di Natale (25 dicembre) e Capodanno (1 gennaio). Controlla la pagina degli orari per gli aggiornamenti.",
      "Prevedi almeno 2 ore per una visita soddisfacente. Gli appassionati d'arte vorranno 3-4 ore per esplorare la collezione in profondità. Se hai poco tempo, il nostro itinerario di 2 ore copre i capolavori essenziali senza fretta.",
      "Borse grandi e zaini vanno lasciati al guardaroba gratuito vicino all'ingresso. È permesso fotografare (senza flash), ma selfie stick e treppiedi sono vietati. C'è un caffè sulla terrazza del secondo piano con vista su Piazza della Signoria — il posto perfetto per una pausa a metà visita.",
    ],
  },
  artistsSection: {
    h2: "Gli Artisti della Galleria degli Uffizi",
    p: "La collezione degli Uffizi è un vero e proprio chi è chi della storia dell'arte. I grandi artisti le cui opere definiscono la galleria includono:",
    link: "Scopri tutti gli artisti degli Uffizi →",
  },
  bottomCta: "Non Aspettare — Prenota i Tuoi Biglietti",
  faq: [
    {
      q: "Quanto costano i biglietti per gli Uffizi nel 2026?",
      a: "Il biglietto standard costa €25 alla biglietteria in giornata o €29 prenotato online in anticipo. L'ingresso pomeridiano (dalle 16:00) costa €16 in giornata o €20 in anticipo. Il nostro biglietto con ingresso a orario prestabilito e audioguida digitale parte da €26. I cittadini UE tra 18 e 25 anni pagano €2. I minori di 18 anni di qualsiasi nazionalità entrano gratis (biglietto nominativo).",
    },
    {
      q: "Devo prenotare i biglietti per gli Uffizi in anticipo?",
      a: "Fortemente consigliato. In alta stagione, la coda alla biglietteria può superare le 2 ore. Con un biglietto a orario prestabilito salti la fila alla biglietteria e ti presenti alla Porta 1 al tuo orario (tutti passano un breve controllo di sicurezza). In bassa stagione (novembre–febbraio) i biglietti giornalieri a volte sono disponibili, ma prenotare garantisce la fascia oraria preferita.",
    },
    {
      q: "Quali sono gli orari di apertura degli Uffizi?",
      a: "Gli Uffizi sono aperti da martedì a domenica, dalle 8:15 alle 18:30 (ultimo ingresso alle 17:30). La galleria è chiusa ogni lunedì, il 25 dicembre e il 1° gennaio.",
    },
    {
      q: "Quanto tempo serve per visitare gli Uffizi?",
      a: "Prevedi almeno 2 ore per vedere i capolavori principali. Gli appassionati d'arte trascorrono in genere 3-4 ore. Se hai poco tempo, segui il nostro percorso di 2 ore che copre tutte le opere imperdibili di Botticelli, Leonardo e Michelangelo.",
    },
    {
      q: "Quali sono i dipinti più famosi degli Uffizi?",
      a: "Le opere più celebri includono la Nascita di Venere e la Primavera di Botticelli (Sale 10-14), l'Annunciazione di Leonardo da Vinci (Sala 35), il Tondo Doni di Michelangelo (Sala 35), la Venere di Urbino di Tiziano (Sala 83) e la Medusa di Caravaggio (Sala 90).",
    },
    {
      q: "Vale la pena fare una visita guidata agli Uffizi?",
      a: "Assolutamente sì. Una visita guidata con uno storico dell'arte abilitato trasforma l'esperienza. Capirai il contesto dietro ogni capolavoro — gli intrighi politici, le innovazioni artistiche, le storie personali degli artisti. Le visite guidate includono anche l'ingresso a orario riservato e durano circa 2 ore.",
    },
  ],
};

const de: HomeContent = {
  meta: {
    title: "Uffizien Tickets 2026 | Mit Zeitfenster | Visit Uffizi",
    description:
      "Uffizien Florenz: Tickets mit Zeitfenster ab \u20AC26 inkl. Audioguide, Führungen & Meisterwerke von Botticelli, Michelangelo & Leonardo. Öffnungszeiten & Tipps.",
  },
  hero: {
    tagline: "Florenz, Italien",
    h1: "Uffizi Galerie Florenz",
    subtitle:
      "Botticellis Geburt der Venus, Leonardos Verkündigung und über 2.000 Meisterwerke aus Jahrhunderten italienischer Kunst. Planen Sie Ihren Besuch der weltweit bedeutendsten Sammlung der Renaissance-Kunst.",
    ctaTickets: "Tickets mit Zeitfenster buchen",
    ctaTours: "Führungen entdecken",
  },
  quickInfo: {
    hours: { label: "Öffnungszeiten", value: "Di–So: 8:15–18:30", note: "Montags geschlossen" },
    tickets: { label: "Tickets", value: "Ab €26 online", note: "Warteschlange an der Kasse umgehen" },
    location: { label: "Standort", value: "Piazzale degli Uffizi, 6", note: "Florenz Zentrum" },
    collection: { label: "Sammlung", value: "Über 2.000 Werke", note: "Meisterwerke der Renaissance" },
  },
  intro: [
    "Die Uffizi Galerie ist nicht einfach ein Museum — sie ist der Ort, an dem die Renaissance zum Leben erwachte. Wenn Sie durch ihre Säle gehen, stehen Sie Angesicht zu Angesicht mit den Gemälden, die die westliche Kunst für immer verändert haben. Von Botticellis leuchtender Geburt der Venus bis zu Michelangelos einzigem Tafelbild erzählt jeder Raum die Geschichte von Florenz' goldenem Zeitalter.",
    "Als jemand, der Tausende von Besuchern durch diese Säle geführt hat, kann ich Ihnen eines sagen: Die Uffizien belohnen gute Vorbereitung. Zu wissen, welche Räume Sie bevorzugen sollten, wann der beste Zeitpunkt für weniger Andrang ist und welche Tickets die richtigen sind — das macht den Unterschied zwischen einem hastigen Rundgang und einem wirklich unvergesslichen Erlebnis.",
  ],
  ticketsSection: {
    h2: "Uffizi Galerie Tickets 2026",
    p1: "Umgehen Sie die Warteschlange an der Kasse — im Ernst. Die Schlange am Ticketschalter der Uffizien kann in der Hauptsaison (März bis Oktober) über zwei Stunden betragen. Mit einem vorab gebuchten Ticket mit Zeitfenster gehen Sie zu Ihrer reservierten Uhrzeit direkt zu Eingang 1 — alle durchlaufen eine kurze Sicherheitskontrolle — und sind in wenigen Minuten drin. Standardtickets kosten €25 am selben Tag an der Kasse oder €29 im Voraus online gebucht. EU-Bürger zwischen 18 und 25 Jahren zahlen nur €2, und Besucher unter 18 Jahren aus jedem Land haben freien Eintritt (personalisiertes Ticket — der Name muss mit dem Ausweis übereinstimmen).",
    ctaTitle: "Uffizi Galerie Reserviertes Ticket & Digitaler Audioguide",
    p2: "Mein Tipp: Buchen Sie immer das früheste Zeitfenster — 8:15 Uhr. Sie haben den Botticelli-Saal in den ersten 20 Minuten praktisch für sich allein. Ab 10:00 Uhr kommen die Reisegruppen und die Atmosphäre verändert sich grundlegend. Falls der Morgen nicht passt, versuchen Sie es nach 16:00 Uhr, wenn die Tagesausflügler abgereist sind.",
    link: "Alle Tickets und Preise ansehen →",
  },
  toursSection: {
    h2: "Geführte Touren durch die Uffizi Galerie",
    p: "Was die meisten Besucher verpassen: Ohne Führung gehen Sie an Meisterwerken vorbei, ohne zu verstehen, warum sie so bedeutend sind. Ein lizenzierter Florentiner Kunsthistoriker zeigt Ihnen die verborgenen Details — die politische Symbolik in Botticellis Primavera, die revolutionäre Perspektive in Leonardos Verkündigung, den Grund, warum Michelangelos Doni Tondo kreisrund ist. Unsere Guides sind Einheimische, die diese Gemälde an der Universität Florenz studiert haben.",
    tourCards: [
      {
        title: "Geführte Uffizi-Tour",
        description:
          "Mit reserviertem Einlass und einem lizenzierten Kunsthistoriker die Uffizien erkunden. Botticelli, Leonardo, Michelangelo und mehr in einer 2-stündigen Expertenführung.",
      },
      {
        title: "Private Uffizi-Tour",
        description:
          "Ihr eigener Experte, Ihr eigenes Tempo. Eine private Tour, die auf Ihre Interessen zugeschnitten ist — ideal für Familien, Paare oder Kunstliebhaber, die in die Tiefe gehen möchten.",
      },
      {
        title: "Kombi-Tour Uffizi + Accademia",
        description:
          "Die beiden bedeutendsten Museen von Florenz an einem Tag. Uffizi-Meisterwerke am Vormittag, Michelangelos David am Nachmittag. Eintritt mit reserviertem Zeitfenster inklusive.",
      },
    ],
    link: "Alle Touren und Erlebnisse ansehen →",
  },
  planVisit: {
    h2: "Ihren Besuch planen",
    items: [
      { title: "Öffnungszeiten Uffizi", desc: "Tagesaktuelle Zeiten, Schließtage & beste Besuchszeiten" },
      { title: "Anfahrt", desc: "Wegbeschreibung von überall in Florenz" },
      { title: "Eingang 1", desc: "Wichtige Einlass-Infos für vorab gebuchte Tickets" },
      { title: "2-Stunden-Rundgang", desc: "Raum-für-Raum-Route für den perfekten Besuch" },
    ],
  },
  artworks: {
    h2: "Meisterwerke, die Sie sehen werden",
    p: "Die Uffizi Galerie beherbergt über 2.000 Werke, doch diese vier sind es, für die Besucher aus der ganzen Welt anreisen. Jedes gehört zur permanenten Sammlung — und jedes wird Sie in seinen Bann ziehen.",
  },
  vasari: {
    tagline: "Wiedereröffnet",
    h2: "Der Vasari-Korridor",
    p: "Der legendäre erhöhte Verbindungsgang zwischen den Uffizien und dem Palazzo Pitti, 1565 für Cosimo I. de' Medici erbaut. Wandeln Sie über dem Ponte Vecchio durch einen Kilometer Geschichte. Nach jahrelanger Restaurierung ist er jetzt wieder für Besucher mit Voranmeldung geöffnet.",
    cta: "Den Vasari-Korridor entdecken",
  },
  whyMatters: {
    h2: "Warum die Uffizi Galerie so bedeutend ist",
    paragraphs: [
      "Die Uffizien wurden nicht als Museum gebaut. Giorgio Vasari entwarf sie 1560 als Büros (uffizi auf Italienisch) für die Florentiner Magistrate. Es war die Familie Medici — die großen Kunstmäzene von Florenz — die nach und nach die oberen Stockwerke mit ihrer privaten Kunstsammlung füllte. Als die letzte Medici-Erbin, Anna Maria Luisa, 1737 die gesamte Sammlung der Stadt Florenz vermachte, war sie bereits eine der bedeutendsten Kunstsammlungen der Welt.",
      "Heute erstrecken sich die Uffizien über 101 Säle auf zwei Etagen, chronologisch geordnet vom 13. bis zum 18. Jahrhundert. Sie verfolgen die Entwicklung der westlichen Kunst von den goldgrundigen byzantinischen Ikonen der Giotto-Ära über die kreative Explosion der Hochrenaissance bis zu den dramatischen Schatten des Barock.",
      "Was die Uffizien einzigartig macht, sind nicht nur die einzelnen Meisterwerke — es ist die Art, wie sie angeordnet sind. Sie können buchstäblich von Cimabues mittelalterlicher Madonna zu Giottos revolutionärem Naturalismus gehen, dann weiter über Masaccio, Fra Angelico und Filippo Lippi bis zur Explosion von Botticelli, Leonardo und Michelangelo. Kein anderes Museum der Welt erzählt diese Geschichte so vollständig.",
    ],
  },
  beforeYouGo: {
    h2: "Was Sie vor Ihrem Besuch wissen sollten",
    paragraphs: [
      "Die Uffizien sind Dienstag bis Sonntag von 8:15 bis 18:30 Uhr geöffnet (letzter Einlass 17:30 Uhr). Montags ist geschlossen, ebenso an Weihnachten (25. Dezember) und Neujahr (1. Januar). Aktuelle Zeiten finden Sie auf unserer Seite zu den Öffnungszeiten.",
      "Planen Sie mindestens 2 Stunden für einen sinnvollen Besuch ein. Kunstbegeisterte werden 3–4 Stunden benötigen, um die Sammlung ausführlich zu erkunden. Falls Sie wenig Zeit haben, deckt unser 2-Stunden-Rundgang die wichtigsten Highlights ab — ohne Hektik.",
      "Große Taschen und Rucksäcke müssen an der kostenlosen Garderobe am Eingang abgegeben werden. Fotografieren ist erlaubt (ohne Blitz), Selfie-Sticks und Stative sind jedoch verboten. Auf der Terrasse im zweiten Stock gibt es ein Café mit Blick auf die Piazza della Signoria — der perfekte Ort für eine Pause auf halbem Weg durch Ihren Besuch.",
    ],
  },
  artistsSection: {
    h2: "Künstler in der Uffizi Galerie",
    p: "Die Sammlung der Uffizien liest sich wie ein Who's Who der Kunstgeschichte. Die bedeutendsten Künstler, deren Werke die Galerie prägen, sind unter anderem:",
    link: "Alle Uffizi-Künstler entdecken →",
  },
  bottomCta: "Nicht warten — Uffizi Galerie Tickets jetzt buchen",
  faq: [
    {
      q: "Was kosten Uffizi Galerie Tickets 2026?",
      a: "Standardtickets kosten €25 am selben Tag an der Kasse oder €29 im Voraus online gebucht. Der Nachmittagseintritt (ab 16:00 Uhr) kostet €16 am selben Tag oder €20 im Voraus. Unser Ticket mit Zeitfenster und digitalem Audioguide gibt es ab €26. EU-Bürger zwischen 18 und 25 Jahren zahlen den ermäßigten Preis von €2. Kinder unter 18 Jahren haben unabhängig von der Nationalität freien Eintritt (personalisiertes Ticket).",
    },
    {
      q: "Muss ich Uffizi-Tickets im Voraus buchen?",
      a: "Das wird dringend empfohlen. In der Hauptsaison kann die Warteschlange an der Kasse über 2 Stunden betragen. Mit einem vorab gebuchten Ticket mit Zeitfenster umgehen Sie die Warteschlange an der Kasse und gehen zu Ihrer reservierten Uhrzeit zu Eingang 1 (alle durchlaufen eine kurze Sicherheitskontrolle). In der Nebensaison (November–Februar) sind Tageskarten manchmal noch verfügbar, doch eine Vorausbuchung garantiert Ihr Wunsch-Zeitfenster.",
    },
    {
      q: "Wie sind die Öffnungszeiten der Uffizi Galerie?",
      a: "Die Uffizien sind Dienstag bis Sonntag von 8:15 bis 18:30 Uhr geöffnet (letzter Einlass 17:30 Uhr). Montags ist geschlossen, ebenso am 25. Dezember und 1. Januar.",
    },
    {
      q: "Wie viel Zeit brauche ich für die Uffizi Galerie?",
      a: "Planen Sie mindestens 2 Stunden ein, um die wichtigsten Highlights zu sehen. Kunstliebhaber verbringen in der Regel 3–4 Stunden. Falls Sie wenig Zeit haben, empfehlen wir unseren 2-Stunden-Rundgang, der alle Hauptwerke von Botticelli, Leonardo und Michelangelo abdeckt.",
    },
    {
      q: "Welche sind die berühmtesten Gemälde in den Uffizien?",
      a: "Zu den berühmtesten Werken zählen Botticellis Geburt der Venus und Primavera (Säle 10–14), Leonardos Verkündigung (Saal 35), Michelangelos Doni Tondo (Saal 35), Tizians Venus von Urbino (Saal 83) und Caravaggios Medusa (Saal 90).",
    },
    {
      q: "Lohnt sich eine Führung durch die Uffizi Galerie?",
      a: "Auf jeden Fall. Eine Führung mit einem lizenzierten Kunsthistoriker verwandelt den Besuch in ein unvergessliches Erlebnis. Sie erfahren die Hintergründe jedes Meisterwerks — politische Intrigen, künstlerische Innovationen, persönliche Geschichten der Künstler. Führungen beinhalten zudem den Eintritt mit reserviertem Zeitfenster und dauern etwa 2 Stunden.",
    },
  ],
};

const fr: HomeContent = {
  meta: {
    title: "Billets Galerie des Offices 2026 | Horaire Réservé | Visit Uffizi",
    description:
      "Préparez votre visite de la Galerie des Offices. Billets à horaire réservé dès €26 avec audioguide, visites guidées, chefs-d'oeuvre, horaires et conseils.",
  },
  hero: {
    tagline: "Florence, Italie",
    h1: "Galerie des Offices Florence",
    subtitle:
      "La Naissance de Venus de Botticelli, l'Annonciation de Leonard de Vinci et plus de 2 000 chefs-d'oeuvre couvrant des siecles d'art italien. Preparez votre visite de la plus importante collection d'art de la Renaissance au monde.",
    ctaTickets: "Billets à Horaire Réservé",
    ctaTours: "Decouvrir les Visites Guidees",
  },
  quickInfo: {
    hours: { label: "Horaires", value: "Mar-Dim : 8h15-18h30", note: "Ferme le lundi" },
    tickets: { label: "Billets", value: "Dès €26 en ligne", note: "Évitez la file à la billetterie" },
    location: { label: "Adresse", value: "Piazzale degli Uffizi, 6", note: "Centre de Florence" },
    collection: { label: "Collection", value: "2 000+ oeuvres", note: "Chefs-d'oeuvre de la Renaissance" },
  },
  intro: [
    "La Galerie des Offices n'est pas un musee comme les autres : c'est le berceau de la Renaissance. En parcourant ses couloirs, vous vous retrouverez face a face avec les tableaux qui ont bouleverse l'art occidental. De la lumineuse Naissance de Venus de Botticelli a l'unique peinture sur panneau de Michel-Ange, chaque salle raconte l'histoire de l'age d'or de Florence.",
    "En tant que guide ayant accompagne des milliers de visiteurs dans ces salles, je peux vous dire une chose : les Offices recompensent ceux qui se preparent. Savoir quelles salles privilegier, a quel moment venir pour eviter la foule et quel billet choisir fait toute la difference entre une visite precipitee et une experience veritablement inoubliable.",
  ],
  ticketsSection: {
    h2: "Billets Offices 2026",
    p1: "Évitez la file d'attente à la billetterie, sérieusement. La queue pour acheter un billet aux Offices peut dépasser deux heures en haute saison (de mars à octobre). Avec un billet à horaire réservé acheté en ligne, vous vous rendez directement à la Porte 1 à votre créneau — tout le monde passe un bref contrôle de sécurité — et vous êtes à l'intérieur en quelques minutes. Le billet standard coûte €25 sur place le jour même ou €29 réservé en ligne à l'avance. Les citoyens de l'UE âgés de 18 à 25 ans ne paient que €2, et les moins de 18 ans de toute nationalité entrent gratuitement (billet nominatif : le nom doit correspondre à la pièce d'identité).",
    ctaTitle: "Billet Réservé Galerie des Offices et Audioguide Numérique",
    p2: "Je recommande toujours de reserver le premier creneau du matin : 8h15. Vous aurez la salle Botticelli pratiquement pour vous pendant les 20 premieres minutes. A partir de 10h, les groupes arrivent et l'experience change du tout au tout. Si le matin n'est pas possible, essayez apres 16h, lorsque les excursionnistes sont repartis.",
    link: "Voir tous les billets et tarifs \u2192",
  },
  toursSection: {
    h2: "Visites Guidees des Offices",
    p: "Voici ce que la plupart des visiteurs manquent : sans guide, vous passerez devant des chefs-d'oeuvre sans comprendre pourquoi ils comptent. Un historien de l'art florentin diplome vous revelera les details caches : les symboles politiques dans le Printemps de Botticelli, la perspective revolutionnaire de l'Annonciation de Leonard, la raison pour laquelle le Tondo Doni de Michel-Ange est circulaire. Nos guides sont des Florentins qui ont etudie ces tableaux a l'Universite de Florence.",
    tourCards: [
      {
        title: "Visite Guidee de la Galerie des Offices",
        description:
          "Entrée réservée et découverte des Offices avec un historien de l'art diplômé. Botticelli, Léonard, Michel-Ange et bien plus dans une visite de 2 heures.",
      },
      {
        title: "Visite Privee des Offices",
        description:
          "Votre propre guide, votre propre rythme. Une visite privee adaptee a vos centres d'interet, ideale pour les familles, les couples ou les passionnes d'art.",
      },
      {
        title: "Visite Combo Offices + Accademia",
        description:
          "Les deux plus grands musees de Florence en une journee. Chefs-d'oeuvre des Offices le matin, David de Michel-Ange l'apres-midi. Entrée à horaire réservé incluse.",
      },
    ],
    link: "Voir toutes les visites et experiences \u2192",
  },
  planVisit: {
    h2: "Preparez Votre Visite",
    items: [
      { title: "Horaires d'Ouverture", desc: "Horaires Offices, fermetures et meilleurs moments" },
      { title: "Comment s'y Rendre", desc: "Itineraires depuis n'importe quel point de Florence" },
      { title: "Entrée Porte 1", desc: "Informations essentielles pour les billets reserves" },
      { title: "Guide 2 Heures", desc: "Parcours salle par salle pour une visite parfaite" },
    ],
  },
  artworks: {
    h2: "Chefs-d'Oeuvre a Decouvrir",
    p: "Les Offices abritent plus de 2 000 oeuvres, mais ces quatre sont celles pour lesquelles les visiteurs viennent du monde entier. Chacune fait partie de la collection permanente, et chacune vous laissera sans voix.",
  },
  vasari: {
    tagline: "Recemment Rouvert",
    h2: "Le Corridor de Vasari",
    p: "Le legendaire passage sureleve reliant les Offices au Palais Pitti, construit en 1565 pour Come Ier de Medicis. Marchez au-dessus du Ponte Vecchio a travers un kilometre d'histoire. Apres des annees de restauration, il est desormais ouvert aux visiteurs sur reservation.",
    cta: "Decouvrir le Corridor de Vasari",
  },
  whyMatters: {
    h2: "Pourquoi la Galerie des Offices Compte",
    paragraphs: [
      "Les Offices n'ont pas ete construits comme un musee. Giorgio Vasari les a concus en 1560 comme des bureaux (uffizi en italien) pour les magistrats florentins. C'est la famille Medicis, les grands mecenes des arts florentins, qui a progressivement rempli les etages superieurs de sa collection d'art privee. Lorsque la derniere heritiere des Medicis, Anne-Marie-Louise, legua l'integralite de la collection a la ville de Florence en 1737, celle-ci etait devenue l'une des plus importantes collections d'art au monde.",
      "Aujourd'hui, les Offices s'etendent sur 101 salles reparties sur deux etages, organisees chronologiquement du XIIIe au XVIIIe siecle. Vous suivrez l'evolution de l'art occidental, des icones byzantines sur fond d'or de l'epoque de Giotto a la creativite explosive de la Haute Renaissance, jusqu'aux ombres dramatiques du Baroque.",
      "Ce qui rend les Offices uniques, ce ne sont pas seulement les chefs-d'oeuvre individuels, c'est la facon dont ils sont disposes. Vous pouvez litteralement passer de la Madone medievale de Cimabue au naturalisme revolutionnaire de Giotto, puis avancer a travers Masaccio, Fra Angelico et Filippo Lippi jusqu'a l'explosion de Botticelli, Leonard et Michel-Ange. Aucun autre musee au monde ne raconte cette histoire de facon aussi complete.",
    ],
  },
  beforeYouGo: {
    h2: "Ce qu'il Faut Savoir Avant Votre Visite",
    paragraphs: [
      "Les Offices sont ouverts du mardi au dimanche, de 8h15 a 18h30 (derniere entree a 17h30). Ils sont fermes tous les lundis, le jour de Noel (25 decembre) et le Jour de l'An (1er janvier). Consultez la page des horaires pour le calendrier actuel.",
      "Prevoyez au moins 2 heures pour une visite satisfaisante. Les passionnes d'art voudront 3 a 4 heures pour explorer la collection en profondeur. Si vous manquez de temps, notre itineraire de 2 heures couvre les oeuvres essentielles sans precipitation.",
      "Les grands sacs et sacs a dos doivent etre deposes au vestiaire gratuit pres de l'entree. Les photos sont autorisees (sans flash), mais les perches a selfie et les trepieds sont interdits. Il y a un cafe sur la terrasse du deuxieme etage avec vue sur la Piazza della Signoria, l'endroit ideal pour une pause a mi-parcours.",
    ],
  },
  artistsSection: {
    h2: "Artistes de la Galerie des Offices",
    p: "La collection des Offices se lit comme un veritable bottin mondain de l'histoire de l'art. Les grands artistes dont les oeuvres definissent la galerie comprennent :",
    link: "Decouvrir tous les artistes des Offices \u2192",
  },
  bottomCta: "N'attendez Plus \u2014 Reservez Vos Billets Offices",
  faq: [
    {
      q: "Combien coutent les billets pour les Offices en 2026 ?",
      a: "Le billet standard coûte €25 sur place le jour même ou €29 réservé en ligne à l'avance. L'entrée de l'après-midi (à partir de 16h00) coûte €16 le jour même ou €20 à l'avance. Notre billet à horaire réservé avec audioguide numérique est disponible dès €26. Les citoyens de l'UE âgés de 18 à 25 ans paient un tarif réduit de €2. Les moins de 18 ans de toute nationalité entrent gratuitement (billet nominatif).",
    },
    {
      q: "Faut-il reserver les billets des Offices a l'avance ?",
      a: "Fortement recommandé. En haute saison, la file d'attente à la billetterie peut dépasser 2 heures. Un billet à horaire réservé vous évite la file d'attente à la billetterie : vous vous présentez à la Porte 1 à votre créneau (tout le monde passe un bref contrôle de sécurité). En basse saison (novembre-février), des billets sont parfois disponibles le jour même, mais réserver à l'avance garantit le créneau de votre choix.",
    },
    {
      q: "Quels sont les horaires d'ouverture des Offices ?",
      a: "Les Offices sont ouverts du mardi au dimanche, de 8h15 a 18h30 (derniere entree a 17h30). Le musee est ferme tous les lundis, ainsi que le 25 decembre et le 1er janvier.",
    },
    {
      q: "Combien de temps faut-il pour visiter les Offices ?",
      a: "Prevoyez au moins 2 heures pour voir les oeuvres majeures. Les passionnes d'art passent generalement 3 a 4 heures. Si vous etes presse, suivez notre parcours de 2 heures qui couvre toutes les oeuvres incontournables de Botticelli, Leonard et Michel-Ange.",
    },
    {
      q: "Quels sont les tableaux les plus celebres des Offices ?",
      a: "Les oeuvres les plus celebres comprennent la Naissance de Venus et le Printemps de Botticelli (salles 10-14), l'Annonciation de Leonard de Vinci (salle 35), le Tondo Doni de Michel-Ange (salle 35), la Venus d'Urbino de Titien (salle 83) et la Meduse de Caravage (salle 90).",
    },
    {
      q: "Une visite guidee des Offices vaut-elle le coup ?",
      a: "Absolument. Une visite guidee avec un historien de l'art diplome transforme l'experience. Vous comprendrez le contexte de chaque chef-d'oeuvre : intrigues politiques, innovations artistiques, histoires personnelles des artistes. Les visites guidees incluent egalement l'entrée à horaire réservé et durent environ 2 heures.",
    },
  ],
};

const es: HomeContent = {
  meta: {
    title: "Entradas Uffizi 2026 | Hora Reservada | Horario y Precios",
    description:
      "Planifica tu visita a la Galería Uffizi. Entradas con hora reservada desde €26 con audioguía, visitas guiadas, obras maestras, horario y consejos.",
  },
  hero: {
    tagline: "Florencia, Italia",
    h1: "Galeria Uffizi Florencia",
    subtitle:
      "El Nacimiento de Venus de Botticelli, la Anunciacion de Leonardo y mas de 2.000 obras maestras que abarcan siglos de arte italiano. Planifica tu visita a la coleccion de arte renacentista mas importante del mundo.",
    ctaTickets: "Entradas con Hora Reservada",
    ctaTours: "Descubrir Visitas Guiadas",
  },
  quickInfo: {
    hours: { label: "Horario", value: "Mar-Dom: 8:15-18:30", note: "Cerrado los lunes" },
    tickets: { label: "Entradas", value: "Desde €26 online", note: "Evita la cola de la taquilla" },
    location: { label: "Ubicacion", value: "Piazzale degli Uffizi, 6", note: "Centro de Florencia" },
    collection: { label: "Coleccion", value: "2.000+ obras", note: "Obras maestras del Renacimiento" },
  },
  intro: [
    "La Galeria Uffizi no es un museo cualquiera: es el lugar donde el Renacimiento cobro vida. Al recorrer sus pasillos, te encontraras cara a cara con las pinturas que cambiaron para siempre el arte occidental. Desde el luminoso Nacimiento de Venus de Botticelli hasta la unica pintura sobre tabla de Miguel Angel, cada sala cuenta la historia de la edad de oro de Florencia.",
    "Como guia que ha acompanado a miles de visitantes por estas salas, puedo decirte algo: los Uffizi premian la preparacion. Saber que salas priorizar, cuando ir para evitar las aglomeraciones y que entrada elegir marca toda la diferencia entre un recorrido apresurado y una experiencia verdaderamente inolvidable.",
  ],
  ticketsSection: {
    h2: "Entradas Uffizi 2026",
    p1: "Evita la cola de la taquilla, en serio. La fila para comprar entradas en los Uffizi puede superar las dos horas en temporada alta (de marzo a octubre). Con una entrada con hora reservada comprada online, te diriges directamente a la Puerta 1 a tu hora — todos pasan un breve control de seguridad — y entras en minutos. La entrada estándar cuesta €25 en taquilla el mismo día o €29 reservada online con antelación. Los ciudadanos de la UE de 18 a 25 años pagan solo €2, y los menores de 18 años de cualquier nacionalidad entran gratis (entrada nominativa: el nombre debe coincidir con el documento).",
    ctaTitle: "Entrada Reservada Galería Uffizi y Audioguía Digital",
    p2: "Siempre recomiendo reservar la primera franja horaria: las 8:15. Tendras la sala de Botticelli practicamente para ti solo durante los primeros 20 minutos. A partir de las 10:00 llegan los grupos y la experiencia cambia por completo. Si la manana no te va bien, prueba despues de las 16:00, cuando los excursionistas del dia ya se han marchado.",
    link: "Ver todas las entradas y precios \u2192",
  },
  toursSection: {
    h2: "Visitas Guiadas de los Uffizi",
    p: "Esto es lo que la mayoria de los visitantes se pierde: sin un guia, pasaras de largo ante obras maestras sin entender por que importan. Un historiador del arte florentino con licencia te mostrara los detalles ocultos: los simbolos politicos en la Primavera de Botticelli, la perspectiva revolucionaria en la Anunciacion de Leonardo, la razon por la que el Tondo Doni de Miguel Angel tiene forma circular. Nuestros guias son florentinos que estudiaron estas pinturas en la Universidad de Florencia.",
    tourCards: [
      {
        title: "Visita Guiada a la Galeria Uffizi",
        description:
          "Entrada reservada y recorrido por los Uffizi con un historiador del arte. Botticelli, Leonardo, Miguel Angel y mucho mas en una visita de 2 horas.",
      },
      {
        title: "Visita Privada a los Uffizi",
        description:
          "Tu propio guia experto, tu propio ritmo. Una visita privada adaptada a tus intereses, perfecta para familias, parejas o amantes del arte.",
      },
      {
        title: "Tour Combinado Uffizi + Accademia",
        description:
          "Los dos museos mas importantes de Florencia en un dia. Obras maestras de los Uffizi por la manana, el David de Miguel Angel por la tarde. Entrada con hora reservada incluida.",
      },
    ],
    link: "Ver todas las visitas y experiencias \u2192",
  },
  planVisit: {
    h2: "Planifica Tu Visita",
    items: [
      { title: "Horario de Apertura", desc: "Horario Uffizi, cierres y mejores momentos" },
      { title: "Como Llegar", desc: "Indicaciones desde cualquier punto de Florencia" },
      { title: "Entrada Puerta 1", desc: "Informacion esencial para entradas reservadas" },
      { title: "Guia de 2 Horas", desc: "Recorrido sala por sala para una visita perfecta" },
    ],
  },
  artworks: {
    h2: "Obras Maestras que Veras",
    p: "Los Uffizi albergan mas de 2.000 obras, pero estas cuatro son las que atraen a visitantes de todo el mundo. Cada una pertenece a la coleccion permanente, y cada una te dejara sin aliento.",
  },
  vasari: {
    tagline: "Reabierto Recientemente",
    h2: "El Corredor Vasariano",
    p: "El legendario pasaje elevado que conecta los Uffizi con el Palacio Pitti, construido en 1565 para Cosme I de Medicis. Camina sobre el Ponte Vecchio a traves de un kilometro de historia. Tras anos de restauracion, ahora esta abierto a visitantes con reserva anticipada.",
    cta: "Descubrir el Corredor Vasariano",
  },
  whyMatters: {
    h2: "Por Que Importa la Galeria Uffizi",
    paragraphs: [
      "Los Uffizi no se construyeron como museo. Giorgio Vasari los diseno en 1560 como oficinas (uffizi en italiano) para los magistrados florentinos. Fue la familia Medicis, los grandes mecenas del arte florentino, quienes fueron llenando gradualmente los pisos superiores con su coleccion privada de arte. Cuando la ultima heredera de los Medicis, Ana Maria Luisa, lego toda la coleccion a la ciudad de Florencia en 1737, se habia convertido en una de las colecciones de arte mas importantes del mundo.",
      "Hoy en dia, los Uffizi se extienden a lo largo de 101 salas en dos plantas, organizadas cronologicamente desde el siglo XIII hasta el siglo XVIII. Seguiras la evolucion del arte occidental desde los iconos bizantinos sobre fondo dorado de la era de Giotto, pasando por la explosiva creatividad del Alto Renacimiento, hasta las dramaticas sombras del Barroco.",
      "Lo que hace unicos a los Uffizi no son solo las obras maestras individuales, sino la forma en que estan dispuestas. Puedes caminar literalmente desde la Madonna medieval de Cimabue al naturalismo revolucionario de Giotto, despues avanzar por Masaccio, Fra Angelico y Filippo Lippi hasta la explosion de Botticelli, Leonardo y Miguel Angel. Ningun otro museo del mundo cuenta esta historia de forma tan completa.",
    ],
  },
  beforeYouGo: {
    h2: "Que Saber Antes de Ir",
    paragraphs: [
      "Los Uffizi estan abiertos de martes a domingo, de 8:15 a 18:30 (ultima entrada a las 17:30). Cierra todos los lunes, el dia de Navidad (25 de diciembre) y Ano Nuevo (1 de enero). Consulta la pagina de horarios para el calendario actual.",
      "Reserva al menos 2 horas para una visita satisfactoria. Los apasionados del arte querran 3-4 horas para explorar la coleccion en profundidad. Si andas corto de tiempo, nuestro itinerario de 2 horas cubre las obras esenciales sin prisas.",
      "Los bolsos grandes y mochilas deben dejarse en el guardarropa gratuito junto a la entrada. Se permite fotografiar (sin flash), pero los palos de selfie y tripodes estan prohibidos. Hay una cafeteria en la terraza del segundo piso con vistas a la Piazza della Signoria, el lugar perfecto para descansar a mitad de la visita.",
    ],
  },
  artistsSection: {
    h2: "Artistas de la Galeria Uffizi",
    p: "La coleccion de los Uffizi se lee como un autentico quien es quien de la historia del arte. Los grandes artistas cuyas obras definen la galeria incluyen:",
    link: "Descubrir todos los artistas de los Uffizi \u2192",
  },
  bottomCta: "No Esperes \u2014 Reserva Tus Entradas Uffizi",
  faq: [
    {
      q: "Cuanto cuestan las entradas a los Uffizi en 2026?",
      a: "La entrada estándar cuesta €25 en taquilla el mismo día o €29 reservada online con antelación. La entrada de tarde (desde las 16:00) cuesta €16 el mismo día o €20 con antelación. Nuestra entrada con hora reservada y audioguía digital está disponible desde €26. Los ciudadanos de la UE de 18 a 25 años pagan un precio reducido de €2. Los menores de 18 años de cualquier nacionalidad entran gratis (entrada nominativa).",
    },
    {
      q: "Es necesario reservar las entradas de los Uffizi con antelacion?",
      a: "Muy recomendable. En temporada alta, la cola de la taquilla puede superar las 2 horas. Con una entrada con hora reservada evitas la cola de la taquilla y te presentas en la Puerta 1 a tu hora (todos pasan un breve control de seguridad). En temporada baja (noviembre-febrero), a veces hay entradas disponibles el mismo dia, pero reservar con antelacion garantiza tu franja horaria preferida.",
    },
    {
      q: "Cual es el horario de apertura de los Uffizi?",
      a: "Los Uffizi estan abiertos de martes a domingo, de 8:15 a 18:30 (ultima entrada a las 17:30). El museo cierra todos los lunes, el 25 de diciembre y el 1 de enero.",
    },
    {
      q: "Cuanto tiempo se necesita para visitar los Uffizi?",
      a: "Reserva al menos 2 horas para ver las obras principales. Los apasionados del arte suelen pasar 3-4 horas. Si vas con poco tiempo, sigue nuestro recorrido de 2 horas que cubre todas las obras imprescindibles de Botticelli, Leonardo y Miguel Angel.",
    },
    {
      q: "Cuales son las pinturas mas famosas de los Uffizi?",
      a: "Las obras mas celebres incluyen el Nacimiento de Venus y la Primavera de Botticelli (salas 10-14), la Anunciacion de Leonardo da Vinci (sala 35), el Tondo Doni de Miguel Angel (sala 35), la Venus de Urbino de Tiziano (sala 83) y la Medusa de Caravaggio (sala 90).",
    },
    {
      q: "Merece la pena una visita guiada a los Uffizi?",
      a: "Sin duda. Una visita guiada con un historiador del arte transforma la experiencia. Comprenderas el contexto de cada obra maestra: intrigas politicas, innovaciones artisticas e historias personales de los artistas. Las visitas guiadas tambien incluyen entrada con hora reservada y duran aproximadamente 2 horas.",
    },
  ],
};

const content: PageContent<HomeContent> = { en, it, de, fr, es };

export function getHomeContent(locale: string): HomeContent {
  return getContent(content, locale);
}
