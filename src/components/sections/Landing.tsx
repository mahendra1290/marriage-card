import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import baraatBg from '../../assets/landing-baraat.webp';

export const Landing: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  const yBg = useTransform(scrollY, [0, 500], [0, 200]);
  const yText = useTransform(scrollY, [0, 300], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
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
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 text-center p-6 sm:p-10 md:p-14 bg-white/30 backdrop-blur-xl rounded-2xl sm:rounded-[3rem] shadow-2xl border border-white/40 max-w-3xl mx-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p
          className="text-amber-700 font-medium tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 uppercase text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t('common.weddingOf')}
        </motion.p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 sm:mb-6 font-bold tracking-tight gold-shimmer">
          {t('landing.title')}
        </h1>
        <div className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto mb-4 sm:mb-6 rounded-full" />
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-serif text-amber-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {t('landing.date')}
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 z-10 text-white flex flex-col items-center gap-1 sm:gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs sm:text-sm font-light tracking-widest uppercase">{t('landing.scroll')}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};
