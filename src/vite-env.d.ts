/// <reference types="vite/client" />

// Informa ao TypeScript que arquivos .css são módulos válidos
// Isso evita o erro ts(2307) ao importar './index.css' no main.tsx

declare module '*.css';
