import { Request, Response } from "express";
import { v4 as uuid4 } from 'uuid';
import { createSecretService } from "secret/command/create-secret";
import { CreateSecret } from "secret/command/create-secret/create-secret";
import { getSecret } from "secret/queries/get-secret";

export const postSecret = async (request: Request, response: Response) => {
  const id = uuid4();
  const { body } = request;

  const command = new CreateSecret({
    id,
    body: body.body,
    password: body.password,
    expiresIn: body.expiresIn,
  });

  await createSecretService.execute(command);

  const secret = await getSecret.byId(id);
  response.status(201).json(secret);
}

export const getSingleSecret = async (request: Request, response: Response) => {
  const secret = await getSecret.byId(request.params.id);
  response.status(200).json(secret);
}