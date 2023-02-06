import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@slices": path.resolve(__dirname, "./src/slices/slices"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@utils": path.resolve(__dirname, "./utils"),
    },
  },
  plugins: [react(), eslint(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    coverage: {
      reporter: ["text", "json", "html"],
    },
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
    mockReset: true,
  },
});
