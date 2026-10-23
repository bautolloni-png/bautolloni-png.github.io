// English copy of the home. Same facts as es.ts, same "|" accent convention.
import type { Content } from './es';

export const en: Content = {
  lang: 'en',
  meta: {
    title: 'Bautista Tolloni | CRM, Marketing Automation & B2B Email',
    description:
      'I implement CRMs (GoHighLevel, Zoho, Bitrix24), n8n automations and email infrastructure (SPF, DKIM, DMARC) so every lead reaches the right team and every email reaches the inbox.',
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
    eyebrow: ['Bautista Tolloni', 'Córdoba, AR', 'GMT−3', 'Remote'],
    srTitle: 'Bautista Tolloni: CRM, marketing automation and B2B email.',
    phrases: [
      'Leads that don’t get |lost.',
      'Emails that |land.',
      'CRMs the team actually |uses.',
      'Automations that don’t |break.',
      'Outbound that gets |replies.',
    ],
    lead: 'I implement CRMs, automations and email infrastructure so every lead reaches the right team and every email reaches the inbox.',
    primary: "Let's talk",
    secondary: 'See the work',
    cv: { label: 'Download CV', href: '/cv/Bautista_Tolloni_CV_EN.pdf' },
    recruiter: 'Hiring for your team?',
    recruiterLink: 'Profile for recruiters',
    chips: ['GoHighLevel', 'Zoho CRM', 'Bitrix24', 'n8n', 'Clay', 'Snov.io', 'SPF · DKIM · DMARC'],
    flow: {
      label: 'A lead’s journey',
      badge: 'example',
      rows: [
        { title: 'Web form', detail: 'lead.new · source: Meta Ads', status: 'received' },
        { title: 'CRM', detail: 'stage: New → Contacted', status: 'assigned' },
        { title: 'Sequence', detail: 'step 2 of 3 · subject B', status: 'sent' },
        { title: 'Inbox', detail: 'authenticated domain', status: 'delivered' },
      ],
      checks: ['SPF pass', 'DKIM pass', 'DMARC pass'],
    },
  },
  about: {
    eyebrow: 'About',
    title: 'I started on the customer side. |I stayed for the systems.',
    paragraphs: [
      'I started at a fintech, guiding users through onboarding, activation and reactivation, with Microsoft Dynamics 365 as my everyday tool. That is where I learned that customer experience depends on what happens behind the scenes: clean data, clear stages and timely follow-ups.',
      'Then I spent two years at a B2B marketing agency in Barcelona, in two parallel roles. I implemented CRMs from scratch, built the automations that feed them, and ran email and outbound for several accounts at once, each with its own stack, domain and customer journey.',
      'Today I also build Nesvir, my own SaaS: from product to code, with its own lead funnel, CRM and automated email.',
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
    title: 'What I build, |end to end.',
    intro: 'Four pieces that work on their own and perform better together: the lead comes in, the CRM sorts it, automation works it, and the email lands.',
    items: [
      {
        title: 'CRM implementation',
        text: 'I set up your CRM from scratch or clean up the one you have: forms, pipelines, calendars and lead routing. I connect Meta Ads and Google Ads leads so they arrive clean and segmented.',
        tools: ['GoHighLevel', 'Zoho CRM', 'Bitrix24'],
      },
      {
        title: 'Domains & deliverability',
        text: 'I configure DNS, SPF, DKIM and DMARC, warm up domains and protect sender reputation so your emails land in the inbox, not in spam.',
        tools: ['SPF', 'DKIM', 'DMARC', 'Warm-up', 'Postmaster Tools'],
      },
      {
        title: 'Automations',
        text: 'Welcome, nurturing, re-engagement and win-back flows aligned to each customer journey, plus n8n automations that connect the CRM to the rest of your tools, including AI with human review.',
        tools: ['n8n', 'Zoho Automation', 'GoHighLevel', 'Mailchimp', 'Doppler'],
      },
      {
        title: 'B2B outbound',
        text: 'I build and segment the prospect list, find the emails, write the copy and run the sequence with subject-line variants. LinkedIn outreach too, with reply tracking.',
        tools: ['Sales Navigator', 'Linked Helper', 'Clay', 'Snov.io', 'Apollo.io'],
      },
    ],
  },
  cases: {
    eyebrow: 'Work',
    title: 'Real work, |with proof you can touch.',
    intro: 'No client data: each case shows the problem, what I built and the result.',
    labels: { problem: 'Problem', built: 'What I built', result: 'Result' },
    items: [
      {
        kind: 'Own SaaS · in production',
        title: 'Nesvir',
        problem: 'Knowledge of how a company works lives in people’s heads and leaves with them.',
        built: 'A process documentation SaaS, end to end: product, design and code. A demo funnel with validation and abuse limits, a seven-stage Kanban CRM and transactional email with Resend.',
        result: 'In production, with SPF, DKIM and DMARC (p=quarantine) aligned and verified with real sends.',
        tools: ['Next.js', 'Supabase', 'Resend', 'Vercel'],
        link: { label: 'Visit nesvir.com', href: 'https://nesvir.com' },
        featured: true,
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
        kind: 'AI automation',
        title: 'AI-drafted emails, reviewed by a person',
        problem: 'Personalising every email by hand doesn’t scale.',
        built: 'An n8n flow that reads contacts from Google Sheets, drafts a personalised email with the Claude API, sends it through review and then sends it automatically.',
        result: 'Used in real campaigns.',
        tools: ['n8n', 'Claude API', 'Google Sheets'],
      },
      {
        kind: 'Technical case · WhatsApp',
        title: 'Intent-routing bot',
        problem: 'Sales and after-sales enquiries mixed in the same channel.',
        built: 'A Flow Builder flow that detects intent from the first message and routes to Sales or After-sales, with AI grounded in a knowledge base, CRM sign-up via API and bookings sent to Google Sheets by webhook.',
        result: 'Technical case solved end to end, with the flow published.',
        tools: ['Flow Builder', 'REST API', 'Webhook', 'Google Sheets'],
        link: {
          label: 'See the case',
          href: 'https://bautolloni-png.github.io/Proyectos/customer-success/atom-motortech-bot/',
        },
      },
      {
        kind: 'Outbound',
        title: 'Multi-step sequences with subject variants',
        problem: 'Cold emails that got no replies.',
        built: 'Lists segmented with Sales Navigator and Linked Helper, emails found with Clay, and multi-step Snov.io sequences with a subject variant on every send.',
        result: 'Better opens and more replies than with a single subject line.',
        tools: ['Snov.io', 'Clay', 'Sales Navigator'],
        link: {
          label: 'See the sequence step by step',
          href: 'https://bautolloni-png.github.io/Proyectos/#cold-email',
        },
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Where |I learned it.',
    items: [
      {
        company: 'Ranking Online',
        context: 'B2B digital marketing agency · Barcelona, Spain (remote)',
        dates: 'Aug 2024 – Sep 2026',
        summary: 'Several accounts in parallel, each with its own stack, domain and customer journey.',
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
    title: 'The tools, |by level of evidence.',
    intro: 'I separate what I used with clients from what I only certified and what I’m learning.',
    levels: [
      {
        name: 'In production',
        tone: 'pass',
        groups: [
          { name: 'CRM', tools: ['GoHighLevel', 'Zoho CRM', 'Bitrix24', 'Microsoft Dynamics 365'] },
          { name: 'Email & outbound', tools: ['Mailchimp', 'Doppler', 'Zoho Campaigns', 'Snov.io', 'Apollo.io', 'HTML/CSS for email'] },
          { name: 'Automation & prospecting', tools: ['n8n', 'Zoho Automation', 'Clay', 'Linked Helper', 'Sales Navigator'] },
          { name: 'Deliverability', tools: ['DNS', 'SPF', 'DKIM', 'DMARC', 'MXToolbox', 'Postmaster Tools'] },
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
        groups: [{ name: '', tools: ['SQL'] }],
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about |what you need.',
    text: 'Whether you want to sort out your CRM, improve deliverability or add someone to your team, drop me a line.',
    email: 'bautolloni@gmail.com',
    emailSubject: 'Hi Bautista',
    emailLabel: 'Email me',
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bautistatolloni' },
    cvLabel: 'Download CV',
    meta: 'Villa Allende, Córdoba · GMT−3 · Native Spanish · English B2',
  },
  footer: {
    rights: 'Bautista Tolloni',
    portfolio: { label: 'Interactive portfolio', href: 'https://bautolloni-png.github.io/Proyectos/' },
    recruiters: 'For recruiters',
  },
  paths: { home: '/en/', recruiters: '/en/hire/' },
  recruiters: {
    meta: {
      title: 'Hire Bautista Tolloni | CRM & Marketing Automation Specialist',
      description:
        'CRM & Marketing Automation Specialist, available now, remote from Argentina (GMT−3). CRM implementation, automation, email marketing and deliverability. CV in English and Spanish.',
    },
    eyebrow: ['For recruiters', 'Córdoba, AR', 'GMT−3'],
    title: 'CRM & Marketing Automation |Specialist.',
    lead: 'I implement and manage CRMs, build the automations that feed them and make sure email lands in the inbox. I’m looking for a remote role, as an employee or a contractor.',
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
        'CRM Specialist',
        'Marketing Automation Specialist',
        'Email Marketing & Lifecycle',
        'Marketing Operations',
        'B2B Outbound',
      ],
    },
    value: {
      eyebrow: 'What I bring',
      title: 'What I add |to a team.',
      items: [
        {
          title: 'Several stacks at once',
          text: 'Two years at an agency running several accounts in parallel, each with its own CRM, domain and customer journey. That showed me more ways a system can fail than a single stack would.',
        },
        {
          title: 'Deliverability end to end',
          text: 'I configured 50+ sending domains: DNS, SPF, DKIM, DMARC and warm-up. I know why an email lands and why it doesn’t.',
        },
        {
          title: 'Clean data before automation',
          text: 'I segment, tag and clean databases before building on top of them, so every send and every report can be trusted.',
        },
        {
          title: 'AI with human review',
          text: 'I use AI where it helps: an n8n flow with the Claude API that drafts emails and sends them through review before they go out, and Nesvir, my SaaS in production.',
        },
      ],
    },
    contact: {
      title: 'Have a role |that fits?',
      text: 'Send me the link to the job. I’m available right away.',
      emailSubject: 'Role for Bautista Tolloni',
    },
  },
};
