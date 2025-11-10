# @spacedesign-aurora/vue-library

Libreria di funzioni utility JavaScript e composables per Vue - SpaceDesign Aurora.

## Installazione

```bash
npm install @spacedesign-aurora/vue-library
```

## Utilizzo

### Funzioni Utility

```javascript
import {
  formatDate,
  formatCurrency,
  validateEmail,
  debounce,
  throttle,
  deepClone,
  generateId,
  capitalize,
  slugify,
  parseQueryString,
} from '@spacedesign-aurora/vue-library';

// Formattazione date
const formatted = formatDate(new Date(), { format: 'long', locale: 'it-IT' });

// Formattazione valuta
const price = formatCurrency(1234.56, { currency: 'EUR', locale: 'it-IT' });

// Validazione email
const isValid = validateEmail('user@example.com');

// Debounce
const debouncedSearch = debounce((query: string) => {
  console.log('Cerca:', query);
}, 300);

// Throttle
const throttledScroll = throttle(() => {
  console.log('Scroll event');
}, 100);

// Deep clone
const cloned = deepClone(originalObject);

// Genera ID
const id = generateId('user');

// Capitalizza
const capitalized = capitalize('ciao mondo');

// Slugify
const slug = slugify('Ciao Mondo!');

// Parse query string
const params = parseQueryString('?name=John&age=30');
```

### Composables

```vue
<template>
  <div>
    <input v-model="searchQuery" />
    <p>Risultato debounced: {{ debouncedQuery }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDebounce, useThrottle } from '@spacedesign-aurora/vue-library';

const searchQuery = ref('');
const debouncedQuery = useDebounce(searchQuery, 300);
</script>
```

## Funzioni Disponibili

### Funzioni Utility

Tutte le funzioni utility sono identiche a quelle della libreria React:
- `formatDate` - Formatta una data
- `formatCurrency` - Formatta un numero come valuta
- `validateEmail` - Valida un indirizzo email
- `debounce` - Crea una funzione debounced
- `throttle` - Crea una funzione throttled
- `deepClone` - Crea una copia profonda
- `generateId` - Genera un ID univoco
- `capitalize` - Capitalizza la prima lettera
- `slugify` - Converte in slug
- `parseQueryString` - Analizza una query string

### Composables

#### useDebounce

Composable per debounce di un valore reattivo.

```javascript
const debouncedValue = useDebounce(value, delay) // value: Ref, delay?: number
```

#### useThrottle

Composable per throttle di un valore reattivo.

```javascript
const throttledValue = useThrottle(value, limit) // value: Ref, limit?: number
```

## Licenza

MIT
