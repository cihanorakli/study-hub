import React, { useState } from 'react';
import { getServices } from '../../config/siteData';
import type { ServiceItem } from '../../types';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import {
  Compass,
  FileText,
  Table2,
  Presentation,
  BookOpen,
  Cpu,
  Palette,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ServicesGridProps {
  currentLang: Language;
  onSelectServiceForRequest: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  currentLang,
  onSelectServiceForRequest,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const t = TRANSLATIONS[currentLang];
  const services = getServices(currentLang);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'FileText': return FileText;
      case 'Table2': return Table2;
      case 'Presentation': return Presentation;
      case 'BookOpen': return BookOpen;
      case 'Cpu': return Cpu;
      case 'Palette': return Palette;
      default: return Sparkles;
    }
  };

  const categories = [
    { id: 'all', label: t.services.allFilter },
    { id: 'architecture', label: currentLang === 'bg' ? 'Архитектура' : currentLang === 'tr' ? 'Mimarlık' : currentLang === 'el' ? 'Αρχιτεκτονική' : 'Architecture' },
    { id: 'documents', label: currentLang === 'bg' ? 'Тезиси и документи' : currentLang === 'tr' ? 'Tez ve Belgeler' : currentLang === 'el' ? 'Έγγραφα & Πτυχιακές' : 'Docs & Thesis' },
    { id: 'presentations', label: currentLang === 'bg' ? 'Презентации' : currentLang === 'tr' ? 'Sunumlar' : currentLang === 'el' ? 'Παρουσιάσεις' : 'Slide Decks' },
    { id: 'data', label: currentLang === 'bg' ? 'Excel и данни' : currentLang === 'tr' ? 'Excel ve Veri' : currentLang === 'el' ? 'Excel & Δεδομένα' : 'Excel & Data' },
    { id: 'technical', label: currentLang === 'bg' ? 'CAD и инженеринг' : currentLang === 'tr' ? 'CAD ve Mühendislik' : currentLang === 'el' ? 'CAD & Μηχανική' : 'CAD & Engineering' },
    { id: 'creative', label: currentLang === 'bg' ? 'Творчески дизайн' : currentLang === 'tr' ? 'Grafik Tasarım' : currentLang === 'el' ? 'Γραφιστική' : 'Creative Design' },
  ];

  const tracksCountText = {
    bg: '• 8 Специализирани академични направления',
    tr: '• 8 Özelleştirilmiş Akademik Alan',
    el: '• 8 Εξειδικευμένοι Ακαδημαϊκοί Τομείς',
    en: '• 8 Specialized Academic Tracks'
  }[currentLang] || '• 8 Specialized Academic Tracks';

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter((s) => s.category === selectedCategory || s.category === 'custom');

  return (
    <section id="services" className="py-24 bg-[#F8F9FA] dark:bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider border border-brand-200 dark:border-brand-800">
              <span>{t.services.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white">
              {t.services.title}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl">
              {t.services.subtitle}
            </p>
          </div>

          <div className="text-xs font-mono text-gray-500 shrink-0">
            <span>{tracksCountText}</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0D0F13] text-white dark:bg-white dark:text-gray-950 shadow-sm font-semibold'
                  : 'bg-white dark:bg-obsidian-850 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (8 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const IconComponent = getIcon(service.iconName);
            const isExpanded = expandedCardId === service.id;

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-white dark:bg-[#11141A] border transition-all duration-300 flex flex-col justify-between p-6 hover:shadow-premium ${
                  service.popular
                    ? 'border-brand-300 dark:border-brand-800/80 ring-1 ring-brand-500/20'
                    : 'border-gray-200 dark:border-gray-800/80 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                {/* Card Top */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-obsidian-850 border border-gray-100 dark:border-gray-800 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      {service.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">
                          {service.badge}
                        </span>
                      )}
                      <span className="font-mono text-xs text-gray-400 font-bold">
                        {service.code}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-950 dark:text-white tracking-tight leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-600 dark:text-brand-400 font-medium mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800/80 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                      {t.services.deliverablesHeading}
                    </span>
                    <ul className="space-y-1">
                      {service.deliverables.slice(0, isExpanded ? service.deliverables.length : 3).map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="w-3 h-3 text-brand-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{deliv}</span>
                        </li>
                      ))}
                    </ul>

                    {service.deliverables.length > 3 && (
                      <button
                        onClick={() => setExpandedCardId(isExpanded ? null : service.id)}
                        className="text-[10px] font-mono text-brand-600 dark:text-brand-400 hover:underline pt-1 block"
                      >
                        {isExpanded ? t.services.showLess : `${t.services.showMore} (${service.deliverables.length - 3})`}
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Bottom / Software & CTA */}
                <div className="pt-5 mt-5 border-t border-gray-100 dark:border-gray-800/80 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {service.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectServiceForRequest(service.title)}
                    className="w-full py-2 px-3 rounded-lg bg-gray-50 dark:bg-obsidian-850 hover:bg-brand-600 hover:text-white text-gray-700 dark:text-gray-300 text-xs font-semibold flex items-center justify-between transition-colors group/btn"
                  >
                    <span>{t.services.requestBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

