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
    title: "Uffizi Gallery Tickets 2026 | Prices & Timed Entry Booking",
    description:
      "Book Uffizi Gallery tickets from €26 with reserved timed entry & digital audio guide. Full 2026 price guide: €25–€29 standard, reduced & free entry.",
  },
  h1: "Uffizi Gallery Tickets",
  intro:
    "If there's one piece of advice I give every visitor to Florence, it's this: do not show up at the Uffizi without a ticket. I've watched people stand in line for three hours under the July sun, only to find out the afternoon slots were sold out. Booking ahead costs €4 more than the door price — that's the reservation fee — and in return you get a guaranteed entry time and a ticket-office queue you never have to join.",
  ctaTitle: "Uffizi Gallery Reserved Ticket & Digital Guide-Book App",
  priceSection: {
    h2: "Ticket Types & Prices 2026",
    p: "The Uffizi has updated its pricing for 2026. A standard ticket (entry before 4:00 PM) costs €25 on the day or €29 booked in advance — the €4 difference is the reservation fee. Afternoon entry (from 4:00 PM) costs €16 on the day or €20 in advance. All tickets are timed entry. Here's the complete breakdown:",
    tableTitle: "Uffizi Gallery Ticket Prices 2026",
  },
  howToBuy: {
    h2: "How to Buy Uffizi Tickets",
    p: "You have three options for purchasing tickets. Each has its pros and cons, but online pre-booking is by far the smartest choice:",
    options: [
      {
        h3: "1. Online Pre-Booking (Recommended)",
        p: "Book through an independent local agency to get a reserved timed-entry ticket with a digital audio guide. You'll receive a QR code by email — show it on your phone or print it, there's nothing to collect. Walk straight to Door 1 at your reserved time, pass the short security check, and you're in. Available up to several months in advance, and I strongly recommend booking at least 2 weeks ahead during spring and summer.",
      },
      {
        h3: "2. Official Website (b-ticket.com/uffizi)",
        p: "The museum's official booking platform charges the base ticket price plus a €4 reservation fee (€29 total for standard entry). You'll select a timed entry slot. The interface can be slow during peak booking periods, and popular time slots sell out quickly.",
      },
      {
        h3: "3. Buying On-Site (Not Recommended)",
        p: "You can buy tickets at the ticket office on the day of your visit — pay cash at the self-service machines or by card at the staffed counters. A same-day standard ticket costs €25, but all tickets are timed entry, and on busy days (weekends, holidays, rainy days when outdoor plans change) the next available slot may be hours away — or the day can sell out entirely. Everyone enters through Door 1.",
      },
    ],
  },
  freeEntry: {
    h2: "Free Entry Days",
    p: "The Uffizi offers free admission on the first Sunday of every month, and so does the Vasari Corridor. A ticket is still required and it is nominative — the visitor's name is on it. The Uffizi's free ticket is issued only at the ticket-office counter on the day and cannot be booked online; the Vasari Corridor's must be booked online in advance, or picked up at the ticket office on the day if a spot is still available. In practice, these days are incredibly crowded — lines can exceed 4 hours, and the galleries feel packed. If you visit on a free Sunday, arrive by 7:30 AM. Otherwise, I'd recommend paying for a regular ticket on a quieter day for a far better experience.",
  },
  skipLine: {
    h2: "Timed Entry: How It Works",
    p: "Since September 2025, under the new CoopCulture management, every Uffizi ticket is a timed-entry ticket and everyone enters through Door 1 — the old voucher-exchange point at Door 3 no longer operates, and there are no paper vouchers. When you book, you receive a QR code by email with a specific entry time (e.g., 10:00-10:15 AM). Show it on your phone (or printed) at Door 1, pass the short security screening that applies to all visitors, and you're inside.",
    link: "Complete timed-entry guide →",
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
      a: "A standard ticket (entry before 4:00 PM) costs €25 on the day or €29 in advance. Afternoon entry (from 4:00 PM) is €16 on the day or €20 in advance. EU citizens aged 18-25 pay €2. Under 18 from any country is free. Reserved timed-entry tickets with a digital audio guide start from €26 online.",
    },
    {
      q: "Can I buy Uffizi tickets at the door?",
      a: "Yes — pay cash at the self-service machines or by card at the staffed counters. A same-day standard ticket costs €25, but entry is timed and busy days can sell out, so pre-booking is strongly recommended. Everyone enters through Door 1.",
    },
    {
      q: "Can I still skip the line at the Uffizi?",
      a: "There is no separate skip-the-line ticket anymore — all tickets are timed entry. With a reserved slot you skip the ticket-office queue: go straight to Door 1 at your entry time, show the QR code from your booking email, and pass the short security check that applies to everyone.",
    },
    {
      q: "Can I get a refund on Uffizi tickets?",
      a: "Most pre-booked tickets offer free cancellation up to 24 hours before your visit. Check the cancellation policy when booking. Official museum tickets from b-ticket.com are generally non-refundable.",
    },
    {
      q: "Is the Uffizi ever free?",
      a: "Yes, on the first Sunday of every month — the Vasari Corridor is free that day too. You still need a free nominative ticket: for the Uffizi, only from the ticket-office counter on the day (it cannot be booked online); for the corridor, booked online in advance or from the counter if a spot remains. These days are extremely crowded with waits of 3-4 hours, so most visitors have a better experience paying for a regular ticket on a quieter day.",
    },
    {
      q: "Do children need tickets for the Uffizi?",
      a: "Children under 18 enter free regardless of nationality, but they still need a free nominative ticket — the name on the ticket must match their ID. They also pass through the security check at Door 1 like everyone else.",
    },
  ],
};

