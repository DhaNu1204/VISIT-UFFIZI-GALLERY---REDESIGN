import { getContent, type PageContent } from "./types";

export type HistoryContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  intro: {
    before: string;
    vasariLinkText: string;
    after: string;
  };
  vasariSection: {
    h2: string;
    p1: string;
    p2: {
      before: string;
      corridorLinkText: string;
      after: string;
    };
  };
  mediciCollection: {
    h2: string;
    p1: string;
    p2: string;
  };
  annaMaria: {
    h2: string;
    p1: string;
    p2: string;
  };
  galleryToMuseum: {
    h2: string;
    p: string;
  };
  wwii: {
    h2: string;
    p: {
      before: string;
      corridorLinkText: string;
      after: string;
    };
  };
  flood: {
    h2: string;
    p: string;
  };
  modernUffizi: {
    h2: string;
    p: string;
  };
  ctaTitle: string;
  faq: { q: string; a: string }[];
};

const en: HistoryContent = {
  meta: {
    title: "History of the Uffizi Gallery | Medici to Museum",
    description:
      "The Uffizi Gallery's history: from Vasari's 1560 design for the Medici to one of the world's greatest art museums. Medici legacy, floods & transformation.",
  },
  breadcrumb: "History",
  h1: "History of the Uffizi Gallery",
  intro: {
    before:
      'The Uffizi Gallery didn\'t start as a museum. It started as a power move. In 1560, Cosimo I de\' Medici — Duke of Florence and the most powerful man in Tuscany — commissioned ',
    vasariLinkText: "Giorgio Vasari",
    after:
      ' to design a building that would house all of Florence\'s administrative offices under one roof, and under his control. The name says it all: "uffizi" means "offices" in Italian.',
  },
  vasariSection: {
    h2: "Vasari's Masterpiece (1560-1580)",
    p1: "Vasari designed an elegant U-shaped building that stretched from the Palazzo Vecchio to the Arno River, framing a long open piazza between its two wings. The architecture was revolutionary — a harmony of classical columns, open loggias, and large windows that flooded the interiors with light. Construction began in 1560, but Vasari didn't live to see it completed. He died in 1574, and the project was finished by Bernardo Buontalenti and Alfonso Parigi.",
    p2: {
      before:
        "But even before the offices were complete, the Medici had bigger plans. In 1565, Vasari built the famous ",
      corridorLinkText: "Vasari Corridor",
      after:
        " — the elevated passageway connecting the Uffizi to the Palazzo Pitti across the Ponte Vecchio. And in 1581, Francesco I de' Medici converted the top floor of the east wing into a gallery for the family's growing art collection. This was the moment the Uffizi transformed from bureaucratic offices into something extraordinary.",
    },
  },
  mediciCollection: {
    h2: "The Medici Collection",
    p1: "The Medici family didn't just collect art — they created the conditions for it to exist. As bankers, popes, and rulers of Florence, they commissioned works from virtually every major artist of the Renaissance: Botticelli, Leonardo, Michelangelo, Raphael, and hundreds of others. Their collection grew over two centuries, becoming the most important private art collection in Europe.",
    p2: "Each generation of Medici added to the gallery. The Tribuna — an octagonal room designed by Buontalenti in 1584 — was created specifically to display the family's most prized possessions, including ancient Roman sculptures and Renaissance gems. Cardinals, princes, and foreign dignitaries came from across Europe to see it. The Tribuna was, in many ways, the world's first museum room.",
  },
  annaMaria: {
    h2: "Anna Maria Luisa — The Woman Who Saved It All",
    p1: 'The most important figure in the Uffizi\'s history isn\'t a painter or a pope — it\'s Anna Maria Luisa de\' Medici, the last of the Medici line. When she died in 1743, she left the entire family collection to the city of Florence through the "Family Pact" (Patto di Famiglia). Her one condition: the art could never be removed from Florence. It must stay "for the ornament of the State, for the benefit of the people, and to attract the curiosity of foreigners."',
    p2: "Without Anna Maria Luisa's extraordinary foresight, the Medici collection would have been dispersed across European royal courts and private collections. Instead, every painting you see in the Uffizi today is there because of her decision. Florence should build her a bigger statue.",
  },
  galleryToMuseum: {
    h2: "From Gallery to Museum (18th-19th Century)",
    p: "Under the House of Lorraine (who succeeded the Medici as rulers of Tuscany), the Uffizi gradually transformed into a proper public museum. The Lorraine reorganized the collection chronologically, moved sculptures to other institutions, and opened new rooms to visitors. By the 1850s, the Uffizi was one of the most visited museums in Europe, a required stop on every Grand Tour itinerary.",
  },
  wwii: {
    h2: "World War II",
    p: {
      before:
        "When war came to Italy, the museum's staff acted heroically. Before the German occupation, hundreds of paintings were secretly transported to countryside villas and castles for protection. The building survived the war largely intact, though the retreating German army destroyed buildings at both ends of the Ponte Vecchio. The ",
      corridorLinkText: "Vasari Corridor",
      after: " above survived.",
    },
  },
  flood: {
    h2: "The 1966 Florence Flood",
    p: 'On November 4, 1966, the Arno River burst its banks and flooded Florence with water, mud, and heating oil. The floodwaters reached the Uffizi\'s ground floor, damaging the building\'s foundation and destroying works stored in the basement. An international rescue effort — the famous "mud angels" — helped save thousands of artworks across the city. The flood led to major advances in art conservation techniques that are still used worldwide today.',
  },
  modernUffizi: {
    h2: "The Modern Uffizi",
    p: 'Since the 1990s, the Uffizi has undergone continuous expansion and renovation under the "New Uffizi" project. Gallery space has nearly doubled, new rooms have opened on the ground floor, and the collection\'s display has been dramatically reorganized. Today\'s Uffizi features 101 rooms spanning two floors, with works arranged chronologically from the 13th through 18th centuries. Over 2 million visitors walk through its doors each year, making it one of the most visited museums in the world.',
  },
  ctaTitle: "Experience the Uffizi with an Expert Guide",
  faq: [
    {
      q: "When was the Uffizi Gallery built?",
      a: "Construction began in 1560 under architect Giorgio Vasari, commissioned by Cosimo I de' Medici. It was originally designed as administrative offices ('uffizi'). The top floor became an art gallery in 1581.",
    },
    {
      q: "Who created the Uffizi art collection?",
      a: "The Medici family assembled the collection over two centuries of patronage. The last Medici heir, Anna Maria Luisa, bequeathed the entire collection to Florence in 1743 with the condition it could never leave the city.",
    },
    {
      q: "Who designed the Uffizi building?",
      a: "Giorgio Vasari designed the building in 1560. He also built the famous Vasari Corridor connecting the Uffizi to the Palazzo Pitti. The building was completed after his death by Bernardo Buontalenti and Alfonso Parigi.",
    },
    {
      q: "Was the Uffizi damaged in World War II?",
      a: "The main building survived intact, though staff secretly evacuated hundreds of paintings to countryside locations before the German occupation. The retreating German army destroyed buildings near the Ponte Vecchio but spared the bridge and the Vasari Corridor above it.",
    },
  ],
};

