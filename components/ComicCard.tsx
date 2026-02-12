import React from 'react';

interface ComicCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  color?: string;
}

export const ComicCard: React.FC<ComicCardProps> = ({ children, className = '', title, color = 'bg-white' }) => {
  return (
    <div className={`relative border-4 border-black p-6 comic-shadow ${color} ${className}`}>
      {title && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 font-comic text-xl border-2 border-white rotate-[-2deg] z-30 whitespace-nowrap">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};