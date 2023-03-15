import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 629,
  site: "jose",
  domains: ["deco-sites-jose.deno.dev"],
});