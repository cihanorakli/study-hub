import type { ServiceItem, ArchitectureItem, PortfolioItem, PricingCategory, TestimonialItem, FAQItem } from '../types';
import type { Language } from './translations';

export const SITE_CONFIG = {
  brandName: 'STUDY HUB',
  brandSuffix: '.SOFIA',
  brandTagline: 'Academic & Architecture Support for University Students',
  location: 'Sofia, Bulgaria',
  baseUniversity: 'New Bulgarian University (NBU)',
  logoUrl: '/logo.jpg',
  contact: {
    email: 'contact@studyhub-sofia.com',
    whatsapp: '+359 88 000 0000',
    whatsappUrl: 'https://wa.me/359880000000', // Paste your real WhatsApp link/number here when ready
    formspreeOrWebhookUrl: '', // Optional: Web3Forms / Formspree endpoint URL
    responsePromise: 'Under 3 hours on active semester days',
    workingHours: 'Mon - Sun: 09:00 - 23:00 (EET)'
  },
  ethicsStatement: 'STUDY HUB provides legitimate academic support, project consultation, layout formatting, technical drafting assistance, and visual presentation design. We do not participate in academic dishonesty or exam-taking on behalf of students.'
};

export const getTargetUniversities = (lang: Language = 'en'): string[] => {
  switch (lang) {
    case 'bg':
      return [
        'Нов български университет (НБУ)',
        'Софийски университет Св. Климент Охридски',
        'Университет по архитектура, строителство и геодезия (УАСГ)',
        'Технически университет - София (ТУ София)',
        'Университет за национално и световно стопанство (УНСС)',
        'Медицински университет - София (МУ-София)',
        'Международни университети (Дистанционна подкрепа)'
      ];
    case 'tr':
      return [
        'Yeni Bulgar Üniversitesi (NBU)',
        'Sofya Üniversitesi Kliment Ohridski',
        'Mimarlık, İnşaat ve Jeodezi Üniversitesi (UACEG)',
        'Sofya Teknik Üniversitesi (TU Sofia)',
        'Ulusal ve Dünya Ekonomisi Üniversitesi (UNWE)',
        'Sofya Tıp Üniversitesi (MU-S)',
        'Uluslararası Üniversiteler (Uzaktan Destek)'
      ];
    case 'el':
      return [
        'Νέο Βουλγαρικό Πανεπιστήμιο (NBU)',
        'Πανεπιστήμιο Σόφιας Αγ. Κλήμης της Αχρίδας (Kliment Ohridski)',
        'Πανεπιστήμιο Αρχιτεκτονικής, Πολιτικών Μηχανικών και Γεωδαισίας (UACEG)',
        'Τεχνικό Πανεπιστήμιο Σόφιας (TU Sofia)',
        'Πανεπιστήμιο Εθνικής και Παγκόσμιας Οικονομίας (UNWE)',
        'Ιατρικό Πανεπιστήμιο Σόφιας (MU-S)',
        'Διεθνή Πανεπιστήμια (Εξ αποστάσεως υποστήριξη)'
      ];
    default:
      return [
        'New Bulgarian University (NBU)',
        'Sofia University St. Kliment Ohridski',
        'University of Architecture, Civil Engineering and Geodesy (UACEG)',
        'Technical University of Sofia (TU Sofia)',
        'University of National and World Economy (UNWE)',
        'Medical University of Sofia (MU-S)',
        'International Universities (Remote Support)'
      ];
  }
};

export const getDepartments = (lang: Language = 'en'): string[] => {
  switch (lang) {
    case 'bg':
      return [
        'Архитектура и урбанизъм',
        'Интериорен и пространствен дизайн',
        'Строително инженерство',
        'Компютърни науки и софтуер',
        'Бизнес администрация и мениджмънт',
        'Икономика и финанси',
        'Маркетинг и медии',
        'Графичен дизайн и визуални изкуства',
        'Медицина и здравни науки',
        'Психология и хуманитарни науки',
        'Друга академична специалност'
      ];
    case 'tr':
      return [
        'Mimarlık ve Şehir Planlama',
        'İç Mimarlık ve Mekansal Tasarım',
        'İnşaat Mühendisliği',
        'Bilgisayar Mühendisliği ve Yazılım',
        'İşletme ve Yönetim',
        'Ekonomi ve Finans',
        'Pazarlama ve Dijital Medya',
        'Grafik Tasarım ve Görsel Sanatlar',
        'Tıp ve Sağlık Bilimleri',
        'Psikoloji ve Sosyal Bilimler',
        'Diğer Akademik Bölüm'
      ];
    case 'el':
      return [
        'Αρχιτεκτονική & Αστικός Σχεδιασμός',
        'Εσωτερική Αρχιτεκτονική & Σχεδιασμός Χώρου',
        'Πολιτικών Μηχανικών',
        'Πληροφορική & Μηχανική Λογισμικού',
        'Διοίκηση Επιχειρήσεων & Management',
        'Οικονομικά & Χρηματοοικονομικά',
        'Marketing & Ψηφιακά Μέσα',
        'Γραφιστική & Εικαστικές Τέχνες',
        'Ιατρική & Επιστήμες Υγείας',
        'Ψυχολογία & Ανθρωπιστικές Επιστήμες',
        'Άλλο Ακαδημαϊκό Τμήμα'
      ];
    default:
      return [
        'Architecture & Urban Planning',
        'Interior & Spatial Design',
        'Civil & Structural Engineering',
        'Computer Science & Software',
        'Business Administration & Management',
        'Economics & Finance',
        'Marketing & Digital Media',
        'Graphic Design & Visual Arts',
        'Medicine & Health Sciences',
        'Psychology & Social Sciences',
        'Other Academic Department'
      ];
  }
};

export const getHeroWorkspaceData = (lang: Language = 'en') => {
  switch (lang) {
    case 'bg':
      return {
        activeSupport: 'София, България • Активна подкрепа за семестъра',
        card1Code: '01. CAD / ПЛАНОВЕ',
        card1Scale: 'Мащаб 1:100',
        card1ImgTitle: 'Йерархия на дебелината на линиите в AutoCAD',
        card1Desc: 'Чисти конструктивни контури, векторни щриховки и точни коти.',
        card2Code: '02. A0 ТАБЛА',
        card2Scale: 'InDesign',
        card2ImgTitle: 'Композиция на табло за финално жури',
        card2Desc: 'Визуална логика от ситуационни схеми до рендерирани разрези.',
        card3Code: '03. ТЕЗИ, ДОКУМЕНТИ И РЪКОПИСИ',
        card3Scale: 'APA / Harvard / Ръкопис',
        card3ImgTitle: 'Структуриран експорт към Word / PDF и препис',
        card3Desc: 'Препис на ръкописни текстове и бележки, автоматично съдържание, номерация на фигури и точни полета.'
      };
    case 'tr':
      return {
        activeSupport: 'Sofya, Bulgaristan • Aktif Dönem Proje Desteği',
        card1Code: '01. CAD / PLANLAR',
        card1Scale: '1:100 Ölçek',
        card1ImgTitle: 'AutoCAD Çizgi Kalınlığı Hiyerarşisi',
        card1Desc: 'Temiz taşıyıcı kesim çizgileri, vektör taramaları ve tipografi.',
        card2Code: '02. A0 PAFTALAR',
        card2Scale: 'InDesign',
        card2ImgTitle: 'Final Jürisi Pafta Kompozisyonu',
        card2Desc: 'Vaziyet diyagramlarından kesit renderlarına akıcı kurgu.',
        card3Code: '03. TEZ, BELGE & EL YAZISI',
        card3Scale: 'APA / Harvard / El Yazısı',
        card3ImgTitle: 'Kusursuz Word / PDF & El Yazısı Temize Çekme',
        card3Desc: 'El ile yazı yazma, notları dijitale aktarma, otomatik içindekiler ve milimetrik kenar boşlukları.'
      };
    case 'el':
      return {
        activeSupport: 'Σόφια, Βουλγαρία • Ενεργή Υποστήριξη Εξαμήνου',
        card1Code: '01. CAD / ΚΑΤΟΨΕΙΣ',
        card1Scale: 'Κλίμακα 1:100',
        card1ImgTitle: 'Ιεραρχία Πάχους Γραμμών AutoCAD',
        card1Desc: 'Καθαρές γραμμές τομής, διανυσματικές διαγραμμίσεις και ακρίβεια.',
        card2Code: '02. ΠΙΝΑΚΙΔΕΣ A0',
        card2Scale: 'InDesign',
        card2ImgTitle: 'Σύνθεση Πινακίδας για Τελική Επιτροπή',
        card2Desc: 'Αφηγηματική ροή από τα διαγράμματα ανάλυσης έως τις τομές.',
        card3Code: '03. ΠΤΥΧΙΑΚΕΣ, ΕΓΓΡΑΦΑ & ΧΕΙΡΟΓΡΑΦΑ',
        card3Scale: 'APA / Harvard / Χειρόγραφα',
        card3ImgTitle: 'Δομημένη Εξαγωγή Word / PDF & Χειρόγραφα',
        card3Desc: 'Δακτυλογράφηση χειρογράφων σημειώσεων, αυτοματοποιημένα περιεχόμενα, λίστες σχημάτων και τέλεια περιθώρια.'
      };
    default:
      return {
        activeSupport: 'Sofia, Bulgaria • Active Semester Support',
        card1Code: '01. CAD / PLANS',
        card1Scale: '1:100 Scale',
        card1ImgTitle: 'AutoCAD Lineweight Hierarchy',
        card1Desc: 'Clean structural cut lines, vector hatches, and typography.',
        card2Code: '02. A0 BOARDS',
        card2Scale: 'InDesign',
        card2ImgTitle: 'Final Jury Layout Composition',
        card2Desc: 'Storytelling flow from site diagrams to rendered sections.',
        card3Code: '03. THESIS, DOCS & HANDWRITING',
        card3Scale: 'APA / Harvard / Handwritten',
        card3ImgTitle: 'Structured Word / PDF & Handwriting Transcription',
        card3Desc: 'Handwriting transcription, automated TOC, figure numbering, and perfect margins.'
      };
  }
};

