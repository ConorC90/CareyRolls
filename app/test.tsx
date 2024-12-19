"use client";
import dynamic from "next/dynamic";
import React from "react";

const ParallaxBannerNoSSR = dynamic(
  () => import("react-scroll-parallax").then((mod) => mod.ParallaxBanner),
  {
    ssr: false,
  }
);

const bannerClass = "w-full h-screen"; // Fullscreen banner class

export default function Test() {
  return (
    <ParallaxBannerNoSSR
      layers={[
        {
          image: "landscape.JPG",
          speed: 20,
          className: "bg-center bg-cover",
        },
        {
          // image: "/careyandrolls.png",
          speed: -30,
          className: "flex justify-center items-center",
          children: (
            <div
              className="bg-center bg-contain bg-no-repeat w-full h-full sm:w-3/4 sm:h-3/4 md:w-1/2 md:h-1/2"
              style={{ backgroundImage: "url(/careyandrolls.png)" }}
            />
          ),
        },
      ]}
      className={bannerClass}
    />
  );
}