const it: HistoryContent = {
  meta: {
    title: "Storia della Galleria degli Uffizi | Dai Medici al Museo",
    description:
      "La storia della Galleria degli Uffizi: dal progetto di Vasari del 1560 per i Medici a uno dei piu grandi musei d'arte al mondo. Eredita medicea, alluvione e trasformazione.",
  },
  breadcrumb: "Storia",
  h1: "Storia della Galleria degli Uffizi",
  intro: {
    before:
      'La Galleria degli Uffizi non nasce come museo. Nasce come affermazione di potere. Nel 1560, Cosimo I de\' Medici — Duca di Firenze e l\'uomo piu potente della Toscana — incarico ',
    vasariLinkText: "Giorgio Vasari",
    after:
      ' di progettare un edificio che riunisse tutti gli uffici amministrativi di Firenze sotto un unico tetto, e sotto il suo controllo. Il nome dice tutto: "uffizi" significa proprio "uffici".',
  },
  vasariSection: {
    h2: "Il Capolavoro di Vasari (1560-1580)",
    p1: "Vasari progetto un elegante edificio a forma di U che si estendeva da Palazzo Vecchio fino all'Arno, incorniciando una lunga piazza aperta tra le due ali. L'architettura era rivoluzionaria — un'armonia di colonne classiche, logge aperte e grandi finestre che inondavano gli interni di luce. I lavori iniziarono nel 1560, ma Vasari non visse abbastanza per vederli completati. Mori nel 1574, e il progetto fu portato a termine da Bernardo Buontalenti e Alfonso Parigi.",
    p2: {
      before:
        "Ma ancor prima che gli uffici fossero ultimati, i Medici avevano piani ben piu ambiziosi. Nel 1565, Vasari costrui il celebre ",
      corridorLinkText: "Corridoio Vasariano",
      after:
        " — il passaggio sopraelevato che collegava gli Uffizi a Palazzo Pitti attraverso il Ponte Vecchio. E nel 1581, Francesco I de' Medici trasformo l'ultimo piano dell'ala est in una galleria per la crescente collezione d'arte di famiglia. Fu in quel momento che gli Uffizi passarono da semplici uffici burocratici a qualcosa di straordinario.",
    },
  },
  mediciCollection: {
    h2: "La Collezione Medicea",
    p1: "I Medici non si limitavano a collezionare arte — creavano le condizioni perche l'arte esistesse. Come banchieri, papi e signori di Firenze, commissionarono opere a praticamente tutti i grandi artisti del Rinascimento: Botticelli, Leonardo, Michelangelo, Raffaello e centinaia di altri. La loro collezione crebbe nell'arco di due secoli, diventando la piu importante raccolta d'arte privata d'Europa.",
    p2: "Ogni generazione di Medici arricchi la galleria. La Tribuna — una sala ottagonale progettata da Buontalenti nel 1584 — fu creata appositamente per esporre i pezzi piu preziosi della famiglia, tra cui sculture romane antiche e gioielli rinascimentali. Cardinali, principi e dignitari stranieri arrivavano da tutta Europa per ammirarla. La Tribuna fu, sotto molti aspetti, la prima sala museale del mondo.",
  },
  annaMaria: {
    h2: "Anna Maria Luisa — La donna che salvo tutto",
    p1: 'La figura piu importante nella storia degli Uffizi non e un pittore ne un papa — e Anna Maria Luisa de\' Medici, l\'ultima della stirpe medicea. Quando mori nel 1743, lascio l\'intera collezione di famiglia alla citta di Firenze attraverso il "Patto di Famiglia". La sua unica condizione: le opere non avrebbero mai potuto lasciare Firenze. Dovevano restare "per ornamento dello Stato, per utilita del Pubblico e per attirare la curiosita dei Forestieri."',
    p2: "Senza la straordinaria lungimiranza di Anna Maria Luisa, la collezione medicea sarebbe stata dispersa tra le corti reali europee e le collezioni private. Invece, ogni dipinto che ammiri oggi agli Uffizi e li grazie alla sua decisione. Firenze dovrebbe dedicarle una statua piu grande.",
  },
  galleryToMuseum: {
    h2: "Da Galleria a Museo (XVIII-XIX secolo)",
    p: "Sotto la Casa di Lorena (che succedette ai Medici come governanti della Toscana), gli Uffizi si trasformarono gradualmente in un vero e proprio museo pubblico. I Lorena riorganizzarono la collezione in ordine cronologico, trasferirono le sculture in altre istituzioni e aprirono nuove sale ai visitatori. Verso il 1850, gli Uffizi erano uno dei musei piu visitati d'Europa, tappa obbligata di ogni Grand Tour.",
  },
  wwii: {
    h2: "La Seconda Guerra Mondiale",
    p: {
      before:
        "Quando la guerra arrivo in Italia, il personale del museo agi con eroismo. Prima dell'occupazione tedesca, centinaia di dipinti furono trasportati segretamente in ville e castelli di campagna per proteggerli. L'edificio sopravvisse alla guerra sostanzialmente intatto, anche se l'esercito tedesco in ritirata distrusse gli edifici alle due estremita del Ponte Vecchio. Il ",
      corridorLinkText: "Corridoio Vasariano",
      after: " sopravvisse.",
    },
  },
  flood: {
    h2: "L'alluvione di Firenze del 1966",
    p: 'Il 4 novembre 1966, l\'Arno ruppe gli argini e invase Firenze con acqua, fango e nafta. Le acque raggiunsero il piano terra degli Uffizi, danneggiando le fondamenta e distruggendo opere conservate nei sotterranei. Un\'operazione di soccorso internazionale — i famosi "angeli del fango" — contribui a salvare migliaia di opere d\'arte in tutta la citta. L\'alluvione porto a importanti progressi nelle tecniche di restauro che sono ancora utilizzate in tutto il mondo.',
  },
  modernUffizi: {
    h2: "Gli Uffizi Moderni",
    p: 'Dagli anni Novanta, gli Uffizi sono stati sottoposti a un continuo ampliamento e rinnovamento nell\'ambito del progetto "Nuovi Uffizi". Lo spazio espositivo e quasi raddoppiato, nuove sale sono state aperte al piano terra e l\'allestimento della collezione e stato radicalmente riorganizzato. Oggi gli Uffizi contano 101 sale su due piani, con opere disposte in ordine cronologico dal XIII al XVIII secolo. Oltre 2 milioni di visitatori varcano le sue porte ogni anno, rendendolo uno dei musei piu visitati al mondo.',
  },
  ctaTitle: "Scopri gli Uffizi con una Guida Esperta",
  faq: [
    {
      q: "Quando fu costruita la Galleria degli Uffizi?",
      a: "I lavori iniziarono nel 1560 su progetto dell'architetto Giorgio Vasari, per volere di Cosimo I de' Medici. Originariamente concepito come sede degli uffici amministrativi ('uffizi'), l'ultimo piano divenne galleria d'arte nel 1581.",
    },
    {
      q: "Chi creo la collezione d'arte degli Uffizi?",
      a: "La famiglia Medici raccolse la collezione in due secoli di mecenatismo. L'ultima erede medicea, Anna Maria Luisa, lascio l'intera collezione a Firenze nel 1743 a condizione che non lasciasse mai la citta.",
    },
    {
      q: "Chi progetto l'edificio degli Uffizi?",
      a: "Giorgio Vasari progetto l'edificio nel 1560. Costrui anche il celebre Corridoio Vasariano che collega gli Uffizi a Palazzo Pitti. L'edificio fu completato dopo la sua morte da Bernardo Buontalenti e Alfonso Parigi.",
    },
    {
      q: "Gli Uffizi subirono danni durante la Seconda Guerra Mondiale?",
      a: "L'edificio principale sopravvisse intatto, anche se il personale evacuo segretamente centinaia di dipinti in localita di campagna prima dell'occupazione tedesca. L'esercito tedesco in ritirata distrusse edifici vicino al Ponte Vecchio, ma risparmio il ponte e il Corridoio Vasariano.",
    },
  ],
};

