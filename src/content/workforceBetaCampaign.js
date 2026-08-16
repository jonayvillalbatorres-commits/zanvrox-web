const campaignByLocale = {
  en: {
    banner: {
      eyebrow: 'Ontario small businesses',
      title: 'Try Workforce free for 14 days before you buy',
      body: 'Restaurants, cafés, bars, retail stores, small shops, and small warehouses in Ontario can apply: no purchase commitment, plus 6 months free after public launch for selected participants who complete the beta.',
      cta: { label: 'Apply for the free beta', path: '/workforce/beta' },
    },
    workforceCta: { label: 'Join the Ontario Small Business Beta', path: '/workforce/beta' },
    restaurantCta:
      'Restaurants are part of the Ontario small-business beta. Apply free, or start with Workforce today.',
    beta: {
      heroKicker: 'ONTARIO SMALL BUSINESS BETA',
      heroTitle: 'Test ZANVROX Workforce with your real team before our public launch.',
      heroSubtitle:
        'We are inviting selected Ontario restaurants, cafés, bars, retail stores, small shops, and small warehouses to test Workforce during real shifts.',
      badges: ['14-day beta', 'No purchase commitment', '6 months free after launch'],
      intro: {
        title: 'How the beta works',
        paragraphs: [
          'This is the initial audience for the beta, not a limit on who ZANVROX Workforce is built for.',
          'Use the app with a manager and employees, tell us what works and what needs improvement, and help us prepare for public launch.',
          'Selected businesses that complete the beta receive six months of ZANVROX Workforce free after public launch.',
        ],
      },
      terms: {
        title: 'Beta terms',
        subtitle: 'Commercial terms for the Ontario Small Business Beta, stated plainly.',
        items: [
          '14-day beta period',
          'No cost during the beta',
          'No purchase commitment',
          'Selected participants that complete the beta receive 6 months of ZANVROX Workforce free after public launch',
          'After the 6 free months, you choose a Workforce plan',
          'No automatic renewal or charge from the beta without your consent',
        ],
      },
      form: {
        title: 'Apply for the beta',
        helper:
          'Tell us about your Ontario business. We will review your application and follow up by email.',
        fields: {
          businessName: 'Business name',
          businessType: 'Business type',
          contactName: 'Contact name',
          email: 'Business email',
          city: 'City',
          employeeCount: 'Number of employees',
          locationCount: 'Number of locations',
          currentMethod: 'Current time tracking method',
          participantCount: 'How many employees could participate?',
          message: 'Optional message',
          consent: 'I agree to be contacted by ZANVROX regarding the Workforce beta.',
        },
        businessTypes: {
          placeholder: 'Select your business type',
          restaurant: 'Restaurant',
          cafe: 'Café',
          bar: 'Bar',
          retail_store: 'Retail store',
          small_shop: 'Small shop or local business',
          small_warehouse: 'Small warehouse',
          other: 'Other small business',
        },
        placeholders: {
          businessName: 'e.g. Maple Street Market',
          contactName: 'Your full name',
          email: 'you@yourbusiness.com',
          city: 'e.g. Toronto',
          employeeCount: 'e.g. 12',
          locationCount: 'e.g. 1',
          currentMethod: 'e.g. Paper timesheets, spreadsheet, POS built-in',
          participantCount: 'e.g. 5',
          message: 'Anything else we should know?',
        },
        errors: {
          businessName: 'Enter your business name (2-120 characters).',
          businessType: 'Select your business type.',
          contactName: 'Enter a contact name (2-120 characters).',
          email: 'Enter a valid business email.',
          city: 'Enter your city (2-120 characters).',
          employeeCount: 'Enter a valid number of employees (1-10000).',
          locationCount: 'Enter a valid number of locations (1-1000).',
          currentMethod: 'Tell us your current time tracking method.',
          participantCount: 'Enter a valid number of participating employees.',
          participantCountExceedsEmployees:
            'The number of participants cannot exceed the number of employees.',
          message: 'Keep the message under 2000 characters.',
          consent: 'Consent is required to apply for the beta.',
          website: 'Spam protection triggered.',
          startedAt: 'Please take a moment before submitting.',
        },
        consentPrivacyLabel: 'Privacy Policy',
        consentPrivacyPath: '/legal/privacy',
        cta: 'Apply for the beta',
        submittingCta: 'Submitting...',
        confirmation:
          'Thank you. We will review your application and contact you with private testing instructions if your business is selected.',
        submitError: 'We could not submit your application. Please try again.',
      },
    },
    seo: {
      title: 'Ontario Small Business Beta | ZANVROX Workforce',
      description:
        'Ontario restaurants, cafés, bars, retail stores, small shops, and small warehouses can apply to test ZANVROX Workforce before public launch.',
      path: '/workforce/beta',
    },
  },
  es: {
    banner: {
      eyebrow: 'Pequeños negocios de Ontario',
      title: 'Prueba Workforce gratis durante 14 días antes de comprar',
      body: 'Restaurantes, cafeterías, bares, tiendas, pequeños comercios y pequeños almacenes de Ontario pueden solicitarla: sin compromiso de compra y con 6 meses gratis después del lanzamiento público para los participantes seleccionados que completen la beta.',
      cta: { label: 'Solicitar la beta gratuita', path: '/workforce/beta' },
    },
    workforceCta: {
      label: 'Únete a la beta para pequeños negocios de Ontario',
      path: '/workforce/beta',
    },
    restaurantCta:
      'Los restaurantes forman parte de la beta para pequeños negocios de Ontario. Solicítala gratis o empieza hoy con Workforce.',
    beta: {
      heroKicker: 'BETA PARA PEQUEÑOS NEGOCIOS DE ONTARIO',
      heroTitle:
        'Prueba ZANVROX Workforce con tu equipo real antes de nuestro lanzamiento público.',
      heroSubtitle:
        'Invitamos a restaurantes, cafeterías, bares, tiendas, pequeños comercios y pequeños almacenes seleccionados de Ontario a probar Workforce durante turnos reales.',
      badges: [
        'Beta de 14 días',
        'Sin compromiso de compra',
        '6 meses gratis después del lanzamiento',
      ],
      intro: {
        title: 'Cómo funciona la beta',
        paragraphs: [
          'Estos sectores son el público inicial de la beta, no un límite de los negocios para los que está diseñado ZANVROX Workforce.',
          'Usa la aplicación con un responsable y empleados, cuéntanos qué funciona y qué debe mejorar, y ayúdanos a preparar el lanzamiento público.',
          'Los negocios seleccionados que completen la beta recibirán seis meses gratis de ZANVROX Workforce después del lanzamiento público.',
        ],
      },
      terms: {
        title: 'Condiciones de la beta',
        subtitle:
          'Condiciones comerciales de la beta para pequeños negocios de Ontario, explicadas con claridad.',
        items: [
          'Periodo de beta de 14 días',
          'Sin coste durante la beta',
          'Sin compromiso de compra',
          'Los participantes seleccionados que completen la beta reciben 6 meses gratis de ZANVROX Workforce después del lanzamiento público',
          'Después de los 6 meses gratis, eliges un plan de Workforce',
          'Sin renovación automática ni cargos de la beta sin tu consentimiento',
        ],
      },
      form: {
        title: 'Solicita la beta',
        helper:
          'Cuéntanos sobre tu negocio de Ontario. Revisaremos tu solicitud y te contactaremos por correo electrónico.',
        fields: {
          businessName: 'Nombre del negocio',
          businessType: 'Tipo de negocio',
          contactName: 'Nombre de contacto',
          email: 'Correo empresarial',
          city: 'Ciudad',
          employeeCount: 'Número de empleados',
          locationCount: 'Número de ubicaciones',
          currentMethod: 'Método actual de control horario',
          participantCount: '¿Cuántos empleados podrían participar?',
          message: 'Mensaje opcional',
          consent: 'Acepto que ZANVROX me contacte sobre la beta de Workforce.',
        },
        businessTypes: {
          placeholder: 'Selecciona tu tipo de negocio',
          restaurant: 'Restaurante',
          cafe: 'Cafetería',
          bar: 'Bar',
          retail_store: 'Tienda minorista',
          small_shop: 'Pequeño comercio o negocio local',
          small_warehouse: 'Pequeño almacén',
          other: 'Otro pequeño negocio',
        },
        placeholders: {
          businessName: 'p. ej. Mercado Maple Street',
          contactName: 'Tu nombre completo',
          email: 'tu@tunegocio.com',
          city: 'p. ej. Toronto',
          employeeCount: 'p. ej. 12',
          locationCount: 'p. ej. 1',
          currentMethod: 'p. ej. Hojas de horas en papel, hoja de cálculo, integrado en el POS',
          participantCount: 'p. ej. 5',
          message: '¿Algo más que debamos saber?',
        },
        errors: {
          businessName: 'Introduce el nombre de tu negocio (2-120 caracteres).',
          businessType: 'Selecciona tu tipo de negocio.',
          contactName: 'Introduce un nombre de contacto (2-120 caracteres).',
          email: 'Introduce un correo empresarial válido.',
          city: 'Introduce tu ciudad (2-120 caracteres).',
          employeeCount: 'Introduce un número de empleados válido (1-10000).',
          locationCount: 'Introduce un número de ubicaciones válido (1-1000).',
          currentMethod: 'Cuéntanos tu método actual de control horario.',
          participantCount: 'Introduce un número válido de empleados participantes.',
          participantCountExceedsEmployees:
            'El número de participantes no puede superar el número de empleados.',
          message: 'Mantén el mensaje por debajo de 2000 caracteres.',
          consent: 'El consentimiento es obligatorio para solicitar la beta.',
          website: 'Se activó la protección antispam.',
          startedAt: 'Espera un momento antes de enviar.',
        },
        consentPrivacyLabel: 'Política de privacidad',
        consentPrivacyPath: '/legal/privacy',
        cta: 'Solicitar la beta',
        submittingCta: 'Enviando...',
        confirmation:
          'Gracias. Revisaremos tu solicitud y te enviaremos las instrucciones de prueba privada si tu negocio es seleccionado.',
        submitError: 'No pudimos enviar tu solicitud. Inténtalo de nuevo.',
      },
    },
    seo: {
      title: 'Beta para pequeños negocios de Ontario | ZANVROX Workforce',
      description:
        'Restaurantes, cafeterías, bares, tiendas, pequeños comercios y pequeños almacenes de Ontario pueden solicitar probar ZANVROX Workforce antes del lanzamiento público.',
      path: '/workforce/beta',
    },
  },
  fr: {
    banner: {
      eyebrow: 'Petites entreprises de l’Ontario',
      title: 'Essayez Workforce gratuitement pendant 14 jours avant d’acheter',
      body: 'Les restaurants, cafés, bars, commerces de détail, petites boutiques et petits entrepôts de l’Ontario peuvent postuler : aucun engagement d’achat et 6 mois gratuits après le lancement public pour les participants sélectionnés qui terminent la bêta.',
      cta: { label: 'Postuler à la bêta gratuite', path: '/workforce/beta' },
    },
    workforceCta: {
      label: 'Rejoindre la bêta des petites entreprises de l’Ontario',
      path: '/workforce/beta',
    },
    restaurantCta:
      'Les restaurants font partie de la bêta des petites entreprises de l’Ontario. Postulez gratuitement ou commencez avec Workforce dès aujourd’hui.',
    beta: {
      heroKicker: 'BÊTA DES PETITES ENTREPRISES DE L’ONTARIO',
      heroTitle:
        'Testez ZANVROX Workforce avec votre véritable équipe avant notre lancement public.',
      heroSubtitle:
        'Nous invitons des restaurants, cafés, bars, commerces de détail, petites boutiques et petits entrepôts sélectionnés de l’Ontario à tester Workforce pendant de vrais quarts de travail.',
      badges: [
        'Bêta de 14 jours',
        'Aucun engagement d’achat',
        '6 mois gratuits après le lancement',
      ],
      intro: {
        title: 'Fonctionnement de la bêta',
        paragraphs: [
          'Ces secteurs constituent le public initial de la bêta, et non une limite aux entreprises pour lesquelles ZANVROX Workforce est conçu.',
          'Utilisez l’application avec un gestionnaire et des employés, dites-nous ce qui fonctionne et ce qui doit être amélioré, puis aidez-nous à préparer le lancement public.',
          'Les entreprises sélectionnées qui terminent la bêta reçoivent six mois gratuits de ZANVROX Workforce après le lancement public.',
        ],
      },
      terms: {
        title: 'Conditions de la bêta',
        subtitle:
          'Conditions commerciales de la bêta des petites entreprises de l’Ontario, présentées clairement.',
        items: [
          'Période de bêta de 14 jours',
          'Aucun coût pendant la bêta',
          'Aucun engagement d’achat',
          'Les participants sélectionnés qui terminent la bêta reçoivent 6 mois gratuits de ZANVROX Workforce après le lancement public',
          'Après les 6 mois gratuits, vous choisissez un forfait Workforce',
          'Aucun renouvellement automatique ni frais liés à la bêta sans votre consentement',
        ],
      },
      form: {
        title: 'Postuler à la bêta',
        helper:
          'Parlez-nous de votre entreprise ontarienne. Nous examinerons votre demande et vous répondrons par courriel.',
        fields: {
          businessName: 'Nom de l’entreprise',
          businessType: 'Type d’entreprise',
          contactName: 'Nom du contact',
          email: 'Courriel professionnel',
          city: 'Ville',
          employeeCount: 'Nombre d’employés',
          locationCount: 'Nombre d’emplacements',
          currentMethod: 'Méthode actuelle de suivi du temps',
          participantCount: 'Combien d’employés pourraient participer?',
          message: 'Message facultatif',
          consent: 'J’accepte d’être contacté par ZANVROX au sujet de la bêta Workforce.',
        },
        businessTypes: {
          placeholder: 'Sélectionnez votre type d’entreprise',
          restaurant: 'Restaurant',
          cafe: 'Café',
          bar: 'Bar',
          retail_store: 'Commerce de détail',
          small_shop: 'Petite boutique ou entreprise locale',
          small_warehouse: 'Petit entrepôt',
          other: 'Autre petite entreprise',
        },
        placeholders: {
          businessName: 'p. ex. Marché Maple Street',
          contactName: 'Votre nom complet',
          email: 'vous@votreentreprise.com',
          city: 'p. ex. Toronto',
          employeeCount: 'p. ex. 12',
          locationCount: 'p. ex. 1',
          currentMethod: 'p. ex. Feuilles de temps papier, tableur, fonction intégrée au PDV',
          participantCount: 'p. ex. 5',
          message: 'Y a-t-il autre chose que nous devrions savoir?',
        },
        errors: {
          businessName: 'Saisissez le nom de votre entreprise (2 à 120 caractères).',
          businessType: 'Sélectionnez votre type d’entreprise.',
          contactName: 'Saisissez un nom de contact (2 à 120 caractères).',
          email: 'Saisissez un courriel professionnel valide.',
          city: 'Saisissez votre ville (2 à 120 caractères).',
          employeeCount: 'Saisissez un nombre valide d’employés (1 à 10000).',
          locationCount: 'Saisissez un nombre valide d’emplacements (1 à 1000).',
          currentMethod: 'Indiquez votre méthode actuelle de suivi du temps.',
          participantCount: 'Saisissez un nombre valide d’employés participants.',
          participantCountExceedsEmployees:
            'Le nombre de participants ne peut pas dépasser le nombre d’employés.',
          message: 'Limitez le message à 2000 caractères.',
          consent: 'Le consentement est requis pour postuler à la bêta.',
          website: 'La protection antipourriel a été déclenchée.',
          startedAt: 'Veuillez patienter un instant avant d’envoyer.',
        },
        consentPrivacyLabel: 'Politique de confidentialité',
        consentPrivacyPath: '/legal/privacy',
        cta: 'Postuler à la bêta',
        submittingCta: 'Envoi...',
        confirmation:
          'Merci. Nous examinerons votre demande et vous transmettrons les instructions de test privé si votre entreprise est sélectionnée.',
        submitError: 'Nous n’avons pas pu envoyer votre demande. Veuillez réessayer.',
      },
    },
    seo: {
      title: 'Bêta des petites entreprises de l’Ontario | ZANVROX Workforce',
      description:
        'Les restaurants, cafés, bars, commerces de détail, petites boutiques et petits entrepôts de l’Ontario peuvent demander à tester ZANVROX Workforce avant son lancement public.',
      path: '/workforce/beta',
    },
  },
};

