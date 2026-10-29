// English copy of the home. Same facts as es.ts, same "|" accent convention.
import type { Content } from './es';

export const en: Content = {
  lang: 'en',
  meta: {
    title: 'Bautista Tolloni | Automated B2B outbound, CRM and deliverability',
    description:
      'I automate your company’s B2B outbound: I build the list, set up the sequences, configure your domains (SPF, DKIM, DMARC) so they land in the inbox, and route every reply into your CRM.',
  },
  ids: {
    about: 'about',
    services: 'services',
    cases: 'work',
    experience: 'experience',
    stack: 'stack',
    contact: 'contact',
  },
  nav: {
    about: 'About',
    services: 'Services',
    cases: 'Work',
    experience: 'Experience',
    cta: "Let's talk",
    menu: 'Menu',
    skip: 'Skip to content',
    switchLabel: 'ES',
    switchAria: 'Leer en español',
  },
  hero: {
    eyebrow: ['Automated B2B outbound', 'Córdoba, AR', 'Remote'],
    srTitle: 'Bautista Tolloni: automated B2B outbound that lands in the inbox.',
    phrases: ['I automate your company’s |B2B outbound.'],
    lead: 'I build the prospect list, set up the sequences, configure the sending domains and connect replies to your CRM.',
    primary: "Let's talk",
    secondary: 'See the work',
    cv: { label: 'Download CV', href: '/cv/Bautista_Tolloni_CV_EN.pdf' },
    recruiter: 'Hiring for your team?',
    recruiterLink: 'Profile for recruiters',
    chips: ['Sales Navigator', 'Clay', 'Snov.io', 'n8n + AI', 'SPF · DKIM · DMARC', 'GoHighLevel', 'Zoho CRM'],
    flow: {
      label: 'How your outbound works',
      badge: 'example',
      rows: [
        { title: 'Prospect list', detail: 'ideal customer · Sales Navigator', status: 'segmented' },
        { title: 'Personalised email', detail: 'n8n + AI · human review', status: 'approved' },
        { title: 'Inbox', detail: 'authenticated, warmed-up domain', status: 'delivered' },
        { title: 'Reply → CRM', detail: 'stage: Replied → Meeting', status: 'assigned' },
      ],
      checks: ['SPF pass', 'DKIM pass', 'DMARC pass'],
    },
  },
  about: {
    eyebrow: 'About',
    title: 'From customer service |to B2B outbound.',
    paragraphs: [
      'I started at a fintech, guiding users through onboarding, activation and reactivation, with Microsoft Dynamics 365 as my everyday tool. That is where I learned that what happens behind the scenes shapes the customer experience: clean data, clear stages and timely follow-up.',
      'Then I spent two years at a B2B marketing agency in Barcelona, in two parallel roles. I built and segmented prospect lists, ran outbound sequences, automated LinkedIn outreach and configured 50+ sending domains so those emails reached the inbox. And when someone replied, the CRM I had implemented picked it up.',
      'Today I also build Nesvir, my own SaaS, with its own lead funnel, CRM and automated email.',
    ],
    card: {
      monogram: 'BT',
      place: 'Villa Allende, Córdoba',
      zone: 'GMT−3',
      status: 'Available now',
    },
    facts: [
      { value: '50+', label: 'sending domains configured' },
      { value: '2', label: 'parallel roles at a Barcelona agency' },
      { value: '1', label: 'own SaaS in production' },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'What I |do.',
    intro: 'I work on four parts of outbound: the list, the sending domains, the emails and the follow-up in the CRM.',
    items: [
      {
        title: 'Prospect list',
        text: 'We define your ideal customer together. I build and segment the list with advanced filters and find the contact emails.',
        tools: ['Sales Navigator', 'Linked Helper', 'Clay', 'Apollo.io'],
      },
      {
        title: 'Domains & deliverability',
        text: 'I set up the sending domains with SPF, DKIM and DMARC, warm them up before increasing volume and monitor sender reputation.',
        tools: ['SPF', 'DKIM', 'DMARC', 'Warm-up', 'Postmaster Tools'],
      },
      {
        title: 'Sequences & outreach',
        text: 'I build multi-step sequences in the sending tool and run LinkedIn outreach. When it makes sense, I personalise each email with AI and a human review before it goes out.',
        tools: ['Snov.io', 'n8n', 'Claude API', 'Linked Helper'],
      },
      {
        title: 'Replies into your CRM',
        text: 'Every reply goes into the CRM with its stage and next step. If you don’t have a CRM, I implement one from scratch.',
        tools: ['GoHighLevel', 'Zoho CRM', 'Bitrix24'],
      },
    ],
  },
  process: {
    eyebrow: 'How we start',
    title: 'How I |work.',
    steps: [
      {
        title: 'Diagnosis',
        text: 'We look at who you sell to, how you prospect today, and the state of your domains and CRM.',
      },
      {
        title: 'Setup',
        text: 'I prepare the domains, build the list, set up the sequence and connect replies to your CRM.',
      },
      {
        title: 'Launch & adjust',
        text: 'We start at low volume, track deliveries, opens and replies, and adjust before increasing it.',
      },
    ],
    notes: [
      'I don’t guarantee a number of meetings. I share the numbers from every send.',
      'Before sending, we check the legal requirements of the country you’re writing to. In Spain, for example, cold commercial email is tightly regulated.',
    ],
  },
  cases: {
    eyebrow: 'Work',
    title: 'Projects I’ve |worked on.',
    intro: 'No client data. Each case shows the problem, what I did and the result.',
    labels: { problem: 'Problem', built: 'What I did', result: 'Result' },
    items: [
      {
        kind: 'B2B outbound · Barcelona agency',
        title: 'Outbound for several accounts at once',
        problem: 'B2B accounts that needed new clients, each with its own market, domain and CRM.',
        built: 'Lists segmented with Sales Navigator and Linked Helper, emails found with Clay, multi-step Snov.io sequences and automated LinkedIn outreach with reply tracking.',
        result: 'Better open rates thanks to well-configured domains and cleaner lists, with every reply logged in the client’s CRM.',
        tools: ['Sales Navigator', 'Linked Helper', 'Clay', 'Snov.io'],
        link: {
          label: 'See a sequence step by step',
          href: 'https://bautolloni-png.github.io/Proyectos/#cold-email',
        },
        featured: true,
      },
      {
        kind: 'AI personalisation',
        title: 'AI-drafted emails, reviewed by a person',
        problem: 'Personalising every email by hand takes too long.',
        built: 'An n8n flow that reads contacts from Google Sheets, drafts a personalised email with the Claude API, sends it through review and then sends it automatically.',
        result: 'Used in real campaigns.',
        tools: ['n8n', 'Claude API', 'Google Sheets'],
      },
      {
        kind: 'Deliverability',
        title: 'Sending infrastructure for 50+ domains',
        problem: 'Campaigns with low opens or landing in spam.',
        built: 'I configured and maintained DNS, SPF, DKIM, DMARC, warm-up and sender reputation on client domains.',
        result: 'Better deliverability and better open rates across campaigns.',
        tools: ['DNS', 'SPF', 'DKIM', 'DMARC', 'MXToolbox'],
        link: {
          label: 'Try the DMARC builder',
          href: 'https://bautolloni-png.github.io/Proyectos/#entregabilidad',
        },
      },
      {
        kind: 'Own SaaS · in production',
        title: 'Nesvir: the lead funnel of my own product',
        problem: 'A new product needs to capture and organise every lead from day one.',
        built: 'The demo request form with validation and abuse limits, a seven-stage Kanban CRM, and the automatic email reply with Resend, on a domain with SPF, DKIM and DMARC (p=quarantine) aligned.',
        result: 'In production at nesvir.com and verified with real sends.',
        tools: ['Next.js', 'Supabase', 'Resend', 'Vercel'],
        link: { label: 'Visit nesvir.com', href: 'https://nesvir.com' },
      },
      {
        kind: 'Technical case · WhatsApp',
        title: 'A bot that routes each enquiry by intent',
        problem: 'Sales and after-sales enquiries mixed in the same channel.',
        built: 'A Flow Builder flow that detects intent from the first message and routes to Sales or After-sales, with AI grounded in a knowledge base, CRM sign-up via API and bookings sent to Google Sheets by webhook.',
        result: 'Technical case solved end to end, with the flow published.',
        tools: ['Flow Builder', 'REST API', 'Webhook', 'Google Sheets'],
        link: {
          label: 'See the case',
          href: 'https://bautolloni-png.github.io/Proyectos/customer-success/atom-motortech-bot/',
        },
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Previous |roles.',
    items: [
      {
        company: 'Ranking Online',
        context: 'B2B digital marketing agency · Barcelona, Spain (remote)',
        dates: 'Aug 2024 – Sep 2026',
        summary: 'B2B outbound, email and CRM for several accounts in parallel, each with its own stack, domain and customer journey.',
        roles: [
          {
            title: 'CRM & Marketing Automation Specialist',
            dates: 'Aug 2024 – Sep 2026',
            start: 0,
            end: 1,
          },
          {
            title: 'Email Marketing & Lifecycle Specialist',
            dates: 'Aug 2025 – Sep 2026',
            start: 12 / 26,
            end: 1,
          },
        ],
        parallelNote: 'Two parallel roles, not a promotion.',
      },
      {
        company: 'Bezza (formerly TACA TACA)',
        context: 'Fintech · Córdoba, Argentina (remote)',
        dates: 'Apr 2023 – Jun 2024',
        summary: 'User onboarding, activation and reactivation, managing the customer lifecycle in Microsoft Dynamics 365.',
        roles: [{ title: 'Customer Service Agent – CRM', dates: 'Apr 2023 – Jun 2024', start: 0, end: 1 }],
      },
    ],
    education: {
      label: 'Education',
      text: 'Universidad Siglo 21 · BA in Marketing and BA in Business Administration · 2020 – 2024',
    },
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Tools I |use.',
    intro: 'Split into the ones I used with clients, the ones I only certified and the ones I’m learning.',
    levels: [
      {
        name: 'In production',
        tone: 'pass',
        groups: [
          { name: 'Prospecting & outbound', tools: ['Sales Navigator', 'Linked Helper', 'Clay', 'Apollo.io', 'Snov.io'] },
          { name: 'Deliverability', tools: ['DNS', 'SPF', 'DKIM', 'DMARC', 'MXToolbox', 'Postmaster Tools'] },
          { name: 'Automation', tools: ['n8n', 'Claude API', 'Zoho Automation'] },
          { name: 'CRM', tools: ['GoHighLevel', 'Zoho CRM', 'Bitrix24', 'Microsoft Dynamics 365'] },
          { name: 'Email marketing', tools: ['Mailchimp', 'Doppler', 'Zoho Campaigns', 'HTML/CSS for email'] },
          { name: 'Data', tools: ['Looker Studio', 'Power BI', 'GA4', 'Excel'] },
        ],
      },
      {
        name: 'Certified',
        tone: 'muted',
        note: 'No production use.',
        groups: [{ name: '', tools: ['HubSpot (Email Marketing, Marketing Hub, Inbound)', 'Klaviyo'] }],
      },
      {
        name: 'Learning',
        tone: 'outline',
        groups: [{ name: '', tools: ['SQL', 'HubSpot in practice', 'Make', 'Zapier', 'Salesforce Admin'] }],
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch.',
    text: 'Tell me who you sell to and how you prospect today, and I’ll reply by email.',
    email: 'bautolloni@gmail.com',
    emailSubject: 'Hi Bautista',
    emailLabel: 'Email me',
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bautistatolloni' },
    cvLabel: 'Download CV',
    meta: 'Villa Allende, Córdoba · GMT−3 · Native Spanish · English B2',
    orEmail: 'Prefer email? You can also write to me directly.',
    form: {
      name: 'Name',
      company: 'Company',
      optional: 'optional',
      email: 'Email',
      motive: 'I’m writing about',
      motives: { project: 'Outbound for my company', job: 'A role on my team' },
      message: 'Message',
      messagePlaceholder: 'Who do you sell to and how do you prospect today? If it’s about a role, paste the link.',
      send: 'Send message',
      sending: 'Sending…',
      privacy: 'I only use your details to reply to you.',
      errors: {
        name: 'Please enter your name.',
        email: 'Please check your email address.',
        motive: 'Please choose an option.',
        message: 'Tell me a bit more (at least 10 characters).',
        send: 'It couldn’t be sent. Please try again in a moment or email me at bautolloni@gmail.com.',
      },
      success: {
        title: 'Thanks! I got your message.',
        text: 'I’ll reply to your email as soon as I can.',
        again: 'Send another message',
      },
      // El asunto lo lee Bautista: queda en español y marca que vino de la versión en inglés.
      subject: { project: 'Web (EN): consulta por prospección', job: 'Web (EN): consulta por una vacante' },
    },
  },
  footer: {
    rights: 'Bautista Tolloni',
    portfolio: { label: 'Interactive portfolio', href: 'https://bautolloni-png.github.io/Proyectos/' },
    recruiters: 'For recruiters',
  },
  paths: { home: '/en/', recruiters: '/en/hire/' },
  recruiters: {
    meta: {
      title: 'Hire Bautista Tolloni | CRM, Marketing Automation & GTM Automation',
      description:
        'CRM & Marketing Automation Specialist, available now, remote from Argentina (GMT−3). CRM implementation, automation with n8n and AI, email marketing and deliverability. CV in English and Spanish.',
    },
    eyebrow: ['For recruiters', 'Córdoba, AR', 'GMT−3'],
    title: 'CRM & Marketing Automation |Specialist.',
    lead: 'I implement and manage CRMs, build automations with n8n and the Claude API, and make sure email lands in the inbox. I’m looking for a remote role, as an employee or a contractor, with hiring processes in English or Spanish.',
    cvEs: { label: 'CV en español', href: '/cv/Bautista_Tolloni_CV_ES.pdf' },
    cvEn: { label: 'CV in English', href: '/cv/Bautista_Tolloni_CV_EN.pdf' },
    write: 'Email me',
    glance: {
      eyebrow: 'At a glance',
      title: 'The practical |details.',
      items: [
        { label: 'Availability', value: 'Immediate' },
        { label: 'Work mode', value: 'Remote' },
        { label: 'Time zone', value: 'GMT−3, Argentina' },
        { label: 'Languages', value: 'Native Spanish · English B2' },
        { label: 'Contract', value: 'Employee or contractor' },
        { label: 'Experience', value: '3 years with CRM, the last 2 in marketing' },
      ],
    },
    roles: {
      label: 'Roles I’m looking for',
      items: [
        'Marketing Automation Specialist',
        'CRM Specialist',
        'Marketing Operations',
        'Revenue Operations (RevOps)',
        'GTM Automation (n8n, Clay, AI)',
        'Email Marketing & Lifecycle',
      ],
      note: 'Systems and automation roles. I’m not looking for SDR or cold-calling roles.',
    },
    learning: {
      label: 'What I’m learning now',
      items: ['SQL, on my own SaaS’s data', 'HubSpot in practice', 'Make and Zapier', 'Salesforce Administrator', 'Spoken English toward C1'],
    },
    value: {
      eyebrow: 'What I bring',
      title: 'What I can |bring.',
      items: [
        {
          title: 'Outbound end to end',
          text: 'I’ve built lists, found emails, run sequences, configured domains and connected replies to the CRM, all on real projects.',
        },
        {
          title: 'CRMs from scratch, across accounts',
          text: 'I implemented GoHighLevel, Zoho CRM and Bitrix24 from scratch for several accounts in parallel: pipelines, forms, workflows and lead routing.',
        },
        {
          title: 'Deliverability',
          text: 'I configured 50+ sending domains: DNS, SPF, DKIM, DMARC and warm-up.',
        },
        {
          title: 'AI with human review',
          text: 'I built an n8n flow with the Claude API that drafts emails and sends them through review before they go out.',
        },
      ],
    },
    contact: {
      title: 'Get in touch.',
      text: 'Send me the link to the job, in English or Spanish. I’m available right away.',
      emailSubject: 'Role for Bautista Tolloni',
    },
  },
};
