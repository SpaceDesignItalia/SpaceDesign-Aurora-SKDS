import { Request, Response, NextFunction } from 'express';

interface RateLimitOptions {
  windowMs?: number;
  maxRequests?: number;
}

const requestStore = new Map<string, { count: number; resetTime: number }>();

export const rateLimiter = (options: RateLimitOptions = {}) => {
  const windowMs = options.windowMs || 60000; // 1 minuto di default
  const maxRequests = options.maxRequests || 100; // 100 richieste di default

  return (req: Request, res: Response, next: NextFunction) => {
    const clientId = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const clientData = requestStore.get(clientId);

    if (!clientData || now > clientData.resetTime) {
      requestStore.set(clientId, {
        count: 1,
        resetTime: now + windowMs,
      });
      return next();
    }

    if (clientData.count >= maxRequests) {
      return res.status(429).json({
        status: 'error',
        message: 'Troppe richieste. Riprova più tardi.',
      });
    }

    clientData.count++;
    next();
  };
};

