import { getContent, type PageContent } from "./types";

export type VasariCorridorContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  intro: string;
  topCta: {
    title: string;
    duration: string;
    includes: string;
  };
  history: {
    h2: string;
    p1: string;
    p2: { before: string; vasariLinkText: string; after: string };
    p3: string;
  };
  whatYoullSee: {
    h2: string;
    intro: string;
    items: { label: string; text: string }[];
  };
  visiting: {
    h2: string;
    p: string;
    practicalDetails: {
      h3: string;
      items: { label: string; text: string }[];
    };
  };
  wwii: {
    h2: string;
    p: string;
  };
  tips: {
    h2: string;
    bookEarly: string;
    comfortableShoes: string;
    combineWithTour: { before: string; linkText: string; after: string };
    warmInSummer: string;
    photography: string;
  };
  bottomCta: {
    title: string;
    duration: string;
  };
  faq: { q: string; a: string }[];
};

const en: VasariCorridorContent = {
  meta: {
    title: "Vasari Corridor Florence 2026 | History, Tickets & How to Visit",
    description:
      "Visit the Vasari Corridor — the secret elevated passageway above the Ponte Vecchio connecting the Uffizi to Palazzo Pitti. History, reopening & booking info.",
  },
  breadcrumb: "Vasari Corridor",
  h1: "The Vasari Corridor",
  intro:
    "Walk along the most extraordinary secret passage in the world. The Vasari Corridor is a kilometer-long elevated walkway that runs from the Uffizi Gallery, across the top of the Ponte Vecchio, and into the Palazzo Pitti on the other side of the Arno River. Built in just five months in 1565, it allowed the Medici rulers to move between their offices and residence without ever setting foot on a public street.",
  topCta: {
    title: "Small Group Uffizi Tour with Vasari Corridor Access",
    duration: "1.5 hours",
    includes: "Skip-the-line entry, licensed guide",
  },
  history: {
    h2: "The History — A Passage Built for Power",
    p1: "In 1565, Cosimo I de' Medici needed a problem solved. His son Francesco was marrying Joanna of Austria, and the Duke wanted to impress his Habsburg in-laws. More practically, he wanted a private route between the Palazzo Vecchio (the seat of government), the Uffizi (his administrative offices), and the Palazzo Pitti (his family's new residence across the river).",
    p2: {
      before: "He turned to ",
      vasariLinkText: "Giorgio Vasari",
      after: ", the architect who had already designed the Uffizi building itself. Vasari completed the corridor in an astonishing five months — a feat of engineering that still impresses today. The passageway climbs from the Uffizi, crosses the Arno via the top floor of the Ponte Vecchio, curves around the medieval tower of the Mannelli family (who refused to let Vasari demolish it), and arrives at the Palazzo Pitti.",
    },
    p3: "The corridor was more than a convenience — it was a statement of absolute power. The Medici could observe their subjects through small round windows without being seen. According to legend, Cosimo ordered the butchers removed from the Ponte Vecchio (they'd been there for centuries) and replaced them with goldsmiths and jewelers, because the smell of meat offended him during his daily walk. The jewelers remain on the Ponte Vecchio to this day.",
  },
  whatYoullSee: {
    h2: "What You'll See Inside",
    intro:
      "The Vasari Corridor experience is unlike anything else in Florence. Walking through the narrow, sunlit passage feels like stepping into a secret history of the city. Here's what to expect:",
    items: [
      {
        label: "The Uffizi Connection:",
        text: "The corridor begins inside the Uffizi Gallery, near the exit. You'll pass through a doorway that most visitors walk right past without knowing.",
      },
      {
        label: "Above the Ponte Vecchio:",
        text: "The highlight of the walk. You'll cross the river above the famous bridge, looking down through round windows at the Arno below and across to the hills of Oltrarno. The views are extraordinary.",
      },
      {
        label: "The Church of Santa Felicita:",
        text: "The corridor passes through the upper balcony of this church. The Medici attended Mass here through a private screened window — they could observe the service without being seen by the congregation.",
      },
      {
        label: "Roman & Greek Sculptures:",
        text: "Following restoration, the corridor displays a collection of ancient sculptures along its length, replacing the famous self-portrait collection that was moved to the Uffizi's main galleries.",
      },
      {
        label: "Palazzo Pitti Arrival:",
        text: "The corridor ends at the Boboli Gardens entrance of the Palazzo Pitti — the Medici's grand Renaissance palace.",
      },
    ],
  },
  visiting: {
    h2: "Visiting the Vasari Corridor",
    p: "After years of restoration, the Vasari Corridor has reopened to visitors. Access is by guided tour only — you cannot visit independently. Tours are limited in number to protect the fragile structure, so booking well in advance is essential, especially during peak season.",
    practicalDetails: {
      h3: "Practical Details",
      items: [
        { label: "Duration:", text: "Approximately 1.5 hours" },
        {
          label: "Access:",
          text: "Guided tour only (no independent visits)",
        },
        { label: "Group size:", text: "Small groups, typically 25 max" },
        {
          label: "Accessibility:",
          text: "The corridor has stairs and narrow passages. Not wheelchair accessible.",
        },
        {
          label: "Separate ticket:",
          text: "The Vasari Corridor requires its own ticket — a standard Uffizi ticket does not include access.",
        },
      ],
    },
  },
  wwii: {
    h2: "WWII and the Vasari Corridor",
    p: "During World War II, the retreating German army destroyed every bridge in Florence except the Ponte Vecchio. Whether this was Hitler's direct order (as legend claims) or a practical decision (the bridge was too narrow for tanks) is debated by historians. However, the Germans did destroy the medieval buildings at both ends of the bridge to create rubble barricades. The Vasari Corridor above survived intact — one of its many brushes with history.",
  },
  tips: {
    h2: "Tips for Your Visit",
    bookEarly: "Book as early as possible — tours sell out weeks in advance",
    comfortableShoes:
      "Wear comfortable shoes — the corridor is about 1 kilometer long",
    combineWithTour: {
      before: "Combine with a ",
      linkText: "Uffizi guided tour",
      after: " for the complete experience",
    },
    warmInSummer: "The corridor can be warm in summer — dress lightly",
    photography: "Photography is allowed but no flash or tripods",
  },
  bottomCta: {
    title: "Small Group Uffizi Tour with Vasari Corridor Access",
    duration: "1.5 hours",
  },
  faq: [
    {
      q: "Is the Vasari Corridor open to visitors in 2026?",
      a: "Yes. After extensive restoration, the Vasari Corridor has reopened. Access is by guided tour only, with limited daily slots. Book well in advance, especially for spring and summer visits.",
    },
    {
      q: "How long is the Vasari Corridor?",
      a: "The corridor is approximately 1 kilometer (0.6 miles) long, running from the Uffizi Gallery across the Ponte Vecchio to the Palazzo Pitti. Guided tours take about 1.5 hours.",
    },
    {
      q: "Can I visit the Vasari Corridor without a guide?",
      a: "No. The Vasari Corridor is only accessible through organized guided tours. Independent visits are not permitted due to the narrow space and conservation requirements.",
    },
    {
      q: "Is the Vasari Corridor included in the Uffizi ticket?",
      a: "No. The Vasari Corridor requires a separate, specific tour booking. A standard Uffizi Gallery ticket does not include Corridor access.",
    },
    {
      q: "Who built the Vasari Corridor?",
      a: "Giorgio Vasari designed and built the corridor in 1565 on the orders of Cosimo I de' Medici. It was completed in just five months — a remarkable feat of Renaissance engineering.",
    },
    {
      q: "Is the Vasari Corridor wheelchair accessible?",
      a: "Unfortunately, no. The corridor has multiple staircases and narrow passages that prevent wheelchair access. Visitors with mobility issues should contact the museum in advance.",
    },
  ],
};

