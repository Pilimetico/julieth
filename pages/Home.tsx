import React from 'react';
import { ComicButton } from '../components/ComicButton';
import { ComicCard } from '../components/ComicCard';
import { Page } from '../types';
import { Shield, Smile, TrendingUp, Zap, BookOpen, Clock, Coffee, Gamepad2 } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="space-y-16 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-comic-blue text-white border-b-8 border-black pt-16 pb-24 clip-polygon">
        <div className="absolute inset-0 bg-halftone"></div>
        {/* Speed lines effect */}
        <div className="absolute inset-0 bg-speedlines opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 text-center md:text-left space-y-8">
            <div className="inline-block bg-comic-yellow text-black border-4 border-black px-4 py-1 transform -rotate-2 mb-4 shadow-[4px_4px_0_0_#000]">
              <span className="font-action text-xl">¡OBJETIVO: MOVIMIENTO DIARIO!</span>
            </div>
            
            <h1 className="font-comic text-7xl md:text-9xl leading-[0.9] text-stroke drop-shadow-[8px_8px_0_#000]">
              ACTIVA TU <br/>
              <span className="text-comic-yellow italic relative">
                PODER
                <Zap className="absolute -top-8 -right-8 text-comic-red w-16 h-16 animate-bounce" fill="currentColor" stroke="black" strokeWidth={3}/>
              </span>
            </h1>
            
            <div className="bg-black/20 p-4 border-l-4 border-comic-yellow backdrop-blur-sm">
                <p className="font-body text-xl md:text-2xl text-white font-bold drop-shadow-[2px_2px_0_#000]">
                  Reclutando Héroes de <span className="text-comic-yellow text-3xl font-comic">6 a 65 años</span>.
                  <br/>Tu misión: Vencer al sedentarismo.
                </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center md:justify-start">
              <ComicButton onClick={() => setPage(Page.ROUTINES)} className="text-3xl">
                EMPEZAR
              </ComicButton>
              <ComicButton variant="accent" onClick={() => setPage(Page.PREVENTION)}>
                VER BENEFICIOS
              </ComicButton>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center perspective-1000">
             {/* Dynamic Image Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 transform md:rotate-3 transition-transform hover:rotate-0 duration-500">
                <div className="absolute inset-0 bg-comic-red rounded-full border-4 border-black transform translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 bg-comic-yellow rounded-full border-4 border-black transform -translate-x-4 -translate-y-4"></div>
                <img 
                    src="https://daleclick.megarifas.uy/wp-content/uploads/2026/02/630456213_1397100605066339_7755263241029028324_n.jpg" 
                    alt="Active Hero" 
                    className="relative w-full h-full object-cover rounded-full border-8 border-black grayscale-[20%] contrast-125 hover:grayscale-0 transition-all duration-500 z-10"
                />
                
                {/* Speech Bubble */}
                <div className="absolute -bottom-8 -left-8 bg-white text-black border-4 border-black p-4 font-action text-xl z-20 shadow-[6px_6px_0_0_#000] rounded-tr-3xl rounded-bl-3xl">
                    Dra Julieth Uribe
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Academy Section - Concepts */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
            <BookOpen size={48} className="text-comic-dark"/>
            <h2 className="font-comic text-5xl md:text-6xl text-comic-dark">LA ACADEMIA</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#4D96FF] relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-comic-blue text-white font-comic px-4 py-2 border-l-4 border-b-4 border-black z-10">
                    NIVEL 1
                </div>
                <h3 className="font-comic text-4xl mb-4 text-comic-blue">ACTIVIDAD FÍSICA</h3>
                <p className="font-body font-bold text-lg mb-4">
                    Cualquier movimiento corporal producido por los músculos que gaste energía. ¡Todo cuenta!
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 border-2 border-black p-2 text-center transform -rotate-1">
                        <span className="block text-2xl">🐕</span> Pasear al perro
                    </div>
                    <div className="bg-gray-100 border-2 border-black p-2 text-center transform rotate-1">
                        <span className="block text-2xl">🧹</span> Limpiar la casa
                    </div>
                    <div className="bg-gray-100 border-2 border-black p-2 text-center transform rotate-2">
                        <span className="block text-2xl">🕺</span> Bailar
                    </div>
                    <div className="bg-gray-100 border-2 border-black p-2 text-center transform -rotate-2">
                        <span className="block text-2xl">🚶</span> Caminar al cole/trabajo
                    </div>
                </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#FF6B6B] relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-comic-red text-white font-comic px-4 py-2 border-l-4 border-b-4 border-black z-10">
                    NIVEL 2
                </div>
                <h3 className="font-comic text-4xl mb-4 text-comic-red">EJERCICIO</h3>
                <p className="font-body font-bold text-lg mb-4">
                    Actividad física planificada, estructurada y repetitiva con un objetivo (mejorar forma física).
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 border-2 border-black p-2 text-center transform rotate-1">
                        <span className="block text-2xl">🏋️</span> Gimnasio
                    </div>
                    <div className="bg-gray-100 border-2 border-black p-2 text-center transform -rotate-1">
                        <span className="block text-2xl">⚽</span> Fútbol / Deportes
                    </div>
                    <div className="bg-gray-100 border-2 border-black p-2 text-center transform -rotate-2">
                        <span className="block text-2xl">🧘</span> Yoga
                    </div>
                    <div className="bg-gray-100 border-2 border-black p-2 text-center transform rotate-2">
                        <span className="block text-2xl">🏃</span> Running
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="font-comic text-6xl md:text-7xl uppercase text-black inline-block relative z-10">
            ¿Por qué Moverte?
          </h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-12 bg-comic-yellow -rotate-1 border-4 border-black z-0"></div>
          <p className="text-2xl font-body font-bold mt-4 text-gray-700">Desbloquea habilidades especiales para tu cuerpo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
            <ComicCard title="DEFENSA FÍSICA" color="bg-white">
                <div className="flex justify-center mb-6">
                   <div className="bg-comic-blue p-4 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000]">
                      <Shield size={64} strokeWidth={2.5} className="text-white" />
                   </div>
                </div>
                <h3 className="font-comic text-3xl mb-3 text-center uppercase">Inmunidad +100</h3>
                <p className="font-body text-lg text-center leading-relaxed">
                  Combate villanos como la <span className="font-action text-comic-red">Diabetes</span> y la Hipertensión. ¡Vuelve tu cuerpo una fortaleza!
                </p>
            </ComicCard>

            <ComicCard title="SALUD MENTAL" color="bg-comic-yellow">
                <div className="flex justify-center mb-6">
                    <div className="bg-comic-red p-4 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000]">
                      <Smile size={64} strokeWidth={2.5} className="text-white" />
                    </div>
                </div>
                <h3 className="font-comic text-3xl mb-3 text-center uppercase">Moral Alta</h3>
                <p className="font-body text-lg text-center leading-relaxed">
                  Destruye el estrés y la ansiedad con un <span className="font-action text-black font-black">Golpe Crítico</span> de endorfinas.
                </p>
            </ComicCard>

            <ComicCard title="LONGEVIDAD" color="bg-white">
                <div className="flex justify-center mb-6">
                    <div className="bg-green-500 p-4 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000]">
                      <TrendingUp size={64} strokeWidth={2.5} className="text-white" />
                    </div>
                </div>
                <h3 className="font-comic text-3xl mb-3 text-center uppercase">Tiempo Extra</h3>
                <p className="font-body text-lg text-center leading-relaxed">
                  Mejora tu calidad de sueño y extiende tu partida en este mundo. <span className="font-action">¡No hay Game Over!</span>
                </p>
            </ComicCard>
        </div>
      </section>

      {/* Call to Action - Break Sedentarism */}
      <section className="bg-comic-dark text-white py-20 transform skew-y-2 border-y-8 border-comic-red mb-10">
          <div className="max-w-5xl mx-auto px-4 text-center transform -skew-y-2">
              <h2 className="font-comic text-5xl md:text-7xl text-comic-red mb-8 text-stroke">
                  ¡EL ENEMIGO ES EL SILLÓN!
              </h2>
              <div className="bg-white text-black p-8 border-4 border-black inline-block shadow-[8px_8px_0_0_#eb4d4b] mb-8">
                <p className="text-2xl md:text-3xl font-body font-bold leading-relaxed">
                    Estar sentado más de 6 horas es como recibir daño constante (DoT). <br/>
                    <span className="text-comic-red font-black text-4xl font-comic block mt-2">¡ROMPE EL CICLO!</span>
                </p>
              </div>

              {/* Age Specific Advice */}
              <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                  <div className="bg-comic-blue border-4 border-black p-4 shadow-[4px_4px_0_0_#000]">
                      <div className="flex items-center gap-2 mb-2">
                          <Gamepad2 size={32} className="text-white"/>
                          <h4 className="font-comic text-2xl text-white">RECLUTAS (6-18 AÑOS)</h4>
                      </div>
                      <ul className="list-disc pl-5 font-bold font-body">
                          <li>Máximo 2 horas de pantallas al día.</li>
                          <li>¡Juega al aire libre 60 min diarios!</li>
                          <li>Ve al cole caminando o en bici.</li>
                      </ul>
                  </div>
                  <div className="bg-comic-yellow text-black border-4 border-black p-4 shadow-[4px_4px_0_0_#000]">
                      <div className="flex items-center gap-2 mb-2">
                          <Coffee size={32} className="text-black"/>
                          <h4 className="font-comic text-2xl">VETERANOS (19-65+ AÑOS)</h4>
                      </div>
                      <ul className="list-disc pl-5 font-bold font-body">
                          <li>Pausas activas cada hora de trabajo.</li>
                          <li>Usa escaleras, no ascensores.</li>
                          <li>150 min de actividad moderada semanal.</li>
                      </ul>
                  </div>
              </div>

              <div className="mt-12">
                <ComicButton variant="accent" onClick={() => setPage(Page.ROUTINES)} className="animate-pulse">
                    VER TÉCNICAS DE COMBATE
                </ComicButton>
              </div>
          </div>
      </section>
    </div>
  );
};