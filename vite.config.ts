import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import react from "@vitejs/plugin-react";

/// <reference types="vitest" />
/// <reference types="vite/client" />

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
  // @ts-ignore
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "HRNet-library2",
      fileName: "hrnet-library2",
      formats: ["es"],
    },
    // rollupOptions: {
    //   external: ["react", "react/jsx-runtime"],
    //   input: Object.fromEntries(

    //     glob.sync('lib/**/*.{ts.tsx}').map(file =>[
    //       // this removes 'src/' as well as the file extension from each
    //       // file, so e.g,
    //       // lib/nested/pouet.ts becoms nested/pouet
    //       relative(
    //         "lib",
    //         file.slice(0, file.length - extname(file).length)
    //       ),
    //       // This expands the relative paths to absolute paths, so e.g,
    //       // src/nested/pouet becomes / project/src/nested/pouet.ts
    //       fileURLToPath(new URL(file, import.meta.url))
    //     ])
    //   ),
    //   output:{
    //     assetFileNames: 'assets/[name][extname]',
    //     entryFileNames: '[name].js',
    //   }
    // }
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

  // test: {
  //     globals: true,
  //     environment: 'jsdom',
  //     coverage: {
  //         reporter: ['text', 'json', 'html'],
  //     },
  //     watch: false
  // }
});
