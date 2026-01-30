
import { GoogleGenAI, Type } from "@google/genai";
import { AICopyResponse, MarketingCopyRequest } from '../types';

/**
 * Generates marketing copy using the Google Gemini AI.
 * This service takes a business description and tone to produce a structured JSON response.
 */
export const generateMarketingCopy = async (request: MarketingCopyRequest): Promise<AICopyResponse> => {
  // Always initialize GoogleGenAI with the API key from environment variables
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are a world-class marketing copywriter. Generate a high-converting marketing copy for the following business:
    
    Business/Product Description: ${request.businessType}
    Tone of Voice: ${request.tone}
    
    Ensure the copy is engaging, benefit-driven, and includes a clear call to action.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          headline: {
            type: Type.STRING,
            description: 'A compelling and catchy headline for the business.',
          },
          subheadline: {
            type: Type.STRING,
            description: 'An informative sub-headline that supports the main value proposition.',
          },
          cta: {
            type: Type.STRING,
            description: 'A short, persuasive text for a call-to-action button.',
          },
        },
        required: ["headline", "subheadline", "cta"],
      },
    },
  });

  // Directly access the text property as defined in the Google GenAI SDK
  const text = response.text;
  if (!text) {
    throw new Error('The AI model returned an empty response. Please check your prompt or try again.');
  }

  try {
    // Parse the JSON string into a structured object
    return JSON.parse(text.trim());
  } catch (error) {
    console.error('Failed to parse AI response as JSON:', error);
    throw new Error('Received an invalid data format from the AI. Please try again.');
  }
};
