import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import baraatBg from '../../assets/landing-baraat.webp';
import { GoldDust } from '../ui/GoldDust';
import { Countdown } from '../ui/Countdown';

export const Landing: React.FC = () => {
  const { t, language } = useLanguage();
  const { scrollY } = useScroll();

  const yBg = useTransform(scrollY, [0, 500], [0, 200]);
  const yText = useTransform(scrollY, [0, 300], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-[100dvh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <img
          src={baraatBg}
          alt="Wedding Baraat Background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/10" />
        <GoldDust />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 text-center p-6 sm:p-8 md:p-10 bg-white/30 backdrop-blur-xl rounded-2xl sm:rounded-[3rem] shadow-2xl border border-white/40 max-w-3xl mx-4 mt-16 sm:mt-24 md:mt-32"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p
          className="text-amber-700 font-medium tracking-[0.15em] sm:tracking-[0.2em] mb-2 sm:mb-3 uppercase text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t('common.weddingOf')}
        </motion.p>
        <h1 
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-3 sm:mb-4 font-medium tracking-normal gold-shimmer py-2 ${
            language === 'hi' ? 'font-hindi-script tracking-wider' : 'font-script'
          }`}
        >
          {t('landing.title')}
        </h1>
        <div className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto mb-3 sm:mb-4 rounded-full" />
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-serif text-amber-900 mb-2 sm:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {t('landing.date')}
        </motion.p>

        <Countdown />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 sm:bottom-12 z-10 flex flex-col items-center gap-3 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm sm:text-base md:text-lg font-medium tracking-widest uppercase text-white drop-shadow-md bg-black/30 px-6 py-2 rounded-full backdrop-blur-md border border-white/40 group-hover:bg-black/40 group-hover:border-white/60 transition-all">
          {t('landing.scroll')}
        </span>
        <motion.div
          className="text-white drop-shadow-xl mt-1"
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={48} strokeWidth={2.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};
