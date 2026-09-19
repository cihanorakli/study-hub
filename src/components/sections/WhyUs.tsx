import React from 'react';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { GraduationCap, Zap, Layers, Sparkles, ShieldCheck, Clock } from 'lucide-react';

interface WhyUsProps {
  currentLang: Language;
}

export const WhyUs: React.FC<WhyUsProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const cards = [
    { title: t.whyUs.card1Title, desc: t.whyUs.card1Desc, icon: GraduationCap },
    { title: t.whyUs.card2Title, desc: t.whyUs.card2Desc, icon: Zap },
    { title: t.whyUs.card3Title, desc: t.whyUs.card3Desc, icon: Layers },
    { title: t.whyUs.card4Title, desc: t.whyUs.card4Desc, icon: Sparkles },
    { title: t.whyUs.card5Title, desc: t.whyUs.card5Desc, icon: ShieldCheck },
    { title: t.whyUs.card6Title, desc: t.whyUs.card6Desc, icon: Clock },
  ];

  return (
    <section id="why-us" className="py-24 bg-white dark:bg-[#0D0F13] border-t border-gray-200 dark:border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider border border-brand-200 dark:border-brand-800">
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white">
            {t.whyUs.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8F9FA] dark:bg-[#11141A] border border-gray-200/80 dark:border-gray-800 flex flex-col justify-between group hover:border-brand-500/50 hover:shadow-subtle transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-obsidian-850 border border-gray-200 dark:border-gray-700 text-brand-600 dark:text-brand-400 flex items-center justify-center shadow-2xs group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-950 dark:text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>Standard Guarantee</span>
                  <span className="text-brand-600 dark:text-brand-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
