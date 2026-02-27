import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { Landing } from './components/sections/Landing';
import { Details } from './components/sections/Details';
import { Invitation } from './components/sections/Invitation';
import { Events } from './components/sections/Events';
import { Preloader } from './components/layout/Preloader';
import { ConfettiBurst } from './components/ui/ConfettiBurst';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3500);
  };

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      <ConfettiBurst show={showConfetti} />

      {!isLoading && (
        <Layout>
          <Landing />
          <Details />
          <Invitation />
          <Events />
        </Layout>
      )}
    </LanguageProvider>
  );
}

export default App;
