import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

export const MusicToggle: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasAutoplayed = useRef(false);

  // Ensure audio element is created once
  const getAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/wedding-music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2;
    }
    return audioRef.current;
  };

  // Autoplay on first user gesture (touch, click, or keydown anywhere on page)
  useEffect(() => {
    const tryAutoplay = () => {
      if (hasAutoplayed.current) return;
      hasAutoplayed.current = true;

      const audio = getAudio();
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Browser still blocked it — user can use the button
          hasAutoplayed.current = false;
        });

      // Remove listeners after first successful trigger
      document.removeEventListener('touchstart', tryAutoplay);
      document.removeEventListener('click', tryAutoplay);
      document.removeEventListener('keydown', tryAutoplay);
      document.removeEventListener('scroll', tryAutoplay);
    };

    document.addEventListener('touchstart', tryAutoplay, { once: true, passive: true });
    document.addEventListener('click', tryAutoplay, { once: true });
    document.addEventListener('keydown', tryAutoplay, { once: true });
    document.addEventListener('scroll', tryAutoplay, { once: true, passive: true });

    return () => {
      document.removeEventListener('touchstart', tryAutoplay);
      document.removeEventListener('click', tryAutoplay);
      document.removeEventListener('keydown', tryAutoplay);
      document.removeEventListener('scroll', tryAutoplay);
    };
  }, []);

  const toggle = () => {
    const audio = getAudio();
    hasAutoplayed.current = true; // manual press counts as autoplayed
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
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
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {/* Pulse ring when playing */}
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
