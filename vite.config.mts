import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/zeal-portfolio-v2/",
  build: {
    outDir: "build",
  },
  plugins: [react()],
});