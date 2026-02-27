import React from 'react';
import { motion } from 'framer-motion';

export const CornerOrnaments: React.FC = () => {
  // A delicate royal Indian floral corner SVG path
  const CornerSVG = ({ className }: { className?: string }) => (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute opacity-60 text-amber-700 mix-blend-multiply drop-shadow-sm ${className}`}
    >
      <path
        d="M0 0 L120 0 C120 0 100 20 80 20 C60 20 40 40 40 60 C40 80 20 100 0 120 L0 0 Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M0 0 L100 0 C75 0 60 15 50 25 C40 35 25 50 0 60 L0 0 Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M0 0 L80 0 C65 0 50 10 40 20 C30 30 20 45 0 50 L0 0 Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      {/* Decorative details */}
      <circle cx="20" cy="20" r="4" fill="currentColor" />
      <circle cx="35" cy="15" r="2.5" fill="currentColor" />
      <circle cx="15" cy="35" r="2.5" fill="currentColor" />
      <path d="M 10 10 Q 50 10 70 0" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M 10 10 Q 10 50 0 70" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <CornerSVG className="top-0 left-0" />
        <CornerSVG className="top-0 right-0 transform scale-x-[-1]" />
        <CornerSVG className="bottom-0 left-0 transform scale-y-[-1]" />
        <CornerSVG className="bottom-0 right-0 transform scale-x-[-1] scale-y-[-1]" />
      </motion.div>
    </div>
  );
};
