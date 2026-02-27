import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Calendar, MapPin, Clock } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export const Details: React.FC = () => {
  const { t } = useLanguage();

  const VENUE_LAT = 28.451;
  const VENUE_LNG = 74.639583;
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${VENUE_LAT},${VENUE_LNG}`;

  const cards = [
    { icon: Calendar, titleKey: 'details.dateTitle', lines: ['landing.date', 'details.day'], href: null },
    { icon: Clock, titleKey: 'details.timeTitle', lines: ['details.startTime', 'details.events'], href: null },
    { icon: MapPin, titleKey: 'details.venueTitle', lines: ['details.venueName', 'details.venueCity'], href: mapsUrl },
  ];

  return (
    <section id="details" className="py-20 bg-amber-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-amber-900 text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('nav.details')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Text Details - staggered cards */}
          <div className="flex flex-col gap-6 md:h-[500px]">
            {cards.map((card, i) => (
              <motion.div
                key={card.titleKey}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-amber-100 flex items-start gap-4 hover:shadow-md transition-shadow flex-1 ${card.href ? 'cursor-pointer group' : ''}`}
                onClick={() => card.href && window.open(card.href, '_blank')}
              >
                <card.icon className="text-amber-700 mt-1 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h3 className="text-2xl font-serif text-amber-900 mb-2">{t(card.titleKey)}</h3>
                  <p className="text-lg text-amber-800">{t(card.lines[0])}</p>
                  <p className="text-amber-600">{t(card.lines[1])}</p>
                  {card.href && (
                    <span className="inline-flex items-center gap-1 mt-2 text-sm text-amber-700 font-medium group-hover:underline">
                      📍 Get Directions →
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border-4 border-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src={`https://maps.google.com/maps?q=${VENUE_LAT},${VENUE_LNG}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location"
            />

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-sm font-medium px-5 py-2 rounded-full shadow-lg hover:bg-amber-800 transition-colors flex items-center gap-2"
            >
              📍 Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
