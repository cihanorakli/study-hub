import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, getTargetUniversities, getDepartments, getServices } from '../../config/siteData';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import type { RequestFormData } from '../../types';
import {
  UploadCloud,
  CheckCircle2,
  Clock,
  Sparkles,
  Send,
  FileText,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  RotateCcw,
  ExternalLink,
  Mail
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RequestFormProps {
  currentLang: Language;
  prefilledService?: string;
}

export const RequestForm: React.FC<RequestFormProps> = ({
  currentLang,
  prefilledService,
}) => {
  const t = TRANSLATIONS[currentLang];
  const universities = getTargetUniversities(currentLang);
  const departments = getDepartments(currentLang);
  const services = getServices(currentLang);

  const [formData, setFormData] = useState<RequestFormData>({
    fullName: '',
    email: '',
    university: universities[0] || 'New Bulgarian University (NBU)',
    department: departments[0] || 'Architecture & Urbanism',
    serviceType: prefilledService || (services[0] ? services[0].title : 'Architecture & Spatial Design'),
    deadline: '',
    urgency: 'standard',
    description: '',
    preferredFormat: 'PDF & Source Files',
    budgetRange: 'Student Standard',
    contactPreference: 'whatsapp',
    contactHandle: '',
    fileName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update default university and department if language changes and they were at default
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceType: prefilledService }));
    }
  }, [prefilledService]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, fileName: e.dataTransfer.files[0].name });
    }
  };

  // Build structured message for direct transmission to WhatsApp
  const buildFormattedMessage = (data: RequestFormData) => {
    return `*🎓 ${SITE_CONFIG.brandName} — PROJECT SUPPORT REQUEST*
━━━━━━━━━━━━━━━━━━━━
*👤 Student:* ${data.fullName}
*📧 Email:* ${data.email}
*🏛️ University:* ${data.university}
*📚 Department:* ${data.department}
*🎯 Track:* ${data.serviceType}
*⏰ Target Deadline:* ${data.deadline || 'Flexible timeline'}
*⚡ Urgency:* ${data.urgency.toUpperCase()}
*📄 Preferred Format:* ${data.preferredFormat}
*💬 Project Details & Requirements:*
${data.description}
${data.fileName ? `*📁 Attached File:* ${data.fileName}` : ''}
${data.contactHandle ? `*📱 Contact Handle:* ${data.contactHandle}` : ''}
━━━━━━━━━━━━━━━━━━━━`;
  };

  const getWhatsAppTransmissionUrl = (data: RequestFormData) => {
    const text = encodeURIComponent(buildFormattedMessage(data));
    const baseUrl = SITE_CONFIG.contact.whatsappUrl || `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`;
    return `${baseUrl}?text=${text}`;
  };

  const getEmailTransmissionUrl = (data: RequestFormData) => {
    const subject = encodeURIComponent(`[STUDY HUB Request] ${data.serviceType} — ${data.fullName}`);
    const body = encodeURIComponent(buildFormattedMessage(data));
    return `mailto:${SITE_CONFIG.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage(currentLang === 'bg' ? 'Моля, въведете вашето име.' : currentLang === 'tr' ? 'Lütfen adınızı ve soyadınızı girin.' : currentLang === 'el' ? 'Παρακαλώ εισάγετε το ονοματεπώνυμό σας.' : 'Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage(currentLang === 'bg' ? 'Моля, въведете валиден имейл адрес.' : currentLang === 'tr' ? 'Lütfen geçerli bir e-posta adresi girin.' : currentLang === 'el' ? 'Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.' : 'Please enter a valid university or personal email address.');
      return;
    }
    if (!formData.description.trim()) {
      setErrorMessage(currentLang === 'bg' ? 'Моля, опишете накратко вашия проект.' : currentLang === 'tr' ? 'Lütfen projenizi kısaca açıklayın.' : currentLang === 'el' ? 'Παρακαλώ περιγράψτε συνοπτικά το έργο σας.' : 'Please provide a brief description of your project.');
      return;
    }

    setIsSubmitting(true);

    // If webhook/formspree endpoint is configured, POST to it
    if (SITE_CONFIG.contact.formspreeOrWebhookUrl) {
      try {
        await fetch(SITE_CONFIG.contact.formspreeOrWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.log('Webhook transmission error:', err);
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#10B981', '#3B82F6', '#60A5FA'],
        });
      } catch (err) {
        console.log('Confetti rendered');
      }

      // If student selected WhatsApp, automatically open WhatsApp with prefilled message
      if (formData.contactPreference === 'whatsapp') {
        const waUrl = getWhatsAppTransmissionUrl(formData);
        window.open(waUrl, '_blank');
      }
    }, 600);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      university: universities[0] || 'New Bulgarian University (NBU)',
      department: departments[0] || 'Architecture & Urbanism',
      serviceType: services[0] ? services[0].title : 'Architecture & Spatial Design',
      deadline: '',
      urgency: 'standard',
      description: '',
      preferredFormat: 'PDF & Source Files',
      budgetRange: 'Student Standard',
      contactPreference: 'whatsapp',
      contactHandle: '',
      fileName: '',
    });
  };

  const urgencyOptions = [
    {
      id: 'flexible',
      label: currentLang === 'bg' ? 'Стандарт (3–7 Дни)' : currentLang === 'tr' ? 'Standart (3–7 Gün)' : currentLang === 'el' ? 'Κανονικό (3–7 Ημέρες)' : 'Standard (3–7 Days)',
      tag: currentLang === 'bg' ? 'Нормален срок' : currentLang === 'tr' ? 'Normal Tempo' : currentLang === 'el' ? 'Κανονικός Ρυθμός' : 'Normal Pace'
    },
    {
      id: 'standard',
      label: currentLang === 'bg' ? 'Приоритет (1–3 Дни)' : currentLang === 'tr' ? 'Öncelikli (1–3 Gün)' : currentLang === 'el' ? 'Προτεραιότητα (1–3 Ημέρες)' : 'Priority (1–3 Days)',
      tag: currentLang === 'bg' ? 'Най-популярен' : currentLang === 'tr' ? 'En Çok Tercih Edilen' : currentLang === 'el' ? 'Πιο Δημοφιλές' : 'Most Popular'
    },
    {
      id: 'urgent',
      label: currentLang === 'bg' ? 'Спешно (< 24 Часа)' : currentLang === 'tr' ? 'Acil (< 24 Saat)' : currentLang === 'el' ? 'Επείγον (< 24 Ώρες)' : 'Urgent (< 24 Hours)',
      tag: currentLang === 'bg' ? 'Критичен срок' : currentLang === 'tr' ? 'Acil Durum' : currentLang === 'el' ? 'Έκτακτη Ανάγκη' : 'Emergency'
    },
  ];

  const intakeBadgeText = {
    bg: '08 / Директна заявка за проект',
    tr: '08 / Doğrudan Proje Talebi',
    el: '08 / Άμεση Υποβολή Έργου',
    en: '08 / Direct Project Intake'
  }[currentLang] || '08 / Direct Project Intake';

  const briefLabelText = {
    bg: 'Университетско задание / Чернови (по избор)',
    tr: 'Ders Yönergesi / Taslak Dosyalar (İsteğe Bağlı)',
    el: 'Οδηγίες Εργασίας / Πρόχειρα Αρχεία (Προαιρετικό)',
    en: 'Course Brief / Draft Files (Optional)'
  }[currentLang] || 'Course Brief / Draft Files (Optional)';

  const uploadClickText = {
    bg: 'Кликнете за качване или плъзнете файлове тук',
    tr: 'Dosya yüklemek için tıklayın veya sürükleyip bırakın',
    el: 'Κάντε κλικ για μεταφόρτωση ή σύρετε αρχεία εδώ',
    en: 'Click to upload or drag & drop files'
  }[currentLang] || 'Click to upload or drag & drop files';

  const channelLabelText = {
    bg: 'Предпочитан канал за връзка',
    tr: 'Tercih Edilen İletişim Kanalı',
    el: 'Προτιμώμενο Κανάλι Επικοινωνίας',
    en: 'Preferred Channel'
  }[currentLang] || 'Preferred Channel';

  const removeFileText = {
    bg: 'Премахни',
    tr: 'Kaldır',
    el: 'Αφαίρεση',
    en: 'Remove'
  }[currentLang] || 'Remove';

  const directNoteText = {
    bg: 'Директна връзка с WhatsApp & Email • Оферти до 3 часа',
    tr: 'WhatsApp & Email ile Doğrudan İletim • 3 Saatte Teklif',
    el: 'Άμεση αποστολή σε WhatsApp & Email • Προσφορές σε < 3 ώρες',
    en: 'Direct transmission to WhatsApp & Email • Quotes in < 3 hours'
  }[currentLang] || 'Direct transmission to WhatsApp & Email • Quotes in < 3 hours';

  const summaryTitleText = {
    bg: 'Обобщение на заявката',
    tr: 'Canlı Talep Özeti',
    el: 'Σύνοψη Αιτήματος',
    en: 'Live Request Summary'
  }[currentLang] || 'Live Request Summary';

  const summaryTrackText = {
    bg: 'Избрано направление',
    tr: 'Seçilen Alan',
    el: 'Επιλεγμένος Τομέας',
    en: 'Selected Track'
  }[currentLang] || 'Selected Track';

  const summaryUniText = {
    bg: 'Университет и специалност',
    tr: 'Üniversite & Bölüm',
    el: 'Πανεπιστήμιο & Τμήμα',
    en: 'University & Major'
  }[currentLang] || 'University & Major';

  const summaryUrgencyText = {
    bg: 'Срок за изпълнение',
    tr: 'Aciliyet Seviyesi',
    el: 'Επίπεδο Επείγοντος',
    en: 'Urgency Level'
  }[currentLang] || 'Urgency Level';

  const summaryChannelText = {
    bg: 'Канал',
    tr: 'Kanal',
    el: 'Κανάλι',
    en: 'Channel'
  }[currentLang] || 'Channel';

  const bridgeLabelText = {
    bg: 'Директна връзка WhatsApp',
    tr: 'Doğrudan WhatsApp Köprüsü',
    el: 'Άμεση Σύνδεση WhatsApp',
    en: 'WhatsApp Direct Bridge'
  }[currentLang] || 'WhatsApp Direct Bridge';

  const bridgeActiveText = {
    bg: 'Активна',
    tr: 'Aktif',
    el: 'Ενεργή',
    en: 'Active'
  }[currentLang] || 'Active';

  const ethicalTitleText = {
    bg: 'Академична етика и гаранция',
    tr: 'Etik Akademik Garanti',
    el: 'Εγγύηση Ακαδημαϊκής Ηθικής',
    en: 'Ethical Guarantee'
  }[currentLang] || 'Ethical Guarantee';

  const ethicalBodyText = {
    bg: 'Помагаме с форматиране, техническа CAD прецизност, композиция на табла и структуриране на проекти, за да предадете своята най-добра авторска работа.',
    tr: 'Kendi özgün ve en kaliteli çalışmanızı teslim edebilmeniz için biçimlendirme, teknik CAD hassasiyeti, pafta düzeni ve tasarım organizasyonunda destek oluyoruz.',
    el: 'Σας βοηθάμε στη μορφοποίηση, την τεχνική ακρίβεια CAD, τη σύνθεση πινακίδων και την οργάνωση του σχεδιασμού, ώστε να υποβάλετε την υψηλότερη ποιότητα πρωτότυπης εργασίας σας.',
    en: 'We assist you with formatting, technical CAD precision, board composition, and design organization so you submit your highest quality original work.'
  }[currentLang] || 'We assist you with formatting, technical CAD precision, board composition, and design organization so you submit your highest quality original work.';

  const emergencyTitleText = {
    bg: 'Спешен краен срок днес?',
    tr: 'Aynı Gün Acil Teslimat?',
    el: 'Επείγουσα Παράδοση Αυθημερόν;',
    en: 'Urgent Same-Day Deadline?'
  }[currentLang] || 'Urgent Same-Day Deadline?';

  const emergencyBodyText = {
    bg: `За срокове под 12 часа се свържете директно по WhatsApp (${SITE_CONFIG.contact.whatsapp}) или по Email.`,
    tr: `12 saatten kısa süreler için doğrudan WhatsApp (${SITE_CONFIG.contact.whatsapp}) veya E-posta ile ulaşın.`,
    el: `Για προθεσμίες κάτω των 12 ωρών, επικοινωνήστε άμεσα μέσω WhatsApp (${SITE_CONFIG.contact.whatsapp}) ή Email.`,
    en: `For deadlines under 12 hours, reach out directly on WhatsApp (${SITE_CONFIG.contact.whatsapp}) or Email.`
  }[currentLang] || `For deadlines under 12 hours, reach out directly on WhatsApp (${SITE_CONFIG.contact.whatsapp}) or Email.`;

  return (
    <section id="request" className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white dark:from-[#08090B] dark:to-[#0D0F13] relative">
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider border border-brand-200 dark:border-brand-800">
            <span>{intakeBadgeText}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white">
            {t.form.heading}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {t.form.subheading}
          </p>
        </div>

        {/* Success Confirmation State */}
        {isSubmitted ? (
          <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#11141A] border border-gray-200 dark:border-gray-800 shadow-2xl text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-950/80 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto border border-green-200 dark:border-green-900 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
                {t.form.successTitle}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
                {t.form.successDesc}
              </p>
            </div>

            {/* Direct Instant Transmission Buttons */}
            <div className="p-4 rounded-2xl bg-brand-50/50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/50 space-y-3">
              <span className="text-xs font-semibold text-gray-900 dark:text-white block">
                {currentLang === 'bg' ? 'Директни действия за връзка:' : currentLang === 'tr' ? 'Doğrudan İletişim Butonları:' : currentLang === 'el' ? 'Άμεσες Ενέργειες Επικοινωνίας:' : 'Direct Contact Actions:'}
              </span>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppTransmissionUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{currentLang === 'bg' ? 'Изпрати директно в WhatsApp' : currentLang === 'tr' ? 'Doğrudan WhatsApp ile Gönder' : currentLang === 'el' ? 'Αποστολή άμεσα στο WhatsApp' : 'Send Directly on WhatsApp'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getEmailTransmissionUrl(formData)}
                  className="px-5 py-3 rounded-xl bg-[#0D0F13] hover:bg-brand-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>{currentLang === 'bg' ? 'Изпрати по Email' : currentLang === 'tr' ? 'E-posta ile Gönder' : currentLang === 'el' ? 'Αποστολή μέσω Email' : 'Send via Email'}</span>
                </a>
              </div>
            </div>

            {/* Submission Summary Box */}
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-obsidian-900 border border-gray-200 dark:border-gray-800 text-left space-y-2 text-xs text-gray-600 dark:text-gray-300">
              <div className="flex justify-between border-b border-gray-200/60 dark:border-gray-800 pb-1.5">
                <span className="text-gray-400">{currentLang === 'bg' ? 'Студент:' : currentLang === 'tr' ? 'Öğrenci:' : currentLang === 'el' ? 'Φοιτητής:' : 'Student:'}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 dark:border-gray-800 pb-1.5">
                <span className="text-gray-400">{summaryUniText}:</span>
                <span className="text-gray-900 dark:text-white">{formData.university}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 dark:border-gray-800 pb-1.5">
                <span className="text-gray-400">{summaryTrackText}:</span>
                <span className="font-semibold text-brand-600 dark:text-brand-400">{formData.serviceType}</span>
              </div>
              {formData.fileName && (
                <div className="flex justify-between">
                  <span className="text-gray-400">{currentLang === 'bg' ? 'Прикачен файл:' : currentLang === 'tr' ? 'Eklenen Dosya:' : currentLang === 'el' ? 'Συνημμένο Αρχείο:' : 'Attached File:'}</span>
                  <span className="font-mono text-gray-900 dark:text-white">{formData.fileName}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex items-center justify-center">
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-800 dark:text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.form.anotherRequest}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Intake Form Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Main Area (8 cols) */}
            <div className="lg:col-span-8 bg-white dark:bg-[#11141A] rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 dark:border-gray-800 shadow-premium">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 1. Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {t.form.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.form.namePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-obsidian-900 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {t.form.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-obsidian-900 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    />
                  </div>
                </div>

                {/* 2. University & Department */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {t.form.uniLabel}
                    </label>
                    <select
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-obsidian-900 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    >
                      {universities.map((uni, idx) => (
                        <option key={idx} value={uni}>{uni}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {t.form.deptLabel}
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-obsidian-900 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    >
                      {departments.map((dept, idx) => (
                        <option key={idx} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Service Track & Deadline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {t.form.serviceLabel}
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-obsidian-900 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    >
                      {services.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.code} — {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {t.form.deadlineLabel}
                    </label>
                    <input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-obsidian-900 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    />
                  </div>
                </div>

                {/* 4. Urgency Selector Pills */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                    {t.form.urgencyLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {urgencyOptions.map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setFormData({ ...formData, urgency: item.id as any })}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          formData.urgency === item.id
                            ? 'border-brand-500 bg-brand-50/70 dark:bg-brand-950/60 ring-1 ring-brand-500/30'
                            : 'border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/60'
                        }`}
                      >
                        <div className="text-xs font-semibold text-gray-900 dark:text-white">{item.label}</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">{item.tag}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Project Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                    {t.form.descLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.form.descPlaceholder}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-obsidian-900 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all leading-relaxed"
                  />
                </div>

                {/* 6. Drag and Drop File Upload Area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                    {briefLabelText}
                  </label>
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
                      dragActive
                        ? 'border-brand-500 bg-brand-50/50 dark:bg-brand-950/30'
                        : formData.fileName
                        ? 'border-green-500/60 bg-green-50/30 dark:bg-green-950/20'
                        : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-gray-50/50 dark:bg-obsidian-900/50'
                    }`}
                  >
                    <input
                      type="file"
                      id="file-upload"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {formData.fileName ? (
                      <div className="flex items-center justify-center gap-2 text-xs text-green-700 dark:text-green-400 font-mono">
                        <FileText className="w-4 h-4" />
                        <span className="font-semibold">{formData.fileName}</span>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, fileName: '' })}
                          className="ml-2 text-xs text-red-500 hover:underline"
                        >
                          {removeFileText}
                        </button>
                      </div>
                    ) : (
                      <label htmlFor="file-upload" className="cursor-pointer block space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-obsidian-850 border border-gray-200 dark:border-gray-700 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto shadow-2xs">
                          <UploadCloud className="w-5 h-5" />
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                          {uploadClickText}
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono">
                          DWG, PDF, DOCX, PPTX, ZIP, Rhino, Images (up to 50MB)
                        </div>
                      </label>
                    )}
                  </div>
                </div>

                {/* 7. Contact Preference & Channel (WhatsApp or Email Only) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {channelLabelText}
                    </label>
                    <div className="flex gap-2">
                      {(['whatsapp', 'email'] as const).map((method) => (
                        <button
                          type="button"
                          key={method}
                          onClick={() => setFormData({ ...formData, contactPreference: method })}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-mono uppercase font-bold border transition-all flex items-center justify-center gap-1.5 ${
                            formData.contactPreference === method
                              ? method === 'whatsapp'
                                ? 'bg-green-600 text-white border-green-600 shadow-sm'
                                : 'bg-[#0D0F13] text-white dark:bg-white dark:text-black border-transparent shadow-sm'
                              : 'bg-gray-50 dark:bg-obsidian-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800'
                          }`}
                        >
                          {method === 'whatsapp' ? <MessageSquare className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
                          <span>{method}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {formData.contactPreference === 'whatsapp'
                        ? (currentLang === 'bg' ? 'WhatsApp Телефонен номер' : currentLang === 'tr' ? 'WhatsApp Telefon Numarası' : currentLang === 'el' ? 'Αριθμός WhatsApp' : 'WhatsApp Phone Number')
                        : (currentLang === 'bg' ? 'Имейл за потвърждение' : currentLang === 'tr' ? 'Onay E-postası' : currentLang === 'el' ? 'Email Επιβεβαίωσης' : 'Confirmation Email')}
                    </label>
                    <input
                      type="text"
                      placeholder={formData.contactPreference === 'whatsapp' ? '+359 88 ... or 088 ...' : formData.email || 'same as email above'}
                      value={formData.contactHandle}
                      onChange={(e) => setFormData({ ...formData, contactHandle: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-obsidian-900 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    />
                  </div>
                </div>

                {/* Submit CTA Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#0D0F13] hover:bg-brand-600 text-white font-bold text-sm tracking-tight flex items-center justify-center gap-2 shadow-lg hover:shadow-glow transition-all duration-200 disabled:opacity-70 group"
                  >
                    {isSubmitting ? (
                      <span>{t.form.submitting}</span>
                    ) : (
                      <>
                        <span>{t.form.submitBtn}</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2.5 font-mono">
                    {directNoteText}
                  </p>
                </div>

              </form>
            </div>

            {/* Side Information & Guarantee Widget (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Live Request Preview Box */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#11141A] border border-gray-200 dark:border-gray-800 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-800">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-gray-950 dark:text-white">
                    {summaryTitleText}
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-mono">{summaryTrackText}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{formData.serviceType}</span>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-mono">{summaryUniText}</span>
                    <span className="text-gray-700 dark:text-gray-300">{formData.university} • {formData.department}</span>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-mono">{summaryUrgencyText}</span>
                    <span className="font-mono text-brand-600 dark:text-brand-400 font-semibold uppercase">{formData.urgency}</span>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-mono">{summaryChannelText}</span>
                    <span className="font-mono text-green-600 dark:text-green-400 font-semibold uppercase">{formData.contactPreference}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>{bridgeLabelText}</span>
                  <span className="text-green-500 font-bold">{bridgeActiveText}</span>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="p-6 rounded-2xl bg-[#0D0F13] text-white border border-gray-800 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-400">
                    {ethicalTitleText}
                  </h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {ethicalBodyText}
                </p>
              </div>

              {/* Direct channels */}
              <div className="p-5 rounded-2xl bg-gray-50 dark:bg-obsidian-900 border border-gray-200 dark:border-gray-800 space-y-2 text-xs text-gray-600 dark:text-gray-400">
                <div className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-600" />
                  <span>{emergencyTitleText}</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  {emergencyBodyText}
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
