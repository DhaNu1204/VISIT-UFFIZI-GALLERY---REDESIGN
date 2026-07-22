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
      "Terms of service for VisitUffizi.com - an affiliate website providing Uffizi Gallery information and booking services.",
  },
  breadcrumb: "Terms of Service",
  h1: "Terms of Service",
  lastUpdated: "Last updated: March 12, 2026",
  disclaimer: {
    title: "Important Notice",
    text: "VisitUffizi.com is an independent affiliate website providing information and booking services for the Uffizi Gallery in Florence. We are NOT the official Uffizi Gallery website. This is a commercial website that earns commissions from ticket sales and tour bookings through affiliate partnerships.",
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
        "VisitUffizi.com is an independent affiliate marketing website that provides:",
      ],
      list: [
        "Information about the Uffizi Gallery in Florence, Italy",
        "Travel tips, visitor guides, and artwork information",
        "Affiliate links to third-party ticket vendors and tour operators",
        "Advertising through Google AdSense",
        "",
        "We are NOT affiliated with, endorsed by, or officially connected to the Gallerie degli Uffizi, the Italian Ministry of Culture, or the city of Florence.",
      ],
    },
    {
      title: "3. Affiliate Relationships and Commissions",
      paragraphs: [
        "VisitUffizi.com participates in affiliate programs with ticket vendors (GetYourGuide, Tiqets, Viator, and others) and tour operators. When you click affiliate links and make purchases, we earn a commission at no additional cost to you.",
        "Prices shown on third-party sites may differ from prices on the official Uffizi website. We recommend comparing prices across multiple platforms.",
        "We do not control, guarantee, or assume responsibility for transactions made through affiliate partners. All bookings are subject to the partner's terms and conditions.",
      ],
    },
    {
      title: "4. No Booking Service",
      paragraphs: [
        "VisitUffizi.com does NOT sell tickets or tours directly. We provide affiliate links to third-party vendors. When you click these links, you will be redirected to the partner's website where you complete your booking.",
        "Your contractual relationship is with the third-party vendor, not with VisitUffizi.com. We are not responsible for ticket fulfillment, refunds, cancellations, or customer service related to bookings.",
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
    text: "If you have questions about these Terms of Service, please contact us through the contact information provided on our website.",
  },
};

const it: TermsContent = {
  meta: {
    title: "Termini di Servizio | Visit Uffizi",
    description:
      "Termini di servizio per VisitUffizi.com - un sito web affiliato che fornisce informazioni sulla Galleria degli Uffizi e servizi di prenotazione.",
  },
  breadcrumb: "Termini di Servizio",
  h1: "Termini di Servizio",
  lastUpdated: "Ultimo aggiornamento: 12 marzo 2026",
  disclaimer: {
    title: "Avviso Importante",
    text: "VisitUffizi.com è un sito web affiliato indipendente che fornisce informazioni e servizi di prenotazione per la Galleria degli Uffizi di Firenze. NON siamo il sito ufficiale della Galleria degli Uffizi. Questo è un sito commerciale che guadagna commissioni dalla vendita di biglietti e prenotazioni di tour tramite partnership di affiliazione.",
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
        "VisitUffizi.com è un sito web indipendente di marketing affiliato che fornisce:",
      ],
      list: [
        "Informazioni sulla Galleria degli Uffizi a Firenze, Italia",
        "Consigli di viaggio, guide per visitatori e informazioni sulle opere d'arte",
        "Link di affiliazione a venditori di biglietti e operatori turistici terzi",
        "Pubblicità tramite Google AdSense",
        "",
        "NON siamo affiliati, approvati o ufficialmente collegati alle Gallerie degli Uffizi, al Ministero della Cultura italiano o alla città di Firenze.",
      ],
    },
    {
      title: "3. Relazioni di Affiliazione e Commissioni",
      paragraphs: [
        "VisitUffizi.com partecipa a programmi di affiliazione con venditori di biglietti (GetYourGuide, Tiqets, Viator e altri) e operatori turistici. Quando fai clic sui link di affiliazione ed effettui acquisti, guadagniamo una commissione senza costi aggiuntivi per te.",
        "I prezzi mostrati sui siti di terze parti potrebbero differire dai prezzi sul sito ufficiale degli Uffizi. Ti consigliamo di confrontare i prezzi su più piattaforme.",
        "Non controlliamo, garantiamo o ci assumiamo la responsabilità delle transazioni effettuate tramite partner affiliati. Tutte le prenotazioni sono soggette ai termini e alle condizioni del partner.",
      ],
    },
    {
      title: "4. Nessun Servizio di Prenotazione",
      paragraphs: [
        "VisitUffizi.com NON vende biglietti o tour direttamente. Forniamo link di affiliazione a fornitori terzi. Quando fai clic su questi link, verrai reindirizzato al sito web del partner dove completi la tua prenotazione.",
        "Il tuo rapporto contrattuale è con il fornitore terzo, non con VisitUffizi.com. Non siamo responsabili per l'evasione dei biglietti, rimborsi, cancellazioni o servizio clienti relativi alle prenotazioni.",
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
    text: "Se hai domande su questi Termini di Servizio, contattaci tramite le informazioni di contatto fornite sul nostro sito web.",
  },
};

