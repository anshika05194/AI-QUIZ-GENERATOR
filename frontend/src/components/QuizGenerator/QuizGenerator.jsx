import React, { useState } from 'react';
import { useQuiz } from '../../contexts/QuizContext';
import { generateQuiz } from '../../services/quizService';
import Button from '../common/Button/Button';
import Loader from '../common/Loader/Loader';
import ErrorMessage from '../common/ErrorMessage/ErrorMessage';

const QuizGenerator = () => {
  const { state, dispatch } = useQuiz();
  const [topic, setTopic] = useState('');
  const [numQuestions, setNumQuestions] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateQuiz = async (e) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    if (!state.pdfText) {
      setError('Please upload a PDF first');
      return;
    }

    setIsGenerating(true);
    setError('');
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const data = await generateQuiz(topic, state.pdfText, numQuestions);
      dispatch({ type: 'SET_QUIZ_DATA', payload: data });
    } catch (err) {
      setError(err.message);
      dispatch({ type: 'SET_ERROR', payload: err.message });
    } finally {
      setIsGenerating(false);
    }
  };

  if (!state.pdfText) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Generate Quiz</h2>
      <form onSubmit={handleGenerateQuiz} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Topic
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Machine Learning, Physics, History"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Questions
            </label>
            <select
              value={numQuestions}
              onChange={(e) => setNumQuestions(parseInt(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value={3}>3 Questions</option>
              <option value={5}>5 Questions</option>
              <option value={10}>10 Questions</option>
            </select>
          </div>
        </div>
        
        <Button
          type="submit"
          disabled={isGenerating || !state.pdfText}
          className="w-full md:w-auto"
        >
          {isGenerating ? (
            <>
              <Loader size="small" className="inline mr-2" />
              Generating...
            </>
          ) : (
            'Generate Quiz'
          )}
        </Button>
        
        <ErrorMessage message={error} onRetry={() => setError('')} />
      </form>
    </div>
  );
};

export default QuizGenerator;