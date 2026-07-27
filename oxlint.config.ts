import { defineConfig } from "@gameroman/config/oxlint/ts";

export default defineConfig({
  rules: {
    "typescript/restrict-template-expressions": "off",
    "no-unnecessary-condition": "off",
    "no-misused-spread": "off",
    "no-control-regex": "off",
    "no-explicit-any": "off",
    "prefer-template": "off",
  },
  overrides: [
    {
      files: ["**/tests/**"],
      rules: { "prefer-template": "off", "no-base-to-string": "off" },
    },
  ],
});
