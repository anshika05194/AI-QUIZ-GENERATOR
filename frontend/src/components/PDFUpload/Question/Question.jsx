import React from 'react';

const Question = ({ question, index, userAnswer, onAnswerSelect, showFeedback }) => {
  const options = ['a', 'b', 'c', 'd'];

  const getOptionClass = (optionLetter) => {
    let baseClass = "p-4 rounded-lg border flex items-center cursor-pointer ";
    
    if (showFeedback) {
      const isCorrect = question.correct_answer === optionLetter;
      const isSelected = userAnswer === optionLetter;
      
      if (isCorrect) {
        return baseClass + "bg-green-100 border-green-500 text-green-800";
      } else if (isSelected && !isCorrect) {
        return baseClass + "bg-red-100 border-red-500 text-red-800";
      }
      return baseClass + "border-gray-300 bg-gray-50";
    }
    
    return baseClass + (userAnswer === optionLetter 
      ? "bg-blue-100 border-blue-500 text-blue-800" 
      : "border-gray-300 hover:bg-gray-50");
  };

  return (
    <div className="border-b pb-6 last:border-b-0">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {index + 1}. {question.question}
      </h3>
      
      <div className="space-y-3">
        {question.options.map((option, optIndex) => {
          const optionLetter = options[optIndex];
          return (
            <div
              key={optIndex}
              className={getOptionClass(optionLetter)}
              onClick={() => !showFeedback && onAnswerSelect(index, optionLetter)}
            >
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                showFeedback
                  ? question.correct_answer === optionLetter
                    ? "bg-green-500 border-green-600 text-white"
                    : userAnswer === optionLetter
                    ? "bg-red-500 border-red-600 text-white"
                    : "border-gray-400"
                  : userAnswer === optionLetter
                  ? "bg-blue-500 border-blue-600 text-white"
                  : "border-gray-400"
              }`}>
                {optionLetter.toUpperCase()}
              </div>
              <span>{option}</span>
            </div>
          );
        })}
      </div>

      {showFeedback && question.explanation && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Explanation:</strong> {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default Question;