const it: TicketsContent = {
  meta: {
    title: "Biglietti Galleria degli Uffizi 2026 | Prezzi e Prenotazione",
    description:
      "Acquista biglietti Uffizi da €26 con ingresso a orario prestabilito e audioguida digitale. Guida prezzi 2026: €25–€29 standard, ridotti e gratuiti.",
  },
  h1: "Biglietti Galleria degli Uffizi",
  intro:
    "Se c'è un consiglio che do a ogni visitatore di Firenze, è questo: non presentarti agli Uffizi senza biglietto. Ho visto persone fare tre ore di coda sotto il sole di luglio, per poi scoprire che le fasce pomeridiane erano esaurite. Prenotare in anticipo costa €4 in più rispetto alla biglietteria — è il diritto di prenotazione — e in cambio hai un orario di ingresso garantito e la fila alla biglietteria non la fai mai.",
  ctaTitle: "Biglietto Riservato Galleria degli Uffizi e App Guida Digitale",
  priceSection: {
    h2: "Tipologie di Biglietti e Prezzi 2026",
    p: "Gli Uffizi hanno aggiornato le tariffe per il 2026. Il biglietto standard (ingresso prima delle 16:00) costa €25 in giornata o €29 in prevendita — la differenza di €4 è il diritto di prenotazione. L'ingresso pomeridiano (dalle 16:00) costa €16 in giornata o €20 in prevendita. Tutti i biglietti sono a orario prestabilito. Ecco il riepilogo completo:",
    tableTitle: "Prezzi Biglietti Uffizi 2026",
  },
  howToBuy: {
    h2: "Come Acquistare i Biglietti per gli Uffizi",
    p: "Hai tre opzioni per acquistare i biglietti. Ognuna ha pro e contro, ma la prenotazione online è di gran lunga la scelta più intelligente:",
    options: [
      {
        h3: "1. Prenotazione Online (Consigliata)",
        p: "Prenota tramite un'agenzia locale indipendente per ottenere un biglietto con ingresso a orario prestabilito e audioguida digitale. Riceverai un QR code via email — mostralo sul telefono o stampalo, non c'è nulla da ritirare. Vai direttamente alla Porta 1 all'orario prenotato, supera il rapido controllo di sicurezza e sei dentro. Disponibile con mesi di anticipo: consiglio di prenotare almeno 2 settimane prima in primavera e in estate.",
      },
      {
        h3: "2. Sito Ufficiale (b-ticket.com/uffizi)",
        p: "La piattaforma ufficiale del museo applica il prezzo base del biglietto più €4 di diritto di prenotazione (€29 in totale per l'ingresso standard). Selezionerai una fascia oraria. L'interfaccia può essere lenta nei periodi di picco e le fasce più richieste si esauriscono rapidamente.",
      },
      {
        h3: "3. Acquisto in Sede (Sconsigliato)",
        p: "Puoi acquistare i biglietti in biglietteria il giorno stesso — in contanti alle casse automatiche o con carta agli sportelli con personale. Il biglietto standard in giornata costa €25, ma l'ingresso è a orario prestabilito e nei giorni di punta (weekend, festivi, giornate di pioggia quando i piani all'aperto saltano) la prima fascia disponibile può essere a ore di distanza — o i posti possono esaurirsi del tutto. Tutti entrano dalla Porta 1.",
      },
    ],
  },
  freeEntry: {
    h2: "Giornate ad Ingresso Gratuito",
    p: "Gli Uffizi offrono l'ingresso gratuito la prima domenica di ogni mese, e lo stesso vale per il Corridoio Vasariano. Il biglietto serve comunque ed è nominativo: riporta il nome del visitatore. Quello gratuito degli Uffizi si ritira solo allo sportello della biglietteria il giorno stesso e non è prenotabile online; quello del Corridoio Vasariano va invece prenotato online in anticipo, oppure ritirato in biglietteria il giorno stesso se resta ancora posto. In pratica, queste giornate sono incredibilmente affollate — la coda può superare le 4 ore e le sale sono pienissime. Se visiti in una domenica gratuita, arriva entro le 7:30. Altrimenti, ti consiglio di pagare il biglietto in un giorno più tranquillo per un'esperienza decisamente migliore.",
  },
  skipLine: {
    h2: "Ingresso a Orario: Come Funziona",
    p: "Da settembre 2025, con la nuova gestione CoopCulture, ogni biglietto degli Uffizi è a orario prestabilito e tutti entrano dalla Porta 1 — il vecchio punto di cambio voucher alla Porta 3 non è più operativo e non esistono voucher cartacei. Quando prenoti, ricevi un QR code via email con un orario di ingresso specifico (es. 10:00-10:15). Mostralo sul telefono (o stampato) alla Porta 1, supera il breve controllo di sicurezza previsto per tutti i visitatori e sei dentro.",
    link: "Guida completa all'ingresso a orario →",
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
      a: "Il biglietto standard (ingresso prima delle 16:00) costa €25 in giornata o €29 in prevendita. L'ingresso pomeridiano (dalle 16:00) costa €16 in giornata o €20 in prevendita. I cittadini UE tra 18 e 25 anni pagano €2. I minori di 18 anni di qualsiasi nazionalità entrano gratis. I biglietti con ingresso a orario prestabilito e audioguida digitale partono da €26 online.",
    },
    {
      q: "Posso comprare i biglietti per gli Uffizi in cassa?",
      a: "Sì — in contanti alle casse automatiche o con carta agli sportelli con personale. Il biglietto standard in giornata costa €25, ma l'ingresso è a orario e nei giorni più affollati i posti possono esaurirsi: la prenotazione anticipata è fortemente consigliata. Tutti entrano dalla Porta 1.",
    },
    {
      q: "Posso ancora saltare la fila agli Uffizi?",
      a: "Non esiste più un biglietto salta fila separato — tutti i biglietti sono a orario prestabilito. Con una fascia oraria riservata salti la fila alla biglietteria: vai direttamente alla Porta 1 all'orario di ingresso, mostra il QR code ricevuto via email e supera il breve controllo di sicurezza previsto per tutti.",
    },
    {
      q: "Posso ottenere un rimborso sui biglietti degli Uffizi?",
      a: "La maggior parte dei biglietti prenotati offre la cancellazione gratuita fino a 24 ore prima della visita. Verifica le condizioni di cancellazione al momento della prenotazione. I biglietti ufficiali del museo da b-ticket.com sono generalmente non rimborsabili.",
    },
    {
      q: "Gli Uffizi sono mai gratuiti?",
      a: "Sì, la prima domenica di ogni mese — quel giorno è gratuito anche il Corridoio Vasariano. Serve comunque un biglietto nominativo gratuito: per gli Uffizi si ritira solo allo sportello della biglietteria il giorno stesso e non è prenotabile online; per il corridoio va prenotato online in anticipo, oppure ritirato in biglietteria se resta posto. Queste giornate sono estremamente affollate, con attese di 3-4 ore: la maggior parte dei visitatori vive un'esperienza migliore pagando il biglietto in un giorno più tranquillo.",
    },
    {
      q: "I bambini hanno bisogno del biglietto per gli Uffizi?",
      a: "I minori di 18 anni entrano gratis indipendentemente dalla nazionalità, ma serve comunque un biglietto nominativo gratuito — il nome sul biglietto deve corrispondere al documento. Devono inoltre passare il controllo di sicurezza alla Porta 1 come tutti.",
    },
  ],
};

