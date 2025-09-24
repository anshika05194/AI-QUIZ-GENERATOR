import React from 'react'

const Des = () => {
  return (
    <div className="px-10 pb-20 gap-6">
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 ml-50 mr-50">
                  <h4 className="text-2xl font-bold text-center text-gray-800 mb-8">What Sets Us Apart</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-700 mb-2">AI-Powered Question Generation</h5>
                        <p className="text-gray-600">Automatically generate multiple-choice questions based on the uploaded PDF and selected topic using an AI model. This provides users with relevant and tailored quizzes in seconds.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-700 mb-2">PDF Upload & Topic Selection</h5>
                        <p className="text-gray-600">Allow users to upload a PDF file and choose a specific topic to generate quiz questions on. This feature forms the foundation of your AI quiz generator by enabling topic-specific question generation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-700 mb-2">Score Tracking & Review</h5>
                        <p className="text-gray-600">After quiz completion, calculate the user’s score and present a detailed review of answers. This helps users track their performance and identify areas for improvement.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-700 mb-2">Interactive Quiz Interface</h5>
                        <p className="text-gray-600">Display generated quiz questions in a clean, interactive UI built with React.js and TailwindCSS. Users can answer questions and receive instant feedback to enhance their learning experience.s</p>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Des