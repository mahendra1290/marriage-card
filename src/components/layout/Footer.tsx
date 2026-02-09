import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-amber-50 py-8 text-center text-amber-900/60 text-sm">
      <p>&copy; 2026 {t('common.weddingOf')} Vinod & Manisha</p>
      <p className="mt-2">Made with ❤️ for the special day</p>
    </footer>
  );
};
