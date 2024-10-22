import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.jsx"], // Revisa solo archivos JSX
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
      },
    },
    rules: {
      "no-unused-vars": "warn", // Ejemplo de regla
    },
  },
  pluginReact.configs.flat.recommended, // Configuración recomendada para React
];
