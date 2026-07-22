type CookiesContent = {
  meta: {
    title: string;
    description: string;
  };
  breadcrumb: string;
  h1: string;
  lastUpdated: string;
  sections: {
    title: string;
    paragraphs: string[];
    list?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  contact: {
    title: string;
    text: string;
  };
};

const en: CookiesContent = {
  meta: {
    title: "Cookie Policy | Visit Uffizi",
    description:
      "Cookie policy for VisitUffizi.com. Learn about the cookies we use, how they improve your browsing experience, and how to manage your cookie preferences.",
  },
  breadcrumb: "Cookie Policy",
  h1: "Cookie Policy",
  lastUpdated: "Last updated: March 12, 2026",
  sections: [
    {
      title: "What Are Cookies?",
      paragraphs: [
        "Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They help websites remember your preferences, track your activity, and provide a better user experience.",
        "Cookies can be \"first-party\" (set by the website you're visiting) or \"third-party\" (set by external services like advertising networks).",
      ],
    },
    {
      title: "How We Use Cookies",
      paragraphs: [
        "VisitUffizi.com uses cookies for the following purposes:",
      ],
      list: [
        "Essential functionality: Remember your language preference and consent choices",
        "Analytics: Understand how visitors use our website (via Google Analytics)",
        "Advertising: Display personalized ads (via Google AdSense)",
        "Affiliate tracking: Attribute bookings to our affiliate links and earn commissions",
      ],
    },
    {
      title: "Types of Cookies We Use",
      paragraphs: ["Our website uses the following categories of cookies:"],
      table: {
        headers: ["Cookie Type", "Purpose", "Duration", "Can Be Disabled?"],
        rows: [
          [
            "Essential Cookies",
            "Required for website functionality (language selection, consent preferences)",
            "1 year",
            "No - required for site to work",
          ],
          [
            "Analytics Cookies",
            "Google Analytics 4 - track page views, user behavior, traffic sources",
            "Up to 2 years",
            "Yes - via cookie banner",
          ],
          [
            "Advertising Cookies",
            "Google AdSense - personalized ad delivery and frequency capping",
            "Up to 2 years",
            "Yes - via cookie banner",
          ],
          [
            "Affiliate Cookies",
            "Track clicks on affiliate links to attribute commissions (GetYourGuide, Tiqets, Viator)",
            "30-90 days",
            "Yes - via browser settings",
          ],
        ],
      },
    },
    {
      title: "Specific Cookies We Use",
      paragraphs: [
        "Here are the main cookies and identifiers used on VisitUffizi.com:",
      ],
      table: {
        headers: ["Cookie Name", "Provider", "Purpose", "Duration"],
        rows: [
          [
            "_ga",
            "Google Analytics",
            "Distinguishes unique visitors",
            "2 years",
          ],
          [
            "_gid",
            "Google Analytics",
            "Distinguishes unique visitors (short-term)",
            "24 hours",
          ],
          [
            "_gat",
            "Google Analytics",
            "Throttles request rate",
            "1 minute",
          ],
          [
            "__gads",
            "Google AdSense",
            "Registers ad impressions and clicks",
            "13 months",
          ],
          [
            "__gpi",
            "Google AdSense",
            "Collects information on user behavior for advertising",
            "13 months",
          ],
          [
            "CONSENT",
            "Google",
            "Stores cookie consent status",
            "20 years",
          ],
          [
            "cookieConsent",
            "VisitUffizi.com",
            "Stores your cookie preferences (essential, analytics, advertising)",
            "1 year",
          ],
          [
            "NEXT_LOCALE",
            "Next.js",
            "Remembers your language preference",
            "Session/1 year",
          ],
        ],
      },
    },
    {
      title: "Third-Party Cookies",
      paragraphs: [
        "When you interact with content from third-party services, those services may set their own cookies:",
      ],
      list: [
        "Google Analytics: Analytics and tracking cookies",
        "Google AdSense: Advertising and personalization cookies",
        "GetYourGuide: Affiliate tracking cookies (when you click booking links)",
        "Tiqets: Affiliate tracking cookies (when you click booking links)",
        "Viator: Affiliate tracking cookies (when you click booking links)",
        "",
        "These services have their own cookie policies. We recommend reviewing:",
        "• Google Privacy Policy: https://policies.google.com/privacy",
        "• Google Ads Settings: https://adssettings.google.com/",
      ],
    },
    {
      title: "Managing Your Cookie Preferences",
      paragraphs: [
        "You have several options to control and manage cookies:",
      ],
      list: [
        "Cookie Banner: Use our cookie consent banner to accept or reject non-essential cookies",
        "Browser Settings: Configure your browser to block or delete cookies",
        "Google Ads Settings: Opt out of personalized advertising at https://adssettings.google.com/",
        "Network Advertising Initiative: Opt out of multiple ad networks at https://optout.networkadvertising.org/",
        "",
        "Note: Disabling cookies may affect website functionality. Essential cookies are required for the site to work properly.",
      ],
    },
    {
      title: "Browser-Specific Cookie Management",
      paragraphs: [
        "You can manage cookies through your browser settings:",
      ],
      list: [
        "Chrome: Settings > Privacy and security > Cookies and other site data",
        "Firefox: Settings > Privacy & Security > Cookies and Site Data",
        "Safari: Preferences > Privacy > Manage Website Data",
        "Edge: Settings > Cookies and site permissions",
      ],
    },
    {
      title: "Google Analytics Opt-Out",
      paragraphs: [
        "If you want to opt out of Google Analytics tracking across all websites, you can install the Google Analytics Opt-out Browser Add-on:",
        "https://tools.google.com/dlpage/gaoptout",
      ],
    },
    {
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this cookie policy from time to time to reflect changes in our practices or legal requirements. Please review this page periodically.",
      ],
    },
  ],
  contact: {
    title: "Questions About Cookies?",
    text: "If you have questions about our use of cookies, please contact us through the contact information provided on our website.",
  },
};

