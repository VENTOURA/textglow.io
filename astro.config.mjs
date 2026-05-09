import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://textglow.io",
  srcDir: "./astro",
  publicDir: "./public",
  outDir: "./dist",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [react(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "react-helmet-async": fileURLToPath(
          new URL("./astro/shims/react-helmet-async.tsx", import.meta.url),
        ),
      },
    },
  },
});