const de: HistoryContent = {
  meta: {
    title: "Geschichte der Uffizien | Von den Medici zum Museum",
    description:
      "Die Geschichte der Uffizien: von Vasaris Entwurf 1560 fur die Medici zu einem der grossten Kunstmuseen der Welt. Medici-Erbe, Flut und Wandel im Uberblick.",
  },
  breadcrumb: "Geschichte",
  h1: "Geschichte der Uffizien",
  intro: {
    before:
      'Die Uffizien begannen nicht als Museum. Sie begannen als Machtdemonstration. Im Jahr 1560 beauftragte Cosimo I. de\' Medici — Herzog von Florenz und der machtigste Mann der Toskana — ',
    vasariLinkText: "Giorgio Vasari",
    after:
      ' mit dem Entwurf eines Gebaudes, das samtliche Verwaltungsamter von Florenz unter einem Dach vereinen sollte — und unter seiner Kontrolle. Der Name sagt alles: "uffizi" bedeutet auf Italienisch "Amter" oder "Buros".',
  },
  vasariSection: {
    h2: "Vasaris Meisterwerk (1560-1580)",
    p1: "Vasari entwarf ein elegantes U-formiges Gebaude, das sich vom Palazzo Vecchio bis zum Arno erstreckte und eine lange offene Piazza zwischen seinen beiden Flugeln einrahmte. Die Architektur war revolutionar — ein Zusammenspiel klassischer Saulen, offener Loggien und grosser Fenster, die die Innenraume mit Licht durchfluteten. Der Bau begann 1560, doch Vasari erlebte die Fertigstellung nicht mehr. Er starb 1574, und das Projekt wurde von Bernardo Buontalenti und Alfonso Parigi vollendet.",
    p2: {
      before:
        "Doch schon bevor die Amter fertiggestellt waren, hatten die Medici grossere Plane. Im Jahr 1565 errichtete Vasari den beruhmten ",
      corridorLinkText: "Vasari-Korridor",
      after:
        " — den erhohten Durchgang, der die Uffizien uber den Ponte Vecchio mit dem Palazzo Pitti verband. Und 1581 verwandelte Francesco I. de' Medici das oberste Stockwerk des Ostflugels in eine Galerie fur die wachsende Kunstsammlung der Familie. Dies war der Moment, in dem sich die Uffizien von burokratischen Amtsraumen in etwas Aussergewohnliches verwandelten.",
    },
  },
  mediciCollection: {
    h2: "Die Sammlung der Medici",
    p1: "Die Medici sammelten nicht nur Kunst — sie schufen die Voraussetzungen fur ihre Entstehung. Als Bankiers, Papste und Herrscher von Florenz gaben sie Werke bei praktisch jedem bedeutenden Kunstler der Renaissance in Auftrag: Botticelli, Leonardo, Michelangelo, Raffael und Hunderten weiteren. Ihre Sammlung wuchs uber zwei Jahrhunderte und wurde zur bedeutendsten privaten Kunstsammlung Europas.",
    p2: "Jede Generation der Medici bereicherte die Galerie. Die Tribuna — ein achteckiger Raum, den Buontalenti 1584 entwarf — wurde eigens geschaffen, um die wertvollsten Besitztumer der Familie auszustellen, darunter antike romische Skulpturen und Juwelen der Renaissance. Kardinale, Fursten und auslandische Wurden-trager kamen aus ganz Europa, um sie zu bestaunen. Die Tribuna war in vielerlei Hinsicht der erste Museumsraum der Welt.",
  },
  annaMaria: {
    h2: "Anna Maria Luisa — Die Frau, die alles rettete",
    p1: 'Die wichtigste Figur in der Geschichte der Uffizien ist kein Maler und kein Papst — es ist Anna Maria Luisa de\' Medici, die Letzte der Medici-Linie. Als sie 1743 starb, hinterliess sie die gesamte Familiensammlung der Stadt Florenz durch den "Familienpakt" (Patto di Famiglia). Ihre einzige Bedingung: Die Kunst durfe niemals aus Florenz entfernt werden. Sie musse bleiben "zur Zierde des Staates, zum Nutzen des Volkes und um die Neugier der Fremden anzuziehen."',
    p2: "Ohne die aussergewohnliche Weitsicht Anna Maria Luisas ware die Medici-Sammlung uber europaische Konigshofe und Privatsammlungen verstreut worden. Stattdessen ist jedes Gemalde, das Sie heute in den Uffizien sehen, dank ihrer Entscheidung dort. Florenz sollte ihr eine grossere Statue errichten.",
  },
  galleryToMuseum: {
    h2: "Von der Galerie zum Museum (18.-19. Jahrhundert)",
    p: "Unter dem Haus Lothringen (das den Medici als Herrscher der Toskana nachfolgte) wandelten sich die Uffizien allmahlich zu einem offentlichen Museum. Die Lothringer ordneten die Sammlung chronologisch, verlegten Skulpturen in andere Institutionen und offneten neue Sale fur Besucher. Um 1850 waren die Uffizien eines der meistbesuchten Museen Europas — ein Pflichtbesuch auf jeder Grand-Tour-Route.",
  },
  wwii: {
    h2: "Der Zweite Weltkrieg",
    p: {
      before:
        "Als der Krieg Italien erreichte, handelte das Museumspersonal heldenhaft. Vor der deutschen Besatzung wurden Hunderte von Gemalden heimlich in Landhausern und Burgen in Sicherheit gebracht. Das Gebaude uberstand den Krieg weitgehend unbeschadet, obwohl die sich zuruckziehende deutsche Wehrmacht Gebaude an beiden Enden des Ponte Vecchio zerstorte. Der ",
      corridorLinkText: "Vasari-Korridor",
      after: " daruber uberstand den Krieg.",
    },
  },
  flood: {
    h2: "Die Flut von Florenz 1966",
    p: 'Am 4. November 1966 trat der Arno uber die Ufer und uberflutete Florenz mit Wasser, Schlamm und Heizol. Die Fluten erreichten das Erdgeschoss der Uffizien, beschadigten das Fundament des Gebaudes und zerstorten im Keller gelagerte Werke. Eine internationale Rettungsaktion — die beruhmten "Schlammengel" — half, Tausende von Kunstwerken in der ganzen Stadt zu retten. Die Flut fuhrte zu bedeutenden Fortschritten in der Kunstrestaurierung, die bis heute weltweit angewandt werden.',
  },
  modernUffizi: {
    h2: "Die Modernen Uffizien",
    p: 'Seit den 1990er Jahren werden die Uffizien im Rahmen des Projekts "Neue Uffizien" kontinuierlich erweitert und renoviert. Die Ausstellungsflache hat sich nahezu verdoppelt, im Erdgeschoss wurden neue Sale eroffnet, und die Prasentation der Sammlung wurde grundlegend neu gestaltet. Die heutigen Uffizien umfassen 101 Sale auf zwei Etagen, in denen Werke chronologisch vom 13. bis zum 18. Jahrhundert angeordnet sind. Uber 2 Millionen Besucher kommen jahrlich — damit gehoren die Uffizien zu den meistbesuchten Museen der Welt.',
  },
  ctaTitle: "Erleben Sie die Uffizien mit einem Expertenguide",
  faq: [
    {
      q: "Wann wurden die Uffizien erbaut?",
      a: "Der Bau begann 1560 unter dem Architekten Giorgio Vasari, im Auftrag von Cosimo I. de' Medici. Ursprunglich als Verwaltungsgebaude ('uffizi') konzipiert, wurde das Obergeschoss 1581 zur Kunstgalerie.",
    },
    {
      q: "Wer schuf die Kunstsammlung der Uffizien?",
      a: "Die Familie Medici trug die Sammlung uber zwei Jahrhunderte der Kunstforderung zusammen. Die letzte Medici-Erbin, Anna Maria Luisa, vermachte die gesamte Sammlung 1743 an Florenz — unter der Bedingung, dass sie die Stadt nie verlassen durfe.",
    },
    {
      q: "Wer hat das Uffizien-Gebaude entworfen?",
      a: "Giorgio Vasari entwarf das Gebaude 1560. Er errichtete auch den beruhmten Vasari-Korridor, der die Uffizien mit dem Palazzo Pitti verbindet. Nach seinem Tod wurde der Bau von Bernardo Buontalenti und Alfonso Parigi vollendet.",
    },
    {
      q: "Wurden die Uffizien im Zweiten Weltkrieg beschadigt?",
      a: "Das Hauptgebaude blieb unversehrt, obwohl das Personal vor der deutschen Besatzung heimlich Hunderte von Gemalden in landliche Verstecke evakuierte. Die abziehende deutsche Wehrmacht zerstorte Gebaude am Ponte Vecchio, verschonte aber die Brucke und den daruber liegenden Vasari-Korridor.",
    },
  ],
};

