import api from './api';

export const generateQuiz = async (topic, textContent, numQuestions = 5) => {
  const response = await api.post('/quiz/generate', {
    topic,
    text_content: textContent,
    num_questions: numQuestions,
  });
  
  return response.data;
};

export const checkHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};