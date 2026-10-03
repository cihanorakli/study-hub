import React, { useState } from 'react';
import { getFAQs, SITE_CONFIG } from '../../config/siteData';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { ChevronDown, MessageSquare } from 'lucide-react';

interface FAQAccordionProps {
  currentLang: Language;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ currentLang }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-6']);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const t = TRANSLATIONS[currentLang];
  const faqs = getFAQs(currentLang);

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const categories = [
    { id: 'all', label: currentLang === 'bg' ? 'Всички въпроси (10)' : currentLang === 'tr' ? 'Tüm Sorular (10)' : currentLang === 'el' ? 'Όλες οι Ερωτήσεις (10)' : 'All Questions (10)' },
    { id: 'general', label: currentLang === 'bg' ? 'Общи въпроси' : currentLang === 'tr' ? 'Genel Destek' : currentLang === 'el' ? 'Γενικές Πληροφορίες' : 'General & Support' },
    { id: 'architecture', label: currentLang === 'bg' ? 'Архитектура' : currentLang === 'tr' ? 'Mimarlık Stüdyosu' : currentLang === 'el' ? 'Αρχιτεκτονική' : 'Architecture Studio' },
    { id: 'pricing', label: currentLang === 'bg' ? 'Цени и оферти' : currentLang === 'tr' ? 'Fiyat ve Teklifler' : currentLang === 'el' ? 'Τιμές & Προσφορές' : 'Quotes & Pricing' },
    { id: 'process', label: currentLang === 'bg' ? 'Срокове и доставка' : currentLang === 'tr' ? 'Süreç ve Teslimat' : currentLang === 'el' ? 'Χρόνος Παράδοσης' : 'Timelines & Delivery' },
    { id: 'files', label: currentLang === 'bg' ? 'Формати на файлове' : currentLang === 'tr' ? 'Dosya Formatları' : currentLang === 'el' ? 'Μορφές Αρχείων' : 'File Formats' },
  ];

  const filteredFAQs = activeCategory === 'all'
    ? faqs
    : faqs.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-[#F8F9FA] dark:bg-[#08090B] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider border border-brand-200 dark:border-brand-800">
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white">
            {t.faq.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0D0F13] text-white dark:bg-white dark:text-gray-950 shadow-sm font-semibold'
                  : 'bg-white dark:bg-obsidian-850 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFAQs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-[#11141A] border border-gray-200/90 dark:border-gray-800 overflow-hidden transition-all shadow-subtle hover:border-gray-300 dark:hover:border-gray-700"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-gray-950 dark:text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-brand-50 text-brand-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-gray-100 dark:border-gray-800/80 animate-fade-in">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-obsidian-850 border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                {t.faq.unansweredTitle}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {t.faq.unansweredDesc}
              </p>
            </div>
          </div>

          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="px-5 py-2.5 rounded-xl bg-[#0D0F13] text-white hover:bg-brand-600 text-xs font-semibold whitespace-nowrap transition-colors"
          >
            {t.faq.askBtn}
          </a>
        </div>

      </div>
    </section>
  );
};