// Additional complete locale entries stay grouped here so campaign claims and
// form contracts cannot drift between pages or languages.
campaignByLocale.zh = {
  banner: {
    eyebrow: '安大略省小型企业',
    title: '购买前免费试用 Workforce 14 天',
    body: '安大略省的餐厅、咖啡馆、酒吧、零售店、小商铺和小型仓库均可申请：无需承诺购买；完成测试的入选参与者可在公开发布后免费使用 6 个月。',
    cta: { label: '申请免费测试', path: '/workforce/beta' },
  },
  workforceCta: { label: '加入安大略省小型企业测试', path: '/workforce/beta' },
  restaurantCta: '餐厅属于安大略省小型企业测试的首批受众。可免费申请，也可立即开始使用 Workforce。',
  beta: {
    heroKicker: '安大略省小型企业测试',
    heroTitle: '在公开发布前，让您的真实团队测试 ZANVROX Workforce。',
    heroSubtitle:
      '我们正在邀请安大略省入选的餐厅、咖啡馆、酒吧、零售店、小商铺和小型仓库在真实班次中测试 Workforce。',
    badges: ['14 天测试', '无需承诺购买', '发布后免费 6 个月'],
    intro: {
      title: '测试如何进行',
      paragraphs: [
        '这些行业只是测试的首批受众，并不代表 ZANVROX Workforce 仅适用于这些企业。',
        '让经理和员工一起使用应用，告诉我们哪些功能有效、哪些需要改进，并帮助我们为公开发布做好准备。',
        '完成测试的入选企业可在公开发布后免费使用 ZANVROX Workforce 六个月。',
      ],
    },
    terms: {
      title: '测试条款',
      subtitle: '安大略省小型企业测试的商业条款，清晰说明如下。',
      items: [
        '14 天测试期',
        '测试期间不收费',
        '无需承诺购买',
        '完成测试的入选参与者可在公开发布后免费使用 ZANVROX Workforce 6 个月',
        '6 个月免费期结束后，由您选择 Workforce 套餐',
        '未经您同意，不会因本次测试自动续订或收费',
      ],
    },
    form: {
      title: '申请参加测试',
      helper: '请介绍您的安大略省企业。我们将审核申请并通过电子邮件联系您。',
      fields: {
        businessName: '企业名称',
        businessType: '企业类型',
        contactName: '联系人姓名',
        email: '企业邮箱',
        city: '城市',
        employeeCount: '员工人数',
        locationCount: '地点数量',
        currentMethod: '当前工时记录方式',
        participantCount: '可参与的员工人数',
        message: '可选留言',
        consent: '我同意 ZANVROX 就 Workforce 测试与我联系。',
      },
      businessTypes: {
        placeholder: '请选择企业类型',
        restaurant: '餐厅',
        cafe: '咖啡馆',
        bar: '酒吧',
        retail_store: '零售店',
        small_shop: '小商铺或本地企业',
        small_warehouse: '小型仓库',
        other: '其他小型企业',
      },
      placeholders: {
        businessName: '例如：Maple Street Market',
        contactName: '您的全名',
        email: 'you@yourbusiness.com',
        city: '例如：多伦多',
        employeeCount: '例如：12',
        locationCount: '例如：1',
        currentMethod: '例如：纸质工时表、电子表格、POS 内置功能',
        participantCount: '例如：5',
        message: '还有其他需要我们了解的信息吗？',
      },
      errors: {
        businessName: '请输入企业名称（2-120 个字符）。',
        businessType: '请选择企业类型。',
        contactName: '请输入联系人姓名（2-120 个字符）。',
        email: '请输入有效的企业邮箱。',
        city: '请输入城市（2-120 个字符）。',
        employeeCount: '请输入有效的员工人数（1-10000）。',
        locationCount: '请输入有效的地点数量（1-1000）。',
        currentMethod: '请告诉我们您当前的工时记录方式。',
        participantCount: '请输入有效的参与员工人数。',
        participantCountExceedsEmployees: '参与人数不能超过员工总数。',
        message: '留言不得超过 2000 个字符。',
        consent: '申请测试必须同意此项。',
        website: '已触发反垃圾保护。',
        startedAt: '请稍候片刻再提交。',
      },
      consentPrivacyLabel: '隐私政策',
      consentPrivacyPath: '/legal/privacy',
      cta: '申请参加测试',
      submittingCta: '提交中...',
      confirmation: '谢谢。我们将审核您的申请；如果您的企业入选，我们会发送私人测试说明。',
      submitError: '无法提交申请，请重试。',
    },
  },
  seo: {
    title: '安大略省小型企业测试 | ZANVROX Workforce',
    description:
      '安大略省的餐厅、咖啡馆、酒吧、零售店、小商铺和小型仓库可申请在公开发布前测试 ZANVROX Workforce。',
    path: '/workforce/beta',
  },
};

