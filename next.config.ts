import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "encrypted-tbn3.gstatic.com",
      "img.ltwebstatic.com",
      "www.theattico.com",
      "encrypted-tbn2.gstatic.com",
      "media-photos.depop.com",
      "encrypted-tbn0.gstatic.com",
      "images.pexels.com",
      "media.licdn.com",
      "i.pinimg.com",
      "img-va.myshopline.com",
      "encrypted-tbn1.gstatic.com",
      "n.nordstrommedia.com",
      "preview.redd.it",
      "lafemmeapero.com",
      "cdn.fynd.com",
      "i.etsystatic.com",
      "i.ebayimg.com",
      "substackcdn.com",
      "images.fashiola.in",
    ],
  },
};

export default nextConfig;
