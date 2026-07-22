import { getContent, type PageContent } from "./types";

export type OpeningHoursContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  h1: string;
  intro: string;
  standardHours: {
    h2: string;
    scheduleTitle: string;
    tueSun: string;
    tueSunTime: string;
    lastEntry: string;
    lastEntryTime: string;
    ticketOffice: string;
    ticketOfficeTime: string;
    monday: string;
    mondayClosed: string;
    note: string;
  };
  holidayClosures: {
    h2: string;
    p: string;
    tableTitle: string;
    closures: { type: string; price: string; notes: string }[];
    openHolidays: string;
    freeEntryDay: string;
  };
  extendedHours: {
    h2: string;
    p: string;
  };
  bestTimes: {
    h2: string;
    intro: string;
    best: { h3: string; p: string; doorLinkText: string };
    good: { h3: string; p: string };
    avoid: { h3: string; p: string };
  };
  bestDays: {
    h2: string;
    days: { label: string; description: string }[];
  };
  bestSeason: {
    h2: string;
    intro: string;
    seasons: { label: string; description: string }[];
  };
  ctaTitle: string;
  faq: { q: string; a: string }[];
};

const en: OpeningHoursContent = {
  meta: {
    title: "Uffizi Gallery Opening Hours 2026 | Daily Schedule & Closures",
    description:
      "Uffizi Gallery hours: open Tue-Sun 8:15-18:30, closed Mondays. Best times to visit, seasonal changes, holiday closures & extended hours guide.",
  },
  breadcrumb: "Opening Hours",
  h1: "Uffizi Gallery Opening Hours",
  intro:
    "The Uffizi Gallery is open six days a week, year-round. Whether you\u2019re planning a summer visit or a quiet winter trip, here\u2019s everything you need to know about when the gallery is open, when it\u2019s closed, and when to go for the best experience.",
  standardHours: {
    h2: "Standard Opening Hours",
    scheduleTitle: "2026 Schedule",
    tueSun: "Tuesday \u2013 Sunday",
    tueSunTime: "8:15 AM \u2013 6:30 PM",
    lastEntry: "Last Entry",
    lastEntryTime: "5:30 PM",
    ticketOffice: "Ticket Office Closes",
    ticketOfficeTime: "5:30 PM",
    monday: "Monday",
    mondayClosed: "CLOSED",
    note: "Important: the last entry is at 5:30 PM, not 6:30 PM. Staff begin clearing rooms about 15 minutes before closing time. If you arrive at 5:30 PM, you\u2019ll have less than an hour \u2014 not enough for a meaningful visit. Plan to arrive at least 2 hours before closing.",
  },
  holidayClosures: {
    h2: "Holiday Closures 2026",
    p: "The Uffizi closes on two public holidays each year, plus every Monday:",
    tableTitle: "2026 Closure Dates",
    closures: [
      { type: "Every Monday", price: "Closed", notes: "Year-round" },
      { type: "January 1 (New Year)", price: "Closed", notes: "Public Holiday" },
      { type: "December 25 (Christmas)", price: "Closed", notes: "Public Holiday" },
    ],
    openHolidays:
      "On the other public holidays \u2014 Easter Sunday, May 1 (Labour Day), June 2 (Republic Day), August 15 (Ferragosto), and December 8 \u2014 the Uffizi is {open} on regular hours. However, these holidays tend to be very busy, so book your tickets well in advance.",
    freeEntryDay:
      "April 25 (Liberation Day) is the exception worth planning around: the Uffizi is open and admission is free for everyone. Free-entry days draw the heaviest crowds of the year, so arrive at opening time if you can.",
  },
  extendedHours: {
    h2: "Extended & Special Hours",
    p: "During peak tourist season, the Uffizi occasionally extends its hours. In recent years, the gallery has offered evening openings on select Tuesdays during summer (typically June through September), staying open until 10:00 PM. These evening sessions are magical \u2014 smaller crowds, cooler temperatures, and beautiful light through the windows. Check the official Uffizi website closer to your visit dates for any special openings.",
  },
  bestTimes: {
    h2: "Best Times to Visit",
    intro:
      "After guiding thousands of visitors through the Uffizi, here\u2019s my honest advice on timing:",
    best: {
      h3: "Best: 8:15 AM (Opening Time)",
      p: "The absolute best experience. The gallery is nearly empty for the first hour. You can stand alone in front of the Birth of Venus. Botticelli Hall without crowds is a completely different experience \u2014 you notice details that are impossible to see when 50 people are jostling for position. Book the 8:15 time slot and be at {doorLink} by 8:00 AM.",
      doorLinkText: "Door 1",
    },
    good: {
      h3: "Good: After 4:00 PM",
      p: "Day-trip tour groups leave around 3:00-3:30 PM. By 4:00 PM, the gallery is noticeably calmer. The late afternoon light through the Arno-side windows creates beautiful conditions for photography. You\u2019ll have 2.5 hours until closing \u2014 enough for the highlights.",
    },
    avoid: {
      h3: "Avoid: 10:00 AM \u2013 2:00 PM",
      p: "Peak hours. Every group tour, school trip, and cruise ship excursion hits the Uffizi during this window. Botticelli Hall can feel like a crowded subway car. If this is your only option, go directly to rooms 35-90 first (less crowded) and circle back to rooms 2-14 after 2:00 PM.",
    },
  },
  bestDays: {
    h2: "Best Days of the Week",
    days: [
      {
        label: "Tuesday & Wednesday",
        description:
          "Quietest days. Tuesday is the first day open after the Monday closure, and many tourists haven\u2019t arrived yet.",
      },
      {
        label: "Thursday",
        description: "Moderate crowds. A good mid-week option.",
      },
      {
        label: "Friday",
        description: "Busier as weekend visitors start arriving.",
      },
      {
        label: "Saturday & Sunday",
        description:
          "Busiest days. If you must visit on a weekend, go at 8:15 AM.",
      },
      {
        label: "First Sunday of the month",
        description:
          "Free entry day for the gallery and the Vasari Corridor. A free nominative ticket is still required, and the Uffizi's is issued only at the ticket-office counter on the day. Extremely crowded with 3-4 hour waits. Avoid unless you\u2019re on a very tight budget.",
      },
    ],
  },
  bestSeason: {
    h2: "Best Season to Visit",
    intro: "Each season offers different advantages:",
    seasons: [
      {
        label: "November \u2013 February (Low Season):",
        description:
          "Smallest crowds and the most comfortable viewing of the year. Florence is quieter, restaurants are easier to book, and you might have entire rooms to yourself.",
      },
      {
        label: "March \u2013 May (Spring):",
        description:
          "Beautiful weather but increasingly busy. Book tickets 2+ weeks ahead. April and Easter week are particularly crowded.",
      },
      {
        label: "June \u2013 August (Summer):",
        description:
          "Peak crowds and heat. Possible evening openings. Book as far in advance as possible. Morning visits are essential.",
      },
      {
        label: "September \u2013 October (Autumn):",
        description:
          "Crowds thin after mid-September. October is one of the best months \u2014 good weather, fewer tourists, high-season hours still apply.",
      },
    ],
  },
  ctaTitle: "Book Your Uffizi Time Slot",
  faq: [
    {
      q: "What are the Uffizi Gallery opening hours in 2026?",
      a: "The Uffizi is open Tuesday through Sunday, 8:15 AM to 6:30 PM. Last entry is at 5:30 PM. The gallery is closed every Monday, plus January 1 and December 25.",
    },
    {
      q: "Is the Uffizi open on Mondays?",
      a: "No. The Uffizi is closed every Monday, year-round, without exception. Plan your visit for Tuesday through Sunday.",
    },
    {
      q: "What is the best time to visit the Uffizi?",
      a: "The best time is 8:15 AM (opening) on a Tuesday or Wednesday. The gallery is nearly empty for the first hour. Late afternoon (after 4 PM) is also good. Avoid 10 AM \u2013 2 PM when tour groups dominate.",
    },
    {
      q: "Is the Uffizi open on Italian public holidays?",
      a: "Yes. The Uffizi is open on regular hours for Easter Sunday, May 1 (Labour Day), June 2, August 15 and December 8. April 25 (Liberation Day) is open too, with free admission for everyone. Apart from the weekly Monday closure, it only closes on January 1 and December 25 — and if a public holiday falls on a Monday, the gallery is still shut.",
    },
    {
      q: "Does the Uffizi have evening openings?",
      a: "During summer months (typically June\u2013September), the Uffizi occasionally offers extended Tuesday evening openings until 10 PM. Check the official website closer to your visit for the current schedule.",
    },
    {
      q: "How long before closing should I arrive?",
      a: "Arrive at least 2 hours before closing (by 4:30 PM) for a meaningful visit. Last entry is 5:30 PM, and at 6:30 PM visitors will be asked to proceed to the exit.",
    },
  ],
};

