import { getContent, type PageContent } from "./types";

export type TwoHoursContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  subtitle: string;
  intro: string;
  ctaTopTitle: string;
  routeH2: string;
  stops: {
    tag: string;
    h3: string;
    paragraphs: string[];
  }[];
  bonus: {
    tag: string;
    h3: string;
    p: string;
  };
  practicalInfo: {
    h2: string;
    paragraphs: string[];
  };
  beforeYourVisit: {
    h2: string;
    paragraphs: string[];
  };
  alternativeRoutes: {
    h2: string;
    paragraphs: string[];
  };
  timingTips: {
    h2: string;
    items: string[];
  };
  relatedGuides: {
    h2: string;
    links: { text: string; href: string }[];
  };
  closingP: string;
  closingLinkText: string;
  ctaBottomTitle: string;
  faq: { q: string; a: string }[];
};

const en: TwoHoursContent = {
  meta: {
    title: "Uffizi Gallery in 2 Hours | Room-by-Room Guide & Must-See Art",
    description:
      "See the best of the Uffizi in 2 hours. Room-by-room route covering Botticelli, Leonardo, Michelangelo & more. Practical self-guided itinerary.",
  },
  breadcrumb: "2-Hour Guide",
  h1: "The Uffizi Gallery in 2 Hours",
  subtitle: "What to see and where to look",
  intro:
    "Two hours. That's enough time to see the Uffizi's greatest masterpieces without rushing — if you know exactly where to go. I've refined this route over years of guiding visitors, and it hits every must-see painting while skipping the rooms you can afford to miss. Follow this room-by-room itinerary and you'll walk out having seen the best of 500 years of art.",
  ctaTopTitle: "Book an 8:15 AM Time Slot for the Best Experience",
  routeH2: "Your 2-Hour Route",
  stops: [
    {
      tag: "Stop 1 — 15 minutes",
      h3: "Room 2: The Birth of Painting",
      paragraphs: [
        "Start here. Three enormous altarpieces dominate the room — the Maest\u00e0 panels by Cimabue, Duccio, and Giotto. Stand in front of Giotto's Ognissanti Madonna (1310) and compare it to Cimabue's version on the opposite wall. Giotto's figures have weight, volume, and emotion — this is where Western painting took its first great leap forward. Notice how the Madonna's throne creates actual depth, while Cimabue's remains flat and symbolic.",
      ],
    },
    {
      tag: "Stop 2 — 5 minutes",
      h3: "Room 7: Early Renaissance",
      paragraphs: [
        "Pause briefly at Filippo Lippi's Madonna and Child with Two Angels (c. 1465). Look at the Madonna's face — Lippi used his lover, a nun named Lucrezia Buti, as his model. The painting scandalized Florence but the Medici protected him. This is one of the first Renaissance paintings where a real woman's face appears as the Virgin Mary.",
      ],
    },
    {
      tag: "Stop 3 — 30 minutes",
      h3: "Rooms 10-14: Botticelli Hall (The Main Event)",
      paragraphs: [
        "This is why you came to the Uffizi. Take your time here. Botticelli's Birth of Venus (c. 1485) hangs on the far wall. Stand at a distance first — take in the composition. Venus emerging from the sea on a shell, blown to shore by the wind gods. Then step closer and look at the details: the individual strands of golden hair, the roses falling from the sky, the impossibly graceful pose borrowed from a Roman sculpture of Venus Pudica.",
        "On the opposite wall: Primavera (c. 1482). This is more complex than it first appears. Over 500 plant species have been identified in the painting, all botanically accurate. Mercury, the Three Graces, Venus, Flora, Chloris, and Zephyr — each figure tells part of an allegory that scholars still debate. Look for Cupid directly above Venus, aiming his arrow at the middle Grace.",
        "Don't miss the Adoration of the Magi — Botticelli painted himself into the crowd as a young man in a yellow robe, looking directly at the viewer from the right edge.",
      ],
    },
    {
      tag: "Stop 4 — 15 minutes",
      h3: "Room 35: Leonardo & Michelangelo",
      paragraphs: [
        "Two giants, one room. Leonardo da Vinci's Annunciation (c. 1472) — painted when he was about 20 years old. Notice the angel's wings, studied from real bird wings. The marble lectern is a copy of a Verrocchio tomb design. Look at the landscape behind Mary — that hazy, blue-green distance is Leonardo's signature \"sfumato\" technique.",
        "Across the room: Michelangelo's Doni Tondo (c. 1507) — the only completed panel painting by the sculptor of David. The colors are almost shockingly vivid — electric pinks, brilliant blues, acid greens. This painting foreshadows the entire Sistine Chapel ceiling. Notice how the figures twist in a complex spiral — this was revolutionary.",
      ],
    },
    {
      tag: "Stop 5 — 10 minutes",
      h3: "Room 66: Raphael",
      paragraphs: [
        "Raphael's Madonna of the Goldfinch (1506) — painted as a wedding gift for his friend Lorenzo Nasi. In 1547, a landslide destroyed Nasi's house and the painting shattered into 17 pieces. It was painstakingly reassembled over decades. Look closely and you can still see faint lines where the fragments were joined. The painting survived 500 years, a natural disaster, and became more beautiful for it.",
      ],
    },
    {
      tag: "Stop 6 — 10 minutes",
      h3: "Room 83: Titian",
      paragraphs: [
        "Titian's Venus of Urbino (1538) — possibly the most famous reclining nude in art history. Look at the details most people miss: the sleeping dog (symbol of fidelity), the servants searching a marriage chest in the background, the myrtle plant on the windowsill (associated with Venus). The painting is a celebration of sensuality, love, and domestic life — all in one canvas.",
      ],
    },
    {
      tag: "Stop 7 — 10 minutes",
      h3: "Room 90: Caravaggio",
      paragraphs: [
        "End your visit with Caravaggio's Medusa (c. 1597) — painted on a circular shield, the severed Gorgon head still screams in the moment after death. Caravaggio used his own face as the model. Also in this room: his Bacchus and Sacrifice of Isaac. After the harmonious beauty of Botticelli and Raphael, Caravaggio's dramatic shadows and raw realism feel like a thunderclap.",
      ],
    },
  ],
  bonus: {
    tag: "Bonus — 10 minutes",
    h3: "The Panoramic Terrace",
    p: "If you have time, step onto the second-floor terrace above the Loggia dei Lanzi. The views across Piazza della Signoria to the Palazzo Vecchio tower are spectacular. There's a small caf\u00e9 here — an espresso with this view is a perfect way to end your visit.",
  },
  practicalInfo: {
    h2: "Tickets, Entrance & Opening Hours",
    paragraphs: [
      "**Ticket prices (2026):** €25 if you buy on the day of your visit, €29 if you book in advance (the extra €4 is the reservation fee). EU citizens aged 18-25 pay just €2. Under 18 is free regardless of nationality, but the ticket is nominative and must still be issued in the child's name. The first Sunday of each month is free for everyone, at the gallery and the Vasari Corridor — you still need a free nominative ticket, and the Uffizi's is issued only at the ticket-office counter on the day. Expect extreme crowds.",
      "**How to buy:** Book online at uffizi.it or through a licensed reseller. Choose the 8:15 AM time slot for this 2-hour route. You'll receive a QR code by email — show it on your phone (or a printout). There is nothing to collect and no paper voucher to exchange.",
      "**Entrance:** Everyone now enters through Door 1, on the east side of the building near the Arno. Since CoopCulture took over in September 2025 there is no separate entrance and no 'skip the line' product — every ticket is for a fixed time slot, and everyone passes the same security check. What a booked ticket does save you is the ticket-office queue.",
      "**Door 3 is closed** to the public. The old voucher-exchange desk there was discontinued in September 2025 — don't waste time looking for it.",
      "**Opening hours:** Tuesday to Sunday, 8:15 AM to 6:30 PM. Last entry at 5:30 PM. Closed every Monday, plus January 1 and December 25.",
      "**Buying on site:** Self-service machines in the ticket office area take cash and are faster than the counter; the staffed counters take cards. Either way you pay the same €25 on-the-day price, subject to time slots still being available.",
    ],
  },
  beforeYourVisit: {
    h2: "What to Know Before Your Visit",
    paragraphs: [
      "**Bag check:** Large bags and backpacks must be checked at the free cloakroom after security. Small handbags and camera bags are fine. Leave luggage at your hotel.",
      "**Dress code:** No specific dress code for the Uffizi (unlike churches). Wear comfortable shoes — marble floors are hard after 2 hours of walking.",
      "**Water:** You can bring a water bottle inside. The gallery can get warm, especially upper-floor rooms in summer.",
      "**Photography:** Allowed throughout the gallery, no flash. Some paintings are behind glass — shoot at a slight angle to avoid reflections.",
      "**Audio guides:** Available for rent at the entrance (€6). They cover major works with 3-5 minutes of commentary each. Worth considering if you want context without a full guided tour.",
      "**Museum fatigue is real.** This 2-hour route is designed to prevent it — the panoramic terrace break at the midpoint gives you fresh air and a change of scenery before the final rooms.",
      "**Accessibility:** The Uffizi has elevators and is wheelchair accessible. Inform staff at Door 1 and they'll direct you.",
    ],
  },
  alternativeRoutes: {
    h2: "What If You Have More Time?",
    paragraphs: [
      "**3-4 hours (thorough visit):** Follow this same route but add the rooms in between. Spend more time in each stop, read the room descriptions, and explore the Northern European galleries (Rooms 41-45 — Dürer, Cranach, Holbein) that this route skips. Visit the Contini Bonacossi collection on the first floor.",
      "**4-6 hours (art lover's visit):** See everything. Study individual paintings, explore the recently opened ground-floor galleries, sit quietly with your favorite works, and take a proper lunch break at the terrace café. This is how I'd visit if I had a full day.",
      "**Under 1 hour (express visit):** If you're truly short on time, hit only three stops: Botticelli Hall (Rooms 10-14), the Panoramic Terrace, and Caravaggio (Room 90). You'll miss Leonardo, Michelangelo, and Raphael, but you'll see the two most iconic rooms.",
      "**Seasonal tip:** In summer (June-August), the gallery can get hot. Arrive at 8:15 AM to beat both crowds and heat. In winter (November-February), you might have rooms to yourself even at midday — the 2-hour route feels almost private.",
    ],
  },
  timingTips: {
    h2: "Timing Tips",
    items: [
      "Book the 8:15 AM slot for the best experience — you'll have rooms nearly to yourself",
      "Go straight to Room 2 and follow the route in order",
      "Skip rooms not on this list — you can always come back",
      "Spend the most time in Botticelli Hall (Rooms 10-14) — it's the highlight",
      "If a room is crowded, move on and circle back later",
      "Tuesday and Wednesday mornings are the quietest days of the week",
      "Avoid the first Sunday of the month — free entry means extreme crowds",
      "Late afternoon (after 4 PM) is the second-best time — day-trip groups have left",
    ],
  },
  relatedGuides: {
    h2: "Related Guides",
    links: [
      { text: "Uffizi Gallery Tickets — Prices, Timed Entry & How to Book", href: "/blog/uffizi-gallery-tickets/" },
      { text: "Uffizi Gallery Opening Hours 2026", href: "/blog/uffizi-gallery-hours/" },
      { text: "Uffizi Gallery Map & Floor Plan — Room-by-Room Guide", href: "/blog/uffizi-gallery-map-floor-plan/" },
      { text: "10 Famous Paintings in the Uffizi You Must See", href: "/blog/famous-paintings-uffizi-gallery/" },
      { text: "How to Avoid the Ticket-Office Queue at the Uffizi", href: "/blog/how-to-skip-the-line-uffizi/" },
      { text: "Caravaggio at the Uffizi — Medusa, Bacchus & Sacrifice of Isaac", href: "/blog/caravaggio-uffizi-gallery/" },
      { text: "Botticelli's Primavera — Meaning, Symbolism & Guide", href: "/blog/botticelli-primavera-uffizi/" },
      { text: "Florence in One Day — The Perfect Itinerary", href: "/blog/one-day-in-florence-itinerary/" },
    ],
  },
  closingP:
    "Want more depth? A guided tour covers the same route with expert commentary that brings every painting to life. If you prefer to explore independently, this itinerary gives you the structure to make the most of your 2 hours.",
  closingLinkText: "guided tour",
  ctaBottomTitle: "Book Your Uffizi Tickets",
  faq: [
    {
      q: "Can I really see the Uffizi in 2 hours?",
      a: "Yes — if you follow a planned route and focus on the highlights. You won't see every room, but you'll see every masterpiece that makes the Uffizi world-famous. This route covers Giotto, Botticelli, Leonardo, Michelangelo, Raphael, Titian, and Caravaggio.",
    },
    {
      q: "What time should I arrive for a 2-hour visit?",
      a: "The 8:15 AM opening slot is ideal. The gallery is nearly empty for the first hour, giving you unobstructed views of every painting. Late afternoon (4 PM+) is the second-best option.",
    },
    {
      q: "Should I get a guided tour or go alone?",
      a: "Both work well. A guided tour (about 2 hours, from \u20ac49) adds expert context that transforms the experience. Going solo with this itinerary gives you flexibility and saves money. First-time visitors benefit most from a guide.",
    },
    {
      q: "What if I want to see more than the highlights?",
      a: "Plan 3-4 hours and explore at your own pace. The 2-hour route covers the essential masterpieces, but the Uffizi has 101 rooms with thousands of works. Art enthusiasts can easily spend an entire day.",
    },
    {
      q: "How much do Uffizi tickets cost?",
      a: "\u20ac25 on the day of your visit, or \u20ac29 booked in advance (the \u20ac4 difference is the reservation fee). EU citizens 18-25 pay \u20ac2. Under 18 is free. The first Sunday of the month is free for everyone, at the gallery and the Vasari Corridor — a free nominative ticket is still required, and the Uffizi's is issued only at the ticket-office counter on the day.",
    },
    {
      q: "Which entrance do I use at the Uffizi?",
      a: "Everyone enters through Door 1, on the east side near the Arno. There is no separate skip-the-line entrance and no voucher to exchange \u2014 your emailed QR code plus the security check is all that stands between you and the gallery. Door 3 is closed to the public.",
    },
    {
      q: "Is the Uffizi open on Mondays?",
      a: "No. The Uffizi is closed every Monday year-round. Plan your visit for Tuesday through Sunday.",
    },
    {
      q: "What room is the Birth of Venus in?",
      a: "Rooms 10-14 (Botticelli Hall) on the second floor. The Birth of Venus and Primavera face each other across the room. This is stop 3 on the 2-hour route and where you should spend the most time.",
    },
  ],
};

