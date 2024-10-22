import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.scss";
import "./assets/fonts/ontario-v1.0/style.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/**
 * Punto de entrada principal de la aplicación.
 */
createRoot(document.getElementById("root")).render(
  <>
      <App />
  </>
);