const it: OpeningHoursContent = {
  meta: {
    title:
      "Orari Uffizi 2026 | Orari Apertura Galleria degli Uffizi e Chiusure",
    description:
      "Orari Uffizi: aperto mar-dom 8:15-18:30, chiuso luned\u00EC. Orari apertura Galleria degli Uffizi, chiusure festive, aperture serali e momenti migliori per visitare.",
  },
  breadcrumb: "Orari di Apertura",
  h1: "Orari Apertura Galleria degli Uffizi",
  intro:
    "La Galleria degli Uffizi \u00E8 aperta sei giorni su sette, tutto l\u2019anno. Che tu stia programmando una visita estiva o un\u2019uscita invernale pi\u00F9 tranquilla, ecco tutto quello che devi sapere sugli orari di apertura, i giorni di chiusura e i momenti migliori per goderti la visita.",
  standardHours: {
    h2: "Orari di Apertura Standard",
    scheduleTitle: "Orari 2026",
    tueSun: "Marted\u00EC \u2013 Domenica",
    tueSunTime: "8:15 \u2013 18:30",
    lastEntry: "Ultimo Ingresso",
    lastEntryTime: "17:30",
    ticketOffice: "Chiusura Biglietteria",
    ticketOfficeTime: "17:30",
    monday: "Luned\u00EC",
    mondayClosed: "CHIUSO",
    note: "Attenzione: l\u2019ultimo ingresso \u00E8 alle 17:30, non alle 18:30. Il personale inizia a liberare le sale circa 15 minuti prima della chiusura. Se arrivi alle 17:30 avrai meno di un\u2019ora \u2014 troppo poco per una visita soddisfacente. Cerca di arrivare almeno 2 ore prima della chiusura.",
  },
  holidayClosures: {
    h2: "Chiusure Festive 2026",
    p: "Gli Uffizi chiudono in due festivit\u00E0 nazionali all\u2019anno, oltre a ogni luned\u00EC:",
    tableTitle: "Date di Chiusura 2026",
    closures: [
      { type: "Ogni luned\u00EC", price: "Chiuso", notes: "Tutto l\u2019anno" },
      {
        type: "1 gennaio (Capodanno)",
        price: "Chiuso",
        notes: "Mercoled\u00EC",
      },
      { type: "25 dicembre (Natale)", price: "Chiuso", notes: "Venerd\u00EC" },
    ],
    openHolidays:
      "Nelle altre festivit\u00E0 \u2014 Pasqua, 1\u00B0 maggio (Festa del Lavoro), 2 giugno (Festa della Repubblica), 15 agosto (Ferragosto) e 8 dicembre \u2014 gli Uffizi sono {open} con orario regolare. Queste giornate per\u00F2 sono molto affollate: prenota i biglietti con largo anticipo.",
    freeEntryDay:
      "Il 25 aprile (Festa della Liberazione) \u00E8 l\u2019eccezione da tenere a mente: gli Uffizi sono aperti e l\u2019ingresso \u00E8 gratuito per tutti. Le giornate a ingresso libero sono le pi\u00F9 affollate dell\u2019anno: se puoi, presentati all\u2019apertura.",
  },
  extendedHours: {
    h2: "Aperture Serali e Orari Speciali",
    p: "Durante l\u2019alta stagione turistica, gli Uffizi allungano occasionalmente gli orari. Negli ultimi anni il museo ha proposto aperture serali in alcuni marted\u00EC estivi (generalmente da giugno a settembre), restando aperto fino alle 22:00. Le visite serali sono un\u2019esperienza magica \u2014 meno folla, temperature pi\u00F9 fresche e una luce bellissima attraverso le finestre. Controlla il sito ufficiale degli Uffizi pi\u00F9 vicino alla data della tua visita per eventuali aperture speciali.",
  },
  bestTimes: {
    h2: "Orari Migliori per la Visita",
    intro:
      "Dopo aver accompagnato migliaia di visitatori agli Uffizi, ecco il mio consiglio sincero su quando andare:",
    best: {
      h3: "Ideale: 8:15 (Apertura)",
      p: "L\u2019esperienza migliore in assoluto. Il museo \u00E8 quasi vuoto nella prima ora. Puoi fermarti da solo davanti alla Nascita di Venere. La Sala Botticelli senza folla \u00E8 un\u2019esperienza completamente diversa \u2014 noti dettagli impossibili da cogliere quando 50 persone si accalcano. Prenota la fascia delle 8:15 e presentati alla {doorLink} entro le 8:00.",
      doorLinkText: "Porta 1",
    },
    good: {
      h3: "Buono: Dopo le 16:00",
      p: "I gruppi organizzati partono intorno alle 15:00-15:30. Dalle 16:00 il museo \u00E8 visibilmente pi\u00F9 tranquillo. La luce del tardo pomeriggio attraverso le finestre lato Arno crea condizioni perfette per le foto. Avrai 2 ore e mezza fino alla chiusura \u2014 abbastanza per vedere i capolavori principali.",
    },
    avoid: {
      h3: "Da Evitare: 10:00 \u2013 14:00",
      p: "Ore di punta. Tutti i tour di gruppo, le gite scolastiche e le escursioni delle crociere arrivano agli Uffizi in questa fascia. La Sala Botticelli pu\u00F2 sembrare un vagone della metropolitana all\u2019ora di punta. Se \u00E8 la tua unica opzione, vai prima alle sale 35-90 (meno affollate) e torna alle sale 2-14 dopo le 14:00.",
    },
  },
  bestDays: {
    h2: "Giorni Migliori della Settimana",
    days: [
      {
        label: "Marted\u00EC e Mercoled\u00EC",
        description:
          "I giorni pi\u00F9 tranquilli. Il marted\u00EC \u00E8 il primo giorno di apertura dopo la chiusura del luned\u00EC, e molti turisti non sono ancora arrivati.",
      },
      {
        label: "Gioved\u00EC",
        description:
          "Affluenza moderata. Una buona opzione a met\u00E0 settimana.",
      },
      {
        label: "Venerd\u00EC",
        description:
          "Pi\u00F9 affollato, i visitatori del weekend cominciano ad arrivare.",
      },
      {
        label: "Sabato e Domenica",
        description:
          "I giorni pi\u00F9 affollati. Se devi visitare nel weekend, vai alle 8:15.",
      },
      {
        label: "Prima domenica del mese",
        description:
          "Giornata a ingresso gratuito per la galleria e il Corridoio Vasariano. Serve comunque un biglietto nominativo gratuito, e quello degli Uffizi si ritira solo allo sportello della biglietteria il giorno stesso. Estremamente affollata con attese di 3-4 ore. Evita a meno che tu non abbia un budget molto limitato.",
      },
    ],
  },
  bestSeason: {
    h2: "Stagione Migliore per Visitare",
    intro: "Ogni stagione offre vantaggi diversi:",
    seasons: [
      {
        label: "Novembre \u2013 Febbraio (Bassa Stagione):",
        description:
          "Meno folla e la visita pi\u00F9 confortevole dell\u2019anno. Firenze \u00E8 pi\u00F9 tranquilla, i ristoranti si prenotano facilmente e potresti avere intere sale tutte per te.",
      },
      {
        label: "Marzo \u2013 Maggio (Primavera):",
        description:
          "Bel tempo ma affluenza in crescita. Prenota i biglietti almeno 2 settimane prima. Aprile e la settimana di Pasqua sono particolarmente affollati.",
      },
      {
        label: "Giugno \u2013 Agosto (Estate):",
        description:
          "Massima affluenza e caldo. Possibili aperture serali. Prenota con il massimo anticipo possibile. La visita al mattino \u00E8 fondamentale.",
      },
      {
        label: "Settembre \u2013 Ottobre (Autunno):",
        description:
          "La folla diminuisce da met\u00E0 settembre. Ottobre \u00E8 uno dei mesi migliori \u2014 bel tempo, meno turisti, orari da alta stagione ancora in vigore.",
      },
    ],
  },
  ctaTitle: "Prenota la Tua Fascia Oraria agli Uffizi",
  faq: [
    {
      q: "Quali sono gli orari di apertura degli Uffizi nel 2026?",
      a: "Gli Uffizi sono aperti da marted\u00EC a domenica, dalle 8:15 alle 18:30. L\u2019ultimo ingresso \u00E8 alle 17:30. Il museo \u00E8 chiuso ogni luned\u00EC, oltre al 1\u00B0 gennaio e al 25 dicembre.",
    },
    {
      q: "Gli Uffizi sono aperti il luned\u00EC?",
      a: "No. Gli Uffizi sono chiusi ogni luned\u00EC, tutto l\u2019anno, senza eccezioni. Programma la tua visita da marted\u00EC a domenica.",
    },
    {
      q: "Qual \u00E8 l\u2019orario migliore per visitare gli Uffizi?",
      a: "L\u2019orario migliore \u00E8 alle 8:15 (apertura), di marted\u00EC o mercoled\u00EC. Il museo \u00E8 quasi vuoto nella prima ora. Anche il tardo pomeriggio (dopo le 16) \u00E8 un buon momento. Evita la fascia 10:00-14:00, quando dominano i gruppi organizzati.",
    },
    {
      q: "Gli Uffizi sono aperti nei giorni festivi?",
      a: "S\u00EC. Gli Uffizi sono aperti con orario regolare a Pasqua, il 1\u00B0 maggio, il 2 giugno, il 15 agosto e l\u20198 dicembre. Anche il 25 aprile (Festa della Liberazione) sono aperti, con ingresso gratuito per tutti. Oltre alla consueta chiusura del luned\u00EC, chiudono solo il 1\u00B0 gennaio e il 25 dicembre: se una festivit\u00E0 cade di luned\u00EC, la galleria resta comunque chiusa.",
    },
    {
      q: "Gli Uffizi hanno aperture serali?",
      a: "Nei mesi estivi (generalmente giugno-settembre), gli Uffizi offrono occasionalmente aperture serali il marted\u00EC fino alle 22:00. Consulta il sito ufficiale pi\u00F9 vicino alla data della tua visita per il calendario aggiornato.",
    },
    {
      q: "Quanto tempo prima della chiusura conviene arrivare?",
      a: "Arriva almeno 2 ore prima della chiusura (entro le 16:30) per una visita soddisfacente. L\u2019ultimo ingresso \u00E8 alle 17:30 e il personale inizia a liberare le sale 15 minuti prima della chiusura delle 18:30.",
    },
  ],
};

