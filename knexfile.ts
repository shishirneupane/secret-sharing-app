exports.development = {
  client: 'postgresql',
  connection: {
    database: 'secret-sharing-app-db',
    user:     'postgres',
    password: 'postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  }
};