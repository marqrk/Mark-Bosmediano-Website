import type { OpenNextConfig } from "open-next";

const config: OpenNextConfig = {
  cloudflare: {
    // Required: tells Cloudflare where output will be
    outputPath: ".open-next/cloudflare",
  },
};

export default config;
