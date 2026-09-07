import { FindingItem, ProjectItem, ImpactMetric, InmateStory } from '../types';

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1Wy347PrB4YpQMRBg5QzprEOq67xZMCzhmfsx_pQxHsnDvuv3G1jCFJtLVgS0aDO2Z3A7uK7iIxCPY4NdjG2ELrdcxe8mKo4cnxL505x2JsOjyicjyJkziKPVRuYIeed3Fi4YGNe_HK39NIwhiNTOGwA9w99Ja381dwuD-eOnIBjrbiZBE1wIJHkvoW8mC95BqNv05km9EwyxtVqrql8y5x--8rf4i9qUvoA8R9Yyn8yleM48poLwifvss';

export const PEER_DIALOGUE_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1V-BE-hYZTZJB5cGmcLaJSVS_W9yg-cdde5URdarNbDQY33RrBT9LUAofZhuQoW7F-MdE4ewdA_FzTwGR8btKotpYIxHTUqjYN67DzqxIyK8X1FnJf5hD2xm3VMfCaB0oN6zbnXKXxnQaac91mIG5Uk8OJl7eyY4OJxQWuSyWB9nbv34IZTvXkMU3kpDgoY3blCS_RB3STohKmAclOLGbSaZ5Aes3QxlZAhowF1zoBn0t_PKg_zsS5VciE';

