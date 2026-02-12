import React from 'react';
import { Instagram } from 'lucide-react';
import { Page } from '../types';

interface FloatingInstagramButtonProps {
  onClick: () => void;
}

export const FloatingInstagramButton: React.FC<FloatingInstagramButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 group hover:-translate-y-2 transition-transform duration-300"
      aria-label="Ir al perfil de Instagram"
    >
      <div className="relative">
        {/* Comic Speech Bubble Text */}
        <div className="absolute -top-12 -right-4 bg-white border-2 border-black px-2 py-1 font-comic text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity rounded-lg mb-2 shadow-[2px_2px_0_0_#000]">
          ¡Sígueme!
        </div>

        {/* Button Container with Gradient and Border */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1 border-4 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center">
            <Instagram className="text-white w-8 h-8" />
        </div>
      </div>
    </button>
  );
};