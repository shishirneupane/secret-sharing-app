import express from 'express';
import * as healthCheckController from 'common/http/controller/health-check.controller';

const commonRouter = express.Router();

commonRouter.get('/health-check', healthCheckController.index);

export { commonRouter };