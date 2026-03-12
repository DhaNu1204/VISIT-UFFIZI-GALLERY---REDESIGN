import { getContent, type PageContent } from "./types";

export type ArtworksContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  intro: string;
  highlights: {
    h2: string;
    p: string;
  };
  botticelli: {
    h3: string;
    p: string;
  };
  leonardo: {
    h3: string;
    p: string;
  };
  michelangelo: {
    h3: string;
    p: string;
  };
  raphael: {
    h3: string;
    p: string;
  };
  titian: {
    h3: string;
    p: string;
  };
  caravaggio: {
    h3: string;
    p: string;
  };
  beyondPaintings: {
    h2: string;
    p: string;
  };
  whereTofind: {
    h2: string;
    p: string;
  };
  ctaTitle: string;
  faq: { q: string; a: string }[];
};

const en: ArtworksContent = {
  meta: {
    title: "Uffizi Gallery Artworks | Birth of Venus, Leonardo & More",
    description:
      "Discover the Uffizi's masterpieces: Botticelli's Birth of Venus & Primavera, Leonardo's Annunciation, Michelangelo's Doni Tondo & more. Room locations & highlights.",
  },
  breadcrumb: "Artworks",
  h1: "Uffizi Gallery Artworks",
  intro:
    "The Uffizi Gallery holds one of the world's greatest art collections — over 1,500 works spanning six centuries. Here you'll find the masterpieces that defined the Renaissance: Botticelli's flowing goddesses, Leonardo's enigmatic madonnas, Michelangelo's sculptural figures, and Caravaggio's dramatic shadows. This isn't just a museum — it's the story of Western art told through its most iconic works.",
  highlights: {
    h2: "The Masterpieces Everyone Comes to See",
    p: "Certain paintings have become symbols of the entire Renaissance. These are the works you'll recognize instantly — and they're every bit as extraordinary in person as you've imagined. Here's where to find them and what makes them unforgettable.",
  },
  botticelli: {
    h3: "Sandro Botticelli — Rooms 10-14",
    p: "The Birth of Venus (c. 1485) and Primavera (c. 1482) face each other in the Botticelli rooms, and the experience is overwhelming. Venus emerging from her shell, blown by the winds, draped in flowing pink — it's one of the most recognizable images in art history. Primavera, with its dancing Graces and flower-covered meadow, is even more intricate. Both were painted for the Medici villa at Castello and show Botticelli's signature style: delicate figures, flowing fabrics, classical mythology reimagined with Renaissance grace.",
  },
  leonardo: {
    h3: "Leonardo da Vinci — Room 35",
    p: "Leonardo's Annunciation (c. 1472-1475) is extraordinary for one reason: you can see him learning. Painted when he was barely 20, it shows the angel Gabriel arriving to tell Mary she'll bear the son of God. The landscape behind them is pure Leonardo — misty, atmospheric, impossibly detailed. Also here: his unfinished Adoration of the Magi, a chaotic swirl of figures that shows his compositional genius even in incomplete form.",
  },
  michelangelo: {
    h3: "Michelangelo — Room 35",
    p: "Michelangelo only painted a handful of panel paintings — most of his work is sculpture or massive frescoes. The Doni Tondo (c. 1507) is one of the rare exceptions, and it's a stunner. It shows the Holy Family in impossibly twisted poses, with sculptural bodies and vibrant colors. You can already see the style he'd later use on the Sistine Chapel ceiling. The circular frame is original — carved and gilded by the workshop of Giuliano da Sangallo.",
  },
  raphael: {
    h3: "Raphael — Room 66",
    p: "Raphael's Madonna of the Goldfinch (c. 1506) shows the Virgin Mary watching as the infant Christ and young John the Baptist play with a goldfinch (a symbol of Christ's future Passion). It's gentle, harmonious, perfectly balanced — everything Raphael is known for. Also here: his famous portraits of Pope Leo X and Pope Julius II, showing his mastery of both sacred and secular subjects.",
  },
  titian: {
    h3: "Titian — Room 83",
    p: "Titian's Venus of Urbino (1538) is one of the most sensual paintings in the entire museum. A nude Venus reclines on rumpled bed sheets, gazing directly at the viewer with complete confidence. It's intimate, provocative, and beautifully painted — the textures of fabric, skin, and jewelry are masterful. This painting influenced nearly every reclining nude painted after it, from Manet's Olympia to Goya's Maja.",
  },
  caravaggio: {
    h3: "Caravaggio — Room 90",
    p: "Caravaggio's works explode with drama. His Medusa (c. 1597) — painted on a circular shield — shows the Gorgon at the moment of her beheading, mouth open in a silent scream. His Bacchus (c. 1598) offers a cup of wine with a knowing smirk, part god, part street hustler. And his Sacrifice of Isaac captures the terrifying instant before Abraham's knife plunges — the boy's face frozen in fear, the angel's hand stopping the blade. These are paintings that punch you in the chest.",
  },
  beyondPaintings: {
    h2: "Beyond the Famous Names",
    p: "The Uffizi isn't just about the stars. Walk through Rooms 2-9 and you'll see how painting evolved: from the flat gold backgrounds of medieval altarpieces (Giotto, Cimabue) to the spatial depth and naturalism of the early Renaissance (Masaccio, Piero della Francesca, Paolo Uccello). The Late Gothic rooms show exquisite detail in works by Gentile da Fabriano and Lorenzo Monaco. And the Venetian rooms (46-55) showcase the color-drunk canvases of Veronese, Tintoretto, and Bellini.",
  },
  whereTofind: {
    h2: "How to Find Specific Artworks",
    p: "The Uffizi's collection is arranged chronologically across 101 rooms on two floors. The most famous Renaissance works are on the second floor (Rooms 10-45). The first floor galleries opened more recently and feature later periods — Caravaggio and the Baroque (Rooms 90-93), Rembrandt and the Dutch masters (Room 49), and special exhibitions. Free museum maps are available at the entrance, and every room is clearly numbered. Most visitors focus on Rooms 10-35 (Botticelli, Leonardo, Michelangelo, Raphael) and Rooms 83-93 (Titian, Caravaggio).",
  },
  ctaTitle: "Skip the Line — Book Your Uffizi Tickets",
  faq: [
    {
      q: "What is the most famous artwork in the Uffizi Gallery?",
      a: "Botticelli's Birth of Venus is the most iconic work in the Uffizi. Painted around 1485, it shows the goddess Venus emerging from the sea on a shell. It's located in Rooms 10-14 (the Botticelli rooms) on the second floor.",
    },
    {
      q: "How many artworks are in the Uffizi Gallery?",
      a: "The Uffizi holds over 1,500 works on permanent display, plus thousands more in storage. The collection includes paintings, sculptures, drawings, and ancient Roman statues spanning from the 12th to the 18th centuries.",
    },
    {
      q: "Can I see Leonardo da Vinci's paintings at the Uffizi?",
      a: "Yes. The Uffizi has Leonardo's Annunciation (c. 1472) and his unfinished Adoration of the Magi. Both are in Room 35 on the second floor, alongside works by Michelangelo and other High Renaissance masters.",
    },
    {
      q: "Where is Caravaggio's Medusa in the Uffizi?",
      a: "Caravaggio's Medusa is in Room 90 on the first floor, along with his Bacchus and Sacrifice of Isaac. These rooms feature Baroque art and dramatic chiaroscuro (light-and-shadow) paintings.",
    },
    {
      q: "Are there Michelangelo sculptures in the Uffizi?",
      a: "The Uffizi has very few sculptures by Michelangelo — it's primarily a painting collection. You can see his Doni Tondo (a painting) in Room 35. For Michelangelo sculptures, visit the Accademia Gallery (David) or the Bargello Museum.",
    },
    {
      q: "How long does it take to see all the artworks?",
      a: "Most visitors spend 2-3 hours in the Uffizi, focusing on the major highlights. If you want to see the full collection in depth, plan for 4-5 hours. Consider a guided tour to make the most of your time.",
    },
  ],
};

