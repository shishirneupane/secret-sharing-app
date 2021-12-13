import { Response } from "express"

export const index = (_req, res: Response) => {
  res.json({ status: 200 });
}