import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true
  },
  optimizeDeps: {
    include: ['@phosphor-icons/react'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});