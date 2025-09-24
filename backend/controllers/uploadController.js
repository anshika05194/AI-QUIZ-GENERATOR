const pdfService = require('../services/pdfService');

const uploadPDF = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    if (req.file.mimetype !== 'application/pdf') {
      return res.status(400).json({ error: 'Invalid file type. Please upload a PDF.' });
    }

    const text = await pdfService.extractTextFromPDF(req.file.buffer);
    res.json({ text_content: text });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadPDF
};