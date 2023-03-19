import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Have vite.config.js show a message on browser when there's a problem in the code

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
