import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ganeshaSymbol from '../../assets/ganesha-symbol.webp';
import petal from '../../assets/marigold-petal.webp';
import { playAudio } from '../../utils/audioManager';

interface PreloaderProps {
  onComplete: () => void;
}

const FlowerPetal = ({ index }: { index: number }) => {
  // Random start position
  const randomX = Math.random() * 100;
  const delay = Math.random() * 2;
  const duration = 2 + Math.random() * 2;
  const rotation = Math.random() * 360;

  return (
    <motion.img
      src={petal}
      className="absolute w-6 h-6 md:w-8 md:h-8 opacity-80 mix-blend-multiply"
      initial={{ 
        top: -20, 
        left: `${randomX}%`, 
        rotate: rotation,
        opacity: 0
      }}
      animate={{ 
        top: ['0%', '100%'],
        rotate: rotation + 180 + Math.random() * 180,
        x: [0, Math.sin(index) * 50, 0], // Swaying motion
        opacity: [0, 1, 0]
      }}
      transition={{ 
        duration: duration, 
        ease: "linear", 
        repeat: Infinity, 
        delay: delay 
      }}
    />
  );
};

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [petals, setPetals] = useState<number[]>([]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the "Open" button after 2.5s of animation instead of auto-dismissing
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2500);

    // Create petals
    setPetals(Array.from({ length: 30 }, (_, i) => i));

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    // Explicit user click -> safe to instantiate and play audio
    playAudio();
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-amber-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Flower Shower */}
      {petals.map((i) => (
        <FlowerPetal key={i} index={i} />
      ))}

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
          <p className="text-amber-700/80 text-lg uppercase tracking-widest mb-8">
            Blessings of the Divine
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={handleOpen}
              disabled={!showButton}
              className={`
                bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full 
                font-serif text-xl shadow-lg transition-all duration-300
                flex items-center gap-3 mx-auto
                ${!showButton ? 'pointer-events-none' : 'hover:scale-105 active:scale-95'}
              `}
            >
              Open Invitation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
