import { useState, useCallback } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { Landing } from './components/sections/Landing';
import { Details } from './components/sections/Details';
import { Invitation } from './components/sections/Invitation';
import { Events } from './components/sections/Events';
import { Preloader } from './components/layout/Preloader';
import { ConfettiBurst } from './components/ui/ConfettiBurst';
import { AnimatePresence } from 'framer-motion';
import { MusicToggle } from './components/ui/MusicToggle';
import { playAudio } from './utils/audioManager';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  // Called on the user's very first touch on the preloader — valid gesture for mobile audio
  const handleFirstTouch = useCallback(() => {
    playAudio();
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3500);
    playAudio(); // also try on dismiss (works on desktop)
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            key="preloader"
            onComplete={handlePreloaderComplete}
            onFirstTouch={handleFirstTouch}
          />
        )}
      </AnimatePresence>

      <ConfettiBurst show={showConfetti} />

      {!isLoading && (
        <Layout>
          <Landing />
          <Details />
          <Invitation />
          <Events />
          <MusicToggle />
        </Layout>
      )}
    </LanguageProvider>
  );
}

export default App;