const it: TwoHoursContent = {
  meta: {
    title: "Uffizi in 2 Ore | Percorso Sala per Sala e Opere da Non Perdere",
    description:
      "Visita gli Uffizi in 2 ore: percorso sala per sala con Botticelli, Leonardo, Michelangelo e Caravaggio. Itinerario pratico e autonomo per vedere il meglio.",
  },
  breadcrumb: "Guida 2 Ore",
  h1: "Gli Uffizi in 2 Ore",
  subtitle: "Cosa vedere e dove guardare",
  intro:
    "Due ore. Bastano per ammirare i capolavori pi\u00f9 importanti degli Uffizi senza fretta — a patto di sapere esattamente dove andare. Ho perfezionato questo percorso in anni di visite guidate: tocca ogni opera imperdibile e salta le sale che puoi permetterti di tralasciare. Segui questo itinerario sala per sala e uscirai avendo visto il meglio di 500 anni di arte.",
  ctaTopTitle: "Prenota la Fascia delle 8:15 per l'Esperienza Migliore",
  routeH2: "Il Tuo Percorso in 2 Ore",
  stops: [
    {
      tag: "Tappa 1 — 15 minuti",
      h3: "Sala 2: La Nascita della Pittura",
      paragraphs: [
        "Inizia qui. Tre enormi pale d'altare dominano la sala — le Maest\u00e0 di Cimabue, Duccio e Giotto. Fermati davanti alla Madonna di Ognissanti di Giotto (1310) e confrontala con quella di Cimabue sulla parete opposta. Le figure di Giotto hanno peso, volume ed emozione — \u00e8 qui che la pittura occidentale ha fatto il suo primo grande balzo in avanti. Nota come il trono della Madonna crea una vera profondit\u00e0, mentre quello di Cimabue resta piatto e simbolico.",
      ],
    },
    {
      tag: "Tappa 2 — 5 minuti",
      h3: "Sala 7: Il Primo Rinascimento",
      paragraphs: [
        "Soffermati brevemente sulla Madonna col Bambino e due Angeli di Filippo Lippi (c. 1465). Guarda il volto della Madonna — Lippi us\u00f2 come modella la sua amante, una suora di nome Lucrezia Buti. Il dipinto scandalizz\u00f2 Firenze, ma i Medici lo protessero. \u00c8 uno dei primi dipinti rinascimentali in cui il vero volto di una donna appare come la Vergine Maria.",
      ],
    },
    {
      tag: "Tappa 3 — 30 minuti",
      h3: "Sale 10-14: La Sala di Botticelli (Il Momento Clou)",
      paragraphs: [
        "Ecco perch\u00e9 sei venuto agli Uffizi. Prenditi il tuo tempo. La Nascita di Venere di Botticelli (c. 1485) \u00e8 appesa sulla parete di fondo. Fermati prima a distanza — osserva la composizione. Venere che emerge dal mare su una conchiglia, sospinta a riva dagli dei del vento. Poi avvicinati e guarda i dettagli: i singoli fili di capelli dorati, le rose che cadono dal cielo, la posa incredibilmente aggraziata ispirata a una scultura romana della Venus Pudica.",
        "Sulla parete opposta: la Primavera (c. 1482). \u00c8 pi\u00f9 complessa di quanto sembri a prima vista. Oltre 500 specie vegetali sono state identificate nel dipinto, tutte botanicamente accurate. Mercurio, le Tre Grazie, Venere, Flora, Clori e Zefiro — ogni figura racconta una parte di un'allegoria che gli studiosi discutono ancora oggi. Cerca Cupido proprio sopra Venere, mentre punta la freccia verso la Grazia centrale.",
        "Non perderti l'Adorazione dei Magi — Botticelli si \u00e8 dipinto tra la folla come un giovane in una veste gialla, che guarda direttamente lo spettatore dal bordo destro del quadro.",
      ],
    },
    {
      tag: "Tappa 4 — 15 minuti",
      h3: "Sala 35: Leonardo e Michelangelo",
      paragraphs: [
        "Due giganti, una sola sala. L'Annunciazione di Leonardo da Vinci (c. 1472) — dipinta quando aveva circa 20 anni. Nota le ali dell'angelo, studiate da vere ali di uccello. Il leggio di marmo \u00e8 una copia di un monumento funebre del Verrocchio. Guarda il paesaggio dietro Maria — quella distanza sfumata, tra il blu e il verde, \u00e8 la celebre tecnica dello \"sfumato\" di Leonardo.",
        "Dall'altra parte della sala: il Tondo Doni di Michelangelo (c. 1507) — l'unico dipinto su tavola completato dallo scultore del David. I colori sono di una vivacit\u00e0 quasi sconvolgente — rosa elettrico, blu brillanti, verdi acidi. Questo dipinto anticipa l'intera volta della Cappella Sistina. Nota come le figure si torcono in una spirale complessa — fu una rivoluzione.",
      ],
    },
    {
      tag: "Tappa 5 — 10 minuti",
      h3: "Sala 66: Raffaello",
      paragraphs: [
        "La Madonna del Cardellino di Raffaello (1506) — dipinta come regalo di nozze per il suo amico Lorenzo Nasi. Nel 1547, una frana distrusse la casa di Nasi e il dipinto si frantum\u00f2 in 17 pezzi. Fu pazientemente ricomposto nell'arco di decenni. Guarda attentamente e noterai ancora le linee sottili dove i frammenti sono stati uniti. Il dipinto \u00e8 sopravvissuto a 500 anni, a un disastro naturale, ed \u00e8 diventato pi\u00f9 bello proprio grazie a questo.",
      ],
    },
    {
      tag: "Tappa 6 — 10 minuti",
      h3: "Sala 83: Tiziano",
      paragraphs: [
        "La Venere di Urbino di Tiziano (1538) — probabilmente il nudo disteso pi\u00f9 famoso nella storia dell'arte. Osserva i dettagli che la maggior parte dei visitatori non coglie: il cagnolino addormentato (simbolo di fedelt\u00e0), le ancelle che cercano in un cassone nuziale sullo sfondo, la pianta di mirto sul davanzale (associata a Venere). Il dipinto \u00e8 una celebrazione della sensualit\u00e0, dell'amore e della vita domestica — tutto in un'unica tela.",
      ],
    },
    {
      tag: "Tappa 7 — 10 minuti",
      h3: "Sala 90: Caravaggio",
      paragraphs: [
        "Concludi la visita con la Medusa di Caravaggio (c. 1597) — dipinta su uno scudo circolare, la testa mozzata della Gorgone urla ancora nell'istante dopo la morte. Caravaggio us\u00f2 il proprio volto come modello. Sempre in questa sala: il suo Bacco e il Sacrificio di Isacco. Dopo la bellezza armoniosa di Botticelli e Raffaello, le ombre drammatiche e il crudo realismo di Caravaggio colpiscono come un fulmine.",
      ],
    },
  ],
  bonus: {
    tag: "Bonus — 10 minuti",
    h3: "La Terrazza Panoramica",
    p: "Se hai tempo, esci sulla terrazza del secondo piano sopra la Loggia dei Lanzi. La vista su Piazza della Signoria fino alla torre di Palazzo Vecchio \u00e8 spettacolare. C'\u00e8 un piccolo bar qui — un espresso con questa vista \u00e8 il modo perfetto per concludere la visita.",
  },
  practicalInfo: {
    h2: "Biglietti, Ingresso e Orari di Apertura",
    paragraphs: [
      "**Prezzi biglietti (2026):** €25 acquistando in giornata, €29 prenotando in anticipo (i €4 di differenza sono il diritto di prenotazione). Cittadini UE 18-25 anni: solo €2. Sotto i 18 anni: gratuito, ma il biglietto è nominativo e va comunque emesso. La prima domenica del mese è gratuita per tutti, galleria e Corridoio Vasariano: serve comunque un biglietto nominativo gratuito, e quello degli Uffizi si ritira solo allo sportello della biglietteria il giorno stesso — aspettatevi folla estrema.",
      "**Come acquistare:** Prenotate online su uffizi.it o tramite un rivenditore autorizzato. Scegliete la fascia delle 8:15 per questo percorso di 2 ore. Riceverete un codice QR via email — mostratelo dal telefono (o stampato). Non c'è nulla da ritirare e nessun voucher cartaceo da cambiare.",
      "**Ingresso:** Oggi entrano tutti dalla Porta 1, sul lato est dell'edificio vicino all'Arno. Da settembre 2025, con la nuova gestione CoopCulture, non esiste un ingresso separato né un prodotto 'salta la fila': ogni biglietto ha un orario prestabilito e tutti passano lo stesso controllo di sicurezza. Quello che il biglietto prenotato vi fa davvero risparmiare è la fila alla biglietteria.",
      "**La Porta 3 è chiusa** al pubblico. Lo sportello per il cambio voucher è stato dismesso a settembre 2025 — non perdete tempo a cercarla.",
      "**Orari:** Da martedì a domenica, dalle 8:15 alle 18:30. Ultimo ingresso alle 17:30. Chiuso ogni lunedì, più 1 gennaio e 25 dicembre.",
      "**Acquisto in loco:** Le macchinette self-service nell'area biglietteria accettano contanti e sono più veloci del banco; agli sportelli con personale si paga con carta. In entrambi i casi il prezzo in giornata è €25, se restano fasce orarie disponibili.",
    ],
  },
  beforeYourVisit: {
    h2: "Cosa Sapere Prima della Visita",
    paragraphs: [
      "**Deposito bagagli:** Borse e zaini grandi vanno lasciati al guardaroba gratuito dopo la sicurezza. Borsette e borse per fotocamere vanno bene.",
      "**Abbigliamento:** Nessun codice di abbigliamento specifico (a differenza delle chiese). Indossate scarpe comode — i pavimenti in marmo sono duri dopo 2 ore.",
      "**Acqua:** Potete portare una bottiglia d'acqua. La galleria può diventare calda, specialmente nei piani alti in estate.",
      "**Fotografie:** Consentite ovunque, senza flash. Alcuni dipinti sono dietro vetro — scattate con una leggera angolazione per evitare riflessi.",
      "**Audioguide:** Disponibili a noleggio all'ingresso (€6). Coprono le opere principali con 3-5 minuti di commento ciascuna.",
      "**L'affaticamento da museo è reale.** Questo percorso di 2 ore è progettato per prevenirlo — la pausa alla terrazza panoramica a metà percorso vi dà aria fresca e un cambio di scenario.",
      "**Accessibilità:** Gli Uffizi hanno ascensori e sono accessibili in sedia a rotelle. Informate il personale alla Porta 1.",
    ],
  },
  alternativeRoutes: {
    h2: "E Se Hai Più Tempo?",
    paragraphs: [
      "**3-4 ore (visita approfondita):** Segui lo stesso percorso ma aggiungi le sale intermedie. Dedica più tempo a ogni tappa, leggi le descrizioni delle sale ed esplora le gallerie dell'Europa del Nord (Sale 41-45 — Dürer, Cranach, Holbein).",
      "**4-6 ore (visita per appassionati):** Vedi tutto. Studia i singoli dipinti, esplora le gallerie al piano terra recentemente aperte, siediti tranquillamente davanti alle opere preferite e fai una vera pausa pranzo al bar della terrazza.",
      "**Meno di 1 ora (visita express):** Se hai davvero poco tempo, visita solo tre tappe: Sala di Botticelli (Sale 10-14), la Terrazza Panoramica e Caravaggio (Sala 90).",
      "**Consiglio stagionale:** In estate (giugno-agosto), la galleria può diventare calda. Arriva alle 8:15 per battere folla e caldo. In inverno (novembre-febbraio), potresti avere le sale per te anche a mezzogiorno.",
    ],
  },
  timingTips: {
    h2: "Consigli sugli Orari",
    items: [
      "Prenota la fascia delle 8:15 per l'esperienza migliore — avrai le sale quasi tutte per te",
      "Vai direttamente alla Sala 2 e segui il percorso nell'ordine indicato",
      "Salta le sale non presenti in questa lista — potrai sempre tornare",
      "Dedica più tempo alla Sala di Botticelli (Sale 10-14) — è il momento clou",
      "Se una sala è affollata, prosegui e torna dopo",
      "Martedì e mercoledì mattina sono i giorni più tranquilli della settimana",
      "Evita la prima domenica del mese — ingresso gratuito significa folla estrema",
      "Il tardo pomeriggio (dopo le 16) è il secondo miglior orario — i gruppi giornalieri sono partiti",
    ],
  },
  relatedGuides: {
    h2: "Guide Correlate",
    links: [
      { text: "Biglietti Uffizi — Prezzi, Ingresso a Orario e Come Prenotare", href: "/blog/uffizi-gallery-tickets/" },
      { text: "Orari di Apertura degli Uffizi 2026", href: "/blog/uffizi-gallery-hours/" },
      { text: "Mappa e Pianta degli Uffizi — Guida Sala per Sala", href: "/blog/uffizi-gallery-map-floor-plan/" },
      { text: "10 Dipinti Famosi degli Uffizi da Non Perdere", href: "/blog/famous-paintings-uffizi-gallery/" },
      { text: "Come Evitare la Fila alla Biglietteria degli Uffizi", href: "/blog/how-to-skip-the-line-uffizi/" },
      { text: "Caravaggio agli Uffizi — Medusa, Bacco e Sacrificio di Isacco", href: "/blog/caravaggio-uffizi-gallery/" },
      { text: "La Primavera di Botticelli — Significato e Simbolismo", href: "/blog/botticelli-primavera-uffizi/" },
      { text: "Firenze in Un Giorno — L'Itinerario Perfetto", href: "/blog/one-day-in-florence-itinerary/" },
    ],
  },
  closingP:
    "Vuoi approfondire? Una visita guidata copre lo stesso percorso con commenti esperti che danno vita a ogni dipinto. Se preferisci esplorare in autonomia, questo itinerario ti dà la struttura per sfruttare al meglio le tue 2 ore.",
  closingLinkText: "visita guidata",
  ctaBottomTitle: "Prenota i Tuoi Biglietti per gli Uffizi",
  faq: [
    {
      q: "Si possono davvero vedere gli Uffizi in 2 ore?",
      a: "Sì — se segui un percorso pianificato e ti concentri sui capolavori principali. Non vedrai tutte le sale, ma vedrai ogni opera che ha reso gli Uffizi famosi nel mondo. Questo itinerario copre Giotto, Botticelli, Leonardo, Michelangelo, Raffaello, Tiziano e Caravaggio.",
    },
    {
      q: "A che ora conviene arrivare per una visita di 2 ore?",
      a: "La prima fascia delle 8:15 è l'ideale. La galleria è quasi vuota nella prima ora, con una vista libera su ogni dipinto. Il tardo pomeriggio (dalle 16:00 in poi) è la seconda migliore opzione.",
    },
    {
      q: "Meglio una visita guidata o andare da soli?",
      a: "Entrambe le opzioni funzionano bene. Una visita guidata (circa 2 ore, da €49) aggiunge il contesto di un esperto che trasforma l'esperienza. Andare da soli con questo itinerario offre flessibilità e risparmio. Chi visita per la prima volta trae il massimo beneficio da una guida.",
    },
    {
      q: "E se voglio vedere più dei soli capolavori principali?",
      a: "Prevedi 3-4 ore ed esplora al tuo ritmo. Il percorso in 2 ore copre le opere essenziali, ma gli Uffizi hanno 101 sale con migliaia di opere. Gli appassionati d'arte possono facilmente trascorrere un'intera giornata.",
    },
    {
      q: "Quanto costano i biglietti degli Uffizi?",
      a: "€25 acquistando in giornata, €29 prenotando in anticipo (i €4 di differenza sono il diritto di prenotazione). Cittadini UE 18-25: €2. Sotto i 18: gratuito. Prima domenica del mese: gratuita per tutti, galleria e Corridoio Vasariano — serve comunque un biglietto nominativo gratuito, e quello degli Uffizi si ritira solo allo sportello della biglietteria il giorno stesso.",
    },
    {
      q: "Quale ingresso si usa agli Uffizi?",
      a: "Entrano tutti dalla Porta 1, sul lato est vicino all'Arno. Non esiste un ingresso separato salta la fila né alcun voucher da cambiare: basta il codice QR ricevuto via email, più il controllo di sicurezza. La Porta 3 è chiusa al pubblico.",
    },
    {
      q: "Gli Uffizi sono aperti di lunedì?",
      a: "No. Gli Uffizi sono chiusi ogni lunedì durante tutto l'anno. Pianifica la tua visita da martedì a domenica.",
    },
    {
      q: "In quale sala si trova la Nascita di Venere?",
      a: "Sale 10-14 (Sala di Botticelli) al secondo piano. La Nascita di Venere e la Primavera si fronteggiano nella sala. È la tappa 3 del percorso in 2 ore e dove dovresti dedicare più tempo.",
    },
  ],
};

