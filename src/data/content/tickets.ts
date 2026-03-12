import { getContent, type PageContent } from "./types";

export type TicketsContent = {
  meta: { title: string; description: string };
  h1: string;
  intro: string;
  ctaTitle: string;
  priceSection: {
    h2: string;
    p: string;
    tableTitle: string;
  };
  howToBuy: {
    h2: string;
    p: string;
    options: { h3: string; p: string }[];
  };
  freeEntry: { h2: string; p: string };
  skipLine: { h2: string; p: string; link: string };
  whenToBook: { h2: string; paragraphs: string[] };
  compared: { h2: string; p: string };
  bottomCta: string;
  faq: { q: string; a: string }[];
};

const en: TicketsContent = {
  meta: {
    title: "Uffizi Gallery Tickets 2026 | Prices, Skip the Line & Book Online",
    description:
      "Book Uffizi Gallery tickets from €26. Skip the line entry, guided tour tickets & free entry days. Full 2026 price guide with discounts.",
  },
  h1: "Uffizi Gallery Tickets",
  intro:
    "If there's one piece of advice I give every visitor to Florence, it's this: do not show up at the Uffizi without a ticket. I've watched people stand in line for three hours under the July sun, only to find out the afternoon slots were sold out. A pre-booked ticket costs the same — or less — than buying at the door, and you skip the line entirely.",
  ctaTitle: "Uffizi Gallery Reserved Ticket & Digital Audio Guide",
  priceSection: {
    h2: "Ticket Types & Prices 2026",
    p: "The Uffizi has updated its pricing for 2026. Tickets purchased online cost €29, while same-day tickets at the ticket office cost €25. Special early morning and afternoon rates are available. Here's the complete breakdown:",
    tableTitle: "Uffizi Gallery Ticket Prices 2026",
  },
  howToBuy: {
    h2: "How to Buy Uffizi Tickets",
    p: "You have three options for purchasing tickets. Each has its pros and cons, but online pre-booking is by far the smartest choice:",
    options: [
      {
        h3: "1. Online Pre-Booking (Recommended)",
        p: "Book through an authorized reseller to get a timed-entry ticket with skip-the-line access. You'll receive a mobile voucher — no printing needed. Walk directly to Door 1, scan your ticket, and you're in. Available up to several months in advance, and I strongly recommend booking at least 2 weeks ahead during spring and summer.",
      },
      {
        h3: "2. Official Website (b-ticket.com/uffizi)",
        p: "The museum's official booking platform charges the base ticket price plus a €4 booking fee. You'll select a timed entry slot. The interface can be slow during peak booking periods, and popular time slots sell out quickly.",
      },
      {
        h3: "3. Walk-Up Tickets (Not Recommended)",
        p: "You can buy tickets at Door 2 on the day of your visit, but expect long waits — typically 1-3 hours from March through October. During peak days (weekends, holidays, rainy days when outdoor plans change), the gallery can sell out entirely. Walk-up prices are the same as the base ticket price.",
      },
    ],
  },
  freeEntry: {
    h2: "Free Entry Days",
    p: "The Uffizi offers free admission on the first Sunday of every month. Sounds great, right? In practice, these days are incredibly crowded — lines can exceed 4 hours, and the galleries feel packed. If you visit on a free Sunday, arrive by 7:30 AM. Otherwise, I'd recommend paying for a regular ticket on a quieter day for a far better experience.",
  },
  skipLine: {
    h2: "Skip the Line: How It Works",
    p: "When you book a skip-the-line ticket, you'll receive a confirmation with a specific entry time (e.g., 10:00-10:15 AM). On the day of your visit, go to Door 1 (or Door 3 for groups). Show your mobile voucher and ID, pass through security screening, and you're inside. The entire process takes 5-10 minutes.",
    link: "Complete skip-the-line guide →",
  },
  whenToBook: {
    h2: "When to Book",
    paragraphs: [
      "The best time to visit the Uffizi is early morning (8:15 AM entry) or late afternoon (after 4:00 PM). Tuesdays and Wednesdays are typically the quietest days. Avoid weekends and the weeks around Easter — these are the busiest times of the year.",
      "For high season (March–October), book at least 2 weeks in advance. For April, May, and June weekends, book a month ahead. Low season tickets (November–February) can usually be booked a few days in advance without issues.",
    ],
  },
  compared: {
    h2: "Ticket Options Compared",
    p: "Not sure which ticket is right for you? Here's my honest recommendation:",
  },
  bottomCta: "Book Your Uffizi Gallery Tickets Now",
  faq: [
    {
      q: "How much are Uffizi tickets in 2026?",
      a: "Standard tickets cost €29 online or €25 at the ticket office. Skip-the-line tickets are available from €26 online. EU citizens aged 18-25 pay €2. Under 18 from any country is free.",
    },
    {
      q: "Can I buy Uffizi tickets at the door?",
      a: "Yes, but expect 1-3 hour waits during peak season. Walk-up tickets are sold at Door 2. The gallery can sell out on busy days, so pre-booking is strongly recommended.",
    },
    {
      q: "What does 'skip the line' mean at the Uffizi?",
      a: "Skip-the-line tickets include timed entry — you go directly to Door 1 at your reserved time and bypass the general admission queue. Entry typically takes 5-10 minutes through security.",
    },
    {
      q: "Can I get a refund on Uffizi tickets?",
      a: "Most pre-booked tickets offer free cancellation up to 24 hours before your visit. Check the cancellation policy when booking. Official museum tickets from b-ticket.com are generally non-refundable.",
    },
    {
      q: "Is the Uffizi ever free?",
      a: "Yes, on the first Sunday of every month. However, these days are extremely crowded with waits of 3-4 hours. Most visitors have a better experience paying for a regular ticket on a quieter day.",
    },
    {
      q: "Do children need tickets for the Uffizi?",
      a: "Children under 18 enter free regardless of nationality. They still need to pass through security and should carry ID or a document showing their age.",
    },
  ],
};