export const FINDINGS_DATA: FindingItem[] = [
  {
    id: 'unemployable',
    tag: 'LIVELIHOOD VOID',
    tagBg: '#111111',
    tagText: '#deb04a',
    stat: '93%',
    statColor: '#111111',
    title: 'Unemployable on industrial parameters',
    description:
      'Where 97% work in unorganised sectors post release without job security, contracts, or living wages.',
    footer: 'SECTOR: UNORGANISED LABOUR CYCLE',
    bgClass: 'bg-[#deb04a]',
    iconName: 'BriefcaseOff',
    details: {
      sampleSize: 600,
      methodology: 'Skill competency assessment across trades and digital literacy benchmarks.',
      actionTaken:
        'Established certified vocational tracks inside Jail No. 5 with industry linkage for re-entry employment.',
      keyTakeaway:
        'Without structured skill certification, 9 out of 10 released youth slide back into illicit survival economies.',
    },
  },
  {
    id: 'literacy-gap',
    tag: 'EDUCATION GAP',
    tagBg: '#913b28',
    tagText: '#ffffff',
    stat: '63%',
    statColor: '#913b28',
    title: 'Competency below 5th grade level',
    description:
      'In addition, 16% of youth inmates cannot read or write alphabets in any language upon initial detention.',
    footer: 'ASSESSMENT: FUNCTIONAL ILLITERACY',
    bgClass: 'bg-[#ECE0C6]',
    iconName: 'BookOpen',
    details: {
      sampleSize: 600,
      methodology: 'ASER-standard foundational literacy & numeracy diagnostic test.',
      actionTaken:
        'Created accelerated mother-tongue reading bootcamps and NIOS open-school examination cells.',
      keyTakeaway:
        'Basic literacy unlocks the ability to comprehend bail charges, legal documents, and communicate with family.',
    },
  },
  {
    id: 'mental-health',
    tag: 'TRAUMA PROFILE',
    tagBg: '#3f5670',
    tagText: '#ffffff',
    stat: '33%',
    statColor: '#3f5670',
    title: '1 out of 3 have acute mental health history',
    description:
      'Directly linked to disturbed childhoods, chronic substance addiction, domestic conflict, and single parenting environments.',
    footer: 'DIAGNOSTIC: UNADDRESSED PSYCHOSOCIAL TRAUMA',
    bgClass: 'bg-[#e8edf3]',
    iconName: 'Brain',
    details: {
      sampleSize: 600,
      methodology: 'Standardized psychological screening and clinical intake interviews.',
      actionTaken:
        'Integrated licensed counseling circles, art therapy, and de-addiction rehabilitation plans.',
      keyTakeaway:
        'Penal confinement without trauma-informed care severely escalates self-harm and aggressive outbursts.',
    },
  },
  {
    id: 'habitual-patterns',
    tag: 'REPEAT PATTERNS',
    tagBg: '#111111',
    tagText: '#ffffff',
    stat: '24%',
    statColor: '#111111',
    title: 'Habitual conflict with penal law',
    description:
      'Urgent requirement for intensive psychological conditioning to dismantle repeat offender trajectories and negative peer networks.',
    footer: 'TARGET: VICIOUS CYCLE INTERRUPT',
    bgClass: 'bg-[#f2e8e3]',
    iconName: 'RefreshCw',
    details: {
      sampleSize: 600,
      methodology: 'Delhi Police crime record linkage & detention history analysis.',
      actionTaken:
        'Cognitive behavioral restructuring workshops to break toxic neighborhood gang ties.',
      keyTakeaway:
        'Youth trapped in repeat patterns often lack any supportive guardian figure or legitimate earning mentor.',
    },
  },
  {
    id: 'gender-crime',
    tag: 'CRITICAL SYSTEM FINDING',
    tagBg: '#111111',
    tagText: '#c05a3e',
    stat: '22%',
    statColor: '#111111',
    title: 'More than 22% incarcerated for crimes against women',
    description:
      'Of this cohort, 78% are charged under Rape or POCSO statutes. This demanded our creation of bespoke gender-sensitization curricula inside prison blocks.',
    footer: 'DATA RIGOR: MANDATORY CURRICULAR RESTRUCTURE // 78% POCSO/RAPE ACCUSED',
    bgClass: 'bg-[#c05a3e]',
    colSpan: 'md:col-span-2 lg:col-span-2',
    iconName: 'AlertOctagon',
    subStat: '78% POCSO/RAPE ACCUSED',
    details: {
      sampleSize: 600,
      methodology: 'Analysis of charge-sheets and judicial remand documentation.',
      actionTaken:
        'Developed Project Unlearn: peer-led anti-violence and consent education modules.',
      keyTakeaway:
        'Deep-rooted cultural misinformation around consent requires rigorous unlearning during the impressionable 18-21 age window.',
    },
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fellowship',
    badge: 'FULL-TIME IMMERSION',
    badgeColor: 'bg-[#deb04a]',
    title: 'Second Chance Fellowship',
    subtitle: '12-Month In-Prison Leadership Program',
    description:
      'A 12-month full-time fellowship program focusing on developing quality interventions and facilitating sessions on life skills and education inside prisons while designing radical reform projects.',
    footerTag: 'FELLOWSHIP DOSSIER',
    iconName: 'GraduationCap',
    headerBg: 'bg-[#deb04a]',
    category: 'fellowship',
    url: 'http://www.secondchancefellowship.org',
    stats: [
      { label: 'Cohort Size', value: '15 Fellows/yr' },
      { label: 'Stipend', value: '₹35,000/mo' },
      { label: 'Field Immersion', value: '12 Months' },
    ],
    curriculum: [
      'Correctional Systems & Prison Jurisprudence Induction',
      'Direct In-Cell Class Facilitation & Lesson Planning',
      'Psychosocial First Aid & Trauma-Informed Engagement',
      'Post-Release Re-entry Transition Architecture',
    ],
    partnerGovt: 'Directorate General of Delhi Prisons, Govt of NCT of Delhi',
  },
  {
    id: 'kunji',
    badge: 'TELE-NAVIGATION',
    badgeColor: 'bg-[#f2e8e3]',
    title: 'Kunji - Prison Helpline',
    subtitle: 'Post-Release Re-entry Support Grid',
    description:
      'Facilitating ex-inmates over the phone with location-wise databases of partner NGOs and government institutions addressing drug de-addiction, mental health, housing, employment, legal aid, and re-entry shock.',
    footerTag: 'ACTIVE CASE LINKAGE NETWORK',
    iconName: 'PhoneCall',
    headerBg: 'bg-[#f2e8e3]',
    category: 'reentry',
    stats: [
      { label: 'Directory Size', value: '450+ Verified NGOs' },
      { label: 'Direct Call Linkages', value: '3,200+ Cases' },
      { label: 'Relapse Prevention', value: '91% Stability' },
    ],
    curriculum: [
      '24/7 Helpline Desk with ex-inmate peer counselors',
      'Immediate crisis shelter & travel voucher coordination',
      'Employment linkages in factory & retail sectors',
      'De-addiction rehab center admissions & medical aid',
    ],
    partnerGovt: 'Delhi State Legal Services Authority (DSLSA)',
  },
  {
    id: 'school',
    badge: 'DAILY ACADEMY',
    badgeColor: 'bg-[#e8edf3]',
    title: 'Better-Life Prison School',
    subtitle: 'Comprehensive Daily Inmate Academy',
    description:
      'A full day long operational academy inside prison walls offering functional literacy, wage/self-skill vocational training, personal life skills, substance de-addiction therapy, and integrated healthcare support.',
    footerTag: 'FULL-DAY OPERATIONAL ACADEMY',
    iconName: 'Library',
    headerBg: 'bg-[#e8edf3]',
    category: 'education',
    stats: [
      { label: 'Daily Enrolled', value: '180+ Inmates' },
      { label: 'Literacy Uplift', value: '+60% Reading' },
      { label: 'Vocational Trades', value: '6 Industries' },
    ],
    curriculum: [
      'Foundational Hindi, English & Basic Arithmetic',
      'Computer Fundamentals & Typist Certification',
      'Solar Panel Maintenance & Electrical Wiring',
      'Mindfulness & Daily Physical Conditioning',
    ],
    partnerGovt: 'National Institute of Open Schooling (NIOS)',
  },
  {
    id: 'rihai',
    badge: 'LEGAL BAIL AID',
    badgeColor: 'bg-[#deb04a]',
    title: 'Project Rihai',
    subtitle: 'Bail Crowdfunding & Legal Representation',
    description:
      'Crowdfunding platform to secure bail release for prisoners who served their sentences but remain languishing behind bars solely due to indigent families unable to deposit bail sureties. Validated by prison staff evaluations.',
    footerTag: 'COMMUNITY-FUNDED RELEASE',
    iconName: 'LockKeyholeOpen',
    headerBg: 'bg-[#deb04a]',
    category: 'legal',
    stats: [
      { label: 'Released Inmates', value: '120+ Youth' },
      { label: 'Avg Bail Bond', value: '₹5,000 - ₹15,000' },
      { label: 'Legal Audit Delay', value: 'Zero Overstay' },
    ],
    curriculum: [
      'Judicial record screening with Superintendent of Prisons',
      'Indigent family financial capacity verification',
      'Direct digital bail bond surety deposits',
      'Post-bail mandatory reporting & familial handover',
    ],
    partnerGovt: 'Delhi District & Sessions Courts Remand Benches',
  },
  {
    id: 'unlearn',
    badge: 'GENDER JUSTICE',
    badgeColor: 'bg-[#c05a3e]',
    title: 'Project Unlearn',
    subtitle: 'Anti-Violence & Masculinity Circles',
    description:
      'Context-based education & life skills intervention driven by young incarcerated men. Formulated directly to dismantle patriarchal violent notions and eliminate gender-based crime through intensive peer-led workshops.',
    footerTag: 'ANTI-VIOLENCE WORKSHOPS',
    iconName: 'Users',
    headerBg: 'bg-[#c05a3e]',
    category: 'gender',
    stats: [
      { label: 'POCSO Accused Engaged', value: '350+ Inmates' },
      { label: 'Curricular Modules', value: '16 Circle Sessions' },
      { label: 'Attitudinal Shift', value: '84% Measured' },
    ],
    curriculum: [
      'Deconstructing Toxic Masculinity & Entitlement',
      'Consent, Boundary Ethics & Cyber Communication',
      'Anger Management & Non-Violent Conflict Resolution',
      'Empathy Mapping for Victims & Survivors',
    ],
    partnerGovt: 'Centre for Social Justice & Delhi Prisons Welfare Branch',
  },
  {
    id: 'baatcheet',
    badge: 'SAFE DIALOGUE ROOM',
    badgeColor: 'bg-[#e5e2e1]',
    title: 'BaatCheet',
    subtitle: 'Psychological Dialogue & Therapy Safe Space',
    description:
      'A verified safe space inside the prison walls to express and initiate raw dialogues on taboos, sexuality, and substance dependency. Equipping inmates with critical thinking models alongside licensed counseling and therapy.',
    footerTag: 'MENTAL HYGIENE & CIRCLE TALKS',
    iconName: 'MessageSquareText',
    headerBg: 'bg-[#e5e2e1]',
    category: 'mental-health',
    stats: [
      { label: 'Dialogue Circles', value: '240+ Hours' },
      { label: 'Substance Detox', value: '75 Inmates' },
      { label: 'Individual Therapy', value: '1-on-1 Certified' },
    ],
    curriculum: [
      'Unpacking Prison Stigma, Shame & Helplessness',
      'Harm Reduction & Substance Relapse Planning',
      'Family Reconnection Letters & Expression Therapy',
      'Peer-to-Peer Empathetic Listening Skills',
    ],
    partnerGovt: 'Institute of Human Behaviour & Allied Sciences (IHBAS)',
  },
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'recidivism',
    badge: 'RECIDIVISM RATE',
    badgeBg: 'bg-[#c05a3e]',
    badgeText: 'text-white',
    stat: '-3%',
    statColor: 'text-[#913b28]',
    title: 'Drop in Repeat Offenses',
    description:
      'Lowered the rate of recidivism by 3% in past 18 months, registering direct impact across the high-density repeaters ward.',
    shadowColor: '#deb04a',
    bgClass: 'bg-[#ECE0C6]',
  },
  {
    id: 'engaged',
    badge: 'REALISATION & ACTUALISATION',
    badgeBg: 'bg-[#111111]',
    badgeText: 'text-[#deb04a]',
    stat: '1,800+',
    statColor: 'text-[#111111]',
    title: 'Inmates Engaged',
    description:
      'Taken through a structured life skills journey of recognizing the long-term impact of their actions on themselves and society.',
    shadowColor: '#ffffff',
    bgClass: 'bg-[#deb04a]',
  },
  {
    id: 'education',
    badge: 'FORMAL EDUCATION',
    badgeBg: 'bg-[#3f5670]',
    badgeText: 'text-white',
    stat: '250+',
    statColor: 'text-[#3f5670]',
    title: 'Board & Degree Aspirants',
    description:
      '150+ students motivated to clear NIOS board exams; 100+ youth inmates enrolled and appeared for IGNOU degree examinations.',
    shadowColor: '#c05a3e',
    bgClass: 'bg-[#ECE0C6]',
  },
  {
    id: 'employed',
    badge: 'INTERNAL VOCATION',
    badgeBg: 'bg-[#111111]',
    badgeText: 'text-white',
    stat: '60+',
    statColor: 'text-[#111111]',
    title: 'Employed Inside Prison',
    description:
      'Inmates formally employed part-time within the prison premises following graduation from our functional skill bootcamps.',
    shadowColor: '#deb04a',
    bgClass: 'bg-[#ECE0C6]',
  },
  {
    id: 'peer-leaders',
    badge: 'PROGRAM SUSTAINABILITY',
    badgeBg: 'bg-[#3f5670]',
    badgeText: 'text-white',
    stat: '20+',
    statColor: 'text-[#3f5670]',
    title: 'Trained Peer Leaders',
    description:
      'Self-sustaining model: created a core cadre of inmate leaders capable of running cohorts and life-skills workshops independently.',
    shadowColor: '#ffffff',
    bgClass: 'bg-[#e8edf3]',
  },
  {
    id: 'hours',
    badge: 'INTENSIVE FIELDWORK',
    badgeBg: 'bg-[#111111]',
    badgeText: 'text-[#c05a3e]',
    stat: '2,500+',
    statColor: 'text-[#111111]',
    title: 'Hours Spent Inside',
    description:
      'Directly delivered classes and workshops by fellows, driving a 60% documented growth in language and arithmetic proficiency.',
    shadowColor: '#deb04a',
    bgClass: 'bg-[#c05a3e]',
  },
];

