// Todo el texto de la home en español. Cada hecho sale del CV vigente: no agregar nada que no esté ahí.
// Un "|" separa la parte del título que va en el color de acento.

export const es = {
  lang: 'es',
  meta: {
    title: 'Bautista Tolloni | CRM, automatización y email marketing B2B',
    description:
      'Implemento CRM (GoHighLevel, Zoho, Bitrix24), automatizaciones con n8n y la infraestructura de email (SPF, DKIM, DMARC) para que cada lead llegue al equipo correcto y cada correo, a la bandeja de entrada.',
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
    eyebrow: ['Bautista Tolloni', 'Córdoba, AR', 'GMT−3', 'Remoto'],
    srTitle: 'Bautista Tolloni: CRM, automatización y email marketing B2B.',
    phrases: [
      'Leads que no se |pierden.',
      'Emails que |llegan.',
      'CRMs que el equipo |usa.',
      'Automatizaciones que no se |rompen.',
      'Outbound que recibe |respuestas.',
    ],
    lead: 'Implemento CRM, automatizaciones y la infraestructura de email para que cada lead llegue al equipo correcto y cada correo, a la bandeja de entrada.',
    primary: 'Hablemos',
    secondary: 'Ver casos',
    cv: { label: 'Descargar CV', href: '/cv/Bautista_Tolloni_CV_ES.pdf' },
    recruiter: '¿Buscas sumar a alguien a tu equipo?',
    recruiterLink: 'Perfil para recruiters',
    chips: ['GoHighLevel', 'Zoho CRM', 'Bitrix24', 'n8n', 'Clay', 'Snov.io', 'SPF · DKIM · DMARC'],
    flow: {
      label: 'El recorrido de un lead',
      badge: 'ejemplo',
      rows: [
        { title: 'Formulario web', detail: 'lead.nuevo · origen: Meta Ads', status: 'recibido' },
        { title: 'CRM', detail: 'etapa: Nuevo → Contactado', status: 'asignado' },
        { title: 'Secuencia', detail: 'paso 2 de 3 · asunto B', status: 'enviado' },
        { title: 'Bandeja de entrada', detail: 'dominio autenticado', status: 'entregado' },
      ],
      checks: ['SPF pass', 'DKIM pass', 'DMARC pass'],
    },
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Empecé del lado del cliente. |Me quedé por los sistemas.',
    paragraphs: [
      'Empecé en una fintech acompañando a los usuarios en el onboarding, la activación y la reactivación, con Microsoft Dynamics 365 como herramienta de todos los días. Ahí entendí que la experiencia del cliente depende de lo que pasa detrás: datos limpios, etapas claras y avisos a tiempo.',
      'Después pasé dos años en una agencia de marketing B2B de Barcelona, con dos cargos en paralelo. Implementé CRMs desde cero, construí las automatizaciones que los alimentan y llevé el email y el outbound de varias cuentas a la vez, cada una con su stack, su dominio y su customer journey.',
      'Hoy, además, construyo Nesvir, mi propio SaaS: del producto al código, con su embudo de captación, su CRM y su correo automatizado.',
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
    title: 'Lo que monto, |de punta a punta.',
    intro: 'Cuatro piezas que funcionan solas, pero rinden más juntas: el lead entra, el CRM lo ordena, la automatización lo trabaja y el correo llega.',
    items: [
      {
        title: 'Implementación de CRM',
        text: 'Monto el CRM desde cero u ordeno el que ya tienes: formularios, pipelines, calendarios y enrutamiento de leads. Integro los leads de Meta Ads y Google Ads para que lleguen limpios y segmentados.',
        tools: ['GoHighLevel', 'Zoho CRM', 'Bitrix24'],
      },
      {
        title: 'Dominios y entregabilidad',
        text: 'Configuro DNS, SPF, DKIM y DMARC, caliento los dominios y cuido la reputación del remitente para que tus correos lleguen a la bandeja de entrada y no a spam.',
        tools: ['SPF', 'DKIM', 'DMARC', 'Warm-up', 'Postmaster Tools'],
      },
      {
        title: 'Automatizaciones',
        text: 'Flujos de bienvenida, nurturing, reactivación y win-back alineados al recorrido de cada cliente, y automatizaciones en n8n que conectan el CRM con el resto de tus herramientas, incluida IA con revisión humana.',
        tools: ['n8n', 'Zoho Automation', 'GoHighLevel', 'Mailchimp', 'Doppler'],
      },
      {
        title: 'Outbound B2B',
        text: 'Armo y segmento la base de prospectos, busco los correos, escribo el copy y corro la secuencia con variantes de asunto. También el outreach en LinkedIn, con seguimiento de respuestas.',
        tools: ['Sales Navigator', 'Linked Helper', 'Clay', 'Snov.io', 'Apollo.io'],
      },
    ],
  },
  cases: {
    eyebrow: 'Casos',
    title: 'Trabajo real, |con pruebas que se pueden tocar.',
    intro: 'Sin datos de clientes: cada caso muestra el problema, lo que construí y el resultado.',
    labels: { problem: 'Problema', built: 'Qué construí', result: 'Resultado' },
    items: [
      {
        kind: 'SaaS propio · en producción',
        title: 'Nesvir',
        problem: 'El conocimiento de cómo trabaja una empresa vive en la cabeza de las personas y se va con ellas.',
        built: 'Un SaaS de documentación de procesos, de punta a punta: producto, diseño y código. Embudo de demo con validación y límite anti-abuso, CRM propio en Kanban de siete etapas y correo transaccional con Resend.',
        result: 'En producción, con SPF, DKIM y DMARC (p=quarantine) alineados y verificados con envíos reales.',
        tools: ['Next.js', 'Supabase', 'Resend', 'Vercel'],
        link: { label: 'Ver nesvir.com', href: 'https://nesvir.com' },
        featured: true,
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
        kind: 'Automatización con IA',
        title: 'Correos redactados con IA, revisados por una persona',
        problem: 'Personalizar cada correo a mano no escala.',
        built: 'Un flujo en n8n que lee los contactos de Google Sheets, redacta un correo personalizado con la API de Claude, lo pasa por revisión y lo envía solo.',
        result: 'Usado en campañas reales.',
        tools: ['n8n', 'API de Claude', 'Google Sheets'],
      },
      {
        kind: 'Caso técnico · WhatsApp',
        title: 'Bot con enrutamiento por intención',
        problem: 'Consultas de Ventas y de Posventa mezcladas en el mismo canal.',
        built: 'Un flujo en Flow Builder que detecta la intención desde el primer mensaje y deriva a Ventas o a Posventa, con IA anclada a una base de conocimiento, alta en el CRM vía API y turnos enviados a Google Sheets por webhook.',
        result: 'Caso técnico resuelto de punta a punta, con el flujo publicado.',
        tools: ['Flow Builder', 'API REST', 'Webhook', 'Google Sheets'],
        link: {
          label: 'Ver el caso',
          href: 'https://bautolloni-png.github.io/Proyectos/customer-success/atom-motortech-bot/',
        },
      },
      {
        kind: 'Outbound',
        title: 'Secuencias multipaso con variantes de asunto',
        problem: 'Envíos en frío que no recibían respuestas.',
        built: 'Bases segmentadas con Sales Navigator y Linked Helper, correos encontrados con Clay y secuencias de varios pasos en Snov.io con una variante de asunto en cada envío.',
        result: 'Mejor apertura y más respuestas que con un asunto único.',
        tools: ['Snov.io', 'Clay', 'Sales Navigator'],
        link: {
          label: 'Ver la secuencia nodo por nodo',
          href: 'https://bautolloni-png.github.io/Proyectos/#cold-email',
        },
      },
    ],
  },
  experience: {
    eyebrow: 'Experiencia',
    title: 'Dónde |lo aprendí.',
    items: [
      {
        company: 'Ranking Online',
        context: 'Agencia de marketing digital B2B · Barcelona, España (remoto)',
        dates: 'ago 2024 – sep 2026',
        summary: 'Varias cuentas en paralelo, cada una con su stack, su dominio y su customer journey.',
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
    title: 'El stack, |por nivel de evidencia.',
    intro: 'Separo lo que usé con clientes de lo que solo certifiqué y de lo que estoy aprendiendo.',
    levels: [
      {
        name: 'En producción',
        tone: 'pass',
        groups: [
          { name: 'CRM', tools: ['GoHighLevel', 'Zoho CRM', 'Bitrix24', 'Microsoft Dynamics 365'] },
          { name: 'Email y outbound', tools: ['Mailchimp', 'Doppler', 'Zoho Campaigns', 'Snov.io', 'Apollo.io', 'HTML/CSS para email'] },
          { name: 'Automatización y prospección', tools: ['n8n', 'Zoho Automation', 'Clay', 'Linked Helper', 'Sales Navigator'] },
          { name: 'Entregabilidad', tools: ['DNS', 'SPF', 'DKIM', 'DMARC', 'MXToolbox', 'Postmaster Tools'] },
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
        groups: [{ name: '', tools: ['SQL'] }],
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos de |lo que necesitas.',
    text: 'Si quieres ordenar tu CRM, mejorar la entregabilidad o sumar a alguien a tu equipo, escríbeme.',
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
      motives: { project: 'Un proyecto para mi empresa', job: 'Una vacante en mi equipo' },
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame qué necesitas o pega el enlace del puesto.',
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
      subject: { project: 'Web: consulta por un proyecto', job: 'Web: consulta por una vacante' },
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
      title: 'Contratar a Bautista Tolloni | CRM & Marketing Automation Specialist',
      description:
        'CRM & Marketing Automation Specialist con disponibilidad inmediata, remoto desde Argentina (GMT−3). Implementación de CRM, automatizaciones, email marketing y entregabilidad. CV en español e inglés.',
    },
    eyebrow: ['Para recruiters', 'Córdoba, AR', 'GMT−3'],
    title: 'CRM & Marketing Automation |Specialist.',
    lead: 'Implemento y administro CRMs, construyo las automatizaciones que los alimentan y cuido que el email llegue a la bandeja de entrada. Busco un puesto remoto, en relación de dependencia o por contrato.',
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
        'CRM Specialist',
        'Marketing Automation Specialist',
        'Email Marketing y Lifecycle',
        'Marketing Operations',
        'Outbound B2B',
      ],
    },
    value: {
      eyebrow: 'Qué aporto',
      title: 'Lo que sumo |a un equipo.',
      items: [
        {
          title: 'Varios stacks a la vez',
          text: 'Dos años en agencia llevando varias cuentas en paralelo, cada una con su CRM, su dominio y su customer journey. Eso me mostró más formas en que un sistema falla que un único stack.',
        },
        {
          title: 'Entregabilidad de punta a punta',
          text: 'Configuré más de 50 dominios de envío: DNS, SPF, DKIM, DMARC y warm-up. Sé por qué un correo llega y por qué no.',
        },
        {
          title: 'Datos limpios antes de automatizar',
          text: 'Segmento, etiqueto y limpio las bases antes de construir encima, para que cada envío y cada reporte sean confiables.',
        },
        {
          title: 'IA con revisión humana',
          text: 'Uso IA donde suma: un flujo de n8n con la API de Claude que redacta correos y los pasa por revisión antes de enviarlos, y Nesvir, mi SaaS en producción.',
        },
      ],
    },
    contact: {
      title: '¿Tienes una vacante |que encaje?',
      text: 'Escríbeme con el enlace del puesto. Tengo disponibilidad inmediata.',
      emailSubject: 'Vacante para Bautista Tolloni',
    },
  },
};

export type Content = typeof es;
