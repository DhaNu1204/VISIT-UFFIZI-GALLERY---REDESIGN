import { getContent, type PageContent } from "./types";

export type Door3Content = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  intro: string;
  threeDoorsH2: string;
  door1: {
    h3: string;
    location: string;
    p: string;
  };
  door2: {
    h3: string;
    location: string;
    p: string;
  };
  door3: {
    h3: string;
    location: string;
    p: string;
  };
  whichDoor: {
    h2: string;
    items: { label: string; value: string }[];
  };
  security: {
    h2: string;
    intro: string;
    items: { label: string; text: string }[];
  };
  proTips: {
    h2: string;
    items: string[];
  };
  ctaTitle: string;
  faq: { q: string; a: string }[];
};

const en: Door3Content = {
  meta: {
    title: "Uffizi Gallery Door 3 — Entry Information & What to Know",
    description:
      "Essential Door 3 Uffizi Gallery entry guide. Which door to use with pre-booked tickets, group tours & walk-up. Security, bag rules & entry tips.",
  },
  breadcrumb: "Door 3 Entry Info",
  h1: "Uffizi Gallery Door 3 — Entry Information",
  intro:
    "One of the most common questions I get from visitors is: \"Which door do I go to at the Uffizi?\" The gallery has three separate entrances, and going to the wrong one can cost you 30 minutes or more. Here's everything you need to know about getting inside efficiently.",
  threeDoorsH2: "The Three Doors Explained",
  door1: {
    h3: "Door 1 — Pre-Booked Tickets & Skip the Line",
    location: "East side of the Uffizi, closest to the Arno River.",
    p: "This is where you go if you have a pre-booked timed-entry ticket or a skip-the-line ticket purchased online. Show your voucher and photo ID, pass through security, and you're inside in 5-10 minutes. This is the entrance I recommend for most visitors.",
  },
  door2: {
    h3: "Door 2 — Walk-Up Ticket Purchases",
    location: "West side of the Uffizi, closest to the Piazza della Signoria.",
    p: "This is the general admission entrance where you can buy tickets on the day. Expect long queues — typically 1-3 hours during peak season. The ticket office closes at 5:30 PM. I only recommend this entrance during low season (November-February) on a weekday.",
  },
  door3: {
    h3: "Door 3 — Groups, Schools & Special Access",
    location: "Between Door 1 and Door 2, marked with signage.",
    p: "Door 3 is designated for organized groups (tour groups, school visits), visitors with disabilities, and certain special ticket categories. If you're joining a guided tour, your guide will direct you to the appropriate entrance — sometimes Door 1, sometimes Door 3 depending on group size and arrangements.",
  },
  whichDoor: {
    h2: "Which Door Should You Use?",
    items: [
      { label: "Pre-booked ticket (online):", value: "Door 1" },
      { label: "No ticket (walk-up):", value: "Door 2" },
      {
        label: "Organized tour group:",
        value: "Door 3 (your guide will confirm)",
      },
      { label: "Disability access:", value: "Door 3" },
      {
        label: "Free entry (under 18, students):",
        value: "Door 2 (unless pre-booked, then Door 1)",
      },
    ],
  },
  security: {
    h2: "Security & What to Expect",
    intro:
      "Regardless of which door you use, all visitors pass through airport-style security screening. Here's what to know:",
    items: [
      {
        label: "Bags:",
        text: "Large bags, backpacks, and luggage must be checked at the free cloakroom after security. Small handbags and camera bags are fine.",
      },
      {
        label: "Prohibited items:",
        text: "Selfie sticks, tripods, umbrellas (must be checked), food and drinks (water bottles OK).",
      },
      {
        label: "Metal detector:",
        text: "Similar to airport security. Remove keys and large metal items.",
      },
      {
        label: "ID requirement:",
        text: "Bring a valid photo ID or passport, especially for reduced or free entry tickets.",
      },
    ],
  },
  proTips: {
    h2: "Pro Tips for a Smooth Entry",
    items: [
      "Arrive 10-15 minutes before your time slot",
      "Have your ticket (mobile or printed) and ID ready before reaching the door",
      "Leave large bags at your hotel — the cloakroom works but adds time",
      "Use the bathroom before entering — restrooms inside can have queues",
      "Wear comfortable shoes — the gallery has marble floors and you'll walk 2-3 km",
    ],
  },
  ctaTitle: "Get Skip-the-Line Entry via Door 1",
  faq: [
    {
      q: "Which door do I use with a pre-booked Uffizi ticket?",
      a: "Go to Door 1, on the east side of the Uffizi building (closest to the Arno River). This is the priority entrance for all pre-booked and skip-the-line tickets.",
    },
    {
      q: "What is Door 3 at the Uffizi?",
      a: "Door 3 is the entrance for organized tour groups, school visits, visitors with disabilities, and certain special access categories. If you're on a guided tour, your guide will direct you to the correct entrance.",
    },
    {
      q: "Can I bring a backpack into the Uffizi?",
      a: "Small bags are fine. Large backpacks and luggage must be checked at the free cloakroom after passing through security. It's faster to leave large bags at your hotel.",
    },
    {
      q: "Do I need to print my ticket?",
      a: "No. Mobile tickets (on your phone screen) are accepted at all Uffizi entrances. Make sure your phone is charged and the ticket/voucher is easily accessible.",
    },
  ],
};

