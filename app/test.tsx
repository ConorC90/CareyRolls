"use client";

import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";

const bannerClass = "w-full h-screen";

export default function Test() {
  return (
    <ParallaxBanner
      layers={[
        {
          // Background layer with parallax effect
          children: (
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/landscape.JPG"
                alt="Background landscape"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          ),
          speed: 10, // Background moves slower than scroll
        },
        {
          // Foreground content with parallax effect
          children: (
            <div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                backgroundImage: "url(/careyandrolls.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          ),
          speed: -30, // Foreground moves faster than scroll
        },
      ]}
      className={bannerClass}
    />
  );
}
