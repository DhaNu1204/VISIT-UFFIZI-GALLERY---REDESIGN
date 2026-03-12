import { getContent, type PageContent } from "./types";

export type DirectionsContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  intro: string;
  walking: {
    h2: string;
    rows: { from: string; time: string; route: string }[];
  };
  trainStation: {
    h2: string;
    p: string;
  };
  bus: {
    h2: string;
    p: string;
  };
  taxi: {
    h2: string;
    p: string;
  };
  pisaAirport: {
    h2: string;
    p: string;
  };
  florenceAirport: {
    h2: string;
    p: string;
  };
  parking: {
    h2: string;
    intro: string;
    options: { label: string; text: string }[];
  };
  ctaTitle: string;
  faq: { q: string; a: string }[];
};

const en: DirectionsContent = {
  meta: {
    title: "Getting to the Uffizi Gallery | Directions & Map",
    description:
      "How to get to the Uffizi Gallery in Florence. Walking directions, from the train station, by bus, taxi, parking & from Pisa airport. Map & tips.",
  },
  breadcrumb: "Directions",
  h1: "Getting to the Uffizi Gallery",
  intro:
    'The Uffizi Gallery sits in the heart of Florence, between the Piazza della Signoria and the Arno River. Its address is Piazzale degli Uffizi, 6 \u2014 but honestly, once you\'re in central Florence, you can\'t miss it. The long U-shaped building is one of the city\'s most recognizable landmarks.',
  walking: {
    h2: "Walking from Key Locations",
    rows: [
      { from: "Florence Cathedral (Duomo)", time: "10 minutes", route: "Head south via Via dei Calzaiuoli" },
      { from: "Santa Maria Novella Station", time: "15 minutes", route: "Walk south through Via dei Panzani \u2192 Via dei Cerretani \u2192 Via dei Calzaiuoli" },
      { from: "Ponte Vecchio", time: "3 minutes", route: "The Uffizi is right at the north end of the bridge" },
      { from: "Piazza della Signoria", time: "1 minute", route: "The Uffizi is directly south of the square" },
      { from: "Palazzo Pitti", time: "10 minutes", route: "Cross the Ponte Vecchio and continue north" },
      { from: "Accademia Gallery", time: "15 minutes", route: "Walk south via Via Ricasoli \u2192 Via dei Calzaiuoli" },
    ],
  },
  trainStation: {
    h2: "From Florence Train Station (Santa Maria Novella)",
    p: 'The walk from the main train station to the Uffizi takes about 15 minutes and is entirely flat \u2014 perfect even with luggage if you\'re heading straight from the train. Exit the station from the main entrance, cross the piazza, and walk south along Via dei Panzani. This becomes Via dei Cerretani, which leads to the Duomo. Continue past the cathedral on Via dei Calzaiuoli (a pedestrian shopping street) until you reach Piazza della Signoria. The Uffizi is immediately south of the square.',
  },
  bus: {
    h2: "By Bus",
    p: 'Florence\'s historic center is largely a pedestrian zone, so no buses go directly to the Uffizi. The closest bus stop is at Piazza San Marco or near the train station. From either stop, it\'s a 10-15 minute walk. ATAF city buses cost \u20AC1.50 for a 90-minute ticket (buy at tabacchi shops, not on the bus). Honestly, if you\'re staying anywhere in central Florence, walking is usually faster and more enjoyable than the bus.',
  },
  taxi: {
    h2: "By Taxi",
    p: "Taxis cannot enter the pedestrian zone around the Uffizi. Ask the driver to drop you at Piazza della Signoria or Lungarno degli Archibusieri (the riverside road). From either spot, the Uffizi entrance is a 1-2 minute walk. A taxi from the train station costs about \u20AC8-10, from the airport about \u20AC25-30 (fixed rate).",
  },
  pisaAirport: {
    h2: "From Pisa Airport (PSA)",
    p: 'Most international visitors fly into Pisa\'s Galileo Galilei Airport. The easiest connection to Florence is the PisaMover shuttle train to Pisa Centrale station (5 min, \u20AC5), then a regional train to Florence Santa Maria Novella (1 hour, \u20AC9-10). From the Florence station, walk 15 minutes to the Uffizi. Total journey: about 1.5 hours.',
  },
  florenceAirport: {
    h2: "From Florence Airport (FLR)",
    p: 'Florence\'s smaller Peretola Airport is only 6 km from the city center. Take the T2 tramway to the Unita stop (20 minutes, \u20AC1.50), then walk 15 minutes to the Uffizi. A taxi from the airport costs about \u20AC25 (fixed rate) and takes 20-30 minutes depending on traffic.',
  },
  parking: {
    h2: "Parking",
    intro:
      'Do not try to drive into Florence\'s historic center. The entire area around the Uffizi is a ZTL (Zona Traffico Limitato) \u2014 unauthorized vehicles are automatically fined by cameras. Park outside the ZTL and walk or take a bus:',
    options: [
      {
        label: "Parcheggio Beccaria:",
        text: "Large parking garage, 15-minute walk to the Uffizi. ~\u20AC2-3/hour.",
      },
      {
        label: "Parcheggio Sant'Ambrogio:",
        text: "Near Piazza dei Ciompi, 10-minute walk. ~\u20AC2/hour.",
      },
      {
        label: "Garage Palazzo Vecchio:",
        text: "Underground parking near Piazza della Signoria. Most convenient but expensive (~\u20AC4/hour).",
      },
    ],
  },
  ctaTitle: "Book Your Uffizi Tickets",
  faq: [
    {
      q: "How do I get to the Uffizi from the train station?",
      a: "Walk south from Santa Maria Novella station through Via dei Panzani \u2192 Via dei Cerretani \u2192 Via dei Calzaiuoli \u2192 Piazza della Signoria. The Uffizi is directly south of the square. Takes about 15 minutes.",
    },
    {
      q: "Can I drive to the Uffizi?",
      a: "No. The area around the Uffizi is a restricted traffic zone (ZTL) with automatic camera fines. Park outside the ZTL \u2014 recommended garages include Parcheggio Beccaria and Sant'Ambrogio \u2014 and walk.",
    },
    {
      q: "How far is the Uffizi from the Ponte Vecchio?",
      a: "About 3 minutes on foot. The Uffizi is at the north end of the Ponte Vecchio. You'll walk through the Piazzale degli Uffizi to reach the entrance.",
    },
    {
      q: "How do I get from Pisa airport to the Uffizi?",
      a: "Take the PisaMover shuttle to Pisa Centrale (5 min), then a train to Florence SMN (1 hour). Walk 15 minutes south from the station to the Uffizi. Total: about 1.5 hours, ~\u20AC15.",
    },
  ],
};