export const getServices = (lang: Language = 'en'): ServiceItem[] => {
  const baseTools = [
    ['AutoCAD', 'Rhino', 'Revit', 'Photoshop', 'Illustrator', 'InDesign'],
    ['Microsoft Word', 'LaTeX', 'Adobe Acrobat Pro', 'Google Docs'],
    ['Microsoft Excel', 'Google Sheets', 'Tableau', 'PowerBI'],
    ['PowerPoint', 'Keynote', 'Canva Pro', 'Figma', 'Illustrator'],
    ['Grammarly Premium', 'Zotero', 'Mendeley', 'Word'],
    ['AutoCAD', 'SolidWorks', 'Fusion 360', 'Illustrator'],
    ['Photoshop', 'Illustrator', 'InDesign', 'Figma'],
    ['Flexible Stack']
  ];

  if (lang === 'bg') {
    return [
      {
        id: 'architecture-design',
        code: '01',
        title: 'Архитектура и пространствен дизайн',
        category: 'architecture',
        tagline: 'От първоначални концептуални диаграми до готови за жури табла',
        description: 'Специализирана помощ за студенти по архитектура: прецизиране на чертежи, дебелини на линиите, 2D планове, разрези, фасади, 3D Rhino/Revit/SketchUp моделиране, Photoshop постпродукция и A0 оформления.',
        iconName: 'Compass',
        popular: true,
        badge: 'Флагман Студио',
        deliverables: [
          '2D Планове, разрези и фасади (CAD / Вектор)',
          'Оформление на презентационни табла (A0 / A1 / A2)',
          'Ситуационни анализи и концептуални диаграми',
          '3D Обеми и подготовка за визуализация',
          'Форматиране на портфолио и листове за преглед',
          'Подготовка на файлове за лазерно рязане на макети'
        ],
        toolsUsed: baseTools[0]
      },
      {
        id: 'document-formatting',
        code: '02',
        title: 'Форматиране на тезиси, документи и ръкописи',
        category: 'documents',
        tagline: 'Безупречни академични стандарти, препис на ръкопис и структура на страниците',
        description: 'Превърнете черновите и ръкописните си бележки в изпипани научни трудове. Препис на ръкописен текст, настройка на Word стилове, автоматично съдържание, списъци с фигури, Harvard/APA/Chicago цитирания и PDF за печат.',
        iconName: 'FileText',
        badge: 'Основно',
        deliverables: [
          'Препис и дигитализация на ръкописни бележки и чернови',
          'Автоматично съдържание и списъци с фигури/таблици',
          'Типография и йерархия на заглавията (Heading 1-3)',
          'Полета на страниците, колонтитули и разделители',
          'Стандартизация на цитиранията (APA/Harvard/IEEE)',
          'Висококачествен PDF експорт с отметки'
        ],
        toolsUsed: baseTools[1]
      },
      {
        id: 'excel-data',
        code: '03',
        title: 'Excel и обработка на данни',
        category: 'data',
        tagline: 'Подредени таблици, автоматизирани формули и ясни графики',
        description: 'Организирайте вашите бази данни, бизнес изчисления и лабораторни резултати в структурирани работни книги с динамични обобщени таблици и професионални графики.',
        iconName: 'Table2',
        badge: 'Данни и анализи',
        deliverables: [
          'Почистване и структуриране на необработени данни',
          'Формули, VLOOKUP/XLOOKUP и логически функции',
          'Професионални графики и визуални диаграми',
          'Pivot таблици и обобщени табла (Dashboards)',
          'Готови за печат оформления на таблици'
        ],
        toolsUsed: baseTools[2]
      },
      {
        id: 'presentation-design',
        code: '04',
        title: 'Дизайн на презентации и Pitch Decks',
        category: 'presentations',
        tagline: 'Слайдове, които впечатляват преподаватели, журита и публика',
        description: 'Превърнете претрупаните текстови слайдове в модерни визуални презентации с правилна визуална йерархия, персонализирани икони и диаграми.',
        iconName: 'Presentation',
        popular: true,
        badge: 'Високо въздействие',
        deliverables: [
          'Персонализиран шаблон за слайдове (16:9 Widescreen)',
          'Визуална йерархия и реструктуриране на текста',
          'Графични елементи, инфографики и векторни икони',
          'Анимации и плавни преходи между слайдовете',
          'Формати PowerPoint (.pptx), PDF и Keynote'
        ],
        toolsUsed: baseTools[3]
      },
      {
        id: 'research-editing',
        code: '05',
        title: 'Академично редактиране и структура',
        category: 'research',
        tagline: 'Ясно структуриране, академичен стил и езикова редакция',
        description: 'Помощ при организиране на литературни обзори, подобряване на гладкостта на изказа, изчистване на граматически неточности и структуриране на глави.',
        iconName: 'BookOpen',
        badge: 'Езикова редакция',
        deliverables: [
          'Подобряване на академичния тон и яснота',
          'Граматическа, пунктуационна и синтактична проверка',
          'Структуриране на съдържанието и логически преходи',
          'Организиране на библиография и източници',
          'Форматиране за проверка за плагиатство'
        ],
        toolsUsed: baseTools[4]
      },
      {
        id: 'technical-cad',
        code: '06',
        title: 'Технически проекти и инженерно CAD чертане',
        category: 'technical',
        tagline: 'Прецизно чертане, 2D/3D схеми и чертожни листове',
        description: 'Чертожна помощ за инженерни дисциплини. Прецизиране на чертежи, оразмеряване, аксонометрични проекции, монтажни схеми и изчислителни записки.',
        iconName: 'Cpu',
        badge: 'Инженерство',
        deliverables: [
          '2D Техническо чертане и прецизно оразмеряване',
          'Принципни схеми и изометрични проекции',
          'Оформление на изчислителни листове',
          'Векторизиране на ръчни скици в CAD',
          'Експорт към DWG, DXF и векторен PDF'
        ],
        toolsUsed: baseTools[5]
      },
      {
        id: 'creative-graphic',
        code: '07',
        title: 'Графичен дизайн и постери',
        category: 'creative',
        tagline: 'Постери, инфографики, брандинг табла и визуални материали',
        description: 'Визуален дизайн за научни конференции (A0/A1), университетски събития, корици на портфолиа и брандинг концепции.',
        iconName: 'Palette',
        badge: 'Визуална идентичност',
        deliverables: [
          'Академични конферентни постери (A0 / A1)',
          'Инфографики и визуализации на данни',
          'Корици на студентски портфолиа и типография',
          'Иконни сетове и графична идентичност за проекти',
          'Файлове за печат в CMYK с наддаване за рязане'
        ],
        toolsUsed: baseTools[6]
      },
      {
        id: 'custom-requests',
        code: '08',
        title: 'Индивидуална академична заявка',
        category: 'custom',
        tagline: 'Имате специфичен краен срок или хибриден проект?',
        description: 'Комбинирайте няколко дисциплини или заявете персонализирана помощ според вашите точни университетски критерии.',
        iconName: 'Sparkles',
        badge: 'Индивидуално',
        deliverables: [
          'Персонална консултация по проекта',
          'Индивидуален график за изпълнение',
          'Пакет от файлове в нужните формати',
          'Директен контакт през WhatsApp и Имейл'
        ],
        toolsUsed: baseTools[7]
      }
    ];
  } else if (lang === 'tr') {
    return [
      {
        id: 'architecture-design',
        code: '01',
        title: 'Mimarlık ve Mekansal Tasarım',
        category: 'architecture',
        tagline: 'İlk konsept diyagramlarından jüriye hazır sunum paftalarına',
        description: 'Mimarlık öğrencileri için uzman destek: CAD çizim temizliği, çizgi kalınlığı hiyerarşisi, 2D planlar, kesitler, görünüşler, 3D Rhino/Revit/SketchUp modelleme, Photoshop render post-prodüksiyonu ve A0 pafta düzenleri.',
        iconName: 'Compass',
        popular: true,
        badge: 'Amiral Gemisi Stüdyo',
        deliverables: [
          '2D Planlar, Kesitler ve Görünüşler (CAD / Vektör)',
          'Sunum Paftası Düzenleri (A0 / A1 / A2)',
          'Vaziyet Analizi ve Konsept Diyagramları',
          '3D Kütle ve Görselleştirme Hazırlığı',
          'Portfolyo ve İnceleme Sayfası Formatlama',
          'Lazer Kesim Maket Dosyası Hazırlığı'
        ],
        toolsUsed: baseTools[0]
      },
      {
        id: 'document-formatting',
        code: '02',
        title: 'Belge, Tez Formatlama & El Yazısı Dijitalleştirme',
        category: 'documents',
        tagline: 'Kusursuz akademik standartlar, el yazısı temize çekme ve sayfa yapısı',
        description: 'Dağınık taslaklarınızı ve el yazısı notlarınızı üniversite kılavuzlarına tam uyumlu akademik tezlere dönüştürün. El ile yazı yazma/temize çekme, Word stilleri, otomatik içindekiler, Harvard/APA/Chicago atıf düzeni ve baskıya hazır PDF.',
        iconName: 'FileText',
        badge: 'Temel Destek',
        deliverables: [
          'El Yazısı Notları & Taslakları Temize Çekme ve Dijitalleştirme',
          'Otomatik İçindekiler ve Şekil/Tablo Listeleri',
          'Tipografi ve Başlık Hiyerarşisi (Heading 1-3)',
          'Sayfa Kenar Boşlukları, Üst/Alt Bilgiler ve Bölüm Sonları',
          'Kaynak Gösterimi ve Kaynakça Standardizasyonu (APA/Harvard/IEEE)',
          'Yer İmlerine Sahip Yüksek Çözünürlüklü PDF'
        ],
        toolsUsed: baseTools[1]
      },
      {
        id: 'excel-data',
        code: '03',
        title: 'Excel ve Veri Düzenleme',
        category: 'data',
        tagline: 'Temiz elektronik tablolar, otomatik formüller ve net grafikler',
        description: 'Veri setlerinizi, işletme hesaplamalarınızı ve laboratuvar sonuçlarınızı dinamik özet tablolar, gelişmiş formüller ve yönetici tipi grafiklerle düzenliyoruz.',
        iconName: 'Table2',
        badge: 'Veri ve Analiz',
        deliverables: [
          'Ham Veri Temizliği ve Yapısal Düzenleme',
          'Formüller, DÜŞEYARA/ÇAPRAZARA ve Mantıksal Fonksiyonlar',
          'Yönetici Düzeyinde Grafikler ve Görselleştirmeler',
          'Özet Tablolar (Pivot Tables) ve Özet Panolar',
          'Baskıya ve Sunuma Hazır Tablo Düzenleri'
        ],
        toolsUsed: baseTools[2]
      },
      {
        id: 'presentation-design',
        code: '04',
        title: 'Sunum ve Pitch Deck Tasarımı',
        category: 'presentations',
        tagline: 'Jürileri, hocaları ve izleyicileri etkileyen modern slaytlar',
        description: 'Yazı yığını slaytları modern görsel hiyerarşi, özel ikonlar, şık diyagramlar ve akıcı geçişlerle etkileyici sunumlara dönüştürün.',
        iconName: 'Presentation',
        popular: true,
        badge: 'Yüksek Etki',
        deliverables: [
          'Özel Tasarım Slayt Şablonu (16:9 Geniş Ekran)',
          'Bilgi Hiyerarşisi ve Madde İmleri Yeniden Yapılandırması',
          'Grafik Öğeler, İnfografikler ve Vektör İkonlar',
          'Slayt Animasyonları ve Akış Zamanlaması',
          'PowerPoint (.pptx), PDF ve Keynote Formatları'
        ],
        toolsUsed: baseTools[3]
      },
      {
        id: 'research-editing',
        code: '05',
        title: 'Araştırma ve Akademik Düzeltme Desteği',
        category: 'research',
        tagline: 'Net kurgu, akademik ton iyileştirmesi ve redaksiyon',
        description: 'Literatür taramalarını düzenleme, cümle akışını iyileştirme, dilbilgisi hatalarını giderme ve araştırma notlarını mantıklı bölümlere ayırma desteği.',
        iconName: 'BookOpen',
        badge: 'Metin Cilalama',
        deliverables: [
          'Akademik Üslup ve İfade Netliği Geliştirme',
          'Gramer, Noktalama ve Sözdizimi Düzeltmeleri',
          'Bölüm Yapılandırması ve Mantıksal Akış',
          'Açıklamalı Kaynakça Düzenlemesi',
          'İntihal/Benzerlik Raporu Düzenlemesi'
        ],
        toolsUsed: baseTools[4]
      },
      {
        id: 'technical-cad',
        code: '06',
        title: 'Teknik Projeler ve Mühendislik CAD Çizimi',
        category: 'technical',
        tagline: 'Hassas teknik çizim, 2D/3D şemalar ve proje paftaları',
        description: 'Mühendislik ödevleri için çizim desteği. Çizim temizliği, toleranslar, ölçülendirme, izometrik izdüşümler, montaj şemaları ve hesaplama sayfaları.',
        iconName: 'Cpu',
        badge: 'Mühendislik',
        deliverables: [
          '2D Teknik Çizim ve Hassas Ölçülendirme',
          'Şematik Diyagramlar ve İzometrik Projeksiyonlar',
          'Hesap Raporu ve Tablo Düzenleri',
          'El Çizimlerinin CAD Ortamına Aktarılması',
          'DWG, DXF ve Vektör PDF Formatında Çıktı'
        ],
        toolsUsed: baseTools[5]
      },
      {
        id: 'creative-graphic',
        code: '07',
        title: 'Yaratıcı Grafik Tasarım ve Posterler',
        category: 'creative',
        tagline: 'Posterler, infografikler, konsept panoları ve görsel kimlik',
        description: 'Akademik sempozyum posterleri (A0/A1), etkinlik afişleri, kişisel akademik portfolyo kapakları ve görsel sunum materyalleri tasarımı.',
        iconName: 'Palette',
        badge: 'Görsel Kimlik',
        deliverables: [
          'Akademik Konferans ve Jüri Posterleri (A0 / A1)',
          'İnfografikler ve Veri Görselleştirmeleri',
          'Akademik Portfolyo Kapakları ve Tipografi',
          'Proje İkon Setleri ve Görsel Dil',
          'Baskıya Hazır Taşma Paylı CMYK Dosyaları'
        ],
        toolsUsed: baseTools[6]
      },
      {
        id: 'custom-requests',
        code: '08',
        title: 'Özel Akademik Proje Talepleri',
        category: 'custom',
        tagline: 'Farklı bir teslim tarihiniz veya hibrit bir ödeviniz mi var?',
        description: 'Birden fazla disiplini birleştiren veya özel ders kriterlerinize tam uyan kişiye özel proje desteği.',
        iconName: 'Sparkles',
        badge: 'Kişiye Özel',
        deliverables: [
          'Kişisel Proje Değerlendirme ve Planlama',
          'Aşama Aşama Teslimat Takvimi',
          'Çok Formatlı Dosya Paketi',
          'Doğrudan WhatsApp ve E-posta İletişim Kanalı'
        ],
        toolsUsed: baseTools[7]
      }
    ];
  } else if (lang === 'el') {
    return [
      {
        id: 'architecture-design',
        code: '01',
        title: 'Αρχιτεκτονική & Σχεδιασμός Χώρου',
        category: 'architecture',
        tagline: 'Από τα αρχικά διαγράμματα έως τις πινακίδες παρουσίασης για επιτροπή',
        description: 'Εξειδικευμένη βοήθεια για φοιτητές αρχιτεκτονικής: διόρθωση σχεδίων CAD, ιεραρχία πάχους γραμμών, 2D κατόψεις, τομές, όψεις, 3D μοντελοποίηση Rhino/Revit/SketchUp, επεξεργασία render Photoshop και σύνθεση πινακίδων A0.',
        iconName: 'Compass',
        popular: true,
        badge: 'Κύριο Στούντιο',
        deliverables: [
          '2D Κατόψεις, Τομές & Όψεις (CAD / Vector)',
          'Σύνθεση Πινακίδων Παρουσίασης (A0 / A1 / A2)',
          'Ανάλυση Περιοχής & Διαγράμματα Concept',
          '3D Όγκοι & Προετοιμασία για Rendering',
          'Μορφοποίηση Portfolio & Φύλλων Κριτικής',
          'Προετοιμασία Αρχείων Κοπής Laser για Μακέτες'
        ],
        toolsUsed: baseTools[0]
      },
      {
        id: 'document-formatting',
        code: '02',
        title: 'Μορφοποίηση Πτυχιακών, Εγγράφων & Χειρογράφων',
        category: 'documents',
        tagline: 'Άψογα ακαδημαϊκά πρότυπα, δακτυλογράφηση χειρογράφων και δομή σελίδας',
        description: 'Μετατρέψτε τα πρόχειρα και χειρόγραφα κείμενά σας σε κομψές ακαδημαϊκές εργασίες. Δακτυλογράφηση χειρογράφων, στυλ Word, αυτόματα περιεχόμενα, αρίθμηση εικόνων, πρότυπα περιθωρίων, βιβλιογραφία Harvard/APA/Chicago και PDF εκτύπωσης.',
        iconName: 'FileText',
        badge: 'Βασικό',
        deliverables: [
          'Δακτυλογράφηση & Ψηφιοποίηση Χειρόγραφων Σημειώσεων',
          'Αυτοματοποιημένος Πίνακας Περιεχομένων & Λίστα Σχημάτων',
          'Τυπογραφία & Ιεραρχία Επικεφαλίδων (Heading 1-3)',
          'Περιθώρια Σελίδας, Κεφαλίδες/Υποσέλιδα & Αλλαγές Ενοτήτων',
          'Τυποποίηση Βιβλιογραφικών Αναφορών (APA/Harvard/IEEE)',
          'Εξαγωγή PDF Υψηλής Ανάλυσης με Σελιδοδείκτες'
        ],
        toolsUsed: baseTools[1]
      },
      {
        id: 'excel-data',
        code: '03',
        title: 'Excel & Οργάνωση Δεδομένων',
        category: 'data',
        tagline: 'Καθαρά υπολογιστικά φύλλα, αυτοματοποιημένοι τύποι και σαφή γραφήματα',
        description: 'Οργανώστε τα δεδομένα, τους επιχειρηματικούς υπολογισμούς και τα εργαστηριακά αποτελέσματα σε δομημένα αρχεία Excel με τύπους, δυναμικούς συγκεντρωτικούς πίνακες και επαγγελματικά γραφήματα.',
        iconName: 'Table2',
        badge: 'Δεδομένα & Ανάλυση',
        deliverables: [
          'Καθαρισμός & Δομική Μορφοποίηση Δεδομένων',
          'Συναρτήσεις, VLOOKUP/XLOOKUP & Λογικοί Τύποι',
          'Επαγγελματικά Γραφήματα & Οπτικά Διαγράμματα',
          'Συγκεντρωτικοί Πίνακες (Pivot Tables) & Dashboards',
          'Διατάξεις Έτοιμες για Εκτύπωση'
        ],
        toolsUsed: baseTools[2]
      },
      {
        id: 'presentation-design',
        code: '04',
        title: 'Σχεδιασμός Παρουσιάσεων & Pitch Decks',
        category: 'presentations',
        tagline: 'Διαφάνειες που εντυπωσιάζουν καθηγητές, επιτροπές και κοινό',
        description: 'Μετατρέψτε διαφάνειες γεμάτες κείμενο σε δυναμικές οπτικές παρουσιάσεις με σωστή ιεραρχία, προσαρμοσμένα εικονίδια, διαγράμματα και επαγγελματικό ρυθμό.',
        iconName: 'Presentation',
        popular: true,
        badge: 'Υψηλή Επιρροή',
        deliverables: [
          'Προσαρμοσμένο Πρότυπο Παρουσίασης (16:9 Widescreen)',
          'Οπτική Ιεραρχία & Αναδόμηση Κειμένου',
          'Γραφικά Στοιχεία, Infographics & Διανυσματικά Εικονίδια',
          'Εφέ Μετάβασης & Χρονισμός Διαφανειών',
          'Μορφές PowerPoint (.pptx), PDF & Keynote'
        ],
        toolsUsed: baseTools[3]
      },
      {
        id: 'research-editing',
        code: '05',
        title: 'Ακαδημαϊκή Επιμέλεια & Έρευνα',
        category: 'research',
        tagline: 'Σαφής δομή, ακαδημαϊκό ύφος και γλωσσική επιμέλεια',
        description: 'Βοήθεια στην οργάνωση βιβλιογραφικών ανασκοπήσεων, βελτίωση της ροής του κειμένου, διόρθωση γραμματικών λαθών και λογική διάρθρωση κεφαλαίων.',
        iconName: 'BookOpen',
        badge: 'Γλωσσική Επιμέλεια',
        deliverables: [
          'Βελτίωση Ακαδημαϊκού Ύφους & Σαφήνειας',
          'Γραμματικός, Συντακτικός & Ορθογραφικός Έλεγχος',
          'Δόμηση Περιεχομένου & Λογική Ροή Ενοτήτων',
          'Οργάνωση Σχολιασμένης Βιβλιογραφίας',
          'Έλεγχος & Μορφοποίηση για Λογοκλοπή'
        ],
        toolsUsed: baseTools[4]
      },
      {
        id: 'technical-cad',
        code: '06',
        title: 'Τεχνικά Έργα & Μηχανολογικό CAD',
        category: 'technical',
        tagline: 'Σχέδιο ακριβείας, 2D/3D διαγράμματα και τεχνικά φύλλα',
        description: 'Σχεδιαστική υποστήριξη για φοιτητές μηχανικούς. Διόρθωση τεχνικών σχεδίων, διαστασιολόγηση, ισομετρικές προβολές, συναρμολογήσεις και τεύχη υπολογισμών.',
        iconName: 'Cpu',
        badge: 'Μηχανική',
        deliverables: [
          '2D Τεχνικό Σχέδιο & Διαστασιολόγηση Ακριβείας',
          'Σχηματικά Διαγράμματα & Ισομετρικές Προβολές',
          'Μορφοποίηση Τευχών Υπολογισμών',
          'Διανυσματοποίηση Σκίτσων Χειρός σε CAD',
          'Εξαγωγή σε DWG, DXF & Διανυσματικό PDF'
        ],
        toolsUsed: baseTools[5]
      },
      {
        id: 'creative-graphic',
        code: '07',
        title: 'Γραφιστικός Σχεδιασμός & Αφίσες',
        category: 'creative',
        tagline: 'Αφίσες συνεδρίων, infographics, boards και οπτική ταυτότητα',
        description: 'Οπτικός σχεδιασμός υψηλής αισθητικής για ακαδημαϊκά συνέδρια (A0/A1), εξώφυλλα portfolio και παρουσιάσεις ερευνητικών εργασιών.',
        iconName: 'Palette',
        badge: 'Οπτική Ταυτότητα',
        deliverables: [
          'Ακαδημαϊκές Αφίσες Συνεδρίων & Επιτροπών (A0 / A1)',
          'Infographics & Οπτικοποίηση Δεδομένων',
          'Εξώφυλλα Ακαδημαϊκού Portfolio & Τυπογραφία',
          'Σετ Εικονιδίων & Οπτική Ταυτότητα Έργου',
          'Αρχεία Έτοιμα για Εκτύπωση CMYK με Bleed'
        ],
        toolsUsed: baseTools[6]
      },
      {
        id: 'custom-requests',
        code: '08',
        title: 'Εξατομικευμένο Αίτημα Εργασίας',
        category: 'custom',
        tagline: 'Έχετε μια μοναδική προθεσμία ή σύνθετο θέμα εργασίας;',
        description: 'Συνδυάστε πολλαπλούς τομείς ή ζητήστε προσαρμοσμένη βοήθεια σύμφωνα με τις ακριβείς απαιτήσεις του καθηγητή σας.',
        iconName: 'Sparkles',
        badge: 'Custom',
        deliverables: [
          'Προσωπική Συμβουλευτική Έργου',
          'Εξατομικευμένο Χρονοδιάγραμμα Παράδοσης',
          'Πακέτο Αρχείων σε Πολλαπλές Μορφές',
          'Άμεσο Κανάλι Επικοινωνίας σε WhatsApp & Email'
        ],
        toolsUsed: baseTools[7]
      }
    ];
  }

  // English fallback
  return [
    {
      id: 'architecture-design',
      code: '01',
      title: 'Architecture & Spatial Design',
      category: 'architecture',
      tagline: 'From initial concept diagrams to presentation-ready sheets',
      description: 'Specialized assistance for architecture students: CAD drawing cleanup, lineweight refinement, 2D floor plans, sections, elevations, 3D Rhino/Revit/SketchUp modeling, Photoshop post-production, site analysis diagrams, and presentation board layouts.',
      iconName: 'Compass',
      popular: true,
      badge: 'Flagship Studio',
      deliverables: [
        '2D Plans, Sections & Elevations (CAD / Vector)',
        'Presentation Board Layouts (A0 / A1 / A2)',
        'Site Analysis & Concept Diagrams',
        '3D Massing & Visualization Prep',
        'Portfolio & Review Sheet Formatting',
        'Physical Model Making Guidance & Cut-Files'
      ],
      toolsUsed: baseTools[0]
    },
    {
      id: 'document-formatting',
      code: '02',
      title: 'Document, Thesis Formatting & Handwriting Transcription',
      category: 'documents',
      tagline: 'Flawless academic standards, handwriting typing, and page structure',
      description: 'Transform messy drafts and handwritten notes into polished academic papers. We handle handwriting transcription, Microsoft Word styles, automated tables of contents, figure numbering, margin standards, Harvard/APA/Chicago citations, and export-ready PDF packaging.',
      iconName: 'FileText',
      badge: 'Essential',
      deliverables: [
        'Handwritten Drafts & Notes Transcription to Digital Word/LaTeX',
        'Automated Table of Contents & Figure Lists',
        'Typography & Hierarchy Styling (Headings, Body)',
        'Page Margins, Headers, Footers & Section Breaks',
        'Citation & Reference List Standardization (APA/Harvard/IEEE)',
        'High-Resolution PDF Export with Bookmarks'
      ],
      toolsUsed: baseTools[1]
    },
    {
      id: 'excel-data',
      code: '03',
      title: 'Excel & Data Organization',
      category: 'data',
      tagline: 'Clean spreadsheets, automated formulas, and clear visual charts',
      description: 'Get your datasets, business calculations, and lab numbers into clean, structured Excel workbooks with proper formulas, dynamic summary tables, professional chart styling, and presentation-ready exports.',
      iconName: 'Table2',
      badge: 'Data & Analytics',
      deliverables: [
        'Data Cleansing & Structural Formatting',
        'Formulas, VLOOKUP/XLOOKUP & Logic Functions',
        'Executive-Grade Charts & Visual Graphs',
        'Pivot Tables & Summary Dashboards',
        'Print-Ready Spreadsheet Layouts'
      ],
      toolsUsed: baseTools[2]
    },
    {
      id: 'presentation-design',
      code: '04',
      title: 'Presentation & Pitch Deck Design',
      category: 'presentations',
      tagline: 'Slide decks that impress professors, juries, and audiences',
      description: 'Turn cluttered text slides into visual, compelling slide decks. We apply modern visual hierarchy, clean iconography, custom diagrams, slide pacing, and speaker-ready formatting.',
      iconName: 'Presentation',
      popular: true,
      badge: 'High Impact',
      deliverables: [
        'Custom Slide Deck Template (16:9 Modern Widescreen)',
        'Information Hierarchy & Clean Bullet Restructuring',
        'Graphic Elements, Infographics & Icons',
        'Slide Transition Timing & Animations',
        'PowerPoint (.pptx), PDF & Keynote Formats'
      ],
      toolsUsed: baseTools[3]
    },
    {
      id: 'research-editing',
      code: '05',
      title: 'Research & Academic Editing Support',
      category: 'research',
      tagline: 'Clear structuring, tone refinement, and proofreading',
      description: 'Assistance in organizing complex literature reviews, refining sentence flow, eliminating grammatical ambiguities, and organizing research notes into logical chapter outlines.',
      iconName: 'BookOpen',
      badge: 'Writing Polish',
      deliverables: [
        'Academic Tone & Clarity Enhancement',
        'Grammar, Punctuation & Syntax Proofreading',
        'Outline Structuring & Logical Section Flow',
        'Annotated Bibliography Organization',
        'Plagiarism/Similarity Check Formatting'
      ],
      toolsUsed: baseTools[4]
    },
    {
      id: 'technical-cad',
      code: '06',
      title: 'Technical Projects & Engineering CAD',
      category: 'technical',
      tagline: 'Precision drafting, 2D/3D schematics, and project sheets',
      description: 'Drafting assistance for engineering and technical subjects. Cleanup of technical drawings, dimensioning, isometric projections, assembly schematics, and technical calculation sheet preparation.',
      iconName: 'Cpu',
      badge: 'Engineering',
      deliverables: [
        '2D Technical Drafting & Dimensioning',
        'Schematic Diagrams & Isometric Projections',
        'Calculation Sheet Layouts',
        'Vector Redraws of Hand Sketches',
        'Export to DWG, DXF, and Vector PDF'
      ],
      toolsUsed: baseTools[5]
    },
    {
      id: 'creative-graphic',
      code: '07',
      title: 'Creative Graphic Design & Posters',
      category: 'creative',
      tagline: 'Posters, infographics, branding boards, and visual assets',
      description: 'High-end visual communication design for project submissions, research posters (A0/A1), event flyers, portfolio covers, and visual identities.',
      iconName: 'Palette',
      badge: 'Visual Identity',
      deliverables: [
        'Academic Conference / Jury Posters (A0 / A1)',
        'Infographics & Data Visualizations',
        'Personal Academic Portfolio Covers & Typography',
        'Visual Identity & Icon Sets for Projects',
        'Print-Ready CMYK Files with Bleed'
      ],
      toolsUsed: baseTools[6]
    },
    {
      id: 'custom-requests',
      code: '08',
      title: 'Custom Academic Project Request',
      category: 'custom',
      tagline: 'Have a unique deadline or hybrid project requirement?',
      description: 'Combine multiple disciplines or request customized assistance tailored to your exact course syllabus, professor guidelines, or interdisciplinary project requirements.',
      iconName: 'Sparkles',
      badge: 'Bespoke',
      deliverables: [
        'Personalized Project Consultation',
        'Custom Milestone Schedule',
        'Multi-Format Deliverables Package',
        'Direct WhatsApp & Email Channel'
      ],
      toolsUsed: baseTools[7]
    }
  ];
};