const it: Door3Content = {
  meta: {
    title: "Porta 3 degli Uffizi — Ingressi, Porte e Accesso al Museo",
    description:
      "Guida completa agli ingressi della Galleria degli Uffizi: Porta 1, 2 e 3. Quale porta usare con biglietto prenotato, gruppi, accesso disabili e sicurezza.",
  },
  breadcrumb: "Ingresso Porta 3",
  h1: "Galleria degli Uffizi Porta 3 — Guida agli Ingressi",
  intro:
    "Una delle domande più frequenti che ricevo è: \"Da quale porta si entra agli Uffizi?\" La galleria ha tre ingressi separati e sbagliare porta può farti perdere 30 minuti o più. Ecco tutto quello che devi sapere per entrare nel modo più rapido possibile.",
  threeDoorsH2: "Le Tre Porte Spiegate",
  door1: {
    h3: "Porta 1 — Biglietti Prenotati e Salta la Fila",
    location: "Lato est degli Uffizi, il più vicino al Lungarno.",
    p: "Questa è la porta per chi ha un biglietto con ingresso a orario prenotato online o un biglietto salta la fila. Mostra il voucher e un documento d'identità con foto, passa il controllo di sicurezza e sei dentro in 5-10 minuti. È l'ingresso che consiglio alla maggior parte dei visitatori.",
  },
  door2: {
    h3: "Porta 2 — Acquisto Biglietti in Giornata",
    location: "Lato ovest degli Uffizi, il più vicino a Piazza della Signoria.",
    p: "Questo è l'ingresso generale dove puoi acquistare i biglietti il giorno stesso. Preparati a code lunghe — in genere 1-3 ore in alta stagione. La biglietteria chiude alle 17:30. Consiglio questo ingresso solo in bassa stagione (novembre-febbraio), nei giorni feriali.",
  },
  door3: {
    h3: "Porta 3 — Gruppi, Scuole e Accesso Speciale",
    location: "Tra la Porta 1 e la Porta 2, indicata dalla segnaletica.",
    p: "La Porta 3 è riservata ai gruppi organizzati (tour guidati, visite scolastiche), ai visitatori con disabilità e ad alcune categorie speciali di biglietto. Se partecipi a un tour guidato, la tua guida ti indicherà l'ingresso corretto — a volte Porta 1, a volte Porta 3, in base alla dimensione del gruppo e agli accordi.",
  },
  whichDoor: {
    h2: "Quale Porta Devi Usare?",
    items: [
      { label: "Biglietto prenotato online:", value: "Porta 1" },
      { label: "Senza biglietto (in giornata):", value: "Porta 2" },
      {
        label: "Gruppo organizzato con guida:",
        value: "Porta 3 (la guida confermerà)",
      },
      { label: "Accesso disabili:", value: "Porta 3" },
      {
        label: "Ingresso gratuito (under 18, studenti):",
        value: "Porta 2 (se prenotato, allora Porta 1)",
      },
    ],
  },
  security: {
    h2: "Sicurezza e Cosa Aspettarsi",
    intro:
      "Indipendentemente dalla porta che utilizzi, tutti i visitatori passano attraverso un controllo di sicurezza simile a quello aeroportuale. Ecco cosa sapere:",
    items: [
      {
        label: "Borse:",
        text: "Zaini grandi, borsoni e bagagli devono essere lasciati al guardaroba gratuito dopo la sicurezza. Borsette e custodie per fotocamera sono ammesse.",
      },
      {
        label: "Oggetti vietati:",
        text: "Bastoni per selfie, treppiedi, ombrelli (vanno lasciati al guardaroba), cibi e bevande (bottiglie d'acqua ammesse).",
      },
      {
        label: "Metal detector:",
        text: "Simile al controllo aeroportuale. Togli chiavi e oggetti metallici voluminosi.",
      },
      {
        label: "Documento d'identità:",
        text: "Porta un documento valido con foto o il passaporto, soprattutto per biglietti ridotti o gratuiti.",
      },
    ],
  },
  proTips: {
    h2: "Consigli per Entrare Senza Problemi",
    items: [
      "Arriva 10-15 minuti prima della tua fascia oraria",
      "Tieni pronto il biglietto (digitale o stampato) e il documento prima di arrivare alla porta",
      "Lascia le borse grandi in hotel — il guardaroba funziona, ma richiede tempo",
      "Usa il bagno prima di entrare — i servizi igienici interni possono avere coda",
      "Indossa scarpe comode — il pavimento è in marmo e camminerai 2-3 km",
    ],
  },
  ctaTitle: "Biglietto Salta la Fila — Ingresso da Porta 1",
  faq: [
    {
      q: "Da quale porta si entra con il biglietto prenotato?",
      a: "Vai alla Porta 1, sul lato est dell'edificio degli Uffizi (il più vicino al Lungarno). È l'ingresso prioritario per tutti i biglietti prenotati online e i salta la fila.",
    },
    {
      q: "Cos'è la Porta 3 degli Uffizi?",
      a: "La Porta 3 è l'ingresso riservato ai gruppi organizzati, alle visite scolastiche, ai visitatori con disabilità e ad alcune categorie di accesso speciale. Se partecipi a un tour guidato, la tua guida ti indicherà la porta corretta.",
    },
    {
      q: "Posso portare uno zaino dentro gli Uffizi?",
      a: "Le borse piccole sono ammesse. Zaini grandi e bagagli vanno lasciati al guardaroba gratuito dopo il controllo di sicurezza. È più rapido lasciare le borse grandi in hotel.",
    },
    {
      q: "Devo stampare il biglietto?",
      a: "No. I biglietti digitali (sullo schermo del telefono) sono accettati a tutti gli ingressi degli Uffizi. Assicurati che il telefono sia carico e che il biglietto/voucher sia facilmente accessibile.",
    },
  ],
};

