import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: "/portfolio_team",
  build: {
    assets: "assets"
  },
  integrations: [mdx()]
});