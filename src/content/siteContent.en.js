const siteContentEn = {
  locale: 'en',
  localeLabel: 'English',
  labels: {
    menu: 'Menu',
    bookDemo: 'Guided walkthrough',
    tryDemo: 'Open workspace',
    getTechnicalBrief: 'Contact team',
    reviewResources: 'View resources',
    language: 'Language',
    requestQuote: 'Talk to sales',
  },
  navItems: [
    { label: 'Home', path: '/' },
    { label: 'ERP', path: '/erp' },
    { label: 'Workforce', path: '/workforce' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Resources', path: '/resources' },
    { label: 'Security', path: '/security' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  brand: {
    name: 'ZANVROX',
    tagline: 'Canadian operations ERP for growing SMBs',
    oneLiner:
      'Finance, inventory, payroll workflows, and operational control in one ERP built for Canadian SMB teams.',
  },
  pages: {
    home: {
      heroKicker: 'Canadian ERP for finance, operations, and operational control',
      heroTitle:
        'Run finance, inventory, payroll workflows, and operations in one controlled ERP instead of five disconnected tools.',
      heroSubtitle:
        'ZANVROX helps Canadian SMB teams centralize accounting, invoicing, purchasing, inventory, production, approvals, and tax workflow support without a heavy implementation project.',
      heroPrimaryCta: { label: 'View product overview', path: '/#product-overview' },
      heroSecondaryCta: { label: 'Open evaluation workspace', path: '/resources#demo-environment' },
      heroPreview: {
        title: 'Tax and control preview',
        caption: 'Live inside the ERP',
        callouts: [
          { status: 'ready', text: 'GST/HST + PST/QST reporting' },
          { status: 'ready', text: 'Audit trail and approvals' },
        ],
      },
      video: {
        title: 'Product walkthrough with real workflow context',
        subtitle:
          'A short walkthrough of finance, operations, Canadian tax flows, and payroll readiness.',
        windowLabel: 'Product video',
        duration: '90 sec',
        overlayLabel: 'View product walkthrough',
        fallbackLabel: 'Poster preview available',
        hasRealVideo: true,
        chapters: [
          'Accounting and invoicing',
          'Inventory and warehouse',
          'Production planning',
          'Tax dashboard',
          'Payroll workbench',
          'Reports and approvals',
        ],
        primaryCta: { label: 'Explore product', path: '/erp' },
        secondaryCta: { label: 'Open evaluation workspace', path: '/resources#demo-environment' },
      },
      trustSignals: [
        'Provider-backed official workflows remain intact where required.',
        'Governed changes with approvals and audit trails.',
        'Self-setup path for smaller teams with optional guided implementation.',
        'Built for Canadian operational requirements without overclaiming compliance.',
      ],
      statusBadges: [
        { status: 'ready', text: 'Accounting, invoicing, expenses, and reporting' },
        { status: 'ready', text: 'Inventory, warehouse, and BOM workflows' },
        { status: 'ready', text: 'Canadian tax workflow support' },
        { status: 'ready', text: 'Payroll add-on with year-end workbench' },
        { status: 'locked', text: 'Governance and auditability controls' },
        { status: 'ready', text: 'Self-setup onboarding path' },
      ],
      productLines: {
        eyebrow: 'One platform, two ways to start',
        title: 'Two ways to run your business with ZANVROX',
        subtitle:
          'Start with Workforce for frontline shift operations, ZANVROX ERP for finance and business operations, or both together.',
        cards: [
          {
            name: 'ZANVROX ERP',
            headline: 'Finance, inventory, purchasing and operations in one connected platform.',
            cta: { label: 'Explore ERP', path: '/erp' },
          },
          {
            name: 'ZANVROX Workforce',
            headline: 'Clock in, schedules, tasks and timesheets for frontline teams.',
            cta: { label: 'Explore Workforce', path: '/workforce' },
          },
        ],
        note: 'Start with Workforce. Add the ERP when you need it. Already running your business on ZANVROX? Workforce comes included with Operations.',
      },
      evaluationPath: {
        eyebrow: 'Product-led funnel',
        title: 'Evaluate without booking a meeting first',
        subtitle: 'The site is built to reduce unnecessary calls and let teams self-qualify.',
        cards: [
          {
            title: '1. Watch the overview',
            body: 'Start with the product video to understand how finance, operations, tax, and payroll fit together.',
          },
          {
            title: '2. Explore the product',
            body: 'Review feature groups, screenshots, and governance controls by module and business process.',
          },
          {
            title: '3. Open the evaluation workspace',
            body: 'Use the browser-based workspace with fictional data to validate navigation, role fit, and workflow coverage.',
          },
          {
            title: '4. Request help only if needed',
            body: 'Use the optional contact or demo form once your team has a concrete evaluation question.',
          },
        ],
      },
      screenshots: {
        eyebrow: 'Screens and workflows',
        title: 'Screens designed to show real operational coverage',
        subtitle:
          'Each section below is ready for real screenshots and uses product previews when a final screenshot is not available yet.',
        items: [
          {
            title: 'Canadian tax dashboard',
            body: 'Track filing readiness, tax families, and close controls from one finance view.',
            previewType: 'reports',
            imageKey: 'taxDashboard',
            imageAlt: 'Canadian tax dashboard inside ZANVROX ERP',
          },
          {
            title: 'Inventory management',
            body: 'See stock positions, warehouse movement, and lot-aware visibility without leaving the ERP.',
            previewType: 'inventory',
          },
          {
            title: 'Production planning',
            body: 'Review BOM-linked production orders, material consumption, and execution progress in one surface.',
            previewType: 'production',
          },
          {
            title: 'Financial reporting',
            body: 'Move from operational activity into management reporting without stitching tools together.',
            previewType: 'accounting',
          },
        ],
      },
      howItWorks: {
        eyebrow: 'Self-setup onboarding',
        title: 'Start in six guided steps',
        subtitle:
          'The product is designed so a founder-led team can get oriented without a heavy onboarding project.',
        steps: [
          {
            icon: '1',
            title: 'Create organization',
            bullets: ['Start your workspace', 'Define legal entity basics'],
          },
          {
            icon: '2',
            title: 'Select country',
            bullets: ['Choose Canada', 'Load country-specific defaults'],
          },
          {
            icon: '3',
            title: 'Choose industry template',
            bullets: ['Pick a starting model', 'Reduce setup friction'],
          },
          {
            icon: '4',
            title: 'Configure taxes',
            bullets: ['Set tax families', 'Confirm province logic and defaults'],
          },
          {
            icon: '5',
            title: 'Import clients and vendors',
            bullets: ['Bring in master data', 'Use templates and validation'],
          },
          {
            icon: '6',
            title: 'Create first invoice',
            bullets: ['Validate operational flow', 'Move into day-to-day usage'],
          },
        ],
      },
      compliance: {
        eyebrow: 'Canadian posture',
        title: 'Built for credibility, not hype',
        subtitle:
          'The website explains what is controlled, what is automated, and what still requires review.',
        bullets: [
          'Canadian tax workflows are handled with explicit filing posture and auditability.',
          'Payroll is positioned as a separate add-on with clear scope and readiness by jurisdiction.',
          'Approvals, governance, and support expectations are stated directly instead of buried in sales calls.',
        ],
        coverageLabel: 'Current commercial posture',
        coverage: 'Best fit for Canadian SMB teams with 10-50 employees',
        note: 'Provider-backed official workflows remain available where enterprise official is not the right claim.',
        provinces: ['ON', 'QC', 'AB', 'BC', 'MB', 'SK', 'NS', 'NB'],
      },
      included: {
        eyebrow: 'What is integrated',
        title: 'One stack across finance and operations',
        subtitle:
          'The point is not more features on paper. The point is fewer fractured workflows in practice.',
        items: [
          'Accounting, invoicing, expenses, and financial reporting',
          'Purchasing, inventory, warehouse, and production basics',
          'Approvals, governance, and operational audit trail',
          'Canadian tax workflow support and payroll add-on support',
          'Multi-location and advanced governance when teams need custom rollout',
          'ERP intelligence and AI assistance with controlled posture',
        ],
      },
      executiveSnapshot: {
        badge: 'Operating model',
        title: 'Designed for self-evaluation first, human help second',
        subtitle:
          'This is a product-led site for a serious ERP, not a brochure that forces every prospect into a call.',
        metrics: [
          { label: 'Primary ICP', value: '10-50', note: 'Canadian SMB employees' },
          { label: 'Support posture', value: 'Email-first', note: 'Clear response times by plan' },
          {
            label: 'Onboarding posture',
            value: 'Self-setup',
            note: 'Optional guided implementation available',
          },
        ],
      },
      positioning: {
        eyebrow: 'Why teams switch',
        title: 'Reduce fragmentation across finance, operations, and tax workflows',
        subtitle: 'The value proposition is control, visibility, and fewer system handoffs.',
        cards: [
          {
            role: 'Finance',
            headline: 'Close with fewer disconnected systems.',
            points: [
              'Accounting, invoicing, expenses, and reports in one system.',
              'Clear support boundaries and period-aware controls.',
              'Canadian tax workflow support without overclaiming automation.',
            ],
          },
          {
            role: 'Operations',
            headline: 'Keep stock, purchasing, and production in sync.',
            points: [
              'Inventory and warehouse workflows connected to finance.',
              'BOM and production basics without extra middleware.',
              'Operational review signals and governance where needed.',
            ],
          },
          {
            role: 'Management',
            headline: 'Get clearer decision support.',
            points: [
              'Fewer manual reconciliations across tools.',
              'Support expectations and onboarding scope made explicit.',
              'Better lead qualification before internal time is spent.',
            ],
          },
          {
            role: 'IT / Ops',
            headline: 'Adopt with disciplined scope.',
            points: [
              'Clear implementation sequencing for small teams.',
              'Governed changes and auditable workflows.',
              'Static-site compatible marketing layer with structured metadata.',
            ],
          },
        ],
      },
      technical: {
        eyebrow: 'Support and onboarding model',
        title: 'Self-service by default, guided help when it matters',
        subtitle:
          'The site sets expectations upfront so small teams know what happens after signup.',
        items: [
          'Finance includes self-setup onboarding and email support with 48h response.',
          'Business and Operations add priority email support with 24h response.',
          'Operations includes ZANVROX Workforce for covered employees and locations.',
          'Enterprise includes onboarding assistance and direct support channel.',
        ],
      },
      supportModel: {
        title: 'Support expectations by plan',
        subtitle: 'Support is defined directly so evaluation stays realistic.',
        tiers: [
          {
            name: 'Finance',
            body: 'Email support, 48h response, self-setup onboarding guidance.',
          },
          {
            name: 'Business',
            body: 'Priority email support, 24h response, 50% off Workforce standalone.',
          },
          {
            name: 'Operations',
            body: 'Priority email support, 24h response, ZANVROX Workforce included.',
          },
          {
            name: 'Enterprise',
            body: 'Dedicated onboarding, direct support channel, scoped rollout assistance.',
          },
        ],
      },
      demoEnvironment: {
        title: 'Open the ZANVROX evaluation workspace',
        subtitle:
          'Use a browser-based workspace with fictional data before requesting a guided walkthrough.',
        emailLabel: 'Demo user',
        emailValue: 'Use your work email',
        passwordLabel: 'Password',
        passwordValue: 'Set during signup',
        note: 'Browser-based evaluation only. This workspace stays separate from implementation planning and production expectations.',
        cta: { label: 'Open evaluation workspace', path: '/resources#demo-environment' },
      },
      restaurantBetaBanner: {
        eyebrow: 'Ontario restaurants',
        title: 'Join the ZANVROX Workforce private beta',
        body: '14-day test. 6 months free after launch.',
        cta: { label: 'Learn more', path: '/workforce/beta' },
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Questions teams ask before they commit time',
        items: [
          {
            question: 'Can we evaluate ZANVROX without booking a demo first?',
            answer:
              'Yes. The intended path is watch the overview, explore the product, open the evaluation workspace, and request help only if your team needs it.',
          },
          {
            question: 'Is payroll included in the base plans?',
            answer:
              'No. Payroll is a separate add-on priced independently so finance-only teams do not pay for it by default.',
          },
          {
            question: 'Do we need a paid onboarding project?',
            answer:
              'No. Self-setup is the default path. Guided Implementation is available as an optional paid package when your team wants help with setup and data import.',
          },
          {
            question: 'What support should we expect?',
            answer:
              'Finance includes 48h email support, Business and Operations include 24h priority email support, and Enterprise includes onboarding assistance plus a direct support channel.',
          },
        ],
      },
      cta: {
        title: 'Start with the product, not with a sales call',
        subtitle:
          'Explore the product and pricing first. Contact the team when you have a concrete rollout, payroll, or integration question.',
        primary: { label: 'Explore product', path: '/erp' },
        secondary: { label: 'View pricing', path: '/pricing' },
      },
    },
    product: {
      heroKicker: 'ZANVROX ERP',
      heroTitle: 'Run finance, operations and workforce from one connected platform.',
      heroSubtitle:
        'ZANVROX ERP is a controlled platform for Canadian SMB teams covering finance, invoicing, expenses, customers and vendors, purchasing, inventory, locations, operations, reporting, payroll workflows, and ZANVROX Workforce.',
      heroPrimaryCta: { label: 'View pricing', path: '/pricing' },
      heroSecondaryCta: { label: 'Open evaluation workspace', path: '/resources#demo-environment' },
      heroPreview: {
        title: 'Operations preview',
        type: 'inventory',
        caption: 'One operational data layer',
        callouts: [
          { status: 'ready', text: 'Inventory, warehouse, BOM, production' },
          { status: 'ready', text: 'Governance and approvals' },
        ],
      },
      pillars: {
        title: 'Product pillars',
        subtitle:
          'The website explains the product around workflows, not disconnected feature bullets.',
        items: [
          {
            title: 'Finance core',
            body: 'Accounting, invoicing, expenses, customers, vendors, banking visibility, and reporting.',
          },
          {
            title: 'Operations',
            body: 'Purchasing, inventory, locations, warehouse, BOM, production basics, and approvals.',
          },
          {
            title: 'Canadian workflow support',
            body: 'Tax workflows, payroll add-on, remittance support, and year-end records to support review.',
          },
          {
            title: 'Governance',
            body: 'Auditability, approvals, control boundaries, and multi-company expansion path.',
          },
          {
            title: 'ZANVROX Workforce',
            body: 'Clock in/out, schedules, tasks and timesheets for frontline teams, included with eligible ERP plans or available standalone.',
          },
        ],
      },
      showcase: {
        title: 'Product areas worth evaluating visually',
        subtitle:
          'These are the screens most teams want to inspect before they invest time in deeper sales conversations.',
        items: [
          {
            title: 'Tax dashboard',
            body: 'Shows filing posture, compliance progress, and supporting workflow visibility.',
            previewType: 'reports',
            imageKey: 'taxDashboard',
            imageAlt: 'Tax dashboard in ZANVROX ERP',
          },
          {
            title: 'Inventory control',
            body: 'Shows stock visibility, warehouse routing, and operational readiness signals.',
            previewType: 'inventory',
          },
          {
            title: 'Production planning',
            body: 'Shows BOM-linked operational planning and execution progress.',
            previewType: 'production',
          },
          {
            title: 'Financial reporting',
            body: 'Shows connected reporting from operational activity back into finance.',
            previewType: 'reports',
          },
        ],
      },
      stacks: [
        {
          title: 'Integrated finance and operations',
          subtitle: 'Designed to reduce cross-tool handoffs in the 10-50 employee segment.',
          items: [
            'Accounting and invoicing live in the same system as purchasing and expenses.',
            'Inventory, warehouse, locations, and BOM data stay linked to the financial record.',
            'Approvals and governance can be layered without separate operational tools.',
            'ZANVROX Workforce connects frontline clock-in, schedule, and timesheet data back into the same platform.',
          ],
        },
        {
          title: 'Canadian control posture',
          subtitle: 'Designed to be credible in a Canadian operating context.',
          items: [
            'Canadian tax support is explained with practical workflow language.',
            'Payroll remains an add-on with explicit support scope and pricing.',
            'Claims are aligned with actual governance, readiness, and review posture.',
          ],
        },
      ],
      onboarding: {
        title: 'How self-setup works in practice',
        subtitle:
          'The product page reinforces that onboarding is guided inside the product, not hidden behind consulting by default.',
        steps: [
          {
            number: '1',
            title: 'Create organization',
            body: 'Create your workspace and start from a clean operating base.',
          },
          {
            number: '2',
            title: 'Select Canada',
            body: 'Apply country-specific defaults and compliance assumptions.',
          },
          {
            number: '3',
            title: 'Choose industry template',
            body: 'Start from a practical baseline instead of configuring from zero.',
          },
          {
            number: '4',
            title: 'Configure taxes',
            body: 'Confirm tax routing, registrations, and finance controls.',
          },
          {
            number: '5',
            title: 'Import master data',
            body: 'Bring in clients, vendors, and key operational records.',
          },
          {
            number: '6',
            title: 'Run first transaction',
            body: 'Create the first invoice and validate the operational path end to end.',
          },
        ],
        note: 'Guided Implementation is available when your team wants help with setup, chart of accounts review, data import, and training.',
      },
      cta: {
        title: 'See whether the product scope matches your company now',
        subtitle:
          'Use pricing and resources to decide if you need self-setup, guided implementation, or a custom rollout conversation.',
        primary: { label: 'View pricing', path: '/pricing' },
        secondary: { label: 'Contact team', path: '/contact' },
      },
    },
    platform: {
      heroTitle: 'Platform architecture for controlled scale.',
      availableLabel: 'Available now',
      heroSubtitle: 'A modular ERP foundation that keeps finance and operations synchronized.',
      heading: {
        title: 'Platform layers',
        subtitle:
          'Each layer is designed for auditability, extensibility, and multi-company operations.',
      },
      sections: [
        {
          title: 'Operational data model',
          status: 'available',
          statusLabel: 'Available now',
          points: [
            'Core entities for invoices, items, lots, purchases, expenses, and clients.',
            'Journal-linked accounting boundaries and controls.',
            'Document generation pipeline for customer-facing outputs.',
          ],
        },
        {
          title: 'Application architecture',
          status: 'available',
          statusLabel: 'Available now',
          points: [
            'React + Vite frontend for fast interaction.',
            'Supabase/PostgreSQL backend with SQL-first logic.',
            'Edge functions for secure orchestration workflows.',
          ],
        },
        {
          title: 'Enterprise controls',
          status: 'available',
          statusLabel: 'Available now',
          points: [
            'Period lock controls and audit logs.',
            'Tax return snapshots and filing confirmations.',
            'Role-aware access with organization isolation.',
          ],
        },
      ],
    },
    solutions: {
      kicker: 'Solutions',
      manufacturing: {
        title: 'Manufacturing',
        subtitle: 'From BOM to production output with transaction-level visibility.',
        scopeTitle: 'Manufacturing scope',
        scopeSubtitle: 'Production-ready capabilities available now.',
        included: [
          'BOM and production execution linked to inventory movements.',
          'Lot-aware traceability across input and output stock.',
          'Accounting-aligned operational events for reconciliation.',
        ],
        cta: 'Book manufacturing demo',
        secondaryCta: { label: 'Food Distribution', path: '/solutions/food-distribution' },
      },
      foodDistribution: {
        title: 'Food Distribution',
        subtitle: 'Lot-driven distribution workflows for traceability-heavy operations.',
        scopeTitle: 'Distribution scope',
        scopeSubtitle: 'Operational coverage available now.',
        included: [
          'Inventory and lot controls for traceability-heavy operations.',
          'Purchases, stock updates, and invoicing in one operational chain.',
          'Portal-ready tax workflow support for Canadian teams.',
        ],
        cta: 'Book distribution demo',
        secondaryCta: { label: 'Manufacturing', path: '/solutions/manufacturing' },
      },
    },
    modules: {
      heroTitle: 'Modules that work as one system.',
      heroSubtitle:
        'Each module is independently usable and connected through one controlled data foundation.',
      activeLabel: 'Active',
      includedTitle: 'Included',
      modules: [
        {
          name: 'Finance',
          included: ['Journal controls', 'Expense capture', 'Invoice-linked accounting events'],
        },
        {
          name: 'Inventory',
          included: ['Lot tracking', 'Stock locations', 'Inventory adjustments'],
        },
        {
          name: 'Warehouse',
          included: ['Shipments', 'Picking support', 'Delivery-ready movement flow'],
        },
        { name: 'BOM', included: ['Bill of materials setup', 'Material linkage to production'] },
        {
          name: 'Production',
          included: ['Production transactions', 'Inventory impact traceability'],
        },
        {
          name: 'Invoicing',
          included: [
            'Invoice creation and editing',
            'Custom PDF output',
            'Client-level billing defaults',
          ],
        },
        {
          name: 'Purchasing',
          included: ['Vendor purchasing flows', 'Cost capture tied to inventory'],
        },
        {
          name: 'Taxes',
          included: [
            'GST/HST + PST/QST reporting',
            'Return snapshots',
            'Portal-ready filing workflow',
          ],
        },
      ],
    },
    security: {
      heroTitle: 'Security and architecture by design.',
      heroSubtitle:
        'Tenant boundaries, least-privilege access, and auditable transaction behavior.',
      overview: {
        title: 'Security overview',
        subtitle:
          'A conservative summary of the controls currently visible in the product and delivery workflow.',
        description:
          'ZANVROX is built around tenant isolation, role-aware access, and server-enforced handling for sensitive operations. Public security statements are limited to controls that are implemented today and intentionally avoid certification or coverage claims that are not yet in place.',
        bullets: [
          'Security posture is centered on least-privilege access, organization scoping, and auditable operational behavior.',
          'Sensitive areas can require stronger authentication before access is granted.',
          'Infrastructure and delivery rely on managed platform providers rather than self-managed server operations.',
        ],
      },
      matrix: {
        title: 'Control matrix',
        subtitle: 'Every control statement is tied to an implementation mechanism.',
      },
      controls: [
        {
          control: 'Tenant isolation',
          support: 'PostgreSQL RLS policies scoped by org_id across operational tables.',
        },
        {
          control: 'Access control',
          support: 'Org membership and role-gated write paths for critical operations.',
        },
        {
          control: 'Change traceability',
          support: 'Transaction-level IDs, timestamps, and filing confirmation records.',
        },
        {
          control: 'Server-side enforcement',
          support: 'Critical accounting and tax actions executed through SQL/Edge controls.',
        },
      ],
      sections: [
        {
          title: 'Access Control & Authentication',
          items: [
            'Role-based access control is enforced through organization membership, module permissions, and role-gated write paths.',
            'MFA is available through authenticator-app TOTP factors.',
            'Sensitive ERP areas can require step-up authentication at AAL2 before access is granted.',
          ],
        },
        {
          title: 'Data Isolation',
          items: [
            'Tenant-level isolation is scoped by organization identifiers and database security policies.',
            'Operational reads and writes are tied to the active organization context.',
            'Data separation is logical within the shared application environment rather than based on per-tenant application stacks.',
          ],
        },
        {
          title: 'Hosting & Infrastructure',
          items: [
            'Backend services are managed through Supabase.',
            'The public frontend is delivered through Vercel.',
            'Transport encryption uses HTTPS/TLS in transit.',
            'Underlying cloud infrastructure is provider-managed rather than operated directly by ZANVROX.',
          ],
        },
        {
          title: 'Operational Security',
          items: [
            'Release gates include linting, unit tests, web tests, builds, and release validation scripts before deployment decisions.',
            'Playwright E2E coverage and hosted smoke checks are used for critical workflow validation.',
            'Dependency monitoring includes npm audit in CI for high-severity package review.',
            'Application logs are sanitized to reduce accidental exposure of emails, tokens, and other sensitive fields.',
          ],
        },
      ],
      subprocessors: {
        title: 'Subprocessors',
        subtitle:
          'Current public summary of third-party service providers used to operate the service.',
        items: [
          {
            name: 'Supabase',
            support:
              'Managed backend platform for database, authentication, storage, and server-side workflows.',
          },
          {
            name: 'Vercel',
            support: 'Managed frontend hosting and delivery for the public web experience.',
          },
          {
            name: 'Resend',
            support:
              'Transactional email delivery for limited communication and website lead routing.',
          },
        ],
        note: 'These providers are used only where needed for service operation, delivery, or transactional communication.',
      },
      disclosures: {
        title: 'Transparency & current limitations',
        subtitle: 'Conservative statements that reflect the controls currently available today.',
        items: [
          'No auto-filing claims: portal-ready workflow support only.',
          'No hidden feature flags for public capabilities.',
          'Production behavior backed by auditable logs and snapshots.',
          'MFA currently relies on authenticator-app TOTP and is not phishing-resistant.',
          'Step-up authentication is enforced on sensitive routes rather than as a global requirement for every session.',
          'WebAuthn and passkey-based authentication are not available yet.',
        ],
      },
      cta: {
        title: 'Security contact',
        subtitle:
          'Use the existing contact path for security overview requests or security/compliance follow-up.',
        primary: { label: 'Request Security Overview', path: '/contact' },
        secondary: { label: 'Contact for security/compliance inquiries', path: '/contact' },
      },
    },
    integrations: {
      heroTitle: 'Integrations and API for controlled interoperability.',
      heroSubtitle: 'Expose data and workflows without bypassing business rules.',
      posture: {
        title: 'Integration posture',
        subtitle: 'Current interoperability capabilities.',
        items: [
          'PostgREST API surface over controlled schema.',
          'Edge functions for orchestrated integration workflows.',
          'SQL functions for atomic high-risk writes.',
        ],
      },
      publication: {
        title: 'Integration standards',
        subtitle: 'Public implementation posture for launch readiness.',
        items: [
          'API-first structure with explicit route ownership.',
          'Tenant-aware access boundaries for all integration flows.',
          'Operational exports in CSV/PDF for portal and audit workflows.',
        ],
      },
    },
    ai: {
      heroTitle: 'Operational AI with controlled guardrails.',
      heroSubtitle: 'AI support is available for assistance workflows with human control.',
      scope: {
        title: 'AI scope',
        subtitle: 'Available now for controlled assistance use-cases.',
        items: [
          'Contextual AI assistance in operational interfaces.',
          'Internal collaboration support through chat workflows.',
          'Human review preserved for compliance-sensitive actions.',
        ],
      },
      note: 'AI recommendations are assistive. Final operational and compliance actions remain user-confirmed.',
    },
    pricing: {
      heroTitle: 'Pricing for ZANVROX ERP and ZANVROX Workforce.',
      heroSubtitle:
        'Start with Workforce for frontline shift operations, ZANVROX ERP for finance and business operations, or both together. Transparent CAD pricing for Canadian SMB teams.',
      pricingNote:
        'Prices in Canadian dollars. Taxes not included. Pricing may vary for enterprise or high-volume deployments. Payroll is a separate add-on. ZANVROX helps organize financial, payroll, and workforce workflows, but it does not replace accounting, legal, or tax advice.',
      upgradePath: {
        eyebrow: 'Start where your business is today',
        title: 'One platform as your business grows',
        subtitle:
          'This is not a required sequence. A business can contract directly whichever plan fits today.',
        steps: [
          { name: 'Workforce', body: 'CAD 29-79 per location' },
          { name: 'Finance', body: 'CAD 179 / month' },
          { name: 'Business', body: 'CAD 349 / month' },
          { name: 'Operations', body: 'CAD 649 / month, Workforce included' },
          { name: 'Enterprise', body: 'Custom' },
        ],
        note: 'Already running your business on ZANVROX? Workforce comes included with Operations.',
      },
      bundleOffers: {
        operationsIncluded: {
          title: 'Operations includes ZANVROX Workforce',
          body: 'ZANVROX Workforce included for the employees and locations covered by your ERP subscription. No separate Workforce fee for that scope.',
        },
        businessDiscount: {
          title: '50% off Workforce with Business',
          body: 'Business ERP customers receive 50% off their eligible ZANVROX Workforce standalone plan.',
        },
        financeStandalone: {
          title: 'Finance and Workforce, independently',
          body: 'Finance does not include Workforce. You can buy Finance plus a Workforce standalone plan without any obligation to upgrade to Business or Operations.',
        },
      },
      workforce: {
        title: 'ZANVROX Workforce',
        subtitle:
          'Clock in and out, schedules, tasks and timesheets for frontline teams, priced per location.',
        launchBadge: 'Annual billing available',
        launchOfferLabel: 'Annual Workforce plans include two months free when billed yearly.',
        launchOfferNote:
          'Pricing shown here is informational; billing is confirmed when you start.',
        popularLabel: 'Most popular',
        priceSuffixMonthly: '/month per location',
        billedMonthlyLabel: 'Monthly billing',
        billedAnnuallyLabel: 'Annual billing',
        fromLabel: 'From',
        customLabel: 'Custom pricing',
        includesLabel: 'Included',
        entitiesIncludedLabel: 'Billing scope',
        usersIncludedLabel: 'Employees included',
        billingToggle: {
          monthly: 'Monthly',
          annual: 'Annual',
          annualBadge: '2 months free',
          helper:
            'Annual billing changes only the base subscription term and equals 10 months of the monthly rate.',
        },
        tiers: [
          {
            slug: 'workforce-starter',
            name: 'Starter',
            summary:
              'For a single location that needs clock-ins, schedules, and timesheets in one app.',
            entitiesLabel: 'Priced per location',
            usersLabel: 'Up to 10 employees',
            monthly: { kind: 'fixed', amount: 29, note: 'Billed per location, per month.' },
            annual: {
              kind: 'fixed',
              amount: 29,
              badge: '2 months free',
              note: 'Billed annually at CAD 290 per location.',
            },
            included: [
              'Clock in / out',
              'Location verification',
              'Timesheets',
              'Schedules',
              'Tasks',
            ],
            ctaLabel: 'Start with Starter',
          },
          {
            slug: 'workforce-team',
            name: 'Team',
            isPopular: true,
            summary:
              'For locations that need manager controls, shift requests, and stronger reporting.',
            entitiesLabel: 'Priced per location',
            usersLabel: 'Up to 25 employees',
            monthly: { kind: 'fixed', amount: 49, note: 'Billed per location, per month.' },
            annual: {
              kind: 'fixed',
              amount: 49,
              badge: '2 months free',
              note: 'Billed annually at CAD 490 per location.',
            },
            included: [
              'Everything in Starter',
              'Manager controls',
              'Open shifts and shift requests',
              'Team communication',
              'Enhanced reporting',
              'More operational controls',
            ],
            ctaLabel: 'Start with Team',
          },
          {
            slug: 'workforce-business',
            name: 'Business',
            summary:
              'For larger locations that need advanced manager controls and multiple managers.',
            entitiesLabel: 'Priced per location',
            usersLabel: 'Up to 50 employees',
            monthly: { kind: 'fixed', amount: 79, note: 'Billed per location, per month.' },
            annual: {
              kind: 'fixed',
              amount: 79,
              badge: '2 months free',
              note: 'Billed annually at CAD 790 per location.',
            },
            included: [
              'Everything in Team',
              'Advanced manager controls',
              'More reporting',
              'Multiple managers',
              'Advanced workforce operations',
            ],
            ctaLabel: 'Start with Business',
          },
          {
            slug: 'workforce-multi-location',
            name: 'Multi-location',
            summary: 'For chains, multi-location groups, and locations with 50+ employees.',
            entitiesLabel: 'Custom multi-location pricing',
            usersLabel: '50+ employees per location',
            monthly: {
              kind: 'custom',
              label: 'Custom pricing',
              note: 'Scoped for chains, multi-location groups, and special operational needs.',
            },
            annual: {
              kind: 'custom',
              label: 'Custom pricing',
              note: 'Scoped directly based on the number of locations and employees.',
            },
            included: [
              '50+ employees per location',
              'Multi-location and chain support',
              'Special operational needs',
              'Custom rollout and support',
            ],
            ctaLabel: 'Request multi-location pricing',
          },
        ],
        comparison: {
          title: 'Workforce plan comparison',
          subtitle: 'Compare Starter, Team, and Business for a single location.',
          featureLabel: 'Capability',
          rows: [
            { label: 'Clock in / out', values: [true, true, true] },
            { label: 'Location verification', values: [true, true, true] },
            { label: 'Timesheets', values: [true, true, true] },
            { label: 'Schedules', values: [true, true, true] },
            { label: 'Tasks', values: [true, true, true] },
            { label: 'Manager controls', values: [false, true, true] },
            { label: 'Open shifts / shift requests', values: [false, true, true] },
            { label: 'Team communication', values: [false, true, true] },
            { label: 'Enhanced reporting', values: [false, true, true] },
            { label: 'Advanced manager controls', values: [false, false, true] },
            { label: 'Multiple managers', values: [false, false, true] },
            { label: 'Employees included', values: ['10', '25', '50'] },
          ],
          notesTitle: 'Commercial notes',
          notes: [
            'Priced per location, per month.',
            'Multi-location and 50+ employee locations use custom pricing.',
            'Annual billing includes two months free (10 months of the monthly rate).',
          ],
          annualNote: 'Annual Workforce plans include two months free.',
        },
      },
      erp: {
        title: 'ZANVROX ERP',
        subtitle:
          'Financial control, business operations, and connected workflows for Canadian SMB teams.',
        launchBadge: 'Annual billing available',
        launchOfferLabel: 'Annual base subscriptions include one month free when billed yearly.',
        launchOfferNote:
          'Payroll pricing remains usage-based, and Guided Implementation is available when a more structured rollout is needed.',
        popularLabel: 'Most popular',
        priceSuffixMonthly: '/month',
        billedMonthlyLabel: 'Monthly billing',
        billedAnnuallyLabel: 'Annual billing',
        fromLabel: 'From',
        customLabel: 'Custom',
        includesLabel: 'Included',
        entitiesIncludedLabel: 'Commercial scope',
        usersIncludedLabel: 'Included users',
        billingToggle: {
          monthly: 'Monthly',
          annual: 'Annual',
          annualBadge: '1 month free',
          helper:
            'Annual billing changes only the base subscription term. Payroll remains priced by base fee plus employee count.',
        },
        tiers: [
          {
            slug: 'finance',
            name: 'Finance',
            summary:
              'Financial control for growing businesses: invoicing, expenses, and reporting.',
            entitiesLabel: 'Single company scope',
            usersLabel: 'Up to 3 users',
            monthly: {
              kind: 'fixed',
              amount: 179,
              note: 'Includes self-directed setup guidance, controlled finance workflows, and email support with 48h response.',
            },
            annual: {
              kind: 'fixed',
              amount: 179,
              badge: '1 month free',
              note: 'Billed annually at CAD 1,969 for the base subscription.',
              secondaryNote: 'Workforce and broader operational scope remain separate when needed.',
            },
            included: [
              'Invoicing',
              'Customers and vendors',
              'Expenses',
              'Receivables and payables',
              'Accounting',
              'Taxes',
              'Financial reporting',
              'Email support (48h response)',
            ],
            ctaLabel: 'Review Finance',
          },
          {
            slug: 'business',
            name: 'Business',
            isPopular: true,
            summary:
              'Finance plus day-to-day business operations: purchasing, suppliers, and inventory.',
            entitiesLabel: 'Single company scope',
            usersLabel: 'Up to 6 users',
            monthly: {
              kind: 'fixed',
              amount: 349,
              badge: '50% off Workforce',
              note: 'Includes priority email support with 24h response.',
            },
            annual: {
              kind: 'fixed',
              amount: 349,
              badge: '50% off Workforce',
              note: 'Billed annually at CAD 3,839 for the base subscription.',
              secondaryNote:
                'Business ERP customers receive 50% off their eligible Workforce standalone plan.',
            },
            included: [
              'Everything in Finance',
              'Purchasing',
              'Suppliers',
              'Inventory',
              'Locations',
              'Operational dashboards',
              'Standard operational management',
              '50% off ZANVROX Workforce (standalone plan)',
              'Priority email support (24h)',
            ],
            ctaLabel: 'Review Business',
          },
          {
            slug: 'operations',
            name: 'Operations',
            summary: 'The complete ZANVROX business operations platform, with Workforce included.',
            entitiesLabel: 'Single company scope',
            usersLabel: 'Up to 10 users',
            monthly: {
              kind: 'fixed',
              amount: 649,
              badge: 'Workforce included',
              note: 'Includes priority email support with 24h response for more operationally active teams.',
            },
            annual: {
              kind: 'fixed',
              amount: 649,
              badge: 'Workforce included',
              note: 'Billed annually at CAD 7,139 for the base subscription.',
              secondaryNote:
                'ZANVROX Workforce included for the employees and locations covered by your ERP subscription.',
            },
            included: [
              'Everything in Business',
              'Advanced inventory',
              'Advanced purchasing',
              'Multi-location operations',
              'Advanced operational controls',
              'Production (BOM)',
              'Advanced reporting',
              'Management controls',
              'ZANVROX Workforce included',
              'Priority email support (24h)',
            ],
            ctaLabel: 'Review Operations',
          },
          {
            slug: 'enterprise',
            name: 'Enterprise',
            summary:
              'For large organizations, complex groups, many locations, high volumes, and custom requirements.',
            entitiesLabel: 'Multi-location or custom scope',
            usersLabel: 'Custom user scope',
            monthly: {
              kind: 'custom',
              label: 'Custom',
              note: 'Scoped review for multi-location rollout, guided setup, integrations, governance needs, and security review.',
            },
            annual: {
              kind: 'custom',
              label: 'Custom',
              note: 'Custom pricing is scoped directly based on operating structure, rollout needs, and implementation context.',
            },
            included: [
              'Multi-location rollout',
              'Advanced governance',
              'Integrations',
              'Security review path',
              'Special contracts',
              'Guided implementation and rollout support',
            ],
            ctaLabel: 'Contact us',
          },
        ],
        comparison: {
          title: 'ERP plan comparison',
          subtitle:
            'Use this to decide whether you need financial control, day-to-day operations, or the complete operations platform.',
          featureLabel: 'Capability',
          rows: [
            { label: 'Accounting', values: [true, true, true, true] },
            { label: 'Invoicing', values: [true, true, true, true] },
            { label: 'Expenses', values: [true, true, true, true] },
            { label: 'Financial reports', values: [true, true, true, true] },
            { label: 'Purchasing', values: [false, true, true, true] },
            { label: 'Inventory', values: [false, true, true, true] },
            { label: 'Locations', values: [false, true, true, true] },
            { label: 'Warehouse', values: [false, false, true, true] },
            { label: 'Production (BOM)', values: [false, false, true, true] },
            { label: 'Approvals and governance', values: [false, true, true, true] },
            { label: 'Multi-location rollout', values: [false, false, true, true] },
            { label: 'Integrations', values: [false, false, false, true] },
            { label: 'ZANVROX Workforce', values: ['Add-on', '50% off', 'Included', 'Custom'] },
            {
              label: 'Support tier',
              values: [
                'Email / 48h',
                'Priority email / 24h',
                'Priority email / 24h',
                'Direct channel',
              ],
            },
            {
              label: 'Onboarding assistance',
              values: ['Self-setup', 'Self-setup', 'Self-setup', 'Included'],
            },
            { label: 'Users included', values: ['3', '6', '10', 'Custom'] },
          ],
          notesTitle: 'Commercial notes',
          notes: [
            'Payroll is a separate add-on for every ERP plan.',
            'Guided Implementation is optional and priced separately for teams that want a more structured rollout.',
            'Enterprise is the path for multi-location scope, integrations, security review, and guided implementation context.',
            'The commercial model is designed to preserve transparency while supporting controlled workflows and auditability as requirements grow.',
          ],
          annualNote: 'Annual base plans include one month free.',
        },
      },
      payrollAddon: {
        title: 'Payroll add-on',
        summary:
          'Separate payroll pricing keeps the base ERP commercially clear while preserving Canadian payroll workflow support for teams that need it.',
        priceLabel: 'CAD 59 / month + CAD 6 / employee / month',
        annualPriceLabel: 'CAD 59 / month + CAD 6 / employee / month',
        monthlyNote:
          'Includes Canadian payroll runs, remittance workflow support, pay stubs, records and exports to support year-end review, and accounting integration. Monthly minimum may apply during rollout. Payroll is not included with ZANVROX Workforce.',
        annualNote:
          'The payroll add-on keeps the same base plus employee pricing structure when billed annually unless scoped otherwise.',
        included: [
          'Canadian payroll runs',
          'Remittance workflow support',
          'Pay stubs',
          'Records and exports to support review',
          'Accounting integration',
        ],
        ctaLabel: 'Ask about payroll',
      },
      onboardingPackage: {
        title: 'Guided Implementation',
        summary:
          'Optional one-time guided setup for teams that want operational alignment, assisted rollout, and a more structured implementation start.',
        priceLabel: 'CAD 3,500 to 7,500 one-time',
        included: [
          'Guided system setup',
          'Operational alignment review',
          'Chart of accounts review',
          'Tax configuration',
          'Data import guidance',
          'Assisted rollout training session',
        ],
        note: 'Optional guided implementation for organizations that want hands-on migration, configuration and launch support. Standard plans can still start with self-directed setup when a lighter rollout is appropriate.',
        ctaLabel: 'Request guided setup',
      },
      supportTiers: {
        title: 'Support structure',
        subtitle:
          'Support is stated publicly so teams can evaluate operating coverage, response expectations, and rollout posture upfront.',
        items: [
          { name: 'Finance', body: 'Email support with 48h response time.' },
          { name: 'Business', body: 'Priority email support with 24h response time.' },
          {
            name: 'Operations',
            body: 'Priority email support with 24h response time, including Workforce for covered locations.',
          },
          {
            name: 'Enterprise',
            body: 'Guided rollout support, direct support channel, and scoped implementation discussion.',
          },
        ],
      },
      faq: {
        title: 'Pricing FAQ',
        subtitle: 'Answers for teams that want to self-qualify before a call.',
        items: [
          {
            question: 'Do I need a demo before I can start?',
            answer:
              'No. The intended path is self-evaluation first: watch the overview, explore the product, review pricing, and use the browser-based evaluation workspace before requesting a guided session.',
          },
          {
            question: 'Is Workforce included in the ERP plans?',
            answer:
              'Operations includes ZANVROX Workforce for the employees and locations covered by that ERP subscription. Business does not include Workforce but qualifies for 50% off an eligible Workforce standalone plan. Finance does not include Workforce.',
          },
          {
            question: 'Can I buy Workforce without the ERP?',
            answer:
              'Yes. ZANVROX Workforce is available as a standalone plan, priced per location, with no requirement to purchase or upgrade to any ERP plan.',
          },
          {
            question: 'Is payroll included in the base ERP plans or in Workforce?',
            answer:
              'No. Payroll is sold as a separate add-on with a monthly base fee plus per-employee pricing. It is not included with ZANVROX Workforce.',
          },
          {
            question: 'Is Guided Implementation required?',
            answer:
              'No. It is optional. Finance, Business, and Operations can start with self-directed setup, while Guided Implementation is available for teams that want a more structured rollout.',
          },
          {
            question: 'What support comes with each plan?',
            answer:
              'Finance includes 48h email support, Business and Operations include 24h priority email support, and Enterprise includes guided rollout discussion plus a direct support channel.',
          },
        ],
      },
      ctaPrimary: { label: 'Open evaluation workspace', path: '/resources#demo-environment' },
      ctaSecondary: { label: 'Contact for custom rollout', path: '/contact' },
    },
    workforce: {
      heroKicker: 'ZANVROX WORKFORCE',
      heroTitle: 'Run every shift with less chaos.',
      heroSubtitle:
        'Clock in & out, schedules, tasks and timesheets for frontline teams — all connected in one simple workplace app.',
      heroPrimaryCta: { label: 'Start with Workforce', path: '/pricing#workforce-pricing' },
      heroSecondaryCta: { label: 'Join the Ontario Restaurant Beta', path: '/workforce/beta' },
      heroPreview: {
        title: 'Shift preview',
        type: 'workforce',
        caption: 'Built for frontline teams',
        callouts: [
          { status: 'ready', text: 'Clock in / out' },
          { status: 'ready', text: 'Schedules and timesheets' },
        ],
      },
      existingCustomer: {
        title: 'Already using ZANVROX ERP?',
        body: 'Workforce is included with eligible ERP plans.',
        cta: { label: 'See ERP plans with Workforce included', path: '/pricing#erp-pricing' },
      },
      sections: {
        eyebrow: 'What Workforce covers',
        title: 'Everything a shift needs, connected',
        subtitle:
          'ZANVROX Workforce covers the parts of a shift that usually live in spreadsheets, paper timesheets, and group chats.',
        items: [
          {
            eyebrow: 'Clock in & clock out',
            title: 'Employees clock in and out from their phone with location-aware verification.',
            body: 'Clock events are tied to authorized work moments, not continuous tracking of a person.',
            bullets: [
              'Clock in and clock out from a phone in seconds',
              'Breaks tracked in the same flow',
              'Location-aware verification at clock in/out, where geofencing is enabled for a location',
              'Offline resilience so a shift can start even with a weak connection',
            ],
          },
          {
            eyebrow: 'Schedules & shifts',
            title: 'Schedules the whole team can see, from any phone.',
            body: 'Managers publish schedules; employees see their shifts in one place.',
            bullets: [
              'Schedules',
              'Upcoming shifts',
              'Open shifts, where enabled',
              'Shift changes and shift requests, where enabled',
            ],
          },
          {
            eyebrow: 'Timesheets',
            title: 'Worked hours become a timesheet automatically.',
            body: 'Clock events roll up into timesheets that managers can review.',
            bullets: [
              'Worked hours',
              'Employee timesheets',
              'Corrections',
              'Manager review and approval, where enabled',
            ],
          },
          {
            eyebrow: 'Tasks & checklists',
            title: 'Daily tasks and checklists, done from the floor.',
            body: 'Opening and closing routines become trackable checklists instead of memory.',
            bullets: [
              'Daily tasks',
              'Opening tasks',
              'Closing tasks',
              'Operational checklists',
              'Comments and evidence, where enabled',
            ],
          },
          {
            eyebrow: 'Team operations',
            title: 'Keep the team aligned between shifts.',
            body: 'Shared context for the team without a separate messaging tool.',
            bullets: ['Announcements', 'Shift notes', 'Handoffs', 'Requests', 'Team communication'],
          },
          {
            eyebrow: 'Manager control',
            title: 'One place for managers to see how a shift is going.',
            body: 'Oversight for the people running the day-to-day operation.',
            bullets: [
              'Timesheet review',
              'Schedule management',
              'Tasks',
              'Anomalies',
              'Location-aware clock events',
              'Team oversight',
            ],
          },
        ],
      },
      industries: {
        title: 'Built for frontline and shift-based teams',
        subtitle: 'ZANVROX Workforce is not built only for restaurants.',
        items: [
          'Restaurants',
          'Cafés',
          'Retail',
          'Hospitality',
          'Services',
          'Warehouses',
          'Multi-location businesses',
        ],
      },
      cta: {
        title: 'Start with Workforce',
        subtitle: 'Add the ERP when you need it.',
        primary: { label: 'Start with Workforce', path: '/pricing#workforce-pricing' },
        secondary: { label: 'Workforce for Restaurants', path: '/workforce/restaurants' },
      },
    },
    workforceRestaurants: {
      heroKicker: 'ZANVROX WORKFORCE FOR RESTAURANTS',
      heroTitle: 'Built for the reality of restaurant shifts.',
      heroSubtitle:
        'Clock-ins, schedules, timesheets and daily tasks without spreadsheets, paper timesheets or disconnected tools.',
      heroPrimaryCta: { label: 'Start with Workforce', path: '/pricing#workforce-pricing' },
      heroSecondaryCta: { label: 'Join the Ontario Restaurant Beta', path: '/workforce/beta' },
      heroPreview: {
        title: 'Shift preview',
        type: 'workforce',
        caption: 'Built for restaurant teams',
        callouts: [
          { status: 'ready', text: 'Clock in / out' },
          { status: 'ready', text: 'Daily tasks and checklists' },
        ],
      },
      timeline: {
        eyebrow: 'A restaurant shift, start to finish',
        title: 'Before, during, and after every shift',
        subtitle: 'The same app follows the shift from schedule to timesheet.',
        stages: [
          {
            name: 'Before the shift',
            items: ['Schedule', 'Open shifts', 'Employee visibility'],
          },
          {
            name: 'During the shift',
            items: ['Location-aware clock-in', 'Breaks', 'Tasks', 'Checklists', 'Shift notes'],
          },
          {
            name: 'After the shift',
            items: ['Clock-out', 'Worked hours', 'Timesheet', 'Manager review'],
          },
          {
            name: 'Manager',
            items: [
              'Who is working',
              'Worked hours',
              'Outstanding tasks',
              'Corrections',
              'Timesheet approval',
            ],
          },
        ],
      },
      crossSell: {
        title: 'Need more than workforce management?',
        body: 'Connect Workforce with the full ZANVROX ERP for finance, inventory, purchasing and business operations.',
        cta: { label: 'Explore ZANVROX ERP', path: '/erp' },
      },
      cta: {
        title: 'Bring Workforce to your restaurant',
        subtitle: 'Start with Workforce, or apply for the Ontario Restaurant Beta first.',
        primary: { label: 'Start with Workforce', path: '/pricing#workforce-pricing' },
        secondary: { label: 'Join the Ontario Restaurant Beta', path: '/workforce/beta' },
      },
    },
    workforceBeta: {
      heroKicker: 'ONTARIO RESTAURANT BETA',
      heroTitle: 'Test ZANVROX Workforce with your real team before our public launch.',
      heroSubtitle:
        'We’re inviting a limited group of Ontario restaurants to test ZANVROX Workforce during real shifts.',
      badges: ['14-day beta', 'No purchase commitment', '6 months free after launch'],
      intro: {
        title: 'How the beta works',
        paragraphs: [
          'We’re inviting a limited group of Ontario restaurants to test ZANVROX Workforce during real shifts.',
          'Use the app with a manager and employees, tell us what works and what needs improvement, and help us prepare for public launch.',
          'Restaurants that complete the beta receive six months of ZANVROX Workforce free after launch.',
        ],
      },
      terms: {
        title: 'Beta terms',
        subtitle: 'Commercial terms for the Ontario Restaurant Beta, stated plainly.',
        items: [
          '14-day beta period',
          'No cost during the beta',
          'No purchase commitment',
          'Restaurants that complete the beta receive 6 months of ZANVROX Workforce free after public launch',
          'After the 6 free months, you choose a Workforce plan',
          'No automatic renewal or charge from the beta without your consent',
        ],
      },
      form: {
        title: 'Apply for the beta',
        helper:
          'Tell us about your restaurant. We will review your application and follow up by email.',
        fields: {
          restaurantName: 'Restaurant name',
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
        placeholders: {
          restaurantName: 'e.g. Maple Street Kitchen',
          contactName: 'Your full name',
          email: 'you@yourrestaurant.com',
          city: 'e.g. Toronto',
          employeeCount: 'e.g. 12',
          locationCount: 'e.g. 1',
          currentMethod: 'e.g. Paper timesheets, spreadsheet, POS built-in',
          participantCount: 'e.g. 5',
          message: 'Anything else we should know?',
        },
        errors: {
          restaurantName: 'Enter your restaurant name.',
          contactName: 'Enter a contact name.',
          email: 'Enter a valid business email.',
          city: 'Enter your city.',
          employeeCount: 'Enter the number of employees.',
          locationCount: 'Enter the number of locations.',
          currentMethod: 'Tell us your current time tracking method.',
          participantCount: 'Enter how many employees could participate.',
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
          'Thank you. We’ll review your application and contact you with the private testing instructions if your restaurant is selected.',
        submitError: 'We could not submit your application. Please try again.',
      },
    },
    resources: {
      heroTitle: 'Resources for product evaluation, security review, and rollout planning.',
      heroSubtitle:
        'Use these public materials to review product fit, security posture, and evaluation options before requesting a deeper discussion.',
      sections: [
        {
          title: 'Product overview and evaluation resources',
          description:
            'Review the product overview, workflow coverage, and onboarding model before investing time in a deeper evaluation.',
          cta: 'Review product',
          path: '/erp',
        },
        {
          title: 'Security Overview',
          description:
            'Review tenant isolation, access controls, subprocessors, and current security limitations in one public overview.',
          cta: 'Review security',
          path: '/security',
        },
        {
          title: 'Evaluation workspace and guided product review',
          description:
            'Start with the shared evaluation workspace for initial review, then contact the team if you need a more structured product discussion.',
          cta: 'Open evaluation workspace',
          path: '/resources#demo-environment',
        },
        {
          title: 'Contact and additional documentation',
          description:
            'Use the contact path for security or compliance inquiries, guided review requests, or additional evaluation detail.',
          cta: 'Contact team',
          path: '/contact',
        },
      ],
      demoEnvironment: {
        title: 'Evaluation workspace',
        subtitle:
          'A browser-based workspace for initial product review with fictional sample data.',
        accessTitle: 'Guided demo access',
        accessIntro:
          'Open the workspace, create a buyer account, and the guided demo workspace will be provisioned automatically.',
        emailLabel: 'Workspace user',
        emailValue: 'Use your work email',
        passwordLabel: 'Access code',
        passwordValue: 'Set during signup',
        note: 'No install is required. This workspace is for evaluation only, uses fictional sample data, and is not intended for real company, employee, customer, payroll, or financial data.',
        guidance: [
          'Use the workspace for an initial review of navigation, workflow coverage, and general product fit.',
          'Treat the environment as a shared evaluation surface rather than a production, pilot, or data migration workspace.',
          'For a deeper review, security/compliance questions, or additional documentation, use the contact path after initial evaluation.',
        ],
        cta: { label: 'Open evaluation workspace', path: '/resources#demo-environment' },
      },
      sitemap: {
        title: 'Evaluation materials',
        subtitle:
          'The public site is intentionally compact and focused on the materials most useful during early evaluation.',
        items: [
          'Product overview and workflow coverage',
          'Public pricing and onboarding model',
          'Security Overview and current control posture',
          'Evaluation workspace with fictional sample data',
          'Contact path for guided review and follow-up questions',
          'Legal terms and privacy information',
        ],
      },
      design: {
        title: 'How to use these resources',
        subtitle:
          'A simple evaluation path for teams that want to review product fit first and involve the team only when more detail is needed.',
        directionTitle: 'Initial product review',
        componentsTitle: 'Security and compliance review',
        statesTitle: 'When to contact the team',
        direction: [
          'Start with Product, Pricing, and Resources to understand scope, onboarding posture, and commercial fit.',
          'Use the evaluation workspace for early hands-on review with fictional data only.',
          'Treat the public materials as an initial qualification layer before requesting a deeper discussion.',
        ],
        components: [
          'Use the Security Overview for tenant isolation, access control, subprocessors, and current limitations.',
          'Use the contact path for security/compliance inquiries or to request additional documentation.',
          'Keep evaluation questions tied to currently published scope and claims.',
        ],
        states: [
          'Request a guided product review when your team has concrete workflow or rollout questions.',
          'Contact the team if you need additional detail beyond the public evaluation materials.',
          'Use the existing contact path for security overview requests and security/compliance follow-up.',
        ],
      },
    },
    about: {
      heroKicker: 'About ZANVROX',
      heroTitle: 'A practical ERP positioned for credible rollout, not enterprise theatre.',
      heroSubtitle:
        'ZANVROX is presented as a modern ERP for Canadian SMB teams that want tighter operational control, fewer disconnected systems, and a clearer support path.',
      heroPrimaryCta: { label: 'Explore product', path: '/erp' },
      heroSecondaryCta: { label: 'Contact team', path: '/contact' },
      heroPreview: {
        title: 'Positioning snapshot',
        type: 'reports',
        caption: 'Operational control over software sprawl',
        callouts: [
          { status: 'ready', text: 'Clear support posture' },
          { status: 'ready', text: 'Product-led evaluation path' },
        ],
      },
      principles: {
        title: 'Three principles behind the site',
        subtitle:
          'The public positioning is optimized for a founder-led operating reality without lowering product standards.',
        items: [
          {
            title: 'Clarity',
            body: 'State what the product does, what it supports, and where review is still required.',
          },
          {
            title: 'Control',
            body: 'Focus on auditability, governance, and operational visibility instead of inflated SaaS hype.',
          },
          {
            title: 'Practical rollout',
            body: 'Make self-setup viable while keeping optional expert help available when complexity increases.',
          },
        ],
      },
      operatingModel: [
        {
          title: 'Built for Canadian SMB teams',
          subtitle:
            'The public website targets companies that need credible ERP control without enterprise consulting overhead on day one.',
          items: [
            'Best fit around 10-50 employees',
            'Strong value where finance and operations are split across too many tools',
            'Clear path from finance core into operations and payroll add-on scope',
          ],
        },
        {
          title: 'Commercially disciplined',
          subtitle:
            'The site is designed to reduce low-quality meetings and make expectations explicit before the first conversation.',
          items: [
            'Optional demo instead of demo-first funnel',
            'Public pricing with support tiers and onboarding expectations',
            'Security and governance claims aligned with actual product posture',
          ],
        },
      ],
      cta: {
        title: 'See if the operating model fits your team',
        subtitle: 'Use Product, Pricing, and Resources to qualify fit before reaching out.',
        primary: { label: 'View pricing', path: '/pricing' },
        secondary: { label: 'Go to contact', path: '/contact' },
      },
    },
    contact: {
      heroTitle: 'Contact the team only when you need help with a real evaluation question.',
      heroSubtitle:
        'The intended flow is product overview, product exploration, pricing review, browser-based evaluation, and then optional contact or guided walkthrough request.',
      conversion: {
        title: 'Recommended evaluation flow',
        subtitle:
          'This reduces unnecessary meetings and gives better context when someone does reach out.',
        cards: [
          {
            title: 'Watch product overview',
            body: 'Start with the video to understand the operating model and product posture.',
          },
          {
            title: 'Explore features',
            body: 'Use Product, Pricing, and Security pages to evaluate the stack without a call.',
          },
          {
            title: 'Open the evaluation workspace',
            body: 'Validate the UI with fictional data before requesting a guided session.',
          },
          {
            title: 'Request help if needed',
            body: 'Use the forms below for an optional demo or a focused product question.',
          },
        ],
      },
      supportBlock: {
        title: 'Support expectations',
        subtitle: 'All website contact flows route to support@zanvrox.com.',
        items: [
          'Finance: email support with 48h response time',
          'Business and Operations: priority email support with 24h response time',
          'Enterprise: direct support channel plus onboarding assistance',
        ],
      },
      pricingContext: {
        title: 'Selected pricing context',
        subtitle:
          'Pricing context stays attached to your request so follow-up remains grounded in the setup you selected.',
        labels: {
          plan: 'Plan',
          billing: 'Billing',
          payroll: 'Payroll',
          offer: 'Offer',
          notSelected: 'Not selected',
          payrollInterested: 'Payroll add-on selected',
          payrollNotSelected: 'No payroll add-on selected',
        },
      },
      demoForm: {
        title: 'Request guided walkthrough',
        helper: 'Use this after your team has reviewed the product and wants a guided walkthrough.',
        confirmation:
          'Your guided walkthrough request was sent successfully. We will follow up by email.',
        submittingCta: 'Sending...',
        submitError: 'We could not submit your request. Please try again.',
        messageHint:
          'Optional. Use this to describe your current stack, rollout timing, or payroll question.',
        fields: {
          name: 'Name*',
          company: 'Company*',
          email: 'Work email*',
          companySize: 'Company size*',
          interestArea: 'Interest area*',
          message: 'Optional message',
          consent:
            'I agree to be contacted by ZANVROX about this business request. We only use this data to respond to the inquiry.',
        },
        placeholders: {
          email: 'name@company.com',
          companySize: 'Select company size',
          interestArea: 'Select area of interest',
          message: 'What do you want to validate in a guided session?',
        },
        options: {
          companySizes: ['1-10 employees', '10-50 employees', '50-100 employees', '100+ employees'],
          interestAreas: [
            'Finance',
            'Business',
            'Operations',
            'Workforce',
            'Payroll add-on',
            'Guided Implementation',
            'Enterprise rollout',
            'Integrations / API',
          ],
        },
        errors: {
          name: 'Enter your name.',
          company: 'Enter your company name.',
          email: 'Enter a valid work email.',
          companySize: 'Select company size.',
          interestArea: 'Select an interest area.',
          message: 'Keep the message under 2000 characters.',
          consent: 'Consent is required to submit this form.',
          startedAt: 'Please take a moment before submitting.',
          website: 'Spam protection triggered.',
        },
        cta: 'Request guided walkthrough',
      },
      briefForm: {
        title: 'Ask a product question',
        helper:
          'Use this for product fit, support, onboarding, implementation, or payroll scope questions.',
        confirmation: 'Your message was sent successfully. We will reply by email.',
        submittingCta: 'Sending...',
        submitError: 'We could not submit your request. Please try again.',
        messageHint:
          'Optional. Use this if you want to describe your workflow, support need, or implementation question.',
        fields: {
          name: 'Name*',
          company: 'Company*',
          email: 'Work email*',
          companySize: 'Company size*',
          interestArea: 'Interest area*',
          message: 'Optional message',
          consent: 'I agree to receive the requested follow-up from ZANVROX.',
        },
        placeholders: {
          email: 'name@company.com',
          companySize: 'Select company size',
          interestArea: 'Select area of interest',
          message: 'What would you like clarified before your team spends more evaluation time?',
        },
        options: {
          companySizes: ['1-10 employees', '10-50 employees', '50-100 employees', '100+ employees'],
          interestAreas: [
            'Product fit',
            'Pricing and support',
            'Sandbox access',
            'Data import',
            'Payroll add-on',
            'Guided Implementation',
          ],
        },
        errors: {
          name: 'Enter your name.',
          company: 'Enter your company name.',
          email: 'Enter a valid work email.',
          companySize: 'Select company size.',
          interestArea: 'Select an interest area.',
          message: 'Keep the message under 2000 characters.',
          consent: 'Consent is required to submit this form.',
          startedAt: 'Please take a moment before submitting.',
          website: 'Spam protection triggered.',
        },
        cta: 'Send question',
      },
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        updated: 'August 7, 2026',
        updatedLabel: 'Last updated',
        paragraphs: [
          'ZANVROX collects business contact information submitted through this website for product evaluation, demo scheduling, beta applications, and documentation requests.',
          'We process submitted data for sales and product qualification purposes only.',
          'ZANVROX Workforce uses device location only at the moment an employee clocks in or clocks out, and only where an employer has enabled location-aware verification for a work location. Location is tied to that specific clock event, not collected continuously or used to track an employee outside of authorized clock-in and clock-out moments.',
          'Workforce location and clock-event data is used to verify that a clock-in or clock-out happened at an authorized work location, and to support the resulting timesheet. It is visible to the employee and to that employer’s authorized managers.',
          'Employees can decline to grant location permission; depending on the employer’s configuration, this may mean a clock event cannot be verified as location-aware, and the employer should provide an alternative process.',
          'Workforce and other operational records are retained for as long as needed to support payroll, timesheet, and employment record-keeping requirements, and are protected with the same access and security controls described in our Security page.',
          'You may request access, correction, or deletion of submitted data by contacting support@zanvrox.com.',
        ],
      },
      terms: {
        title: 'Terms of Service',
        updated: 'August 7, 2026',
        updatedLabel: 'Last updated',
        paragraphs: [
          'This site provides product information and lead intake forms for ZANVROX ERP commercial evaluation.',
          'Website content is informational and does not constitute a binding product commitment.',
          'Product scope and commercial terms are finalized in signed agreements.',
        ],
      },
    },
    notFound: {
      title: 'Page not found',
      subtitle: 'The URL does not match the published ZANVROX site structure.',
      cta: 'Go home',
    },
  },

  footer: {
    companyDescription:
      'Integrated ERP for Canadian SMB teams that need finance, operations, tax workflow support, and payroll workflows in one controlled stack.',
    headquarters: 'Toronto, Ontario, Canada',
    email: 'support@zanvrox.com',
    sections: [
      {
        title: 'Products',
        links: [
          { label: 'ERP', path: '/erp' },
          { label: 'Workforce', path: '/workforce' },
          { label: 'Workforce for Restaurants', path: '/workforce/restaurants' },
          { label: 'Pricing', path: '/pricing' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Resources', path: '/resources' },
          { label: 'Security', path: '/security' },
          { label: 'Privacy', path: '/legal/privacy' },
          { label: 'Terms', path: '/legal/terms' },
          { label: 'Account deletion', path: '/account-deletion' },
          { label: 'Contact', path: '/contact' },
        ],
      },
    ],
    links: [
      { label: 'ERP', path: '/erp' },
      { label: 'Workforce', path: '/workforce' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Resources', path: '/resources' },
      { label: 'Security', path: '/security' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Privacy', path: '/legal/privacy' },
      { label: 'Terms', path: '/legal/terms' },
      { label: 'Account deletion', path: '/account-deletion' },
    ],
  },
  seo: {
    home: {
      title: 'ZANVROX | Canadian Operations ERP for Growing SMBs',
      description:
        'Integrated ERP for Canadian SMB teams with accounting, invoicing, inventory, warehouse, production, governance, tax workflow support, and payroll add-on support.',
      path: '/',
    },
    product: {
      title: 'ZANVROX ERP | Finance, Operations and Workforce Platform',
      description:
        'Explore finance, invoicing, expenses, purchasing, inventory, operations, reporting, payroll workflows, and ZANVROX Workforce inside the ZANVROX ERP stack.',
      path: '/erp',
    },
    workforce: {
      title: 'ZANVROX Workforce | Time Tracking, Scheduling & Tasks',
      description:
        'Clock in and out, manage schedules, track timesheets and organize daily tasks with ZANVROX Workforce.',
      path: '/workforce',
    },
    workforceRestaurants: {
      title: 'Restaurant Workforce Management | ZANVROX Workforce',
      description: 'Clock-ins, schedules, timesheets and daily team tasks for restaurant teams.',
      path: '/workforce/restaurants',
    },
    workforceBeta: {
      title: 'Ontario Restaurant Beta | ZANVROX Workforce',
      description: 'Ontario restaurants can apply to test ZANVROX Workforce before public launch.',
      path: '/workforce/beta',
    },
    security: {
      title: 'Security | ZANVROX',
      description:
        'Review tenant isolation, role controls, approvals, governance, and architecture safeguards behind ZANVROX.',
      path: '/security',
    },
    pricing: {
      title: 'Pricing | ZANVROX',
      description:
        'Review public CAD pricing for ZANVROX Workforce (Starter, Team, Business) and ZANVROX ERP (Finance, Business, Operations, Enterprise), the payroll add-on, and optional Guided Implementation.',
      path: '/pricing',
    },
    resources: {
      title: 'Resources | ZANVROX',
      description:
        'Use product resources, evaluation workspace guidance, and security overview material to self-evaluate ZANVROX.',
      path: '/resources',
    },
    about: {
      title: 'About | ZANVROX',
      description:
        'Learn how ZANVROX positions finance, operations, governance, and rollout discipline for Canadian SMB teams.',
      path: '/about',
    },
    contact: {
      title: 'Contact | ZANVROX',
      description:
        'Request an optional demo or ask a focused product, payroll, onboarding, or implementation question.',
      path: '/contact',
    },
    privacy: {
      title: 'Privacy Policy | ZANVROX',
      description: 'Privacy policy for ZANVROX website and related lead processing.',
      path: '/legal/privacy',
    },
    terms: {
      title: 'Terms of Service | ZANVROX',
      description: 'Terms of service governing use of ZANVROX website and materials.',
      path: '/legal/terms',
    },
  },
};

export default siteContentEn;