const de: Door3Content = {
  meta: {
    title: "Uffizien Tuer 3 — Eingang, Zugang & Infos",
    description:
      "Alles zu den drei Eingaengen der Uffizien: Tuer 1, 2 und 3. Welchen Eingang bei Online-Ticket, Gruppentour, barrierefreiem Zugang & Sicherheitskontrolle.",
  },
  breadcrumb: "Eingang Tuer 3",
  h1: "Uffizien Tuer 3 — Eingangs-Informationen",
  intro:
    'Eine der haeufigsten Fragen, die mir Besucher stellen: "Zu welcher Tuer muss ich an den Uffizien?" Die Galerie hat drei separate Eingaenge, und wenn Sie den falschen waehlen, verlieren Sie schnell 30 Minuten oder mehr. Hier erfahren Sie alles, was Sie fuer einen reibungslosen Einlass wissen muessen.',
  threeDoorsH2: "Die Drei Tueren Erklaert",
  door1: {
    h3: "Tuer 1 — Online-Tickets & Ohne-Anstehen-Einlass",
    location: "Ostseite der Uffizien, am naechsten zum Arno.",
    p: "Hierher kommen Sie mit einem online gebuchten Zeitfenster-Ticket oder einem Ohne-Anstehen-Ticket. Zeigen Sie Ihren Voucher und einen Lichtbildausweis, passieren Sie die Sicherheitskontrolle und Sie sind in 5-10 Minuten drinnen. Diesen Eingang empfehle ich den meisten Besuchern.",
  },
  door2: {
    h3: "Tuer 2 — Tageskasse (ohne Reservierung)",
    location: "Westseite der Uffizien, am naechsten zur Piazza della Signoria.",
    p: "Das ist der Eingang fuer Besucher ohne Reservierung, die ihr Ticket vor Ort kaufen moechten. Rechnen Sie mit langen Warteschlangen — in der Hochsaison typischerweise 1-3 Stunden. Die Kasse schliesst um 17:30 Uhr. Ich empfehle diesen Eingang nur in der Nebensaison (November-Februar) an einem Wochentag.",
  },
  door3: {
    h3: "Tuer 3 — Gruppen, Schulen & Sonderzugang",
    location: "Zwischen Tuer 1 und Tuer 2, mit Beschilderung gekennzeichnet.",
    p: "Tuer 3 ist fuer organisierte Gruppen (Reisegruppen, Schulbesuche), Besucher mit Behinderungen und bestimmte Sonderkategorien reserviert. Wenn Sie an einer Fuehrung teilnehmen, weist Ihr Guide Sie zum richtigen Eingang — manchmal Tuer 1, manchmal Tuer 3, je nach Gruppengroesse und Vereinbarung.",
  },
  whichDoor: {
    h2: "Welche Tuer Ist Die Richtige?",
    items: [
      { label: "Online gebuchtes Ticket:", value: "Tuer 1" },
      { label: "Kein Ticket (Tageskasse):", value: "Tuer 2" },
      {
        label: "Organisierte Fuehrung:",
        value: "Tuer 3 (Ihr Guide bestaetigt)",
      },
      { label: "Barrierefreier Zugang:", value: "Tuer 3" },
      {
        label: "Freier Eintritt (unter 18, Studierende):",
        value: "Tuer 2 (bei Reservierung Tuer 1)",
      },
    ],
  },
  security: {
    h2: "Sicherheitskontrolle & Was Sie Erwartet",
    intro:
      "Unabhaengig davon, welche Tuer Sie nutzen — alle Besucher durchlaufen eine Sicherheitskontrolle wie am Flughafen. Folgendes sollten Sie wissen:",
    items: [
      {
        label: "Taschen:",
        text: "Grosse Taschen, Rucksaecke und Koffer muessen an der kostenlosen Garderobe nach der Kontrolle abgegeben werden. Kleine Handtaschen und Kamerataschen sind erlaubt.",
      },
      {
        label: "Verbotene Gegenstaende:",
        text: "Selfie-Sticks, Stative, Regenschirme (muessen abgegeben werden), Essen und Getraenke (Wasserflaschen sind erlaubt).",
      },
      {
        label: "Metalldetektor:",
        text: "Aehnlich wie am Flughafen. Nehmen Sie Schluessel und groessere Metallgegenstaende heraus.",
      },
      {
        label: "Ausweispflicht:",
        text: "Bringen Sie einen gueltigen Lichtbildausweis oder Reisepass mit — besonders bei ermaessigten oder kostenlosen Tickets.",
      },
    ],
  },
  proTips: {
    h2: "Profi-Tipps fuer Einen Reibungslosen Einlass",
    items: [
      "Kommen Sie 10-15 Minuten vor Ihrem Zeitfenster",
      "Halten Sie Ihr Ticket (digital oder ausgedruckt) und Ihren Ausweis bereit, bevor Sie die Tuer erreichen",
      "Lassen Sie grosse Taschen im Hotel — die Garderobe funktioniert, kostet aber Zeit",
      "Benutzen Sie die Toilette vor dem Einlass — die Toiletten im Museum koennen Warteschlangen haben",
      "Tragen Sie bequeme Schuhe — die Galerie hat Marmorboeden und Sie laufen 2-3 km",
    ],
  },
  ctaTitle: "Ohne-Anstehen-Ticket Ueber Tuer 1 Sichern",
  faq: [
    {
      q: "Welche Tuer nutze ich mit einem online gebuchten Uffizien-Ticket?",
      a: "Gehen Sie zu Tuer 1 auf der Ostseite der Uffizien (am naechsten zum Arno). Das ist der bevorzugte Eingang fuer alle online gebuchten und Ohne-Anstehen-Tickets.",
    },
    {
      q: "Was ist Tuer 3 an den Uffizien?",
      a: "Tuer 3 ist der Eingang fuer organisierte Reisegruppen, Schulbesuche, Besucher mit Behinderungen und bestimmte Sonderkategorien. Bei einer Fuehrung zeigt Ihnen Ihr Guide den richtigen Eingang.",
    },
    {
      q: "Darf ich einen Rucksack in die Uffizien mitnehmen?",
      a: "Kleine Taschen sind erlaubt. Grosse Rucksaecke und Koffer muessen an der kostenlosen Garderobe nach der Sicherheitskontrolle abgegeben werden. Am schnellsten ist es, grosse Taschen im Hotel zu lassen.",
    },
    {
      q: "Muss ich mein Ticket ausdrucken?",
      a: "Nein. Digitale Tickets (auf dem Handybildschirm) werden an allen Uffizien-Eingaengen akzeptiert. Stellen Sie sicher, dass Ihr Handy geladen ist und das Ticket leicht zugaenglich ist.",
    },
  ],
};

