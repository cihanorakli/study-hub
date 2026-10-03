import React, { useEffect } from 'react';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { X, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  currentLang?: Language;
  onClose: () => void;
  title: string;
  category: string;
  image: string;
  description: string;
  deliverables?: string[];
  tools?: string[];
  scope?: string;
  onRequestThis?: () => void;
}

export const ProjectModal: React.FC<ModalProps> = ({
  isOpen,
  currentLang = 'en',
  onClose,
  title,
  category,
  image,
  description,
  deliverables,
  tools,
  scope,
  onRequestThis
}) => {
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#08090B]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#11141A] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800/80 bg-gray-50/50 dark:bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
              {category}
            </span>
            {scope && (
              <span className="text-xs text-gray-500 font-mono hidden sm:inline-block">
                • {scope}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Showcase Image */}
          <div className="relative rounded-xl overflow-hidden bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-inner group">
            <img
              src={image}
              alt={title}
              className="w-full h-64 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-mono flex items-center gap-1.5">
              <span>{t.modal.sampleBadge}</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-950 dark:text-white tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Deliverables & Software Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {deliverables && deliverables.length > 0 && (
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  {t.modal.deliverablesTitle}
                </h4>
                <ul className="space-y-1.5">
                  {deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tools && tools.length > 0 && (
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  {t.modal.softwareTitle}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-white/10 text-xs font-mono text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-white/[0.02] flex items-center justify-between gap-4">
          <span className="text-xs text-gray-500 hidden sm:inline">
            {t.modal.promptText}
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {t.modal.closeBtn}
            </button>
            <button
              onClick={() => {
                onClose();
                if (onRequestThis) onRequestThis();
              }}
              className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <span>{t.modal.requestBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