export const getArchitectureProjects = (lang: Language = 'en'): ArchitectureItem[] => {
  const img1 = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
  const img2 = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80';
  const img3 = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80';
  const img4 = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
  const img5 = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80';
  const img6 = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80';

  if (lang === 'bg') {
    return [
      {
        id: 'arch-1',
        title: 'Жилищен комплекс — планове и оптимизация на дебелини на линиите',
        category: '2D Архитектурни планове и CAD чертане',
        scale: 'Мащаб 1:100 / 1:200',
        software: ['AutoCAD', 'Photoshop', 'Illustrator'],
        summary: 'Йерархия на дебелината на линиите, сенки, текстури на настилки и оразмеряване за семестриално жури.',
        description: 'Цялостна чертожна обработка на многоетажни жилищни планове. Прилагане на правила за дебелини (плътни стени, тънки линии за мебели, щриховки) с чиста типография.',
        image: img1,
        deliverables: ['Векторен PDF (A1 лист)', 'PSD с отделни слоеве и текстури', 'Изчистен DWG файл'],
        tags: ['Архитектурни планове', 'CAD стандарти', 'Студиен преглед']
      },
      {
        id: 'arch-2',
        title: 'Културен център — надлъжен разрез и фасадна проекция',
        category: 'Разрези и фасади',
        scale: '1:50 Детайл & 1:100 Разрез',
        software: ['Revit', 'AutoCAD', 'Photoshop'],
        summary: 'Детайлен разрез, показващ пространствени обеми, човешки силуети за мащаб, атмосферна светлина и конструкции.',
        description: 'Цялостен рендериран разрез през двойно-високи атриуми, подземни нива, естествена вентилация и ландшафтно обкръжение.',
        image: img2,
        deliverables: ['Рендериран разрез висока резолюция', 'Слоест векторен PDF', 'Листове с архитектурни детайли'],
        tags: ['Рендериран разрез', 'Атмосферно осветление', 'Фасада']
      },
      {
        id: 'arch-3',
        title: 'A0 Презентационни табла за финално студийно жури',
        category: 'Презентационни табла',
        scale: 'Вертикален формат A0 (841 x 1189 мм)',
        software: ['InDesign', 'Photoshop', 'Illustrator'],
        summary: 'Хармонична визуална композиция, балансираща диаграми, рендери, планове и концептуални текстове.',
        description: 'Цялостно оформление на таблото, водещо окото на журито от концептуалната скица до ситуационните диаграми, плановете и финалните 3D перспективи.',
        image: img3,
        deliverables: ['Готов за печат A0 PDF (300 DPI CMYK)', 'Модулен InDesign Master шаблон'],
        tags: ['Финално жури', 'A0 Табла', 'Визуална композиция']
      },
      {
        id: 'arch-4',
        title: 'Градоустройствен анализ и морфологични диаграми',
        category: 'Концепция и ситуационен анализ',
        scale: '1:1000 Ситуационен генерален план',
        software: ['QGIS', 'Illustrator', 'Rhino'],
        summary: 'Слънчево греене, пешеходни потоци, зелени коридори и картиране на плътността на застрояване.',
        description: 'Ясни, модерни диаграми, обясняващи логиката на проекта преди същинското проектиране. Висок контраст и изометрични изгледи.',
        image: img4,
        deliverables: ['Векторни карти и слоеве', 'Диаграми в отделни файлове', 'Легенди и графични данни'],
        tags: ['Ситуационен анализ', 'Слънце и вятър', 'Урбанизъм']
      },
      {
        id: 'arch-5',
        title: '3D Обеми и визуализация на екстериорни материали',
        category: '3D Рендер и постпродукция',
        scale: 'Перспективни изгледи',
        software: ['Rhino', 'V-Ray / Lumion', 'Photoshop'],
        summary: 'Постобработка на 3D изгледи с реалистично небе, зеленина, отражения в стъклото и дълбочина на светлината.',
        description: 'Превръщане на суровите 3D рендери в професионални студийни кадри с цветова корекция, хора в мащаб и балансирано осветление.',
        image: img5,
        deliverables: ['4K Рендерирани перспективи', 'PSD работни файлове с групирани слоеве'],
        tags: ['Постпродукция', 'Атмосфера', 'Дневни/Нощни кадри']
      },
      {
        id: 'arch-6',
        title: 'Подготовка на файлове за лазерно рязане и макетиране',
        category: 'Физически архитектурни макети',
        scale: '1:100 & 1:500 Ситуационен макет',
        software: ['AutoCAD', 'Rhino 3D', 'LaserCAM'],
        summary: 'Топографски хоризонтали, акрилни фасади и дървени елементи, оптимизирани без прегаряне на материала.',
        description: 'Подготовка на 2D векторни файлове за рязане и гравиране за шперплат, картон, плексиглас и пенокартон за чист архитектурен макет.',
        image: img6,
        deliverables: ['Векторен DWG/DXF за лазер', 'Номерирана схема за сглобяване'],
        tags: ['Лазерно рязане', 'Физически макети', 'Топография']
      }
    ];
  } else if (lang === 'tr') {
    return [
      {
        id: 'arch-1',
        title: 'Konut Kompleksi Planları ve Çizgi Kalınlığı Optimizasyonu',
        category: '2D Kat Planları ve Teknik CAD Çizimi',
        scale: '1:100 / 1:200 Ölçek',
        software: ['AutoCAD', 'Photoshop', 'Illustrator'],
        summary: 'Dönem jürisi için çizgi kalınlığı hiyerarşisi, gölgelendirme derinliği, döşeme dokuları ve mahal etiketlemesi.',
        description: 'Çok katlı konut planlarının eksiksiz temizliği. Taşıyıcı duvar taramaları, kesim çizgisi ağırlıkları, tefriş tonlamaları ve mimari tipografi standartları.',
        image: img1,
        deliverables: ['Vektörel PDF (A1 Pafta)', 'Katmanlı ve Dokulu PSD', 'Temizlenmiş DWG Çizimi'],
        tags: ['Kat Planları', 'Çizgi Standartları', 'Stüdyo Jürisi']
      },
      {
        id: 'arch-2',
        title: 'Kültür Merkezi — Boyuna Kesit ve Görünüş Renderı',
        category: 'Kesitler ve Görünüşler',
        scale: '1:50 Detay & 1:100 Kesit',
        software: ['Revit', 'AutoCAD', 'Photoshop'],
        summary: 'Hacimsel mekanları, insan ölçeği silüetlerini, doğal ışık atmosferini ve taşıyıcı makasları gösteren detaylı kesit.',
        description: 'Çift katlı galeri boşluklarını, yeraltı otoparkını, doğal havalandırma akışını ve peyzaj ilişkisini gösteren render kesit.',
        image: img2,
        deliverables: ['Yüksek Çözünürlüklü Render Kesit', 'Katmanlı Vektörel PDF', 'Sistem Detay Paftaları'],
        tags: ['Kesit Renderı', 'Atmosferik Işık', 'Görünüş Çizimi']
      },
      {
        id: 'arch-3',
        title: 'A0 Final Jüri Sunum Paftası Kompozisyonu',
        category: 'Sunum Paftaları',
        scale: 'Dikey A0 Formatı (841 x 1189 mm)',
        software: ['InDesign', 'Photoshop', 'Illustrator'],
        summary: 'Diyagramlar, renderlar, planlar ve konsept metinleri arasında dengeli görsel hikaye kurgusu.',
        description: 'Jürinin gözünü konsept eskizinden vaziyet analizine, kat planlarına, detay kesitlerine ve 3D perspektiflere akıcı biçimde yönlendiren pafta kompozisyonu.',
        image: img3,
        deliverables: ['Baskıya Hazır A0 PDF (300 DPI CMYK)', 'Modüler InDesign Şablonu'],
        tags: ['Final Jürisi', 'A0 Paftalar', 'Görsel Anlatım']
      },
      {
        id: 'arch-4',
        title: 'Kentsel Alan Analizi ve Morfolojik Diyagramlar',
        category: 'Konsept ve Vaziyet Analizi',
        scale: '1:1000 Kentsel Masterplan',
        software: ['QGIS', 'Illustrator', 'Rhino'],
        summary: 'Güneş açısı analizi, yaya sirkülasyon vektörleri, yeşil koridor bağlantıları ve yoğunluk haritalaması.',
        description: 'Tasarım aşamasından önce projenin ana fikrini jüriye net bir şekilde aktaran yüksek kontrastlı, aksonometrik vaziyet diyagramları.',
        image: img4,
        deliverables: ['Vektörel Harita Katmanları', 'Yüksek Çözünürlüklü JPG Diyagramlar', 'Lejant ve Grafik Veriler'],
        tags: ['Alan Analizi', 'Güneş ve Rüzgar', 'Kentsel Morfoloji']
      },
      {
        id: 'arch-5',
        title: '3D Kütle Modelleme ve Dış Mekan Malzeme Görselleştirme',
        category: '3D Render Post-Prodüksiyonu',
        scale: 'Perspektif Görünümler',
        software: ['Rhino', 'V-Ray / Lumion', 'Photoshop'],
        summary: 'Gerçekçi gökyüzü, peyzaj entegrasyonu, cam yansımaları ve ortam derinliği ile 3D mimari render post-prodüksiyonu.',
        description: 'Ham 3D renderları renk düzenlemesi, atmosferik pus, insan figürleri ve mimari ışık dengesiyle profesyonel stüdyo kalitesine çıkarma.',
        image: img5,
        deliverables: ['4K Render Perspektifleri', 'Gruplanmış Katmanlı PSD Dosyaları'],
        tags: ['Post-Prodüksiyon', 'Atmosfer', 'Gece/Gündüz Renderları']
      },
      {
        id: 'arch-6',
        title: 'Lazer Kesim Dosya Hazırlığı ve Maket Şeması',
        category: 'Fiziksel Mimari Maket',
        scale: '1:100 & 1:500 Çevre Maketi',
        software: ['AutoCAD', 'Rhino 3D', 'LaserCAM'],
        summary: 'Topografya kotları, akrilik cepheler ve ahşap strüktür parçalarının lazer kesim için hatasız yerleşimi.',
        description: 'Ahşap, mukavva, pleksi ve fotoblok malzemeler için çizgi renk kodlarıyla (kesim, çizim, kazıma) lazer kesim dosyası hazırlığı.',
        image: img6,
        deliverables: ['Temiz Vektörel DWG/DXF Lazer Dosyası', 'Numaralandırılmış Maket Montaj Kılavuzu'],
        tags: ['Lazer Kesim', 'Fiziksel Maket', 'Topografya']
      }
    ];
  } else if (lang === 'el') {
    return [
      {
        id: 'arch-1',
        title: 'Συγκρότημα Κατοικιών — Κατόψεις & Βελτιστοποίηση Πάχους Γραμμών',
        category: '2D Κατόψεις & Σχέδιο CAD',
        scale: 'Κλίμακα 1:100 / 1:200',
        software: ['AutoCAD', 'Photoshop', 'Illustrator'],
        summary: 'Ιεραρχία πάχους γραμμών, σκιές βάθους, υφές δαπέδων και ονοματοδοσία χώρων για φοιτητική κριτική.',
        description: 'Πλήρης διόρθωση πολυώροφων κατόψεων κατοικιών. Εφαρμογή κανόνων πάχους γραμμής (πλήρη τοιχία, έπιπλα, διαγραμμίσεις) με καθαρή τυπογραφία.',
        image: img1,
        deliverables: ['Διανυσματικό PDF (Φύλλο A1)', 'PSD με Επίπεδα και Υφές', 'Καθαρό Αρχείο DWG'],
        tags: ['Κατόψεις', 'Πρότυπα CAD', 'Κριτική Στούντιο']
      },
      {
        id: 'arch-2',
        title: 'Πολιτιστικό Κέντρο — Διαμήκης Τομή & Όψη',
        category: 'Τομές & Όψεις',
        scale: 'Λεπτομέρεια 1:50 & Τομή 1:100',
        software: ['Revit', 'AutoCAD', 'Photoshop'],
        summary: 'Αναλυτική τομή που δείχνει χωρικούς όγκους, ανθρώπινη κλίμακα, ατμοσφαιρικό φωτισμό και δικτυώματα.',
        description: 'Φωτορεαλιστική τομή διαμέσου αιθρίων διπλού ύψους, υπόγειων χώρων στάθμευσης και φυσικού αερισμού με ένταξη στο τοπίο.',
        image: img2,
        deliverables: ['Τομή Υψηλής Ανάλυσης', 'Διανυσματικό PDF με Επίπεδα', 'Φύλλα Αρχιτεκτονικών Λεπτομερειών'],
        tags: ['Render Τομής', 'Ατμοσφαιρικός Φωτισμός', 'Όψεις']
      },
      {
        id: 'arch-3',
        title: 'Πινακίδα Παρουσίασης A0 για Τελική Επιτροπή',
        category: 'Πινακίδες Παρουσίασης',
        scale: 'Κατακόρυφη Μορφή A0 (841 x 1189 mm)',
        software: ['InDesign', 'Photoshop', 'Illustrator'],
        summary: 'Ισορροπημένη οπτική αφήγηση που συνδυάζει διαγράμματα, renders, κατόψεις και επεξηγηματικά κείμενα.',
        description: 'Σύνθεση πινακίδας σχεδιασμένη να οδηγεί το μάτι της επιτροπής από το concept στα διαγράμματα ανάλυσης, τις κατόψεις και τα τελικά 3D perspectives.',
        image: img3,
        deliverables: ['Έτοιμο για Εκτύπωση PDF A0 (300 DPI CMYK)', 'Modular Master Πρότυπο InDesign'],
        tags: ['Τελική Επιτροπή', 'Πινακίδες A0', 'Οπτική Αφήγηση']
      },
      {
        id: 'arch-4',
        title: 'Αστική Ανάλυση & Μορφολογικά Διαγράμματα',
        category: 'Concept & Ανάλυση Περιοχής',
        scale: '1:1000 Masterplan Περιοχής',
        software: ['QGIS', 'Illustrator', 'Rhino'],
        summary: 'Ηλιασμός, ροές πεζών, πράσινοι διάδρομοι και χαρτογράφηση πυκνοτήτων δόμησης.',
        description: 'Καθαρά, μοντέρνα διαγράμματα που εξηγούν τη λογική του σχεδιασμού πριν από τη συνθετική φάση. Υψηλή αντίθεση και ισομετρικές προβολές.',
        image: img4,
        deliverables: ['Διανυσματικά Επίπεδα Χαρτών', 'Διαγράμματα σε Υψηλή Ανάλυση', 'Υπομνήματα & Γραφικά Στοιχεία'],
        tags: ['Ανάλυση Χώρου', 'Ηλιασμός & Άνεμος', 'Αστικός Σχεδιασμός']
      },
      {
        id: 'arch-5',
        title: '3D Όγκοι & Επεξεργασία Υλικών Εξωτερικού Χώρου',
        category: '3D Render & Post-Production',
        scale: 'Προοπτικές Όψεις',
        software: ['Rhino', 'V-Ray / Lumion', 'Photoshop'],
        summary: 'Επεξεργασία 3D προοπτικών με ρεαλιστικό ουρανό, βλάστηση, ανακλάσεις γυαλιού και ατμοσφαιρικό βάθος.',
        description: 'Αναβάθμιση απλών renders σε επαγγελματική ποιότητα στούντιο με χρωματική διόρθωση, ανθρώπινες φιγούρες και ισορροπημένο φωτισμό.',
        image: img5,
        deliverables: ['4K Φωτορεαλιστικές Προοπτικές', 'Αρχεία Εργασίας PSD με Ομαδοποιημένα Επίπεδα'],
        tags: ['Post-Production', 'Ατμόσφαιρα', 'Ημερήσια/Νυχτερινά Renders']
      },
      {
        id: 'arch-6',
        title: 'Προετοιμασία Κοπής Laser & Συναρμολόγηση Μακέτας',
        category: 'Φυσικές Αρχιτεκτονικές Μακέτες',
        scale: '1:100 & 1:500 Μακέτα Εντάξεως',
        software: ['AutoCAD', 'Rhino 3D', 'LaserCAM'],
        summary: 'Υψομετρικές καμπύλες εδάφους, ακρυλικές όψεις και ξύλινα στοιχεία έτοιμα για κοπή χωρίς καψίματα.',
        description: 'Προετοιμασία διανυσματικών αρχείων 2D (γραμμές κοπής, χάραξης) για ξύλο, χαρτόνι, πλέξιγκλας και foam board για καθαρή μακέτα.',
        image: img6,
        deliverables: ['Καθαρό Διανυσματικό DWG/DXF για Laser', 'Αριθμημένος Οδηγός Συναρμολόγησης'],
        tags: ['Κοπή Laser', 'Φυσικές Μακέτες', 'Τοπογραφία']
      }
    ];
  }

  // English fallback
  return [
    {
      id: 'arch-1',
      title: 'Residential Complex Plan & Lineweight Optimization',
      category: '2D Floor Plans & Technical Drafting',
      scale: '1:100 / 1:200 Scale',
      software: ['AutoCAD', 'Photoshop', 'Illustrator'],
      summary: 'Lineweight hierarchy, shadow depth textures, and room labeling for a multi-unit residential project review.',
      description: 'Full drafting cleanup of complex multi-story residential floor plans. Applied architectural hierarchy rules (structural wall fills, cut line weights, furniture halftones, floor finish textures) with crisp typography.',
      image: img1,
      deliverables: ['Vector PDF (A1 Sheet)', 'Layered PSD with Texture Maps', 'Clean DWG file'],
      tags: ['Floor Plans', 'Lineweight Standards', 'Studio Review']
    },
    {
      id: 'arch-2',
      title: 'Public Cultural Center — Longitudinal Section & Elevation',
      category: 'Sections & Elevations',
      scale: '1:50 Detail & 1:100 Section',
      software: ['Revit', 'AutoCAD', 'Photoshop'],
      summary: 'Detailed section showing spatial volumes, human scale silhouettes, atmospheric lighting, and structural trusses.',
      description: 'Comprehensive section-cut render showing double-height atrium spaces, underground parking depth, natural ventilation arrows, and context landscape integration.',
      image: img2,
      deliverables: ['High-Res Rendered Section', 'Layered Vector PDF', 'Detail Callout Sheets'],
      tags: ['Section Render', 'Atmospheric Lighting', 'Context Elevation']
    },
    {
      id: 'arch-3',
      title: 'A0 Studio Final Jury Presentation Board Layout',
      category: 'Presentation Boards',
      scale: 'A0 Vertical Format (841 x 1189 mm)',
      software: ['InDesign', 'Photoshop', 'Illustrator'],
      summary: 'Cohesive visual storytelling layout balancing diagrams, renders, plans, and concept texts for final studio jury.',
      description: 'Complete board composition designed to lead the jury eye effortlessly from concept sketch to site analysis, spatial floor plans, detailed sections, and final 3D perspectives without clutter.',
      image: img3,
      deliverables: ['Print-Ready A0 PDF (300 DPI CMYK)', 'Modular InDesign Master Template'],
      tags: ['Final Jury', 'A0 Boards', 'Visual Storytelling']
    },
    {
      id: 'arch-4',
      title: 'Urban Site Analysis & Morphological Diagrams',
      category: 'Concept & Site Analysis',
      scale: '1:1000 Urban Masterplan',
      software: ['QGIS', 'Illustrator', 'Rhino'],
      summary: 'Sun path analysis, pedestrian flow vectors, green corridor connections, and volumetric density mapping.',
      description: 'Clear, modern editorial diagrams that clearly explain the architectural rationale before the design phase. Striking contrast, clean isometric projection, and custom map icons.',
      image: img4,
      deliverables: ['Vector Map Assets', 'Individual Diagram JPEGs', 'Legend & Data Callouts'],
      tags: ['Site Analysis', 'Sun Path & Wind', 'Urban Morphologies']
    },
    {
      id: 'arch-5',
      title: '3D Massing & Exterior Material Visualization Prep',
      category: '3D Render Post-Production',
      scale: 'Perspective Views',
      software: ['Rhino', 'V-Ray / Lumion', 'Photoshop'],
      summary: 'Post-processing of 3D architectural views with realistic sky, foliage integration, glass reflections, and ambient depth.',
      description: 'Taking raw 3D view renders and elevating them to professional studio quality with color grading, realistic atmospheric haze, entourage placement, and architectural lighting balance.',
      image: img5,
      deliverables: ['4K Rendered Perspectives', 'PSD Work Files with Layer Groups'],
      tags: ['Post-Production', 'Atmosphere', 'Day/Night Renders']
    },
    {
      id: 'arch-6',
      title: 'Laser-Cut File Preparation & Physical Model Assembly',
      category: 'Physical Model Making',
      scale: '1:100 & 1:500 Context Model',
      software: ['AutoCAD', 'Rhino 3D', 'LaserCAM'],
      summary: 'Contour topography layering, acrylic facades, wood framing sheets prepared with zero burn overlap.',
      description: 'Preparation of 2D vector cut files (line color codes for scoring, cutting, engraving) for basswood, cardboard, acrylic, and foam boards to assemble clean physical architecture models.',
      image: img6,
      deliverables: ['Clean Laser Cut Vector DWG/DXF', 'Numbered Assembly Diagram Guide'],
      tags: ['Laser Cutting', 'Physical Models', 'Topography Layers']
    }
  ];
};

