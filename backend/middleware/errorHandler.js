const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Default error
  let statusCode = 500;
  let message = 'Internal Server Error';

  // Custom error handling
  if (err.message.includes('PDF processing failed')) {
    statusCode = 400;
    message = err.message;
  } else if (err.message.includes('Failed to generate questions')) {
    statusCode = 500;
    message = 'Failed to generate quiz questions. Please try again.';
  } else if (err.message.includes('Unexpected token') || err.message.includes('JSON')) {
    statusCode = 500;
    message = 'Error processing quiz data. Please try again.';
  }

  res.status(statusCode).json({
    error: message
  });
};

module.exports = errorHandler;