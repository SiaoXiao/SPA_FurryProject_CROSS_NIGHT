import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [vue(), Icons()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    devSourcemap: true,
    extract: false,
  },
  server: {
    open: true,
    host: "0.0.0.0",
    port: 3000,
  },
});
