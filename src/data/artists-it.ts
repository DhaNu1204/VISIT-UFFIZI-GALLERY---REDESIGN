import type { Artist } from "./artists";
export type ArtistI18n = Omit<Artist, "slug">;
export const artistsIt: Record<string, ArtistI18n> = {
  "sandro-botticelli": {
    name: "Sandro Botticelli",
    title: "Sandro Botticelli agli Uffizi | Nascita di Venere e Primavera",
    description:
      "Ammira la Nascita di Venere e la Primavera di Botticelli alla Galleria degli Uffizi. Guida alle sale, capolavori e biografia del pittore fiorentino.",
    h1: "Sandro Botticelli alla Galleria degli Uffizi",
    born: "c. 1445, Firenze",
    died: "17 maggio 1510, Firenze",
    movement: "Primo Rinascimento",
    ufficiRoom: "Sale 10-14 (Sala di Botticelli)",
    masterpieces: [
      "Nascita di Venere (c. 1485)",
      "Primavera (c. 1482)",
      "Adorazione dei Magi (c. 1475)",
      "Madonna del Magnificat (c. 1481)",
      "Pallade e il Centauro (c. 1482)",
    ],
    intro:
      'Entrate nelle Sale 10-14 della Galleria degli Uffizi e capirete subito perché la chiamano la Sala di Botticelli. La Nascita di Venere è proprio davanti a voi — e sì, dal vivo è davvero così bella. Nessuna fotografia, nessuna stampa, nessuno schermo può catturare la qualità luminosa dei colori di Botticelli o le dimensioni imponenti di questo dipinto. Con quasi 3 metri di larghezza, Venere che sorge dal mare sulla sua conchiglia domina la sala come un\'apparizione.',
    atTheUffizi:
      "La Sala di Botticelli è il cuore emotivo degli Uffizi. La galleria dedica cinque sale interconnesse (10-14) a questo unico artista — un onore riservato al pittore più importante del museo. La Nascita di Venere e la Primavera si fronteggiano dalle pareti opposte, creando un dialogo fra due dei dipinti più celebri dell'arte occidentale.\n\nLa Nascita di Venere (c. 1485) mostra la dea che arriva sulla riva di Cipro, sospinta dagli dei del vento Zefiro e Clori. La figura di Venere è ispirata a una scultura romana antica — la Venus Pudica (Venere pudica) — ma Botticelli la trasforma in qualcosa di etereo. Il collo impossibilmente lungo, i capelli d'oro fluenti e la posa senza peso creano una figura che sembra esistere al di fuori della normale anatomia. È intenzionale. Botticelli non dipingeva la realtà — dipingeva un ideale.\n\nLa Primavera (c. 1482) è l'opera più complessa. Oltre 500 specie vegetali sono state identificate botanicamente nel dipinto, tutte rese con precisione scientifica. Le nove figure — Mercurio, le Tre Grazie, Venere, Cupido, Flora, Clori e Zefiro — creano un'allegoria della primavera che gli studiosi dibattono da secoli. Cercate Cupido proprio sopra Venere, bendato, che punta la sua freccia verso la Grazia centrale.\n\nNon perdetevi l'Adorazione dei Magi — Botticelli si è autoritratto nella folla come un giovane in veste gialla, che vi guarda direttamente dal bordo destro del dipinto. Diversi membri della famiglia Medici sono raffigurati tra i Magi.",
    biography:
      'Alessandro di Mariano di Vanni Filipepi — conosciuto nel mondo come Sandro Botticelli — nacque a Firenze intorno al 1445. Il suo soprannome "Botticelli" (piccola botte) gli venne dal fratello maggiore. Si formò sotto Fra Filippo Lippi, uno dei principali pittori dell\'epoca, e sviluppò rapidamente uno stile distintivo caratterizzato da linee fluide, figure aggraziate e colori luminosi.\n\nLa carriera di Botticelli fu plasmata dal suo stretto rapporto con la famiglia Medici. Lorenzo de\' Medici (Lorenzo il Magnifico) fu il suo più grande mecenate, commissionando opere che univano la mitologia classica alla filosofia neoplatonica. La Nascita di Venere e la Primavera nacquero entrambe da questo circolo intellettuale — non sono solo dipinti bellissimi ma complesse dichiarazioni filosofiche sull\'amore, la bellezza e la natura del divino.\n\nNegli anni Novanta del Quattrocento, Botticelli cadde sotto l\'influenza del focoso predicatore domenicano Savonarola, che condannava la vanità dell\'arte profana. Secondo Giorgio Vasari, Botticelli gettò alcune delle proprie opere nel "Falò delle Vanità" di Savonarola nel 1497. Le sue opere tarde divennero sempre più religiose e austere. Morì nel 1510, in gran parte dimenticato, e fu sepolto nella Chiesa di Ognissanti — a pochi passi dagli Uffizi.',
    legacy:
      "Botticelli fu praticamente dimenticato per 300 anni dopo la sua morte. Furono i Preraffaelliti nell'Inghilterra del XIX secolo a riscoprire la sua opera, affascinati dalle stesse linee fluide e dalla bellezza eterea che incantano i visitatori di oggi. Il celebre saggio di Walter Pater su Botticelli del 1870 contribuì a lanciare un revival che non si è mai fermato. Oggi la Nascita di Venere è una delle immagini più riprodotte al mondo — e ammirare l'originale nella Sala di Botticelli resta una delle esperienze più intense che Firenze possa offrire.",
    faq: [
      {
        q: "Dove si trovano i dipinti di Botticelli agli Uffizi?",
        a: "Le opere principali di Botticelli sono nelle Sale 10-14, note come Sala di Botticelli. È la sezione più popolare degli Uffizi e può essere molto affollata tra le 10 e le 14.",
      },
      {
        q: "Quanti dipinti di Botticelli ci sono agli Uffizi?",
        a: "Gli Uffizi custodiscono circa 20 opere di Botticelli, la più grande collezione al mondo. Le più celebri sono la Nascita di Venere, la Primavera, l'Adorazione dei Magi e la Madonna del Magnificat.",
      },
      {
        q: "Di cosa parla la Nascita di Venere?",
        a: "Il dipinto raffigura la dea Venere che arriva sulla riva di Cipro dopo essere nata dalla spuma del mare. È sospinta a riva dagli dei del vento Zefiro e Clori, mentre l'Ora della Primavera attende di coprirla con un manto. È un'allegoria della bellezza divina che entra nel mondo mortale.",
      },
    ],
  },
  michelangelo: {
    name: "Michelangelo",
    title: "Michelangelo agli Uffizi | Tondo Doni — Guida alla Sala 35",
    description:
      "Ammira il Tondo Doni di Michelangelo alla Galleria degli Uffizi, Sala 35. Il suo unico dipinto su tavola — colori che anticipano la Cappella Sistina.",
    h1: "Michelangelo alla Galleria degli Uffizi",
    born: "6 marzo 1475, Caprese, Toscana",
    died: "18 febbraio 1564, Roma",
    movement: "Alto Rinascimento",
    ufficiRoom: "Sala 35",
    masterpieces: ["Tondo Doni (Sacra Famiglia) (c. 1507)"],
    intro:
      "Michelangelo si considerava prima di tutto scultore, poi pittore. Il fatto che esista un solo dipinto su tavola della sua mano rende il Tondo Doni nella Sala 35 degli Uffizi qualcosa di straordinario — una rara finestra nella mente dell'artista che avrebbe dipinto il soffitto della Cappella Sistina. Vi fermate davanti e i colori vi colpiscono per primi: rosa elettrico, blu brillante, verdi acidi. Non sono i toni smorzati della tipica pittura rinascimentale. Sono i colori di una rivoluzione.",
    atTheUffizi:
      "Il Tondo Doni (c. 1507) è esposto nella Sala 35 insieme alle opere di Leonardo da Vinci — una sala che mette a confronto diretto due titani del Rinascimento. Il formato circolare (tondo) era popolare a Firenze per i dipinti devozionali domestici, ma Michelangelo lo trasformò in qualcosa che nessuno aveva mai visto prima.\n\nLa Sacra Famiglia — Maria, Giuseppe e il Bambin Gesù — si contorce in una complessa composizione a spirale. Maria si sporge all'indietro per ricevere il Cristo bambino da Giuseppe, creando un'energia dinamica e avvolgente che attraversa tutto il dipinto. I corpi muscolosi, la modellazione scultorea, gli arditi scorci — tutto qui anticipa il soffitto della Cappella Sistina, che Michelangelo avrebbe iniziato appena un anno dopo.\n\nGuardate attentamente i colori. Erano ancora più sorprendenti dopo il restauro del 1985 che rivelò la brillantezza originale nascosta sotto secoli di vernice e sporcizia. La stessa controversia esplose quando il soffitto della Cappella Sistina fu pulito negli anni Novanta — si scoprì che Michelangelo era sempre stato un colorista, non il pittore dai toni smorzati che si era dato per scontato.\n\nLa cornice originale è notevole quanto il dipinto. Intagliata con teste grottesche, motivi vegetali e cinque teste scolpite (forse profeti), si ritiene sia stata disegnata dallo stesso Michelangelo — una delle più belle cornici rinascimentali esistenti.",
    biography:
      "Michelangelo di Lodovico Buonarroti Simoni nacque nel 1475 a Caprese, un piccolo borgo toscano. La sua famiglia si trasferì a Firenze quando era giovane, e la città lo segnò profondamente. Fu brevemente apprendista del pittore Domenico Ghirlandaio, ma fu Lorenzo de' Medici a riconoscere il suo talento e a invitare il giovane Michelangelo nella casa medicea, dove studiò la scultura classica nel giardino dei Medici.\n\nFirenze diede al mondo Michelangelo, ma le sue opere più grandi furono create a Roma: la Pietà (1499), il soffitto della Cappella Sistina (1508-1512), il Giudizio Universale (1536-1541) e il progetto della Basilica di San Pietro. Eppure si considerò sempre fiorentino. Il David (1504), scolpito da un blocco di marmo che altri due scultori avevano abbandonato, si trova alla Galleria dell'Accademia di Firenze — e il Tondo Doni agli Uffizi resta il suo dipinto più personale.",
    legacy:
      "Michelangelo visse fino a 88 anni — un'età straordinaria per il XVI secolo — e lavorò fino agli ultimi giorni della sua vita. Fu il primo artista la cui biografia venne pubblicata mentre era ancora in vita (da Giorgio Vasari nel 1550), e già i contemporanei lo chiamavano \"Il Divino\". La sua influenza sull'arte occidentale è incommensurabile — dal Barocco a Rodin alla scultura moderna, la sua visione del corpo umano come espressione di potere spirituale resta il punto di riferimento.",
    faq: [
      {
        q: "Quale dipinto di Michelangelo è agli Uffizi?",
        a: "Il Tondo Doni (Sacra Famiglia), c. 1507, nella Sala 35. È l'unico dipinto su tavola completato da Michelangelo — lavorò principalmente come scultore e pittore di affreschi.",
      },
      {
        q: "Perché il Tondo Doni è importante?",
        a: "È l'unico dipinto su tavola completato da Michelangelo e anticipa il soffitto della Cappella Sistina nei colori audaci, nelle figure scultoree e nella composizione complessa. Anche la cornice originale potrebbe essere stata disegnata da Michelangelo.",
      },
      {
        q: "Il David di Michelangelo è agli Uffizi?",
        a: "No. Il David si trova alla Galleria dell'Accademia, a circa 15 minuti a piedi dagli Uffizi. Potete visitare entrambi i musei con un tour combinato.",
      },
    ],
  },
  "leonardo-da-vinci": {
    name: "Leonardo da Vinci",
    title: "Leonardo da Vinci agli Uffizi | Annunciazione e opere giovanili",
    description:
      "Ammira l'Annunciazione e l'Adorazione dei Magi di Leonardo da Vinci agli Uffizi. Guida alla Sala 35 e capolavori del periodo fiorentino.",
    h1: "Leonardo da Vinci alla Galleria degli Uffizi",
    born: "15 aprile 1452, Vinci, Toscana",
    died: "2 maggio 1519, Amboise, Francia",
    movement: "Alto Rinascimento",
    ufficiRoom: "Sala 35",
    masterpieces: [
      "Annunciazione (c. 1472-1475)",
      "Adorazione dei Magi (c. 1481, incompiuta)",
      "Battesimo di Cristo (c. 1475, con Verrocchio)",
    ],
    intro:
      "Leonardo aveva appena 20 anni quando dipinse l'Annunciazione che ora è esposta nella Sala 35 degli Uffizi. Anche a quell'età, il suo genio era inconfondibile. Guardate le ali dell'angelo — non sono i ventagli stilizzati dell'arte medievale ma vere ali di uccello, studiate da esemplari che Leonardo aveva dissezionato. Guardate il paesaggio dietro Maria — quella distanza sfumata, verde-azzurra che si dissolve nell'atmosfera è lo sfumato caratteristico di Leonardo, una tecnica che avrebbe perfezionato nei successivi quarant'anni.",
    atTheUffizi:
      "La Sala 35 accosta Leonardo a Michelangelo, creando uno dei confronti più straordinari della storia dell'arte. L'Annunciazione di Leonardo domina la parete con la sua serena precisione, mentre il Tondo Doni di Michelangelo pulsa di energia muscolare.\n\nL'Annunciazione (c. 1472-1475) mostra l'Arcangelo Gabriele che visita la Vergine Maria per annunciarle che porterà in grembo il Figlio di Dio. Leonardo ambienta la scena in un giardino idealizzato con un leggio di marmo copiato da una tomba progettata dal suo maestro Verrocchio. La prospettiva è meticolosamente calcolata — provate a guardare il dipinto dal lato destro e le proporzioni si allineano perfettamente. Leonardo potrebbe averlo progettato per essere osservato da un'angolazione specifica nella chiesa originale.\n\nL'Adorazione dei Magi (c. 1481) è affascinante nella sua incompiutezza. Leonardo la abbandonò quando partì da Firenze per Milano nel 1482, ma ciò che resta rivela il suo processo di lavoro rivoluzionario. La composizione sottostante in inchiostro bruno mostra la sua ossessione per il movimento, l'emozione e la geometria dei gruppi. Cavalli si impennano, figure gesticolano e l'intera scena ruota attorno alla figura centrale della Madonna. Il dipinto è essenzialmente una radiografia della mente di Leonardo al lavoro.\n\nCercate anche il Battesimo di Cristo, creato nella bottega di Andrea del Verrocchio. Leonardo dipinse l'angelo all'estrema sinistra e parti del paesaggio. Secondo Vasari, quando Verrocchio vide l'angelo di Leonardo, fu così umiliato dalla superiorità del suo allievo che giurò di non dipingere mai più.",
    biography:
      "Leonardo nacque nel 1452 nel piccolo borgo toscano di Vinci. Figlio illegittimo di un notaio, non poté seguire il padre nella professione — un colpo del destino che lo spinse verso l'arte. Si formò a Firenze nella bottega di Andrea del Verrocchio, dove studiò insieme a Botticelli, Perugino e Lorenzo di Credi.\n\nFirenze diede a Leonardo i suoi inizi, ma trascorse gran parte della carriera altrove — Milano, Roma e infine la Francia, dove morì nel 1519 come ospite del re Francesco I. Lasciò meno di 20 dipinti completati, ma i suoi taccuini — oltre 7.000 pagine di disegni, osservazioni scientifiche e invenzioni — rivelano una mente che abbracciava arte, anatomia, ingegneria, ottica, geologia, botanica e il volo.",
    legacy:
      "I dipinti di Leonardo agli Uffizi rappresentano il suo periodo fiorentino — le fondamenta su cui furono costruiti i suoi capolavori successivi (la Gioconda, l'Ultima Cena, la Vergine delle Rocce). Ammirando l'Annunciazione dal vivo, si può osservare un genio ventenne nel processo di diventare il più grande artista di tutti i tempi.",
    faq: [
      {
        q: "Quali dipinti di Leonardo sono agli Uffizi?",
        a: "Gli Uffizi possiedono tre opere di o attribuite a Leonardo: l'Annunciazione (c. 1472-1475), l'incompiuta Adorazione dei Magi (c. 1481) e il suo contributo al Battesimo di Cristo di Verrocchio. Tutte si trovano nella Sala 35.",
      },
      {
        q: "La Gioconda è agli Uffizi?",
        a: "No. La Gioconda (Monna Lisa) si trova al Louvre di Parigi. Gli Uffizi custodiscono le opere giovanili di Leonardo del periodo fiorentino, tra cui l'Annunciazione e l'incompiuta Adorazione dei Magi.",
      },
      {
        q: "Quanti anni aveva Leonardo quando dipinse l'Annunciazione?",
        a: "Leonardo aveva circa 20-23 anni quando dipinse l'Annunciazione (c. 1472-1475). Lavorava ancora nella bottega di Verrocchio a Firenze.",
      },
    ],
  },
  giotto: {
    name: "Giotto di Bondone",
    title: "Giotto agli Uffizi | Madonna di Ognissanti — Sala 2",
    description:
      "Ammira la rivoluzionaria Madonna di Ognissanti di Giotto agli Uffizi, Sala 2. Come un pittore ruppe con l'arte medievale e inventò la pittura.",
    h1: "Giotto alla Galleria degli Uffizi",
    born: "c. 1267, Vespignano, Firenze",
    died: "8 gennaio 1337, Firenze",
    movement: "Proto-Rinascimento",
    ufficiRoom: "Sala 2",
    masterpieces: ["Madonna di Ognissanti (c. 1310)"],
    intro:
      "La Sala 2 degli Uffizi è il luogo dove inizia la pittura occidentale. Tre enormi pale d'altare riempiono lo spazio — grandi immagini su fondo oro della Madonna con il Bambino di Cimabue, Duccio e Giotto. A prima vista sembrano simili. Ma fermatevi davanti alla Madonna di Ognissanti di Giotto (c. 1310) e poi voltatevi verso la versione di Cimabue, e vedrete la rivoluzione che cambiò l'arte per sempre. La Madonna di Giotto ha peso. Siede su un trono reale che crea vera profondità. Il suo volto mostra emozione umana autentica. Dopo Giotto, la pittura non poté più tornare a essere piatta.",
    atTheUffizi:
      "La Sala 2 è progettata appositamente per farvi assistere alla nascita della pittura rinascimentale in un solo sguardo. I tre grandi pannelli della Maestà — di Cimabue (c. 1280), Duccio (c. 1285) e Giotto (c. 1310) — rappresentano tre tappe della rivoluzione dall'arte medievale a quella moderna.\n\nLa Madonna di Ognissanti di Giotto rompe con la convenzione bizantina in diversi modi cruciali. Il trono è reso con prospettiva coerente, creando una convincente sensazione di spazio tridimensionale. Il corpo della Madonna ha un volume autentico sotto le vesti — si percepisce il suo peso sul trono. Gli angeli ai lati del trono si sovrappongono in modo naturale, invece di essere impilati in uno schema simbolico. E i volti — Maria, il Cristo bambino, gli angeli — esprimono emozione umana reale piuttosto che le maschere stilizzate dell'arte bizantina.\n\nPuò sembrare sottile, ma nel 1310 era rivoluzionario. Per mille anni l'arte occidentale era stata essenzialmente piatta e simbolica. Giotto da solo inventò l'idea che la pittura potesse rappresentare il mondo reale e fisico. Ogni artista che seguì — Masaccio, Botticelli, Leonardo, Michelangelo — costruì sulle fondamenta che Giotto pose in questa sala.",
    biography:
      'Giotto di Bondone nacque intorno al 1267 vicino a Firenze. L\'aneddoto più famoso sulla sua giovinezza viene da Vasari: il pittore Cimabue avrebbe scoperto il giovane Giotto mentre disegnava una pecora su una roccia in modo così realistico che Cimabue lo prese immediatamente come apprendista. Che la leggenda sia vera o meno, Giotto si formò sotto Cimabue e rapidamente superò il suo maestro.\n\nLa sua più grande impresa è il ciclo di affreschi nella Cappella degli Scrovegni a Padova (c. 1305), che narra la vita di Cristo e della Vergine Maria con una profondità emotiva e un realismo spaziale senza precedenti. A Firenze progettò il campanile della Cattedrale, che porta ancora il suo nome. Dante scrisse nella Divina Commedia che la fama di Giotto aveva eclissato quella di Cimabue — un omaggio straordinario da un genio fiorentino a un altro.',
    legacy:
      "Giotto è spesso definito il \"Padre della Pittura Occidentale\". In piedi nella Sala 2 degli Uffizi, si capisce esattamente perché. La Madonna di Ognissanti è il punto cardine tra arte medievale e moderna — e tutto il resto negli Uffizi ne consegue.",
    faq: [
      {
        q: "Dove si trova il dipinto di Giotto agli Uffizi?",
        a: "La Madonna di Ognissanti di Giotto (c. 1310) è nella Sala 2, accanto a opere simili di Cimabue e Duccio. È la prima grande sala che si incontra nella galleria.",
      },
      {
        q: "Perché Giotto è importante?",
        a: "Giotto è definito il \"Padre della Pittura Occidentale\" perché ruppe con lo stile piatto e simbolico dell'arte medievale e introdusse il naturalismo — spazio reale, peso reale, emozione reale. Ogni artista rinascimentale costruì sulle sue innovazioni.",
      },
      {
        q: "Quanto è antico il dipinto di Giotto agli Uffizi?",
        a: "La Madonna di Ognissanti risale a circa il 1310 — oltre 700 anni fa. È uno dei dipinti più antichi e storicamente significativi degli Uffizi.",
      },
    ],
  },
  "giorgio-vasari": {
    name: "Giorgio Vasari",
    title: "Giorgio Vasari | Architetto degli Uffizi e del Corridoio",
    description:
      "Giorgio Vasari progettò gli Uffizi e il celebre Corridoio Vasariano. Architetto, pittore e autore delle Vite dei più eccellenti artisti.",
    h1: "Giorgio Vasari — Architetto degli Uffizi",
    born: "30 luglio 1511, Arezzo",
    died: "27 giugno 1574, Firenze",
    movement: "Manierismo",
    ufficiRoom: "In tutto l'edificio",
    masterpieces: [
      "Il Palazzo degli Uffizi (1560-1580)",
      "Corridoio Vasariano (1565)",
      "Le Vite dei più eccellenti pittori, scultori e architetti (1550/1568)",
    ],
    intro:
      "Ogni visitatore degli Uffizi cammina attraverso il più grande capolavoro di Giorgio Vasari senza rendersene conto — l'edificio stesso. Vasari progettò gli Uffizi nel 1560 come uffici amministrativi per Cosimo I de' Medici, creando un'elegante struttura a U che incornicia una delle piazze più belle di Firenze. Cinque anni dopo costruì lo straordinario corridoio sopraelevato che porta il suo nome, collegando gli Uffizi al Palazzo Pitti attraverso il Ponte Vecchio.",
    atTheUffizi:
      "La presenza di Vasari agli Uffizi è architettonica piuttosto che pittorica. Il design dell'edificio — con le sue colonne armoniose, le logge aperte e le proporzioni classiche — è considerato uno dei migliori esempi di architettura civile rinascimentale. Il lungo corridoio al piano superiore, progettato originariamente per esporre la crescente collezione d'arte dei Medici, divenne il modello per le gallerie museali di tutta Europa.\n\nIl Corridoio Vasariano, costruito in soli cinque mesi nel 1565, resta una delle strutture più straordinarie di Firenze. Partendo dagli Uffizi, attraversa la parte superiore del Ponte Vecchio e arriva al Palazzo Pitti, permettendo ai Medici di spostarsi tra le loro residenze senza mettere piede in una strada pubblica. Oggi, dopo un esteso restauro, è aperto ai visitatori.\n\nVasari dipinse anche in modo prolifico — le sue opere sono esposte in varie sale degli Uffizi, anche se i suoi dipinti sono spesso oscurati dai maestri di cui scrisse. Il suo autoritratto fa parte della famosa collezione di autoritratti di artisti della galleria.",
    biography:
      "Nato ad Arezzo nel 1511, Vasari si formò a Firenze sotto Andrea del Sarto e Michelangelo (brevemente). Divenne un artista versatile e prolifico — pittore, architetto e scrittore. Come artista e architetto di corte dei Medici, supervisionò importanti progetti tra cui la ristrutturazione degli interni di Palazzo Vecchio, la progettazione degli Uffizi e la costruzione del Corridoio Vasariano.\n\nMa il risultato più duraturo di Vasari non è un edificio né un dipinto — è un libro. Le sue \"Vite dei più eccellenti pittori, scultori e architettori\" (pubblicato per la prima volta nel 1550, ampliato nel 1568) sono le fondamenta della storia dell'arte occidentale. Senza le biografie di Vasari su Giotto, Leonardo, Michelangelo, Raffaello e decine di altri, gran parte di ciò che sappiamo sull'arte rinascimentale sarebbe perduto.",
    legacy:
      "Vasari inventò la storia dell'arte come disciplina. Il suo concetto che l'arte progredisse dalla \"rinascita\" dei valori classici alla perfezione di Michelangelo ci diede la parola stessa \"Rinascimento\". Ogni libro di storia dell'arte scritto da allora ha un debito verso l'opera fondamentale di Vasari.",
    faq: [
      {
        q: "Vasari ha progettato gli Uffizi?",
        a: "Sì. Giorgio Vasari progettò l'edificio degli Uffizi nel 1560 per Cosimo I de' Medici. Originariamente uffici amministrativi, divenne poi la galleria che ospita la collezione d'arte medicea.",
      },
      {
        q: "Cos'è il Corridoio Vasariano?",
        a: "Un passaggio sopraelevato costruito da Vasari nel 1565, che collega gli Uffizi al Palazzo Pitti attraverso il Ponte Vecchio. Permetteva ai Medici di spostarsi tra gli edifici senza usare le strade pubbliche.",
      },
      {
        q: "Cos'altro ha fatto Vasari oltre all'architettura?",
        a: "Vasari scrisse le \"Vite degli artisti\" — il testo fondamentale della storia dell'arte occidentale. Fu anche un pittore prolifico e ristrutturò gli interni di Palazzo Vecchio.",
      },
    ],
  },
  raphael: {
    name: "Raffaello",
    title: "Raffaello agli Uffizi | Madonna del Cardellino — Sala 66",
    description:
      "Ammira la Madonna del Cardellino di Raffaello alla Sala 66 degli Uffizi. Il dipinto sopravvissuto alla distruzione — storia del restauro e guida.",
    h1: "Raffaello alla Galleria degli Uffizi",
    born: "6 aprile 1483, Urbino",
    died: "6 aprile 1520, Roma",
    movement: "Alto Rinascimento",
    ufficiRoom: "Sala 66",
    masterpieces: [
      "Madonna del Cardellino (1506)",
      "Autoritratto (c. 1506)",
      "Papa Leone X con i Cardinali (1518-1519)",
    ],
    intro:
      "Raffaello morì il giorno del suo 37° compleanno. In quegli anni brevi creò opere di tale perfetta armonia e grazia che fu chiamato \"il pittore divino\" già durante la sua vita. Gli Uffizi custodiscono diversi importanti Raffaello, tra cui la Madonna del Cardellino — un dipinto con una delle storie di sopravvivenza più drammatiche della storia dell'arte.",
    atTheUffizi:
      "La Madonna del Cardellino (1506) nella Sala 66 fu dipinta come regalo di nozze per l'amico di Raffaello, Lorenzo Nasi. Mostra la Vergine Maria seduta in un paesaggio con il giovane Giovanni Battista che offre un cardellino — simbolo della futura Passione di Cristo — al Bambin Gesù.\n\nNel 1547, una devastante frana distrusse la casa di Lorenzo Nasi sulla collina di San Giorgio. Il dipinto fu ridotto in 17 frammenti. Il figlio di Nasi ingaggiò immediatamente un restauratore per riassemblare i pezzi, ma il danno era grave. Per secoli le crepe erano visibili sotto strati di ridipintura.\n\nNel 2008 fu completato un importante restauro utilizzando tecniche moderne tra cui analisi a infrarossi e raggi X. I restauratori rimossero secoli di vernice e ridipintura, rivelando i colori originali di Raffaello — azzurri luminosi, rossi caldi e verdi tenui che erano rimasti nascosti per 400 anni. Se guardate molto attentamente, potete ancora scorgere deboli linee dove i frammenti furono ricomposti.\n\nSempre agli Uffizi: l'Autoritratto giovanile di Raffaello e l'imponente Papa Leone X con i Cardinali — un ritratto politico del papa mediceo che rivela la profondità psicologica di Raffaello. Leone X (Giovanni de' Medici) era figlio di Lorenzo il Magnifico, rendendo questo dipinto un collegamento diretto tra la collezione medicea e la famiglia Medici.",
    biography:
      "Nato a Urbino nel 1483, Raffaello studiò sotto il Perugino prima di trasferirsi a Firenze nel 1504, dove assorbì le innovazioni di Leonardo e Michelangelo. Il suo periodo fiorentino produsse i dipinti di Madonne che lo resero famoso — composizioni serene, perfettamente equilibrate che sembravano raggiungere una grazia senza sforzo.\n\nNel 1508, Papa Giulio II chiamò Raffaello a Roma per dipingere le Stanze vaticane. Il risultato — in particolare la Scuola di Atene — è una delle supreme conquiste dell'arte occidentale. Raffaello divenne il pittore più ricercato d'Europa, dirigendo una grande bottega e accettando commissioni per affreschi, ritratti, pale d'altare e progetti architettonici. Morì improvvisamente a Roma nel 1520, a soli 37 anni.",
    legacy:
      "Raffaello rappresenta l'ideale dell'Alto Rinascimento — bellezza, armonia e grazia portate alla perfezione. La sua influenza sulla pittura accademica durò per secoli. Ammirando la Madonna del Cardellino agli Uffizi, si testimonia sia il suo genio sia la fragilità della sopravvivenza artistica.",
    faq: [
      {
        q: "Quali dipinti di Raffaello sono agli Uffizi?",
        a: "Gli Uffizi custodiscono la Madonna del Cardellino (1506), l'Autoritratto di Raffaello, Papa Leone X con i Cardinali e diverse altre opere. Si trovano principalmente nella Sala 66.",
      },
      {
        q: "Cosa è successo alla Madonna del Cardellino?",
        a: "Nel 1547, una frana distrusse la casa dove era esposta, frantumandola in 17 pezzi. Fu riassemblata ma mostrò danni per secoli. Un restauro del 2008 ha rivelato i colori originali di Raffaello.",
      },
      {
        q: "Quanti anni aveva Raffaello quando morì?",
        a: "Raffaello morì il giorno del suo 37° compleanno (6 aprile 1520) a Roma. Nonostante la breve vita, creò alcuni dei dipinti più influenti dell'arte occidentale.",
      },
    ],
  },
  titian: {
    name: "Tiziano",
    title: "Tiziano agli Uffizi | Venere di Urbino — Guida alla Sala 83",
    description:
      "Ammira la Venere di Urbino di Tiziano alla Galleria degli Uffizi, Sala 83. Il nudo disteso più famoso della storia dell'arte — analisi e guida.",
    h1: "Tiziano alla Galleria degli Uffizi",
    born: "c. 1488, Pieve di Cadore, Veneto",
    died: "27 agosto 1576, Venezia",
    movement: "Rinascimento Veneziano",
    ufficiRoom: "Sala 83",
    masterpieces: [
      "Venere di Urbino (1538)",
      "Flora (c. 1515)",
      "Ritratto di Eleonora Gonzaga della Rovere (1536-1537)",
    ],
    intro:
      'Tiziano era il maestro del colore. Mentre i pittori fiorentini costruivano la loro arte sul disegno e la linea, Tiziano e la scuola veneziana costruivano la propria sulla ricchezza sensuale della pittura a olio. In nessun luogo questo è più evidente che nella Venere di Urbino (1538) nella Sala 83 — un dipinto così provocatorio che Mark Twain lo definì "il più indecente, il più vile, il più osceno dipinto al mondo". Si sbagliava. È uno dei più grandi.',
    atTheUffizi:
      "La Venere di Urbino domina la Sala 83. Una donna nuda è distesa su un letto, guardando direttamente lo spettatore con calma sicurezza. Un cagnolino dorme ai suoi piedi (simbolo di fedeltà), delle ancelle cercano in un cassone nuziale sullo sfondo e una pianta di mirto è posata sul davanzale (associata a Venere e all'amore duraturo).\n\nCiò che rende straordinario questo dipinto non è la nudità — è il dominio totale della pittura a olio. Tiziano costruisce la figura con strati di colore trasparente, creando una pelle che sembra risplendere dall'interno. Il contrasto tra i toni caldi dell'incarnato e le lenzuola bianche e fresche, la tenda verde scura e la luce dorata — questa è la pittura come pura esperienza sensoriale.\n\nIl dipinto fu commissionato da Guidobaldo II della Rovere, Duca di Urbino, forse come regalo di nozze. Che la donna sia Venere, una cortigiana o una sposa è oggetto di dibattito da secoli. Qualunque cosa sia, è padrona della stanza in cui si trova — sia nel dipinto che agli Uffizi.\n\nSempre agli Uffizi: la Flora di Tiziano, un ritratto di donna con fiori che divenne l'archetipo della bellezza veneziana, e diversi ritratti medicei.",
    biography:
      "Tiziano Vecellio nacque intorno al 1488 nelle montagne dolomitiche dell'Italia settentrionale. Si trasferì a Venezia da bambino e si formò presso i fratelli Bellini e Giorgione. Verso i venticinque anni era il pittore dominante a Venezia — una posizione che mantenne per oltre 60 anni.\n\nTiziano lavorò per le figure più potenti d'Europa: papi, imperatori, re e dogi. I suoi ritratti di Carlo V stabilirono il modello per la ritrattistica di stato che durò fino al XVIII secolo. Continuò a dipingere fino a oltre ottant'anni, con uno stile che divenne sempre più sciolto ed espressivo — alcune opere tarde sembrano quasi impressioniste.",
    legacy:
      "L'influenza di Tiziano sulla pittura è immensa. Rubens, Velázquez, Rembrandt e innumerevoli altri studiarono la sua opera. La Venere di Urbino ispirò direttamente l'Olympia di Manet (1863), uno dei dipinti fondamentali dell'arte moderna. Ammirando l'originale agli Uffizi, si comprende perché ogni pittore venuto dopo si sentì obbligato a confrontarsi con essa.",
    faq: [
      {
        q: "Dove si trova la Venere di Urbino di Tiziano agli Uffizi?",
        a: "La Venere di Urbino è nella Sala 83 della Galleria degli Uffizi. È uno dei dipinti più visitati del museo.",
      },
      {
        q: "Perché la Venere di Urbino è famosa?",
        a: "È considerato il più grande nudo disteso dell'arte occidentale — un'opera rivoluzionaria per il suo sguardo diretto, l'uso sensuale del colore e la presenza psicologica. Ha influenzato secoli di artisti da Velázquez a Manet.",
      },
      {
        q: "Chi è la donna nella Venere di Urbino?",
        a: "La sua identità è dibattuta — potrebbe essere Venere (la dea mitologica), una sposa o il ritratto di una donna specifica. Il dipinto fu commissionato dal Duca di Urbino, forse come regalo di nozze.",
      },
    ],
  },
  rembrandt: {
    name: "Rembrandt",
    title: "Rembrandt agli Uffizi | Autoritratti — Guida alla Sala 49",
    description:
      "Ammira gli autoritratti di Rembrandt alla Galleria degli Uffizi. Le opere del maestro olandese a Firenze — guida alla Sala 49 e informazioni.",
    h1: "Rembrandt alla Galleria degli Uffizi",
    born: "15 luglio 1606, Leida, Paesi Bassi",
    died: "4 ottobre 1669, Amsterdam",
    movement: "Età dell'oro olandese / Barocco",
    ufficiRoom: "Sala 49",
    masterpieces: [
      "Autoritratto da giovane (c. 1634)",
      "Autoritratto da vecchio (c. 1664)",
    ],
    intro:
      "Rembrandt può sembrare una presenza inaspettata in una galleria dominata da maestri del Rinascimento italiano, ma i Medici collezionavano ampiamente, e i due autoritratti di Rembrandt agli Uffizi sono tra le opere psicologicamente più penetranti dell'intera collezione. Dipinti a trent'anni di distanza, documentano il viaggio di un uomo dalla fiducia giovanile alla saggezza segnata dall'età.",
    atTheUffizi:
      "La Sala 49 ospita la collezione di arte nord-europea degli Uffizi, e i due autoritratti di Rembrandt ne sono i gioielli della corona. L'autoritratto giovanile (c. 1634) mostra un giovane all'apice dei suoi poteri — prospero, sicuro di sé, vestito con abiti eleganti. L'autoritratto tardo (c. 1664) mostra un uomo anziano che ha conosciuto la bancarotta, la morte della moglie e del figlio, e il declino professionale. Ma lo sguardo è imperturbabile, e la tecnica pittorica è magistrale — pennellate ampie ed espressive che sembrano dissolvere la forma nella luce.\n\nQuesti dipinti fanno parte della famosa collezione di autoritratti di artisti degli Uffizi, iniziata quando il Cardinale Leopoldo de' Medici cominciò a raccoglierli nel XVII secolo. La collezione conta oggi oltre 1.800 opere.",
    biography:
      "Rembrandt Harmenszoon van Rijn nacque a Leida nel 1606 e trascorse gran parte della vita ad Amsterdam. Fu il più grande pittore dell'Età dell'oro olandese — un maestro della luce e dell'ombra (chiaroscuro) che portò una profondità psicologica senza precedenti nella ritrattistica, nella pittura storica e nell'autoritratto.\n\nDipinse, disegnò o incise circa 80 autoritratti nel corso della vita — l'autobiografia visiva più estesa della storia dell'arte. Ciascuno è un registro onesto dell'invecchiamento, dell'emozione e dell'auto-esame. I due agli Uffizi rappresentano questo straordinario progetto in due momenti cruciali.",
    legacy:
      "Gli autoritratti di Rembrandt hanno influenzato ogni artista che abbia tentato di dipingersi con onestà — da Van Gogh a Frida Kahlo a Lucian Freud. Ammirare entrambi gli autoritratti degli Uffizi uno accanto all'altro è un'esperienza profondamente commovente.",
    faq: [
      {
        q: "Quali dipinti di Rembrandt sono agli Uffizi?",
        a: "Gli Uffizi possiedono due autoritratti di Rembrandt — uno dalla giovinezza (c. 1634) e uno dalla vecchiaia (c. 1664). Si trovano nella Sala 49 con altre opere nord-europee.",
      },
      {
        q: "Perché ci sono dipinti di Rembrandt a Firenze?",
        a: "La famiglia Medici collezionava arte da tutta Europa. Il Cardinale Leopoldo de' Medici avviò la famosa collezione di autoritratti di artisti degli Uffizi nel XVII secolo, che oggi comprende oltre 1.800 opere.",
      },
      {
        q: "Quanti autoritratti ha dipinto Rembrandt?",
        a: "Rembrandt creò circa 80 autoritratti (dipinti, incisioni e disegni) nel corso della sua vita — l'autobiografia visiva più estesa della storia dell'arte.",
      },
    ],
  },
  "filippo-brunelleschi": {
    name: "Filippo Brunelleschi",
    title: "Filippo Brunelleschi | Architetto della Cupola e Firenze",
    description:
      "Filippo Brunelleschi — architetto della cupola del Duomo di Firenze. Il suo legame con gli Uffizi e la rivoluzione rinascimentale in architettura.",
    h1: "Filippo Brunelleschi — Architetto della Cupola",
    born: "1377, Firenze",
    died: "15 aprile 1446, Firenze",
    movement: "Primo Rinascimento",
    ufficiRoom: "Citato nel contesto della Sala 7",
    masterpieces: [
      "Cupola della Cattedrale di Firenze (1420-1436)",
      "Ospedale degli Innocenti (1419)",
      "Basilica di San Lorenzo (1421-1459)",
    ],
    intro:
      "Il più grande capolavoro di Brunelleschi si vede dalla terrazza panoramica degli Uffizi — l'immensa cupola della Cattedrale di Firenze, che si innalza sopra i tetti della città come un miracolo geometrico. Brunelleschi non era un pittore, quindi le sue opere non sono appese alle pareti degli Uffizi. Ma senza di lui, il Rinascimento come lo conosciamo forse non sarebbe mai nato. Inventò la prospettiva lineare, il sistema matematico che ogni pittore degli Uffizi utilizzò per creare l'illusione della profondità.",
    atTheUffizi:
      "Il legame di Brunelleschi con gli Uffizi è indiretto ma profondo. Il sistema di prospettiva matematica che dimostrò a Firenze intorno al 1415 — usando specchi e pannelli dipinti davanti al Battistero — divenne il fondamento della pittura rinascimentale. Ogni dipinto degli Uffizi che mostra uno spazio realistico, da Masaccio a Raffaello, si basa sulla scoperta di Brunelleschi.\n\nDalla terrazza al secondo piano degli Uffizi e dalle finestre lungo il corridoio est, si può ammirare la sua cupola del Duomo che domina il panorama fiorentino. Costruita tra il 1420 e il 1436 senza ponteggi in legno temporanei (un'impresa ingegneristica non replicata per secoli), la cupola resta la più grande cupola in muratura mai costruita.",
    biography:
      "Brunelleschi nacque a Firenze nel 1377 e si formò come orafo e scultore. Nel 1401 gareggiò con Lorenzo Ghiberti per la commissione delle porte del Battistero — e perse. Quella sconfitta reindirizzò la sua carriera verso l'architettura e l'ingegneria, dove avrebbe cambiato il mondo.\n\nLa sua cupola per la Cattedrale di Firenze risolse un problema che aveva lasciato perplessi i costruttori per oltre un secolo: come coprire un'apertura di 42 metri senza ponteggi tradizionali. Brunelleschi inventò una costruzione a doppio guscio, usando una disposizione dei mattoni a spina di pesce e ingegnose macchine di sollevamento di sua progettazione. Il progetto richiese 16 anni e resta una delle supreme conquiste dell'ingegneria.",
    legacy:
      "Brunelleschi inaugurò l'architettura rinascimentale e inventò la prospettiva lineare — la base matematica per rappresentare lo spazio tridimensionale su una superficie piana. Ogni dipinto che ammirate agli Uffizi deve qualcosa alla sua scoperta.",
    faq: [
      {
        q: "Ci sono opere di Brunelleschi agli Uffizi?",
        a: "Brunelleschi era un architetto, non un pittore, quindi le sue opere non sono esposte agli Uffizi. Tuttavia la sua cupola è visibile dalla terrazza degli Uffizi, e la sua invenzione della prospettiva lineare è il fondamento della pittura rinascimentale in tutta la galleria.",
      },
      {
        q: "Cosa costruì Brunelleschi?",
        a: "La sua opera più famosa è la cupola della Cattedrale di Firenze (1420-1436) — la più grande cupola in muratura mai costruita. Progettò anche l'Ospedale degli Innocenti e la Basilica di San Lorenzo a Firenze.",
      },
      {
        q: "Perché Brunelleschi è importante per la pittura?",
        a: "Inventò la prospettiva lineare intorno al 1415 — il sistema matematico per creare profondità realistica su una superficie piana. Ogni pittore rinascimentale degli Uffizi utilizzò la sua scoperta.",
      },
    ],
  },
  "dante-alighieri": {
    name: "Dante Alighieri",
    title: "Dante Alighieri e gli Uffizi | Il Sommo Poeta di Firenze",
    description:
      "Dante Alighieri — il più grande poeta di Firenze e autore della Divina Commedia. I suoi ritratti agli Uffizi e il legame con la città.",
    h1: "Dante Alighieri — Il Poeta di Firenze agli Uffizi",
    born: "c. 1265, Firenze",
    died: "14 settembre 1321, Ravenna",
    movement: "Letteratura medievale / Proto-Rinascimento",
    ufficiRoom: "Varie sale (ritratti e riferimenti)",
    masterpieces: [
      "Divina Commedia (c. 1308-1321)",
      "La Vita Nuova (c. 1294)",
      "Ritratti di vari artisti degli Uffizi",
    ],
    intro:
      "Dante Alighieri non era un pittore — fu il più grande poeta di Firenze e l'autore della Divina Commedia, una delle supreme conquiste della letteratura mondiale. Ma la sua presenza pervade gli Uffizi. Il suo ritratto appare in diversi dipinti della galleria, e la sua influenza sulla cultura fiorentina plasmò il mondo stesso che produsse gli artisti le cui opere riempiono queste sale.",
    atTheUffizi:
      "Dante appare in molteplici opere nella galleria, riflettendo il suo status di cittadino più venerato di Firenze. Il ciclo di affreschi di Andrea del Castagno (originariamente dalla Villa Carducci) include un suggestivo ritratto di Dante con il caratteristico berretto rosso e la corona d'alloro. Botticelli illustrò la Divina Commedia con una serie di disegni, alcuni dei quali si collegano ai temi letterari dei suoi dipinti.\n\nL'influenza di Dante sugli artisti degli Uffizi va ben oltre i ritratti. La sua visione dell'aldilà — il terrificante Inferno, il speranzoso Purgatorio e il trascendente Paradiso — ispirò innumerevoli dipinti e sculture durante tutto il Rinascimento. Il Giudizio Universale di Michelangelo nella Cappella Sistina attinge copiosamente dall'Inferno di Dante, e Botticelli trascorse anni a creare illustrazioni per la Divina Commedia.",
    biography:
      "Nato a Firenze intorno al 1265, Dante apparteneva a una famiglia della piccola nobiltà. La sua giovinezza fu segnata dall'amore per Beatrice Portinari, che vide per la prima volta quando erano entrambi bambini. Sebbene si parlassero raramente e lei sposò un altro uomo, Beatrice divenne la musa di tutta la vita di Dante. Dopo la morte di lei nel 1290, incanalò il suo dolore nella Vita Nuova e infine nella Divina Commedia.\n\nDante fu anche profondamente coinvolto nella politica fiorentina. Come Guelfo Bianco, si oppose all'ingerenza papale negli affari della città. Quando i Guelfi Neri presero il potere nel 1302, Dante fu esiliato da Firenze e non vi fece mai ritorno. Trascorse il resto della vita peregrinando tra le città italiane, scrivendo l'opera che lo avrebbe reso immortale. Morì a Ravenna nel 1321, dove si trova ancora la sua tomba — Firenze non ha mai smesso di cercare di riavere le sue spoglie.",
    legacy:
      "Dante è chiamato il \"Padre della Lingua Italiana\" — scrisse la Divina Commedia in volgare italiano anziché in latino, stabilendo il dialetto toscano come base dell'italiano moderno. La sua influenza sull'arte, la letteratura e l'identità fiorentina è incommensurabile.",
    faq: [
      {
        q: "Ci sono dipinti di Dante agli Uffizi?",
        a: "Dante appare come soggetto in diversi dipinti degli Uffizi, tra cui ritratti di Andrea del Castagno e altri artisti fiorentini. Come poeta, non creò opere d'arte visiva.",
      },
      {
        q: "Perché Dante è importante per Firenze?",
        a: "Dante è il cittadino più illustre di Firenze e il \"Padre della Lingua Italiana\". La sua Divina Commedia (1308-1321) fu scritta in italiano toscano anziché in latino, stabilendo le basi dell'italiano moderno. La sua influenza plasmò il mondo culturale che produsse gli artisti degli Uffizi.",
      },
      {
        q: "Dante fu esiliato da Firenze?",
        a: "Sì. Nel 1302, Dante fu esiliato dopo che la sua fazione politica perse il potere. Non tornò mai a Firenze e morì a Ravenna nel 1321. Firenze ha ripetutamente richiesto la restituzione delle sue spoglie.",
      },
    ],
  },
  "piero-della-francesca": {
    name: "Piero della Francesca",
    title: "Piero della Francesca agli Uffizi | Ritratti dei Duchi di Urbino",
    description:
      "Ammira i celebri ritratti dei Duchi di Urbino di Piero della Francesca agli Uffizi, Sala 8. La ritrattistica rinascimentale al suo apice.",
    h1: "Piero della Francesca alla Galleria degli Uffizi",
    born: "c. 1415, Borgo Sansepolcro, Toscana",
    died: "12 ottobre 1492, Borgo Sansepolcro",
    movement: "Primo Rinascimento",
    ufficiRoom: "Sala 8",
    masterpieces: [
      "Ritratti del Duca e della Duchessa di Urbino (c. 1465-1472)",
    ],
    intro:
      "Il doppio ritratto di Federico da Montefeltro e della moglie Battista Sforza di Piero della Francesca è una delle immagini più iconiche del Rinascimento italiano. Dipinti di profilo contro un vasto paesaggio umbro, il Duca e la Duchessa si fronteggiano attraverso il quadro con la serena dignità di monete romane. Il dipinto riguarda tanto la matematica e la luce quanto il potere.",
    atTheUffizi:
      "La Sala 8 ospita una delle opere più riconoscibili degli Uffizi: il dittico (dipinto su due pannelli) del Duca e della Duchessa di Urbino. I pannelli sono dipinti su entrambi i lati — il fronte mostra i famosi ritratti di profilo, mentre il verso raffigura entrambe le figure su carri trionfali accompagnati da figure allegoriche.\n\nFederico da Montefeltro, Duca di Urbino, fu uno dei condottieri più abili del XV secolo. È mostrato sempre di profilo sinistro, perché perse l'occhio destro e il setto nasale in un torneo. Piuttosto che nascondere la deformità, Piero la incorporò nel ritratto con la sua caratteristica onestà.\n\nI paesaggi dietro entrambe le figure sono straordinari. Piero rende le dolci colline, i fiumi e le città delle Marche con una precisione e una luminosità che anticipano la pittura paesaggistica olandese di due secoli. La luce è perfettamente calibrata — tutto è immerso in un'atmosfera limpida e fresca che crea un senso di spazio infinito.\n\nPiero era anche un matematico che scrisse trattati su prospettiva e geometria. I suoi dipinti riflettono questa duplice passione — ogni elemento è calcolato con precisione, eppure il risultato appare naturale e sereno piuttosto che rigido.",
    biography:
      "Nato intorno al 1415 nella città toscana di Borgo Sansepolcro, Piero studiò a Firenze ma trascorse gran parte della carriera lavorando per le corti dell'Italia centrale. Il suo più grande ciclo di affreschi — la Leggenda della Vera Croce ad Arezzo — è uno dei capolavori del Primo Rinascimento.\n\nPiero fu un vero uomo del Rinascimento: pittore, matematico e teorico. I suoi trattati sulla prospettiva (De Prospectiva Pingendi) e sulla geometria influenzarono artisti e matematici per generazioni. Divenne cieco negli ultimi anni e smise di dipingere, dedicandosi interamente alla matematica fino alla morte nel 1492.",
    legacy:
      "Piero della Francesca fu in gran parte dimenticato dopo la morte e riscoperto solo nel XX secolo. Oggi è riconosciuto come uno dei più grandi pittori del Primo Rinascimento, ammirato per il suo colore luminoso, la precisione geometrica e il profondo senso di quiete.",
    faq: [
      {
        q: "Dove si trova il dipinto di Piero della Francesca agli Uffizi?",
        a: "Il doppio ritratto del Duca e della Duchessa di Urbino è nella Sala 8. I pannelli sono dipinti su entrambi i lati — non perdete il verso con le processioni trionfali.",
      },
      {
        q: "Perché il Duca è mostrato di profilo?",
        a: "Federico da Montefeltro perse l'occhio destro e il setto nasale in un torneo. È sempre mostrato dal lato sinistro. Piero incorporò questo aspetto nel ritratto con la sua caratteristica franchezza.",
      },
      {
        q: "Cosa rende speciale Piero della Francesca?",
        a: "Piero unì la pittura alla matematica — le sue opere hanno una luminosità unica, una precisione geometrica e un senso di calma ineguagliabili. Scrisse anche influenti trattati sulla prospettiva che plasmarono l'arte rinascimentale.",
      },
    ],
  },
  caravaggio: {
    name: "Caravaggio",
    title: "Caravaggio agli Uffizi | Medusa, Bacco e Sacrificio di Isacco",
    description:
      "Ammira Medusa, Bacco e Sacrificio di Isacco di Caravaggio agli Uffizi, Sala 90. Capolavori barocchi di luce e ombra drammatiche.",
    h1: "Caravaggio alla Galleria degli Uffizi",
    born: "29 settembre 1571, Milano",
    died: "18 luglio 1610, Porto Ercole, Toscana",
    movement: "Barocco",
    ufficiRoom: "Sala 90 (Primo Piano)",
    masterpieces: [
      "Medusa (c. 1597)",
      "Bacco (c. 1598)",
      "Sacrificio di Isacco (c. 1603)",
    ],
    intro:
      "Entrate nella Sala 90 e Caravaggio vi colpisce in faccia. Dopo l'eterea bellezza di Botticelli e la serena perfezione di Raffaello, la Medusa di Caravaggio — la bocca congelata in un urlo, il sangue che sgorga dal collo reciso — è uno shock. Questa è arte che non chiede la vostra ammirazione. Esige la vostra attenzione.",
    atTheUffizi:
      "La collezione di Caravaggio agli Uffizi occupa la Sala 90 al primo piano, un contrasto drammatico con i capolavori rinascimentali al piano superiore. Questi tre dipinti rappresentano Caravaggio all'apice dei suoi poteri, prima che il suo temperamento violento lo costringesse a fuggire da Roma.\n\nLa Medusa (c. 1597) è dipinta su uno scudo di legno circolare — non su una tela. Fu commissionata dal cardinale Francesco Maria del Monte come regalo per il Granduca di Toscana. La Gorgone è mostrata nel momento della decapitazione da parte di Perseo, bocca aperta in un urlo silenzioso, serpenti che si contorcono nei capelli. Il sangue sgorga dal collo. Ciò che lo rende ancora più inquietante: è un autoritratto. Caravaggio dipinse il proprio volto nel momento della morte.\n\nBacco (c. 1598) mostra il dio del vino come un imbroglione di strada — a spalle nude, leggermente ubriaco, che offre un bicchiere di vino con un sorriso consapevole. La frutta sul tavolo sta marcendo. Questa non è grandezza mitologica — è la realtà applicata a un soggetto classico. Guardate attentamente la caraffa di vino: potete vedere il minuscolo autoritratto di Caravaggio riflesso nel vetro.\n\nSacrificio di Isacco (c. 1603) cattura l'istante terrificante prima che il coltello di Abramo si abbatta sul collo del figlio. Il volto del ragazzo è congelato nell'orrore, la bocca aperta in un urlo che rispecchia la Medusa. La mano dell'angelo ferma la lama all'ultimo secondo possibile. L'agnello — il sacrificio sostitutivo — aspetta pazientemente nell'angolo. È insopportabilmente teso.\n\nLa tecnica rivoluzionaria di Caravaggio — il drammatico chiaroscuro (luce che emerge dall'oscurità) — è qui in piena mostra. I corpi emergono da sfondi neri come attori illuminati su un palcoscenico. Ogni dettaglio è reso con brutale onestà: unghie sporche, pelle rugosa, il peso della carne.",
    biography:
      "Michelangelo Merisi da Caravaggio nacque a Milano nel 1571 durante un'epidemia di peste. Suo padre morì quando era giovane. Si formò a Milano, poi si trasferì a Roma intorno al 1592, dove visse in povertà, dipingendo scene di genere e nature morte.\n\nLa sua svolta arrivò quando il cardinale Francesco Maria del Monte divenne il suo mecenate intorno al 1595. Il cardinale commissionò opere religiose e soggetti mitologici che mostravano lo stile rivoluzionario di Caravaggio. Dipingeva direttamente da modelli vivi — spesso prostitute, vagabondi e criminali — senza disegni preliminari. Quello che vedi è quello che aveva davanti.\n\nMa Caravaggio era violento quanto i suoi dipinti. Rissava costantemente, fu arrestato più volte e nel 1606 uccise un uomo durante una rissa per una partita a tennis. Fuggì da Roma e trascorse i suoi ultimi quattro anni in fuga — Malta, Sicilia, Napoli — dipingendo opere sempre più oscure e disperate. Morì nel 1610 all'età di 38 anni, forse di malaria, forse per un'infezione da ferita, forse assassinato. Il suo corpo non fu mai trovato.\n\nNonostante la sua vita breve e caotica, Caravaggio rivoluzionò la pittura europea. Il suo uso drammatico di luce e ombra, il suo realismo senza compromessi e la sua intensità psicologica influenzarono generazioni di artisti. I 'Caravaggisti' — i suoi seguaci — diffusero il suo stile in tutta Europa.",
    legacy:
      "Caravaggio morì nell'oscurità e fu in gran parte dimenticato per 200 anni. Il suo lavoro era considerato troppo scioccante, troppo realistico, troppo oscuro. Il XX secolo lo riscoprì, e oggi è riconosciuto come uno dei pittori più influenti dell'arte occidentale. La sua tecnica del chiaroscuro influenzò Rembrandt, Velázquez e quasi ogni pittore barocco. La sua intensità psicologica aprì la strada al realismo moderno.",
    faq: [
      {
        q: "Dove sono i dipinti di Caravaggio agli Uffizi?",
        a: "Le opere di Caravaggio sono nella Sala 90 al primo piano (piano terra nella numerazione europea). Questa sala presenta arte barocca ed è separata dalle principali gallerie rinascimentali al piano superiore.",
      },
      {
        q: "Perché la Medusa è su uno scudo?",
        a: "Nella mitologia greca, Perseo usò il suo scudo lucido come specchio per evitare di guardare direttamente Medusa (il cui sguardo trasformava le persone in pietra). Dopo averla decapitata, montò la sua testa sullo scudo. Caravaggio dipinse su un vero scudo cerimoniale per autenticità.",
      },
      {
        q: "La Medusa è un autoritratto?",
        a: "Sì. Caravaggio usò il proprio volto per i lineamenti della Medusa. Questo non era insolito per lui — spesso si inseriva nei suoi dipinti, a volte in modi scioccanti.",
      },
      {
        q: "Perché Caravaggio è così famoso?",
        a: "Caravaggio rivoluzionò la pittura con il suo uso drammatico di luce e ombra (chiaroscuro), il realismo senza compromessi e l'intensità psicologica. Dipingeva direttamente dalla vita senza schizzi preliminari, creando opere di scioccante immediatezza. La sua influenza sull'arte barocca fu immensa.",
      },
      {
        q: "Caravaggio era un criminale?",
        a: "Sì. Caravaggio fu arrestato frequentemente per risse, vandalismo e aggressioni. Nel 1606 uccise un uomo durante una rissa e trascorse i suoi ultimi quattro anni fuggendo dalla giustizia. Morì in fuga nel 1610.",
      },
    ],
  },
};
