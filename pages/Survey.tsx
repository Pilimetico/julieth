import React from 'react';
import { ComicCard } from '../components/ComicCard';
import { ClipboardList, ExternalLink } from 'lucide-react';
import { ComicButton } from '../components/ComicButton';

export const Survey: React.FC = () => {
  // ⚠️ IMPORTANTE: 
  // Pega aquí la URL de tu Google Form. 
  // Para obtenerla: Ve a tu Google Form -> Enviar -> Pestaña "< >" (Insertar HTML) -> Copia la URL que está dentro de src="..."
  // Asegúrate de que termine en "viewform?embedded=true"
  
  // URL de ejemplo (Reemplázala con la tuya):
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdXgJ6y-wQwwXwXwXwXwXwXw/viewform?embedded=true"; 
  
  // Si no tienes la URL aún, puedes dejar esta variable vacía para ver las instrucciones en pantalla:
  // const GOOGLE_FORM_URL = ""; 

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
        {GOOGLE_FORM_URL && !GOOGLE_FORM_URL.includes("1FAIpQLSdXgJ6y") ? (
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
        ) : (
            <div className="flex flex-col items-center justify-center h-[600px] p-8 text-center bg-gray-50">
                <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] max-w-lg">
                    <h3 className="font-comic text-3xl mb-4 text-comic-red">¡FALTA EL LINK DEL FORMULARIO!</h3>
                    <p className="font-body font-bold text-lg mb-6">
                        Para que aparezca tu encuesta aquí, debes editar el archivo <code className="bg-gray-200 px-1 rounded">pages/Survey.tsx</code>.
                    </p>
                    <ol className="text-left list-decimal pl-6 space-y-2 mb-8 font-medium">
                        <li>Crea tu encuesta en <strong>Google Forms</strong>.</li>
                        <li>Dale al botón "Enviar" y ve a la pestaña de "Insertar" (&lt; &gt;).</li>
                        <li>Copia la URL del atributo <code>src</code>.</li>
                        <li>Pégala en la constante <code>GOOGLE_FORM_URL</code>.</li>
                    </ol>
                    <a 
                        href="https://docs.google.com/forms/" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <ComicButton variant="secondary" className="text-lg">
                            IR A GOOGLE FORMS <ExternalLink size={20} className="inline ml-2"/>
                        </ComicButton>
                    </a>
                </div>
            </div>
        )}
      </ComicCard>
    </div>
  );
};