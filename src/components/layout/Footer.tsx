import React from 'react';
import { SITE_CONFIG, getDepartments } from '../../config/siteData';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { ArrowUp, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const departments = getDepartments(currentLang);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0F13] text-white pt-16 pb-12 border-t border-gray-800 relative overflow-hidden">
      {/* Subtle background decorative grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Col 1 & 2: Brand & Ethics */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <img src={logoImg} alt="STUDY HUB Logo" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-xl text-white">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  SOFIA
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              {t.footer.about}
            </p>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 max-w-md">
              <ShieldCheck className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
              <div className="text-xs text-gray-300 leading-normal">
                <span className="font-semibold text-white">{t.footer.ethicsTitle} </span>
                {t.footer.ethicsDesc}
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4 font-semibold">
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-brand-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-brand-400 transition-colors flex items-center gap-1.5">
                  {t.nav.architecture}
                  <span className="text-[9px] font-mono px-1 py-0.2 bg-brand-600 text-white rounded">
                    {t.nav.specialBadge}
                  </span>
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-brand-400 transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-400 transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-400 transition-colors">
                  {t.nav.whyUs}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-brand-400 transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-400 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Disciplines */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4 font-semibold">
              {t.footer.departmentsTitle}
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              {departments.slice(0, 7).map((dept, idx) => (
                <li key={idx}>{dept}</li>
              ))}
            </ul>
          </div>

          {/* Col 5: Direct Channels */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4 font-semibold">
              {t.footer.connectTitle}
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-brand-400 transition-colors border border-white/5"
              >
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="truncate">{SITE_CONFIG.contact.email}</span>
              </a>

              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-green-400 transition-colors border border-white/5"
              >
                <MessageSquare className="w-4 h-4 text-green-400 shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.contact.whatsapp}</span>
              </a>

              <div className="pt-1 text-[11px] text-gray-400 font-mono">
                {SITE_CONFIG.contact.workingHours}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {SITE_CONFIG.brandName} Sofia.</span>
            <span>•</span>
            <span>{t.footer.rights}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-gray-300 transition-colors">{t.footer.terms}</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