const it: TicketsContent = {
  meta: {
    title: "Biglietti Galleria degli Uffizi 2026 | Prezzi, Salta la Fila e Prenota",
    description:
      "Acquista biglietti per gli Uffizi da €26. Ingresso salta la fila, visite guidate e giornate gratuite. Guida completa prezzi 2026 con sconti e riduzioni.",
  },
  h1: "Biglietti Galleria degli Uffizi",
  intro:
    "Se c'è un consiglio che do a ogni visitatore di Firenze, è questo: non presentarti agli Uffizi senza biglietto. Ho visto persone fare tre ore di coda sotto il sole di luglio, per poi scoprire che le fasce pomeridiane erano esaurite. Un biglietto prenotato online costa uguale — o meno — rispetto a quello in biglietteria, e salti completamente la fila.",
  ctaTitle: "Biglietto Riservato Galleria degli Uffizi e Audioguida Digitale",
  priceSection: {
    h2: "Tipologie di Biglietti e Prezzi 2026",
    p: "Gli Uffizi applicano tariffe stagionali. L'alta stagione va dal 1° marzo al 31 ottobre, nei mesi di maggior affluenza turistica. La bassa stagione (1° novembre – 28 febbraio) offre risparmi significativi. Ecco il riepilogo completo:",
    tableTitle: "Prezzi Biglietti Uffizi 2026",
  },
  howToBuy: {
    h2: "Come Acquistare i Biglietti per gli Uffizi",
    p: "Hai tre opzioni per acquistare i biglietti. Ognuna ha pro e contro, ma la prenotazione online è di gran lunga la scelta più intelligente:",
    options: [
      {
        h3: "1. Prenotazione Online (Consigliata)",
        p: "Prenota tramite un rivenditore autorizzato per ottenere un biglietto con ingresso a orario e accesso salta la fila. Riceverai un voucher digitale sul telefono — non serve stampare nulla. Vai direttamente alla Porta 1, fai scansionare il biglietto e sei dentro. Disponibile con mesi di anticipo: consiglio di prenotare almeno 2 settimane prima in primavera e in estate.",
      },
      {
        h3: "2. Sito Ufficiale (b-ticket.com/uffizi)",
        p: "La piattaforma ufficiale del museo applica il prezzo base del biglietto più €4 di diritto di prenotazione. Selezionerai una fascia oraria. L'interfaccia può essere lenta nei periodi di picco e le fasce più richieste si esauriscono rapidamente.",
      },
      {
        h3: "3. Biglietto in Cassa (Sconsigliato)",
        p: "Puoi acquistare i biglietti alla Porta 2 il giorno stesso, ma preparati ad aspettare — da 1 a 3 ore da marzo a ottobre. Nei giorni di punta (weekend, festivi, giornate di pioggia quando i piani all'aperto saltano), il museo può esaurire i posti. Il prezzo in cassa è uguale al prezzo base.",
      },
    ],
  },
  freeEntry: {
    h2: "Giornate ad Ingresso Gratuito",
    p: "Gli Uffizi offrono l'ingresso gratuito la prima domenica di ogni mese. Sembra fantastico, vero? In pratica, queste giornate sono incredibilmente affollate — la coda può superare le 4 ore e le sale sono pienissime. Se visiti in una domenica gratuita, arriva entro le 7:30. Altrimenti, ti consiglio di pagare il biglietto in un giorno più tranquillo per un'esperienza decisamente migliore.",
  },
  skipLine: {
    h2: "Salta la Fila: Come Funziona",
    p: "Quando prenoti un biglietto salta la fila, ricevi una conferma con un orario di ingresso specifico (es. 10:00-10:15). Il giorno della visita, vai alla Porta 1 (o alla Porta 3 per i gruppi). Mostra il voucher digitale e un documento d'identità, passa il controllo di sicurezza e sei dentro. L'intero processo richiede 5-10 minuti.",
    link: "Guida completa al salta la fila →",
  },
  whenToBook: {
    h2: "Quando Prenotare",
    paragraphs: [
      "Il momento migliore per visitare gli Uffizi è la mattina presto (ingresso alle 8:15) o il tardo pomeriggio (dopo le 16:00). Martedì e mercoledì sono in genere i giorni più tranquilli. Evita i weekend e le settimane intorno a Pasqua — sono i periodi più affollati dell'anno.",
      "In alta stagione (marzo–ottobre), prenota almeno 2 settimane prima. Per i weekend di aprile, maggio e giugno, prenota con un mese di anticipo. I biglietti in bassa stagione (novembre–febbraio) si possono in genere prenotare pochi giorni prima senza problemi.",
    ],
  },
  compared: {
    h2: "Confronto Opzioni Biglietti",
    p: "Non sai quale biglietto fa per te? Ecco il mio consiglio sincero:",
  },
  bottomCta: "Prenota Ora i Tuoi Biglietti per gli Uffizi",
  faq: [
    {
      q: "Quanto costano i biglietti per gli Uffizi nel 2026?",
      a: "Il biglietto standard costa €25 (marzo–ottobre) o €12 (novembre–febbraio). I cittadini UE tra 18 e 25 anni pagano €2. I minori di 18 anni di qualsiasi nazionalità entrano gratis. I biglietti salta la fila online partono da €26.",
    },
    {
      q: "Posso comprare i biglietti per gli Uffizi in cassa?",
      a: "Sì, ma preparati ad attendere 1-3 ore in alta stagione. I biglietti in cassa si vendono alla Porta 2. Nei giorni più affollati il museo può esaurire i posti, quindi la prenotazione anticipata è fortemente consigliata.",
    },
    {
      q: "Cosa significa 'salta la fila' agli Uffizi?",
      a: "I biglietti salta la fila includono l'ingresso a orario — vai direttamente alla Porta 1 all'orario prenotato e bypassi la coda dell'ingresso generale. L'ingresso richiede in genere 5-10 minuti per il controllo sicurezza.",
    },
    {
      q: "Posso ottenere un rimborso sui biglietti degli Uffizi?",
      a: "La maggior parte dei biglietti prenotati offre la cancellazione gratuita fino a 24 ore prima della visita. Verifica le condizioni di cancellazione al momento della prenotazione. I biglietti ufficiali del museo da b-ticket.com sono generalmente non rimborsabili.",
    },
    {
      q: "Gli Uffizi sono mai gratuiti?",
      a: "Sì, la prima domenica di ogni mese. Tuttavia, queste giornate sono estremamente affollate con attese di 3-4 ore. La maggior parte dei visitatori vive un'esperienza migliore pagando il biglietto in un giorno più tranquillo.",
    },
    {
      q: "I bambini hanno bisogno del biglietto per gli Uffizi?",
      a: "I minori di 18 anni entrano gratis indipendentemente dalla nazionalità. Devono comunque passare i controlli di sicurezza e portare un documento che attesti l'età.",
    },
  ],
};

