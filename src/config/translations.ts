export type Language = 'en' | 'bg' | 'tr' | 'el';

export interface SiteTranslations {
  nav: {
    services: string;
    architecture: string;
    howItWorks: string;
    portfolio: string;
    whyUs: string;
    pricing: string;
    faq: string;
    getSupport: string;
    specialBadge: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    quotesFast: string;
    ethicalSupport: string;
    directContact: string;
    workspaceTag: string;
    readyForReview: string;
  };
  quickContact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    disclaimer: string;
  };
  trust: {
    primaryFocus: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    allFilter: string;
    requestBtn: string;
    deliverablesHeading: string;
    showMore: string;
    showLess: string;
  };
  architecture: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaBtn: string;
    allFilter: string;
    plansFilter: string;
    boardsFilter: string;
    threeDFilter: string;
    modelsFilter: string;
    scopeCovered: string;
    inspectBtn: string;
    bannerTitle: string;
    bannerDesc: string;
    bannerBtn: string;
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step1Detail: string;
    step2Title: string;
    step2Desc: string;
    step2Detail: string;
    step3Title: string;
    step3Desc: string;
    step3Detail: string;
    step4Title: string;
    step4Desc: string;
    step4Detail: string;
    startCta: string;
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    inspectBtn: string;
    deliverablesLabel: string;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    card5Title: string;
    card5Desc: string;
    card6Title: string;
    card6Desc: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    mostRequested: string;
    turnaroundLabel: string;
    examplesHeading: string;
    includedHeading: string;
    getQuoteBtn: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    reviewTime: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    unansweredTitle: string;
    unansweredDesc: string;
    askBtn: string;
  };
  form: {
    badge: string;
    heading: string;
    subheading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    uniLabel: string;
    deptLabel: string;
    serviceLabel: string;
    deadlineLabel: string;
    urgencyLabel: string;
    urgencyStandard: string;
    urgencyPriority: string;
    urgencyUrgent: string;
    descLabel: string;
    descPlaceholder: string;
    fileLabel: string;
    fileUploadText: string;
    fileFormatsText: string;
    preferredChannelLabel: string;
    contactHandleLabel: string;
    contactHandlePlaceholder: string;
    submitBtn: string;
    submitting: string;
    freeEstimateNote: string;
    successTitle: string;
    successDesc: string;
    sendViaWhatsAppBtn: string;
    sendViaEmailBtn: string;
    anotherRequest: string;
    liveSummaryTitle: string;
    selectedTrack: string;
    universityMajor: string;
    urgencyLevel: string;
    channelLabel: string;
    ethicalGuaranteeTitle: string;
    ethicalGuaranteeDesc: string;
    urgentHelpTitle: string;
    urgentHelpDesc: string;
  };
  footer: {
    about: string;
    ethicsTitle: string;
    ethicsDesc: string;
    exploreTitle: string;
    departmentsTitle: string;
    connectTitle: string;
    rights: string;
    privacy: string;
    terms: string;
    backToTop: string;
  };
  modal: {
    sampleBadge: string;
    deliverablesTitle: string;
    softwareTitle: string;
    promptText: string;
    closeBtn: string;
    requestBtn: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteTranslations> = {
  en: {
    nav: {
      services: 'Services',
      architecture: 'Architecture',
      howItWorks: 'How It Works',
      portfolio: 'Portfolio',
      whyUs: 'Why Us',
      pricing: 'Pricing',
      faq: 'FAQ',
      getSupport: 'Get Support',
      specialBadge: 'Studio',
    },
    hero: {
      badge: 'Sofia University Academic & Project Studio',
      titleLine1: 'University life moves fast.',
      titleLine2: 'We make your workload manageable.',
      description: 'Professional project and academic support for students across ALL university departments and faculties. From complex architecture CAD drawings and A0 presentation boards to thesis formatting, handwriting transcription, data models, and executive slide decks.',
      ctaPrimary: 'Get Project Support',
      ctaSecondary: 'Explore Services',
      quotesFast: 'Quotes in < 3 hours',
      ethicalSupport: '100% Ethical Academic Support',
      directContact: 'Direct WhatsApp & Email',
      workspaceTag: 'workspace / architecture_studio_jury_review.dwg',
      readyForReview: 'Ready for Review',
    },
    quickContact: {
      badge: 'Direct WhatsApp Support',
      title: 'Fast Project Inquiry via WhatsApp',
      subtitle: 'Enter your details below and connect directly with our Sofia academic & project team on WhatsApp.',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Alex Johnson',
      contactLabel: 'Phone or Email',
      contactPlaceholder: 'e.g. +359 88... or alex@university.edu',
      messageLabel: 'Project Notes & Requirements',
      messagePlaceholder: 'Describe what you need (e.g. CAD floor plan cleanup, thesis formatting, 3D model, handwriting)...',
      submitButton: 'Send via WhatsApp',
      disclaimer: 'Instantly opens WhatsApp with your inquiry pre-formatted. Active Sofia studio support.',
    },
    trust: {
      primaryFocus: 'Primary Focus:',
      pillar1Title: 'Built for University Students',
      pillar1Desc: 'By students who understand real studio & semester deadlines',
      pillar2Title: 'Multi-Disciplinary Expertise',
      pillar2Desc: 'Architecture • Engineering • Business • Design • CS',
      pillar3Title: 'Fast Turnaround Response',
      pillar3Desc: 'Quick quotes and transparent project milestones',
      pillar4Title: 'Student-Friendly Pricing',
      pillar4Desc: 'Tailored quotes designed for student budgets',
    },
    services: {
      badge: '01 / Academic & Studio Capabilities',
      title: 'What can we help you with?',
      subtitle: 'Professional, university-standard project assistance and formatting. We help you organize, draft, calculate, and visualize your best work.',
      allFilter: 'All Services (8)',
      requestBtn: 'Request Support',
      deliverablesHeading: 'Typical Deliverables:',
      showMore: '+ more items',
      showLess: 'Show less',
    },
    architecture: {
      badge: 'Studio Specialization',
      titleLine1: 'Architecture students,',
      titleLine2: 'we know the studio struggle.',
      description: 'From midnight pin-ups to high-stakes semester jury reviews: precision CAD drafting, lineweight calibration, rendered sections, A0 jury board storytelling, and laser-cutting cut-file preparation.',
      ctaBtn: 'Request Studio Support',
      allFilter: 'All Studio Work',
      plansFilter: 'Plans & Sections',
      boardsFilter: 'A0 Boards & Portfolios',
      threeDFilter: '3D & Post-Production',
      modelsFilter: 'Laser Cut & Physical',
      scopeCovered: 'Scope Covered:',
      inspectBtn: 'Inspect',
      bannerTitle: 'Need customized architectural drafting or A0 jury board formatting?',
      bannerDesc: 'Send your current Rhino/AutoCAD file or hand-drawn sketches for an instant turnaround assessment.',
      bannerBtn: 'Submit Studio Brief',
    },
    howItWorks: {
      badge: '02 / Seamless Workflow',
      title: 'Simple 4-Step Process',
      subtitle: 'No convoluted portals or lengthy sign-up forms. We keep communication fast, straightforward, and student-focused.',
      step1Title: 'Tell Us What You Need',
      step1Desc: 'Fill out our quick form or message us directly with your project details.',
      step1Detail: 'Share your university department, assignment type, guidelines, and what specific support you need.',
      step2Title: 'Send Details & Deadline',
      step2Desc: 'Upload your drafts, sketches, course briefs, or raw files.',
      step2Detail: 'Provide your target deadline and any specific instructions from your professors or jury criteria.',
      step3Title: 'Get Transparent Quote & Plan',
      step3Desc: 'We provide a clear, student-friendly price estimate and delivery timeline.',
      step3Detail: 'No hidden fees or surprises. You know exactly what deliverables you will receive and when.',
      step4Title: 'Review & Polish to Perfection',
      step4Desc: 'Receive your clean, formatted deliverables ready for submission or presentation.',
      step4Detail: 'Inspect the results, request any subtle adjustments or lineweight tweaks, and head into your review with total confidence.',
      startCta: 'Start Step 01: Tell Us What You Need',
    },
    portfolio: {
      badge: '03 / Proof of Craft',
      title: 'See what we can do.',
      subtitle: 'Representative examples across multiple academic disciplines. Click any project card to inspect scope, deliverables, and software workflows.',
      inspectBtn: 'Inspect',
      deliverablesLabel: 'Deliverables:',
    },
    whyUs: {
      badge: '04 / The STUDY HUB Difference',
      title: 'Why Students Choose Us',
      subtitle: 'Built from the ground up to solve the real, day-to-day pain points of university course submissions and studio deadlines.',
      card1Title: 'Student-Focused Reality',
      card1Desc: 'We live university deadlines, jury critiques, and formatting stress every day. We understand exactly what professors expect.',
      card2Title: 'Fast & Direct Communication',
      card2Desc: 'No bureaucratic ticketing systems. Message us via WhatsApp or Email and talk to a real person immediately.',
      card3Title: 'Flexible Scope',
      card3Desc: 'From a 20-minute table formatting emergency to a 2-week final architecture studio board package, we adapt to what you need.',
      card4Title: 'Presentation-Ready Quality',
      card4Desc: 'Clean typography, harmonious lineweights, razor-sharp vector graphics, and zero messy margins. Your work looks elite.',
      card5Title: 'Transparent & Fair Pricing',
      card5Desc: 'Student-friendly quotes upfront with no surprise costs. You know exactly what you are paying for before work starts.',
      card6Title: 'Reliable Deadline Commitment',
      card6Desc: 'When we agree on a delivery time, we stick to it. We know that late submissions in university are not an option.',
    },
    pricing: {
      badge: '05 / Transparent Cost Structure',
      title: 'Every project is different.',
      subtitle: 'We don’t charge generic corporate flat rates. Tell us your assignment parameters, software needs, and deadline, and we’ll provide a fair, personalized quote tailored to student budgets.',
      mostRequested: 'Most Requested by Students',
      turnaroundLabel: 'Estimated Turnaround:',
      examplesHeading: 'Common Examples:',
      includedHeading: 'Included in Support:',
      getQuoteBtn: 'Get Personalized Quote',
      guaranteeTitle: '100% Upfront Pricing Guarantee',
      guaranteeDesc: 'You will always receive a clear price and delivery timeline before any work begins. No hidden costs.',
      reviewTime: 'Quotes reviewed within 3 hours',
    },
    testimonials: {
      badge: '06 / Student Feedback Placeholders',
      title: 'Student Experiences',
      subtitle: 'Authentic feedback from university peers. (Ready for your real semester review submissions).',
    },
    faq: {
      badge: '07 / Common Queries',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our student project assistance, file submission, turnaround times, and pricing.',
      unansweredTitle: 'Have a question not answered here?',
      unansweredDesc: 'Message us directly on WhatsApp or via Email.',
      askBtn: 'Ask a Question',
    },
    form: {
      badge: '08 / Direct Project Intake',
      heading: 'Have a Deadline?',
      subheading: 'Tell us what you need. We review details quickly and respond with a personalized, student-friendly quote.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Elena Georgieva',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g. elena.g@nbu.bg',
      uniLabel: 'University',
      deptLabel: 'Department / Major',
      serviceLabel: 'Type of Support Needed',
      deadlineLabel: 'Submission / Target Deadline',
      urgencyLabel: 'Timeline Urgency',
      urgencyStandard: 'Standard (3–7 Days)',
      urgencyPriority: 'Priority (1–3 Days)',
      urgencyUrgent: 'Urgent (< 24 Hours)',
      descLabel: 'Project Details & Specific Requirements',
      descPlaceholder: 'Describe your assignment, professor guidelines, scale, number of pages/sheets, or specific software required...',
      fileLabel: 'Course Brief / Draft Files (Optional)',
      fileUploadText: 'Click to upload or drag & drop files',
      fileFormatsText: 'DWG, PDF, DOCX, PPTX, ZIP, Rhino, Images (up to 50MB)',
      preferredChannelLabel: 'Preferred Channel',
      contactHandleLabel: 'WhatsApp Phone Number or Email',
      contactHandlePlaceholder: '+359 88 ... or 088 ...',
      submitBtn: 'Send Project Request',
      submitting: 'Processing Request...',
      freeEstimateNote: 'Direct transmission to WhatsApp & Email • Quotes in < 3 hours',
      successTitle: 'Request Received Successfully!',
      successDesc: 'We have received your project details. We are reviewing your requirements and will reach out to you within a few hours.',
      sendViaWhatsAppBtn: 'Send Directly on WhatsApp',
      sendViaEmailBtn: 'Send via Email',
      anotherRequest: 'Submit Another Request',
      liveSummaryTitle: 'Live Request Summary',
      selectedTrack: 'Selected Track',
      universityMajor: 'University & Major',
      urgencyLevel: 'Urgency Level',
      channelLabel: 'Channel',
      ethicalGuaranteeTitle: 'Ethical Guarantee',
      ethicalGuaranteeDesc: 'We assist you with formatting, technical CAD precision, board composition, and design organization so you submit your highest quality original work.',
      urgentHelpTitle: 'Urgent Same-Day Deadline?',
      urgentHelpDesc: 'For deadlines under 12 hours, reach out directly on WhatsApp or Email.',
    },
    footer: {
      about: 'Modern academic support, architecture drafting, presentation engineering, and document preparation crafted by university students for university students.',
      ethicsTitle: 'Ethical Academic Commitment: ',
      ethicsDesc: 'STUDY HUB provides legitimate academic support, project consultation, layout formatting, technical drafting assistance, and visual presentation design. We do not participate in academic dishonesty or exam-taking on behalf of students.',
      exploreTitle: 'Explore',
      departmentsTitle: 'Departments',
      connectTitle: 'Connect Directly',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      backToTop: 'Top',
    },
    modal: {
      sampleBadge: 'Project Sample',
      deliverablesTitle: 'Standard Deliverables',
      softwareTitle: 'Software & Formats',
      promptText: 'Need similar support for your coursework?',
      closeBtn: 'Close',
      requestBtn: 'Request Similar Support',
    }
  },
  bg: {
    nav: {
      services: 'Услуги',
      architecture: 'Архитектура',
      howItWorks: 'Как работи',
      portfolio: 'Портфолио',
      whyUs: 'Защо нас',
      pricing: 'Цени',
      faq: 'Въпроси',
      getSupport: 'Поискай помощ',
      specialBadge: 'Студио',
    },
    hero: {
      badge: 'Академично и проектно студио за студенти в София',
      titleLine1: 'Университетският живот е натоварен.',
      titleLine2: 'Ние улесняваме вашите проекти.',
      description: 'Професионална академична и проектна подкрепа за студенти от ВСИЧКИ университетски специалности и факултети. От сложни архитектурни CAD чертежи и A0 табла до форматиране на дипломни тези, дигитализация на ръкописи, анализ на данни и презентации.',
      ctaPrimary: 'Поискай помощ',
      ctaSecondary: 'Разгледай услугите',
      quotesFast: 'Оферта до 3 часа',
      ethicalSupport: '100% Етична академична помощ',
      directContact: 'Директен WhatsApp & Имейл',
      workspaceTag: 'workspace / architecture_studio_jury_review.dwg',
      readyForReview: 'Готово за преглед',
    },
    quickContact: {
      badge: 'Директна WhatsApp връзка',
      title: 'Бързо запитване по WhatsApp',
      subtitle: 'Въведете вашите данни и се свържете директно с нашия академичен екип в София по WhatsApp.',
      nameLabel: 'Вашето име',
      namePlaceholder: 'напр. Александър Иванов',
      contactLabel: 'Телефон или Имейл',
      contactPlaceholder: 'напр. +359 88... или alex@nbu.bg',
      messageLabel: 'Бележки и изисквания по проекта',
      messagePlaceholder: 'Опишете накратко вашия проект, срок или специалност (напр. CAD чертеж, дипломна работа, 3D модел)...',
      submitButton: 'Изпрати през WhatsApp',
      disclaimer: 'Директно отваря WhatsApp с предварително попълнено съобщение. Бърз отговор.',
    },
    trust: {
      primaryFocus: 'Основен фокус:',
      pillar1Title: 'Създадено за студенти',
      pillar1Desc: 'От студенти, разбиращи реалния натиск от студийни и семестриални срокове',
      pillar2Title: 'Мултидисциплинарен опит',
      pillar2Desc: 'Архитектура • Инженерство • Бизнес • Дизайн • IT',
      pillar3Title: 'Бърза реакция и отговор',
      pillar3Desc: 'Бързи ценови оферти и прозрачни етапи на работа',
      pillar4Title: 'Студентски достъпни цени',
      pillar4Desc: 'Персонализирани оферти, съобразени със студентския бюджет',
    },
    services: {
      badge: '01 / Академични и студийни възможности',
      title: 'С какво можем да ви помогнем?',
      subtitle: 'Професионална помощ по университетски проекти и форматиране. Помагаме ви да организирате, начертаете, пресметнете и визуализирате най-добрата си работа.',
      allFilter: 'Всички услуги (8)',
      requestBtn: 'Заяви подкрепа',
      deliverablesHeading: 'Типични резултати:',
      showMore: '+ още елементи',
      showLess: 'Покажи по-малко',
    },
    architecture: {
      badge: 'Специализация Архитектура',
      titleLine1: 'Студенти по архитектура,',
      titleLine2: 'знаем колко е трудно в студиото.',
      description: 'От среднощни корекции до решаващи финални журита: прецизни CAD чертежи, корекция на дебелини на линиите, рендерирани разрези, композиция на A0 табла и файлове за лазерно рязане.',
      ctaBtn: 'Заяви архитектурна помощ',
      allFilter: 'Всички проекти',
      plansFilter: 'Планове и разрези',
      boardsFilter: 'A0 Табла и портфолио',
      threeDFilter: '3D и постпродукция',
      modelsFilter: 'Лазерно рязане и макети',
      scopeCovered: 'Обхват:',
      inspectBtn: 'Преглед',
      bannerTitle: 'Имате нужда от персонализирани чертежи или A0 табла за жури?',
      bannerDesc: 'Изпратете текущия си Rhino/AutoCAD файл или скици за незабавна оценка на сроковете.',
      bannerBtn: 'Изпрати задание',
    },
    howItWorks: {
      badge: '02 / Лесен процес',
      title: 'Процес в 4 прости стъпки',
      subtitle: 'Без сложни портали и тромави регистрации. Комуникацията ни е бърза, ясна и насочена към студента.',
      step1Title: 'Кажете ни от какво имате нужда',
      step1Desc: 'Попълнете кратката форма или ни пишете директно с детайли за проекта.',
      step1Detail: 'Споделете специалността, вида на задачата, изискванията и нужната помощ.',
      step2Title: 'Изпратете детайли и краен срок',
      step2Desc: 'Прикачете чернови, скици, задание или работни файлове.',
      step2Detail: 'Посочете вашия краен срок и конкретните указания от преподавателя или журито.',
      step3Title: 'Получете прозрачна оферта и план',
      step3Desc: 'Даваме ясна, студентски съобразена ценова оценка и график.',
      step3Detail: 'Без скрити такси. Знаете точно какво ще получите и кога.',
      step4Title: 'Прегледайте и предайте уверено',
      step4Desc: 'Получавате готовите, форматирани материали, готови за предаване.',
      step4Detail: 'Прегледайте резултатите, поискайте фини корекции и отидете на журито със самочувствие.',
      startCta: 'Започнете Стъпка 01: Опишете проекта',
    },
    portfolio: {
      badge: '03 / Портфолио и примери',
      title: 'Вижте какво можем да направим.',
      subtitle: 'Представителни примери от различни университетски специалности. Кликнете на проект за детайли, резултати и софтуер.',
      inspectBtn: 'Преглед',
      deliverablesLabel: 'Резултати:',
    },
    whyUs: {
      badge: '04 / Защо STUDY HUB',
      title: 'Защо студентите избират нас',
      subtitle: 'Създадено специално, за да реши реалните ежедневни проблеми при предаване на проекти и университетски срокове.',
      card1Title: 'Студентска реалност',
      card1Desc: 'Живеем със същите крайни срокове, критики от жури и стрес. Знаем точно какво изискват преподавателите.',
      card2Title: 'Бърза и директна връзка',
      card2Desc: 'Без сложни системи за билети. Пишете ни в WhatsApp или по имейл и говорете с реален човек веднага.',
      card3Title: 'Гъвкав обхват',
      card3Desc: 'От 20-минутна корекция на таблица до двуседмичен цялостен пакет за финално архитектурно жури.',
      card4Title: 'Готово за презентация качество',
      card4Desc: 'Чиста типография, хармонични дебелини на линиите, ясни векторни графики и перфектни полета.',
      card5Title: 'Прозрачни и честни цени',
      card5Desc: 'Достъпни цени предварително без изненади. Знаете точно за какво плащате преди началото на работата.',
      card6Title: 'Спазване на крайните срокове',
      card6Desc: 'Когато договорим срок за предаване, го спазваме стриктно. Закъсненията в университета не са опция.',
    },
    pricing: {
      badge: '05 / Прозрачна ценова структура',
      title: 'Всеки проект е индивидуален.',
      subtitle: 'Не начисляваме корпоративни фиксирани такси. Разкажете ни за заданието, обема и срока и ще ви предложим справедлива студентска оферта.',
      mostRequested: 'Най-предпочитано от студенти',
      turnaroundLabel: 'Очаквано време за изпълнение:',
      examplesHeading: 'Чести примери:',
      includedHeading: 'Включено в подкрепата:',
      getQuoteBtn: 'Вземи персонална оферта',
      guaranteeTitle: '100% Гаранция за предварителна цена',
      guaranteeDesc: 'Винаги получавате ясна цена и краен срок преди започване на работа. Без скрити разходи.',
      reviewTime: 'Оферта до 3 часа',
    },
    testimonials: {
      badge: '06 / Отзиви от студенти',
      title: 'Студентски опит',
      subtitle: 'Автентична обратна връзка от колеги студенти в София.',
    },
    faq: {
      badge: '07 / Често задавани въпроси',
      title: 'Често задавани въпроси',
      subtitle: 'Всичко, което трябва да знаете за нашата подкрепа по проекти, изпращане на файлове, срокове и цени.',
      unansweredTitle: 'Имате въпрос, на който не намирате отговор?',
      unansweredDesc: 'Пишете ни директно в WhatsApp или по имейл.',
      askBtn: 'Задай въпрос',
    },
    form: {
      badge: '08 / Директна форма за запитване',
      heading: 'Имате краен срок?',
      subheading: 'Разкажете ни за вашия проект. Ще прегледаме детайлите бързо и ще ви изпратим персонализирана, достъпна оферта.',
      nameLabel: 'Име и фамилия',
      namePlaceholder: 'напр. Елена Георгиева',
      emailLabel: 'Имейл адрес',
      emailPlaceholder: 'напр. elena.g@nbu.bg',
      uniLabel: 'Университет',
      deptLabel: 'Специалност',
      serviceLabel: 'Вид необходима помощ',
      deadlineLabel: 'Краен срок за предаване',
      urgencyLabel: 'Спешност на срока',
      urgencyStandard: 'Стандартен (3–7 дни)',
      urgencyPriority: 'Приоритетен (1–3 дни)',
      urgencyUrgent: 'Спешен (< 24 часа)',
      descLabel: 'Детайли и изисквания за проекта',
      descPlaceholder: 'Опишете заданието, изискванията на преподавателя, брой страници/табла или необходим софтуер...',
      fileLabel: 'Файлове / Задание (по избор)',
      fileUploadText: 'Кликнете за качване или плъзнете файлове тук',
      fileFormatsText: 'DWG, PDF, DOCX, PPTX, ZIP, Rhino, изображения (до 50MB)',
      preferredChannelLabel: 'Предпочитан канал',
      contactHandleLabel: 'WhatsApp номер или Имейл',
      contactHandlePlaceholder: '+359 88 ... или 088 ...',
      submitBtn: 'Изпрати запитване за проект',
      submitting: 'Обработва се...',
      freeEstimateNote: 'Директно изпращане към WhatsApp и Имейл • Отговор до 3 часа',
      successTitle: 'Запитването е получено успешно!',
      successDesc: 'Получихме вашите детайли. Преглеждаме изискванията и ще се свържем с вас в рамките на няколко часа.',
      sendViaWhatsAppBtn: 'Изпрати директно в WhatsApp',
      sendViaEmailBtn: 'Изпрати по Имейл',
      anotherRequest: 'Ново запитване',
      liveSummaryTitle: 'Обобщение на заявката',
      selectedTrack: 'Избрана услуга',
      universityMajor: 'Университет и специалност',
      urgencyLevel: 'Спешност',
      channelLabel: 'Канал за връзка',
      ethicalGuaranteeTitle: 'Етична гаранция',
      ethicalGuaranteeDesc: 'Помагаме ви с форматиране, техническа CAD прецизност, композиция на табла и дизайн, за да предадете най-добрата си авторска работа.',
      urgentHelpTitle: 'Спешен краен срок днес?',
      urgentHelpDesc: 'За срокове под 12 часа ни пишете веднага в WhatsApp или по Имейл.',
    },
    footer: {
      about: 'Модерна академична подкрепа, архитектурни чертежи, дизайн на презентации и подготовка на документи, създадени от студенти за студенти.',
      ethicsTitle: 'Етична академична практика:',
      ethicsDesc: 'STUDY HUB предоставя легитимна академична подкрепа, консултации, форматиране на оформления, техническо чертане и визуален дизайн. Не участваме в академична нечестност или полагане на изпити вместо студенти.',
      exploreTitle: 'Навигация',
      departmentsTitle: 'Специалности',
      connectTitle: 'Директен контакт',
      rights: 'Всички права запазени.',
      privacy: 'Поверителност',
      terms: 'Условия за ползване',
      backToTop: 'Нагоре',
    },
    modal: {
      sampleBadge: 'Примерен проект',
      deliverablesTitle: 'Стандартни резултати',
      softwareTitle: 'Софтуер и формати',
      promptText: 'Имате нужда от подобна помощ за вашия проект?',
      closeBtn: 'Затвори',
      requestBtn: 'Заяви подобна помощ',
    }
  },
  tr: {
    nav: {
      services: 'Hizmetler',
      architecture: 'Mimarlık',
      howItWorks: 'Nasıl Çalışır',
      portfolio: 'Portfolyo',
      whyUs: 'Neden Biz',
      pricing: 'Fiyatlandırma',
      faq: 'SSS',
      getSupport: 'Destek Al',
      specialBadge: 'Stüdyo',
    },
    hero: {
      badge: 'Sofya Üniversiteleri Proje & Akademik Destek',
      titleLine1: 'Üniversite hayatı yoğun geçer.',
      titleLine2: 'Proje yükünüzü hafifletiyoruz.',
      description: 'Yalnızca mimarlık değil, üniversitenin TÜM akademik bölümleri ve fakülteleri için profesyonel proje ve akademik destek. Karmaşık mimari CAD çizimleri ve A0 paftalardan tez formatlamaya, el yazısı temize çekmeden veri analizi ve sunum tasarımına kadar.',
      ctaPrimary: 'Proje Desteği Al',
      ctaSecondary: 'Hizmetleri İncele',
      quotesFast: '3 saatte teklif garantisi',
      ethicalSupport: '%100 Etik Akademik Destek',
      directContact: 'Doğrudan WhatsApp & E-posta',
      workspaceTag: 'workspace / architecture_studio_jury_review.dwg',
      readyForReview: 'İncelemeye Hazır',
    },
    quickContact: {
      badge: 'Direkt WhatsApp Bağlantısı',
      title: 'WhatsApp ile Hızlı Proje Talebi',
      subtitle: 'Bilgilerinizi girin, Sofya akademik ve proje destek ekibimizle anında WhatsApp üzerinden iletişime geçin.',
      nameLabel: 'Adınız Soyadınız',
      namePlaceholder: 'örn. Ahmet Yılmaz',
      contactLabel: 'Telefon veya E-posta',
      contactPlaceholder: 'örn. +90 538... veya ahmet@universite.edu.tr',
      messageLabel: 'Mesajınız / Proje Notunuz',
      messagePlaceholder: 'İhtiyacınızı kısaca yazın (örn. CAD plan çizimi, tez formatlama, 3D modelleme, el yazısı)...',
      submitButton: 'WhatsApp ile Direkt Gönder',
      disclaimer: 'Mesajınızı doğrudan WhatsApp üzerinden ekibimize iletir. Hızlı ve doğrudan yanıt.',
    },
    trust: {
      primaryFocus: 'Öncelikli Odak:',
      pillar1Title: 'Üniversite Öğrencilerine Özel',
      pillar1Desc: 'Gerçek stüdyo ve teslim stresini bizzat yaşayan öğrenciler tarafından',
      pillar2Title: 'Çok Disiplinli Uzmanlık',
      pillar2Desc: 'Mimarlık • Mühendislik • İşletme • Tasarım • Yazılım',
      pillar3Title: 'Hızlı Geri Dönüş ve Teslimat',
      pillar3Desc: 'Hızlı fiyat teklifi ve şeffaf teslimat aşamaları',
      pillar4Title: 'Öğrenci Dostu Fiyatlar',
      pillar4Desc: 'Öğrenci bütçelerine uygun, kişiye özel şeffaf teklifler',
    },
    services: {
      badge: '01 / Akademik ve Stüdyo Yetkinlikleri',
      title: 'Hangi konuda destek alabilirsiniz?',
      subtitle: 'Üniversite standartlarında profesyonel proje desteği ve formatlama. Çizimlerinizi, verilerinizi, tezlerinizi ve sunumlarınızı en iyi hale getiriyoruz.',
      allFilter: 'Tüm Hizmetler (8)',
      requestBtn: 'Destek Al',
      deliverablesHeading: 'Tipik Çıktılar:',
      showMore: '+ daha fazla madde',
      showLess: 'Daha az göster',
    },
    architecture: {
      badge: 'Mimarlık Stüdyosu Uzmanlığı',
      titleLine1: 'Mimarlık öğrencileri,',
      titleLine2: 'stüdyo ve jüri stresini iyi biliyoruz.',
      description: 'Gece revizyonlarından final jürisine: 2D teknik çizimler, çizgi kalınlığı kalibrasyonu, kesit renderları, A0 sunum paftası kompozisyonu ve lazer kesim maket dosyaları.',
      ctaBtn: 'Mimarlık Desteği Al',
      allFilter: 'Tüm Stüdyo Projeleri',
      plansFilter: 'Planlar ve Kesitler',
      boardsFilter: 'A0 Paftalar & Portfolyo',
      threeDFilter: '3D & Görselleştirme',
      modelsFilter: 'Lazer Kesim & Maket',
      scopeCovered: 'Kapsam:',
      inspectBtn: 'İncele',
      bannerTitle: 'Özel teknik çizim veya A0 jüri paftası düzenine mi ihtiyacınız var?',
      bannerDesc: 'Mevcut Rhino/AutoCAD dosyanızı veya eskizlerinizi iletin, anında teslimat planı çıkaralım.',
      bannerBtn: 'Stüdyo Talebi İlet',
    },
    howItWorks: {
      badge: '02 / Kolay Süreç',
      title: '4 Basit Adımda Çalışma Süreci',
      subtitle: 'Karmaşık paneller ve uzun kayıt formları yok. İletişimimiz hızlı, şeffaf ve öğrenci odaklıdır.',
      step1Title: 'İhtiyacınızı Belirtin',
      step1Desc: 'Kısa formu doldurun veya doğrudan proje detaylarınızı bize iletin.',
      step1Detail: 'Bölümünüzü, ödev türünü, hoca kriterlerini ve hangi alanda desteğe ihtiyacınız olduğunu belirtin.',
      step2Title: 'Detayları ve Tarihi Gönderin',
      step2Desc: 'Eskizlerinizi, taslaklarınızı veya ham dosyalarınızı yükleyin.',
      step2Detail: 'Teslim tarihinizi ve jüri değerlendirme kriterlerini iletin, materyallerinizi hemen inceleyelim.',
      step3Title: 'Şeffaf Teklif ve Plan Alın',
      step3Desc: 'Net, öğrenci dostu bir fiyat tahmini ve teslimat takvimi sunuyoruz.',
      step3Detail: 'Sürpriz ek ücretler yok. Hangi dosyaları ne zaman teslim alacağınızı en baştan bilirsiniz.',
      step4Title: 'İnceleyin ve Güvenle Teslim Edin',
      step4Desc: 'Teslime ve sunuma hazır, kusursuz dosyalarınızı teslim alın.',
      step4Detail: 'Sonuçları kontrol edin, varsa ufak revizyonlarınızı iletin ve jürinize tam güvenle çıkın.',
      startCta: 'Adım 01’e Başlayın: İhtiyacınızı Yazın',
    },
    portfolio: {
      badge: '03 / İş Örnekleri',
      title: 'Neler yapabildiğimizi görün.',
      subtitle: 'Farklı üniversite bölümlerinden örnek çalışmalar. Kapsamı, çıktıları ve programları görmek için projelerin üzerine tıklayın.',
      inspectBtn: 'İncele',
      deliverablesLabel: 'Teslim Edilenler:',
    },
    whyUs: {
      badge: '04 / STUDY HUB Farkı',
      title: 'Öğrenciler Neden Bizi Tercih Ediyor?',
      subtitle: 'Üniversite ödev teslimleri ve stüdyo krizlerinin gerçek problemlerini çözmek için sıfırdan tasarlandı.',
      card1Title: 'Öğrenci Gerçekliği',
      card1Desc: 'Aynı jüri eleştirilerini, formatlama stresini ve uykusuz geceleri yaşıyoruz. Hocaların ne beklediğini çok iyi biliyoruz.',
      card2Title: 'Hızlı ve Doğrudan İletişim',
      card2Desc: 'Bürokratik bilet sistemleri yok. WhatsApp veya e-posta üzerinden doğrudan gerçek bir kişiyle konuşun.',
      card3Title: 'Esnek Kapsam',
      card3Desc: '20 dakikalık bir tablo düzeltme krizinden 2 haftalık final mimarlık pafta paketine kadar esnek destek.',
      card4Title: 'Sunuma Hazır Kusursuz Kalite',
      card4Desc: 'Temiz tipografi, dengeli çizgi kalınlıkları, jilet gibi vektör grafikler ve sıfır taşma hatası.',
      card5Title: 'Şeffaf ve Adil Fiyatlandırma',
      card5Desc: 'İşe başlamadan önce net ve öğrenci dostu fiyat. Sürpriz ek maliyetlerle karşılaşmazsınız.',
      card6Title: 'Teslim Tarihine Sadakat',
      card6Desc: 'Bir teslimat saatinde anlaştıysak ona kesinlikle sadık kalırız. Üniversitede geç teslimin seçenek olmadığını biliriz.',
    },
    pricing: {
      badge: '05 / Şeffaf Fiyatlandırma Modeli',
      title: 'Her proje kendine özeldir.',
      subtitle: 'Ezbere kurumsal sabit fiyatlar uygulamıyoruz. Ödevinizin kapsamını, program ihtiyacını ve teslim tarihinizi bize iletin, öğrenci bütçenize uygun adil bir teklif sunalım.',
      mostRequested: 'Öğrencilerin En Çok Tercih Ettiği',
      turnaroundLabel: 'Tahmini Teslim Süresi:',
      examplesHeading: 'Sık Karşılaşılan Örnekler:',
      includedHeading: 'Paket Kapsamı:',
      getQuoteBtn: 'Kişiye Özel Fiyat Teklifi Al',
      guaranteeTitle: '%100 Önceden Fiyat Garantisi',
      guaranteeDesc: 'Çalışma başlamadan önce net fiyat ve teslim tarihini her zaman öğrenirsiniz. Gizli masraf yoktur.',
      reviewTime: 'Teklifler 3 saat içinde incelenir',
    },
    testimonials: {
      badge: '06 / Öğrenci Deneyimleri',
      title: 'Öğrenci Yorumları',
      subtitle: 'Sofya üniversitelerindeki öğrencilerden samimi geri bildirimler.',
    },
    faq: {
      badge: '07 / Merak Edilenler',
      title: 'Sıkça Sorulan Sorular',
      subtitle: 'Proje desteğimiz, dosya iletimi, teslim süreleri ve fiyatlandırma hakkında tüm detaylar.',
      unansweredTitle: 'Cevabını bulamadığınız bir sorunuz mu var?',
      unansweredDesc: 'Bize doğrudan WhatsApp veya E-posta üzerinden ulaşabilirsiniz.',
      askBtn: 'Soru Sor',
    },
    form: {
      badge: '08 / Doğrudan Proje Talep Formu',
      heading: 'Teslim Tarihin mi Yaklaşıyor?',
      subheading: 'Neye ihtiyacın olduğunu bize ilet. Detayları hızla inceleyip sana özel öğrenci dostu bir teklif ve teslimat planı sunalım.',
      nameLabel: 'Ad Soyad',
      namePlaceholder: 'Örn: Can Yılmaz',
      emailLabel: 'E-posta Adresi',
      emailPlaceholder: 'Örn: can.y@nbu.bg',
      uniLabel: 'Üniversite',
      deptLabel: 'Bölüm / Uzmanlık',
      serviceLabel: 'Destek Türü',
      deadlineLabel: 'Hedef Teslim Tarihi',
      urgencyLabel: 'Aciliyet Durumu',
      urgencyStandard: 'Standart (3–7 Gün)',
      urgencyPriority: 'Öncelikli (1–3 Gün)',
      urgencyUrgent: 'Acil (< 24 Saat)',
      descLabel: 'Proje Detayları ve Özel Talepler',
      descPlaceholder: 'Ödevinizi, hoca kriterlerini, sayfa/pafta sayısını veya istenen programları belirtin...',
      fileLabel: 'Ödev Metni / Taslak Dosyalar (İsteğe Bağlı)',
      fileUploadText: 'Yüklemek için tıklayın veya dosyayı buraya sürükleyin',
      fileFormatsText: 'DWG, PDF, DOCX, PPTX, ZIP, Rhino, Görseller (50MB’a kadar)',
      preferredChannelLabel: 'Tercih Edilen İletişim Kanalı',
      contactHandleLabel: 'WhatsApp Telefon Numarası veya E-posta',
      contactHandlePlaceholder: '+90 538 ... veya 0538 ...',
      submitBtn: 'Proje Talebini İlet',
      submitting: 'Talebiniz Gönderiliyor...',
      freeEstimateNote: 'Doğrudan WhatsApp ve E-posta iletimi • 3 saat içinde dönüş',
      successTitle: 'Talebiniz Başarıyla Alındı!',
      successDesc: 'Proje detaylarını aldık. Dosyalarınızı inceleyip birkaç saat içerisinde seninle iletişime geçeceğiz.',
      sendViaWhatsAppBtn: 'WhatsApp’tan Doğrudan Gönder',
      sendViaEmailBtn: 'E-posta ile Gönder',
      anotherRequest: 'Yeni Talep Oluştur',
      liveSummaryTitle: 'Talep Özeti',
      selectedTrack: 'Seçilen Hizmet',
      universityMajor: 'Üniversite & Bölüm',
      urgencyLevel: 'Aciliyet',
      channelLabel: 'İletişim Kanalı',
      ethicalGuaranteeTitle: 'Etik Akademik Garanti',
      ethicalGuaranteeDesc: 'En kaliteli orijinal çalışmanızı teslim edebilmeniz için formatlama, CAD teknik çizimi, pafta düzeni ve görsel hiyerarşide size rehberlik ediyoruz.',
      urgentHelpTitle: 'Aynı Gün İçinde Acil Teslim mi?',
      urgentHelpDesc: '12 saatten kısa süreler için doğrudan WhatsApp veya E-posta ile ulaşın.',
    },
    footer: {
      about: 'Üniversite öğrencileri tarafından öğrenciler için modern akademik destek, mimari çizim, sunum tasarımı ve belge hazırlama.',
      ethicsTitle: 'Etik Akademik Uygulama:',
      ethicsDesc: 'STUDY HUB meşru akademik destek, proje danışmanlığı, pafta düzenleme, teknik çizim ve görsel sunum tasarımı sağlar. Akademik dürüstlüğe aykırı eylemlerde veya öğrenci yerine sınava girmede yer almaz.',
      exploreTitle: 'Keşfet',
      departmentsTitle: 'Bölümler',
      connectTitle: 'Doğrudan İletişim',
      rights: 'Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Koşulları',
      backToTop: 'Yukarı',
    },
    modal: {
      sampleBadge: 'Örnek Proje',
      deliverablesTitle: 'Standart Teslim Edilenler',
      softwareTitle: 'Yazılım ve Formatlar',
      promptText: 'Ödeviniz için benzer bir desteğe mi ihtiyacınız var?',
      closeBtn: 'Kapat',
      requestBtn: 'Benzer Destek Talep Et',
    }
  },
  el: {
    nav: {
      services: 'Υπηρεσίες',
      architecture: 'Αρχιτεκτονική',
      howItWorks: 'Πώς Λειτουργεί',
      portfolio: 'Έργα',
      whyUs: 'Γιατί Εμάς',
      pricing: 'Τιμές',
      faq: 'Συχνές Ερωτήσεις',
      getSupport: 'Λήψη Υποστήριξης',
      specialBadge: 'Στούντιο',
    },
    hero: {
      badge: 'Ακαδημαϊκό & Σχεδιαστικό Στούντιο για Φοιτητές στη Σόφια',
      titleLine1: 'Η φοιτητική ζωή είναι απαιτητική.',
      titleLine2: 'Κάνουμε τις εργασίες σας πιο εύκολες.',
      description: 'Επαγγελματική υποστήριξη έργων και ακαδημαϊκών εργασιών για φοιτητές ΟΛΩΝ των πανεπιστημιακών τμημάτων και σχολών. Από αρχιτεκτονικά σχέδια CAD και πινακίδες A0 μέχρι μορφοποίηση πτυχιακών, ψηφιοποίηση χειρογράφων, ανάλυση δεδομένων και παρουσιάσεις.',
      ctaPrimary: 'Λήψη Υποστήριξης',
      ctaSecondary: 'Εξερεύνηση Υπηρεσιών',
      quotesFast: 'Εκτίμηση σε < 3 ώρες',
      ethicalSupport: '100% Ηθική Ακαδημαϊκή Υποστήριξη',
      directContact: 'Άμεσο WhatsApp & Email',
      workspaceTag: 'workspace / architecture_studio_jury_review.dwg',
      readyForReview: 'Έτοιμο για Έλεγχο',
    },
    quickContact: {
      badge: 'Άμεση σύνδεση WhatsApp',
      title: 'Γρήγορο αίτημα μέσω WhatsApp',
      subtitle: 'Συμπληρώστε τα στοιχεία σας και συνδεθείτε άμεσα με την ακαδημαϊκή ομάδα στη Σόφια μέσω WhatsApp.',
      nameLabel: 'Το Όνομά σας',
      namePlaceholder: 'π.χ. Αλέξανδρος Παπαδόπουλος',
      contactLabel: 'Τηλέφωνο ή Email',
      contactPlaceholder: 'π.χ. +30 69... ή alex@university.gr',
      messageLabel: 'Σημειώσεις & Απαιτήσεις Έργου',
      messagePlaceholder: 'Περιγράψτε συνοπτικά το έργο σας (π.χ. σχέδιο CAD, πτυχιακή, 3D render, χειρόγραφα)...',
      submitButton: 'Αποστολή μέσω WhatsApp',
      disclaimer: 'Ανοίγει απευθείας το WhatsApp με προσυμπληρωμένο το αίτημά σας. Άμεση απάντηση.',
    },
    trust: {
      primaryFocus: 'Κύρια Εστίαση:',
      pillar1Title: 'Φτιαγμένο για Φοιτητές',
      pillar1Desc: 'Από φοιτητές που κατανοούν την πραγματική πίεση των προθεσμιών στο στούντιο',
      pillar2Title: 'Πολυεπιστημονική Εμπειρία',
      pillar2Desc: 'Αρχιτεκτονική • Μηχανική • Διοίκηση • Σχέδιο • Πληροφορική',
      pillar3Title: 'Ταχύτατη Επικοινωνία & Παράδοση',
      pillar3Desc: 'Γρήγορη εκτίμηση κόστους και διαφανή στάδια παράδοσης',
      pillar4Title: 'Φοιτητικές Προσιτές Τιμές',
      pillar4Desc: 'Εξατομικευμένες προσφορές σχεδιασμένες για φοιτητικούς προϋπολογισμούς',
    },
    services: {
      badge: '01 / Ακαδημαϊκές & Σχεδιαστικές Δυνατότητες',
      title: 'Σε τι μπορούμε να σας βοηθήσουμε;',
      subtitle: 'Επαγγελματική υποστήριξη και μορφοποίηση πανεπιστημιακών εργασιών. Σας βοηθάμε να οργανώσετε, να σχεδιάσετε και να παρουσιάσετε την καλύτερη δουλειά σας.',
      allFilter: 'Όλες οι Υπηρεσίες (8)',
      requestBtn: 'Ζητήστε Υποστήριξη',
      deliverablesHeading: 'Τυπικά Παραδοτέα:',
      showMore: '+ περισσότερα',
      showLess: 'Λιγότερα',
    },
    architecture: {
      badge: 'Εξειδίκευση Αρχιτεκτονικής',
      titleLine1: 'Φοιτητές αρχιτεκτονικής,',
      titleLine2: 'γνωρίζουμε τις δυσκολίες του στούντιο.',
      description: 'Από τις νυχτερινές διορθώσεις μέχρι την τελική κριτική επιτροπή: ακριβή σχέδια CAD, ιεραρχία πάχους γραμμών, φωτορεαλιστικές τομές, πινακίδες A0 και αρχεία κοπής laser.',
      ctaBtn: 'Ζητήστε Υποστήριξη Στούντιο',
      allFilter: 'Όλα τα Έργα',
      plansFilter: 'Κατόψεις & Τομές',
      boardsFilter: 'Πινακίδες A0 & Portfolio',
      threeDFilter: '3D & Επεξεργασία Render',
      modelsFilter: 'Κοπή Laser & Μακέτες',
      scopeCovered: 'Πεδίο Εργασίας:',
      inspectBtn: 'Προβολή',
      bannerTitle: 'Χρειάζεστε εξατομικευμένο σχέδιο CAD ή σύνθεση πινακίδων A0;',
      bannerDesc: 'Στείλτε το τρέχον αρχείο Rhino/AutoCAD ή τα σκίτσα σας για άμεση εκτίμηση χρόνου παράδοσης.',
      bannerBtn: 'Αποστολή Στοιχείων',
    },
    howItWorks: {
      badge: '02 / Απλή Διαδικασία',
      title: 'Διαδικασία σε 4 Απλά Βήματα',
      subtitle: 'Χωρίς περίπλοκες πλατφόρμες ή χρονοβόρες εγγραφές. Διατηρούμε την επικοινωνία άμεση, καθαρή και επικεντρωμένη στον φοιτητή.',
      step1Title: 'Πείτε μας τι χρειάζεστε',
      step1Desc: 'Συμπληρώστε τη σύντομη φόρμα ή στείλτε μας μήνυμα με τις λεπτομέρειες.',
      step1Detail: 'Μοιραστείτε τη σχολή, τον τύπο της εργασίας και τις συγκεκριμένες οδηγίες των καθηγητών.',
      step2Title: 'Στείλτε λεπτομέρειες & προθεσμία',
      step2Desc: 'Ανεβάστε τα προσχέδια, τα σκίτσα ή τα αρχεία σας.',
      step2Detail: 'Ορίστε την τελική προθεσμία σας και τα κριτήρια αξιολόγησης.',
      step3Title: 'Λάβετε διαφανή προσφορά & χρονοδιάγραμμα',
      step3Desc: 'Παρέχουμε μια καθαρή, φοιτητική εκτίμηση κόστους και ακριβή χρόνο παράδοσης.',
      step3Detail: 'Χωρίς κρυφές χρεώσεις. Γνωρίζετε ακριβώς τι θα παραλάβετε και πότε.',
      step4Title: 'Ελέγξτε & παραδώστε με αυτοπεποίθηση',
      step4Desc: 'Λαμβάνετε τα ολοκληρωμένα, μορφοποιημένα αρχεία έτοιμα για παρουσίαση.',
      step4Detail: 'Ελέγξτε τα αποτελέσματα, ζητήστε τυχόν μικροδιορθώσεις και παρουσιάστε με απόλυτη σιγουριά.',
      startCta: 'Ξεκινήστε το Βήμα 01: Περιγράψτε την Ανάγκη σας',
    },
    portfolio: {
      badge: '03 / Δείγματα Έργων',
      title: 'Δείτε τι μπορούμε να κάνουμε.',
      subtitle: 'Ενδεικτικά παραδείγματα από διάφορες πανεπιστημιακές σχολές. Κάντε κλικ σε μια κάρτα για να δείτε λεπτομέρειες, παραδοτέα και λογισμικό.',
      inspectBtn: 'Προβολή',
      deliverablesLabel: 'Παραδοτέα:',
    },
    whyUs: {
      badge: '04 / Η Διαφορά του STUDY HUB',
      title: 'Γιατί μας Επιλέγουν οι Φοιτητές',
      subtitle: 'Σχεδιασμένο εξαρχής για να επιλύει τα πραγματικά, καθημερινά προβλήματα των πανεπιστημιακών παραδόσεων.',
      card1Title: 'Φοιτητική Πραγματικότητα',
      card1Desc: 'Βιώνουμε καθημερινά τις ίδιες προθεσμίες, κριτικές επιτροπών και άγχος. Γνωρίζουμε τι περιμένουν οι καθηγητές.',
      card2Title: 'Άμεση Επικοινωνία',
      card2Desc: 'Χωρίς γραφειοκρατία. Επικοινωνήστε απευθείας μέσω WhatsApp ή Email και μιλήστε άμεσα με πραγματικό άτομο.',
      card3Title: 'Ευέλικτο Πεδίο',
      card3Desc: 'Από μια γρήγορη διόρθωση πίνακα 20 λεπτών μέχρι ένα ολοκληρωμένο πακέτο πινακίδων A0 για αρχιτεκτονική κριτική.',
      card4Title: 'Ποιότητα Έτοιμη για Παρουσίαση',
      card4Desc: 'Καθαρή τυπογραφία, ισορροπημένα πάχη γραμμών, διανυσματικά γραφικά υψηλής ευκρίνειας και τέλεια περιθώρια.',
      card5Title: 'Διαφανείς & Δίκαιες Τιμές',
      card5Desc: 'Προσιτές τιμές εκ των προτέρων χωρίς εκπλήξεις. Γνωρίζετε ακριβώς τι πληρώνετε πριν ξεκινήσει η εργασία.',
      card6Title: 'Απόλυτη Τήρηση Προθεσμιών',
      card6Desc: 'Όταν συμφωνούμε σε έναν χρόνο παράδοσης, τον τηρούμε πιστά. Γνωρίζουμε ότι οι καθυστερήσεις στο πανεπιστήμιο δεν είναι επιλογή.',
    },
    pricing: {
      badge: '05 / Διαφανής Τιμολόγηση',
      title: 'Κάθε εργασία είναι μοναδική.',
      subtitle: 'Δεν χρεώνουμε γενικές εταιρικές τιμές. Ενημερώστε μας για τις παραμέτρους, το λογισμικό και την προθεσμία σας και θα σας δώσουμε μια δίκαιη προσφορά για φοιτητές.',
      mostRequested: 'Πιο Δημοφιλές στους Φοιτητές',
      turnaroundLabel: 'Εκτιμώμενος Χρόνος Παράδοσης:',
      examplesHeading: 'Συνηθισμένα Παραδείγματα:',
      includedHeading: 'Περιλαμβάνονται στην Υποστήριξη:',
      getQuoteBtn: 'Λήψη Εξατομικευμένης Προσφοράς',
      guaranteeTitle: '100% Εγγύηση Τιμής Εκ των Προτέρων',
      guaranteeDesc: 'Λαμβάνετε πάντα καθαρή τιμή και χρονοδιάγραμμα παράδοσης πριν ξεκινήσει οποιαδήποτε εργασία. Χωρίς κρυφά κόστη.',
      reviewTime: 'Αξιολόγηση αιτήματος εντός 3 ωρών',
    },
    testimonials: {
      badge: '06 / Εμπειρίες Φοιτητών',
      title: 'Κριτικές Φοιτητών',
      subtitle: 'Αυθεντικά σχόλια από συμφοιτητές σας σε πανεπιστήμια της Σόφιας.',
    },
    faq: {
      badge: '07 / Συχνές Ερωτήσεις',
      title: 'Συχνές Ερωτήσεις',
      subtitle: 'Όλα όσα πρέπει να γνωρίζετε για την υποστήριξη εργασιών, την αποστολή αρχείων, τους χρόνους παράδοσης και τις τιμές.',
      unansweredTitle: 'Έχετε ερώτηση που δεν απαντάται εδώ;',
      unansweredDesc: 'Στείλτε μας μήνυμα απευθείας στο WhatsApp ή μέσω Email.',
      askBtn: 'Κάντε μια Ερώτηση',
    },
    form: {
      badge: '08 / Άμεση Φόρμα Αιτήματος',
      heading: 'Έχετε Προθεσμία;',
      subheading: 'Πείτε μας τι χρειάζεστε. Εξετάζουμε άμεσα τις λεπτομέρειες και απαντάμε με μια εξατομικευμένη, φοιτητική προσφορά.',
      nameLabel: 'Ονοματεπώνυμο',
      namePlaceholder: 'π.χ. Νίκος Παπαδόπουλος',
      emailLabel: 'Διεύθυνση Email',
      emailPlaceholder: 'π.χ. nikos.p@uni-sofia.bg',
      uniLabel: 'Πανεπιστήμιο',
      deptLabel: 'Σχολή / Τμήμα',
      serviceLabel: 'Είδος Υποστήριξης',
      deadlineLabel: 'Προθεσμία Παράδοσης',
      urgencyLabel: 'Επείγον Προθεσμίας',
      urgencyStandard: 'Κανονικό (3–7 Ημέρες)',
      urgencyPriority: 'Προτεραιότητα (1–3 Ημέρες)',
      urgencyUrgent: 'Επείγον (< 24 Ώρες)',
      descLabel: 'Λεπτομέρειες & Απαιτήσεις Έργου',
      descPlaceholder: 'Περιγράψτε την εργασία, τις οδηγίες του καθηγητή, τον αριθμό σελίδων/πινακίδων ή το απαιτούμενο λογισμικό...',
      fileLabel: 'Αρχεία / Εκφώνηση Εργασίας (Προαιρετικό)',
      fileUploadText: 'Κάντε κλικ για μεταφόρτωση ή σύρετε αρχεία εδώ',
      fileFormatsText: 'DWG, PDF, DOCX, PPTX, ZIP, Rhino, Εικόνες (έως 50MB)',
      preferredChannelLabel: 'Προτιμώμενο Κανάλι Επικοινωνίας',
      contactHandleLabel: 'Τηλέφωνο WhatsApp ή Email',
      contactHandlePlaceholder: '+30 69... ή +359 88...',
      submitBtn: 'Αποστολή Αιτήματος Εργασίας',
      submitting: 'Επεξεργασία...',
      freeEstimateNote: 'Άμεση αποστολή σε WhatsApp & Email • Απάντηση σε < 3 ώρες',
      successTitle: 'Το Αίτημα Ελήφθη Επιτυχώς!',
      successDesc: 'Λάβαμε τις λεπτομέρειες του έργου σας. Εξετάζουμε τις απαιτήσεις και θα επικοινωνήσουμε μαζί σας εντός λίγων ωρών.',
      sendViaWhatsAppBtn: 'Αποστολή Απευθείας στο WhatsApp',
      sendViaEmailBtn: 'Αποστολή μέσω Email',
      anotherRequest: 'Υποβολή Νέου Αιτήματος',
      liveSummaryTitle: 'Σύνοψη Αιτήματος',
      selectedTrack: 'Επιλεγμένη Υπηρεσία',
      universityMajor: 'Πανεπιστήμιο & Σχολή',
      urgencyLevel: 'Επίπεδο Επείγοντος',
      channelLabel: 'Κανάλι Επικοινωνίας',
      ethicalGuaranteeTitle: 'Ηθική Ακαδημαϊκή Εγγύηση',
      ethicalGuaranteeDesc: 'Σας καθοδηγούμε στη μορφοποίηση, την τεχνική ακρίβεια CAD, τη σύνθεση πινακίδων και την οπτική ιεραρχία για να παραδώσετε την καλύτερη πρωτότυπη δουλειά σας.',
      urgentHelpTitle: 'Επείγουσα Παράδοση Αυθημερόν;',
      urgentHelpDesc: 'Για προθεσμίες κάτω των 12 ωρών, επικοινωνήστε απευθείας στο WhatsApp ή μέσω Email.',
    },
    footer: {
      about: 'Σύγχρονη ακαδημαϊκή υποστήριξη, αρχιτεκτονικά σχέδια, σχεδιασμός παρουσιάσεων και προετοιμασία εγγράφων από φοιτητές για φοιτητές.',
      ethicsTitle: 'Ηθική Ακαδημαϊκή Πρακτική:',
      ethicsDesc: 'Το STUDY HUB παρέχει νόμιμη ακαδημαϊκή υποστήριξη, συμβουλευτική, μορφοποίηση διατάξεων, τεχνικό σχέδιο και οπτικό σχεδιασμό. Δεν συμμετέχουμε σε ακαδημαϊκή ανεντιμότητα ούτε δίνουμε εξετάσεις εκ μέρους φοιτητών.',
      exploreTitle: 'Πλοήγηση',
      departmentsTitle: 'Σχολές',
      connectTitle: 'Άμεση Επικοινωνία',
      rights: 'Όλα τα δικαιώματα διατηρούνται.',
      privacy: 'Πολιτική Απορρήτου',
      terms: 'Όροι Χρήσης',
      backToTop: 'Κορυφή',
    },
    modal: {
      sampleBadge: 'Δείγμα Έργου',
      deliverablesTitle: 'Τυπικά Παραδοτέα',
      softwareTitle: 'Λογισμικό & Μορφές',
      promptText: 'Χρειάζεστε παρόμοια υποστήριξη για την εργασία σας;',
      closeBtn: 'Κλείσιμο',
      requestBtn: 'Ζητήστε Παρόμοια Υποστήριξη',
    }
  }
};
