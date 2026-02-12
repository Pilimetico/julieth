import { Benefit, Disease, Routine } from './types';
import { Heart, Brain, Zap, Shield, Users, Trophy } from 'lucide-react';

export const BENEFITS: Benefit[] = [
  {
    title: "Escudo Cardiovascular",
    description: "Fortalece tu corazón y reduce drásticamente el riesgo de infartos.",
    icon: "Heart"
  },
  {
    title: "Mente de Acero",
    description: "Reduce la ansiedad y el estrés. ¡Aumenta tu enfoque mental!",
    icon: "Brain"
  },
  {
    title: "Energía Infinita",
    description: "Combate la fatiga y mejora la calidad de tu sueño nocturno.",
    icon: "Zap"
  }
];

export const DISEASES: Disease[] = [
  { name: "Diabetes Tipo 2", preventionRate: 50, description: "El ejercicio regula el azúcar en sangre." },
  { name: "Enfermedades Cardiovasculares", preventionRate: 40, description: "Mejora la circulación y presión arterial." },
  { name: "Hipertensión", preventionRate: 35, description: "Mantiene las arterias flexibles." },
  { name: "Obesidad", preventionRate: 60, description: "Quema calorías y acelera el metabolismo." }
];

export const ROUTINES: Routine[] = [
  {
    id: "1",
    title: "El Despertar del Héroe",
    level: "Novato",
    duration: "15 min",
    type: "Cardio",
    description: "Activa tu sistema cardiovascular para prevenir hipertensión y mejorar la circulación.",
    exercises: [
      { name: "Marcha en el sitio", reps: "2 minutos", instruction: "Levanta las rodillas alternadamente con ritmo constante." },
      { name: "Jumping Jacks (Tijeras)", reps: "3 series x 30 seg", instruction: "Salta abriendo piernas y brazos al mismo tiempo." },
      { name: "Talones al glúteo", reps: "3 series x 45 seg", instruction: "Trote estático llevando talones hacia atrás." },
      { name: "Sentadilla suave", reps: "3 series x 12 reps", instruction: "Baja como si te sentaras en una silla invisible." }
    ]
  },
  {
    id: "2",
    title: "Fuerza de Titán",
    level: "Guerrero",
    duration: "30 min",
    type: "Fuerza",
    description: "Entrenamiento de resistencia para combatir la obesidad y fortalecer huesos.",
    exercises: [
      { name: "Flexiones (Push-ups)", reps: "3 series x 10-12 reps", instruction: "Cuerpo recto, baja el pecho al suelo. Usa rodillas si es necesario." },
      { name: "Zancadas (Lunges)", reps: "3 series x 10 por pierna", instruction: "Paso largo adelante, baja la rodilla trasera cerca del suelo." },
      { name: "Plancha Abdominal", reps: "3 series x 30-45 seg", instruction: "Mantén el cuerpo recto apoyado en antebrazos y puntas de pie." },
      { name: "Puente de Glúteo", reps: "3 series x 15 reps", instruction: "Acostado boca arriba, eleva la cadera contrayendo glúteos." }
    ]
  },
  {
    id: "3",
    title: "Flexibilidad Ninja",
    level: "Leyenda",
    duration: "20 min",
    type: "Flexibilidad",
    description: "Rutina para reducir estrés, mejorar postura y prevenir dolores articulares.",
    exercises: [
      { name: "Saludo al Sol", reps: "5 repeticiones lentas", instruction: "Secuencia fluida de estiramiento completo de cuerpo." },
      { name: "Postura del Niño", reps: "2 minutos", instruction: "Rodillas al suelo, glúteos a talones, estira brazos adelante." },
      { name: "Torsión de Columna", reps: "1 minuto por lado", instruction: "Sentado, gira el torso suavemente mirando atrás." },
      { name: "Estiramiento de Isquios", reps: "45 seg por pierna", instruction: "De pie, intenta tocar tus pies sin doblar rodillas excesivamente." }
    ]
  },
  {
    id: "4",
    title: "Equilibrio Absoluto",
    level: "Novato",
    duration: "10 min",
    type: "Equilibrio",
    description: "Fortalece el núcleo y previene caídas. Ideal para salud neurológica.",
    exercises: [
      { name: "El Flamenco", reps: "30 seg por pierna", instruction: "Párate en un solo pie. Cierra los ojos para mayor dificultad." },
      { name: "Caminata en cuerda floja", reps: "20 pasos", instruction: "Camina en línea recta poniendo un pie justo delante del otro." },
      { name: "Elevación de talones", reps: "3 series x 15 reps", instruction: "Sube y baja puntas de pie controladamente." },
      { name: "Postura del Árbol", reps: "30 seg por lado", instruction: "Apoya la planta del pie en la pantorrilla contraria y equilibra." }
    ]
  }
];