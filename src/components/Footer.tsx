'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logos/Logo04.png" alt="Phim Drama Logo" className="h-12 w-auto" />
              {/* <span className="text-xl font-bold text-white">Phim Drama</span> */}
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.madeWithLove')} ❤️ {t('footer.forMovieLovers')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.about')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.help')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.support')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2024 Phim Drama. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}
