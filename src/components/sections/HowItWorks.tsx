import React from 'react';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { MessageSquare, UploadCloud, CheckCircle2, Award, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  currentLang: Language;
  onStartRequest: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang, onStartRequest }) => {
  const t = TRANSLATIONS[currentLang];

  const steps = [
    {
      step: '01',
      title: t.howItWorks.step1Title,
      shortDesc: t.howItWorks.step1Desc,
      detail: t.howItWorks.step1Detail,
      icon: MessageSquare,
    },
    {
      step: '02',
      title: t.howItWorks.step2Title,
      shortDesc: t.howItWorks.step2Desc,
      detail: t.howItWorks.step2Detail,
      icon: UploadCloud,
    },
    {
      step: '03',
      title: t.howItWorks.step3Title,
      shortDesc: t.howItWorks.step3Desc,
      detail: t.howItWorks.step3Detail,
      icon: CheckCircle2,
    },
    {
      step: '04',
      title: t.howItWorks.step4Title,
      shortDesc: t.howItWorks.step4Desc,
      detail: t.howItWorks.step4Detail,
      icon: Award,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-[#0D0F13] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider border border-brand-200 dark:border-brand-800">
            <span>{t.howItWorks.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white">
            {t.howItWorks.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#F8F9FA] dark:bg-[#11141A] p-6 border border-gray-200/80 dark:border-gray-800 flex flex-col justify-between group hover:border-brand-500/50 hover:shadow-premium transition-all duration-300"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between pb-6">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-obsidian-850 border border-gray-200 dark:border-gray-700 text-brand-600 dark:text-brand-400 flex items-center justify-center shadow-subtle group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-black text-gray-300 dark:text-gray-700 group-hover:text-brand-500/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-gray-950 dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-brand-600 dark:text-brand-400">
                    {item.shortDesc}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-1">
                    {item.detail}
                  </p>
                </div>

                {/* Connecting arrow indicator for desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-gray-300 dark:text-gray-700 pointer-events-none">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartRequest}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0D0F13] text-white hover:bg-brand-600 text-xs font-semibold tracking-tight transition-all shadow-subtle hover:shadow-glow"
          >
            <span>{t.howItWorks.startCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
