import React, { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext();

const initialState = {
  pdfText: '',
  quizData: null,
  userAnswers: [],
  quizCompleted: false,
  score: 0,
  loading: false,
  error: null
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'SET_PDF_TEXT':
      return { 
        ...state, 
        pdfText: action.payload,
        error: null
      };
    case 'SET_QUIZ_DATA':
      return { 
        ...state, 
        quizData: action.payload,
        userAnswers: Array(action.payload.questions.length).fill(null),
        quizCompleted: false,
        score: 0,
        error: null
      };
    case 'SET_ANSWER':
      const newAnswers = [...state.userAnswers];
      newAnswers[action.payload.index] = action.payload.answer;
      return { ...state, userAnswers: newAnswers };
    case 'SET_QUIZ_COMPLETED':
      return { 
        ...state, 
        quizCompleted: true, 
        score: action.payload 
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET_QUIZ':
      return { ...initialState };
    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}