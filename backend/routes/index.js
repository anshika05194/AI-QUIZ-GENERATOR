const express = require('express');
const uploadRoutes = require('./upload');
const quizRoutes = require('./quiz');

const router = express.Router();

router.use('/upload', uploadRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;