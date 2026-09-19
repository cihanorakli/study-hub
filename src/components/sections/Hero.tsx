import React from 'react';
import { getHeroWorkspaceData } from '../../config/siteData';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { ArrowRight, CheckCircle2, Sparkles, Layers, Clock, Shield } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onGetSupportClick: () => void;
  onExploreServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onGetSupportClick,
  onExploreServicesClick,
}) => {
  const t = TRANSLATIONS[currentLang];
  const heroData = getHeroWorkspaceData(currentLang);

  const readyBadgeText = {
    bg: 'Готово за преглед',
    tr: 'İncelemeye Hazır',
    el: 'Έτοιμο για Έλεγχο',
    en: 'Ready for Review'
  }[currentLang] || 'Ready for Review';

  const directSupportText = {
    bg: 'Директна подкрепа през WhatsApp & Email',
    tr: 'WhatsApp & Email ile Doğrudan Destek',
    el: 'Άμεση υποστήριξη μέσω WhatsApp & Email',
    en: 'Direct support via WhatsApp & Email'
  }[currentLang] || 'Direct support via WhatsApp & Email';

  const quoteTimeText = {
    bg: 'Оферти до 3 часа',
    tr: '3 Saatten Kısa Sürede Teklif',
    el: 'Προσφορές σε < 3 ώρες',
    en: 'Quotes in < 3 hours'
  }[currentLang] || 'Quotes in < 3 hours';

  const ethicalText = {
    bg: '100% Академична етика',
    tr: '%100 Etik Akademik Destek',
    el: '100% Ηθική Ακαδημαϊκή Υποστήριξη',
    en: '100% Ethical Academic Support'
  }[currentLang] || '100% Ethical Academic Support';

  const directContactText = {
    bg: 'Директен WhatsApp & Email',
    tr: 'Doğrudan WhatsApp & Email',
    el: 'Άμεσο WhatsApp & Email',
    en: 'Direct WhatsApp & Email'
  }[currentLang] || 'Direct WhatsApp & Email';

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#F8F9FA] to-[#F1F4F9] dark:from-[#08090B] dark:via-[#0D0F13] dark:to-[#11141A]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-20 pointer-events-none" />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag / Pill */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-obsidian-850 border border-gray-200 dark:border-gray-800 shadow-subtle mb-6 animate-fade-in">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {t.hero.badge}
            </span>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <span className="text-xs font-mono font-semibold text-brand-600 dark:text-brand-400">
              NBU • UACEG • TU • Kliment Ohridski • MU-S
            </span>
          </div>
        </div>

        {/* Main Headline & Value Statement */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.08]">
            {t.hero.titleLine1} <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-blue-500 to-indigo-600">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {t.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onGetSupportClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0D0F13] text-white hover:bg-brand-600 font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-glow flex items-center justify-center gap-2 group"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreServicesClick}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-obsidian-850 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 font-semibold text-sm transition-colors shadow-subtle flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Micro trust indicators below CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-600" />
              <span>{quoteTimeText}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-green-500" />
              <span>{ethicalText}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-green-500" />
              <span>{directContactText}</span>
            </div>
          </div>
        </div>

        {/* Editorial Visual Composition - Workspace Mockup & Project Cards */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Main Showcase Panel */}
          <div className="relative rounded-2xl bg-white dark:bg-[#11141A] p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-premium overflow-hidden">
            
            {/* Top Editor Bar */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs font-mono text-gray-400 font-medium hidden sm:inline">
                  workspace / architecture_studio_jury_review.dwg
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 font-semibold border border-brand-200 dark:border-brand-800">
                  {readyBadgeText}
                </span>
              </div>
            </div>

            {/* Grid of Workspace Artifacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Card 1: CAD & Lineweight */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-obsidian-900 border border-gray-100 dark:border-gray-800 space-y-3 group hover:border-brand-500/40 transition-colors">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{heroData.card1Code}</span>
                  <span className="text-[10px] font-mono bg-white dark:bg-gray-800 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-700">{heroData.card1Scale}</span>
                </div>
                <div className="h-28 rounded-lg overflow-hidden bg-gray-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                    alt="Floor plan drawing sample"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[11px] text-white font-medium">{heroData.card1ImgTitle}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                  {heroData.card1Desc}
                </p>
              </div>

              {/* Card 2: Presentation Board */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-obsidian-900 border border-gray-100 dark:border-gray-800 space-y-3 group hover:border-brand-500/40 transition-colors">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{heroData.card2Code}</span>
                  <span className="text-[10px] font-mono bg-white dark:bg-gray-800 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-700">{heroData.card2Scale}</span>
                </div>
                <div className="h-28 rounded-lg overflow-hidden bg-gray-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                    alt="A0 Jury Presentation Board"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[11px] text-white font-medium">{heroData.card2ImgTitle}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                  {heroData.card2Desc}
                </p>
              </div>

              {/* Card 3: Academic Documents */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-obsidian-900 border border-gray-100 dark:border-gray-800 space-y-3 sm:col-span-2 lg:col-span-1 group hover:border-brand-500/40 transition-colors">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{heroData.card3Code}</span>
                  <span className="text-[10px] font-mono bg-white dark:bg-gray-800 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-700">{heroData.card3Scale}</span>
                </div>
                <div className="h-28 rounded-lg overflow-hidden bg-gray-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
                    alt="Thesis Document Formatting"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[11px] text-white font-medium">{heroData.card3ImgTitle}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                  {heroData.card3Desc}
                </p>
              </div>

            </div>

            {/* Bottom Status bar */}
            <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span className="font-medium">{directSupportText}</span>
              </div>
              <div className="font-mono text-[11px] text-gray-400">
                {heroData.activeSupport}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

