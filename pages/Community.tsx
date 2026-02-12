import React from 'react';
import { ComicCard } from '../components/ComicCard';
import { ComicButton } from '../components/ComicButton';
import { MapPin, Star, Users, Stethoscope } from 'lucide-react';

export const Community: React.FC = () => {
  const events = [
    { title: "Yoga en el Retiro", date: "22 Feb", loc: "Parque del Retiro, Madrid", desc: "Clase abierta frente al estanque." },
    { title: "Maratón Castellana", date: "15 Mar", loc: "Paseo de la Castellana", desc: "Carrera benéfica 10K." },
    { title: "Calistenia Madrid Río", date: "05 Abr", loc: "Madrid Río, Zona Matadero", desc: "Taller para principiantes." },
    { title: "Caminata Sierra", date: "10 May", loc: "Casa de Campo", desc: "Ruta de senderismo grupal." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 overflow-x-hidden">
      <div className="text-center">
        <h2 className="font-comic text-6xl md:text-8xl text-stroke text-comic-blue drop-shadow-[6px_6px_0_#000]">TU ALIANZA</h2>
        <div className="mt-4 flex justify-center items-center gap-2">
            <Users className="text-comic-dark" size={32} />
            <p className="text-xl md:text-2xl font-action">Encuentra tu Party y sube de nivel.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Featured Professional */}
        <ComicCard title="MENTOR DESTACADO" color="bg-comic-blue" className="text-white h-full pt-16">
            <div className="flex flex-col items-center text-center h-full justify-center">
                <div className="w-32 h-32 bg-white rounded-full border-4 border-black mb-4 overflow-hidden relative shadow-[4px_4px_0_0_#000]">
                        <Stethoscope size={60} className="text-comic-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="font-comic text-2xl mb-1 text-white text-stroke-sm">Dra. Julieth Uribe</h3>
                <p className="font-action text-comic-yellow text-lg mb-2">Medicina Deportiva</p>
                <p className="font-body text-sm leading-tight mb-4">
                    "El movimiento es la mejor medicina preventiva. ¡Únete a nuestra comunidad y transforma tu salud!"
                </p>
                <ComicButton variant="primary" className="text-sm py-1 px-4 w-full">PERFIL PROFESIONAL</ComicButton>
            </div>
        </ComicCard>

        {/* Events */}
        <ComicCard title="PRÓXIMOS EVENTOS" color="bg-comic-yellow" className="h-full pt-16">
            <ul className="space-y-4">
                {events.map((e, i) => (
                    <li key={i} className="bg-white border-4 border-black p-3 flex justify-between items-center shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform cursor-pointer group">
                        <div className="overflow-hidden">
                            <h5 className="font-comic text-lg leading-none group-hover:text-comic-blue transition-colors truncate">{e.title}</h5>
                            <span className="text-xs font-body font-bold text-gray-600 flex items-center gap-1 mt-1"><MapPin size={10}/> {e.loc}</span>
                        </div>
                        <div className="bg-black text-white p-1 w-12 font-comic text-center leading-none border-2 border-white shadow-sm flex-shrink-0 ml-2">
                            <span className="text-lg block">{e.date.split(' ')[0]}</span>
                            <span className="text-[0.6rem] uppercase">{e.date.split(' ')[1]}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </ComicCard>
      </div>

      {/* Testimonials */}
      <div className="py-12 border-t-8 border-dashed border-black">
          <h3 className="font-comic text-5xl text-center mb-12 uppercase">Historias de Éxito</h3>
          <div className="grid md:grid-cols-2 gap-12 px-2">
              <div className="bg-white border-4 border-black p-8 relative shadow-[8px_8px_0_0_#000] transform md:rotate-1">
                  <div className="absolute -top-6 -left-2 md:-left-8 md:top-8 w-14 h-14 bg-comic-red border-4 border-black rounded-full flex items-center justify-center text-white shadow-lg z-10">
                      <Star fill="white" size={28}/>
                  </div>
                  <div className="relative z-0">
                    <p className="font-body font-bold text-lg italic mb-6 leading-relaxed">
                        "Gracias a las guías de la Dra. Uribe, pude correr mi primera carrera sin lesionarme. ¡Stats al máximo!"
                    </p>
                    <div className="flex justify-end items-center gap-2">
                        <div className="text-right">
                            <p className="font-comic text-2xl">Carlos</p>
                            <p className="text-xs font-bold bg-black text-white px-2 inline-block -skew-x-12">Rango: Guerrero</p>
                        </div>
                    </div>
                  </div>
              </div>
              
              <div className="bg-white border-4 border-black p-8 relative shadow-[8px_8px_0_0_#000] transform md:-rotate-1 mt-10 md:mt-0">
                  <div className="absolute -top-6 -right-2 md:-right-8 md:top-8 w-14 h-14 bg-comic-yellow border-4 border-black rounded-full flex items-center justify-center text-black shadow-lg z-10">
                      <Star fill="black" size={28}/>
                  </div>
                  <div className="relative z-0">
                    <p className="font-body font-bold text-lg italic mb-6 leading-relaxed">
                        "Encontrar grupos de entrenamiento cambió mi vida. ¡Ya no entreno sola, ahora tengo una party!"
                    </p>
                    <div className="flex justify-start items-center gap-2">
                        <div className="text-left">
                            <p className="font-comic text-2xl">Ana</p>
                            <p className="text-xs font-bold bg-comic-purple text-white px-2 inline-block -skew-x-12">Rango: Leyenda</p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};