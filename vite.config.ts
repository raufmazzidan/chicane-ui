import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true,
      outDir: "dist",
      rollupTypes: true,
    }),
  ],
  test: {
    ...configDefaults,
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DesignSystemPlayground",
      formats: ["es", "umd"],
      fileName: (format) => `core.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    cssCodeSplit: true,
  },
});
