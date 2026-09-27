import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Permite utilizar JSX en los componentes del proyecto original.
export default defineConfig({
  plugins: [react()],
});
