// @ts-check
import { defineConfig } from "astro/config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isGitHubPages ? "https://team-3-astro.github.io" : undefined,
  base: isGitHubPages ? "/astro_test" : "/",
});
