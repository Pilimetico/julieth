import React, { useState } from 'react';
import { ROUTINES } from '../constants';
import { ComicCard } from '../components/ComicCard';
import { ComicButton } from '../components/ComicButton';
import { Clock, Activity, Dumbbell, Sun, Sword, ArrowLeft, CheckCircle } from 'lucide-react';
import { Routine } from '../types';

export const Routines: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Novato' | 'Guerrero' | 'Leyenda'>('Todos');
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null);

  const filteredRoutines = filter === 'Todos' 
    ? ROUTINES 
    : ROUTINES.filter(r => r.level === filter);

  // Detail View (Mission Mode)
  if (selectedRoutine) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button 
          onClick={() => setSelectedRoutine(null)}
          className="flex items-center gap-2 font-comic text-xl mb-6 hover:text-comic-red transition-colors"
        >
          <ArrowLeft size={24} /> ABANDONAR MISIÓN
        </button>

        <div className="bg-white border-8 border-black p-8 relative shadow-[16px_16px_0_0_#000]">
          <div className="absolute -top-6 -right-6 bg-comic-yellow border-4 border-black p-4 rotate-12 shadow-lg">
             <span className="font-comic text-2xl">EXP: +500</span>
          </div>

          <h2 className="font-comic text-5xl md:text-6xl mb-2 text-comic-blue uppercase leading-none">{selectedRoutine.title}</h2>
          <div className="flex gap-4 mb-8 font-bold font-body text-gray-600">
             <span className="flex items-center gap-1"><Clock size={18}/> {selectedRoutine.duration}</span>
             <span className="flex items-center gap-1"><Sword size={18}/> {selectedRoutine.level}</span>
          </div>

          <div className="space-y-6">
            <h3 className="font-comic text-3xl border-b-4 border-black pb-2">OBJETIVOS DE LA MISIÓN:</h3>
            
            {selectedRoutine.exercises.map((exercise, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                 <div className="w-10 h-10 flex-shrink-0 bg-black text-white font-comic text-2xl flex items-center justify-center border-2 border-white shadow-[4px_4px_0_0_#ccc]">
                   {idx + 1}
                 </div>
                 <div className="flex-grow bg-gray-100 p-4 border-4 border-black group-hover:bg-yellow-50 transition-colors">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                       <h4 className="font-comic text-2xl uppercase text-comic-red">{exercise.name}</h4>
                       <span className="bg-black text-white px-2 py-1 font-bold font-body text-sm transform -skew-x-12">{exercise.reps}</span>
                    </div>
                    <p className="font-body font-bold text-gray-700 mt-2">{exercise.instruction}</p>
                 </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <ComicButton onClick={() => setSelectedRoutine(null)} variant="secondary" className="w-full md:w-auto">
               ¡MISIÓN CUMPLIDA!
             </ComicButton>
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="font-comic text-6xl md:text-8xl mb-6 text-comic-blue text-stroke drop-shadow-[6px_6px_0_#000]">Gremio de Héroes</h2>
        <div className="bg-white border-4 border-black p-4 inline-block transform rotate-1 shadow-[6px_6px_0_0_#000]">
            <p className="font-action text-2xl">Elige tu misión diaria según tu Rango de Poder</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {['Todos', 'Novato', 'Guerrero', 'Leyenda'].map((level) => (
            <button
              key={level}
              onClick={() => setFilter(level as any)}
              className={`font-comic text-2xl px-8 py-2 border-4 border-black transition-all transform hover:-translate-y-1 ${
                  filter === level 
                  ? 'bg-black text-comic-yellow shadow-[6px_6px_0_0_#ffd93d]' 
                  : 'bg-white text-black hover:bg-gray-100 shadow-[6px_6px_0_0_#000]'
              }`}
            >
              {level.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Pillars Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
              { title: "RESISTENCIA", icon: <Activity size={32}/>, desc: "Corazón fuerte" },
              { title: "FUERZA", icon: <Dumbbell size={32}/>, desc: "Músculos de acero" },
              { title: "EQUILIBRIO", icon: <Activity size={32} className="rotate-45"/>, desc: "Control total" },
              { title: "FLEXIBILIDAD", icon: <Sun size={32}/>, desc: "Agilidad felina" },
          ].map((item, i) => (
              <div key={i} className="group bg-comic-white border-4 border-black p-4 text-center hover:bg-comic-blue hover:text-white transition-colors cursor-default shadow-[4px_4px_0_0_#000]">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-comic text-xl mb-1">{item.title}</h4>
                  <p className="font-body text-sm font-bold">{item.desc}</p>
              </div>
          ))}
      </div>

      {/* Routine Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredRoutines.map((routine: Routine) => (
          <ComicCard key={routine.id} className="bg-white flex flex-col h-full hover:shadow-[16px_16px_0_0_#000] hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-6 border-b-4 border-black pb-4 border-dashed">
              <span className={`font-comic px-4 py-1 border-2 border-black text-lg transform -rotate-2 ${
                routine.level === 'Novato' ? 'bg-green-300' : 
                routine.level === 'Guerrero' ? 'bg-orange-400 text-white' : 'bg-purple-600 text-white'
              }`}>
                {routine.level.toUpperCase()}
              </span>
              <div className="flex items-center gap-2 font-bold font-body bg-gray-100 px-2 py-1 border-2 border-black rounded-lg">
                <Clock size={20} /> {routine.duration}
              </div>
            </div>
            
            <div className="flex-grow">
                <h3 className="font-comic text-4xl mb-4 leading-none">{routine.title}</h3>
                <p className="font-body text-lg text-gray-800 leading-relaxed font-semibold">
                    {routine.description}
                </p>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4 font-bold font-action text-gray-500">
                  <Sword size={18}/> 
                  <span className="uppercase">Clase: {routine.type}</span>
              </div>
              <ComicButton 
                className="w-full text-xl py-3 shadow-[4px_4px_0_0_#000]"
                onClick={() => setSelectedRoutine(routine)}
              >
                  ¡INICIAR MISIÓN!
              </ComicButton>
            </div>
          </ComicCard>
        ))}
      </div>

      {/* Safety Warning */}
      <div className="mt-20 bg-comic-yellow border-4 border-black p-8 relative transform rotate-1 mx-4">
          <div className="absolute -top-6 -left-6 bg-comic-red text-white p-4 border-4 border-black font-comic text-2xl rotate-[-10deg] shadow-lg">
              ¡ATENCIÓN!
          </div>
          <h3 className="font-comic text-4xl mb-4 ml-8">PROTOCOLO DE SEGURIDAD</h3>
          <ul className="list-disc pl-12 font-body font-bold text-xl space-y-3">
              <li>Consulta a un Sanador (Médico) si tienes debuffs (enfermedades) activos.</li>
              <li>La hidratación es tu poción de maná. ¡Bebe agua antes y después!</li>
              <li>El calentamiento no es opcional, es la fase de carga. (5 min).</li>
          </ul>
      </div>
    </div>
  );
};