const it: ArtworksContent = {
  meta: {
    title: "Opere d'Arte della Galleria degli Uffizi | Nascita di Venere e altro",
    description:
      "Scopri i capolavori degli Uffizi: la Nascita di Venere e la Primavera di Botticelli, l'Annunciazione di Leonardo, il Tondo Doni di Michelangelo e altro. Sale e highlights.",
  },
  breadcrumb: "Opere d'Arte",
  h1: "Opere d'Arte della Galleria degli Uffizi",
  intro:
    "La Galleria degli Uffizi custodisce una delle piu grandi collezioni d'arte al mondo — oltre 1.500 opere che coprono sei secoli. Qui trovi i capolavori che hanno definito il Rinascimento: le dee fluenti di Botticelli, le enigmatiche madonne di Leonardo, le figure scultoree di Michelangelo e le ombre drammatiche di Caravaggio. Non e solo un museo — e la storia dell'arte occidentale raccontata attraverso le sue opere piu iconiche.",
  highlights: {
    h2: "I capolavori che tutti vengono a vedere",
    p: "Alcuni dipinti sono diventati simboli dell'intero Rinascimento. Sono le opere che riconosci immediatamente — e sono ancora piu straordinarie dal vivo di quanto immaginavi. Ecco dove trovarle e cosa le rende indimenticabili.",
  },
  botticelli: {
    h3: "Sandro Botticelli — Sale 10-14",
    p: "La Nascita di Venere (c. 1485) e la Primavera (c. 1482) si fronteggiano nelle sale di Botticelli, e l'esperienza e travolgente. Venere che emerge dalla conchiglia, spinta dai venti, avvolta in un panneggio rosa fluente — e una delle immagini piu riconoscibili della storia dell'arte. La Primavera, con le sue Grazie danzanti e il prato coperto di fiori, e ancora piu intricata. Entrambe furono dipinte per la villa medicea di Castello e mostrano lo stile inconfondibile di Botticelli: figure delicate, tessuti fluenti, mitologia classica reinterpretata con grazia rinascimentale.",
  },
  leonardo: {
    h3: "Leonardo da Vinci — Sala 35",
    p: "L'Annunciazione di Leonardo (c. 1472-1475) e straordinaria per una ragione: puoi vederlo mentre impara. Dipinta quando aveva appena 20 anni, mostra l'angelo Gabriele che arriva per annunciare a Maria che portera il figlio di Dio. Il paesaggio dietro di loro e puro Leonardo — nebbioso, atmosferico, incredibilmente dettagliato. Qui c'e anche la sua Adorazione dei Magi incompiuta, un vortice caotico di figure che mostra il suo genio compositivo anche in forma incompleta.",
  },
  michelangelo: {
    h3: "Michelangelo — Sala 35",
    p: "Michelangelo dipinse solo pochi dipinti su tavola — la maggior parte del suo lavoro e scultura o affreschi monumentali. Il Tondo Doni (c. 1507) e una delle rare eccezioni, ed e spettacolare. Mostra la Sacra Famiglia in pose impossibilmente contorte, con corpi scultorei e colori vivaci. Puoi gia vedere lo stile che avrebbe poi usato sulla volta della Cappella Sistina. La cornice circolare e originale — intagliata e dorata dalla bottega di Giuliano da Sangallo.",
  },
  raphael: {
    h3: "Raffaello — Sala 66",
    p: "La Madonna del Cardellino di Raffaello (c. 1506) mostra la Vergine Maria che osserva mentre il Bambino Gesu e il giovane Giovanni Battista giocano con un cardellino (simbolo della futura Passione di Cristo). E delicato, armonioso, perfettamente equilibrato — tutto cio per cui Raffaello e famoso. Qui ci sono anche i suoi celebri ritratti di Papa Leone X e Papa Giulio II, che mostrano la sua padronanza sia dei soggetti sacri che profani.",
  },
  titian: {
    h3: "Tiziano — Sala 83",
    p: "La Venere di Urbino di Tiziano (1538) e uno dei dipinti piu sensuali dell'intero museo. Una Venere nuda e sdraiata su lenzuola sgualcite, guardando direttamente lo spettatore con totale sicurezza. E intimo, provocatorio e magnificamente dipinto — le texture di tessuto, pelle e gioielli sono magistrali. Questo dipinto ha influenzato quasi tutti i nudi sdraiati dipinti dopo di esso, dall'Olympia di Manet alla Maja di Goya.",
  },
  caravaggio: {
    h3: "Caravaggio — Sala 90",
    p: "Le opere di Caravaggio esplodono di dramma. La sua Medusa (c. 1597) — dipinta su uno scudo circolare — mostra la Gorgone nel momento della decapitazione, bocca aperta in un grido silenzioso. Il suo Bacco (c. 1598) offre una coppa di vino con un sorriso consapevole, meta dio, meta imbroglione di strada. E il suo Sacrificio di Isacco cattura l'istante terrificante prima che il coltello di Abramo si abbatta — il volto del ragazzo congelato nella paura, la mano dell'angelo che ferma la lama. Sono dipinti che ti colpiscono al petto.",
  },
  beyondPaintings: {
    h2: "Oltre i nomi famosi",
    p: "Gli Uffizi non sono solo le stelle. Attraversa le Sale 2-9 e vedrai come si e evoluta la pittura: dagli sfondi dorati piatti delle pale d'altare medievali (Giotto, Cimabue) alla profondita spaziale e al naturalismo del primo Rinascimento (Masaccio, Piero della Francesca, Paolo Uccello). Le sale del Gotico Tardivo mostrano dettagli squisiti nelle opere di Gentile da Fabriano e Lorenzo Monaco. E le sale veneziane (46-55) presentano le tele inebrianti di Veronese, Tintoretto e Bellini.",
  },
  whereTofind: {
    h2: "Come trovare opere specifiche",
    p: "La collezione degli Uffizi e disposta cronologicamente in 101 sale su due piani. Le opere rinascimentali piu famose sono al secondo piano (Sale 10-45). Le gallerie del primo piano sono state aperte piu di recente e presentano periodi successivi — Caravaggio e il Barocco (Sale 90-93), Rembrandt e i maestri olandesi (Sala 49), e mostre speciali. Mappe gratuite del museo sono disponibili all'ingresso, e ogni sala e chiaramente numerata. La maggior parte dei visitatori si concentra sulle Sale 10-35 (Botticelli, Leonardo, Michelangelo, Raffaello) e sulle Sale 83-93 (Tiziano, Caravaggio).",
  },
  ctaTitle: "Salta la Fila — Prenota i Biglietti per gli Uffizi",
  faq: [
    {
      q: "Qual e l'opera d'arte piu famosa della Galleria degli Uffizi?",
      a: "La Nascita di Venere di Botticelli e l'opera piu iconica degli Uffizi. Dipinta intorno al 1485, mostra la dea Venere che emerge dal mare su una conchiglia. Si trova nelle Sale 10-14 (le sale di Botticelli) al secondo piano.",
    },
    {
      q: "Quante opere d'arte ci sono nella Galleria degli Uffizi?",
      a: "Gli Uffizi custodiscono oltre 1.500 opere in esposizione permanente, piu migliaia di altre in deposito. La collezione comprende dipinti, sculture, disegni e statue romane antiche dal XII al XVIII secolo.",
    },
    {
      q: "Posso vedere i dipinti di Leonardo da Vinci agli Uffizi?",
      a: "Si. Gli Uffizi hanno l'Annunciazione di Leonardo (c. 1472) e la sua Adorazione dei Magi incompiuta. Entrambi sono nella Sala 35 al secondo piano, insieme alle opere di Michelangelo e altri maestri del Rinascimento maturo.",
    },
    {
      q: "Dove si trova la Medusa di Caravaggio agli Uffizi?",
      a: "La Medusa di Caravaggio e nella Sala 90 al primo piano, insieme al suo Bacco e Sacrificio di Isacco. Queste sale presentano arte barocca e dipinti drammatici con chiaroscuro (luce e ombra).",
    },
    {
      q: "Ci sono sculture di Michelangelo agli Uffizi?",
      a: "Gli Uffizi hanno pochissime sculture di Michelangelo — e principalmente una collezione di pittura. Puoi vedere il suo Tondo Doni (un dipinto) nella Sala 35. Per le sculture di Michelangelo, visita la Galleria dell'Accademia (David) o il Museo del Bargello.",
    },
    {
      q: "Quanto tempo ci vuole per vedere tutte le opere d'arte?",
      a: "La maggior parte dei visitatori trascorre 2-3 ore agli Uffizi, concentrandosi sui principali highlights. Se vuoi vedere l'intera collezione in profondita, prevedi 4-5 ore. Considera una visita guidata per sfruttare al meglio il tempo.",
    },
  ],
};

