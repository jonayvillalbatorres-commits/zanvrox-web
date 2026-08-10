import siteContentEn from './siteContent.en';

const base = siteContentEn;

const siteContentEs = {
  ...base,
  locale: 'es',
  localeLabel: 'Español',
  labels: {
    menu: 'Menú',
    bookDemo: 'Recorrido guiado',
    tryDemo: 'Abrir espacio de trabajo',
    getTechnicalBrief: 'Contactar al equipo',
    reviewResources: 'Ver recursos',
    language: 'Idioma',
    requestQuote: 'Hablar con ventas',
    login: 'Iniciar sesión',
    requestBeta: 'Solicitar beta',
    support: 'Soporte',
  },
  navItems: [
    { label: 'Inicio', path: '/' },
    { label: 'ERP', path: '/erp' },
    { label: 'Workforce', path: '/workforce' },
    { label: 'Precios', path: '/pricing' },
    { label: 'Recursos', path: '/resources' },
    { label: 'Seguridad', path: '/security' },
    { label: 'Acerca de', path: '/about' },
    { label: 'Contacto', path: '/contact' },
  ],
  workforceNav: {
    items: [
      { label: 'Workforce', path: '/workforce' },
      { label: 'Funciones', path: '/workforce#features' },
      { label: 'Restaurantes', path: '/workforce/restaurants' },
      { label: 'Precios', path: '/workforce/pricing' },
      { label: 'Beta', path: '/workforce/beta' },
      { label: 'Seguridad', path: '/security' },
    ],
    erpLink: { label: 'ZANVROX ERP', path: '/erp' },
  },
  brand: {
    name: 'ZANVROX',
    tagline: 'Control ERP integrado para equipos pyme canadienses',
    oneLiner:
      'Finanzas, operaciones, cumplimiento canadiense y nómina en una sola plataforma ERP controlada.',
  },
  pages: {
    home: {
      heroKicker: 'ERP canadiense para finanzas, operaciones y auditabilidad',
      heroTitle:
        'Gestiona finanzas y operaciones en un único ERP controlado en lugar de cinco herramientas desconectadas.',
      heroSubtitle:
        'ZANVROX ayuda a los equipos pyme canadienses a centralizar contabilidad, facturación, compras, inventario, producción, aprobaciones y cumplimiento sin un proyecto de implementación pesado.',
      heroPrimaryCta: { label: 'Ver resumen del producto', path: '/#product-overview' },
      heroSecondaryCta: {
        label: 'Abrir espacio de evaluación',
        path: '/resources#demo-environment',
      },
      heroPreview: {
        title: 'Vista previa fiscal y de control',
        caption: 'En vivo dentro del ERP',
        callouts: [
          { status: 'ready', text: 'Informes GST/HST + PST/QST' },
          { status: 'ready', text: 'Rastro de auditoría y aprobaciones' },
        ],
      },
      video: {
        title: 'Recorrido del producto con contexto real de trabajo',
        subtitle:
          'Un breve recorrido por finanzas, operaciones, flujos fiscales canadienses y preparación de nómina.',
        windowLabel: 'Video del producto',
        duration: '90 s',
        overlayLabel: 'Ver recorrido del producto',
        fallbackLabel: 'Vista previa del póster disponible',
        hasRealVideo: true,
        chapters: [
          'Contabilidad y facturación',
          'Inventario y almacén',
          'Planificación de producción',
          'Panel fiscal',
          'Mesa de trabajo de nómina',
          'Informes y aprobaciones',
        ],
        primaryCta: { label: 'Explorar producto', path: '/erp' },
        secondaryCta: { label: 'Abrir espacio de evaluación', path: '/resources#demo-environment' },
      },
      trustSignals: [
        'Los flujos oficiales respaldados por proveedores se mantienen intactos donde se requieren.',
        'Cambios gobernados con aprobaciones y rastros de auditoría.',
        'Ruta de configuración autónoma para equipos pequeños con implementación guiada opcional.',
        'Postura de cumplimiento canadiense sin exageraciones de marketing.',
      ],
      statusBadges: [
        { status: 'ready', text: 'Contabilidad, facturación, gastos e informes' },
        { status: 'ready', text: 'Inventario, almacén y flujos BOM' },
        { status: 'ready', text: 'Soporte para flujos fiscales canadienses' },
        { status: 'ready', text: 'Complemento de nómina con mesa de trabajo de cierre anual' },
        { status: 'locked', text: 'Controles de gobernanza y auditabilidad' },
        { status: 'ready', text: 'Ruta de incorporación autónoma' },
      ],
      productLines: {
        eyebrow: 'Una plataforma, dos formas de empezar',
        title: 'Dos formas de dirigir tu negocio con ZANVROX',
        subtitle:
          'Empieza con Workforce para operaciones de turnos de primera línea, con ZANVROX ERP para finanzas y operaciones de negocio, o con ambos juntos.',
        cards: [
          {
            name: 'ZANVROX ERP',
            headline:
              'Finanzas, inventario, compras y operaciones en una sola plataforma conectada.',
            cta: { label: 'Explorar ERP', path: '/erp' },
          },
          {
            name: 'ZANVROX Workforce',
            headline: 'Fichajes, horarios, tareas y hojas de horas para equipos de primera línea.',
            cta: { label: 'Explorar Workforce', path: '/workforce' },
          },
        ],
        note: 'Empieza con Workforce. Añade el ERP cuando lo necesites. ¿Ya diriges tu negocio con ZANVROX? Workforce viene incluido con Operaciones.',
      },
      evaluationPath: {
        eyebrow: 'Embudo orientado al producto',
        title: 'Evalúa sin reservar una reunión primero',
        subtitle:
          'El sitio está diseñado para reducir llamadas innecesarias y permitir que los equipos se autoevalúen.',
        cards: [
          {
            title: '1. Mira el resumen',
            body: 'Empieza con el video del producto para entender cómo encajan finanzas, operaciones, impuestos y nómina.',
          },
          {
            title: '2. Explora el producto',
            body: 'Revisa grupos funcionales, capturas y controles de gobernanza por módulo y proceso de negocio.',
          },
          {
            title: '3. Abre el espacio de evaluación',
            body: 'Usa el espacio basado en navegador con datos ficticios para validar navegación, ajuste de roles y cobertura de flujos.',
          },
          {
            title: '4. Solicita ayuda solo si la necesitas',
            body: 'Usa el formulario opcional de contacto o demo cuando tu equipo tenga una pregunta concreta de evaluación.',
          },
        ],
      },
      screenshots: {
        eyebrow: 'Pantallas y flujos',
        title: 'Pantallas diseñadas para mostrar cobertura operativa real',
        subtitle:
          'Cada sección inferior está preparada para capturas reales y usa vistas previas del producto cuando una captura final todavía no está disponible.',
        items: [
          {
            title: 'Panel fiscal canadiense',
            body: 'Haz seguimiento de la preparación para presentar, familias fiscales y controles de cierre desde una sola vista financiera.',
            previewType: 'reports',
            imageKey: 'taxDashboard',
            imageAlt: 'Panel fiscal canadiense dentro de ZANVROX ERP',
          },
          {
            title: 'Gestión de inventario',
            body: 'Consulta posiciones de stock, movimiento de almacén y visibilidad por lotes sin salir del ERP.',
            previewType: 'inventory',
          },
          {
            title: 'Planificación de producción',
            body: 'Revisa órdenes de producción ligadas a BOM, consumo de materiales y progreso de ejecución en una sola superficie.',
            previewType: 'production',
          },
          {
            title: 'Informes financieros',
            body: 'Pasa de la actividad operativa a los informes de gestión sin unir herramientas por separado.',
            previewType: 'accounting',
          },
        ],
      },
      howItWorks: {
        eyebrow: 'Incorporación autónoma',
        title: 'Empieza en seis pasos guiados',
        subtitle:
          'El producto está diseñado para que un equipo liderado por fundadores pueda orientarse sin un proyecto de incorporación pesado.',
        steps: [
          {
            icon: '1',
            title: 'Crear organización',
            bullets: [
              'Inicia tu espacio de trabajo',
              'Define los datos básicos de la entidad legal',
            ],
          },
          {
            icon: '2',
            title: 'Seleccionar país',
            bullets: ['Elegir Canadá', 'Cargar valores predeterminados específicos del país'],
          },
          {
            icon: '3',
            title: 'Elegir plantilla sectorial',
            bullets: ['Elegir un modelo de partida', 'Reducir la fricción de configuración'],
          },
          {
            icon: '4',
            title: 'Configurar impuestos',
            bullets: [
              'Definir familias fiscales',
              'Confirmar la lógica provincial y los valores predeterminados',
            ],
          },
          {
            icon: '5',
            title: 'Importar clientes y proveedores',
            bullets: ['Incorporar datos maestros', 'Usar plantillas y validación'],
          },
          {
            icon: '6',
            title: 'Crear la primera factura',
            bullets: ['Validar el flujo operativo', 'Pasar al uso diario'],
          },
        ],
      },
      compliance: {
        eyebrow: 'Postura canadiense',
        title: 'Construido para credibilidad, no para exageración',
        subtitle:
          'El sitio explica qué está controlado, qué está automatizado y qué todavía requiere revisión.',
        bullets: [
          'Los flujos fiscales canadienses se gestionan con una postura explícita de presentación y auditabilidad.',
          'La nómina se presenta como un complemento separado con alcance y nivel de preparación claros por jurisdicción.',
          'Aprobaciones, gobernanza y expectativas de soporte se expresan directamente en lugar de ocultarse en llamadas comerciales.',
        ],
        coverageLabel: 'Postura comercial actual',
        coverage: 'Mejor encaje para equipos pyme canadienses con 10-50 empleados',
        note: 'Los flujos oficiales respaldados por proveedores siguen disponibles cuando una postura oficial de nivel empresarial no sería la afirmación correcta.',
        provinces: ['ON', 'QC', 'AB', 'BC', 'MB', 'SK', 'NS', 'NB'],
      },
      included: {
        eyebrow: 'Qué está integrado',
        title: 'Una sola plataforma entre finanzas y operaciones',
        subtitle:
          'La clave no es tener más funciones sobre el papel. La clave es tener menos flujos fragmentados en la práctica.',
        items: [
          'Contabilidad, facturación, gastos e informes financieros',
          'Compras, inventario, almacén y fundamentos de producción',
          'Aprobaciones, gobernanza y rastro operativo de auditoría',
          'Flujos de cumplimiento fiscal canadiense y soporte para el complemento de nómina',
          'Multisociedad y gobernanza avanzada para alcance empresarial',
          'Inteligencia ERP y asistencia de IA con una postura controlada',
        ],
      },
      executiveSnapshot: {
        badge: 'Modelo operativo',
        title: 'Diseñado para autoevaluación primero y ayuda humana después',
        subtitle:
          'Este es un sitio orientado al producto para un ERP serio, no un folleto que obliga a cada prospecto a reservar una llamada.',
        metrics: [
          {
            label: 'Perfil ideal principal',
            value: '10-50',
            note: 'Empleados de pymes canadienses',
          },
          {
            label: 'Postura de soporte',
            value: 'Correo primero',
            note: 'Tiempos de respuesta claros por plan',
          },
          {
            label: 'Postura de incorporación',
            value: 'Configuración autónoma',
            note: 'Implementación guiada opcional disponible',
          },
        ],
      },
      positioning: {
        eyebrow: 'Por qué cambian los equipos',
        title: 'Reduce la fragmentación entre finanzas, operaciones y cumplimiento',
        subtitle: 'La propuesta de valor es control, visibilidad y menos traspasos entre sistemas.',
        cards: [
          {
            role: 'Finanzas',
            headline: 'Cierra con menos sistemas desconectados.',
            points: [
              'Contabilidad, facturación, gastos e informes en un solo sistema.',
              'Límites de soporte claros y controles conscientes del período.',
              'Postura de cumplimiento canadiense sin exagerar la automatización.',
            ],
          },
          {
            role: 'Operaciones',
            headline: 'Mantén stock, compras y producción en sincronía.',
            points: [
              'Los flujos de inventario y almacén están conectados con finanzas.',
              'Fundamentos de BOM y producción sin middleware adicional.',
              'Señales de revisión operativa y gobernanza donde hacen falta.',
            ],
          },
          {
            role: 'Dirección',
            headline: 'Obtén un apoyo más claro para decidir.',
            points: [
              'Menos conciliaciones manuales entre herramientas.',
              'Expectativas de soporte y alcance de incorporación expresados con claridad.',
              'Mejor calificación de prospectos antes de dedicar tiempo interno.',
            ],
          },
          {
            role: 'TI / Operaciones',
            headline: 'Adopta con un alcance disciplinado.',
            points: [
              'Secuencia de implementación clara para equipos pequeños.',
              'Cambios gobernados y flujos auditables.',
              'Capa de marketing compatible con sitios estáticos y metadatos estructurados.',
            ],
          },
        ],
      },
      technical: {
        eyebrow: 'Modelo de soporte e incorporación',
        title: 'Autoservicio por defecto, ayuda guiada cuando importa',
        subtitle:
          'El sitio fija expectativas desde el inicio para que los equipos pequeños sepan qué ocurre después del registro.',
        items: [
          'Núcleo financiero incluye incorporación autónoma y soporte por correo con respuesta en 48 h.',
          'Operaciones añade soporte prioritario por correo con respuesta en 24 h.',
          'Empresarial incluye ayuda de incorporación y canal directo de soporte.',
        ],
      },
      supportModel: {
        title: 'Expectativas de soporte por plan',
        subtitle: 'El soporte se define directamente para que la evaluación se mantenga realista.',
        tiers: [
          {
            name: 'Núcleo financiero',
            body: 'Soporte por correo, respuesta en 48 h y guía de incorporación autónoma.',
          },
          {
            name: 'Operaciones',
            body: 'Soporte prioritario por correo, respuesta en 24 h y orientación operativa reforzada.',
          },
          {
            name: 'Empresarial',
            body: 'Incorporación dedicada, canal directo de soporte y ayuda acotada para el despliegue.',
          },
        ],
      },
      demoEnvironment: {
        title: 'Abrir el espacio de evaluación',
        subtitle:
          'Usa un espacio basado en navegador con datos ficticios antes de solicitar un recorrido guiado.',
        emailLabel: 'Usuario demo',
        emailValue: 'Use your work email',
        passwordLabel: 'Contraseña',
        passwordValue: 'Set during signup',
        note: 'Solo para evaluación en navegador. Este espacio permanece separado de la planificación de implementación y de las expectativas de producción.',
        cta: { label: 'Abrir espacio de evaluación', path: '/resources#demo-environment' },
      },
      restaurantBetaBanner: {
        eyebrow: 'Restaurantes de Ontario',
        title: 'Únete a la beta privada de ZANVROX Workforce',
        body: 'Prueba de 14 días. 6 meses gratis después del lanzamiento.',
        cta: { label: 'Más información', path: '/workforce/beta' },
      },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        title: 'Preguntas que los equipos hacen antes de comprometer tiempo',
        items: [
          {
            question: '¿Podemos evaluar ZANVROX sin reservar una demo primero?',
            answer:
              'Sí. La ruta prevista es ver el resumen, explorar el producto, abrir el espacio de evaluación y solicitar ayuda solo si tu equipo la necesita.',
          },
          {
            question: '¿La nómina está incluida en los planes base?',
            answer:
              'No. La nómina es un complemento separado con precio independiente para que los equipos centrados solo en finanzas no paguen por ella por defecto.',
          },
          {
            question: '¿Necesitamos un proyecto de incorporación de pago?',
            answer:
              'No. La configuración autónoma es la ruta por defecto. La implementación guiada está disponible como paquete opcional de pago cuando tu equipo quiere ayuda con la configuración y la importación de datos.',
          },
          {
            question: '¿Qué soporte deberíamos esperar?',
            answer:
              'Núcleo financiero incluye soporte por correo en 48 h, Operaciones incluye soporte prioritario por correo en 24 h y Empresarial incluye ayuda de incorporación más un canal directo de soporte.',
          },
        ],
      },
      cta: {
        title: 'Empieza por el producto, no por una llamada comercial',
        subtitle:
          'Explora primero el producto y los precios. Contacta al equipo cuando tengas una pregunta concreta sobre despliegue, nómina o integración.',
        primary: { label: 'Explorar producto', path: '/erp' },
        secondary: { label: 'Ver precios', path: '/pricing' },
      },
    },
    product: {
      heroKicker: 'ZANVROX ERP',
      heroTitle:
        'Gestiona finanzas, operaciones y equipo de trabajo desde una sola plataforma conectada.',
      heroSubtitle:
        'ZANVROX ERP es una plataforma controlada para equipos pyme canadienses que cubre finanzas, facturación, gastos, clientes y proveedores, compras, inventario, ubicaciones, operaciones, informes, flujos de nómina y ZANVROX Workforce.',
      heroPrimaryCta: { label: 'Ver precios', path: '/pricing' },
      heroSecondaryCta: {
        label: 'Abrir espacio de evaluación',
        path: '/resources#demo-environment',
      },
      heroPreview: {
        title: 'Vista previa operativa',
        type: 'inventory',
        caption: 'Una sola capa de datos operativos',
        callouts: [
          { status: 'ready', text: 'Inventario, almacén, BOM y producción' },
          { status: 'ready', text: 'Gobernanza y aprobaciones' },
        ],
      },
      pillars: {
        title: 'Pilares del producto',
        subtitle:
          'El sitio explica el producto en torno a flujos de trabajo, no a listas desconectadas de funciones.',
        items: [
          {
            title: 'Núcleo financiero',
            body: 'Contabilidad, facturación, gastos, visibilidad bancaria e informes.',
          },
          {
            title: 'Operaciones',
            body: 'Inventario, almacén, BOM, fundamentos de producción y aprobaciones.',
          },
          {
            title: 'Cumplimiento canadiense',
            body: 'Flujos fiscales, complemento de nómina, soporte de remesas y postura de cierre anual.',
          },
          {
            title: 'Gobernanza',
            body: 'Auditabilidad, aprobaciones, límites de control y ruta de expansión multisociedad.',
          },
          {
            title: 'ZANVROX Workforce',
            body: 'Fichaje de entrada y salida, horarios, tareas y hojas de horas para equipos de primera línea, incluido con los planes ERP elegibles o disponible de forma independiente.',
          },
        ],
      },
      showcase: {
        title: 'Áreas del producto que vale la pena evaluar visualmente',
        subtitle:
          'Estas son las pantallas que la mayoría de los equipos quiere inspeccionar antes de invertir tiempo en conversaciones comerciales más profundas.',
        items: [
          {
            title: 'Panel fiscal',
            body: 'Muestra la postura de presentación, el progreso de cumplimiento y la visibilidad del flujo de soporte.',
            previewType: 'reports',
            imageKey: 'taxDashboard',
            imageAlt: 'Panel fiscal en ZANVROX ERP',
          },
          {
            title: 'Control de inventario',
            body: 'Muestra visibilidad de stock, rutas de almacén y señales de preparación operativa.',
            previewType: 'inventory',
          },
          {
            title: 'Planificación de producción',
            body: 'Muestra planificación operativa vinculada a BOM y progreso de ejecución.',
            previewType: 'production',
          },
          {
            title: 'Informes financieros',
            body: 'Muestra informes conectados desde la actividad operativa de vuelta a finanzas.',
            previewType: 'reports',
          },
        ],
      },
      stacks: [
        {
          title: 'Finanzas y operaciones integradas',
          subtitle:
            'Diseñado para reducir traspasos entre herramientas en el segmento de 10-50 empleados.',
          items: [
            'Contabilidad y facturación viven en el mismo sistema que compras y gastos.',
            'Los datos de inventario, almacén y BOM permanecen vinculados al registro financiero.',
            'Aprobaciones y gobernanza pueden añadirse sin herramientas operativas separadas.',
            'ZANVROX Workforce conecta los datos de fichaje, horarios y hojas de horas del personal de primera línea de vuelta a la misma plataforma.',
          ],
        },
        {
          title: 'Postura canadiense de control',
          subtitle: 'Diseñado para resultar creíble dentro de un contexto operativo canadiense.',
          items: [
            'El soporte fiscal canadiense se explica con lenguaje práctico de flujo de trabajo.',
            'La nómina sigue siendo un complemento con alcance de soporte y precio explícitos.',
            'Las afirmaciones están alineadas con la postura real de gobernanza, preparación y revisión.',
          ],
        },
      ],
      onboarding: {
        title: 'Cómo funciona la configuración autónoma en la práctica',
        subtitle:
          'La página de producto refuerza que la incorporación se guía dentro del producto y no se oculta detrás de consultoría por defecto.',
        steps: [
          {
            number: '1',
            title: 'Crear organización',
            body: 'Crea tu espacio de trabajo y empieza desde una base operativa limpia.',
          },
          {
            number: '2',
            title: 'Seleccionar Canadá',
            body: 'Aplica valores predeterminados del país y supuestos de cumplimiento.',
          },
          {
            number: '3',
            title: 'Elegir plantilla sectorial',
            body: 'Empieza desde una línea base práctica en lugar de configurar desde cero.',
          },
          {
            number: '4',
            title: 'Configurar impuestos',
            body: 'Confirma el enrutamiento fiscal, registros y controles financieros.',
          },
          {
            number: '5',
            title: 'Importar datos maestros',
            body: 'Incorpora clientes, proveedores y registros operativos clave.',
          },
          {
            number: '6',
            title: 'Ejecutar la primera transacción',
            body: 'Crea la primera factura y valida el recorrido operativo de extremo a extremo.',
          },
        ],
        note: 'La implementación guiada está disponible cuando tu equipo quiere ayuda con la configuración, revisión del plan contable, importación de datos y formación.',
      },
      cta: {
        title: 'Comprueba si el alcance del producto encaja con tu empresa hoy',
        subtitle:
          'Usa precios y recursos para decidir si necesitas configuración autónoma, implementación guiada o una conversación empresarial.',
        primary: { label: 'Ver precios', path: '/pricing' },
        secondary: { label: 'Contactar al equipo', path: '/contact' },
      },
    },
    pricingHub: {
      heroTitle: 'Dos productos. Dos tarifas independientes.',
      heroSubtitle:
        'Elige ZANVROX Workforce para operaciones de turno en primera línea, ZANVROX ERP para finanzas y operaciones de negocio, o ambos. Cada uno tiene su propia página de precios.',
      erpCard: {
        eyebrow: 'ZANVROX ERP',
        title: 'Finanzas y operaciones de negocio',
        body: 'Contabilidad, facturación, compras, inventario y reportes para equipos pyme canadienses.',
        bullets: ['Finance', 'Business', 'Operations', 'Enterprise'],
        cta: { label: 'Ver precios de ERP', path: '/erp/pricing' },
      },
      workforceCard: {
        eyebrow: 'ZANVROX Workforce',
        title: 'Gestión de equipos de primera línea',
        body: 'Fichajes, horarios, tareas y hojas de horas, con precio por local.',
        bullets: ['Starter', 'Team', 'Business', 'Multi-location'],
        cta: { label: 'Ver precios de Workforce', path: '/workforce/pricing' },
      },
      differenceNote:
        'ZANVROX ERP y ZANVROX Workforce se venden y cobran de forma independiente. Los planes ERP elegibles incluyen un descuento o inclusión de Workforce — consulta los precios de ERP para ver el detalle de los paquetes.',
    },
    pricing: {
      heroTitle: 'Precios para ZANVROX ERP y ZANVROX Workforce.',
      heroSubtitle:
        'Empieza con Workforce para operaciones de turnos de primera línea, con ZANVROX ERP para finanzas y operaciones de negocio, o con ambos juntos. Precios transparentes en CAD para equipos pyme canadienses.',
      pricingNote:
        'Precios en dólares canadienses. Impuestos no incluidos. El precio puede variar para despliegues empresariales o de alto volumen. La nómina es un complemento separado. ZANVROX ayuda a organizar flujos financieros, de nómina y de personal, pero no sustituye el asesoramiento contable, legal ni fiscal.',
      upgradePath: {
        eyebrow: 'Empieza donde está tu negocio hoy',
        title: 'Una sola plataforma a medida que tu negocio crece',
        subtitle:
          'Esta no es una secuencia obligatoria. Una empresa puede contratar directamente el plan que mejor encaje hoy.',
        steps: [
          { name: 'Workforce', body: 'CAD 29-79 por ubicación' },
          { name: 'Finanzas', body: 'CAD 179 / mes' },
          { name: 'Negocio', body: 'CAD 349 / mes' },
          { name: 'Operaciones', body: 'CAD 649 / mes, Workforce incluido' },
          { name: 'Empresarial', body: 'Personalizado' },
        ],
        note: '¿Ya diriges tu negocio con ZANVROX? Workforce viene incluido con Operaciones.',
      },
      bundleOffers: {
        operationsIncluded: {
          title: 'Operaciones incluye ZANVROX Workforce',
          body: 'ZANVROX Workforce incluido para los empleados y ubicaciones cubiertos por tu suscripción ERP. Sin coste adicional de Workforce para ese alcance.',
        },
        businessDiscount: {
          title: '50% de descuento en Workforce con Negocio',
          body: 'Los clientes de ERP Negocio reciben un 50% de descuento en su plan independiente elegible de ZANVROX Workforce.',
        },
        financeStandalone: {
          title: 'Finanzas y Workforce, de forma independiente',
          body: 'Finanzas no incluye Workforce ni un descuento en Workforce. Puedes contratar Finanzas más ZANVROX Workforce al precio estándar independiente, sin ninguna obligación de pasar a Negocio u Operaciones.',
        },
      },
      workforce: {
        title: 'ZANVROX Workforce',
        subtitle:
          'Fichajes de entrada y salida, horarios, tareas y hojas de horas para equipos de primera línea, con precio por ubicación.',
        launchBadge: 'Facturación anual disponible',
        launchOfferLabel:
          'Los planes anuales de Workforce incluyen dos meses gratis al facturarse por año.',
        launchOfferNote:
          'El precio mostrado aquí es informativo; la facturación se confirma cuando empiezas.',
        popularLabel: 'Más popular',
        priceSuffixMonthly: '/mes por ubicación',
        priceSuffixAnnual: '/año por ubicación',
        annualDisplayMode: 'total',
        billedMonthlyLabel: 'Facturación mensual',
        billedAnnuallyLabel: 'Facturación anual',
        fromLabel: 'Desde',
        customLabel: 'Precio personalizado',
        includesLabel: 'Incluye',
        entitiesIncludedLabel: 'Alcance de facturación',
        usersIncludedLabel: 'Empleados incluidos',
        billingToggle: {
          monthly: 'Mensual',
          annual: 'Anual',
          annualBadge: '2 meses gratis',
          helper:
            'La facturación anual cambia solo el plazo de la suscripción base y equivale a 10 meses de la tarifa mensual.',
        },
        tiers: [
          {
            slug: 'workforce-starter',
            name: 'Inicial',
            summary:
              'Para una sola ubicación que necesita fichajes, horarios y hojas de horas en una sola app.',
            entitiesLabel: 'Precio por ubicación',
            usersLabel: 'Hasta 10 empleados',
            monthly: { kind: 'fixed', amount: 29, note: 'Facturado por ubicación, al mes.' },
            annual: {
              kind: 'fixed',
              amount: 29,
              totalAmount: 290,
              badge: '2 meses gratis',
              note: 'Equivale a 10 meses de facturación mensual. 2 meses gratis.',
            },
            included: [
              'Fichaje de entrada / salida',
              'Verificación de ubicación',
              'Hojas de horas',
              'Horarios',
              'Tareas',
            ],
            ctaLabel: 'Empezar con Inicial',
          },
          {
            slug: 'workforce-team',
            name: 'Equipo',
            isPopular: true,
            summary:
              'Para ubicaciones que necesitan controles de gerencia, solicitudes de turno e informes más sólidos.',
            entitiesLabel: 'Precio por ubicación',
            usersLabel: 'Hasta 25 empleados',
            monthly: { kind: 'fixed', amount: 49, note: 'Facturado por ubicación, al mes.' },
            annual: {
              kind: 'fixed',
              amount: 49,
              totalAmount: 490,
              badge: '2 meses gratis',
              note: 'Equivale a 10 meses de facturación mensual. 2 meses gratis.',
            },
            included: [
              'Todo lo incluido en Inicial',
              'Controles de gerencia',
              'Turnos abiertos y solicitudes de turno',
              'Comunicación de equipo',
              'Informes mejorados',
              'Más controles operativos',
            ],
            ctaLabel: 'Empezar con Equipo',
          },
          {
            slug: 'workforce-business',
            name: 'Negocio',
            summary:
              'Para ubicaciones más grandes que necesitan controles de gerencia avanzados y varios gerentes.',
            entitiesLabel: 'Precio por ubicación',
            usersLabel: 'Hasta 50 empleados',
            monthly: { kind: 'fixed', amount: 79, note: 'Facturado por ubicación, al mes.' },
            annual: {
              kind: 'fixed',
              amount: 79,
              totalAmount: 790,
              badge: '2 meses gratis',
              note: 'Equivale a 10 meses de facturación mensual. 2 meses gratis.',
            },
            included: [
              'Todo lo incluido en Equipo',
              'Controles de gerencia avanzados',
              'Más informes',
              'Varios gerentes',
              'Operaciones de personal avanzadas',
            ],
            ctaLabel: 'Empezar con Negocio',
          },
          {
            slug: 'workforce-multi-location',
            name: 'Multiubicación',
            summary: 'Para cadenas, grupos multiubicación y ubicaciones con más de 50 empleados.',
            entitiesLabel: 'Precio multiubicación personalizado',
            usersLabel: '50+ empleados por ubicación',
            monthly: {
              kind: 'custom',
              label: 'Precio personalizado',
              note: 'Acotado para cadenas, grupos multiubicación y necesidades operativas especiales.',
            },
            annual: {
              kind: 'custom',
              label: 'Precio personalizado',
              note: 'Acotado directamente según el número de ubicaciones y empleados.',
            },
            included: [
              '50+ empleados por ubicación',
              'Soporte multiubicación y de cadenas',
              'Necesidades operativas especiales',
              'Despliegue y soporte personalizados',
            ],
            ctaLabel: 'Solicitar precio multiubicación',
          },
        ],
        comparison: {
          title: 'Comparación de planes Workforce',
          subtitle: 'Compara Inicial, Equipo y Negocio para una sola ubicación.',
          featureLabel: 'Capacidad',
          rows: [
            { label: 'Fichaje de entrada / salida', values: [true, true, true] },
            { label: 'Verificación de ubicación', values: [true, true, true] },
            { label: 'Hojas de horas', values: [true, true, true] },
            { label: 'Horarios', values: [true, true, true] },
            { label: 'Tareas', values: [true, true, true] },
            { label: 'Controles de gerencia', values: [false, true, true] },
            { label: 'Turnos abiertos / solicitudes de turno', values: [false, true, true] },
            { label: 'Comunicación de equipo', values: [false, true, true] },
            { label: 'Informes mejorados', values: [false, true, true] },
            { label: 'Controles de gerencia avanzados', values: [false, false, true] },
            { label: 'Varios gerentes', values: [false, false, true] },
            { label: 'Empleados incluidos', values: ['10', '25', '50'] },
          ],
          notesTitle: 'Notas comerciales',
          notes: [
            'Precio por ubicación, al mes.',
            'Multiubicación y ubicaciones con más de 50 empleados usan precio personalizado.',
            'La facturación anual incluye dos meses gratis (10 meses de la tarifa mensual).',
          ],
          annualNote: 'Los planes anuales de Workforce incluyen dos meses gratis.',
        },
        betaBanner: {
          eyebrow: 'Restaurantes de Ontario',
          title: 'Prueba Workforce gratis durante 14 días antes de comprar',
          body: 'Los restaurantes de Ontario pueden solicitar la beta privada: sin compromiso de compra, y 6 meses gratis después del lanzamiento público.',
          cta: { label: 'Solicitar la beta gratuita', path: '/workforce/beta' },
        },
        faq: {
          title: 'Preguntas sobre precios de Workforce',
          items: [
            {
              question: '¿Puedo comprar Workforce sin el ERP?',
              answer:
                'Sí. ZANVROX Workforce está disponible como plan independiente, con precio por local, sin necesidad de comprar ni actualizar a ningún plan ERP.',
            },
            {
              question: '¿Ya usas ZANVROX ERP?',
              answer:
                'Operations incluye ZANVROX Workforce para los empleados y locales cubiertos por esa suscripción ERP. Business da derecho a un 50% de descuento en un plan Workforce independiente elegible. Consulta los precios de ERP para más detalle.',
            },
          ],
        },
      },
      erp: {
        title: 'ZANVROX ERP',
        subtitle:
          'Control financiero, operaciones de negocio y flujos conectados para equipos pyme canadienses.',
        launchBadge: 'Facturación anual disponible',
        launchOfferLabel:
          'Las suscripciones base anuales incluyen un mes gratis al facturarse por año.',
        launchOfferNote:
          'El precio de la nómina sigue siendo por uso, y la Implementación guiada está disponible cuando se necesita un despliegue más estructurado.',
        popularLabel: 'Más popular',
        priceSuffixMonthly: '/mes',
        billedMonthlyLabel: 'Facturación mensual',
        billedAnnuallyLabel: 'Facturación anual',
        fromLabel: 'Desde',
        customLabel: 'Personalizado',
        includesLabel: 'Incluye',
        entitiesIncludedLabel: 'Alcance comercial',
        usersIncludedLabel: 'Usuarios incluidos',
        billingToggle: {
          monthly: 'Mensual',
          annual: 'Anual',
          annualBadge: '1 mes gratis',
          helper:
            'La facturación anual cambia solo el plazo de la suscripción base. La nómina mantiene el precio por cuota base más número de empleados.',
        },
        tiers: [
          {
            slug: 'finance',
            name: 'Finanzas',
            summary:
              'Control financiero para empresas en crecimiento: facturación, gastos e informes.',
            entitiesLabel: 'Alcance de empresa única',
            usersLabel: 'Hasta 3 usuarios',
            monthly: {
              kind: 'fixed',
              amount: 179,
              note: 'Incluye guía de configuración autónoma, flujos financieros controlados y soporte por correo con respuesta en 48 h.',
            },
            annual: {
              kind: 'fixed',
              amount: 179,
              badge: '1 mes gratis',
              note: 'Facturado anualmente a CAD 1,969 por la suscripción base.',
              secondaryNote:
                'Workforce y un alcance operativo más amplio siguen siendo componentes separados cuando se necesitan.',
            },
            included: [
              'Facturación',
              'Clientes y proveedores',
              'Gastos',
              'Cuentas por cobrar y por pagar',
              'Contabilidad',
              'Impuestos',
              'Informes financieros',
              'Soporte por correo (respuesta en 48 h)',
            ],
            ctaLabel: 'Revisar Finanzas',
          },
          {
            slug: 'business',
            name: 'Negocio',
            isPopular: true,
            summary:
              'Finanzas más operaciones de negocio del día a día: compras, proveedores e inventario.',
            entitiesLabel: 'Alcance de empresa única',
            usersLabel: 'Hasta 6 usuarios',
            monthly: {
              kind: 'fixed',
              amount: 349,
              badge: '50% de descuento en Workforce',
              note: 'Incluye soporte prioritario por correo con respuesta en 24 h.',
            },
            annual: {
              kind: 'fixed',
              amount: 349,
              badge: '50% de descuento en Workforce',
              note: 'Facturado anualmente a CAD 3,839 por la suscripción base.',
              secondaryNote:
                'Los clientes de ERP Negocio reciben un 50% de descuento en su plan independiente elegible de Workforce.',
            },
            included: [
              'Todo lo incluido en Finanzas',
              'Compras',
              'Proveedores',
              'Inventario',
              'Ubicaciones',
              'Paneles operativos',
              'Gestión operativa estándar',
              '50% de descuento en ZANVROX Workforce (plan independiente)',
              'Soporte prioritario por correo (24 h)',
            ],
            ctaLabel: 'Revisar Negocio',
          },
          {
            slug: 'operations',
            name: 'Operaciones',
            summary:
              'La plataforma completa de operaciones de negocio de ZANVROX, con Workforce incluido.',
            entitiesLabel: 'Alcance de empresa única',
            usersLabel: 'Hasta 10 usuarios',
            monthly: {
              kind: 'fixed',
              amount: 649,
              badge: 'Workforce incluido',
              note: 'Incluye soporte prioritario por correo con respuesta en 24 h para equipos con mayor actividad operativa.',
            },
            annual: {
              kind: 'fixed',
              amount: 649,
              badge: 'Workforce incluido',
              note: 'Facturado anualmente a CAD 7,139 por la suscripción base.',
              secondaryNote:
                'ZANVROX Workforce incluido para los empleados y ubicaciones cubiertos por tu suscripción ERP.',
            },
            included: [
              'Todo lo incluido en Negocio',
              'Inventario avanzado',
              'Compras avanzadas',
              'Operaciones multiubicación',
              'Controles operativos avanzados',
              'Producción (BOM)',
              'Informes avanzados',
              'Controles de gestión',
              'ZANVROX Workforce incluido',
              'Soporte prioritario por correo (24 h)',
            ],
            ctaLabel: 'Revisar Operaciones',
          },
          {
            slug: 'enterprise',
            name: 'Empresarial',
            summary:
              'Para grandes organizaciones, grupos complejos, muchas ubicaciones, altos volúmenes y requisitos personalizados.',
            entitiesLabel: 'Alcance multiubicación o personalizado',
            usersLabel: 'Alcance de usuarios personalizado',
            monthly: {
              kind: 'custom',
              label: 'Personalizado',
              note: 'Revisión acotada para despliegue multiubicación, configuración guiada, integraciones, necesidades de gobernanza y revisión de seguridad.',
            },
            annual: {
              kind: 'custom',
              label: 'Personalizado',
              note: 'El precio personalizado se acota directamente según la estructura operativa, las necesidades de despliegue y el contexto de implementación.',
            },
            included: [
              'Despliegue multiubicación',
              'Gobernanza avanzada',
              'Integraciones',
              'Ruta de revisión de seguridad',
              'Contratos especiales',
              'Implementación guiada y soporte de despliegue',
            ],
            ctaLabel: 'Contáctanos',
          },
        ],
        comparison: {
          title: 'Comparación de planes ERP',
          subtitle:
            'Usa esto para decidir si necesitas control financiero, operaciones del día a día o la plataforma completa de operaciones.',
          featureLabel: 'Capacidad',
          rows: [
            { label: 'Contabilidad', values: [true, true, true, true] },
            { label: 'Facturación', values: [true, true, true, true] },
            { label: 'Gastos', values: [true, true, true, true] },
            { label: 'Informes financieros', values: [true, true, true, true] },
            { label: 'Compras', values: [false, true, true, true] },
            { label: 'Inventario', values: [false, true, true, true] },
            { label: 'Ubicaciones', values: [false, true, true, true] },
            { label: 'Almacén', values: [false, false, true, true] },
            { label: 'Producción (BOM)', values: [false, false, true, true] },
            { label: 'Aprobaciones y gobernanza', values: [false, true, true, true] },
            { label: 'Despliegue multiubicación', values: [false, false, true, true] },
            { label: 'Integraciones', values: [false, false, false, true] },
            {
              label: 'ZANVROX Workforce',
              values: ['Complemento', '50% de descuento', 'Incluido', 'Personalizado'],
            },
            {
              label: 'Nivel de soporte',
              values: [
                'Correo / 48 h',
                'Correo prioritario / 24 h',
                'Correo prioritario / 24 h',
                'Canal directo',
              ],
            },
            {
              label: 'Asistencia de incorporación',
              values: [
                'Configuración autónoma',
                'Configuración autónoma',
                'Configuración autónoma',
                'Incluida',
              ],
            },
            { label: 'Usuarios incluidos', values: ['3', '6', '10', 'Personalizado'] },
          ],
          notesTitle: 'Notas comerciales',
          notes: [
            'La nómina es un complemento separado para todos los planes ERP.',
            'La Implementación guiada es opcional y tiene precio aparte para equipos que quieren un despliegue más estructurado.',
            'Empresarial es la ruta para alcance multiubicación, integraciones, revisión de seguridad y contexto de implementación guiada.',
            'El modelo comercial está diseñado para preservar la transparencia mientras respalda flujos controlados y auditabilidad a medida que aumentan los requisitos.',
          ],
          annualNote: 'Los planes base anuales incluyen un mes gratis.',
        },
      },
      payrollAddon: {
        title: 'Complemento de nómina',
        summary:
          'Un precio separado para la nómina mantiene comercialmente claro el ERP base mientras preserva el soporte de nómina canadiense para los equipos que lo necesitan.',
        priceLabel: 'CAD 59 / mes + CAD 6 / empleado / mes',
        annualPriceLabel: 'CAD 59 / mes + CAD 6 / empleado / mes',
        monthlyNote:
          'Incluye ejecuciones de nómina canadiense, soporte de flujos de remesas, recibos de sueldo, registros y exportaciones para respaldar la revisión de cierre anual, e integración contable. Puede aplicar un mínimo mensual durante el despliegue. La nómina no está incluida con ZANVROX Workforce.',
        annualNote:
          'El complemento de nómina mantiene la misma estructura de cuota base más empleado cuando se factura anualmente, salvo que se acuerde un alcance distinto.',
        included: [
          'Ejecuciones de nómina canadiense',
          'Soporte de flujos de remesas',
          'Recibos de sueldo',
          'Registros y exportaciones para respaldar revisión',
          'Integración contable',
        ],
        ctaLabel: 'Consultar sobre nómina',
      },
      onboardingPackage: {
        title: 'Implementación guiada',
        summary:
          'Configuración guiada opcional de pago único para equipos que quieren alineación operativa, despliegue asistido y un inicio de implementación más estructurado.',
        priceLabel: 'CAD 3,500 a 7,500 pago único',
        included: [
          'Configuración guiada del sistema',
          'Revisión de alineación operativa',
          'Revisión del plan contable',
          'Configuración de impuestos',
          'Guía para importación de datos',
          'Sesión de formación para despliegue asistido',
        ],
        note: 'Implementación guiada opcional para organizaciones que quieren migración, configuración y soporte de lanzamiento con acompañamiento práctico. Los planes estándar pueden empezar igualmente con configuración autónoma cuando un despliegue más ligero es suficiente.',
        ctaLabel: 'Solicitar configuración guiada',
      },
      supportTiers: {
        title: 'Estructura de soporte',
        subtitle:
          'El soporte se expresa públicamente para que los equipos puedan evaluar cobertura operativa, expectativas de respuesta y postura de despliegue desde el principio.',
        items: [
          { name: 'Finanzas', body: 'Soporte por correo con tiempo de respuesta de 48 h.' },
          {
            name: 'Negocio',
            body: 'Soporte prioritario por correo con tiempo de respuesta de 24 h.',
          },
          {
            name: 'Operaciones',
            body: 'Soporte prioritario por correo con tiempo de respuesta de 24 h, incluyendo Workforce para las ubicaciones cubiertas.',
          },
          {
            name: 'Empresarial',
            body: 'Soporte para despliegue guiado, canal directo de soporte y conversación de implementación acotada.',
          },
        ],
      },
      faq: {
        title: 'Preguntas frecuentes sobre precios',
        subtitle: 'Respuestas para equipos que quieren autoevaluarse antes de una llamada.',
        items: [
          {
            question: '¿Necesito una demo antes de poder empezar?',
            answer:
              'No. La ruta prevista es autoevaluación primero: ver el resumen, explorar el producto, revisar precios y usar el espacio de evaluación en navegador antes de solicitar una sesión guiada.',
          },
          {
            question: '¿Workforce está incluido en los planes ERP?',
            answer:
              'Operaciones incluye ZANVROX Workforce para los empleados y ubicaciones cubiertos por esa suscripción ERP. Negocio no incluye Workforce, pero califica para un 50% de descuento en un plan independiente elegible de Workforce. Finanzas no incluye Workforce.',
          },
          {
            question: '¿Puedo comprar Workforce sin el ERP?',
            answer:
              'Sí. ZANVROX Workforce está disponible como plan independiente, con precio por ubicación, sin necesidad de comprar o pasar a ningún plan ERP.',
          },
          {
            question: '¿La nómina está incluida en los planes ERP base o en Workforce?',
            answer:
              'No. La nómina se vende como complemento separado con una cuota mensual base más precio por empleado. No está incluida con ZANVROX Workforce.',
          },
          {
            question: '¿La Implementación guiada es obligatoria?',
            answer:
              'No. Es opcional. Finanzas, Negocio y Operaciones pueden empezar con configuración autónoma, mientras que la Implementación guiada está disponible para equipos que quieren un despliegue más estructurado.',
          },
          {
            question: '¿Qué soporte incluye cada plan?',
            answer:
              'Finanzas incluye soporte por correo en 48 h, Negocio y Operaciones incluyen soporte prioritario por correo en 24 h, y Empresarial incluye conversación de despliegue guiado más un canal directo de soporte.',
          },
        ],
      },
      ctaPrimary: { label: 'Abrir espacio de evaluación', path: '/resources#demo-environment' },
      ctaSecondary: { label: 'Contactar para despliegue personalizado', path: '/contact' },
    },
    workforce: {
      heroKicker: 'ZANVROX WORKFORCE',
      heroTitle: 'Gestiona cada turno con menos caos.',
      heroSubtitle:
        'Fichajes de entrada y salida, horarios, tareas y hojas de horas para equipos de primera línea, todo conectado en una sola app de trabajo sencilla.',
      heroPrimaryCta: { label: 'Empezar con Workforce', path: '/workforce/pricing' },
      heroSecondaryCta: {
        label: 'Únete a la Beta de Restaurantes de Ontario',
        path: '/workforce/beta',
      },
      heroPreview: {
        title: 'Vista previa de turno',
        type: 'workforce',
        caption: 'Creado para equipos de primera línea',
        callouts: [
          { status: 'ready', text: 'Fichaje de entrada / salida' },
          { status: 'ready', text: 'Horarios y hojas de horas' },
        ],
      },
      existingCustomer: {
        title: '¿Ya usas ZANVROX ERP?',
        body: 'Workforce está incluido con los planes ERP elegibles.',
        cta: { label: 'Ver planes ERP con Workforce incluido', path: '/erp/pricing' },
      },
      sections: {
        eyebrow: 'Qué cubre Workforce',
        title: 'Todo lo que necesita un turno, conectado',
        subtitle:
          'ZANVROX Workforce cubre las partes de un turno que normalmente viven en hojas de cálculo, hojas de horas en papel y chats grupales.',
        items: [
          {
            eyebrow: 'Fichaje de entrada y salida',
            title:
              'Los empleados fichan la entrada y la salida desde su teléfono con verificación consciente de la ubicación.',
            body: 'Los eventos de fichaje están vinculados a momentos de trabajo autorizados, no a un seguimiento continuo de la persona.',
            bullets: [
              'Fichar entrada y salida desde un teléfono en segundos',
              'Descansos registrados en el mismo flujo',
              'Verificación consciente de la ubicación al fichar, donde el geocercado está habilitado para una ubicación',
              'Resiliencia sin conexión para que un turno pueda empezar incluso con una conexión débil',
            ],
          },
          {
            eyebrow: 'Horarios y turnos',
            title: 'Horarios que todo el equipo puede ver, desde cualquier teléfono.',
            body: 'Los gerentes publican los horarios; los empleados ven sus turnos en un solo lugar.',
            bullets: [
              'Horarios',
              'Próximos turnos',
              'Turnos abiertos, donde esté habilitado',
              'Cambios de turno y solicitudes de turno, donde esté habilitado',
            ],
          },
          {
            eyebrow: 'Hojas de horas',
            title: 'Las horas trabajadas se convierten en una hoja de horas automáticamente.',
            body: 'Los eventos de fichaje se acumulan en hojas de horas que los gerentes pueden revisar.',
            bullets: [
              'Horas trabajadas',
              'Hojas de horas de empleados',
              'Correcciones',
              'Revisión y aprobación por parte del gerente, donde esté habilitado',
            ],
          },
          {
            eyebrow: 'Tareas y listas de verificación',
            title: 'Tareas diarias y listas de verificación, hechas desde el piso de trabajo.',
            body: 'Las rutinas de apertura y cierre se convierten en listas de verificación rastreables en lugar de depender de la memoria.',
            bullets: [
              'Tareas diarias',
              'Tareas de apertura',
              'Tareas de cierre',
              'Listas de verificación operativas',
              'Comentarios y evidencia, donde esté habilitado',
            ],
          },
          {
            eyebrow: 'Operaciones de equipo',
            title: 'Mantén al equipo alineado entre turnos.',
            body: 'Contexto compartido para el equipo sin una herramienta de mensajería separada.',
            bullets: [
              'Anuncios',
              'Notas de turno',
              'Traspasos',
              'Solicitudes',
              'Comunicación de equipo',
            ],
          },
          {
            eyebrow: 'Control de gerencia',
            title: 'Un solo lugar para que los gerentes vean cómo va un turno.',
            body: 'Supervisión para las personas que dirigen la operación del día a día.',
            bullets: [
              'Revisión de hojas de horas',
              'Gestión de horarios',
              'Tareas',
              'Anomalías',
              'Eventos de fichaje conscientes de la ubicación',
              'Supervisión del equipo',
            ],
          },
        ],
      },
      industries: {
        title: 'Creado para equipos de primera línea y por turnos',
        subtitle: 'ZANVROX Workforce no está creado solo para restaurantes.',
        items: [
          'Restaurantes',
          'Cafeterías',
          'Retail',
          'Hostelería',
          'Servicios',
          'Almacenes',
          'Negocios multiubicación',
        ],
      },
      cta: {
        title: 'Empieza con Workforce',
        subtitle: 'Añade el ERP cuando lo necesites.',
        primary: { label: 'Empezar con Workforce', path: '/workforce/pricing' },
        secondary: { label: 'Workforce para restaurantes', path: '/workforce/restaurants' },
      },
    },
    workforceRestaurants: {
      heroKicker: 'ZANVROX WORKFORCE PARA RESTAURANTES',
      heroTitle: 'Creado para la realidad de los turnos de restaurante.',
      heroSubtitle:
        'Fichajes, horarios, hojas de horas y tareas diarias sin hojas de cálculo, hojas de horas en papel ni herramientas desconectadas.',
      heroPrimaryCta: { label: 'Solicitar la beta gratuita', path: '/workforce/beta' },
      heroSecondaryCta: { label: 'Ver precios de Workforce', path: '/workforce/pricing' },
      heroPreview: {
        title: 'Vista previa de turno',
        type: 'workforce',
        caption: 'Creado para equipos de restaurante',
        callouts: [
          { status: 'ready', text: 'Fichaje de entrada / salida' },
          { status: 'ready', text: 'Tareas diarias y listas de verificación' },
        ],
      },
      timeline: {
        eyebrow: 'Un turno de restaurante, de principio a fin',
        title: 'Antes, durante y después de cada turno',
        subtitle: 'La misma app sigue el turno desde el horario hasta la hoja de horas.',
        stages: [
          {
            name: 'Antes del turno',
            items: ['Horario', 'Turnos abiertos', 'Visibilidad para empleados'],
          },
          {
            name: 'Durante el turno',
            items: [
              'Fichaje consciente de la ubicación',
              'Descansos',
              'Tareas',
              'Listas de verificación',
              'Notas de turno',
            ],
          },
          {
            name: 'Después del turno',
            items: [
              'Fichaje de salida',
              'Horas trabajadas',
              'Hoja de horas',
              'Revisión del gerente',
            ],
          },
          {
            name: 'Gerente',
            items: [
              'Quién está trabajando',
              'Horas trabajadas',
              'Tareas pendientes',
              'Correcciones',
              'Aprobación de hoja de horas',
            ],
          },
        ],
      },
      crossSell: {
        title: '¿Necesitas más que gestión de personal?',
        body: 'Conecta Workforce con el ERP completo de ZANVROX para finanzas, inventario, compras y operaciones de negocio.',
        cta: { label: 'Explorar ZANVROX ERP', path: '/erp' },
      },
      cta: {
        title: 'Lleva Workforce a tu restaurante',
        subtitle:
          'Solicita la Beta gratuita de Restaurantes de Ontario, o empieza con Workforce hoy.',
        primary: { label: 'Solicitar la beta gratuita', path: '/workforce/beta' },
        secondary: { label: 'Ver precios de Workforce', path: '/workforce/pricing' },
      },
    },
    workforceBeta: {
      heroKicker: 'BETA DE RESTAURANTES DE ONTARIO',
      heroTitle:
        'Prueba ZANVROX Workforce con tu equipo real antes de nuestro lanzamiento público.',
      heroSubtitle:
        'Estamos invitando a un grupo limitado de restaurantes de Ontario a probar ZANVROX Workforce durante turnos reales.',
      badges: [
        'Beta de 14 días',
        'Sin compromiso de compra',
        '6 meses gratis después del lanzamiento',
      ],
      intro: {
        title: 'Cómo funciona la beta',
        paragraphs: [
          'Estamos invitando a un grupo limitado de restaurantes de Ontario a probar ZANVROX Workforce durante turnos reales.',
          'Usa la app con un gerente y empleados, cuéntanos qué funciona y qué necesita mejorar, y ayúdanos a prepararnos para el lanzamiento público.',
          'Los restaurantes que completen la beta reciben seis meses de ZANVROX Workforce gratis después del lanzamiento.',
        ],
      },
      terms: {
        title: 'Términos de la beta',
        subtitle:
          'Términos comerciales de la Beta de Restaurantes de Ontario, expresados con claridad.',
        items: [
          'Periodo de beta de 14 días',
          'Sin coste durante la beta',
          'Sin compromiso de compra',
          'Los restaurantes que completen la beta reciben 6 meses de ZANVROX Workforce gratis después del lanzamiento público',
          'Después de los 6 meses gratis, eliges un plan de Workforce',
          'Sin renovación automática ni cargo desde la beta sin tu consentimiento',
        ],
      },
      form: {
        title: 'Solicita la beta',
        helper:
          'Cuéntanos sobre tu restaurante. Revisaremos tu solicitud y te contactaremos por correo.',
        fields: {
          restaurantName: 'Nombre del restaurante',
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
        placeholders: {
          restaurantName: 'p. ej. Maple Street Kitchen',
          contactName: 'Tu nombre completo',
          email: 'tu@turestaurante.com',
          city: 'p. ej. Toronto',
          employeeCount: 'p. ej. 12',
          locationCount: 'p. ej. 1',
          currentMethod: 'p. ej. Hojas de horas en papel, hoja de cálculo, integrado en el POS',
          participantCount: 'p. ej. 5',
          message: '¿Algo más que debamos saber?',
        },
        errors: {
          restaurantName: 'Introduce el nombre de tu restaurante (2-120 caracteres).',
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
          'Gracias. Revisaremos tu solicitud y te contactaremos con las instrucciones de prueba privada si tu restaurante es seleccionado.',
        submitError: 'No pudimos enviar tu solicitud. Inténtalo de nuevo.',
      },
    },
    resources: {
      heroTitle:
        'Recursos para evaluación de producto, revisión de seguridad y planificación de despliegue.',
      heroSubtitle:
        'Usa estos materiales públicos para revisar encaje de producto, postura de seguridad y opciones de evaluación antes de solicitar una conversación más profunda.',
      sections: [
        {
          title: 'Resumen del producto y recursos de evaluación',
          description:
            'Revisa el resumen del producto, cobertura de flujos y modelo de incorporación antes de invertir tiempo en una evaluación más profunda.',
          cta: 'Revisar producto',
          path: '/erp',
        },
        {
          title: 'Resumen de seguridad',
          description:
            'Revisa aislamiento entre organizaciones, controles de acceso, subprocesadores y limitaciones actuales de seguridad en un solo resumen público.',
          cta: 'Revisar seguridad',
          path: '/security',
        },
        {
          title: 'Espacio de evaluación y revisión guiada del producto',
          description:
            'Empieza con el espacio de evaluación compartido para una revisión inicial y contacta al equipo si necesitas una conversación de producto más estructurada.',
          cta: 'Abrir espacio de evaluación',
          path: '/resources#demo-environment',
        },
        {
          title: 'Contacto y documentación adicional',
          description:
            'Usa la ruta de contacto para consultas de seguridad o cumplimiento, solicitudes de revisión guiada o mayor detalle de evaluación.',
          cta: 'Contactar al equipo',
          path: '/contact',
        },
      ],
      demoEnvironment: {
        title: 'Espacio de evaluación',
        subtitle:
          'Un espacio basado en navegador para revisión inicial del producto con datos ficticios de muestra.',
        accessTitle: 'Acceso compartido de evaluación',
        accessIntro:
          'El acceso compartido está disponible para revisión temprana del producto. Los equipos que necesiten una evaluación más profunda o más estructurada pueden contactar a ZANVROX.',
        emailLabel: 'Usuario del espacio',
        emailValue: 'Use your work email',
        passwordLabel: 'Código de acceso',
        passwordValue: 'Set during signup',
        note: 'No requiere instalación. Este espacio es solo para evaluación, usa datos ficticios y no está pensado para datos reales de empresa, empleados, clientes, nómina o finanzas.',
        guidance: [
          'Usa el espacio para una revisión inicial de navegación, cobertura de flujos y encaje general del producto.',
          'Trata el entorno como una superficie compartida de evaluación y no como un espacio de producción, piloto o migración de datos.',
          'Para una revisión más profunda, preguntas de seguridad y cumplimiento o documentación adicional, usa la ruta de contacto después de la evaluación inicial.',
        ],
        cta: { label: 'Abrir espacio de evaluación', path: '/resources#demo-environment' },
      },
      sitemap: {
        title: 'Materiales de evaluación',
        subtitle:
          'El sitio público es intencionalmente compacto y está centrado en los materiales más útiles durante la evaluación inicial.',
        items: [
          'Resumen del producto y cobertura de flujos',
          'Precios públicos y modelo de incorporación',
          'Resumen de seguridad y postura actual de control',
          'Espacio de evaluación con datos ficticios',
          'Ruta de contacto para revisión guiada y preguntas de seguimiento',
          'Información legal sobre términos y privacidad',
        ],
      },
      design: {
        title: 'Cómo usar estos recursos',
        subtitle:
          'Una ruta simple de evaluación para equipos que quieren revisar primero el encaje del producto e involucrar al equipo solo cuando se necesita más detalle.',
        directionTitle: 'Revisión inicial del producto',
        componentsTitle: 'Revisión de seguridad y cumplimiento',
        statesTitle: 'Cuándo contactar al equipo',
        direction: [
          'Empieza por Producto, Precios y Recursos para entender alcance, postura de incorporación y encaje comercial.',
          'Usa el espacio de evaluación para una revisión práctica temprana solo con datos ficticios.',
          'Trata los materiales públicos como una capa inicial de calificación antes de solicitar una conversación más profunda.',
        ],
        components: [
          'Usa el Resumen de seguridad para revisar aislamiento entre organizaciones, control de acceso, subprocesadores y limitaciones actuales.',
          'Usa la ruta de contacto para consultas de seguridad y cumplimiento o para solicitar documentación adicional.',
          'Mantén las preguntas de evaluación vinculadas al alcance y a las afirmaciones publicadas actualmente.',
        ],
        states: [
          'Solicita una revisión guiada del producto cuando tu equipo tenga preguntas concretas sobre flujos o despliegue.',
          'Contacta al equipo si necesitas más detalle que el ofrecido por los materiales públicos de evaluación.',
          'Usa la ruta de contacto existente para solicitar un resumen de seguridad y seguimiento de seguridad y cumplimiento.',
        ],
      },
    },
    security: {
      heroTitle: 'Seguridad y arquitectura por diseño.',
      heroSubtitle:
        'Límites entre organizaciones, acceso de mínimo privilegio y comportamiento transaccional auditable.',
      overview: {
        title: 'Resumen de seguridad',
        subtitle:
          'Un resumen conservador de los controles visibles actualmente en el producto y en el flujo de entrega.',
        description:
          'ZANVROX está construido alrededor del aislamiento entre organizaciones, acceso por roles y tratamiento reforzado desde servidor para operaciones sensibles. Las declaraciones públicas de seguridad se limitan a controles que hoy están implementados y evitan de forma intencionada afirmaciones de certificación o cobertura que todavía no existen.',
        bullets: [
          'La postura de seguridad se centra en acceso de mínimo privilegio, alcance por organización y comportamiento operativo auditable.',
          'Las áreas sensibles pueden requerir autenticación más fuerte antes de conceder acceso.',
          'La infraestructura y la entrega dependen de proveedores gestionados de plataforma en lugar de operaciones de servidor autogestionadas.',
        ],
      },
      matrix: {
        title: 'Matriz de controles',
        subtitle: 'Cada declaración de control está vinculada a un mecanismo de implementación.',
      },
      controls: [
        {
          control: 'Aislamiento entre organizaciones',
          support: 'Políticas PostgreSQL RLS delimitadas por org_id en tablas operativas.',
        },
        {
          control: 'Control de acceso',
          support:
            'Pertenencia a la organización y rutas de escritura limitadas por rol para operaciones críticas.',
        },
        {
          control: 'Trazabilidad de cambios',
          support:
            'Identificadores a nivel de transacción, marcas de tiempo y registros de confirmación de presentación.',
        },
        {
          control: 'Aplicación desde servidor',
          support:
            'Acciones contables y fiscales críticas ejecutadas a través de controles SQL/Edge.',
        },
      ],
      sections: [
        {
          title: 'Control de acceso y autenticación',
          items: [
            'El control de acceso basado en roles se aplica mediante pertenencia a la organización, permisos por módulo y rutas de escritura limitadas por rol.',
            'La MFA está disponible mediante factores TOTP con aplicación autenticadora.',
            'Las áreas sensibles del ERP pueden requerir autenticación reforzada en AAL2 antes de conceder acceso.',
          ],
        },
        {
          title: 'Aislamiento de datos',
          items: [
            'El aislamiento a nivel de organización se delimita por identificadores de organización y políticas de seguridad de base de datos.',
            'Las lecturas y escrituras operativas están vinculadas al contexto activo de la organización.',
            'La separación de datos es lógica dentro del entorno compartido de la aplicación y no se basa en pilas de aplicación por cliente.',
          ],
        },
        {
          title: 'Alojamiento e infraestructura',
          items: [
            'Los servicios backend se gestionan a través de Supabase.',
            'El frontend público se entrega a través de Vercel.',
            'El cifrado en tránsito usa HTTPS/TLS.',
            'La infraestructura subyacente en la nube es gestionada por el proveedor en lugar de ser operada directamente por ZANVROX.',
          ],
        },
        {
          title: 'Seguridad operativa',
          items: [
            'Las puertas de publicación incluyen linting, pruebas unitarias, pruebas web, builds y scripts de validación antes de tomar decisiones de despliegue.',
            'La cobertura Playwright E2E y las comprobaciones smoke alojadas se usan para validar flujos críticos.',
            'La supervisión de dependencias incluye npm audit en CI para revisar paquetes de alta severidad.',
            'Los registros de aplicación se sanean para reducir la exposición accidental de correos, tokens y otros campos sensibles.',
          ],
        },
      ],
      subprocessors: {
        title: 'Subprocesadores',
        subtitle:
          'Resumen público actual de los proveedores externos usados para operar el servicio.',
        items: [
          {
            name: 'Supabase',
            support:
              'Plataforma backend gestionada para base de datos, autenticación, almacenamiento y flujos del lado del servidor.',
          },
          {
            name: 'Vercel',
            support: 'Alojamiento y entrega frontend gestionados para la experiencia web pública.',
          },
          {
            name: 'Resend',
            support:
              'Entrega transaccional de correo para comunicación limitada y enrutamiento de oportunidades del sitio web.',
          },
        ],
        note: 'Estos proveedores se usan solo cuando son necesarios para la operación del servicio, la entrega o la comunicación transaccional.',
      },
      disclosures: {
        title: 'Transparencia y limitaciones actuales',
        subtitle: 'Declaraciones conservadoras que reflejan los controles disponibles actualmente.',
        items: [
          'Sin afirmaciones de presentación automática: solo soporte de flujo preparado para portal.',
          'Sin feature flags ocultos para capacidades públicas.',
          'Comportamiento de producción respaldado por registros auditables y snapshots.',
          'La MFA depende actualmente de TOTP con aplicación autenticadora y no es resistente al phishing.',
          'La autenticación reforzada se aplica en rutas sensibles en lugar de imponerse como requisito global para cada sesión.',
          'WebAuthn y la autenticación basada en passkeys aún no están disponibles.',
        ],
      },
      cta: {
        title: 'Contacto de seguridad',
        subtitle:
          'Usa la ruta de contacto existente para solicitudes de resumen de seguridad o seguimiento de seguridad y cumplimiento.',
        primary: { label: 'Solicitar resumen de seguridad', path: '/contact' },
        secondary: {
          label: 'Contactar por consultas de seguridad y cumplimiento',
          path: '/contact',
        },
      },
    },
    about: {
      heroKicker: 'Acerca de ZANVROX',
      heroTitle:
        'Un ERP práctico posicionado para un despliegue creíble, no para teatralidad empresarial.',
      heroSubtitle:
        'ZANVROX se presenta como un ERP moderno para equipos pyme canadienses que quieren un control operativo más estricto, menos sistemas desconectados y una ruta de soporte más clara.',
      heroPrimaryCta: { label: 'Explorar producto', path: '/erp' },
      heroSecondaryCta: { label: 'Contactar al equipo', path: '/contact' },
      heroPreview: {
        title: 'Resumen de posicionamiento',
        type: 'reports',
        caption: 'Control operativo frente a la dispersión del software',
        callouts: [
          { status: 'ready', text: 'Postura de soporte clara' },
          { status: 'ready', text: 'Ruta de evaluación orientada al producto' },
        ],
      },
      principles: {
        title: 'Tres principios detrás del sitio',
        subtitle:
          'El posicionamiento público está optimizado para una realidad operativa liderada por fundadores sin rebajar los estándares del producto.',
        items: [
          {
            title: 'Claridad',
            body: 'Expresar qué hace el producto, qué soporta y dónde todavía se requiere revisión.',
          },
          {
            title: 'Control',
            body: 'Centrarse en auditabilidad, gobernanza y visibilidad operativa en lugar de exageración SaaS inflada.',
          },
          {
            title: 'Despliegue práctico',
            body: 'Hacer viable la configuración autónoma manteniendo ayuda experta opcional cuando la complejidad aumenta.',
          },
        ],
      },
      operatingModel: [
        {
          title: 'Construido para equipos pyme canadienses',
          subtitle:
            'El sitio público se dirige a empresas que necesitan un control ERP creíble sin la carga de consultoría empresarial desde el primer día.',
          items: [
            'Mejor encaje alrededor de 10-50 empleados',
            'Alto valor cuando finanzas y operaciones están repartidas entre demasiadas herramientas',
            'Ruta clara desde el núcleo financiero hasta operaciones y el complemento de nómina',
          ],
        },
        {
          title: 'Disciplina comercial',
          subtitle:
            'El sitio está diseñado para reducir reuniones de baja calidad y hacer explícitas las expectativas antes de la primera conversación.',
          items: [
            'Demo opcional en lugar de un embudo centrado en la demo',
            'Precios públicos con niveles de soporte y expectativas de incorporación',
            'Afirmaciones de seguridad y gobernanza alineadas con la postura real del producto',
          ],
        },
      ],
      cta: {
        title: 'Comprueba si el modelo operativo encaja con tu equipo',
        subtitle: 'Usa Producto, Precios y Recursos para calificar el encaje antes de escribirnos.',
        primary: { label: 'Ver precios', path: '/pricing' },
        secondary: { label: 'Ir a contacto', path: '/contact' },
      },
    },
    contact: {
      heroTitle:
        'Contacta al equipo solo cuando necesites ayuda con una pregunta real de evaluación.',
      heroSubtitle:
        'La ruta prevista es resumen del producto, exploración del producto, revisión de precios, evaluación en navegador y después contacto opcional o solicitud de recorrido guiado.',
      conversion: {
        title: 'Flujo de evaluación recomendado',
        subtitle:
          'Esto reduce reuniones innecesarias y da mejor contexto cuando alguien finalmente se pone en contacto.',
        cards: [
          {
            title: 'Ver resumen del producto',
            body: 'Empieza con el video para entender el modelo operativo y la postura del producto.',
          },
          {
            title: 'Explorar funciones',
            body: 'Usa Producto, Precios y Seguridad para evaluar la plataforma sin una llamada.',
          },
          {
            title: 'Abrir el espacio de evaluación',
            body: 'Valida la interfaz con datos ficticios antes de solicitar una sesión guiada.',
          },
          {
            title: 'Solicitar ayuda si hace falta',
            body: 'Usa los formularios inferiores para una demo opcional o una pregunta concreta sobre el producto.',
          },
        ],
      },
      supportBlock: {
        title: 'Expectativas de soporte',
        subtitle: 'Todos los flujos de contacto del sitio web llegan a support@zanvrox.com.',
        items: [
          'Finanzas: soporte por correo con tiempo de respuesta de 48 h',
          'Negocio y Operaciones: soporte prioritario por correo con tiempo de respuesta de 24 h',
          'Empresarial: canal directo de soporte más ayuda de incorporación',
        ],
      },
      pricingContext: {
        title: 'Contexto de precios seleccionado',
        subtitle:
          'El contexto de precios permanece unido a tu solicitud para que el seguimiento siga basado en la configuración que seleccionaste.',
        labels: {
          plan: 'Plan',
          billing: 'Facturación',
          payroll: 'Nómina',
          offer: 'Oferta',
          notSelected: 'No seleccionado',
          payrollInterested: 'Complemento de nómina seleccionado',
          payrollNotSelected: 'Sin complemento de nómina seleccionado',
        },
      },
      demoForm: {
        title: 'Solicitar recorrido guiado',
        helper:
          'Usa esto después de que tu equipo haya revisado el producto y quiera un recorrido guiado.',
        confirmation:
          'Tu solicitud de recorrido guiado se envió correctamente. Haremos seguimiento por correo.',
        submittingCta: 'Enviando...',
        submitError: 'No pudimos enviar tu solicitud. Inténtalo de nuevo.',
        messageHint:
          'Opcional. Usa esto para describir tu stack actual, calendario de despliegue o pregunta sobre nómina.',
        fields: {
          name: 'Nombre*',
          company: 'Empresa*',
          email: 'Correo de trabajo*',
          companySize: 'Tamaño de la empresa*',
          interestArea: 'Área de interés*',
          message: 'Mensaje opcional',
          consent:
            'Acepto que ZANVROX me contacte sobre esta solicitud comercial. Solo usamos estos datos para responder a la consulta.',
        },
        placeholders: {
          email: 'nombre@empresa.com',
          companySize: 'Selecciona el tamaño de la empresa',
          interestArea: 'Selecciona el área de interés',
          message: '¿Qué quieres validar en una sesión guiada?',
        },
        options: {
          companySizes: ['1-10 empleados', '10-50 empleados', '50-100 empleados', '100+ empleados'],
          interestAreas: [
            'Finanzas',
            'Negocio',
            'Operaciones',
            'Workforce',
            'Complemento de nómina',
            'Implementación guiada',
            'Despliegue empresarial',
            'Integraciones / API',
          ],
        },
        errors: {
          name: 'Introduce tu nombre.',
          company: 'Introduce el nombre de tu empresa.',
          email: 'Introduce un correo de trabajo válido.',
          companySize: 'Selecciona el tamaño de la empresa.',
          interestArea: 'Selecciona un área de interés.',
          message: 'Mantén el mensaje por debajo de 2000 caracteres.',
          consent: 'El consentimiento es obligatorio para enviar este formulario.',
          startedAt: 'Espera un momento antes de enviar.',
          website: 'Se activó la protección antispam.',
        },
        cta: 'Solicitar recorrido guiado',
      },
      briefForm: {
        title: 'Hacer una pregunta sobre el producto',
        helper:
          'Usa esto para preguntas sobre encaje del producto, soporte, incorporación, implementación o alcance de nómina.',
        confirmation: 'Tu mensaje se envió correctamente. Responderemos por correo.',
        submittingCta: 'Enviando...',
        submitError: 'No pudimos enviar tu solicitud. Inténtalo de nuevo.',
        messageHint:
          'Opcional. Usa esto si quieres describir tu flujo, necesidad de soporte o pregunta de implementación.',
        fields: {
          name: 'Nombre*',
          company: 'Empresa*',
          email: 'Correo de trabajo*',
          companySize: 'Tamaño de la empresa*',
          interestArea: 'Área de interés*',
          message: 'Mensaje opcional',
          consent: 'Acepto recibir el seguimiento solicitado por parte de ZANVROX.',
        },
        placeholders: {
          email: 'nombre@empresa.com',
          companySize: 'Selecciona el tamaño de la empresa',
          interestArea: 'Selecciona el área de interés',
          message:
            '¿Qué te gustaría aclarar antes de que tu equipo dedique más tiempo a la evaluación?',
        },
        options: {
          companySizes: ['1-10 empleados', '10-50 empleados', '50-100 empleados', '100+ empleados'],
          interestAreas: [
            'Encaje del producto',
            'Precios y soporte',
            'Acceso al entorno de pruebas',
            'Importación de datos',
            'Complemento de nómina',
            'Implementación guiada',
          ],
        },
        errors: {
          name: 'Introduce tu nombre.',
          company: 'Introduce el nombre de tu empresa.',
          email: 'Introduce un correo de trabajo válido.',
          companySize: 'Selecciona el tamaño de la empresa.',
          interestArea: 'Selecciona un área de interés.',
          message: 'Mantén el mensaje por debajo de 2000 caracteres.',
          consent: 'El consentimiento es obligatorio para enviar este formulario.',
          startedAt: 'Espera un momento antes de enviar.',
          website: 'Se activó la protección antispam.',
        },
        cta: 'Enviar pregunta',
      },
    },
    legal: {
      privacy: {
        title: 'Política de privacidad',
        updated: '7 de agosto de 2026',
        updatedLabel: 'Última actualización',
        paragraphs: [
          'ZANVROX recopila información de contacto empresarial enviada a través de este sitio web para la evaluación del producto, la programación de demostraciones, las solicitudes de beta y las solicitudes de documentación.',
          'Procesamos los datos enviados únicamente con fines de ventas y calificación de producto.',
          'ZANVROX Workforce utiliza la ubicación del dispositivo únicamente en el momento en que un empleado ficha la entrada o la salida, y solo cuando un empleador ha habilitado la verificación consciente de la ubicación para un lugar de trabajo. La ubicación está vinculada a ese evento de fichaje específico, no se recopila de forma continua ni se utiliza para rastrear a un empleado fuera de los momentos autorizados de fichaje de entrada y salida.',
          'Los datos de ubicación y de eventos de fichaje de Workforce se utilizan para verificar que un fichaje de entrada o salida ocurrió en un lugar de trabajo autorizado, y para respaldar la hoja de horas resultante. Son visibles para el empleado y para los gerentes autorizados de ese empleador.',
          'Los empleados pueden negarse a conceder el permiso de ubicación; según la configuración del empleador, esto puede significar que un evento de fichaje no pueda verificarse como consciente de la ubicación, y el empleador debe proporcionar un proceso alternativo.',
          'Los registros de Workforce y otros registros operativos se conservan durante el tiempo necesario para respaldar los requisitos de nómina, hojas de horas y mantenimiento de registros laborales, y están protegidos con los mismos controles de acceso y seguridad descritos en nuestra página de Seguridad.',
          'Puedes solicitar acceso, corrección o eliminación de los datos enviados escribiendo a support@zanvrox.com.',
        ],
      },
      terms: {
        title: 'Términos del servicio',
        updated: '5 de marzo de 2026',
        updatedLabel: 'Última actualización',
        paragraphs: [
          'Este sitio web proporciona información del producto, recursos de evaluación del producto, formularios de contacto y formularios de solicitud del programa beta para ZANVROX ERP y ZANVROX Workforce.',
          'El contenido del sitio web es informativo y no constituye un compromiso vinculante de producto.',
          'El alcance del producto y las condiciones comerciales se cierran en acuerdos firmados.',
        ],
      },
      accountDeletion: {
        title: 'Solicitar la eliminación de la cuenta',
        updated: '7 de agosto de 2026',
        updatedLabel: 'Última actualización',
        intro: 'Elimina tu cuenta de acceso de Empleado, Gerente o ERP de ZANVROX.',
        selfServiceTitle: 'Eliminación autogestionada',
        selfServiceBody:
          'El método más rápido y seguro es iniciar sesión, abrir Configuración y seleccionar Eliminación de cuenta. La aplicación verificará tu identidad y te permitirá seguir o cancelar una solicitud pendiente.',
        steps: [
          'Inicia sesión en tu cuenta de ZANVROX.',
          'Abre Configuración.',
          'Selecciona Eliminación de cuenta.',
          'Confirma tu identidad y envía la solicitud.',
        ],
        emailFallbackTitle: 'Si no puedes iniciar sesión',
        emailFallbackBody:
          'Envía un correo a support@zanvrox.com desde la dirección registrada en tu cuenta y usa "Solicitud de eliminación de cuenta" como asunto. Podemos solicitar verificación de identidad adicional.',
        retentionTitle: 'Qué conservamos',
        retentionBody:
          'Eliminamos o anonimizamos la identidad de acceso, el perfil personal, las suscripciones del dispositivo y la información que no es necesario conservar. Los registros de nómina, impuestos, empleo, financieros, trazabilidad de inventario, seguridad y auditoría pueden conservarse durante los períodos legalmente exigidos con acceso restringido.',
        appLinkLabel: 'Abrir la página de eliminación de cuenta',
        appLinkPath: 'https://app.zanvrox.com/account-deletion',
      },
    },
    notFound: {
      title: 'Página no encontrada',
      subtitle: 'La URL no coincide con la estructura publicada del sitio ZANVROX.',
      cta: 'Ir al inicio',
    },
  },
  footer: {
    companyDescription:
      'ERP integrado para equipos pyme canadienses que necesitan finanzas, operaciones, cumplimiento y nómina en una sola plataforma controlada.',
    headquarters: 'Toronto, Ontario, Canadá',
    email: 'support@zanvrox.com',
    sections: [
      {
        title: 'Productos',
        links: [
          { label: 'ERP', path: '/erp' },
          { label: 'Workforce', path: '/workforce' },
          { label: 'Workforce para restaurantes', path: '/workforce/restaurants' },
          { label: 'Precios', path: '/pricing' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { label: 'Recursos', path: '/resources' },
          { label: 'Seguridad', path: '/security' },
          { label: 'Privacidad', path: '/legal/privacy' },
          { label: 'Términos', path: '/legal/terms' },
          { label: 'Eliminación de cuenta', path: '/account-deletion' },
          { label: 'Contacto', path: '/contact' },
        ],
      },
    ],
    links: [
      { label: 'ERP', path: '/erp' },
      { label: 'Workforce', path: '/workforce' },
      { label: 'Precios', path: '/pricing' },
      { label: 'Recursos', path: '/resources' },
      { label: 'Seguridad', path: '/security' },
      { label: 'Acerca de', path: '/about' },
      { label: 'Contacto', path: '/contact' },
      { label: 'Privacidad', path: '/legal/privacy' },
      { label: 'Términos', path: '/legal/terms' },
      { label: 'Eliminación de cuenta', path: '/account-deletion' },
    ],
    workforce: {
      sections: [
        {
          title: 'Workforce',
          links: [
            { label: 'Workforce', path: '/workforce' },
            { label: 'Precios', path: '/workforce/pricing' },
            { label: 'Restaurantes', path: '/workforce/restaurants' },
            { label: 'Beta', path: '/workforce/beta' },
            { label: 'Seguridad', path: '/security' },
          ],
        },
        {
          title: 'Soporte',
          links: [
            { label: 'Soporte', path: '/contact' },
            { label: 'Privacidad', path: '/legal/privacy' },
            { label: 'Términos', path: '/legal/terms' },
            { label: 'Eliminación de cuenta', path: '/account-deletion' },
          ],
        },
      ],
      erpLink: { label: 'ZANVROX ERP', path: '/erp' },
    },
  },
  seo: {
    home: {
      title: 'ZANVROX | ERP canadiense para finanzas, operaciones y control',
      description:
        'ERP integrado para equipos pyme canadienses con contabilidad, facturación, inventario, almacén, producción, gobernanza, flujos fiscales y soporte para complemento de nómina.',
      path: '/',
    },
    product: {
      title: 'ZANVROX ERP | Plataforma de finanzas, operaciones y personal',
      description:
        'Explora finanzas, facturación, gastos, compras, inventario, operaciones, informes, flujos de nómina y ZANVROX Workforce dentro de la plataforma ZANVROX ERP.',
      path: '/erp',
    },
    workforce: {
      title: 'ZANVROX Workforce | Control horario, horarios y tareas',
      description:
        'Ficha la entrada y la salida, gestiona horarios, controla hojas de horas y organiza tareas diarias con ZANVROX Workforce.',
      path: '/workforce',
    },
    workforceRestaurants: {
      title: 'Gestión de personal para restaurantes | ZANVROX Workforce',
      description:
        'Fichajes, horarios, hojas de horas y tareas diarias de equipo para equipos de restaurante.',
      path: '/workforce/restaurants',
    },
    workforceBeta: {
      title: 'Beta de Restaurantes de Ontario | ZANVROX Workforce',
      description:
        'Los restaurantes de Ontario pueden solicitar probar ZANVROX Workforce antes del lanzamiento público.',
      path: '/workforce/beta',
    },
    security: {
      title: 'Seguridad | ZANVROX',
      description:
        'Revisa aislamiento entre organizaciones, controles por rol, aprobaciones, gobernanza y salvaguardas de arquitectura detrás de ZANVROX.',
      path: '/security',
    },
    pricing: {
      title: 'Precios | ZANVROX ERP y ZANVROX Workforce',
      description:
        'ZANVROX ERP y ZANVROX Workforce tienen precios independientes. Consulta los precios de ERP (Finance, Business, Operations, Enterprise) o de Workforce (Starter, Team, Business, Multi-location) en CAD.',
      path: '/pricing',
    },
    workforcePricing: {
      title: 'Precios de ZANVROX Workforce | Starter, Team, Business',
      description:
        'Precios en CAD por local para ZANVROX Workforce: Starter, Team, Business y planes Multi-location a medida. No requiere comprar el ERP.',
      path: '/workforce/pricing',
    },
    erpPricing: {
      title: 'Precios de ZANVROX ERP | Finance, Business, Operations, Enterprise',
      description:
        'Precios en CAD de ZANVROX ERP: Finance, Business, Operations y Enterprise, además del complemento de nómina y la Implementación guiada opcional.',
      path: '/erp/pricing',
    },
    resources: {
      title: 'Recursos | ZANVROX',
      description:
        'Usa recursos del producto, guía del espacio de evaluación y material del resumen de seguridad para autoevaluar ZANVROX.',
      path: '/resources',
    },
    about: {
      title: 'Acerca de | ZANVROX',
      description:
        'Descubre cómo ZANVROX posiciona finanzas, operaciones, gobernanza y disciplina de despliegue para equipos pyme canadienses.',
      path: '/about',
    },
    contact: {
      title: 'Contacto | ZANVROX',
      description:
        'Solicita una demo opcional o plantea una pregunta concreta sobre producto, nómina, incorporación o implementación.',
      path: '/contact',
    },
    privacy: {
      title: 'Política de privacidad | ZANVROX',
      description:
        'Política de privacidad del sitio web de ZANVROX y del tratamiento relacionado con oportunidades.',
      path: '/legal/privacy',
    },
    terms: {
      title: 'Términos del servicio | ZANVROX',
      description:
        'Términos del servicio que regulan el uso del sitio web y los materiales de ZANVROX.',
      path: '/legal/terms',
    },
    accountDeletion: {
      title: 'Eliminación de cuenta | ZANVROX',
      description: 'Cómo solicitar la eliminación de una cuenta de ZANVROX y sus datos asociados.',
      path: '/account-deletion',
    },
  },
};

export default siteContentEs;
