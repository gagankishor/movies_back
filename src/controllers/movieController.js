const axios = require('axios');
const searchMovies = async (req, res) => {
    try {
        const { query } = req.query;
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${query}`);
        const movies = response.data.Search || [];
        res.json({ Search: movies });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

module.exports = {
    searchMovies
};
