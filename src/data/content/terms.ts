type TermsContent = {
  meta: {
    title: string;
    description: string;
  };
  breadcrumb: string;
  h1: string;
  lastUpdated: string;
  disclaimer: {
    title: string;
    text: string;
  };
  sections: {
    title: string;
    paragraphs: string[];
    list?: string[];
  }[];
  contact: {
    title: string;
    text: string;
  };
};

const en: TermsContent = {
  meta: {
    title: "Terms of Service | Visit Uffizi",
    description:
      "Terms of service for VisitUffizi.com - the independent website operated by Florence With Locals S.r.l. providing Uffizi Gallery information, tickets and tour bookings.",
  },
  breadcrumb: "Terms of Service",
  h1: "Terms of Service",
  lastUpdated: "Last updated: March 12, 2026",
  disclaimer: {
    title: "Important Notice",
    text: "This website is operated by Florence With Locals S.r.l. — Via Taddea 35/R, 50123 Florence (FI), Italy · VAT IT07564730484 · Companies Register of Florence no. 07564730484 · REA FI-712305 · Contact: contact@florencewithlocals.com. VisitUffizi.com is an independent website providing information and booking services for the Uffizi Gallery in Florence. We are NOT the official Uffizi Gallery website. This is a commercial website: ticket products are sold by Florence With Locals S.r.l., and we may earn commissions on tour bookings made through partner links.",
  },
  sections: [
    {
      title: "1. Acceptance of Terms",
      paragraphs: [
        "By accessing and using VisitUffizi.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
        "We reserve the right to modify these terms at any time. Your continued use of the website after changes constitutes acceptance of the updated terms.",
      ],
    },
    {
      title: "2. Website Purpose and Nature",
      paragraphs: [
        "VisitUffizi.com is an independent travel information and booking website operated by Florence With Locals S.r.l. that provides:",
      ],
      list: [
        "Information about the Uffizi Gallery in Florence, Italy",
        "Travel tips, visitor guides, and artwork information",
        "Uffizi ticket products sold directly by Florence With Locals S.r.l., and links to third-party partners for guided tours",
        "Advertising through Google AdSense",
        "",
        "We are NOT affiliated with, endorsed by, or officially connected to the Gallerie degli Uffizi, the Italian Ministry of Culture, or the city of Florence.",
      ],
    },
    {
      title: "3. Ticket Sales by Florence With Locals S.r.l.",
      paragraphs: [
        "Uffizi Gallery ticket products offered on this website (for example the reserved timed-entry ticket with digital guide-book app, or with audio guide) are sold directly by Florence With Locals S.r.l., the operator of this website, through its own online checkout (powered by Bokun). When you purchase one of these products, your contract is with Florence With Locals S.r.l., which is responsible for booking confirmation, fulfilment, customer service, cancellations and refunds in accordance with the booking conditions shown at checkout and applicable Italian consumer law (Codice del Consumo, Legislative Decree 206/2005).",
        "Florence With Locals S.r.l. is an independent travel agency and is NOT the Uffizi Galleries' official ticket office. Museum tickets at the base price are available from the museum's own service (b-ticket.com/uffizi). Our ticket products include additional services (reservation handling, digital guide content and customer support) and are priced accordingly; the price shown is the total price including these services.",
      ],
    },
    {
      title: "4. Tour Bookings via Partners and Affiliate Commissions",
      paragraphs: [
        "Guided tours and certain other experiences on this website may be booked through third-party partners such as GetYourGuide, Tiqets or Viator. When you click such a link you are redirected to the partner's website; your contract is with that partner (or the tour operator it represents) and the partner's terms and conditions apply. We are not responsible for fulfilment, refunds, cancellations or customer service for bookings made with partners.",
        "VisitUffizi.com participates in these partners' affiliate programmes and may earn a commission on bookings made through such links, at no additional cost to you. Prices on partner sites may differ from the museum's official prices.",
      ],
    },
    {
      title: "5. Content Accuracy",
      paragraphs: [
        "We strive to provide accurate and up-to-date information about the Uffizi Gallery, including:",
      ],
      list: [
        "Opening hours and ticket prices",
        "Exhibition and artwork information",
        "Visitor guidelines and museum policies",
        "Directions and accessibility information",
        "",
        "However, information may change without notice. We recommend verifying critical information (opening hours, ticket availability, COVID-19 policies) directly with the official Uffizi Gallery website before your visit.",
        "We are not responsible for inaccuracies, outdated information, or changes made by the Uffizi Gallery after publication.",
      ],
    },
    {
      title: "6. Intellectual Property",
      paragraphs: [
        "The content on VisitUffizi.com, including text, images, graphics, logos, and design, is protected by copyright and other intellectual property laws.",
        "Artwork images displayed on our website are in the public domain or used under fair use provisions for educational and informational purposes. We do not claim ownership of artwork images.",
        "You may not reproduce, distribute, modify, or republish content from this website without prior written permission, except for personal, non-commercial use.",
      ],
    },
    {
      title: "7. User Conduct",
      paragraphs: ["You agree NOT to:"],
      list: [
        "Use the website for any illegal or unauthorized purpose",
        "Attempt to gain unauthorized access to our systems",
        "Transmit viruses, malware, or harmful code",
        "Scrape or harvest content using automated tools",
        "Impersonate another person or entity",
        "Interfere with website functionality or other users' access",
      ],
    },
    {
      title: "8. Third-Party Links",
      paragraphs: [
        "Our website contains links to third-party websites (ticket vendors, tour operators, official Uffizi website). These links are provided for convenience.",
        "We are not responsible for the content, privacy practices, or terms of service of third-party websites. Your interactions with these sites are at your own risk.",
      ],
    },
    {
      title: "9. Disclaimer of Warranties",
      paragraphs: [
        "VisitUffizi.com is provided \"as is\" and \"as available\" without warranties of any kind, either express or implied.",
        "We do not guarantee that the website will be error-free, uninterrupted, secure, or free from viruses. We make no warranties regarding the accuracy, reliability, or completeness of content.",
      ],
    },
    {
      title: "10. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, VisitUffizi.com and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:",
      ],
      list: [
        "Use or inability to use the website",
        "Reliance on information provided on the website",
        "Bookings made through affiliate partners",
        "Unauthorized access to your data",
        "Errors, omissions, or inaccuracies in content",
      ],
    },
    {
      title: "11. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless VisitUffizi.com and its operators from any claims, damages, losses, or expenses (including legal fees) arising from your use of the website or violation of these terms.",
      ],
    },
    {
      title: "12. Advertising",
      paragraphs: [
        "Our website displays advertisements through Google AdSense. We do not control ad content and are not responsible for advertiser claims or products.",
        "Ad blockers may affect website functionality. We rely on advertising revenue to maintain this free resource.",
      ],
    },
    {
      title: "13. Governing Law",
      paragraphs: [
        "These Terms of Service are governed by the laws of the jurisdiction where the website operator is based, without regard to conflict of law provisions.",
        "Any disputes shall be resolved in the courts of that jurisdiction.",
      ],
    },
    {
      title: "14. Severability",
      paragraphs: [
        "If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    text: "If you have questions about these Terms of Service, please contact Florence With Locals S.r.l. at contact@florencewithlocals.com or by post at Via Taddea 35/R, 50123 Florence (FI), Italy.",
  },
};

