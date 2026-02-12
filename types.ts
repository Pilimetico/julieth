export interface Exercise {
  name: string;
  reps: string; // e.g., "3 series x 12 reps" or "45 segundos"
  instruction: string;
}

export interface Routine {
  id: string;
  title: string;
  level: 'Novato' | 'Guerrero' | 'Leyenda'; // Beginner, Intermediate, Advanced
  duration: string;
  type: 'Fuerza' | 'Cardio' | 'Flexibilidad' | 'Equilibrio';
  description: string;
  exercises: Exercise[];
}

export interface Disease {
  name: string;
  preventionRate: number; // percentage
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export enum Page {
  HOME = 'home',
  PREVENTION = 'prevention',
  ROUTINES = 'routines',
  TOOLS = 'tools',
  COMMUNITY = 'community',
  INSTAGRAM = 'instagram',
  SURVEY = 'survey'
}