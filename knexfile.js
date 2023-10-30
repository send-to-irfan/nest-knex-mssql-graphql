// knexfile.js

module.exports = {
  development: {
    client: 'mssql',
    connection: {
      server: 'localhost',
      user: 'sa',
      password: 'root',
      database: 'test',
    },
    migrations: {
      directory: './src/database/migrations', // Set the correct directory
    },
    seeds: {
      directory: './src/database/seeds', // Specify the directory for seed files
    },
  },
};
