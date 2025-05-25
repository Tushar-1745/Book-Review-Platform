// routes/reviews.js
const express = require('express');
const router = express.Router();
const { createReview, getReviewsByBook } = require('../controllers/reviewController');

router.post('/', createReview);
router.get('/', getReviewsByBook);

module.exports = router;
