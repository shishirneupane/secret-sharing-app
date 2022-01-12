import { Request, Response } from 'express';
import { v4 as uuid4 } from 'uuid';
import { createSecretService } from 'secret/command/create-secret';
import { CreateSecret } from 'secret/command/create-secret/create-secret';
import { getSecret } from 'secret/queries/get-secret';
import { bcryptService } from 'common';

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
};

export const getSingleSecret = async (request: Request, response: Response) => {
	const secret = await getSecret.byId(request.params.id);
	response.status(200).json(secret);
};

export const checkPassword = async (request: Request, response: Response) => {
	const { password } = request.body;
	const secret = await getSecret.byId(request.params.id);
	if (secret.password) {
		const validPass = await bcryptService.compare(password, secret.password);
		if (validPass) {
			response.json(secret.body);
		} else {
			response.status(200).json('Invalid Password');
		}
	}
};
