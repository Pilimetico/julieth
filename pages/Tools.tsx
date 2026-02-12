import React, { useState, useEffect } from 'react';
import { ComicCard } from '../components/ComicCard';
import { ComicButton } from '../components/ComicButton';
import { Lightbulb, Info } from 'lucide-react';

export const Tools: React.FC = () => {
  // BMI Logic
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m
    if (w > 0 && h > 0) {
      setBmi(Math.round((w / (h * h)) * 10) / 10);
    }
  };

  const getBmiMessage = (value: number) => {
    if (value < 18.5) return { text: "Rango: Peso Bajo. ¡Necesitas loot (comida)!", color: "text-blue-600" };
    if (value < 25) return { text: "Rango: Saludable. ¡Stats Óptimos!", color: "text-green-600" };
    if (value < 30) return { text: "Rango: Sobrepeso. ¡Alerta Naranja!", color: "text-orange-600" };
    return { text: "Rango: Obesidad. ¡BOSS FIGHT! Requiere estrategia inmediata.", color: "text-red-600" };
  };

  // Tips Logic
  const tips = [
    "Bebe 500ml de agua antes de cada comida para mejorar la digestión.",
    "Duerme entre 7 y 8 horas. ¡Es cuando tus músculos suben de nivel!",
    "Usa las escaleras en lugar del ascensor. Es cardio gratis.",
    "Come proteínas en el desayuno para evitar antojos de media mañana.",
    "Realiza estiramientos suaves al despertar para activar el flujo sanguíneo.",
    "Evita pantallas 1 hora antes de dormir para mejorar tu descanso (Buff de sueño).",
    "Camina mientras hablas por teléfono. ¡Cada paso cuenta!",
    "Reemplaza los refrescos por agua con limón o té verde.",
    "La constancia vence a la intensidad. Mejor 20 min diarios que 2 horas el domingo.",
    "Escucha a tu cuerpo. Si duele mal, para. Si arde bien, sigue."
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentTipIndex((prev) => (prev + 1) % tips.length);
        setFade(true); // Start fade in
      }, 500); // Wait for fade out to finish
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [tips.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <div className="text-center">
        <h2 className="font-comic text-6xl md:text-7xl text-stroke text-comic-purple drop-shadow-[4px_4px_0_#000]">
            HERRAMIENTAS DE PODER
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        
        {/* BMI Calculator */}
        <ComicCard title="ESCANER DE NIVEL (IMC)" color="bg-white" className="pt-16">
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 border-2 border-dashed border-gray-400">
                <p className="font-body text-sm mb-4">Ingresa tus datos para calcular tu estado actual.</p>
                <div className="space-y-4">
                    <div>
                    <label className="block font-comic text-2xl mb-1">Peso (kg)</label>
                    <input 
                        type="number" 
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full border-4 border-black p-3 font-bold text-xl focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0_0_#000] transition-shadow"
                        placeholder="Ej: 70"
                    />
                    </div>
                    <div>
                    <label className="block font-comic text-2xl mb-1">Altura (cm)</label>
                    <input 
                        type="number" 
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full border-4 border-black p-3 font-bold text-xl focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0_0_#000] transition-shadow"
                        placeholder="Ej: 175"
                    />
                    </div>
                </div>
            </div>
            
            <ComicButton onClick={calculateBMI} className="w-full">ANALIZAR</ComicButton>
            
            {bmi !== null && (
              <div className="mt-6 p-6 border-4 border-black bg-comic-white text-center animate-bounce shadow-[8px_8px_0_0_#000]">
                <h4 className="font-comic text-xl">RESULTADO DEL ESCANER:</h4>
                <span className="block font-comic text-6xl my-2">{bmi}</span>
                <span className={`block font-bold text-xl font-body ${getBmiMessage(bmi).color}`}>
                  {getBmiMessage(bmi).text}
                </span>
              </div>
            )}
          </div>
        </ComicCard>

        {/* Tips Carousel */}
        <ComicCard title="TIPS DE SUPERVIVENCIA" color="bg-comic-dark" className="text-white pt-16">
          <div className="bg-comic-blue border-4 border-black h-[500px] flex flex-col items-center justify-center p-8 relative shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] overflow-hidden">
             
             {/* Background Patterns */}
             <div className="absolute inset-0 bg-halftone opacity-20"></div>
             <Lightbulb className="absolute top-4 right-4 text-comic-yellow animate-pulse" size={48} />
             
             <div className="z-10 text-center w-full">
                <div className="bg-black text-comic-yellow inline-block px-4 py-1 font-comic text-xl border-2 border-white transform -rotate-2 mb-8 shadow-lg">
                    CONSEJO #{currentTipIndex + 1}
                </div>
                
                <div className={`transition-opacity duration-500 transform ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <p className="font-action text-3xl md:text-4xl text-white leading-relaxed drop-shadow-[4px_4px_0_#000]">
                        "{tips[currentTipIndex]}"
                    </p>
                </div>
             </div>

             {/* Progress Bar */}
             <div className="absolute bottom-8 left-8 right-8 h-4 bg-black border-2 border-white rounded-full overflow-hidden">
                 <div 
                    className="h-full bg-comic-yellow transition-all duration-500"
                    style={{ width: `${((currentTipIndex + 1) / tips.length) * 100}%` }}
                 ></div>
             </div>
          </div>
        </ComicCard>
      </div>

      {/* Directory Teaser */}
      <div className="mt-8 bg-black text-white p-10 text-center border-4 border-comic-yellow relative overflow-hidden group">
          <div className="absolute inset-0 bg-halftone opacity-20"></div>
          <h3 className="font-comic text-4xl mb-4 relative z-10 text-comic-yellow group-hover:scale-105 transition-transform">¿NECESITAS MÁS AYUDA?</h3>
          <p className="mb-6 font-body text-xl relative z-10">Consulta a la Dra. Julieth Uribe en nuestra sección de Comunidad.</p>
      </div>
    </div>
  );
};