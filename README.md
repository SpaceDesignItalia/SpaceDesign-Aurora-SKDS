# SpaceDesign-Aurora-SKDS

Monorepo contenente librerie di funzioni utility per React, Vue e Express pronte per la pubblicazione su npm.

## Struttura del Progetto

```
packages/
├── react-library/     # Libreria React - Funzioni utility
├── vue-library/       # Libreria Vue - Funzioni utility e composables
└── express-library/  # Libreria Express - Middleware e funzioni utility
```

## Librerie

### @spacedesign-aurora/react-library

Libreria di funzioni utility JavaScript per React. Include funzioni per formattazione, validazione, manipolazione dati e altro.

[Documentazione](./packages/react-library/README.md)

**Funzioni principali:**

- `formatDate` - Formattazione date
- `formatCurrency` - Formattazione valuta
- `validateEmail` - Validazione email
- `debounce` / `throttle` - Controllo esecuzione funzioni
- `deepClone` - Clonazione profonda oggetti
- `generateId` - Generazione ID univoci
- `capitalize` / `slugify` - Manipolazione stringhe
- `parseQueryString` - Parsing query string

### @spacedesign-aurora/vue-library

Libreria di funzioni utility JavaScript e composables per Vue 3. Include le stesse funzioni utility della libreria React più composables specifici per Vue.

[Documentazione](./packages/vue-library/README.md)

**Funzioni principali:**

- Tutte le funzioni utility della libreria React
- `useDebounce` - Composable per debounce reattivo
- `useThrottle` - Composable per throttle reattivo

### @spacedesign-aurora/express-library

Libreria di middleware e funzioni utility TypeScript per Express. Include middleware per gestione errori, logging, CORS, rate limiting, validazione e funzioni utility per server-side.

[Documentazione](./packages/express-library/README.md)

**Middleware:**

- `errorHandler` - Gestione errori centralizzata
- `logger` - Logging richieste
- `corsConfig` - Configurazione CORS
- `rateLimiter` - Limitazione richieste
- `validateRequest` - Validazione richieste

**Funzioni utility:**

- `formatDate` / `formatCurrency` - Formattazione
- `validateEmail` - Validazione
- `generateId` / `slugify` - Generazione e manipolazione
- `sanitizeInput` - Sanitizzazione input
- `hashPassword` / `comparePassword` - Gestione password
- `generateToken` / `verifyToken` - Gestione JWT

## Sviluppo

### Installazione delle dipendenze

```bash
# Installare le dipendenze per ogni libreria
cd packages/react-library && npm install
cd ../vue-library && npm install
cd ../express-library && npm install
```

### Build

```bash
# Build di una singola libreria
cd packages/react-library && npm run build
cd packages/vue-library && npm run build
cd packages/express-library && npm run build

# Oppure dal root
npm run build:all
```

## Pubblicazione su npm

Prima di pubblicare, assicurati di:

1. Aggiornare le versioni nei `package.json`
2. Eseguire il build di ogni libreria
3. Verificare che i file `.npmignore` siano corretti

### Pubblicare una libreria

```bash
cd packages/react-library
npm login
npm publish --access public

cd ../vue-library
npm publish --access public

cd ../express-library
npm publish --access public
```

## Licenza

MIT
