import { Request, Response, NextFunction } from 'express';
import { ValidationSchema } from '../types';

export const validateRequest = (schema: ValidationSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors: string[] = [];

    if (schema.body) {
      for (const [key, rules] of Object.entries(schema.body)) {
        const value = req.body[key];
        if (rules.required && (value === undefined || value === null || value === '')) {
          errors.push(`Il campo '${key}' è obbligatorio`);
        }
        if (rules.type && value !== undefined && typeof value !== rules.type) {
          errors.push(`Il campo '${key}' deve essere di tipo ${rules.type}`);
        }
      }
    }

    if (schema.query) {
      for (const [key, rules] of Object.entries(schema.query)) {
        const value = req.query[key];
        if (rules.required && value === undefined) {
          errors.push(`Il parametro query '${key}' è obbligatorio`);
        }
      }
    }

    if (schema.params) {
      for (const [key, rules] of Object.entries(schema.params)) {
        const value = req.params[key];
        if (rules.required && value === undefined) {
          errors.push(`Il parametro '${key}' è obbligatorio`);
        }
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Errore di validazione',
        errors,
      });
    }

    next();
  };
};

