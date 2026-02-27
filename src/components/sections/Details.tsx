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

  const cards = [
    { icon: Calendar, titleKey: 'details.dateTitle', lines: ['landing.date', 'details.day'] },
    { icon: Clock, titleKey: 'details.timeTitle', lines: ['details.startTime', 'details.events'] },
    { icon: MapPin, titleKey: 'details.venueTitle', lines: ['details.venueName', 'details.venueCity'] },
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Details - staggered cards */}
          <div className="space-y-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.titleKey}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-amber-100 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <card.icon className="text-amber-700 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-serif text-amber-900 mb-2">{t(card.titleKey)}</h3>
                  <p className="text-lg text-amber-800">{t(card.lines[0])}</p>
                  <p className="text-amber-600">{t(card.lines[1])}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border-4 border-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000!2d74.48!3d28.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJaisangsar%2C%20Sardarshahar%2C%20Churu!5e0!3m2!1sen!2sin!4v1676880000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