const de: OpeningHoursContent = {
  meta: {
    title: "Öffnungszeiten Uffizi 2026 | Uffizi Galerie Öffnungszeiten",
    description:
      "Uffizi Galerie Öffnungszeiten: geöffnet Di–So 8:15–18:30, montags geschlossen. Beste Besuchszeiten, Feiertagsschließungen, Sonderöffnungen & praktische Tipps.",
  },
  breadcrumb: "Öffnungszeiten",
  h1: "Öffnungszeiten der Uffizien",
  intro:
    "Die Uffizien sind ganzjährig sechs Tage pro Woche geöffnet. Ob Sie einen Sommerurlaub in der Toskana planen oder einen ruhigeren Städtetrip im Winter — hier finden Sie alle wichtigen Informationen zu Öffnungszeiten, Schließtagen und den besten Besuchszeiten für ein entspanntes Museumserlebnis.",
  standardHours: {
    h2: "Reguläre Öffnungszeiten",
    scheduleTitle: "Öffnungszeiten 2026",
    tueSun: "Dienstag – Sonntag",
    tueSunTime: "8:15 – 18:30 Uhr",
    lastEntry: "Letzter Einlass",
    lastEntryTime: "17:30 Uhr",
    ticketOffice: "Kassenschluss",
    ticketOfficeTime: "17:30 Uhr",
    monday: "Montag",
    mondayClosed: "GESCHLOSSEN",
    note: "Wichtig: Der letzte Einlass ist um 17:30 Uhr, nicht um 18:30 Uhr. Das Personal beginnt etwa 15 Minuten vor Schließung mit der Räumung der Säle. Wer um 17:30 Uhr ankommt, hat weniger als eine Stunde — zu wenig für einen lohnenswerten Besuch. Planen Sie Ihre Ankunft mindestens 2 Stunden vor Schließung ein.",
  },
  holidayClosures: {
    h2: "Feiertags-Schließungen 2026",
    p: "Die Uffizien schließen an zwei gesetzlichen Feiertagen im Jahr sowie jeden Montag:",
    tableTitle: "Schließungstage 2026",
    closures: [
      { type: "Jeden Montag", price: "Geschlossen", notes: "Ganzjährig" },
      {
        type: "1. Januar (Neujahr)",
        price: "Geschlossen",
        notes: "Mittwoch",
      },
      {
        type: "25. Dezember (Weihnachten)",
        price: "Geschlossen",
        notes: "Freitag",
      },
    ],
    openHolidays:
      "An den übrigen Feiertagen — Ostersonntag, 1. Mai (Tag der Arbeit), 2. Juni (Tag der Republik), 15. August (Ferragosto) und 8. Dezember — sind die Uffizien zu den regulären Öffnungszeiten {open}. Diese Tage sind jedoch erfahrungsgemäß sehr gut besucht — buchen Sie Ihre Eintrittskarten frühzeitig.",
    freeEntryDay:
      "Der 25. April (Tag der Befreiung) ist die Ausnahme, die eine Planung wert ist: Die Uffizien sind geöffnet und der Eintritt ist für alle frei. Tage mit freiem Eintritt sind die besuchsstärksten des Jahres — kommen Sie nach Möglichkeit direkt zur Öffnung.",
  },
  extendedHours: {
    h2: "Verlängerte Öffnungszeiten & Sonderöffnungen",
    p: "In der Hauptsaison verlängern die Uffizien gelegentlich ihre Öffnungszeiten. In den letzten Jahren gab es an ausgewählten Dienstagen im Sommer (meist Juni bis September) Abendöffnungen bis 22:00 Uhr. Diese Abendveranstaltungen sind ein besonderes Erlebnis — weniger Gedränge, angenehme Temperaturen und wunderschönes Licht durch die Fenster. Prüfen Sie die offizielle Uffizien-Website kurz vor Ihrer Reise auf aktuelle Sonderöffnungen.",
  },
  bestTimes: {
    h2: "Die besten Besuchszeiten",
    intro:
      "Nach tausenden Besucherführungen durch die Uffizien hier meine ehrliche Empfehlung zum Timing:",
    best: {
      h3: "Ideal: 8:15 Uhr (Öffnung)",
      p: "Das beste Erlebnis überhaupt. In der ersten Stunde ist die Galerie nahezu leer. Sie können in aller Ruhe vor der Geburt der Venus stehen. Der Botticelli-Saal ohne Menschenmassen ist ein völlig anderes Erlebnis — Sie entdecken Details, die bei 50 drängelnden Besuchern schlicht nicht wahrnehmbar sind. Buchen Sie das 8:15-Uhr-Zeitfenster und seien Sie um 8:00 Uhr am {doorLink}.",
      doorLinkText: "Eingang 1",
    },
    good: {
      h3: "Gut: Nach 16:00 Uhr",
      p: "Organisierte Reisegruppen verlassen die Uffizien gegen 15:00–15:30 Uhr. Ab 16:00 Uhr wird es spürbar ruhiger. Das späte Nachmittagslicht durch die Fenster zur Arno-Seite schafft wunderbare Bedingungen für Fotos. Sie haben noch 2,5 Stunden bis zur Schließung — genug für die wichtigsten Highlights.",
    },
    avoid: {
      h3: "Vermeiden: 10:00 – 14:00 Uhr",
      p: "Stoßzeiten. Sämtliche Gruppenreisen, Schulausflüge und Kreuzfahrt-Exkursionen treffen in diesem Zeitfenster in den Uffizien ein. Der Botticelli-Saal kann sich anfühlen wie eine volle U-Bahn zur Rushhour. Falls dies Ihre einzige Option ist: Gehen Sie zuerst in die Säle 35–90 (weniger überlaufen) und kehren Sie nach 14:00 Uhr zu den Sälen 2–14 zurück.",
    },
  },
  bestDays: {
    h2: "Die besten Wochentage",
    days: [
      {
        label: "Dienstag & Mittwoch",
        description:
          "Die ruhigsten Tage. Dienstag ist der erste Öffnungstag nach der Montagsschließung, und viele Touristen sind noch nicht angereist.",
      },
      {
        label: "Donnerstag",
        description: "Mittleres Besucheraufkommen. Eine gute Wahl unter der Woche.",
      },
      {
        label: "Freitag",
        description: "Wird voller, da die Wochenendbesucher eintreffen.",
      },
      {
        label: "Samstag & Sonntag",
        description:
          "Die meistbesuchten Tage. Falls Sie am Wochenende kommen müssen, wählen Sie das 8:15-Uhr-Zeitfenster.",
      },
      {
        label: "Erster Sonntag im Monat",
        description:
          "Freier Eintritt für die Galerie und den Vasarikorridor. Ein kostenloses personalisiertes Ticket ist trotzdem nötig, und das der Uffizien gibt es nur am Schalter der Ticketkasse am Tag selbst. Extrem überfüllt mit 3–4 Stunden Wartezeit. Nur empfehlenswert, wenn Sie wirklich sparen müssen.",
      },
    ],
  },
  bestSeason: {
    h2: "Die beste Jahreszeit für einen Besuch",
    intro: "Jede Jahreszeit hat ihre Vorteile:",
    seasons: [
      {
        label: "November – Februar (Nebensaison):",
        description:
          "Wenig Besucher und das entspannteste Besichtigen des Jahres. Florenz ist ruhiger, Restaurants leichter zu reservieren, und Sie haben möglicherweise ganze Säle für sich allein.",
      },
      {
        label: "März – Mai (Frühling):",
        description:
          "Schönes Wetter, aber zunehmend belebter. Buchen Sie Tickets mindestens 2 Wochen im Voraus. April und die Osterwoche sind besonders voll.",
      },
      {
        label: "Juni – August (Sommer):",
        description:
          "Höchstes Besucheraufkommen und Hitze. Mögliche Abendöffnungen. Buchen Sie so früh wie möglich. Ein Besuch am Morgen ist dringend empfohlen.",
      },
      {
        label: "September – Oktober (Herbst):",
        description:
          "Ab Mitte September wird es ruhiger. Oktober ist einer der besten Monate — angenehmes Wetter, weniger Touristen, Hauptsaison-Öffnungszeiten gelten noch.",
      },
    ],
  },
  ctaTitle: "Buchen Sie Ihr Uffizi-Zeitfenster",
  faq: [
    {
      q: "Wie sind die Öffnungszeiten der Uffizien 2026?",
      a: "Die Uffizien sind dienstags bis sonntags von 8:15 bis 18:30 Uhr geöffnet. Letzter Einlass ist um 17:30 Uhr. Das Museum ist jeden Montag geschlossen sowie am 1. Januar und 25. Dezember.",
    },
    {
      q: "Sind die Uffizien montags geöffnet?",
      a: "Nein. Die Uffizien sind jeden Montag geschlossen, ganzjährig und ohne Ausnahme. Planen Sie Ihren Besuch für Dienstag bis Sonntag.",
    },
    {
      q: "Wann besucht man die Uffizien am besten?",
      a: "Die beste Besuchszeit ist um 8:15 Uhr (Öffnung), idealerweise an einem Dienstag oder Mittwoch. In der ersten Stunde ist die Galerie nahezu leer. Auch der späte Nachmittag (ab 16 Uhr) eignet sich gut. Vermeiden Sie 10–14 Uhr, wenn Reisegruppen das Museum dominieren.",
    },
    {
      q: "Haben die Uffizien an italienischen Feiertagen geöffnet?",
      a: "Ja. Die Uffizien sind am Ostersonntag, 1. Mai, 2. Juni, 15. August und 8. Dezember zu den regulären Zeiten geöffnet. Auch am 25. April (Tag der Befreiung) ist geöffnet — mit freiem Eintritt für alle. Abgesehen von der wöchentlichen Montagsschließung wird nur am 1. Januar und 25. Dezember geschlossen — fällt ein Feiertag auf einen Montag, bleibt die Galerie dennoch zu.",
    },
    {
      q: "Gibt es Abendöffnungen in den Uffizien?",
      a: "In den Sommermonaten (in der Regel Juni–September) bieten die Uffizien gelegentlich verlängerte Dienstagabend-Öffnungen bis 22 Uhr an. Prüfen Sie die offizielle Website kurz vor Ihrem Besuch für den aktuellen Kalender.",
    },
    {
      q: "Wie lange vor Schließung sollte man ankommen?",
      a: "Kommen Sie mindestens 2 Stunden vor Schließung an (also spätestens um 16:30 Uhr), um genügend Zeit für einen lohnenswerten Besuch zu haben. Letzter Einlass ist um 17:30 Uhr, und das Personal beginnt 15 Minuten vor der Schließung um 18:30 Uhr mit der Räumung der Säle.",
    },
  ],
};

