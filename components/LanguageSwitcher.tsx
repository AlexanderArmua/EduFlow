'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'en', flag: '🇺🇸', label: 'English' },
    { code: 'es', flag: '🇦🇷', label: 'Español' },
    { code: 'ja', flag: '🇯🇵', label: '日本語' },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
            language === lang.code
              ? 'bg-salesforce-blue text-white shadow-md'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          title={lang.label}
        >
          <span className="text-xl">{lang.flag}</span>
          <span className="text-sm font-medium hidden sm:inline">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