const it: VasariCorridorContent = {
  meta: {
    title:
      "Corridoio Vasariano Firenze 2026 | Storia, Biglietti e Come Visitarlo",
    description:
      "Visita il Corridoio Vasariano degli Uffizi — il passaggio segreto sopra Ponte Vecchio che collega gli Uffizi a Palazzo Pitti. Storia, riapertura e prenotazioni.",
  },
  breadcrumb: "Corridoio Vasariano",
  h1: "Il Corridoio Vasariano",
  intro:
    "Il passaggio segreto piu straordinario al mondo passa proprio sopra la tua testa quando cammini sul Ponte Vecchio. Il Corridoio Vasariano e un camminamento sopraelevato di quasi un chilometro che collega la Galleria degli Uffizi a Palazzo Pitti, passando sopra il Ponte Vecchio e attraversando il cuore di Firenze. Costruito in soli cinque mesi nel 1565, permetteva ai Medici di spostarsi tra gli uffici di governo e la residenza privata senza mai mettere piede in strada.",
  topCta: {
    title: "Tour del Corridoio Vasariano",
    duration: "1,5 ore",
    includes: "Ingresso salta la fila, guida abilitata",
  },
  history: {
    h2: "La Storia — Un Passaggio Costruito per il Potere",
    p1: "Nel 1565, Cosimo I de' Medici aveva un problema da risolvere. Il figlio Francesco stava per sposare Giovanna d'Austria, e il Duca voleva impressionare i suoceri asburgici. Ma soprattutto voleva un percorso privato tra Palazzo Vecchio (sede del governo), gli Uffizi (i suoi uffici amministrativi) e Palazzo Pitti (la nuova residenza della famiglia, sull'altra sponda dell'Arno).",
    p2: {
      before: "Si rivolse a ",
      vasariLinkText: "Giorgio Vasari",
      after: ", l'architetto che aveva gia progettato il palazzo degli Uffizi. Vasari completo il corridoio in appena cinque mesi — un'impresa ingegneristica che stupisce ancora oggi. Il passaggio sale dagli Uffizi, attraversa l'Arno passando sopra il Ponte Vecchio, aggira la torre medievale dei Mannelli (che rifiutarono di farla demolire) e arriva a Palazzo Pitti.",
    },
    p3: "Il corridoio vasariano era molto piu di una comodita — era un'affermazione di potere assoluto. I Medici potevano osservare i sudditi attraverso piccole finestre rotonde senza essere visti. Secondo la leggenda, Cosimo fece spostare i macellai dal Ponte Vecchio (che lavoravano li da secoli) e li sostitui con orafi e gioiellieri, perche l'odore della carne lo infastidiva durante la passeggiata quotidiana. I gioiellieri sono ancora sul Ponte Vecchio.",
  },
  whatYoullSee: {
    h2: "Cosa Vedrai All'Interno",
    intro:
      "L'esperienza del Corridoio Vasariano e unica a Firenze. Camminare nel passaggio stretto e luminoso e come entrare nella storia segreta della citta. Ecco cosa aspettarti:",
    items: [
      {
        label: "Il collegamento con gli Uffizi:",
        text: "Il corridoio inizia all'interno della Galleria degli Uffizi, vicino all'uscita. Passerai attraverso una porta davanti alla quale la maggior parte dei visitatori passa senza accorgersene.",
      },
      {
        label: "Sopra il Ponte Vecchio:",
        text: "Il momento piu emozionante della visita. Attraverserai il fiume sopra il celebre ponte, guardando l'Arno attraverso le finestre rotonde e ammirando le colline dell'Oltrarno. Le viste sono straordinarie.",
      },
      {
        label: "La Chiesa di Santa Felicita:",
        text: "Il corridoio attraversa il balcone superiore di questa chiesa. I Medici assistevano alla Messa da una finestra schermata privata — potevano seguire la funzione senza essere visti dai fedeli.",
      },
      {
        label: "Sculture romane e greche:",
        text: "Dopo il restauro, il corridoio espone una collezione di sculture antiche lungo tutto il percorso, al posto della celebre raccolta di autoritratti trasferita nelle sale principali degli Uffizi.",
      },
      {
        label: "Arrivo a Palazzo Pitti:",
        text: "Il corridoio termina all'ingresso del Giardino di Boboli di Palazzo Pitti — la grande reggia rinascimentale dei Medici.",
      },
    ],
  },
  visiting: {
    h2: "Visitare il Corridoio Vasariano",
    p: "Dopo anni di restauro, il Corridoio Vasariano ha riaperto al pubblico. L'accesso e consentito solo con visita guidata — non e possibile entrare in autonomia. I tour sono limitati per proteggere la struttura, quindi prenotare con largo anticipo e fondamentale, soprattutto in alta stagione.",
    practicalDetails: {
      h3: "Informazioni Pratiche",
      items: [
        { label: "Durata:", text: "Circa 1 ora e mezza" },
        {
          label: "Accesso:",
          text: "Solo con visita guidata (non sono ammesse visite indipendenti)",
        },
        {
          label: "Dimensione del gruppo:",
          text: "Piccoli gruppi, massimo 25 persone",
        },
        {
          label: "Accessibilita:",
          text: "Il corridoio ha scale e passaggi stretti. Non accessibile in sedia a rotelle.",
        },
        {
          label: "Biglietto separato:",
          text: "Il Corridoio Vasariano richiede un biglietto dedicato — il biglietto standard degli Uffizi non include l'accesso.",
        },
      ],
    },
  },
  wwii: {
    h2: "La Seconda Guerra Mondiale e il Corridoio Vasariano",
    p: "Durante la Seconda Guerra Mondiale, l'esercito tedesco in ritirata distrusse tutti i ponti di Firenze tranne il Ponte Vecchio. Se fu un ordine diretto di Hitler (come vuole la leggenda) o una decisione pratica (il ponte era troppo stretto per i carri armati) e ancora dibattuto dagli storici. I tedeschi distrussero pero gli edifici medievali alle due estremita del ponte per creare barricate di macerie. Il Corridoio Vasariano sopravvisse intatto — uno dei tanti momenti in cui la storia lo ha sfiorato.",
  },
  tips: {
    h2: "Consigli per la Visita",
    bookEarly:
      "Prenota il prima possibile — i tour si esauriscono con settimane di anticipo",
    comfortableShoes:
      "Indossa scarpe comode — il corridoio e lungo circa 1 chilometro",
    combineWithTour: {
      before: "Abbina la visita a una ",
      linkText: "visita guidata agli Uffizi",
      after: " per l'esperienza completa",
    },
    warmInSummer:
      "Il corridoio puo essere caldo d'estate — vestiti leggero",
    photography: "Si possono fare foto ma senza flash e senza treppiede",
  },
  bottomCta: {
    title: "Prenota un Tour del Corridoio Vasariano",
    duration: "1,5 ore",
  },
  faq: [
    {
      q: "Il Corridoio Vasariano e aperto ai visitatori nel 2026?",
      a: "Si. Dopo un lungo restauro, il Corridoio Vasariano ha riaperto. L'accesso e solo con visita guidata, con posti giornalieri limitati. Prenota con largo anticipo, soprattutto per le visite in primavera e in estate.",
    },
    {
      q: "Quanto e lungo il Corridoio Vasariano?",
      a: "Il corridoio e lungo circa 1 chilometro, dagli Uffizi attraverso il Ponte Vecchio fino a Palazzo Pitti. La visita guidata dura circa 1 ora e mezza.",
    },
    {
      q: "Si puo visitare il Corridoio Vasariano senza guida?",
      a: "No. Il Corridoio Vasariano e accessibile solo tramite visite guidate organizzate. Le visite autonome non sono consentite per ragioni di spazio e conservazione.",
    },
    {
      q: "Il Corridoio Vasariano e incluso nel biglietto degli Uffizi?",
      a: "No. Il Corridoio Vasariano richiede una prenotazione separata e specifica. Il biglietto standard della Galleria degli Uffizi non include l'accesso al Corridoio.",
    },
    {
      q: "Chi ha costruito il Corridoio Vasariano?",
      a: "Giorgio Vasari progetto e costrui il corridoio nel 1565 per ordine di Cosimo I de' Medici. Fu completato in soli cinque mesi — una straordinaria impresa dell'ingegneria rinascimentale.",
    },
    {
      q: "Il Corridoio Vasariano e accessibile in sedia a rotelle?",
      a: "Purtroppo no. Il corridoio ha diverse scale e passaggi stretti che impediscono l'accesso in sedia a rotelle. I visitatori con difficolta motorie sono invitati a contattare il museo in anticipo.",
    },
  ],
};