const de: TicketsContent = {
  meta: {
    title: "Uffizi Galerie Tickets 2026 | Preise, Ohne Anstehen & Online buchen",
    description:
      "Uffizi Galerie Tickets ab €26 buchen. Eintritt ohne Anstehen, Führungen & kostenlose Eintrittstage. Vollständiger Preisüberblick 2026 mit Ermäßigungen.",
  },
  h1: "Uffizi Galerie Tickets",
  intro:
    "Wenn es einen Rat gibt, den ich jedem Florenz-Besucher gebe, dann diesen: Gehen Sie nicht ohne Ticket zu den Uffizien. Ich habe erlebt, wie Besucher drei Stunden in der Juli-Sonne angestanden haben — nur um dann zu erfahren, dass die Nachmittagsfenster ausverkauft waren. Ein vorab gebuchtes Ticket kostet genauso viel — oder sogar weniger — als an der Tageskasse, und Sie überspringen die Warteschlange komplett.",
  ctaTitle: "Uffizi Galerie Reserviertes Ticket & Digitaler Audioguide",
  priceSection: {
    h2: "Ticketarten & Preise 2026",
    p: "Die Uffizien arbeiten mit saisonalen Preisen. Die Hauptsaison läuft vom 1. März bis zum 31. Oktober — parallel zu den besucherstärksten Monaten. In der Nebensaison (1. November bis 28. Februar) sparen Sie erheblich. Hier die vollständige Übersicht:",
    tableTitle: "Uffizi Galerie Ticketpreise 2026",
  },
  howToBuy: {
    h2: "So kaufen Sie Uffizi-Tickets",
    p: "Sie haben drei Möglichkeiten, Tickets zu erwerben. Jede hat Vor- und Nachteile, aber die Online-Vorausbuchung ist mit Abstand die beste Wahl:",
    options: [
      {
        h3: "1. Online-Vorausbuchung (Empfohlen)",
        p: "Buchen Sie über einen autorisierten Anbieter ein Zeitfenster-Ticket mit Eintritt ohne Anstehen. Sie erhalten einen mobilen Voucher — Ausdrucken ist nicht nötig. Gehen Sie direkt zu Tür 1, lassen Sie Ihr Ticket scannen und schon sind Sie drin. Buchbar bis zu mehrere Monate im Voraus — in der Frühlings- und Sommersaison empfehle ich, mindestens 2 Wochen vorher zu buchen.",
      },
      {
        h3: "2. Offizielle Website (b-ticket.com/uffizi)",
        p: "Die offizielle Buchungsplattform des Museums berechnet den regulären Ticketpreis plus €4 Buchungsgebühr. Sie wählen ein Eintrittszeitfenster. Die Oberfläche kann in Stoßzeiten langsam sein, und beliebte Zeitfenster sind schnell ausverkauft.",
      },
      {
        h3: "3. Tickets an der Tageskasse (Nicht empfohlen)",
        p: "Sie können an Tür 2 am Besuchstag Tickets kaufen, müssen aber mit langen Wartezeiten rechnen — in der Regel 1 bis 3 Stunden von März bis Oktober. An besonders stark frequentierten Tagen (Wochenenden, Feiertage, Regentage, wenn Outdoor-Pläne ins Wasser fallen) kann das Museum komplett ausverkauft sein. Die Preise an der Tageskasse entsprechen dem regulären Ticketpreis.",
      },
    ],
  },
  freeEntry: {
    h2: "Tage mit freiem Eintritt",
    p: "Die Uffizien bieten am ersten Sonntag jedes Monats freien Eintritt. Klingt verlockend, oder? In der Praxis sind diese Tage unglaublich überfüllt — die Warteschlange kann über 4 Stunden betragen und die Säle sind rappelvoll. Wenn Sie an einem kostenlosen Sonntag kommen, seien Sie spätestens um 7:30 Uhr vor Ort. Ansonsten rate ich Ihnen, ein reguläres Ticket an einem ruhigeren Tag zu kaufen — das Erlebnis ist unvergleichlich besser.",
  },
  skipLine: {
    h2: "Ohne Anstehen: So funktioniert es",
    p: "Wenn Sie ein Ticket ohne Anstehen buchen, erhalten Sie eine Bestätigung mit einem bestimmten Eintrittszeitfenster (z. B. 10:00–10:15 Uhr). Am Besuchstag gehen Sie zu Tür 1 (oder Tür 3 für Gruppen). Zeigen Sie Ihren mobilen Voucher und Ihren Ausweis vor, durchlaufen Sie die Sicherheitskontrolle — und schon sind Sie drin. Der gesamte Vorgang dauert 5–10 Minuten.",
    link: "Vollständiger Ratgeber zum Eintritt ohne Anstehen →",
  },
  whenToBook: {
    h2: "Wann buchen?",
    paragraphs: [
      "Die beste Besuchszeit für die Uffizien ist früh morgens (Eintritt um 8:15 Uhr) oder am späten Nachmittag (nach 16:00 Uhr). Dienstag und Mittwoch sind in der Regel die ruhigsten Tage. Meiden Sie Wochenenden und die Wochen rund um Ostern — das sind die meistbesuchten Zeiten des Jahres.",
      "Für die Hauptsaison (März–Oktober) buchen Sie mindestens 2 Wochen im Voraus. Für Wochenenden im April, Mai und Juni sollten Sie einen Monat vorher buchen. Tickets in der Nebensaison (November–Februar) sind in der Regel auch wenige Tage vorher noch problemlos erhältlich.",
    ],
  },
  compared: {
    h2: "Ticketoptionen im Vergleich",
    p: "Nicht sicher, welches Ticket das richtige für Sie ist? Hier meine ehrliche Empfehlung:",
  },
  bottomCta: "Jetzt Uffizi Galerie Tickets buchen",
  faq: [
    {
      q: "Was kosten Uffizi-Tickets 2026?",
      a: "Standardtickets kosten €25 (März–Oktober) oder €12 (November–Februar). EU-Bürger zwischen 18 und 25 Jahren zahlen €2. Unter 18 Jahren ist der Eintritt unabhängig von der Nationalität kostenlos. Online-Tickets ohne Anstehen gibt es ab €26.",
    },
    {
      q: "Kann ich Uffizi-Tickets an der Tageskasse kaufen?",
      a: "Ja, aber rechnen Sie mit 1–3 Stunden Wartezeit in der Hauptsaison. Tageskassen-Tickets werden an Tür 2 verkauft. An stark besuchten Tagen kann das Museum ausverkauft sein — eine Vorausbuchung wird daher dringend empfohlen.",
    },
    {
      q: "Was bedeutet 'ohne Anstehen' an den Uffizien?",
      a: "Tickets ohne Anstehen beinhalten einen Zeitfenster-Eintritt — Sie gehen zu Ihrem reservierten Zeitpunkt direkt zu Tür 1 und umgehen die Warteschlange für den regulären Einlass. Der Eintritt durch die Sicherheitskontrolle dauert in der Regel 5–10 Minuten.",
    },
    {
      q: "Kann ich Uffizi-Tickets stornieren?",
      a: "Die meisten vorab gebuchten Tickets bieten eine kostenlose Stornierung bis 24 Stunden vor dem Besuch. Prüfen Sie die Stornierungsbedingungen bei der Buchung. Offizielle Museumstickets über b-ticket.com sind in der Regel nicht erstattungsfähig.",
    },
    {
      q: "Gibt es freien Eintritt in die Uffizien?",
      a: "Ja, am ersten Sonntag jedes Monats. Allerdings sind diese Tage extrem überlaufen mit Wartezeiten von 3–4 Stunden. Die meisten Besucher haben ein deutlich besseres Erlebnis, wenn Sie ein reguläres Ticket an einem ruhigeren Tag kaufen.",
    },
    {
      q: "Brauchen Kinder ein Ticket für die Uffizi Galerie?",
      a: "Kinder und Jugendliche unter 18 Jahren haben freien Eintritt, unabhängig von der Nationalität. Sie müssen trotzdem die Sicherheitskontrolle durchlaufen und sollten einen Ausweis oder ein Dokument mit Altersnachweis dabei haben.",
    },
  ],
};

