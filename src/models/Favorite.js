const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    movie: {
        Title: String,
        Year: String,
        Poster: String,
        imdbID: String
    }
});

module.exports = mongoose.model('Favorites', favoriteSchema);
