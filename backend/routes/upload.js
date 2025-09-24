const express = require('express');
const { uploadPDF } = require('../controllers/uploadController');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/pdf', upload.single('file'), uploadPDF);

module.exports = router;