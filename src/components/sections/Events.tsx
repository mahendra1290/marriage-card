import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import baanImg from '../../assets/event-baan.webp';
import ratijogaImg from '../../assets/event-ratijoga.webp';
import preetibhojImg from '../../assets/event-preetibhoj.webp';
import baaratImg from '../../assets/event-baarat.webp';

const events = [
  { key: 'baan', img: baanImg },
  { key: 'preetibhoj', img: preetibhojImg },
  { key: 'ratijoga', img: ratijogaImg },
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

        {/* ── Mobile: plain stacked cards (image top, text bottom) ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {events.map((event, index) => (
            <motion.div
              key={event.key}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-amber-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Full-width image on top */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={event.img}
                  alt={t(`events.${event.key}.title`)}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Amber accent line */}
              <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-400" />

              {/* Text below */}
              <div className="p-4">
                <h3 className="text-lg font-serif font-bold text-amber-900 mb-1">
                  {t(`events.${event.key}.title`)}
                </h3>
                <p className="text-sm text-amber-700 font-medium mb-0.5">
                  {t(`events.${event.key}.date`)}
                </p>
                <p className="text-sm text-amber-600 font-semibold mb-2">
                  {t(`events.${event.key}.time`)}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t(`events.${event.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Desktop: alternating timeline ── */}
        <div className="relative hidden md:block">
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-amber-300 -translate-x-px" />

          <div className="space-y-16">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={event.key}
                  className={`relative flex items-start gap-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-amber-100 -translate-x-1/2 z-10 mt-6" />

                  {/* Card */}
                  <div className={`w-[calc(50%-2rem)] ${isLeft ? 'pr-12' : 'pl-12'}`}>
                    <motion.div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 group"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={event.img}
                          alt={t(`events.${event.key}.title`)}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-900 mb-2">
                          {t(`events.${event.key}.title`)}
                        </h3>
                        <p className="text-base text-amber-700 font-medium mb-1">
                          {t(`events.${event.key}.date`)}
                        </p>
                        <p className="text-base text-amber-600 font-medium mb-3">
                          {t(`events.${event.key}.time`)}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {t(`events.${event.key}.desc`)}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Invisible spacer for the other side */}
                  <div className="w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
