// Todo el texto de la home en español. Cada hecho sale del CV vigente: no agregar nada que no esté ahí.
// Un "|" separa la parte del título que va en el color de acento.

export const es = {
  lang: 'es',
  meta: {
    title: 'Bautista Tolloni | Prospección B2B automatizada, CRM y entregabilidad',
    description:
      'Automatizo la prospección B2B de tu empresa: armo la lista, monto las secuencias, configuro los dominios (SPF, DKIM, DMARC) para que lleguen a la bandeja de entrada y conecto cada respuesta a tu CRM.',
  },
  ids: {
    about: 'sobre-mi',
    services: 'servicios',
    cases: 'casos',
    experience: 'experiencia',
    stack: 'herramientas',
    contact: 'contacto',
  },
  nav: {
    about: 'Sobre mí',
    services: 'Servicios',
    cases: 'Casos',
    experience: 'Experiencia',
    cta: 'Hablemos',
    menu: 'Menú',
    skip: 'Saltar al contenido',
    switchLabel: 'EN',
    switchAria: 'Read in English',
  },
  hero: {
    eyebrow: ['Prospección B2B automatizada', 'Córdoba, AR', 'Remoto'],
    srTitle: 'Bautista Tolloni: prospección B2B automatizada que llega a la bandeja de entrada.',
    phrases: ['Automatizo la |prospección B2B de tu empresa.'],
    lead: 'Armo la lista de prospectos, monto las secuencias, configuro los dominios de envío y conecto las respuestas a tu CRM.',
    primary: 'Hablemos',
    secondary: 'Ver casos',
    cv: { label: 'Descargar CV', href: '/cv/Bautista_Tolloni_CV_ES.pdf' },
    recruiter: '¿Buscas sumar a alguien a tu equipo?',
    recruiterLink: 'Perfil para recruiters',
    chips: ['Sales Navigator', 'Clay', 'Snov.io', 'n8n + IA', 'SPF · DKIM · DMARC', 'GoHighLevel', 'Zoho CRM'],
    flow: {
      label: 'Así funciona tu outbound',
      badge: 'ejemplo',
      rows: [
        { title: 'Lista de prospectos', detail: 'cliente ideal · Sales Navigator', status: 'segmentada' },
        { title: 'Correo personalizado', detail: 'n8n + IA · revisión humana', status: 'aprobado' },
        { title: 'Bandeja de entrada', detail: 'dominio autenticado y caliente', status: 'entregado' },
        { title: 'Respuesta → CRM', detail: 'etapa: Respondió → Reunión', status: 'asignada' },
      ],
      checks: ['SPF pass', 'DKIM pass', 'DMARC pass'],
    },
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'De atención al cliente |a la prospección B2B.',
    paragraphs: [
      'Empecé en una fintech acompañando a los usuarios en el onboarding, la activación y la reactivación, con Microsoft Dynamics 365 como herramienta de todos los días. Ahí entendí que lo que pasa detrás define la experiencia del cliente: datos limpios, etapas claras y seguimiento a tiempo.',
      'Después pasé dos años en una agencia de marketing B2B de Barcelona, con dos cargos en paralelo. Armé y segmenté bases de prospectos, corrí secuencias de outbound, automaticé el outreach en LinkedIn y configuré más de 50 dominios de envío para que esos correos llegaran a la bandeja de entrada. Y cuando alguien respondía, el CRM que yo había implementado lo recibía.',
      'Hoy, además, construyo Nesvir, mi propio SaaS, con su propio embudo de captación, su CRM y su correo automatizado.',
    ],
    card: {
      monogram: 'BT',
      place: 'Villa Allende, Córdoba',
      zone: 'GMT−3',
      status: 'Disponibilidad inmediata',
    },
    facts: [
      { value: '+50', label: 'dominios de envío configurados' },
      { value: '2', label: 'cargos en paralelo en una agencia de Barcelona' },
      { value: '1', label: 'SaaS propio en producción' },
    ],
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Qué |hago.',
    intro: 'Trabajo cuatro partes de la prospección: la lista, los dominios de envío, los correos y el seguimiento en el CRM.',
    items: [
      {
        title: 'Lista de prospectos',
        text: 'Definimos juntos tu cliente ideal. Armo y segmento la base con filtros avanzados y busco los correos de contacto.',
        tools: ['Sales Navigator', 'Linked Helper', 'Clay', 'Apollo.io'],
      },
      {
        title: 'Dominios y entregabilidad',
        text: 'Configuro los dominios de envío con SPF, DKIM y DMARC, los caliento antes de aumentar el volumen y controlo la reputación del remitente.',
        tools: ['SPF', 'DKIM', 'DMARC', 'Warm-up', 'Postmaster Tools'],
      },
      {
        title: 'Secuencias y outreach',
        text: 'Armo secuencias de varios pasos en la herramienta de envío y hago el outreach en LinkedIn. Cuando conviene, personalizo cada correo con IA y una revisión humana antes de enviarlo.',
        tools: ['Snov.io', 'n8n', 'API de Claude', 'Linked Helper'],
      },
      {
        title: 'Respuestas al CRM',
        text: 'Cada respuesta entra al CRM con su etapa y su próxima acción. Si no tienes CRM, lo implemento desde cero.',
        tools: ['GoHighLevel', 'Zoho CRM', 'Bitrix24'],
      },
    ],
  },
  process: {
    eyebrow: 'Cómo empezamos',
    title: 'Cómo |trabajo.',
    steps: [
      {
        title: 'Diagnóstico',
        text: 'Revisamos a quién le vendes, cómo prospectas hoy, el estado de tus dominios y tu CRM.',
      },
      {
        title: 'Montaje',
        text: 'Preparo los dominios, armo la lista, monto la secuencia y conecto las respuestas al CRM.',
      },
      {
        title: 'Lanzamiento y ajuste',
        text: 'Empezamos con poco volumen, miramos entregas, aperturas y respuestas, y ajustamos antes de aumentarlo.',
      },
    ],
    notes: [
      'No garantizo una cantidad de reuniones. Te paso los números de cada envío.',
      'Antes de enviar, revisamos los requisitos legales del país al que le escribes. En España, por ejemplo, el correo comercial en frío está muy regulado.',
    ],
  },
  cases: {
    eyebrow: 'Casos',
    title: 'Proyectos en los que |trabajé.',
    intro: 'Sin datos de clientes. Cada caso muestra el problema, lo que hice y el resultado.',
    labels: { problem: 'Problema', built: 'Qué hice', result: 'Resultado' },
    items: [
      {
        kind: 'Outbound B2B · agencia de Barcelona',
        title: 'Prospección para varias cuentas a la vez',
        problem: 'Cuentas B2B que necesitaban conseguir clientes nuevos, cada una con su mercado, su dominio y su CRM.',
        built: 'Bases segmentadas con Sales Navigator y Linked Helper, correos encontrados con Clay, secuencias de varios pasos en Snov.io y outreach automatizado en LinkedIn, con seguimiento de respuestas.',
        result: 'Mejor tasa de apertura con dominios bien configurados y bases más limpias, y cada respuesta registrada en el CRM del cliente.',
        tools: ['Sales Navigator', 'Linked Helper', 'Clay', 'Snov.io'],
        link: {
          label: 'Ver una secuencia nodo por nodo',
          href: 'https://bautolloni-png.github.io/Proyectos/#cold-email',
        },
        featured: true,
      },
      {
        kind: 'Personalización con IA',
        title: 'Correos redactados con IA, revisados por una persona',
        problem: 'Personalizar cada correo a mano lleva demasiado tiempo.',
        built: 'Un flujo en n8n que lee los contactos de Google Sheets, redacta un correo personalizado con la API de Claude, lo pasa por revisión y lo envía solo.',
        result: 'Usado en campañas reales.',
        tools: ['n8n', 'API de Claude', 'Google Sheets'],
      },
      {
        kind: 'Entregabilidad',
        title: 'Infraestructura de envío para más de 50 dominios',
        problem: 'Campañas que se abrían poco o terminaban en spam.',
        built: 'Configuré y mantuve DNS, SPF, DKIM, DMARC, warm-up y reputación de remitente en los dominios de los clientes.',
        result: 'Mejor entregabilidad y mejor tasa de apertura en las campañas.',
        tools: ['DNS', 'SPF', 'DKIM', 'DMARC', 'MXToolbox'],
        link: {
          label: 'Probar el constructor de DMARC',
          href: 'https://bautolloni-png.github.io/Proyectos/#entregabilidad',
        },
      },
      {
        kind: 'SaaS propio · en producción',
        title: 'Nesvir: el embudo de captación de mi propio producto',
        problem: 'Un producto nuevo necesita captar y ordenar a cada interesado desde el primer día.',
        built: 'El formulario de demo con validación y límite anti-abuso, un CRM propio en Kanban de siete etapas y la respuesta automática por correo con Resend, sobre un dominio con SPF, DKIM y DMARC (p=quarantine) alineados.',
        result: 'En producción en nesvir.com y verificado con envíos reales.',
        tools: ['Next.js', 'Supabase', 'Resend', 'Vercel'],
        link: { label: 'Ver nesvir.com', href: 'https://nesvir.com' },
      },
      {
        kind: 'Caso técnico · WhatsApp',
        title: 'Bot que deriva cada consulta según su intención',
        problem: 'Consultas de Ventas y de Posventa mezcladas en el mismo canal.',
        built: 'Un flujo en Flow Builder que detecta la intención desde el primer mensaje y deriva a Ventas o a Posventa, con IA anclada a una base de conocimiento, alta en el CRM vía API y turnos enviados a Google Sheets por webhook.',
        result: 'Caso técnico resuelto de punta a punta, con el flujo publicado.',
        tools: ['Flow Builder', 'API REST', 'Webhook', 'Google Sheets'],
        link: {
          label: 'Ver el caso',
          href: 'https://bautolloni-png.github.io/Proyectos/customer-success/atom-motortech-bot/',
        },
      },
    ],
  },
  experience: {
    eyebrow: 'Experiencia',
    title: 'Trabajos |anteriores.',
    items: [
      {
        company: 'Ranking Online',
        context: 'Agencia de marketing digital B2B · Barcelona, España (remoto)',
        dates: 'ago 2024 – sep 2026',
        summary: 'Prospección B2B, email y CRM para varias cuentas en paralelo, cada una con su stack, su dominio y su customer journey.',
        roles: [
          {
            title: 'Especialista en CRM y Automatización de Marketing',
            dates: 'ago 2024 – sep 2026',
            start: 0,
            end: 1,
          },
          {
            title: 'Especialista en Email Marketing y Lifecycle',
            dates: 'ago 2025 – sep 2026',
            start: 12 / 26,
            end: 1,
          },
        ],
        parallelNote: 'Dos cargos en paralelo, no un ascenso.',
      },
      {
        company: 'Bezza (ex TACA TACA)',
        context: 'Fintech · Córdoba, Argentina (remoto)',
        dates: 'abr 2023 – jun 2024',
        summary: 'Onboarding, activación y reactivación de usuarios, con el ciclo de vida del cliente en Microsoft Dynamics 365.',
        roles: [{ title: 'Customer Service Agent – CRM', dates: 'abr 2023 – jun 2024', start: 0, end: 1 }],
      },
    ],
    education: {
      label: 'Formación',
      text: 'Universidad Siglo 21 · Lic. en Comercialización y Lic. en Administración de Empresas · 2020 – 2024',
    },
  },
  stack: {
    eyebrow: 'Herramientas',
    title: 'Herramientas que |uso.',
    intro: 'Separadas en las que usé con clientes, las que solo certifiqué y las que estoy aprendiendo.',
    levels: [
      {
        name: 'En producción',
        tone: 'pass',
        groups: [
          { name: 'Prospección y outbound', tools: ['Sales Navigator', 'Linked Helper', 'Clay', 'Apollo.io', 'Snov.io'] },
          { name: 'Entregabilidad', tools: ['DNS', 'SPF', 'DKIM', 'DMARC', 'MXToolbox', 'Postmaster Tools'] },
          { name: 'Automatización', tools: ['n8n', 'API de Claude', 'Zoho Automation'] },
          { name: 'CRM', tools: ['GoHighLevel', 'Zoho CRM', 'Bitrix24', 'Microsoft Dynamics 365'] },
          { name: 'Email marketing', tools: ['Mailchimp', 'Doppler', 'Zoho Campaigns', 'HTML/CSS para email'] },
          { name: 'Datos', tools: ['Looker Studio', 'Power BI', 'GA4', 'Excel'] },
        ],
      },
      {
        name: 'Certificado',
        tone: 'muted',
        note: 'Sin uso en producción.',
        groups: [{ name: '', tools: ['HubSpot (Email Marketing, Marketing Hub, Inbound)', 'Klaviyo'] }],
      },
      {
        name: 'Aprendiendo',
        tone: 'outline',
        groups: [{ name: '', tools: ['SQL', 'HubSpot en la práctica', 'Make', 'Zapier', 'Salesforce Admin'] }],
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Escríbeme.',
    text: 'Cuéntame a quién le vendes y cómo prospectas hoy, y te respondo por correo.',
    email: 'bautolloni@gmail.com',
    emailSubject: 'Hola, Bautista',
    emailLabel: 'Escríbeme por correo',
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bautistatolloni' },
    cvLabel: 'Descargar CV',
    meta: 'Villa Allende, Córdoba · GMT−3 · Español nativo · Inglés B2',
    orEmail: '¿Prefieres el correo? También puedes escribirme directo.',
    form: {
      name: 'Nombre',
      company: 'Empresa',
      optional: 'opcional',
      email: 'Correo',
      motive: 'Te escribo por',
      motives: { project: 'Prospección para mi empresa', job: 'Una vacante en mi equipo' },
      message: 'Mensaje',
      messagePlaceholder: '¿A quién le vendes y cómo prospectas hoy? Si es por una vacante, pega el enlace.',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      privacy: 'Uso tus datos solo para responderte.',
      errors: {
        name: 'Escribe tu nombre.',
        email: 'Revisa el correo: parece incompleto.',
        motive: 'Elige un motivo.',
        message: 'Cuéntame un poco más (mínimo 10 caracteres).',
        send: 'No se pudo enviar. Prueba de nuevo en un momento o escríbeme a bautolloni@gmail.com.',
      },
      success: {
        title: '¡Gracias! Recibí tu mensaje.',
        text: 'Te respondo a tu correo lo antes posible.',
        again: 'Enviar otro mensaje',
      },
      subject: { project: 'Web: consulta por prospección', job: 'Web: consulta por una vacante' },
    },
  },
  footer: {
    rights: 'Bautista Tolloni',
    portfolio: { label: 'Portfolio interactivo', href: 'https://bautolloni-png.github.io/Proyectos/' },
    recruiters: 'Para recruiters',
  },
  paths: { home: '/', recruiters: '/contratar/' },
  recruiters: {
    meta: {
      title: 'Contratar a Bautista Tolloni | CRM, Marketing Automation y automatización GTM',
      description:
        'CRM & Marketing Automation Specialist con disponibilidad inmediata, remoto desde Argentina (GMT−3). Implementación de CRM, automatizaciones con n8n e IA, email marketing y entregabilidad. CV en español e inglés.',
    },
    eyebrow: ['Para recruiters', 'Córdoba, AR', 'GMT−3'],
    title: 'CRM & Marketing Automation |Specialist.',
    lead: 'Implemento y administro CRMs, construyo automatizaciones con n8n y la API de Claude, y cuido que el email llegue a la bandeja de entrada. Busco un puesto remoto, en relación de dependencia o por contrato, con procesos en español o en inglés.',
    cvEs: { label: 'CV en español', href: '/cv/Bautista_Tolloni_CV_ES.pdf' },
    cvEn: { label: 'CV in English', href: '/cv/Bautista_Tolloni_CV_EN.pdf' },
    write: 'Escribirme',
    glance: {
      eyebrow: 'De un vistazo',
      title: 'Los datos |prácticos.',
      items: [
        { label: 'Disponibilidad', value: 'Inmediata' },
        { label: 'Modalidad', value: 'Remoto' },
        { label: 'Huso horario', value: 'GMT−3, Argentina' },
        { label: 'Idiomas', value: 'Español nativo · Inglés B2' },
        { label: 'Contratación', value: 'Relación de dependencia o contrato' },
        { label: 'Experiencia', value: '3 años con CRM, los últimos 2 en marketing' },
      ],
    },
    roles: {
      label: 'Puestos que busco',
      items: [
        'Marketing Automation Specialist',
        'CRM Specialist',
        'Marketing Operations',
        'Revenue Operations (RevOps)',
        'Automatización GTM (n8n, Clay, IA)',
        'Email Marketing y Lifecycle',
      ],
      note: 'Puestos de sistemas y automatización. No busco puestos de SDR ni de llamadas en frío.',
    },
    learning: {
      label: 'En qué me estoy formando',
      items: ['SQL, con los datos de mi propio SaaS', 'HubSpot en la práctica', 'Make y Zapier', 'Salesforce Administrator', 'Inglés oral hacia C1'],
    },
    value: {
      eyebrow: 'Qué aporto',
      title: 'Qué puedo |aportar.',
      items: [
        {
          title: 'Prospección de punta a punta',
          text: 'Armé listas, busqué correos, corrí secuencias, configuré dominios y conecté las respuestas al CRM, todo en proyectos reales.',
        },
        {
          title: 'CRM desde cero, en varias cuentas',
          text: 'Implementé GoHighLevel, Zoho CRM y Bitrix24 desde cero para varias cuentas en paralelo: pipelines, formularios, workflows y enrutamiento de leads.',
        },
        {
          title: 'Entregabilidad',
          text: 'Configuré más de 50 dominios de envío: DNS, SPF, DKIM, DMARC y warm-up.',
        },
        {
          title: 'IA con revisión humana',
          text: 'Armé un flujo en n8n con la API de Claude que redacta correos y los pasa por revisión antes de enviarlos.',
        },
      ],
    },
    contact: {
      title: 'Escríbeme.',
      text: 'Escríbeme con el enlace del puesto, en español o en inglés. Tengo disponibilidad inmediata.',
      emailSubject: 'Vacante para Bautista Tolloni',
    },
  },
};

export type Content = typeof es;