const de: TwoHoursContent = {
  meta: {
    title: "Uffizien in 2 Stunden | Rundgang & Meisterwerke",
    description:
      "Die Highlights der Uffizien in 2 Stunden: Raum-fuer-Raum-Rundgang mit Botticelli, Leonardo, Michelangelo & Caravaggio. Praktischer Besuchsplan.",
  },
  breadcrumb: "2-Stunden-Guide",
  h1: "Die Uffizien in 2 Stunden",
  subtitle: "Was Sie sehen sollten und wo Sie hinschauen muessen",
  intro:
    "Zwei Stunden. Das reicht, um die groessten Meisterwerke der Uffizien ohne Hektik zu sehen — vorausgesetzt, Sie wissen genau, wohin Sie gehen muessen. Ich habe diesen Rundgang ueber Jahre hinweg bei Fuehrungen perfektioniert: Er umfasst jedes unverzichtbare Gemaelde und laesst die Raeume aus, die Sie getrost ueberspringen koennen. Folgen Sie diesem Raum-fuer-Raum-Plan und Sie werden am Ende 500 Jahre Kunstgeschichte in ihren Hoehepunkten erlebt haben.",
  ctaTopTitle: "Buchen Sie das 8:15-Uhr-Zeitfenster fuer das Beste Erlebnis",
  routeH2: "Ihr 2-Stunden-Rundgang",
  stops: [
    {
      tag: "Station 1 — 15 Minuten",
      h3: "Raum 2: Die Geburt der Malerei",
      paragraphs: [
        "Starten Sie hier. Drei riesige Altarbilder dominieren den Raum — die Maesta-Tafeln von Cimabue, Duccio und Giotto. Stellen Sie sich vor Giottos Ognissanti-Madonna (1310) und vergleichen Sie sie mit Cimabues Version an der gegenueberliegenden Wand. Giottos Figuren haben Gewicht, Volumen und Emotion — hier machte die westliche Malerei ihren ersten grossen Sprung. Beachten Sie, wie Marias Thron echte Tiefe erzeugt, waehrend Cimabues flach und symbolisch bleibt.",
      ],
    },
    {
      tag: "Station 2 — 5 Minuten",
      h3: "Raum 7: Fruehrenaissance",
      paragraphs: [
        "Verweilen Sie kurz bei Filippo Lippis Madonna mit Kind und zwei Engeln (ca. 1465). Schauen Sie auf das Gesicht der Madonna — Lippi verwendete seine Geliebte, eine Nonne namens Lucrezia Buti, als Modell. Das Gemaelde sorgte in Florenz fuer einen Skandal, doch die Medici schuetzten ihn. Es ist eines der ersten Renaissance-Gemaelde, in dem das Gesicht einer realen Frau als Jungfrau Maria erscheint.",
      ],
    },
    {
      tag: "Station 3 — 30 Minuten",
      h3: "Raeume 10-14: Botticelli-Saal (Das Highlight)",
      paragraphs: [
        "Deshalb sind Sie in die Uffizien gekommen. Nehmen Sie sich hier Zeit. Botticellis Geburt der Venus (ca. 1485) haengt an der hinteren Wand. Bleiben Sie zuerst auf Abstand stehen — erfassen Sie die Komposition. Venus, die auf einer Muschel aus dem Meer steigt, von den Windgoettern ans Ufer geweht. Dann treten Sie naeher und betrachten Sie die Details: die einzelnen Straehnen goldenen Haars, die vom Himmel fallenden Rosen, die unglaublich anmutige Pose, entlehnt einer roemischen Venus-Pudica-Skulptur.",
        "An der gegenueberliegenden Wand: Primavera (ca. 1482). Dieses Werk ist komplexer, als es auf den ersten Blick scheint. Ueber 500 Pflanzenarten wurden im Gemaelde identifiziert, alle botanisch korrekt. Merkur, die drei Grazien, Venus, Flora, Chloris und Zephyr — jede Figur erzaehlt einen Teil einer Allegorie, ueber die Forscher bis heute diskutieren. Suchen Sie Amor direkt ueber Venus, wie er seinen Pfeil auf die mittlere Grazie richtet.",
        "Uebersehen Sie nicht die Anbetung der Koenige — Botticelli hat sich selbst in die Menge gemalt, als junger Mann in einem gelben Gewand, der den Betrachter vom rechten Bildrand aus direkt anschaut.",
      ],
    },
    {
      tag: "Station 4 — 15 Minuten",
      h3: "Raum 35: Leonardo & Michelangelo",
      paragraphs: [
        "Zwei Giganten, ein Raum. Leonardo da Vincis Verkuendigung (ca. 1472) — gemalt, als er etwa 20 Jahre alt war. Beachten Sie die Engelfluegel, nach echten Vogelfluegeln studiert. Das Marmorpult ist eine Kopie eines Verrocchio-Grabmals. Schauen Sie auf die Landschaft hinter Maria — diese dunstige, blaugruene Ferne ist Leonardos charakteristische Sfumato-Technik.",
        "Gegenueber: Michelangelos Tondo Doni (ca. 1507) — das einzige vollendete Tafelgemaelde des Schoepfers des David. Die Farben sind fast schockierend lebendig — elektrisches Rosa, strahlendes Blau, saures Gruen. Dieses Gemaelde nimmt die gesamte Decke der Sixtinischen Kapelle vorweg. Beachten Sie, wie sich die Figuren in einer komplexen Spirale winden — das war revolutionaer.",
      ],
    },
    {
      tag: "Station 5 — 10 Minuten",
      h3: "Raum 66: Raffael",
      paragraphs: [
        "Raffaels Madonna mit dem Stieglitz (1506) — als Hochzeitsgeschenk fuer seinen Freund Lorenzo Nasi gemalt. 1547 zerstoerte ein Erdrutsch Nasis Haus und das Gemaelde zerbrach in 17 Stuecke. Es wurde ueber Jahrzehnte geduldig wieder zusammengesetzt. Schauen Sie genau hin — Sie koennen noch feine Linien erkennen, wo die Fragmente zusammengefuegt wurden. Das Gemaelde hat 500 Jahre ueberlebt, eine Naturkatastrophe ueberstanden und ist gerade dadurch schoener geworden.",
      ],
    },
    {
      tag: "Station 6 — 10 Minuten",
      h3: "Raum 83: Tizian",
      paragraphs: [
        "Tizians Venus von Urbino (1538) — moeglicherweise der beruehmteste liegende Akt der Kunstgeschichte. Achten Sie auf Details, die die meisten Besucher uebersehen: den schlafenden Hund (Symbol der Treue), die Dienerinnen im Hintergrund, die in einer Hochzeitstruhe suchen, die Myrtenpflanze auf dem Fensterbrett (mit Venus assoziiert). Das Gemaelde feiert Sinnlichkeit, Liebe und haeusliches Leben — alles auf einer Leinwand.",
      ],
    },
    {
      tag: "Station 7 — 10 Minuten",
      h3: "Raum 90: Caravaggio",
      paragraphs: [
        "Beenden Sie Ihren Besuch mit Caravaggios Medusa (ca. 1597) — gemalt auf einem runden Schild, schreit das abgetrennte Gorgonenhaupt noch im Moment nach dem Tod. Caravaggio verwendete sein eigenes Gesicht als Modell. Ebenfalls in diesem Raum: sein Bacchus und die Opferung Isaaks. Nach der harmonischen Schoenheit von Botticelli und Raffael wirken Caravaggios dramatische Schatten und sein roher Realismus wie ein Donnerschlag.",
      ],
    },
  ],
  bonus: {
    tag: "Bonus — 10 Minuten",
    h3: "Die Panoramaterrasse",
    p: "Falls Sie noch Zeit haben, gehen Sie auf die Terrasse im zweiten Stock ueber der Loggia dei Lanzi. Der Blick ueber die Piazza della Signoria zum Turm des Palazzo Vecchio ist atemberaubend. Es gibt ein kleines Cafe hier — ein Espresso mit diesem Ausblick ist der perfekte Abschluss Ihres Besuchs.",
  },
  practicalInfo: {
    h2: "Tickets, Eingang & Oeffnungszeiten",
    paragraphs: [
      "**Ticketpreise (2026):** €25 bei Kauf am Besuchstag, €29 im Vorverkauf (die €4 Differenz sind die Reservierungsgebuehr). EU-Buerger 18-25: nur €2. Unter 18: kostenlos, das Ticket wird aber auf den Namen ausgestellt. Erster Sonntag im Monat: kostenlos fuer alle, Galerie und Vasarikorridor — ein kostenloses personalisiertes Ticket ist trotzdem noetig, und das der Uffizien gibt es nur am Schalter der Ticketkasse am Tag selbst. Aber extreme Menschenmengen.",
      "**Kaufen:** Online auf uffizi.it oder ueber lizenzierte Wiederverkaeufer. Waehlen Sie das 8:15-Uhr-Zeitfenster fuer diesen 2-Stunden-Rundgang. Sie erhalten einen QR-Code per E-Mail — nichts abzuholen, kein Papiervoucher zum Umtauschen.",
      "**Eingang:** Alle Besucher betreten die Galerie heute durch Eingang 1 auf der Ostseite nahe dem Arno. Seit der Uebernahme durch CoopCulture im September 2025 gibt es keinen separaten Eingang und kein Skip-the-Line-Produkt mehr: Jedes Ticket gilt fuer ein festes Zeitfenster, und alle durchlaufen dieselbe Sicherheitskontrolle. Was ein gebuchtes Ticket Ihnen erspart, ist die Warteschlange an der Kasse.",
      "**Tuer 3 ist geschlossen.** Der frueher dortige Voucher-Umtausch wurde im September 2025 eingestellt — verschwenden Sie keine Zeit damit.",
      "**Oeffnungszeiten:** Dienstag bis Sonntag, 8:15-18:30 Uhr. Letzter Einlass 17:30 Uhr. Montags geschlossen, plus 1. Januar und 25. Dezember.",
      "**Kauf vor Ort:** Selbstbedienungsautomaten im Kassenbereich nehmen Bargeld und sind schneller als der Schalter; an den besetzten Schaltern zahlen Sie mit Karte. In beiden Faellen gilt der Tagespreis von €25, solange noch Zeitfenster frei sind.",
    ],
  },
  beforeYourVisit: {
    h2: "Vor Ihrem Besuch Wissen",
    paragraphs: [
      "**Gepaeckaufbewahrung:** Grosse Taschen und Rucksaecke muessen an der kostenlosen Garderobe nach der Sicherheitskontrolle abgegeben werden.",
      "**Kleidung:** Kein spezieller Dresscode (anders als in Kirchen). Bequeme Schuhe tragen — Marmorboeden sind nach 2 Stunden hart.",
      "**Wasser:** Sie koennen eine Wasserflasche mitbringen. Die Galerie kann warm werden, besonders in den oberen Stockwerken im Sommer.",
      "**Fotografieren:** Ueberall erlaubt, ohne Blitz.",
      "**Audioguides:** Am Eingang zu mieten (€6). Decken Hauptwerke mit 3-5 Minuten Kommentar ab.",
      "**Museummuedigkeit ist real.** Dieser 2-Stunden-Rundgang ist dagegen konzipiert — die Terrassenpause gibt Ihnen frische Luft.",
      "**Barrierefreiheit:** Aufzuege vorhanden. Personal an Tuer 1 informieren.",
    ],
  },
  alternativeRoutes: {
    h2: "Was Wenn Sie Mehr Zeit Haben?",
    paragraphs: [
      "**3-4 Stunden (gruendlicher Besuch):** Gleiche Route plus Zwischenraeume. Mehr Zeit pro Station, Raumbeschreibungen lesen, nordeuropaeische Galerien (Raeume 41-45) erkunden.",
      "**4-6 Stunden (Kunstliebhaber):** Alles sehen. Einzelne Gemaelde studieren, Erdgeschoss-Galerien erkunden, richtige Mittagspause im Terrassencafe.",
      "**Unter 1 Stunde (Express):** Nur drei Stationen: Botticelli-Saal (Raeume 10-14), Panoramaterrasse und Caravaggio (Raum 90).",
      "**Saisontipp:** Im Sommer um 8:15 kommen gegen Hitze und Menschenmengen. Im Winter koennen Sie Raeume auch mittags fuer sich haben.",
    ],
  },
  timingTips: {
    h2: "Tipps zum Timing",
    items: [
      "Buchen Sie das 8:15-Uhr-Zeitfenster — Sie haben die Raeume fast fuer sich allein",
      "Gehen Sie direkt zu Raum 2 und folgen Sie dem Rundgang",
      "Ueberspringen Sie Raeume, die nicht auf dieser Liste stehen",
      "Verbringen Sie die meiste Zeit im Botticelli-Saal (Raeume 10-14)",
      "Wenn ein Raum ueberfuellt ist, gehen Sie weiter und kommen spaeter zurueck",
      "Dienstag und Mittwoch morgens sind die ruhigsten Tage",
      "Vermeiden Sie den ersten Sonntag im Monat — kostenloser Eintritt bedeutet extreme Menschenmengen",
      "Spaeter Nachmittag (nach 16 Uhr) ist die zweitbeste Zeit",
    ],
  },
  relatedGuides: {
    h2: "Verwandte Guides",
    links: [
      { text: "Uffizien Tickets — Preise & Buchung", href: "/blog/uffizi-gallery-tickets/" },
      { text: "Uffizien Oeffnungszeiten 2026", href: "/blog/uffizi-gallery-hours/" },
      { text: "Uffizien Raumplan & Grundriss", href: "/blog/uffizi-gallery-map-floor-plan/" },
      { text: "10 Beruehmte Gemaelde der Uffizien", href: "/blog/famous-paintings-uffizi-gallery/" },
      { text: "Kassen-Warteschlange in den Uffizien Umgehen", href: "/blog/how-to-skip-the-line-uffizi/" },
      { text: "Caravaggio in den Uffizien", href: "/blog/caravaggio-uffizi-gallery/" },
      { text: "Botticellis Primavera — Bedeutung & Symbolik", href: "/blog/botticelli-primavera-uffizi/" },
      { text: "Florenz an Einem Tag — Das Perfekte Programm", href: "/blog/one-day-in-florence-itinerary/" },
    ],
  },
  closingP:
    "Moechten Sie mehr Tiefe? Eine gefuehrte Tour deckt denselben Rundgang ab, mit Expertenkommentaren, die jedes Gemaelde zum Leben erwecken. Wenn Sie lieber auf eigene Faust erkunden, gibt Ihnen dieser Plan die Struktur, um Ihre 2 Stunden optimal zu nutzen.",
  closingLinkText: "gefuehrte Tour",
  ctaBottomTitle: "Buchen Sie Ihre Uffizien-Tickets",
  faq: [
    {
      q: "Kann man die Uffizien wirklich in 2 Stunden sehen?",
      a: "Ja — wenn Sie einem geplanten Rundgang folgen und sich auf die Hoehepunkte konzentrieren. Dieser Rundgang umfasst Giotto, Botticelli, Leonardo, Michelangelo, Raffael, Tizian und Caravaggio.",
    },
    {
      q: "Um wie viel Uhr sollte man kommen?",
      a: "Das 8:15-Uhr-Zeitfenster ist ideal. Die Galerie ist in der ersten Stunde fast leer. Spaeter Nachmittag (ab 16 Uhr) ist die zweitbeste Option.",
    },
    {
      q: "Fuehrung oder allein?",
      a: "Beides funktioniert. Eine Fuehrung (ca. 2 Stunden, ab €49) bietet Expertenkontext. Allein mit diesem Plan bietet Flexibilitaet und spart Geld.",
    },
    {
      q: "Was wenn ich mehr sehen moechte?",
      a: "Planen Sie 3-4 Stunden. Die Uffizien haben 101 Raeume mit Tausenden von Werken.",
    },
    {
      q: "Wie viel kosten Uffizien-Tickets?",
      a: "€25 am Besuchstag oder €29 im Vorverkauf (die €4 Differenz ist die Reservierungsgebuehr). EU-Buerger 18-25: €2. Unter 18: kostenlos.",
    },
    {
      q: "Welchen Eingang benutze ich?",
      a: "Alle Besucher gehen durch Eingang 1 auf der Ostseite. Es gibt keinen separaten Skip-the-Line-Eingang und keinen Voucher zum Umtauschen — Ihr QR-Code aus der E-Mail und die Sicherheitskontrolle genuegen. Tuer 3 ist geschlossen.",
    },
    {
      q: "Sind die Uffizien montags geoeffnet?",
      a: "Nein. Jeden Montag ganzjaehrig geschlossen.",
    },
    {
      q: "In welchem Raum ist die Geburt der Venus?",
      a: "Raeume 10-14 (Botticelli-Saal), 2. OG. Gegenueber der Primavera. Station 3 im 2-Stunden-Rundgang.",
    },
  ],
};

