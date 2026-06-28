const siteContentZh = {
  locale: 'zh',
  localeLabel: '中文',
  labels: {
    menu: '菜单',
    bookDemo: '引导式讲解',
    tryDemo: '打开工作区',
    getTechnicalBrief: '联系团队',
    reviewResources: '查看资源',
    language: '语言',
    requestQuote: '联系销售',
  },
  navItems: [
    { label: '首页', path: '/' },
    { label: '产品', path: '/product' },
    { label: '定价', path: '/pricing' },
    { label: '资源', path: '/resources' },
    { label: '安全', path: '/security' },
    { label: '关于', path: '/about' },
    { label: '联系', path: '/contact' },
  ],
  brand: {
    name: 'ZANVROX',
    tagline: '面向加拿大中小企业团队的一体化 ERP 控制',
    oneLiner: '将财务、运营、加拿大合规与薪资集中在同一套受控 ERP 体系中。',
  },
  pages: {
    home: {
      heroKicker: '面向加拿大财务、运营与可审计性的 ERP',
      heroTitle: '用一套受控 ERP 统一财务与运营，而不是依赖五个彼此割裂的工具。',
      heroSubtitle:
        'ZANVROX 帮助加拿大中小企业将会计、开票、采购、库存、生产、审批与合规集中到一起，无需沉重的实施项目。',
      heroPrimaryCta: { label: '查看产品概览', path: '/#product-overview' },
      heroSecondaryCta: { label: '打开评估工作区', path: '/resources#demo-environment' },
      heroPreview: {
        title: '税务与控制预览',
        caption: '直接呈现在 ERP 中',
        callouts: [
          { status: 'ready', text: 'GST/HST + PST/QST 报告' },
          { status: 'ready', text: '审计追踪与审批' },
        ],
      },
      video: {
        title: '结合真实流程场景的产品讲解',
        subtitle: '快速了解财务、运营、加拿大税务流程与薪资准备情况。',
        windowLabel: '产品视频',
        duration: '90 秒',
        overlayLabel: '观看产品讲解',
        fallbackLabel: '海报预览可用',
        hasRealVideo: true,
        chapters: [
          '会计与开票',
          '库存与仓储',
          '生产计划',
          '税务仪表板',
          '薪资工作台',
          '报表与审批',
        ],
        primaryCta: { label: '浏览产品', path: '/product' },
        secondaryCta: { label: '打开评估工作区', path: '/resources#demo-environment' },
      },
      trustSignals: [
        '在确有需要时，仍保留由提供商支持的官方流程。',
        '变更具备治理、审批与审计追踪。',
        '较小团队可先走自主配置路径，并可选择 Guided Implementation。',
        '加拿大合规定位保持克制，不做营销式夸大。',
      ],
      statusBadges: [
        { status: 'ready', text: '会计、开票、费用与报表' },
        { status: 'ready', text: '库存、仓储与 BOM 流程' },
        { status: 'ready', text: '加拿大税务流程支持' },
        { status: 'ready', text: 'Payroll add-on 与年终工作台' },
        { status: 'locked', text: '治理与可审计控制' },
        { status: 'ready', text: '自主配置 onboarding 路径' },
      ],
      evaluationPath: {
        eyebrow: '产品主导评估路径',
        title: '无需先预约会议也能完成评估',
        subtitle: '网站的目标是减少不必要的电话，让团队先自行判断是否匹配。',
        cards: [
          {
            title: '1. 观看概览',
            body: '先看产品视频，理解财务、运营、税务与薪资如何协同。',
          },
          {
            title: '2. 浏览产品',
            body: '查看功能分组、截图以及按模块和业务流程组织的治理控制。',
          },
          {
            title: '3. 打开评估工作区',
            body: '通过带有虚构数据的浏览器工作区验证导航、角色匹配与流程覆盖。',
          },
          {
            title: '4. 需要时再联系',
            body: '当团队已经形成明确的评估问题时，再使用可选联系表单或演示申请。',
          },
        ],
      },
      screenshots: {
        eyebrow: '界面与流程',
        title: '这些界面用于展示真实的运营覆盖',
        subtitle: '下方各区块可接入正式截图；若正式截图尚未就绪，则使用产品预览。',
        items: [
          {
            title: '加拿大税务仪表板',
            body: '从单一财务视图跟踪申报准备度、税类结构与结账控制。',
            previewType: 'reports',
            imageKey: 'taxDashboard',
            imageAlt: 'ZANVROX ERP 内的加拿大税务仪表板',
          },
          {
            title: '库存管理',
            body: '无需离开 ERP 即可查看库存位置、仓储流转和批次可见性。',
            previewType: 'inventory',
          },
          {
            title: '生产计划',
            body: '在一个界面中查看与 BOM 相连的生产工单、物料消耗与执行进度。',
            previewType: 'production',
          },
          {
            title: '财务报表',
            body: '无需拼接多个系统，即可从运营活动回到管理报表。',
            previewType: 'accounting',
          },
        ],
      },
      howItWorks: {
        eyebrow: '自主配置 onboarding',
        title: '通过六个引导步骤开始使用',
        subtitle: '产品的设计目标是让创业者主导的团队无需沉重 onboarding 项目也能迅速上手。',
        steps: [
          { icon: '1', title: '创建组织', bullets: ['启动工作区', '定义法人主体基础信息'] },
          { icon: '2', title: '选择国家', bullets: ['选择加拿大', '加载国家级默认配置'] },
          { icon: '3', title: '选择行业模板', bullets: ['从现成模型开始', '减少初始化摩擦'] },
          { icon: '4', title: '配置税务', bullets: ['设置税类', '确认省级逻辑与默认值'] },
          { icon: '5', title: '导入客户与供应商', bullets: ['导入主数据', '使用模板与校验'] },
          { icon: '6', title: '创建第一张发票', bullets: ['验证运营流程', '进入日常使用'] },
        ],
      },
      compliance: {
        eyebrow: '加拿大定位',
        title: '建立可信度，而不是制造噱头',
        subtitle: '网站会明确说明哪些是受控的、哪些是自动化的，以及哪些仍需人工复核。',
        bullets: [
          '加拿大税务流程以明确的申报定位与可审计性来呈现。',
          'Payroll 被明确定位为单独的 add-on，并清晰说明按司法辖区划分的范围与准备度。',
          '审批、治理与支持预期会直接写明，而不是隐藏在销售电话里。',
        ],
        coverageLabel: '当前商业定位',
        coverage: '最适合 10-50 名员工的加拿大中小企业团队',
        note: '在不适合宣称更强企业级承诺的场景下，仍保留由提供商支持的官方流程。',
        provinces: ['ON', 'QC', 'AB', 'BC', 'MB', 'SK', 'NS', 'NB'],
      },
      included: {
        eyebrow: '集成范围',
        title: '跨财务与运营的一体化体系',
        subtitle: '重点不是纸面上堆更多功能，而是在实际流程中减少割裂。',
        items: [
          '会计、开票、费用与财务报表',
          '采购、库存、仓储与基础生产',
          '审批、治理与运营审计追踪',
          '加拿大税务流程与 Payroll add-on 支持',
          '面向企业级范围的多公司与高级治理',
          '在受控定位下的 ERP intelligence 与 AI assistance',
        ],
      },
      executiveSnapshot: {
        badge: '运营模式',
        title: '先自助评估，再由人工协助',
        subtitle: '这是一个面向严肃 ERP 的产品主导网站，而不是逼所有潜在客户先打电话的宣传页。',
        metrics: [
          { label: '主要 ICP', value: '10-50', note: '加拿大中小企业员工规模' },
          { label: '支持方式', value: '以电子邮件为主', note: '按计划清晰定义响应时间' },
          { label: 'Onboarding 方式', value: '自主配置', note: '可选 Guided Implementation' },
        ],
      },
      positioning: {
        eyebrow: '团队为什么切换',
        title: '减少财务、运营与合规之间的系统割裂',
        subtitle: '价值主张在于控制力、可见性，以及更少的系统切换。',
        cards: [
          {
            role: '财务',
            headline: '用更少的离散系统完成结账。',
            points: [
              '会计、开票、费用与报表集中在一个系统。',
              '清晰的支持边界与期末控制。',
              '加拿大合规定位保持克制，不夸大自动化。',
            ],
          },
          {
            role: '运营',
            headline: '让库存、采购与生产保持一致。',
            points: [
              '库存与仓储流程与财务直接相连。',
              '无需额外中间件即可支持 BOM 与基础生产。',
              '在需要处提供运营复核信号与治理机制。',
            ],
          },
          {
            role: '管理层',
            headline: '获得更清晰的决策支持。',
            points: [
              '减少跨工具手工对账。',
              '在注册前就明确支持预期与 onboarding 范围。',
              '在消耗内部时间前先提升线索质量。',
            ],
          },
          {
            role: 'IT / Ops',
            headline: '以有纪律的范围推进采用。',
            points: [
              '为小团队提供清晰的实施顺序。',
              '变更受治理且流程可审计。',
              '营销层兼容静态站点并配有结构化元数据。',
            ],
          },
        ],
      },
      technical: {
        eyebrow: '支持与 onboarding 模型',
        title: '默认自助，需要时再引导',
        subtitle: '网站会提前设定预期，让小团队清楚注册之后会发生什么。',
        items: [
          'Finance Core 包含自主配置 onboarding 与 48 小时电子邮件支持。',
          'Operations 提供 24 小时优先电子邮件支持。',
          'Enterprise 包含 onboarding 协助与直接支持通道。',
        ],
      },
      supportModel: {
        title: '按计划定义支持预期',
        subtitle: '支持方式被直接写明，让评估过程更贴近实际。',
        tiers: [
          {
            name: 'Finance Core',
            body: '电子邮件支持，48 小时响应，并提供自主配置 onboarding 指引。',
          },
          { name: 'Operations', body: '优先级电子邮件支持，24 小时响应，并提供更强的运营指导。' },
          { name: 'Enterprise', body: '专属 onboarding、直接支持通道与范围化部署协助。' },
        ],
      },
      demoEnvironment: {
        title: '打开 ZANVROX 评估工作区',
        subtitle: '在申请引导式讲解前，先使用带有虚拟数据的浏览器工作区。',
        emailLabel: '演示用户',
        emailValue: 'Use your work email',
        passwordLabel: '密码',
        passwordValue: 'Set during signup',
        note: '仅供浏览器评估使用。该工作区与实施计划及生产预期保持分离。',
        cta: { label: '打开评估工作区', path: '/resources#demo-environment' },
      },
      faq: {
        eyebrow: '常见问题',
        title: '团队在投入时间之前最常问的问题',
        items: [
          {
            question: '我们可以不先预约演示就评估 ZANVROX 吗？',
            answer:
              '可以。推荐路径是先看概览、浏览产品、打开评估工作区，只有在团队确实需要帮助时再联系。',
          },
          {
            question: '基础计划是否包含 Payroll？',
            answer:
              '不包含。Payroll 作为单独的 add-on 独立计价，这样以财务为先的团队无需默认支付该部分。',
          },
          {
            question: '是否必须购买付费 onboarding 项目？',
            answer:
              '不需要。默认路径是自主配置。Guided Implementation 作为可选付费包提供，适用于希望在设置和数据导入方面获得帮助的团队。',
          },
          {
            question: '我们应当期待什么样的支持？',
            answer:
              'Finance Core 提供 48 小时电子邮件支持，Operations 提供 24 小时优先电子邮件支持，Enterprise 则包含 onboarding 协助与直接支持通道。',
          },
        ],
      },
      cta: {
        title: '先看产品，再决定是否联系销售',
        subtitle: '先浏览产品与定价。当你有明确的部署、Payroll 或集成问题时，再联系团队。',
        primary: { label: '浏览产品', path: '/product' },
        secondary: { label: '查看定价', path: '/pricing' },
      },
    },
    product: {
      heroKicker: '集成化产品范围',
      heroTitle: '面向财务、运营、合规与薪资的产品覆盖。',
      heroSubtitle:
        'ZANVROX 被定位为面向加拿大中小企业的受控 ERP 体系，适合需要运营可见性但不想接受企业级戏剧化包装的团队。',
      heroPrimaryCta: { label: '查看定价', path: '/pricing' },
      heroSecondaryCta: { label: '打开评估工作区', path: '/resources#demo-environment' },
      heroPreview: {
        title: '运营预览',
        type: 'inventory',
        caption: '统一的运营数据层',
        callouts: [
          { status: 'ready', text: '库存、仓储、BOM、生产' },
          { status: 'ready', text: '治理与审批' },
        ],
      },
      pillars: {
        title: '四个产品支柱',
        subtitle: '网站按流程解释产品，而不是罗列割裂的功能点。',
        items: [
          { title: '财务核心', body: '会计、开票、费用、银行可见性与报表。' },
          { title: '运营', body: '库存、仓储、BOM、基础生产与审批。' },
          {
            title: '加拿大合规',
            body: '税务流程、Payroll add-on、remittance support 与年终定位。',
          },
          { title: '治理', body: '可审计性、审批、控制边界与多公司扩展路径。' },
        ],
      },
      showcase: {
        title: '值得重点查看的产品区域',
        subtitle: '这些是大多数团队在投入更深销售时间前最希望检查的界面。',
        items: [
          {
            title: '税务仪表板',
            body: '展示申报定位、合规进度与支撑流程可见性。',
            previewType: 'reports',
            imageKey: 'taxDashboard',
            imageAlt: 'ZANVROX ERP 中的税务仪表板',
          },
          {
            title: '库存控制',
            body: '展示库存可见性、仓储流转与运营准备信号。',
            previewType: 'inventory',
          },
          {
            title: '生产计划',
            body: '展示与 BOM 相连的运营计划与执行进度。',
            previewType: 'production',
          },
          {
            title: '财务报表',
            body: '展示如何从运营活动回到财务报告。',
            previewType: 'reports',
          },
        ],
      },
      stacks: [
        {
          title: '一体化财务与运营',
          subtitle: '面向 10-50 人团队，目标是减少跨工具切换。',
          items: [
            '会计与开票和采购、费用在同一系统中运行。',
            '库存、仓储与 BOM 数据与财务记录保持连接。',
            '无需额外运营系统，也能叠加审批与治理。',
          ],
        },
        {
          title: '加拿大控制定位',
          subtitle: '以可信的加拿大经营语境为前提。',
          items: [
            '加拿大税务支持以务实的流程语言表达。',
            'Payroll 保持为单独的 add-on，并明确支持范围与定价。',
            '所有对外表述都与当前的治理、准备度和复核定位保持一致。',
          ],
        },
      ],
      onboarding: {
        title: '自主配置在实际中如何运作',
        subtitle:
          '产品页强调这样一个事实：onboarding 默认在产品内部被引导，而不是默认躲在咨询服务之后。',
        steps: [
          { number: '1', title: '创建组织', body: '创建工作区，并从清晰的运营基础开始。' },
          { number: '2', title: '选择加拿大', body: '应用国家级默认值和合规假设。' },
          { number: '3', title: '选择行业模板', body: '从实用基线开始，而不是完全从零配置。' },
          { number: '4', title: '配置税务', body: '确认税务路由、登记信息与财务控制。' },
          { number: '5', title: '导入主数据', body: '导入客户、供应商及关键运营记录。' },
          { number: '6', title: '运行第一笔交易', body: '创建第一张发票，并端到端验证运营路径。' },
        ],
        note: '当团队希望在设置、chart of accounts 复核、数据导入和培训方面获得帮助时，可选择 Guided Implementation。',
      },
      cta: {
        title: '确认产品范围是否符合你们当前需求',
        subtitle: '使用定价与资源页判断你需要的是自主配置、Guided Implementation，还是企业级讨论。',
        primary: { label: '查看定价', path: '/pricing' },
        secondary: { label: '联系团队', path: '/contact' },
      },
    },
    pricing: {
      heroTitle: '面向结构化运营与受控扩展的定价。',
      heroSubtitle:
        '先从核心财务控制开始，随着复杂度提升再扩展到运营；只有当多地点结构、高级审批、onboarding 支持、集成或安全审查成为必要条件时，才进入定制部署。',
      packagesTitle: '面向财务、运营与引导式部署的公开定价',
      packagesSubtitle:
        '以透明的 CAD 定价服务于当前需要结构化工作流的加拿大 SMB 团队，并提供走向更广运营控制的可信路径。',
      launchBadge: '提供年付方案',
      launchOfferLabel: '按年计费的基础订阅包含 1 个月免费。',
      launchOfferNote:
        'Payroll 定价仍按使用计费；在需要更结构化部署时可选择 Guided Implementation。',
      popularLabel: '非常适合 10-50 名员工',
      priceSuffixMonthly: '/月',
      billedMonthlyLabel: '月付',
      billedAnnuallyLabel: '年付',
      fromLabel: '起',
      customLabel: '定制',
      includesLabel: '包含',
      entitiesIncludedLabel: '商业范围',
      usersIncludedLabel: '包含用户数',
      billingToggle: {
        monthly: '月付',
        annual: '年付',
        annualBadge: '1 个月免费',
        helper: '年付仅改变基础订阅周期。Payroll 仍按基础费用加员工数计价。',
      },
      pricingNote:
        '所有价格均为 CAD。Payroll 为单独 add-on。各计划围绕结构化运营、受控工作流、可审计性和安全意识型产品设计构建，而不会过早强推企业级范围。ZANVROX 帮助组织财务、Payroll 和税务工作流，但不能替代会计、法律或税务建议。',
      tiers: [
        {
          slug: 'finance-core',
          name: 'Finance Core',
          summary:
            '适用于需要纪律化财务基础的公司，包括会计、开票、费用、报表以及清晰的自主配置路径。',
          entitiesLabel: '单公司范围',
          usersLabel: '最多 3 名用户',
          monthly: {
            kind: 'fixed',
            amount: 179,
            note: '包含自主配置指引、受控财务工作流以及 48 小时电子邮件支持。',
          },
          annual: {
            kind: 'fixed',
            amount: 179,
            badge: '1 个月免费',
            note: '基础订阅按年计费为 CAD 1,969。',
            secondaryNote: '在需要时，Payroll 与更广的运营范围仍单独计价。',
          },
          included: [
            '会计工作流',
            '开票',
            '费用录入',
            '财务报表',
            '自主配置指引',
            '电子邮件支持（48 小时）',
          ],
          ctaLabel: '查看 Finance Core',
        },
        {
          slug: 'operations',
          name: 'Operations',
          isPopular: true,
          summary: '适用于需要将财务与运营连接起来的团队，覆盖库存、仓储、基础生产和受控审批。',
          entitiesLabel: '单公司范围',
          usersLabel: '最多 10 名用户',
          monthly: {
            kind: 'fixed',
            amount: 649,
            note: '适合运营活动更频繁的团队，包含 24 小时优先电子邮件支持。',
          },
          annual: {
            kind: 'fixed',
            amount: 649,
            badge: '1 个月免费',
            note: '基础订阅按年计费为 CAD 7,139。',
            secondaryNote:
              '当团队需要对库存、仓储流转、BOM 和生产流程有更紧密控制时，通常建议选择该计划。',
          },
          included: [
            '包含 Finance Core 的全部内容',
            '库存控制',
            '仓储工作流',
            '生产（BOM）',
            '审批与治理',
            '优先电子邮件支持（24 小时）',
          ],
          ctaLabel: '查看 Operations',
        },
        {
          slug: 'enterprise',
          name: '定制',
          summary:
            '适用于需要多地点结构、高级审批、安全审查、定制 onboarding、集成、专属支持或更结构化部署的团队。',
          entitiesLabel: '多地点或定制范围',
          usersLabel: '定制用户范围',
          monthly: {
            kind: 'custom',
            label: '定制',
            note: '可就多地点部署、引导式设置、集成、治理需求以及安全审查进行范围评估。',
          },
          annual: {
            kind: 'custom',
            label: '定制',
            note: '定制定价将根据运营结构、部署需求与实施背景单独评估。',
          },
          included: [
            '多地点部署',
            '高级治理',
            '集成',
            '安全审查路径',
            'Guided Implementation 与部署支持',
          ],
          ctaLabel: '申请定制评估',
        },
      ],
      payrollAddon: {
        title: 'Payroll add-on',
        summary:
          '将 Payroll 单独计价，可以在保持基础 ERP 商业定位清晰的同时，为需要它的团队保留加拿大 Payroll 支持。',
        priceLabel: 'CAD 59 / 月 + CAD 6 / 员工 / 月',
        annualPriceLabel: 'CAD 59 / 月 + CAD 6 / 员工 / 月',
        monthlyNote:
          '包含加拿大 Payroll runs、remittance workflow support、pay stubs、用于支持年终 review 的记录和导出，以及会计集成。部署期间可能适用月度最低费用。',
        annualNote: '除非另行定义范围，Payroll add-on 在年付时保持相同的基础费加员工计价结构。',
        included: [
          '加拿大 Payroll runs',
          'remittance workflow support',
          'pay stubs',
          '用于支持 review 的记录和导出',
          '会计集成',
        ],
        ctaLabel: '咨询 Payroll',
      },
      onboardingPackage: {
        title: 'Guided Implementation',
        summary: '面向希望获得运营对齐、辅助部署以及更结构化实施起点的团队的一次性可选引导式设置。',
        priceLabel: 'CAD 3,500 至 7,500 一次性',
        included: [
          '引导式系统设置',
          '运营对齐复核',
          'chart of accounts 复核',
          '税务配置',
          '数据导入指引',
          '辅助部署培训',
        ],
        note: '可选。标准计划在适合轻量部署时仍可从自主配置开始。',
        ctaLabel: '申请引导式设置',
      },
      supportTiers: {
        title: '支持结构',
        subtitle: '支持方式对外公开，让团队可以提前评估运营覆盖、响应预期与部署定位。',
        items: [
          { name: 'Finance Core', body: '电子邮件支持，48 小时响应。' },
          { name: 'Operations', body: '优先级电子邮件支持，24 小时响应。' },
          { name: '定制', body: '引导式部署支持、直接支持通道以及范围化实施讨论。' },
        ],
      },
      comparison: {
        title: '计划对比',
        subtitle: '用它判断你需要的是结构化财务控制、连通运营，还是定制化部署。',
        featureLabel: '能力',
        rows: [
          { label: '会计', values: [true, true, true] },
          { label: '开票', values: [true, true, true] },
          { label: '费用', values: [true, true, true] },
          { label: '财务报表', values: [true, true, true] },
          { label: '库存', values: [false, true, true] },
          { label: '仓储', values: [false, true, true] },
          { label: '生产（BOM）', values: [false, true, true] },
          { label: '审批与治理', values: [false, true, true] },
          { label: '多地点部署', values: [false, false, true] },
          { label: '高级审批', values: [false, true, true] },
          { label: '集成', values: [false, false, true] },
          { label: '支持等级', values: ['电子邮件 / 48h', '优先电子邮件 / 24h', '直接通道'] },
          { label: 'Onboarding 支持', values: ['自主配置', '自主配置', '已包含'] },
          { label: '包含用户数', values: ['3', '10', '定制'] },
        ],
        notesTitle: '商业说明',
        notes: [
          'Payroll 是单独的 add-on。',
          'Guided Implementation 为可选项，并单独计价，适用于希望更结构化部署的团队。',
          '定制适用于多地点范围、集成、安全审查以及 Guided Implementation 背景。',
          '该商业模型旨在保持透明，同时在需求增长时继续支持受控工作流与可审计性。',
        ],
        annualNote: '年付基础计划包含 1 个月免费。',
      },
      faq: {
        title: '定价 FAQ',
        subtitle: '面向希望在通话前先自我判断的团队。',
        items: [
          {
            question: '开始之前必须先看演示吗？',
            answer:
              '不需要。推荐路径是先自我评估：观看概览、浏览产品、查看定价，并在申请引导式会话之前先使用浏览器评估工作区。',
          },
          {
            question: '基础 ERP 计划是否包含 Payroll？',
            answer: '不包含。Payroll 作为单独 add-on 销售，采用月度基础费加按员工计价。',
          },
          {
            question: 'Guided Implementation 是必须的吗？',
            answer:
              '不是。它是可选项。Finance Core 和 Operations 都可以从自主配置开始，而当团队需要更结构化部署时可选择 Guided Implementation。',
          },
          {
            question: '每个计划包含什么支持？',
            answer:
              'Finance Core 包含 48 小时电子邮件支持，Operations 包含 24 小时优先电子邮件支持，定制方案则包含引导式部署讨论与直接支持通道。',
          },
        ],
      },
      ctaPrimary: { label: '打开评估工作区', path: '/resources#demo-environment' },
      ctaSecondary: { label: '联系团队讨论定制部署', path: '/contact' },
    },
    resources: {
      heroTitle: '面向产品评估、安全审查和部署规划的资源。',
      heroSubtitle: '使用这些公开材料，在申请更深入讨论之前先审查产品匹配度、安全定位和评估方式。',
      sections: [
        {
          title: '产品概览与评估资源',
          description: '在投入更深评估时间之前，先了解产品概览、流程覆盖和 onboarding 模型。',
          cta: '查看产品',
          path: '/product',
        },
        {
          title: '安全概览',
          description: '在一个公开概览中查看组织隔离、访问控制、子处理方和当前限制。',
          cta: '查看安全',
          path: '/security',
        },
        {
          title: '评估工作区与引导式产品审查',
          description: '先使用共享评估工作区进行初步评估；若需要更结构化的产品讨论，再联系团队。',
          cta: '打开评估工作区',
          path: '/resources#demo-environment',
        },
        {
          title: '联系与补充资料',
          description: '如需安全 / 合规问题答复、引导式评估申请或更多材料，请使用联系路径。',
          cta: '联系团队',
          path: '/contact',
        },
      ],
      demoEnvironment: {
        title: '评估工作区',
        subtitle: '用于初步产品评估的浏览器工作区，包含虚构样例数据。',
        accessTitle: '共享评估访问',
        accessIntro: '共享访问适合早期产品评估。若团队需要更深入或更结构化的评估，可联系 ZANVROX。',
        emailLabel: '工作区用户',
        emailValue: 'Use your work email',
        passwordLabel: '访问码',
        passwordValue: 'Set during signup',
        note: '无需安装。该工作区仅供评估，使用虚构样例数据，不适用于真实公司、员工、客户、Payroll 或财务数据。',
        guidance: [
          '使用该工作区先检查导航、流程覆盖和整体产品匹配度。',
          '请将该环境视为共享评估界面，而不是生产、试点或数据迁移工作区。',
          '如需更深入评估、安全 / 合规说明或补充资料，请在完成初步评估后使用联系路径。',
        ],
        cta: { label: '打开评估工作区', path: '/resources#demo-environment' },
      },
      sitemap: {
        title: '评估材料',
        subtitle: '公开站点刻意保持简洁，只保留对早期评估最有价值的材料。',
        items: [
          '产品概览与流程覆盖',
          '公开定价与 onboarding 模型',
          '安全概览与当前控制定位',
          '包含虚构样例数据的评估工作区',
          '用于引导式评估与后续问题的联系路径',
          '法律条款与隐私信息',
        ],
      },
      design: {
        title: '如何使用这些资源',
        subtitle: '为希望先评估产品匹配度、仅在需要更多信息时再联系团队的团队提供简单路径。',
        directionTitle: '初步产品评估',
        componentsTitle: '安全与合规审查',
        statesTitle: '何时联系团队',
        direction: [
          '先查看产品、定价和资源页，理解范围、onboarding 定位和商业适配度。',
          '仅使用虚构数据在评估工作区中做初步上手检查。',
          '将公开材料视为进入深入讨论前的第一层资格筛选。',
        ],
        components: [
          '使用安全概览了解组织隔离、访问控制、子处理方和当前限制。',
          '如需安全 / 合规相关跟进或更多资料，请使用联系路径。',
          '让评估问题保持在当前公开范围和对外表述之内。',
        ],
        states: [
          '当团队已经形成具体的流程或部署问题时，再申请引导式产品审查。',
          '当公开评估材料不足以支撑判断时，再联系团队。',
          '如需安全概览申请或安全 / 合规跟进，请使用现有联系路径。',
        ],
      },
    },
    security: {
      heroTitle: '从设计开始就考虑安全与架构。',
      heroSubtitle: '组织边界、最小权限访问以及可审计的交易行为。',
      overview: {
        title: '安全概览',
        subtitle: '对当前产品和交付流程中可见控制项的保守摘要。',
        description:
          'ZANVROX 围绕组织隔离、基于角色的访问以及对敏感操作的服务端强制处理构建。对外安全表述只覆盖今天已经落地的控制项，并刻意避免尚未具备的认证或覆盖承诺。',
        bullets: [
          '安全定位以最小权限、组织级范围和可审计的运营行为为中心。',
          '敏感区域可能要求更强的身份验证后才允许访问。',
          '基础设施与交付依赖托管平台，而不是自建服务器运维。',
        ],
      },
      matrix: {
        title: '控制矩阵',
        subtitle: '每一条控制声明都对应具体的实现机制。',
      },
      controls: [
        { control: '组织隔离', support: '在运营表上通过 org_id 范围的 PostgreSQL RLS 策略实现。' },
        { control: '访问控制', support: '关键操作使用组织成员关系和按角色限制的写路径。' },
        { control: '变更可追踪性', support: '交易级 ID、时间戳以及申报确认记录。' },
        { control: '服务端执行', support: '关键会计与税务动作通过 SQL/Edge 控制执行。' },
      ],
      sections: [
        {
          title: '访问控制与身份验证',
          items: [
            '基于角色的访问通过组织成员关系、模块权限和按角色限制的写路径来实施。',
            'MFA 通过 authenticator-app TOTP factors 提供。',
            'ERP 的敏感区域在允许访问前可能要求 AAL2 的 step-up authentication。',
          ],
        },
        {
          title: '数据隔离',
          items: [
            '组织级隔离由组织标识符和数据库安全策略界定。',
            '运营读写都绑定到当前活动组织上下文。',
            '数据分离是在共享环境中的逻辑隔离，而不是基于每个组织的独立应用栈。',
          ],
        },
        {
          title: '托管与基础设施',
          items: [
            '后端服务通过 Supabase 托管。',
            '公共前端通过 Vercel 交付。',
            '传输中加密使用 HTTPS/TLS。',
            '底层云基础设施由提供商管理，而不是由 ZANVROX 直接运营。',
          ],
        },
        {
          title: '运营安全',
          items: [
            '发布门禁包括 lint、单元测试、Web 测试、构建与发布验证脚本。',
            'Playwright E2E 覆盖和托管 smoke checks 用于验证关键工作流。',
            '依赖监控包含 CI 中的 npm audit，用于审查高严重级别软件包。',
            '应用日志经过脱敏，以减少电子邮件、token 等敏感字段意外暴露。',
          ],
        },
      ],
      subprocessors: {
        title: '子处理方',
        subtitle: '当前用于运营服务的第三方提供商公共摘要。',
        items: [
          {
            name: 'Supabase',
            support: '用于数据库、身份验证、storage 和 server-side workflows 的托管后端平台。',
          },
          { name: 'Vercel', support: '用于公共 Web 体验的托管前端 hosting 与交付。' },
          { name: 'Resend', support: '用于有限沟通和网站线索路由的事务性电子邮件交付。' },
        ],
        note: '这些提供商仅在服务运营、交付或事务性沟通需要时使用。',
      },
      disclosures: {
        title: '透明度与当前限制',
        subtitle: '反映当前实际控制情况的保守声明。',
        items: [
          '不宣称 auto-filing：仅支持 portal-ready workflow。',
          '不存在面向公开能力的隐藏 feature flags。',
          '生产行为由可审计日志和快照支撑。',
          '当前的 MFA 依赖 authenticator-app TOTP，不具备抗钓鱼能力。',
          'step-up authentication 只在敏感路由上实施，而不是每个会话的全局要求。',
          'WebAuthn 和基于 passkeys 的身份验证尚未提供。',
        ],
      },
      cta: {
        title: '安全联系',
        subtitle: '使用现有联系路径申请安全概览或进行安全 / 合规跟进。',
        primary: { label: '申请安全概览', path: '/contact' },
        secondary: { label: '联系团队讨论安全 / 合规', path: '/contact' },
      },
    },
    about: {
      heroKicker: '关于 ZANVROX',
      heroTitle: '这是一个为可信部署而定位的务实 ERP，而不是企业级戏剧化包装。',
      heroSubtitle:
        'ZANVROX 被呈现为一款现代 ERP，适合希望获得更强运营控制、更少割裂系统以及更清晰支持路径的加拿大中小企业团队。',
      heroPrimaryCta: { label: '浏览产品', path: '/product' },
      heroSecondaryCta: { label: '联系团队', path: '/contact' },
      heroPreview: {
        title: '定位快照',
        type: 'reports',
        caption: '以运营控制替代软件堆叠',
        callouts: [
          { status: 'ready', text: '清晰的支持定位' },
          { status: 'ready', text: '产品主导的评估路径' },
        ],
      },
      principles: {
        title: '支撑网站的三个原则',
        subtitle: '公开定位针对 founder-led 的运营现实进行了优化，同时不降低产品标准。',
        items: [
          { title: '清晰', body: '明确说明产品做什么、支持什么，以及哪些部分仍需要复核。' },
          { title: '控制', body: '强调可审计性、治理与运营可见性，而不是夸张的 SaaS 营销。' },
          {
            title: '务实部署',
            body: '让自主配置成为可行路径，同时在复杂度上升时保留可选的专家帮助。',
          },
        ],
      },
      operatingModel: [
        {
          title: '为加拿大中小企业而设计',
          subtitle: '公开网站面向那些需要可信 ERP 控制、但不希望第一天就承担企业级咨询负担的公司。',
          items: [
            '最佳适配大约在 10-50 名员工',
            '当财务与运营被过多工具割裂时价值尤为明显',
            '从财务核心扩展到运营和 Payroll add-on 的路径清晰',
          ],
        },
        {
          title: '商业上有纪律',
          subtitle: '网站旨在减少低质量会议，并在第一次对话前就把预期讲清楚。',
          items: [
            '可选演示，而不是 demo-first 漏斗',
            '公开定价，明确支持等级与 onboarding 预期',
            '安全与治理表述与产品实际定位保持一致',
          ],
        },
      ],
      cta: {
        title: '看看这种运营模型是否适合你的团队',
        subtitle: '先使用产品、定价和资源页判断匹配度，再决定是否联系。',
        primary: { label: '查看定价', path: '/pricing' },
        secondary: { label: '前往联系页', path: '/contact' },
      },
    },
    contact: {
      heroTitle: '只有在你确实需要帮助解答评估问题时，再联系团队。',
      heroSubtitle:
        '推荐路径是先看产品概览、浏览产品、查看定价、进行浏览器评估，然后再选择可选联系或引导式讲解。',
      conversion: {
        title: '推荐评估流程',
        subtitle: '这样可以减少不必要的会议，并在真正联系时提供更好的上下文。',
        cards: [
          { title: '观看产品概览', body: '先通过视频理解运营模型和产品定位。' },
          { title: '浏览功能', body: '使用产品、定价和安全页面，在不通话的情况下评估整套体系。' },
          { title: '打开评估工作区', body: '先用虚构数据验证界面，再决定是否申请引导式会话。' },
          { title: '需要时再求助', body: '使用下面的表单申请可选演示，或提出具体的产品问题。' },
        ],
      },
      supportBlock: {
        title: '支持预期',
        subtitle: '所有网站联系流程都会路由到 support@zanvrox.com。',
        items: [
          'Finance Core：电子邮件支持，48 小时响应',
          'Operations：优先级电子邮件支持，24 小时响应',
          'Enterprise：直接支持通道与 onboarding 协助',
        ],
      },
      pricingContext: {
        title: '已选择的定价上下文',
        subtitle: '所选定价上下文会附在你的请求上，以便后续沟通始终围绕你当前选择的配置展开。',
        labels: {
          plan: '计划',
          billing: '计费方式',
          payroll: 'Payroll',
          offer: '优惠',
          notSelected: '未选择',
          payrollInterested: '已选择 Payroll add-on',
          payrollNotSelected: '未选择 Payroll add-on',
        },
      },
      demoForm: {
        title: '申请引导式讲解',
        helper: '当团队已完成产品浏览并希望获得引导式讲解时，请使用此表单。',
        confirmation: '你的引导式讲解请求已成功发送。我们将通过电子邮件跟进。',
        submittingCta: '发送中...',
        submitError: '提交失败，请重试。',
        messageHint: '可选。可在这里说明你当前的系统栈、部署时间或 Payroll 问题。',
        fields: {
          name: '姓名*',
          company: '公司*',
          email: '工作邮箱*',
          companySize: '公司规模*',
          interestArea: '关注领域*',
          message: '可选留言',
          consent: '我同意 ZANVROX 就此业务请求与我联系。我们仅使用这些数据来回复该请求。',
        },
        placeholders: {
          email: 'name@company.cn',
          companySize: '选择公司规模',
          interestArea: '选择关注领域',
          message: '你希望在引导式会话中验证什么？',
        },
        options: {
          companySizes: ['1-10 名员工', '10-50 名员工', '50-100 名员工', '100+ 名员工'],
          interestAreas: [
            'Finance Core',
            'Operations',
            'Payroll add-on',
            'Guided Implementation',
            'Enterprise 部署',
            '集成 / API',
          ],
        },
        errors: {
          name: '请输入姓名。',
          company: '请输入公司名称。',
          email: '请输入有效的工作邮箱。',
          companySize: '请选择公司规模。',
          interestArea: '请选择关注领域。',
          message: '留言请控制在 2000 个字符以内。',
          consent: '提交此表单需要同意。',
          startedAt: '请稍等片刻后再提交。',
          website: '触发了反垃圾保护。',
        },
        cta: '申请引导式讲解',
      },
      briefForm: {
        title: '提出产品问题',
        helper: '适用于产品匹配度、支持、onboarding、实施或 Payroll 范围相关问题。',
        confirmation: '你的消息已成功发送。我们会通过电子邮件回复。',
        submittingCta: '发送中...',
        submitError: '提交失败，请重试。',
        messageHint: '可选。可在这里说明你的流程、支持需求或实施问题。',
        fields: {
          name: '姓名*',
          company: '公司*',
          email: '工作邮箱*',
          companySize: '公司规模*',
          interestArea: '关注领域*',
          message: '可选留言',
          consent: '我同意接收 ZANVROX 针对此请求的后续联系。',
        },
        placeholders: {
          email: 'name@company.cn',
          companySize: '选择公司规模',
          interestArea: '选择关注领域',
          message: '在团队投入更多评估时间前，你希望先澄清什么？',
        },
        options: {
          companySizes: ['1-10 名员工', '10-50 名员工', '50-100 名员工', '100+ 名员工'],
          interestAreas: [
            '产品匹配度',
            '定价与支持',
            'Sandbox 访问',
            '数据导入',
            'Payroll add-on',
            'Guided Implementation',
          ],
        },
        errors: {
          name: '请输入姓名。',
          company: '请输入公司名称。',
          email: '请输入有效的工作邮箱。',
          companySize: '请选择公司规模。',
          interestArea: '请选择关注领域。',
          message: '留言请控制在 2000 个字符以内。',
          consent: '提交此表单需要同意。',
          startedAt: '请稍等片刻后再提交。',
          website: '触发了反垃圾保护。',
        },
        cta: '发送问题',
      },
    },
    legal: {
      privacy: {
        title: '隐私政策',
        updated: '2026 年 3 月 5 日',
        updatedLabel: '最后更新',
        paragraphs: [
          'ZANVROX 会收集通过本网站提交的企业联系信息，用于产品评估、演示安排和资料请求。',
          '我们仅将提交的数据用于销售与产品资格评估。',
          '如需访问、更正或删除已提交数据，可联系 support@zanvrox.com。',
        ],
      },
      terms: {
        title: '服务条款',
        updated: '2026 年 3 月 5 日',
        updatedLabel: '最后更新',
        paragraphs: [
          '本网站用于提供 ZANVROX ERP 的产品信息和商业评估线索表单。',
          '网站内容仅供参考，不构成具有约束力的产品承诺。',
          '产品范围与商业条款以签署的协议为准。',
        ],
      },
    },
    notFound: {
      title: '页面未找到',
      subtitle: '该 URL 不符合已发布的 ZANVROX 网站结构。',
      cta: '返回首页',
    },
  },
  footer: {
    companyDescription:
      '面向加拿大中小企业的集成 ERP，将财务、运营、合规与薪资集中在一个受控体系中。',
    headquarters: '加拿大安大略省多伦多',
    email: 'support@zanvrox.com',
    sections: [
      {
        title: '产品',
        links: [
          { label: '产品概览', path: '/product' },
          { label: '定价', path: '/pricing' },
          { label: '资源', path: '/resources' },
          { label: '联系', path: '/contact' },
        ],
      },
      {
        title: '信任与法律',
        links: [
          { label: '安全', path: '/security' },
          { label: '安全 / 合规', path: '/security' },
          { label: '申请安全资料', path: '/contact' },
          { label: '隐私', path: '/legal/privacy' },
          { label: '条款', path: '/legal/terms' },
        ],
      },
    ],
    links: [
      { label: '产品', path: '/product' },
      { label: '定价', path: '/pricing' },
      { label: '资源', path: '/resources' },
      { label: '安全', path: '/security' },
      { label: '关于', path: '/about' },
      { label: '联系', path: '/contact' },
      { label: '隐私', path: '/legal/privacy' },
      { label: '条款', path: '/legal/terms' },
    ],
  },
  seo: {
    home: {
      title: 'ZANVROX | 面向加拿大财务、运营与控制的 ERP',
      description:
        '面向加拿大中小企业的一体化 ERP，覆盖会计、开票、库存、仓储、生产、治理、税务流程与 Payroll add-on 支持。',
      path: '/',
    },
    product: {
      title: '产品 | ZANVROX',
      description:
        '浏览 ZANVROX ERP 体系中财务、运营、加拿大合规、治理与 Payroll add-on 的覆盖范围。',
      path: '/product',
    },
    security: {
      title: '安全 | ZANVROX',
      description: '查看 ZANVROX 背后的组织隔离、基于角色的控制、审批、治理和架构防护。',
      path: '/security',
    },
    pricing: {
      title: '定价 | ZANVROX',
      description:
        '查看 Finance Core、Operations、定制部署、Payroll add-on 以及可选 Guided Implementation 的公开 CAD 定价。',
      path: '/pricing',
    },
    resources: {
      title: '资源 | ZANVROX',
      description: '使用产品资源、评估工作区指南和安全概览材料来自主评估 ZANVROX。',
      path: '/resources',
    },
    about: {
      title: '关于 | ZANVROX',
      description: '了解 ZANVROX 如何为加拿大中小企业定位财务、运营、治理与部署纪律。',
      path: '/about',
    },
    contact: {
      title: '联系 | ZANVROX',
      description: '申请可选演示，或提出关于产品、Payroll、onboarding 或实施的具体问题。',
      path: '/contact',
    },
    privacy: {
      title: '隐私政策 | ZANVROX',
      description: '适用于 ZANVROX 网站及相关线索处理的隐私政策。',
      path: '/legal/privacy',
    },
    terms: {
      title: '服务条款 | ZANVROX',
      description: '规范使用 ZANVROX 网站及材料的服务条款。',
      path: '/legal/terms',
    },
  },
};

export default siteContentZh;
