import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { inspectAttr } from "kimi-plugin-inspect-react";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
   base: "./",
   plugins: [
      inspectAttr(),
      react(),
      sitemap({
         hostname: "https://fahmi-jasa-design.vercel.app",
      }),
   ],
   server: {
      port: 3000,
   },
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./src"),
      },
   },
});
