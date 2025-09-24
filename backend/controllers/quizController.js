const geminiService = require('../services/geminiService');

const generateQuiz = async (req, res, next) => {
  try {
    const { topic, text_content, num_questions = 5 } = req.body;

    if (!topic || !text_content) {
      return res.status(400).json({ error: 'Topic and text content are required' });
    }

    const questions = await geminiService.generateQuizQuestions(topic, text_content, num_questions);
    res.json({ questions, topic });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateQuiz
};