import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ganeshaSymbol from '../../assets/ganesha-symbol.png';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  useEffect(() => {
    // Determine total animation time
    const timer = setTimeout(() => {
      onComplete();
    }, 4500); // 4.5 seconds total duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-amber-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing Circle Background */}
        <motion.div
          className="absolute inset-0 bg-amber-200/50 rounded-full blur-3xl"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0.8 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Ganesha Image */}
        <motion.img
          src={ganeshaSymbol}
          alt="Lord Ganesha"
          className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 mix-blend-multiply"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Mantra Text */}
        <motion.div
          className="mt-8 text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-3xl md:text-4xl text-amber-800 font-serif font-bold mb-2">
            श्री गणेशाय नमः
          </p>
          <p className="text-amber-700/80 text-lg uppercase tracking-widest">
            Blessings of the Divine
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
