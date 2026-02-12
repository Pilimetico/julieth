import React, { useState, useEffect } from 'react';
import { ComicCard } from '../components/ComicCard';
import { ComicButton } from '../components/ComicButton';
import { Lightbulb, Info, Zap } from 'lucide-react';

export const Tools: React.FC = () => {
  // BMI Logic
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
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

  const tips = [
    "Bebe 500ml de agua antes de cada comida para mejorar la digestión.",
    "Duerme entre 7 y 8 horas. ¡Es cuando tus músculos suben de nivel!",
    "Usa las escaleras en lugar del ascensor. Es cardio gratis.",
    "Come proteínas en el desayuno para evitar antojos de media mañana.",
    "Realiza estiramientos suaves al despertar para activar el flujo sanguíneo.",
    "Evita pantallas 1 hora antes de dormir para mejorar tu descanso.",
    "Camina mientras hablas por teléfono. ¡Cada paso cuenta!",
    "Reemplaza los refrescos por agua con limón o té verde.",
    "La constancia vence a la intensidad. Mejor 20 min diarios.",
    "Escucha a tu cuerpo. Si duele mal, para. Si arde bien, sigue."
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTipIndex((prev) => (prev + 1) % tips.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [tips.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <div className="text-center">
        <h2 className="font-comic text-6xl md:text-7xl text-stroke text-comic-purple">
            HERRAMIENTAS DE PODER
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* BMI Calculator */}
        <ComicCard title="ESCANER DE NIVEL (IMC)" color="bg-white" className="pt-16">
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 border-2 border-dashed border-gray-400">
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
            <ComicButton onClick={calculateBMI} className="w-full">ANALIZAR STATS</ComicButton>
            {bmi !== null && (
              <div className="mt-6 p-6 border-4 border-black bg-comic-white text-center animate-bounce shadow-[8px_8px_0_0_#000]">
                <h4 className="font-comic text-xl">RESULTADO:</h4>
                <span className="block font-comic text-6xl my-2">{bmi}</span>
                <span className={`block font-bold text-xl font-body ${getBmiMessage(bmi).color}`}>
                  {getBmiMessage(bmi).text}
                </span>
              </div>
            )}
          </div>
        </ComicCard>

        {/* Tips Carousel moved here */}
        <ComicCard title="TIPS DE SUPERVIVENCIA" color="bg-comic-blue" className="pt-16 text-white h-full">
          <div className="bg-comic-dark border-4 border-black p-8 text-center relative overflow-hidden h-[400px] md:h-full flex flex-col justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <div className="absolute top-4 left-4">
                  <Zap className="text-comic-yellow animate-pulse" size={32} />
              </div>
              <div className={`transition-all duration-500 transform ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <p className="font-action text-3xl md:text-4xl text-white leading-tight drop-shadow-[2px_2px_0_#000]">
                      "{tips[currentTipIndex]}"
                  </p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-30">
                  <Lightbulb size={64} className="text-comic-yellow" />
              </div>
              
              {/* Progress dots */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                  {tips.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full border-2 border-white transition-colors ${i === currentTipIndex ? 'bg-comic-yellow' : 'bg-transparent'}`}
                      />
                  ))}
              </div>
          </div>
        </ComicCard>
      </div>

      {/* Advice Section */}
      <div className="mt-8 bg-black text-white p-10 text-center border-4 border-comic-yellow relative overflow-hidden group shadow-[10px_10px_0_0_#000]">
          <div className="absolute inset-0 bg-halftone opacity-20"></div>
          <h3 className="font-comic text-4xl mb-4 relative z-10 text-comic-yellow group-hover:scale-105 transition-transform">¿NECESITAS MÁS AYUDA?</h3>
          <p className="mb-6 font-body text-xl relative z-10">Consulta a la Dra. Julieth Uribe en nuestra sección de Comunidad o completa la Encuesta.</p>
      </div>
    </div>
  );
};