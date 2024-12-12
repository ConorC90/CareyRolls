"use client";

import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function ParallaxComponent() {
  return (
    <Parallax scale={[1, 0]}>
      <div className="w-48 h-48 bg-red-500" />
    </Parallax>
  );
}
