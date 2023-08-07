import { Request, Response } from 'express';

export const timerHandler = (_req: Request, res: Response) => {
  res.json({ epoch: Math.floor(Date.now() / 1000) });
};
