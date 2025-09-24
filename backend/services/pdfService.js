const pdfParse = require('pdf-parse');

const extractTextFromPDF = async (buffer) => {
  try {
    const data = await pdfParse(buffer);
    return data.text;
  } catch (error) {
    throw new Error('PDF processing failed: ' + error.message);
  }
};

module.exports = {
  extractTextFromPDF
};