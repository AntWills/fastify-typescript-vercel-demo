import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/serverless.ts"],
  outDir: "dist",
  format: ["esm"],
  clean: true,
  sourcemap: true,
  minify: false,
  target: "node18",
  tsconfig: "tsconfig.json",
});
