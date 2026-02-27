import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const WEDDING_DATE = new Date('2026-03-09T16:15:00+05:30').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (): TimeLeft => {
  const diff = Math.max(0, WEDDING_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const FlipDigit = ({ value, label }: { value: number; label: string }) => {
  const display = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <div className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-28 md:h-32 bg-amber-900 rounded-lg sm:rounded-xl shadow-lg overflow-hidden border-2 border-amber-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            key={value}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-100 font-mono flip-digit"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {display}
          </motion.span>
        </div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-amber-800/50" />
      </div>
      <span className="text-xs sm:text-sm md:text-base text-amber-700 font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};

export const Countdown: React.FC = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-amber-50 to-orange-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-serif text-amber-900 text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('countdown.title')}
        </motion.h2>

        <motion.div
          className="flex justify-center gap-3 sm:gap-4 md:gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FlipDigit value={timeLeft.days} label={t('countdown.days')} />
          <FlipDigit value={timeLeft.hours} label={t('countdown.hours')} />
          <FlipDigit value={timeLeft.minutes} label={t('countdown.minutes')} />
          <FlipDigit value={timeLeft.seconds} label={t('countdown.seconds')} />
        </motion.div>
      </div>
    </section>
  );
};
