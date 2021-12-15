import { resolve } from "path";
import dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, '../../.env') });

export default {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    database: process.env.DB_DATABASE,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  migrations: {
    directory: resolve(__dirname, '../../migrations'),
    tableName: 'knex_migrations'
  }
}