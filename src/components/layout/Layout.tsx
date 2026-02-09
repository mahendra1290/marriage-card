import React, { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