const de: ArtworksContent = {
  meta: {
    title: "Kunstwerke der Uffizien | Geburt der Venus, Leonardo & mehr",
    description:
      "Entdecken Sie die Meisterwerke der Uffizien: Botticellis Geburt der Venus & Primavera, Leonardos Verkündigung, Michelangelos Doni Tondo & mehr. Raume und Highlights.",
  },
  breadcrumb: "Kunstwerke",
  h1: "Kunstwerke der Uffizien",
  intro:
    "Die Uffizien beherbergen eine der grossten Kunstsammlungen der Welt — uber 1.500 Werke, die sechs Jahrhunderte umspannen. Hier finden Sie die Meisterwerke, die die Renaissance definierten: Botticellis fliessende Gottinnen, Leonardos ratselhafte Madonnen, Michelangelos skulpturale Figuren und Caravaggios dramatische Schatten. Dies ist nicht nur ein Museum — es ist die Geschichte der westlichen Kunst, erzahlt durch ihre ikonischsten Werke.",
  highlights: {
    h2: "Die Meisterwerke, die jeder sehen mochte",
    p: "Bestimmte Gemalde sind zu Symbolen der gesamten Renaissance geworden. Dies sind die Werke, die Sie sofort erkennen — und sie sind in Person noch aussergewohnlicher, als Sie sich vorgestellt haben. Hier erfahren Sie, wo Sie sie finden und was sie unvergesslich macht.",
  },
  botticelli: {
    h3: "Sandro Botticelli — Sale 10-14",
    p: "Die Geburt der Venus (um 1485) und Primavera (um 1482) stehen sich in den Botticelli-Salen gegenuber, und das Erlebnis ist uberwältigend. Venus, die aus ihrer Muschel auftaucht, von den Winden geweht, in fliessendes Rosa gehullt — eines der bekanntesten Bilder der Kunstgeschichte. Primavera, mit seinen tanzenden Grazien und der blumenbedeckten Wiese, ist noch komplizierter. Beide wurden fur die Medici-Villa in Castello gemalt und zeigen Botticellis charakteristischen Stil: zarte Figuren, fliessende Stoffe, klassische Mythologie mit Renaissance-Anmut neu interpretiert.",
  },
  leonardo: {
    h3: "Leonardo da Vinci — Saal 35",
    p: "Leonardos Verkündigung (um 1472-1475) ist aus einem Grund aussergewohnlich: Sie können ihn beim Lernen zusehen. Als er es mit kaum 20 Jahren malte, zeigt es den Engel Gabriel, der Maria mitteilt, dass sie den Sohn Gottes gebaren wird. Die Landschaft dahinter ist reiner Leonardo — neblig, atmospharisch, unglaublich detailliert. Ebenfalls hier: seine unvollendete Anbetung der Konige, ein chaotischer Wirbel von Figuren, der sein kompositorisches Genie selbst in unvollstandiger Form zeigt.",
  },
  michelangelo: {
    h3: "Michelangelo — Saal 35",
    p: "Michelangelo malte nur eine Handvoll Tafelbilder — die meisten seiner Werke sind Skulpturen oder monumentale Fresken. Das Doni-Tondo (um 1507) ist eine der seltenen Ausnahmen und ein Knaller. Es zeigt die Heilige Familie in unmöglich verdrehten Posen, mit skulpturalen Korpern und lebendigen Farben. Sie können bereits den Stil erkennen, den er spater an der Decke der Sixtinischen Kapelle verwenden wurde. Der runde Rahmen ist original — geschnitzt und vergoldet von der Werkstatt des Giuliano da Sangallo.",
  },
  raphael: {
    h3: "Raffael — Saal 66",
    p: "Raffaels Madonna mit dem Stieglitz (um 1506) zeigt die Jungfrau Maria, die zusieht, wie das Christuskind und der junge Johannes der Taufer mit einem Stieglitz spielen (ein Symbol fur Christi zukunftige Passion). Es ist sanft, harmonisch, perfekt ausgewogen — alles, wofur Raffael bekannt ist. Ebenfalls hier: seine beruhmten Portrats von Papst Leo X. und Papst Julius II., die seine Meisterschaft sowohl in sakralen als auch weltlichen Themen zeigen.",
  },
  titian: {
    h3: "Tizian — Saal 83",
    p: "Tizians Venus von Urbino (1538) ist eines der sinnlichsten Gemalde im gesamten Museum. Eine nackte Venus ruht auf zerknitterten Bettlaken und blickt direkt auf den Betrachter mit vollstem Selbstbewusstsein. Es ist intim, provokant und wunderschon gemalt — die Texturen von Stoff, Haut und Schmuck sind meisterhaft. Dieses Gemalde beeinflusste fast jeden danach gemalten liegenden Akt, von Manets Olympia bis Goyas Maja.",
  },
  caravaggio: {
    h3: "Caravaggio — Saal 90",
    p: "Caravaggios Werke explodieren vor Drama. Seine Medusa (um 1597) — auf ein rundes Schild gemalt — zeigt die Gorgone im Moment ihrer Enthauptung, Mund offen in einem stummen Schrei. Sein Bacchus (um 1598) bietet einen Becher Wein mit einem wissenden Grinsen, teils Gott, teils Strassenganove. Und sein Opfer Isaaks fangt den schrecklichen Augenblick ein, bevor Abrahams Messer niederfahrt — das Gesicht des Jungen vor Angst erstarrt, die Hand des Engels stoppt die Klinge. Dies sind Gemalde, die einem die Luft rauben.",
  },
  beyondPaintings: {
    h2: "Jenseits der beruhmten Namen",
    p: "Die Uffizien sind nicht nur die Stars. Gehen Sie durch die Sale 2-9 und Sie sehen, wie sich die Malerei entwickelte: von den flachen goldenen Hintergrunden mittelalterlicher Altarbilder (Giotto, Cimabue) zur raumlichen Tiefe und zum Naturalismus der Fruhrenaissance (Masaccio, Piero della Francesca, Paolo Uccello). Die spatgotischen Sale zeigen exquisite Details in Werken von Gentile da Fabriano und Lorenzo Monaco. Und die venezianischen Sale (46-55) prasentieren die farbtrunkenen Leinwande von Veronese, Tintoretto und Bellini.",
  },
  whereTofind: {
    h2: "Wie man bestimmte Kunstwerke findet",
    p: "Die Sammlung der Uffizien ist chronologisch uber 101 Sale auf zwei Etagen angeordnet. Die beruhmtesten Renaissance-Werke befinden sich im zweiten Stock (Sale 10-45). Die Galerien im ersten Stock wurden erst kurzlich eroffnet und zeigen spatere Epochen — Caravaggio und den Barock (Sale 90-93), Rembrandt und die niederlandischen Meister (Saal 49) sowie Sonderausstellungen. Kostenlose Museumskarten sind am Eingang erhaltlich, und jeder Saal ist deutlich nummeriert. Die meisten Besucher konzentrieren sich auf die Sale 10-35 (Botticelli, Leonardo, Michelangelo, Raffael) und Sale 83-93 (Tizian, Caravaggio).",
  },
  ctaTitle: "Ohne Anstehen — Buchen Sie Ihre Uffizien-Tickets",
  faq: [
    {
      q: "Was ist das beruhmteste Kunstwerk in den Uffizien?",
      a: "Botticellis Geburt der Venus ist das ikonischste Werk in den Uffizien. Um 1485 gemalt, zeigt es die Gottin Venus, die aus dem Meer auf einer Muschel auftaucht. Es befindet sich in den Salen 10-14 (den Botticelli-Salen) im zweiten Stock.",
    },
    {
      q: "Wie viele Kunstwerke gibt es in den Uffizien?",
      a: "Die Uffizien beherbergen uber 1.500 Werke in der Dauerausstellung, plus Tausende weitere im Depot. Die Sammlung umfasst Gemalde, Skulpturen, Zeichnungen und antike romische Statuen vom 12. bis zum 18. Jahrhundert.",
    },
    {
      q: "Kann ich Leonardo da Vincis Gemalde in den Uffizien sehen?",
      a: "Ja. Die Uffizien haben Leonardos Verkündigung (um 1472) und seine unvollendete Anbetung der Konige. Beide befinden sich in Saal 35 im zweiten Stock, zusammen mit Werken von Michelangelo und anderen Hochrenaissance-Meistern.",
    },
    {
      q: "Wo befindet sich Caravaggios Medusa in den Uffizien?",
      a: "Caravaggios Medusa befindet sich in Saal 90 im ersten Stock, zusammen mit seinem Bacchus und Opfer Isaaks. Diese Sale zeigen barocke Kunst und dramatische Chiaroscuro-Gemalde (Hell-Dunkel-Malerei).",
    },
    {
      q: "Gibt es Michelangelo-Skulpturen in den Uffizien?",
      a: "Die Uffizien haben sehr wenige Skulpturen von Michelangelo — es ist in erster Linie eine Gemaldesammlung. Sie konnen sein Doni-Tondo (ein Gemalde) in Saal 35 sehen. Fur Michelangelo-Skulpturen besuchen Sie die Galleria dell'Accademia (David) oder das Bargello-Museum.",
    },
    {
      q: "Wie lange dauert es, alle Kunstwerke zu sehen?",
      a: "Die meisten Besucher verbringen 2-3 Stunden in den Uffizien und konzentrieren sich auf die wichtigsten Highlights. Wenn Sie die gesamte Sammlung grundlich sehen mochten, planen Sie 4-5 Stunden ein. Erwagen Sie eine gefuhrte Tour, um Ihre Zeit optimal zu nutzen.",
    },
  ],
};

