import { CreateSecret } from "./create-secret";
import { db } from "database";

export class CreateSecretService {
  public async execute(data: CreateSecret): Promise<void> {
    await db('secrets').insert({
      id: data.id,
      body: data.body,
      expiresIn: data.expiresIn,
    });
  }
}