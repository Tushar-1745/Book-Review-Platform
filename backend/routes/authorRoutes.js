const express = require('express');
const router = express.Router();
const { getAllAuthors } = require('../controllers/authorController');  // <-- check this import

router.get('/', getAllAuthors);  // <-- line 7 causing error
module.exports = router;
