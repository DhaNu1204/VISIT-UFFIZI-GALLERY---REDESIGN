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
  timingTips: {
    h2: string;
    items: string[];
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
  timingTips: {
    h2: "Timing Tips",
    items: [
      "Book the 8:15 AM slot for the best experience — you'll have rooms nearly to yourself",
      "Go straight to Room 2 and follow the route in order",
      "Skip rooms not on this list — you can always come back",
      "Spend the most time in Botticelli Hall (Rooms 10-14) — it's the highlight",
      "If a room is crowded, move on and circle back later",
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
  timingTips: {
    h2: "Consigli sugli Orari",
    items: [
      "Prenota la fascia delle 8:15 per l'esperienza migliore — avrai le sale quasi tutte per te",
      "Vai direttamente alla Sala 2 e segui il percorso nell'ordine indicato",
      "Salta le sale non presenti in questa lista — potrai sempre tornare",
      "Dedica pi\u00f9 tempo alla Sala di Botticelli (Sale 10-14) — \u00e8 il momento clou",
      "Se una sala \u00e8 affollata, prosegui e torna dopo",
    ],
  },
  closingP:
    "Vuoi approfondire? Una visita guidata copre lo stesso percorso con commenti esperti che danno vita a ogni dipinto. Se preferisci esplorare in autonomia, questo itinerario ti d\u00e0 la struttura per sfruttare al meglio le tue 2 ore.",
  closingLinkText: "visita guidata",
  ctaBottomTitle: "Prenota i Tuoi Biglietti per gli Uffizi",
  faq: [
    {
      q: "Si possono davvero vedere gli Uffizi in 2 ore?",
      a: "S\u00ec — se segui un percorso pianificato e ti concentri sui capolavori principali. Non vedrai tutte le sale, ma vedrai ogni opera che ha reso gli Uffizi famosi nel mondo. Questo itinerario copre Giotto, Botticelli, Leonardo, Michelangelo, Raffaello, Tiziano e Caravaggio.",
    },
    {
      q: "A che ora conviene arrivare per una visita di 2 ore?",
      a: "La prima fascia delle 8:15 \u00e8 l'ideale. La galleria \u00e8 quasi vuota nella prima ora, con una vista libera su ogni dipinto. Il tardo pomeriggio (dalle 16:00 in poi) \u00e8 la seconda migliore opzione.",
    },
    {
      q: "Meglio una visita guidata o andare da soli?",
      a: "Entrambe le opzioni funzionano bene. Una visita guidata (circa 2 ore, da \u20ac49) aggiunge il contesto di un esperto che trasforma l'esperienza. Andare da soli con questo itinerario offre flessibilit\u00e0 e risparmio. Chi visita per la prima volta trae il massimo beneficio da una guida.",
    },
    {
      q: "E se voglio vedere pi\u00f9 dei soli capolavori principali?",
      a: "Prevedi 3-4 ore ed esplora al tuo ritmo. Il percorso in 2 ore copre le opere essenziali, ma gli Uffizi hanno 101 sale con migliaia di opere. Gli appassionati d'arte possono facilmente trascorrere un'intera giornata.",
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
  timingTips: {
    h2: "Tipps zum Timing",
    items: [
      "Buchen Sie das 8:15-Uhr-Zeitfenster fuer das beste Erlebnis — Sie haben die Raeume fast fuer sich allein",
      "Gehen Sie direkt zu Raum 2 und folgen Sie dem Rundgang in der angegebenen Reihenfolge",
      "Ueberspringen Sie Raeume, die nicht auf dieser Liste stehen — Sie koennen jederzeit wiederkommen",
      "Verbringen Sie die meiste Zeit im Botticelli-Saal (Raeume 10-14) — er ist das Highlight",
      "Wenn ein Raum ueberfuellt ist, gehen Sie weiter und kommen Sie spaeter zurueck",
    ],
  },
  closingP:
    "Moechten Sie mehr Tiefe? Eine gefuehrte Tour deckt denselben Rundgang ab, mit Expertenkommentaren, die jedes Gemaelde zum Leben erwecken. Wenn Sie lieber auf eigene Faust erkunden, gibt Ihnen dieser Plan die Struktur, um Ihre 2 Stunden optimal zu nutzen.",
  closingLinkText: "gefuehrte Tour",
  ctaBottomTitle: "Buchen Sie Ihre Uffizien-Tickets",
  faq: [
    {
      q: "Kann man die Uffizien wirklich in 2 Stunden sehen?",
      a: "Ja — wenn Sie einem geplanten Rundgang folgen und sich auf die Hoehepunkte konzentrieren. Sie werden nicht jeden Raum sehen, aber jedes Meisterwerk, das die Uffizien weltberuehmt macht. Dieser Rundgang umfasst Giotto, Botticelli, Leonardo, Michelangelo, Raffael, Tizian und Caravaggio.",
    },
    {
      q: "Um wie viel Uhr sollte man fuer einen 2-Stunden-Besuch kommen?",
      a: "Das erste Zeitfenster um 8:15 Uhr ist ideal. Die Galerie ist in der ersten Stunde fast leer, mit freiem Blick auf jedes Gemaelde. Der spaete Nachmittag (ab 16 Uhr) ist die zweitbeste Option.",
    },
    {
      q: "Fuehrung buchen oder allein gehen?",
      a: "Beides funktioniert gut. Eine gefuehrte Tour (ca. 2 Stunden, ab 49 Euro) bietet Expertenkontext, der das Erlebnis verwandelt. Allein mit diesem Plan unterwegs zu sein, bietet Flexibilitaet und spart Geld. Erstbesucher profitieren am meisten von einer Fuehrung.",
    },
    {
      q: "Was, wenn ich mehr als nur die Highlights sehen moechte?",
      a: "Planen Sie 3-4 Stunden und erkunden Sie in Ihrem eigenen Tempo. Der 2-Stunden-Rundgang deckt die wichtigsten Meisterwerke ab, aber die Uffizien haben 101 Raeume mit Tausenden von Werken. Kunstbegeisterte koennen leicht einen ganzen Tag verbringen.",
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
  timingTips: {
    h2: "Conseils de Timing",
    items: [
      "Reservez le creneau de 8h15 pour la meilleure experience — vous aurez les salles presque pour vous seul",
      "Allez directement a la Salle 2 et suivez le parcours dans l'ordre",
      "Sautez les salles qui ne figurent pas sur cette liste — vous pourrez toujours revenir",
      "Passez le plus de temps dans la Salle Botticelli (Salles 10-14) — c'est le temps fort",
      "Si une salle est bondee, passez a la suivante et revenez plus tard",
    ],
  },
  closingP:
    "Envie d'approfondir ? Une visite guidee couvre le meme parcours avec des commentaires d'experts qui donnent vie a chaque tableau. Si vous preferez explorer seul, cet itineraire vous offre la structure pour tirer le meilleur parti de vos 2 heures.",
  closingLinkText: "visite guidee",
  ctaBottomTitle: "Reservez Vos Billets pour les Offices",
  faq: [
    {
      q: "Peut-on vraiment voir les Offices en 2 heures ?",
      a: "Oui — si vous suivez un parcours planifie et vous concentrez sur les chefs-d'oeuvre. Vous ne verrez pas toutes les salles, mais chaque oeuvre qui a rendu les Offices mondialement celebres. Ce parcours couvre Giotto, Botticelli, Leonard de Vinci, Michel-Ange, Raphael, Titien et Le Caravage.",
    },
    {
      q: "A quelle heure arriver pour une visite de 2 heures ?",
      a: "Le premier creneau de 8h15 est ideal. La galerie est presque vide la premiere heure, offrant une vue degagee sur chaque tableau. La fin d'apres-midi (a partir de 16h) est la deuxieme meilleure option.",
    },
    {
      q: "Visite guidee ou visite libre ?",
      a: "Les deux fonctionnent bien. Une visite guidee (environ 2 heures, a partir de 49 euros) ajoute un contexte d'expert qui transforme l'experience. Y aller seul avec cet itineraire offre flexibilite et economies. Les visiteurs qui viennent pour la premiere fois beneficient le plus d'un guide.",
    },
    {
      q: "Et si je veux voir plus que les incontournables ?",
      a: "Prevoyez 3 a 4 heures et explorez a votre rythme. Le parcours en 2 heures couvre les chefs-d'oeuvre essentiels, mais les Offices comptent 101 salles avec des milliers d'oeuvres. Les passionnes d'art peuvent facilement y passer une journee entiere.",
    },
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
  timingTips: {
    h2: "Consejos de Horario",
    items: [
      "Reserva la franja de las 8:15 para la mejor experiencia — tendras las salas casi para ti solo",
      "Ve directamente a la Sala 2 y sigue el recorrido en orden",
      "Salta las salas que no estan en esta lista — siempre puedes volver",
      "Dedica mas tiempo a la Sala de Botticelli (Salas 10-14) — es el momento cumbre",
      "Si una sala esta llena, sigue adelante y vuelve despues",
    ],
  },
  closingP:
    "Quieres profundizar mas? Una visita guiada cubre el mismo recorrido con comentarios de expertos que dan vida a cada pintura. Si prefieres explorar por tu cuenta, este itinerario te da la estructura para aprovechar al maximo tus 2 horas.",
  closingLinkText: "visita guiada",
  ctaBottomTitle: "Reserva Tus Entradas para los Uffizi",
  faq: [
    {
      q: "Se pueden ver los Uffizi en 2 horas de verdad?",
      a: "Si — si sigues un recorrido planificado y te concentras en las obras maestras. No veras todas las salas, pero si cada obra que ha hecho a los Uffizi famosos en el mundo. Este recorrido cubre a Giotto, Botticelli, Leonardo, Miguel Angel, Rafael, Tiziano y Caravaggio.",
    },
    {
      q: "A que hora conviene llegar para una visita de 2 horas?",
      a: "La primera franja de las 8:15 es ideal. La galeria esta casi vacia la primera hora, con vistas despejadas de cada pintura. La tarde (a partir de las 16:00) es la segunda mejor opcion.",
    },
    {
      q: "Visita guiada o ir por libre?",
      a: "Ambas opciones funcionan bien. Una visita guiada (unas 2 horas, desde 49 euros) anade el contexto de un experto que transforma la experiencia. Ir solo con este itinerario ofrece flexibilidad y ahorro. Los visitantes primerizos son quienes mas se benefician de un guia.",
    },
    {
      q: "Y si quiero ver mas que solo las obras principales?",
      a: "Planifica 3-4 horas y explora a tu ritmo. El recorrido de 2 horas cubre las obras maestras esenciales, pero los Uffizi tienen 101 salas con miles de obras. Los amantes del arte pueden pasar facilmente un dia entero.",
    },
  ],
};

const content: PageContent<TwoHoursContent> = { en, it, de, fr, es };

export function getTwoHoursContent(locale: string): TwoHoursContent {
  return getContent(content, locale);
}