const it: CookiesContent = {
  meta: {
    title: "Politica sui Cookie | Visit Uffizi",
    description:
      "Politica sui cookie per VisitUffizi.com - scopri come utilizziamo i cookie per migliorare la tua esperienza.",
  },
  breadcrumb: "Politica sui Cookie",
  h1: "Politica sui Cookie",
  lastUpdated: "Ultimo aggiornamento: 12 marzo 2026",
  sections: [
    {
      title: "Cosa Sono i Cookie?",
      paragraphs: [
        "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet, smartphone) quando visiti un sito web. Aiutano i siti web a ricordare le tue preferenze, tracciare la tua attività e fornire una migliore esperienza utente.",
        "I cookie possono essere \"di prima parte\" (impostati dal sito web che stai visitando) o \"di terze parti\" (impostati da servizi esterni come reti pubblicitarie).",
      ],
    },
    {
      title: "Come Utilizziamo i Cookie",
      paragraphs: [
        "VisitUffizi.com utilizza i cookie per i seguenti scopi:",
      ],
      list: [
        "Funzionalità essenziali: Ricordare la tua preferenza linguistica e le scelte di consenso",
        "Analisi: Comprendere come i visitatori utilizzano il nostro sito web (tramite Google Analytics)",
        "Pubblicità: Visualizzare annunci personalizzati (tramite Google AdSense)",
        "Tracciamento affiliazione: Attribuire prenotazioni ai nostri link di affiliazione e guadagnare commissioni",
      ],
    },
    {
      title: "Tipi di Cookie che Utilizziamo",
      paragraphs: ["Il nostro sito web utilizza le seguenti categorie di cookie:"],
      table: {
        headers: ["Tipo di Cookie", "Scopo", "Durata", "Può Essere Disabilitato?"],
        rows: [
          [
            "Cookie Essenziali",
            "Necessari per la funzionalità del sito web (selezione lingua, preferenze di consenso)",
            "1 anno",
            "No - necessari per il funzionamento del sito",
          ],
          [
            "Cookie Analitici",
            "Google Analytics 4 - tracciare visualizzazioni pagine, comportamento utente, fonti di traffico",
            "Fino a 2 anni",
            "Sì - tramite banner cookie",
          ],
          [
            "Cookie Pubblicitari",
            "Google AdSense - consegna annunci personalizzati e limitazione frequenza",
            "Fino a 2 anni",
            "Sì - tramite banner cookie",
          ],
          [
            "Cookie di Affiliazione",
            "Tracciare clic sui link di affiliazione per attribuire commissioni (GetYourGuide, Tiqets, Viator)",
            "30-90 giorni",
            "Sì - tramite impostazioni browser",
          ],
        ],
      },
    },
    {
      title: "Cookie Specifici che Utilizziamo",
      paragraphs: [
        "Ecco i principali cookie e identificatori utilizzati su VisitUffizi.com:",
      ],
      table: {
        headers: ["Nome Cookie", "Fornitore", "Scopo", "Durata"],
        rows: [
          [
            "_ga",
            "Google Analytics",
            "Distingue visitatori unici",
            "2 anni",
          ],
          [
            "_gid",
            "Google Analytics",
            "Distingue visitatori unici (breve termine)",
            "24 ore",
          ],
          [
            "_gat",
            "Google Analytics",
            "Limita velocità richieste",
            "1 minuto",
          ],
          [
            "__gads",
            "Google AdSense",
            "Registra impressioni e clic sugli annunci",
            "13 mesi",
          ],
          [
            "__gpi",
            "Google AdSense",
            "Raccoglie informazioni sul comportamento utente per pubblicità",
            "13 mesi",
          ],
          [
            "CONSENT",
            "Google",
            "Memorizza stato consenso cookie",
            "20 anni",
          ],
          [
            "cookieConsent",
            "VisitUffizi.com",
            "Memorizza le tue preferenze cookie (essenziali, analitici, pubblicitari)",
            "1 anno",
          ],
          [
            "NEXT_LOCALE",
            "Next.js",
            "Ricorda la tua preferenza linguistica",
            "Sessione/1 anno",
          ],
        ],
      },
    },
    {
      title: "Cookie di Terze Parti",
      paragraphs: [
        "Quando interagisci con contenuti di servizi di terze parti, tali servizi potrebbero impostare i propri cookie:",
      ],
      list: [
        "Google Analytics: Cookie di analisi e tracciamento",
        "Google AdSense: Cookie pubblicitari e di personalizzazione",
        "GetYourGuide: Cookie di tracciamento affiliazione (quando fai clic sui link di prenotazione)",
        "Tiqets: Cookie di tracciamento affiliazione (quando fai clic sui link di prenotazione)",
        "Viator: Cookie di tracciamento affiliazione (quando fai clic sui link di prenotazione)",
        "",
        "Questi servizi hanno le proprie politiche sui cookie. Ti consigliamo di rivedere:",
        "• Informativa sulla Privacy di Google: https://policies.google.com/privacy",
        "• Impostazioni Annunci Google: https://adssettings.google.com/",
      ],
    },
    {
      title: "Gestione delle Preferenze Cookie",
      paragraphs: [
        "Hai diverse opzioni per controllare e gestire i cookie:",
      ],
      list: [
        "Banner Cookie: Utilizza il nostro banner di consenso cookie per accettare o rifiutare i cookie non essenziali",
        "Impostazioni Browser: Configura il tuo browser per bloccare o eliminare i cookie",
        "Impostazioni Annunci Google: Disattiva la pubblicità personalizzata su https://adssettings.google.com/",
        "Network Advertising Initiative: Disattiva più reti pubblicitarie su https://optout.networkadvertising.org/",
        "",
        "Nota: La disabilitazione dei cookie potrebbe influire sulla funzionalità del sito web. I cookie essenziali sono necessari per il corretto funzionamento del sito.",
      ],
    },
    {
      title: "Gestione Cookie Specifica per Browser",
      paragraphs: [
        "Puoi gestire i cookie tramite le impostazioni del tuo browser:",
      ],
      list: [
        "Chrome: Impostazioni > Privacy e sicurezza > Cookie e altri dati dei siti",
        "Firefox: Impostazioni > Privacy e Sicurezza > Cookie e Dati dei Siti",
        "Safari: Preferenze > Privacy > Gestisci Dati Siti Web",
        "Edge: Impostazioni > Cookie e autorizzazioni sito",
      ],
    },
    {
      title: "Disattivazione Google Analytics",
      paragraphs: [
        "Se desideri disattivare il tracciamento di Google Analytics su tutti i siti web, puoi installare il Componente Aggiuntivo Browser per la Disattivazione di Google Analytics:",
        "https://tools.google.com/dlpage/gaoptout",
      ],
    },
    {
      title: "Modifiche a Questa Politica",
      paragraphs: [
        "Potremmo aggiornare questa politica sui cookie di tanto in tanto per riflettere cambiamenti nelle nostre pratiche o requisiti legali. Ti preghiamo di rivedere questa pagina periodicamente.",
      ],
    },
  ],
  contact: {
    title: "Domande sui Cookie?",
    text: "Se hai domande sul nostro utilizzo dei cookie, contattaci tramite le informazioni di contatto fornite sul nostro sito web.",
  },
};