const it: TermsContent = {
  meta: {
    title: "Termini di Servizio | Visit Uffizi",
    description:
      "Termini di servizio per VisitUffizi.com - il sito indipendente gestito da Florence With Locals S.r.l. con informazioni sulla Galleria degli Uffizi, biglietti e prenotazione di tour.",
  },
  breadcrumb: "Termini di Servizio",
  h1: "Termini di Servizio",
  lastUpdated: "Ultimo aggiornamento: 12 marzo 2026",
  disclaimer: {
    title: "Avviso Importante",
    text: "Questo sito è gestito da Florence With Locals S.r.l. — Via Taddea 35/R, 50123 Firenze (FI), Italia · P.IVA IT07564730484 · Registro Imprese di Firenze n. 07564730484 · REA FI-712305 · Contatto: contact@florencewithlocals.com. VisitUffizi.com è un sito indipendente che fornisce informazioni e servizi di prenotazione per la Galleria degli Uffizi di Firenze. NON siamo il sito ufficiale della Galleria degli Uffizi. Questo è un sito commerciale: i prodotti biglietto sono venduti da Florence With Locals S.r.l. e possiamo ricevere commissioni sulle prenotazioni di tour effettuate tramite link dei partner.",
  },
  sections: [
    {
      title: "1. Accettazione dei Termini",
      paragraphs: [
        "Accedendo e utilizzando VisitUffizi.com, accetti e acconsenti a essere vincolato da questi Termini di Servizio. Se non sei d'accordo con questi termini, ti preghiamo di non utilizzare il nostro sito web.",
        "Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Il tuo uso continuato del sito web dopo le modifiche costituisce l'accettazione dei termini aggiornati.",
      ],
    },
    {
      title: "2. Scopo e Natura del Sito Web",
      paragraphs: [
        "VisitUffizi.com è un sito indipendente di informazione turistica e prenotazione gestito da Florence With Locals S.r.l. che fornisce:",
      ],
      list: [
        "Informazioni sulla Galleria degli Uffizi a Firenze, Italia",
        "Consigli di viaggio, guide per visitatori e informazioni sulle opere d'arte",
        "Prodotti biglietto per gli Uffizi venduti direttamente da Florence With Locals S.r.l. e link a partner terzi per le visite guidate",
        "Pubblicità tramite Google AdSense",
        "",
        "NON siamo affiliati, approvati o ufficialmente collegati alle Gallerie degli Uffizi, al Ministero della Cultura italiano o alla città di Firenze.",
      ],
    },
    {
      title: "3. Vendita di Biglietti da parte di Florence With Locals S.r.l.",
      paragraphs: [
        "I prodotti biglietto per la Galleria degli Uffizi offerti su questo sito (ad esempio il biglietto a orario riservato con app guida digitale o con audioguida) sono venduti direttamente da Florence With Locals S.r.l., gestore di questo sito, tramite il proprio sistema di acquisto online (basato su Bokun). Acquistando uno di questi prodotti, il tuo contratto è con Florence With Locals S.r.l., responsabile della conferma della prenotazione, dell'erogazione del servizio, dell'assistenza clienti, delle cancellazioni e dei rimborsi secondo le condizioni di prenotazione mostrate al momento dell'acquisto e la normativa italiana applicabile (Codice del Consumo, D.lgs. 206/2005).",
        "Florence With Locals S.r.l. è un'agenzia di viaggi indipendente e NON è la biglietteria ufficiale delle Gallerie degli Uffizi. I biglietti del museo al prezzo base sono disponibili tramite il servizio ufficiale del museo (b-ticket.com/uffizi). I nostri prodotti biglietto includono servizi aggiuntivi (gestione della prenotazione, contenuti guida digitali e assistenza clienti) e hanno un prezzo corrispondente; il prezzo indicato è il prezzo totale comprensivo di tali servizi.",
      ],
    },
    {
      title: "4. Prenotazione di Tour tramite Partner e Commissioni di Affiliazione",
      paragraphs: [
        "Le visite guidate e alcune altre esperienze presenti su questo sito possono essere prenotate tramite partner terzi come GetYourGuide, Tiqets o Viator. Cliccando su tali link verrai reindirizzato al sito del partner; il tuo contratto è con quel partner (o con l'operatore turistico che rappresenta) e si applicano i termini e le condizioni del partner. Non siamo responsabili dell'erogazione, dei rimborsi, delle cancellazioni o dell'assistenza clienti per le prenotazioni effettuate con i partner.",
        "VisitUffizi.com partecipa ai programmi di affiliazione di questi partner e può ricevere una commissione sulle prenotazioni effettuate tramite tali link, senza costi aggiuntivi per te. I prezzi sui siti dei partner possono differire dai prezzi ufficiali del museo.",
      ],
    },
    {
      title: "5. Precisione dei Contenuti",
      paragraphs: [
        "Ci sforziamo di fornire informazioni accurate e aggiornate sulla Galleria degli Uffizi, tra cui:",
      ],
      list: [
        "Orari di apertura e prezzi dei biglietti",
        "Informazioni su mostre e opere d'arte",
        "Linee guida per i visitatori e politiche del museo",
        "Indicazioni e informazioni sull'accessibilità",
        "",
        "Tuttavia, le informazioni potrebbero cambiare senza preavviso. Ti consigliamo di verificare le informazioni critiche (orari di apertura, disponibilità dei biglietti, politiche COVID-19) direttamente con il sito ufficiale della Galleria degli Uffizi prima della tua visita.",
        "Non siamo responsabili per inesattezze, informazioni obsolete o modifiche apportate dalla Galleria degli Uffizi dopo la pubblicazione.",
      ],
    },
    {
      title: "6. Proprietà Intellettuale",
      paragraphs: [
        "I contenuti su VisitUffizi.com, inclusi testo, immagini, grafici, loghi e design, sono protetti da copyright e altre leggi sulla proprietà intellettuale.",
        "Le immagini delle opere d'arte visualizzate sul nostro sito web sono di pubblico dominio o utilizzate secondo le disposizioni del fair use per scopi educativi e informativi. Non rivendichiamo la proprietà delle immagini delle opere d'arte.",
        "Non puoi riprodurre, distribuire, modificare o ripubblicare contenuti da questo sito web senza previa autorizzazione scritta, ad eccezione dell'uso personale e non commerciale.",
      ],
    },
    {
      title: "7. Condotta dell'Utente",
      paragraphs: ["Accetti di NON:"],
      list: [
        "Utilizzare il sito web per scopi illegali o non autorizzati",
        "Tentare di ottenere accesso non autorizzato ai nostri sistemi",
        "Trasmettere virus, malware o codice dannoso",
        "Raschiare o raccogliere contenuti utilizzando strumenti automatizzati",
        "Impersonare un'altra persona o entità",
        "Interferire con la funzionalità del sito web o l'accesso di altri utenti",
      ],
    },
    {
      title: "8. Link di Terze Parti",
      paragraphs: [
        "Il nostro sito web contiene link a siti web di terze parti (venditori di biglietti, operatori turistici, sito ufficiale degli Uffizi). Questi link sono forniti per comodità.",
        "Non siamo responsabili per i contenuti, le pratiche sulla privacy o i termini di servizio dei siti web di terze parti. Le tue interazioni con questi siti sono a tuo rischio.",
      ],
    },
    {
      title: "9. Esclusione di Garanzie",
      paragraphs: [
        "VisitUffizi.com è fornito \"così com'è\" e \"come disponibile\" senza garanzie di alcun tipo, espresse o implicite.",
        "Non garantiamo che il sito web sarà privo di errori, ininterrotto, sicuro o privo di virus. Non facciamo garanzie riguardo all'accuratezza, affidabilità o completezza dei contenuti.",
      ],
    },
    {
      title: "10. Limitazione di Responsabilità",
      paragraphs: [
        "Nella misura massima consentita dalla legge, VisitUffizi.com e i suoi operatori non saranno responsabili per danni diretti, indiretti, incidentali, consequenziali o punitivi derivanti da:",
      ],
      list: [
        "Uso o impossibilità di utilizzare il sito web",
        "Affidamento su informazioni fornite sul sito web",
        "Prenotazioni effettuate tramite partner affiliati",
        "Accesso non autorizzato ai tuoi dati",
        "Errori, omissioni o inesattezze nei contenuti",
      ],
    },
    {
      title: "11. Indennizzo",
      paragraphs: [
        "Accetti di indennizzare e manlevare VisitUffizi.com e i suoi operatori da qualsiasi reclamo, danno, perdita o spesa (incluse le spese legali) derivanti dal tuo uso del sito web o dalla violazione di questi termini.",
      ],
    },
    {
      title: "12. Pubblicità",
      paragraphs: [
        "Il nostro sito web visualizza annunci pubblicitari tramite Google AdSense. Non controlliamo i contenuti degli annunci e non siamo responsabili per le affermazioni o i prodotti degli inserzionisti.",
        "I blocchi degli annunci potrebbero influire sulla funzionalità del sito web. Ci affidiamo alle entrate pubblicitarie per mantenere questa risorsa gratuita.",
      ],
    },
    {
      title: "13. Legge Applicabile",
      paragraphs: [
        "Questi Termini di Servizio sono regolati dalle leggi della giurisdizione in cui ha sede l'operatore del sito web, senza riguardo alle disposizioni sui conflitti di leggi.",
        "Eventuali controversie saranno risolte nei tribunali di tale giurisdizione.",
      ],
    },
    {
      title: "14. Divisibilità",
      paragraphs: [
        "Se una qualsiasi disposizione di questi termini viene ritenuta non valida o inapplicabile, le disposizioni rimanenti rimarranno pienamente in vigore ed effetto.",
      ],
    },
  ],
  contact: {
    title: "Contattaci",
    text: "Se hai domande su questi Termini di Servizio, contatta Florence With Locals S.r.l. all'indirizzo contact@florencewithlocals.com o per posta a Via Taddea 35/R, 50123 Firenze (FI), Italia.",
  },
};

