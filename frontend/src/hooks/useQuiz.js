import { useQuiz } from '../contexts/QuizContext';

export const useQuizActions = () => {
  const { dispatch } = useQuiz();

  const resetQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  return { resetQuiz, setError };
};