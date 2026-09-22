import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  // Parent folders (and extra lockfiles) can make Next infer the wrong
  // workspace root; pin it to this project so Turbopack resolves modules here.
  outputFileTracingRoot: projectRoot,
  images: {
    localPatterns: [
      { pathname: "/assets/**", search: "" },
      { pathname: "/assets/**", search: "?v=2" },
    ],
  },
  turbopack: {
    root: projectRoot,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // SAMEORIGIN (not DENY) so the resume page can embed its own PDF;
          // still blocks other sites from framing us (clickjacking protection).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Spline scenes are edited in place; immutable 1y cache made logo/color
      // updates invisible. Later matching sources override the same header.
      {
        source: "/:path*.spline",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
