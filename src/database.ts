import knex from "knex";
import dbConfig from "config/database";

export const db = knex(dbConfig);