const it: DirectionsContent = {
  meta: {
    title: "Come Arrivare agli Uffizi | Indicazioni e Mappa",
    description:
      "Come arrivare alla Galleria degli Uffizi a Firenze. Percorsi a piedi, dalla stazione, in bus, taxi, parcheggi e dall'aeroporto di Pisa. Mappa e consigli.",
  },
  breadcrumb: "Come Arrivare",
  h1: "Come Arrivare alla Galleria degli Uffizi",
  intro:
    "La Galleria degli Uffizi si trova nel cuore di Firenze, tra Piazza della Signoria e il fiume Arno. L\u2019indirizzo \u00E8 Piazzale degli Uffizi, 6 \u2014 ma sinceramente, una volta nel centro di Firenze, \u00E8 impossibile non trovarla. Il lungo edificio a forma di U \u00E8 uno dei monumenti pi\u00F9 riconoscibili della citt\u00E0.",
  walking: {
    h2: "A Piedi dai Punti Principali",
    rows: [
      { from: "Cattedrale di Firenze (Duomo)", time: "10 minuti", route: "Direzione sud via Via dei Calzaiuoli" },
      { from: "Stazione Santa Maria Novella", time: "15 minuti", route: "A piedi verso sud per Via dei Panzani \u2192 Via dei Cerretani \u2192 Via dei Calzaiuoli" },
      { from: "Ponte Vecchio", time: "3 minuti", route: "Gli Uffizi sono all\u2019estremit\u00E0 nord del ponte" },
      { from: "Piazza della Signoria", time: "1 minuto", route: "Gli Uffizi sono direttamente a sud della piazza" },
      { from: "Palazzo Pitti", time: "10 minuti", route: "Attraversa il Ponte Vecchio e prosegui verso nord" },
      { from: "Galleria dell\u2019Accademia", time: "15 minuti", route: "A piedi verso sud per Via Ricasoli \u2192 Via dei Calzaiuoli" },
    ],
  },
  trainStation: {
    h2: "Dalla Stazione Ferroviaria di Firenze (Santa Maria Novella)",
    p: "La passeggiata dalla stazione principale agli Uffizi dura circa 15 minuti ed \u00E8 completamente pianeggiante \u2014 perfetta anche con i bagagli se arrivi direttamente dal treno. Esci dalla stazione dall\u2019uscita principale, attraversa la piazza e cammina verso sud lungo Via dei Panzani. Questa diventa Via dei Cerretani, che porta al Duomo. Continua oltre la cattedrale su Via dei Calzaiuoli (una via pedonale con negozi) fino a raggiungere Piazza della Signoria. Gli Uffizi sono subito a sud della piazza.",
  },
  bus: {
    h2: "In Autobus",
    p: "Il centro storico di Firenze \u00E8 in gran parte zona pedonale, quindi nessun autobus arriva direttamente agli Uffizi. La fermata pi\u00F9 vicina \u00E8 a Piazza San Marco o vicino alla stazione. Da entrambe le fermate, sono 10-15 minuti a piedi. Gli autobus urbani ATAF costano \u20AC1,50 per un biglietto da 90 minuti (acquistalo in tabaccheria, non sull\u2019autobus). Sinceramente, se alloggi nel centro di Firenze, camminare \u00E8 quasi sempre pi\u00F9 veloce e piacevole dell\u2019autobus.",
  },
  taxi: {
    h2: "In Taxi",
    p: "I taxi non possono entrare nella zona pedonale intorno agli Uffizi. Chiedi all\u2019autista di lasciarti a Piazza della Signoria o sul Lungarno degli Archibusieri. Da entrambi i punti, l\u2019ingresso degli Uffizi \u00E8 a 1-2 minuti a piedi. Un taxi dalla stazione costa circa \u20AC8-10, dall\u2019aeroporto circa \u20AC25-30 (tariffa fissa).",
  },
  pisaAirport: {
    h2: "Dall'Aeroporto di Pisa (PSA)",
    p: "La maggior parte dei visitatori internazionali atterra all\u2019Aeroporto Galileo Galilei di Pisa. Il collegamento pi\u00F9 comodo per Firenze \u00E8 il PisaMover fino alla stazione di Pisa Centrale (5 min, \u20AC5), poi un treno regionale per Firenze Santa Maria Novella (1 ora, \u20AC9-10). Dalla stazione di Firenze, 15 minuti a piedi fino agli Uffizi. Tempo totale: circa 1 ora e mezza.",
  },
  florenceAirport: {
    h2: "Dall'Aeroporto di Firenze (FLR)",
    p: "Il pi\u00F9 piccolo Aeroporto di Peretola dista solo 6 km dal centro citt\u00E0. Prendi la T2 tramway fino alla fermata Unit\u00E0 (20 minuti, \u20AC1,50), poi cammina 15 minuti fino agli Uffizi. Un taxi dall\u2019aeroporto costa circa \u20AC25 (tariffa fissa) e impiega 20-30 minuti a seconda del traffico.",
  },
  parking: {
    h2: "Parcheggio",
    intro:
      "Non provare a guidare nel centro storico di Firenze. Tutta l\u2019area intorno agli Uffizi \u00E8 ZTL (Zona Traffico Limitato) \u2014 i veicoli non autorizzati vengono multati automaticamente dalle telecamere. Parcheggia fuori dalla ZTL e cammina o prendi un autobus:",
    options: [
      {
        label: "Parcheggio Beccaria:",
        text: "Grande parcheggio, 15 minuti a piedi dagli Uffizi. ~\u20AC2-3/ora.",
      },
      {
        label: "Parcheggio Sant'Ambrogio:",
        text: "Vicino a Piazza dei Ciompi, 10 minuti a piedi. ~\u20AC2/ora.",
      },
      {
        label: "Garage Palazzo Vecchio:",
        text: "Parcheggio sotterraneo vicino a Piazza della Signoria. Il pi\u00F9 comodo ma costoso (~\u20AC4/ora).",
      },
    ],
  },
  ctaTitle: "Prenota i Tuoi Biglietti per gli Uffizi",
  faq: [
    {
      q: "Come arrivo agli Uffizi dalla stazione?",
      a: "Cammina verso sud dalla stazione Santa Maria Novella per Via dei Panzani \u2192 Via dei Cerretani \u2192 Via dei Calzaiuoli \u2192 Piazza della Signoria. Gli Uffizi sono direttamente a sud della piazza. Ci vogliono circa 15 minuti.",
    },
    {
      q: "Posso andare in auto agli Uffizi?",
      a: "No. La zona intorno agli Uffizi \u00E8 una zona a traffico limitato (ZTL) con telecamere che multano automaticamente. Parcheggia fuori dalla ZTL \u2014 parcheggi consigliati: Parcheggio Beccaria e Sant'Ambrogio \u2014 e vai a piedi.",
    },
    {
      q: "Quanto distano gli Uffizi dal Ponte Vecchio?",
      a: "Circa 3 minuti a piedi. Gli Uffizi si trovano all\u2019estremit\u00E0 nord del Ponte Vecchio. Attraverserai il Piazzale degli Uffizi per raggiungere l\u2019ingresso.",
    },
    {
      q: "Come arrivo dall'aeroporto di Pisa agli Uffizi?",
      a: "Prendi il PisaMover fino a Pisa Centrale (5 min), poi un treno per Firenze SMN (1 ora). Cammina 15 minuti verso sud dalla stazione fino agli Uffizi. Totale: circa 1 ora e mezza, ~\u20AC15.",
    },
  ],
};