const de: TicketsContent = {
  meta: {
    title: "Uffizi Galerie Tickets 2026 | Preise & Zeitfenster buchen",
    description:
      "Uffizi Tickets ab €26 mit Zeitfenster und digitalem Audioguide buchen. Alle Preise 2026: €25–€29 Standard, ermäßigter und freier Eintritt, plus Spartipps.",
  },
  h1: "Uffizi Galerie Tickets",
  intro:
    "Wenn es einen Rat gibt, den ich jedem Florenz-Besucher gebe, dann diesen: Gehen Sie nicht ohne Ticket zu den Uffizien. Ich habe erlebt, wie Besucher drei Stunden in der Juli-Sonne angestanden haben — nur um dann zu erfahren, dass die Nachmittagsfenster ausverkauft waren. Eine Vorausbuchung kostet €4 mehr als an der Tageskasse — das ist die Reservierungsgebühr — und dafür haben Sie eine feste Eintrittszeit und müssen sich gar nicht erst an der Kasse anstellen.",
  ctaTitle: "Uffizi Galerie Reserviertes Ticket & Digitale Guide-App",
  priceSection: {
    h2: "Ticketarten & Preise 2026",
    p: "Die Uffizien haben ihre Preise für 2026 aktualisiert. Das Standardticket (Einlass vor 16:00 Uhr) kostet €25 am Besuchstag oder €29 im Vorverkauf — die Differenz von €4 ist die Reservierungsgebühr. Der Nachmittagseintritt (ab 16:00 Uhr) kostet €16 am Besuchstag oder €20 im Vorverkauf. Alle Tickets sind Zeitfenster-Tickets. Hier die vollständige Übersicht:",
    tableTitle: "Uffizi Galerie Ticketpreise 2026",
  },
  howToBuy: {
    h2: "So kaufen Sie Uffizi-Tickets",
    p: "Sie haben drei Möglichkeiten, Tickets zu erwerben. Jede hat Vor- und Nachteile, aber die Online-Vorausbuchung ist mit Abstand die beste Wahl:",
    options: [
      {
        h3: "1. Online-Vorausbuchung (Empfohlen)",
        p: "Buchen Sie über eine unabhängige lokale Agentur ein Ticket mit Zeitfenster und digitalem Audioguide. Sie erhalten einen QR-Code per E-Mail — zeigen Sie ihn auf dem Handy vor oder drucken Sie ihn aus, es muss nichts abgeholt werden. Gehen Sie zu Ihrer reservierten Zeit direkt zu Eingang 1, passieren Sie die kurze Sicherheitskontrolle, und schon sind Sie drin. Buchbar bis zu mehrere Monate im Voraus — in der Frühlings- und Sommersaison empfehle ich, mindestens 2 Wochen vorher zu buchen.",
      },
      {
        h3: "2. Offizielle Website (b-ticket.com/uffizi)",
        p: "Die offizielle Buchungsplattform des Museums berechnet den regulären Ticketpreis plus €4 Reservierungsgebühr (insgesamt €29 für den Standardeintritt). Sie wählen ein Eintrittszeitfenster. Die Oberfläche kann in Stoßzeiten langsam sein, und beliebte Zeitfenster sind schnell ausverkauft.",
      },
      {
        h3: "3. Kauf vor Ort (Nicht empfohlen)",
        p: "Sie können Tickets am Besuchstag an der Kasse kaufen — bar an den Selbstbedienungsautomaten oder mit Karte an den besetzten Schaltern. Das Standardticket kostet am Besuchstag €25, aber der Einlass erfolgt nur mit Zeitfenster, und an stark frequentierten Tagen (Wochenenden, Feiertage, Regentage, wenn Outdoor-Pläne ins Wasser fallen) kann das nächste freie Zeitfenster Stunden entfernt sein — oder der Tag ist komplett ausverkauft. Alle Besucher betreten das Museum durch Eingang 1.",
      },
    ],
  },
  freeEntry: {
    h2: "Tage mit freiem Eintritt",
    p: "Die Uffizien bieten am ersten Sonntag jedes Monats freien Eintritt, ebenso der Vasarikorridor. Ein Ticket ist trotzdem nötig und personalisiert: Der Name des Besuchers steht darauf. Das kostenlose Uffizien-Ticket gibt es ausschliesslich am Schalter der Ticketkasse am Tag selbst und ist online nicht buchbar; das Ticket für den Vasarikorridor muss dagegen online im Voraus gebucht oder am Tag selbst an der Kasse abgeholt werden, sofern noch ein Platz frei ist. In der Praxis sind diese Tage unglaublich überfüllt — die Warteschlange kann über 4 Stunden betragen und die Säle sind rappelvoll. Wenn Sie an einem kostenlosen Sonntag kommen, seien Sie spätestens um 7:30 Uhr vor Ort. Ansonsten rate ich Ihnen, ein reguläres Ticket an einem ruhigeren Tag zu kaufen — das Erlebnis ist unvergleichlich besser.",
  },
  skipLine: {
    h2: "Zeitfenster-Eintritt: So funktioniert es",
    p: "Seit September 2025 ist unter der neuen CoopCulture-Verwaltung jedes Uffizi-Ticket ein Zeitfenster-Ticket, und alle Besucher betreten das Museum durch Eingang 1 — die alte Voucher-Umtauschstelle an Eingang 3 ist nicht mehr in Betrieb, Papier-Voucher gibt es nicht mehr. Bei der Buchung erhalten Sie einen QR-Code per E-Mail mit einer festen Eintrittszeit (z. B. 10:00–10:15 Uhr). Zeigen Sie ihn auf dem Handy (oder ausgedruckt) an Eingang 1 vor, durchlaufen Sie die kurze Sicherheitskontrolle, die für alle gilt — und schon sind Sie drin.",
    link: "Vollständiger Ratgeber zum Zeitfenster-Eintritt →",
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
      a: "Das Standardticket (Einlass vor 16:00 Uhr) kostet €25 am Besuchstag oder €29 im Vorverkauf. Der Nachmittagseintritt (ab 16:00 Uhr) kostet €16 am Besuchstag oder €20 im Vorverkauf. EU-Bürger zwischen 18 und 25 Jahren zahlen €2. Unter 18 Jahren ist der Eintritt unabhängig von der Nationalität kostenlos. Tickets mit Zeitfenster und digitalem Audioguide gibt es ab €26 online.",
    },
    {
      q: "Kann ich Uffizi-Tickets an der Tageskasse kaufen?",
      a: "Ja — bar an den Selbstbedienungsautomaten oder mit Karte an den besetzten Schaltern. Das Standardticket kostet am Besuchstag €25, aber der Einlass ist zeitgebunden und an stark besuchten Tagen kann das Museum ausverkauft sein — eine Vorausbuchung wird daher dringend empfohlen. Alle betreten das Museum durch Eingang 1.",
    },
    {
      q: "Kann ich an den Uffizien noch die Warteschlange überspringen?",
      a: "Ein separates Ohne-Anstehen-Ticket gibt es nicht mehr — alle Tickets sind Zeitfenster-Tickets. Mit einem reservierten Zeitfenster umgehen Sie die Warteschlange an der Kasse: Gehen Sie zu Ihrer Eintrittszeit direkt zu Eingang 1, zeigen Sie den QR-Code aus Ihrer Buchungsbestätigung vor und passieren Sie die kurze Sicherheitskontrolle, die für alle Besucher gilt.",
    },
    {
      q: "Kann ich Uffizi-Tickets stornieren?",
      a: "Die meisten vorab gebuchten Tickets bieten eine kostenlose Stornierung bis 24 Stunden vor dem Besuch. Prüfen Sie die Stornierungsbedingungen bei der Buchung. Offizielle Museumstickets über b-ticket.com sind in der Regel nicht erstattungsfähig.",
    },
    {
      q: "Gibt es freien Eintritt in die Uffizien?",
      a: "Ja, am ersten Sonntag jedes Monats — an diesem Tag ist auch der Vasarikorridor kostenlos. Ein kostenloses personalisiertes Ticket ist trotzdem nötig: für die Uffizien nur am Schalter der Ticketkasse am Tag selbst (online nicht buchbar), für den Korridor online im Voraus oder an der Kasse, sofern noch ein Platz frei ist. Diese Tage sind extrem überlaufen mit Wartezeiten von 3–4 Stunden. Die meisten Besucher haben ein deutlich besseres Erlebnis, wenn Sie ein reguläres Ticket an einem ruhigeren Tag kaufen.",
    },
    {
      q: "Brauchen Kinder ein Ticket für die Uffizi Galerie?",
      a: "Kinder und Jugendliche unter 18 Jahren haben freien Eintritt, unabhängig von der Nationalität — sie benötigen aber ein kostenloses personalisiertes Ticket, dessen Name mit dem Ausweis übereinstimmen muss. Sie müssen außerdem wie alle Besucher die Sicherheitskontrolle an Eingang 1 durchlaufen.",
    },
  ],
};

