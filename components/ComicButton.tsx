import React from 'react';

interface ComicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
}

export const ComicButton: React.FC<ComicButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "font-comic text-xl uppercase tracking-wider px-6 py-2 border-4 border-black comic-shadow transition-all comic-shadow-hover active:translate-y-1 active:translate-x-1 active:shadow-none";
  
  let colorStyle = "";
  switch(variant) {
    case 'primary':
      colorStyle = "bg-comic-yellow text-black hover:bg-yellow-300";
      break;
    case 'secondary':
      colorStyle = "bg-comic-blue text-white hover:bg-blue-500";
      break;
    case 'accent':
      colorStyle = "bg-comic-red text-white hover:bg-red-400";
      break;
  }

  return (
    <button className={`${baseStyle} ${colorStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};