const de: DirectionsContent = {
  meta: {
    title: "Anfahrt zu den Uffizien | Wegbeschreibung & Karte",
    description:
      "So kommen Sie zu den Uffizien in Florenz. Zu Fuss, vom Bahnhof, per Bus, Taxi, Parkplaetze und vom Flughafen Pisa. Karte und praktische Tipps.",
  },
  breadcrumb: "Anfahrt",
  h1: "Anfahrt zu den Uffizien",
  intro:
    "Die Uffizien liegen im Herzen von Florenz, zwischen der Piazza della Signoria und dem Arno. Die Adresse lautet Piazzale degli Uffizi, 6 \u2014 aber ehrlich gesagt: Sobald Sie im Zentrum von Florenz sind, k\u00F6nnen Sie das Geb\u00E4ude kaum \u00FCbersehen. Der lange U-f\u00F6rmige Bau geh\u00F6rt zu den markantesten Wahrzeichen der Stadt.",
  walking: {
    h2: "Zu Fu\u00DF von wichtigen Orten",
    rows: [
      { from: "Dom von Florenz (Duomo)", time: "10 Minuten", route: "Richtung S\u00FCden \u00FCber die Via dei Calzaiuoli" },
      { from: "Bahnhof Santa Maria Novella", time: "15 Minuten", route: "S\u00FCdw\u00E4rts durch Via dei Panzani \u2192 Via dei Cerretani \u2192 Via dei Calzaiuoli" },
      { from: "Ponte Vecchio", time: "3 Minuten", route: "Die Uffizien befinden sich direkt am Nordende der Br\u00FCcke" },
      { from: "Piazza della Signoria", time: "1 Minute", route: "Die Uffizien liegen direkt s\u00FCdlich des Platzes" },
      { from: "Palazzo Pitti", time: "10 Minuten", route: "\u00DCber den Ponte Vecchio und weiter Richtung Norden" },
      { from: "Galleria dell\u2019Accademia", time: "15 Minuten", route: "S\u00FCdw\u00E4rts \u00FCber Via Ricasoli \u2192 Via dei Calzaiuoli" },
    ],
  },
  trainStation: {
    h2: "Vom Hauptbahnhof Florenz (Santa Maria Novella)",
    p: "Der Fu\u00DFweg vom Hauptbahnhof zu den Uffizien dauert etwa 15 Minuten und ist v\u00F6llig eben \u2014 ideal auch mit Gep\u00E4ck, wenn Sie direkt vom Zug kommen. Verlassen Sie den Bahnhof durch den Haupteingang, \u00FCberqueren Sie den Platz und gehen Sie s\u00FCdw\u00E4rts die Via dei Panzani entlang. Diese wird zur Via dei Cerretani, die zum Dom f\u00FChrt. Gehen Sie am Dom vorbei in die Via dei Calzaiuoli (eine Fu\u00DFg\u00E4nger-Einkaufsstra\u00DFe) bis zur Piazza della Signoria. Die Uffizien befinden sich unmittelbar s\u00FCdlich des Platzes.",
  },
  bus: {
    h2: "Mit dem Bus",
    p: "Die Altstadt von Florenz ist weitgehend Fu\u00DFg\u00E4ngerzone, daher fahren keine Busse direkt zu den Uffizien. Die n\u00E4chsten Haltestellen sind an der Piazza San Marco oder am Bahnhof. Von beiden Haltestellen sind es 10-15 Minuten zu Fu\u00DF. ATAF-Stadtbusse kosten \u20AC1,50 f\u00FCr ein 90-Minuten-Ticket (am Tabacchi-Laden kaufen, nicht im Bus). Ehrlich gesagt: Wenn Sie irgendwo in der Florentiner Innenstadt wohnen, ist Laufen fast immer schneller und sch\u00F6ner als der Bus.",
  },
  taxi: {
    h2: "Mit dem Taxi",
    p: "Taxis d\u00FCrfen nicht in die Fu\u00DFg\u00E4ngerzone rund um die Uffizien fahren. Bitten Sie den Fahrer, Sie an der Piazza della Signoria oder am Lungarno degli Archibusieri (der Uferstra\u00DFe) abzusetzen. Von beiden Punkten ist der Eingang der Uffizien in 1-2 Minuten zu Fu\u00DF erreichbar. Ein Taxi vom Bahnhof kostet etwa \u20AC8-10, vom Flughafen etwa \u20AC25-30 (Festpreis).",
  },
  pisaAirport: {
    h2: "Vom Flughafen Pisa (PSA)",
    p: "Die meisten internationalen Besucher landen am Flughafen Galileo Galilei in Pisa. Die einfachste Verbindung nach Florenz ist der PisaMover-Shuttle zum Bahnhof Pisa Centrale (5 Min., \u20AC5), dann ein Regionalzug nach Florenz Santa Maria Novella (1 Stunde, \u20AC9-10). Vom Bahnhof Florenz sind es 15 Minuten zu Fu\u00DF zu den Uffizien. Gesamtdauer: etwa 1,5 Stunden.",
  },
  florenceAirport: {
    h2: "Vom Flughafen Florenz (FLR)",
    p: "Der kleinere Flughafen Peretola ist nur 6 km vom Stadtzentrum entfernt. Nehmen Sie die T2 tramway bis zur Haltestelle Unita (20 Minuten, \u20AC1,50) und gehen Sie dann 15 Minuten zu den Uffizien. Ein Taxi vom Flughafen kostet etwa \u20AC25 (Festpreis) und dauert je nach Verkehr 20-30 Minuten.",
  },
  parking: {
    h2: "Parken",
    intro:
      "Versuchen Sie nicht, in die Altstadt von Florenz zu fahren. Das gesamte Gebiet um die Uffizien ist eine ZTL (Zona Traffico Limitato) \u2014 nicht autorisierte Fahrzeuge werden automatisch per Kamera erfasst und mit einem Bu\u00DFgeld belegt. Parken Sie au\u00DFerhalb der ZTL und gehen Sie zu Fu\u00DF oder nehmen Sie den Bus:",
    options: [
      {
        label: "Parcheggio Beccaria:",
        text: "Gro\u00DFes Parkhaus, 15 Minuten Fu\u00DFweg zu den Uffizien. ~\u20AC2-3/Stunde.",
      },
      {
        label: "Parcheggio Sant'Ambrogio:",
        text: "Nahe der Piazza dei Ciompi, 10 Minuten Fu\u00DFweg. ~\u20AC2/Stunde.",
      },
      {
        label: "Garage Palazzo Vecchio:",
        text: "Tiefgarage nahe der Piazza della Signoria. Am bequemsten, aber teuer (~\u20AC4/Stunde).",
      },
    ],
  },
  ctaTitle: "Buchen Sie Ihre Uffizi-Tickets",
  faq: [
    {
      q: "Wie komme ich vom Bahnhof zu den Uffizien?",
      a: "Gehen Sie vom Bahnhof Santa Maria Novella s\u00FCdw\u00E4rts durch Via dei Panzani \u2192 Via dei Cerretani \u2192 Via dei Calzaiuoli \u2192 Piazza della Signoria. Die Uffizien liegen direkt s\u00FCdlich des Platzes. Dauer: etwa 15 Minuten.",
    },
    {
      q: "Kann ich mit dem Auto zu den Uffizien fahren?",
      a: "Nein. Die Gegend um die Uffizien ist eine verkehrsbeschr\u00E4nkte Zone (ZTL) mit automatischen Kamera-Bu\u00DFgeldern. Parken Sie au\u00DFerhalb der ZTL \u2014 empfohlene Parkhausr: Parcheggio Beccaria und Sant'Ambrogio \u2014 und gehen Sie zu Fu\u00DF.",
    },
    {
      q: "Wie weit ist es von den Uffizien zum Ponte Vecchio?",
      a: "Etwa 3 Minuten zu Fu\u00DF. Die Uffizien befinden sich am Nordende des Ponte Vecchio. Sie gehen durch das Piazzale degli Uffizi zum Eingang.",
    },
    {
      q: "Wie komme ich vom Flughafen Pisa zu den Uffizien?",
      a: "Nehmen Sie den PisaMover-Shuttle zum Bahnhof Pisa Centrale (5 Min.), dann einen Zug nach Florenz SMN (1 Stunde). Vom Bahnhof 15 Minuten s\u00FCdw\u00E4rts zu den Uffizien. Gesamtdauer: etwa 1,5 Stunden, ~\u20AC15.",
    },
  ],
};

