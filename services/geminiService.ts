import { GoogleGenAI } from "@google/genai";

export const askSensei = async (question: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `Eres el "Sensei Fitness" de JulietApp. Tu tono es motivador, energético y profesional, similar a un mentor de anime Shonen (estilo All Might o Jiraiya). 
        Tus respuestas deben ser:
        1. Breves y directas.
        2. Basadas en conceptos médicos reales de la Dra. Julieth Uribe.
        3. Fomentar siempre el movimiento diario.
        4. Usa términos como "Recluta", "Héroe", "Sube de nivel", "Stats".
        5. Evita respuestas de más de 100 palabras.`,
      },
    });

    return response.text || "¡Hmm! Mis sensores detectan interferencia. ¡Intenta preguntar de nuevo, Héroe!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "¡Rayos! El sistema de entrenamiento está en mantenimiento. ¡Vuelve pronto para seguir subiendo de nivel!";
  }
};