const de: CookiesContent = {
  meta: {
    title: "Cookie-Richtlinie | Visit Uffizi",
    description:
      "Cookie-Richtlinie für VisitUffizi.com - erfahren Sie, wie wir Cookies verwenden, um Ihre Erfahrung zu verbessern.",
  },
  breadcrumb: "Cookie-Richtlinie",
  h1: "Cookie-Richtlinie",
  lastUpdated: "Zuletzt aktualisiert: 12. März 2026",
  sections: [
    {
      title: "Was Sind Cookies?",
      paragraphs: [
        "Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Tablet, Smartphone) gespeichert werden, wenn Sie eine Website besuchen. Sie helfen Websites, sich an Ihre Präferenzen zu erinnern, Ihre Aktivität zu verfolgen und eine bessere Benutzererfahrung zu bieten.",
        "Cookies können \"Erstanbieter\" (von der besuchten Website gesetzt) oder \"Drittanbieter\" (von externen Diensten wie Werbenetzwerken gesetzt) sein.",
      ],
    },
    {
      title: "Wie Wir Cookies Verwenden",
      paragraphs: [
        "VisitUffizi.com verwendet Cookies für folgende Zwecke:",
      ],
      list: [
        "Wesentliche Funktionalität: Speichern Ihrer Sprachpräferenz und Zustimmungsoptionen",
        "Analyse: Verstehen, wie Besucher unsere Website nutzen (über Google Analytics)",
        "Werbung: Personalisierte Anzeigen anzeigen (über Google AdSense)",
        "Affiliate-Tracking: Buchungen unseren Affiliate-Links zuordnen und Provisionen verdienen",
      ],
    },
    {
      title: "Arten von Cookies, Die Wir Verwenden",
      paragraphs: ["Unsere Website verwendet folgende Cookie-Kategorien:"],
      table: {
        headers: ["Cookie-Typ", "Zweck", "Dauer", "Kann Deaktiviert Werden?"],
        rows: [
          [
            "Essentielle Cookies",
            "Erforderlich für Website-Funktionalität (Sprachauswahl, Zustimmungspräferenzen)",
            "1 Jahr",
            "Nein - für Website-Funktion erforderlich",
          ],
          [
            "Analyse-Cookies",
            "Google Analytics 4 - Seitenaufrufe, Benutzerverhalten, Traffic-Quellen verfolgen",
            "Bis zu 2 Jahre",
            "Ja - über Cookie-Banner",
          ],
          [
            "Werbe-Cookies",
            "Google AdSense - personalisierte Anzeigenauslieferung und Frequenzbegrenzung",
            "Bis zu 2 Jahre",
            "Ja - über Cookie-Banner",
          ],
          [
            "Affiliate-Cookies",
            "Klicks auf Affiliate-Links verfolgen, um Provisionen zuzuordnen (GetYourGuide, Tiqets, Viator)",
            "30-90 Tage",
            "Ja - über Browsereinstellungen",
          ],
        ],
      },
    },
    {
      title: "Spezifische Cookies, Die Wir Verwenden",
      paragraphs: [
        "Hier sind die wichtigsten Cookies und Kennungen auf VisitUffizi.com:",
      ],
      table: {
        headers: ["Cookie-Name", "Anbieter", "Zweck", "Dauer"],
        rows: [
          ["_ga", "Google Analytics", "Unterscheidet eindeutige Besucher", "2 Jahre"],
          ["_gid", "Google Analytics", "Unterscheidet eindeutige Besucher (kurzfristig)", "24 Stunden"],
          ["_gat", "Google Analytics", "Drosselt Anforderungsrate", "1 Minute"],
          ["__gads", "Google AdSense", "Registriert Anzeigenimpressionen und Klicks", "13 Monate"],
          ["__gpi", "Google AdSense", "Sammelt Informationen über Benutzerverhalten für Werbung", "13 Monate"],
          ["CONSENT", "Google", "Speichert Cookie-Zustimmungsstatus", "20 Jahre"],
          ["cookieConsent", "VisitUffizi.com", "Speichert Ihre Cookie-Präferenzen (essentiell, analytisch, werblich)", "1 Jahr"],
          ["NEXT_LOCALE", "Next.js", "Erinnert sich an Ihre Sprachpräferenz", "Sitzung/1 Jahr"],
        ],
      },
    },
    {
      title: "Drittanbieter-Cookies",
      paragraphs: [
        "Wenn Sie mit Inhalten von Drittanbieterdiensten interagieren, können diese Dienste ihre eigenen Cookies setzen:",
      ],
      list: [
        "Google Analytics: Analyse- und Tracking-Cookies",
        "Google AdSense: Werbe- und Personalisierungs-Cookies",
        "GetYourGuide: Affiliate-Tracking-Cookies (wenn Sie auf Buchungslinks klicken)",
        "Tiqets: Affiliate-Tracking-Cookies (wenn Sie auf Buchungslinks klicken)",
        "Viator: Affiliate-Tracking-Cookies (wenn Sie auf Buchungslinks klicken)",
        "",
        "Diese Dienste haben ihre eigenen Cookie-Richtlinien. Wir empfehlen, diese zu überprüfen:",
        "• Google-Datenschutzrichtlinie: https://policies.google.com/privacy",
        "• Google-Anzeigeneinstellungen: https://adssettings.google.com/",
      ],
    },
    {
      title: "Verwaltung Ihrer Cookie-Einstellungen",
      paragraphs: [
        "Sie haben mehrere Optionen zur Kontrolle und Verwaltung von Cookies:",
      ],
      list: [
        "Cookie-Banner: Verwenden Sie unser Cookie-Zustimmungsbanner, um nicht-essentielle Cookies zu akzeptieren oder abzulehnen",
        "Browsereinstellungen: Konfigurieren Sie Ihren Browser, um Cookies zu blockieren oder zu löschen",
        "Google-Anzeigeneinstellungen: Deaktivieren Sie personalisierte Werbung unter https://adssettings.google.com/",
        "Network Advertising Initiative: Deaktivieren Sie mehrere Werbenetzwerke unter https://optout.networkadvertising.org/",
        "",
        "Hinweis: Das Deaktivieren von Cookies kann die Website-Funktionalität beeinträchtigen. Essentielle Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich.",
      ],
    },
    {
      title: "Browserspezifische Cookie-Verwaltung",
      paragraphs: [
        "Sie können Cookies über Ihre Browsereinstellungen verwalten:",
      ],
      list: [
        "Chrome: Einstellungen > Datenschutz und Sicherheit > Cookies und andere Websitedaten",
        "Firefox: Einstellungen > Datenschutz & Sicherheit > Cookies und Website-Daten",
        "Safari: Einstellungen > Datenschutz > Website-Daten verwalten",
        "Edge: Einstellungen > Cookies und Website-Berechtigungen",
      ],
    },
    {
      title: "Google Analytics Opt-Out",
      paragraphs: [
        "Wenn Sie das Google Analytics-Tracking auf allen Websites deaktivieren möchten, können Sie das Google Analytics Opt-out Browser Add-on installieren:",
        "https://tools.google.com/dlpage/gaoptout",
      ],
    },
    {
      title: "Änderungen an Dieser Richtlinie",
      paragraphs: [
        "Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen in unseren Praktiken oder gesetzlichen Anforderungen widerzuspiegeln. Bitte überprüfen Sie diese Seite regelmäßig.",
      ],
    },
  ],
  contact: {
    title: "Fragen zu Cookies?",
    text: "Wenn Sie Fragen zu unserer Verwendung von Cookies haben, kontaktieren Sie uns bitte über die auf unserer Website angegebenen Kontaktinformationen.",
  },
};

