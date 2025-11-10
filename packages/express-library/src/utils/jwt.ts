import * as crypto from 'crypto';

interface TokenPayload {
  [key: string]: any;
}

export const generateToken = (payload: TokenPayload, secret: string, expiresIn: number = 3600): string => {
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };

  const now = Math.floor(Date.now() / 1000);
  const tokenPayload = {
    ...payload,
    iat: now,
    exp: now + expiresIn,
  };

  const base64Header = Buffer.from(JSON.stringify(header)).toString('base64url');
  const base64Payload = Buffer.from(JSON.stringify(tokenPayload)).toString('base64url');

  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${base64Header}.${base64Payload}`)
    .digest('base64url');

  return `${base64Header}.${base64Payload}.${signature}`;
};

export const verifyToken = (token: string, secret: string): TokenPayload | null => {
  try {
    const [base64Header, base64Payload, signature] = token.split('.');

    if (!base64Header || !base64Payload || !signature) {
      return null;
    }

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${base64Header}.${base64Payload}`)
      .digest('base64url');

    if (signature !== expectedSignature) {
      return null;
    }

    const payload = JSON.parse(Buffer.from(base64Payload, 'base64url').toString());

    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return payload;
  } catch (error) {
    return null;
  }
};

