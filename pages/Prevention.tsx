import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { DISEASES } from '../constants';
import { ComicCard } from '../components/ComicCard';
import { ClipboardList, Activity, HeartPulse, AlertCircle, Baby, Scale, Footprints, AlertTriangle } from 'lucide-react';

export const Prevention: React.FC = () => {
  const data = DISEASES.map(d => ({
    name: d.name.split(' ')[0], // Shorten for chart
    full: d.name,
    rate: d.preventionRate,
    desc: d.description
  }));

  const colors = ['#FF6B6B', '#4D96FF', '#FFD93D', '#4ADE80'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center">
        <h2 className="font-comic text-5xl md:text-6xl mb-4 text-stroke">ZONA DE BATALLA</h2>
        <p className="text-xl font-bold bg-comic-yellow inline-block px-4 border-2 border-black rotate-1">
          Inteligencia militar contra enfermedades crónicas
        </p>
      </div>

      {/* Main Stats Chart */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_#000]">
          <h3 className="font-comic text-2xl mb-4 text-center border-b-4 border-black pb-2">
            % DE REDUCCIÓN DE RIESGO
          </h3>
          <div className="h-80 w-full font-bold">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#000" />
                <XAxis type="number" stroke="#000" />
                <YAxis dataKey="name" type="category" stroke="#000" width={100} />
                <Tooltip 
                    cursor={{fill: '#f4f4f4'}}
                    contentStyle={{ border: '3px solid black', boxShadow: '4px 4px 0 0 #000', fontFamily: 'Montserrat' }}
                />
                <Bar dataKey="rate" fill="#8884d8" barSize={30}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} stroke="#000" strokeWidth={2} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          {DISEASES.map((disease, idx) => (
            <div key={idx} className="flex gap-4 items-start">
               <div className="bg-black text-white font-comic text-3xl w-12 h-12 flex items-center justify-center border-2 border-white shadow-md flex-shrink-0">
                 {idx + 1}
               </div>
               <div className="bg-white border-l-8 border-comic-blue p-4 w-full shadow-sm">
                 <h4 className="font-comic text-xl text-comic-dark uppercase">{disease.name}</h4>
                 <p className="text-gray-700 font-medium">{disease.description}</p>
                 <span className="text-sm font-bold text-comic-red block mt-1">
                   PREVENCIÓN: {disease.preventionRate}%
                 </span>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEW SECTION: Clinical Guides & Prescriptions */}
      <div className="pt-12 border-t-8 border-black border-dashed">
         <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
             <div className="bg-comic-red p-3 border-4 border-black text-white">
                 <ClipboardList size={40} />
             </div>
             <h2 className="font-comic text-4xl md:text-6xl uppercase">Códice del Entrenador</h2>
         </div>

         <div className="grid gap-12">
            
            {/* 1. General Principles & Steps */}
            <div className="grid md:grid-cols-2 gap-8">
                <ComicCard title="REGLAS DEL JUEGO (F.I.T.T.)" className="bg-blue-50 pt-16">
                    <ul className="space-y-4 font-body text-sm md:text-base">
                        <li className="flex gap-3">
                            <span className="font-comic text-xl text-comic-blue w-24 text-right">Frecuencia:</span>
                            <span className="font-bold">3-5 veces/semana (Cardio), 2-3 veces (Fuerza). <br/><span className="text-red-600 text-xs uppercase">¡Nunca 7 días seguidos intenso!</span></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-comic text-xl text-comic-blue w-24 text-right">Tiempo:</span>
                            <span className="font-bold">20-30 min (Intenso) o 30-60 min (Moderado).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-comic text-xl text-comic-blue w-24 text-right">Tipo:</span>
                            <span className="font-bold">Músculos grandes: Caminata, Trote, Elíptica.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-comic text-xl text-comic-blue w-24 text-right">Progresión:</span>
                            <span className="font-bold">Aumenta 10-20% cada 3-4 semanas. ¡No tengas prisa!</span>
                        </li>
                    </ul>
                </ComicCard>

                <ComicCard title="TABLA DE NIVELES (PASOS)" className="bg-yellow-50 pt-16">
                    <div className="flex items-center gap-2 mb-4 justify-center">
                        <Footprints size={32} className="text-comic-dark"/>
                        <span className="font-bold text-lg">Meta: 10,000 pasos/día (Adultos Saludables)</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-4 border-black text-sm">
                            <thead className="bg-black text-white font-comic">
                                <tr>
                                    <th className="p-2">Perfil</th>
                                    <th className="p-2">Meta de Pasos</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold">
                                <tr className="border-b-2 border-black bg-white"><td className="p-2">Niños</td><td className="p-2">13,000</td></tr>
                                <tr className="border-b-2 border-black bg-gray-100"><td className="p-2">Adultos</td><td className="p-2">&gt; 7,500</td></tr>
                                <tr className="border-b-2 border-black bg-white"><td className="p-2">Sobrepeso/Obesidad</td><td className="p-2">12,000 - 15,000</td></tr>
                                <tr className="border-b-2 border-black bg-gray-100"><td className="p-2">Mayor Inactivo</td><td className="p-2">7,100 - 8,000</td></tr>
                                <tr className="bg-white"><td className="p-2">Mayor c/ Limitación</td><td className="p-2">4,600 - 5,500</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs mt-2 font-bold text-center text-comic-red">
                        * &gt;7500 pasos disminuye mortalidad cardiovascular un 40%
                    </p>
                </ComicCard>
            </div>

            {/* 2. Specific Conditions */}
            <h3 className="font-comic text-3xl text-center bg-black text-white py-2 transform -skew-x-12 mx-auto px-12 inline-block">ESTRATEGIAS ESPECIALES</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Obesidad */}
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 bg-gray-200 rounded-bl-xl"><Scale size={24}/></div>
                    <h4 className="font-comic text-2xl text-comic-red mb-3 leading-none">SOBREPESO Y OBESIDAD</h4>
                    <ul className="text-sm font-bold space-y-2 list-disc pl-4">
                        <li><span className="bg-yellow-200 px-1">Pausas Activas:</span> 10 min por cada 3 horas sentado.</li>
                        <li>Meta: <span className="text-comic-blue">250-300 min/sem</span> de actividad moderada.</li>
                        <li>Combina: Aeróbico + Fuerza (3 veces/sem).</li>
                        <li>Beneficio: Previene caída metabólica y recupera peso perdido.</li>
                    </ul>
                </div>

                {/* Diabetes */}
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 bg-gray-200 rounded-bl-xl"><Activity size={24}/></div>
                    <h4 className="font-comic text-2xl text-blue-600 mb-3 leading-none">DIABETES TIPO 2</h4>
                    <ul className="text-sm font-bold space-y-2 list-disc pl-4">
                        <li>Fuerza: 2-3 sesiones/sem (no consecutivos).</li>
                        <li><span className="text-red-500">¡ALERTA ROJA!</span> No ejercicio si Glucemia &gt;250 (c/ cetosis) o &gt;300.</li>
                        <li>Evita ejercicio en ayunas.</li>
                        <li>Cuidado con los pies: Calzado cómodo, sin roces.</li>
                    </ul>
                </div>

                {/* Hipertensión */}
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-2 bg-gray-200 rounded-bl-xl"><HeartPulse size={24}/></div>
                    <h4 className="font-comic text-2xl text-purple-600 mb-3 leading-none">HIPERTENSIÓN</h4>
                    <ul className="text-sm font-bold space-y-2 list-disc pl-4">
                        <li>Cardio: 30-60 min la mayoría de días.</li>
                        <li>Ambos: Aeróbico y fuerza son beneficiosos.</li>
                        <li className="bg-red-100 p-1 border border-red-200 rounded">
                            <span className="flex items-center gap-1 text-xs"><AlertCircle size={12}/> Ojo con Beta-bloqueadores:</span>
                            Riesgo de hipotensión post-ejercicio y deshidratación.
                        </li>
                    </ul>
                </div>

                {/* Embarazo */}
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 bg-gray-200 rounded-bl-xl"><Baby size={24}/></div>
                    <h4 className="font-comic text-2xl text-pink-500 mb-3 leading-none">EMBARAZO</h4>
                    <ul className="text-sm font-bold space-y-2 list-disc pl-4">
                        <li><span className="bg-pink-100 px-1">Regla de Oro:</span> Solo con autorización del ginecólogo.</li>
                        <li>Principiantes: No iniciar antes de la <strong>Semana 14</strong>.</li>
                        <li>Evitar: Cabeza declinada y acostada boca arriba mucho tiempo.</li>
                    </ul>
                </div>
            </div>
         </div>
      </div>

      <ComicCard className="bg-comic-white text-center" title="DISCLAIMER">
          <div className="flex flex-col items-center gap-2 pt-8">
             <AlertTriangle size={32} className="text-orange-500" />
             <p className="font-bold">
               Estas recomendaciones están basadas en guías del ACSM (American College of Sports Medicine). <br/>
               Siempre consulta a tu médico antes de iniciar un programa nuevo, especialmente si tienes condiciones preexistentes.
             </p>
          </div>
      </ComicCard>
    </div>
  );
};