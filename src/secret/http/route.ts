import express from 'express';
import * as secretController from './controller/secret.controller';

const secretRouter = express.Router();

secretRouter.post('/secrets', secretController.postSecret);
secretRouter.get('/secrets/:id', secretController.getSingleSecret);

export { secretRouter };