# @spacedesign-aurora/express-library

Libreria di middleware e funzioni utility per Express - SpaceDesign Aurora.

## Installazione

```bash
npm install @spacedesign-aurora/express-library
```

## Utilizzo

### Middleware

```typescript
import express from 'express';
import {
  errorHandler,
  logger,
  corsConfig,
  rateLimiter,
  validateRequest,
} from '@spacedesign-aurora/express-library';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors(corsConfig));
app.use(logger);
app.use(express.json());
app.use(rateLimiter({ windowMs: 60000, maxRequests: 100 }));

// Esempio di validazione
app.post(
  '/api/users',
  validateRequest({
    body: {
      name: { required: true, type: 'string' },
      email: { required: true, type: 'string' },
    },
  }),
  (req, res) => {
    res.json({ message: 'Utente creato', data: req.body });
  }
);

// Error handler (deve essere l'ultimo middleware)
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});
```

### Funzioni Utility

```typescript
import {
  formatDate,
  formatCurrency,
  validateEmail,
  generateId,
  slugify,
  parseQueryString,
  sanitizeInput,
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
} from '@spacedesign-aurora/express-library';

// Formattazione date
const formatted = formatDate(new Date(), { format: 'long', locale: 'it-IT' });

// Formattazione valuta
const price = formatCurrency(1234.56, { currency: 'EUR', locale: 'it-IT' });

// Validazione email
const isValid = validateEmail('user@example.com');

// Genera ID
const id = generateId('user');

// Slugify
const slug = slugify('Ciao Mondo!');

// Parse query string
const params = parseQueryString('?name=John&age=30');

// Sanitizza input
const clean = sanitizeInput('<script>alert("xss")</script>');

// Hash password
const hashed = hashPassword('password123');

// Confronta password
const isValid = comparePassword('password123', hashed);

// Genera token JWT
const token = generateToken({ userId: 123 }, 'secret-key', 3600);

// Verifica token JWT
const payload = verifyToken(token, 'secret-key');
```

## Middleware

### errorHandler

Gestore centralizzato degli errori.

```typescript
app.use(errorHandler);
```

### logger

Middleware per il logging delle richieste.

```typescript
app.use(logger);
```

### corsConfig

Configurazione CORS predefinita.

```typescript
import cors from 'cors';
app.use(cors(corsConfig));
```

### rateLimiter

Middleware per limitare il numero di richieste.

```typescript
app.use(rateLimiter({ windowMs: 60000, maxRequests: 100 }));
```

**Opzioni:**
- `windowMs`: Finestra temporale in millisecondi (default: 60000)
- `maxRequests`: Numero massimo di richieste (default: 100)

### validateRequest

Middleware per la validazione delle richieste.

```typescript
app.post(
  '/api/endpoint',
  validateRequest({
    body: {
      field: { required: true, type: 'string' },
    },
    query: {
      page: { required: false },
    },
    params: {
      id: { required: true },
    },
  }),
  handler
);
```

## Funzioni Utility

### formatDate

Formatta una data in vari formati.

```typescript
formatDate(date: Date | string | number, options?: FormatDateOptions): string
```

### formatCurrency

Formatta un numero come valuta.

```typescript
formatCurrency(amount: number, options?: CurrencyOptions): string
```

### validateEmail

Valida un indirizzo email.

```typescript
validateEmail(email: string): boolean
```

### generateId

Genera un ID univoco.

```typescript
generateId(prefix?: string): string
```

### slugify

Converte una stringa in uno slug.

```typescript
slugify(text: string): string
```

### parseQueryString

Analizza una query string e restituisce un oggetto.

```typescript
parseQueryString(queryString: string): Record<string, string>
```

### sanitizeInput

Sanitizza un input rimuovendo caratteri pericolosi.

```typescript
sanitizeInput(input: string): string
```

### hashPassword

Genera un hash della password usando PBKDF2.

```typescript
hashPassword(password: string): string
```

### comparePassword

Confronta una password con un hash.

```typescript
comparePassword(password: string, hashedPassword: string): boolean
```

### generateToken

Genera un token JWT.

```typescript
generateToken(payload: TokenPayload, secret: string, expiresIn?: number): string
```

### verifyToken

Verifica e decodifica un token JWT.

```typescript
verifyToken(token: string, secret: string): TokenPayload | null
```

## Licenza

MIT
