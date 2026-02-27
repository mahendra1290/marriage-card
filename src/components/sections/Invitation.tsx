import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Invitation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="invitation" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Decorative corner ornaments - hidden on very small screens */}
      <div className="hidden sm:block absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-amber-300 rounded-tl-3xl opacity-50" />
      <div className="hidden sm:block absolute top-4 right-4 w-24 h-24 border-t-2 border-r-2 border-amber-300 rounded-tr-3xl opacity-50" />
      <div className="hidden sm:block absolute bottom-4 left-4 w-24 h-24 border-b-2 border-l-2 border-amber-300 rounded-bl-3xl opacity-50" />
      <div className="hidden sm:block absolute bottom-4 right-4 w-24 h-24 border-b-2 border-r-2 border-amber-300 rounded-br-3xl opacity-50" />

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center"
        >
          {/* Shloka */}
          <motion.div variants={fadeUp} className="mb-8 sm:mb-10">
            <p className="text-base sm:text-lg md:text-xl text-amber-800 font-serif italic whitespace-pre-line leading-relaxed">
              {t('invitation.shloka')}
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="h-px w-12 sm:w-16 bg-amber-400" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-amber-400 rotate-45" />
            <div className="h-px w-12 sm:w-16 bg-amber-400" />
          </motion.div>

          {/* Blessing text */}
          <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg text-amber-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
            {t('invitation.blessing')}
          </motion.p>

          {/* Groom & Bride cards */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-12"
          >
            {/* Groom */}
            <motion.div
              className="bg-white/60 backdrop-blur-sm p-5 sm:p-8 rounded-2xl shadow-md border border-amber-200 w-full max-w-xs"
              whileHover={{ y: -5 }}
            >
              <p className="text-xs sm:text-sm text-amber-600 uppercase tracking-widest mb-1.5 sm:mb-2">{t('invitation.groom.label')}</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-1.5 sm:mb-2 gold-shimmer">
                {t('invitation.groom.name')}
              </h3>
              <p className="text-xs sm:text-sm text-amber-700 mb-1">{t('invitation.groom.parents')}</p>
              <p className="text-xs text-amber-500 uppercase tracking-wider">{t('invitation.groom.family')}</p>
            </motion.div>

            {/* Weds badge */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center">
                <span className="text-amber-800 font-serif text-xs sm:text-sm md:text-base font-bold">
                  {t('invitation.weds')}
                </span>
              </div>
            </div>

            {/* Bride */}
            <motion.div
              className="bg-white/60 backdrop-blur-sm p-5 sm:p-8 rounded-2xl shadow-md border border-amber-200 w-full max-w-xs"
              whileHover={{ y: -5 }}
            >
              <p className="text-xs sm:text-sm text-amber-600 uppercase tracking-widest mb-1.5 sm:mb-2">{t('invitation.bride.label')}</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-1.5 sm:mb-2 gold-shimmer">
                {t('invitation.bride.name')}
              </h3>
              <p className="text-xs sm:text-sm text-amber-700 mb-1">{t('invitation.bride.parents')}</p>
              <p className="text-xs text-amber-500 uppercase tracking-wider">{t('invitation.bride.family')}</p>
            </motion.div>
          </motion.div>

          {/* Vikram Samvat */}
          <motion.div variants={fadeUp} className="mb-4 sm:mb-6">
            <p className="text-sm sm:text-base md:text-lg text-amber-800 font-serif">
              {t('invitation.samvat')}
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-10 sm:w-12 bg-amber-300" />
            <div className="w-2 h-2 bg-amber-300 rotate-45" />
            <div className="h-px w-10 sm:w-12 bg-amber-300" />
          </motion.div>

          {/* Hosted by */}
          <motion.p variants={fadeUp} className="text-xs sm:text-sm md:text-base text-amber-600 font-medium tracking-wide">
            {t('invitation.hostedBy')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
