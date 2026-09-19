import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../../config/siteData';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenRequest: (serviceType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenRequest,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];

  const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'bg', name: 'Bulgarian', nativeName: 'Български' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
    { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.architecture, href: '#architecture', badge: t.nav.specialBadge },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/95 dark:bg-[#0D0F13]/95 backdrop-blur-md shadow-subtle border-b border-gray-200/80 dark:border-gray-800'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label={`${SITE_CONFIG.brandName} Home`}
          >
            <div className="w-9 h-9 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <img src={logoImg} alt="STUDY HUB Logo" className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-lg leading-tight text-gray-950 dark:text-white flex items-center gap-1.5">
                {SITE_CONFIG.brandName}
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  SOFIA
                </span>
              </span>
              <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider -mt-0.5">
                Academic & Project Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-obsidian-850/80 px-3 py-1.5 rounded-full border border-gray-200/80 dark:border-gray-800 shadow-subtle backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5"
              >
                {link.label}
                {link.badge && (
                  <span className="text-[9px] font-mono uppercase bg-brand-600 text-white px-1.5 py-0.2 rounded-full leading-tight">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Actions: Language selector & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-obsidian-850 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700 shadow-2xs"
                aria-label="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                <span className="uppercase font-mono font-bold text-xs">{currentLang}</span>
              </button>

              {langMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-36 bg-white dark:bg-obsidian-850 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-1.5 z-50 animate-fade-in"
                  onMouseLeave={() => setLangMenuOpen(false)}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                        currentLang === lang.code
                          ? 'font-bold text-brand-600 bg-brand-50/50 dark:bg-brand-950/40'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span>{lang.nativeName}</span>
                      <span className="font-mono text-[10px] uppercase text-gray-400 font-bold">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary CTA button */}
            <button
              onClick={() => onOpenRequest()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0D0F13] text-white hover:bg-brand-600 font-medium text-xs tracking-tight transition-all duration-200 shadow-sm hover:shadow-glow group"
            >
              <span>{t.nav.getSupport}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenRequest()}
              className="px-3 py-1.5 rounded-lg bg-brand-600 text-white font-medium text-xs"
            >
              {t.nav.getSupport}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-obsidian-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
            <span className="text-xs font-mono text-gray-400 uppercase font-semibold">Language / Език / Dil / Γλώσσα:</span>
            <div className="flex gap-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                  }}
                  className={`px-2.5 py-1 rounded text-xs uppercase font-mono font-bold ${
                    currentLang === lang.code
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono bg-brand-600 text-white px-2 py-0.5 rounded">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRequest();
              }}
              className="w-full py-3 rounded-lg bg-[#0D0F13] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{t.nav.getSupport}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
