import type { MetadataRoute } from "next";

// Web app manifest: gives the site a proper name, icon, and chrome color when
// saved to a phone home screen. Icons are the generated JCZ roundel routes.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jonathan Crespo | Automotive Paint Specialist",
    short_name: "Jonathan Crespo",
    description:
      "High-end automotive paint specialist in Bellevue, Washington. Collision repair to full restoration, finished in Glasurit 100 Line.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f5f6",
    theme_color: "#f4f5f6",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