const fr: Door3Content = {
  meta: {
    title: "Porte 3 des Offices — Entrees, Acces & Guide Pratique",
    description:
      "Guide complet des entrees de la Galerie des Offices : Porte 1, 2 et 3. Quelle porte utiliser avec billet reserve, groupe, acces handicape et securite.",
  },
  breadcrumb: "Entree Porte 3",
  h1: "Galerie des Offices Porte 3 — Guide des Entrees",
  intro:
    'L\'une des questions que les visiteurs me posent le plus souvent : "Par quelle porte doit-on entrer aux Offices ?" La galerie possede trois entrees distinctes, et se tromper de porte peut vous faire perdre 30 minutes ou plus. Voici tout ce que vous devez savoir pour entrer efficacement.',
  threeDoorsH2: "Les Trois Portes Expliquees",
  door1: {
    h3: "Porte 1 — Billets Reserves & Coupe-File",
    location: "Cote est des Offices, le plus proche de l'Arno.",
    p: "C'est l'entree pour les detenteurs d'un billet a creneau horaire reserve en ligne ou d'un billet coupe-file. Presentez votre voucher et une piece d'identite avec photo, passez le controle de securite, et vous etes a l'interieur en 5 a 10 minutes. C'est l'entree que je recommande a la plupart des visiteurs.",
  },
  door2: {
    h3: "Porte 2 — Achat de Billets Sur Place",
    location: "Cote ouest des Offices, le plus proche de la Piazza della Signoria.",
    p: "C'est l'entree generale ou vous pouvez acheter des billets le jour meme. Attendez-vous a de longues files — generalement 1 a 3 heures en haute saison. La billetterie ferme a 17h30. Je ne recommande cette entree qu'en basse saison (novembre-fevrier) en semaine.",
  },
  door3: {
    h3: "Porte 3 — Groupes, Ecoles & Acces Special",
    location: "Entre la Porte 1 et la Porte 2, signalee par des panneaux.",
    p: "La Porte 3 est reservee aux groupes organises (visites guidees, sorties scolaires), aux visiteurs en situation de handicap et a certaines categories speciales de billets. Si vous participez a une visite guidee, votre guide vous indiquera l'entree appropriee — parfois la Porte 1, parfois la Porte 3 selon la taille du groupe et les arrangements.",
  },
  whichDoor: {
    h2: "Quelle Porte Devez-Vous Utiliser ?",
    items: [
      { label: "Billet reserve en ligne :", value: "Porte 1" },
      { label: "Sans billet (sur place) :", value: "Porte 2" },
      {
        label: "Groupe organise :",
        value: "Porte 3 (votre guide confirmera)",
      },
      { label: "Acces handicape :", value: "Porte 3" },
      {
        label: "Entree gratuite (moins de 18 ans, etudiants) :",
        value: "Porte 2 (si reserve, alors Porte 1)",
      },
    ],
  },
  security: {
    h2: "Securite & A Quoi S'Attendre",
    intro:
      "Quelle que soit la porte utilisee, tous les visiteurs passent par un controle de securite similaire a celui des aeroports. Voici ce qu'il faut savoir :",
    items: [
      {
        label: "Sacs :",
        text: "Les grands sacs, sacs a dos et valises doivent etre deposes au vestiaire gratuit apres le controle. Les petits sacs a main et sacs photo sont autorises.",
      },
      {
        label: "Objets interdits :",
        text: "Perches a selfie, trepieds, parapluies (doivent etre deposes), nourriture et boissons (bouteilles d'eau autorisees).",
      },
      {
        label: "Portique de securite :",
        text: "Similaire a l'aeroport. Retirez cles et objets metalliques volumineux.",
      },
      {
        label: "Piece d'identite :",
        text: "Munissez-vous d'une piece d'identite avec photo ou d'un passeport, surtout pour les billets a tarif reduit ou gratuit.",
      },
    ],
  },
  proTips: {
    h2: "Conseils de Pro pour une Entree Sans Stress",
    items: [
      "Arrivez 10 a 15 minutes avant votre creneau horaire",
      "Ayez votre billet (numerique ou imprime) et votre piece d'identite prets avant d'atteindre la porte",
      "Laissez les grands sacs a l'hotel — le vestiaire fonctionne mais fait perdre du temps",
      "Passez aux toilettes avant d'entrer — les sanitaires a l'interieur peuvent avoir des files",
      "Portez des chaussures confortables — la galerie a des sols en marbre et vous marcherez 2 a 3 km",
    ],
  },
  ctaTitle: "Billet Coupe-File — Entree par la Porte 1",
  faq: [
    {
      q: "Quelle porte utiliser avec un billet reserve pour les Offices ?",
      a: "Rendez-vous a la Porte 1, cote est du batiment des Offices (le plus proche de l'Arno). C'est l'entree prioritaire pour tous les billets reserves en ligne et coupe-file.",
    },
    {
      q: "Qu'est-ce que la Porte 3 des Offices ?",
      a: "La Porte 3 est l'entree reservee aux groupes organises, aux sorties scolaires, aux visiteurs en situation de handicap et a certaines categories d'acces special. Si vous participez a une visite guidee, votre guide vous indiquera la bonne porte.",
    },
    {
      q: "Peut-on entrer aux Offices avec un sac a dos ?",
      a: "Les petits sacs sont autorises. Les grands sacs a dos et valises doivent etre deposes au vestiaire gratuit apres le controle de securite. Le plus rapide est de laisser les grands sacs a l'hotel.",
    },
    {
      q: "Faut-il imprimer son billet ?",
      a: "Non. Les billets numeriques (sur l'ecran de votre telephone) sont acceptes a toutes les entrees des Offices. Assurez-vous que votre telephone est charge et que le billet/voucher est facilement accessible.",
    },
  ],
};

