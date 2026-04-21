import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://inusuallabs.github.io",
  base: '/web',
  output: "static",
  trailingSlash: "ignore",
});