const de: TermsContent = {
  meta: {
    title: "Nutzungsbedingungen | Visit Uffizi",
    description:
      "Nutzungsbedingungen für VisitUffizi.com - die unabhängige, von Florence With Locals S.r.l. betriebene Website mit Informationen über die Uffizien, Tickets und Tourbuchungen.",
  },
  breadcrumb: "Nutzungsbedingungen",
  h1: "Nutzungsbedingungen",
  lastUpdated: "Zuletzt aktualisiert: 12. März 2026",
  disclaimer: {
    title: "Wichtiger Hinweis",
    text: "Diese Website wird betrieben von Florence With Locals S.r.l. — Via Taddea 35/R, 50123 Florenz (FI), Italien · USt-IdNr. IT07564730484 · Handelsregister Florenz Nr. 07564730484 · REA FI-712305 · Kontakt: contact@florencewithlocals.com. VisitUffizi.com ist eine unabhängige Website, die Informationen und Buchungsdienste für die Uffizien in Florenz bereitstellt. Wir sind NICHT die offizielle Website der Uffizien. Dies ist eine kommerzielle Website: Ticketprodukte werden von Florence With Locals S.r.l. verkauft, und für Tourbuchungen über Partnerlinks können wir Provisionen erhalten.",
  },
  sections: [
    {
      title: "1. Annahme der Bedingungen",
      paragraphs: [
        "Durch den Zugriff auf und die Nutzung von VisitUffizi.com akzeptieren Sie diese Nutzungsbedingungen und erklären sich damit einverstanden, an sie gebunden zu sein. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie bitte unsere Website nicht.",
        "Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Ihre fortgesetzte Nutzung der Website nach Änderungen stellt die Annahme der aktualisierten Bedingungen dar.",
      ],
    },
    {
      title: "2. Zweck und Art der Website",
      paragraphs: [
        "VisitUffizi.com ist eine unabhängige, von Florence With Locals S.r.l. betriebene Reiseinformations- und Buchungswebsite, die Folgendes bietet:",
      ],
      list: [
        "Informationen über die Uffizien in Florenz, Italien",
        "Reisetipps, Besucherführer und Kunstwerkinformationen",
        "Direkt von Florence With Locals S.r.l. verkaufte Uffizien-Ticketprodukte sowie Links zu Drittpartnern für Führungen",
        "Werbung über Google AdSense",
        "",
        "Wir sind NICHT verbunden mit, unterstützt von oder offiziell verbunden mit den Gallerie degli Uffizi, dem italienischen Kulturministerium oder der Stadt Florenz.",
      ],
    },
    {
      title: "3. Ticketverkauf durch Florence With Locals S.r.l.",
      paragraphs: [
        "Die auf dieser Website angebotenen Ticketprodukte für die Uffizien (z. B. das Ticket mit reserviertem Zeitfenster und digitaler Guide-App oder mit Audioguide) werden direkt von Florence With Locals S.r.l., dem Betreiber dieser Website, über den eigenen Online-Checkout (auf Basis von Bokun) verkauft. Beim Kauf eines dieser Produkte kommt Ihr Vertrag mit Florence With Locals S.r.l. zustande, die für Buchungsbestätigung, Leistungserbringung, Kundenservice, Stornierungen und Rückerstattungen gemäß den beim Checkout angezeigten Buchungsbedingungen und dem anwendbaren italienischen Verbraucherrecht (Codice del Consumo, Gesetzesdekret 206/2005) verantwortlich ist.",
        "Florence With Locals S.r.l. ist ein unabhängiges Reisebüro und NICHT die offizielle Ticketstelle der Uffizien. Museumstickets zum Grundpreis sind über den eigenen Dienst des Museums (b-ticket.com/uffizi) erhältlich. Unsere Ticketprodukte enthalten zusätzliche Leistungen (Reservierungsabwicklung, digitale Guide-Inhalte und Kundensupport) und sind entsprechend bepreist; der angezeigte Preis ist der Gesamtpreis einschließlich dieser Leistungen.",
      ],
    },
    {
      title: "4. Tourbuchungen über Partner und Affiliate-Provisionen",
      paragraphs: [
        "Führungen und bestimmte andere Erlebnisse auf dieser Website können über Drittpartner wie GetYourGuide, Tiqets oder Viator gebucht werden. Wenn Sie auf einen solchen Link klicken, werden Sie auf die Website des Partners weitergeleitet; Ihr Vertrag kommt mit diesem Partner (bzw. dem von ihm vertretenen Tourveranstalter) zustande, und es gelten dessen Geschäftsbedingungen. Für Leistungserbringung, Rückerstattungen, Stornierungen oder Kundenservice bei Buchungen über Partner sind wir nicht verantwortlich.",
        "VisitUffizi.com nimmt an den Affiliate-Programmen dieser Partner teil und kann für über solche Links getätigte Buchungen eine Provision erhalten, ohne zusätzliche Kosten für Sie. Die Preise auf Partnerseiten können von den offiziellen Museumspreisen abweichen.",
      ],
    },
    {
      title: "5. Inhaltsgenauigkeit",
      paragraphs: [
        "Wir bemühen uns, genaue und aktuelle Informationen über die Uffizien bereitzustellen, einschließlich:",
      ],
      list: [
        "Öffnungszeiten und Ticketpreise",
        "Ausstellungs- und Kunstwerkinformationen",
        "Besucherrichtlinien und Museumsrichtlinien",
        "Wegbeschreibungen und Informationen zur Barrierefreiheit",
        "",
        "Informationen können sich jedoch ohne Vorankündigung ändern. Wir empfehlen, kritische Informationen (Öffnungszeiten, Ticketverfügbarkeit, COVID-19-Richtlinien) direkt auf der offiziellen Website der Uffizien zu überprüfen, bevor Sie Ihren Besuch planen.",
        "Wir sind nicht verantwortlich für Ungenauigkeiten, veraltete Informationen oder Änderungen, die nach der Veröffentlichung von den Uffizien vorgenommen werden.",
      ],
    },
    {
      title: "6. Geistiges Eigentum",
      paragraphs: [
        "Die Inhalte auf VisitUffizi.com, einschließlich Text, Bilder, Grafiken, Logos und Design, sind durch Urheberrecht und andere Gesetze zum Schutz geistigen Eigentums geschützt.",
        "Auf unserer Website angezeigte Kunstwerkbilder sind gemeinfrei oder werden unter Fair-Use-Bestimmungen für Bildungs- und Informationszwecke verwendet. Wir beanspruchen kein Eigentum an Kunstwerkbildern.",
        "Sie dürfen Inhalte dieser Website ohne vorherige schriftliche Genehmigung nicht reproduzieren, verteilen, modifizieren oder erneut veröffentlichen, außer für den persönlichen, nicht-kommerziellen Gebrauch.",
      ],
    },
    {
      title: "7. Benutzerverhalten",
      paragraphs: ["Sie erklären sich einverstanden, NICHT:"],
      list: [
        "Die Website für illegale oder unbefugte Zwecke zu nutzen",
        "Zu versuchen, unbefugten Zugang zu unseren Systemen zu erhalten",
        "Viren, Malware oder schädlichen Code zu übertragen",
        "Inhalte mit automatisierten Tools zu scrapen oder zu sammeln",
        "Sich als eine andere Person oder Entität auszugeben",
        "Die Website-Funktionalität oder den Zugang anderer Benutzer zu beeinträchtigen",
      ],
    },
    {
      title: "8. Links zu Drittanbietern",
      paragraphs: [
        "Unsere Website enthält Links zu Websites Dritter (Ticketanbieter, Tourveranstalter, offizielle Uffizien-Website). Diese Links werden zur Bequemlichkeit bereitgestellt.",
        "Wir sind nicht verantwortlich für den Inhalt, die Datenschutzpraktiken oder die Nutzungsbedingungen von Websites Dritter. Ihre Interaktionen mit diesen Websites erfolgen auf eigenes Risiko.",
      ],
    },
    {
      title: "9. Haftungsausschluss für Garantien",
      paragraphs: [
        "VisitUffizi.com wird \"wie besehen\" und \"wie verfügbar\" ohne Garantien jeglicher Art, weder ausdrücklich noch stillschweigend, bereitgestellt.",
        "Wir garantieren nicht, dass die Website fehlerfrei, ununterbrochen, sicher oder frei von Viren sein wird. Wir geben keine Garantien hinsichtlich der Genauigkeit, Zuverlässigkeit oder Vollständigkeit der Inhalte.",
      ],
    },
    {
      title: "10. Haftungsbeschränkung",
      paragraphs: [
        "Im größtmöglichen gesetzlich zulässigen Umfang haften VisitUffizi.com und seine Betreiber nicht für direkte, indirekte, zufällige, Folge- oder Strafschäden, die sich ergeben aus:",
      ],
      list: [
        "Nutzung oder Unfähigkeit zur Nutzung der Website",
        "Vertrauen auf auf der Website bereitgestellte Informationen",
        "Über Affiliate-Partner getätigte Buchungen",
        "Unbefugter Zugriff auf Ihre Daten",
        "Fehler, Auslassungen oder Ungenauigkeiten in Inhalten",
      ],
    },
    {
      title: "11. Schadloshaltung",
      paragraphs: [
        "Sie erklären sich damit einverstanden, VisitUffizi.com und seine Betreiber von allen Ansprüchen, Schäden, Verlusten oder Ausgaben (einschließlich Anwaltskosten) freizustellen, die sich aus Ihrer Nutzung der Website oder Verletzung dieser Bedingungen ergeben.",
      ],
    },
    {
      title: "12. Werbung",
      paragraphs: [
        "Unsere Website zeigt Werbung über Google AdSense an. Wir kontrollieren keine Werbeinhalte und sind nicht verantwortlich für Werbeansprüche oder Produkte.",
        "Werbeblocker können die Website-Funktionalität beeinträchtigen. Wir sind auf Werbeeinnahmen angewiesen, um diese kostenlose Ressource zu unterhalten.",
      ],
    },
    {
      title: "13. Anwendbares Recht",
      paragraphs: [
        "Diese Nutzungsbedingungen unterliegen den Gesetzen der Gerichtsbarkeit, in der der Website-Betreiber ansässig ist, ohne Berücksichtigung von Kollisionsnormen.",
        "Alle Streitigkeiten werden vor den Gerichten dieser Gerichtsbarkeit beigelegt.",
      ],
    },
    {
      title: "14. Salvatorische Klausel",
      paragraphs: [
        "Sollte eine Bestimmung dieser Bedingungen für ungültig oder nicht durchsetzbar befunden werden, bleiben die übrigen Bestimmungen in vollem Umfang gültig und wirksam.",
      ],
    },
  ],
  contact: {
    title: "Kontaktieren Sie Uns",
    text: "Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie bitte Florence With Locals S.r.l. unter contact@florencewithlocals.com oder per Post an Via Taddea 35/R, 50123 Florenz (FI), Italien.",
  },
};

