import React, { useState, useEffect } from 'react';
import { getTestimonials } from '../../config/siteData';
import type { TestimonialItem } from '../../types';
import type { Language } from '../../config/translations';
import { TRANSLATIONS } from '../../config/translations';
import { MessageSquareQuote, Edit3, Star, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface UserReview {
  id: string;
  name: string;
  department: string;
  university: string;
  projectType: string;
  feedback: string;
  rating: number;
  date: string;
}

interface TestimonialsProps {
  currentLang: Language;
}

const STORAGE_KEY = 'studyhub_user_reviews';

const ratingLabels: Record<Language, string[]> = {
  en: ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'],
  tr: ['', 'Kötü', 'Orta', 'İyi', 'Çok İyi', 'Mükemmel'],
  bg: ['', 'Лошо', 'Задоволително', 'Добро', 'Много добро', 'Отлично'],
  el: ['', 'Κακό', 'Μέτριο', 'Καλό', 'Πολύ Καλό', 'Άριστο'],
};

const uiText: Record<Language, {
  addReview: string; yourName: string; department: string; university: string;
  projectType: string; yourReview: string; rating: string; submit: string;
  namePh: string; deptPh: string; uniPh: string; typePh: string; reviewPh: string;
  successMsg: string; userReviews: string; beFirst: string; showForm: string; hideForm: string;
}> = {
  en: {
    addReview: 'Share Your Experience', yourName: 'Your Name', department: 'Department / Faculty',
    university: 'University', projectType: 'Project Type', yourReview: 'Your Review',
    rating: 'Rating', submit: 'Submit Review', namePh: 'e.g. Maria K.', deptPh: 'e.g. Medicine, Architecture…',
    uniPh: 'e.g. Sofia University', typePh: 'e.g. Thesis Formatting', reviewPh: 'Tell us about your experience…',
    successMsg: 'Thank you! Your review has been added.', userReviews: 'Student Reviews',
    beFirst: 'Be the first to share your experience!', showForm: 'Write a Review', hideForm: 'Cancel',
  },
  tr: {
    addReview: 'Deneyimini Paylaş', yourName: 'Adın', department: 'Bölüm / Fakülte',
    university: 'Üniversite', projectType: 'Proje Türü', yourReview: 'Yorumun',
    rating: 'Puan', submit: 'Yorum Gönder', namePh: 'ör. Ayşe K.', deptPh: 'ör. Tıp, Mimarlık…',
    uniPh: 'ör. İstanbul Üniversitesi', typePh: 'ör. Tez Formatlama', reviewPh: 'Deneyimini bizimle paylaş…',
    successMsg: 'Teşekkürler! Yorumun eklendi.', userReviews: 'Öğrenci Yorumları',
    beFirst: 'Deneyimini ilk paylaşan sen ol!', showForm: 'Yorum Yaz', hideForm: 'İptal',
  },
  bg: {
    addReview: 'Споделете опита си', yourName: 'Вашето Име', department: 'Специалност / Факултет',
    university: 'Университет', projectType: 'Вид проект', yourReview: 'Вашият коментар',
    rating: 'Оценка', submit: 'Публикувай', namePh: 'напр. Мария К.', deptPh: 'напр. Медицина, Архитектура…',
    uniPh: 'напр. Софийски университет', typePh: 'напр. Форматиране на дипломна', reviewPh: 'Разкажете ни за вашия опит…',
    successMsg: 'Благодарим! Коментарът ви беше добавен.', userReviews: 'Коментари на студенти',
    beFirst: 'Бъдете първият, споделил своя опит!', showForm: 'Напиши коментар', hideForm: 'Отказ',
  },
  el: {
    addReview: 'Μοιραστείτε την εμπειρία σας', yourName: 'Το Όνομά σας', department: 'Τμήμα / Σχολή',
    university: 'Πανεπιστήμιο', projectType: 'Τύπος Εργασίας', yourReview: 'Η Κριτική σας',
    rating: 'Βαθμολογία', submit: 'Υποβολή Κριτικής', namePh: 'π.χ. Μαρία Κ.', deptPh: 'π.χ. Ιατρική, Αρχιτεκτονική…',
    uniPh: 'π.χ. Πανεπιστήμιο Αθηνών', typePh: 'π.χ. Μορφοποίηση Πτυχιακής', reviewPh: 'Πείτε μας για την εμπειρία σας…',
    successMsg: 'Ευχαριστούμε! Η κριτική σας προστέθηκε.', userReviews: 'Κριτικές Φοιτητών',
    beFirst: 'Γίνετε ο πρώτος που μοιράζεται την εμπειρία του!', showForm: 'Γράψτε Κριτική', hideForm: 'Ακύρωση',
  },
};

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const staticTestimonials = getTestimonials(currentLang);
  const ui = uiText[currentLang];
  const ratingLbls = ratingLabels[currentLang];

  const [userReviews, setUserReviews] = useState<UserReview[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const [form, setForm] = useState({
    name: '', department: '', university: '', projectType: '', feedback: '', rating: 0,
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUserReviews(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  const [ratingError, setRatingError] = useState(false);

  const validate = () => {
    const e: Partial<Record<keyof typeof form, string>> = {};
    if (!form.name.trim()) e.name = '!';
    if (!form.department.trim()) e.department = '!';
    if (!form.feedback.trim()) e.feedback = '!';
    setRatingError(form.rating === 0);
    setErrors(e as Partial<typeof form>);
    return Object.keys(e).length === 0 && form.rating > 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newReview: UserReview = {
      id: `ur-${Date.now()}`,
      name: form.name.trim(),
      department: form.department.trim(),
      university: form.university.trim() || '—',
      projectType: form.projectType.trim() || 'General Support',
      feedback: form.feedback.trim(),
      rating: form.rating,
      date: new Date().toLocaleDateString(
        currentLang === 'tr' ? 'tr-TR' : currentLang === 'bg' ? 'bg-BG' : currentLang === 'el' ? 'el-GR' : 'en-GB',
        { year: 'numeric', month: 'short', day: 'numeric' }
      ),
    };

    const updated = [newReview, ...userReviews];
    setUserReviews(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSubmitted(true);
    setForm({ name: '', department: '', university: '', projectType: '', feedback: '', rating: 0 });
    setTimeout(() => { setSubmitted(false); setShowForm(false); }, 2500);
  };

  const StarRow = ({ interactive = false }: { interactive?: boolean }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          onClick={interactive ? () => setForm(f => ({ ...f, rating: s })) : undefined}
          onMouseEnter={interactive ? () => setHoverRating(s) : undefined}
          onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
          className={`transition-transform ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'}`}
        >
          <Star
            className={`w-5 h-5 transition-colors ${
              s <= (interactive ? (hoverRating || form.rating) : form.rating)
                ? 'text-amber-400 fill-amber-400'
                : 'text-gray-300 dark:text-gray-700'
            }`}
          />
        </button>
      ))}
      {interactive && (hoverRating || form.rating) > 0 && (
        <span className="ml-1 text-xs text-amber-500 font-medium">
          {ratingLbls[hoverRating || form.rating]}
        </span>
      )}
    </div>
  );

  return (
    <section className="py-24 bg-white dark:bg-[#0D0F13] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider border border-brand-200 dark:border-brand-800">
              <span>{t.testimonials.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white">
              {t.testimonials.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-obsidian-850 text-[11px] font-mono text-gray-500 border border-gray-200 dark:border-gray-800">
              <Edit3 className="w-3.5 h-3.5 text-brand-600" />
              <span>STUDY HUB SOFIA</span>
            </div>
            {/* Toggle Form Button */}
            <button
              onClick={() => { setShowForm(v => !v); setSubmitted(false); }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white text-xs font-semibold transition-all shadow-md hover:shadow-brand-500/30 hover:shadow-lg"
            >
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>{showForm ? ui.hideForm : ui.showForm}</span>
              {showForm ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* === Inline Review Form === */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showForm ? 'max-h-[700px] opacity-100 mb-10' : 'max-h-0 opacity-0 mb-0'}`}>
          <div className="rounded-2xl border border-brand-500/25 bg-white dark:bg-[#11141A] shadow-xl shadow-brand-500/5 p-6 sm:p-8">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
              <MessageSquareQuote className="w-4 h-4 text-brand-600" />
              {ui.addReview}
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                <p className="text-sm font-semibold text-gray-800 dark:text-white">{ui.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                      {ui.yourName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder={ui.namePh}
                      className={`w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-[#0A0D12] border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${errors.name ? 'border-red-400' : 'border-gray-200 dark:border-gray-800'}`}
                    />
                  </div>
                  {/* Department */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                      {ui.department} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.department}
                      onChange={e => setForm(f => ({ ...f, department: e.target.value }))}
                      placeholder={ui.deptPh}
                      className={`w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-[#0A0D12] border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${errors.department ? 'border-red-400' : 'border-gray-200 dark:border-gray-800'}`}
                    />
                  </div>
                  {/* University */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                      {ui.university}
                    </label>
                    <input
                      type="text"
                      value={form.university}
                      onChange={e => setForm(f => ({ ...f, university: e.target.value }))}
                      placeholder={ui.uniPh}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-[#0A0D12] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {/* Project Type */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                      {ui.projectType}
                    </label>
                    <input
                      type="text"
                      value={form.projectType}
                      onChange={e => setForm(f => ({ ...f, projectType: e.target.value }))}
                      placeholder={ui.typePh}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-[#0A0D12] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                    {ui.rating} <span className="text-red-500">*</span>
                  </label>
                  <StarRow interactive />
                  {ratingError && <p className="text-[10px] text-red-500 mt-1">Please select a rating</p>}
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                    {ui.yourReview} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={form.feedback}
                    onChange={e => setForm(f => ({ ...f, feedback: e.target.value }))}
                    placeholder={ui.reviewPh}
                    className={`w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-[#0A0D12] border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none ${errors.feedback ? 'border-red-400' : 'border-gray-200 dark:border-gray-800'}`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-all shadow-md hover:shadow-brand-500/25 hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  {ui.submit}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Static Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {staticTestimonials.map((item: TestimonialItem) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#F8F9FA] dark:bg-[#11141A] border border-gray-200/80 dark:border-gray-800 flex flex-col justify-between hover:border-brand-500/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                    <MessageSquareQuote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    {item.projectType}
                  </span>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  {item.feedback}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-200/60 dark:border-gray-800/80">
                <h4 className="text-xs font-bold text-gray-950 dark:text-white">{item.name}</h4>
                <p className="text-[11px] text-brand-600 dark:text-brand-400 font-medium mt-0.5">{item.department}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{item.university}</p>
              </div>
            </div>
          ))}
        </div>

        {/* User Reviews Section */}
        {userReviews.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{ui.userReviews}</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-xs font-bold border border-brand-200 dark:border-brand-800">
                {userReviews.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {userReviews.map(review => (
                <div
                  key={review.id}
                  className="p-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#11141A] border border-brand-500/15 dark:border-brand-500/20 hover:border-brand-500/40 transition-colors relative overflow-hidden"
                >
                  {/* Subtle glow accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 blur-2xl rounded-full pointer-events-none" />

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-700'}`} />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 border border-brand-200/60 dark:border-brand-800/60 shrink-0">
                      {review.projectType}
                    </span>
                  </div>

                  <p className="text-xs text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                    "{review.feedback}"
                  </p>

                  <div className="border-t border-gray-200/60 dark:border-gray-800/80 pt-3 flex items-end justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-gray-950 dark:text-white">{review.name}</h4>
                      <p className="text-[11px] text-brand-600 dark:text-brand-400 font-medium mt-0.5">{review.department}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{review.university}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono shrink-0">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
