import React, { useState } from 'react';
import { getArchitectureProjects } from '../../config/siteData';
import type { ArchitectureItem } from '../../types';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { Compass, Maximize2, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface ArchitectureShowcaseProps {
  currentLang: Language;
  onOpenProjectModal: (item: ArchitectureItem) => void;
  onOpenRequest: (service: string) => void;
}

export const ArchitectureShowcase: React.FC<ArchitectureShowcaseProps> = ({
  currentLang,
  onOpenProjectModal,
  onOpenRequest,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const t = TRANSLATIONS[currentLang];
  const archProjects = getArchitectureProjects(currentLang);

  const filters = [
    { id: 'all', label: t.architecture.allFilter },
    { id: 'plans', label: t.architecture.plansFilter },
    { id: 'boards', label: t.architecture.boardsFilter },
    { id: '3d', label: t.architecture.threeDFilter },
    { id: 'models', label: t.architecture.modelsFilter },
  ];

  const filteredItems = archProjects.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'plans') return item.id === 'arch-1' || item.id === 'arch-2';
    if (activeFilter === 'boards') return item.id === 'arch-3';
    if (activeFilter === '3d') return item.id === 'arch-4' || item.id === 'arch-5';
    if (activeFilter === 'models') return item.id === 'arch-6';
    return true;
  });

  return (
    <section id="architecture" className="py-24 bg-[#0A0C10] text-white relative overflow-hidden">
      {/* Subtle Studio Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      
      {/* Ambient Accent Light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-800">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-950/80 text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider border border-brand-800">
              <Compass className="w-3.5 h-3.5" />
              <span>{t.architecture.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.architecture.titleLine1} <br />
              <span className="text-brand-400">{t.architecture.titleLine2}</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {t.architecture.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenRequest('Architecture & Spatial Design')}
              className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-glow transition-all"
            >
              <span>{t.architecture.ctaBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto py-8 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === f.id
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Visual Architecture Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-[#11141A] border border-gray-800 hover:border-brand-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image Preview Container */}
              <div
                className="relative h-60 sm:h-64 overflow-hidden bg-gray-900 cursor-pointer"
                onClick={() => onOpenProjectModal(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge: Scale & Category */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-[10px] font-mono border border-white/10">
                    {item.scale}
                  </span>
                </div>

                {/* Quick inspect button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white hover:bg-brand-600 transition-colors flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Title overlay at bottom of image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-400 font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-brand-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.summary}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-1.5 pt-2 border-t border-gray-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 font-semibold block">
                    {t.architecture.scopeCovered}
                  </span>
                  <ul className="space-y-1">
                    {item.deliverables.slice(0, 2).map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software tags & Modal trigger */}
                <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {item.software.slice(0, 3).map((sw, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenProjectModal(item)}
                    className="text-xs font-mono text-brand-400 hover:text-white flex items-center gap-1 shrink-0 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{t.architecture.inspectBtn}</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Note */}
        <div className="mt-12 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-600/20 text-brand-400 flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">
                {t.architecture.bannerTitle}
              </h4>
              <p className="text-xs text-gray-400">
                {t.architecture.bannerDesc}
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenRequest('Architecture & Spatial Design')}
            className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 text-xs font-semibold whitespace-nowrap transition-colors"
          >
            {t.architecture.bannerBtn}
          </button>
        </div>

      </div>
    </section>
  );
};
