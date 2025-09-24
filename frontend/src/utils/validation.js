export const validateTopic = (topic) => {
  if (!topic || topic.trim().length === 0) {
    return 'Topic is required';
  }
  if (topic.trim().length < 2) {
    return 'Topic must be at least 2 characters long';
  }
  if (topic.trim().length > 100) {
    return 'Topic must be less than 100 characters';
  }
  return null;
};

export const validateNumQuestions = (numQuestions) => {
  if (numQuestions < 3 || numQuestions > 10) {
    return 'Number of questions must be between 3 and 10';
  }
  return null;
};

export const validateQuizData = (quizData) => {
  if (!quizData || !quizData.questions || !Array.isArray(quizData.questions)) {
    return 'Invalid quiz data format';
  }
  
  for (const question of quizData.questions) {
    if (!question.question || !question.options || !question.correct_answer) {
      return 'Each question must have question text, options, and correct answer';
    }
    
    if (question.options.length !== 4) {
      return 'Each question must have exactly 4 options';
    }
  }
  
  return null;
};