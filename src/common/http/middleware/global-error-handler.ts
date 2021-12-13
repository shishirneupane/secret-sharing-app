import { Response } from "express";

export const globalErrorHandler = (err: Error, _req, res: Response, _next) => {
  res.json({
    status: 500,
    title: 'Something went wrong',
    details: err.message,
  });
}