campaignByLocale.pa = {
  banner: {
    eyebrow: 'ਓਨਟਾਰੀਓ ਦੇ ਛੋਟੇ ਕਾਰੋਬਾਰ',
    title: 'ਖਰੀਦਣ ਤੋਂ ਪਹਿਲਾਂ Workforce ਨੂੰ 14 ਦਿਨ ਮੁਫ਼ਤ ਅਜ਼ਮਾਓ',
    body: 'ਓਨਟਾਰੀਓ ਦੇ ਰੈਸਟੋਰੈਂਟ, ਕੈਫੇ, ਬਾਰ, ਰਿਟੇਲ ਸਟੋਰ, ਛੋਟੀਆਂ ਦੁਕਾਨਾਂ ਅਤੇ ਛੋਟੇ ਗੋਦਾਮ ਅਰਜ਼ੀ ਦੇ ਸਕਦੇ ਹਨ: ਖਰੀਦ ਦੀ ਕੋਈ ਵਚਨਬੱਧਤਾ ਨਹੀਂ ਅਤੇ ਬੀਟਾ ਪੂਰਾ ਕਰਨ ਵਾਲੇ ਚੁਣੇ ਭਾਗੀਦਾਰਾਂ ਲਈ ਜਨਤਕ ਲਾਂਚ ਤੋਂ ਬਾਅਦ 6 ਮਹੀਨੇ ਮੁਫ਼ਤ।',
    cta: { label: 'ਮੁਫ਼ਤ ਬੀਟਾ ਲਈ ਅਰਜ਼ੀ ਦਿਓ', path: '/workforce/beta' },
  },
  workforceCta: { label: 'ਓਨਟਾਰੀਓ ਛੋਟੇ ਕਾਰੋਬਾਰ ਬੀਟਾ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ', path: '/workforce/beta' },
  restaurantCta:
    'ਰੈਸਟੋਰੈਂਟ ਓਨਟਾਰੀਓ ਛੋਟੇ ਕਾਰੋਬਾਰ ਬੀਟਾ ਦਾ ਹਿੱਸਾ ਹਨ। ਮੁਫ਼ਤ ਅਰਜ਼ੀ ਦਿਓ ਜਾਂ ਅੱਜ ਹੀ Workforce ਸ਼ੁਰੂ ਕਰੋ।',
  beta: {
    heroKicker: 'ਓਨਟਾਰੀਓ ਛੋਟੇ ਕਾਰੋਬਾਰ ਬੀਟਾ',
    heroTitle: 'ਜਨਤਕ ਲਾਂਚ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੀ ਅਸਲ ਟੀਮ ਨਾਲ ZANVROX Workforce ਦੀ ਜਾਂਚ ਕਰੋ।',
    heroSubtitle:
      'ਅਸੀਂ ਓਨਟਾਰੀਓ ਦੇ ਚੁਣੇ ਰੈਸਟੋਰੈਂਟਾਂ, ਕੈਫਿਆਂ, ਬਾਰਾਂ, ਰਿਟੇਲ ਸਟੋਰਾਂ, ਛੋਟੀਆਂ ਦੁਕਾਨਾਂ ਅਤੇ ਛੋਟੇ ਗੋਦਾਮਾਂ ਨੂੰ ਅਸਲ ਸ਼ਿਫਟਾਂ ਦੌਰਾਨ Workforce ਦੀ ਜਾਂਚ ਲਈ ਸੱਦਾ ਦੇ ਰਹੇ ਹਾਂ।',
    badges: ['14 ਦਿਨਾਂ ਦਾ ਬੀਟਾ', 'ਖਰੀਦ ਦੀ ਕੋਈ ਵਚਨਬੱਧਤਾ ਨਹੀਂ', 'ਲਾਂਚ ਤੋਂ ਬਾਅਦ 6 ਮਹੀਨੇ ਮੁਫ਼ਤ'],
    intro: {
      title: 'ਬੀਟਾ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ',
      paragraphs: [
        'ਇਹ ਖੇਤਰ ਬੀਟਾ ਦੇ ਸ਼ੁਰੂਆਤੀ ਦਰਸ਼ਕ ਹਨ; ZANVROX Workforce ਸਿਰਫ਼ ਇਨ੍ਹਾਂ ਕਾਰੋਬਾਰਾਂ ਲਈ ਨਹੀਂ ਬਣਾਇਆ ਗਿਆ।',
        'ਐਪ ਨੂੰ ਮੈਨੇਜਰ ਅਤੇ ਕਰਮਚਾਰੀਆਂ ਨਾਲ ਵਰਤੋ, ਸਾਨੂੰ ਦੱਸੋ ਕਿ ਕੀ ਵਧੀਆ ਹੈ ਅਤੇ ਕੀ ਸੁਧਾਰਨਾ ਹੈ, ਅਤੇ ਜਨਤਕ ਲਾਂਚ ਦੀ ਤਿਆਰੀ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ।',
        'ਬੀਟਾ ਪੂਰਾ ਕਰਨ ਵਾਲੇ ਚੁਣੇ ਕਾਰੋਬਾਰਾਂ ਨੂੰ ਜਨਤਕ ਲਾਂਚ ਤੋਂ ਬਾਅਦ ਛੇ ਮਹੀਨੇ ZANVROX Workforce ਮੁਫ਼ਤ ਮਿਲੇਗਾ।',
      ],
    },
    terms: {
      title: 'ਬੀਟਾ ਦੀਆਂ ਸ਼ਰਤਾਂ',
      subtitle: 'ਓਨਟਾਰੀਓ ਛੋਟੇ ਕਾਰੋਬਾਰ ਬੀਟਾ ਦੀਆਂ ਵਪਾਰਕ ਸ਼ਰਤਾਂ ਸਪੱਸ਼ਟ ਰੂਪ ਵਿੱਚ।',
      items: [
        '14 ਦਿਨਾਂ ਦੀ ਬੀਟਾ ਮਿਆਦ',
        'ਬੀਟਾ ਦੌਰਾਨ ਕੋਈ ਲਾਗਤ ਨਹੀਂ',
        'ਖਰੀਦ ਦੀ ਕੋਈ ਵਚਨਬੱਧਤਾ ਨਹੀਂ',
        'ਬੀਟਾ ਪੂਰਾ ਕਰਨ ਵਾਲੇ ਚੁਣੇ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਜਨਤਕ ਲਾਂਚ ਤੋਂ ਬਾਅਦ 6 ਮਹੀਨੇ ZANVROX Workforce ਮੁਫ਼ਤ ਮਿਲੇਗਾ',
        '6 ਮੁਫ਼ਤ ਮਹੀਨਿਆਂ ਤੋਂ ਬਾਅਦ ਤੁਸੀਂ Workforce ਯੋਜਨਾ ਚੁਣਦੇ ਹੋ',
        'ਤੁਹਾਡੀ ਸਹਿਮਤੀ ਤੋਂ ਬਿਨਾਂ ਬੀਟਾ ਤੋਂ ਕੋਈ ਆਟੋਮੈਟਿਕ ਨਵੀਨੀਕਰਨ ਜਾਂ ਚਾਰਜ ਨਹੀਂ',
      ],
    },
    form: {
      title: 'ਬੀਟਾ ਲਈ ਅਰਜ਼ੀ ਦਿਓ',
      helper:
        'ਆਪਣੇ ਓਨਟਾਰੀਓ ਕਾਰੋਬਾਰ ਬਾਰੇ ਦੱਸੋ। ਅਸੀਂ ਤੁਹਾਡੀ ਅਰਜ਼ੀ ਦੀ ਸਮੀਖਿਆ ਕਰਕੇ ਈਮੇਲ ਰਾਹੀਂ ਸੰਪਰਕ ਕਰਾਂਗੇ।',
      fields: {
        businessName: 'ਕਾਰੋਬਾਰ ਦਾ ਨਾਂ',
        businessType: 'ਕਾਰੋਬਾਰ ਦੀ ਕਿਸਮ',
        contactName: 'ਸੰਪਰਕ ਨਾਂ',
        email: 'ਕਾਰੋਬਾਰੀ ਈਮੇਲ',
        city: 'ਸ਼ਹਿਰ',
        employeeCount: 'ਕਰਮਚਾਰੀਆਂ ਦੀ ਗਿਣਤੀ',
        locationCount: 'ਟਿਕਾਣਿਆਂ ਦੀ ਗਿਣਤੀ',
        currentMethod: 'ਮੌਜੂਦਾ ਸਮਾਂ ਟ੍ਰੈਕਿੰਗ ਤਰੀਕਾ',
        participantCount: 'ਕਿੰਨੇ ਕਰਮਚਾਰੀ ਭਾਗ ਲੈ ਸਕਦੇ ਹਨ?',
        message: 'ਵਿਕਲਪਿਕ ਸੁਨੇਹਾ',
        consent: 'ਮੈਂ Workforce ਬੀਟਾ ਬਾਰੇ ZANVROX ਵੱਲੋਂ ਸੰਪਰਕ ਕੀਤੇ ਜਾਣ ਲਈ ਸਹਿਮਤ ਹਾਂ।',
      },
      businessTypes: {
        placeholder: 'ਆਪਣੇ ਕਾਰੋਬਾਰ ਦੀ ਕਿਸਮ ਚੁਣੋ',
        restaurant: 'ਰੈਸਟੋਰੈਂਟ',
        cafe: 'ਕੈਫੇ',
        bar: 'ਬਾਰ',
        retail_store: 'ਰਿਟੇਲ ਸਟੋਰ',
        small_shop: 'ਛੋਟੀ ਦੁਕਾਨ ਜਾਂ ਸਥਾਨਕ ਕਾਰੋਬਾਰ',
        small_warehouse: 'ਛੋਟਾ ਗੋਦਾਮ',
        other: 'ਹੋਰ ਛੋਟਾ ਕਾਰੋਬਾਰ',
      },
      placeholders: {
        businessName: 'ਉਦਾਹਰਨ: Maple Street Market',
        contactName: 'ਤੁਹਾਡਾ ਪੂਰਾ ਨਾਂ',
        email: 'you@yourbusiness.com',
        city: 'ਉਦਾਹਰਨ: Toronto',
        employeeCount: 'ਉਦਾਹਰਨ: 12',
        locationCount: 'ਉਦਾਹਰਨ: 1',
        currentMethod: 'ਉਦਾਹਰਨ: ਕਾਗਜ਼ੀ ਟਾਈਮਸ਼ੀਟ, ਸਪ੍ਰੈਡਸ਼ੀਟ, POS',
        participantCount: 'ਉਦਾਹਰਨ: 5',
        message: 'ਹੋਰ ਕੁਝ ਜੋ ਸਾਨੂੰ ਪਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?',
      },
      errors: {
        businessName: 'ਆਪਣੇ ਕਾਰੋਬਾਰ ਦਾ ਨਾਂ ਦਿਓ (2-120 ਅੱਖਰ)।',
        businessType: 'ਆਪਣੇ ਕਾਰੋਬਾਰ ਦੀ ਕਿਸਮ ਚੁਣੋ।',
        contactName: 'ਸੰਪਰਕ ਨਾਂ ਦਿਓ (2-120 ਅੱਖਰ)।',
        email: 'ਵੈਧ ਕਾਰੋਬਾਰੀ ਈਮੇਲ ਦਿਓ।',
        city: 'ਆਪਣਾ ਸ਼ਹਿਰ ਦਿਓ (2-120 ਅੱਖਰ)।',
        employeeCount: 'ਕਰਮਚਾਰੀਆਂ ਦੀ ਵੈਧ ਗਿਣਤੀ ਦਿਓ (1-10000)।',
        locationCount: 'ਟਿਕਾਣਿਆਂ ਦੀ ਵੈਧ ਗਿਣਤੀ ਦਿਓ (1-1000)।',
        currentMethod: 'ਆਪਣਾ ਮੌਜੂਦਾ ਸਮਾਂ ਟ੍ਰੈਕਿੰਗ ਤਰੀਕਾ ਦੱਸੋ।',
        participantCount: 'ਭਾਗ ਲੈਣ ਵਾਲੇ ਕਰਮਚਾਰੀਆਂ ਦੀ ਵੈਧ ਗਿਣਤੀ ਦਿਓ।',
        participantCountExceedsEmployees: 'ਭਾਗੀਦਾਰਾਂ ਦੀ ਗਿਣਤੀ ਕਰਮਚਾਰੀਆਂ ਤੋਂ ਵੱਧ ਨਹੀਂ ਹੋ ਸਕਦੀ।',
        message: 'ਸੁਨੇਹਾ 2000 ਅੱਖਰਾਂ ਤੋਂ ਘੱਟ ਰੱਖੋ।',
        consent: 'ਬੀਟਾ ਲਈ ਅਰਜ਼ੀ ਦੇਣ ਵਾਸਤੇ ਸਹਿਮਤੀ ਲਾਜ਼ਮੀ ਹੈ।',
        website: 'ਸਪੈਮ ਸੁਰੱਖਿਆ ਚਾਲੂ ਹੋਈ।',
        startedAt: 'ਜਮ੍ਹਾਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੁਝ ਸਮਾਂ ਲਓ।',
      },
      consentPrivacyLabel: 'ਪਰਦੇਦਾਰੀ ਨੀਤੀ',
      consentPrivacyPath: '/legal/privacy',
      cta: 'ਬੀਟਾ ਲਈ ਅਰਜ਼ੀ ਦਿਓ',
      submittingCta: 'ਜਮ੍ਹਾਂ ਹੋ ਰਿਹਾ ਹੈ...',
      confirmation:
        'ਧੰਨਵਾਦ। ਜੇ ਤੁਹਾਡਾ ਕਾਰੋਬਾਰ ਚੁਣਿਆ ਗਿਆ ਤਾਂ ਅਸੀਂ ਨਿੱਜੀ ਟੈਸਟਿੰਗ ਹਦਾਇਤਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।',
      submitError: 'ਤੁਹਾਡੀ ਅਰਜ਼ੀ ਜਮ੍ਹਾਂ ਨਹੀਂ ਹੋ ਸਕੀ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
    },
  },
  seo: {
    title: 'ਓਨਟਾਰੀਓ ਛੋਟੇ ਕਾਰੋਬਾਰ ਬੀਟਾ | ZANVROX Workforce',
    description:
      'ਓਨਟਾਰੀਓ ਦੇ ਰੈਸਟੋਰੈਂਟ, ਕੈਫੇ, ਬਾਰ, ਰਿਟੇਲ ਸਟੋਰ, ਛੋਟੀਆਂ ਦੁਕਾਨਾਂ ਅਤੇ ਛੋਟੇ ਗੋਦਾਮ ਜਨਤਕ ਲਾਂਚ ਤੋਂ ਪਹਿਲਾਂ ZANVROX Workforce ਦੀ ਜਾਂਚ ਲਈ ਅਰਜ਼ੀ ਦੇ ਸਕਦੇ ਹਨ।',
    path: '/workforce/beta',
  },
};

