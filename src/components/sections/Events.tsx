import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import mehendiImg from '../../assets/event-mehendi.png';
import sangeetImg from '../../assets/event-sangeet.png';
import weddingImg from '../../assets/event-wedding.png';

export const Events: React.FC = () => {
  const { t } = useLanguage();

  const events = [
    { key: 'mehendi', img: mehendiImg },
    { key: 'sangeet', img: sangeetImg },
    { key: 'wedding', img: weddingImg },
  ];

  return (
    <section id="events" className="py-20 bg-amber-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif text-amber-900 text-center mb-16"
          children={<>{t('events.title')}</>}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={event.key}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={event.img} 
                  alt={t(`events.${event.key}.title`)} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-1 drop-shadow-md">{t(`events.${event.key}.title`)}</h3>
                <p className="text-amber-200 font-medium mb-2 drop-shadow-sm">{t(`events.${event.key}.date`)}</p>
                <p className="text-sm text-gray-100 opacity-90 font-medium drop-shadow-sm">{t(`events.${event.key}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