const fr: TicketsContent = {
  meta: {
    title: "Billets Galerie des Offices 2026 | Tarifs, Coupe-File et Reservation",
    description:
      "Reservez vos billets Offices des 20EUR. Entree coupe-file, visites guidees et journees gratuites. Guide complet des tarifs 2026 avec reductions.",
  },
  h1: "Billets Galerie des Offices",
  intro:
    "S'il y a un conseil que je donne a chaque visiteur de Florence, c'est celui-ci : ne vous presentez pas aux Offices sans billet. J'ai vu des gens faire la queue pendant trois heures sous le soleil de juillet, pour finalement apprendre que les creneaux de l'apres-midi etaient complets. Un billet reserve en ligne coute le meme prix, voire moins, qu'a la billetterie sur place, et vous evitez completement la file d'attente.",
  ctaTitle: "Billet Réservé Galerie des Offices et Audioguide Numérique",
  priceSection: {
    h2: "Types de Billets et Tarifs 2026",
    p: "Les Offices pratiquent une tarification saisonniere. La haute saison s'etend du 1er mars au 31 octobre, pendant les mois de forte affluence touristique. La basse saison (du 1er novembre au 28 fevrier) permet de realiser des economies significatives. Voici le detail complet :",
    tableTitle: "Tarifs des Billets Offices 2026",
  },
  howToBuy: {
    h2: "Comment Acheter des Billets pour les Offices",
    p: "Vous avez trois possibilites pour acheter vos billets. Chacune a ses avantages et ses inconvenients, mais la reservation en ligne est de loin le choix le plus judicieux :",
    options: [
      {
        h3: "1. Reservation en Ligne (Recommande)",
        p: "Reservez aupres d'un revendeur agree pour obtenir un billet a creneau horaire avec acces coupe-file. Vous recevrez un bon numerique sur votre telephone, aucune impression necessaire. Rendez-vous directement a la Porte 1, faites scanner votre billet et vous etes a l'interieur. Disponible plusieurs mois a l'avance : je recommande vivement de reserver au moins 2 semaines avant en periode de printemps et d'ete.",
      },
      {
        h3: "2. Site Officiel (b-ticket.com/uffizi)",
        p: "La plateforme officielle du musee facture le prix de base du billet plus 4EUR de frais de reservation. Vous selectionnerez un creneau d'entree. L'interface peut etre lente en periode d'affluence, et les creneaux les plus demandes se vendent rapidement.",
      },
      {
        h3: "3. Achat sur Place (Deconseille)",
        p: "Vous pouvez acheter des billets a la Porte 2 le jour de votre visite, mais attendez-vous a de longues files d'attente : generalement 1 a 3 heures de mars a octobre. Les jours de forte affluence (week-ends, jours feries, jours de pluie quand les activites en plein air tombent a l'eau), le musee peut afficher complet. Le prix sur place est identique au tarif de base.",
      },
    ],
  },
  freeEntry: {
    h2: "Journees a Entree Gratuite",
    p: "Les Offices offrent l'entree gratuite le premier dimanche de chaque mois. Tentant, n'est-ce pas ? En pratique, ces journees sont incroyablement bondees : la file d'attente peut depasser 4 heures et les salles sont pleines a craquer. Si vous venez un dimanche gratuit, arrivez avant 7h30. Sinon, je vous conseille de payer un billet un jour plus calme pour une experience bien meilleure.",
  },
  skipLine: {
    h2: "Coupe-File : Comment Ca Marche",
    p: "Lorsque vous reservez un billet coupe-file, vous recevez une confirmation avec un creneau horaire precis (par exemple 10h00-10h15). Le jour de votre visite, rendez-vous a la Porte 1 (ou Porte 3 pour les groupes). Presentez votre bon numerique et une piece d'identite, passez le controle de securite, et vous etes a l'interieur. L'ensemble du processus prend 5 a 10 minutes.",
    link: "Guide complet du coupe-file \u2192",
  },
  whenToBook: {
    h2: "Quand Reserver",
    paragraphs: [
      "Le meilleur moment pour visiter les Offices est tot le matin (entree a 8h15) ou en fin d'apres-midi (apres 16h). Les mardis et mercredis sont generalement les jours les plus calmes. Evitez les week-ends et les semaines autour de Paques, ce sont les periodes les plus frequentees de l'annee.",
      "En haute saison (mars-octobre), reservez au moins 2 semaines a l'avance. Pour les week-ends d'avril, mai et juin, reservez un mois avant. Les billets en basse saison (novembre-fevrier) peuvent generalement etre reserves quelques jours avant sans difficulte.",
    ],
  },
  compared: {
    h2: "Comparaison des Options de Billets",
    p: "Vous ne savez pas quel billet choisir ? Voici ma recommandation sincere :",
  },
  bottomCta: "Reservez Vos Billets pour les Offices Maintenant",
  faq: [
    {
      q: "Combien coutent les billets des Offices en 2026 ?",
      a: "Le billet standard coute 25EUR (mars-octobre) ou 12EUR (novembre-fevrier). Les citoyens de l'UE ages de 18 a 25 ans paient 2EUR. L'entree est gratuite pour les moins de 18 ans de toute nationalite. Les billets coupe-file en ligne sont disponibles des 20EUR.",
    },
    {
      q: "Peut-on acheter des billets sur place aux Offices ?",
      a: "Oui, mais attendez-vous a 1 a 3 heures d'attente en haute saison. Les billets sur place sont vendus a la Porte 2. Les jours d'affluence, le musee peut afficher complet : la reservation en avance est donc fortement recommandee.",
    },
    {
      q: "Que signifie 'coupe-file' aux Offices ?",
      a: "Les billets coupe-file incluent une entree a creneau horaire : vous vous rendez directement a la Porte 1 a l'heure reservee et evitez la file d'attente generale. L'entree prend generalement 5 a 10 minutes apres le controle de securite.",
    },
    {
      q: "Peut-on obtenir un remboursement des billets des Offices ?",
      a: "La plupart des billets reserves offrent une annulation gratuite jusqu'a 24 heures avant la visite. Verifiez les conditions d'annulation lors de la reservation. Les billets officiels du musee achetes sur b-ticket.com sont generalement non remboursables.",
    },
    {
      q: "Les Offices sont-ils parfois gratuits ?",
      a: "Oui, le premier dimanche de chaque mois. Cependant, ces journees sont extremement bondees avec des files d'attente de 3 a 4 heures. La plupart des visiteurs vivent une meilleure experience en payant un billet un jour plus calme.",
    },
    {
      q: "Les enfants ont-ils besoin d'un billet pour les Offices ?",
      a: "Les moins de 18 ans entrent gratuitement quelle que soit leur nationalite. Ils doivent neanmoins passer le controle de securite et presenter une piece d'identite ou un document attestant de leur age.",
    },
  ],
};