export const INMATE_STORIES: InmateStory[] = [
  {
    id: 'ravinder',
    name: 'Ravinder',
    age: 19,
    ward: 'Ward No. 5 • Tihar Jail, New Delhi',
    quote: 'I wish to learn any language so that I can write a letter to my family.',
    story:
      'When Ravinder entered Jail 5, he was illiterate and unable to read legal notices or communicate with his aging mother in Uttar Pradesh. Through the Better-Life Prison School, Ravinder learned Hindi alphabetization in 90 days. His first written letter was dispatched home on Diwali.',
    milestone: 'Cleared Foundational Literacy Diagnostic with 94% score',
    initiative: 'Better-Life Prison School',
    letterSnippet:
      'आदरणीय माँ, मैं यहाँ सुरक्षित हूँ और पढ़ना सीख रहा हूँ। जब आऊँगा तो अपने पैरों पर खड़ा होऊँगा।',
  },
  {
    id: 'mohammed',
    name: 'Mohammed A.',
    age: 20,
    ward: 'Ward No. 5 (Youth Ward)',
    quote:
      'I used to think my life ended the day the heavy iron gate slammed shut. The fellows proved my life is just beginning.',
    story:
      'Charged during a street altercation at age 18, Mohammed spent 14 months waiting for trial. After joining the NIOS board preparation cell, he scored distinction in Social Sciences and now mentors 12 younger inmates every afternoon in basic mathematics.',
    milestone: 'Cleared NIOS Class 10 Board Exam; promoted to Head Peer Tutor',
    initiative: 'Second Chance Fellowship & Better-Life School',
  },
  {
    id: 'deepak',
    name: 'Deepak K.',
    age: 21,
    ward: 'Ex-Inmate • Re-integrated in Okhla Industrial Area',
    quote:
      'Without Kunji Helpline, I would have walked out with 500 rupees in my pocket and no roof. They gave me a verified job within 48 hours.',
    story:
      'Upon completion of his sentence, Deepak was terrified of societal rejection and employer background checks. Kunji connected him with a participating electronics manufacturing unit. Today he earns ₹18,500/month with health insurance.',
    milestone: '14 Months Recidivism-Free with formal employment contract',
    initiative: 'Kunji - Prison Helpline',
  },
  {
    id: 'sunil',
    name: 'Sunil M.',
    age: 20,
    ward: 'Ward No. 5 (Bail Beneficiary)',
    quote:
      'My mother washed dishes for 8 months to save 10,000 rupees for my bail and failed. Project Rihai reunited us.',
    story:
      'Sunil was eligible for bail after 6 months of incarceration, but languished for an extra 9 months simply because his destitute family could not afford the surety bond. Project Rihai crowdfunded his bail and paired him with an ongoing social worker.',
    milestone: 'Reunited with family; enrolled in government ITI diploma',
    initiative: 'Project Rihai',
  },
];

export const RAND_STUDY_METRICS = [
  {
    stat: '+13%',
    title: 'Correctional education improves 13% chances of inmates not returning to prison.',
    index: 'INDEX: NON-RECIDIVISM PROBABILITY',
    bg: 'bg-[#ECE0C6]',
    statColor: 'text-[#913b28]',
    shadow: 'shadow-[5px_5px_0px_#deb04a]',
  },
  {
    stat: '$1 : $5',
    title:
      'Every dollar spent on prison education saves four to five dollars on the cost of reincarceration.',
    index: 'FISCAL COST BENEFIT MULTIPLIER',
    bg: 'bg-[#deb04a]',
    statColor: 'text-[#111111]',
    shadow: 'shadow-[5px_5px_0px_#ffffff]',
  },
  {
    stat: '-43%',
    title:
      'Inmates who participate in correctional education programs had a 43 percent lower odds of committing crime.',
    index: 'CRIME REDUCTION PROBABILITY RATIO',
    bg: 'bg-[#ECE0C6]',
    statColor: 'text-[#3f5670]',
    shadow: 'shadow-[5px_5px_0px_#c05a3e]',
  },
];
