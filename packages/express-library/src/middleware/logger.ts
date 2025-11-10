import { Request, Response, NextFunction } from 'express';

export const logger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();
  const timestamp = new Date().toISOString();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const logMessage = `[${timestamp}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`;
    console.log(logMessage);
  });

  next();
};

