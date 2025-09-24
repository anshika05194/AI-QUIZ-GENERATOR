import React, { useState } from 'react';
import { useQuiz } from '../../contexts/QuizContext';
import { uploadPDF } from '../../services/uploadService';

import Loader from '../common/Loader/Loader';
import ErrorMessage from '../common/ErrorMessage/ErrorMessage';

const PDFUpload = () => {
  const { state, dispatch } = useQuiz();
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }

    setIsUploading(true);
    setError('');
    setUploadedFileName('');
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const data = await uploadPDF(file);
      dispatch({ type: 'SET_PDF_TEXT', payload: data.text_content });
      setUploadedFileName(file.name);
      // Reset the file input
      event.target.value = '';
    } catch (err) {
      setError(err.message);
      dispatch({ type: 'SET_ERROR', payload: err.message });
    } finally {
      setIsUploading(false);
    }
  };

  const handleClearPDF = () => {
    dispatch({ type: 'SET_PDF_TEXT', payload: '' });
    setUploadedFileName('');
    setError('');
    dispatch({ type: 'SET_ERROR', payload: null });
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Upload PDF</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        {/* Only show upload section if no PDF is uploaded */}
        {!state.pdfText && (
          <>
            <input
              type="file"
              id="pdf-upload"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
              disabled={isUploading}
            />
            <label
              htmlFor="pdf-upload"
              className={`cursor-pointer font-medium py-3 px-6 rounded-lg transition-colors inline-block mb-4 ${
                isUploading 
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-50 hover:bg-blue-100 text-blue-700'
              }`}
            >
              {isUploading ? <Loader size="small" /> : 'Choose PDF File'}
            </label>
            <p className="text-sm text-gray-600">Upload a PDF document to generate questions from</p>
          </>
        )}


        
        
        {/* Show success message when PDF is uploaded */}
        {state.pdfText && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 font-medium">✓ PDF uploaded successfully!</p>
            {uploadedFileName && (
              <p className="text-sm text-green-600 mt-1">File: {uploadedFileName}</p>
            )}
            <p className="text-sm text-green-600 mt-1">
              Text extracted: {state.pdfText.length} characters
            </p>
            <button
              onClick={handleClearPDF}
              className="mt-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors border border-blue-200 hover:border-red-300"
            >
              Upload different PDF
            </button>
          </div>
        )}
        
        <ErrorMessage message={error} onRetry={() => setError('')} className="mt-4" />
      </div>
    </div>
  );
};

export default PDFUpload;