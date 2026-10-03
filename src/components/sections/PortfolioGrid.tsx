import React, { useState } from 'react';
import { getPortfolioItems } from '../../config/siteData';
import type { PortfolioItem } from '../../types';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { Maximize2, CheckCircle2, ArrowRight } from 'lucide-react';

interface PortfolioGridProps {
  currentLang: Language;
  onOpenProjectModal: (item: PortfolioItem) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  currentLang,
  onOpenProjectModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const t = TRANSLATIONS[currentLang];
  const portfolioItems = getPortfolioItems(currentLang);

  const categories = [
    { id: 'all', label: currentLang === 'bg' ? 'Всички проекти' : currentLang === 'tr' ? 'Tüm Projeler' : currentLang === 'el' ? 'Όλα τα Έργα' : 'All Projects' },
    { id: 'architecture', label: currentLang === 'bg' ? 'Архитектура' : currentLang === 'tr' ? 'Mimarlık' : currentLang === 'el' ? 'Αρχιτεκτονική' : 'Architecture' },
    { id: 'documents', label: currentLang === 'bg' ? 'Тезиси и документи' : currentLang === 'tr' ? 'Tez ve Belgeler' : currentLang === 'el' ? 'Έγγραφα & Πτυχιακές' : 'Documents & Thesis' },
    { id: 'presentations', label: currentLang === 'bg' ? 'Презентации' : currentLang === 'tr' ? 'Sunumlar' : currentLang === 'el' ? 'Παρουσιάσεις' : 'Presentations' },
    { id: 'data', label: currentLang === 'bg' ? 'Excel и данни' : currentLang === 'tr' ? 'Excel ve Veri' : currentLang === 'el' ? 'Excel & Δεδομένα' : 'Excel & Data' },
    { id: 'technical', label: currentLang === 'bg' ? 'CAD и инженеринг' : currentLang === 'tr' ? 'CAD ve Mühendislik' : currentLang === 'el' ? 'CAD & Μηχανική' : 'Technical / CAD' },
    { id: 'creative', label: currentLang === 'bg' ? 'Творчески дизайн' : currentLang === 'tr' ? 'Grafik Tasarım' : currentLang === 'el' ? 'Γραφιστική' : 'Creative Design' },
  ];

  const editableCardsText = {
    bg: '• Редактируеми проектни карти',
    tr: '• Düzenlenebilir Proje Kartları',
    el: '• Επεξεργάσιμες Κάρτες Έργων',
    en: '• Editable Project Cards'
  }[currentLang] || '• Editable Project Cards';

  const filteredPortfolio = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#F8F9FA] dark:bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider border border-brand-200 dark:border-brand-800">
              <span>{t.portfolio.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white">
              {t.portfolio.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl">
              {t.portfolio.subtitle}
            </p>
          </div>

          <div className="text-xs font-mono text-gray-500">
            <span>{editableCardsText}</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === cat.id
                  ? 'bg-[#0D0F13] text-white dark:bg-white dark:text-gray-950 shadow-sm font-semibold'
                  : 'bg-white dark:bg-obsidian-850 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white dark:bg-[#11141A] border border-gray-200/90 dark:border-gray-800 hover:border-brand-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-premium"
            >
              {/* Image & Overlay */}
              <div
                className="relative h-56 sm:h-60 overflow-hidden bg-gray-900 cursor-pointer"
                onClick={() => onOpenProjectModal(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-transparent to-black/20 opacity-80 group-hover:opacity-50 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-mono border border-white/10">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover inspect icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white hover:bg-brand-600 transition-colors flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Scope indicator on image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-mono text-brand-300 font-medium bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {item.scope}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onOpenProjectModal(item)}
                    className="text-base font-bold text-gray-950 dark:text-white tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 cursor-pointer transition-colors leading-snug"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Deliverables preview */}
                <div className="space-y-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                    {t.portfolio.deliverablesLabel}
                  </span>
                  <ul className="space-y-1">
                    {item.deliverables.slice(0, 2).map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-brand-500 shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Tools & Details link */}
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {item.tools.slice(0, 2).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      >
                        {tool}
                      </span>
                    ))}
                    {item.tools.length > 2 && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500">
                        +{item.tools.length - 2}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenProjectModal(item)}
                    className="text-xs font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{t.portfolio.inspectBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
