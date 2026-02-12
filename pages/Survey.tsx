import React from 'react';
import { ComicCard } from '../components/ComicCard';
import { ClipboardList } from 'lucide-react';

export const Survey: React.FC = () => {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScBDiEuJATtpLU-GMQu7lA576xaPLoYMA4RHgHc5lDWx4Mjgg/viewform?embedded=true"; 

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-3 bg-comic-yellow border-4 border-black px-6 py-2 shadow-[4px_4px_0_0_#000] transform -rotate-2 mb-6">
            <ClipboardList size={32} />
            <span className="font-comic text-2xl uppercase">Encuesta Oficial</span>
        </div>
        <h2 className="font-comic text-5xl md:text-6xl text-stroke text-white drop-shadow-[4px_4px_0_#000]">
            TU OPINIÓN CUENTA
        </h2>
        <p className="font-body text-xl font-bold mt-4 text-gray-700">
            Ayúdanos a mejorar completando el formulario de la Liga de la Salud.
        </p>
      </div>

      <ComicCard className="bg-white p-0 overflow-hidden min-h-[800px] relative">
        <iframe 
          src={GOOGLE_FORM_URL} 
          width="100%" 
          height="1200" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          className="w-full h-full min-h-[800px]"
          title="Google Form Survey"
        >
          Cargando formulario...
        </iframe>
      </ComicCard>
    </div>
  );
};