campaignByLocale.ar = {
  banner: {
    eyebrow: 'الشركات الصغيرة في أونتاريو',
    title: 'جرّب Workforce مجاناً لمدة 14 يوماً قبل الشراء',
    body: 'يمكن للمطاعم والمقاهي والحانات ومتاجر التجزئة والمتاجر الصغيرة والمستودعات الصغيرة في أونتاريو التقديم: دون التزام بالشراء، مع 6 أشهر مجاناً بعد الإطلاق العام للمشاركين المختارين الذين يكملون الاختبار.',
    cta: { label: 'التقديم للاختبار المجاني', path: '/workforce/beta' },
  },
  workforceCta: { label: 'انضم إلى اختبار الشركات الصغيرة في أونتاريو', path: '/workforce/beta' },
  restaurantCta:
    'المطاعم جزء من اختبار الشركات الصغيرة في أونتاريو. قدّم مجاناً أو ابدأ باستخدام Workforce اليوم.',
  beta: {
    heroKicker: 'اختبار الشركات الصغيرة في أونتاريو',
    heroTitle: 'اختبر ZANVROX Workforce مع فريقك الحقيقي قبل إطلاقنا العام.',
    heroSubtitle:
      'ندعو مطاعم ومقاهي وحانات ومتاجر تجزئة ومتاجر صغيرة ومستودعات صغيرة مختارة في أونتاريو لاختبار Workforce خلال نوبات عمل حقيقية.',
    badges: ['اختبار لمدة 14 يوماً', 'دون التزام بالشراء', '6 أشهر مجاناً بعد الإطلاق'],
    intro: {
      title: 'كيف يعمل الاختبار',
      paragraphs: [
        'هذه القطاعات هي الجمهور الأولي للاختبار، وليست حداً لأنواع الشركات التي صُمم لها ZANVROX Workforce.',
        'استخدم التطبيق مع مدير وموظفين، وأخبرنا بما ينجح وما يحتاج إلى تحسين، وساعدنا في الاستعداد للإطلاق العام.',
        'تحصل الشركات المختارة التي تكمل الاختبار على ستة أشهر مجانية من ZANVROX Workforce بعد الإطلاق العام.',
      ],
    },
    terms: {
      title: 'شروط الاختبار',
      subtitle: 'الشروط التجارية لاختبار الشركات الصغيرة في أونتاريو موضحة بوضوح.',
      items: [
        'فترة اختبار مدتها 14 يوماً',
        'دون تكلفة خلال الاختبار',
        'دون التزام بالشراء',
        'يحصل المشاركون المختارون الذين يكملون الاختبار على 6 أشهر مجانية من ZANVROX Workforce بعد الإطلاق العام',
        'بعد الأشهر الستة المجانية تختار خطة Workforce',
        'لا تجديد تلقائياً ولا رسوم ناتجة عن الاختبار دون موافقتك',
      ],
    },
    form: {
      title: 'التقديم للاختبار',
      helper: 'أخبرنا عن شركتك في أونتاريو. سنراجع طلبك ونتابع معك عبر البريد الإلكتروني.',
      fields: {
        businessName: 'اسم الشركة',
        businessType: 'نوع الشركة',
        contactName: 'اسم جهة الاتصال',
        email: 'البريد الإلكتروني للعمل',
        city: 'المدينة',
        employeeCount: 'عدد الموظفين',
        locationCount: 'عدد المواقع',
        currentMethod: 'طريقة تتبع الوقت الحالية',
        participantCount: 'كم موظفاً يمكنه المشاركة؟',
        message: 'رسالة اختيارية',
        consent: 'أوافق على تواصل ZANVROX معي بخصوص اختبار Workforce.',
      },
      businessTypes: {
        placeholder: 'اختر نوع شركتك',
        restaurant: 'مطعم',
        cafe: 'مقهى',
        bar: 'حانة',
        retail_store: 'متجر تجزئة',
        small_shop: 'متجر صغير أو شركة محلية',
        small_warehouse: 'مستودع صغير',
        other: 'شركة صغيرة أخرى',
      },
      placeholders: {
        businessName: 'مثال: Maple Street Market',
        contactName: 'اسمك الكامل',
        email: 'you@yourbusiness.com',
        city: 'مثال: تورونتو',
        employeeCount: 'مثال: 12',
        locationCount: 'مثال: 1',
        currentMethod: 'مثال: جداول ورقية أو جدول بيانات أو نظام POS',
        participantCount: 'مثال: 5',
        message: 'هل هناك أي شيء آخر ينبغي أن نعرفه؟',
      },
      errors: {
        businessName: 'أدخل اسم شركتك (2-120 حرفاً).',
        businessType: 'اختر نوع شركتك.',
        contactName: 'أدخل اسم جهة اتصال (2-120 حرفاً).',
        email: 'أدخل بريداً إلكترونياً صالحاً للعمل.',
        city: 'أدخل مدينتك (2-120 حرفاً).',
        employeeCount: 'أدخل عدداً صالحاً للموظفين (1-10000).',
        locationCount: 'أدخل عدداً صالحاً للمواقع (1-1000).',
        currentMethod: 'أخبرنا بطريقة تتبع الوقت الحالية.',
        participantCount: 'أدخل عدداً صالحاً للموظفين المشاركين.',
        participantCountExceedsEmployees: 'لا يمكن أن يتجاوز عدد المشاركين عدد الموظفين.',
        message: 'اجعل الرسالة أقل من 2000 حرف.',
        consent: 'الموافقة مطلوبة للتقديم للاختبار.',
        website: 'تم تشغيل الحماية من الرسائل المزعجة.',
        startedAt: 'يرجى الانتظار قليلاً قبل الإرسال.',
      },
      consentPrivacyLabel: 'سياسة الخصوصية',
      consentPrivacyPath: '/legal/privacy',
      cta: 'التقديم للاختبار',
      submittingCta: 'جارٍ الإرسال...',
      confirmation:
        'شكراً لك. سنراجع طلبك ونتواصل معك بتعليمات الاختبار الخاص إذا تم اختيار شركتك.',
      submitError: 'تعذر إرسال طلبك. يرجى المحاولة مرة أخرى.',
    },
  },
  seo: {
    title: 'اختبار الشركات الصغيرة في أونتاريو | ZANVROX Workforce',
    description:
      'يمكن للمطاعم والمقاهي والحانات ومتاجر التجزئة والمتاجر الصغيرة والمستودعات الصغيرة في أونتاريو التقديم لاختبار ZANVROX Workforce قبل الإطلاق العام.',
    path: '/workforce/beta',
  },
};

