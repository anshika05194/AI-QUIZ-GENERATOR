const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateQuizQuestions = async (topic, context, numQuestions = 5) => {
  const prompt = `
    Based on the following context about ${topic}, generate ${numQuestions} multiple-choice questions.
    For each question, provide:
    1. The question text
    2. Four options (labeled a, b, c, d)
    3. The correct answer (letter only)
    4. A brief explanation
    
    Context:
    ${context.substring(0, 3000)}  // Limit context length to avoid token limits
    
    Format the response as a valid JSON array of objects with these exact keys: 
    "question", "options" (array of strings), "correct_answer", "explanation"
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract JSON from the response
    const jsonStart = text.indexOf('[');
    const jsonEnd = text.lastIndexOf(']') + 1;
    
    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error('Failed to extract JSON from response');
    }
    
    const jsonStr = text.substring(jsonStart, jsonEnd);
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error('Failed to generate questions: ' + error.message);
  }
};

module.exports = {
  generateQuizQuestions
};