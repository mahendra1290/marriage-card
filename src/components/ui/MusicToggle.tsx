import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

export const MusicToggle: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/wedding-music.mp3');
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-600 transition-colors text-white"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
    </motion.button>
  );
};