campaignByLocale.tl = {
  banner: {
    eyebrow: 'Maliliit na negosyo sa Ontario',
    title: 'Subukan ang Workforce nang libre sa loob ng 14 na araw bago bumili',
    body: 'Maaaring mag-apply ang mga restaurant, café, bar, retail store, maliit na tindahan, at maliit na bodega sa Ontario: walang obligasyong bumili at may 6 na buwang libre pagkatapos ng pampublikong paglulunsad para sa mga napiling kalahok na makakatapos ng beta.',
    cta: { label: 'Mag-apply sa libreng beta', path: '/workforce/beta' },
  },
  workforceCta: {
    label: 'Sumali sa Beta para sa Maliliit na Negosyo sa Ontario',
    path: '/workforce/beta',
  },
  restaurantCta:
    'Kasama ang mga restaurant sa beta para sa maliliit na negosyo sa Ontario. Mag-apply nang libre o magsimula sa Workforce ngayon.',
  beta: {
    heroKicker: 'BETA PARA SA MALILIIT NA NEGOSYO SA ONTARIO',
    heroTitle:
      'Subukan ang ZANVROX Workforce kasama ang tunay mong team bago ang pampublikong paglulunsad.',
    heroSubtitle:
      'Inaanyayahan namin ang mga napiling restaurant, café, bar, retail store, maliit na tindahan, at maliit na bodega sa Ontario na subukan ang Workforce sa tunay na mga shift.',
    badges: [
      '14 na araw na beta',
      'Walang obligasyong bumili',
      '6 na buwang libre pagkatapos ng paglulunsad',
    ],
    intro: {
      title: 'Paano gumagana ang beta',
      paragraphs: [
        'Ang mga sektor na ito ang unang audience ng beta at hindi limitasyon sa mga negosyong dinisenyuhan ng ZANVROX Workforce.',
        'Gamitin ang app kasama ang manager at mga empleyado, sabihin sa amin kung ano ang gumagana at kailangang pagbutihin, at tulungan kaming maghanda para sa pampublikong paglulunsad.',
        'Ang mga napiling negosyong makakatapos ng beta ay makakatanggap ng anim na buwang libreng ZANVROX Workforce pagkatapos ng pampublikong paglulunsad.',
      ],
    },
    terms: {
      title: 'Mga tuntunin ng beta',
      subtitle:
        'Malinaw na mga komersyal na tuntunin para sa Beta ng Maliliit na Negosyo sa Ontario.',
      items: [
        '14 na araw na panahon ng beta',
        'Walang bayad sa panahon ng beta',
        'Walang obligasyong bumili',
        'Ang mga napiling kalahok na makakatapos ng beta ay makakatanggap ng 6 na buwang libreng ZANVROX Workforce pagkatapos ng pampublikong paglulunsad',
        'Pagkatapos ng 6 na libreng buwan, ikaw ang pipili ng Workforce plan',
        'Walang awtomatikong renewal o singil mula sa beta nang walang pahintulot mo',
      ],
    },
    form: {
      title: 'Mag-apply sa beta',
      helper:
        'Ikuwento sa amin ang iyong negosyo sa Ontario. Susuriin namin ang aplikasyon at makikipag-ugnayan sa e-liham.',
      fields: {
        businessName: 'Pangalan ng negosyo',
        businessType: 'Uri ng negosyo',
        contactName: 'Pangalan ng taong kokontakin',
        email: 'E-liham ng negosyo',
        city: 'Lungsod',
        employeeCount: 'Bilang ng mga empleyado',
        locationCount: 'Bilang ng mga lokasyon',
        currentMethod: 'Kasalukuyang paraan ng pagsubaybay ng oras',
        participantCount: 'Ilang empleyado ang maaaring lumahok?',
        message: 'Opsyonal na mensahe',
        consent: 'Pumapayag akong makipag-ugnayan ang ZANVROX tungkol sa Workforce beta.',
      },
      businessTypes: {
        placeholder: 'Piliin ang uri ng iyong negosyo',
        restaurant: 'Restaurant',
        cafe: 'Café',
        bar: 'Bar',
        retail_store: 'Retail store',
        small_shop: 'Maliit na tindahan o lokal na negosyo',
        small_warehouse: 'Maliit na bodega',
        other: 'Ibang maliit na negosyo',
      },
      placeholders: {
        businessName: 'hal. Maple Street Market',
        contactName: 'Buong pangalan mo',
        email: 'you@yourbusiness.com',
        city: 'hal. Toronto',
        employeeCount: 'hal. 12',
        locationCount: 'hal. 1',
        currentMethod: 'hal. Papel na timesheet, spreadsheet, POS',
        participantCount: 'hal. 5',
        message: 'May iba pa ba kaming dapat malaman?',
      },
      errors: {
        businessName: 'Ilagay ang pangalan ng iyong negosyo (2-120 character).',
        businessType: 'Piliin ang uri ng iyong negosyo.',
        contactName: 'Ilagay ang pangalan ng taong kokontakin (2-120 character).',
        email: 'Ilagay ang wastong e-liham ng negosyo.',
        city: 'Ilagay ang iyong lungsod (2-120 character).',
        employeeCount: 'Ilagay ang wastong bilang ng empleyado (1-10000).',
        locationCount: 'Ilagay ang wastong bilang ng lokasyon (1-1000).',
        currentMethod: 'Sabihin ang kasalukuyang paraan ng pagsubaybay ng oras.',
        participantCount: 'Ilagay ang wastong bilang ng lalahok na empleyado.',
        participantCountExceedsEmployees:
          'Hindi maaaring lumampas sa bilang ng empleyado ang bilang ng kalahok.',
        message: 'Panatilihing mas mababa sa 2000 character ang mensahe.',
        consent: 'Kailangan ang pahintulot para mag-apply sa beta.',
        website: 'Na-trigger ang proteksyon laban sa spam.',
        startedAt: 'Maghintay sandali bago magsumite.',
      },
      consentPrivacyLabel: 'Patakaran sa Pagkapribado',
      consentPrivacyPath: '/legal/privacy',
      cta: 'Mag-apply sa beta',
      submittingCta: 'Isinusumite...',
      confirmation:
        'Salamat. Susuriin namin ang aplikasyon at makikipag-ugnayan para sa pribadong tagubilin sa pagsubok kung mapili ang iyong negosyo.',
      submitError: 'Hindi maisumite ang iyong aplikasyon. Pakisubukang muli.',
    },
  },
  seo: {
    title: 'Beta para sa Maliliit na Negosyo sa Ontario | ZANVROX Workforce',
    description:
      'Maaaring mag-apply ang mga restaurant, café, bar, retail store, maliit na tindahan, at maliit na bodega sa Ontario upang subukan ang ZANVROX Workforce bago ang pampublikong paglulunsad.',
    path: '/workforce/beta',
  },
};

