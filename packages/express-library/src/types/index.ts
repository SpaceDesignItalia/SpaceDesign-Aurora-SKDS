import { Request, Response } from 'express';

export interface AuroraRequest extends Request {
  aurora?: {
    requestId?: string;
    timestamp?: number;
  };
}

export interface AuroraResponse extends Response {
  aurora?: {
    requestId?: string;
  };
}

export interface ValidationSchema {
  body?: Record<string, any>;
  query?: Record<string, any>;
  params?: Record<string, any>;
}