const fr: CookiesContent = {
  meta: {
    title: "Politique des Cookies | Visit Uffizi",
    description:
      "Politique des cookies pour VisitUffizi.com - découvrez comment nous utilisons les cookies pour améliorer votre expérience.",
  },
  breadcrumb: "Politique des Cookies",
  h1: "Politique des Cookies",
  lastUpdated: "Dernière mise à jour : 12 mars 2026",
  sections: [
    {
      title: "Que Sont les Cookies ?",
      paragraphs: [
        "Les cookies sont de petits fichiers texte qui sont stockés sur votre appareil (ordinateur, tablette, smartphone) lorsque vous visitez un site web. Ils aident les sites web à se souvenir de vos préférences, à suivre votre activité et à fournir une meilleure expérience utilisateur.",
        "Les cookies peuvent être \"first-party\" (définis par le site web que vous visitez) ou \"third-party\" (définis par des services externes comme les réseaux publicitaires).",
      ],
    },
    {
      title: "Comment Nous Utilisons les Cookies",
      paragraphs: [
        "VisitUffizi.com utilise des cookies aux fins suivantes :",
      ],
      list: [
        "Fonctionnalité essentielle : Se souvenir de votre préférence linguistique et de vos choix de consentement",
        "Analyses : Comprendre comment les visiteurs utilisent notre site web (via Google Analytics)",
        "Publicité : Afficher des annonces personnalisées (via Google AdSense)",
        "Suivi d'affiliation : Attribuer les réservations à nos liens d'affiliation et gagner des commissions",
      ],
    },
    {
      title: "Types de Cookies que Nous Utilisons",
      paragraphs: ["Notre site web utilise les catégories de cookies suivantes :"],
      table: {
        headers: ["Type de Cookie", "Objectif", "Durée", "Peut Être Désactivé ?"],
        rows: [
          [
            "Cookies Essentiels",
            "Requis pour les fonctionnalités du site web (sélection de la langue, préférences de consentement)",
            "1 an",
            "Non - requis pour le fonctionnement du site",
          ],
          [
            "Cookies Analytiques",
            "Google Analytics 4 - suivre les pages vues, le comportement des utilisateurs, les sources de trafic",
            "Jusqu'à 2 ans",
            "Oui - via la bannière de cookies",
          ],
          [
            "Cookies Publicitaires",
            "Google AdSense - diffusion d'annonces personnalisées et limitation de fréquence",
            "Jusqu'à 2 ans",
            "Oui - via la bannière de cookies",
          ],
          [
            "Cookies d'Affiliation",
            "Suivre les clics sur les liens d'affiliation pour attribuer les commissions (GetYourGuide, Tiqets, Viator)",
            "30-90 jours",
            "Oui - via les paramètres du navigateur",
          ],
        ],
      },
    },
    {
      title: "Cookies Spécifiques que Nous Utilisons",
      paragraphs: [
        "Voici les principaux cookies et identifiants utilisés sur VisitUffizi.com :",
      ],
      table: {
        headers: ["Nom du Cookie", "Fournisseur", "Objectif", "Durée"],
        rows: [
          ["_ga", "Google Analytics", "Distingue les visiteurs uniques", "2 ans"],
          ["_gid", "Google Analytics", "Distingue les visiteurs uniques (court terme)", "24 heures"],
          ["_gat", "Google Analytics", "Limite le taux de demande", "1 minute"],
          ["__gads", "Google AdSense", "Enregistre les impressions et les clics sur les annonces", "13 mois"],
          ["__gpi", "Google AdSense", "Collecte des informations sur le comportement des utilisateurs pour la publicité", "13 mois"],
          ["CONSENT", "Google", "Stocke l'état du consentement aux cookies", "20 ans"],
          ["cookieConsent", "VisitUffizi.com", "Stocke vos préférences de cookies (essentiels, analytiques, publicitaires)", "1 an"],
          ["NEXT_LOCALE", "Next.js", "Se souvient de votre préférence linguistique", "Session/1 an"],
        ],
      },
    },
    {
      title: "Cookies Tiers",
      paragraphs: [
        "Lorsque vous interagissez avec du contenu provenant de services tiers, ces services peuvent définir leurs propres cookies :",
      ],
      list: [
        "Google Analytics : Cookies d'analyse et de suivi",
        "Google AdSense : Cookies publicitaires et de personnalisation",
        "GetYourGuide : Cookies de suivi d'affiliation (lorsque vous cliquez sur les liens de réservation)",
        "Tiqets : Cookies de suivi d'affiliation (lorsque vous cliquez sur les liens de réservation)",
        "Viator : Cookies de suivi d'affiliation (lorsque vous cliquez sur les liens de réservation)",
        "",
        "Ces services ont leurs propres politiques de cookies. Nous vous recommandons de consulter :",
        "• Politique de confidentialité de Google : https://policies.google.com/privacy",
        "• Paramètres des annonces Google : https://adssettings.google.com/",
      ],
    },
    {
      title: "Gestion de Vos Préférences de Cookies",
      paragraphs: [
        "Vous avez plusieurs options pour contrôler et gérer les cookies :",
      ],
      list: [
        "Bannière de Cookies : Utilisez notre bannière de consentement aux cookies pour accepter ou refuser les cookies non essentiels",
        "Paramètres du Navigateur : Configurez votre navigateur pour bloquer ou supprimer les cookies",
        "Paramètres des Annonces Google : Désactivez la publicité personnalisée sur https://adssettings.google.com/",
        "Network Advertising Initiative : Désactivez plusieurs réseaux publicitaires sur https://optout.networkadvertising.org/",
        "",
        "Remarque : La désactivation des cookies peut affecter les fonctionnalités du site web. Les cookies essentiels sont requis pour que le site fonctionne correctement.",
      ],
    },
    {
      title: "Gestion des Cookies Spécifique au Navigateur",
      paragraphs: [
        "Vous pouvez gérer les cookies via les paramètres de votre navigateur :",
      ],
      list: [
        "Chrome : Paramètres > Confidentialité et sécurité > Cookies et autres données de site",
        "Firefox : Paramètres > Vie privée et sécurité > Cookies et données de sites",
        "Safari : Préférences > Confidentialité > Gérer les données du site web",
        "Edge : Paramètres > Cookies et autorisations de site",
      ],
    },
    {
      title: "Désactivation de Google Analytics",
      paragraphs: [
        "Si vous souhaitez désactiver le suivi de Google Analytics sur tous les sites web, vous pouvez installer le module complémentaire de navigateur de désactivation de Google Analytics :",
        "https://tools.google.com/dlpage/gaoptout",
      ],
    },
    {
      title: "Modifications de Cette Politique",
      paragraphs: [
        "Nous pouvons mettre à jour cette politique de cookies de temps en temps pour refléter les changements dans nos pratiques ou les exigences légales. Veuillez consulter cette page périodiquement.",
      ],
    },
  ],
  contact: {
    title: "Questions sur les Cookies ?",
    text: "Si vous avez des questions sur notre utilisation des cookies, veuillez nous contacter via les informations de contact fournies sur notre site web.",
  },
};

