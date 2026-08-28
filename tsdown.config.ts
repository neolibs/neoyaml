import { defineConfig } from "tsdown";

export default defineConfig({
  exports: true,
  dts: true,
  deps: { onlyBundle: ["js-yaml"] },
  outputOptions: { comments: false },
});
