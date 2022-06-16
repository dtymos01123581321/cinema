const config = {
  development: {
    port: 8500,
    db: {
      database: 'interview',
      username: 'postgres',
      password: 'dsbvhiddQwasSAqes67v5rd6sv==',
      host: 'localhost',
    },
    OWNER_EMAIL: 'demionart@gmail.com',
  },
  production: {
    port: 6102,
    db: {
      database: 'inw5000',
      username: 'postgres',
      password: 'root',
      host: 'localhost',
    },
    OWNER_EMAIL: 'demionart@gmail.com',
  },
};

module.exports = config[process.env.NODE_ENV];