const es: CookiesContent = {
  meta: {
    title: "Política de Cookies | Visit Uffizi",
    description:
      "Política de cookies para VisitUffizi.com - conozca cómo usamos las cookies para mejorar su experiencia.",
  },
  breadcrumb: "Política de Cookies",
  h1: "Política de Cookies",
  lastUpdated: "Última actualización: 12 de marzo de 2026",
  sections: [
    {
      title: "¿Qué Son las Cookies?",
      paragraphs: [
        "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, tableta, teléfono inteligente) cuando visita un sitio web. Ayudan a los sitios web a recordar sus preferencias, rastrear su actividad y proporcionar una mejor experiencia de usuario.",
        "Las cookies pueden ser \"de primera parte\" (establecidas por el sitio web que está visitando) o \"de terceros\" (establecidas por servicios externos como redes publicitarias).",
      ],
    },
    {
      title: "Cómo Usamos las Cookies",
      paragraphs: [
        "VisitUffizi.com usa cookies para los siguientes propósitos:",
      ],
      list: [
        "Funcionalidad esencial: Recordar su preferencia de idioma y opciones de consentimiento",
        "Análisis: Entender cómo los visitantes usan nuestro sitio web (a través de Google Analytics)",
        "Publicidad: Mostrar anuncios personalizados (a través de Google AdSense)",
        "Seguimiento de afiliados: Atribuir reservas a nuestros enlaces de afiliados y ganar comisiones",
      ],
    },
    {
      title: "Tipos de Cookies que Usamos",
      paragraphs: ["Nuestro sitio web usa las siguientes categorías de cookies:"],
      table: {
        headers: ["Tipo de Cookie", "Propósito", "Duración", "¿Se Puede Desactivar?"],
        rows: [
          [
            "Cookies Esenciales",
            "Requeridas para la funcionalidad del sitio web (selección de idioma, preferencias de consentimiento)",
            "1 año",
            "No - requeridas para que funcione el sitio",
          ],
          [
            "Cookies Analíticas",
            "Google Analytics 4 - rastrear vistas de páginas, comportamiento del usuario, fuentes de tráfico",
            "Hasta 2 años",
            "Sí - a través del banner de cookies",
          ],
          [
            "Cookies Publicitarias",
            "Google AdSense - entrega de anuncios personalizados y limitación de frecuencia",
            "Hasta 2 años",
            "Sí - a través del banner de cookies",
          ],
          [
            "Cookies de Afiliados",
            "Rastrear clics en enlaces de afiliados para atribuir comisiones (GetYourGuide, Tiqets, Viator)",
            "30-90 días",
            "Sí - a través de configuración del navegador",
          ],
        ],
      },
    },
    {
      title: "Cookies Específicas que Usamos",
      paragraphs: [
        "Aquí están las principales cookies e identificadores utilizados en VisitUffizi.com:",
      ],
      table: {
        headers: ["Nombre de Cookie", "Proveedor", "Propósito", "Duración"],
        rows: [
          ["_ga", "Google Analytics", "Distingue visitantes únicos", "2 años"],
          ["_gid", "Google Analytics", "Distingue visitantes únicos (corto plazo)", "24 horas"],
          ["_gat", "Google Analytics", "Limita la tasa de solicitudes", "1 minuto"],
          ["__gads", "Google AdSense", "Registra impresiones y clics de anuncios", "13 meses"],
          ["__gpi", "Google AdSense", "Recopila información sobre el comportamiento del usuario para publicidad", "13 meses"],
          ["CONSENT", "Google", "Almacena el estado del consentimiento de cookies", "20 años"],
          ["cookieConsent", "VisitUffizi.com", "Almacena sus preferencias de cookies (esenciales, analíticas, publicitarias)", "1 año"],
          ["NEXT_LOCALE", "Next.js", "Recuerda su preferencia de idioma", "Sesión/1 año"],
        ],
      },
    },
    {
      title: "Cookies de Terceros",
      paragraphs: [
        "Cuando interactúa con contenido de servicios de terceros, esos servicios pueden establecer sus propias cookies:",
      ],
      list: [
        "Google Analytics: Cookies de análisis y seguimiento",
        "Google AdSense: Cookies publicitarias y de personalización",
        "GetYourGuide: Cookies de seguimiento de afiliados (cuando hace clic en enlaces de reserva)",
        "Tiqets: Cookies de seguimiento de afiliados (cuando hace clic en enlaces de reserva)",
        "Viator: Cookies de seguimiento de afiliados (cuando hace clic en enlaces de reserva)",
        "",
        "Estos servicios tienen sus propias políticas de cookies. Recomendamos revisar:",
        "• Política de privacidad de Google: https://policies.google.com/privacy",
        "• Configuración de anuncios de Google: https://adssettings.google.com/",
      ],
    },
    {
      title: "Gestión de Sus Preferencias de Cookies",
      paragraphs: [
        "Tiene varias opciones para controlar y gestionar las cookies:",
      ],
      list: [
        "Banner de Cookies: Use nuestro banner de consentimiento de cookies para aceptar o rechazar cookies no esenciales",
        "Configuración del Navegador: Configure su navegador para bloquear o eliminar cookies",
        "Configuración de Anuncios de Google: Desactive la publicidad personalizada en https://adssettings.google.com/",
        "Network Advertising Initiative: Desactive múltiples redes publicitarias en https://optout.networkadvertising.org/",
        "",
        "Nota: Desactivar las cookies puede afectar la funcionalidad del sitio web. Las cookies esenciales son requeridas para que el sitio funcione correctamente.",
      ],
    },
    {
      title: "Gestión de Cookies Específica del Navegador",
      paragraphs: [
        "Puede gestionar las cookies a través de la configuración de su navegador:",
      ],
      list: [
        "Chrome: Configuración > Privacidad y seguridad > Cookies y otros datos del sitio",
        "Firefox: Configuración > Privacidad y seguridad > Cookies y datos del sitio",
        "Safari: Preferencias > Privacidad > Administrar datos del sitio web",
        "Edge: Configuración > Cookies y permisos del sitio",
      ],
    },
    {
      title: "Desactivación de Google Analytics",
      paragraphs: [
        "Si desea desactivar el seguimiento de Google Analytics en todos los sitios web, puede instalar el Complemento del Navegador para la Desactivación de Google Analytics:",
        "https://tools.google.com/dlpage/gaoptout",
      ],
    },
    {
      title: "Cambios en Esta Política",
      paragraphs: [
        "Podemos actualizar esta política de cookies de vez en cuando para reflejar cambios en nuestras prácticas o requisitos legales. Revise esta página periódicamente.",
      ],
    },
  ],
  contact: {
    title: "¿Preguntas Sobre las Cookies?",
    text: "Si tiene preguntas sobre nuestro uso de cookies, contáctenos a través de la información de contacto proporcionada en nuestro sitio web.",
  },
};

const cookiesTranslations: Record<string, CookiesContent> = {
  en,
  it,
  de,
  fr,
  es,
};

export function getCookiesContent(locale: string): CookiesContent {
  return cookiesTranslations[locale] || en;
}
