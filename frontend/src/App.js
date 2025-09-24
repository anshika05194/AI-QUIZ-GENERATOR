import React from 'react';
import { QuizProvider } from './contexts/QuizContext';
import Layout from './components/layout/Layout/Layout';
import PDFUpload from './components/PDFUpload/PDFUpload';
import QuizGenerator from './components/QuizGenerator/QuizGenerator';
import Quiz from './components/Quiz/Quiz';
import ScoreTracker from './components/ScoreTracker/ScoreTracker';
import './App.css';

function App() {
  return (
    <QuizProvider>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-blue-800 mb-4">
                AI Quiz Generator
              </h1>
              <p className="text-lg text-gray-600">
                Upload a PDF, select a topic, and test your knowledge with AI-generated quizzes
              </p>
            </div>

            <div className="space-y-8">
              <PDFUpload />
              <QuizGenerator />
              <Quiz />
              <ScoreTracker />
            </div>
          </div>
        </div>
      </Layout>
    </QuizProvider>
  );
}

export default App;