const fr: TwoHoursContent = {
  meta: {
    title: "Les Offices en 2 Heures | Parcours Salle par Salle",
    description:
      "Visitez les Offices en 2 heures : parcours salle par salle avec Botticelli, Leonard de Vinci, Michel-Ange et Caravage. Itineraire pratique et autonome.",
  },
  breadcrumb: "Guide 2 Heures",
  h1: "Les Offices en 2 Heures",
  subtitle: "Que voir et ou regarder",
  intro:
    "Deux heures. C'est suffisant pour admirer les plus grands chefs-d'oeuvre des Offices sans se presser — a condition de savoir exactement ou aller. J'ai perfectionne ce parcours au fil d'annees de visites guidees : il couvre chaque oeuvre incontournable tout en sautant les salles que vous pouvez vous permettre de manquer. Suivez cet itineraire salle par salle et vous ressortirez en ayant vu le meilleur de 500 ans d'art.",
  ctaTopTitle: "Reservez le Creneau de 8h15 pour la Meilleure Experience",
  routeH2: "Votre Parcours en 2 Heures",
  stops: [
    {
      tag: "Arret 1 — 15 minutes",
      h3: "Salle 2 : La Naissance de la Peinture",
      paragraphs: [
        "Commencez ici. Trois enormes retables dominent la salle — les Maesta de Cimabue, Duccio et Giotto. Placez-vous devant la Madone d'Ognissanti de Giotto (1310) et comparez-la a celle de Cimabue sur le mur oppose. Les figures de Giotto ont du poids, du volume et de l'emotion — c'est ici que la peinture occidentale a fait son premier grand bond en avant. Remarquez comment le trone de la Madone cree une veritable profondeur, tandis que celui de Cimabue reste plat et symbolique.",
      ],
    },
    {
      tag: "Arret 2 — 5 minutes",
      h3: "Salle 7 : Le Debut de la Renaissance",
      paragraphs: [
        "Arretez-vous brievement devant la Vierge a l'Enfant avec deux Anges de Filippo Lippi (v. 1465). Regardez le visage de la Madone — Lippi a utilise comme modele sa maitresse, une religieuse nommee Lucrezia Buti. Le tableau a scandalise Florence, mais les Medicis l'ont protege. C'est l'un des premiers tableaux de la Renaissance ou le visage d'une vraie femme apparait en Vierge Marie.",
      ],
    },
    {
      tag: "Arret 3 — 30 minutes",
      h3: "Salles 10-14 : La Salle Botticelli (Le Temps Fort)",
      paragraphs: [
        "Voila pourquoi vous etes venus aux Offices. Prenez votre temps ici. La Naissance de Venus de Botticelli (v. 1485) est accrochee au fond de la salle. Restez d'abord a distance — appreciez la composition. Venus emergant de la mer sur un coquillage, poussee vers le rivage par les dieux du vent. Puis approchez-vous et observez les details : les meches individuelles de cheveux dores, les roses tombant du ciel, la pose d'une grace incroyable empruntee a une sculpture romaine de Venus Pudica.",
        "Sur le mur oppose : le Printemps (v. 1482). Cette oeuvre est plus complexe qu'il n'y parait. Plus de 500 especes vegetales ont ete identifiees dans le tableau, toutes botaniquement exactes. Mercure, les Trois Graces, Venus, Flore, Chloris et Zephyr — chaque figure raconte une partie d'une allegorie que les chercheurs debattent encore. Cherchez Cupidon juste au-dessus de Venus, pointant sa fleche vers la Grace du milieu.",
        "Ne manquez pas l'Adoration des Mages — Botticelli s'est peint dans la foule, jeune homme en robe jaune, regardant directement le spectateur depuis le bord droit du tableau.",
      ],
    },
    {
      tag: "Arret 4 — 15 minutes",
      h3: "Salle 35 : Leonard de Vinci & Michel-Ange",
      paragraphs: [
        "Deux geants, une seule salle. L'Annonciation de Leonard de Vinci (v. 1472) — peinte quand il avait environ 20 ans. Remarquez les ailes de l'ange, etudiees d'apres de vraies ailes d'oiseaux. Le lutrin en marbre est une copie d'un tombeau de Verrocchio. Regardez le paysage derriere Marie — cette distance brumeuse, entre bleu et vert, c'est la technique du \"sfumato\" signature de Leonard.",
        "De l'autre cote de la salle : le Tondo Doni de Michel-Ange (v. 1507) — le seul tableau sur panneau acheve par le sculpteur du David. Les couleurs sont d'une vivacite presque choquante — des roses electriques, des bleus eclatants, des verts acides. Ce tableau prefigure l'ensemble du plafond de la Chapelle Sixtine. Remarquez comment les figures se tordent en une spirale complexe — c'etait revolutionnaire.",
      ],
    },
    {
      tag: "Arret 5 — 10 minutes",
      h3: "Salle 66 : Raphael",
      paragraphs: [
        "La Madone au Chardonneret de Raphael (1506) — peinte comme cadeau de mariage pour son ami Lorenzo Nasi. En 1547, un glissement de terrain detruisit la maison de Nasi et le tableau se brisa en 17 morceaux. Il fut patiemment reassemble au fil des decennies. Regardez de pres et vous verrez encore les fines lignes ou les fragments ont ete joints. Le tableau a survecu 500 ans, une catastrophe naturelle, et en est devenu plus beau.",
      ],
    },
    {
      tag: "Arret 6 — 10 minutes",
      h3: "Salle 83 : Titien",
      paragraphs: [
        "La Venus d'Urbino de Titien (1538) — probablement le nu allonge le plus celebre de l'histoire de l'art. Observez les details que la plupart des visiteurs manquent : le petit chien endormi (symbole de fidelite), les servantes fouillant un coffre de mariage a l'arriere-plan, la plante de myrte sur le rebord de fenetre (associee a Venus). Le tableau est une celebration de la sensualite, de l'amour et de la vie domestique — le tout sur une seule toile.",
      ],
    },
    {
      tag: "Arret 7 — 10 minutes",
      h3: "Salle 90 : Le Caravage",
      paragraphs: [
        "Terminez votre visite avec la Meduse du Caravage (v. 1597) — peinte sur un bouclier circulaire, la tete tranchee de la Gorgone crie encore dans l'instant suivant la mort. Le Caravage a utilise son propre visage comme modele. Egalement dans cette salle : son Bacchus et le Sacrifice d'Isaac. Apres la beaute harmonieuse de Botticelli et Raphael, les ombres dramatiques et le realisme brut du Caravage frappent comme un coup de tonnerre.",
      ],
    },
  ],
  bonus: {
    tag: "Bonus — 10 minutes",
    h3: "La Terrasse Panoramique",
    p: "Si vous avez le temps, montez sur la terrasse du deuxieme etage au-dessus de la Loggia dei Lanzi. La vue sur la Piazza della Signoria jusqu'a la tour du Palazzo Vecchio est spectaculaire. Il y a un petit cafe ici — un espresso avec cette vue est la facon parfaite de conclure votre visite.",
  },
  practicalInfo: {
    h2: "Billets, Entree et Horaires d'Ouverture",
    paragraphs: [
      "**Prix des billets (2026) :** €25 le jour meme de la visite, €29 en reservant a l'avance (les €4 d'ecart correspondent aux frais de reservation). Citoyens UE 18-25 : €2. Moins de 18 : gratuit, mais le billet est nominatif et doit tout de meme etre emis. Premier dimanche du mois : gratuit pour tous, galerie et Corridor de Vasari — un billet nominatif gratuit reste obligatoire, et celui des Offices se retire uniquement au guichet de la billetterie le jour meme. Mais foules extremes.",
      "**Achat :** Reservez en ligne sur uffizi.it. Choisissez le creneau de 8h15 pour ce parcours de 2 heures. Vous recevez un QR code par e-mail — rien a retirer, aucun bon papier a echanger.",
      "**Entree :** Tout le monde entre desormais par la Porte 1, cote est pres de l'Arno. Depuis la reprise par CoopCulture en septembre 2025, il n'y a plus d'entree separee ni de produit 'coupe-file' : chaque billet correspond a un horaire precis et tout le monde passe le meme controle de securite. Ce qu'un billet reserve vous evite vraiment, c'est la file d'attente a la billetterie.",
      "**La Porte 3 est fermee** au public. Le guichet d'echange de bons qui s'y trouvait a ete supprime en septembre 2025.",
      "**Horaires :** Mardi au dimanche, 8h15 a 18h30. Derniere entree 17h30. Ferme le lundi, plus 1er janvier et 25 decembre.",
      "**Achat sur place :** Les bornes automatiques du hall de billetterie acceptent les especes et sont plus rapides que le comptoir ; aux guichets tenus par du personnel, on paie par carte. Dans les deux cas, le tarif du jour est de €25, dans la limite des creneaux disponibles.",
    ],
  },
  beforeYourVisit: {
    h2: "A Savoir Avant Votre Visite",
    paragraphs: [
      "**Consigne :** Les grands sacs doivent etre deposes au vestiaire gratuit apres la securite.",
      "**Vetements :** Pas de code vestimentaire specifique (contrairement aux eglises). Chaussures confortables indispensables — les sols en marbre sont durs apres 2 heures.",
      "**Eau :** Vous pouvez apporter une bouteille d'eau. La galerie peut devenir chaude en ete.",
      "**Photos :** Autorisees partout, sans flash.",
      "**Audioguides :** A louer a l'entree (€6). 3-5 minutes de commentaire par oeuvre majeure.",
      "**La fatigue museale est reelle.** Ce parcours de 2 heures est concu pour la prevenir — la pause terrasse a mi-parcours vous offre de l'air frais.",
      "**Accessibilite :** Ascenseurs disponibles. Informez le personnel a la Porte 1.",
    ],
  },
  alternativeRoutes: {
    h2: "Et Si Vous Avez Plus de Temps ?",
    paragraphs: [
      "**3-4 heures (visite approfondie) :** Meme parcours plus les salles intermediaires. Plus de temps a chaque arret, galeries nord-europeennes (Salles 41-45).",
      "**4-6 heures (passionnes d'art) :** Tout voir. Etudier les tableaux individuels, explorer le rez-de-chaussee, vraie pause dejeuner au cafe-terrasse.",
      "**Moins d'1 heure (express) :** Trois arrets seulement : Salle Botticelli (Salles 10-14), Terrasse Panoramique et Caravage (Salle 90).",
      "**Conseil saisonnier :** En ete, arrivez a 8h15 contre chaleur et foules. En hiver, vous pouvez avoir les salles pour vous meme a midi.",
    ],
  },
  timingTips: {
    h2: "Conseils de Timing",
    items: [
      "Reservez le creneau de 8h15 — les salles presque pour vous seul",
      "Allez directement a la Salle 2 et suivez le parcours dans l'ordre",
      "Sautez les salles qui ne figurent pas sur cette liste",
      "Passez le plus de temps dans la Salle Botticelli (Salles 10-14)",
      "Si une salle est bondee, passez et revenez plus tard",
      "Mardi et mercredi matin sont les jours les plus calmes",
      "Evitez le premier dimanche du mois — gratuit mais foules extremes",
      "Fin d'apres-midi (apres 16h) est le deuxieme meilleur moment",
    ],
  },
  relatedGuides: {
    h2: "Guides Associes",
    links: [
      { text: "Billets des Offices — Prix et Comment Reserver", href: "/blog/uffizi-gallery-tickets/" },
      { text: "Horaires des Offices 2026", href: "/blog/uffizi-gallery-hours/" },
      { text: "Plan de la Galerie des Offices", href: "/blog/uffizi-gallery-map-floor-plan/" },
      { text: "10 Tableaux Celebres des Offices", href: "/blog/famous-paintings-uffizi-gallery/" },
      { text: "Comment Eviter la File a la Billetterie des Offices", href: "/blog/how-to-skip-the-line-uffizi/" },
      { text: "Caravage aux Offices", href: "/blog/caravaggio-uffizi-gallery/" },
      { text: "Le Printemps de Botticelli", href: "/blog/botticelli-primavera-uffizi/" },
      { text: "Florence en Un Jour", href: "/blog/one-day-in-florence-itinerary/" },
    ],
  },
  closingP:
    "Envie d'approfondir ? Une visite guidee couvre le meme parcours avec des commentaires d'experts qui donnent vie a chaque tableau. Si vous preferez explorer seul, cet itineraire vous offre la structure pour tirer le meilleur parti de vos 2 heures.",
  closingLinkText: "visite guidee",
  ctaBottomTitle: "Reservez Vos Billets pour les Offices",
  faq: [
    { q: "Peut-on voir les Offices en 2 heures ?", a: "Oui — avec un parcours planifie. Ce parcours couvre Giotto, Botticelli, Leonard, Michel-Ange, Raphael, Titien et Le Caravage." },
    { q: "A quelle heure arriver ?", a: "Le creneau de 8h15 est ideal. Galerie presque vide la premiere heure. Fin d'apres-midi (16h+) en deuxieme choix." },
    { q: "Visite guidee ou libre ?", a: "Les deux fonctionnent. Guidee (~2h, des €49) pour le contexte expert. Libre avec cet itineraire pour la flexibilite." },
    { q: "Et si je veux voir plus ?", a: "Prevoyez 3-4 heures. Les Offices ont 101 salles avec des milliers d'oeuvres." },
    { q: "Combien coutent les billets ?", a: "€25 le jour meme ou €29 en reservant a l'avance (les €4 d'ecart sont les frais de reservation). UE 18-25 : €2. Moins de 18 : gratuit." },
    { q: "Quelle entree utiliser ?", a: "Tout le monde entre par la Porte 1, cote est. Pas d'entree coupe-file separee ni de bon a echanger : votre QR code recu par e-mail et le controle de securite suffisent. La Porte 3 est fermee." },
    { q: "Les Offices sont-ils ouverts le lundi ?", a: "Non. Fermes chaque lundi de l'annee." },
    { q: "Ou est la Naissance de Venus ?", a: "Salles 10-14 (Salle Botticelli), 2e etage. Arret 3 du parcours." },
  ],
};

