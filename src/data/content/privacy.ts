type PrivacyContent = {
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

const en: PrivacyContent = {
  meta: {
    title: "Privacy Policy | Visit Uffizi",
    description:
      "Privacy policy for VisitUffizi.com - the independent website operated by Florence With Locals S.r.l. providing Uffizi Gallery information, tickets and tour bookings.",
  },
  breadcrumb: "Privacy Policy",
  h1: "Privacy Policy",
  lastUpdated: "Last updated: March 12, 2026",
  disclaimer: {
    title: "Important Notice",
    text: "This website is operated by Florence With Locals S.r.l. — Via Taddea 35/R, 50123 Florence (FI), Italy · VAT IT07564730484 · Companies Register of Florence no. 07564730484 · REA FI-712305 · Contact: contact@florencewithlocals.com. VisitUffizi.com is an independent website providing information and booking services for the Uffizi Gallery in Florence. We are NOT the official Uffizi Gallery website. This is a commercial website: ticket products are sold by Florence With Locals S.r.l., and we may earn commissions on tour bookings made through partner links.",
  },
  sections: [
    {
      title: "1. Who We Are",
      paragraphs: [
        "Florence With Locals S.r.l. is the data controller for personal data processed through this website. VisitUffizi.com is an independent travel information and booking website. We provide comprehensive information about the Uffizi Gallery, sell Uffizi ticket products directly (Florence With Locals S.r.l., via our Bokun-powered checkout) and link to third-party partners for guided tours.",
        "We are not affiliated with, endorsed by, or officially connected to the Gallerie degli Uffizi, the Italian Ministry of Culture, or the city of Florence.",
      ],
    },
    {
      title: "2. Information We Collect",
      paragraphs: [
        "When you visit our website, we may collect the following information:",
      ],
      list: [
        "Browser and device information (browser type, operating system, screen resolution)",
        "Usage data (pages visited, time spent, navigation patterns)",
        "Cookies and tracking identifiers (for analytics and advertising)",
        "IP address and approximate geographic location",
        "Referral source (how you found our website)",
      ],
    },
    {
      title: "3. How We Use Your Information",
      paragraphs: [
        "We use collected information for the following purposes:",
      ],
      list: [
        "Improve website functionality and user experience",
        "Analyze traffic patterns and popular content",
        "Deliver targeted advertising through Google AdSense",
        "Track affiliate conversions and commissions",
        "Comply with legal obligations",
        "Prevent fraud and abuse",
      ],
    },
    {
      title: "4. Cookies and Tracking Technologies",
      paragraphs: [
        "We use cookies and similar tracking technologies to enhance your experience:",
      ],
      list: [
        "Essential cookies: Required for website functionality",
        "Analytics cookies: Google Analytics 4 for traffic analysis",
        "Advertising cookies: Google AdSense for personalized ads",
        "Affiliate cookies: Track bookings and attribute commissions",
        "",
        "You can control cookie preferences through your browser settings or our cookie consent banner. Note that disabling cookies may affect website functionality.",
      ],
    },
    {
      title: "5. Third-Party Services",
      paragraphs: [
        "Our website integrates with the following third-party services:",
      ],
      list: [
        "Google Analytics: Traffic analysis and user behavior tracking",
        "Google AdSense: Display advertising",
        "Bokun: online checkout for ticket products sold by Florence With Locals S.r.l. (processes your booking and payment details)",
        "GetYourGuide: Tour booking (affiliate partner)",
        "Tiqets: Ticket booking (affiliate partner)",
        "Viator: Tour booking (affiliate partner)",
        "",
        "These services have their own privacy policies and data practices. When you click affiliate links or book through our partners, you'll be subject to their privacy policies.",
      ],
    },
    {
      title: "6. Affiliate Disclosure",
      paragraphs: [
        "Uffizi ticket products on this website are sold directly by Florence With Locals S.r.l. For guided tours booked through partners (GetYourGuide, Tiqets, Viator and others) via our affiliate links, we earn a commission at no additional cost to you.",
        "These commissions help support the operation and maintenance of this website. Our affiliate relationships do not influence our editorial content or recommendations — we only recommend services we believe provide genuine value to visitors.",
      ],
    },
    {
      title: "7. Data Retention",
      paragraphs: [
        "We retain website analytics data for up to 26 months (Google Analytics default). Cookie data expires according to the specific cookie's lifespan (typically 1-2 years).",
        "You can request deletion of your data at any time by contacting us.",
      ],
    },
    {
      title: "8. Your Rights (GDPR)",
      paragraphs: [
        "If you're located in the European Union, you have the following rights:",
      ],
      list: [
        "Right to access: Request a copy of data we hold about you",
        "Right to rectification: Correct inaccurate data",
        "Right to erasure: Request deletion of your data",
        "Right to restrict processing: Limit how we use your data",
        "Right to data portability: Receive your data in a portable format",
        "Right to object: Object to processing based on legitimate interests",
        "Right to withdraw consent: Withdraw cookie consent at any time",
      ],
    },
    {
      title: "9. Children's Privacy",
      paragraphs: [
        "Our website is not directed at children under 16. We do not knowingly collect personal information from children. If you believe we've collected information from a child, please contact us immediately.",
      ],
    },
    {
      title: "10. International Data Transfers",
      paragraphs: [
        "Your information may be transferred to and processed in countries outside the European Economic Area, including the United States (Google Analytics, Google AdSense). We ensure appropriate safeguards are in place for such transfers.",
      ],
    },
    {
      title: "11. Security",
      paragraphs: [
        "We implement reasonable security measures to protect your information. However, no internet transmission is completely secure. We cannot guarantee absolute security of data transmitted to our website.",
      ],
    },
    {
      title: "12. Changes to This Policy",
      paragraphs: [
        "We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    text: "If you have questions about this privacy policy or wish to exercise your data rights, please contact Florence With Locals S.r.l. at contact@florencewithlocals.com or by post at Via Taddea 35/R, 50123 Florence (FI), Italy.",
  },
};

const it: PrivacyContent = {
  meta: {
    title: "Informativa sulla Privacy | Visit Uffizi",
    description:
      "Informativa sulla privacy per VisitUffizi.com - il sito indipendente gestito da Florence With Locals S.r.l. con informazioni sulla Galleria degli Uffizi, biglietti e prenotazione di tour.",
  },
  breadcrumb: "Informativa sulla Privacy",
  h1: "Informativa sulla Privacy",
  lastUpdated: "Ultimo aggiornamento: 12 marzo 2026",
  disclaimer: {
    title: "Avviso Importante",
    text: "Questo sito è gestito da Florence With Locals S.r.l. — Via Taddea 35/R, 50123 Firenze (FI), Italia · P.IVA IT07564730484 · Registro Imprese di Firenze n. 07564730484 · REA FI-712305 · Contatto: contact@florencewithlocals.com. VisitUffizi.com è un sito indipendente che fornisce informazioni e servizi di prenotazione per la Galleria degli Uffizi di Firenze. NON siamo il sito ufficiale della Galleria degli Uffizi. Questo è un sito commerciale: i prodotti biglietto sono venduti da Florence With Locals S.r.l. e possiamo ricevere commissioni sulle prenotazioni di tour effettuate tramite link dei partner.",
  },
  sections: [
    {
      title: "1. Chi Siamo",
      paragraphs: [
        "Il titolare del trattamento dei dati personali raccolti tramite questo sito è Florence With Locals S.r.l. VisitUffizi.com è un sito indipendente di informazione turistica e prenotazione. Forniamo informazioni complete sulla Galleria degli Uffizi, vendiamo direttamente prodotti biglietto per gli Uffizi (Florence With Locals S.r.l., tramite il nostro sistema di acquisto basato su Bokun) e rimandiamo a partner terzi per le visite guidate.",
        "Non siamo affiliati, approvati o ufficialmente collegati alle Gallerie degli Uffizi, al Ministero della Cultura italiano o alla città di Firenze.",
      ],
    },
    {
      title: "2. Informazioni che Raccogliamo",
      paragraphs: [
        "Quando visiti il nostro sito web, potremmo raccogliere le seguenti informazioni:",
      ],
      list: [
        "Informazioni sul browser e dispositivo (tipo di browser, sistema operativo, risoluzione schermo)",
        "Dati di utilizzo (pagine visitate, tempo trascorso, modelli di navigazione)",
        "Cookie e identificatori di tracciamento (per analisi e pubblicità)",
        "Indirizzo IP e posizione geografica approssimativa",
        "Fonte di riferimento (come hai trovato il nostro sito web)",
      ],
    },
    {
      title: "3. Come Utilizziamo le Tue Informazioni",
      paragraphs: [
        "Utilizziamo le informazioni raccolte per i seguenti scopi:",
      ],
      list: [
        "Migliorare la funzionalità del sito web e l'esperienza utente",
        "Analizzare i modelli di traffico e i contenuti popolari",
        "Fornire pubblicità mirata tramite Google AdSense",
        "Tracciare conversioni e commissioni di affiliazione",
        "Rispettare gli obblighi legali",
        "Prevenire frodi e abusi",
      ],
    },
    {
      title: "4. Cookie e Tecnologie di Tracciamento",
      paragraphs: [
        "Utilizziamo cookie e tecnologie di tracciamento simili per migliorare la tua esperienza:",
      ],
      list: [
        "Cookie essenziali: Necessari per la funzionalità del sito web",
        "Cookie analitici: Google Analytics 4 per l'analisi del traffico",
        "Cookie pubblicitari: Google AdSense per annunci personalizzati",
        "Cookie di affiliazione: Tracciare le prenotazioni e attribuire commissioni",
        "",
        "Puoi controllare le preferenze dei cookie tramite le impostazioni del browser o il nostro banner di consenso ai cookie. Nota che la disabilitazione dei cookie potrebbe influire sulla funzionalità del sito web.",
      ],
    },
    {
      title: "5. Servizi di Terze Parti",
      paragraphs: [
        "Il nostro sito web si integra con i seguenti servizi di terze parti:",
      ],
      list: [
        "Google Analytics: Analisi del traffico e tracciamento del comportamento degli utenti",
        "Google AdSense: Pubblicità display",
        "Bokun: sistema di acquisto online per i prodotti biglietto venduti da Florence With Locals S.r.l. (tratta i dati di prenotazione e pagamento)",
        "GetYourGuide: Prenotazione tour (partner affiliato)",
        "Tiqets: Prenotazione biglietti (partner affiliato)",
        "Viator: Prenotazione tour (partner affiliato)",
        "",
        "Questi servizi hanno le proprie politiche sulla privacy e pratiche sui dati. Quando fai clic sui link di affiliazione o prenoti tramite i nostri partner, sarai soggetto alle loro politiche sulla privacy.",
      ],
    },
    {
      title: "6. Divulgazione Affiliazione",
      paragraphs: [
        "I prodotti biglietto per gli Uffizi presenti su questo sito sono venduti direttamente da Florence With Locals S.r.l. Per le visite guidate prenotate tramite partner (GetYourGuide, Tiqets, Viator e altri) attraverso i nostri link di affiliazione, riceviamo una commissione senza costi aggiuntivi per te.",
        "Queste commissioni aiutano a sostenere il funzionamento e la manutenzione di questo sito web. Le nostre relazioni di affiliazione non influenzano i nostri contenuti editoriali o raccomandazioni: consigliamo solo servizi che riteniamo forniscano un valore genuino ai visitatori.",
      ],
    },
    {
      title: "7. Conservazione dei Dati",
      paragraphs: [
        "Conserviamo i dati analitici del sito web per un massimo di 26 mesi (impostazione predefinita di Google Analytics). I dati dei cookie scadono in base alla durata del cookie specifico (in genere 1-2 anni).",
        "Puoi richiedere la cancellazione dei tuoi dati in qualsiasi momento contattandoci.",
      ],
    },
    {
      title: "8. I Tuoi Diritti (GDPR)",
      paragraphs: [
        "Se ti trovi nell'Unione Europea, hai i seguenti diritti:",
      ],
      list: [
        "Diritto di accesso: Richiedere una copia dei dati che deteniamo su di te",
        "Diritto di rettifica: Correggere dati inesatti",
        "Diritto alla cancellazione: Richiedere la cancellazione dei tuoi dati",
        "Diritto di limitare il trattamento: Limitare come utilizziamo i tuoi dati",
        "Diritto alla portabilità dei dati: Ricevere i tuoi dati in un formato portatile",
        "Diritto di opposizione: Opporsi al trattamento basato su interessi legittimi",
        "Diritto di revocare il consenso: Revocare il consenso ai cookie in qualsiasi momento",
      ],
    },
    {
      title: "9. Privacy dei Minori",
      paragraphs: [
        "Il nostro sito web non è rivolto a minori di 16 anni. Non raccogliamo consapevolmente informazioni personali da minori. Se ritieni che abbiamo raccolto informazioni da un minore, contattaci immediatamente.",
      ],
    },
    {
      title: "10. Trasferimenti Internazionali di Dati",
      paragraphs: [
        "Le tue informazioni potrebbero essere trasferite ed elaborate in paesi al di fuori dello Spazio Economico Europeo, inclusi gli Stati Uniti (Google Analytics, Google AdSense). Assicuriamo che siano in atto garanzie appropriate per tali trasferimenti.",
      ],
    },
    {
      title: "11. Sicurezza",
      paragraphs: [
        "Implementiamo misure di sicurezza ragionevoli per proteggere le tue informazioni. Tuttavia, nessuna trasmissione su Internet è completamente sicura. Non possiamo garantire la sicurezza assoluta dei dati trasmessi al nostro sito web.",
      ],
    },
    {
      title: "12. Modifiche a Questa Politica",
      paragraphs: [
        "Potremmo aggiornare questa informativa sulla privacy di tanto in tanto. Le modifiche saranno pubblicate su questa pagina con una data di revisione aggiornata. Ti invitiamo a rivedere periodicamente questa politica.",
      ],
    },
  ],
  contact: {
    title: "Contattaci",
    text: "Se hai domande su questa informativa sulla privacy o desideri esercitare i tuoi diritti sui dati, contatta Florence With Locals S.r.l. all'indirizzo contact@florencewithlocals.com o per posta a Via Taddea 35/R, 50123 Firenze (FI), Italia.",
  },
};

const de: PrivacyContent = {
  meta: {
    title: "Datenschutzerklärung | Visit Uffizi",
    description:
      "Datenschutzerklärung für VisitUffizi.com - die unabhängige, von Florence With Locals S.r.l. betriebene Website mit Informationen über die Uffizien, Tickets und Tourbuchungen.",
  },
  breadcrumb: "Datenschutzerklärung",
  h1: "Datenschutzerklärung",
  lastUpdated: "Zuletzt aktualisiert: 12. März 2026",
  disclaimer: {
    title: "Wichtiger Hinweis",
    text: "Diese Website wird betrieben von Florence With Locals S.r.l. — Via Taddea 35/R, 50123 Florenz (FI), Italien · USt-IdNr. IT07564730484 · Handelsregister Florenz Nr. 07564730484 · REA FI-712305 · Kontakt: contact@florencewithlocals.com. VisitUffizi.com ist eine unabhängige Website, die Informationen und Buchungsdienste für die Uffizien in Florenz bereitstellt. Wir sind NICHT die offizielle Website der Uffizien. Dies ist eine kommerzielle Website: Ticketprodukte werden von Florence With Locals S.r.l. verkauft, und für Tourbuchungen über Partnerlinks können wir Provisionen erhalten.",
  },
  sections: [
    {
      title: "1. Wer Wir Sind",
      paragraphs: [
        "Verantwortlicher im Sinne der DSGVO für die über diese Website verarbeiteten personenbezogenen Daten ist Florence With Locals S.r.l. VisitUffizi.com ist eine unabhängige Reiseinformations- und Buchungswebsite. Wir bieten umfassende Informationen über die Uffizien, verkaufen Uffizien-Ticketprodukte direkt (Florence With Locals S.r.l., über unseren Bokun-basierten Checkout) und verlinken für Führungen auf Drittpartner.",
        "Wir sind nicht verbunden mit, unterstützt von oder offiziell verbunden mit den Gallerie degli Uffizi, dem italienischen Kulturministerium oder der Stadt Florenz.",
      ],
    },
    {
      title: "2. Informationen, Die Wir Sammeln",
      paragraphs: [
        "Wenn Sie unsere Website besuchen, können wir folgende Informationen sammeln:",
      ],
      list: [
        "Browser- und Geräteinformationen (Browsertyp, Betriebssystem, Bildschirmauflösung)",
        "Nutzungsdaten (besuchte Seiten, Verweildauer, Navigationsmuster)",
        "Cookies und Tracking-Kennungen (für Analysen und Werbung)",
        "IP-Adresse und ungefährer geografischer Standort",
        "Verweisquelle (wie Sie unsere Website gefunden haben)",
      ],
    },
    {
      title: "3. Wie Wir Ihre Informationen Verwenden",
      paragraphs: [
        "Wir verwenden gesammelte Informationen für folgende Zwecke:",
      ],
      list: [
        "Verbesserung der Website-Funktionalität und Benutzererfahrung",
        "Analyse von Traffic-Mustern und beliebten Inhalten",
        "Bereitstellung zielgerichteter Werbung über Google AdSense",
        "Verfolgung von Affiliate-Conversions und Provisionen",
        "Erfüllung rechtlicher Verpflichtungen",
        "Verhinderung von Betrug und Missbrauch",
      ],
    },
    {
      title: "4. Cookies und Tracking-Technologien",
      paragraphs: [
        "Wir verwenden Cookies und ähnliche Tracking-Technologien, um Ihre Erfahrung zu verbessern:",
      ],
      list: [
        "Essentielle Cookies: Erforderlich für Website-Funktionalität",
        "Analyse-Cookies: Google Analytics 4 für Traffic-Analyse",
        "Werbe-Cookies: Google AdSense für personalisierte Anzeigen",
        "Affiliate-Cookies: Verfolgen von Buchungen und Zuordnung von Provisionen",
        "",
        "Sie können Cookie-Einstellungen über Ihre Browsereinstellungen oder unser Cookie-Zustimmungsbanner steuern. Beachten Sie, dass das Deaktivieren von Cookies die Website-Funktionalität beeinträchtigen kann.",
      ],
    },
    {
      title: "5. Drittanbieterdienste",
      paragraphs: [
        "Unsere Website integriert folgende Drittanbieterdienste:",
      ],
      list: [
        "Google Analytics: Traffic-Analyse und Verfolgung des Benutzerverhaltens",
        "Google AdSense: Display-Werbung",
        "Bokun: Online-Checkout für die von Florence With Locals S.r.l. verkauften Ticketprodukte (verarbeitet Ihre Buchungs- und Zahlungsdaten)",
        "GetYourGuide: Tourbuchung (Affiliate-Partner)",
        "Tiqets: Ticketbuchung (Affiliate-Partner)",
        "Viator: Tourbuchung (Affiliate-Partner)",
        "",
        "Diese Dienste haben ihre eigenen Datenschutzrichtlinien und Datenpraktiken. Wenn Sie auf Affiliate-Links klicken oder über unsere Partner buchen, unterliegen Sie deren Datenschutzrichtlinien.",
      ],
    },
    {
      title: "6. Affiliate-Offenlegung",
      paragraphs: [
        "Uffizien-Ticketprodukte auf dieser Website werden direkt von Florence With Locals S.r.l. verkauft. Für Führungen, die über Partner (GetYourGuide, Tiqets, Viator und andere) über unsere Affiliate-Links gebucht werden, erhalten wir eine Provision ohne zusätzliche Kosten für Sie.",
        "Diese Provisionen helfen dabei, den Betrieb und die Wartung dieser Website zu unterstützen. Unsere Affiliate-Beziehungen beeinflussen nicht unsere redaktionellen Inhalte oder Empfehlungen - wir empfehlen nur Dienste, von denen wir glauben, dass sie echten Mehrwert für Besucher bieten.",
      ],
    },
    {
      title: "7. Datenspeicherung",
      paragraphs: [
        "Wir speichern Website-Analysedaten für bis zu 26 Monate (Google Analytics Standard). Cookie-Daten laufen entsprechend der Lebensdauer des spezifischen Cookies ab (typischerweise 1-2 Jahre).",
        "Sie können jederzeit die Löschung Ihrer Daten anfordern, indem Sie uns kontaktieren.",
      ],
    },
    {
      title: "8. Ihre Rechte (DSGVO)",
      paragraphs: [
        "Wenn Sie sich in der Europäischen Union befinden, haben Sie folgende Rechte:",
      ],
      list: [
        "Recht auf Zugang: Eine Kopie der über Sie gespeicherten Daten anfordern",
        "Recht auf Berichtigung: Unrichtige Daten korrigieren",
        "Recht auf Löschung: Löschung Ihrer Daten anfordern",
        "Recht auf Einschränkung der Verarbeitung: Einschränken, wie wir Ihre Daten verwenden",
        "Recht auf Datenübertragbarkeit: Ihre Daten in einem portablen Format erhalten",
        "Widerspruchsrecht: Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen",
        "Recht auf Widerruf der Einwilligung: Cookie-Zustimmung jederzeit widerrufen",
      ],
    },
    {
      title: "9. Datenschutz für Kinder",
      paragraphs: [
        "Unsere Website richtet sich nicht an Kinder unter 16 Jahren. Wir sammeln wissentlich keine persönlichen Informationen von Kindern. Wenn Sie glauben, dass wir Informationen von einem Kind gesammelt haben, kontaktieren Sie uns bitte sofort.",
      ],
    },
    {
      title: "10. Internationale Datenübertragungen",
      paragraphs: [
        "Ihre Informationen können in Länder außerhalb des Europäischen Wirtschaftsraums übertragen und verarbeitet werden, einschließlich der Vereinigten Staaten (Google Analytics, Google AdSense). Wir stellen sicher, dass für solche Übertragungen angemessene Schutzmaßnahmen vorhanden sind.",
      ],
    },
    {
      title: "11. Sicherheit",
      paragraphs: [
        "Wir implementieren angemessene Sicherheitsmaßnahmen zum Schutz Ihrer Informationen. Allerdings ist keine Internetübertragung vollständig sicher. Wir können die absolute Sicherheit der an unsere Website übertragenen Daten nicht garantieren.",
      ],
    },
    {
      title: "12. Änderungen an Dieser Richtlinie",
      paragraphs: [
        "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Revisionsdatum veröffentlicht. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen.",
      ],
    },
  ],
  contact: {
    title: "Kontaktieren Sie Uns",
    text: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben oder Ihre Datenschutzrechte ausüben möchten, kontaktieren Sie bitte Florence With Locals S.r.l. unter contact@florencewithlocals.com oder per Post an Via Taddea 35/R, 50123 Florenz (FI), Italien.",
  },
};

const fr: PrivacyContent = {
  meta: {
    title: "Politique de Confidentialité | Visit Uffizi",
    description:
      "Politique de confidentialité de VisitUffizi.com - site indépendant exploité par Florence With Locals S.r.l. proposant informations sur la Galerie des Offices, billets et réservation de visites.",
  },
  breadcrumb: "Politique de Confidentialité",
  h1: "Politique de Confidentialité",
  lastUpdated: "Dernière mise à jour : 12 mars 2026",
  disclaimer: {
    title: "Avis Important",
    text: "Ce site est exploité par Florence With Locals S.r.l. — Via Taddea 35/R, 50123 Florence (FI), Italie · TVA IT07564730484 · Registre des entreprises de Florence n° 07564730484 · REA FI-712305 · Contact : contact@florencewithlocals.com. VisitUffizi.com est un site indépendant fournissant des informations et des services de réservation pour la Galerie des Offices à Florence. Nous ne sommes PAS le site officiel de la Galerie des Offices. Il s'agit d'un site commercial : les produits billetterie sont vendus par Florence With Locals S.r.l., et nous pouvons percevoir des commissions sur les réservations de visites effectuées via des liens partenaires.",
  },
  sections: [
    {
      title: "1. Qui Nous Sommes",
      paragraphs: [
        "Le responsable du traitement des données personnelles collectées via ce site est Florence With Locals S.r.l. VisitUffizi.com est un site indépendant d'information touristique et de réservation. Nous fournissons des informations complètes sur la Galerie des Offices, vendons directement des produits billetterie pour les Offices (Florence With Locals S.r.l., via notre système de paiement propulsé par Bokun) et renvoyons vers des partenaires tiers pour les visites guidées.",
        "Nous ne sommes pas affiliés, approuvés ou officiellement connectés aux Gallerie degli Uffizi, au Ministère de la Culture italien ou à la ville de Florence.",
      ],
    },
    {
      title: "2. Informations que Nous Collectons",
      paragraphs: [
        "Lorsque vous visitez notre site web, nous pouvons collecter les informations suivantes :",
      ],
      list: [
        "Informations sur le navigateur et l'appareil (type de navigateur, système d'exploitation, résolution d'écran)",
        "Données d'utilisation (pages visitées, temps passé, modèles de navigation)",
        "Cookies et identifiants de suivi (pour l'analyse et la publicité)",
        "Adresse IP et localisation géographique approximative",
        "Source de référence (comment vous avez trouvé notre site web)",
      ],
    },
    {
      title: "3. Comment Nous Utilisons Vos Informations",
      paragraphs: [
        "Nous utilisons les informations collectées aux fins suivantes :",
      ],
      list: [
        "Améliorer les fonctionnalités du site web et l'expérience utilisateur",
        "Analyser les modèles de trafic et le contenu populaire",
        "Diffuser de la publicité ciblée via Google AdSense",
        "Suivre les conversions et les commissions d'affiliation",
        "Respecter les obligations légales",
        "Prévenir la fraude et les abus",
      ],
    },
    {
      title: "4. Cookies et Technologies de Suivi",
      paragraphs: [
        "Nous utilisons des cookies et des technologies de suivi similaires pour améliorer votre expérience :",
      ],
      list: [
        "Cookies essentiels : Requis pour les fonctionnalités du site web",
        "Cookies analytiques : Google Analytics 4 pour l'analyse du trafic",
        "Cookies publicitaires : Google AdSense pour les annonces personnalisées",
        "Cookies d'affiliation : Suivre les réservations et attribuer les commissions",
        "",
        "Vous pouvez contrôler les préférences de cookies via les paramètres de votre navigateur ou notre bannière de consentement aux cookies. Notez que la désactivation des cookies peut affecter les fonctionnalités du site web.",
      ],
    },
    {
      title: "5. Services Tiers",
      paragraphs: [
        "Notre site web s'intègre aux services tiers suivants :",
      ],
      list: [
        "Google Analytics : Analyse du trafic et suivi du comportement des utilisateurs",
        "Google AdSense : Publicité display",
        "Bokun : système de paiement en ligne pour les produits billetterie vendus par Florence With Locals S.r.l. (traite vos données de réservation et de paiement)",
        "GetYourGuide : Réservation de visites (partenaire affilié)",
        "Tiqets : Réservation de billets (partenaire affilié)",
        "Viator : Réservation de visites (partenaire affilié)",
        "",
        "Ces services ont leurs propres politiques de confidentialité et pratiques de données. Lorsque vous cliquez sur des liens d'affiliation ou réservez via nos partenaires, vous serez soumis à leurs politiques de confidentialité.",
      ],
    },
    {
      title: "6. Divulgation d'Affiliation",
      paragraphs: [
        "Les produits billetterie pour les Offices présents sur ce site sont vendus directement par Florence With Locals S.r.l. Pour les visites guidées réservées auprès de partenaires (GetYourGuide, Tiqets, Viator et autres) via nos liens d'affiliation, nous percevons une commission sans frais supplémentaires pour vous.",
        "Ces commissions aident à soutenir le fonctionnement et la maintenance de ce site web. Nos relations d'affiliation n'influencent pas notre contenu éditorial ou nos recommandations - nous ne recommandons que des services qui, selon nous, offrent une réelle valeur aux visiteurs.",
      ],
    },
    {
      title: "7. Conservation des Données",
      paragraphs: [
        "Nous conservons les données d'analyse du site web pendant jusqu'à 26 mois (par défaut Google Analytics). Les données de cookies expirent selon la durée de vie du cookie spécifique (généralement 1 à 2 ans).",
        "Vous pouvez demander la suppression de vos données à tout moment en nous contactant.",
      ],
    },
    {
      title: "8. Vos Droits (RGPD)",
      paragraphs: [
        "Si vous êtes situé dans l'Union européenne, vous avez les droits suivants :",
      ],
      list: [
        "Droit d'accès : Demander une copie des données que nous détenons sur vous",
        "Droit de rectification : Corriger les données inexactes",
        "Droit à l'effacement : Demander la suppression de vos données",
        "Droit de limiter le traitement : Limiter la façon dont nous utilisons vos données",
        "Droit à la portabilité des données : Recevoir vos données dans un format portable",
        "Droit d'opposition : S'opposer au traitement basé sur des intérêts légitimes",
        "Droit de retirer le consentement : Retirer le consentement aux cookies à tout moment",
      ],
    },
    {
      title: "9. Confidentialité des Enfants",
      paragraphs: [
        "Notre site web n'est pas destiné aux enfants de moins de 16 ans. Nous ne collectons pas sciemment d'informations personnelles auprès des enfants. Si vous pensez que nous avons collecté des informations auprès d'un enfant, veuillez nous contacter immédiatement.",
      ],
    },
    {
      title: "10. Transferts Internationaux de Données",
      paragraphs: [
        "Vos informations peuvent être transférées et traitées dans des pays en dehors de l'Espace économique européen, y compris aux États-Unis (Google Analytics, Google AdSense). Nous nous assurons que des garanties appropriées sont en place pour ces transferts.",
      ],
    },
    {
      title: "11. Sécurité",
      paragraphs: [
        "Nous mettons en œuvre des mesures de sécurité raisonnables pour protéger vos informations. Cependant, aucune transmission sur Internet n'est complètement sécurisée. Nous ne pouvons pas garantir la sécurité absolue des données transmises à notre site web.",
      ],
    },
    {
      title: "12. Modifications de Cette Politique",
      paragraphs: [
        "Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Les modifications seront publiées sur cette page avec une date de révision mise à jour. Nous vous encourageons à consulter régulièrement cette politique.",
      ],
    },
  ],
  contact: {
    title: "Contactez-nous",
    text: "Si vous avez des questions sur cette politique de confidentialité ou souhaitez exercer vos droits sur les données, veuillez contacter Florence With Locals S.r.l. à contact@florencewithlocals.com ou par courrier à Via Taddea 35/R, 50123 Florence (FI), Italie.",
  },
};

const es: PrivacyContent = {
  meta: {
    title: "Política de Privacidad | Visit Uffizi",
    description:
      "Política de privacidad para VisitUffizi.com - el sitio web independiente gestionado por Florence With Locals S.r.l. con información sobre la Galería Uffizi, entradas y reserva de tours.",
  },
  breadcrumb: "Política de Privacidad",
  h1: "Política de Privacidad",
  lastUpdated: "Última actualización: 12 de marzo de 2026",
  disclaimer: {
    title: "Aviso Importante",
    text: "Este sitio web está gestionado por Florence With Locals S.r.l. — Via Taddea 35/R, 50123 Florencia (FI), Italia · IVA IT07564730484 · Registro Mercantil de Florencia n.º 07564730484 · REA FI-712305 · Contacto: contact@florencewithlocals.com. VisitUffizi.com es un sitio web independiente que proporciona información y servicios de reserva para la Galería Uffizi en Florencia. NO somos el sitio web oficial de la Galería Uffizi. Este es un sitio web comercial: los productos de entradas los vende Florence With Locals S.r.l., y podemos recibir comisiones por las reservas de tours realizadas a través de enlaces de socios.",
  },
  sections: [
    {
      title: "1. Quiénes Somos",
      paragraphs: [
        "El responsable del tratamiento de los datos personales recogidos a través de este sitio web es Florence With Locals S.r.l. VisitUffizi.com es un sitio web independiente de información turística y reservas. Proporcionamos información completa sobre la Galería Uffizi, vendemos directamente productos de entradas para los Uffizi (Florence With Locals S.r.l., a través de nuestro sistema de compra basado en Bokun) y enlazamos a socios externos para las visitas guiadas.",
        "No estamos afiliados, respaldados o conectados oficialmente con las Gallerie degli Uffizi, el Ministerio de Cultura italiano o la ciudad de Florencia.",
      ],
    },
    {
      title: "2. Información que Recopilamos",
      paragraphs: [
        "Cuando visita nuestro sitio web, podemos recopilar la siguiente información:",
      ],
      list: [
        "Información del navegador y dispositivo (tipo de navegador, sistema operativo, resolución de pantalla)",
        "Datos de uso (páginas visitadas, tiempo dedicado, patrones de navegación)",
        "Cookies e identificadores de seguimiento (para análisis y publicidad)",
        "Dirección IP y ubicación geográfica aproximada",
        "Fuente de referencia (cómo encontró nuestro sitio web)",
      ],
    },
    {
      title: "3. Cómo Usamos Su Información",
      paragraphs: [
        "Usamos la información recopilada para los siguientes propósitos:",
      ],
      list: [
        "Mejorar la funcionalidad del sitio web y la experiencia del usuario",
        "Analizar patrones de tráfico y contenido popular",
        "Entregar publicidad dirigida a través de Google AdSense",
        "Rastrear conversiones y comisiones de afiliados",
        "Cumplir con obligaciones legales",
        "Prevenir fraude y abuso",
      ],
    },
    {
      title: "4. Cookies y Tecnologías de Seguimiento",
      paragraphs: [
        "Usamos cookies y tecnologías de seguimiento similares para mejorar su experiencia:",
      ],
      list: [
        "Cookies esenciales: Requeridas para la funcionalidad del sitio web",
        "Cookies analíticas: Google Analytics 4 para análisis de tráfico",
        "Cookies publicitarias: Google AdSense para anuncios personalizados",
        "Cookies de afiliados: Rastrear reservas y atribuir comisiones",
        "",
        "Puede controlar las preferencias de cookies a través de la configuración de su navegador o nuestro banner de consentimiento de cookies. Tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad del sitio web.",
      ],
    },
    {
      title: "5. Servicios de Terceros",
      paragraphs: [
        "Nuestro sitio web se integra con los siguientes servicios de terceros:",
      ],
      list: [
        "Google Analytics: Análisis de tráfico y seguimiento del comportamiento del usuario",
        "Google AdSense: Publicidad display",
        "Bokun: sistema de compra en línea para los productos de entradas vendidos por Florence With Locals S.r.l. (trata sus datos de reserva y pago)",
        "GetYourGuide: Reserva de tours (socio afiliado)",
        "Tiqets: Reserva de entradas (socio afiliado)",
        "Viator: Reserva de tours (socio afiliado)",
        "",
        "Estos servicios tienen sus propias políticas de privacidad y prácticas de datos. Cuando hace clic en enlaces de afiliados o reserva a través de nuestros socios, estará sujeto a sus políticas de privacidad.",
      ],
    },
    {
      title: "6. Divulgación de Afiliados",
      paragraphs: [
        "Los productos de entradas para los Uffizi de este sitio web los vende directamente Florence With Locals S.r.l. Por las visitas guiadas reservadas a través de socios (GetYourGuide, Tiqets, Viator y otros) mediante nuestros enlaces de afiliados, recibimos una comisión sin coste adicional para usted.",
        "Estas comisiones ayudan a apoyar el funcionamiento y mantenimiento de este sitio web. Nuestras relaciones de afiliados no influyen en nuestro contenido editorial o recomendaciones: solo recomendamos servicios que creemos que proporcionan un valor genuino a los visitantes.",
      ],
    },
    {
      title: "7. Retención de Datos",
      paragraphs: [
        "Retenemos datos analíticos del sitio web por hasta 26 meses (predeterminado de Google Analytics). Los datos de cookies expiran según la vida útil de la cookie específica (típicamente 1-2 años).",
        "Puede solicitar la eliminación de sus datos en cualquier momento contactándonos.",
      ],
    },
    {
      title: "8. Sus Derechos (RGPD)",
      paragraphs: [
        "Si se encuentra en la Unión Europea, tiene los siguientes derechos:",
      ],
      list: [
        "Derecho de acceso: Solicitar una copia de los datos que tenemos sobre usted",
        "Derecho de rectificación: Corregir datos inexactos",
        "Derecho de supresión: Solicitar la eliminación de sus datos",
        "Derecho de restringir el procesamiento: Limitar cómo usamos sus datos",
        "Derecho de portabilidad de datos: Recibir sus datos en un formato portable",
        "Derecho de oposición: Oponerse al procesamiento basado en intereses legítimos",
        "Derecho de retirar el consentimiento: Retirar el consentimiento de cookies en cualquier momento",
      ],
    },
    {
      title: "9. Privacidad de los Niños",
      paragraphs: [
        "Nuestro sitio web no está dirigido a niños menores de 16 años. No recopilamos conscientemente información personal de niños. Si cree que hemos recopilado información de un niño, contáctenos inmediatamente.",
      ],
    },
    {
      title: "10. Transferencias Internacionales de Datos",
      paragraphs: [
        "Su información puede ser transferida y procesada en países fuera del Espacio Económico Europeo, incluidos los Estados Unidos (Google Analytics, Google AdSense). Nos aseguramos de que existan salvaguardias apropiadas para tales transferencias.",
      ],
    },
    {
      title: "11. Seguridad",
      paragraphs: [
        "Implementamos medidas de seguridad razonables para proteger su información. Sin embargo, ninguna transmisión por Internet es completamente segura. No podemos garantizar la seguridad absoluta de los datos transmitidos a nuestro sitio web.",
      ],
    },
    {
      title: "12. Cambios en Esta Política",
      paragraphs: [
        "Podemos actualizar esta política de privacidad de vez en cuando. Los cambios se publicarán en esta página con una fecha de revisión actualizada. Le recomendamos que revise esta política periódicamente.",
      ],
    },
  ],
  contact: {
    title: "Contáctenos",
    text: "Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos de datos, contacte con Florence With Locals S.r.l. en contact@florencewithlocals.com o por correo postal en Via Taddea 35/R, 50123 Florencia (FI), Italia.",
  },
};

const privacyTranslations: Record<string, PrivacyContent> = {
  en,
  it,
  de,
  fr,
  es,
};

export function getPrivacyContent(locale: string): PrivacyContent {
  return privacyTranslations[locale] || en;
}
