'use client';

import { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
      >
        <Globe className="h-4 w-4" />
        {/* <span className="hidden sm:inline">{t('header.language')}</span> */}
        <span className="text-sm">{currentLanguage?.flag}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex w-full items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-gray-700 ${
                  language === lang.code ? 'bg-gray-700 text-white' : 'text-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
                {language === lang.code && <Check className="h-4 w-4 text-green-400" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
