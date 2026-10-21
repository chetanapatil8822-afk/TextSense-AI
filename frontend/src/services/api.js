/**
 * TextSense API Service
 */

const BACKEND_API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Analyzes input text by sending it to the backend model.
 * @param {string} text - The social media text to analyze.
 */
export const analyzeTextApi = async (text) => {
  const cleanText = text.trim();

  if (!cleanText) {
    throw new Error('Input text cannot be empty.');
  }

  try {
    const response = await fetch(`${BACKEND_API_URL}/api/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        text: cleanText
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}: Unable to complete analysis.`);
    }

    return await response.json();
  } catch (err) {
    console.error('Backend API connection failed:', err);
    throw new Error('Could not connect to the backend analysis service. Please ensure the backend is running.');
  }
};
