
import { GoogleGenAI, Type } from "@google/genai";
import { AICopyRequest, AICopyResponse } from "../types";

export const generateMarketingCopy = async (params: AICopyRequest): Promise<AICopyResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate marketing copy for a landing page. Business Type: ${params.businessType}, Tone: ${params.tone}. Return JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING, description: "A catchy, benefit-driven headline" },
          subheadline: { type: Type.STRING, description: "A supporting sentence explaining the value proposition" },
          cta: { type: Type.STRING, description: "A compelling Call to Action button text" }
        },
        required: ["headline", "subheadline", "cta"]
      }
    }
  });

  try {
    return JSON.parse(response.text || "{}") as AICopyResponse;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    return {
      headline: "Revolutionize Your Workflow Today",
      subheadline: "The all-in-one platform built for speed and efficiency.",
      cta: "Get Started Free"
    };
  }
};
