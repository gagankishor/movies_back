const Favorite = require('../models/Favorite');

// Get all favorites for the authenticated user
exports.getFavorites = async (req, res) => {
    try {
        console.log(req.user)
        const userId = req.user.userId;
        const favorites = await Favorite.find({ userId });
        // console.log(favorites)

        const formattedFavorites = favorites.map(favorite => {
            return {
                Title: favorite.movie.Title,
                Year: favorite.movie.Year,
                imdbID: favorite.movie.imdbID,
                Type: favorite.movie.Type,
                Poster: favorite.movie.Poster,
                _id: favorite._id
            };
        });
        res.json(formattedFavorites);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Failed to fetch favorites' });
    }
};

// Add a new favorite movie for the authenticated user
exports.addFavorite = async (req, res) => {
    try {
        const userId = req.user.userId;
        const movie = req.body;

        // Ensure movie object is in the correct format
        if (!movie || !movie.imdbID) {
            return res.status(400).json({ message: 'Invalid movie data' });
        }

        const newFavorite = new Favorite({ userId, movie });
        await newFavorite.save();
        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add favorite' });
    }
};