const de: TermsContent = {
  meta: {
    title: "Nutzungsbedingungen | Visit Uffizi",
    description:
      "Nutzungsbedingungen für VisitUffizi.com - eine Affiliate-Website mit Informationen über die Uffizien und Buchungsdiensten.",
  },
  breadcrumb: "Nutzungsbedingungen",
  h1: "Nutzungsbedingungen",
  lastUpdated: "Zuletzt aktualisiert: 12. März 2026",
  disclaimer: {
    title: "Wichtiger Hinweis",
    text: "VisitUffizi.com ist eine unabhängige Affiliate-Website, die Informationen und Buchungsdienste für die Uffizien in Florenz bereitstellt. Wir sind NICHT die offizielle Website der Uffizien. Dies ist eine kommerzielle Website, die Provisionen aus Ticketverkäufen und Tourbuchungen durch Affiliate-Partnerschaften verdient.",
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
        "VisitUffizi.com ist eine unabhängige Affiliate-Marketing-Website, die Folgendes bietet:",
      ],
      list: [
        "Informationen über die Uffizien in Florenz, Italien",
        "Reisetipps, Besucherführer und Kunstwerkinformationen",
        "Affiliate-Links zu Drittanbieter-Ticketverkäufern und Tourveranstaltern",
        "Werbung über Google AdSense",
        "",
        "Wir sind NICHT verbunden mit, unterstützt von oder offiziell verbunden mit den Gallerie degli Uffizi, dem italienischen Kulturministerium oder der Stadt Florenz.",
      ],
    },
    {
      title: "3. Affiliate-Beziehungen und Provisionen",
      paragraphs: [
        "VisitUffizi.com nimmt an Affiliate-Programmen mit Ticketanbietern (GetYourGuide, Tiqets, Viator und anderen) und Tourveranstaltern teil. Wenn Sie auf Affiliate-Links klicken und Käufe tätigen, verdienen wir eine Provision ohne zusätzliche Kosten für Sie.",
        "Die auf Websites von Drittanbietern angezeigten Preise können von den Preisen auf der offiziellen Uffizien-Website abweichen. Wir empfehlen, Preise auf mehreren Plattformen zu vergleichen.",
        "Wir kontrollieren, garantieren oder übernehmen keine Verantwortung für Transaktionen, die über Affiliate-Partner getätigt werden. Alle Buchungen unterliegen den Geschäftsbedingungen des Partners.",
      ],
    },
    {
      title: "4. Kein Buchungsservice",
      paragraphs: [
        "VisitUffizi.com verkauft KEINE Tickets oder Touren direkt. Wir stellen Affiliate-Links zu Drittanbietern bereit. Wenn Sie auf diese Links klicken, werden Sie zur Website des Partners weitergeleitet, wo Sie Ihre Buchung abschließen.",
        "Ihre Vertragsbeziehung besteht mit dem Drittanbieter, nicht mit VisitUffizi.com. Wir sind nicht verantwortlich für Ticketabwicklung, Rückerstattungen, Stornierungen oder Kundenservice im Zusammenhang mit Buchungen.",
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
    text: "Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns bitte über die auf unserer Website angegebenen Kontaktinformationen.",
  },
};

