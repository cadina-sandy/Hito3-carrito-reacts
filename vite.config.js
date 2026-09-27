import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Permite utilizar JSX en los componentes del proyecto original.
export default defineConfig({
  plugins: [react()],

  // Ruta del proyecto en GitHub Pages.
  base: "/Hito3-carrito-reacts/",
});