const fr: DirectionsContent = {
  meta: {
    title: "Acc\u00E8s Galerie des Offices | Itin\u00E9raires & Plan",
    description:
      "Comment se rendre a la Galerie des Offices a Florence. A pied, depuis la gare, en bus, taxi, parkings et depuis l'aeroport de Pise. Plan et conseils.",
  },
  breadcrumb: "Acc\u00E8s",
  h1: "Comment se Rendre a la Galerie des Offices",
  intro:
    "La Galerie des Offices se trouve au coeur de Florence, entre la Piazza della Signoria et l'Arno. Son adresse est Piazzale degli Uffizi, 6 \u2014 mais sincerement, une fois dans le centre de Florence, impossible de la manquer. Le long batiment en forme de U est l'un des monuments les plus reconnaissables de la ville.",
  walking: {
    h2: "A Pied depuis les Lieux Cl\u00E9s",
    rows: [
      { from: "Cath\u00E9drale de Florence (Duomo)", time: "10 minutes", route: "Direction sud par la Via dei Calzaiuoli" },
      { from: "Gare Santa Maria Novella", time: "15 minutes", route: "Vers le sud par Via dei Panzani \u2192 Via dei Cerretani \u2192 Via dei Calzaiuoli" },
      { from: "Ponte Vecchio", time: "3 minutes", route: "Les Offices sont a l'extremite nord du pont" },
      { from: "Piazza della Signoria", time: "1 minute", route: "Les Offices sont directement au sud de la place" },
      { from: "Palazzo Pitti", time: "10 minutes", route: "Traversez le Ponte Vecchio et continuez vers le nord" },
      { from: "Galerie de l\u2019Acad\u00E9mie", time: "15 minutes", route: "Vers le sud par Via Ricasoli \u2192 Via dei Calzaiuoli" },
    ],
  },
  trainStation: {
    h2: "Depuis la Gare de Florence (Santa Maria Novella)",
    p: "La marche depuis la gare principale jusqu'aux Offices prend environ 15 minutes et est entierement plate \u2014 ideale meme avec des bagages si vous venez directement du train. Sortez de la gare par l'entree principale, traversez la piazza et marchez vers le sud le long de la Via dei Panzani. Celle-ci devient la Via dei Cerretani, qui mene au Duomo. Continuez au-dela de la cathedrale par la Via dei Calzaiuoli (une rue pietonne commercante) jusqu'a la Piazza della Signoria. Les Offices se trouvent immediatement au sud de la place.",
  },
  bus: {
    h2: "En Bus",
    p: "Le centre historique de Florence est en grande partie une zone pietonne, aucun bus ne dessert donc directement les Offices. L'arret le plus proche est a la Piazza San Marco ou pres de la gare. Depuis chaque arret, comptez 10 a 15 minutes de marche. Les bus ATAF coutent \u20AC1,50 pour un billet de 90 minutes (achetez-le dans un tabacchi, pas dans le bus). Sincerement, si vous logez dans le centre de Florence, marcher est generalement plus rapide et agreable que le bus.",
  },
  taxi: {
    h2: "En Taxi",
    p: "Les taxis ne peuvent pas entrer dans la zone pietonne autour des Offices. Demandez au chauffeur de vous deposer a la Piazza della Signoria ou sur le Lungarno degli Archibusieri (le quai). Depuis chaque point, l'entree des Offices est a 1-2 minutes de marche. Un taxi depuis la gare coute environ \u20AC8-10, depuis l'aeroport environ \u20AC25-30 (tarif fixe).",
  },
  pisaAirport: {
    h2: "Depuis l'A\u00E9roport de Pise (PSA)",
    p: "La plupart des visiteurs internationaux atterrissent a l'aeroport Galileo Galilei de Pise. La connexion la plus simple vers Florence est le PisaMover jusqu'a la gare de Pisa Centrale (5 min, \u20AC5), puis un train regional jusqu'a Florence Santa Maria Novella (1 heure, \u20AC9-10). Depuis la gare de Florence, 15 minutes de marche jusqu'aux Offices. Trajet total : environ 1h30.",
  },
  florenceAirport: {
    h2: "Depuis l'A\u00E9roport de Florence (FLR)",
    p: "Le petit aeroport de Peretola ne se trouve qu'a 6 km du centre-ville. Prenez la T2 tramway jusqu'a l'arret Unita (20 minutes, \u20AC1,50), puis marchez 15 minutes jusqu'aux Offices. Un taxi depuis l'aeroport coute environ \u20AC25 (tarif fixe) et met 20 a 30 minutes selon le trafic.",
  },
  parking: {
    h2: "Stationnement",
    intro:
      "N'essayez pas de conduire dans le centre historique de Florence. Toute la zone autour des Offices est une ZTL (Zona Traffico Limitato) \u2014 les vehicules non autorises sont automatiquement verbalises par des cameras. Garez-vous en dehors de la ZTL et marchez ou prenez le bus :",
    options: [
      {
        label: "Parcheggio Beccaria :",
        text: "Grand parking, 15 minutes de marche jusqu'aux Offices. ~\u20AC2-3/heure.",
      },
      {
        label: "Parcheggio Sant'Ambrogio :",
        text: "Pres de la Piazza dei Ciompi, 10 minutes de marche. ~\u20AC2/heure.",
      },
      {
        label: "Garage Palazzo Vecchio :",
        text: "Parking souterrain pres de la Piazza della Signoria. Le plus pratique mais cher (~\u20AC4/heure).",
      },
    ],
  },
  ctaTitle: "R\u00E9servez vos billets pour les Offices",
  faq: [
    {
      q: "Comment aller aux Offices depuis la gare ?",
      a: "Marchez vers le sud depuis la gare Santa Maria Novella par Via dei Panzani \u2192 Via dei Cerretani \u2192 Via dei Calzaiuoli \u2192 Piazza della Signoria. Les Offices sont directement au sud de la place. Comptez environ 15 minutes.",
    },
    {
      q: "Peut-on aller aux Offices en voiture ?",
      a: "Non. La zone autour des Offices est une zone a trafic limite (ZTL) avec des amendes automatiques par cameras. Garez-vous en dehors de la ZTL \u2014 parkings recommandes : Parcheggio Beccaria et Sant'Ambrogio \u2014 et marchez.",
    },
    {
      q: "A quelle distance se trouvent les Offices du Ponte Vecchio ?",
      a: "Environ 3 minutes a pied. Les Offices se trouvent a l'extremite nord du Ponte Vecchio. Vous traverserez le Piazzale degli Uffizi pour atteindre l'entree.",
    },
    {
      q: "Comment se rendre de l'aeroport de Pise aux Offices ?",
      a: "Prenez le PisaMover jusqu'a Pisa Centrale (5 min), puis un train pour Florence SMN (1 heure). Marchez 15 minutes vers le sud depuis la gare jusqu'aux Offices. Total : environ 1h30, ~\u20AC15.",
    },
  ],
};

