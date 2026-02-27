import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import baanImg from '../../assets/event-baan.png';
import ratijogaImg from '../../assets/event-ratijoga.png';
import preetibhojImg from '../../assets/event-preetibhoj.png';
import baaratImg from '../../assets/event-baarat.png';

const events = [
  { key: 'baan', img: baanImg },
  { key: 'ratijoga', img: ratijogaImg },
  { key: 'preetibhoj', img: preetibhojImg },
  { key: 'baarat', img: baaratImg },
];

export const Events: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="events" className="py-12 sm:py-20 bg-amber-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-900 text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('events.title')}
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) / Left line (mobile) */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-1/2 w-0.5 bg-amber-300 md:-translate-x-px" />

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.key}
                  className={`relative flex items-start gap-4 sm:gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-amber-500 rounded-full border-3 sm:border-4 border-amber-100 -translate-x-1/2 z-10 mt-2 md:mt-6" />

                  {/* Spacer for mobile left margin */}
                  <div className="w-8 sm:w-12 flex-shrink-0 md:hidden" />

                  {/* Card */}
                  <div className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-amber-100 group"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Image */}
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={event.img}
                          alt={t(`events.${event.key}.title`)}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-amber-900 mb-1 sm:mb-2">
                          {t(`events.${event.key}.title`)}
                        </h3>
                        <p className="text-sm sm:text-base text-amber-700 font-medium mb-0.5 sm:mb-1">
                          {t(`events.${event.key}.date`)}
                        </p>
                        <p className="text-sm sm:text-base text-amber-600 font-medium mb-2 sm:mb-3">
                          {t(`events.${event.key}.time`)}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {t(`events.${event.key}.desc`)}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Invisible spacer for the other side on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