const fr: HistoryContent = {
  meta: {
    title: "Histoire de la Galerie des Offices | Des Medicis au Musee",
    description:
      "L'histoire de la Galerie des Offices : du projet de Vasari en 1560 pour les Medicis a l'un des plus grands musees d'art au monde. Heritage, crue et evolution.",
  },
  breadcrumb: "Histoire",
  h1: "Histoire de la Galerie des Offices",
  intro: {
    before:
      'La Galerie des Offices n\'a pas commence comme un musee. Elle a commence comme une demonstration de pouvoir. En 1560, Cosme Ier de Medicis — Duc de Florence et l\'homme le plus puissant de Toscane — confia a ',
    vasariLinkText: "Giorgio Vasari",
    after:
      ' la conception d\'un batiment qui regrouperait tous les bureaux administratifs de Florence sous un seul toit, et sous son controle. Le nom dit tout : "uffizi" signifie "bureaux" en italien.',
  },
  vasariSection: {
    h2: "Le Chef-d'oeuvre de Vasari (1560-1580)",
    p1: "Vasari concut un elegant batiment en U qui s'etendait du Palazzo Vecchio jusqu'a l'Arno, encadrant une longue piazza ouverte entre ses deux ailes. L'architecture etait revolutionnaire — une harmonie de colonnes classiques, de loggias ouvertes et de grandes fenetres qui inondaient les interieurs de lumiere. La construction debuta en 1560, mais Vasari ne vecut pas assez longtemps pour la voir achevee. Il mourut en 1574, et le projet fut termine par Bernardo Buontalenti et Alfonso Parigi.",
    p2: {
      before:
        "Mais avant meme que les bureaux ne soient acheves, les Medicis avaient des projets plus ambitieux. En 1565, Vasari construisit le celebre ",
      corridorLinkText: "Corridor de Vasari",
      after:
        " — le passage sureleve reliant les Offices au Palazzo Pitti en traversant le Ponte Vecchio. Et en 1581, Francois Ier de Medicis transforma le dernier etage de l'aile est en galerie pour la collection d'art grandissante de la famille. Ce fut le moment ou les Offices se transformerent de simples bureaux administratifs en quelque chose d'extraordinaire.",
    },
  },
  mediciCollection: {
    h2: "La Collection des Medicis",
    p1: "Les Medicis ne se contentaient pas de collectionner l'art — ils creaient les conditions de son existence. En tant que banquiers, papes et maitres de Florence, ils commanderent des oeuvres a pratiquement tous les grands artistes de la Renaissance : Botticelli, Leonard de Vinci, Michel-Ange, Raphael et des centaines d'autres. Leur collection s'enrichit pendant deux siecles, devenant la plus importante collection d'art privee d'Europe.",
    p2: "Chaque generation de Medicis enrichit la galerie. La Tribune — une salle octogonale concue par Buontalenti en 1584 — fut creee specialement pour exposer les pieces les plus precieuses de la famille, dont des sculptures romaines antiques et des joyaux de la Renaissance. Cardinaux, princes et dignitaires etrangers venaient de toute l'Europe pour l'admirer. La Tribune fut, a bien des egards, la premiere salle de musee au monde.",
  },
  annaMaria: {
    h2: "Anna Maria Luisa — La femme qui sauva tout",
    p1: 'Le personnage le plus important de l\'histoire des Offices n\'est ni un peintre ni un pape — c\'est Anna Maria Luisa de\' Medici, la derniere de la lignee des Medicis. A sa mort en 1743, elle legua l\'integralite de la collection familiale a la ville de Florence par le "Pacte de Famille" (Patto di Famiglia). Sa seule condition : les oeuvres ne devaient jamais quitter Florence. Elles devaient rester "pour l\'ornement de l\'Etat, pour le bien du peuple et pour attirer la curiosite des etrangers."',
    p2: "Sans la clairvoyance extraordinaire d'Anna Maria Luisa, la collection des Medicis aurait ete dispersee dans les cours royales europeennes et les collections privees. Au lieu de cela, chaque tableau que vous admirez aujourd'hui aux Offices s'y trouve grace a sa decision. Florence devrait lui eriger une plus grande statue.",
  },
  galleryToMuseum: {
    h2: "De la Galerie au Musee (XVIIIe-XIXe siecle)",
    p: "Sous la Maison de Lorraine (qui succeda aux Medicis a la tete de la Toscane), les Offices se transformerent progressivement en un veritable musee public. Les Lorraine reorganiserent la collection chronologiquement, deplacerent les sculptures vers d'autres institutions et ouvrirent de nouvelles salles aux visiteurs. Vers les annees 1850, les Offices etaient l'un des musees les plus visites d'Europe, etape incontournable de tout Grand Tour.",
  },
  wwii: {
    h2: "La Seconde Guerre mondiale",
    p: {
      before:
        "Lorsque la guerre atteignit l'Italie, le personnel du musee fit preuve d'un heroisme remarquable. Avant l'occupation allemande, des centaines de tableaux furent secretement transportes dans des villas et chateaux de campagne. Le batiment survecit a la guerre pratiquement intact, bien que l'armee allemande en retraite ait detruit des immeubles aux deux extremites du Ponte Vecchio. Le ",
      corridorLinkText: "Corridor de Vasari",
      after: " au-dessus survecit.",
    },
  },
  flood: {
    h2: "La crue de Florence de 1966",
    p: 'Le 4 novembre 1966, l\'Arno deborda et inonda Florence sous l\'eau, la boue et le fioul. Les eaux atteignirent le rez-de-chaussee des Offices, endommageant les fondations et detruisant des oeuvres stockees au sous-sol. Une operation de sauvetage internationale — les celebres "anges de la boue" — contribua a sauver des milliers d\'oeuvres d\'art dans toute la ville. La crue aboutit a des avancees majeures dans les techniques de conservation qui sont encore utilisees dans le monde entier.',
  },
  modernUffizi: {
    h2: "Les Offices Modernes",
    p: 'Depuis les annees 1990, les Offices font l\'objet d\'un agrandissement et d\'une renovation continus dans le cadre du projet "Nouveaux Offices". L\'espace d\'exposition a presque double, de nouvelles salles ont ouvert au rez-de-chaussee, et la presentation de la collection a ete radicalement reorganisee. Les Offices d\'aujourd\'hui comptent 101 salles sur deux etages, avec des oeuvres disposees chronologiquement du XIIIe au XVIIIe siecle. Plus de 2 millions de visiteurs franchissent leurs portes chaque annee, en faisant l\'un des musees les plus visites au monde.',
  },
  ctaTitle: "Decouvrez les Offices avec un Guide Expert",
  faq: [
    {
      q: "Quand la Galerie des Offices a-t-elle ete construite ?",
      a: "La construction debuta en 1560 sous la direction de l'architecte Giorgio Vasari, a la commande de Cosme Ier de Medicis. Concu a l'origine comme bureaux administratifs ('uffizi'), le dernier etage devint galerie d'art en 1581.",
    },
    {
      q: "Qui a constitue la collection d'art des Offices ?",
      a: "La famille Medicis rassembla la collection sur deux siecles de mecenat. La derniere heritiere des Medicis, Anna Maria Luisa, legua l'ensemble de la collection a Florence en 1743, a condition qu'elle ne quitte jamais la ville.",
    },
    {
      q: "Qui a concu le batiment des Offices ?",
      a: "Giorgio Vasari concut le batiment en 1560. Il construisit egalement le celebre Corridor de Vasari reliant les Offices au Palazzo Pitti. Le batiment fut acheve apres sa mort par Bernardo Buontalenti et Alfonso Parigi.",
    },
    {
      q: "Les Offices ont-ils ete endommages pendant la Seconde Guerre mondiale ?",
      a: "Le batiment principal survecit intact, bien que le personnel ait secretement evacue des centaines de tableaux vers la campagne avant l'occupation allemande. L'armee allemande en retraite detruisit des immeubles pres du Ponte Vecchio, mais epargna le pont et le Corridor de Vasari.",
    },
  ],
};

