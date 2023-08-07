import { NextFunction, Request, Response } from 'express';
import { isStringGuard } from '../util';

const validAPIKeys = ['mysecrettoken'];

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const key = req.headers.authorization;

  if (!key || !isStringGuard(key) || !validAPIKeys.includes(key)) {
    return res.sendStatus(403);
  }
  next();
};
