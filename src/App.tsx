import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { Landing } from './components/sections/Landing';
import { Details } from './components/sections/Details';
import { Events } from './components/sections/Events';
import { Preloader } from './components/layout/Preloader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <Layout>
          <Landing />
          <Details />
          <Events />
        </Layout>
      )}
    </LanguageProvider>
  );
}

export default App;
