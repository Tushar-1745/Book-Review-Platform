// // === routes/bookRoutes.js ===
// const express = require('express');
// const router = express.Router();
// const bookController = require('../controllers/bookController');

// router.get('/', bookController.getAllBooks);
// router.get('/:id', bookController.getBookById);
// router.get('/author/:authorName', bookController.getBooksByAuthor);

// router.post('/', bookController.createBook);

// module.exports = router;

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Important: Place more specific routes above generic ones
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);

module.exports = router;
