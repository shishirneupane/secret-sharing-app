import { CreateSecret } from './create-secret';
import { db } from 'database';
import { bcryptService } from 'common';

export class CreateSecretService {
	public async execute(data: CreateSecret): Promise<void> {
		await db('secrets').insert({
			id: data.id,
			body: data.body,
			password: await bcryptService.hash(data.password),
			expiresIn: data.expiresIn,
		});
	}
}