export const getPortfolioItems = (lang: Language = 'en'): PortfolioItem[] => {
  const img1 = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80';
  const img2 = 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80';
  const img3 = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80';
  const img4 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
  const img5 = 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80';
  const img6 = 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80';

  if (lang === 'bg') {
    return [
      {
        id: 'port-1',
        title: 'Павилион — Архитектурно портфолио и табла',
        category: 'architecture',
        categoryLabel: 'Архитектура',
        image: img1,
        summary: 'A1 презентационни табла и оформление на 20-странично портфолио за семестриално предаване.',
        fullDescription: 'Помощ за студент по архитектура при преформатиране на финалния проект в минималистично портфолио с чисти дебелини на линиите и цветова палитра.',
        tools: ['AutoCAD', 'Illustrator', 'InDesign', 'Photoshop'],
        deliverables: ['PDF за печат (300 DPI)', 'Интерактивно уеб портфолио', 'Изходни файлове InDesign'],
        scope: 'Срок: 3 дни • 2 A1 Табла + 12 Страници',
        tags: ['Архитектура', 'Портфолио', 'A1 Табла']
      },
      {
        id: 'port-2',
        title: 'Форматиране на магистърска теза по икономика',
        category: 'documents',
        categoryLabel: 'Тезиси и документи',
        image: img2,
        summary: '110 страници магистърска теза, форматирана по строги университетски академични изисквания.',
        fullDescription: 'Пълно структуриране на заглавни стилове, йерархия, 42 фигури, 18 таблици, автоматично съдържание и Harvard цитирания.',
        tools: ['Microsoft Word', 'Adobe Acrobat Pro', 'Zotero'],
        deliverables: ['PDF готов за подвързване с точни полета', 'Редактируем Word шаблон (.docx)'],
        scope: 'Срок: 48 часа • 110 форматирани страници',
        tags: ['Теза', 'Академичен стил', 'Word форматиране']
      },
      {
        id: 'port-3',
        title: 'Pitch Deck за финтех стартъп и казус',
        category: 'presentations',
        categoryLabel: 'Презентации',
        image: img3,
        summary: '24 слайда презентация за финал на студентско бизнес състезание.',
        fullDescription: 'Преобразуване на претрупани текстови слайдове в елегантна презентация в тъмен режим с финансови инфографики и клиентски пътеки.',
        tools: ['PowerPoint', 'Figma', 'Keynote'],
        deliverables: ['16:9 Widescreen PPTX', 'PDF с бележки за лектора', 'Редактируеми векторни активи'],
        scope: 'Срок: 24 часа • 24 слайда',
        tags: ['Pitch Deck', 'Инфографики', 'Бизнес казус']
      },
      {
        id: 'port-4',
        title: 'Финансов модел и табло за анализ на данни',
        category: 'data',
        categoryLabel: 'Excel и данни',
        image: img4,
        summary: 'Автоматизиран статистически модел с интерактивни KPI карти и графики.',
        fullDescription: 'Преструктуриране на база данни от 1200 студентски анкети. Изграждане на динамични Pivot таблици, кръстосани формули и обобщено табло.',
        tools: ['Microsoft Excel', 'Google Sheets'],
        deliverables: ['Динамична .xlsx работна книга', 'PDF визуален отчет'],
        scope: 'Срок: 1 ден • 1200 реда данни',
        tags: ['Excel модел', 'Обработка на данни', 'KPI графики']
      },
      {
        id: 'port-5',
        title: 'Механичен възел — CAD чертежи и спецификация',
        category: 'technical',
        categoryLabel: 'CAD и инженеринг',
        image: img5,
        summary: 'Прецизни 2D ортогонални проекции, допуски и заглавен блок.',
        fullDescription: 'Генериране на технически чертожни листове по стандартите на ISO. Чисти типове линии, осеви линии, разрези и спецификация на материалите.',
        tools: ['AutoCAD', 'SolidWorks', 'Illustrator'],
        deliverables: ['Векторен DWG & DXF', 'Многостраничен PDF комплект A3'],
        scope: 'Срок: 2 дни • 6 A3 чертожни листа',
        tags: ['Техническо чертане', 'CAD чертежи', 'Инженерство']
      },
      {
        id: 'port-6',
        title: 'Постер за научна конференция по психология (A0)',
        category: 'creative',
        categoryLabel: 'Творчески дизайн',
        image: img6,
        summary: 'Модерен A0 постер за научен симпозиум на департамент по психология.',
        fullDescription: 'Организиране на емпирична методология, статистически резултати, блок-схеми и дискусия в привличащ вниманието, чист A0 постер.',
        tools: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
        deliverables: ['PDF за печат с 3мм наддаване', 'Дигитален 4K JPG файл'],
        scope: 'Срок: 24 часа • A0 формат',
        tags: ['Конферентен постер', 'A0 печат', 'Инфографика']
      }
    ];
  } else if (lang === 'tr') {
    return [
      {
        id: 'port-1',
        title: 'Pavyon Tasarımı — Mimari Portfolyo ve Jüri Paftaları',
        category: 'architecture',
        categoryLabel: 'Mimarlık',
        image: img1,
        summary: 'Dönem teslimi için A1 sunum paftaları ve 20 sayfalık portfolyo tasarımı.',
        fullDescription: 'Bir mimarlık öğrencisinin dönem projesini minimalist bir portfolyo düzenine dönüştürdük. Tutarlı çizgi kalınlıkları ve uyumlu renk paletleri uygulandı.',
        tools: ['AutoCAD', 'Illustrator', 'InDesign', 'Photoshop'],
        deliverables: ['Baskı PDF (300 DPI)', 'İnteraktif Web Portfolyosu', 'Kaynak InDesign Dosyaları'],
        scope: '3 Günde Teslim • 2 A1 Pafta + 12 Sayfa',
        tags: ['Mimarlık', 'Portfolyo', 'A1 Paftalar']
      },
      {
        id: 'port-2',
        title: 'İktisat Yüksek Lisans Tezi Akademik Formatlama',
        category: 'documents',
        categoryLabel: 'Tez ve Belgeler',
        image: img2,
        summary: '110 sayfalık yüksek lisans tezinin üniversite yazım kılavuzuna tam uyarlanması.',
        fullDescription: 'Başlık stillerinin baştan yapılandırılması, 42 şekil, 18 tablo, otomatik içindekiler tablosu ve Harvard atıf standardı düzenlemesi.',
        tools: ['Microsoft Word', 'Adobe Acrobat Pro', 'Zotero'],
        deliverables: ['Ciltlemeye Hazır Kenar Boşluklu PDF', 'Düzenlenebilir Word Şablonu (.docx)'],
        scope: '48 Saatte Teslim • 110 Formatlanmış Sayfa',
        tags: ['Tez Formatı', 'Akademik Stil', 'Word Düzenleme']
      },
      {
        id: 'port-3',
        title: 'Fintech Girişimi Pitch Deck ve Vaka Sunumu',
        category: 'presentations',
        categoryLabel: 'Sunumlar',
        image: img3,
        summary: 'Üniversite iş yarışması finali için 24 slaytlık yönetici sunumu.',
        fullDescription: 'Yazı dolu slaytları finansal infografikler, müşteri yolculuğu haritaları ve şık koyu mod ile profesyonel bir pitch deck haline getirdik.',
        tools: ['PowerPoint', 'Figma', 'Keynote'],
        deliverables: ['16:9 Geniş Ekran PPTX', 'Konuşmacı Notlu PDF', 'Düzenlenebilir Vektör Grafikler'],
        scope: '24 Saatte Teslim • 24 Slayt',
        tags: ['Pitch Deck', 'İnfografik', 'İş Sunumu']
      },
      {
        id: 'port-4',
        title: 'Piyasa Araştırması Excel Finansal Modeli ve Dashboard',
        category: 'data',
        categoryLabel: 'Excel ve Veri',
        image: img4,
        summary: 'İnteraktif KPI kartları ve grafiklere sahip otomatik istatistiksel özet model.',
        fullDescription: '1200 öğrenci anket yanıtından oluşan ham verinin temizlenmesi. Dinamik özet tablolar, çapraz formüller ve görsel özet dashboard oluşturuldu.',
        tools: ['Microsoft Excel', 'Google Sheets'],
        deliverables: ['Dinamik .xlsx Çalışma Kitabı', 'PDF Görsel Rapor'],
        scope: '1 Günde Teslim • 1.200 Veri Satırı',
        tags: ['Excel Modeli', 'Veri Temizleme', 'KPI Grafikleri']
      },
      {
        id: 'port-5',
        title: 'Mekanik Montaj CAD Çizimleri ve Malzeme Listesi',
        category: 'technical',
        categoryLabel: 'CAD ve Mühendislik',
        image: img5,
        summary: 'Hassas 2D ortografik görünüşler, toleranslar ve antet düzeni.',
        fullDescription: 'Mühendislik ders projesi için ISO standartlarında teknik çizim paftaları. Temiz çizgi tipleri, eksen çizgileri, kesit detayları ve malzeme listesi.',
        tools: ['AutoCAD', 'SolidWorks', 'Illustrator'],
        deliverables: ['Vektörel DWG & DXF', 'Çok Sayfalı A3 Çizim Seti PDF'],
        scope: '2 Günde Teslim • 6 A3 Pafta',
        tags: ['Teknik Çizim', 'CAD Çizimi', 'Mühendislik']
      },
      {
        id: 'port-6',
        title: 'Akademik Psikoloji Konferansı Sunum Posteri (A0)',
        category: 'creative',
        categoryLabel: 'Grafik Tasarım',
        image: img6,
        summary: 'Psikoloji Sempozyumu için modern görsel hiyerarşiye sahip A0 araştırma posteri.',
        fullDescription: 'Ampirik metodoloji, istatistiksel sonuçlar, hipotez akış şemaları ve tartışma notlarının fuaye alanında parlayan temiz bir A0 posterine dönüştürülmesi.',
        tools: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
        deliverables: ['3mm Taşma Paylı Baskı PDF', 'Dijital Paylaşım İçin 4K JPG'],
        scope: '24 Saatte Teslim • A0 Format',
        tags: ['Konferans Posteri', 'A0 Baskı', 'İnfografik']
      }
    ];
  } else if (lang === 'el') {
    return [
      {
        id: 'port-1',
        title: 'Περίπτερο — Αρχιτεκτονικό Portfolio & Πινακίδες',
        category: 'architecture',
        categoryLabel: 'Αρχιτεκτονική',
        image: img1,
        summary: 'Πινακίδες A1 και σύνθεση portfolio 20 σελίδων για εξαμηνιαία παράδοση.',
        fullDescription: 'Βοηθήσαμε φοιτητή αρχιτεκτονικής να επανασχεδιάσει το τελικό του έργο σε μινιμαλιστική διάταξη με καθαρά πάχη γραμμών και αρμονικά χρώματα.',
        tools: ['AutoCAD', 'Illustrator', 'InDesign', 'Photoshop'],
        deliverables: ['PDF Εκτύπωσης (300 DPI)', 'Διαδραστικό Web Portfolio', 'Αρχεία InDesign'],
        scope: 'Παράδοση σε 3 Ημέρες • 2 Πινακίδες A1 + 12 Σελίδες',
        tags: ['Αρχιτεκτονική', 'Portfolio', 'Πινακίδες A1']
      },
      {
        id: 'port-2',
        title: 'Μορφοποίηση Μεταπτυχιακής Διατριβής Οικονομικών',
        category: 'documents',
        categoryLabel: 'Έγγραφα & Πτυχιακές',
        image: img2,
        summary: 'Διατριβή 110 σελίδων μορφοποιημένη σύμφωνα με τους αυστηρούς κανόνες του πανεπιστημίου.',
        fullDescription: 'Πλήρης αναδόμηση επικεφαλίδων, 42 εικόνες, 18 πίνακες, αυτόματος πίνακας περιεχομένων και βιβλιογραφία Harvard.',
        tools: ['Microsoft Word', 'Adobe Acrobat Pro', 'Zotero'],
        deliverables: ['PDF Έτοιμο για Βιβλιοδεσία με Περιθώρια', 'Επεξεργάσιμο Πρότυπο Word (.docx)'],
        scope: 'Παράδοση σε 48 Ώρες • 110 Σελίδες',
        tags: ['Διατριβή', 'Ακαδημαϊκό Στυλ', 'Μορφοποίηση Word']
      },
      {
        id: 'port-3',
        title: 'Pitch Deck & Παρουσίαση Μελέτης Περίπτωσης Fintech',
        category: 'presentations',
        categoryLabel: 'Παρουσιάσεις',
        image: img3,
        summary: 'Παρουσίαση 24 διαφανειών για τελικό φοιτητικού διαγωνισμού επιχειρηματικότητας.',
        fullDescription: 'Επανασχεδιασμός διαφανειών σε dark mode με οικονομικά infographics, χάρτες εμπειρίας χρήστη και άψογη οπτική ροή.',
        tools: ['PowerPoint', 'Figma', 'Keynote'],
        deliverables: ['16:9 Widescreen PPTX', 'PDF με Σημειώσεις Ομιλητή', 'Διανυσματικά Γραφικά'],
        scope: 'Παράδοση σε 24 Ώρες • 24 Διαφάνειες',
        tags: ['Pitch Deck', 'Infographics', 'Business Case']
      },
      {
        id: 'port-4',
        title: 'Οικονομικό Μοντέλο & Dashboard Δεδομένων στο Excel',
        category: 'data',
        categoryLabel: 'Excel & Δεδομένα',
        image: img4,
        summary: 'Αυτοματοποιημένο στατιστικό μοντέλο με διαδραστικές κάρτες KPI και γραφήματα.',
        fullDescription: 'Αναδιάρθρωση δεδομένων 1.200 απαντήσεων ερωτηματολογίων. Δημιουργία δυναμικών Pivot tables και οπτικού dashboard.',
        tools: ['Microsoft Excel', 'Google Sheets'],
        deliverables: ['Δυναμικό Βιβλίο .xlsx', 'Οπτική Αναφορά PDF'],
        scope: 'Παράδοση σε 1 Ημέρα • 1.200 Γραμμές Δεδομένων',
        tags: ['Μοντέλο Excel', 'Καθαρισμός Δεδομένων', 'Γραφήματα KPI']
      },
      {
        id: 'port-5',
        title: 'Συναρμολόγηση Μηχανισμού — Σχέδια CAD & Τεχνικά Φύλλα',
        category: 'technical',
        categoryLabel: 'CAD & Μηχανική',
        image: img5,
        summary: 'Ορθογραφικές προβολές ακριβείας 2D, ανοχές και πινακίδα στοιχείων.',
        fullDescription: 'Τεχνικά σχέδια κατά ISO για εργασία μηχανολογίας. Καθαροί τύποι γραμμών, αξονικές, λεπτομέρειες τομών και πίνακας υλικών.',
        tools: ['AutoCAD', 'SolidWorks', 'Illustrator'],
        deliverables: ['Διανυσματικό DWG & DXF', 'Πλήρες Σετ Σχεδίων A3 σε PDF'],
        scope: 'Παράδοση σε 2 Ημέρες • 6 Φύλλα A3',
        tags: ['Τεχνικό Σχέδιο', 'Σχέδια CAD', 'Μηχανολογία']
      },
      {
        id: 'port-6',
        title: 'Αφίσα Ακαδημαϊκού Συνεδρίου Ψυχολογίας (A0)',
        category: 'creative',
        categoryLabel: 'Γραφιστική',
        image: img6,
        summary: 'Μοντέρνα αφίσα έρευνας για συμπόσιο του Τμήματος Ψυχολογίας.',
        fullDescription: 'Οργάνωση εμπειρικής μεθοδολογίας, στατιστικών αποτελεσμάτων και διαγραμμάτων σε μια εντυπωσιακή και καθαρή αφίσα A0.',
        tools: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
        deliverables: ['PDF Εκτύπωσης με 3mm Bleed', 'Αρχείο 4K JPG'],
        scope: 'Παράδοση σε 24 Ώρες • Μορφή A0',
        tags: ['Αφίσα Συνεδρίου', 'Εκτύπωση A0', 'Infographic']
      }
    ];
  }

  // English fallback
  return [
    {
      id: 'port-1',
      title: 'Pavilion Architecture Portfolio & Jury Sheets',
      category: 'architecture',
      categoryLabel: 'Architecture',
      image: img1,
      summary: 'A1 presentation sheets and 20-page portfolio layout for student studio submission.',
      fullDescription: 'Helped an architecture student reformat their final semester project into a clean, minimalist portfolio layout. Re-drew floor plans with consistent lineweights and designed cohesive color palettes for all 3D diagrams.',
      tools: ['AutoCAD', 'Illustrator', 'InDesign', 'Photoshop'],
      deliverables: ['Print PDF (300 DPI)', 'Web Interactive Portfolio PDF', 'Source InDesign Files'],
      scope: '3-Day Turnaround • 2 A1 Boards + 12 Pages',
      tags: ['Architecture', 'Portfolio', 'A1 Boards']
    },
    {
      id: 'port-2',
      title: 'Master Thesis Academic Document Formatting',
      category: 'documents',
      categoryLabel: 'Documents & Thesis',
      image: img2,
      summary: '110-page Master dissertation formatted to strict university thesis guidelines.',
      fullDescription: 'Comprehensive overhaul of heading styles, multi-level numbering, 42 figure captions, 18 tables, automated table of contents, and Harvard citation referencing for a business economics thesis.',
      tools: ['Microsoft Word', 'Adobe Acrobat Pro', 'Zotero'],
      deliverables: ['Bound-Ready PDF with Margins', 'Editable Word Template (.docx)'],
      scope: '48h Turnaround • 110 Pages formatted',
      tags: ['Thesis', 'Academic Style', 'Word Formatting']
    },
    {
      id: 'port-3',
      title: 'Fintech Startup Pitch & Case Study Deck',
      category: 'presentations',
      categoryLabel: 'Presentations',
      image: img3,
      summary: '24-slide executive presentation for university business competition final.',
      fullDescription: 'Redesigned cluttered bullet-point slides into a clean, high-impact dark mode slide deck featuring financial metric infographics, customer journey maps, and smooth visual pacing.',
      tools: ['PowerPoint', 'Figma', 'Keynote'],
      deliverables: ['16:9 Widescreen PPTX', 'Speaker Notes PDF', 'Editable Vector Assets'],
      scope: '24-Hour Turnaround • 24 Slides',
      tags: ['Pitch Deck', 'Infographics', 'Business Case']
    },
    {
      id: 'port-4',
      title: 'Market Research Excel Financial Model & Dashboard',
      category: 'data',
      categoryLabel: 'Excel & Data',
      image: img4,
      summary: 'Automated statistical summary model with interactive KPI cards and charts.',
      fullDescription: 'Restructured raw survey dataset of 1,200 student responses. Built dynamic pivot tables, automated cross-tabulation formulas, and an executive KPI summary chart.',
      tools: ['Microsoft Excel', 'Google Sheets'],
      deliverables: ['Dynamic .xlsx Workbook', 'PDF Visual Summary Report'],
      scope: '1-Day Turnaround • 1,200 Data Rows',
      tags: ['Excel Model', 'Data Cleansing', 'KPI Charts']
    },
    {
      id: 'port-5',
      title: 'Mechanical Assembly CAD Schematics & Bill of Materials',
      category: 'technical',
      categoryLabel: 'Technical / Engineering',
      image: img5,
      summary: 'Precision 2D orthographic projections, tolerances, and title block layout.',
      fullDescription: 'Generated ISO-compliant technical drafting sheets for an engineering course project. Clean line types, centerlines, section detail callouts, and structured Bill of Materials table.',
      tools: ['AutoCAD', 'SolidWorks', 'Illustrator'],
      deliverables: ['Vector DWG & DXF', 'Multi-Page A3 Drawing Set PDF'],
      scope: '2-Day Turnaround • 6 A3 Sheets',
      tags: ['Technical Drafting', 'CAD Drawings', 'Engineering']
    },
    {
      id: 'port-6',
      title: 'Academic Research Conference Poster (A0 Format)',
      category: 'creative',
      categoryLabel: 'Creative Graphic Design',
      image: img6,
      summary: 'Modern visual hierarchy conference poster for Psychology Department symposium.',
      fullDescription: 'Structured empirical methodology, statistical results, hypothesis flowcharts, and discussion notes into an attention-grabbing, clean A0 research poster that stood out in the exhibition hall.',
      tools: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
      deliverables: ['Print-Ready PDF with 3mm Bleed', 'Digital Sharing 4K JPG'],
      scope: '24-Hour Turnaround • A0 Format',
      tags: ['Conference Poster', 'A0 Print', 'Infographic']
    }
  ];
};

