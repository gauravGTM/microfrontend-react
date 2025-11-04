import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    federation({
      name: "profile",
      filename: "assets/remoteEntry.js",
      exposes: {
        "./Profile": "./src/Profile.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 4173,
    hmr: false,
    cors: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  ssr: {
    noExternal: ["react", "react-dom"],
  },
});