const fr: TermsContent = {
  meta: {
    title: "Conditions d'Utilisation | Visit Uffizi",
    description:
      "Conditions d'utilisation pour VisitUffizi.com - le site indépendant exploité par Florence With Locals S.r.l. proposant informations sur la Galerie des Offices, billets et réservation de visites.",
  },
  breadcrumb: "Conditions d'Utilisation",
  h1: "Conditions d'Utilisation",
  lastUpdated: "Dernière mise à jour : 12 mars 2026",
  disclaimer: {
    title: "Avis Important",
    text: "Ce site est exploité par Florence With Locals S.r.l. — Via Taddea 35/R, 50123 Florence (FI), Italie · TVA IT07564730484 · Registre des entreprises de Florence n° 07564730484 · REA FI-712305 · Contact : contact@florencewithlocals.com. VisitUffizi.com est un site indépendant fournissant des informations et des services de réservation pour la Galerie des Offices à Florence. Nous ne sommes PAS le site officiel de la Galerie des Offices. Il s'agit d'un site commercial : les produits billetterie sont vendus par Florence With Locals S.r.l., et nous pouvons percevoir des commissions sur les réservations de visites effectuées via des liens partenaires.",
  },
  sections: [
    {
      title: "1. Acceptation des Conditions",
      paragraphs: [
        "En accédant et en utilisant VisitUffizi.com, vous acceptez et consentez à être lié par ces Conditions d'Utilisation. Si vous n'êtes pas d'accord avec ces conditions, veuillez ne pas utiliser notre site web.",
        "Nous nous réservons le droit de modifier ces conditions à tout moment. Votre utilisation continue du site web après les modifications constitue l'acceptation des conditions mises à jour.",
      ],
    },
    {
      title: "2. Objectif et Nature du Site Web",
      paragraphs: [
        "VisitUffizi.com est un site indépendant d'information touristique et de réservation exploité par Florence With Locals S.r.l. qui fournit :",
      ],
      list: [
        "Des informations sur la Galerie des Offices à Florence, Italie",
        "Des conseils de voyage, des guides pour visiteurs et des informations sur les œuvres d'art",
        "Des produits billetterie pour les Offices vendus directement par Florence With Locals S.r.l., et des liens vers des partenaires tiers pour les visites guidées",
        "De la publicité via Google AdSense",
        "",
        "Nous ne sommes PAS affiliés, approuvés ou officiellement connectés aux Gallerie degli Uffizi, au Ministère de la Culture italien ou à la ville de Florence.",
      ],
    },
    {
      title: "3. Vente de Billets par Florence With Locals S.r.l.",
      paragraphs: [
        "Les produits billetterie pour la Galerie des Offices proposés sur ce site (par exemple le billet à horaire réservé avec appli guide numérique ou avec audioguide) sont vendus directement par Florence With Locals S.r.l., exploitant de ce site, via son propre système de paiement en ligne (propulsé par Bokun). Lorsque vous achetez l'un de ces produits, votre contrat est conclu avec Florence With Locals S.r.l., responsable de la confirmation de réservation, de l'exécution, du service client, des annulations et des remboursements conformément aux conditions de réservation affichées lors du paiement et au droit italien de la consommation applicable (Codice del Consumo, décret législatif 206/2005).",
        "Florence With Locals S.r.l. est une agence de voyages indépendante et n'est PAS la billetterie officielle des Galeries des Offices. Les billets du musée au tarif de base sont disponibles auprès du service officiel du musée (b-ticket.com/uffizi). Nos produits billetterie incluent des services supplémentaires (gestion de la réservation, contenu de guide numérique et assistance client) et sont tarifés en conséquence ; le prix affiché est le prix total incluant ces services.",
      ],
    },
    {
      title: "4. Réservation de Visites via des Partenaires et Commissions d'Affiliation",
      paragraphs: [
        "Les visites guidées et certaines autres expériences présentées sur ce site peuvent être réservées via des partenaires tiers tels que GetYourGuide, Tiqets ou Viator. En cliquant sur un tel lien, vous êtes redirigé vers le site du partenaire ; votre contrat est conclu avec ce partenaire (ou l'opérateur qu'il représente) et les conditions générales du partenaire s'appliquent. Nous ne sommes pas responsables de l'exécution, des remboursements, des annulations ou du service client pour les réservations effectuées auprès de partenaires.",
        "VisitUffizi.com participe aux programmes d'affiliation de ces partenaires et peut percevoir une commission sur les réservations effectuées via ces liens, sans frais supplémentaires pour vous. Les prix sur les sites partenaires peuvent différer des prix officiels du musée.",
      ],
    },
    {
      title: "5. Précision du Contenu",
      paragraphs: [
        "Nous nous efforçons de fournir des informations précises et à jour sur la Galerie des Offices, notamment :",
      ],
      list: [
        "Heures d'ouverture et prix des billets",
        "Informations sur les expositions et les œuvres d'art",
        "Directives pour les visiteurs et politiques du musée",
        "Itinéraires et informations sur l'accessibilité",
        "",
        "Cependant, les informations peuvent changer sans préavis. Nous vous recommandons de vérifier les informations critiques (heures d'ouverture, disponibilité des billets, politiques COVID-19) directement sur le site officiel de la Galerie des Offices avant votre visite.",
        "Nous ne sommes pas responsables des inexactitudes, des informations obsolètes ou des modifications apportées par la Galerie des Offices après publication.",
      ],
    },
    {
      title: "6. Propriété Intellectuelle",
      paragraphs: [
        "Le contenu de VisitUffizi.com, y compris le texte, les images, les graphiques, les logos et le design, est protégé par le droit d'auteur et d'autres lois sur la propriété intellectuelle.",
        "Les images d'œuvres d'art affichées sur notre site web sont dans le domaine public ou utilisées selon les dispositions d'utilisation équitable à des fins éducatives et informatives. Nous ne revendiquons pas la propriété des images d'œuvres d'art.",
        "Vous ne pouvez pas reproduire, distribuer, modifier ou republier le contenu de ce site web sans autorisation écrite préalable, sauf pour un usage personnel et non commercial.",
      ],
    },
    {
      title: "7. Conduite de l'Utilisateur",
      paragraphs: ["Vous acceptez de NE PAS :"],
      list: [
        "Utiliser le site web à des fins illégales ou non autorisées",
        "Tenter d'obtenir un accès non autorisé à nos systèmes",
        "Transmettre des virus, des logiciels malveillants ou du code nuisible",
        "Extraire ou collecter du contenu à l'aide d'outils automatisés",
        "Usurper l'identité d'une autre personne ou entité",
        "Interférer avec les fonctionnalités du site web ou l'accès d'autres utilisateurs",
      ],
    },
    {
      title: "8. Liens Tiers",
      paragraphs: [
        "Notre site web contient des liens vers des sites web tiers (vendeurs de billets, opérateurs de visites, site officiel des Offices). Ces liens sont fournis pour votre commodité.",
        "Nous ne sommes pas responsables du contenu, des pratiques de confidentialité ou des conditions d'utilisation des sites web tiers. Vos interactions avec ces sites sont à vos propres risques.",
      ],
    },
    {
      title: "9. Exclusion de Garanties",
      paragraphs: [
        "VisitUffizi.com est fourni \"tel quel\" et \"tel que disponible\" sans garanties d'aucune sorte, expresses ou implicites.",
        "Nous ne garantissons pas que le site web sera exempt d'erreurs, ininterrompu, sécurisé ou exempt de virus. Nous ne faisons aucune garantie concernant l'exactitude, la fiabilité ou l'exhaustivité du contenu.",
      ],
    },
    {
      title: "10. Limitation de Responsabilité",
      paragraphs: [
        "Dans toute la mesure permise par la loi, VisitUffizi.com et ses opérateurs ne seront pas responsables des dommages directs, indirects, accessoires, consécutifs ou punitifs résultant de :",
      ],
      list: [
        "L'utilisation ou l'impossibilité d'utiliser le site web",
        "La confiance accordée aux informations fournies sur le site web",
        "Les réservations effectuées via des partenaires affiliés",
        "L'accès non autorisé à vos données",
        "Les erreurs, omissions ou inexactitudes dans le contenu",
      ],
    },
    {
      title: "11. Indemnisation",
      paragraphs: [
        "Vous acceptez d'indemniser et de dégager de toute responsabilité VisitUffizi.com et ses opérateurs de toute réclamation, dommage, perte ou dépense (y compris les frais juridiques) résultant de votre utilisation du site web ou de la violation de ces conditions.",
      ],
    },
    {
      title: "12. Publicité",
      paragraphs: [
        "Notre site web affiche des publicités via Google AdSense. Nous ne contrôlons pas le contenu publicitaire et ne sommes pas responsables des revendications ou des produits des annonceurs.",
        "Les bloqueurs de publicités peuvent affecter les fonctionnalités du site web. Nous comptons sur les revenus publicitaires pour maintenir cette ressource gratuite.",
      ],
    },
    {
      title: "13. Loi Applicable",
      paragraphs: [
        "Ces Conditions d'Utilisation sont régies par les lois de la juridiction où l'opérateur du site web est basé, sans égard aux dispositions relatives aux conflits de lois.",
        "Tout litige sera résolu devant les tribunaux de cette juridiction.",
      ],
    },
    {
      title: "14. Divisibilité",
      paragraphs: [
        "Si une disposition de ces conditions est jugée invalide ou inapplicable, les dispositions restantes resteront pleinement en vigueur et en effet.",
      ],
    },
  ],
  contact: {
    title: "Contactez-nous",
    text: "Si vous avez des questions sur ces Conditions d'Utilisation, veuillez contacter Florence With Locals S.r.l. à contact@florencewithlocals.com ou par courrier à Via Taddea 35/R, 50123 Florence (FI), Italie.",
  },
};