const fr: ArtworksContent = {
  meta: {
    title: "Oeuvres d'Art de la Galerie des Offices | Naissance de Venus & Plus",
    description:
      "Decouvrez les chefs-d'oeuvre des Offices : la Naissance de Venus et le Printemps de Botticelli, l'Annonciation de Leonard, le Tondo Doni de Michel-Ange & plus. Salles et highlights.",
  },
  breadcrumb: "Oeuvres d'Art",
  h1: "Oeuvres d'Art de la Galerie des Offices",
  intro:
    "La Galerie des Offices detient l'une des plus grandes collections d'art au monde — plus de 1 500 oeuvres couvrant six siecles. Vous y trouverez les chefs-d'oeuvre qui ont defini la Renaissance : les deesses fluides de Botticelli, les madones enigmatiques de Leonard, les figures sculpturales de Michel-Ange et les ombres dramatiques du Caravage. Ce n'est pas juste un musee — c'est l'histoire de l'art occidental racontee a travers ses oeuvres les plus iconiques.",
  highlights: {
    h2: "Les chefs-d'oeuvre que tout le monde vient voir",
    p: "Certaines peintures sont devenues des symboles de toute la Renaissance. Ce sont les oeuvres que vous reconnaitrez instantanement — et elles sont encore plus extraordinaires en personne que vous ne l'imaginiez. Voici ou les trouver et ce qui les rend inoubliables.",
  },
  botticelli: {
    h3: "Sandro Botticelli — Salles 10-14",
    p: "La Naissance de Venus (vers 1485) et le Printemps (vers 1482) se font face dans les salles Botticelli, et l'experience est bouleversante. Venus emergant de sa coquille, soufflee par les vents, drapee de rose fluide — c'est l'une des images les plus reconnaissables de l'histoire de l'art. Le Printemps, avec ses Graces dansantes et sa prairie couverte de fleurs, est encore plus complexe. Les deux furent peints pour la villa Medicis a Castello et montrent le style caracteristique de Botticelli : figures delicates, tissus fluides, mythologie classique reimaginee avec grace Renaissance.",
  },
  leonardo: {
    h3: "Leonard de Vinci — Salle 35",
    p: "L'Annonciation de Leonard (vers 1472-1475) est extraordinaire pour une raison : vous pouvez le voir apprendre. Peinte alors qu'il avait a peine 20 ans, elle montre l'ange Gabriel arrivant pour annoncer a Marie qu'elle portera le fils de Dieu. Le paysage derriere eux est du pur Leonard — brumeux, atmospherique, incroyablement detaille. Egalement ici : son Adoration des Mages inachevee, un tourbillon chaotique de figures qui montre son genie compositionnel meme sous forme incomplete.",
  },
  michelangelo: {
    h3: "Michel-Ange — Salle 35",
    p: "Michel-Ange n'a peint qu'une poignee de tableaux sur bois — la plupart de ses oeuvres sont des sculptures ou des fresques massives. Le Tondo Doni (vers 1507) est l'une des rares exceptions, et c'est un chef-d'oeuvre. Il montre la Sainte Famille dans des poses impossiblement tordues, avec des corps sculpturaux et des couleurs vives. Vous pouvez deja voir le style qu'il utilisera plus tard sur le plafond de la Chapelle Sixtine. Le cadre circulaire est d'origine — sculpte et dore par l'atelier de Giuliano da Sangallo.",
  },
  raphael: {
    h3: "Raphael — Salle 66",
    p: "La Madone au Chardonneret de Raphael (vers 1506) montre la Vierge Marie observant l'Enfant Jesus et le jeune Jean-Baptiste jouer avec un chardonneret (symbole de la future Passion du Christ). C'est doux, harmonieux, parfaitement equilibre — tout ce pour quoi Raphael est connu. Egalement ici : ses celebres portraits du Pape Leon X et du Pape Jules II, montrant sa maitrise tant des sujets sacres que profanes.",
  },
  titian: {
    h3: "Titien — Salle 83",
    p: "La Venus d'Urbino de Titien (1538) est l'une des peintures les plus sensuelles de tout le musee. Une Venus nue repose sur des draps froisses, regardant directement le spectateur avec une totale assurance. C'est intime, provocant et magnifiquement peint — les textures de tissu, de peau et de bijoux sont magistrales. Cette peinture a influence presque tous les nus allonges peints apres elle, de l'Olympia de Manet a la Maja de Goya.",
  },
  caravaggio: {
    h3: "Le Caravage — Salle 90",
    p: "Les oeuvres du Caravage explosent de drame. Sa Meduse (vers 1597) — peinte sur un bouclier circulaire — montre la Gorgone au moment de sa decapitation, bouche ouverte dans un cri silencieux. Son Bacchus (vers 1598) offre une coupe de vin avec un sourire complice, mi-dieu, mi-escroc des rues. Et son Sacrifice d'Isaac capture l'instant terrifiant avant que le couteau d'Abraham ne s'abatte — le visage du garcon fige dans la peur, la main de l'ange arretant la lame. Ce sont des peintures qui vous frappent en pleine poitrine.",
  },
  beyondPaintings: {
    h2: "Au-dela des noms celebres",
    p: "Les Offices ne sont pas seulement les stars. Traversez les Salles 2-9 et vous verrez comment la peinture a evolue : des fonds dores plats des retables medievaux (Giotto, Cimabue) a la profondeur spatiale et au naturalisme de la premiere Renaissance (Masaccio, Piero della Francesca, Paolo Uccello). Les salles gothiques tardives montrent des details exquis dans les oeuvres de Gentile da Fabriano et Lorenzo Monaco. Et les salles venitiennes (46-55) presentent les toiles ivres de couleurs de Veronese, Tintoret et Bellini.",
  },
  whereTofind: {
    h2: "Comment trouver des oeuvres specifiques",
    p: "La collection des Offices est disposee chronologiquement dans 101 salles sur deux etages. Les oeuvres Renaissance les plus celebres se trouvent au deuxieme etage (Salles 10-45). Les galeries du premier etage ont ouvert plus recemment et presentent des periodes ulterieures — Le Caravage et le Baroque (Salles 90-93), Rembrandt et les maitres hollandais (Salle 49), et des expositions temporaires. Des plans gratuits du musee sont disponibles a l'entree, et chaque salle est clairement numerotee. La plupart des visiteurs se concentrent sur les Salles 10-35 (Botticelli, Leonard, Michel-Ange, Raphael) et les Salles 83-93 (Titien, Le Caravage).",
  },
  ctaTitle: "Coupe-File — Reservez vos Billets pour les Offices",
  faq: [
    {
      q: "Quelle est l'oeuvre d'art la plus celebre de la Galerie des Offices ?",
      a: "La Naissance de Venus de Botticelli est l'oeuvre la plus iconique des Offices. Peinte vers 1485, elle montre la deesse Venus emergent de la mer sur une coquille. Elle se trouve dans les Salles 10-14 (les salles Botticelli) au deuxieme etage.",
    },
    {
      q: "Combien d'oeuvres d'art y a-t-il dans la Galerie des Offices ?",
      a: "Les Offices detiennent plus de 1 500 oeuvres exposees en permanence, plus des milliers d'autres en reserve. La collection comprend des peintures, sculptures, dessins et statues romaines antiques couvrant du XIIe au XVIIIe siecle.",
    },
    {
      q: "Puis-je voir les peintures de Leonard de Vinci aux Offices ?",
      a: "Oui. Les Offices ont l'Annonciation de Leonard (vers 1472) et son Adoration des Mages inachevee. Les deux se trouvent dans la Salle 35 au deuxieme etage, aux cotes d'oeuvres de Michel-Ange et d'autres maitres de la Haute Renaissance.",
    },
    {
      q: "Ou se trouve la Meduse du Caravage aux Offices ?",
      a: "La Meduse du Caravage se trouve dans la Salle 90 au premier etage, avec son Bacchus et son Sacrifice d'Isaac. Ces salles presentent l'art baroque et des peintures dramatiques au clair-obscur (lumiere et ombre).",
    },
    {
      q: "Y a-t-il des sculptures de Michel-Ange aux Offices ?",
      a: "Les Offices ont tres peu de sculptures de Michel-Ange — c'est principalement une collection de peintures. Vous pouvez voir son Tondo Doni (une peinture) dans la Salle 35. Pour les sculptures de Michel-Ange, visitez la Galerie de l'Academie (David) ou le Musee du Bargello.",
    },
    {
      q: "Combien de temps faut-il pour voir toutes les oeuvres d'art ?",
      a: "La plupart des visiteurs passent 2-3 heures aux Offices, en se concentrant sur les principales attractions. Si vous voulez voir l'ensemble de la collection en profondeur, prevoyez 4-5 heures. Envisagez une visite guidee pour optimiser votre temps.",
    },
  ],
};

