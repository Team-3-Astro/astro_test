[1mdiff --git a/astro.config.mjs b/astro.config.mjs[m
[1mindex e762ba5..b322149 100644[m
[1m--- a/astro.config.mjs[m
[1m+++ b/astro.config.mjs[m
[36m@@ -1,5 +1,8 @@[m
 // @ts-check[m
[31m-import { defineConfig } from 'astro/config';[m
[32m+[m[32mimport { defineConfig } from "astro/config";[m
 [m
 // https://astro.build/config[m
[31m-export default defineConfig({});[m
[32m+[m[32mexport default defineConfig({[m
[32m+[m[32m  site: "https://team-3-astro.github.io",[m
[32m+[m[32m  base: "/astro_test",[m
[32m+[m[32m});[m
