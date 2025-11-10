# @spacedesign-aurora/react-library

Libreria di funzioni utility JavaScript per React - SpaceDesign Aurora.

## Installazione

```bash
npm install @spacedesign-aurora/react-library
```

## Utilizzo

### Setup del Context Provider

Prima di utilizzare le funzioni che richiedono `licenseKey` e `projectToken`, devi avvolgere la tua applicazione con `AuroraProvider`:

```javascript
import React from "react";
import { AuroraProvider } from "@spacedesign-aurora/react-library";

function App() {
  return (
    <AuroraProvider
      licenseKey="your-license-key"
      projectToken="your-project-token"
    >
      {/* La tua applicazione */}
    </AuroraProvider>
  );
}
```

### useFeatureFlag

Hook per controllare i feature flags usando `licenseKey` e `projectToken` dal context.

```javascript
const { checkFeatureFlag } = useFeatureFlag();

// Utilizzo
const result = await checkFeatureFlag("feature-flag-key");
```

**Nota:** Deve essere usato all'interno di un `AuroraProvider`.

## Licenza

MIT
