import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = ['#b8860b', '#ffd700', '#dc2626', '#f59e0b', '#fff8dc', '#c2410c', '#ea580c'];

const Particle = ({ index }: { index: number }) => {
  const config = useMemo(() => {
    const angle = (Math.PI * 2 * index) / 70 + (Math.random() - 0.5) * 0.5;
    const velocity = 200 + Math.random() * 400;
    return {
      x: Math.cos(angle) * velocity,
      y: Math.sin(angle) * velocity - 200,
      rotation: Math.random() * 720 - 360,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 4 + Math.random() * 8,
      shape: Math.random() > 0.5 ? 'rounded-full' : 'rounded-sm',
      delay: Math.random() * 0.3,
    };
  }, [index]);

  return (
    <motion.div
      className={`absolute ${config.shape}`}
      style={{
        width: config.size,
        height: config.size,
        backgroundColor: config.color,
        left: '50%',
        top: '50%',
      }}
      initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      animate={{
        x: config.x,
        y: config.y,
        rotate: config.rotation,
        scale: 0,
        opacity: 0,
      }}
      transition={{
        duration: 2 + Math.random(),
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: config.delay,
      }}
    />
  );
};

interface ConfettiBurstProps {
  show: boolean;
  onComplete?: () => void;
}

export const ConfettiBurst: React.FC<ConfettiBurstProps> = ({ show, onComplete }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[55]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={() => {
            setTimeout(() => onComplete?.(), 3000);
          }}
        >
          {Array.from({ length: 70 }, (_, i) => (
            <Particle key={i} index={i} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
