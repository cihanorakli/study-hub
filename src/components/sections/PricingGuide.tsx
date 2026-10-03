import React from 'react';
import { getPricingTiers } from '../../config/siteData';
import type { PricingCategory } from '../../types';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingGuideProps {
  currentLang: Language;
  onSelectTierForQuote: (tierTitle: string) => void;
}

export const PricingGuide: React.FC<PricingGuideProps> = ({
  currentLang,
  onSelectTierForQuote,
}) => {
  const t = TRANSLATIONS[currentLang];
  const pricingTiers = getPricingTiers(currentLang);

  return (
    <section id="pricing" className="py-24 bg-[#F8F9FA] dark:bg-[#08090B] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider border border-brand-200 dark:border-brand-800">
            <span>{t.pricing.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white">
            {t.pricing.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier: PricingCategory) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl bg-white dark:bg-[#11141A] p-7 border flex flex-col justify-between transition-all duration-300 hover:shadow-premium ${
                tier.isPopular
                  ? 'border-brand-500 ring-2 ring-brand-500/20 shadow-lg'
                  : 'border-gray-200/90 dark:border-gray-800'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-brand-600 text-white text-[10px] font-mono uppercase font-bold tracking-wider shadow-sm">
                    {t.pricing.mostRequested}
                  </span>
                </div>
              )}

              {/* Card Top */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-950 dark:text-white tracking-tight">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                    {tier.subtitle}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-gray-50 dark:bg-obsidian-900 border border-gray-100 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-gray-200 block mb-0.5">
                    {t.pricing.turnaroundLabel}
                  </span>
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{tier.estimatedTurnaround}</span>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {tier.idealFor}
                </p>

                {/* Example Projects */}
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                    {t.pricing.examplesHeading}
                  </span>
                  <ul className="space-y-1.5">
                    {tier.examples.map((ex, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-brand-500 font-bold text-xs mt-0.5">•</span>
                        <span className="leading-snug">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Included Features */}
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                    {t.pricing.includedHeading}
                  </span>
                  <ul className="space-y-1.5">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card CTA */}
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
                <button
                  onClick={() => onSelectTierForQuote(tier.title)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    tier.isPopular
                      ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm'
                      : 'bg-[#0D0F13] text-white hover:bg-brand-600 dark:bg-white dark:text-black dark:hover:bg-gray-200'
                  }`}
                >
                  <span>{t.pricing.getQuoteBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#11141A] border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                {t.pricing.guaranteeTitle}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {t.pricing.guaranteeDesc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <HelpCircle className="w-4 h-4 text-brand-600" />
            <span>{t.pricing.reviewTime}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
