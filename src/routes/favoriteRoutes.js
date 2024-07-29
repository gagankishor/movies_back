const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, favoriteController.getFavorites);
router.post('/add', authMiddleware, favoriteController.addFavorite);

module.exports = router;
