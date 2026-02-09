import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <header className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-serif text-amber-900 font-bold">
         V & M
        </div>

        <nav className="hidden md:flex gap-8 items-center text-amber-900 font-medium">
          <a href="#home" className="hover:text-amber-700 transition-colors">{t('nav.home')}</a>
          <a href="#details" className="hover:text-amber-700 transition-colors">{t('nav.details')}</a>
          <a href="#events" className="hover:text-amber-700 transition-colors">{t('nav.events')}</a>
          
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors text-sm"
          >
            {language === 'en' ? 'हिंदी' : 'English'}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-amber-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl absolute w-full p-4 flex flex-col gap-4 shadow-lg">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</a>
          <a href="#details" onClick={() => setIsMenuOpen(false)}>{t('nav.details')}</a>
          <a href="#events" onClick={() => setIsMenuOpen(false)}>{t('nav.events')}</a>
          <button onClick={() => {
            toggleLanguage();
            setIsMenuOpen(false);
          }}>
            {language === 'en' ? 'हिंदी' : 'English'}
          </button>
        </div>
      )}
    </header>
  );
};
