import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://t8hs1hfx-3000.asse.devtunnels.ms",
        changeOrigin: true,
      },
    },
  },
});
