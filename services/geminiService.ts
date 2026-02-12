// ESTE SERVICIO ESTÁ DESACTIVADO ACTUALMENTE
// Se ha eliminado la dependencia de @google/genai para optimizar el build
// ya que no se estaba utilizando en la interfaz.

/*
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const askSensei = async (question: string): Promise<string> => {
  if (!ai) {
    return "¡Error! No se ha detectado la API Key.";
  }
  // ... lógica anterior ...
  return "";
};
*/

export const askSensei = async (question: string): Promise<string> => {
    return "El Sensei está descansando ahora mismo.";
};
