export const QUIZ_CONFIG = {
  MIN_QUESTIONS: 3,
  MAX_QUESTIONS: 10,
  DEFAULT_QUESTIONS: 5,
};

export const FILE_CONFIG = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ACCEPTED_TYPES: ['application/pdf'],
};

export const API_ENDPOINTS = {
  UPLOAD: '/upload/pdf',
  GENERATE_QUIZ: '/quiz/generate',
  HEALTH: '/health',
};