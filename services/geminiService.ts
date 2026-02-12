import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client only if key exists to avoid immediate crash, handle error downstream
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const askSensei = async (question: string): Promise<string> => {
  if (!ai) {
    return "¡Error! No se ha detectado la API Key. Por favor configura el entorno.";
  }

  try {
    const model = ai.models;
    const response = await model.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: "Eres 'Genki Sensei', un entrenador personal de estilo anime muy enérgico, motivador y sabio. Tu misión es animar al usuario a hacer ejercicio. Usa metáforas de anime, cómics y superhéroes. Sé breve, directo y divertido. Si preguntan algo médico serio, recomienda ir a un doctor. Responde en español.",
      }
    });
    
    return response.text || "¡El Sensei está meditando! Intenta de nuevo.";
  } catch (error) {
    console.error("Error asking Sensei:", error);
    return "¡Hubo una interferencia en la señal del Sensei! Verifica tu conexión.";
  }
};