const fr: OpeningHoursContent = {
  meta: {
    title:
      "Horaires Offices 2026 | Horaires Galerie des Offices Florence",
    description:
      "Horaires Galerie des Offices : ouverte mar-dim 8h15-18h30, fermee le lundi. Meilleurs moments, fermetures, ouvertures nocturnes et conseils pratiques.",
  },
  breadcrumb: "Horaires d'ouverture",
  h1: "Horaires d'ouverture de la Galerie des Offices",
  intro:
    "La Galerie des Offices est ouverte six jours sur sept, toute l'annee. Que vous planifiiez une visite estivale ou un sejour hivernal plus tranquille, voici tout ce que vous devez savoir sur les horaires d'ouverture, les jours de fermeture et les meilleurs moments pour profiter pleinement de votre visite.",
  standardHours: {
    h2: "Horaires d'ouverture standard",
    scheduleTitle: "Horaires 2026",
    tueSun: "Mardi \u2013 Dimanche",
    tueSunTime: "8h15 \u2013 18h30",
    lastEntry: "Derniere entree",
    lastEntryTime: "17h30",
    ticketOffice: "Fermeture de la billetterie",
    ticketOfficeTime: "17h30",
    monday: "Lundi",
    mondayClosed: "FERME",
    note: "Important : la derniere entree est a 17h30, et non a 18h30. Le personnel commence a evacuer les salles environ 15 minutes avant la fermeture. Si vous arrivez a 17h30, vous disposerez de moins d'une heure \u2014 insuffisant pour une visite satisfaisante. Prevoyez d'arriver au moins 2 heures avant la fermeture.",
  },
  holidayClosures: {
    h2: "Fermetures les jours feries 2026",
    p: "La Galerie des Offices ferme deux jours feries par an, en plus de chaque lundi :",
    tableTitle: "Dates de fermeture 2026",
    closures: [
      { type: "Chaque lundi", price: "Ferme", notes: "Toute l'annee" },
      {
        type: "1er janvier (Jour de l'An)",
        price: "Ferme",
        notes: "Mercredi",
      },
      { type: "25 decembre (Noel)", price: "Ferme", notes: "Vendredi" },
    ],
    openHolidays:
      "Les autres jours feries \u2014 dimanche de Paques, 1er mai (Fete du Travail), 2 juin (Fete de la Republique), 15 aout (Ferragosto) et 8 decembre \u2014 la Galerie des Offices est {open} aux horaires habituels. Ces jours sont toutefois tres frequentes : reservez vos billets bien a l'avance.",
    freeEntryDay:
      "Le 25 avril (Fete de la Liberation) est l'exception a retenir : la Galerie des Offices est ouverte et l'entree est gratuite pour tous. Les jours a entree gratuite sont les plus frequentes de l'annee : presentez-vous des l'ouverture si vous le pouvez.",
  },
  extendedHours: {
    h2: "Horaires prolonges et ouvertures speciales",
    p: "Pendant la haute saison touristique, la Galerie des Offices prolonge parfois ses horaires. Ces dernieres annees, le musee a propose des ouvertures nocturnes certains mardis d'ete (generalement de juin a septembre), restant ouvert jusqu'a 22h00. Ces soirees sont magiques \u2014 moins de monde, temperatures plus agreables et une lumiere magnifique a travers les fenetres. Consultez le site officiel de la Galerie des Offices a l'approche de votre visite pour connaitre les ouvertures speciales.",
  },
  bestTimes: {
    h2: "Meilleurs horaires pour visiter",
    intro:
      "Apres avoir accompagne des milliers de visiteurs a la Galerie des Offices, voici mes conseils sinceres sur le choix du moment :",
    best: {
      h3: "Ideal : 8h15 (ouverture)",
      p: "La meilleure experience possible. Le musee est presque vide pendant la premiere heure. Vous pouvez contempler la Naissance de Venus en toute tranquillite. La salle Botticelli sans foule est une experience completement differente \u2014 vous remarquerez des details impossibles a saisir quand 50 personnes se bousculent. Reservez le creneau de 8h15 et presentez-vous a la {doorLink} avant 8h00.",
      doorLinkText: "Porte 1",
    },
    good: {
      h3: "Bon : apres 16h00",
      p: "Les groupes organises partent vers 15h00-15h30. A partir de 16h00, le musee est nettement plus calme. La lumiere de fin d'apres-midi a travers les fenetres cote Arno offre des conditions ideales pour la photographie. Vous disposerez de 2 heures et demie avant la fermeture \u2014 suffisant pour voir les chefs-d'oeuvre principaux.",
    },
    avoid: {
      h3: "A eviter : 10h00 \u2013 14h00",
      p: "Heures de pointe. Tous les tours organises, les sorties scolaires et les excursions de croisieres convergent vers la Galerie des Offices durant ce creneau. La salle Botticelli peut ressembler a une rame de metro aux heures de pointe. Si c'est votre seule option, dirigez-vous d'abord vers les salles 35-90 (moins frequentees) et revenez aux salles 2-14 apres 14h00.",
    },
  },
  bestDays: {
    h2: "Meilleurs jours de la semaine",
    days: [
      {
        label: "Mardi et mercredi",
        description:
          "Les jours les plus calmes. Le mardi est le premier jour d'ouverture apres la fermeture du lundi, et beaucoup de touristes ne sont pas encore arrives.",
      },
      {
        label: "Jeudi",
        description:
          "Affluence moderee. Un bon choix en milieu de semaine.",
      },
      {
        label: "Vendredi",
        description:
          "Plus frequente, les visiteurs du week-end commencent a arriver.",
      },
      {
        label: "Samedi et dimanche",
        description:
          "Les jours les plus frequentes. Si vous devez visiter le week-end, venez a 8h15.",
      },
      {
        label: "Premier dimanche du mois",
        description:
          "Entree gratuite pour la galerie et le Corridor de Vasari. Un billet nominatif gratuit reste obligatoire, et celui des Offices se retire uniquement au guichet de la billetterie le jour meme. Extremement frequente avec 3 a 4 heures d'attente. A eviter sauf si votre budget est tres serre.",
      },
    ],
  },
  bestSeason: {
    h2: "Meilleure saison pour visiter",
    intro: "Chaque saison offre des avantages differents :",
    seasons: [
      {
        label: "Novembre \u2013 Fevrier (basse saison) :",
        description:
          "Moins de monde et la visite la plus confortable de l'annee. Florence est plus calme, les restaurants sont plus faciles a reserver, et vous pourriez avoir des salles entieres pour vous seul.",
      },
      {
        label: "Mars \u2013 Mai (printemps) :",
        description:
          "Beau temps mais affluence croissante. Reservez vos billets au moins 2 semaines a l'avance. Avril et la semaine de Paques sont particulierement frequentes.",
      },
      {
        label: "Juin \u2013 Aout (ete) :",
        description:
          "Affluence maximale et chaleur. Possibilite d'ouvertures nocturnes. Reservez le plus tot possible. La visite le matin est indispensable.",
      },
      {
        label: "Septembre \u2013 Octobre (automne) :",
        description:
          "L'affluence diminue a partir de mi-septembre. Octobre est l'un des meilleurs mois \u2014 beau temps, moins de touristes, horaires de haute saison toujours en vigueur.",
      },
    ],
  },
  ctaTitle: "Reservez votre creneau aux Offices",
  faq: [
    {
      q: "Quels sont les horaires d'ouverture de la Galerie des Offices en 2026 ?",
      a: "La Galerie des Offices est ouverte du mardi au dimanche, de 8h15 a 18h30. La derniere entree est a 17h30. Le musee est ferme chaque lundi, ainsi que le 1er janvier et le 25 decembre.",
    },
    {
      q: "La Galerie des Offices est-elle ouverte le lundi ?",
      a: "Non. La Galerie des Offices est fermee chaque lundi, toute l'annee, sans exception. Planifiez votre visite du mardi au dimanche.",
    },
    {
      q: "Quel est le meilleur moment pour visiter la Galerie des Offices ?",
      a: "Le meilleur moment est 8h15 (ouverture), un mardi ou un mercredi. Le musee est presque vide pendant la premiere heure. La fin d'apres-midi (apres 16h) est egalement un bon moment. Evitez la tranche 10h-14h, quand les groupes organises dominent.",
    },
    {
      q: "La Galerie des Offices est-elle ouverte les jours feries italiens ?",
      a: "Oui. La Galerie des Offices est ouverte aux horaires habituels le dimanche de Paques, le 1er mai, le 2 juin, le 15 aout et le 8 decembre. Le 25 avril (Fete de la Liberation), elle est egalement ouverte, avec une entree gratuite pour tous. Hormis la fermeture hebdomadaire du lundi, elle ne ferme que le 1er janvier et le 25 decembre : si un jour ferie tombe un lundi, la galerie reste fermee.",
    },
    {
      q: "La Galerie des Offices propose-t-elle des ouvertures nocturnes ?",
      a: "Pendant les mois d'ete (generalement juin-septembre), la Galerie des Offices propose occasionnellement des ouvertures nocturnes le mardi jusqu'a 22h. Consultez le site officiel a l'approche de votre visite pour le calendrier en vigueur.",
    },
    {
      q: "Combien de temps avant la fermeture faut-il arriver ?",
      a: "Arrivez au moins 2 heures avant la fermeture (avant 16h30) pour une visite satisfaisante. La derniere entree est a 17h30, et le personnel commence a evacuer les salles 15 minutes avant la fermeture de 18h30.",
    },
  ],
};

