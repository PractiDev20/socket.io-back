const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments');

router.get('/comments', commentsController.getComments);

module.exports = router;