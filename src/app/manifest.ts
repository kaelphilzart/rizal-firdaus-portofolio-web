import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Technophil Media",
    short_name: "Technophil",
    description:
      "Technophil Media",
    start_url: "/",
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#C12126",
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
      {
        src: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      }
    ],
    categories: [
      "kecantikan",
      "perawatan kulit",
      "kosmetik",
      "beauty",
      "skincare",
      "cosmetics"
    ],
    lang: "id", // Sesuaikan dengan bahasa utama
    scope: "/"
  };
}
