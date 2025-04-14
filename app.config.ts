import { defineConfig } from "@solidjs/start/config";
import { getPills } from "./src/lib/api";

export default defineConfig({
  server: {
    prerender: {
      routes: ["/", "/pills"],
    },
    hooks: {
      async "prerender:routes"(routes) {
        // 👈 This hook is called just before reading the routes array from previous line
        const pills = await getPills();
        pills.forEach(({ id }) => routes.add(`/pills/${id}`));
      },
    },
  },
});
