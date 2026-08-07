import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://yunnan-province.com",
  trailingSlash: "never",
  server: { port: 4322 },
  integrations: [sitemap({ lastmod: new Date("2026-08-07") })],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
});
