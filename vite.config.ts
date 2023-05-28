import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import postcssPxtorem from "postcss-pxtorem";
import path from "path";

export default defineConfig({
  base: "/",
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: path.resolve(__dirname, "./src") + "/",
      },
      {
        find: /^~@\//,
        replacement: path.resolve(__dirname, "./src") + "/",
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3001,
    strictPort: true,
    https: false,
    open: false,
  },
  plugins: [react()],
});
