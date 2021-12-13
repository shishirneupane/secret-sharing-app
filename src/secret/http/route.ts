import express from 'express';
import * as secretController from './controller/secret.controller';

const secretRouter = express.Router();

secretRouter.post('/secrets', secretController.postSecret);

export { secretRouter };