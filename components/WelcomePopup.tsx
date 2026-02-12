import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { ComicButton } from './ComicButton';

export const WelcomePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check localStorage to see if we should show the popup
    const hideUntil = localStorage.getItem('julietApp_popup_hidden_until');
    
    if (hideUntil) {
      const hideUntilDate = parseInt(hideUntil, 10);
      // If current time is past the hidden time, show it. Otherwise keep hidden.
      if (Date.now() > hideUntilDate) {
        setIsOpen(true);
      }
    } else {
      // First visit or cleared storage
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDontShowAgain = () => {
    // Calculate 3 days in milliseconds: 3 * 24 * 60 * 60 * 1000
    const threeDaysInMs = 259200000;
    const expiryTime = Date.now() + threeDaysInMs;
    
    localStorage.setItem('julietApp_popup_hidden_until', expiryTime.toString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Adjusted width for mobile: max-w-[320px] ensures it's smaller on phone screens */}
      <div className="relative bg-white border-4 border-black shadow-[6px_6px_0_0_#FFD93D] md:shadow-[10px_10px_0_0_#FFD93D] w-full max-w-[320px] md:max-w-sm transform rotate-1">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute -top-4 -right-4 bg-comic-red text-white border-2 border-black p-2 hover:scale-110 transition-transform shadow-md z-20"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-2">
            <div className="border-2 border-black relative bg-gray-100">
                {/* Removed max-h constraint and object-cover to prevent zooming/blurring. Added h-auto. */}
                <img 
                    src="https://daleclick.megarifas.uy/wp-content/uploads/2026/02/PHOTO-2026-02-11-23-15-35.jpg" 
                    alt="Promo" 
                    className="w-full h-auto block"
                />
            </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3 flex justify-center bg-white">
            <button 
                onClick={handleDontShowAgain}
                className="text-[10px] md:text-xs font-bold text-gray-500 hover:text-black underline decoration-2 decoration-comic-red uppercase tracking-wider"
            >
                NO VOLVER A MOSTRAR POR 3 DÍAS
            </button>
        </div>
      </div>
    </div>
  );
};