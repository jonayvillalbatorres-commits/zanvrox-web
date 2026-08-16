import { applyWorkforceBetaCampaign } from './workforceBetaCampaign';

const siteContentFr = {
  locale: 'fr',
  localeLabel: 'Francais',
  labels: {
    menu: 'Menu',
    bookDemo: 'Presentation guidee',
    tryDemo: 'Ouvrir l espace',
    getTechnicalBrief: 'Contacter l equipe',
    reviewResources: 'Voir les ressources',
    language: 'Langue',
    requestQuote: 'Parler aux ventes',
    login: 'Se connecter',
    requestBeta: 'Demander la beta',
    support: 'Assistance',
  },
  navItems: [
    { label: 'Accueil', path: '/' },
    { label: 'ERP', path: '/erp' },
    { label: 'Workforce', path: '/workforce' },
    { label: 'Tarifs', path: '/pricing' },
    { label: 'Ressources', path: '/resources' },
    { label: 'Securite', path: '/security' },
    { label: 'A propos', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  workforceNav: {
    items: [
      { label: 'Workforce', path: '/workforce' },
      { label: 'Fonctionnalites', path: '/workforce#features' },
      { label: 'Restaurants', path: '/workforce/restaurants' },
      { label: 'Tarifs', path: '/workforce/pricing' },
      { label: 'Beta', path: '/workforce/beta' },
      { label: 'Securite', path: '/security' },
    ],
    erpLink: { label: 'ZANVROX ERP', path: '/erp' },
  },
  brand: {
    name: 'ZANVROX',
    tagline: 'Controle ERP integre pour les PME canadiennes',
    oneLiner:
      'Finance, operations, conformite canadienne et paie dans une seule pile ERP controlee.',
  },
  pages: {
    home: {
      heroKicker: 'ERP canadien pour la finance, les operations et l auditabilite',
      heroTitle:
        'Pilotez la finance et les operations dans un ERP maitrise au lieu de cinq outils deconnectes.',
      heroSubtitle:
        'ZANVROX aide les PME canadiennes a centraliser la comptabilite, la facturation, les achats, l inventaire, la production, les approbations et la conformite sans projet d implementation lourd.',
      heroPrimaryCta: { label: 'Voir l apercu produit', path: '/#product-overview' },
      heroSecondaryCta: {
        label: 'Ouvrir l espace d evaluation',
        path: '/resources#demo-environment',
      },
      heroPreview: {
        title: 'Apercu fiscal et controle',
        caption: 'En direct dans l ERP',
        callouts: [
          { status: 'ready', text: 'Reporting GST/HST + PST/QST' },
          { status: 'ready', text: 'Piste d audit et approbations' },
        ],
      },
      video: {
        title: 'Presentation produit avec un vrai contexte de workflow',
        subtitle:
          'Un apercu rapide de la finance, des operations, des flux fiscaux canadiens et de la preparation de la paie.',
        windowLabel: 'Video produit',
        duration: '90 sec',
        overlayLabel: 'Voir la presentation produit',
        fallbackLabel: 'Apercu de l affiche disponible',
        hasRealVideo: true,
        chapters: [
          'Comptabilite et facturation',
          'Inventaire et entrepot',
          'Planification de la production',
          'Tableau de bord fiscal',
          'Espace paie',
          'Rapports et approbations',
        ],
        primaryCta: { label: 'Explorer le produit', path: '/erp' },
        secondaryCta: {
          label: 'Ouvrir l espace d evaluation',
          path: '/resources#demo-environment',
        },
      },
      trustSignals: [
        'Les workflows officiels soutenus par les fournisseurs restent disponibles lorsque c est necessaire.',
        'Les changements sont gouvernes par des approbations et une piste d audit.',
        'Un parcours de configuration autonome existe pour les petites equipes avec une implementation guidee en option.',
        'Une posture de conformite canadienne sans surpromesse marketing.',
      ],
      statusBadges: [
        { status: 'ready', text: 'Comptabilite, facturation, depenses et reporting' },
        { status: 'ready', text: 'Inventaire, entrepot et workflows BOM' },
        { status: 'ready', text: 'Support des workflows fiscaux canadiens' },
        { status: 'ready', text: 'Add-on paie avec espace de fin d annee' },
        { status: 'locked', text: 'Controles de gouvernance et d auditabilite' },
        { status: 'ready', text: 'Parcours d onboarding autonome' },
      ],
      productLines: {
        eyebrow: 'Une plateforme, deux facons de commencer',
        title: 'Deux facons de gerer votre entreprise avec ZANVROX',
        subtitle:
          'Commencez avec Workforce pour les operations de terrain par quart, avec ZANVROX ERP pour la finance et les operations d entreprise, ou avec les deux ensemble.',
        cards: [
          {
            name: 'ZANVROX ERP',
            headline:
              'Finance, inventaire, achats et operations dans une seule plateforme connectee.',
            cta: { label: 'Explorer ERP', path: '/erp' },
          },
          {
            name: 'ZANVROX Workforce',
            headline:
              'Pointage, plannings, taches et feuilles de temps pour les equipes de terrain.',
            cta: { label: 'Explorer Workforce', path: '/workforce' },
          },
        ],
        note: 'Commencez avec Workforce. Ajoutez l ERP lorsque vous en avez besoin. Vous gerez deja votre entreprise avec ZANVROX ? Workforce est inclus avec Operations.',
      },
      evaluationPath: {
        eyebrow: 'Tunnel axe produit',
        title: 'Evaluez sans reserver une reunion d abord',
        subtitle:
          'Le site est concu pour reduire les appels inutiles et permettre aux equipes de se qualifier seules.',
        cards: [
          {
            title: '1. Voir l apercu',
            body: 'Commencez par la video produit pour comprendre comment la finance, les operations, la fiscalite et la paie s articulent.',
          },
          {
            title: '2. Explorer le produit',
            body: 'Passez en revue les groupes fonctionnels, les captures et les controles de gouvernance par module et par processus metier.',
          },
          {
            title: '3. Ouvrir l espace d evaluation',
            body: 'Utilisez l espace navigateur avec des donnees fictives pour valider la navigation, l adequation des roles et la couverture des workflows.',
          },
          {
            title: '4. Demander de l aide seulement si necessaire',
            body: 'Utilisez le formulaire de contact ou de demo en option uniquement si votre equipe a une question d evaluation concrete.',
          },
        ],
      },
      screenshots: {
        eyebrow: 'Ecrans et workflows',
        title: 'Des ecrans concus pour montrer une vraie couverture operationnelle',
        subtitle:
          'Chaque section ci-dessous est prete pour de vraies captures et utilise des apercus produit lorsqu une capture finale n est pas encore disponible.',
        items: [
          {
            title: 'Tableau de bord fiscal canadien',
            body: 'Suivez l etat de preparation des depots, les familles de taxes et les controles de cloture depuis une seule vue finance.',
            previewType: 'reports',
            imageKey: 'taxDashboard',
            imageAlt: 'Tableau de bord fiscal canadien dans ZANVROX ERP',
          },
          {
            title: 'Gestion des stocks',
            body: 'Consultez les positions de stock, les mouvements d entrepot et la visibilite par lot sans quitter l ERP.',
            previewType: 'inventory',
          },
          {
            title: 'Planification de la production',
            body: 'Consultez les ordres de production lies au BOM, la consommation matiere et l avancement de l execution dans une seule surface.',
            previewType: 'production',
          },
          {
            title: 'Reporting financier',
            body: 'Passez de l activite operationnelle au reporting de gestion sans recoller plusieurs outils.',
            previewType: 'accounting',
          },
        ],
      },
      howItWorks: {
        eyebrow: 'Onboarding autonome',
        title: 'Demarrez en six etapes guidees',
        subtitle:
          'Le produit est concu pour qu une equipe dirigee par ses fondateurs puisse se repérer sans projet d onboarding lourd.',
        steps: [
          {
            icon: '1',
            title: 'Creer l organisation',
            bullets: ['Demarrer votre espace', 'Definir les bases de l entite legale'],
          },
          {
            icon: '2',
            title: 'Selectionner le pays',
            bullets: ['Choisir le Canada', 'Charger les valeurs par defaut specifiques au pays'],
          },
          {
            icon: '3',
            title: 'Choisir un modele sectoriel',
            bullets: ['Choisir un modele de depart', 'Reduire la friction de configuration'],
          },
          {
            icon: '4',
            title: 'Configurer les taxes',
            bullets: [
              'Definir les familles de taxes',
              'Confirmer la logique provinciale et les valeurs par defaut',
            ],
          },
          {
            icon: '5',
            title: 'Importer clients et fournisseurs',
            bullets: ['Importer les donnees maitres', 'Utiliser des modeles et la validation'],
          },
          {
            icon: '6',
            title: 'Creer la premiere facture',
            bullets: ['Valider le flux operationnel', 'Passer a l utilisation quotidienne'],
          },
        ],
      },
      compliance: {
        eyebrow: 'Posture canadienne',
        title: 'Concu pour la credibilite, pas pour l effet d annonce',
        subtitle:
          'Le site explique ce qui est controle, ce qui est automatise et ce qui exige encore une revue.',
        bullets: [
          'Les workflows fiscaux canadiens sont presentes avec une posture explicite de depot et d auditabilite.',
          'La paie est positionnee comme un add-on separe avec un perimetre clair et un niveau de preparation precise par juridiction.',
          'Les approbations, la gouvernance et les attentes de support sont affirmees directement au lieu d etre enterrees dans des appels commerciaux.',
        ],
        coverageLabel: 'Posture commerciale actuelle',
        coverage: 'Meilleur fit pour les PME canadiennes de 10 a 50 employes',
        note: 'Les workflows officiels soutenus par les fournisseurs restent disponibles lorsqu une promesse de niveau entreprise plus forte ne serait pas justifiee.',
        provinces: ['ON', 'QC', 'AB', 'BC', 'MB', 'SK', 'NS', 'NB'],
      },
      included: {
        eyebrow: 'Ce qui est integre',
        title: 'Une seule pile pour la finance et les operations',
        subtitle:
          'L enjeu n est pas d afficher plus de fonctions sur le papier. L enjeu est d avoir moins de workflows fractures dans la pratique.',
        items: [
          'Comptabilite, facturation, depenses et reporting financier',
          'Achats, inventaire, entrepot et bases de production',
          'Approbations, gouvernance et piste d audit operationnelle',
          'Workflows de conformite canadienne et support de l add-on paie',
          'Multi-company et gouvernance avancee pour le perimetre d entreprise',
          'Intelligence ERP et assistance AI avec posture controlee',
        ],
      },
      executiveSnapshot: {
        badge: 'Modele operationnel',
        title: 'Concu pour l autoevaluation d abord, l aide humaine ensuite',
        subtitle:
          'C est un site axe produit pour un ERP serieux, pas une brochure qui force chaque prospect a prendre un appel.',
        metrics: [
          { label: 'ICP principal', value: '10-50', note: 'Employes de PME canadiennes' },
          {
            label: 'Posture de support',
            value: 'Priorite a l email',
            note: 'Delais de reponse clairs par plan',
          },
          {
            label: 'Posture d onboarding',
            value: 'Configuration autonome',
            note: 'Implementation guidee disponible en option',
          },
        ],
      },
      positioning: {
        eyebrow: 'Pourquoi les equipes changent',
        title: 'Reduire la fragmentation entre finance, operations et conformite',
        subtitle:
          'La proposition de valeur repose sur le controle, la visibilite et moins de transferts entre systemes.',
        cards: [
          {
            role: 'Finance',
            headline: 'Cloturez avec moins de systemes deconnectes.',
            points: [
              'Comptabilite, facturation, depenses et rapports dans un seul systeme.',
              'Limites de support claires et controles lies aux periodes.',
              'Posture de conformite canadienne sans surpromettre l automatisation.',
            ],
          },
          {
            role: 'Operations',
            headline: 'Gardez le stock, les achats et la production synchronises.',
            points: [
              'Les workflows d inventaire et d entrepot sont relies a la finance.',
              'Les bases BOM et production existent sans middleware supplementaire.',
              'Des signaux de revue operationnelle et de gouvernance existent la ou c est necessaire.',
            ],
          },
          {
            role: 'Management',
            headline: 'Obtenez un meilleur support a la decision.',
            points: [
              'Moins de rapprochements manuels entre outils.',
              'Les attentes de support et le perimetre d onboarding sont explicites.',
              'Une meilleure qualification des leads avant de mobiliser du temps interne.',
            ],
          },
          {
            role: 'IT / Ops',
            headline: 'Adoptez avec un perimetre discipline.',
            points: [
              'Un sequencement clair d implementation pour les petites equipes.',
              'Des changements gouvernes et des workflows auditables.',
              'Une couche marketing compatible site statique avec des metadonnees structurees.',
            ],
          },
        ],
      },
      technical: {
        eyebrow: 'Modele de support et d onboarding',
        title: 'Self-service par defaut, aide guidee quand elle compte',
        subtitle:
          'Le site fixe les attentes en amont pour que les petites equipes sachent ce qui se passe apres l inscription.',
        items: [
          'Finance inclut un onboarding autonome et un support email avec reponse sous 48 h.',
          'Operations ajoute un support email prioritaire avec reponse sous 24 h.',
          'Enterprise inclut une assistance d onboarding et un canal de support direct.',
        ],
      },
      supportModel: {
        title: 'Attentes de support par plan',
        subtitle: 'Le support est defini directement afin que l evaluation reste realiste.',
        tiers: [
          {
            name: 'Finance',
            body: 'Support email, reponse sous 48 h, accompagnement d onboarding autonome.',
          },
          {
            name: 'Operations',
            body: 'Support email prioritaire, reponse sous 24 h, accompagnement operationnel renforce.',
          },
          {
            name: 'Enterprise',
            body: 'Onboarding dedie, canal de support direct et assistance de deploiement cadree.',
          },
        ],
      },
      demoEnvironment: {
        title: 'Ouvrir l espace d evaluation ZANVROX',
        subtitle:
          'Utilisez un espace navigateur avec des donnees fictives avant de demander une presentation guidee.',
        emailLabel: 'Utilisateur de demo',
        emailValue: 'Use your work email',
        passwordLabel: 'Mot de passe',
        passwordValue: 'Set during signup',
        note: 'Evaluation navigateur uniquement. Cet espace reste separe de la planification d implementation et des attentes de production.',
        cta: { label: 'Ouvrir l espace d evaluation', path: '/resources#demo-environment' },
      },
      restaurantBetaBanner: {
        eyebrow: 'Restaurants de l Ontario',
        title: 'Rejoignez la beta privee ZANVROX Workforce',
        body: 'Test de 14 jours. 6 mois offerts apres le lancement.',
        cta: { label: 'En savoir plus', path: '/workforce/beta' },
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Les questions que les equipes posent avant d y consacrer du temps',
        items: [
          {
            question: 'Peut-on evaluer ZANVROX sans reserver une demo d abord ?',
            answer:
              'Oui. Le parcours prevu est de voir l apercu, d explorer le produit, d ouvrir l espace d evaluation et de demander de l aide seulement si votre equipe en a besoin.',
          },
          {
            question: 'La paie est-elle incluse dans les plans de base ?',
            answer:
              'Non. La paie est un add-on separe avec une tarification distincte afin que les equipes centrees sur la finance ne la paient pas par defaut.',
          },
          {
            question: 'Faut-il un projet d onboarding payant ?',
            answer:
              'Non. La configuration autonome est le parcours par defaut. Guided Implementation est disponible comme package payant optionnel lorsque votre equipe veut de l aide pour la configuration et l import des donnees.',
          },
          {
            question: 'Quel support faut-il attendre ?',
            answer:
              'Finance inclut un support email sous 48 h, Operations inclut un support email prioritaire sous 24 h et Enterprise inclut une aide d onboarding ainsi qu un canal de support direct.',
          },
        ],
      },
      cta: {
        title: 'Commencez par le produit, pas par un appel commercial',
        subtitle:
          'Explorez d abord le produit et les tarifs. Contactez l equipe lorsque vous avez une question concrete de deploiement, de paie ou d integration.',
        primary: { label: 'Explorer le produit', path: '/erp' },
        secondary: { label: 'Voir les tarifs', path: '/pricing' },
      },
    },
    product: {
      heroKicker: 'ZANVROX ERP',
      heroTitle:
        'Pilotez la finance, les operations et la main-d oeuvre depuis une seule plateforme connectee.',
      heroSubtitle:
        'ZANVROX ERP est une plateforme controlee pour les PME canadiennes qui couvre la finance, la facturation, les depenses, les clients et fournisseurs, les achats, l inventaire, les emplacements, les operations, le reporting, les workflows de paie et ZANVROX Workforce.',
      heroPrimaryCta: { label: 'Voir les tarifs', path: '/pricing' },
      heroSecondaryCta: {
        label: 'Ouvrir l espace d evaluation',
        path: '/resources#demo-environment',
      },
      heroPreview: {
        title: 'Apercu operations',
        type: 'inventory',
        caption: 'Une seule couche de donnees operationnelles',
        callouts: [
          { status: 'ready', text: 'Inventaire, entrepot, BOM, production' },
          { status: 'ready', text: 'Gouvernance et approbations' },
        ],
      },
      pillars: {
        title: 'Piliers produit',
        subtitle:
          'Le site explique le produit autour des workflows, pas de puces de fonctions deconnectees.',
        items: [
          {
            title: 'Noyau finance',
            body: 'Comptabilite, facturation, depenses, clients, fournisseurs, visibilite bancaire et reporting.',
          },
          {
            title: 'Operations',
            body: 'Achats, inventaire, emplacements, entrepot, BOM, bases de production et approbations.',
          },
          {
            title: 'Conformite canadienne',
            body: 'Workflows fiscaux, add-on paie, support des remises et dossiers de fin d annee pour appuyer la revue.',
          },
          {
            title: 'Gouvernance',
            body: 'Auditabilite, approbations, limites de controle et chemin d expansion multi-entreprise.',
          },
          {
            title: 'ZANVROX Workforce',
            body: 'Pointage (entree/sortie), plannings, taches et feuilles de temps pour les equipes de terrain, inclus avec les plans ERP eligibles ou disponible en autonome.',
          },
        ],
      },
      showcase: {
        title: 'Zones produit a evaluer visuellement',
        subtitle:
          'Ce sont les ecrans que la plupart des equipes veulent inspecter avant d investir plus de temps dans des conversations commerciales approfondies.',
        items: [
          {
            title: 'Tableau de bord fiscal',
            body: 'Montre la posture de depot, l avancement de la conformite et la visibilite des workflows de support.',
            previewType: 'reports',
            imageKey: 'taxDashboard',
            imageAlt: 'Tableau de bord fiscal dans ZANVROX ERP',
          },
          {
            title: 'Controle des stocks',
            body: 'Montre la visibilite du stock, le routage d entrepot et les signaux de preparation operationnelle.',
            previewType: 'inventory',
          },
          {
            title: 'Planification de la production',
            body: 'Montre la planification operationnelle liee au BOM et l avancement de l execution.',
            previewType: 'production',
          },
          {
            title: 'Reporting financier',
            body: 'Montre un reporting connecte de l activite operationnelle vers la finance.',
            previewType: 'reports',
          },
        ],
      },
      stacks: [
        {
          title: 'Finance et operations integrees',
          subtitle:
            'Concu pour reduire les transferts entre outils dans le segment des 10-50 employes.',
          items: [
            'La comptabilite et la facturation vivent dans le meme systeme que les achats et les depenses.',
            'Les donnees d inventaire, d entrepot et de BOM restent liees a l ecriture financiere.',
            'Les approbations et la gouvernance peuvent etre ajoutees sans outils operationnels distincts.',
            'ZANVROX Workforce relie les donnees de pointage, de planning et de feuilles de temps des equipes de terrain a la meme plateforme.',
          ],
        },
        {
          title: 'Posture de controle canadienne',
          subtitle: 'Concu pour etre credible dans un contexte operationnel canadien.',
          items: [
            'Le support fiscal canadien est explique avec un langage de workflow concret.',
            'La paie reste un add-on avec un perimetre et une tarification explicites.',
            'Les promesses sont alignees sur la posture reelle de gouvernance, de preparation et de revue.',
          ],
        },
      ],
      onboarding: {
        title: 'Comment la configuration autonome fonctionne en pratique',
        subtitle:
          'La page produit rappelle que l onboarding est guide dans le produit, pas masque derriere du conseil par defaut.',
        steps: [
          {
            number: '1',
            title: 'Creer l organisation',
            body: 'Creez votre espace et partez d une base operationnelle propre.',
          },
          {
            number: '2',
            title: 'Selectionner le Canada',
            body: 'Appliquez les valeurs par defaut specifiques au pays et les hypotheses de conformite.',
          },
          {
            number: '3',
            title: 'Choisir un modele sectoriel',
            body: 'Partez d une base pratique au lieu de tout configurer a zero.',
          },
          {
            number: '4',
            title: 'Configurer les taxes',
            body: 'Confirmez le routage fiscal, les enregistrements et les controles financiers.',
          },
          {
            number: '5',
            title: 'Importer les donnees maitres',
            body: 'Importez clients, fournisseurs et enregistrements operationnels cles.',
          },
          {
            number: '6',
            title: 'Executer la premiere transaction',
            body: 'Creez la premiere facture et validez le flux operationnel de bout en bout.',
          },
        ],
        note: 'Guided Implementation est disponible lorsque votre equipe souhaite de l aide pour la configuration, la revue du chart of accounts, l import des donnees et la formation.',
      },
      cta: {
        title: 'Verifiez si le perimetre produit correspond a votre entreprise aujourd hui',
        subtitle:
          'Utilisez les tarifs et les ressources pour decider si vous avez besoin d une configuration autonome, d une implementation guidee ou d une conversation d entreprise.',
        primary: { label: 'Voir les tarifs', path: '/pricing' },
        secondary: { label: 'Contacter l equipe', path: '/contact' },
      },
    },
    pricingHub: {
      heroTitle: 'Deux produits. Deux grilles tarifaires independantes.',
      heroSubtitle:
        'Choisissez ZANVROX Workforce pour les operations de terrain par quart, ZANVROX ERP pour la finance et les operations d entreprise, ou les deux. Chacun a sa propre page de tarifs.',
      erpCard: {
        eyebrow: 'ZANVROX ERP',
        title: 'Finance et operations d entreprise',
        body: 'Comptabilite, facturation, achats, inventaire et reporting pour les equipes PME canadiennes.',
        bullets: ['Finance', 'Business', 'Operations', 'Enterprise'],
        cta: { label: 'Voir les tarifs ERP', path: '/erp/pricing' },
      },
      workforceCard: {
        eyebrow: 'ZANVROX Workforce',
        title: 'Gestion des equipes de terrain',
        body: 'Pointage, plannings, taches et feuilles de temps, tarifie par etablissement.',
        bullets: ['Starter', 'Team', 'Business', 'Multi-location'],
        cta: { label: 'Voir les tarifs Workforce', path: '/workforce/pricing' },
      },
      differenceNote:
        'ZANVROX ERP et ZANVROX Workforce sont vendus et tarifes independamment. Les plans ERP eligibles incluent une remise ou une inclusion Workforce — voir les tarifs ERP pour le detail des offres groupees.',
    },
    pricing: {
      heroTitle: 'Tarifs pour ZANVROX ERP et ZANVROX Workforce.',
      heroSubtitle:
        'Commencez avec Workforce pour les operations de terrain par quart, avec ZANVROX ERP pour la finance et les operations d entreprise, ou avec les deux ensemble. Une tarification CAD transparente pour les equipes PME canadiennes.',
      pricingNote:
        'Prix en dollars canadiens. Taxes non incluses. La tarification peut varier pour les deploiements d entreprise ou a fort volume. La paie est un add-on distinct. ZANVROX aide a organiser les workflows financiers, de paie et de main-d oeuvre, mais ne remplace pas les conseils comptables, juridiques ou fiscaux.',
      upgradePath: {
        eyebrow: 'Commencez la ou en est votre entreprise aujourd hui',
        title: 'Une seule plateforme a mesure que votre entreprise grandit',
        subtitle:
          'Ce n est pas une sequence obligatoire. Une entreprise peut souscrire directement au plan qui lui convient aujourd hui.',
        steps: [
          { name: 'Workforce', body: 'CAD 29-79 par emplacement' },
          { name: 'Finance', body: 'CAD 179 / mois' },
          { name: 'Business', body: 'CAD 349 / mois' },
          { name: 'Operations', body: 'CAD 649 / mois, Workforce inclus' },
          { name: 'Enterprise', body: 'Personnalise' },
        ],
        note: 'Vous gerez deja votre entreprise avec ZANVROX ? Workforce est inclus avec Operations.',
      },
      bundleOffers: {
        operationsIncluded: {
          title: 'Operations inclut ZANVROX Workforce',
          body: 'ZANVROX Workforce est inclus pour les employes et emplacements couverts par votre abonnement ERP. Aucun frais Workforce distinct pour ce perimetre.',
        },
        businessDiscount: {
          title: '50 % de reduction sur Workforce avec Business',
          body: 'Les clients ERP Business beneficient de 50 % de reduction sur leur plan ZANVROX Workforce autonome eligible.',
        },
        financeStandalone: {
          title: 'Finance et Workforce, independamment',
          body: 'Finance n inclut ni Workforce ni de reduction sur Workforce. Vous pouvez acheter Finance et ZANVROX Workforce a la tarification standard autonome, sans aucune obligation de passer a Business ou Operations.',
        },
      },
      workforce: {
        title: 'ZANVROX Workforce',
        subtitle:
          'Pointage, plannings, taches et feuilles de temps pour les equipes de terrain, facture par emplacement.',
        launchBadge: 'Facturation annuelle disponible',
        launchOfferLabel:
          'Les plans Workforce annuels incluent deux mois offerts en facturation annuelle.',
        launchOfferNote:
          'La tarification indiquee ici est informative ; la facturation est confirmee au demarrage.',
        popularLabel: 'Le plus populaire',
        priceSuffixMonthly: '/mois par emplacement',
        priceSuffixAnnual: '/an par emplacement',
        annualDisplayMode: 'total',
        billedMonthlyLabel: 'Facturation mensuelle',
        billedAnnuallyLabel: 'Facturation annuelle',
        fromLabel: 'A partir de',
        customLabel: 'Tarification personnalisee',
        includesLabel: 'Inclus',
        entitiesIncludedLabel: 'Perimetre de facturation',
        usersIncludedLabel: 'Employes inclus',
        billingToggle: {
          monthly: 'Mensuel',
          annual: 'Annuel',
          annualBadge: '2 mois offerts',
          helper:
            'La facturation annuelle modifie uniquement la duree de l abonnement de base et equivaut a 10 mois du tarif mensuel.',
        },
        tiers: [
          {
            slug: 'workforce-starter',
            name: 'Starter',
            summary:
              'Pour un site unique qui a besoin de pointage, de plannings et de feuilles de temps dans une seule application.',
            entitiesLabel: 'Facture par emplacement',
            usersLabel: 'Jusqu a 10 employes',
            monthly: { kind: 'fixed', amount: 29, note: 'Facture par emplacement, par mois.' },
            annual: {
              kind: 'fixed',
              amount: 29,
              totalAmount: 290,
              badge: '2 mois offerts',
              note: 'Equivaut a 10 mois de facturation mensuelle. 2 mois offerts.',
            },
            included: [
              'Pointage (entree/sortie)',
              'Verification de localisation',
              'Feuilles de temps',
              'Plannings',
              'Taches',
            ],
            ctaLabel: 'Commencer avec Starter',
          },
          {
            slug: 'workforce-team',
            name: 'Team',
            isPopular: true,
            summary:
              'Pour les sites qui ont besoin de controles gestionnaires, de demandes de quarts et d un reporting renforce.',
            entitiesLabel: 'Facture par emplacement',
            usersLabel: 'Jusqu a 25 employes',
            monthly: { kind: 'fixed', amount: 49, note: 'Facture par emplacement, par mois.' },
            annual: {
              kind: 'fixed',
              amount: 49,
              totalAmount: 490,
              badge: '2 mois offerts',
              note: 'Equivaut a 10 mois de facturation mensuelle. 2 mois offerts.',
            },
            included: [
              'Tout ce qui est inclus dans Starter',
              'Controles gestionnaires',
              'Quarts ouverts et demandes de quarts',
              'Communication d equipe',
              'Reporting ameliore',
              'Controles operationnels supplementaires',
            ],
            ctaLabel: 'Commencer avec Team',
          },
          {
            slug: 'workforce-business',
            name: 'Business',
            summary:
              'Pour les sites plus grands qui ont besoin de controles gestionnaires avances et de plusieurs gestionnaires.',
            entitiesLabel: 'Facture par emplacement',
            usersLabel: 'Jusqu a 50 employes',
            monthly: { kind: 'fixed', amount: 79, note: 'Facture par emplacement, par mois.' },
            annual: {
              kind: 'fixed',
              amount: 79,
              totalAmount: 790,
              badge: '2 mois offerts',
              note: 'Equivaut a 10 mois de facturation mensuelle. 2 mois offerts.',
            },
            included: [
              'Tout ce qui est inclus dans Team',
              'Controles gestionnaires avances',
              'Reporting supplementaire',
              'Plusieurs gestionnaires',
              'Operations de main-d oeuvre avancees',
            ],
            ctaLabel: 'Commencer avec Business',
          },
          {
            slug: 'workforce-multi-location',
            name: 'Multi-etablissements',
            summary:
              'Pour les chaines, les groupes multi-etablissements et les sites de plus de 50 employes.',
            entitiesLabel: 'Tarification multi-etablissements personnalisee',
            usersLabel: '50+ employes par emplacement',
            monthly: {
              kind: 'custom',
              label: 'Tarification personnalisee',
              note: 'Cadre pour les chaines, les groupes multi-etablissements et les besoins operationnels particuliers.',
            },
            annual: {
              kind: 'custom',
              label: 'Tarification personnalisee',
              note: 'Cadre directement selon le nombre d emplacements et d employes.',
            },
            included: [
              '50+ employes par emplacement',
              'Support multi-etablissements et chaines',
              'Besoins operationnels particuliers',
              'Deploiement et support personnalises',
            ],
            ctaLabel: 'Demander une tarification multi-etablissements',
          },
        ],
        comparison: {
          title: 'Comparaison des plans Workforce',
          subtitle: 'Comparez Starter, Team et Business pour un seul emplacement.',
          featureLabel: 'Capacite',
          rows: [
            { label: 'Pointage (entree/sortie)', values: [true, true, true] },
            { label: 'Verification de localisation', values: [true, true, true] },
            { label: 'Feuilles de temps', values: [true, true, true] },
            { label: 'Plannings', values: [true, true, true] },
            { label: 'Taches', values: [true, true, true] },
            { label: 'Controles gestionnaires', values: [false, true, true] },
            { label: 'Quarts ouverts / demandes de quarts', values: [false, true, true] },
            { label: 'Communication d equipe', values: [false, true, true] },
            { label: 'Reporting ameliore', values: [false, true, true] },
            { label: 'Controles gestionnaires avances', values: [false, false, true] },
            { label: 'Plusieurs gestionnaires', values: [false, false, true] },
            { label: 'Employes inclus', values: ['10', '25', '50'] },
          ],
          notesTitle: 'Notes commerciales',
          notes: [
            'Facture par emplacement, par mois.',
            'Les sites multi-etablissements et de plus de 50 employes utilisent une tarification personnalisee.',
            'La facturation annuelle inclut deux mois offerts (10 mois du tarif mensuel).',
          ],
          annualNote: 'Les plans Workforce annuels incluent deux mois offerts.',
        },
        betaBanner: {
          eyebrow: 'Restaurants de l Ontario',
          title: 'Essayez Workforce gratuitement pendant 14 jours avant d acheter',
          body: 'Les restaurants de l Ontario peuvent postuler a la beta privee : aucun engagement d achat, et 6 mois gratuits apres le lancement public.',
          cta: { label: 'Postuler a la beta gratuite', path: '/workforce/beta' },
        },
        faq: {
          title: 'Questions sur les tarifs Workforce',
          items: [
            {
              question: 'Puis-je acheter Workforce sans l ERP ?',
              answer:
                'Oui. ZANVROX Workforce est disponible en plan autonome, tarife par etablissement, sans obligation d acheter ou de passer a un plan ERP.',
            },
            {
              question: 'Vous utilisez deja ZANVROX ERP ?',
              answer:
                'Operations inclut ZANVROX Workforce pour les employes et etablissements couverts par cet abonnement ERP. Business donne droit a 50% de remise sur un plan Workforce autonome eligible. Voir les tarifs ERP pour le detail.',
            },
          ],
        },
      },
      erp: {
        title: 'ZANVROX ERP',
        subtitle:
          'Controle financier, operations d entreprise et workflows connectes pour les equipes PME canadiennes.',
        launchBadge: 'Facturation annuelle disponible',
        launchOfferLabel:
          'Les abonnements de base annuels incluent un mois offert en facturation annuelle.',
        launchOfferNote:
          'La tarification de la paie reste a l usage, et Guided Implementation est disponible lorsqu un deploiement plus structure est necessaire.',
        popularLabel: 'Le plus populaire',
        priceSuffixMonthly: '/mois',
        billedMonthlyLabel: 'Facturation mensuelle',
        billedAnnuallyLabel: 'Facturation annuelle',
        fromLabel: 'A partir de',
        customLabel: 'Personnalise',
        includesLabel: 'Inclus',
        entitiesIncludedLabel: 'Perimetre commercial',
        usersIncludedLabel: 'Utilisateurs inclus',
        billingToggle: {
          monthly: 'Mensuel',
          annual: 'Annuel',
          annualBadge: '1 mois offert',
          helper:
            'La facturation annuelle modifie seulement la duree de l abonnement de base. La paie reste facturee selon un forfait de base plus le nombre d employes.',
        },
        tiers: [
          {
            slug: 'finance',
            name: 'Finance',
            summary:
              'Controle financier pour les entreprises en croissance : facturation, depenses et reporting.',
            entitiesLabel: 'Perimetre mono-entreprise',
            usersLabel: 'Jusqu a 3 utilisateurs',
            monthly: {
              kind: 'fixed',
              amount: 179,
              note: 'Inclut un accompagnement de configuration autonome, des workflows financiers controles et un support email avec reponse sous 48 h.',
            },
            annual: {
              kind: 'fixed',
              amount: 179,
              badge: '1 mois offert',
              note: 'Facture annuellement a CAD 1,969 pour l abonnement de base.',
              secondaryNote:
                'Workforce et un perimetre operationnel plus large restent distincts si necessaire.',
            },
            included: [
              'Facturation',
              'Clients et fournisseurs',
              'Depenses',
              'Creances et dettes',
              'Comptabilite',
              'Taxes',
              'Reporting financier',
              'Support email (reponse sous 48 h)',
            ],
            ctaLabel: 'Consulter Finance',
          },
          {
            slug: 'business',
            name: 'Business',
            isPopular: true,
            summary:
              'Finance plus les operations quotidiennes : achats, fournisseurs et inventaire.',
            entitiesLabel: 'Perimetre mono-entreprise',
            usersLabel: 'Jusqu a 6 utilisateurs',
            monthly: {
              kind: 'fixed',
              amount: 349,
              badge: '50 % de reduction sur Workforce',
              note: 'Inclut un support email prioritaire avec reponse sous 24 h.',
            },
            annual: {
              kind: 'fixed',
              amount: 349,
              badge: '50 % de reduction sur Workforce',
              note: 'Facture annuellement a CAD 3,839 pour l abonnement de base.',
              secondaryNote:
                'Les clients ERP Business beneficient de 50 % de reduction sur leur plan Workforce autonome eligible.',
            },
            included: [
              'Tout ce qui est inclus dans Finance',
              'Achats',
              'Fournisseurs',
              'Inventaire',
              'Emplacements',
              'Tableaux de bord operationnels',
              'Gestion operationnelle standard',
              '50 % de reduction sur ZANVROX Workforce (plan autonome)',
              'Support email prioritaire (24 h)',
            ],
            ctaLabel: 'Consulter Business',
          },
          {
            slug: 'operations',
            name: 'Operations',
            summary:
              'La plateforme complete d operations d entreprise ZANVROX, avec Workforce inclus.',
            entitiesLabel: 'Perimetre mono-entreprise',
            usersLabel: 'Jusqu a 10 utilisateurs',
            monthly: {
              kind: 'fixed',
              amount: 649,
              badge: 'Workforce inclus',
              note: 'Inclut un support email prioritaire avec reponse sous 24 h pour les equipes avec une activite operationnelle plus forte.',
            },
            annual: {
              kind: 'fixed',
              amount: 649,
              badge: 'Workforce inclus',
              note: 'Facture annuellement a CAD 7,139 pour l abonnement de base.',
              secondaryNote:
                'ZANVROX Workforce inclus pour les employes et emplacements couverts par votre abonnement ERP.',
            },
            included: [
              'Tout ce qui est inclus dans Business',
              'Inventaire avance',
              'Achats avances',
              'Operations multi-site',
              'Controles operationnels avances',
              'Production (BOM)',
              'Reporting avance',
              'Controles de gestion',
              'ZANVROX Workforce inclus',
              'Support email prioritaire (24 h)',
            ],
            ctaLabel: 'Consulter Operations',
          },
          {
            slug: 'enterprise',
            name: 'Personnalise',
            summary:
              'Pour les grandes organisations, les groupes complexes, de nombreux emplacements, des volumes eleves et des besoins personnalises.',
            entitiesLabel: 'Perimetre multi-site ou personnalise',
            usersLabel: 'Perimetre utilisateurs personnalise',
            monthly: {
              kind: 'custom',
              label: 'Personnalise',
              note: 'Revue cadree pour un deploiement multi-site, une configuration guidee, des integrations, des besoins de gouvernance et une revue de securite.',
            },
            annual: {
              kind: 'custom',
              label: 'Personnalise',
              note: 'Le tarif personnalise est defini directement selon la structure operationnelle, les besoins de deploiement et le contexte d implementation.',
            },
            included: [
              'Deploiement multi-site',
              'Gouvernance avancee',
              'Integrations',
              'Parcours de revue de securite',
              'Contrats speciaux',
              'Implementation guidee et support de deploiement',
            ],
            ctaLabel: 'Nous contacter',
          },
        ],
        comparison: {
          title: 'Comparaison des plans ERP',
          subtitle:
            'Utilisez ce tableau pour decider si vous avez besoin d un controle financier, d operations quotidiennes ou de la plateforme d operations complete.',
          featureLabel: 'Capacite',
          rows: [
            { label: 'Comptabilite', values: [true, true, true, true] },
            { label: 'Facturation', values: [true, true, true, true] },
            { label: 'Depenses', values: [true, true, true, true] },
            { label: 'Rapports financiers', values: [true, true, true, true] },
            { label: 'Achats', values: [false, true, true, true] },
            { label: 'Inventaire', values: [false, true, true, true] },
            { label: 'Emplacements', values: [false, true, true, true] },
            { label: 'Entrepot', values: [false, false, true, true] },
            { label: 'Production (BOM)', values: [false, false, true, true] },
            { label: 'Approbations et gouvernance', values: [false, true, true, true] },
            { label: 'Deploiement multi-site', values: [false, false, true, true] },
            { label: 'Integrations', values: [false, false, false, true] },
            {
              label: 'ZANVROX Workforce',
              values: ['Add-on', '50 % de reduction', 'Inclus', 'Personnalise'],
            },
            {
              label: 'Niveau de support',
              values: [
                'Email / 48 h',
                'Email prioritaire / 24 h',
                'Email prioritaire / 24 h',
                'Canal direct',
              ],
            },
            {
              label: 'Assistance onboarding',
              values: ['Autonome', 'Autonome', 'Autonome', 'Inclus'],
            },
            { label: 'Utilisateurs inclus', values: ['3', '6', '10', 'Personnalise'] },
          ],
          notesTitle: 'Notes commerciales',
          notes: [
            'La paie est un add-on distinct pour chaque plan ERP.',
            'Guided Implementation est optionnel et facture separement pour les equipes qui veulent un deploiement plus structure.',
            'Personnalise est le parcours pour le perimetre multi-site, les integrations, la revue de securite et le contexte d implementation guidee.',
            'Le modele commercial est concu pour preserver la transparence tout en soutenant des workflows controles et l auditabilite a mesure que les exigences augmentent.',
          ],
          annualNote: 'Les plans de base annuels incluent un mois offert.',
        },
      },
      payrollAddon: {
        title: 'Add-on paie',
        summary:
          'Une tarification paie distincte garde l ERP de base commercialement clair tout en preservant le support de la paie canadienne pour les equipes qui en ont besoin.',
        priceLabel: 'CAD 59 / mois + CAD 6 / employe / mois',
        annualPriceLabel: 'CAD 59 / mois + CAD 6 / employe / mois',
        monthlyNote:
          'Inclut les executions de paie canadiennes, le support des workflows de remises, les bulletins de paie, les dossiers et exports pour appuyer la revue de fin d annee, ainsi que l integration comptable. Un minimum mensuel peut s appliquer pendant le deploiement. La paie n est pas incluse avec ZANVROX Workforce.',
        annualNote:
          'L add-on paie conserve la meme structure tarifaire de base plus employe en annuel, sauf cadrage different.',
        included: [
          'Executions de paie canadiennes',
          'Support des workflows de remises',
          'Bulletins de paie',
          'Dossiers et exports pour appuyer la revue',
          'Integration comptable',
        ],
        ctaLabel: 'Poser une question sur la paie',
      },
      onboardingPackage: {
        title: 'Guided Implementation',
        summary:
          'Configuration guidee optionnelle en une seule fois pour les equipes qui veulent un alignement operationnel, un deploiement assiste et un demarrage d implementation plus structure.',
        priceLabel: 'CAD 3,500 à 7,500 en une fois',
        included: [
          'Configuration systeme guidee',
          'Revue d alignement operationnel',
          'Revue du chart of accounts',
          'Configuration des taxes',
          'Accompagnement a l import des donnees',
          'Session de formation pour deploiement assiste',
        ],
        note: 'Implementation guidee optionnelle pour les organisations qui veulent un accompagnement pratique de migration, de configuration et de lancement. Les plans standard peuvent toujours commencer par une configuration autonome lorsqu un deploiement plus leger est approprie.',
        ctaLabel: 'Demander une configuration guidee',
      },
      supportTiers: {
        title: 'Structure de support',
        subtitle:
          'Le support est indique publiquement afin que les equipes puissent evaluer la couverture operationnelle, les delais de reponse et la posture de deploiement en amont.',
        items: [
          { name: 'Finance', body: 'Support email avec reponse sous 48 h.' },
          { name: 'Business', body: 'Support email prioritaire avec reponse sous 24 h.' },
          {
            name: 'Operations',
            body: 'Support email prioritaire avec reponse sous 24 h, incluant Workforce pour les emplacements couverts.',
          },
          {
            name: 'Personnalise',
            body: 'Support au deploiement guide, canal de support direct et discussion d implementation cadree.',
          },
        ],
      },
      faq: {
        title: 'FAQ tarifs',
        subtitle: 'Reponses pour les equipes qui veulent se qualifier seules avant un appel.',
        items: [
          {
            question: 'Faut-il une demo avant de pouvoir commencer ?',
            answer:
              'Non. Le parcours prevu est l autoevaluation d abord : voir l apercu, explorer le produit, consulter les tarifs et utiliser l espace d evaluation navigateur avant de demander une session guidee.',
          },
          {
            question: 'Workforce est-il inclus dans les plans ERP ?',
            answer:
              'Operations inclut ZANVROX Workforce pour les employes et emplacements couverts par cet abonnement ERP. Business n inclut pas Workforce mais donne droit a 50 % de reduction sur un plan Workforce autonome eligible. Finance n inclut pas Workforce.',
          },
          {
            question: 'Puis-je acheter Workforce sans l ERP ?',
            answer:
              'Oui. ZANVROX Workforce est disponible en plan autonome, facture par emplacement, sans obligation d acheter ou de passer a un plan ERP.',
          },
          {
            question: 'La paie est-elle incluse dans les plans ERP de base ou dans Workforce ?',
            answer:
              'Non. La paie est vendue comme un add-on distinct avec un forfait mensuel de base plus un tarif par employe. Elle n est pas incluse avec ZANVROX Workforce.',
          },
          {
            question: 'Guided Implementation est-il obligatoire ?',
            answer:
              'Non. C est optionnel. Finance, Business et Operations peuvent commencer avec une configuration autonome, tandis que Guided Implementation reste disponible pour les equipes qui veulent un deploiement plus structure.',
          },
          {
            question: 'Quel support est inclus avec chaque plan ?',
            answer:
              'Finance inclut un support email sous 48 h, Business et Operations incluent un support email prioritaire sous 24 h, et Personnalise inclut une discussion de deploiement guidee ainsi qu un canal de support direct.',
          },
        ],
      },
      ctaPrimary: { label: 'Ouvrir l espace d evaluation', path: '/resources#demo-environment' },
      ctaSecondary: { label: 'Contacter pour un deploiement personnalise', path: '/contact' },
    },
    workforce: {
      heroKicker: 'ZANVROX WORKFORCE',
      heroTitle: 'Gerez chaque quart avec moins de chaos.',
      heroSubtitle:
        'Pointage, plannings, taches et feuilles de temps pour les equipes de terrain — tout connecte dans une seule application simple.',
      heroPrimaryCta: { label: 'Commencer avec Workforce', path: '/workforce/pricing' },
      heroSecondaryCta: {
        label: 'Rejoindre la beta restaurants de l Ontario',
        path: '/workforce/beta',
      },
      heroPreview: {
        title: 'Apercu du quart',
        type: 'workforce',
        caption: 'Concu pour les equipes de terrain',
        callouts: [
          { status: 'ready', text: 'Pointage (entree/sortie)' },
          { status: 'ready', text: 'Plannings et feuilles de temps' },
        ],
      },
      existingCustomer: {
        title: 'Vous utilisez deja ZANVROX ERP ?',
        body: 'Workforce est inclus avec les plans ERP eligibles.',
        cta: { label: 'Voir les plans ERP incluant Workforce', path: '/erp/pricing' },
      },
      sections: {
        eyebrow: 'Ce que couvre Workforce',
        title: 'Tout ce dont un quart a besoin, connecte',
        subtitle:
          'ZANVROX Workforce couvre les elements d un quart qui vivent habituellement dans des feuilles de calcul, des feuilles de temps papier et des discussions de groupe.',
        items: [
          {
            eyebrow: 'Pointage entree et sortie',
            title:
              'Les employes pointent leur entree et leur sortie depuis leur telephone avec une verification tenant compte de la localisation.',
            body: 'Les evenements de pointage sont lies a des moments de travail autorises, pas a un suivi continu d une personne.',
            bullets: [
              'Pointer l entree et la sortie depuis un telephone en quelques secondes',
              'Pauses suivies dans le meme flux',
              'Verification tenant compte de la localisation au pointage, lorsque le geofencing est active pour un emplacement',
              'Resilience hors ligne pour qu un quart puisse demarrer meme avec une connexion faible',
            ],
          },
          {
            eyebrow: 'Plannings et quarts',
            title:
              'Des plannings que toute l equipe peut consulter, depuis n importe quel telephone.',
            body: 'Les gestionnaires publient les plannings ; les employes voient leurs quarts au meme endroit.',
            bullets: [
              'Plannings',
              'Quarts a venir',
              'Quarts ouverts, lorsque active',
              'Changements et demandes de quarts, lorsque active',
            ],
          },
          {
            eyebrow: 'Feuilles de temps',
            title: 'Les heures travaillees deviennent automatiquement une feuille de temps.',
            body: 'Les evenements de pointage se cumulent en feuilles de temps que les gestionnaires peuvent examiner.',
            bullets: [
              'Heures travaillees',
              'Feuilles de temps des employes',
              'Corrections',
              'Revue et approbation par le gestionnaire, lorsque active',
            ],
          },
          {
            eyebrow: 'Taches et listes de controle',
            title: 'Taches quotidiennes et listes de controle, realisees depuis le terrain.',
            body: 'Les routines d ouverture et de fermeture deviennent des listes de controle tracables au lieu de reposer sur la memoire.',
            bullets: [
              'Taches quotidiennes',
              'Taches d ouverture',
              'Taches de fermeture',
              'Listes de controle operationnelles',
              'Commentaires et preuves, lorsque active',
            ],
          },
          {
            eyebrow: 'Operations d equipe',
            title: 'Gardez l equipe alignee entre les quarts.',
            body: 'Un contexte partage pour l equipe sans outil de messagerie distinct.',
            bullets: [
              'Annonces',
              'Notes de quart',
              'Passations',
              'Demandes',
              'Communication d equipe',
            ],
          },
          {
            eyebrow: 'Controle gestionnaire',
            title: 'Un seul endroit pour que les gestionnaires suivent le deroulement d un quart.',
            body: 'Une supervision pour les personnes qui gerent les operations au quotidien.',
            bullets: [
              'Revue des feuilles de temps',
              'Gestion des plannings',
              'Taches',
              'Anomalies',
              'Evenements de pointage tenant compte de la localisation',
              'Supervision d equipe',
            ],
          },
        ],
      },
      industries: {
        title: 'Concu pour les equipes de terrain et par quarts',
        subtitle: 'ZANVROX Workforce n est pas concu uniquement pour les restaurants.',
        items: [
          'Restaurants',
          'Cafes',
          'Commerce de detail',
          'Hotellerie',
          'Services',
          'Entrepots',
          'Entreprises multi-sites',
        ],
      },
      cta: {
        title: 'Commencer avec Workforce',
        subtitle: 'Ajoutez l ERP lorsque vous en avez besoin.',
        accessNote:
          "Les gestionnaires gèrent l'entreprise, l'équipe et les horaires. Les employés disposent de leur propre accès Workforce pour pointer, consulter leurs horaires et gérer leur journée de travail.",
        primary: { label: 'Commencer avec Workforce', path: '/workforce/pricing' },
        secondary: { label: 'Workforce pour restaurants', path: '/workforce/restaurants' },
      },
    },
    workforceRestaurants: {
      heroKicker: 'ZANVROX WORKFORCE POUR RESTAURANTS',
      heroTitle: 'Concu pour la realite des quarts en restaurant.',
      heroSubtitle:
        'Pointages, plannings, feuilles de temps et taches quotidiennes sans feuilles de calcul, feuilles de temps papier ni outils deconnectes.',
      heroPrimaryCta: { label: 'Postuler a la beta gratuite', path: '/workforce/beta' },
      heroSecondaryCta: { label: 'Voir les tarifs Workforce', path: '/workforce/pricing' },
      heroPreview: {
        title: 'Apercu du quart',
        type: 'workforce',
        caption: 'Concu pour les equipes de restaurant',
        callouts: [
          { status: 'ready', text: 'Pointage (entree/sortie)' },
          { status: 'ready', text: 'Taches quotidiennes et listes de controle' },
        ],
      },
      timeline: {
        eyebrow: 'Un quart de restaurant, du debut a la fin',
        title: 'Avant, pendant et apres chaque quart',
        subtitle:
          'La meme application suit le quart depuis le planning jusqu a la feuille de temps.',
        stages: [
          {
            name: 'Avant le quart',
            items: ['Planning', 'Quarts ouverts', 'Visibilite pour les employes'],
          },
          {
            name: 'Pendant le quart',
            items: [
              'Pointage tenant compte de la localisation',
              'Pauses',
              'Taches',
              'Listes de controle',
              'Notes de quart',
            ],
          },
          {
            name: 'Apres le quart',
            items: [
              'Pointage de sortie',
              'Heures travaillees',
              'Feuille de temps',
              'Revue par le gestionnaire',
            ],
          },
          {
            name: 'Gestionnaire',
            items: [
              'Qui travaille',
              'Heures travaillees',
              'Taches en attente',
              'Corrections',
              'Approbation des feuilles de temps',
            ],
          },
        ],
      },
      crossSell: {
        title: 'Besoin de plus que la gestion de la main-d oeuvre ?',
        body: 'Connectez Workforce a l ERP ZANVROX complet pour la finance, l inventaire, les achats et les operations d entreprise.',
        cta: { label: 'Explorer ZANVROX ERP', path: '/erp' },
      },
      cta: {
        title: 'Apportez Workforce a votre restaurant',
        subtitle:
          'Postulez a la beta gratuite des restaurants de l Ontario, ou commencez avec Workforce des aujourd hui.',
        primary: { label: 'Postuler a la beta gratuite', path: '/workforce/beta' },
        secondary: { label: 'Voir les tarifs Workforce', path: '/workforce/pricing' },
      },
    },
    workforceBeta: {
      heroKicker: 'BETA RESTAURANTS DE L ONTARIO',
      heroTitle: 'Testez ZANVROX Workforce avec votre vraie equipe avant notre lancement public.',
      heroSubtitle:
        'Nous invitons un groupe restreint de restaurants de l Ontario a tester ZANVROX Workforce pendant de vrais quarts.',
      badges: ['Beta de 14 jours', 'Aucun engagement d achat', '6 mois offerts apres le lancement'],
      intro: {
        title: 'Comment fonctionne la beta',
        paragraphs: [
          'Nous invitons un groupe restreint de restaurants de l Ontario a tester ZANVROX Workforce pendant de vrais quarts.',
          'Utilisez l application avec un gestionnaire et des employes, dites-nous ce qui fonctionne et ce qui doit etre ameliore, et aidez-nous a preparer le lancement public.',
          'Les restaurants qui terminent la beta recoivent six mois de ZANVROX Workforce gratuits apres le lancement.',
        ],
      },
      terms: {
        title: 'Conditions de la beta',
        subtitle:
          'Conditions commerciales de la beta restaurants de l Ontario, indiquees clairement.',
        items: [
          'Periode de beta de 14 jours',
          'Aucun cout pendant la beta',
          'Aucun engagement d achat',
          'Les restaurants qui terminent la beta recoivent 6 mois de ZANVROX Workforce gratuits apres le lancement public',
          'Apres les 6 mois gratuits, vous choisissez un plan Workforce',
          'Aucun renouvellement automatique ni frais issu de la beta sans votre consentement',
        ],
      },
      form: {
        title: 'Postuler a la beta',
        helper:
          'Parlez-nous de votre restaurant. Nous examinerons votre candidature et vous recontacterons par email.',
        fields: {
          restaurantName: 'Nom du restaurant',
          contactName: 'Nom du contact',
          email: 'Email professionnel',
          city: 'Ville',
          employeeCount: 'Nombre d employes',
          locationCount: 'Nombre d emplacements',
          currentMethod: 'Methode actuelle de suivi du temps',
          participantCount: 'Combien d employes pourraient participer ?',
          message: 'Message optionnel',
          consent: 'J accepte d etre contacte par ZANVROX au sujet de la beta Workforce.',
        },
        placeholders: {
          restaurantName: 'ex. Maple Street Kitchen',
          contactName: 'Votre nom complet',
          email: 'vous@votrerestaurant.com',
          city: 'ex. Toronto',
          employeeCount: 'ex. 12',
          locationCount: 'ex. 1',
          currentMethod: 'ex. Feuilles de temps papier, tableur, integre au POS',
          participantCount: 'ex. 5',
          message: 'Autre chose que nous devrions savoir ?',
        },
        errors: {
          restaurantName: 'Saisissez le nom de votre restaurant (2 a 120 caracteres).',
          contactName: 'Saisissez un nom de contact (2 a 120 caracteres).',
          email: 'Saisissez un email professionnel valide.',
          city: 'Saisissez votre ville (2 a 120 caracteres).',
          employeeCount: 'Saisissez un nombre d employes valide (1 a 10000).',
          locationCount: 'Saisissez un nombre d emplacements valide (1 a 1000).',
          currentMethod: 'Indiquez votre methode actuelle de suivi du temps.',
          participantCount: 'Saisissez un nombre valide d employes participants.',
          participantCountExceedsEmployees:
            'Le nombre de participants ne peut pas depasser le nombre d employes.',
          message: 'Gardez le message sous 2000 caracteres.',
          consent: 'Le consentement est requis pour postuler a la beta.',
          website: 'La protection anti-spam a ete declenchee.',
          startedAt: 'Veuillez patienter un instant avant d envoyer.',
        },
        consentPrivacyLabel: 'Politique de confidentialite',
        consentPrivacyPath: '/legal/privacy',
        cta: 'Postuler a la beta',
        submittingCta: 'Envoi...',
        confirmation:
          'Merci. Nous examinerons votre candidature et vous contacterons avec les instructions de test privees si votre restaurant est selectionne.',
        submitError: 'Nous n avons pas pu envoyer votre candidature. Veuillez reessayer.',
      },
    },
    resources: {
      heroTitle:
        'Ressources pour l evaluation produit, la revue securite et la planification du deploiement.',
      heroSubtitle:
        'Utilisez ces materiaux publics pour evaluer l adequation produit, la posture securite et les options d evaluation avant de demander une discussion plus approfondie.',
      sections: [
        {
          title: 'Apercu produit et ressources d evaluation',
          description:
            'Consultez l apercu produit, la couverture des workflows et le modele d onboarding avant d investir du temps dans une evaluation plus poussée.',
          cta: 'Consulter le produit',
          path: '/erp',
        },
        {
          title: 'Apercu securite',
          description:
            'Consultez l isolation entre organisations, les controles d acces, les sous-traitants et les limites actuelles dans un seul apercu public.',
          cta: 'Consulter la securite',
          path: '/security',
        },
        {
          title: 'Espace d evaluation et revue produit guidee',
          description:
            'Commencez par l espace d evaluation partage pour une premiere revue, puis contactez l equipe si vous avez besoin d une discussion produit plus structuree.',
          cta: 'Ouvrir l espace d evaluation',
          path: '/resources#demo-environment',
        },
        {
          title: 'Contact et documentation complementaire',
          description:
            'Utilisez le parcours de contact pour les demandes securite ou compliance, les demandes de revue guidee ou des details supplementaires d evaluation.',
          cta: 'Contacter l equipe',
          path: '/contact',
        },
      ],
      demoEnvironment: {
        title: 'Espace d evaluation',
        subtitle:
          'Un espace navigateur pour une premiere revue produit avec des donnees d exemple fictives.',
        accessTitle: 'Acces d evaluation partage',
        accessIntro:
          'Un acces partage est disponible pour une premiere revue produit. Les equipes qui ont besoin d une evaluation plus profonde ou plus structuree peuvent contacter ZANVROX.',
        emailLabel: 'Utilisateur de l espace',
        emailValue: 'Use your work email',
        passwordLabel: 'Code d acces',
        passwordValue: 'Set during signup',
        note: 'Aucune installation n est requise. Cet espace est reserve a l evaluation, utilise des donnees d exemple fictives et n est pas destine a des donnees reelles d entreprise, d employes, de clients, de paie ou de finance.',
        guidance: [
          'Utilisez cet espace pour une premiere revue de la navigation, de la couverture des workflows et de l adequation generale du produit.',
          'Traitez cet environnement comme une surface d evaluation partagee et non comme un espace de production, de pilote ou de migration de donnees.',
          'Pour une revue plus approfondie, des questions securite/compliance ou une documentation complementaire, utilisez le parcours de contact apres l evaluation initiale.',
        ],
        cta: { label: 'Ouvrir l espace d evaluation', path: '/resources#demo-environment' },
      },
      sitemap: {
        title: 'Materiaux d evaluation',
        subtitle:
          'Le site public est volontairement compact et concentre sur les materiaux les plus utiles pendant l evaluation initiale.',
        items: [
          'Apercu produit et couverture des workflows',
          'Tarification publique et modele d onboarding',
          'Apercu securite et posture actuelle des controles',
          'Espace d evaluation avec des donnees d exemple fictives',
          'Parcours de contact pour revue guidee et questions de suivi',
          'Informations legales de confidentialite et de conditions',
        ],
      },
      design: {
        title: 'Comment utiliser ces ressources',
        subtitle:
          'Un parcours d evaluation simple pour les equipes qui veulent d abord verifier l adequation produit et n impliquer l equipe que lorsque plus de details sont necessaires.',
        directionTitle: 'Premiere revue produit',
        componentsTitle: 'Revue securite et compliance',
        statesTitle: 'Quand contacter l equipe',
        direction: [
          'Commencez par Produit, Tarifs et Ressources pour comprendre le perimetre, la posture d onboarding et l adequation commerciale.',
          'Utilisez l espace d evaluation pour une premiere revue pratique avec des donnees fictives uniquement.',
          'Considerez les materiaux publics comme une couche initiale de qualification avant de demander une discussion plus approfondie.',
        ],
        components: [
          'Utilisez l Apercu securite pour l isolation entre organisations, le controle d acces, les sous-traitants et les limites actuelles.',
          'Utilisez le parcours de contact pour les demandes securite/compliance ou pour demander une documentation complementaire.',
          'Gardez les questions d evaluation alignees avec le perimetre et les promesses actuellement publies.',
        ],
        states: [
          'Demandez une revue guidee du produit lorsque votre equipe a des questions concretes de workflow ou de deploiement.',
          'Contactez l equipe si vous avez besoin de plus de details que ceux fournis par les materiaux publics.',
          'Utilisez le parcours de contact existant pour demander un apercu securite et un suivi securite/compliance.',
        ],
      },
    },
    security: {
      heroTitle: 'Securite et architecture par conception.',
      heroSubtitle:
        'Isolation entre organisations, acces de moindre privilege et comportement transactionnel auditable.',
      overview: {
        title: 'Apercu securite',
        subtitle:
          'Un resume conservateur des controles actuellement visibles dans le produit et dans le flux de livraison.',
        description:
          'ZANVROX repose sur l isolation entre organisations, l acces selon les roles et une gestion imposee cote serveur pour les operations sensibles. Les declarations publiques de securite sont limitees aux controles effectivement en place aujourd hui et evitent toute promesse de certification ou de couverture qui n existe pas encore.',
        bullets: [
          'La posture securite est centree sur le moindre privilege, le cadrage par organisation et un comportement operationnel auditable.',
          'Les zones sensibles peuvent exiger une authentification renforcee avant l acces.',
          'L infrastructure et la livraison reposent sur des plateformes gerees plutot que sur une exploitation interne des serveurs.',
        ],
      },
      matrix: {
        title: 'Matrice de controles',
        subtitle: 'Chaque affirmation de controle est rattachee a un mecanisme d implementation.',
      },
      controls: [
        {
          control: 'Isolation entre organisations',
          support: 'Politiques PostgreSQL RLS scopees par org_id sur les tables operationnelles.',
        },
        {
          control: 'Controle d acces',
          support:
            'Appartenance a l organisation et chemins d ecriture limites par role pour les operations critiques.',
        },
        {
          control: 'Tracabilite des changements',
          support:
            'Identifiants transactionnels, horodatages et enregistrements de confirmation de depot.',
        },
        {
          control: 'Execution cote serveur',
          support: 'Actions comptables et fiscales critiques executees via des controles SQL/Edge.',
        },
      ],
      sections: [
        {
          title: 'Controle d acces et authentification',
          items: [
            'Le controle d acces par role est applique via l appartenance a l organisation, les permissions par module et les chemins d ecriture limites par role.',
            'MFA est disponible via des facteurs TOTP d application d authentification.',
            'Les zones sensibles de l ERP peuvent exiger une authentification de step-up en AAL2 avant l acces.',
          ],
        },
        {
          title: 'Isolation des donnees',
          items: [
            'L isolation entre organisations est scopee par identifiants d organisation et politiques de securite base de donnees.',
            'Les lectures et ecritures operationnelles sont liees au contexte de l organisation active.',
            'La separation des donnees est logique dans l environnement applicatif partage et non basee sur des piles applicatives par organisation.',
          ],
        },
        {
          title: 'Hebergement et infrastructure',
          items: [
            'Les services backend sont geres via Supabase.',
            'Le frontend public est diffuse via Vercel.',
            'Le chiffrement en transit utilise HTTPS/TLS.',
            'L infrastructure cloud sous-jacente est geree par les fournisseurs et non exploitee directement par ZANVROX.',
          ],
        },
        {
          title: 'Securite operationnelle',
          items: [
            'Les gates de release incluent lint, tests unitaires, tests web, builds et scripts de validation avant toute decision de deploiement.',
            'La couverture Playwright E2E et les smoke checks heberges servent a valider les workflows critiques.',
            'La surveillance des dependances inclut npm audit en CI pour l examen des packages de severite elevee.',
            'Les logs applicatifs sont assainis pour reduire l exposition accidentelle des emails, tokens et autres champs sensibles.',
          ],
        },
      ],
      subprocessors: {
        title: 'Sous-traitants',
        subtitle: 'Resume public actuel des prestataires tiers utilises pour exploiter le service.',
        items: [
          {
            name: 'Supabase',
            support:
              'Plateforme backend geree pour la base de donnees, l authentification, le stockage et les workflows cote serveur.',
          },
          {
            name: 'Vercel',
            support: 'Hebergement et diffusion frontend geres pour l experience web publique.',
          },
          {
            name: 'Resend',
            support:
              'Envoi transactionnel d emails pour une communication limitee et le routage des leads du site.',
          },
        ],
        note: 'Ces prestataires sont utilises uniquement lorsque c est necessaire pour l exploitation du service, sa diffusion ou la communication transactionnelle.',
      },
      disclosures: {
        title: 'Transparence et limites actuelles',
        subtitle:
          'Des declarations conservatrices qui refletent les controles actuellement disponibles.',
        items: [
          'Aucune promesse d auto-filing : uniquement un support de workflow portal-ready.',
          'Aucun feature flag cache pour des capacites publiques.',
          'Le comportement de production est soutenu par des logs auditables et des snapshots.',
          'MFA repose actuellement sur un TOTP d application d authentification et n est pas resistant au phishing.',
          'L authentification de step-up est imposee sur les routes sensibles plutot que comme exigence globale de chaque session.',
          'WebAuthn et l authentification par passkeys ne sont pas encore disponibles.',
        ],
      },
      cta: {
        title: 'Contact securite',
        subtitle:
          'Utilisez le parcours de contact existant pour les demandes d apercu securite ou les suivis securite/compliance.',
        primary: { label: 'Demander un apercu securite', path: '/contact' },
        secondary: { label: 'Contacter pour des demandes securite/compliance', path: '/contact' },
      },
    },
    about: {
      heroKicker: 'A propos de ZANVROX',
      heroTitle:
        'Un ERP pratique positionne pour un deploiement credible, pas pour le theatre d entreprise.',
      heroSubtitle:
        'ZANVROX est presente comme un ERP moderne pour les PME canadiennes qui veulent un controle operationnel plus ferme, moins de systemes deconnectes et un parcours de support plus clair.',
      heroPrimaryCta: { label: 'Explorer le produit', path: '/erp' },
      heroSecondaryCta: { label: 'Contacter l equipe', path: '/contact' },
      heroPreview: {
        title: 'Synthese de positionnement',
        type: 'reports',
        caption: 'Controle operationnel face a la proliferation logicielle',
        callouts: [
          { status: 'ready', text: 'Posture de support claire' },
          { status: 'ready', text: 'Parcours d evaluation axe produit' },
        ],
      },
      principles: {
        title: 'Trois principes derriere le site',
        subtitle:
          'Le positionnement public est optimise pour une realite operationnelle dirigee par les fondateurs sans abaisser le niveau du produit.',
        items: [
          {
            title: 'Clarite',
            body: 'Dire ce que fait le produit, ce qu il supporte et ou une revue reste necessaire.',
          },
          {
            title: 'Controle',
            body: 'Mettre en avant l auditabilite, la gouvernance et la visibilite operationnelle plutot qu un discours SaaS gonfle.',
          },
          {
            title: 'Deploiement pratique',
            body: 'Rendre la configuration autonome viable tout en gardant une aide experte en option lorsque la complexite augmente.',
          },
        ],
      },
      operatingModel: [
        {
          title: 'Concu pour les PME canadiennes',
          subtitle:
            'Le site public vise les entreprises qui ont besoin d un controle ERP credible sans surcharge de conseil de niveau entreprise des le premier jour.',
          items: [
            'Meilleur fit autour de 10-50 employes',
            'Valeur forte lorsque la finance et les operations sont eparpillees entre trop d outils',
            'Parcours clair du noyau finance vers les operations et l add-on paie',
          ],
        },
        {
          title: 'Discipline commerciale',
          subtitle:
            'Le site est concu pour reduire les reunions de faible qualite et rendre les attentes explicites avant la premiere conversation.',
          items: [
            'Demo optionnelle au lieu d un tunnel demo-first',
            'Tarification publique avec niveaux de support et attentes d onboarding',
            'Promesses de securite et de gouvernance alignees sur la posture reelle du produit',
          ],
        },
      ],
      cta: {
        title: 'Verifiez si le modele operationnel convient a votre equipe',
        subtitle:
          'Utilisez Produit, Tarifs et Ressources pour qualifier l adequation avant de nous contacter.',
        primary: { label: 'Voir les tarifs', path: '/pricing' },
        secondary: { label: 'Aller au contact', path: '/contact' },
      },
    },
    contact: {
      heroTitle:
        'Contactez l equipe seulement lorsque vous avez besoin d aide pour une vraie question d evaluation.',
      heroSubtitle:
        'Le parcours prevu est apercu produit, exploration du produit, revue des tarifs, evaluation dans le navigateur, puis contact optionnel ou demande de presentation guidee.',
      conversion: {
        title: 'Parcours d evaluation recommande',
        subtitle:
          'Cela reduit les reunions inutiles et fournit un meilleur contexte lorsqu une personne prend finalement contact.',
        cards: [
          {
            title: 'Voir l apercu produit',
            body: 'Commencez par la video pour comprendre le modele operationnel et la posture du produit.',
          },
          {
            title: 'Explorer les fonctionnalites',
            body: 'Utilisez les pages Produit, Tarifs et Securite pour evaluer la pile sans appel.',
          },
          {
            title: 'Ouvrir l espace d evaluation',
            body: 'Validez l interface avec des donnees fictives avant de demander une session guidee.',
          },
          {
            title: 'Demander de l aide si necessaire',
            body: 'Utilisez les formulaires ci-dessous pour une demo optionnelle ou une question produit ciblee.',
          },
        ],
      },
      supportBlock: {
        title: 'Attentes de support',
        subtitle: 'Tous les flux de contact du site arrivent sur support@zanvrox.com.',
        items: [
          'Finance : support email avec reponse sous 48 h',
          'Business et Operations : support email prioritaire avec reponse sous 24 h',
          'Enterprise : canal de support direct plus assistance d onboarding',
        ],
      },
      pricingContext: {
        title: 'Contexte tarifaire selectionne',
        subtitle:
          'Le contexte tarifaire reste rattache a votre demande afin que le suivi demeure ancre dans la configuration choisie.',
        labels: {
          plan: 'Plan',
          billing: 'Facturation',
          payroll: 'Paie',
          offer: 'Offre',
          notSelected: 'Non selectionne',
          payrollInterested: 'Add-on paie selectionne',
          payrollNotSelected: 'Aucun add-on paie selectionne',
        },
      },
      demoForm: {
        title: 'Demander une presentation guidee',
        helper:
          'Utilisez ce formulaire apres que votre equipe a consulte le produit et souhaite une presentation guidee.',
        confirmation:
          'Votre demande de presentation guidee a ete envoyee avec succes. Nous assurerons le suivi par email.',
        submittingCta: 'Envoi...',
        submitError: 'Nous n avons pas pu envoyer votre demande. Veuillez reessayer.',
        messageHint:
          'Optionnel. Utilisez ce champ pour decrire votre pile actuelle, votre calendrier de deploiement ou une question de paie.',
        fields: {
          name: 'Nom*',
          company: 'Entreprise*',
          email: 'Email professionnel*',
          companySize: 'Taille de l entreprise*',
          interestArea: 'Domaine d interet*',
          message: 'Message optionnel',
          consent:
            'J accepte d etre contacte par ZANVROX au sujet de cette demande commerciale. Nous utilisons ces donnees uniquement pour repondre a la demande.',
        },
        placeholders: {
          email: 'nom@entreprise.com',
          companySize: 'Selectionnez la taille de l entreprise',
          interestArea: 'Selectionnez le domaine d interet',
          message: 'Que souhaitez-vous valider lors d une presentation guidee ?',
        },
        options: {
          companySizes: ['1-10 employes', '10-50 employes', '50-100 employes', '100+ employes'],
          interestAreas: [
            'Finance',
            'Business',
            'Operations',
            'Workforce',
            'Add-on paie',
            'Guided Implementation',
            'Deploiement enterprise',
            'Integrations / API',
          ],
        },
        errors: {
          name: 'Saisissez votre nom.',
          company: 'Saisissez le nom de votre entreprise.',
          email: 'Saisissez un email professionnel valide.',
          companySize: 'Selectionnez la taille de l entreprise.',
          interestArea: 'Selectionnez un domaine d interet.',
          message: 'Gardez le message sous 2000 caracteres.',
          consent: 'Le consentement est requis pour envoyer ce formulaire.',
          startedAt: 'Veuillez patienter un instant avant d envoyer.',
          website: 'La protection anti-spam a ete declenchee.',
        },
        cta: 'Demander une presentation guidee',
      },
      briefForm: {
        title: 'Poser une question produit',
        helper:
          'Utilisez ce formulaire pour des questions sur l adequation produit, le support, l onboarding, l implementation ou le perimetre paie.',
        confirmation: 'Votre message a ete envoye avec succes. Nous repondrons par email.',
        submittingCta: 'Envoi...',
        submitError: 'Nous n avons pas pu envoyer votre demande. Veuillez reessayer.',
        messageHint:
          'Optionnel. Utilisez ce champ si vous souhaitez decrire votre workflow, votre besoin de support ou votre question d implementation.',
        fields: {
          name: 'Nom*',
          company: 'Entreprise*',
          email: 'Email professionnel*',
          companySize: 'Taille de l entreprise*',
          interestArea: 'Domaine d interet*',
          message: 'Message optionnel',
          consent: 'J accepte de recevoir le suivi demande de la part de ZANVROX.',
        },
        placeholders: {
          email: 'nom@entreprise.com',
          companySize: 'Selectionnez la taille de l entreprise',
          interestArea: 'Selectionnez le domaine d interet',
          message:
            'Que souhaitez-vous clarifier avant que votre equipe investisse plus de temps dans l evaluation ?',
        },
        options: {
          companySizes: ['1-10 employes', '10-50 employes', '50-100 employes', '100+ employes'],
          interestAreas: [
            'Adequation produit',
            'Tarifs et support',
            'Acces sandbox',
            'Import des donnees',
            'Add-on paie',
            'Guided Implementation',
          ],
        },
        errors: {
          name: 'Saisissez votre nom.',
          company: 'Saisissez le nom de votre entreprise.',
          email: 'Saisissez un email professionnel valide.',
          companySize: 'Selectionnez la taille de l entreprise.',
          interestArea: 'Selectionnez un domaine d interet.',
          message: 'Gardez le message sous 2000 caracteres.',
          consent: 'Le consentement est requis pour envoyer ce formulaire.',
          startedAt: 'Veuillez patienter un instant avant d envoyer.',
          website: 'La protection anti-spam a ete declenchee.',
        },
        cta: 'Envoyer la question',
      },
    },
    legal: {
      privacy: {
        title: 'Politique de confidentialite',
        updated: '7 aout 2026',
        updatedLabel: 'Derniere mise a jour',
        paragraphs: [
          'ZANVROX collecte les informations de contact professionnelles soumises via ce site pour l evaluation produit, la planification de demos, les candidatures a la beta et les demandes de documentation.',
          'Nous traitons les donnees soumises uniquement a des fins de qualification commerciale et produit.',
          'ZANVROX Workforce utilise la localisation de l appareil uniquement au moment ou un employe pointe son entree ou sa sortie, et uniquement lorsque l employeur a active la verification tenant compte de la localisation pour un lieu de travail. La localisation est liee a cet evenement de pointage precis ; elle n est pas collectee en continu ni utilisee pour suivre un employe en dehors des moments autorises de pointage d entree et de sortie.',
          'Les donnees de localisation et de pointage de Workforce servent a verifier qu un pointage d entree ou de sortie a eu lieu a un lieu de travail autorise, et a appuyer la feuille de temps qui en resulte. Elles sont visibles par l employe et par les gestionnaires autorises de cet employeur.',
          'Les employes peuvent refuser d accorder la permission de localisation ; selon la configuration de l employeur, cela peut signifier qu un evenement de pointage ne pourra pas etre verifie par localisation, et l employeur doit alors prevoir un processus alternatif.',
          'Les enregistrements Workforce et les autres enregistrements operationnels sont conserves aussi longtemps que necessaire pour repondre aux exigences de paie, de feuilles de temps et de tenue de dossiers d emploi, et sont proteges par les memes controles d acces et de securite decrits sur notre page Securite.',
          'Vous pouvez demander l acces, la correction ou la suppression des donnees soumises en contactant support@zanvrox.com.',
        ],
      },
      terms: {
        title: 'Conditions d utilisation',
        updated: '5 mars 2026',
        updatedLabel: 'Derniere mise a jour',
        paragraphs: [
          'Ce site fournit des informations produit, des ressources d evaluation produit, des formulaires de contact et des formulaires de candidature au programme beta pour ZANVROX ERP et ZANVROX Workforce.',
          'Le contenu du site est informatif et ne constitue pas un engagement produit contraignant.',
          'Le perimetre produit et les conditions commerciales sont finalises dans des accords signes.',
        ],
      },
      accountDeletion: {
        title: 'Demander la suppression du compte',
        updated: '7 aout 2026',
        updatedLabel: 'Derniere mise a jour',
        intro: 'Supprimez votre compte de connexion ZANVROX Employe, Gestionnaire ou ERP.',
        selfServiceTitle: 'Suppression en libre-service',
        selfServiceBody:
          'La methode la plus rapide et la plus sure consiste a vous connecter, ouvrir Parametres, puis selectionner Suppression du compte. L application verifiera votre identite et vous permettra de suivre ou d annuler une demande en cours.',
        steps: [
          'Connectez-vous a votre compte ZANVROX.',
          'Ouvrez Parametres.',
          'Selectionnez Suppression du compte.',
          'Confirmez votre identite et envoyez la demande.',
        ],
        emailFallbackTitle: 'Si vous ne pouvez pas vous connecter',
        emailFallbackBody:
          'Envoyez un email a support@zanvrox.com depuis l adresse enregistree sur votre compte, avec pour objet « Account deletion request ». Nous pourrions demander une verification d identite supplementaire.',
        retentionTitle: 'Ce que nous conservons',
        retentionBody:
          'Nous supprimons ou anonymisons l identite de connexion, le profil personnel, les abonnements des appareils et les informations qui ne sont pas tenues d etre conservees. Les dossiers de paie, fiscaux, d emploi, financiers, de tracabilite d inventaire, de securite et d audit peuvent etre conserves pour les durees legalement requises avec un acces restreint.',
        appLinkLabel: 'Ouvrir la page de suppression du compte',
        appLinkPath: 'https://app.zanvrox.com/account-deletion',
      },
    },
    notFound: {
      title: 'Page introuvable',
      subtitle: 'L URL ne correspond pas a la structure publiee du site ZANVROX.',
      cta: 'Retour a l accueil',
    },
  },
  footer: {
    companyDescription:
      'ERP integre pour les PME canadiennes qui ont besoin de finance, d operations, de conformite et de paie dans une seule pile controlee.',
    headquarters: 'Toronto, Ontario, Canada',
    email: 'support@zanvrox.com',
    sections: [
      {
        title: 'Produits',
        links: [
          { label: 'ERP', path: '/erp' },
          { label: 'Workforce', path: '/workforce' },
          { label: 'Workforce pour restaurants', path: '/workforce/restaurants' },
          { label: 'Tarifs', path: '/pricing' },
        ],
      },
      {
        title: 'Ressources',
        links: [
          { label: 'Ressources', path: '/resources' },
          { label: 'Securite', path: '/security' },
          { label: 'Confidentialite', path: '/legal/privacy' },
          { label: 'Conditions', path: '/legal/terms' },
          { label: 'Suppression de compte', path: '/account-deletion' },
          { label: 'Contact', path: '/contact' },
        ],
      },
    ],
    links: [
      { label: 'ERP', path: '/erp' },
      { label: 'Workforce', path: '/workforce' },
      { label: 'Tarifs', path: '/pricing' },
      { label: 'Ressources', path: '/resources' },
      { label: 'Securite', path: '/security' },
      { label: 'A propos', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Confidentialite', path: '/legal/privacy' },
      { label: 'Conditions', path: '/legal/terms' },
      { label: 'Suppression de compte', path: '/account-deletion' },
    ],
    workforce: {
      sections: [
        {
          title: 'Workforce',
          links: [
            { label: 'Workforce', path: '/workforce' },
            { label: 'Tarifs', path: '/workforce/pricing' },
            { label: 'Restaurants', path: '/workforce/restaurants' },
            { label: 'Beta', path: '/workforce/beta' },
            { label: 'Securite', path: '/security' },
          ],
        },
        {
          title: 'Assistance',
          links: [
            { label: 'Assistance', path: '/contact' },
            { label: 'Confidentialite', path: '/legal/privacy' },
            { label: 'Conditions', path: '/legal/terms' },
            { label: 'Suppression de compte', path: '/account-deletion' },
          ],
        },
      ],
      erpLink: { label: 'ZANVROX ERP', path: '/erp' },
    },
  },
  seo: {
    home: {
      title: 'ZANVROX | ERP canadien pour la finance, les operations et le controle',
      description:
        'ERP integre pour les PME canadiennes avec comptabilite, facturation, inventaire, entrepot, production, gouvernance, workflows fiscaux et support de l add-on paie.',
      path: '/',
    },
    product: {
      title: 'ZANVROX ERP | Plateforme Finance, Operations et Workforce',
      description:
        'Explorez la finance, la facturation, les depenses, les achats, l inventaire, les operations, le reporting, les workflows de paie et ZANVROX Workforce dans la pile ZANVROX ERP.',
      path: '/erp',
    },
    workforce: {
      title: 'ZANVROX Workforce | Pointage, plannings et taches',
      description:
        'Pointez vos entrees et sorties, gerez les plannings, suivez les feuilles de temps et organisez les taches quotidiennes avec ZANVROX Workforce.',
      path: '/workforce',
    },
    workforceRestaurants: {
      title: 'Gestion de la main-d oeuvre en restaurant | ZANVROX Workforce',
      description:
        'Pointages, plannings, feuilles de temps et taches quotidiennes d equipe pour les restaurants.',
      path: '/workforce/restaurants',
    },
    workforceBeta: {
      title: 'Beta restaurants de l Ontario | ZANVROX Workforce',
      description:
        'Les restaurants de l Ontario peuvent postuler pour tester ZANVROX Workforce avant le lancement public.',
      path: '/workforce/beta',
    },
    security: {
      title: 'Securite | ZANVROX',
      description:
        'Consultez l isolation entre organisations, les controles par role, les approbations, la gouvernance et les protections d architecture derriere ZANVROX.',
      path: '/security',
    },
    pricing: {
      title: 'Tarifs | ZANVROX ERP et ZANVROX Workforce',
      description:
        'ZANVROX ERP et ZANVROX Workforce sont tarifes independamment. Consultez les tarifs ERP (Finance, Business, Operations, Enterprise) ou Workforce (Starter, Team, Business, Multi-location) en CAD.',
      path: '/pricing',
    },
    workforcePricing: {
      title: 'Tarifs ZANVROX Workforce | Starter, Team, Business',
      description:
        'Tarifs CAD par etablissement pour ZANVROX Workforce : Starter, Team, Business, et plans Multi-location sur devis. Aucun achat ERP requis.',
      path: '/workforce/pricing',
    },
    erpPricing: {
      title: 'Tarifs ZANVROX ERP | Finance, Business, Operations, Enterprise',
      description:
        'Tarifs CAD pour ZANVROX ERP : Finance, Business, Operations et Enterprise, plus l add-on paie et Guided Implementation en option.',
      path: '/erp/pricing',
    },
    resources: {
      title: 'Ressources | ZANVROX',
      description:
        'Utilisez les ressources produit, le guide de l espace d evaluation et l apercu securite pour autoevaluer ZANVROX.',
      path: '/resources',
    },
    about: {
      title: 'A propos | ZANVROX',
      description:
        'Decouvrez comment ZANVROX positionne la finance, les operations, la gouvernance et la discipline de deploiement pour les PME canadiennes.',
      path: '/about',
    },
    contact: {
      title: 'Contact | ZANVROX',
      description:
        'Demandez une demo optionnelle ou posez une question ciblee sur le produit, la paie, l onboarding ou l implementation.',
      path: '/contact',
    },
    privacy: {
      title: 'Politique de confidentialite | ZANVROX',
      description:
        'Politique de confidentialite du site ZANVROX et du traitement associe des leads.',
      path: '/legal/privacy',
    },
    terms: {
      title: 'Conditions d utilisation | ZANVROX',
      description: 'Conditions d utilisation regissant le site ZANVROX et ses contenus.',
      path: '/legal/terms',
    },
    accountDeletion: {
      title: 'Suppression de compte | ZANVROX',
      description: 'Comment demander la suppression d un compte ZANVROX et des donnees associees.',
      path: '/account-deletion',
    },
  },
};

export default applyWorkforceBetaCampaign(siteContentFr, 'fr');