const es: OpeningHoursContent = {
  meta: {
    title:
      "Horario Uffizi 2026 | Horario Galeria Uffizi Florencia y Cierres",
    description:
      "Horario Galeria Uffizi: abierta mar-dom 8:15-18:30, cerrada los lunes. Mejores momentos, cierres festivos, aperturas nocturnas y consejos practicos.",
  },
  breadcrumb: "Horarios de apertura",
  h1: "Horarios de apertura de la Galeria Uffizi",
  intro:
    "La Galeria Uffizi esta abierta seis dias a la semana, durante todo el ano. Tanto si planeas una visita en verano como una escapada mas tranquila en invierno, aqui tienes todo lo que necesitas saber sobre los horarios de apertura, los dias de cierre y los mejores momentos para disfrutar de tu visita.",
  standardHours: {
    h2: "Horarios de apertura estandar",
    scheduleTitle: "Horarios 2026",
    tueSun: "Martes \u2013 Domingo",
    tueSunTime: "8:15 \u2013 18:30",
    lastEntry: "Ultima entrada",
    lastEntryTime: "17:30",
    ticketOffice: "Cierre de taquilla",
    ticketOfficeTime: "17:30",
    monday: "Lunes",
    mondayClosed: "CERRADO",
    note: "Importante: la ultima entrada es a las 17:30, no a las 18:30. El personal comienza a desalojar las salas unos 15 minutos antes del cierre. Si llegas a las 17:30, tendras menos de una hora \u2014 insuficiente para una visita satisfactoria. Planifica llegar al menos 2 horas antes del cierre.",
  },
  holidayClosures: {
    h2: "Cierres festivos 2026",
    p: "La Galeria Uffizi cierra dos dias festivos al ano, ademas de todos los lunes:",
    tableTitle: "Fechas de cierre 2026",
    closures: [
      { type: "Todos los lunes", price: "Cerrado", notes: "Todo el ano" },
      {
        type: "1 de enero (Ano Nuevo)",
        price: "Cerrado",
        notes: "Miercoles",
      },
      { type: "25 de diciembre (Navidad)", price: "Cerrado", notes: "Viernes" },
    ],
    openHolidays:
      "Los demas dias festivos \u2014 Domingo de Pascua, 1 de mayo (Dia del Trabajo), 2 de junio (Dia de la Republica), 15 de agosto (Ferragosto) y 8 de diciembre \u2014 la Galeria Uffizi esta {open} en horario habitual. Sin embargo, estos dias suelen estar muy concurridos: reserva tus entradas con mucha antelacion.",
    freeEntryDay:
      "El 25 de abril (Dia de la Liberacion) es la excepcion que conviene tener en cuenta: la Galeria Uffizi abre y la entrada es gratuita para todos. Los dias de entrada gratuita son los mas concurridos del ano: si puedes, llega a la hora de apertura.",
  },
  extendedHours: {
    h2: "Horarios ampliados y aperturas especiales",
    p: "Durante la temporada alta turistica, la Galeria Uffizi amplia ocasionalmente sus horarios. En los ultimos anos, el museo ha ofrecido aperturas nocturnas algunos martes de verano (generalmente de junio a septiembre), permaneciendo abierto hasta las 22:00. Estas veladas son magicas \u2014 menos gente, temperaturas mas agradables y una luz preciosa a traves de las ventanas. Consulta la web oficial de la Galeria Uffizi cerca de la fecha de tu visita para conocer las aperturas especiales.",
  },
  bestTimes: {
    h2: "Mejores horarios para visitar",
    intro:
      "Despues de haber acompanado a miles de visitantes por la Galeria Uffizi, aqui van mis consejos sinceros sobre el mejor momento:",
    best: {
      h3: "Ideal: 8:15 (apertura)",
      p: "La mejor experiencia posible. El museo esta casi vacio durante la primera hora. Puedes contemplar el Nacimiento de Venus con toda tranquilidad. La Sala Botticelli sin multitudes es una experiencia completamente diferente \u2014 descubriras detalles imposibles de percibir cuando 50 personas se aglomeran. Reserva la franja de las 8:15 y presentate en la {doorLink} antes de las 8:00.",
      doorLinkText: "Puerta 1",
    },
    good: {
      h3: "Bueno: despues de las 16:00",
      p: "Los grupos organizados se marchan hacia las 15:00-15:30. A partir de las 16:00, el museo esta visiblemente mas tranquilo. La luz de media tarde a traves de las ventanas del lado del Arno crea condiciones ideales para la fotografia. Dispondras de 2 horas y media hasta el cierre \u2014 suficiente para ver las obras principales.",
    },
    avoid: {
      h3: "Evitar: 10:00 \u2013 14:00",
      p: "Horas punta. Todos los tours organizados, excursiones escolares y visitas de cruceros confluyen en la Galeria Uffizi en esta franja. La Sala Botticelli puede parecer un vagon de metro en hora punta. Si es tu unica opcion, dirigete primero a las salas 35-90 (menos concurridas) y vuelve a las salas 2-14 despues de las 14:00.",
    },
  },
  bestDays: {
    h2: "Mejores dias de la semana",
    days: [
      {
        label: "Martes y miercoles",
        description:
          "Los dias mas tranquilos. El martes es el primer dia de apertura tras el cierre del lunes, y muchos turistas aun no han llegado.",
      },
      {
        label: "Jueves",
        description:
          "Afluencia moderada. Una buena opcion a mitad de semana.",
      },
      {
        label: "Viernes",
        description:
          "Mas concurrido, los visitantes del fin de semana empiezan a llegar.",
      },
      {
        label: "Sabado y domingo",
        description:
          "Los dias mas concurridos. Si debes visitar en fin de semana, ve a las 8:15.",
      },
      {
        label: "Primer domingo del mes",
        description:
          "Entrada gratuita para la galeria y el Corredor Vasariano. Sigue haciendo falta una entrada nominativa gratuita, y la de los Uffizi solo se recoge en el mostrador de taquilla el mismo dia. Extremadamente concurrido con 3-4 horas de espera. Evitalo salvo que tu presupuesto sea muy ajustado.",
      },
    ],
  },
  bestSeason: {
    h2: "Mejor estacion para visitar",
    intro: "Cada estacion ofrece ventajas diferentes:",
    seasons: [
      {
        label: "Noviembre \u2013 Febrero (temporada baja):",
        description:
          "Menos gente y la visita mas comoda del ano. Florencia esta mas tranquila, los restaurantes son mas faciles de reservar, y podrias tener salas enteras para ti solo.",
      },
      {
        label: "Marzo \u2013 Mayo (primavera):",
        description:
          "Buen tiempo pero afluencia creciente. Reserva las entradas con al menos 2 semanas de antelacion. Abril y la Semana Santa son especialmente concurridos.",
      },
      {
        label: "Junio \u2013 Agosto (verano):",
        description:
          "Maxima afluencia y calor. Posibilidad de aperturas nocturnas. Reserva con la mayor antelacion posible. La visita por la manana es imprescindible.",
      },
      {
        label: "Septiembre \u2013 Octubre (otono):",
        description:
          "La afluencia disminuye a partir de mediados de septiembre. Octubre es uno de los mejores meses \u2014 buen tiempo, menos turistas y los horarios de temporada alta siguen vigentes.",
      },
    ],
  },
  ctaTitle: "Reserva tu franja horaria en los Uffizi",
  faq: [
    {
      q: "Cual es el horario de la Galeria Uffizi en 2026?",
      a: "La Galeria Uffizi esta abierta de martes a domingo, de 8:15 a 18:30. La ultima entrada es a las 17:30. El museo cierra todos los lunes, ademas del 1 de enero y el 25 de diciembre.",
    },
    {
      q: "Esta abierta la Galeria Uffizi los lunes?",
      a: "No. La Galeria Uffizi esta cerrada todos los lunes, durante todo el ano, sin excepciones. Planifica tu visita de martes a domingo.",
    },
    {
      q: "Cual es el mejor momento para visitar la Galeria Uffizi?",
      a: "El mejor momento es a las 8:15 (apertura), un martes o miercoles. El museo esta casi vacio durante la primera hora. La tarde (despues de las 16:00) tambien es un buen momento. Evita la franja de 10:00 a 14:00, cuando los grupos organizados dominan.",
    },
    {
      q: "Esta abierta la Galeria Uffizi en los dias festivos italianos?",
      a: "Si. La Galeria Uffizi abre en horario habitual el Domingo de Pascua, el 1 de mayo, el 2 de junio, el 15 de agosto y el 8 de diciembre. El 25 de abril (Dia de la Liberacion) tambien abre, con entrada gratuita para todos. Aparte del cierre semanal de los lunes, solo cierra el 1 de enero y el 25 de diciembre: si un dia festivo cae en lunes, la galeria permanece cerrada igualmente.",
    },
    {
      q: "Ofrece la Galeria Uffizi aperturas nocturnas?",
      a: "Durante los meses de verano (generalmente junio-septiembre), la Galeria Uffizi ofrece ocasionalmente aperturas nocturnas los martes hasta las 22:00. Consulta la web oficial cerca de la fecha de tu visita para conocer el calendario vigente.",
    },
    {
      q: "Con cuanta antelacion antes del cierre hay que llegar?",
      a: "Llega al menos 2 horas antes del cierre (antes de las 16:30) para una visita satisfactoria. La ultima entrada es a las 17:30, y el personal comienza a desalojar las salas 15 minutos antes del cierre de las 18:30.",
    },
  ],
};

const content: PageContent<OpeningHoursContent> = { en, it, de, fr, es };

export function getOpeningHoursContent(locale: string): OpeningHoursContent {
  return getContent(content, locale);
}
