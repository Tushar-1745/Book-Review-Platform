// controllers/reviewController.js
const { Review } = require('../models');

const createReview = async (req, res) => {
  const { bookId, rating, comment, userName } = req.body;

  if (!bookId || !rating || !comment) {
    return res.status(400).json({ message: 'bookId, rating, and comment are required' });
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Rating must be between 1 and 5' });
  }

  try {
    const newReview = await Review.create({
      bookId,
      rating,
      comment,
      userName: userName || 'Anonymous',
    });

    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ message: 'Failed to submit review' });
  }
};

const getReviewsByBook = async (req, res) => {
  const { bookId } = req.query;

  if (!bookId) {
    return res.status(400).json({ message: 'bookId query parameter is required' });
  }

  try {
    const reviews = await Review.findAll({
      where: { bookId },
      order: [['createdAt', 'DESC']],
    });
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
};

module.exports = {
  createReview,
  getReviewsByBook,
};