const es: TermsContent = {
  meta: {
    title: "Términos de Servicio | Visit Uffizi",
    description:
      "Términos de servicio para VisitUffizi.com - el sitio web independiente gestionado por Florence With Locals S.r.l. con información sobre la Galería Uffizi, entradas y reserva de tours.",
  },
  breadcrumb: "Términos de Servicio",
  h1: "Términos de Servicio",
  lastUpdated: "Última actualización: 12 de marzo de 2026",
  disclaimer: {
    title: "Aviso Importante",
    text: "Este sitio web está gestionado por Florence With Locals S.r.l. — Via Taddea 35/R, 50123 Florencia (FI), Italia · IVA IT07564730484 · Registro Mercantil de Florencia n.º 07564730484 · REA FI-712305 · Contacto: contact@florencewithlocals.com. VisitUffizi.com es un sitio web independiente que proporciona información y servicios de reserva para la Galería Uffizi en Florencia. NO somos el sitio web oficial de la Galería Uffizi. Este es un sitio web comercial: los productos de entradas los vende Florence With Locals S.r.l., y podemos recibir comisiones por las reservas de tours realizadas a través de enlaces de socios.",
  },
  sections: [
    {
      title: "1. Aceptación de los Términos",
      paragraphs: [
        "Al acceder y usar VisitUffizi.com, usted acepta y consiente estar sujeto a estos Términos de Servicio. Si no está de acuerdo con estos términos, por favor no use nuestro sitio web.",
        "Nos reservamos el derecho de modificar estos términos en cualquier momento. Su uso continuado del sitio web después de los cambios constituye la aceptación de los términos actualizados.",
      ],
    },
    {
      title: "2. Propósito y Naturaleza del Sitio Web",
      paragraphs: [
        "VisitUffizi.com es un sitio web independiente de información turística y reservas gestionado por Florence With Locals S.r.l. que proporciona:",
      ],
      list: [
        "Información sobre la Galería Uffizi en Florencia, Italia",
        "Consejos de viaje, guías para visitantes e información sobre obras de arte",
        "Productos de entradas para los Uffizi vendidos directamente por Florence With Locals S.r.l. y enlaces a socios externos para visitas guiadas",
        "Publicidad a través de Google AdSense",
        "",
        "NO estamos afiliados, respaldados o conectados oficialmente con las Gallerie degli Uffizi, el Ministerio de Cultura italiano o la ciudad de Florencia.",
      ],
    },
    {
      title: "3. Venta de Entradas por Florence With Locals S.r.l.",
      paragraphs: [
        "Los productos de entradas para la Galería Uffizi ofrecidos en este sitio web (por ejemplo, la entrada con hora reservada con app guía digital o con audioguía) los vende directamente Florence With Locals S.r.l., operador de este sitio, a través de su propio sistema de compra en línea (basado en Bokun). Al comprar uno de estos productos, su contrato es con Florence With Locals S.r.l., responsable de la confirmación de la reserva, la prestación del servicio, la atención al cliente, las cancelaciones y los reembolsos conforme a las condiciones de reserva mostradas al pagar y a la legislación italiana de consumo aplicable (Codice del Consumo, Decreto Legislativo 206/2005).",
        "Florence With Locals S.r.l. es una agencia de viajes independiente y NO es la taquilla oficial de las Galerías Uffizi. Las entradas del museo al precio base están disponibles en el servicio oficial del museo (b-ticket.com/uffizi). Nuestros productos de entradas incluyen servicios adicionales (gestión de la reserva, contenido de guía digital y atención al cliente) y tienen el precio correspondiente; el precio mostrado es el precio total con estos servicios incluidos.",
      ],
    },
    {
      title: "4. Reserva de Tours a través de Socios y Comisiones de Afiliados",
      paragraphs: [
        "Las visitas guiadas y algunas otras experiencias de este sitio web pueden reservarse a través de socios externos como GetYourGuide, Tiqets o Viator. Al hacer clic en uno de esos enlaces será redirigido al sitio web del socio; su contrato es con ese socio (o con el operador turístico al que representa) y se aplican los términos y condiciones del socio. No somos responsables de la prestación, los reembolsos, las cancelaciones ni la atención al cliente de las reservas realizadas con socios.",
        "VisitUffizi.com participa en los programas de afiliados de estos socios y puede recibir una comisión por las reservas realizadas a través de dichos enlaces, sin coste adicional para usted. Los precios en los sitios de los socios pueden diferir de los precios oficiales del museo.",
      ],
    },
    {
      title: "5. Precisión del Contenido",
      paragraphs: [
        "Nos esforzamos por proporcionar información precisa y actualizada sobre la Galería Uffizi, incluyendo:",
      ],
      list: [
        "Horarios de apertura y precios de entradas",
        "Información sobre exposiciones y obras de arte",
        "Pautas para visitantes y políticas del museo",
        "Direcciones e información de accesibilidad",
        "",
        "Sin embargo, la información puede cambiar sin previo aviso. Recomendamos verificar la información crítica (horarios de apertura, disponibilidad de entradas, políticas de COVID-19) directamente en el sitio web oficial de la Galería Uffizi antes de su visita.",
        "No somos responsables de inexactitudes, información desactualizada o cambios realizados por la Galería Uffizi después de la publicación.",
      ],
    },
    {
      title: "6. Propiedad Intelectual",
      paragraphs: [
        "El contenido de VisitUffizi.com, incluido texto, imágenes, gráficos, logotipos y diseño, está protegido por derechos de autor y otras leyes de propiedad intelectual.",
        "Las imágenes de obras de arte que se muestran en nuestro sitio web son de dominio público o se usan bajo disposiciones de uso justo con fines educativos e informativos. No reclamamos la propiedad de las imágenes de obras de arte.",
        "No puede reproducir, distribuir, modificar o volver a publicar el contenido de este sitio web sin permiso previo por escrito, excepto para uso personal y no comercial.",
      ],
    },
    {
      title: "7. Conducta del Usuario",
      paragraphs: ["Usted acepta NO:"],
      list: [
        "Usar el sitio web con fines ilegales o no autorizados",
        "Intentar obtener acceso no autorizado a nuestros sistemas",
        "Transmitir virus, malware o código dañino",
        "Extraer o recopilar contenido usando herramientas automatizadas",
        "Hacerse pasar por otra persona o entidad",
        "Interferir con la funcionalidad del sitio web o el acceso de otros usuarios",
      ],
    },
    {
      title: "8. Enlaces de Terceros",
      paragraphs: [
        "Nuestro sitio web contiene enlaces a sitios web de terceros (vendedores de entradas, operadores turísticos, sitio web oficial de Uffizi). Estos enlaces se proporcionan para su comodidad.",
        "No somos responsables del contenido, las prácticas de privacidad o los términos de servicio de los sitios web de terceros. Sus interacciones con estos sitios son bajo su propio riesgo.",
      ],
    },
    {
      title: "9. Exclusión de Garantías",
      paragraphs: [
        "VisitUffizi.com se proporciona \"tal cual\" y \"según disponibilidad\" sin garantías de ningún tipo, ya sean expresas o implícitas.",
        "No garantizamos que el sitio web esté libre de errores, sea ininterrumpido, seguro o libre de virus. No hacemos garantías con respecto a la precisión, confiabilidad o integridad del contenido.",
      ],
    },
    {
      title: "10. Limitación de Responsabilidad",
      paragraphs: [
        "En la máxima medida permitida por la ley, VisitUffizi.com y sus operadores no serán responsables de ningún daño directo, indirecto, incidental, consecuente o punitivo que surja de:",
      ],
      list: [
        "Uso o imposibilidad de usar el sitio web",
        "Confianza en la información proporcionada en el sitio web",
        "Reservas realizadas a través de socios afiliados",
        "Acceso no autorizado a sus datos",
        "Errores, omisiones o inexactitudes en el contenido",
      ],
    },
    {
      title: "11. Indemnización",
      paragraphs: [
        "Usted acepta indemnizar y eximir de responsabilidad a VisitUffizi.com y sus operadores de cualquier reclamo, daño, pérdida o gasto (incluidos los honorarios legales) que surjan de su uso del sitio web o la violación de estos términos.",
      ],
    },
    {
      title: "12. Publicidad",
      paragraphs: [
        "Nuestro sitio web muestra publicidad a través de Google AdSense. No controlamos el contenido publicitario y no somos responsables de las afirmaciones o productos de los anunciantes.",
        "Los bloqueadores de anuncios pueden afectar la funcionalidad del sitio web. Dependemos de los ingresos publicitarios para mantener este recurso gratuito.",
      ],
    },
    {
      title: "13. Ley Aplicable",
      paragraphs: [
        "Estos Términos de Servicio se rigen por las leyes de la jurisdicción donde se encuentra el operador del sitio web, sin tener en cuenta las disposiciones sobre conflictos de leyes.",
        "Cualquier disputa se resolverá en los tribunales de esa jurisdicción.",
      ],
    },
    {
      title: "14. Divisibilidad",
      paragraphs: [
        "Si alguna disposición de estos términos se considera inválida o inaplicable, las disposiciones restantes permanecerán en pleno vigor y efecto.",
      ],
    },
  ],
  contact: {
    title: "Contáctenos",
    text: "Si tiene preguntas sobre estos Términos de Servicio, contacte con Florence With Locals S.r.l. en contact@florencewithlocals.com o por correo postal en Via Taddea 35/R, 50123 Florencia (FI), Italia.",
  },
};

const termsTranslations: Record<string, TermsContent> = {
  en,
  it,
  de,
  fr,
  es,
};

export function getTermsContent(locale: string): TermsContent {
  return termsTranslations[locale] || en;
}
