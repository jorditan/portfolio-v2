// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://matias-jordan-portfolio.vercel.app",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  image: {
    domains: [],
  },
  compressHTML: true,
});
