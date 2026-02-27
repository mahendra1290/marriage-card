import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';
import { getAudio, playAudio } from '../../utils/audioManager';

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const hasTriedAutoplay = useRef(false);

  // Sync button state with audio events
  useEffect(() => {
    const audio = getAudio();
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    setIsPlaying(!audio.paused);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  // Fallback autoplay on first user gesture (if autoplay was blocked)
  useEffect(() => {
    const tryAutoplay = () => {
      if (hasTriedAutoplay.current) return;
      const audio = getAudio();
      if (!audio.paused) return;
      hasTriedAutoplay.current = true;
      playAudio();
    };

    document.addEventListener('touchstart', tryAutoplay, { once: true, passive: true });
    document.addEventListener('click', tryAutoplay, { once: true });
    return () => {
      document.removeEventListener('touchstart', tryAutoplay);
      document.removeEventListener('click', tryAutoplay);
    };
  }, []);

  const toggle = () => {
    const audio = getAudio();
    if (audio.paused) {
      playAudio();
    } else {
      audio.pause();
    }
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-600 transition-colors text-white"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying && (
        <motion.span
          className="absolute inset-0 rounded-full bg-amber-400 opacity-60"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
    </motion.button>
  );
};
