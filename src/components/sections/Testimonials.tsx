import React from 'react';
import { getTestimonials } from '../../config/siteData';
import type { TestimonialItem } from '../../types';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { MessageSquareQuote, Edit3 } from 'lucide-react';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const testimonials = getTestimonials(currentLang);

  return (
    <section className="py-24 bg-white dark:bg-[#0D0F13] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider border border-brand-200 dark:border-brand-800">
              <span>{t.testimonials.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white">
              {t.testimonials.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-obsidian-850 text-[11px] font-mono text-gray-500 border border-gray-200 dark:border-gray-800">
            <Edit3 className="w-3.5 h-3.5 text-brand-600" />
            <span>STUDY HUB SOFIA</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item: TestimonialItem) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#F8F9FA] dark:bg-[#11141A] border border-gray-200/80 dark:border-gray-800 flex flex-col justify-between hover:border-brand-500/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                    <MessageSquareQuote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    {item.projectType}
                  </span>
                </div>

                <p className="text-xs text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  {item.feedback}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-200/60 dark:border-gray-800/80">
                <h4 className="text-xs font-bold text-gray-950 dark:text-white">
                  {item.name}
                </h4>
                <p className="text-[11px] text-brand-600 dark:text-brand-400 font-medium mt-0.5">
                  {item.department}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  {item.university}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
