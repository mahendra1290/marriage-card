import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const Details: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="details" className="py-20 bg-amber-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif text-amber-900 text-center mb-16"
          children={<>{t('nav.details')}</>}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Details */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-amber-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <Calendar className="text-amber-700 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-serif text-amber-900 mb-2">{t('details.dateTitle')}</h3>
                <p className="text-lg text-amber-800">{t('landing.date')}</p>
                <p className="text-amber-600">{t('details.day')}</p>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-amber-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <Clock className="text-amber-700 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-serif text-amber-900 mb-2">{t('details.timeTitle')}</h3>
                <p className="text-lg text-amber-800">{t('details.startTime')}</p>
                <p className="text-amber-600">{t('details.events')}</p>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-amber-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <MapPin className="text-amber-700 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-serif text-amber-900 mb-2">{t('details.venueTitle')}</h3>
                <p className="text-lg text-amber-800">{t('details.venueName')}</p>
                <p className="text-amber-600">{t('details.venueCity')}</p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border-4 border-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.670692735234!2d74.96426731508246!3d28.29173198255355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914bf912953288d%3A0x6643734006562080!2sChuru%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1676880000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