const es: TwoHoursContent = {
  meta: {
    title: "Los Uffizi en 2 Horas | Recorrido Sala por Sala",
    description:
      "Lo mejor de los Uffizi en 2 horas: recorrido sala por sala con Botticelli, Leonardo, Miguel Angel y Caravaggio. Itinerario practico y autoguiado.",
  },
  breadcrumb: "Guia de 2 Horas",
  h1: "Los Uffizi en 2 Horas",
  subtitle: "Que ver y donde mirar",
  intro:
    "Dos horas. Es tiempo suficiente para ver las mayores obras maestras de los Uffizi sin prisas — si sabes exactamente adonde ir. He perfeccionado esta ruta a lo largo de anos guiando visitantes: incluye cada pintura imprescindible y omite las salas que puedes permitirte saltar. Sigue este itinerario sala por sala y saldras habiendo visto lo mejor de 500 anos de arte.",
  ctaTopTitle: "Reserva la Franja de las 8:15 para la Mejor Experiencia",
  routeH2: "Tu Recorrido en 2 Horas",
  stops: [
    {
      tag: "Parada 1 — 15 minutos",
      h3: "Sala 2: El Nacimiento de la Pintura",
      paragraphs: [
        "Empieza aqui. Tres enormes retablos dominan la sala — las Maesta de Cimabue, Duccio y Giotto. Coloca frente a la Madonna de Ognissanti de Giotto (1310) y comparala con la version de Cimabue en la pared opuesta. Las figuras de Giotto tienen peso, volumen y emocion — aqui es donde la pintura occidental dio su primer gran salto adelante. Observa como el trono de la Madonna crea profundidad real, mientras el de Cimabue permanece plano y simbolico.",
      ],
    },
    {
      tag: "Parada 2 — 5 minutos",
      h3: "Sala 7: Primer Renacimiento",
      paragraphs: [
        "Detente brevemente ante la Madonna con el Nino y dos Angeles de Filippo Lippi (c. 1465). Mira el rostro de la Madonna — Lippi uso como modelo a su amante, una monja llamada Lucrezia Buti. La pintura escandalizo Florencia, pero los Medici lo protegieron. Es una de las primeras pinturas renacentistas en las que el rostro de una mujer real aparece como la Virgen Maria.",
      ],
    },
    {
      tag: "Parada 3 — 30 minutos",
      h3: "Salas 10-14: La Sala de Botticelli (El Momento Cumbre)",
      paragraphs: [
        "Para esto has venido a los Uffizi. Tomate tu tiempo aqui. El Nacimiento de Venus de Botticelli (c. 1485) cuelga en la pared del fondo. Quedate primero a distancia — contempla la composicion. Venus emergiendo del mar sobre una concha, empujada a la orilla por los dioses del viento. Luego acercate y observa los detalles: las hebras individuales de cabello dorado, las rosas cayendo del cielo, la pose increiblemente gracia inspirada en una escultura romana de la Venus Pudica.",
        "En la pared opuesta: la Primavera (c. 1482). Esta obra es mas compleja de lo que parece a primera vista. Se han identificado mas de 500 especies vegetales en la pintura, todas botanicamente exactas. Mercurio, las Tres Gracias, Venus, Flora, Cloris y Cefiro — cada figura cuenta parte de una alegoria que los estudiosos siguen debatiendo. Busca a Cupido justo encima de Venus, apuntando su flecha hacia la Gracia del centro.",
        "No te pierdas la Adoracion de los Magos — Botticelli se pinto a si mismo entre la multitud como un joven con tunica amarilla, mirando directamente al espectador desde el borde derecho del cuadro.",
      ],
    },
    {
      tag: "Parada 4 — 15 minutos",
      h3: "Sala 35: Leonardo y Miguel Angel",
      paragraphs: [
        "Dos gigantes, una sola sala. La Anunciacion de Leonardo da Vinci (c. 1472) — pintada cuando tenia unos 20 anos. Observa las alas del angel, estudiadas de alas reales de aves. El atril de marmol es una copia de un monumento funerario de Verrocchio. Mira el paisaje detras de Maria — esa distancia brumosa, entre azul y verde, es la tecnica del \"sfumato\" caracteristica de Leonardo.",
        "Al otro lado de la sala: el Tondo Doni de Miguel Angel (c. 1507) — la unica pintura sobre tabla completada por el escultor del David. Los colores son de una vivacidad casi impactante — rosas electricos, azules brillantes, verdes acidos. Esta pintura anticipa todo el techo de la Capilla Sixtina. Observa como las figuras se retuercen en una espiral compleja — fue revolucionario.",
      ],
    },
    {
      tag: "Parada 5 — 10 minutos",
      h3: "Sala 66: Rafael",
      paragraphs: [
        "La Madonna del Jilguero de Rafael (1506) — pintada como regalo de boda para su amigo Lorenzo Nasi. En 1547, un deslizamiento de tierra destruyo la casa de Nasi y la pintura se rompio en 17 pedazos. Fue pacientemente reensamblada a lo largo de decadas. Mira de cerca y aun podras ver las lineas finas donde los fragmentos fueron unidos. La pintura sobrevivio 500 anos, un desastre natural, y se hizo mas bella precisamente por ello.",
      ],
    },
    {
      tag: "Parada 6 — 10 minutos",
      h3: "Sala 83: Tiziano",
      paragraphs: [
        "La Venus de Urbino de Tiziano (1538) — posiblemente el desnudo reclinado mas famoso de la historia del arte. Observa los detalles que la mayoria de visitantes pasan por alto: el perrito dormido (simbolo de fidelidad), las sirvientas buscando en un arcon nupcial al fondo, la planta de mirto en el alfeizar (asociada a Venus). La pintura es una celebracion de la sensualidad, el amor y la vida domestica — todo en un solo lienzo.",
      ],
    },
    {
      tag: "Parada 7 — 10 minutos",
      h3: "Sala 90: Caravaggio",
      paragraphs: [
        "Termina tu visita con la Medusa de Caravaggio (c. 1597) — pintada sobre un escudo circular, la cabeza cortada de la Gorgona sigue gritando en el instante posterior a la muerte. Caravaggio uso su propio rostro como modelo. Tambien en esta sala: su Baco y el Sacrificio de Isaac. Despues de la belleza armoniosa de Botticelli y Rafael, las sombras dramaticas y el crudo realismo de Caravaggio golpean como un trueno.",
      ],
    },
  ],
  bonus: {
    tag: "Bonus — 10 minutos",
    h3: "La Terraza Panoramica",
    p: "Si tienes tiempo, sube a la terraza del segundo piso sobre la Loggia dei Lanzi. Las vistas de la Piazza della Signoria hasta la torre del Palazzo Vecchio son espectaculares. Hay una pequena cafeteria aqui — un espresso con estas vistas es la forma perfecta de terminar tu visita.",
  },
  practicalInfo: {
    h2: "Entradas, Acceso y Horarios",
    paragraphs: [
      "**Precios (2026):** €25 comprando el mismo dia de la visita, €29 reservando por anticipado (los €4 de diferencia son los gastos de reserva). Ciudadanos UE 18-25: €2. Menores de 18: gratis, aunque la entrada es nominativa y hay que emitirla igualmente. Primer domingo del mes: gratis para todos, galeria y Corredor Vasariano — sigue haciendo falta una entrada nominativa gratuita, y la de los Uffizi solo se recoge en el mostrador de taquilla el mismo dia. Pero multitudes extremas.",
      "**Como comprar:** Reserva en uffizi.it. Elige la franja de las 8:15 para este recorrido de 2 horas. Recibiras un codigo QR por correo — no hay nada que recoger ni ningun bono en papel que canjear.",
      "**Entrada:** Ahora entra todo el mundo por la Puerta 1, lado este cerca del Arno. Desde que CoopCulture asumio la gestion en septiembre de 2025 no hay entrada separada ni producto 'sin colas': cada entrada tiene una hora asignada y todos pasan el mismo control de seguridad. Lo que si te ahorra una entrada reservada es la cola de la taquilla.",
      "**La Puerta 3 esta cerrada** al publico. El mostrador de canje de bonos que habia alli se suprimio en septiembre de 2025.",
      "**Horarios:** Martes a domingo, 8:15 a 18:30. Ultima entrada 17:30. Cerrado los lunes, mas 1 enero y 25 diciembre.",
      "**Compra in situ:** Las maquinas automaticas de la zona de taquilla admiten efectivo y son mas rapidas que el mostrador; en las taquillas atendidas se paga con tarjeta. En ambos casos el precio del dia es €25, siempre que queden franjas horarias libres.",
    ],
  },
  beforeYourVisit: {
    h2: "Que Saber Antes de Tu Visita",
    paragraphs: [
      "**Equipaje:** Las bolsas grandes deben dejarse en el guardarropa gratuito tras la seguridad.",
      "**Ropa:** Sin codigo de vestimenta especifico (a diferencia de las iglesias). Zapatos comodos imprescindibles.",
      "**Agua:** Puedes llevar una botella. La galeria puede ponerse caliente en verano.",
      "**Fotos:** Permitidas en todas partes, sin flash.",
      "**Audioguias:** En alquiler en la entrada (€6). 3-5 minutos de comentario por obra principal.",
      "**La fatiga de museo es real.** Este recorrido de 2 horas esta disenado para prevenirla — la pausa en la terraza te da aire fresco.",
      "**Accesibilidad:** Ascensores disponibles. Informa al personal en la Puerta 1.",
    ],
  },
  alternativeRoutes: {
    h2: "Y Si Tienes Mas Tiempo?",
    paragraphs: [
      "**3-4 horas (visita completa):** Misma ruta mas las salas intermedias. Mas tiempo en cada parada, galerias del norte de Europa (Salas 41-45).",
      "**4-6 horas (amantes del arte):** Ver todo. Estudiar pinturas individuales, explorar la planta baja, pausa de almuerzo en el cafe-terraza.",
      "**Menos de 1 hora (express):** Solo tres paradas: Sala Botticelli (Salas 10-14), Terraza Panoramica y Caravaggio (Sala 90).",
      "**Consejo estacional:** En verano, llega a las 8:15 para evitar calor y multitudes. En invierno, puedes tener las salas para ti incluso a mediodia.",
    ],
  },
  timingTips: {
    h2: "Consejos de Horario",
    items: [
      "Reserva la franja de las 8:15 — tendras las salas casi para ti solo",
      "Ve directamente a la Sala 2 y sigue el recorrido en orden",
      "Salta las salas que no estan en esta lista",
      "Dedica mas tiempo a la Sala de Botticelli (Salas 10-14)",
      "Si una sala esta llena, sigue adelante y vuelve despues",
      "Martes y miercoles por la manana son los dias mas tranquilos",
      "Evita el primer domingo del mes — gratis pero multitudes extremas",
      "Tarde (despues de las 16) es el segundo mejor horario",
    ],
  },
  relatedGuides: {
    h2: "Guias Relacionadas",
    links: [
      { text: "Entradas Uffizi — Precios y Como Reservar", href: "/blog/uffizi-gallery-tickets/" },
      { text: "Horarios de los Uffizi 2026", href: "/blog/uffizi-gallery-hours/" },
      { text: "Mapa y Plano de los Uffizi", href: "/blog/uffizi-gallery-map-floor-plan/" },
      { text: "10 Pinturas Famosas de los Uffizi", href: "/blog/famous-paintings-uffizi-gallery/" },
      { text: "Como Evitar la Cola de la Taquilla en los Uffizi", href: "/blog/how-to-skip-the-line-uffizi/" },
      { text: "Caravaggio en los Uffizi", href: "/blog/caravaggio-uffizi-gallery/" },
      { text: "La Primavera de Botticelli", href: "/blog/botticelli-primavera-uffizi/" },
      { text: "Florencia en Un Dia", href: "/blog/one-day-in-florence-itinerary/" },
    ],
  },
  closingP:
    "Quieres profundizar mas? Una visita guiada cubre el mismo recorrido con comentarios de expertos que dan vida a cada pintura. Si prefieres explorar por tu cuenta, este itinerario te da la estructura para aprovechar al maximo tus 2 horas.",
  closingLinkText: "visita guiada",
  ctaBottomTitle: "Reserva Tus Entradas para los Uffizi",
  faq: [
    { q: "Se pueden ver los Uffizi en 2 horas?", a: "Si — con un recorrido planificado. Cubre Giotto, Botticelli, Leonardo, Miguel Angel, Rafael, Tiziano y Caravaggio." },
    { q: "A que hora llegar?", a: "La franja de las 8:15 es ideal. Galeria casi vacia la primera hora. Tarde (16:00+) en segundo lugar." },
    { q: "Visita guiada o por libre?", a: "Ambas funcionan. Guiada (~2h, desde €49) para contexto experto. Por libre con este itinerario para flexibilidad." },
    { q: "Y si quiero ver mas?", a: "Planifica 3-4 horas. Los Uffizi tienen 101 salas con miles de obras." },
    { q: "Cuanto cuestan las entradas?", a: "€25 el mismo dia o €29 reservando por anticipado (los €4 de diferencia son los gastos de reserva). UE 18-25: €2. Menores de 18: gratis." },
    { q: "Que entrada uso?", a: "Todo el mundo entra por la Puerta 1, lado este. No hay entrada sin colas separada ni bono que canjear: basta con el codigo QR del correo y el control de seguridad. La Puerta 3 esta cerrada." },
    { q: "Los Uffizi abren los lunes?", a: "No. Cerrados cada lunes del ano." },
    { q: "Donde esta El Nacimiento de Venus?", a: "Salas 10-14 (Sala Botticelli), segundo piso. Parada 3 del recorrido." },
  ],
};

const content: PageContent<TwoHoursContent> = { en, it, de, fr, es };

export function getTwoHoursContent(locale: string): TwoHoursContent {
  return getContent(content, locale);
}
