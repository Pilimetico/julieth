import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t-8 border-comic-yellow">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="font-comic text-4xl text-comic-yellow mb-2">JULIETAPP</h3>
        <p className="text-gray-300 text-lg font-body">Transformando vidas a través del movimiento y el estilo.</p>
        <div className="text-gray-600 text-xs mt-8">
            © {new Date().getFullYear()} JulietApp.
        </div>
      </div>
    </footer>
  );
};