const es: DirectionsContent = {
  meta: {
    title: "C\u00F3mo Llegar a los Uffizi | Indicaciones y Mapa",
    description:
      "Como llegar a la Galeria Uffizi en Florencia. A pie, desde la estacion, en bus, taxi, aparcamientos y desde el aeropuerto de Pisa. Mapa y consejos.",
  },
  breadcrumb: "C\u00F3mo Llegar",
  h1: "C\u00F3mo Llegar a la Galer\u00EDa Uffizi",
  intro:
    "La Galer\u00EDa Uffizi se encuentra en el coraz\u00F3n de Florencia, entre la Piazza della Signoria y el r\u00EDo Arno. Su direcci\u00F3n es Piazzale degli Uffizi, 6 \u2014 pero sinceramente, una vez en el centro de Florencia, es imposible no verla. El largo edificio en forma de U es uno de los monumentos m\u00E1s reconocibles de la ciudad.",
  walking: {
    h2: "A Pie desde Puntos Clave",
    rows: [
      { from: "Catedral de Florencia (Duomo)", time: "10 minutos", route: "Direcci\u00F3n sur por Via dei Calzaiuoli" },
      { from: "Estaci\u00F3n Santa Maria Novella", time: "15 minutos", route: "Hacia el sur por Via dei Panzani \u2192 Via dei Cerretani \u2192 Via dei Calzaiuoli" },
      { from: "Ponte Vecchio", time: "3 minutos", route: "Los Uffizi est\u00E1n en el extremo norte del puente" },
      { from: "Piazza della Signoria", time: "1 minuto", route: "Los Uffizi est\u00E1n directamente al sur de la plaza" },
      { from: "Palazzo Pitti", time: "10 minutos", route: "Cruza el Ponte Vecchio y contin\u00FAa hacia el norte" },
      { from: "Galeria de la Academia", time: "15 minutos", route: "Hacia el sur por Via Ricasoli \u2192 Via dei Calzaiuoli" },
    ],
  },
  trainStation: {
    h2: "Desde la Estaci\u00F3n de Tren de Florencia (Santa Maria Novella)",
    p: "El paseo desde la estaci\u00F3n principal hasta los Uffizi dura unos 15 minutos y es completamente llano \u2014 perfecto incluso con equipaje si vienes directamente del tren. Sal de la estaci\u00F3n por la entrada principal, cruza la plaza y camina hacia el sur por Via dei Panzani. Esta se convierte en Via dei Cerretani, que lleva al Duomo. Contin\u00FAa m\u00E1s all\u00E1 de la catedral por Via dei Calzaiuoli (una calle peatonal comercial) hasta llegar a Piazza della Signoria. Los Uffizi est\u00E1n justo al sur de la plaza.",
  },
  bus: {
    h2: "En Autob\u00FAs",
    p: "El centro hist\u00F3rico de Florencia es en gran parte zona peatonal, por lo que ning\u00FAn autob\u00FAs llega directamente a los Uffizi. La parada m\u00E1s cercana est\u00E1 en Piazza San Marco o cerca de la estaci\u00F3n. Desde cualquiera de las paradas, son 10-15 minutos a pie. Los autobuses urbanos ATAF cuestan \u20AC1,50 por un billete de 90 minutos (comp\u00E9ralo en un tabacchi, no en el autob\u00FAs). Sinceramente, si te alojas en el centro de Florencia, caminar suele ser m\u00E1s r\u00E1pido y agradable que el autob\u00FAs.",
  },
  taxi: {
    h2: "En Taxi",
    p: "Los taxis no pueden entrar en la zona peatonal alrededor de los Uffizi. Pide al conductor que te deje en la Piazza della Signoria o en el Lungarno degli Archibusieri (la carretera junto al r\u00EDo). Desde cualquiera de los dos puntos, la entrada de los Uffizi est\u00E1 a 1-2 minutos a pie. Un taxi desde la estaci\u00F3n cuesta unos \u20AC8-10, desde el aeropuerto unos \u20AC25-30 (tarifa fija).",
  },
  pisaAirport: {
    h2: "Desde el Aeropuerto de Pisa (PSA)",
    p: "La mayor\u00EDa de los visitantes internacionales llegan al Aeropuerto Galileo Galilei de Pisa. La conexi\u00F3n m\u00E1s f\u00E1cil a Florencia es el PisaMover hasta la estaci\u00F3n de Pisa Centrale (5 min, \u20AC5), luego un tren regional a Florencia Santa Maria Novella (1 hora, \u20AC9-10). Desde la estaci\u00F3n de Florencia, 15 minutos a pie hasta los Uffizi. Tiempo total: unas 1,5 horas.",
  },
  florenceAirport: {
    h2: "Desde el Aeropuerto de Florencia (FLR)",
    p: "El peque\u00F1o Aeropuerto de Peretola est\u00E1 a solo 6 km del centro de la ciudad. Toma la T2 tramway hasta la parada Unita (20 minutos, \u20AC1,50) y luego camina 15 minutos hasta los Uffizi. Un taxi desde el aeropuerto cuesta unos \u20AC25 (tarifa fija) y tarda 20-30 minutos seg\u00FAn el tr\u00E1fico.",
  },
  parking: {
    h2: "Aparcamiento",
    intro:
      "No intentes conducir por el centro hist\u00F3rico de Florencia. Toda la zona alrededor de los Uffizi es ZTL (Zona Traffico Limitato) \u2014 los veh\u00EDculos no autorizados son multados autom\u00E1ticamente por c\u00E1maras. Aparca fuera de la ZTL y camina o toma un autob\u00FAs:",
    options: [
      {
        label: "Parcheggio Beccaria:",
        text: "Gran aparcamiento, 15 minutos a pie de los Uffizi. ~\u20AC2-3/hora.",
      },
      {
        label: "Parcheggio Sant'Ambrogio:",
        text: "Cerca de Piazza dei Ciompi, 10 minutos a pie. ~\u20AC2/hora.",
      },
      {
        label: "Garage Palazzo Vecchio:",
        text: "Aparcamiento subterr\u00E1neo cerca de Piazza della Signoria. El m\u00E1s c\u00F3modo pero caro (~\u20AC4/hora).",
      },
    ],
  },
  ctaTitle: "Reserva tus Entradas para los Uffizi",
  faq: [
    {
      q: "Como llego a los Uffizi desde la estacion?",
      a: "Camina hacia el sur desde la estaci\u00F3n Santa Maria Novella por Via dei Panzani \u2192 Via dei Cerretani \u2192 Via dei Calzaiuoli \u2192 Piazza della Signoria. Los Uffizi est\u00E1n directamente al sur de la plaza. Se tarda unos 15 minutos.",
    },
    {
      q: "Puedo ir en coche a los Uffizi?",
      a: "No. La zona alrededor de los Uffizi es una zona de tr\u00E1fico restringido (ZTL) con multas autom\u00E1ticas por c\u00E1mara. Aparca fuera de la ZTL \u2014 aparcamientos recomendados: Parcheggio Beccaria y Sant'Ambrogio \u2014 y camina.",
    },
    {
      q: "A que distancia estan los Uffizi del Ponte Vecchio?",
      a: "Unos 3 minutos a pie. Los Uffizi est\u00E1n en el extremo norte del Ponte Vecchio. Atravesar\u00E1s el Piazzale degli Uffizi para llegar a la entrada.",
    },
    {
      q: "Como llego desde el aeropuerto de Pisa a los Uffizi?",
      a: "Toma el PisaMover hasta Pisa Centrale (5 min), luego un tren a Florencia SMN (1 hora). Camina 15 minutos hacia el sur desde la estaci\u00F3n hasta los Uffizi. Total: unas 1,5 horas, ~\u20AC15.",
    },
  ],
};

const content: PageContent<DirectionsContent> = { en, it, de, fr, es };

export function getDirectionsContent(locale: string): DirectionsContent {
  return getContent(content, locale);
}