const REGION_REPLACEMENTS = {
  en: [
    ['ONTARIO', 'CANADA-WIDE'],
    ['Ontario', 'Canada'],
    ['Canada business', 'business in Canada'],
    ['Canada restaurants', 'restaurants across Canada'],
  ],
  es: [
    ['ONTARIO', 'CANADÁ'],
    ['Ontario', 'Canadá'],
  ],
  fr: [
    ['DE L’ONTARIO', 'DU CANADA'],
    ['L’ONTARIO', 'LE CANADA'],
    ['de l’Ontario', 'du Canada'],
    ['l’Ontario', 'le Canada'],
    ['ontarienne', 'canadienne'],
    ['Ontario', 'Canada'],
  ],
  zh: [['安大略省', '加拿大']],
  pa: [['ਓਨਟਾਰੀਓ', 'ਕੈਨੇਡਾ']],
  ar: [['أونتاريو', 'كندا']],
  tl: [
    ['ONTARIO', 'CANADA'],
    ['Ontario', 'Canada'],
  ],
};

const replaceCampaignRegion = (value, locale) => {
  if (Array.isArray(value)) return value.map((item) => replaceCampaignRegion(item, locale));
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, replaceCampaignRegion(item, locale)])
    );
  }
  if (typeof value !== 'string') return value;
  return (REGION_REPLACEMENTS[locale] || REGION_REPLACEMENTS.en).reduce(
    (text, [from, to]) => text.split(from).join(to),
    value
  );
};