const fr: TermsContent = {
  meta: {
    title: "Conditions d'Utilisation | Visit Uffizi",
    description:
      "Conditions d'utilisation pour VisitUffizi.com - un site web affilié fournissant des informations sur la Galerie des Offices et des services de réservation.",
  },
  breadcrumb: "Conditions d'Utilisation",
  h1: "Conditions d'Utilisation",
  lastUpdated: "Dernière mise à jour : 12 mars 2026",
  disclaimer: {
    title: "Avis Important",
    text: "VisitUffizi.com est un site web affilié indépendant fournissant des informations et des services de réservation pour la Galerie des Offices à Florence. Nous ne sommes PAS le site officiel de la Galerie des Offices. Il s'agit d'un site commercial qui gagne des commissions sur les ventes de billets et les réservations de visites grâce à des partenariats d'affiliation.",
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
        "VisitUffizi.com est un site web de marketing d'affiliation indépendant qui fournit :",
      ],
      list: [
        "Des informations sur la Galerie des Offices à Florence, Italie",
        "Des conseils de voyage, des guides pour visiteurs et des informations sur les œuvres d'art",
        "Des liens d'affiliation vers des vendeurs de billets et des opérateurs de visites tiers",
        "De la publicité via Google AdSense",
        "",
        "Nous ne sommes PAS affiliés, approuvés ou officiellement connectés aux Gallerie degli Uffizi, au Ministère de la Culture italien ou à la ville de Florence.",
      ],
    },
    {
      title: "3. Relations d'Affiliation et Commissions",
      paragraphs: [
        "VisitUffizi.com participe à des programmes d'affiliation avec des vendeurs de billets (GetYourGuide, Tiqets, Viator et autres) et des opérateurs de visites. Lorsque vous cliquez sur des liens d'affiliation et effectuez des achats, nous gagnons une commission sans frais supplémentaires pour vous.",
        "Les prix affichés sur les sites tiers peuvent différer des prix sur le site officiel des Offices. Nous vous recommandons de comparer les prix sur plusieurs plateformes.",
        "Nous ne contrôlons pas, ne garantissons pas et n'assumons pas la responsabilité des transactions effectuées via des partenaires affiliés. Toutes les réservations sont soumises aux conditions générales du partenaire.",
      ],
    },
    {
      title: "4. Pas de Service de Réservation",
      paragraphs: [
        "VisitUffizi.com ne vend PAS de billets ou de visites directement. Nous fournissons des liens d'affiliation vers des fournisseurs tiers. Lorsque vous cliquez sur ces liens, vous serez redirigé vers le site web du partenaire où vous complétez votre réservation.",
        "Votre relation contractuelle est avec le fournisseur tiers, pas avec VisitUffizi.com. Nous ne sommes pas responsables de l'exécution des billets, des remboursements, des annulations ou du service client lié aux réservations.",
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
    text: "Si vous avez des questions sur ces Conditions d'Utilisation, veuillez nous contacter via les informations de contact fournies sur notre site web.",
  },
};

const es: TermsContent = {
  meta: {
    title: "Términos de Servicio | Visit Uffizi",
    description:
      "Términos de servicio para VisitUffizi.com - un sitio web afiliado que proporciona información sobre la Galería Uffizi y servicios de reserva.",
  },
  breadcrumb: "Términos de Servicio",
  h1: "Términos de Servicio",
  lastUpdated: "Última actualización: 12 de marzo de 2026",
  disclaimer: {
    title: "Aviso Importante",
    text: "VisitUffizi.com es un sitio web afiliado independiente que proporciona información y servicios de reserva para la Galería Uffizi en Florencia. NO somos el sitio web oficial de la Galería Uffizi. Este es un sitio web comercial que gana comisiones de las ventas de entradas y reservas de tours a través de asociaciones de afiliados.",
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
        "VisitUffizi.com es un sitio web independiente de marketing de afiliados que proporciona:",
      ],
      list: [
        "Información sobre la Galería Uffizi en Florencia, Italia",
        "Consejos de viaje, guías para visitantes e información sobre obras de arte",
        "Enlaces de afiliados a vendedores de entradas y operadores turísticos de terceros",
        "Publicidad a través de Google AdSense",
        "",
        "NO estamos afiliados, respaldados o conectados oficialmente con las Gallerie degli Uffizi, el Ministerio de Cultura italiano o la ciudad de Florencia.",
      ],
    },
    {
      title: "3. Relaciones de Afiliados y Comisiones",
      paragraphs: [
        "VisitUffizi.com participa en programas de afiliados con vendedores de entradas (GetYourGuide, Tiqets, Viator y otros) y operadores turísticos. Cuando hace clic en enlaces de afiliados y realiza compras, ganamos una comisión sin costo adicional para usted.",
        "Los precios mostrados en los sitios de terceros pueden diferir de los precios en el sitio web oficial de Uffizi. Recomendamos comparar precios en múltiples plataformas.",
        "No controlamos, garantizamos ni asumimos responsabilidad por las transacciones realizadas a través de socios afiliados. Todas las reservas están sujetas a los términos y condiciones del socio.",
      ],
    },
    {
      title: "4. Sin Servicio de Reserva",
      paragraphs: [
        "VisitUffizi.com NO vende entradas o tours directamente. Proporcionamos enlaces de afiliados a proveedores de terceros. Cuando hace clic en estos enlaces, será redirigido al sitio web del socio donde completa su reserva.",
        "Su relación contractual es con el proveedor de terceros, no con VisitUffizi.com. No somos responsables del cumplimiento de entradas, reembolsos, cancelaciones o servicio al cliente relacionado con las reservas.",
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
    text: "Si tiene preguntas sobre estos Términos de Servicio, contáctenos a través de la información de contacto proporcionada en nuestro sitio web.",
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