const fr: TicketsContent = {
  meta: {
    title: "Billets Galerie des Offices 2026 | Tarifs et Réservation",
    description:
      "Réservez vos billets Offices dès 26 € : entrée à horaire réservé et audioguide numérique. Guide complet des tarifs 2026 : 25–29 € standard, réduits et gratuits.",
  },
  h1: "Billets Galerie des Offices",
  intro:
    "S'il y a un conseil que je donne à chaque visiteur de Florence, c'est celui-ci : ne vous présentez pas aux Offices sans billet. J'ai vu des gens faire la queue pendant trois heures sous le soleil de juillet, pour finalement apprendre que les créneaux de l'après-midi étaient complets. Réserver à l'avance coûte 4 € de plus qu'au guichet — ce sont les frais de réservation — et en échange vous avez une heure d'entrée garantie et vous évitez la file d'attente à la billetterie.",
  ctaTitle: "Billet Réservé Galerie des Offices et Appli Guide Numérique",
  priceSection: {
    h2: "Types de Billets et Tarifs 2026",
    p: "Les Offices ont mis à jour leurs tarifs pour 2026. Le billet standard (entrée avant 16h) coûte 25 € le jour même ou 29 € en prévente — la différence de 4 € correspond aux frais de réservation. L'entrée de l'après-midi (à partir de 16h) coûte 16 € le jour même ou 20 € en prévente. Tous les billets sont à horaire réservé. Voici le détail complet :",
    tableTitle: "Tarifs des Billets Offices 2026",
  },
  howToBuy: {
    h2: "Comment Acheter des Billets pour les Offices",
    p: "Vous avez trois possibilites pour acheter vos billets. Chacune a ses avantages et ses inconvenients, mais la reservation en ligne est de loin le choix le plus judicieux :",
    options: [
      {
        h3: "1. Reservation en Ligne (Recommande)",
        p: "Réservez auprès d'une agence locale indépendante pour obtenir un billet à horaire réservé avec audioguide numérique. Vous recevrez un QR code par e-mail — montrez-le sur votre téléphone ou imprimez-le, il n'y a rien à retirer. Rendez-vous directement à la Porte 1 à l'heure réservée, passez le rapide contrôle de sécurité et vous êtes à l'intérieur. Disponible plusieurs mois à l'avance : je recommande vivement de réserver au moins 2 semaines avant au printemps et en été.",
      },
      {
        h3: "2. Site Officiel (b-ticket.com/uffizi)",
        p: "La plateforme officielle du musee facture le prix de base du billet plus 4 € de frais de réservation (29 € au total pour l'entrée standard). Vous selectionnerez un creneau d'entree. L'interface peut etre lente en periode d'affluence, et les creneaux les plus demandes se vendent rapidement.",
      },
      {
        h3: "3. Achat sur Place (Déconseillé)",
        p: "Vous pouvez acheter des billets à la billetterie le jour de votre visite — en espèces aux bornes automatiques ou par carte aux guichets avec personnel. Le billet standard coûte 25 € le jour même, mais l'entrée se fait uniquement à horaire réservé et, les jours de forte affluence (week-ends, jours fériés, jours de pluie quand les activités en plein air tombent à l'eau), le prochain créneau disponible peut être à plusieurs heures — ou la journée peut afficher complet. Tout le monde entre par la Porte 1.",
      },
    ],
  },
  freeEntry: {
    h2: "Journees a Entree Gratuite",
    p: "Les Offices offrent l'entree gratuite le premier dimanche de chaque mois, tout comme le Corridor de Vasari. Un billet reste obligatoire et il est nominatif : le nom du visiteur y figure. Le billet gratuit des Offices est delivre uniquement au guichet de la billetterie le jour meme et n'est pas reservable en ligne ; celui du Corridor de Vasari doit au contraire etre reserve en ligne a l'avance, ou retire a la billetterie le jour meme s'il reste une place. En pratique, ces journees sont incroyablement bondees : la file d'attente peut depasser 4 heures et les salles sont pleines a craquer. Si vous venez un dimanche gratuit, arrivez avant 7h30. Sinon, je vous conseille de payer un billet un jour plus calme pour une experience bien meilleure.",
  },
  skipLine: {
    h2: "Entrée à Horaire Réservé : Comment Ça Marche",
    p: "Depuis septembre 2025, sous la nouvelle gestion CoopCulture, chaque billet des Offices est un billet à horaire réservé et tout le monde entre par la Porte 1 — l'ancien point d'échange de bons à la Porte 3 ne fonctionne plus, et il n'existe plus de bons papier. Lors de la réservation, vous recevez un QR code par e-mail avec un horaire d'entrée précis (par exemple 10h00-10h15). Présentez-le sur votre téléphone (ou imprimé) à la Porte 1, passez le court contrôle de sécurité qui s'applique à tous les visiteurs, et vous êtes à l'intérieur.",
    link: "Guide complet de l'entrée à horaire réservé →",
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
      a: "Le billet standard (entrée avant 16h) coûte 25 € le jour même ou 29 € en prévente. L'entrée de l'après-midi (à partir de 16h) coûte 16 € le jour même ou 20 € en prévente. Les citoyens de l'UE âgés de 18 à 25 ans paient 2 €. L'entrée est gratuite pour les moins de 18 ans de toute nationalité. Les billets à horaire réservé avec audioguide numérique sont disponibles dès 26 € en ligne.",
    },
    {
      q: "Peut-on acheter des billets sur place aux Offices ?",
      a: "Oui — en espèces aux bornes automatiques ou par carte aux guichets avec personnel. Le billet standard coûte 25 € le jour même, mais l'entrée est à horaire réservé et les jours d'affluence peuvent afficher complet : la réservation en avance est donc fortement recommandée. Tout le monde entre par la Porte 1.",
    },
    {
      q: "Peut-on encore couper la file aux Offices ?",
      a: "Il n'existe plus de billet coupe-file séparé — tous les billets sont à horaire réservé. Avec un créneau réservé, vous évitez la file d'attente à la billetterie : rendez-vous directement à la Porte 1 à votre heure d'entrée, présentez le QR code reçu par e-mail et passez le court contrôle de sécurité qui s'applique à tous.",
    },
    {
      q: "Peut-on obtenir un remboursement des billets des Offices ?",
      a: "La plupart des billets reserves offrent une annulation gratuite jusqu'a 24 heures avant la visite. Verifiez les conditions d'annulation lors de la reservation. Les billets officiels du musee achetes sur b-ticket.com sont generalement non remboursables.",
    },
    {
      q: "Les Offices sont-ils parfois gratuits ?",
      a: "Oui, le premier dimanche de chaque mois — le Corridor de Vasari est gratuit lui aussi ce jour-la. Un billet nominatif gratuit reste obligatoire : pour les Offices, uniquement au guichet de la billetterie le jour meme (pas de reservation en ligne) ; pour le corridor, en ligne a l'avance ou au guichet s'il reste une place. Ces journees sont extremement bondees avec des files d'attente de 3 a 4 heures : la plupart des visiteurs vivent une meilleure experience en payant un billet un jour plus calme.",
    },
    {
      q: "Les enfants ont-ils besoin d'un billet pour les Offices ?",
      a: "Les moins de 18 ans entrent gratuitement quelle que soit leur nationalité, mais il leur faut tout de même un billet nominatif gratuit — le nom sur le billet doit correspondre à la pièce d'identité. Ils passent aussi le contrôle de sécurité à la Porte 1 comme tout le monde.",
    },
  ],
};

