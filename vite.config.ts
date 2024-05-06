import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

/**
 * DTS PLUGIN
 * generates a file that contains the TYPES of all the funtions and components
 * that we are exporting
 */

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.tsx"),
      name: "OpenUI",
      fileName: "open-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"], //dependency that we don't want to bring inside our package
      output: {
        globals: {
          react: "Reat",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react(), dts({ rollupTypes: true })],
});
