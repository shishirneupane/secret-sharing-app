import express from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import cors from 'cors';

import { globalErrorHandler } from 'common/http/middleware/global-error-handler';
import { commonRouter } from 'common/http/route';
import { secretRouter } from 'secret/http/route';

const app = express();

// initial setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: '.env' });

// app routes
app.use(commonRouter);
app.use(secretRouter);

// register middlewares
app.use(globalErrorHandler);

export default app;
