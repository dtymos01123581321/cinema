const { OK } = require('http-status');
const redis = require("redis");
const redisClient = redis.createClient();

module.exports = async (req, res, next) => {
  const { Keyword } = req.query;

  redisClient.get(Keyword, (error, cachedData) => {
    if (error) throw error;

    if(cachedData !== null) {
      res.status(OK).json({ data: JSON.parse(cachedData), cache: true });
    } else {
      next();
    }
  })
}
