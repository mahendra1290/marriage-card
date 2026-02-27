import React, { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingPetals } from '../ui/FloatingPetals';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { MusicToggle } from '../ui/MusicToggle';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <FloatingPetals />
      <WhatsAppButton />
      <MusicToggle />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