const es: TicketsContent = {
  meta: {
    title: "Entradas Galeria Uffizi 2026 | Precios, Sin Colas y Reserva Online",
    description:
      "Reserva entradas Uffizi desde 20EUR. Entrada sin colas, visitas guiadas y dias gratuitos. Guia completa de precios 2026 con descuentos.",
  },
  h1: "Entradas Galeria Uffizi",
  intro:
    "Si hay un consejo que doy a cada visitante de Florencia, es este: no te presentes en los Uffizi sin entrada. He visto a personas hacer cola durante tres horas bajo el sol de julio, solo para descubrir que las franjas de la tarde estaban agotadas. Una entrada reservada online cuesta lo mismo, o incluso menos, que en la taquilla, y te saltas la cola por completo.",
  ctaTitle: "Entrada Reservada Galería Uffizi y Audioguía Digital",
  priceSection: {
    h2: "Tipos de Entradas y Precios 2026",
    p: "Los Uffizi aplican precios estacionales. La temporada alta va del 1 de marzo al 31 de octubre, coincidiendo con los meses de mayor afluencia turistica. La temporada baja (del 1 de noviembre al 28 de febrero) ofrece un ahorro significativo. Aqui tienes el desglose completo:",
    tableTitle: "Precios de Entradas Uffizi 2026",
  },
  howToBuy: {
    h2: "Como Comprar Entradas para los Uffizi",
    p: "Tienes tres opciones para comprar tus entradas. Cada una tiene sus ventajas e inconvenientes, pero la reserva online es con diferencia la opcion mas inteligente:",
    options: [
      {
        h3: "1. Reserva Online (Recomendado)",
        p: "Reserva a traves de un revendedor autorizado para obtener una entrada con horario asignado y acceso sin colas. Recibiras un bono digital en tu movil, sin necesidad de imprimir nada. Dirigete directamente a la Puerta 1, escanea tu entrada y ya estas dentro. Disponible con meses de antelacion: recomiendo encarecidamente reservar al menos 2 semanas antes en primavera y verano.",
      },
      {
        h3: "2. Web Oficial (b-ticket.com/uffizi)",
        p: "La plataforma oficial del museo cobra el precio base de la entrada mas 4EUR de gastos de reserva. Seleccionaras una franja horaria de entrada. La interfaz puede ir lenta en periodos de alta demanda, y las franjas mas solicitadas se agotan rapidamente.",
      },
      {
        h3: "3. Compra en Taquilla (No Recomendado)",
        p: "Puedes comprar entradas en la Puerta 2 el mismo dia de tu visita, pero preparate para largas esperas: normalmente de 1 a 3 horas de marzo a octubre. En dias de maxima afluencia (fines de semana, festivos, dias de lluvia cuando los planes al aire libre se cancelan), el museo puede colgar el cartel de entradas agotadas. El precio en taquilla es el mismo que el precio base.",
      },
    ],
  },
  freeEntry: {
    h2: "Dias de Entrada Gratuita",
    p: "Los Uffizi ofrecen entrada gratuita el primer domingo de cada mes. Suena genial, verdad? En la practica, estos dias son increiblemente concurridos: la cola puede superar las 4 horas y las salas estan abarrotadas. Si visitas un domingo gratuito, llega antes de las 7:30. De lo contrario, te recomiendo pagar una entrada en un dia mas tranquilo para una experiencia mucho mejor.",
  },
  skipLine: {
    h2: "Sin Colas: Como Funciona",
    p: "Cuando reservas una entrada sin colas, recibes una confirmacion con un horario de entrada especifico (por ejemplo, 10:00-10:15). El dia de tu visita, dirigete a la Puerta 1 (o Puerta 3 para grupos). Muestra tu bono digital y un documento de identidad, pasa el control de seguridad y ya estas dentro. Todo el proceso dura entre 5 y 10 minutos.",
    link: "Guia completa de entrada sin colas \u2192",
  },
  whenToBook: {
    h2: "Cuando Reservar",
    paragraphs: [
      "El mejor momento para visitar los Uffizi es a primera hora de la manana (entrada a las 8:15) o a ultima hora de la tarde (despues de las 16:00). Los martes y miercoles suelen ser los dias mas tranquilos. Evita los fines de semana y las semanas en torno a Semana Santa: son las epocas mas concurridas del ano.",
      "En temporada alta (marzo-octubre), reserva al menos con 2 semanas de antelacion. Para los fines de semana de abril, mayo y junio, reserva con un mes de antelacion. Las entradas en temporada baja (noviembre-febrero) suelen poder reservarse pocos dias antes sin problema.",
    ],
  },
  compared: {
    h2: "Comparativa de Opciones de Entradas",
    p: "No sabes que entrada te conviene? Aqui va mi recomendacion sincera:",
  },
  bottomCta: "Reserva Ahora Tus Entradas para los Uffizi",
  faq: [
    {
      q: "Cuanto cuestan las entradas de los Uffizi en 2026?",
      a: "La entrada estandar cuesta 25EUR (marzo-octubre) o 12EUR (noviembre-febrero). Los ciudadanos de la UE de 18 a 25 anos pagan 2EUR. Los menores de 18 anos de cualquier nacionalidad entran gratis. Las entradas sin colas online estan disponibles desde 20EUR.",
    },
    {
      q: "Se pueden comprar entradas en taquilla en los Uffizi?",
      a: "Si, pero preparate para esperar de 1 a 3 horas en temporada alta. Las entradas en taquilla se venden en la Puerta 2. Los dias de mayor afluencia, el museo puede agotar las entradas, por lo que se recomienda encarecidamente reservar con antelacion.",
    },
    {
      q: "Que significa 'sin colas' en los Uffizi?",
      a: "Las entradas sin colas incluyen un acceso con horario asignado: te diriges directamente a la Puerta 1 a la hora reservada y evitas la cola de entrada general. El acceso suele tardar entre 5 y 10 minutos pasando por el control de seguridad.",
    },
    {
      q: "Se puede obtener un reembolso de las entradas de los Uffizi?",
      a: "La mayoria de las entradas reservadas ofrecen cancelacion gratuita hasta 24 horas antes de la visita. Consulta las condiciones de cancelacion al reservar. Las entradas oficiales del museo en b-ticket.com generalmente no son reembolsables.",
    },
    {
      q: "Los Uffizi son alguna vez gratuitos?",
      a: "Si, el primer domingo de cada mes. Sin embargo, esos dias son extremadamente concurridos, con esperas de 3 a 4 horas. La mayoria de los visitantes disfrutan de una experiencia mejor pagando una entrada en un dia mas tranquilo.",
    },
    {
      q: "Los ninos necesitan entrada para los Uffizi?",
      a: "Los menores de 18 anos entran gratis independientemente de su nacionalidad. Aun asi deben pasar el control de seguridad y llevar un documento de identidad o un documento que acredite su edad.",
    },
  ],
};

const content: PageContent<TicketsContent> = { en, it, de, fr, es };

export function getTicketsContent(locale: string): TicketsContent {
  return getContent(content, locale);
}
