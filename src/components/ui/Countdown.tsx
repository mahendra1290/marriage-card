import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Target: March 9, 2026 at 4:15 PM (16:15) IST (UTC+5:30)
const WEDDING_DATE = new Date('2026-03-09T16:15:00+05:30').getTime();

export const Countdown: React.FC = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const difference = WEDDING_DATE - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft(); // Initial call
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  const timeBlocks = [
    { label: t('countdown.days') || 'Days', value: timeLeft.days },
    { label: t('countdown.hours') || 'Hours', value: timeLeft.hours },
    { label: t('countdown.minutes') || 'Mins', value: timeLeft.minutes },
    { label: t('countdown.seconds') || 'Secs', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      className="flex gap-4 sm:gap-6 justify-center mt-6 sm:mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="bg-amber-900/40 backdrop-blur-md border border-amber-300/30 rounded-xl w-14 h-16 sm:w-20 sm:h-24 flex items-center justify-center shadow-inner relative overflow-hidden group">
            {/* Subtle gloss effect */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-white/10" />
            
            <motion.span
              key={block.value} // Key forces re-animation on value change
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-4xl font-serif text-amber-50 font-medium z-10"
            >
              {block.value.toString().padStart(2, '0')}
            </motion.span>
          </div>
          <span className="text-[10px] sm:text-xs text-amber-800 font-medium uppercase tracking-widest mt-2">
            {block.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
};
