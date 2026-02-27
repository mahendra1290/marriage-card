import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const PETAL_COLORS = ['#f59e0b', '#f97316', '#ef4444', '#eab308', '#fb923c', '#fbbf24'];

const Petal = ({ index }: { index: number }) => {
  const config = useMemo(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
    size: 10 + Math.random() * 12,
    rotation: Math.random() * 360,
    swayAmount: 30 + Math.random() * 60,
    opacity: 0.35 + Math.random() * 0.3,
    color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
  }), []);

  return (
    <motion.div
      className="absolute"
      style={{
        width: config.size,
        height: config.size * 1.3,
        left: `${config.left}%`,
        backgroundColor: config.color,
        borderRadius: '50% 50% 50% 0%',
      }}
      initial={{ top: '-5%', rotate: config.rotation, opacity: 0 }}
      animate={{
        top: '105%',
        rotate: config.rotation + 180 + Math.random() * 180,
        x: [0, config.swayAmount, -config.swayAmount, 0],
        opacity: [0, config.opacity, config.opacity, 0],
      }}
      transition={{
        duration: config.duration,
        ease: 'linear',
        repeat: Infinity,
        delay: config.delay,
      }}
    />
  );
};

export const FloatingPetals: React.FC = () => {
  const petals = useMemo(() => Array.from({ length: 10 }, (_, i) => i), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {petals.map((i) => (
        <Petal key={i} index={i} />
      ))}
    </div>
  );
};
