import React from 'react';
import { useQuiz } from '../../contexts/QuizContext';
import Question from '../PDFUpload/Question/Question';
import Button from '../common/Button/Button';
import Card from '../common/Card/Card';

const Quiz = () => {
  const { state, dispatch } = useQuiz();

  const handleAnswerSelect = (questionIndex, answer) => {
    dispatch({ type: 'SET_ANSWER', payload: { index: questionIndex, answer } });
  };

  const calculateScore = () => {
    let correctCount = 0;
    state.quizData.questions.forEach((question, index) => {
      if (state.userAnswers[index] === question.correct_answer) {
        correctCount++;
      }
    });
    dispatch({ type: 'SET_QUIZ_COMPLETED', payload: correctCount });
  };

  if (!state.quizData) return null;

  return (
    <Card className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Quiz: {state.quizData.topic}
        </h2>
        
      </div>

      <div className="space-y-6">
        {state.quizData.questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            index={index}
            userAnswer={state.userAnswers[index]}
            onAnswerSelect={handleAnswerSelect}
            showFeedback={state.quizCompleted}
          />
        ))}
        {!state.quizCompleted && (
          <Button
            onClick={calculateScore}
            disabled={state.userAnswers.some(answer => answer === null)}
          className='align-center'>
            Submit Answers
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Quiz;