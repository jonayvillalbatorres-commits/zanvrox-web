import siteContentEn from './siteContent.en';

const base = siteContentEn;

const siteContentTl = {
  ...base,
  locale: 'tl',
  localeLabel: 'Filipino',
  labels: {
    ...base.labels,
    menu: 'Talaan',
    bookDemo: 'May gabay na pagpapakita',
    tryDemo: 'Buksan ang kapaligiran',
    getTechnicalBrief: 'Makipag-ugnayan sa pangkat',
    reviewResources: 'Tingnan ang mga sanggunian',
    language: 'Wika',
    requestQuote: 'Makipag-usap sa benta',
    login: 'Mag-log in',
    requestBeta: 'Humiling ng beta',
    support: 'Suporta',
  },
  navItems: [
    { label: 'Simula', path: '/' },
    { label: 'ERP', path: '/erp' },
    { label: 'Workforce', path: '/workforce' },
    { label: 'Presyo', path: '/pricing' },
    { label: 'Sanggunian', path: '/resources' },
    { label: 'Seguridad', path: '/security' },
    { label: 'Tungkol', path: '/about' },
    { label: 'Ugnayan', path: '/contact' },
  ],
  workforceNav: {
    items: [
      { label: 'Workforce', path: '/workforce' },
      { label: 'Mga Tampok', path: '/workforce#features' },
      { label: 'Mga Restawran', path: '/workforce/restaurants' },
      { label: 'Presyo', path: '/workforce/pricing' },
      { label: 'Beta', path: '/workforce/beta' },
      { label: 'Seguridad', path: '/security' },
    ],
    erpLink: { label: 'ZANVROX ERP', path: '/erp' },
  },
  brand: {
    ...base.brand,
    tagline: 'Pinagsamang kontrol sa ERP para sa maliliit at katamtamang negosyo sa Canada',
    oneLiner:
      'Pananalapi, operasyon, pagsunod sa mga patakaran sa Canada, at pasahod sa iisang kontroladong ERP.',
  },
  pages: {
    home: {
      ...base.pages.home,
      heroKicker: 'ERP sa Canada para sa pananalapi, operasyon, at kakayahang masuri',
      heroTitle:
        'Patakbuhin ang pananalapi at operasyon sa iisang kontroladong ERP sa halip na limang magkakahiwalay na kasangkapan.',
      heroSubtitle:
        'Tinutulungan ng ZANVROX ang maliliit at katamtamang negosyo sa Canada na pagsamahin ang pagkuwenta, pagsingil, pagbili, imbentaryo, produksyon, pag-apruba, at pagsunod sa patakaran nang walang mabigat na proyekto sa pagpapatupad.',
      heroPrimaryCta: { label: 'Tingnan ang buod ng produkto', path: '/#product-overview' },
      heroSecondaryCta: {
        label: 'Buksan ang kapaligiran ng pagsusuri',
        path: '/resources#demo-environment',
      },
      heroPreview: {
        ...base.pages.home.heroPreview,
        title: 'Paunang tanaw sa buwis at kontrol',
        caption: 'Aktibo sa loob ng ERP',
        callouts: [
          { status: 'ready', text: 'Ulat para sa GST/HST + PST/QST' },
          { status: 'ready', text: 'Bakas ng pagsusuri at pag-apruba' },
        ],
      },
      video: {
        ...base.pages.home.video,
        title: 'Gabay na pagpapakita ng produkto sa totoong daloy ng trabaho',
        subtitle:
          'Maikling pagpapakita ng pananalapi, operasyon, daloy ng buwis sa Canada, at kahandaan sa pasahod.',
        windowLabel: 'Video ng produkto',
        duration: '90 sec',
        overlayLabel: 'Tingnan ang gabay na pagpapakita',
        fallbackLabel: 'May paunang tanaw na larawan',
        chapters: [
          'Pagkuwenta at pagsingil',
          'Imbentaryo at bodega',
          'Pagpaplano ng produksyon',
          'Tanawan ng buwis',
          'Lugar-gawaan ng pasahod',
          'Mga ulat at pag-apruba',
        ],
        primaryCta: { label: 'Suriin ang produkto', path: '/erp' },
        secondaryCta: {
          label: 'Buksan ang kapaligiran ng pagsusuri',
          path: '/resources#demo-environment',
        },
      },
      trustSignals: [
        'Nananatili ang opisyal na daloy mula sa tagapagbigay kung saan kailangan.',
        'May pinamamahalaang pagbabago, pag-apruba, at bakas ng pagsusuri.',
        'May sariling landas ng pagsasaayos para sa mas maliliit na pangkat, na may opsyonal na gabay sa pagpapatupad.',
        'May malinaw na paninindigan sa pagsunod sa Canada nang walang sobra-sobrang pangako sa benta.',
      ],
      statusBadges: [
        { status: 'ready', text: 'Pagkuwenta, pagsingil, gastos, at ulat' },
        { status: 'ready', text: 'Imbentaryo, bodega, at daloy ng BOM' },
        { status: 'ready', text: 'Suporta sa daloy ng buwis sa Canada' },
        {
          status: 'ready',
          text: 'Dagdag na pasahod na may lugar-gawaan para sa pagtatapos ng taon',
        },
        { status: 'locked', text: 'Pamamahala at kontrol na nasusuri' },
        { status: 'ready', text: 'Landas ng sariling paunang pagsasaayos' },
      ],
      productLines: {
        eyebrow: 'Iisang plataporma, dalawang paraan para magsimula',
        title: 'Dalawang paraan para patakbuhin ang iyong negosyo gamit ang ZANVROX',
        subtitle:
          'Magsimula sa Workforce para sa mga shift ng mga tauhan sa harapan, sa ZANVROX ERP para sa pananalapi at operasyon ng negosyo, o pareho.',
        cards: [
          {
            name: 'ZANVROX ERP',
            headline:
              'Pananalapi, imbentaryo, pagbili, at operasyon sa iisang konektadong plataporma.',
            cta: { label: 'Suriin ang ERP', path: '/erp' },
          },
          {
            name: 'ZANVROX Workforce',
            headline:
              'Pagtala ng oras ng pagpasok, iskedyul, gawain, at listahan ng oras para sa mga tauhan sa harapan.',
            cta: { label: 'Suriin ang Workforce', path: '/workforce' },
          },
        ],
        note: 'Magsimula sa Workforce. Idagdag ang ERP kapag kailangan mo na. Pinapatakbo mo na ba ang negosyo mo gamit ang ZANVROX? Kasama na ang Workforce sa Operasyon.',
      },
      evaluationPath: {
        eyebrow: 'Pagsusuring pinangungunahan ng produkto',
        title: 'Magsuri nang hindi muna nagtatakda ng pulong',
        subtitle:
          'Ginawa ang pook na ito para bawasan ang hindi kailangang tawag at hayaan ang mga pangkat na suriin muna ang sarili nilang tugma.',
        cards: [
          {
            title: '1. Panoorin ang buod',
            body: 'Magsimula sa video ng produkto para maunawaan kung paano nagsasama ang pananalapi, operasyon, buwis, at pasahod.',
          },
          {
            title: '2. Suriin ang produkto',
            body: 'Suriin ang mga pangkat ng kakayahan, larawan ng mga screen, at kontrol sa pamamahala ayon sa bahagi at proseso ng negosyo.',
          },
          {
            title: '3. Buksan ang kapaligiran ng pagsusuri',
            body: 'Gamitin ang kapaligirang gumagana sa browser na may kathang-isip na datos para patunayan ang pag-navigate, tugma ng tungkulin, at saklaw ng daloy ng trabaho.',
          },
          {
            title: '4. Humingi lang ng tulong kung kailangan',
            body: 'Gamitin ang opsyonal na form sa ugnayan o pagpapakita kapag may malinaw nang tanong sa pagsusuri ang iyong pangkat.',
          },
        ],
      },
      screenshots: {
        ...base.pages.home.screenshots,
        eyebrow: 'Mga screen at daloy ng trabaho',
        title: 'Mga screen na ginawa para ipakita ang tunay na saklaw ng operasyon',
        subtitle:
          'Handa ang bawat seksyon sa ibaba para sa totoong larawan ng screen at gumagamit ng paunang tanaw ng produkto kapag wala pang huling larawan.',
        items: [
          {
            title: 'Tanawan ng buwis sa Canada',
            body: 'Subaybayan ang kahandaan sa paghahain, mga uri ng buwis, at kontrol sa pagsasara mula sa iisang tanaw ng pananalapi.',
            previewType: 'reports',
            imageKey: 'taxDashboard',
            imageAlt: 'Tanawan ng buwis sa Canada sa loob ng ZANVROX ERP',
          },
          {
            title: 'Pamamahala ng imbentaryo',
            body: 'Tingnan ang posisyon ng paninda, paggalaw sa bodega, at nakikitang datos ayon sa pangkat ng paninda nang hindi umaalis sa ERP.',
            previewType: 'inventory',
          },
          {
            title: 'Pagpaplano ng produksyon',
            body: 'Suriin ang mga kautusan sa produksyon na nakaugnay sa BOM, paggamit ng materyales, at progreso ng pagpapatupad sa iisang tanaw.',
            previewType: 'production',
          },
          {
            title: 'Mga ulat sa pananalapi',
            body: 'Lumipat mula sa gawaing pang-operasyon patungo sa ulat para sa pamamahala nang hindi pinagtatagni ang maraming kasangkapan.',
            previewType: 'accounting',
          },
        ],
      },
      howItWorks: {
        ...base.pages.home.howItWorks,
        eyebrow: 'Sariling paunang pagsasaayos',
        title: 'Magsimula sa anim na may-gabay na hakbang',
        subtitle:
          'Dinisenyo ang produkto para makapagsimula ang pangkat na pinamumunuan ng tagapagtatag nang hindi kailangan ng mabigat na proyekto sa paunang pagsasaayos.',
        steps: [
          {
            icon: '1',
            title: 'Gumawa ng samahan',
            bullets: [
              'Simulan ang iyong kapaligiran',
              'Itakda ang pangunahing detalye ng legal na entidad',
            ],
          },
          {
            icon: '2',
            title: 'Piliin ang bansa',
            bullets: ['Piliin ang Canada', 'Ipasok ang mga paunang halaga ayon sa bansa'],
          },
          {
            icon: '3',
            title: 'Pumili ng hulma para sa industriya',
            bullets: ['Magsimula sa praktikal na modelo', 'Bawasan ang hadlang sa pagsasaayos'],
          },
          {
            icon: '4',
            title: 'Isaayos ang mga buwis',
            bullets: [
              'Itakda ang mga uri ng buwis',
              'Kumpirmahin ang lohika at paunang halaga ng lalawigan',
            ],
          },
          {
            icon: '5',
            title: 'Ipasok ang mga kliyente at tagapagtustos',
            bullets: ['Dalhin ang pangunahing datos', 'Gumamit ng mga hulma at pagsusuri'],
          },
          {
            icon: '6',
            title: 'Gawin ang unang singil',
            bullets: ['Patunayan ang daloy ng operasyon', 'Lumipat sa pang-araw-araw na paggamit'],
          },
        ],
      },
      compliance: {
        ...base.pages.home.compliance,
        eyebrow: 'Paninindigan sa Canada',
        title: 'Binuo para sa kredibilidad, hindi sa ingay',
        subtitle:
          'Ipinaliliwanag ng pook-sapot kung ano ang kontrolado, ano ang awtomatiko, at ano pa ang nangangailangan ng pagsusuri.',
        bullets: [
          'Ang mga daloy ng buwis sa Canada ay inilalarawan gamit ang malinaw na paninindigan sa paghahain at kakayahang masuri.',
          'Ang pasahod ay inilalagay bilang hiwalay na dagdag na may malinaw na saklaw at kahandaan ayon sa nasasakupan.',
          'Direktang sinasabi ang mga pag-apruba, pamamahala, at inaasahang tulong sa halip na itago sa tawag sa benta.',
        ],
        coverageLabel: 'Kasalukuyang paninindigang pangkomersyo',
        coverage:
          'Pinakamainam para sa maliliit at katamtamang negosyo sa Canada na may 10-50 empleyado',
        note: 'Nananatiling magagamit ang opisyal na daloy mula sa tagapagbigay kung saan hindi angkop ang opisyal na pahayag para sa malalaking organisasyon.',
      },
      included: {
        ...base.pages.home.included,
        eyebrow: 'Ano ang pinagsama',
        title: 'Iisang salansan para sa pananalapi at operasyon',
        subtitle:
          'Hindi ang punto ay mas maraming kakayahan sa papel. Ang punto ay mas kaunting pira-pirasong daloy ng trabaho sa aktuwal na paggamit.',
        items: [
          'Pagkuwenta, pagsingil, gastos, at ulat sa pananalapi',
          'Pagbili, imbentaryo, bodega, at pangunahing produksyon',
          'Pag-apruba, pamamahala, at bakas ng pagsusuring pang-operasyon',
          'Mga daloy para sa pagsunod sa buwis sa Canada at dagdag na tulong sa pasahod',
          'Maramihang kumpanya at mas mataas na pamamahala para sa saklaw ng malalaking organisasyon',
          'Katalinuhan sa ERP at tulong ng AI na may kontroladong paninindigan',
        ],
      },
      executiveSnapshot: {
        ...base.pages.home.executiveSnapshot,
        badge: 'Paraan ng pagpapatakbo',
        title: 'Dinisenyo para sa sariling pagsusuri muna, tulong ng tao pagkatapos',
        subtitle:
          'Ito ay pook na pinangungunahan ng produkto para sa seryosong ERP, hindi polyeto na nagtutulak sa bawat potensyal na kliyente sa tawag.',
        metrics: [
          {
            label: 'Pangunahing kliyente',
            value: '10-50',
            note: 'empleyado sa maliit at katamtamang negosyo sa Canada',
          },
          {
            label: 'Paninindigan sa tulong',
            value: 'Una ang elektronikong liham',
            note: 'Malinaw na oras ng tugon ayon sa plano',
          },
          {
            label: 'Paninindigan sa paunang pagsasaayos',
            value: 'Sariling pagsasaayos',
            note: 'May opsyonal na gabay sa pagpapatupad',
          },
        ],
      },
      positioning: {
        ...base.pages.home.positioning,
        eyebrow: 'Bakit lumilipat ang mga pangkat',
        title: 'Bawasan ang pagkakapira-piraso sa pananalapi, operasyon, at pagsunod',
        subtitle:
          'Ang halaga nito ay kontrol, linaw ng tanaw, at mas kaunting lipat-lipat sa mga sistema.',
        cards: [
          {
            role: 'Pananalapi',
            headline: 'Magsara ng panahon gamit ang mas kaunting magkakahiwalay na sistema.',
            points: [
              'Pagkuwenta, pagsingil, gastos, at ulat sa iisang sistema.',
              'Malinaw na hangganan ng tulong at kontrol na nakabatay sa panahon.',
              'Paninindigan sa pagsunod sa Canada nang hindi sobra ang pangako sa awtomasyon.',
            ],
          },
          {
            role: 'Operasyon',
            headline: 'Panatilihing magkakasabay ang paninda, pagbili, at produksyon.',
            points: [
              'Mga daloy ng imbentaryo at bodega na konektado sa pananalapi.',
              'Pangunahing BOM at produksyon nang walang dagdag na tagapamagitan.',
              'Mga hudyat sa pagsusuri ng operasyon at pamamahala kung saan kailangan.',
            ],
          },
          {
            role: 'Pamunuan',
            headline: 'Makakuha ng mas malinaw na tulong sa pagpapasya.',
            points: [
              'Mas kaunting manwal na pagtutugma sa pagitan ng mga kasangkapan.',
              'Malinaw na inaasahang tulong at saklaw ng paunang pagsasaayos.',
              'Mas maayos na paunang pagsusuri bago gumastos ng panloob na oras.',
            ],
          },
          {
            role: 'Teknolohiya / Operasyon',
            headline: 'Magpatibay nang may disiplinadong saklaw.',
            points: [
              'Malinaw na pagkakasunod-sunod ng pagpapatupad para sa maliliit na pangkat.',
              'Pinamamahalaang pagbabago at mga daloy na nasusuri.',
              'Patong ng pagpapakilala sa pook-sapot na may nakabalangkas na datos.',
            ],
          },
        ],
      },
      technical: {
        ...base.pages.home.technical,
        eyebrow: 'Paraan ng tulong at paunang pagsasaayos',
        title: 'Sariling serbisyo bilang karaniwan, may gabay kapag mahalaga',
        subtitle:
          'Nagtatakda ang pook ng inaasahan nang maaga para alam ng maliliit na pangkat ang mangyayari pagkatapos magpatala.',
        items: [
          'Kasama sa Pundasyong Pinansyal ang sariling paunang pagsasaayos at tulong sa elektronikong liham na may tugon sa loob ng 48h.',
          'Nagdadagdag ang Operasyon ng pangunahing tulong sa elektronikong liham na may tugon sa loob ng 24h.',
          'Kasama sa Malaking Organisasyon ang tulong sa paunang pagsasaayos at tuwirang daan ng suporta.',
        ],
      },
      supportModel: {
        ...base.pages.home.supportModel,
        title: 'Inaasahang tulong ayon sa plano',
        subtitle: 'Direktang ipinapakita ang tulong para manatiling makatotohanan ang pagsusuri.',
        tiers: [
          {
            name: 'Pundasyong Pinansyal',
            body: 'Tulong sa elektronikong liham, tugon sa 48h, at gabay sa sariling paunang pagsasaayos.',
          },
          {
            name: 'Operasyon',
            body: 'Pangunahing tulong sa elektronikong liham, tugon sa 24h, at mas malakas na gabay sa operasyon.',
          },
          {
            name: 'Malaking Organisasyon',
            body: 'Nakalaang paunang pagsasaayos, tuwirang daan ng suporta, at tulong sa nakatakdang paglulunsad.',
          },
        ],
      },
      demoEnvironment: {
        ...base.pages.home.demoEnvironment,
        title: 'Buksan ang kapaligiran ng pagsusuri ng ZANVROX',
        subtitle:
          'Gamitin ang kapaligirang gumagana sa browser na may kathang-isip na datos bago humiling ng may-gabay na pagpapakita.',
        emailLabel: 'Gumagamit sa pagpapakita',
        passwordLabel: 'Salitang-pasok',
        note: 'Para lamang sa pagsusuri sa browser. Hiwalay ang kapaligirang ito sa pagpaplano ng pagpapatupad at inaasahang paggamit sa produksyon.',
        cta: { label: 'Buksan ang kapaligiran ng pagsusuri', path: '/resources#demo-environment' },
      },
      restaurantBetaBanner: {
        eyebrow: 'Mga restawran sa Ontario',
        title: 'Sumali sa pribadong beta ng ZANVROX Workforce',
        body: '14 na araw na pagsubok. 6 buwang libre pagkatapos ng paglulunsad.',
        cta: { label: 'Alamin pa', path: '/workforce/beta' },
      },
      faq: {
        ...base.pages.home.faq,
        eyebrow: 'FAQ',
        title: 'Mga tanong bago maglaan ng oras ang mga pangkat',
        items: [
          {
            question:
              'Maaari ba naming suriin ang ZANVROX nang hindi muna nagtatakda ng pagpapakita?',
            answer:
              'Oo. Ang nilalayong landas ay panoorin ang buod, suriin ang produkto, buksan ang kapaligiran ng pagsusuri, at humingi lang ng tulong kung kailangan ng iyong pangkat.',
          },
          {
            question: 'Kasama ba ang pasahod sa mga batayang plano?',
            answer:
              'Hindi. Ang pasahod ay hiwalay na dagdag na may sariling presyo para hindi ito awtomatikong bayaran ng mga pangkat na pananalapi lamang ang kailangan.',
          },
          {
            question: 'Kailangan ba namin ng bayad na proyekto sa paunang pagsasaayos?',
            answer:
              'Hindi. Sariling pagsasaayos ang karaniwang landas. Magagamit ang May-gabay na Pagpapatupad bilang opsyonal na bayad na pakete kapag gusto ng iyong pangkat ng tulong sa pagsasaayos at pagpasok ng datos.',
          },
          {
            question: 'Anong tulong ang dapat naming asahan?',
            answer:
              'Kasama sa Pundasyong Pinansyal ang tulong sa elektronikong liham sa loob ng 48h, sa Operasyon ang pangunahing tulong sa elektronikong liham sa loob ng 24h, at sa Malaking Organisasyon ang tulong sa paunang pagsasaayos kasama ang tuwirang daan ng suporta.',
          },
        ],
      },
      cta: {
        ...base.pages.home.cta,
        title: 'Magsimula sa produkto, hindi sa tawag sa benta',
        subtitle:
          'Suriin muna ang produkto at presyo. Makipag-ugnayan lang sa pangkat kapag may malinaw kang tanong sa paglulunsad, pasahod, o pagsasama.',
        primary: { label: 'Suriin ang produkto', path: '/erp' },
        secondary: { label: 'Tingnan ang presyo', path: '/pricing' },
      },
    },
    product: {
      ...base.pages.product,
      heroKicker: 'ZANVROX ERP',
      heroTitle:
        'Patakbuhin ang pananalapi, operasyon, at Workforce mula sa iisang konektadong plataporma.',
      heroSubtitle:
        'Ang ZANVROX ERP ay kontroladong plataporma para sa maliliit at katamtamang negosyo sa Canada na sumasaklaw sa pananalapi, pagsingil, gastos, kliyente at tagapagtustos, pagbili, imbentaryo, lokasyon, operasyon, ulat, daloy ng pasahod, at ZANVROX Workforce.',
      heroPrimaryCta: { label: 'Tingnan ang presyo', path: '/pricing' },
      heroSecondaryCta: {
        label: 'Buksan ang kapaligiran ng pagsusuri',
        path: '/resources#demo-environment',
      },
      heroPreview: {
        ...base.pages.product.heroPreview,
        title: 'Paunang tanaw sa operasyon',
        caption: 'Iisang patong ng datos sa operasyon',
        callouts: [
          { status: 'ready', text: 'Imbentaryo, bodega, BOM, at produksyon' },
          { status: 'ready', text: 'Pamamahala at pag-apruba' },
        ],
      },
      pillars: {
        title: 'Mga haligi ng produkto',
        subtitle:
          'Ipinaliliwanag ng pook-sapot ang produkto sa paligid ng daloy ng trabaho, hindi sa magkakahiwalay na tala ng kakayahan.',
        items: [
          {
            title: 'Pundasyong pinansyal',
            body: 'Pagkuwenta, pagsingil, gastos, tanaw sa bangko, at ulat.',
          },
          {
            title: 'Operasyon',
            body: 'Imbentaryo, bodega, BOM, pangunahing produksyon, at pag-apruba.',
          },
          {
            title: 'Pagsunod sa Canada',
            body: 'Mga daloy ng buwis, dagdag na pasahod, tulong sa pagpapadala ng bayad, at paninindigan sa pagtatapos ng taon.',
          },
          {
            title: 'Pamamahala',
            body: 'Kakayahang masuri, pag-apruba, hangganan ng kontrol, at landas ng pagpapalawak sa maraming kumpanya.',
          },
          {
            title: 'ZANVROX Workforce',
            body: 'Pagtala ng oras ng pagpasok at paglabas, iskedyul, gawain, at listahan ng oras para sa mga tauhan sa harapan, kasama sa mga karapat-dapat na plano ng ERP o magagamit nang hiwalay.',
          },
        ],
      },
      showcase: {
        title: 'Mga bahagi ng produkto na mahalagang makita',
        subtitle:
          'Ito ang mga screen na karaniwang gustong suriin ng mga pangkat bago maglaan ng mas malalim na oras sa usapang benta.',
        items: [
          {
            title: 'Tanawan ng buwis',
            body: 'Ipinapakita ang paninindigan sa paghahain, progreso sa pagsunod, at tanaw sa sumusuportang daloy ng trabaho.',
            previewType: 'reports',
            imageKey: 'taxDashboard',
            imageAlt: 'Tanawan ng buwis sa ZANVROX ERP',
          },
          {
            title: 'Kontrol sa imbentaryo',
            body: 'Ipinapakita ang tanaw sa paninda, ruta sa bodega, at mga hudyat ng kahandaan sa operasyon.',
            previewType: 'inventory',
          },
          {
            title: 'Pagpaplano ng produksyon',
            body: 'Ipinapakita ang pagpaplano ng operasyon na nakaugnay sa BOM at progreso ng pagpapatupad.',
            previewType: 'production',
          },
          {
            title: 'Ulat sa pananalapi',
            body: 'Ipinapakita ang magkakaugnay na ulat mula sa gawaing pang-operasyon pabalik sa pananalapi.',
            previewType: 'reports',
          },
        ],
      },
      stacks: [
        {
          title: 'Pinagsamang pananalapi at operasyon',
          subtitle:
            'Dinisenyo para bawasan ang lipat-lipat sa mga kasangkapan sa pangkat na may 10-50 empleyado.',
          items: [
            'Nasa iisang sistema ang pagkuwenta at pagsingil kasama ang pagbili at gastos.',
            'Nananatiling nakaugnay sa talaang pinansyal ang datos ng imbentaryo, bodega, at BOM.',
            'Maaaring idagdag ang pag-apruba at pamamahala nang walang hiwalay na kasangkapan sa operasyon.',
            'Ikinokonekta ng ZANVROX Workforce ang datos ng pagtala ng oras, iskedyul, at listahan ng oras ng mga tauhan sa harapan pabalik sa parehong plataporma.',
          ],
        },
        {
          title: 'Paninindigan sa kontrol sa Canada',
          subtitle: 'Dinisenyo para maging kapani-paniwala sa konteksto ng pagpapatakbo sa Canada.',
          items: [
            'Ipinapaliwanag ang tulong sa buwis sa Canada gamit ang praktikal na wika ng daloy ng trabaho.',
            'Nananatiling dagdag ang pasahod na may malinaw na saklaw ng tulong at presyo.',
            'Nakaayon ang mga pahayag sa tunay na pamamahala, kahandaan, at paninindigan sa pagsusuri.',
          ],
        },
      ],
      onboarding: {
        title: 'Paano gumagana ang sariling pagsasaayos sa praktika',
        subtitle:
          'Pinapalakas ng pahina ng produkto ang ideyang ang paunang pagsasaayos ay ginagabayan sa loob ng produkto, hindi nakatago sa likod ng pagkonsulta bilang karaniwan.',
        steps: [
          {
            number: '1',
            title: 'Gumawa ng samahan',
            body: 'Gumawa ng kapaligiran at magsimula mula sa malinis na batayan ng pagpapatakbo.',
          },
          {
            number: '2',
            title: 'Piliin ang Canada',
            body: 'Ilapat ang mga paunang halaga ayon sa bansa at palagay sa pagsunod.',
          },
          {
            number: '3',
            title: 'Pumili ng hulma para sa industriya',
            body: 'Magsimula sa praktikal na batayan sa halip na magsaayos mula sa wala.',
          },
          {
            number: '4',
            title: 'Isaayos ang mga buwis',
            body: 'Kumpirmahin ang ruta ng buwis, mga rehistro, at kontrol sa pananalapi.',
          },
          {
            number: '5',
            title: 'Ipasok ang pangunahing datos',
            body: 'Ipasok ang mga kliyente, tagapagtustos, at mahahalagang talaang pang-operasyon.',
          },
          {
            number: '6',
            title: 'Patakbuhin ang unang transaksyon',
            body: 'Gumawa ng unang singil at patunayan ang landas ng operasyon mula simula hanggang dulo.',
          },
        ],
        note: 'Magagamit ang May-gabay na Pagpapatupad kapag gusto ng iyong pangkat ng tulong sa pagsasaayos, pagsusuri ng talaan ng mga account, pagpasok ng datos, at pagsasanay.',
      },
      cta: {
        title: 'Tingnan kung tumutugma ang saklaw ng produkto sa kumpanya mo ngayon',
        subtitle:
          'Gamitin ang presyo at mga sanggunian para magpasya kung kailangan mo ng sariling pagsasaayos, may-gabay na pagpapatupad, o usapan para sa malaking organisasyon.',
        primary: { label: 'Tingnan ang presyo', path: '/pricing' },
        secondary: { label: 'Makipag-ugnayan sa pangkat', path: '/contact' },
      },
    },
    platform: {
      heroTitle: 'Arkitektura ng plataporma para sa kontroladong paglaki.',
      availableLabel: 'Magagamit na ngayon',
      heroSubtitle:
        'Modular na pundasyon ng ERP na nagpapanatiling magkasabay ang pananalapi at operasyon.',
      heading: {
        title: 'Mga patong ng plataporma',
        subtitle:
          'Dinisenyo ang bawat patong para sa kakayahang masuri, mapalawak, at magamit sa maraming kumpanya.',
      },
      sections: [
        {
          title: 'Modelo ng datos sa operasyon',
          status: 'available',
          statusLabel: 'Magagamit na ngayon',
          points: [
            'Pangunahing entidad para sa mga singil, item, pangkat ng paninda, pagbili, gastos, at kliyente.',
            'Mga hangganan at kontrol sa pagkuwenta na nakaugnay sa talaan.',
            'Daloy sa paggawa ng dokumento para sa mga output na nakikita ng kostumer.',
          ],
        },
        {
          title: 'Arkitektura ng aplikasyon',
          status: 'available',
          statusLabel: 'Magagamit na ngayon',
          points: [
            'React + Vite na harapan para sa mabilis na pakikipag-ugnayan.',
            'Supabase/PostgreSQL na likuran na may lohikang nauuna ang SQL.',
            'Edge functions para sa ligtas na pagsasaayos ng mga daloy.',
          ],
        },
        {
          title: 'Kontrol para sa malalaking organisasyon',
          status: 'available',
          statusLabel: 'Magagamit na ngayon',
          points: [
            'Mga kontrol sa pagsasara ng panahon at tala ng pagsusuri.',
            'Mga snapshot ng pagbabalik ng buwis at kumpirmasyon sa paghahain.',
            'Pagpasok ayon sa tungkulin na may paghihiwalay ng samahan.',
          ],
        },
      ],
    },
    solutions: {
      kicker: 'Mga Solusyon',
      manufacturing: {
        title: 'Paggawa',
        subtitle: 'Mula BOM hanggang output ng produksyon na may tanaw sa bawat transaksyon.',
        scopeTitle: 'Saklaw ng paggawa',
        scopeSubtitle: 'Mga kakayahang handa sa produksyon na magagamit na ngayon.',
        included: [
          'BOM at pagpapatupad ng produksyon na nakaugnay sa paggalaw ng imbentaryo.',
          'Pagsubaybay ayon sa pangkat ng paninda sa papasok at palabas na stock.',
          'Mga pangyayari sa operasyon na nakaayon sa pagkuwenta para sa pagtutugma.',
        ],
        cta: 'Magpatakda ng pagpapakita para sa paggawa',
        secondaryCta: { label: 'Pamamahagi ng Pagkain', path: '/solutions/food-distribution' },
      },
      foodDistribution: {
        title: 'Pamamahagi ng Pagkain',
        subtitle:
          'Mga daloy ng pamamahagi ayon sa pangkat ng paninda para sa operasyong mataas ang pangangailangan sa pagsubaybay.',
        scopeTitle: 'Saklaw ng pamamahagi',
        scopeSubtitle: 'Saklaw ng operasyon na magagamit na ngayon.',
        included: [
          'Kontrol sa imbentaryo at pangkat ng paninda para sa operasyong mabigat sa pagsubaybay.',
          'Pagbili, pag-update ng stock, at pagsingil sa iisang kadena ng operasyon.',
          'Suporta sa ulat sa buwis na handa para sa portal para sa pagsunod sa Canada.',
        ],
        cta: 'Magpatakda ng pagpapakita para sa pamamahagi',
        secondaryCta: { label: 'Paggawa', path: '/solutions/manufacturing' },
      },
    },
    modules: {
      heroTitle: 'Mga bahagi na gumagana bilang iisang sistema.',
      heroSubtitle:
        'Maaaring gamitin nang hiwalay ang bawat bahagi at magkakaugnay sa iisang kontroladong pundasyon ng datos.',
      activeLabel: 'Aktibo',
      includedTitle: 'Kasama',
      modules: [
        {
          name: 'Pananalapi',
          included: [
            'Mga kontrol sa talaan',
            'Pagkuha ng gastos',
            'Mga pangyayari sa pagkuwenta na nakaugnay sa singil',
          ],
        },
        {
          name: 'Imbentaryo',
          included: [
            'Pagsubaybay ng pangkat ng paninda',
            'Mga lokasyon ng stock',
            'Mga pagsasaayos sa imbentaryo',
          ],
        },
        {
          name: 'Bodega',
          included: [
            'Mga padala',
            'Tulong sa pagpili ng paninda',
            'Daloy ng paggalaw na handa sa paghahatid',
          ],
        },
        {
          name: 'BOM',
          included: [
            'Pagsasaayos ng talaan ng materyales',
            'Pag-uugnay ng materyales sa produksyon',
          ],
        },
        {
          name: 'Produksyon',
          included: ['Mga transaksyon sa produksyon', 'Pagsubaybay sa epekto sa imbentaryo'],
        },
        {
          name: 'Pagsingil',
          included: [
            'Paggawa at pag-edit ng singil',
            'Pasadyang PDF output',
            'Mga paunang halaga ng pagsingil ayon sa kliyente',
          ],
        },
        {
          name: 'Pagbili',
          included: [
            'Mga daloy ng pagbili mula sa tagapagtustos',
            'Pagkuha ng gastos na nakatali sa imbentaryo',
          ],
        },
        {
          name: 'Mga buwis',
          included: [
            'Ulat para sa GST/HST + PST/QST',
            'Mga snapshot ng pagbabalik',
            'Daloy ng paghahain na handa sa portal',
          ],
        },
      ],
    },
    security: {
      ...base.pages.security,
      heroTitle: 'Seguridad at arkitektura mula sa disenyo.',
      heroSubtitle:
        'Hangganan ng nangungupahang kapaligiran, pinakamababang pahintulot, at kilos ng transaksyon na nasusuri.',
      overview: {
        title: 'Buod ng seguridad',
        subtitle:
          'Konserbatibong buod ng mga kontrol na kasalukuyang nakikita sa produkto at daloy ng paghahatid.',
        description:
          'Ang ZANVROX ay binuo sa paligid ng paghihiwalay ng kapaligiran, pagpasok ayon sa tungkulin, at pagpapatupad ng server para sa sensitibong operasyon. Ang mga pampublikong pahayag sa seguridad ay limitado sa mga kontrol na ipinatutupad ngayon at umiiwas sa mga pahayag sa sertipikasyon o saklaw na wala pa.',
        bullets: [
          'Nakatuon ang paninindigan sa seguridad sa pinakamababang pahintulot, saklaw ayon sa samahan, at kilos ng operasyon na nasusuri.',
          'Maaaring kailanganin ang mas matibay na pagpapatunay bago makapasok sa sensitibong bahagi.',
          'Umaasa ang imprastraktura at paghahatid sa pinamamahalaang mga tagapagbigay ng plataporma sa halip na sariling pinatatakbong server.',
        ],
      },
      matrix: {
        title: 'Talaan ng kontrol',
        subtitle: 'Bawat pahayag ng kontrol ay may katumbas na mekanismo ng pagpapatupad.',
      },
      controls: [
        {
          control: 'Paghihiwalay ng kapaligiran',
          support:
            'Mga patakaran ng PostgreSQL RLS na nakasaklaw sa org_id sa mga talaang pang-operasyon.',
        },
        {
          control: 'Kontrol sa pagpasok',
          support:
            'Kasapian sa samahan at mga landas ng pagsulat ayon sa tungkulin para sa kritikal na operasyon.',
        },
        {
          control: 'Pagsubaybay sa pagbabago',
          support:
            'Mga ID sa antas ng transaksyon, tatak ng oras, at tala ng kumpirmasyon sa paghahain.',
        },
        {
          control: 'Pagpapatupad sa panig ng server',
          support:
            'Kritikal na gawain sa pagkuwenta at buwis na isinasagawa sa pamamagitan ng kontrol sa SQL/Edge.',
        },
      ],
      sections: [
        {
          title: 'Kontrol sa Pagpasok at Pagpapatunay',
          items: [
            'Ipinapatupad ang kontrol sa pagpasok ayon sa tungkulin sa pamamagitan ng kasapian sa samahan, pahintulot sa bahagi, at mga landas ng pagsulat ayon sa tungkulin.',
            'Magagamit ang MFA sa pamamagitan ng mga TOTP factor mula sa app na nagpapatunay.',
            'Maaaring mangailangan ang sensitibong bahagi ng ERP ng mas mataas na pagpapatunay sa AAL2 bago payagang makapasok.',
          ],
        },
        {
          title: 'Paghihiwalay ng Datos',
          items: [
            'Nakasaklaw ang paghihiwalay sa antas ng kapaligiran ayon sa mga pagkakakilanlan ng samahan at patakaran sa seguridad ng database.',
            'Nakatali ang pagbasa at pagsulat sa operasyon sa aktibong konteksto ng samahan.',
            'Lohikal ang paghihiwalay ng datos sa pinagsasaluhang kapaligiran ng aplikasyon at hindi nakabatay sa hiwalay na salansan ng aplikasyon bawat kapaligiran.',
          ],
        },
        {
          title: 'Pagho-host at Imprastraktura',
          items: [
            'Pinamamahalaan ang mga serbisyo sa likod ng sistema sa pamamagitan ng Supabase.',
            'Inihahatid ang pampublikong harapan sa pamamagitan ng Vercel.',
            'Gumagamit ng HTTPS/TLS para sa pag-encrypt habang ipinapadala.',
            'Pinamamahalaan ng tagapagbigay ang pinagbabatayang imprastraktura sa ulap at hindi ito direktang pinatatakbo ng ZANVROX.',
          ],
        },
        {
          title: 'Seguridad sa Operasyon',
          items: [
            'Kasama sa mga tarangkahan ng paglabas ang pagsusuri ng lint, unit test, web test, build, at mga script sa pagpapatunay bago ang pasya sa paglabas.',
            'Ginagamit ang Playwright E2E coverage at naka-host na smoke check para sa pagpapatunay ng kritikal na daloy ng trabaho.',
            'Kasama sa pagbabantay ng dependency ang npm audit sa CI para sa pagsusuri ng mga pakete na may mataas na panganib.',
            'Nililinis ang mga tala ng aplikasyon para mabawasan ang hindi sinasadyang paglantad ng elektronikong liham, token, at iba pang sensitibong patlang.',
          ],
        },
      ],
      subprocessors: {
        title: 'Mga subprocessor',
        subtitle:
          'Kasalukuyang pampublikong buod ng mga tagapagbigay ng ikatlong panig na ginagamit sa pagpapatakbo ng serbisyo.',
        items: [
          {
            name: 'Supabase',
            support:
              'Pinamamahalaang plataporma sa likod ng sistema para sa database, pagpapatunay, imbakan, at daloy sa panig ng server.',
          },
          {
            name: 'Vercel',
            support:
              'Pinamamahalaang pagho-host at paghahatid ng harapan para sa pampublikong karanasan sa web.',
          },
          {
            name: 'Resend',
            support:
              'Paghahatid ng transaksyonal na elektronikong liham para sa limitadong komunikasyon at pagruruta ng mga potensyal na kliyente mula sa pook-sapot.',
          },
        ],
        note: 'Ginagamit lang ang mga tagapagbigay na ito kung kinakailangan para sa pagpapatakbo ng serbisyo, paghahatid, o transaksyonal na komunikasyon.',
      },
      disclosures: {
        title: 'Pagiging malinaw at kasalukuyang limitasyon',
        subtitle: 'Mga konserbatibong pahayag na tumutugma sa mga kontrol na magagamit ngayon.',
        items: [
          'Walang pahayag ng awtomatikong paghahain: suporta lamang sa daloy na handa para sa portal.',
          'Walang nakatagong bandila ng kakayahan para sa pampublikong kakayahan.',
          'May mga tala at snapshot na nasusuri upang suportahan ang kilos sa produksyon.',
          'Umaasa ang kasalukuyang MFA sa TOTP mula sa app na nagpapatunay at hindi ito lumalaban sa phishing.',
          'Ipinapatupad ang mas mataas na pagpapatunay sa sensitibong ruta sa halip na gawing pangkalahatang kahilingan sa bawat sesyon.',
          'Hindi pa magagamit ang WebAuthn at pagpapatunay na batay sa passkey.',
        ],
      },
      cta: {
        title: 'Ugnayan para sa seguridad',
        subtitle:
          'Gamitin ang kasalukuyang landas ng ugnayan para humiling ng buod ng seguridad o para sa kasunod na tanong sa seguridad/pagsunod.',
        primary: { label: 'Humiling ng buod ng seguridad', path: '/contact' },
        secondary: { label: 'Makipag-ugnayan para sa seguridad/pagsunod', path: '/contact' },
      },
    },
    integrations: {
      heroTitle: 'Pagsasama at API para sa kontroladong pakikipag-ugnayan.',
      heroSubtitle:
        'Ilabas ang datos at mga daloy nang hindi nilalaktawan ang tuntunin ng negosyo.',
      posture: {
        title: 'Paninindigan sa pagsasama',
        subtitle: 'Kasalukuyang kakayahan sa pakikipag-ugnayan.',
        items: [
          'PostgREST API surface sa ibabaw ng kontroladong schema.',
          'Edge functions para sa pinag-ugnay na daloy ng pagsasama.',
          'SQL functions para sa atomikong pagsusulat na mataas ang panganib.',
        ],
      },
      publication: {
        title: 'Mga pamantayan sa pagsasama',
        subtitle: 'Pampublikong paninindigan sa pagpapatupad para sa kahandaan sa paglulunsad.',
        items: [
          'Istruktura na inuuna ang API na may malinaw na pagmamay-ari ng ruta.',
          'Mga hangganan ng pagpasok na may kaalaman sa kapaligiran para sa lahat ng daloy ng pagsasama.',
          'Mga pagluluwas ng operasyon sa CSV/PDF para sa portal at daloy ng pagsusuri.',
        ],
      },
    },
    ai: {
      heroTitle: 'AI sa operasyon na may pananggalang para sa malalaking organisasyon.',
      heroSubtitle:
        'Magagamit ang tulong ng AI para sa mga daloy ng pag-alalay na may kontrol ng tao.',
      scope: {
        title: 'Saklaw ng AI',
        subtitle: 'Magagamit na ngayon para sa kontroladong mga gamit sa pag-alalay.',
        items: [
          'Tulong ng AI batay sa konteksto sa mga interface ng operasyon.',
          'Panloob na tulong sa pakikipagtulungan sa pamamagitan ng mga daloy ng usapan.',
          'Nananatili ang pagsusuri ng tao para sa mga aksyong sensitibo sa pagsunod.',
        ],
      },
      note: 'Pang-alalay ang mga rekomendasyon ng AI. Ang huling aksyong pang-operasyon at pang-pagsunod ay nananatiling kinukumpirma ng gumagamit.',
    },
    pricingHub: {
      heroTitle: 'Dalawang produkto. Dalawang hiwalay na listahan ng presyo.',
      heroSubtitle:
        'Piliin ang ZANVROX Workforce para sa mga shift ng tauhan sa harapan, ang ZANVROX ERP para sa pananalapi at operasyon ng negosyo, o pareho. May sariling pahina ng presyo ang bawat isa.',
      erpCard: {
        eyebrow: 'ZANVROX ERP',
        title: 'Pananalapi at operasyon ng negosyo',
        body: 'Pagtutuos, pagsingil, pagbili, imbentaryo, at ulat para sa maliliit at katamtamang negosyo sa Canada.',
        bullets: ['Pundasyong Pinansyal', 'Negosyo', 'Operasyon', 'Pasadya'],
        cta: { label: 'Tingnan ang presyo ng ERP', path: '/erp/pricing' },
      },
      workforceCard: {
        eyebrow: 'ZANVROX Workforce',
        title: 'Pamamahala ng tauhan sa harapan',
        body: 'Pagtala ng oras, iskedyul, gawain, at listahan ng oras, may presyo bawat lokasyon.',
        bullets: ['Panimula', 'Pangkat', 'Negosyo', 'Maramihang Lokasyon'],
        cta: { label: 'Tingnan ang presyo ng Workforce', path: '/workforce/pricing' },
      },
      differenceNote:
        'Hiwalay na ibinebenta at pinepresyuhan ang ZANVROX ERP at ZANVROX Workforce. Ang mga karapat-dapat na plano ng ERP ay may diskuwento o kasamang Workforce — tingnan ang presyo ng ERP para sa detalye.',
    },
    pricing: {
      ...base.pages.pricing,
      heroTitle: 'Presyo para sa ZANVROX ERP at ZANVROX Workforce.',
      heroSubtitle:
        'Magsimula sa Workforce para sa mga shift ng mga tauhan sa harapan, sa ZANVROX ERP para sa pananalapi at operasyon ng negosyo, o pareho. Malinaw na presyo sa CAD para sa maliliit at katamtamang negosyo sa Canada.',
      pricingNote:
        'Nasa dolyar ng Canada ang mga presyo. Hindi kasama ang buwis. Maaaring mag-iba ang presyo para sa malalaking organisasyon o mataas na dami ng paggamit. Hiwalay na dagdag ang pasahod. Tinutulungan ng ZANVROX na ayusin ang mga daloy ng pananalapi, pasahod, at Workforce, ngunit hindi nito pinapalitan ang payo sa pagkuwenta, batas, o buwis.',
      upgradePath: {
        eyebrow: 'Magsimula kung saan naroroon ang iyong negosyo ngayon',
        title: 'Iisang plataporma habang lumalaki ang iyong negosyo',
        subtitle:
          'Hindi ito kinakailangang pagkakasunod-sunod. Maaaring direktang pumili ang isang negosyo ng anumang planong tumutugma ngayon.',
        steps: [
          { name: 'Workforce', body: 'CAD 29-79 bawat lokasyon' },
          { name: 'Pundasyong Pinansyal', body: 'CAD 179 / buwan' },
          { name: 'Negosyo', body: 'CAD 349 / buwan' },
          { name: 'Operasyon', body: 'CAD 649 / buwan, kasama ang Workforce' },
          { name: 'Pasadya', body: 'Pasadya' },
        ],
        note: 'Pinapatakbo mo na ba ang negosyo mo gamit ang ZANVROX? Kasama na ang Workforce sa Operasyon.',
      },
      bundleOffers: {
        operationsIncluded: {
          title: 'Kasama sa Operasyon ang ZANVROX Workforce',
          body: 'Kasama ang ZANVROX Workforce para sa mga empleyado at lokasyong saklaw ng iyong subscription sa ERP. Walang hiwalay na bayad sa Workforce para sa saklaw na iyon.',
        },
        businessDiscount: {
          title: '50% diskuwento sa Workforce kapag may Negosyo',
          body: 'Ang mga kliyente ng Negosyo sa ERP ay may 50% diskuwento sa kanilang karapat-dapat na hiwalay na plano ng ZANVROX Workforce.',
        },
        financeStandalone: {
          title: 'Pundasyong Pinansyal at Workforce, hiwalay',
          body: 'Hindi kasama sa Pundasyong Pinansyal ang Workforce o anumang diskuwento sa Workforce. Maaari kang bumili ng Pundasyong Pinansyal kasama ang ZANVROX Workforce sa karaniwang presyo nito bilang hiwalay na plano, nang walang obligasyong umakyat sa Negosyo o Operasyon.',
        },
      },
      workforce: {
        title: 'ZANVROX Workforce',
        subtitle:
          'Pagtala ng oras ng pagpasok at paglabas, iskedyul, mga gawain, at listahan ng oras para sa mga tauhan sa harapan, may presyong bawat lokasyon.',
        launchBadge: 'May taunang pagsingil',
        launchOfferLabel:
          'Kasama sa taunang mga plano ng Workforce ang dalawang buwang libre kapag taun-taon sinisingil.',
        launchOfferNote:
          'Ang presyong ipinapakita rito ay pang-impormasyon lamang; kinukumpirma ang pagsingil kapag nagsimula ka na.',
        popularLabel: 'Pinakasikat',
        priceSuffixMonthly: '/buwan bawat lokasyon',
        priceSuffixAnnual: '/taon bawat lokasyon',
        annualDisplayMode: 'total',
        billedMonthlyLabel: 'Buwanang pagsingil',
        billedAnnuallyLabel: 'Taunang pagsingil',
        fromLabel: 'Mula',
        customLabel: 'Pasadyang presyo',
        includesLabel: 'Kasama',
        entitiesIncludedLabel: 'Saklaw ng pagsingil',
        usersIncludedLabel: 'Kasamang empleyado',
        billingToggle: {
          monthly: 'Buwanan',
          annual: 'Taunan',
          annualBadge: '2 buwang libre',
          helper:
            'Binabago lang ng taunang pagsingil ang termino ng batayang subscription at katumbas ito ng 10 buwan ng buwanang halaga.',
        },
        tiers: [
          {
            slug: 'workforce-starter',
            name: 'Panimula',
            summary:
              'Para sa iisang lokasyon na nangangailangan ng pagtala ng oras ng pagpasok, iskedyul, at listahan ng oras sa iisang app.',
            entitiesLabel: 'May presyo bawat lokasyon',
            usersLabel: 'Hanggang 10 empleyado',
            monthly: { kind: 'fixed', amount: 29, note: 'Sinisingil bawat lokasyon, bawat buwan.' },
            annual: {
              kind: 'fixed',
              amount: 29,
              totalAmount: 290,
              badge: '2 buwang libre',
              note: 'Katumbas ng 10 buwan ng buwanang pagsingil. 2 buwang libre.',
            },
            included: [
              'Pagtala ng oras ng pagpasok / paglabas',
              'Pagpapatunay ng lokasyon',
              'Listahan ng oras',
              'Iskedyul',
              'Mga gawain',
            ],
            ctaLabel: 'Magsimula sa Panimula',
          },
          {
            slug: 'workforce-team',
            name: 'Pangkat',
            isPopular: true,
            summary:
              'Para sa mga lokasyong nangangailangan ng kontrol ng tagapamahala, kahilingan sa shift, at mas malakas na ulat.',
            entitiesLabel: 'May presyo bawat lokasyon',
            usersLabel: 'Hanggang 25 empleyado',
            monthly: { kind: 'fixed', amount: 49, note: 'Sinisingil bawat lokasyon, bawat buwan.' },
            annual: {
              kind: 'fixed',
              amount: 49,
              totalAmount: 490,
              badge: '2 buwang libre',
              note: 'Katumbas ng 10 buwan ng buwanang pagsingil. 2 buwang libre.',
            },
            included: [
              'Lahat ng nasa Panimula',
              'Kontrol ng tagapamahala',
              'Mga bukas na shift at kahilingan sa shift',
              'Komunikasyon ng pangkat',
              'Pinahusay na ulat',
              'Higit pang kontrol sa pagpapatakbo',
            ],
            ctaLabel: 'Magsimula sa Pangkat',
          },
          {
            slug: 'workforce-business',
            name: 'Negosyo',
            summary:
              'Para sa mas malalaking lokasyon na nangangailangan ng mas mataas na kontrol ng tagapamahala at maraming tagapamahala.',
            entitiesLabel: 'May presyo bawat lokasyon',
            usersLabel: 'Hanggang 50 empleyado',
            monthly: { kind: 'fixed', amount: 79, note: 'Sinisingil bawat lokasyon, bawat buwan.' },
            annual: {
              kind: 'fixed',
              amount: 79,
              totalAmount: 790,
              badge: '2 buwang libre',
              note: 'Katumbas ng 10 buwan ng buwanang pagsingil. 2 buwang libre.',
            },
            included: [
              'Lahat ng nasa Pangkat',
              'Mas mataas na kontrol ng tagapamahala',
              'Higit pang ulat',
              'Maraming tagapamahala',
              'Mas mataas na pagpapatakbo ng Workforce',
            ],
            ctaLabel: 'Magsimula sa Negosyo',
          },
          {
            slug: 'workforce-multi-location',
            name: 'Maramihang Lokasyon',
            summary:
              'Para sa mga kadena, grupo ng maraming lokasyon, at mga lokasyong may 50+ empleyado.',
            entitiesLabel: 'Pasadyang presyo para sa maraming lokasyon',
            usersLabel: '50+ empleyado bawat lokasyon',
            monthly: {
              kind: 'custom',
              label: 'Pasadyang presyo',
              note: 'Nakatakda para sa mga kadena, grupo ng maraming lokasyon, at natatanging pangangailangan sa pagpapatakbo.',
            },
            annual: {
              kind: 'custom',
              label: 'Pasadyang presyo',
              note: 'Direktang itinatakda batay sa bilang ng lokasyon at empleyado.',
            },
            included: [
              '50+ empleyado bawat lokasyon',
              'Suporta para sa maraming lokasyon at kadena',
              'Natatanging pangangailangan sa pagpapatakbo',
              'Pasadyang paglulunsad at tulong',
            ],
            ctaLabel: 'Humiling ng presyo para sa maraming lokasyon',
          },
        ],
        comparison: {
          title: 'Paghahambing ng mga plano ng Workforce',
          subtitle: 'Ihambing ang Panimula, Pangkat, at Negosyo para sa iisang lokasyon.',
          featureLabel: 'Kakayahan',
          rows: [
            { label: 'Pagtala ng oras ng pagpasok / paglabas', values: [true, true, true] },
            { label: 'Pagpapatunay ng lokasyon', values: [true, true, true] },
            { label: 'Listahan ng oras', values: [true, true, true] },
            { label: 'Iskedyul', values: [true, true, true] },
            { label: 'Mga gawain', values: [true, true, true] },
            { label: 'Kontrol ng tagapamahala', values: [false, true, true] },
            { label: 'Mga bukas na shift / kahilingan sa shift', values: [false, true, true] },
            { label: 'Komunikasyon ng pangkat', values: [false, true, true] },
            { label: 'Pinahusay na ulat', values: [false, true, true] },
            { label: 'Mas mataas na kontrol ng tagapamahala', values: [false, false, true] },
            { label: 'Maraming tagapamahala', values: [false, false, true] },
            { label: 'Kasamang empleyado', values: ['10', '25', '50'] },
          ],
          notesTitle: 'Mga tala sa komersyo',
          notes: [
            'May presyo bawat lokasyon, bawat buwan.',
            'Gumagamit ng pasadyang presyo ang maramihang lokasyon at mga lokasyong may 50+ empleyado.',
            'Kasama sa taunang pagsingil ang dalawang buwang libre (10 buwan ng buwanang halaga).',
          ],
          annualNote: 'Kasama sa taunang mga plano ng Workforce ang dalawang buwang libre.',
        },
        betaBanner: {
          eyebrow: 'Mga restawran sa Ontario',
          title: 'Subukan nang libre ang Workforce sa loob ng 14 na araw bago bumili',
          body: 'Maaaring mag-apply ang mga restawran sa Ontario para sa pribadong beta: walang obligasyong bumili, at 6 na buwang libre pagkatapos ng pampublikong paglulunsad.',
          cta: { label: 'Mag-apply para sa libreng beta', path: '/workforce/beta' },
        },
        faq: {
          title: 'Mga tanong tungkol sa presyo ng Workforce',
          items: [
            {
              question: 'Maaari ko bang bilhin ang Workforce nang wala ang ERP?',
              answer:
                'Oo. Available ang ZANVROX Workforce bilang hiwalay na plano, may presyo bawat lokasyon, nang hindi kinakailangang bumili o mag-upgrade sa anumang plano ng ERP.',
            },
            {
              question: 'Gumagamit ka na ba ng ZANVROX ERP?',
              answer:
                'Kasama sa Operasyon ang ZANVROX Workforce para sa mga empleyado at lokasyong saklaw ng subscription na iyon sa ERP. Karapat-dapat ang Negosyo sa 50% diskuwento sa hiwalay na plano ng Workforce. Tingnan ang presyo ng ERP para sa detalye.',
            },
          ],
        },
      },
      erp: {
        title: 'ZANVROX ERP',
        subtitle:
          'Kontrol sa pananalapi, operasyon ng negosyo, at konektadong daloy ng trabaho para sa maliliit at katamtamang negosyo sa Canada.',
        launchBadge: 'May taunang pagsingil',
        launchOfferLabel:
          'Kasama sa taunang batayang subscription ang isang buwang libre kapag siningil taun-taon.',
        launchOfferNote:
          'Nakabatay pa rin sa paggamit ang presyo ng pasahod, at magagamit ang May-gabay na Pagpapatupad kapag kailangan ang mas nakabalangkas na paglulunsad.',
        popularLabel: 'Pinakasikat',
        priceSuffixMonthly: '/buwan',
        billedMonthlyLabel: 'Buwanang pagsingil',
        billedAnnuallyLabel: 'Taunang pagsingil',
        fromLabel: 'Mula',
        customLabel: 'Pasadya',
        includesLabel: 'Kasama',
        entitiesIncludedLabel: 'Saklaw sa komersyo',
        usersIncludedLabel: 'Kasamang gumagamit',
        billingToggle: {
          monthly: 'Buwanan',
          annual: 'Taunan',
          annualBadge: '1 buwang libre',
          helper:
            'Binabago lang ng taunang pagsingil ang termino ng batayang subscription. Nananatiling batayang bayad kasama ang bilang ng empleyado ang presyo ng pasahod.',
        },
        tiers: [
          {
            slug: 'finance',
            name: 'Pundasyong Pinansyal',
            summary:
              'Kontrol sa pananalapi para sa lumalaking negosyo: pagsingil, gastos, at ulat.',
            entitiesLabel: 'Saklaw ng iisang kumpanya',
            usersLabel: 'Hanggang 3 gumagamit',
            monthly: {
              kind: 'fixed',
              amount: 179,
              note: 'Kasama ang gabay sa sariling pagsasaayos, kontroladong daloy ng pananalapi, at tulong sa elektronikong liham na may tugon sa 48h.',
            },
            annual: {
              kind: 'fixed',
              amount: 179,
              badge: '1 buwang libre',
              note: 'Sinisingil taun-taon sa CAD 1,969 para sa batayang subscription.',
              secondaryNote:
                'Nananatiling hiwalay ang Workforce at mas malawak na saklaw ng operasyon kapag kailangan.',
            },
            included: [
              'Pagsingil',
              'Kliyente at tagapagtustos',
              'Gastos',
              'Mga dapat singilin at bayaran',
              'Pagkuwenta',
              'Buwis',
              'Ulat sa pananalapi',
              'Tulong sa elektronikong liham (tugon sa 48h)',
            ],
            ctaLabel: 'Suriin ang Pundasyong Pinansyal',
          },
          {
            slug: 'business',
            name: 'Negosyo',
            isPopular: true,
            summary:
              'Pundasyong pinansyal kasama ang pang-araw-araw na operasyon ng negosyo: pagbili, tagapagtustos, at imbentaryo.',
            entitiesLabel: 'Saklaw ng iisang kumpanya',
            usersLabel: 'Hanggang 6 gumagamit',
            monthly: {
              kind: 'fixed',
              amount: 349,
              badge: '50% diskuwento sa Workforce',
              note: 'Kasama ang pangunahing tulong sa elektronikong liham na may tugon sa 24h.',
            },
            annual: {
              kind: 'fixed',
              amount: 349,
              badge: '50% diskuwento sa Workforce',
              note: 'Sinisingil taun-taon sa CAD 3,839 para sa batayang subscription.',
              secondaryNote:
                'May 50% diskuwento ang mga kliyente ng Negosyo sa ERP sa kanilang karapat-dapat na hiwalay na plano ng Workforce.',
            },
            included: [
              'Lahat ng nasa Pundasyong Pinansyal',
              'Pagbili',
              'Mga tagapagtustos',
              'Imbentaryo',
              'Mga lokasyon',
              'Mga dashboard ng operasyon',
              'Karaniwang pamamahala ng operasyon',
              '50% diskuwento sa ZANVROX Workforce (hiwalay na plano)',
              'Pangunahing tulong sa elektronikong liham (24h)',
            ],
            ctaLabel: 'Suriin ang Negosyo',
          },
          {
            slug: 'operations',
            name: 'Operasyon',
            summary:
              'Ang kumpletong plataporma ng operasyon ng negosyo ng ZANVROX, kasama ang Workforce.',
            entitiesLabel: 'Saklaw ng iisang kumpanya',
            usersLabel: 'Hanggang 10 gumagamit',
            monthly: {
              kind: 'fixed',
              amount: 649,
              badge: 'Kasama ang Workforce',
              note: 'Kasama ang pangunahing tulong sa elektronikong liham na may tugon sa 24h para sa mas aktibong pangkat sa operasyon.',
            },
            annual: {
              kind: 'fixed',
              amount: 649,
              badge: 'Kasama ang Workforce',
              note: 'Sinisingil taun-taon sa CAD 7,139 para sa batayang subscription.',
              secondaryNote:
                'Kasama ang ZANVROX Workforce para sa mga empleyado at lokasyong saklaw ng iyong subscription sa ERP.',
            },
            included: [
              'Lahat ng nasa Negosyo',
              'Mas mataas na imbentaryo',
              'Mas mataas na pagbili',
              'Operasyon sa maraming lokasyon',
              'Mas mataas na kontrol sa operasyon',
              'Produksyon (BOM)',
              'Mas mataas na ulat',
              'Mga kontrol sa pamamahala',
              'Kasama ang ZANVROX Workforce',
              'Pangunahing tulong sa elektronikong liham (24h)',
            ],
            ctaLabel: 'Suriin ang Operasyon',
          },
          {
            slug: 'enterprise',
            name: 'Pasadya',
            summary:
              'Para sa malalaking organisasyon, komplikadong grupo, maraming lokasyon, mataas na dami, at pasadyang pangangailangan.',
            entitiesLabel: 'Maramihang lokasyon o pasadyang saklaw',
            usersLabel: 'Pasadyang saklaw ng gumagamit',
            monthly: {
              kind: 'custom',
              label: 'Pasadya',
              note: 'Nakasaklaw na pagsusuri para sa paglulunsad sa maraming lokasyon, may-gabay na pagsasaayos, pagsasama, pangangailangan sa pamamahala, at pagsusuri sa seguridad.',
            },
            annual: {
              kind: 'custom',
              label: 'Pasadya',
              note: 'Direktang itinatakda ang pasadyang presyo ayon sa istruktura ng pagpapatakbo, pangangailangan sa paglulunsad, at konteksto ng pagpapatupad.',
            },
            included: [
              'Paglulunsad sa maraming lokasyon',
              'Mas mataas na pamamahala',
              'Pagsasama',
              'Landas ng pagsusuri sa seguridad',
              'Mga natatanging kasunduan',
              'May-gabay na pagpapatupad at tulong sa paglulunsad',
            ],
            ctaLabel: 'Makipag-ugnayan sa amin',
          },
        ],
        comparison: {
          title: 'Paghahambing ng mga plano ng ERP',
          subtitle:
            'Gamitin ito para magpasya kung kailangan mo ng kontrol sa pananalapi, pang-araw-araw na operasyon, o ang kumpletong plataporma ng operasyon.',
          featureLabel: 'Kakayahan',
          rows: [
            { label: 'Pagkuwenta', values: [true, true, true, true] },
            { label: 'Pagsingil', values: [true, true, true, true] },
            { label: 'Gastos', values: [true, true, true, true] },
            { label: 'Mga ulat sa pananalapi', values: [true, true, true, true] },
            { label: 'Pagbili', values: [false, true, true, true] },
            { label: 'Imbentaryo', values: [false, true, true, true] },
            { label: 'Mga lokasyon', values: [false, true, true, true] },
            { label: 'Bodega', values: [false, false, true, true] },
            { label: 'Produksyon (BOM)', values: [false, false, true, true] },
            { label: 'Pag-apruba at pamamahala', values: [false, true, true, true] },
            { label: 'Paglulunsad sa maraming lokasyon', values: [false, false, true, true] },
            { label: 'Pagsasama', values: [false, false, false, true] },
            {
              label: 'ZANVROX Workforce',
              values: ['Dagdag', '50% diskuwento', 'Kasama', 'Pasadya'],
            },
            {
              label: 'Antas ng tulong',
              values: [
                'Elektronikong liham / 48h',
                'Pangunahing elektronikong liham / 24h',
                'Pangunahing elektronikong liham / 24h',
                'Tuwirang daan',
              ],
            },
            {
              label: 'Tulong sa paunang pagsasaayos',
              values: [
                'Sariling pagsasaayos',
                'Sariling pagsasaayos',
                'Sariling pagsasaayos',
                'Kasama',
              ],
            },
            { label: 'Kasamang gumagamit', values: ['3', '6', '10', 'Pasadya'] },
          ],
          notesTitle: 'Mga tala sa komersyo',
          notes: [
            'Hiwalay na dagdag ang pasahod para sa bawat plano ng ERP.',
            'Opsyonal at hiwalay ang presyo ng May-gabay na Pagpapatupad para sa mga pangkat na gusto ng mas nakabalangkas na paglulunsad.',
            'Ang Pasadya ang landas para sa saklaw sa maraming lokasyon, pagsasama, pagsusuri sa seguridad, at konteksto ng may-gabay na pagpapatupad.',
            'Dinisenyo ang komersyal na modelo para panatilihin ang pagiging malinaw habang sinusuportahan ang kontroladong daloy ng trabaho at kakayahang masuri habang lumalaki ang pangangailangan.',
          ],
          annualNote: 'Kasama sa taunang batayang mga plano ang isang buwang libre.',
        },
      },
      payrollAddon: {
        title: 'Dagdag na pasahod',
        summary:
          'Pinananatiling malinaw sa komersyal na usapan ang hiwalay na presyo ng pasahod habang pinapanatili ang suporta sa daloy ng pasahod sa Canada para sa mga pangkat na nangangailangan nito.',
        priceLabel: 'CAD 59 / buwan + CAD 6 / empleyado / buwan',
        annualPriceLabel: 'CAD 59 / buwan + CAD 6 / empleyado / buwan',
        monthlyNote:
          'Kasama ang pagpapatakbo ng pasahod sa Canada, suporta sa daloy ng pagpapadala ng bayad, pay stub, mga tala at pagluluwas para suportahan ang pagsusuri sa pagtatapos ng taon, at pagsasama sa pagkuwenta. Maaaring may buwanang pinakamababa habang nasa paglulunsad. Hindi kasama ang pasahod sa ZANVROX Workforce.',
        annualNote:
          'Pinananatili ng dagdag na pasahod ang parehong istruktura ng batayang bayad kasama ang presyo ayon sa empleyado kahit taunang pagsingil maliban kung may ibang nakatakdang ayos.',
        included: [
          'Pagpapatakbo ng pasahod sa Canada',
          'Suporta sa daloy ng pagpapadala ng bayad',
          'Mga pay stub',
          'Mga tala at pagluluwas para sa pagsusuri',
          'Pagsasama sa pagkuwenta',
        ],
        ctaLabel: 'Magtanong tungkol sa pasahod',
      },
      onboardingPackage: {
        title: 'May-gabay na Pagpapatupad',
        summary:
          'Opsyonal na isang-beses na may-gabay na pagsasaayos para sa mga pangkat na gusto ng pagkakaayon sa operasyon, tinutulungang paglulunsad, at mas nakabalangkas na simula ng pagpapatupad.',
        priceLabel: 'CAD 3,500 hanggang 7,500 isang beses',
        included: [
          'May-gabay na pagsasaayos ng sistema',
          'Pagsusuri ng pagkakaayon sa operasyon',
          'Pagsusuri ng talaan ng mga account',
          'Pagsasaayos ng buwis',
          'Gabay sa pagpasok ng datos',
          'Tinutulungang sesyon ng pagsasanay sa paglulunsad',
        ],
        note: 'Opsyonal na may-gabay na pagpapatupad para sa mga organisasyong gustong tulungan sa paglipat, pagsasaayos, at suporta sa paglulunsad. Maaari pa ring magsimula ang karaniwang mga plano sa sariling pagsasaayos kapag sapat ang mas magaan na paglulunsad.',
        ctaLabel: 'Humiling ng may-gabay na pagsasaayos',
      },
      supportTiers: {
        title: 'Istruktura ng tulong',
        subtitle:
          'Direktang ipinapakita ang tulong para masuri ng mga pangkat ang saklaw ng pagpapatakbo, inaasahang tugon, at paninindigan sa paglulunsad.',
        items: [
          {
            name: 'Pundasyong Pinansyal',
            body: 'Tulong sa elektronikong liham na may tugon sa loob ng 48h.',
          },
          {
            name: 'Negosyo',
            body: 'Pangunahing tulong sa elektronikong liham na may tugon sa loob ng 24h.',
          },
          {
            name: 'Operasyon',
            body: 'Pangunahing tulong sa elektronikong liham na may tugon sa loob ng 24h, kasama ang Workforce para sa mga saklaw na lokasyon.',
          },
          {
            name: 'Pasadya',
            body: 'May-gabay na tulong sa paglulunsad, tuwirang daan ng suporta, at nakatakdang usapan sa pagpapatupad.',
          },
        ],
      },
      faq: {
        title: 'Mga tanong sa presyo',
        subtitle: 'Mga sagot para sa mga pangkat na gustong magsuri muna bago tumawag.',
        items: [
          {
            question: 'Kailangan ko ba ng pagpapakita bago magsimula?',
            answer:
              'Hindi. Ang nilalayong landas ay sariling pagsusuri muna: panoorin ang buod, suriin ang produkto, tingnan ang presyo, at gamitin ang kapaligiran ng pagsusuri sa browser bago humiling ng may-gabay na sesyon.',
          },
          {
            question: 'Kasama ba ang Workforce sa mga plano ng ERP?',
            answer:
              'Kasama ang ZANVROX Workforce sa Operasyon para sa mga empleyado at lokasyong saklaw ng subscription na iyon sa ERP. Hindi kasama ang Workforce sa Negosyo ngunit karapat-dapat ito sa 50% diskuwento sa isang karapat-dapat na hiwalay na plano ng Workforce. Hindi kasama ang Workforce sa Pundasyong Pinansyal.',
          },
          {
            question: 'Maaari ko bang bilhin ang Workforce nang walang ERP?',
            answer:
              'Oo. Magagamit ang ZANVROX Workforce bilang hiwalay na plano, may presyong bawat lokasyon, nang walang kinakailangang bumili o umakyat sa anumang plano ng ERP.',
          },
          {
            question: 'Kasama ba ang pasahod sa batayang mga plano ng ERP o sa Workforce?',
            answer:
              'Hindi. Ibinebenta ang pasahod bilang hiwalay na dagdag na may buwanang batayang bayad kasama ang presyo kada empleyado. Hindi ito kasama sa ZANVROX Workforce.',
          },
          {
            question: 'Kailangan ba ang May-gabay na Pagpapatupad?',
            answer:
              'Hindi. Opsyonal ito. Puwedeng magsimula ang Pundasyong Pinansyal, Negosyo, at Operasyon sa sariling pagsasaayos, habang magagamit ang May-gabay na Pagpapatupad para sa mga pangkat na gusto ng mas nakabalangkas na paglulunsad.',
          },
          {
            question: 'Anong tulong ang kasama sa bawat plano?',
            answer:
              'Kasama sa Pundasyong Pinansyal ang tulong sa elektronikong liham sa loob ng 48h, sa Negosyo at Operasyon ang pangunahing tulong sa elektronikong liham sa loob ng 24h, at sa Pasadya ang may-gabay na usapan sa paglulunsad kasama ang tuwirang daan ng suporta.',
          },
        ],
      },
      ctaPrimary: {
        label: 'Buksan ang kapaligiran ng pagsusuri',
        path: '/resources#demo-environment',
      },
      ctaSecondary: { label: 'Makipag-ugnayan para sa pasadyang paglulunsad', path: '/contact' },
    },
    workforce: {
      heroKicker: 'ZANVROX WORKFORCE',
      heroTitle: 'Patakbuhin ang bawat shift nang mas kaunti ang gulo.',
      heroSubtitle:
        'Pagtala ng oras ng pagpasok at paglabas, iskedyul, mga gawain, at listahan ng oras para sa mga tauhan sa harapan — lahat konektado sa iisang simpleng app para sa lugar-trabaho.',
      heroPrimaryCta: { label: 'Magsimula sa Workforce', path: '/workforce/pricing' },
      heroSecondaryCta: {
        label: 'Sumali sa Beta ng Restawran sa Ontario',
        path: '/workforce/beta',
      },
      heroPreview: {
        title: 'Paunang tanaw ng shift',
        type: 'workforce',
        caption: 'Ginawa para sa mga tauhan sa harapan',
        callouts: [
          { status: 'ready', text: 'Pagpasok / paglabas' },
          { status: 'ready', text: 'Iskedyul at listahan ng oras' },
        ],
      },
      existingCustomer: {
        title: 'Gumagamit ka na ba ng ZANVROX ERP?',
        body: 'Kasama ang Workforce sa mga karapat-dapat na plano ng ERP.',
        cta: {
          label: 'Tingnan ang mga plano ng ERP na may kasamang Workforce',
          path: '/erp/pricing',
        },
      },
      sections: {
        eyebrow: 'Ano ang saklaw ng Workforce',
        title: 'Lahat ng kailangan ng isang shift, konektado',
        subtitle:
          'Sinasaklaw ng ZANVROX Workforce ang mga bahagi ng shift na karaniwang nasa spreadsheet, papel na listahan ng oras, at group chat.',
        items: [
          {
            eyebrow: 'Pagpasok at paglabas',
            title:
              'Nagtatala ang mga empleyado ng pagpasok at paglabas mula sa kanilang telepono na may pagpapatunay batay sa lokasyon.',
            body: 'Nakatali ang mga pangyayari ng pagtala sa mga pinahintulutang sandali ng trabaho, hindi patuloy na pagsubaybay sa isang tao.',
            bullets: [
              'Magtala ng pagpasok at paglabas mula sa telepono sa loob ng segundo',
              'Nasusubaybayan ang mga pahinga sa parehong daloy',
              'Pagpapatunay batay sa lokasyon sa oras ng pagpasok/paglabas, kung saan pinagana ang geofencing para sa isang lokasyon',
              'Matatag kahit walang koneksyon para makapagsimula ang shift kahit mahina ang signal',
            ],
          },
          {
            eyebrow: 'Iskedyul at shift',
            title: 'Mga iskedyul na makikita ng buong pangkat, mula sa anumang telepono.',
            body: 'Naglalathala ang mga tagapamahala ng iskedyul; nakikita ng mga empleyado ang kanilang mga shift sa iisang lugar.',
            bullets: [
              'Mga iskedyul',
              'Mga paparating na shift',
              'Mga bukas na shift, kung pinagana',
              'Mga pagbabago sa shift at kahilingan sa shift, kung pinagana',
            ],
          },
          {
            eyebrow: 'Listahan ng oras',
            title: 'Awtomatikong nagiging listahan ng oras ang mga oras na nagtrabaho.',
            body: 'Nagiging listahan ng oras ang mga pangyayari ng pagtala na maaaring suriin ng mga tagapamahala.',
            bullets: [
              'Mga oras na nagtrabaho',
              'Listahan ng oras ng empleyado',
              'Mga pagwawasto',
              'Pagsusuri at pag-apruba ng tagapamahala, kung pinagana',
            ],
          },
          {
            eyebrow: 'Mga gawain at checklist',
            title: 'Araw-araw na gawain at checklist, ginagawa mula sa sahig.',
            body: 'Nagiging masusubaybayang checklist ang mga gawi sa pagbubukas at pagsasara sa halip na pag-asa sa memorya.',
            bullets: [
              'Araw-araw na gawain',
              'Mga gawain sa pagbubukas',
              'Mga gawain sa pagsasara',
              'Mga checklist sa pagpapatakbo',
              'Mga komento at ebidensya, kung pinagana',
            ],
          },
          {
            eyebrow: 'Operasyon ng pangkat',
            title: 'Panatilihing magkatugma ang pangkat sa pagitan ng mga shift.',
            body: 'Pinagsasaluhang konteksto para sa pangkat nang walang hiwalay na kasangkapan sa pagmemensahe.',
            bullets: [
              'Mga anunsyo',
              'Mga tala sa shift',
              'Paglipat ng tungkulin',
              'Mga kahilingan',
              'Komunikasyon ng pangkat',
            ],
          },
          {
            eyebrow: 'Kontrol ng tagapamahala',
            title:
              'Iisang lugar para makita ng mga tagapamahala kung paano umuusad ang isang shift.',
            body: 'Pangangasiwa para sa mga taong nagpapatakbo ng araw-araw na operasyon.',
            bullets: [
              'Pagsusuri ng listahan ng oras',
              'Pamamahala ng iskedyul',
              'Mga gawain',
              'Mga anomalya',
              'Mga pangyayari ng pagtala batay sa lokasyon',
              'Pangangasiwa sa pangkat',
            ],
          },
        ],
      },
      industries: {
        title: 'Ginawa para sa mga pangkat na nasa harapan at batay sa shift',
        subtitle: 'Hindi lang para sa mga restawran ginawa ang ZANVROX Workforce.',
        items: [
          'Mga Restawran',
          'Mga Kapehan',
          'Tingian',
          'Hospitalidad',
          'Mga Serbisyo',
          'Mga Bodega',
          'Mga negosyong may maraming lokasyon',
        ],
      },
      cta: {
        title: 'Magsimula sa Workforce',
        subtitle: 'Idagdag ang ERP kapag kailangan mo na.',
        primary: { label: 'Magsimula sa Workforce', path: '/workforce/pricing' },
        secondary: { label: 'Workforce para sa mga Restawran', path: '/workforce/restaurants' },
      },
    },
    workforceRestaurants: {
      heroKicker: 'ZANVROX WORKFORCE PARA SA MGA RESTAWRAN',
      heroTitle: 'Ginawa para sa katotohanan ng mga shift sa restawran.',
      heroSubtitle:
        'Pagtala ng oras ng pagpasok, iskedyul, listahan ng oras, at araw-araw na gawain nang walang spreadsheet, papel na listahan ng oras, o magkakahiwalay na kasangkapan.',
      heroPrimaryCta: { label: 'Mag-apply para sa libreng beta', path: '/workforce/beta' },
      heroSecondaryCta: { label: 'Tingnan ang presyo ng Workforce', path: '/workforce/pricing' },
      heroPreview: {
        title: 'Paunang tanaw ng shift',
        type: 'workforce',
        caption: 'Ginawa para sa mga pangkat sa restawran',
        callouts: [
          { status: 'ready', text: 'Pagpasok / paglabas' },
          { status: 'ready', text: 'Araw-araw na gawain at checklist' },
        ],
      },
      timeline: {
        eyebrow: 'Isang shift sa restawran, mula simula hanggang dulo',
        title: 'Bago, habang, at pagkatapos ng bawat shift',
        subtitle:
          'Sinusundan ng parehong app ang shift mula sa iskedyul hanggang sa listahan ng oras.',
        stages: [
          {
            name: 'Bago ang shift',
            items: ['Iskedyul', 'Mga bukas na shift', 'Pagkakakita ng empleyado'],
          },
          {
            name: 'Habang nasa shift',
            items: [
              'Pagtala ng pagpasok batay sa lokasyon',
              'Mga pahinga',
              'Mga gawain',
              'Mga checklist',
              'Mga tala sa shift',
            ],
          },
          {
            name: 'Pagkatapos ng shift',
            items: [
              'Pagtala ng paglabas',
              'Mga oras na nagtrabaho',
              'Listahan ng oras',
              'Pagsusuri ng tagapamahala',
            ],
          },
          {
            name: 'Tagapamahala',
            items: [
              'Sino ang nagtatrabaho',
              'Mga oras na nagtrabaho',
              'Mga natitirang gawain',
              'Mga pagwawasto',
              'Pag-apruba ng listahan ng oras',
            ],
          },
        ],
      },
      crossSell: {
        title: 'Kailangan ng higit pa sa pamamahala ng Workforce?',
        body: 'Ikonekta ang Workforce sa kumpletong ZANVROX ERP para sa pananalapi, imbentaryo, pagbili, at operasyon ng negosyo.',
        cta: { label: 'Suriin ang ZANVROX ERP', path: '/erp' },
      },
      cta: {
        title: 'Dalhin ang Workforce sa iyong restawran',
        subtitle:
          'Mag-apply para sa libreng Beta ng Restawran sa Ontario, o magsimula sa Workforce ngayon.',
        primary: { label: 'Mag-apply para sa libreng beta', path: '/workforce/beta' },
        secondary: { label: 'Tingnan ang presyo ng Workforce', path: '/workforce/pricing' },
      },
    },
    workforceBeta: {
      heroKicker: 'BETA NG RESTAWRAN SA ONTARIO',
      heroTitle:
        'Subukan ang ZANVROX Workforce kasama ang tunay mong pangkat bago ang aming pampublikong paglulunsad.',
      heroSubtitle:
        'Inaanyayahan namin ang limitadong grupo ng mga restawran sa Ontario na subukan ang ZANVROX Workforce sa totoong mga shift.',
      badges: [
        '14 na araw na beta',
        'Walang obligasyong bumili',
        '6 buwang libre pagkatapos ng paglulunsad',
      ],
      intro: {
        title: 'Paano gumagana ang beta',
        paragraphs: [
          'Inaanyayahan namin ang limitadong grupo ng mga restawran sa Ontario na subukan ang ZANVROX Workforce sa totoong mga shift.',
          'Gamitin ang app kasama ang isang tagapamahala at mga empleyado, sabihin sa amin kung ano ang gumagana at kung ano ang kailangang pagbutihin, at tulungan kaming maghanda para sa pampublikong paglulunsad.',
          'Ang mga restawrang makakumpleto sa beta ay makakatanggap ng anim na buwan ng ZANVROX Workforce nang libre pagkatapos ng paglulunsad.',
        ],
      },
      terms: {
        title: 'Mga tuntunin ng beta',
        subtitle:
          'Malinaw na sinasaad ang mga komersyal na tuntunin para sa Beta ng Restawran sa Ontario.',
        items: [
          '14 na araw na panahon ng beta',
          'Walang bayad habang nasa beta',
          'Walang obligasyong bumili',
          'Ang mga restawrang makakumpleto sa beta ay makakatanggap ng 6 buwan ng ZANVROX Workforce nang libre pagkatapos ng pampublikong paglulunsad',
          'Pagkatapos ng 6 libreng buwan, pipili ka ng plano ng Workforce',
          'Walang awtomatikong pagpapanibago o singil mula sa beta nang wala ang iyong pahintulot',
        ],
      },
      form: {
        title: 'Mag-apply para sa beta',
        helper:
          'Sabihin sa amin ang tungkol sa iyong restawran. Susuriin namin ang iyong aplikasyon at susundan namin ito sa elektronikong liham.',
        fields: {
          restaurantName: 'Pangalan ng restawran',
          contactName: 'Pangalan ng taong maaaring lapitan',
          email: 'Elektronikong liham ng negosyo',
          city: 'Lungsod',
          employeeCount: 'Bilang ng empleyado',
          locationCount: 'Bilang ng lokasyon',
          currentMethod: 'Kasalukuyang paraan ng pagsubaybay sa oras',
          participantCount: 'Ilang empleyado ang maaaring makilahok?',
          message: 'Opsyonal na mensahe',
          consent: 'Sumasang-ayon akong makontak ng ZANVROX tungkol sa beta ng Workforce.',
        },
        placeholders: {
          restaurantName: 'hal. Maple Street Kitchen',
          contactName: 'Ang buo mong pangalan',
          email: 'ikaw@iyongrestawran.com',
          city: 'hal. Toronto',
          employeeCount: 'hal. 12',
          locationCount: 'hal. 1',
          currentMethod: 'hal. Papel na listahan ng oras, spreadsheet, built-in sa POS',
          participantCount: 'hal. 5',
          message: 'May iba pa bang dapat naming malaman?',
        },
        errors: {
          restaurantName: 'Ilagay ang pangalan ng iyong restawran (2-120 na character).',
          contactName: 'Ilagay ang pangalan ng taong maaaring lapitan (2-120 na character).',
          email: 'Maglagay ng wastong elektronikong liham ng negosyo.',
          city: 'Ilagay ang iyong lungsod (2-120 na character).',
          employeeCount: 'Ilagay ang wastong bilang ng empleyado (1-10000).',
          locationCount: 'Ilagay ang wastong bilang ng lokasyon (1-1000).',
          currentMethod: 'Sabihin sa amin ang kasalukuyan mong paraan ng pagsubaybay sa oras.',
          participantCount: 'Ilagay ang wastong bilang ng empleyadong lalahok.',
          participantCountExceedsEmployees:
            'Hindi maaaring lumampas sa bilang ng empleyado ang bilang ng lalahok.',
          message: 'Panatilihing mas maikli sa 2000 character ang mensahe.',
          consent: 'Kailangan ang pahintulot para mag-apply sa beta.',
          website: 'Na-trigger ang proteksyon laban sa spam.',
          startedAt: 'Maghintay sandali bago magsumite.',
        },
        consentPrivacyLabel: 'Patakaran sa Pagkapribado',
        consentPrivacyPath: '/legal/privacy',
        cta: 'Mag-apply para sa beta',
        submittingCta: 'Isinusumite...',
        confirmation:
          'Salamat. Susuriin namin ang iyong aplikasyon at makikipag-ugnayan kami sa iyo may kasamang pribadong tagubilin sa pagsubok kung mapili ang iyong restawran.',
        submitError: 'Hindi namin naisumite ang iyong aplikasyon. Pakisubukang muli.',
      },
    },
    resources: {
      ...base.pages.resources,
      heroTitle:
        'Mga sanggunian para sa pagsusuri ng produkto, pagsusuri sa seguridad, at pagpaplano ng paglulunsad.',
      heroSubtitle:
        'Gamitin ang mga pampublikong materyal na ito para suriin ang tugma ng produkto, paninindigan sa seguridad, at mga pagpipilian sa pagsusuri bago humiling ng mas malalim na usapan.',
      sections: [
        {
          title: 'Buod ng produkto at mga sanggunian sa pagsusuri',
          description:
            'Suriin ang buod ng produkto, saklaw ng daloy ng trabaho, at paraan ng paunang pagsasaayos bago maglaan ng mas malalim na oras sa pagsusuri.',
          cta: 'Suriin ang produkto',
          path: '/erp',
        },
        {
          title: 'Buod ng seguridad',
          description:
            'Suriin ang paghihiwalay ng kapaligiran, kontrol sa pagpasok, mga subprocessor, at kasalukuyang limitasyon sa seguridad sa iisang pampublikong buod.',
          cta: 'Suriin ang seguridad',
          path: '/security',
        },
        {
          title: 'Kapaligiran ng pagsusuri at may-gabay na pagsusuri ng produkto',
          description:
            'Magsimula sa pinagsasaluhang kapaligiran ng pagsusuri para sa paunang pagsusuri, saka makipag-ugnayan sa pangkat kung kailangan mo ng mas nakabalangkas na usapan sa produkto.',
          cta: 'Buksan ang kapaligiran ng pagsusuri',
          path: '/resources#demo-environment',
        },
        {
          title: 'Ugnayan at karagdagang dokumentasyon',
          description:
            'Gamitin ang landas ng ugnayan para sa mga tanong sa seguridad o pagsunod, kahilingan sa may-gabay na pagsusuri, o karagdagang detalye sa pagsusuri.',
          cta: 'Makipag-ugnayan sa pangkat',
          path: '/contact',
        },
      ],
      demoEnvironment: {
        title: 'Kapaligiran ng pagsusuri',
        subtitle:
          'Kapaligirang gumagana sa browser para sa paunang pagsusuri ng produkto gamit ang kathang-isip na halimbawang datos.',
        accessTitle: 'Pinagsasaluhang pagpasok sa pagsusuri',
        accessIntro:
          'May pinagsasaluhang pagpasok para sa maagang pagsusuri ng produkto. Maaaring makipag-ugnayan sa ZANVROX ang mga pangkat na nangangailangan ng mas malalim o mas nakabalangkas na pagsusuri.',
        emailLabel: 'Gumagamit ng kapaligiran',
        emailValue: 'Use your work email',
        passwordLabel: 'Kodigo sa pagpasok',
        passwordValue: 'Set during signup',
        note: 'Walang kailangang i-install. Para lang sa pagsusuri ang kapaligirang ito, gumagamit ng kathang-isip na halimbawang datos, at hindi para sa tunay na datos ng kumpanya, empleyado, kostumer, pasahod, o pananalapi.',
        guidance: [
          'Gamitin ang kapaligiran para sa paunang pagsusuri ng pag-navigate, saklaw ng daloy ng trabaho, at pangkalahatang tugma ng produkto.',
          'Ituring ang kapaligiran bilang pinagsasaluhang tanaw sa pagsusuri at hindi bilang produksyon, piloto, o kapaligiran para sa paglipat ng datos.',
          'Para sa mas malalim na pagsusuri, tanong sa seguridad/pagsunod, o karagdagang dokumentasyon, gamitin ang landas ng ugnayan pagkatapos ng paunang pagsusuri.',
        ],
        cta: { label: 'Buksan ang kapaligiran ng pagsusuri', path: '/resources#demo-environment' },
      },
      sitemap: {
        title: 'Mga materyal sa pagsusuri',
        subtitle:
          'Sadyang maikli ang pampublikong pook at nakatuon sa mga materyal na pinakamahalaga sa maagang pagsusuri.',
        items: [
          'Buod ng produkto at saklaw ng daloy ng trabaho',
          'Pampublikong presyo at paraan ng paunang pagsasaayos',
          'Buod ng seguridad at kasalukuyang paninindigan sa kontrol',
          'Kapaligiran ng pagsusuri na may kathang-isip na halimbawang datos',
          'Landas ng ugnayan para sa may-gabay na pagsusuri at kasunod na mga tanong',
          'Mga tuntuning legal at impormasyon sa pagkapribado',
        ],
      },
      design: {
        title: 'Paano gamitin ang mga sangguniang ito',
        subtitle:
          'Isang simpleng landas ng pagsusuri para sa mga pangkat na gustong suriin muna ang tugma ng produkto at isali lang ang pangkat kapag kailangan na ng mas maraming detalye.',
        directionTitle: 'Paunang pagsusuri ng produkto',
        componentsTitle: 'Pagsusuri sa seguridad at pagsunod',
        statesTitle: 'Kailan makikipag-ugnayan sa pangkat',
        direction: [
          'Magsimula sa Produkto, Presyo, at Mga Sanggunian para maunawaan ang saklaw, paninindigan sa paunang pagsasaayos, at tugmang pangkomersyo.',
          'Gamitin ang kapaligiran ng pagsusuri para sa maagang aktuwal na pagsusuri gamit lamang ang kathang-isip na datos.',
          'Ituring ang mga pampublikong materyal bilang unang patong ng pagsusuri bago humiling ng mas malalim na usapan.',
        ],
        components: [
          'Gamitin ang Buod ng Seguridad para sa paghihiwalay ng kapaligiran, kontrol sa pagpasok, mga subprocessor, at kasalukuyang limitasyon.',
          'Gamitin ang landas ng ugnayan para sa mga tanong sa seguridad/pagsunod o para humiling ng karagdagang dokumentasyon.',
          'Panatilihing nakaangkla ang mga tanong sa pagsusuri sa kasalukuyang inilathalang saklaw at pahayag.',
        ],
        states: [
          'Humiling ng may-gabay na pagsusuri ng produkto kapag may konkretong tanong ang iyong pangkat tungkol sa daloy ng trabaho o paglulunsad.',
          'Makipag-ugnayan sa pangkat kung kailangan mo ng mas maraming detalye kaysa sa nasa pampublikong materyal sa pagsusuri.',
          'Gamitin ang kasalukuyang landas ng ugnayan para humiling ng buod ng seguridad at kasunod na tanong sa seguridad/pagsunod.',
        ],
      },
    },
    about: {
      ...base.pages.about,
      heroKicker: 'Tungkol sa ZANVROX',
      heroTitle:
        'Praktikal na ERP na nakapuwesto para sa kapani-paniwalang paglulunsad, hindi para sa palabas ng malalaking organisasyon.',
      heroSubtitle:
        'Inilalahad ang ZANVROX bilang modernong ERP para sa maliliit at katamtamang negosyo sa Canada na gusto ng mas mahigpit na kontrol sa operasyon, mas kaunting magkakahiwalay na sistema, at mas malinaw na landas ng tulong.',
      heroPrimaryCta: { label: 'Suriin ang produkto', path: '/erp' },
      heroSecondaryCta: { label: 'Makipag-ugnayan sa pangkat', path: '/contact' },
      heroPreview: {
        ...base.pages.about.heroPreview,
        title: 'Maikling tanaw sa pagpoposisyon',
        caption: 'Kontrol sa operasyon laban sa pagkalat ng software',
        callouts: [
          { status: 'ready', text: 'Malinaw na paninindigan sa tulong' },
          { status: 'ready', text: 'Landas ng pagsusuring pinangungunahan ng produkto' },
        ],
      },
      principles: {
        title: 'Tatlong prinsipyong nasa likod ng pook',
        subtitle:
          'Inayos ang pampublikong pagpoposisyon para sa realidad ng pagpapatakbong pinamumunuan ng tagapagtatag nang hindi ibinababa ang pamantayan ng produkto.',
        items: [
          {
            title: 'Kalinawan',
            body: 'Sabihin nang diretso kung ano ang ginagawa ng produkto, ano ang sinusuportahan nito, at saan kailangan pa rin ang pagsusuri.',
          },
          {
            title: 'Kontrol',
            body: 'Tumutok sa kakayahang masuri, pamamahala, at tanaw sa operasyon sa halip na pinalobong ingay ng SaaS.',
          },
          {
            title: 'Praktikal na paglulunsad',
            body: 'Gawing posible ang sariling pagsasaayos habang may opsyonal na tulong ng eksperto kapag tumataas ang kumplikasyon.',
          },
        ],
      },
      operatingModel: [
        {
          title: 'Ginawa para sa maliliit at katamtamang negosyo sa Canada',
          subtitle:
            'Target ng pampublikong pook-sapot ang mga kumpanyang nangangailangan ng kapani-paniwalang kontrol sa ERP nang walang gastos sa pagkonsulta para sa malalaking organisasyon sa unang araw.',
          items: [
            'Pinakamainam sa humigit-kumulang 10-50 empleyado',
            'Malakas ang halaga kapag hati sa napakaraming kasangkapan ang pananalapi at operasyon',
            'Malinaw na landas mula sa pundasyong pinansyal patungo sa operasyon at saklaw ng dagdag na pasahod',
          ],
        },
        {
          title: 'May disiplinang pangkomersyo',
          subtitle:
            'Dinisenyo ang pook para bawasan ang mababang kalidad na pulong at gawing malinaw ang inaasahan bago ang unang usapan.',
          items: [
            'Opsyonal na pagpapakita sa halip na landas na nagsisimula agad sa pagpapakita',
            'Pampublikong presyo na may antas ng tulong at inaasahan sa paunang pagsasaayos',
            'Mga pahayag sa seguridad at pamamahala na nakaayon sa tunay na paninindigan ng produkto',
          ],
        },
      ],
      cta: {
        title: 'Tingnan kung bagay ang paraan ng pagpapatakbo sa iyong pangkat',
        subtitle:
          'Gamitin ang Produkto, Presyo, at Mga Sanggunian para suriin ang tugma bago makipag-ugnayan.',
        primary: { label: 'Tingnan ang presyo', path: '/pricing' },
        secondary: { label: 'Pumunta sa ugnayan', path: '/contact' },
      },
    },
    contact: {
      ...base.pages.contact,
      heroTitle:
        'Makipag-ugnayan lang sa pangkat kapag kailangan mo ng tulong sa totoong tanong sa pagsusuri.',
      heroSubtitle:
        'Ang nilalayong daloy ay buod ng produkto, pagsusuri ng produkto, pagsusuri ng presyo, pagsusuri sa browser, at pagkatapos ay opsyonal na ugnayan o kahilingan sa may-gabay na pagpapakita.',
      conversion: {
        title: 'Inirerekomendang daloy ng pagsusuri',
        subtitle:
          'Binabawasan nito ang hindi kailangang mga pulong at nagbibigay ng mas magandang konteksto kapag may nakipag-ugnayan na.',
        cards: [
          {
            title: 'Panoorin ang buod ng produkto',
            body: 'Magsimula sa video para maunawaan ang paraan ng pagpapatakbo at paninindigan ng produkto.',
          },
          {
            title: 'Suriin ang mga kakayahan',
            body: 'Gamitin ang mga pahina ng Produkto, Presyo, at Seguridad para suriin ang salansan nang walang tawag.',
          },
          {
            title: 'Buksan ang kapaligiran ng pagsusuri',
            body: 'Patunayan ang UI gamit ang kathang-isip na datos bago humiling ng may-gabay na sesyon.',
          },
          {
            title: 'Humingi ng tulong kung kailangan',
            body: 'Gamitin ang mga form sa ibaba para sa opsyonal na pagpapakita o nakatutok na tanong sa produkto.',
          },
        ],
      },
      supportBlock: {
        title: 'Inaasahang tulong',
        subtitle: 'Lahat ng daloy ng ugnayan sa pook-sapot ay dumadaan sa support@zanvrox.com.',
        items: [
          'Pundasyong Pinansyal: tulong sa elektronikong liham na may tugon sa 48h',
          'Negosyo at Operasyon: pangunahing tulong sa elektronikong liham na may tugon sa 24h',
          'Pasadya: tuwirang daan ng suporta kasama ang tulong sa paunang pagsasaayos',
        ],
      },
      pricingContext: {
        title: 'Napiling konteksto ng presyo',
        subtitle:
          'Nakadikit ang konteksto ng presyo sa iyong kahilingan para manatiling nakaangkla ang kasunod na sagot sa napili mong pagsasaayos.',
        labels: {
          plan: 'Plano',
          billing: 'Pagsingil',
          payroll: 'Pasahod',
          offer: 'Alok',
          notSelected: 'Hindi napili',
          payrollInterested: 'Napili ang dagdag na pasahod',
          payrollNotSelected: 'Walang napiling dagdag na pasahod',
        },
      },
      demoForm: {
        title: 'Humiling ng may-gabay na pagpapakita',
        helper:
          'Gamitin ito kapag nasuri na ng iyong pangkat ang produkto at gusto ninyo ng may-gabay na pagpapakita.',
        confirmation:
          'Matagumpay na naipadala ang kahilingan mo para sa may-gabay na pagpapakita. Sasagot kami sa elektronikong liham.',
        submittingCta: 'Ipinapadala...',
        submitError: 'Hindi namin naisumite ang kahilingan mo. Pakisubukang muli.',
        messageHint:
          'Opsyonal. Gamitin ito para ilarawan ang kasalukuyan mong salansan, panahon ng paglulunsad, o tanong sa pasahod.',
        fields: {
          name: 'Pangalan*',
          company: 'Kumpanya*',
          email: 'Elektronikong liham sa trabaho*',
          companySize: 'Laki ng kumpanya*',
          interestArea: 'Larangan ng interes*',
          message: 'Opsyonal na mensahe',
          consent:
            'Sumasang-ayon akong makontak ng ZANVROX tungkol sa kahilingang pangnegosyo na ito. Gagamitin lang namin ang datos para tumugon sa tanong.',
        },
        placeholders: {
          email: 'name@company.com',
          companySize: 'Piliin ang laki ng kumpanya',
          interestArea: 'Piliin ang larangan ng interes',
          message: 'Ano ang gusto mong patunayan sa may-gabay na sesyon?',
        },
        options: {
          companySizes: ['1-10 empleyado', '10-50 empleyado', '50-100 empleyado', '100+ empleyado'],
          interestAreas: [
            'Pundasyong Pinansyal',
            'Negosyo',
            'Operasyon',
            'Workforce',
            'Dagdag na pasahod',
            'May-gabay na Pagpapatupad',
            'Paglulunsad para sa malaking organisasyon',
            'Pagsasama / API',
          ],
        },
        errors: {
          name: 'Ilagay ang pangalan mo.',
          company: 'Ilagay ang pangalan ng kumpanya mo.',
          email: 'Maglagay ng wastong elektronikong liham sa trabaho.',
          companySize: 'Piliin ang laki ng kumpanya.',
          interestArea: 'Piliin ang larangan ng interes.',
          message: 'Panatilihing mas maikli sa 2000 character ang mensahe.',
          consent: 'Kailangan ang pahintulot para maisumite ang form na ito.',
          startedAt: 'Maghintay sandali bago magsumite.',
          website: 'Na-trigger ang proteksyon laban sa spam.',
        },
        cta: 'Humiling ng may-gabay na pagpapakita',
      },
      briefForm: {
        title: 'Magtanong tungkol sa produkto',
        helper:
          'Gamitin ito para sa mga tanong tungkol sa tugma ng produkto, tulong, paunang pagsasaayos, pagpapatupad, o saklaw ng pasahod.',
        confirmation:
          'Matagumpay na naipadala ang mensahe mo. Sasagot kami sa elektronikong liham.',
        submittingCta: 'Ipinapadala...',
        submitError: 'Hindi namin naisumite ang kahilingan mo. Pakisubukang muli.',
        messageHint:
          'Opsyonal. Gamitin ito kung gusto mong ilarawan ang daloy ng trabaho, pangangailangan sa tulong, o tanong sa pagpapatupad.',
        fields: {
          name: 'Pangalan*',
          company: 'Kumpanya*',
          email: 'Elektronikong liham sa trabaho*',
          companySize: 'Laki ng kumpanya*',
          interestArea: 'Larangan ng interes*',
          message: 'Opsyonal na mensahe',
          consent:
            'Sumasang-ayon akong makatanggap ng hiniling na kasunod na sagot mula sa ZANVROX.',
        },
        placeholders: {
          email: 'name@company.com',
          companySize: 'Piliin ang laki ng kumpanya',
          interestArea: 'Piliin ang larangan ng interes',
          message:
            'Ano ang gusto mong malinawan bago gumastos ng mas maraming oras sa pagsusuri ang iyong pangkat?',
        },
        options: {
          companySizes: ['1-10 empleyado', '10-50 empleyado', '50-100 empleyado', '100+ empleyado'],
          interestAreas: [
            'Tugma ng produkto',
            'Presyo at tulong',
            'Pagpasok sa kapaligiran ng pagsubok',
            'Pagpasok ng datos',
            'Dagdag na pasahod',
            'May-gabay na Pagpapatupad',
          ],
        },
        errors: {
          name: 'Ilagay ang pangalan mo.',
          company: 'Ilagay ang pangalan ng kumpanya mo.',
          email: 'Maglagay ng wastong elektronikong liham sa trabaho.',
          companySize: 'Piliin ang laki ng kumpanya.',
          interestArea: 'Piliin ang larangan ng interes.',
          message: 'Panatilihing mas maikli sa 2000 character ang mensahe.',
          consent: 'Kailangan ang pahintulot para maisumite ang form na ito.',
          startedAt: 'Maghintay sandali bago magsumite.',
          website: 'Na-trigger ang proteksyon laban sa spam.',
        },
        cta: 'Ipadala ang tanong',
      },
    },
    legal: {
      privacy: {
        title: 'Patakaran sa Pagkapribado',
        updated: 'Agosto 7, 2026',
        updatedLabel: 'Huling in-update',
        paragraphs: [
          'Kinokolekta ng ZANVROX ang impormasyong pang-ugnayan sa negosyo na ipinapasa sa pook-sapot na ito para sa pagsusuri ng produkto, pagtatakda ng pagpapakita, aplikasyon sa beta, at kahilingan sa dokumentasyon.',
          'Pinoproseso namin ang ipinadalang datos para lamang sa benta at paunang pagsusuri ng produkto.',
          'Ginagamit ng ZANVROX Workforce ang lokasyon ng device lamang sa sandaling magtala ang isang empleyado ng pagpasok o paglabas, at kung saan lang pinagana ng tagapag-empleyo ang pagpapatunay batay sa lokasyon para sa isang lugar ng trabaho. Nakatali ang lokasyon sa partikular na pangyayaring iyon ng pagtala, hindi ito kinokolekta nang patuloy o ginagamit para subaybayan ang isang empleyado sa labas ng pinahintulutang mga sandali ng pagpasok at paglabas.',
          'Ginagamit ang datos ng lokasyon at pangyayari ng pagtala ng Workforce para patunayan na naganap ang pagpasok o paglabas sa pinahintulutang lugar ng trabaho, at para suportahan ang kasunod na listahan ng oras. Nakikita ito ng empleyado at ng mga pinahintulutang tagapamahala ng tagapag-empleyong iyon.',
          'Maaaring tumangging magbigay ng pahintulot sa lokasyon ang mga empleyado; depende sa pagsasaayos ng tagapag-empleyo, maaaring hindi mapatunayan bilang batay-sa-lokasyon ang isang pangyayari ng pagtala dahil dito, at dapat magbigay ang tagapag-empleyo ng alternatibong paraan.',
          'Iniingatan ang mga talaan ng Workforce at iba pang talaang pang-operasyon hangga’t kailangan para suportahan ang pasahod, listahan ng oras, at mga kinakailangan sa pagtatala ng trabaho, at pinoprotektahan ang mga ito ng parehong kontrol sa pagpasok at seguridad na inilarawan sa aming pahina ng Seguridad.',
          'Maaari kang humiling ng pagtingin, pagwawasto, o pagbura ng ipinadalang datos sa pamamagitan ng support@zanvrox.com.',
        ],
      },
      terms: {
        title: 'Mga Tuntunin ng Serbisyo',
        updated: 'Marso 5, 2026',
        updatedLabel: 'Huling in-update',
        paragraphs: [
          'Nagbibigay ang pook-sapot na ito ng impormasyon sa produkto, sanggunian para sa pagsusuri ng produkto, mga form ng pakikipag-ugnayan, at mga form ng aplikasyon para sa beta na programa ng ZANVROX ERP at ZANVROX Workforce.',
          'Pang-impormasyon lamang ang laman ng pook-sapot at hindi ito bumubuo ng nakabibigkis na pangako sa produkto.',
          'Pinal ang saklaw ng produkto at mga tuntuning pangkomersyo sa mga pinirmahang kasunduan.',
        ],
      },
      accountDeletion: {
        title: 'Humiling ng pagbura ng account',
        updated: 'Agosto 7, 2026',
        updatedLabel: 'Huling in-update',
        intro:
          'Burahin ang iyong account sa pagpasok bilang Empleyado, Tagapamahala, o ERP ng ZANVROX.',
        selfServiceTitle: 'Awtomatikong pagbura',
        selfServiceBody:
          'Ang pinakamabilis at pinakaligtas na paraan ay ang mag-log in, buksan ang Mga Pagsasaayos, at piliin ang Pagbura ng account. Papatunayan ng aplikasyon ang iyong pagkakakilanlan at maaari mong subaybayan o kanselahin ang isang nakabinbing kahilingan.',
        steps: [
          'Mag-log in sa iyong account sa ZANVROX.',
          'Buksan ang Mga Pagsasaayos.',
          'Piliin ang Pagbura ng account.',
          'Kumpirmahin ang iyong pagkakakilanlan at isumite ang kahilingan.',
        ],
        emailFallbackTitle: 'Kung hindi ka makapag-log in',
        emailFallbackBody:
          'Padalhan ng elektronikong liham ang support@zanvrox.com mula sa address na nakarehistro sa iyong account at gamitin ang "Kahilingan sa pagbura ng account" bilang paksa. Maaari kaming humingi ng karagdagang patunay ng pagkakakilanlan.',
        retentionTitle: 'Ano ang itinatago namin',
        retentionBody:
          'Binubura o ginagawang hindi nakikilala namin ang pagkakakilanlan sa pagpasok, personal na profile, mga subscription ng device, at impormasyong hindi na kailangang itago. Maaaring itago ang mga talaan ng pasahod, buwis, pagtatrabaho, pananalapi, pagsubaybay ng imbentaryo, seguridad, at pagsusuri sa loob ng legal na hinihinging panahon nang may limitadong pagpasok.',
        appLinkLabel: 'Buksan ang pahina ng pagbura ng account',
        appLinkPath: 'https://app.zanvrox.com/account-deletion',
      },
    },
    notFound: {
      title: 'Hindi nakita ang pahina',
      subtitle: 'Hindi tumutugma ang URL sa inilathalang istruktura ng pook ng ZANVROX.',
      cta: 'Pumunta sa simula',
    },
  },
  footer: {
    ...base.footer,
    companyDescription:
      'Pinagsamang ERP para sa maliliit at katamtamang negosyo sa Canada na nangangailangan ng pananalapi, operasyon, pagsunod, at pasahod sa iisang kontroladong salansan.',
    headquarters: 'Toronto, Ontario, Canada',
    sections: [
      {
        title: 'Mga Produkto',
        links: [
          { label: 'ERP', path: '/erp' },
          { label: 'Workforce', path: '/workforce' },
          { label: 'Workforce para sa mga Restawran', path: '/workforce/restaurants' },
          { label: 'Presyo', path: '/pricing' },
        ],
      },
      {
        title: 'Sanggunian',
        links: [
          { label: 'Sanggunian', path: '/resources' },
          { label: 'Seguridad', path: '/security' },
          { label: 'Pagkapribado', path: '/legal/privacy' },
          { label: 'Mga Tuntunin', path: '/legal/terms' },
          { label: 'Pagbura ng account', path: '/account-deletion' },
          { label: 'Ugnayan', path: '/contact' },
        ],
      },
    ],
    links: [
      { label: 'ERP', path: '/erp' },
      { label: 'Workforce', path: '/workforce' },
      { label: 'Presyo', path: '/pricing' },
      { label: 'Sanggunian', path: '/resources' },
      { label: 'Seguridad', path: '/security' },
      { label: 'Tungkol', path: '/about' },
      { label: 'Ugnayan', path: '/contact' },
      { label: 'Pagkapribado', path: '/legal/privacy' },
      { label: 'Mga Tuntunin', path: '/legal/terms' },
      { label: 'Pagbura ng account', path: '/account-deletion' },
    ],
    workforce: {
      sections: [
        {
          title: 'Workforce',
          links: [
            { label: 'Workforce', path: '/workforce' },
            { label: 'Presyo', path: '/workforce/pricing' },
            { label: 'Mga Restawran', path: '/workforce/restaurants' },
            { label: 'Beta', path: '/workforce/beta' },
            { label: 'Seguridad', path: '/security' },
          ],
        },
        {
          title: 'Suporta',
          links: [
            { label: 'Suporta', path: '/contact' },
            { label: 'Pagkapribado', path: '/legal/privacy' },
            { label: 'Mga Tuntunin', path: '/legal/terms' },
            { label: 'Pagbura ng account', path: '/account-deletion' },
          ],
        },
      ],
      erpLink: { label: 'ZANVROX ERP', path: '/erp' },
    },
  },
  seo: {
    home: {
      title: 'ZANVROX | ERP sa Canada para sa Pananalapi, Operasyon, at Kontrol',
      description:
        'Pinagsamang ERP para sa maliliit at katamtamang negosyo sa Canada na may pagkuwenta, pagsingil, imbentaryo, bodega, produksyon, pamamahala, daloy ng buwis, at dagdag na tulong sa pasahod.',
      path: '/',
    },
    product: {
      title: 'ZANVROX ERP | Plataporma ng Pananalapi, Operasyon, at Workforce',
      description:
        'Suriin ang pananalapi, pagsingil, gastos, pagbili, imbentaryo, operasyon, ulat, daloy ng pasahod, at ZANVROX Workforce sa loob ng salansan ng ZANVROX ERP.',
      path: '/erp',
    },
    workforce: {
      title: 'ZANVROX Workforce | Pagtala ng Oras, Iskedyul, at Gawain',
      description:
        'Magtala ng pagpasok at paglabas, pamahalaan ang iskedyul, subaybayan ang listahan ng oras, at ayusin ang araw-araw na gawain gamit ang ZANVROX Workforce.',
      path: '/workforce',
    },
    workforceRestaurants: {
      title: 'Pamamahala ng Workforce para sa Restawran | ZANVROX Workforce',
      description:
        'Pagtala ng pagpasok, iskedyul, listahan ng oras, at araw-araw na gawain ng pangkat para sa mga pangkat sa restawran.',
      path: '/workforce/restaurants',
    },
    workforceBeta: {
      title: 'Beta ng Restawran sa Ontario | ZANVROX Workforce',
      description:
        'Maaaring mag-apply ang mga restawran sa Ontario para subukan ang ZANVROX Workforce bago ang pampublikong paglulunsad.',
      path: '/workforce/beta',
    },
    security: {
      title: 'Seguridad | ZANVROX',
      description:
        'Suriin ang paghihiwalay ng kapaligiran, kontrol sa tungkulin, pag-apruba, pamamahala, at pananggalang sa arkitektura sa likod ng ZANVROX.',
      path: '/security',
    },
    pricing: {
      title: 'Presyo | ZANVROX',
      description:
        'Suriin ang pampublikong presyo sa CAD para sa ZANVROX Workforce (Panimula, Pangkat, Negosyo) at ZANVROX ERP (Pundasyong Pinansyal, Negosyo, Operasyon, Pasadya), ang dagdag na pasahod, at opsyonal na May-gabay na Pagpapatupad.',
      path: '/pricing',
    },
    resources: {
      title: 'Sanggunian | ZANVROX',
      description:
        'Gamitin ang mga sanggunian ng produkto, gabay sa kapaligiran ng pagsusuri, at materyal sa buod ng seguridad para sariling suriin ang ZANVROX.',
      path: '/resources',
    },
    about: {
      title: 'Tungkol | ZANVROX',
      description:
        'Alamin kung paano ipinoposisyon ng ZANVROX ang pananalapi, operasyon, pamamahala, at disiplina sa paglulunsad para sa maliliit at katamtamang negosyo sa Canada.',
      path: '/about',
    },
    contact: {
      title: 'Ugnayan | ZANVROX',
      description:
        'Humiling ng opsyonal na pagpapakita o magtanong ng nakatutok na tanong tungkol sa produkto, pasahod, paunang pagsasaayos, o pagpapatupad.',
      path: '/contact',
    },
    privacy: {
      title: 'Patakaran sa Pagkapribado | ZANVROX',
      description:
        'Patakaran sa pagkapribado para sa pook-sapot ng ZANVROX at kaugnay na pagproseso ng potensyal na kliyente.',
      path: '/legal/privacy',
    },
    terms: {
      title: 'Mga Tuntunin ng Serbisyo | ZANVROX',
      description:
        'Mga tuntunin ng serbisyo na namamahala sa paggamit ng pook-sapot at materyal ng ZANVROX.',
      path: '/legal/terms',
    },
    accountDeletion: {
      title: 'Pagbura ng Account | ZANVROX',
      description: 'Paano humiling ng pagbura ng account sa ZANVROX at kaugnay na datos.',
      path: '/account-deletion',
    },
  },
};

export default siteContentTl;
