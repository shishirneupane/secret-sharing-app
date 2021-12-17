import { db } from "database";

export const createSecret = async (data: object) => {
  await db('secrets').insert(data);
}