export const getPricingTiers = (lang: Language = 'en'): PricingCategory[] => {
  if (lang === 'bg') {
    return [
      {
        id: 'quick-task',
        title: 'Бърза задача / Спешна корекция',
        subtitle: 'Бързо изпълнение за спешни случаи',
        idealFor: 'Корекции на форматиране, изчистване на отделна диаграма, полиране на кратка презентация или спешни PDF поправки.',
        estimatedTurnaround: '6 до 24 часа',
        examples: [
          'Полета и автоматично съдържание на документ (до 30 страници)',
          'Изчистване на 1–2 архитектурни диаграми или дебелини на линиите',
          'Визуално полиране на PowerPoint слайдове (до 12 слайда)',
          'Корекция на Excel формули и почистване на графики'
        ],
        features: [
          'Приоритетно бързо изпълнение',
          'Директно изпращане по WhatsApp и Имейл',
          'Включен един кръг незабавни корекции',
          'Готови за предаване PDF и изходни работни файлове'
        ]
      },
      {
        id: 'project-support',
        title: 'Пълна проектна подкрепа',
        subtitle: 'Цялостна помощ за основни семестриални задачи',
        idealFor: 'Междинни проекти, семестриални презентации, цялостно форматиране на тезиси и многолистови чертежи.',
        estimatedTurnaround: '2 до 5 дни',
        isPopular: true,
        examples: [
          'Цялостно оформление на A1/A0 архитектурно презентационно табло',
          'Пълно форматиране и цитирания на бакалавърска / магистърска теза',
          'Презентация с над 25 слайда с персонализирани графики',
          'Пълен комплект 2D CAD чертежи (планове, разрези, фасади)'
        ],
        features: [
          'Поетапни междинни прегледи по време на работата',
          'Пълна хармонизация на типография, дебелини на линии и мрежи',
          'Включени два кръга подробни корекции',
          'Всички редактируеми изходни файлове (InDesign, PSD, DWG, PPTX, DOCX)'
        ]
      },
      {
        id: 'complex-studio',
        title: 'Студио & Дипломен пакет',
        subtitle: 'Задълбочена, многофазна академична и дизайнерска подкрепа',
        idealFor: 'Дипломни проекти, финални архитектурни журита, сложно 3D моделиране, файлове за лазерно рязане на макети.',
        estimatedTurnaround: 'Индивидуален график',
        examples: [
          'Визуално оформяне на дипломен проект / архитектурно студио',
          'Подготовка на 3D Rhino/Revit модел и постпродукция на рендери',
          'Многоглавен докторантски или мултидисциплинарен научен труд',
          'Подготовка на макет за лазерно рязане и схема за сглобяване'
        ],
        features: [
          'Директен приоритетен канал за връзка в реално време',
          'Интеграция между различни специализирани софтуери',
          'Приоритетна доставка при критични срокове за жури',
          'Пълна подкрепа за оформяне на цялостно портфолио'
        ]
      }
    ];
  } else if (lang === 'tr') {
    return [
      {
        id: 'quick-task',
        title: 'Hızlı Görev / Acil Düzeltme',
        subtitle: 'Küçük krizler için hızlı teslimat',
        idealFor: 'Formatlama düzeltmeleri, tek bir diyagram temizliği, hızlı sunum cilalama veya acil PDF düzenlemeleri.',
        estimatedTurnaround: '6 ila 24 Saat',
        examples: [
          'Sayfa kenar boşluğu ve içindekiler tablosu formatlama (30 sayfaya kadar)',
          '1–2 Mimari diyagram temizliği veya çizgi kalınlığı düzeltmesi',
          'PowerPoint görsel düzenleme (12 slayta kadar)',
          'Excel formül hata giderme ve grafik temizliği'
        ],
        features: [
          'Hızlı teslimat önceliği',
          'WhatsApp ve E-posta üzerinden doğrudan dosya iletimi',
          'Bir tur anında revizyon hakkı',
          'Teslime hazır PDF ve kaynak çalışma dosyaları'
        ]
      },
      {
        id: 'project-support',
        title: 'Kapsamlı Proje Desteği',
        subtitle: 'Ana dönem ödevleri için eksiksiz yardım',
        idealFor: 'Ara sınav projeleri, dönem sunumları, kapsamlı tez formatlaması ve çok paftalı teknik çizimler.',
        estimatedTurnaround: '2 ila 5 Gün',
        isPopular: true,
        examples: [
          'Eksiksiz A1/A0 mimari sunum paftası düzeni',
          'Lisans / Yüksek Lisans tezi formatlama ve kaynakça düzeni',
          'Özel grafiklere sahip 25+ slaytlık vaka/pitch deck sunumu',
          'Detaylı 2D CAD çizim seti (kat planları, kesitler, görünüşler)'
        ],
        features: [
          'Aşama aşama ara önizleme ve kontrol',
          'Tipografi, çizgi kalınlığı ve pafta ızgarası harmonisi',
          'İki tur detaylı revizyon hakkı dahil',
          'Tüm düzenlenebilir kaynak dosyalar (InDesign, PSD, DWG, PPTX, DOCX)'
        ]
      },
      {
        id: 'complex-studio',
        title: 'Stüdyo & Diploma Paketi',
        subtitle: 'Kapsamlı, çok aşamalı akademik ve tasarım desteği',
        idealFor: 'Bitirme/Diploma projeleri, final mimarlık jürileri, karmaşık 3D modelleme ve lazer kesim maket paftaları.',
        estimatedTurnaround: 'Özel Zaman Çizelgesi',
        examples: [
          'Mimarlık diploma / stüdyo projesi görsel paketleme',
          '3D Rhino/Revit model hazırlığı ve render post-prodüksiyonu',
          'Çok bölümlü doktora veya disiplinlerarası araştırma tezi düzeni',
          'Fiziksel lazer kesim maket paftası ve montaj şeması'
        ],
        features: [
          'Anlık durum kontrolü için özel iletişim kanalı',
          'Yazılımlar arası tam entegrasyon ve uyumluluk',
          'Kritik jüri teslimlerinde öncelikli teslimat',
          'Eksiksiz portfolyo paketleme ve düzen desteği'
        ]
      }
    ];
  } else if (lang === 'el') {
    return [
      {
        id: 'quick-task',
        title: 'Γρήγορη Εργασία / Άμεση Διόρθωση',
        subtitle: 'Ταχεία παράδοση για επείγουσες ανάγκες',
        idealFor: 'Διορθώσεις μορφοποίησης, καθαρισμός μεμονωμένου διαγράμματος, επιμέλεια σύντομης παρουσίασης ή επείγουσες διορθώσεις PDF.',
        estimatedTurnaround: '6 έως 24 Ώρες',
        examples: [
          'Περιθώρια και πίνακας περιεχομένων εγγράφου (έως 30 σελίδες)',
          'Καθαρισμός 1–2 αρχιτεκτονικών διαγραμμάτων ή πάχους γραμμών',
          'Οπτική επιμέλεια διαφανειών PowerPoint (έως 12 διαφάνειες)',
          'Διόρθωση τύπων και καθαρισμός γραφημάτων στο Excel'
        ],
        features: [
          'Προτεραιότητα ταχείας παράδοσης',
          'Άμεση αποστολή αρχείων μέσω WhatsApp και Email',
          'Περιλαμβάνεται ένας γύρος άμεσων προσαρμογών',
          'Αρχεία PDF έτοιμα για παράδοση και πηγαία αρχεία'
        ]
      },
      {
        id: 'project-support',
        title: 'Πλήρης Υποστήριξη Έργου',
        subtitle: 'Ολοκληρωμένη βοήθεια για κύριες εξαμηνιαίες εργασίες',
        idealFor: 'Ενδιάμεσες εργασίες, εξαμηνιαίες παρουσιάσεις, ολοκληρωμένη μορφοποίηση πτυχιακών και πολυφυλλικά σχέδια.',
        estimatedTurnaround: '2 έως 5 Ημέρες',
        isPopular: true,
        examples: [
          'Πλήρης σύνθεση αρχιτεκτονικής πινακίδας παρουσίασης A1/A0',
          'Μορφοποίηση και βιβλιογραφικές αναφορές πτυχιακής/διπλωματικής',
          'Παρουσίαση 25+ διαφανειών με προσαρμοσμένα γραφικά',
          'Πλήρες σετ σχεδίων CAD 2D (κατόψεις, τομές, όψεις)'
        ],
        features: [
          'Ενδιάμεσες προεπισκοπήσεις κατά τη διάρκεια της εργασίας',
          'Πλήρης εναρμόνιση τυπογραφίας, πάχους γραμμών και πλέγματος',
          'Περιλαμβάνονται δύο γύροι αναλυτικών διορθώσεων',
          'Όλα τα επεξεργάσιμα αρχεία (InDesign, PSD, DWG, PPTX, DOCX)'
        ]
      },
      {
        id: 'complex-studio',
        title: 'Στούντιο & Διπλωματικό Πακέτο',
        subtitle: 'Σε βάθος, πολυφασική ακαδημαϊκή και σχεδιαστική υποστήριξη',
        idealFor: 'Διπλωματικές εργασίες, τελικές κριτικές επιτροπές αρχιτεκτονικής, σύνθετη μοντελοποίηση 3D και αρχεία κοπής laser.',
        estimatedTurnaround: 'Εξατομικευμένο Χρονοδιάγραμμα',
        examples: [
          'Οπτική επιμέλεια διπλωματικής αρχιτεκτονικού στούντιο',
          'Προετοιμασία 3D μοντέλου Rhino/Revit και post-production renders',
          'Διατριβή πολλών κεφαλαίων ή διεπιστημονική ερευνητική εργασία',
          'Προετοιμασία μακέτας laser κοπής και οδηγός συναρμολόγησης'
        ],
        features: [
          'Αποκλειστικό κανάλι άμεσης επικοινωνίας σε πραγματικό χρόνο',
          'Συγχρονισμός μεταξύ πολλαπλών λογισμικών',
          'Προτεραιότητα παράδοσης για ασφυκτικές προθεσμίες',
          'Πλήρης υποστήριξη δημιουργίας portfolio'
        ]
      }
    ];
  }

  // English fallback
  return [
    {
      id: 'quick-task',
      title: 'Quick Task / Fix',
      subtitle: 'Fast turnaround for small emergencies',
      idealFor: 'Formatting fixes, single diagram cleanup, quick presentation polish, or urgent PDF fixes.',
      estimatedTurnaround: '6 to 24 Hours',
      examples: [
        'Document margin & TOC formatting (up to 30 pages)',
        '1–2 Architecture diagram cleanups or lineweight fix',
        'PowerPoint visual polish (up to 12 slides)',
        'Excel formula debugging & chart cleanup'
      ],
      features: [
        'Rapid turnaround priority',
        'Direct file delivery via WhatsApp & Email',
        'One round of immediate adjustments',
        'Export-ready PDF & source files'
      ]
    },
    {
      id: 'project-support',
      title: 'Full Project Support',
      subtitle: 'Comprehensive assistance for major assignments',
      idealFor: 'Mid-term projects, semester presentations, comprehensive thesis formatting, and multi-sheet drawings.',
      estimatedTurnaround: '2 to 5 Days',
      isPopular: true,
      examples: [
        'Full Architecture A1/A0 presentation board layout',
        'Complete Bachelor / Master thesis formatting & citations',
        'Comprehensive 25+ slide pitch deck with custom graphics',
        'Detailed 2D CAD drafting set (floor plans, sections, elevations)'
      ],
      features: [
        'Step-by-step milestone previews',
        'Full typography, lineweight & grid harmonization',
        'Includes two rounds of detailed revisions',
        'All editable source files (InDesign, PSD, DWG, PPTX, DOCX)'
      ]
    },
    {
      id: 'complex-studio',
      title: 'Complex & Studio Package',
      subtitle: 'In-depth, multi-phase academic & design support',
      idealFor: 'Graduation projects, final architecture juries, complex modeling, physical model cut-files, or custom multi-week projects.',
      estimatedTurnaround: 'Tailored Timeline',
      examples: [
        'Final Architecture Diploma / Studio project visual packaging',
        '3D Rhino/Revit model preparation & render post-production',
        'Multi-chapter doctoral or interdisciplinary research paper styling',
        'Physical laser-cut model layout & assembly guide'
      ],
      features: [
        'Dedicated support channel for real-time check-ins',
        'Comprehensive cross-software integration',
        'Priority delivery for tight jury deadlines',
        'Full portfolio packaging support'
      ]
    }
  ];
};

