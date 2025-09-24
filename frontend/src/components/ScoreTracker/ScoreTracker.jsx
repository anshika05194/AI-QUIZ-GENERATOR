import React from 'react';
import { useQuiz } from '../../contexts/QuizContext';
import Button from '../common/Button/Button';
import Card from '../common/Card/Card';

const ScoreTracker = () => {
  const { state, dispatch } = useQuiz();

  if (!state.quizCompleted) return null;

  const percentage = (state.score / state.quizData.questions.length) * 100;
  
  let message = '';
  let messageColor = '';
  
  if (percentage >= 80) {
    message = 'Excellent job! 🎉';
    messageColor = 'text-green-600';
  } else if (percentage >= 60) {
    message = 'Good effort! 👍';
    messageColor = 'text-blue-600';
  } else if (percentage >= 40) {
    message = 'Keep practicing! 💪';
    messageColor = 'text-yellow-600';
  } else {
    message = 'Try again, you can do better! 📚';
    messageColor = 'text-red-600';
  }

  const resetQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
  };

  return (
    <Card>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Results</h2>
        
        <div className="flex justify-center items-baseline mb-6">
          <span className="text-5xl font-bold text-blue-600">{state.score}</span>
          <span className="text-2xl text-gray-600">/{state.quizData.questions.length}</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div 
            className="bg-blue-600 h-4 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <p className={`text-2xl font-semibold ${messageColor} mb-4`}>
          {message}
        </p>
        
        <p className="text-gray-600 mb-6">
          You scored {state.score} out of {state.quizData.questions.length} questions correctly
          ({percentage.toFixed(1)}%)
        </p>
        
        <Button onClick={resetQuiz} variant="primary">
          Start New Quiz
        </Button>
      </div>
    </Card>
  );
};

export default ScoreTracker;