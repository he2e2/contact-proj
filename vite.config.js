import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

const getAliasPath = (path) => {
  return fileURLToPath(new URL(path, import.meta.url));
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/contact-proj",
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": getAliasPath("./src"),
      "@assets": getAliasPath("./src/assets"),
      "@components": getAliasPath("./src/components"),
      "@atoms": getAliasPath("./src/atoms"),
      "@shared": getAliasPath("./src/shared"),
      "@features": getAliasPath("./src/features"),
    },
  },
});
