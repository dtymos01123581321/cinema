const movies = require('./movies.route');

module.exports = app => {
  app.use('/api', movies);

  app.use('*', (req, res) => res.status(404).send({ err: 'Not Found', data: null }));
};
