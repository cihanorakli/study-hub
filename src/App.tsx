import React, { useState } from 'react';
import type { Language } from './config/translations';
import type { ArchitectureItem, PortfolioItem } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';
import { ServicesGrid } from './components/sections/ServicesGrid';
import { ArchitectureShowcase } from './components/sections/ArchitectureShowcase';
import { HowItWorks } from './components/sections/HowItWorks';
import { PortfolioGrid } from './components/sections/PortfolioGrid';
import { WhyUs } from './components/sections/WhyUs';
import { PricingGuide } from './components/sections/PricingGuide';
import { Testimonials } from './components/sections/Testimonials';
import { FAQAccordion } from './components/sections/FAQAccordion';
import { RequestForm } from './components/sections/RequestForm';
import { ProjectModal } from './components/ui/Modal';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [prefilledService, setPrefilledService] = useState<string>('Architecture & Spatial Design');
  
  // Modal state
  const [activeModalData, setActiveModalData] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
    image: string;
    description: string;
    deliverables?: string[];
    tools?: string[];
    scope?: string;
  }>({
    isOpen: false,
    title: '',
    category: '',
    image: '',
    description: '',
    deliverables: [],
    tools: [],
    scope: '',
  });

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

  const openArchitectureModal = (item: ArchitectureItem) => {
    setActiveModalData({
      isOpen: true,
      title: item.title,
      category: item.category,
      image: item.image,
      description: item.description,
      deliverables: item.deliverables,
      tools: item.software,
      scope: item.scale,
    });
  };

  const openPortfolioModal = (item: PortfolioItem) => {
    setActiveModalData({
      isOpen: true,
      title: item.title,
      category: item.categoryLabel,
      image: item.image,
      description: item.fullDescription,
      deliverables: item.deliverables,
      tools: item.tools,
      scope: item.scope,
    });
  };

  const closeModal = () => {
    setActiveModalData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0D0F13] flex flex-col font-sans selection:bg-brand-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenRequest={(service) => scrollToRequestForm(service)}
      />

      {/* Main Page Storytelling Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero
          currentLang={currentLang}
          onGetSupportClick={() => scrollToRequestForm()}
          onExploreServicesClick={scrollToServices}
        />

        {/* 2. Trust Strip */}
        <TrustStrip currentLang={currentLang} />

        {/* 3. Services Grid */}
        <ServicesGrid
          currentLang={currentLang}
          onSelectServiceForRequest={(serviceTitle) => scrollToRequestForm(serviceTitle)}
        />

        {/* 4. Architecture Studio Showcase */}
        <ArchitectureShowcase
          currentLang={currentLang}
          onOpenProjectModal={openArchitectureModal}
          onOpenRequest={(service) => scrollToRequestForm(service)}
        />

        {/* 5. How It Works (4 Steps) */}
        <HowItWorks currentLang={currentLang} onStartRequest={() => scrollToRequestForm()} />

        {/* 6. Portfolio & Examples Grid */}
        <PortfolioGrid currentLang={currentLang} onOpenProjectModal={openPortfolioModal} />

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

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Project Lightbox Modal */}
      <ProjectModal
        isOpen={activeModalData.isOpen}
        currentLang={currentLang}
        onClose={closeModal}
        title={activeModalData.title}
        category={activeModalData.category}
        image={activeModalData.image}
        description={activeModalData.description}
        deliverables={activeModalData.deliverables}
        tools={activeModalData.tools}
        scope={activeModalData.scope}
        onRequestThis={() => scrollToRequestForm(activeModalData.title)}
      />
    </div>
  );
};

export default App;