export const applyWorkforceBetaCampaign = (content, locale) => {
  const campaign = replaceCampaignRegion(campaignByLocale[locale] || campaignByLocale.en, locale);
  const pages = content.pages || {};
  const home = pages.home || {};
  const workforce = pages.workforce || {};
  const restaurants = pages.workforceRestaurants || {};
  const pricing = pages.pricing || {};
  const pricingWorkforce = pricing.workforce || {};

  return {
    ...content,
    pages: {
      ...pages,
      home: { ...home, restaurantBetaBanner: campaign.banner },
      workforce: {
        ...workforce,
        heroSecondaryCta: campaign.workforceCta,
        restaurantBetaBanner: campaign.banner,
      },
      workforceRestaurants: {
        ...restaurants,
        cta: { ...restaurants.cta, subtitle: campaign.restaurantCta },
      },
      workforceBeta: campaign.beta,
      pricing: {
        ...pricing,
        workforce: { ...pricingWorkforce, betaBanner: campaign.banner },
      },
    },
    seo: { ...content.seo, workforceBeta: campaign.seo },
  };
};

export const WORKFORCE_BETA_BUSINESS_TYPES = [
  'restaurant',
  'cafe',
  'bar',
  'retail_store',
  'small_shop',
  'small_warehouse',
  'other',
];