export const getTestimonials = (lang: Language = 'en'): TestimonialItem[] => {
  if (lang === 'bg') {
    return [
      {
        id: 'test-1',
        name: 'Студент по архитектура (НБУ)',
        department: 'Архитектура и пространствен дизайн',
        university: 'Нов български университет, София',
        feedback: '„Оформлението на A1 презентационното табло за моето студийно жури в 3-ти курс беше невероятно. Балансът на дебелината на линиите и яснотата на диаграмите ми помогнаха да защитя проекта си с отличие.“',
        projectType: 'A1 Презентационно табло и разрез',
        isPlaceholder: true
      },
      {
        id: 'test-2',
        name: 'Студент по икономика',
        department: 'Икономика и финанси',
        university: 'УНСС София',
        feedback: '„Имах 90 страници магистърска теза с разместени заглавия и счупени таблици. Всичко беше подредено, форматирано точно по университетския стандарт и предадено преди крайния срок.“',
        projectType: 'Форматиране на магистърска теза',
        isPlaceholder: true
      },
      {
        id: 'test-3',
        name: 'Студент по компютърни науки',
        department: 'Информатика и софтуерно инженерство',
        university: 'Софийски университет Св. Климент Охридски',
        feedback: '„Преобразуваха моята проектна документация и сложни системни архитектурни схеми в стилна, тъмна презентация, която впечатли комисията.“',
        projectType: 'Презентация и архитектурна диаграма',
        isPlaceholder: true
      },
      {
        id: 'test-4',
        name: 'Студент по строително инженерство',
        department: 'Строително инженерство',
        university: 'УАСГ София',
        feedback: '„Бързо и изключително точно изчистване на CAD чертежи. Оразмеряването и сеченията съответстваха напълно на техническите стандарти.“',
        projectType: '2D CAD Чертожни листове',
        isPlaceholder: true
      }
    ];
  } else if (lang === 'tr') {
    return [
      {
        id: 'test-1',
        name: 'Mimarlık Öğrencisi (NBU)',
        department: 'Mimarlık ve Mekansal Tasarım',
        university: 'Yeni Bulgar Üniversitesi, Sofya',
        feedback: '“3. sınıf stüdyo jürim için hazırlanan A1 pafta düzeni harikaydı. Çizgi kalınlığı dengesi ve diyagramların netliği, konseptimi hocalara çok rahat anlatmamı sağladı.”',
        projectType: 'A1 Sunum Paftası ve Kesit Renderı',
        isPlaceholder: true
      },
      {
        id: 'test-2',
        name: 'İşletme & Ekonomi Öğrencisi',
        department: 'Ekonomi ve Finans',
        university: 'UNWE Sofya',
        feedback: '“Başlık numaraları ve tabloları kaymış 90 sayfalık tezim vardı. Üniversite kılavuzuna göre baştan sona temizlenip tam vaktinde teslim edildi.”',
        projectType: 'Yüksek Lisans Tezi Formatlama',
        isPlaceholder: true
      },
      {
        id: 'test-3',
        name: 'Bilgisayar Mühendisliği Öğrencisi',
        department: 'Bilişim ve Yazılım Mühendisliği',
        university: 'Sofya Üniversitesi Kliment Ohridski',
        feedback: '“Karmaşık yazılım mimarisi diyagramlarımı ve proje dokümantasyonumu ders jürisini etkileyen şık bir dark-mode sunuma dönüştürdüler.”',
        projectType: 'Slayt Tasarımı ve Mimari Diyagram',
        isPlaceholder: true
      },
      {
        id: 'test-4',
        name: 'İnşaat Mühendisliği Öğrencisi',
        department: 'İnşaat Mühendisliği',
        university: 'UACEG Sofya',
        feedback: '“Hızlı ve milimetrik CAD çizim temizliği. Ölçülendirmeler ve kesit detayları teknik standartlara harfiyen uydu.”',
        projectType: '2D CAD Teknik Paftaları',
        isPlaceholder: true
      }
    ];
  } else if (lang === 'el') {
    return [
      {
        id: 'test-1',
        name: 'Φοιτητής Αρχιτεκτονικής (NBU)',
        department: 'Αρχιτεκτονική & Σχεδιασμός Χώρου',
        university: 'Νέο Βουλγαρικό Πανεπιστήμιο, Σόφια',
        feedback: '«Η σύνθεση της πινακίδας A1 για την κριτική επιτροπή του 3ου έτους ήταν εξαιρετική. Η ισορροπία των παχών γραμμής και η καθαρότητα των διαγραμμάτων με βοήθησαν να παρουσιάσω άψογα.»',
        projectType: 'Πινακίδα A1 & Render Τομής',
        isPlaceholder: true
      },
      {
        id: 'test-2',
        name: 'Φοιτητής Οικονομικών',
        department: 'Οικονομικά & Χρηματοοικονομικά',
        university: 'UNWE Σόφια',
        feedback: '«Είχα μια διπλωματική 90 σελίδων με ασύνδετες επικεφαλίδες και πίνακες. Όλα διορθώθηκαν σύμφωνα με τα πρότυπα του πανεπιστημίου και παραδόθηκαν στην ώρα τους.»',
        projectType: 'Μορφοποίηση Μεταπτυχιακής Διατριβής',
        isPlaceholder: true
      },
      {
        id: 'test-3',
        name: 'Φοιτητής Πληροφορικής',
        department: 'Πληροφορική & Μηχανική Λογισμικού',
        university: 'Πανεπιστήμιο Σόφιας (Kliment Ohridski)',
        feedback: '«Μετέτρεψαν την ακατάστατη τεκμηρίωση και τα διαγράμματα αρχιτεκτονικής συστήματος σε μια εντυπωσιακή παρουσίαση dark-mode που εντυπωσίασε τους καθηγητές.»',
        projectType: 'Παρουσίαση & Διάγραμμα Αρχιτεκτονικής',
        isPlaceholder: true
      },
      {
        id: 'test-4',
        name: 'Φοιτητής Πολιτικών Μηχανικών',
        department: 'Πολιτικών Μηχανικών',
        university: 'UACEG Σόφια',
        feedback: '«Γρήγορος και απόλυτα ακριβής καθαρισμός σχεδίων CAD. Οι διαστασιολογήσεις και οι τομές ταίριαξαν απόλυτα με τα τεχνικά πρότυπα.»',
        projectType: 'Τεχνικά Φύλλα CAD 2D',
        isPlaceholder: true
      }
    ];
  }

  // English fallback
  return [
    {
      id: 'test-1',
      name: 'Architecture Student (NBU)',
      department: 'Architecture & Spatial Design',
      university: 'New Bulgarian University, Sofia',
      feedback: '“The presentation board layout for my 3rd-year studio jury was incredible. The lineweight balance and diagram clarity helped me present my concept smoothly to the professors.”',
      projectType: 'A1 Presentation Board & Section Render',
      isPlaceholder: true
    },
    {
      id: 'test-2',
      name: 'Business Economics Student',
      department: 'Economics & Finance',
      university: 'UNWE Sofia',
      feedback: '“Had a 90-page thesis with broken heading numbers and misaligned tables. Everything was cleaned up, formatted according to university guidelines, and delivered before my deadline.”',
      projectType: 'Master Thesis Formatting',
      isPlaceholder: true
    },
    {
      id: 'test-3',
      name: 'Computer Science Student',
      department: 'Informatics & Software Engineering',
      university: 'Sofia University St. Kliment Ohridski',
      feedback: '“Turned my messy project documentation and system architecture slides into a sleek, dark-mode presentation that impressed our course evaluation panel.”',
      projectType: 'Slide Deck & Architecture Diagram',
      isPlaceholder: true
    },
    {
      id: 'test-4',
      name: 'Civil Engineering Student',
      department: 'Civil Engineering',
      university: 'UACEG Sofia',
      feedback: '“Fast and accurate CAD drawing cleanup. The dimensions and section callouts matched all technical standards perfectly.”',
      projectType: '2D CAD Technical Sheets',
      isPlaceholder: true
    }
  ];
};

