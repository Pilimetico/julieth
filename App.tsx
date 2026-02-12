import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Prevention } from './pages/Prevention';
import { Routines } from './pages/Routines';
import { Tools } from './pages/Tools';
import { Community } from './pages/Community';
import { Survey } from './pages/Survey';
import { InstagramProfile } from './pages/InstagramProfile';
import { FloatingInstagramButton } from './components/FloatingInstagramButton';
import { WelcomePopup } from './components/WelcomePopup';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch(currentPage) {
      case Page.HOME: return <Home setPage={setCurrentPage} />;
      case Page.PREVENTION: return <Prevention />;
      case Page.ROUTINES: return <Routines />;
      case Page.TOOLS: return <Tools />;
      case Page.COMMUNITY: return <Community />;
      case Page.SURVEY: return <Survey />;
      case Page.INSTAGRAM: return <InstagramProfile setPage={setCurrentPage} />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  // If we are on the Instagram page, we want to hide the standard Navigation and Footer for immersion
  const isInstagramPage = currentPage === Page.INSTAGRAM;

  return (
    <div className="min-h-screen flex flex-col bg-comic-white selection:bg-comic-yellow selection:text-black relative">
      <WelcomePopup />
      
      {!isInstagramPage && <Navigation currentPage={currentPage} setPage={setCurrentPage} />}
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {!isInstagramPage && <Footer />}
      
      {/* Floating Action Button - Only show on main app pages */}
      {!isInstagramPage && (
        <FloatingInstagramButton onClick={() => setCurrentPage(Page.INSTAGRAM)} />
      )}
    </div>
  );
};

export default App;