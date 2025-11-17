import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],

  // 🔥 This fixes ALL React Router refresh 404 errors
  server: {
    historyApiFallback: true,
  },
});