const de: VasariCorridorContent = {
  meta: {
    title:
      "Vasari-Korridor Florenz 2026 | Geschichte, Tickets & Besichtigung",
    description:
      "Besuchen Sie den Vasari-Korridor — den geheimen Übergang über dem Ponte Vecchio, der die Uffizien mit dem Palazzo Pitti verbindet. Geschichte, Wiedereröffnung & Buchung.",
  },
  breadcrumb: "Vasari-Korridor",
  h1: "Der Vasari-Korridor",
  intro:
    "Wandeln Sie durch den außergewöhnlichsten Geheimgang der Welt. Der Vasari-Korridor ist ein knapp einen Kilometer langer, überdachter Laufgang, der von der Galleria degli Uffizi über den Ponte Vecchio bis zum Palazzo Pitti auf der anderen Seite des Arno führt. In nur fünf Monaten im Jahr 1565 erbaut, ermöglichte er den Medici-Herrschern, zwischen ihren Regierungsräumen und ihrer Residenz zu pendeln, ohne jemals öffentlichen Boden zu betreten.",
  topCta: {
    title: "Vasari-Korridor-Tour",
    duration: "1,5 Stunden",
    includes: "Bevorzugter Einlass, lizenzierter Guide",
  },
  history: {
    h2: "Die Geschichte — Ein Gang, gebaut für die Macht",
    p1: "Im Jahr 1565 hatte Cosimo I. de' Medici ein Problem zu lösen. Sein Sohn Francesco sollte Johanna von Österreich heiraten, und der Herzog wollte seine habsburgischen Schwiegereltern beeindrucken. Vor allem aber wünschte er sich einen privaten Weg zwischen dem Palazzo Vecchio (dem Regierungssitz), den Uffizien (seinen Verwaltungsbüros) und dem Palazzo Pitti (der neuen Familienresidenz jenseits des Flusses).",
    p2: {
      before: "Er wandte sich an ",
      vasariLinkText: "Giorgio Vasari",
      after: ", den Architekten, der bereits das Uffizien-Gebäude selbst entworfen hatte. Vasari stellte den Korridor in erstaunlichen fünf Monaten fertig — eine Ingenieurleistung, die bis heute beeindruckt. Der Gang führt von den Uffizien empor, überquert den Arno über das Obergeschoss des Ponte Vecchio, umgeht den mittelalterlichen Turm der Familie Mannelli (die sich weigerten, ihn abreißen zu lassen) und erreicht den Palazzo Pitti.",
    },
    p3: "Der Korridor war weit mehr als eine Annehmlichkeit — er war eine Demonstration absoluter Macht. Die Medici konnten ihre Untertanen durch kleine runde Fenster beobachten, ohne selbst gesehen zu werden. Der Legende nach ließ Cosimo die Metzger vom Ponte Vecchio entfernen (die dort seit Jahrhunderten ansässig waren) und durch Goldschmiede und Juweliere ersetzen, weil ihn der Fleischgeruch bei seinem täglichen Gang störte. Die Juweliere sind bis heute auf dem Ponte Vecchio.",
  },
  whatYoullSee: {
    h2: "Was Sie im Inneren erwartet",
    intro:
      "Der Vasari-Korridor bietet ein Erlebnis, das in Florenz einzigartig ist. Der Gang durch den schmalen, lichtdurchfluteten Passage fühlt sich an wie ein Eintauchen in die geheime Geschichte der Stadt. Folgendes erwartet Sie:",
    items: [
      {
        label: "Die Verbindung zu den Uffizien:",
        text: "Der Korridor beginnt innerhalb der Uffizien-Galerie in der Nähe des Ausgangs. Sie passieren eine Tür, an der die meisten Besucher ahnungslos vorbeigehen.",
      },
      {
        label: "Über dem Ponte Vecchio:",
        text: "Das Highlight der Begehung. Sie überqueren den Fluss oberhalb der berühmten Brücke und blicken durch runde Fenster auf den Arno hinab und hinüber zu den Hügeln des Oltrarno. Die Aussicht ist atemberaubend.",
      },
      {
        label: "Die Kirche Santa Felicita:",
        text: "Der Korridor führt durch die obere Empore dieser Kirche. Die Medici wohnten der Messe von einem abgeschirmten Privatfenster aus bei — sie konnten den Gottesdienst verfolgen, ohne von der Gemeinde gesehen zu werden.",
      },
      {
        label: "Römische & griechische Skulpturen:",
        text: "Nach der Restaurierung zeigt der Korridor eine Sammlung antiker Skulpturen entlang des gesamten Weges. Sie ersetzen die berühmte Selbstporträt-Sammlung, die in die Hauptsäle der Uffizien verlegt wurde.",
      },
      {
        label: "Ankunft am Palazzo Pitti:",
        text: "Der Korridor endet am Eingang zum Boboli-Garten des Palazzo Pitti — dem prachtvollen Renaissance-Palast der Medici.",
      },
    ],
  },
  visiting: {
    h2: "Den Vasari-Korridor besichtigen",
    p: "Nach jahrelanger Restaurierung ist der Vasari-Korridor wieder für Besucher zugänglich. Der Zugang ist ausschließlich im Rahmen einer Führung möglich — eigenständige Besichtigungen sind nicht gestattet. Die Anzahl der Touren ist begrenzt, um die empfindliche Bausubstanz zu schützen. Eine frühzeitige Buchung ist daher unbedingt empfehlenswert, besonders in der Hauptsaison.",
    practicalDetails: {
      h3: "Praktische Informationen",
      items: [
        { label: "Dauer:", text: "Etwa 1,5 Stunden" },
        {
          label: "Zugang:",
          text: "Nur mit Führung (keine eigenständigen Besuche)",
        },
        {
          label: "Gruppengröße:",
          text: "Kleine Gruppen, in der Regel maximal 25 Personen",
        },
        {
          label: "Barrierefreiheit:",
          text: "Der Korridor hat Treppen und enge Durchgänge. Nicht rollstuhlgerecht.",
        },
        {
          label: "Separates Ticket:",
          text: "Für den Vasari-Korridor ist ein eigenes Ticket erforderlich — eine reguläre Uffizi-Eintrittskarte beinhaltet keinen Zugang.",
        },
      ],
    },
  },
  wwii: {
    h2: "Der Zweite Weltkrieg und der Vasari-Korridor",
    p: "Während des Zweiten Weltkriegs zerstörte die sich zurückziehende deutsche Wehrmacht alle Brücken in Florenz — mit Ausnahme des Ponte Vecchio. Ob dies ein direkter Befehl Hitlers war (wie die Legende besagt) oder eine pragmatische Entscheidung (die Brücke war zu schmal für Panzer), ist unter Historikern umstritten. Die Deutschen zerstörten jedoch die mittelalterlichen Gebäude an beiden Enden der Brücke, um Barrikaden aus Trümmern zu errichten. Der darüberliegende Vasari-Korridor überstand den Krieg unbeschadet — eine von vielen Begegnungen dieses Bauwerks mit der Geschichte.",
  },
  tips: {
    h2: "Tipps für Ihren Besuch",
    bookEarly:
      "Buchen Sie so früh wie möglich — Touren sind oft wochenlang im Voraus ausverkauft",
    comfortableShoes:
      "Tragen Sie bequeme Schuhe — der Korridor ist rund 1 Kilometer lang",
    combineWithTour: {
      before: "Kombinieren Sie den Besuch mit einer ",
      linkText: "Uffizi-Führung",
      after: " für das komplette Erlebnis",
    },
    warmInSummer:
      "Im Sommer kann es im Korridor warm werden — kleiden Sie sich leicht",
    photography: "Fotografieren ist erlaubt, jedoch ohne Blitz und ohne Stativ",
  },
  bottomCta: {
    title: "Vasari-Korridor-Tour buchen",
    duration: "1,5 Stunden",
  },
  faq: [
    {
      q: "Ist der Vasari-Korridor 2026 für Besucher geöffnet?",
      a: "Ja. Nach umfassender Restaurierung ist der Vasari-Korridor wieder zugänglich. Der Zugang ist nur im Rahmen geführter Touren mit begrenzten Tagesplätzen möglich. Buchen Sie frühzeitig, besonders für Besuche im Frühling und Sommer.",
    },
    {
      q: "Wie lang ist der Vasari-Korridor?",
      a: "Der Korridor ist etwa 1 Kilometer lang und führt von den Uffizien über den Ponte Vecchio zum Palazzo Pitti. Die Führung dauert rund 1,5 Stunden.",
    },
    {
      q: "Kann man den Vasari-Korridor ohne Führung besichtigen?",
      a: "Nein. Der Vasari-Korridor ist ausschließlich im Rahmen organisierter Führungen zugänglich. Eigenständige Besuche sind aus Platz- und Denkmalschutzgründen nicht möglich.",
    },
    {
      q: "Ist der Vasari-Korridor im Uffizi-Ticket enthalten?",
      a: "Nein. Für den Vasari-Korridor ist eine separate Buchung erforderlich. Eine reguläre Eintrittskarte für die Uffizien-Galerie beinhaltet keinen Zugang zum Korridor.",
    },
    {
      q: "Wer hat den Vasari-Korridor erbaut?",
      a: "Giorgio Vasari entwarf und erbaute den Korridor 1565 im Auftrag von Cosimo I. de' Medici. Die Fertigstellung in nur fünf Monaten gilt als bemerkenswerte Leistung der Renaissance-Baukunst.",
    },
    {
      q: "Ist der Vasari-Korridor rollstuhlgerecht?",
      a: "Leider nein. Der Korridor verfügt über mehrere Treppen und enge Durchgänge, die einen Rollstuhlzugang ausschließen. Besucher mit eingeschränkter Mobilität sollten sich vorab an das Museum wenden.",
    },
  ],
};

