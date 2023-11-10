import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import react from "@vitejs/plugin-react";

/// <reference types="vitest" />
/// <reference types="vite/client" />

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
  // @ts-ignore
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
    watch: false,
  },
  // @ts-ignore
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "HRNet-library2",
      fileName: "hrnet-library2",
      formats: ["es"],
    },

    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
