const { OK, FORBIDDEN } = require('http-status');
const axios = require('axios');
const redis = require('redis');
const redisClient = redis.createClient({expire: 30});
const { apiKey } = require('../utilities/config/keys');

const fetchMovies = (apiKey, Keyword, page) => axios.get(`http://omdbapi.com/?apikey=${apiKey}&s=${Keyword}&page=${page}`)

class Movie {
  async getMovies(req, res) {
    try {

      const { Keyword } = req.query;

      const [firstMovies, secondMovies] = await Promise.all([fetchMovies(apiKey, Keyword, 1),
        fetchMovies(apiKey, Keyword, 2)]);

      if (firstMovies.data.Error && secondMovies.data.Error) {
        throw new Error(firstMovies.data.Error);
      }

      const data = [];
      firstMovies.data.Search && (data.push(...firstMovies.data.Search));
      secondMovies.data.Search && (data.push(...secondMovies.data.Search));

      redisClient.set(Keyword, JSON.stringify(data));

      res.status(OK).json({ data, cache: false });
    } catch (error) {
      console.error(error);
      res.status(FORBIDDEN).json({ error: error.message });
    }
  }
}


module.exports = new Movie();