const fr: VasariCorridorContent = {
  meta: {
    title:
      "Corridor de Vasari Florence 2026 | Histoire, Billets et Visite",
    description:
      "Visitez le Corridor de Vasari \u2014 le passage secret au-dessus du Ponte Vecchio reliant la Galerie des Offices au Palazzo Pitti. Histoire, reouverture et reservations.",
  },
  breadcrumb: "Corridor de Vasari",
  h1: "Le Corridor de Vasari",
  intro:
    "Parcourez le passage secret le plus extraordinaire au monde. Le Corridor de Vasari est une passerelle couverte d'un kilometre de long qui relie la Galerie des Offices au Palazzo Pitti, en passant au-dessus du Ponte Vecchio et en enjambant l'Arno. Construit en seulement cinq mois en 1565, il permettait aux Medicis de se deplacer entre leurs bureaux de gouvernement et leur residence sans jamais mettre le pied dans la rue.",
  topCta: {
    title: "Visite du Corridor de Vasari",
    duration: "1h30",
    includes: "Entree coupe-file, guide agree",
  },
  history: {
    h2: "L'Histoire \u2014 Un passage bati pour le pouvoir",
    p1: "En 1565, Cosme Ier de Medicis avait un probleme a resoudre. Son fils Francois allait epouser Jeanne d'Autriche, et le Duc voulait impressionner sa belle-famille habsbourgeoise. Plus concretement, il souhaitait un itineraire prive entre le Palazzo Vecchio (siege du gouvernement), les Offices (ses bureaux administratifs) et le Palazzo Pitti (la nouvelle residence familiale de l'autre cote du fleuve).",
    p2: {
      before: "Il fit appel a ",
      vasariLinkText: "Giorgio Vasari",
      after: ", l'architecte qui avait deja concu le batiment des Offices. Vasari acheva le corridor en a peine cinq mois \u2014 un exploit d'ingenierie qui impressionne encore aujourd'hui. Le passage s'eleve depuis les Offices, traverse l'Arno par le dernier etage du Ponte Vecchio, contourne la tour medievale de la famille Mannelli (qui refusa de la laisser demolir) et aboutit au Palazzo Pitti.",
    },
    p3: "Le corridor etait bien plus qu'une commodite \u2014 c'etait une affirmation de pouvoir absolu. Les Medicis pouvaient observer leurs sujets a travers de petites fenetres rondes sans etre vus. Selon la legende, Cosme fit chasser les bouchers du Ponte Vecchio (ils y etaient installes depuis des siecles) et les remplacer par des orfevres et des joailliers, car l'odeur de la viande l'incommodait lors de sa promenade quotidienne. Les joailliers sont toujours sur le Ponte Vecchio.",
  },
  whatYoullSee: {
    h2: "Ce que vous verrez a l'interieur",
    intro:
      "L'experience du Corridor de Vasari est unique a Florence. Marcher dans ce passage etroit et lumineux donne l'impression de penetrer dans l'histoire secrete de la ville. Voici ce qui vous attend :",
    items: [
      {
        label: "La connexion avec les Offices :",
        text: "Le corridor debute a l'interieur de la Galerie des Offices, pres de la sortie. Vous franchirez une porte devant laquelle la plupart des visiteurs passent sans le savoir.",
      },
      {
        label: "Au-dessus du Ponte Vecchio :",
        text: "Le point fort de la visite. Vous traverserez le fleuve au-dessus du celebre pont, en admirant l'Arno a travers les fenetres rondes et les collines de l'Oltrarno. Les vues sont extraordinaires.",
      },
      {
        label: "L'eglise Santa Felicita :",
        text: "Le corridor traverse le balcon superieur de cette eglise. Les Medicis assistaient a la messe depuis une fenetre grillagee privee \u2014 ils pouvaient suivre l'office sans etre vus par les fideles.",
      },
      {
        label: "Sculptures romaines et grecques :",
        text: "Apres la restauration, le corridor presente une collection de sculptures antiques sur toute sa longueur, remplacant la celebre collection d'autoportraits demenagee dans les salles principales des Offices.",
      },
      {
        label: "Arrivee au Palazzo Pitti :",
        text: "Le corridor s'acheve a l'entree du jardin de Boboli du Palazzo Pitti \u2014 le grand palais Renaissance des Medicis.",
      },
    ],
  },
  visiting: {
    h2: "Visiter le Corridor de Vasari",
    p: "Apres des annees de restauration, le Corridor de Vasari a rouvert au public. L'acces se fait uniquement en visite guidee \u2014 il n'est pas possible de le visiter de maniere autonome. Le nombre de visites est limite pour proteger la structure fragile : la reservation bien en avance est donc indispensable, surtout en haute saison.",
    practicalDetails: {
      h3: "Informations pratiques",
      items: [
        { label: "Duree :", text: "Environ 1h30" },
        {
          label: "Acces :",
          text: "Visite guidee uniquement (pas de visite libre)",
        },
        {
          label: "Taille du groupe :",
          text: "Petits groupes, 25 personnes maximum",
        },
        {
          label: "Accessibilite :",
          text: "Le corridor comporte des escaliers et des passages etroits. Non accessible en fauteuil roulant.",
        },
        {
          label: "Billet separe :",
          text: "Le Corridor de Vasari necessite un billet specifique \u2014 un billet standard pour les Offices n'inclut pas l'acces.",
        },
      ],
    },
  },
  wwii: {
    h2: "La Seconde Guerre mondiale et le Corridor de Vasari",
    p: "Pendant la Seconde Guerre mondiale, l'armee allemande en retraite detruisit tous les ponts de Florence a l'exception du Ponte Vecchio. Que ce fut un ordre direct de Hitler (comme le veut la legende) ou une decision pragmatique (le pont etait trop etroit pour les chars) fait encore debat parmi les historiens. Cependant, les Allemands detruisirent les batiments medievaux aux deux extremites du pont pour creer des barricades de decombres. Le Corridor de Vasari, au-dessus, survecit intact \u2014 l'un de ses nombreux rendez-vous avec l'histoire.",
  },
  tips: {
    h2: "Conseils pour votre visite",
    bookEarly:
      "Reservez le plus tot possible \u2014 les visites se remplissent des semaines a l'avance",
    comfortableShoes:
      "Portez des chaussures confortables \u2014 le corridor fait environ 1 kilometre de long",
    combineWithTour: {
      before: "Combinez avec une ",
      linkText: "visite guidee des Offices",
      after: " pour une experience complete",
    },
    warmInSummer:
      "Le corridor peut etre chaud en ete \u2014 habillez-vous legerement",
    photography: "Les photos sont autorisees mais sans flash ni trepied",
  },
  bottomCta: {
    title: "Reservez une visite du Corridor de Vasari",
    duration: "1h30",
  },
  faq: [
    {
      q: "Le Corridor de Vasari est-il ouvert aux visiteurs en 2026 ?",
      a: "Oui. Apres une restauration approfondie, le Corridor de Vasari a rouvert. L'acces se fait uniquement par visite guidee, avec un nombre limite de places par jour. Reservez bien a l'avance, surtout pour les visites au printemps et en ete.",
    },
    {
      q: "Quelle est la longueur du Corridor de Vasari ?",
      a: "Le corridor mesure environ 1 kilometre, de la Galerie des Offices au Palazzo Pitti en passant par le Ponte Vecchio. La visite guidee dure environ 1h30.",
    },
    {
      q: "Peut-on visiter le Corridor de Vasari sans guide ?",
      a: "Non. Le Corridor de Vasari n'est accessible que dans le cadre de visites guidees organisees. Les visites autonomes ne sont pas autorisees en raison de l'etroitesse des lieux et des exigences de conservation.",
    },
    {
      q: "Le Corridor de Vasari est-il inclus dans le billet des Offices ?",
      a: "Non. Le Corridor de Vasari necessite une reservation separee et specifique. Un billet standard pour la Galerie des Offices n'inclut pas l'acces au Corridor.",
    },
    {
      q: "Qui a construit le Corridor de Vasari ?",
      a: "Giorgio Vasari a concu et construit le corridor en 1565 sur ordre de Cosme Ier de Medicis. Il fut acheve en seulement cinq mois \u2014 un exploit remarquable de l'ingenierie de la Renaissance.",
    },
    {
      q: "Le Corridor de Vasari est-il accessible en fauteuil roulant ?",
      a: "Malheureusement non. Le corridor comporte plusieurs escaliers et des passages etroits qui empechent l'acces en fauteuil roulant. Les visiteurs a mobilite reduite sont invites a contacter le musee au prealable.",
    },
  ],
};

