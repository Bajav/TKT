import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@phosphor-icons/react'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',  // ✅ Treat all .js as JSX during optimization
      },
    },
  },
});