"use client";

import { ParallaxBanner } from "react-scroll-parallax";

export default function Test() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: "/rezghob_rts_parallax_landscape_mountains_layer4.webp",
          speed: -10,
          className: "bg-center bg-cover",
        },
        {
          image: "/rezghob_rts_parallax_landscape_mountains_layer3.webp",
          speed: -20,
          className: "bg-center bg-cover",
        },
        {
          image: "/rezghob_rts_parallax_landscape_mountains_layer2.webp",
          speed: -30,
          className: "bg-center bg-cover",
        },
        {
          image: "/rezghob_rts_parallax_landscape_mountains_layer1.webp",
          speed: -40,
          className: "bg-center bg-cover",
        },

        {
          speed: -25,
          children: (
            <div className="absolute inset-0 flex-col flex items-center text-center justify-center">
              <h1 className="text-8xl text-white font-thin">Carey Rolls</h1>
              <p className="text-xl text-white font-thin pt-12">
                Follow allong with Conor and Alina
              </p>
            </div>
          ),
        },

        // { image: "/CRFooterGraphic.png", speed: -10 },
      ]}
      className="aspect-[16/9] w-full h-screen"
    />
  );
}
