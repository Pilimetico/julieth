import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, Zap } from 'lucide-react';

interface NavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: Page.HOME, label: 'Inicio' },
    { id: Page.PREVENTION, label: 'Prevención' },
    { id: Page.ROUTINES, label: 'Rutinas' },
    { id: Page.TOOLS, label: 'Herramientas' },
    { id: Page.COMMUNITY, label: 'Comunidad' },
    { id: Page.SURVEY, label: 'Encuesta' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-comic-white border-b-4 border-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer transform hover:scale-105 transition-transform"
          onClick={() => setPage(Page.HOME)}
        >
          <div className="bg-comic-red p-2 border-2 border-black rotate-3">
            <Zap className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`font-comic text-xl px-4 py-1 border-2 border-transparent hover:border-black hover:bg-comic-yellow hover:text-black transition-all skew-x-[-10deg] ${currentPage === item.id ? 'bg-black text-comic-yellow border-black' : 'text-black'}`}
            >
              <span className="block skew-x-[10deg]">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden border-2 border-black p-1 bg-comic-yellow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black shadow-xl">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsOpen(false);
                }}
                className={`font-comic text-left text-2xl py-2 px-4 border-l-4 ${currentPage === item.id ? 'border-comic-blue bg-gray-100' : 'border-transparent'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};