const es: HistoryContent = {
  meta: {
    title: "Historia de la Galeria Uffizi | De los Medici al Museo",
    description:
      "La historia de la Galeria Uffizi: desde el proyecto de Vasari en 1560 para los Medici hasta uno de los mayores museos de arte del mundo. Legado, riada y cambio.",
  },
  breadcrumb: "Historia",
  h1: "Historia de la Galeria Uffizi",
  intro: {
    before:
      'La Galeria Uffizi no empezo siendo un museo. Empezo como una demostracion de poder. En 1560, Cosimo I de\' Medici — Duque de Florencia y el hombre mas poderoso de la Toscana — encargo a ',
    vasariLinkText: "Giorgio Vasari",
    after:
      ' el diseno de un edificio que reuniera todas las oficinas administrativas de Florencia bajo un mismo techo, y bajo su control. El nombre lo dice todo: "uffizi" significa "oficinas" en italiano.',
  },
  vasariSection: {
    h2: "La Obra Maestra de Vasari (1560-1580)",
    p1: "Vasari diseno un elegante edificio en forma de U que se extendia desde el Palazzo Vecchio hasta el rio Arno, enmarcando una larga plaza abierta entre sus dos alas. La arquitectura era revolucionaria — una armonia de columnas clasicas, logias abiertas y grandes ventanales que inundaban los interiores de luz. La construccion comenzo en 1560, pero Vasari no vivio para verla terminada. Murio en 1574, y el proyecto fue completado por Bernardo Buontalenti y Alfonso Parigi.",
    p2: {
      before:
        "Pero incluso antes de que las oficinas estuvieran terminadas, los Medici tenian planes mas ambiciosos. En 1565, Vasari construyo el famoso ",
      corridorLinkText: "Corredor Vasariano",
      after:
        " — el pasaje elevado que conectaba los Uffizi con el Palazzo Pitti a traves del Ponte Vecchio. Y en 1581, Francisco I de' Medici convirtio la planta superior del ala este en una galeria para la creciente coleccion de arte familiar. Este fue el momento en que los Uffizi pasaron de simples oficinas burocraticas a algo extraordinario.",
    },
  },
  mediciCollection: {
    h2: "La Coleccion Medici",
    p1: "Los Medici no solo coleccionaban arte — creaban las condiciones para que el arte existiera. Como banqueros, papas y gobernantes de Florencia, encargaron obras a practicamente todos los grandes artistas del Renacimiento: Botticelli, Leonardo, Miguel Angel, Rafael y cientos mas. Su coleccion crecio a lo largo de dos siglos, convirtiendose en la coleccion privada de arte mas importante de Europa.",
    p2: "Cada generacion de Medici enriquecio la galeria. La Tribuna — una sala octogonal disenada por Buontalenti en 1584 — fue creada expresamente para exhibir las posesiones mas preciadas de la familia, incluyendo esculturas romanas antiguas y joyas renacentistas. Cardenales, principes y dignatarios extranjeros llegaban de toda Europa para admirarla. La Tribuna fue, en muchos sentidos, la primera sala de museo del mundo.",
  },
  annaMaria: {
    h2: "Anna Maria Luisa — La mujer que lo salvo todo",
    p1: 'La figura mas importante en la historia de los Uffizi no es un pintor ni un papa — es Anna Maria Luisa de\' Medici, la ultima de la estirpe medicea. Cuando murio en 1743, lego la coleccion familiar completa a la ciudad de Florencia a traves del "Pacto de Familia" (Patto di Famiglia). Su unica condicion: las obras nunca podrian salir de Florencia. Debian permanecer "para ornamento del Estado, para utilidad del Pueblo y para atraer la curiosidad de los Extranjeros."',
    p2: "Sin la extraordinaria prevision de Anna Maria Luisa, la coleccion medicea se habria dispersado entre las cortes reales europeas y las colecciones privadas. En cambio, cada cuadro que contemplas hoy en los Uffizi esta ahi gracias a su decision. Florencia deberia erigirle una estatua mas grande.",
  },
  galleryToMuseum: {
    h2: "De Galeria a Museo (siglos XVIII-XIX)",
    p: "Bajo la Casa de Lorena (que sucedio a los Medici como gobernantes de la Toscana), los Uffizi se transformaron gradualmente en un autentico museo publico. Los Lorena reorganizaron la coleccion cronologicamente, trasladaron esculturas a otras instituciones y abrieron nuevas salas a los visitantes. Hacia 1850, los Uffizi eran uno de los museos mas visitados de Europa, parada obligada en todo itinerario del Grand Tour.",
  },
  wwii: {
    h2: "La Segunda Guerra Mundial",
    p: {
      before:
        "Cuando la guerra llego a Italia, el personal del museo actuo con heroismo. Antes de la ocupacion alemana, cientos de cuadros fueron trasladados en secreto a villas y castillos del campo para su proteccion. El edificio sobrevivio a la guerra practicamente intacto, aunque el ejercito aleman en retirada destruyo edificios en ambos extremos del Ponte Vecchio. El ",
      corridorLinkText: "Corredor Vasariano",
      after: " de arriba sobrevivio.",
    },
  },
  flood: {
    h2: "La riada de Florencia de 1966",
    p: 'El 4 de noviembre de 1966, el Arno se desbordo e inundo Florencia con agua, barro y combustible. Las aguas alcanzaron la planta baja de los Uffizi, danando los cimientos del edificio y destruyendo obras almacenadas en el sotano. Una operacion de rescate internacional — los famosos "angeles del barro" — ayudo a salvar miles de obras de arte en toda la ciudad. La riada impulso avances decisivos en las tecnicas de conservacion de arte que todavia se utilizan en todo el mundo.',
  },
  modernUffizi: {
    h2: "Los Uffizi Modernos",
    p: 'Desde los anos noventa, los Uffizi han experimentado una continua ampliacion y renovacion dentro del proyecto "Nuevos Uffizi". El espacio expositivo casi se ha duplicado, se han abierto nuevas salas en la planta baja y la disposicion de la coleccion ha sido reorganizada de forma radical. Los Uffizi de hoy cuentan con 101 salas en dos plantas, con obras ordenadas cronologicamente desde el siglo XIII hasta el XVIII. Mas de 2 millones de visitantes cruzan sus puertas cada ano, lo que los convierte en uno de los museos mas visitados del mundo.',
  },
  ctaTitle: "Descubre los Uffizi con un Guia Experto",
  faq: [
    {
      q: "Cuando se construyo la Galeria Uffizi?",
      a: "La construccion comenzo en 1560 bajo la direccion del arquitecto Giorgio Vasari, por encargo de Cosimo I de' Medici. Disenado originalmente como oficinas administrativas ('uffizi'), la planta superior se convirtio en galeria de arte en 1581.",
    },
    {
      q: "Quien creo la coleccion de arte de los Uffizi?",
      a: "La familia Medici reunio la coleccion a lo largo de dos siglos de mecenazgo. La ultima heredera de los Medici, Anna Maria Luisa, lego la coleccion completa a Florencia en 1743 con la condicion de que nunca abandonara la ciudad.",
    },
    {
      q: "Quien diseno el edificio de los Uffizi?",
      a: "Giorgio Vasari diseno el edificio en 1560. Tambien construyo el famoso Corredor Vasariano que conecta los Uffizi con el Palazzo Pitti. El edificio fue completado tras su muerte por Bernardo Buontalenti y Alfonso Parigi.",
    },
    {
      q: "Sufrieron danos los Uffizi durante la Segunda Guerra Mundial?",
      a: "El edificio principal sobrevivio intacto, aunque el personal evacuo en secreto cientos de cuadros a zonas rurales antes de la ocupacion alemana. El ejercito aleman en retirada destruyo edificios junto al Ponte Vecchio, pero respeto el puente y el Corredor Vasariano.",
    },
  ],
};

const content: PageContent<HistoryContent> = { en, it, de, fr, es };

export function getHistoryContent(locale: string): HistoryContent {
  return getContent(content, locale);
}
