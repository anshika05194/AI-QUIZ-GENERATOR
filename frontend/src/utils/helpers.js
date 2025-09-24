export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const validatePDFFile = (file) => {
  if (!file) return 'Please select a file';
  if (file.type !== 'application/pdf') return 'Please upload a PDF file';
  if (file.size > 5 * 1024 * 1024) return 'File size must be less than 5MB';
  return null;
};

export const calculateScore = (questions, userAnswers) => {
  return questions.reduce((score, question, index) => {
    return userAnswers[index] === question.correct_answer ? score + 1 : score;
  }, 0);
};