const es: VasariCorridorContent = {
  meta: {
    title:
      "Corredor Vasariano Florencia 2026 | Historia, Entradas y Como Visitarlo",
    description:
      "Visita el Corredor Vasariano \u2014 el pasadizo secreto sobre el Ponte Vecchio que conecta la Galeria Uffizi con el Palazzo Pitti. Historia, reapertura y reservas.",
  },
  breadcrumb: "Corredor Vasariano",
  h1: "El Corredor Vasariano",
  intro:
    "Recorre el pasadizo secreto mas extraordinario del mundo. El Corredor Vasariano es un pasaje elevado de un kilometro de largo que conecta la Galeria Uffizi con el Palazzo Pitti, pasando por encima del Ponte Vecchio y cruzando el rio Arno. Construido en solo cinco meses en 1565, permitia a los Medici desplazarse entre sus oficinas de gobierno y su residencia sin poner jamas un pie en la calle.",
  topCta: {
    title: "Tour del Corredor Vasariano",
    duration: "1,5 horas",
    includes: "Entrada sin colas, guia oficial",
  },
  history: {
    h2: "La Historia \u2014 Un pasaje construido para el poder",
    p1: "En 1565, Cosimo I de Medici tenia un problema que resolver. Su hijo Francisco iba a casarse con Juana de Austria, y el Duque queria impresionar a sus suegros habsburgos. De forma mas practica, deseaba una ruta privada entre el Palazzo Vecchio (la sede del gobierno), los Uffizi (sus oficinas administrativas) y el Palazzo Pitti (la nueva residencia familiar al otro lado del rio).",
    p2: {
      before: "Recurrio a ",
      vasariLinkText: "Giorgio Vasari",
      after: ", el arquitecto que ya habia disenado el propio edificio de los Uffizi. Vasari completo el corredor en tan solo cinco meses \u2014 una hazana de ingenieria que sigue impresionando hoy en dia. El pasaje asciende desde los Uffizi, cruza el Arno por la planta superior del Ponte Vecchio, rodea la torre medieval de la familia Mannelli (que se nego a dejarla demoler) y llega al Palazzo Pitti.",
    },
    p3: "El corredor era mucho mas que una comodidad \u2014 era una demostracion de poder absoluto. Los Medici podian observar a sus subditos a traves de pequenas ventanas redondas sin ser vistos. Segun la leyenda, Cosimo ordeno expulsar a los carniceros del Ponte Vecchio (que llevaban siglos alli) y sustituirlos por orfebres y joyeros, porque el olor de la carne le molestaba durante su paseo diario. Los joyeros siguen en el Ponte Vecchio hasta hoy.",
  },
  whatYoullSee: {
    h2: "Que veras en el interior",
    intro:
      "La experiencia del Corredor Vasariano es unica en Florencia. Caminar por este pasaje estrecho y luminoso es como adentrarse en la historia secreta de la ciudad. Esto es lo que te espera:",
    items: [
      {
        label: "La conexion con los Uffizi:",
        text: "El corredor comienza dentro de la Galeria Uffizi, cerca de la salida. Pasaras por una puerta por la que la mayoria de los visitantes pasan sin darse cuenta.",
      },
      {
        label: "Sobre el Ponte Vecchio:",
        text: "El momento mas emocionante de la visita. Cruzaras el rio por encima del famoso puente, contemplando el Arno a traves de las ventanas redondas y las colinas del Oltrarno. Las vistas son extraordinarias.",
      },
      {
        label: "La iglesia de Santa Felicita:",
        text: "El corredor atraviesa el balcon superior de esta iglesia. Los Medici asistian a misa desde una ventana privada con celosia \u2014 podian seguir el oficio sin ser vistos por los fieles.",
      },
      {
        label: "Esculturas romanas y griegas:",
        text: "Tras la restauracion, el corredor exhibe una coleccion de esculturas antiguas a lo largo de todo su recorrido, en sustitucion de la famosa coleccion de autorretratos trasladada a las salas principales de los Uffizi.",
      },
      {
        label: "Llegada al Palazzo Pitti:",
        text: "El corredor termina en la entrada de los Jardines de Boboli del Palazzo Pitti \u2014 el gran palacio renacentista de los Medici.",
      },
    ],
  },
  visiting: {
    h2: "Visitar el Corredor Vasariano",
    p: "Tras anos de restauracion, el Corredor Vasariano ha reabierto al publico. El acceso es exclusivamente con visita guiada \u2014 no se permite la visita libre. Las visitas estan limitadas para proteger la fragil estructura, por lo que es imprescindible reservar con mucha antelacion, especialmente en temporada alta.",
    practicalDetails: {
      h3: "Informacion practica",
      items: [
        { label: "Duracion:", text: "Aproximadamente 1,5 horas" },
        {
          label: "Acceso:",
          text: "Solo con visita guiada (no se admiten visitas independientes)",
        },
        {
          label: "Tamano del grupo:",
          text: "Grupos reducidos, maximo 25 personas",
        },
        {
          label: "Accesibilidad:",
          text: "El corredor tiene escaleras y pasillos estrechos. No es accesible en silla de ruedas.",
        },
        {
          label: "Entrada independiente:",
          text: "El Corredor Vasariano requiere su propia entrada \u2014 una entrada estandar de los Uffizi no incluye el acceso.",
        },
      ],
    },
  },
  wwii: {
    h2: "La Segunda Guerra Mundial y el Corredor Vasariano",
    p: "Durante la Segunda Guerra Mundial, el ejercito aleman en retirada destruyo todos los puentes de Florencia excepto el Ponte Vecchio. Si fue una orden directa de Hitler (como dice la leyenda) o una decision practica (el puente era demasiado estrecho para los tanques) sigue siendo debatido por los historiadores. Sin embargo, los alemanes destruyeron los edificios medievales en ambos extremos del puente para crear barricadas de escombros. El Corredor Vasariano, en la parte superior, sobrevivio intacto \u2014 uno de sus muchos encuentros con la historia.",
  },
  tips: {
    h2: "Consejos para tu visita",
    bookEarly:
      "Reserva lo antes posible \u2014 las visitas se agotan con semanas de antelacion",
    comfortableShoes:
      "Lleva calzado comodo \u2014 el corredor tiene aproximadamente 1 kilometro de longitud",
    combineWithTour: {
      before: "Combinalo con una ",
      linkText: "visita guiada a los Uffizi",
      after: " para la experiencia completa",
    },
    warmInSummer:
      "El corredor puede resultar caluroso en verano \u2014 viste con ropa ligera",
    photography: "Se permiten fotos pero sin flash ni tripode",
  },
  bottomCta: {
    title: "Reserva un tour del Corredor Vasariano",
    duration: "1,5 horas",
  },
  faq: [
    {
      q: "Esta abierto el Corredor Vasariano a los visitantes en 2026?",
      a: "Si. Tras una extensa restauracion, el Corredor Vasariano ha reabierto. El acceso es solo mediante visita guiada, con plazas diarias limitadas. Reserva con mucha antelacion, especialmente para visitas en primavera y verano.",
    },
    {
      q: "Cuanto mide el Corredor Vasariano?",
      a: "El corredor tiene aproximadamente 1 kilometro de longitud, desde la Galeria Uffizi a traves del Ponte Vecchio hasta el Palazzo Pitti. La visita guiada dura unas 1,5 horas.",
    },
    {
      q: "Se puede visitar el Corredor Vasariano sin guia?",
      a: "No. El Corredor Vasariano solo es accesible mediante visitas guiadas organizadas. No se permiten visitas independientes debido al espacio reducido y los requisitos de conservacion.",
    },
    {
      q: "Esta incluido el Corredor Vasariano en la entrada de los Uffizi?",
      a: "No. El Corredor Vasariano requiere una reserva separada y especifica. Una entrada estandar de la Galeria Uffizi no incluye acceso al Corredor.",
    },
    {
      q: "Quien construyo el Corredor Vasariano?",
      a: "Giorgio Vasari diseno y construyo el corredor en 1565 por encargo de Cosimo I de Medici. Fue completado en tan solo cinco meses \u2014 una hazana extraordinaria de la ingenieria renacentista.",
    },
    {
      q: "Es accesible el Corredor Vasariano en silla de ruedas?",
      a: "Lamentablemente no. El corredor cuenta con varias escaleras y pasillos estrechos que impiden el acceso en silla de ruedas. Los visitantes con movilidad reducida deben contactar con el museo previamente.",
    },
  ],
};

const content: PageContent<VasariCorridorContent> = { en, it, de, fr, es };

export function getVasariCorridorContent(
  locale: string
): VasariCorridorContent {
  return getContent(content, locale);
}
