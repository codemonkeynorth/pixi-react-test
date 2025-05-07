import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          pixi: ["pixi.js"],
          "pixi-react": ["@pixi/react"],
          //"pixi-filters": ["pixi-filters"],
        },
      },
    },
  },
})
