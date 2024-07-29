const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const authRouter = require('./routes/auth');
const favoriteRoutes = require('./routes/favoriteRoutes');
const connectDB = require('./database');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use('/api', movieRoutes);
app.use('/api/auth', authRouter);
app.use('/api/favorites', favoriteRoutes);


module.exports = app;
