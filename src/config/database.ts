import { resolve } from "path";

export default {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    port: 5432,
    database: 'secret-sharing-app-db',
    user: 'postgres',
    password: 'postgres'
  },
  migrations: {
    directory: resolve(__dirname, '../../migrations'),
    tableName: 'knex_migrations'
  }
}