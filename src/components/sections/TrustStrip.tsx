import React from 'react';
import { getTargetUniversities } from '../../config/siteData';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { GraduationCap, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

interface TrustStripProps {
  currentLang: Language;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const universities = getTargetUniversities(currentLang);

  const pillars = [
    { title: t.trust.pillar1Title, desc: t.trust.pillar1Desc, icon: GraduationCap },
    { title: t.trust.pillar2Title, desc: t.trust.pillar2Desc, icon: Sparkles },
    { title: t.trust.pillar3Title, desc: t.trust.pillar3Desc, icon: Clock },
    { title: t.trust.pillar4Title, desc: t.trust.pillar4Desc, icon: CheckCircle2 },
  ];

  return (
    <section className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D0F13] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* University badges ticker / strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold shrink-0">
            <span>{t.trust.primaryFocus}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
            {universities.map((uni, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-50 dark:bg-obsidian-850 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-2xs hover:border-brand-500/40 transition-colors"
              >
                {uni}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5 border border-brand-100 dark:border-brand-900 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

