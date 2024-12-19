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
          className: "bg-center bg-contain",
        },
        {
          image: "/careyandrolls.png",
          speed: -30,
          className: `bg-center bg-contain`,
        },
      ]}
      className={bannerClass}
    />
  );
}
