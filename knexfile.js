// Update with your config settings.

  module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/projecttracker.sqlite3'
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    }
  };