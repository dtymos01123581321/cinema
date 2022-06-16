const express = require('express');
const app = express();
const cors = require('cors');

const keys = require('./utilities/config/keys');

app.use(cors());

require('./utilities/startup/bodyParser')(app);
require('./routes')(app);

const server = app.listen(keys.apiPort, () => {
  console.info(`API listening on port ${keys.apiPort}`);
});

module.exports = server;