export const getFAQs = (lang: Language = 'en'): FAQItem[] => {
  if (lang === 'bg') {
    return [
      {
        id: 'faq-1',
        category: 'general',
        question: 'С какви видове проекти можете да ми помогнете?',
        answer: 'Помагаме с широк спектър от университетски задачи: 2D/3D архитектурни чертежи, презентационни табла, файлове за лазерно рязане на макети, форматиране на тезиси в Word/PDF, модели и формули в Excel, презентации в PowerPoint, академична редакция, инженерни CAD чертежи и постери.'
      },
      {
        id: 'faq-2',
        category: 'general',
        question: 'Мога ли да заявя помощ за проект, който не е посочен на сайта?',
        answer: 'Да! Изберете "Индивидуално запитване" във формата или ни пишете директно в WhatsApp. Много университетски задачи са уникални или мултидисциплинарни и с удоволствие ще разгледаме вашите изисквания.'
      },
      {
        id: 'faq-3',
        category: 'pricing',
        question: 'Как се определя цената?',
        answer: 'Всеки студентски проект има различна сложност, обем и срок. Вместо високи корпоративни фиксирани такси, ние преглеждаме вашите файлове и изготвяме справедлива оферта, съобразена със студентския бюджет.'
      },
      {
        id: 'faq-4',
        category: 'process',
        question: 'Колко бързо отговаряте на запитвания?',
        answer: 'По време на активния семестър обикновено преглеждаме заявките и изпращаме оферта в рамките на 1 до 3 часа. За спешни крайни срокове ни пишете директно в WhatsApp.'
      },
      {
        id: 'faq-5',
        category: 'files',
        question: 'Как мога да изпратя файлове, скици или задание?',
        answer: 'Можете да ги прикачите директно във формата на сайта или да изпратите линк (Google Drive, WeTransfer, Dropbox) директно в WhatsApp или по имейл.'
      },
      {
        id: 'faq-6',
        category: 'architecture',
        question: 'Подкрепяте ли специално студенти по архитектура и дизайн?',
        answer: 'Абсолютно! Архитектурата е една от основните ни специалности. Помагаме с йерархия на дебелината на линиите в AutoCAD, 3D моделиране в Rhino/Revit, постобработка във Photoshop, композиция на A0/A1 табла и файлове за лазерно рязане.'
      },
      {
        id: 'faq-7',
        category: 'general',
        question: 'Можете ли да подобрите дизайна на моите презентационни слайдове?',
        answer: 'Да. Превръщаме претрупани с текст слайдове в изчистени, модерни визуални презентации с правилна йерархия, векторни икони и ясни диаграми.'
      },
      {
        id: 'faq-8',
        category: 'files',
        question: 'Можете ли да форматирате моя Word или PDF документ според университетските изисквания?',
        answer: 'Да. Настройваме автоматично съдържание, списъци с фигури, стилове на заглавия, полета на страниците и стилове на цитиране (APA, Harvard, Chicago, IEEE).'
      },
      {
        id: 'faq-9',
        category: 'process',
        question: 'Как да подам заявка?',
        answer: 'Просто отидете на формата "Имате краен срок?", попълнете специалността и детайлите си и натиснете "Изпрати". Ще се свържем с вас веднага.'
      },
      {
        id: 'faq-10',
        category: 'process',
        question: 'Мога ли да заявя спешна помощ в рамките на същия ден?',
        answer: 'Да, приемаме спешни заявки според текущия капацитет. Моля, отбележете опцията "Спешен (< 24 часа)" във формата, за да обработим заявката с най-висок приоритет.'
      }
    ];
  } else if (lang === 'tr') {
    return [
      {
        id: 'faq-1',
        category: 'general',
        question: 'Hangi tür projelerde destek sağlayabiliyorsunuz?',
        answer: 'Geniş bir yelpazede üniversite ödevlerine destek veriyoruz: 2D/3D mimari çizimler, jüri sunum paftaları, lazer kesim maket dosyaları, Word/PDF tez formatlama, Excel veri modelleri, PowerPoint sunum tasarımı, akademik redaksiyon ve teknik CAD çizimleri.'
      },
      {
        id: 'faq-2',
        category: 'general',
        question: 'Sitede listelenmeyen özel bir proje için yardım isteyebilir miyim?',
        answer: 'Kesinlikle evet! Formda "Özel Talep" seçeneğini seçin veya doğrudan WhatsApp üzerinden yazın. Birçok ödev disiplinlerarası veya derse özeldir, yönergelerinizi inceleyip hemen dönüş yaparız.'
      },
      {
        id: 'faq-3',
        category: 'pricing',
        question: 'Fiyatlandırma nasıl belirleniyor?',
        answer: 'Her öğrenci projesinin kapsamı, program gereksinimleri ve teslim tarihi farklıdır. Sabit fahiş fiyatlar yerine, dosyalarınızı inceleyip öğrenci bütçenize uygun, şeffaf ve adil bir fiyat sunuyoruz.'
      },
      {
        id: 'faq-4',
        category: 'process',
        question: 'Taleplere ne kadar sürede geri dönüş yapıyorsunuz?',
        answer: 'Aktif dönem haftalarında talepleri inceleyip genellikle 1 ila 3 saat içinde teklif iletiyoruz. Çok acil teslimler için doğrudan WhatsApp hattımıza yazabilirsiniz.'
      },
      {
        id: 'faq-5',
        category: 'files',
        question: 'Taslaklarımı, çizimlerimi veya ödev metnini nasıl gönderebilirim?',
        answer: 'Sitemizdeki form üzerinden doğrudan yükleyebilir ya da Google Drive, Dropbox veya WeTransfer linkini doğrudan WhatsApp/E-posta ile bize iletebilirsiniz.'
      },
      {
        id: 'faq-6',
        category: 'architecture',
        question: 'Mimarlık ve tasarım öğrencilerine özel destek veriyor musunuz?',
        answer: 'Evet, mimarlık bizim en güçlü ana uzmanlık alanımızdır. AutoCAD çizgi kalınlığı standartları, Rhino/Revit modelleme, Photoshop render post-prodüksiyonu, A0/A1 pafta kurgusu ve lazer kesim maket paftaları hazırlıyoruz.'
      },
      {
        id: 'faq-7',
        category: 'general',
        question: 'Mevcut slaytlarımın tasarımını ve görsel kalitesini geliştirebilir misiniz?',
        answer: 'Evet. Yoğun metinli slaytları modern görsel hiyerarşi, özel ikonlar, renk paleti ve akıcı şemalarla jüriyi etkileyen profesyonel sunumlara dönüştürüyoruz.'
      },
      {
        id: 'faq-8',
        category: 'files',
        question: 'Word veya PDF tezimi üniversite yazım kurallarına uygun formatlayabilir misiniz?',
        answer: 'Evet. Otomatik içindekiler, şekil/tablo listeleri, kenar boşlukları, başlık stilleri ve kaynakça standartlarını (APA, Harvard, Chicago, IEEE) kusursuz şekilde yapılandırıyoruz.'
      },
      {
        id: 'faq-9',
        category: 'process',
        question: 'Nasıl talep oluşturabilirim?',
        answer: 'Sayfanın altındaki "Teslim Tarihin mi Yaklaşıyor?" formuna gidin, bölümünüzü ve notlarınızı girip Gönder butonuna tıklayın. WhatsApp üzerinden anında iletişime geçelim.'
      },
      {
        id: 'faq-10',
        category: 'process',
        question: 'Aynı gün içinde acil destek talep edebilir miyim?',
        answer: 'Evet, uygunluk durumumuza göre aynı gün teslimli acil projeleri kabul ediyoruz. Lütfen formda "Acil (< 24 Saat)" seçeneğini işaretleyin.'
      }
    ];
  } else if (lang === 'el') {
    return [
      {
        id: 'faq-1',
        category: 'general',
        question: 'Σε τι είδους εργασίες μπορείτε να βοηθήσετε;',
        answer: 'Υποστηρίζουμε ένα ευρύ φάσμα πανεπιστημιακών εργασιών: 2D/3D αρχιτεκτονικά σχέδια, πινακίδες παρουσίασης, αρχεία κοπής laser για μακέτες, μορφοποίηση πτυχιακών σε Word/PDF, υπολογιστικά μοντέλα Excel, παρουσιάσεις PowerPoint, ακαδημαϊκή επιμέλεια και σχέδια CAD.'
      },
      {
        id: 'faq-2',
        category: 'general',
        question: 'Μπορώ να ζητήσω βοήθεια για κάτι που δεν αναφέρεται στην ιστοσελίδα;',
        answer: 'Ναι! Επιλέξτε "Εξατομικευμένο Αίτημα" στη φόρμα ή στείλτε μας μήνυμα απευθείας στο WhatsApp. Πολλές εργασίες είναι μοναδικές και θα χαρούμε να εξετάσουμε τις οδηγίες σας.'
      },
      {
        id: 'faq-3',
        category: 'pricing',
        question: 'Πώς καθορίζονται οι τιμές;',
        answer: 'Κάθε φοιτητική εργασία έχει διαφορετική πολυπλοκότητα και προθεσμία. Αντί για σταθερές εταιρικές χρεώσεις, αξιολογούμε τα αρχεία σας και παρέχουμε μια δίκαιη, φοιτητική προσφορά χωρίς κρυφά κόστη.'
      },
      {
        id: 'faq-4',
        category: 'process',
        question: 'Πόσο γρήγορα απαντάτε στα αιτήματα;',
        answer: 'Κατά τη διάρκεια του εξαμήνου, αξιολογούμε τα αιτήματα και απαντάμε εντός 1 έως 3 ωρών. Για εξαιρετικά επείγουσες προθεσμίες, επικοινωνήστε απευθείας στο WhatsApp.'
      },
      {
        id: 'faq-5',
        category: 'files',
        question: 'Πώς μπορώ να στείλω τα αρχεία ή τις εκφωνήσεις των εργασιών;',
        answer: 'Μπορείτε να τα ανεβάσετε απευθείας στη φόρμα της ιστοσελίδας ή να στείλετε συνδέσμους (Google Drive, WeTransfer, Dropbox) απευθείας στο WhatsApp ή μέσω Email.'
      },
      {
        id: 'faq-6',
        category: 'architecture',
        question: 'Υποστηρίζετε ειδικά φοιτητές αρχιτεκτονικής και σχεδίου;',
        answer: 'Απόλυτα! Η αρχιτεκτονική είναι η κύρια ειδικότητά μας. Βοηθάμε με πάχη γραμμών στο AutoCAD, 3D μοντελοποίηση σε Rhino/Revit, επεξεργασία render στο Photoshop, πινακίδες A0/A1 και κοπή laser.'
      },
      {
        id: 'faq-7',
        category: 'general',
        question: 'Μπορείτε να βελτιώσετε τις διαφάνειες των παρουσιάσεών μου;',
        answer: 'Ναι. Μετατρέπουμε διαφάνειες με πολύ κείμενο σε καθαρές, μοντέρνες οπτικές παρουσιάσεις με σωστή ιεραρχία, προσαρμοσμένα εικονίδια και κατανοητά διαγράμματα.'
      },
      {
        id: 'faq-8',
        category: 'files',
        question: 'Μπορείτε να μορφοποιήσετε το έγγραφο Word ή PDF σύμφωνα με τους πανεπιστημιακούς οδηγούς;',
        answer: 'Ναι. Ρυθμίζουμε αυτόματο πίνακα περιεχομένων, λίστες σχημάτων, περιθώρια και στυλ βιβλιογραφίας (APA, Harvard, Chicago, IEEE) σε ένα άψογο τελικό έγγραφο.'
      },
      {
        id: 'faq-9',
        category: 'process',
        question: 'Πώς υποβάλλω ένα αίτημα;',
        answer: 'Απλώς μεταβείτε στην ενότητα "Έχετε Προθεσμία;", συμπληρώστε τη σχολή και τις λεπτομέρειες σας και πατήστε Αποστολή. Θα επικοινωνήσουμε άμεσα μαζί σας.'
      },
      {
        id: 'faq-10',
        category: 'process',
        question: 'Μπορώ να ζητήσω επείγουσα υποστήριξη αυθημερόν;',
        answer: 'Ναι, δεχόμαστε επείγοντα αιτήματα ανάλογα με τη διαθεσιμότητα. Παρακαλούμε επιλέξτε την επιλογή "Επείγον (< 24 Ώρες)" στη φόρμα.'
      }
    ];
  }

  // English fallback
  return [
    {
      id: 'faq-1',
      category: 'general',
      question: 'What kind of projects can you help with?',
      answer: 'We assist with a wide spectrum of university work: 2D/3D architecture drawings, presentation boards, physical model laser-cut files, Word/PDF thesis formatting, Excel spreadsheet models, PowerPoint pitch decks, research editing, engineering CAD drafting, and graphic posters.'
    },
    {
      id: 'faq-2',
      category: 'general',
      question: 'Can I request help with something not listed on the website?',
      answer: 'Yes! Select "Custom Request" in our contact form or message us directly. Many university assignments are unique or interdisciplinary, and we are happy to review your specific guidelines.'
    },
    {
      id: 'faq-3',
      category: 'pricing',
      question: 'How does pricing work?',
      answer: 'Every student project has different complexity, scope, and deadlines. Rather than charging high flat rates, we assess your files and provide a fair, personalized quote tailored to student budgets with zero hidden costs.'
    },
    {
      id: 'faq-4',
      category: 'process',
      question: 'How quickly can you respond to a request?',
      answer: 'During active semester weeks, we typically review requests and respond with a quote within 1 to 3 hours. For urgent same-day deadlines, reach out via WhatsApp for fastest reply.'
    },
    {
      id: 'faq-5',
      category: 'files',
      question: 'How do I send my files, sketches, or briefs?',
      answer: 'You can upload them directly in the Request Form on this site, or share links via Google Drive, Dropbox, WeTransfer, or directly over WhatsApp/Email.'
    },
    {
      id: 'faq-6',
      category: 'architecture',
      question: 'Do you specifically support architecture and design students?',
      answer: 'Absolutely! Architecture is one of our core specialties. We help with lineweight hierarchy, AutoCAD cleanups, Rhino/Revit modeling assistance, Lumion/V-Ray post-production in Photoshop, A0/A1 board layouts, and laser-cutting file prep.'
    },
    {
      id: 'faq-7',
      category: 'general',
      question: 'Can you help improve my presentation slides?',
      answer: 'Yes. We transform dense, text-heavy slides into clean, modern visual presentations with proper hierarchy, custom icons, consistent color palettes, and structured diagrams.'
    },
    {
      id: 'faq-8',
      category: 'files',
      question: 'Can you format my Word or PDF document to match university guidelines?',
      answer: 'Yes. We configure automated Table of Contents, figure numbering, paragraph styles, margins, headers/footers, and citation styles (APA, Harvard, Chicago, IEEE) into an immaculate, print-ready document.'
    },
    {
      id: 'faq-9',
      category: 'process',
      question: 'How do I submit a request?',
      answer: 'Simply scroll down to the "Tell Us What You Need" section, fill in your department and details, and click Send. We will get in touch with a timeline and quote right away.'
    },
    {
      id: 'faq-10',
      category: 'process',
      question: 'Can I request urgent same-day support?',
      answer: 'Yes, we accept urgent requests depending on current capacity. Please mark the "Urgent (< 24h)" option in the form so we prioritize your review immediately.'
    }
  ];
};