const es: Door3Content = {
  meta: {
    title: "Puerta 3 de los Uffizi — Entradas, Accesos e Info",
    description:
      "Guia completa de las entradas de la Galeria Uffizi: Puerta 1, 2 y 3. Cual usar con entrada reservada, grupos, acceso para discapacitados y seguridad.",
  },
  breadcrumb: "Entrada Puerta 3",
  h1: "Galeria Uffizi Puerta 3 — Informacion de Entradas",
  intro:
    'Una de las preguntas mas frecuentes que recibo de los visitantes es: "A cual puerta debo ir en los Uffizi?" La galeria tiene tres entradas separadas, y elegir la equivocada puede costarte 30 minutos o mas. Aqui tienes todo lo que necesitas saber para entrar de forma eficiente.',
  threeDoorsH2: "Las Tres Puertas Explicadas",
  door1: {
    h3: "Puerta 1 — Entradas Reservadas y Sin Colas",
    location: "Lado este de los Uffizi, el mas cercano al rio Arno.",
    p: "Aqui es donde debes ir si tienes una entrada con hora reservada online o un billete sin colas. Muestra tu voucher y un documento de identidad con foto, pasa el control de seguridad y estaras dentro en 5-10 minutos. Es la entrada que recomiendo a la mayoria de los visitantes.",
  },
  door2: {
    h3: "Puerta 2 — Compra de Entradas en Taquilla",
    location: "Lado oeste de los Uffizi, el mas cercano a la Piazza della Signoria.",
    p: "Esta es la entrada general donde puedes comprar entradas el mismo dia. Prepara para largas colas — normalmente de 1 a 3 horas en temporada alta. La taquilla cierra a las 17:30. Solo recomiendo esta entrada en temporada baja (noviembre-febrero) entre semana.",
  },
  door3: {
    h3: "Puerta 3 — Grupos, Escuelas y Acceso Especial",
    location: "Entre la Puerta 1 y la Puerta 2, senalizada con carteles.",
    p: "La Puerta 3 esta reservada para grupos organizados (tours guiados, visitas escolares), visitantes con discapacidad y ciertas categorias especiales de entrada. Si participas en un tour guiado, tu guia te indicara la entrada correcta — a veces la Puerta 1, a veces la Puerta 3, segun el tamano del grupo y los acuerdos.",
  },
  whichDoor: {
    h2: "Cual Puerta Debes Usar?",
    items: [
      { label: "Entrada reservada online:", value: "Puerta 1" },
      { label: "Sin entrada (taquilla):", value: "Puerta 2" },
      {
        label: "Grupo organizado con guia:",
        value: "Puerta 3 (tu guia lo confirmara)",
      },
      { label: "Acceso para discapacitados:", value: "Puerta 3" },
      {
        label: "Entrada gratuita (menores de 18, estudiantes):",
        value: "Puerta 2 (si reservaste, Puerta 1)",
      },
    ],
  },
  security: {
    h2: "Seguridad y Que Esperar",
    intro:
      "Independientemente de la puerta que uses, todos los visitantes pasan por un control de seguridad tipo aeropuerto. Esto es lo que debes saber:",
    items: [
      {
        label: "Bolsos:",
        text: "Bolsos grandes, mochilas y maletas deben dejarse en el guardarropa gratuito despues del control. Bolsos pequenos y fundas de camara estan permitidos.",
      },
      {
        label: "Objetos prohibidos:",
        text: "Palos selfie, tripodes, paraguas (deben dejarse en el guardarropa), comida y bebidas (botellas de agua permitidas).",
      },
      {
        label: "Detector de metales:",
        text: "Similar al del aeropuerto. Retira llaves y objetos metalicos grandes.",
      },
      {
        label: "Documento de identidad:",
        text: "Lleva un documento de identidad con foto o pasaporte valido, especialmente para entradas con descuento o gratuitas.",
      },
    ],
  },
  proTips: {
    h2: "Consejos Pro para una Entrada Sin Problemas",
    items: [
      "Llega 10-15 minutos antes de tu franja horaria",
      "Ten tu entrada (digital o impresa) y documento de identidad listos antes de llegar a la puerta",
      "Deja los bolsos grandes en el hotel — el guardarropa funciona pero lleva tiempo",
      "Usa el bano antes de entrar — los aseos del interior pueden tener colas",
      "Lleva zapatos comodos — la galeria tiene suelos de marmol y caminaras 2-3 km",
    ],
  },
  ctaTitle: "Entrada Sin Colas por la Puerta 1",
  faq: [
    {
      q: "Cual puerta uso con una entrada reservada para los Uffizi?",
      a: "Ve a la Puerta 1, en el lado este del edificio de los Uffizi (el mas cercano al rio Arno). Es la entrada prioritaria para todas las entradas reservadas online y sin colas.",
    },
    {
      q: "Que es la Puerta 3 de los Uffizi?",
      a: "La Puerta 3 es la entrada para grupos organizados, visitas escolares, visitantes con discapacidad y ciertas categorias de acceso especial. Si estas en un tour guiado, tu guia te indicara la puerta correcta.",
    },
    {
      q: "Puedo llevar una mochila a los Uffizi?",
      a: "Los bolsos pequenos estan permitidos. Las mochilas grandes y maletas deben dejarse en el guardarropa gratuito despues del control de seguridad. Lo mas rapido es dejar los bolsos grandes en el hotel.",
    },
    {
      q: "Tengo que imprimir mi entrada?",
      a: "No. Las entradas digitales (en la pantalla del movil) se aceptan en todas las entradas de los Uffizi. Asegurate de que tu movil este cargado y la entrada/voucher sea facilmente accesible.",
    },
  ],
};

const content: PageContent<Door3Content> = { en, it, de, fr, es };

export function getDoor3Content(locale: string): Door3Content {
  return getContent(content, locale);
}