const es: ArtworksContent = {
  meta: {
    title: "Obras de Arte de la Galeria Uffizi | Nacimiento de Venus y Mas",
    description:
      "Descubre las obras maestras de los Uffizi: el Nacimiento de Venus y la Primavera de Botticelli, la Anunciacion de Leonardo, el Tondo Doni de Miguel Angel y mas. Salas y highlights.",
  },
  breadcrumb: "Obras de Arte",
  h1: "Obras de Arte de la Galeria Uffizi",
  intro:
    "La Galeria Uffizi alberga una de las mayores colecciones de arte del mundo — mas de 1.500 obras que abarcan seis siglos. Aqui encontraras las obras maestras que definieron el Renacimiento: las diosas fluidas de Botticelli, las madonnas enigmaticas de Leonardo, las figuras esculturales de Miguel Angel y las sombras dramaticas de Caravaggio. No es solo un museo — es la historia del arte occidental contada a traves de sus obras mas iconicas.",
  highlights: {
    h2: "Las obras maestras que todos vienen a ver",
    p: "Ciertas pinturas se han convertido en simbolos de todo el Renacimiento. Estas son las obras que reconoceras al instante — y son aun mas extraordinarias en persona de lo que imaginabas. Aqui te indicamos donde encontrarlas y que las hace inolvidables.",
  },
  botticelli: {
    h3: "Sandro Botticelli — Salas 10-14",
    p: "El Nacimiento de Venus (c. 1485) y la Primavera (c. 1482) se enfrentan en las salas de Botticelli, y la experiencia es abrumadora. Venus emergiendo de su concha, soplada por los vientos, envuelta en un drapeado rosa fluido — es una de las imagenes mas reconocibles de la historia del arte. La Primavera, con sus Gracias danzantes y su pradera cubierta de flores, es aun mas intrincada. Ambas fueron pintadas para la villa medicea en Castello y muestran el estilo caracteristico de Botticelli: figuras delicadas, telas fluidas, mitologia clasica reimaginada con gracia renacentista.",
  },
  leonardo: {
    h3: "Leonardo da Vinci — Sala 35",
    p: "La Anunciacion de Leonardo (c. 1472-1475) es extraordinaria por una razon: puedes verlo aprendiendo. Pintada cuando apenas tenia 20 anos, muestra al angel Gabriel llegando para anunciar a Maria que dara a luz al hijo de Dios. El paisaje detras de ellos es puro Leonardo — brumoso, atmosferico, increiblemente detallado. Tambien aqui: su inacabada Adoracion de los Magos, un torbellino caotico de figuras que muestra su genio compositivo incluso en forma incompleta.",
  },
  michelangelo: {
    h3: "Miguel Angel — Sala 35",
    p: "Miguel Angel solo pinto un punado de pinturas sobre tabla — la mayoria de su obra son esculturas o frescos masivos. El Tondo Doni (c. 1507) es una de las raras excepciones, y es impresionante. Muestra a la Sagrada Familia en posturas imposiblemente retorcidas, con cuerpos esculturales y colores vibrantes. Ya puedes ver el estilo que luego usaria en el techo de la Capilla Sixtina. El marco circular es original — tallado y dorado por el taller de Giuliano da Sangallo.",
  },
  raphael: {
    h3: "Rafael — Sala 66",
    p: "La Madonna del Jilguero de Rafael (c. 1506) muestra a la Virgen Maria observando mientras el Nino Jesus y el joven Juan Bautista juegan con un jilguero (simbolo de la futura Pasion de Cristo). Es delicado, armonioso, perfectamente equilibrado — todo por lo que Rafael es conocido. Tambien aqui: sus famosos retratos del Papa Leon X y el Papa Julio II, mostrando su dominio tanto de temas sagrados como profanos.",
  },
  titian: {
    h3: "Tiziano — Sala 83",
    p: "La Venus de Urbino de Tiziano (1538) es una de las pinturas mas sensuales de todo el museo. Una Venus desnuda descansa sobre sabanas arrugadas, mirando directamente al espectador con total confianza. Es intimo, provocativo y bellamente pintado — las texturas de tela, piel y joyas son magistrales. Esta pintura influyo en casi todos los desnudos reclinados pintados despues, desde la Olympia de Manet hasta la Maja de Goya.",
  },
  caravaggio: {
    h3: "Caravaggio — Sala 90",
    p: "Las obras de Caravaggio explotan de drama. Su Medusa (c. 1597) — pintada sobre un escudo circular — muestra a la Gorgona en el momento de su decapitacion, boca abierta en un grito silencioso. Su Baco (c. 1598) ofrece una copa de vino con una sonrisa complice, mitad dios, mitad pillo callejero. Y su Sacrificio de Isaac captura el instante aterrador antes de que el cuchillo de Abraham caiga — el rostro del nino congelado en el miedo, la mano del angel deteniendo la hoja. Son pinturas que te golpean en el pecho.",
  },
  beyondPaintings: {
    h2: "Mas alla de los nombres famosos",
    p: "Los Uffizi no son solo las estrellas. Recorre las Salas 2-9 y veras como evoluciono la pintura: desde los fondos dorados planos de los retablos medievales (Giotto, Cimabue) hasta la profundidad espacial y el naturalismo del primer Renacimiento (Masaccio, Piero della Francesca, Paolo Uccello). Las salas goticas tardias muestran detalles exquisitos en obras de Gentile da Fabriano y Lorenzo Monaco. Y las salas venecianas (46-55) exhiben los lienzos ebrios de color de Veronese, Tintoretto y Bellini.",
  },
  whereTofind: {
    h2: "Como encontrar obras especificas",
    p: "La coleccion de los Uffizi esta dispuesta cronologicamente en 101 salas en dos pisos. Las obras renacentistas mas famosas estan en el segundo piso (Salas 10-45). Las galerias del primer piso se abrieron mas recientemente y presentan periodos posteriores — Caravaggio y el Barroco (Salas 90-93), Rembrandt y los maestros holandeses (Sala 49), y exposiciones especiales. Hay mapas gratuitos del museo disponibles en la entrada, y cada sala esta claramente numerada. La mayoria de los visitantes se centran en las Salas 10-35 (Botticelli, Leonardo, Miguel Angel, Rafael) y las Salas 83-93 (Tiziano, Caravaggio).",
  },
  ctaTitle: "Sin Colas — Reserva tus Entradas para los Uffizi",
  faq: [
    {
      q: "Cual es la obra de arte mas famosa de la Galeria Uffizi?",
      a: "El Nacimiento de Venus de Botticelli es la obra mas iconica de los Uffizi. Pintada alrededor de 1485, muestra a la diosa Venus emergiendo del mar sobre una concha. Se encuentra en las Salas 10-14 (las salas de Botticelli) en el segundo piso.",
    },
    {
      q: "Cuantas obras de arte hay en la Galeria Uffizi?",
      a: "Los Uffizi albergan mas de 1.500 obras en exposicion permanente, mas miles mas en almacen. La coleccion incluye pinturas, esculturas, dibujos y estatuas romanas antiguas que abarcan desde el siglo XII hasta el XVIII.",
    },
    {
      q: "Puedo ver las pinturas de Leonardo da Vinci en los Uffizi?",
      a: "Si. Los Uffizi tienen la Anunciacion de Leonardo (c. 1472) y su inacabada Adoracion de los Magos. Ambas estan en la Sala 35 en el segundo piso, junto con obras de Miguel Angel y otros maestros del Alto Renacimiento.",
    },
    {
      q: "Donde esta la Medusa de Caravaggio en los Uffizi?",
      a: "La Medusa de Caravaggio esta en la Sala 90 en el primer piso, junto con su Baco y Sacrificio de Isaac. Estas salas presentan arte barroco y pinturas dramaticas de claroscuro (luz y sombra).",
    },
    {
      q: "Hay esculturas de Miguel Angel en los Uffizi?",
      a: "Los Uffizi tienen muy pocas esculturas de Miguel Angel — es principalmente una coleccion de pinturas. Puedes ver su Tondo Doni (una pintura) en la Sala 35. Para esculturas de Miguel Angel, visita la Galeria de la Academia (David) o el Museo del Bargello.",
    },
    {
      q: "Cuanto tiempo se tarda en ver todas las obras de arte?",
      a: "La mayoria de los visitantes pasan 2-3 horas en los Uffizi, centrandose en los principales highlights. Si quieres ver la coleccion completa en profundidad, planea 4-5 horas. Considera una visita guiada para aprovechar mejor tu tiempo.",
    },
  ],
};

const content: PageContent<ArtworksContent> = { en, it, de, fr, es };

export function getArtworksContent(locale: string): ArtworksContent {
  return getContent(content, locale);
}