const es: TicketsContent = {
  meta: {
    title: "Entradas Galería Uffizi 2026 | Precios y Reserva Online",
    description:
      "Reserva entradas Uffizi desde 26 € con hora reservada y audioguía digital. Guía completa de precios 2026: 25–29 € estándar, reducidas y gratuitas.",
  },
  h1: "Entradas Galeria Uffizi",
  intro:
    "Si hay un consejo que doy a cada visitante de Florencia, es este: no te presentes en los Uffizi sin entrada. He visto a personas hacer cola durante tres horas bajo el sol de julio, solo para descubrir que las franjas de la tarde estaban agotadas. Reservar por adelantado cuesta 4 € más que en taquilla — es la tarifa de reserva — y a cambio tienes una hora de entrada garantizada y te ahorras la cola de la taquilla.",
  ctaTitle: "Entrada Reservada Galería Uffizi y App Guía Digital",
  priceSection: {
    h2: "Tipos de Entradas y Precios 2026",
    p: "Los Uffizi han actualizado sus tarifas para 2026. La entrada estándar (acceso antes de las 16:00) cuesta 25 € el mismo día o 29 € por adelantado — la diferencia de 4 € es la tarifa de reserva. La entrada de tarde (desde las 16:00) cuesta 16 € el mismo día o 20 € por adelantado. Todas las entradas son con hora reservada. Aquí tienes el desglose completo:",
    tableTitle: "Precios de Entradas Uffizi 2026",
  },
  howToBuy: {
    h2: "Como Comprar Entradas para los Uffizi",
    p: "Tienes tres opciones para comprar tus entradas. Cada una tiene sus ventajas e inconvenientes, pero la reserva online es con diferencia la opcion mas inteligente:",
    options: [
      {
        h3: "1. Reserva Online (Recomendado)",
        p: "Reserva a través de una agencia local independiente para obtener una entrada con hora reservada y audioguía digital. Recibirás un código QR por correo electrónico — muéstralo en tu móvil o imprímelo, no hay nada que recoger. Ve directamente a la Puerta 1 a tu hora reservada, pasa el breve control de seguridad y ya estás dentro. Disponible con meses de antelación: recomiendo encarecidamente reservar al menos 2 semanas antes en primavera y verano.",
      },
      {
        h3: "2. Web Oficial (b-ticket.com/uffizi)",
        p: "La plataforma oficial del museo cobra el precio base de la entrada más 4 € de gastos de reserva (29 € en total para la entrada estándar). Seleccionaras una franja horaria de entrada. La interfaz puede ir lenta en periodos de alta demanda, y las franjas mas solicitadas se agotan rapidamente.",
      },
      {
        h3: "3. Compra en Taquilla (No Recomendado)",
        p: "Puedes comprar entradas en la taquilla el mismo día de tu visita — en efectivo en las máquinas de autoservicio o con tarjeta en los mostradores atendidos. La entrada estándar del mismo día cuesta 25 €, pero el acceso es solo con hora reservada y, en días de máxima afluencia (fines de semana, festivos, días de lluvia cuando los planes al aire libre se cancelan), la siguiente franja disponible puede estar a horas de distancia — o el día puede agotarse por completo. Todo el mundo entra por la Puerta 1.",
      },
    ],
  },
  freeEntry: {
    h2: "Dias de Entrada Gratuita",
    p: "Los Uffizi ofrecen entrada gratuita el primer domingo de cada mes, igual que el Corredor Vasariano. La entrada sigue siendo necesaria y es nominativa: lleva el nombre del visitante. La entrada gratuita de los Uffizi se emite unicamente en el mostrador de taquilla el mismo dia y no se puede reservar online; la del Corredor Vasariano, en cambio, debe reservarse online con antelacion o recogerse en taquilla el mismo dia si queda alguna plaza. En la practica, estos dias son increiblemente concurridos: la cola puede superar las 4 horas y las salas estan abarrotadas. Si visitas un domingo gratuito, llega antes de las 7:30. De lo contrario, te recomiendo pagar una entrada en un dia mas tranquilo para una experiencia mucho mejor.",
  },
  skipLine: {
    h2: "Entrada con Hora Reservada: Cómo Funciona",
    p: "Desde septiembre de 2025, con la nueva gestión de CoopCulture, todas las entradas de los Uffizi son con hora reservada y todo el mundo entra por la Puerta 1 — el antiguo punto de canje de bonos de la Puerta 3 ya no funciona y no existen bonos en papel. Al reservar, recibes un código QR por correo electrónico con un horario de entrada concreto (por ejemplo, 10:00-10:15). Muéstralo en tu móvil (o impreso) en la Puerta 1, pasa el breve control de seguridad que se aplica a todos los visitantes y ya estás dentro.",
    link: "Guía completa de la entrada con hora reservada →",
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
      a: "La entrada estándar (acceso antes de las 16:00) cuesta 25 € el mismo día o 29 € por adelantado. La entrada de tarde (desde las 16:00) cuesta 16 € el mismo día o 20 € por adelantado. Los ciudadanos de la UE de 18 a 25 años pagan 2 €. Los menores de 18 años de cualquier nacionalidad entran gratis. Las entradas con hora reservada y audioguía digital están disponibles desde 26 € online.",
    },
    {
      q: "Se pueden comprar entradas en taquilla en los Uffizi?",
      a: "Sí — en efectivo en las máquinas de autoservicio o con tarjeta en los mostradores atendidos. La entrada estándar del mismo día cuesta 25 €, pero el acceso es con hora reservada y los días de mayor afluencia pueden agotarse: se recomienda encarecidamente reservar con antelación. Todo el mundo entra por la Puerta 1.",
    },
    {
      q: "Se puede seguir evitando la cola en los Uffizi?",
      a: "Ya no existe una entrada sin colas separada — todas las entradas son con hora reservada. Con una franja reservada evitas la cola de la taquilla: ve directamente a la Puerta 1 a tu hora de entrada, muestra el código QR recibido por correo electrónico y pasa el breve control de seguridad que se aplica a todos.",
    },
    {
      q: "Se puede obtener un reembolso de las entradas de los Uffizi?",
      a: "La mayoria de las entradas reservadas ofrecen cancelacion gratuita hasta 24 horas antes de la visita. Consulta las condiciones de cancelacion al reservar. Las entradas oficiales del museo en b-ticket.com generalmente no son reembolsables.",
    },
    {
      q: "Los Uffizi son alguna vez gratuitos?",
      a: "Si, el primer domingo de cada mes — ese dia el Corredor Vasariano tambien es gratuito. Sigue haciendo falta una entrada nominativa gratuita: para los Uffizi, solo en el mostrador de taquilla el mismo dia (no se puede reservar online); para el corredor, online con antelacion o en taquilla si queda plaza. Esos dias son extremadamente concurridos, con esperas de 3 a 4 horas, asi que la mayoria de los visitantes disfrutan de una experiencia mejor pagando una entrada en un dia mas tranquilo.",
    },
    {
      q: "Los ninos necesitan entrada para los Uffizi?",
      a: "Los menores de 18 años entran gratis independientemente de su nacionalidad, pero necesitan igualmente una entrada nominativa gratuita — el nombre de la entrada debe coincidir con el documento de identidad. Además, pasan el control de seguridad en la Puerta 1 como todo el mundo.",
    },
  ],
};

const content: PageContent<TicketsContent> = { en, it, de, fr, es };

export function getTicketsContent(locale: string): TicketsContent {
  return getContent(content, locale);
}
