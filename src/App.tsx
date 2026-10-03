import React, { useState } from 'react';
import type { Language } from './config/translations';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';


import { HowItWorks } from './components/sections/HowItWorks';

import { WhyUs } from './components/sections/WhyUs';
import { PricingGuide } from './components/sections/PricingGuide';
import { Testimonials } from './components/sections/Testimonials';
import { FAQAccordion } from './components/sections/FAQAccordion';
import { RequestForm } from './components/sections/RequestForm';
import { LegalPage } from './components/sections/LegalPage';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [prefilledService, setPrefilledService] = useState<string>('Architecture & Spatial Design');
  const [legalPage, setLegalPage] = useState<'privacy' | 'terms' | null>(() => {
    if (window.location.hash === '#privacy-policy') return 'privacy';
    if (window.location.hash === '#terms-of-service') return 'terms';
    return null;
  });

  React.useEffect(() => {
    const updateLegalPage = () => {
      setLegalPage(window.location.hash === '#privacy-policy' ? 'privacy' : window.location.hash === '#terms-of-service' ? 'terms' : null);
    };
    window.addEventListener('hashchange', updateLegalPage);
    return () => window.removeEventListener('hashchange', updateLegalPage);
  }, []);
  


  const scrollToRequestForm = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPrefilledService(serviceTitle);
    }
    const formEl = document.getElementById('request');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0D0F13] flex flex-col font-sans selection:bg-brand-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenRequest={(service) => scrollToRequestForm(service)}
      />

      {legalPage ? <LegalPage kind={legalPage} currentLang={currentLang} /> : <>
      {/* Main Page Storytelling Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero
          currentLang={currentLang}
          onGetSupportClick={() => scrollToRequestForm()}
          onExploreServicesClick={scrollToServices}
        />



        {/* 4. How It Works (4 Steps) */}
        <HowItWorks currentLang={currentLang} onStartRequest={() => scrollToRequestForm()} />


        {/* 7. Why Students Choose Us */}
        <WhyUs currentLang={currentLang} />

        {/* 8. Conceptual Pricing Guide */}
        <PricingGuide
          currentLang={currentLang}
          onSelectTierForQuote={(tier) => scrollToRequestForm(tier)}
        />

        {/* 9. Student Feedback & Testimonials */}
        <Testimonials currentLang={currentLang} />

        {/* 10. FAQ Accordion */}
        <FAQAccordion currentLang={currentLang} />

        {/* 11. Request & Quote Form */}
        <RequestForm
          currentLang={currentLang}
          prefilledService={prefilledService}
        />
      </main>
      </>}

      {/* Footer */}
      <Footer currentLang={currentLang} />


    </div>
  );
};

export default App;
