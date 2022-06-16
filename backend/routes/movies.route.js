const express = require('express');
const Movie = require('../controllers/movie.controller');
const cache = require('./middlewares/cache');

const router = express.Router();

/**
 * @api {get} /search Searching movies by Keyword.
 * @apiName Movies
 * @apiGroup Movies
 */
router.get('/search', cache, Movie.getMovies);

module.exports = router;
