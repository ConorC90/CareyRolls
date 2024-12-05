"use client";

import React, { useRef, useEffect, useState } from "react";

const Parallax = ({ backgroundImage }: { backgroundImage: any }) => {
  const [offset, setOffset] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (parallaxRef.current) {
      const parallaxOffset = window.pageYOffset - parallaxRef.current.offsetTop;
      setOffset(parallaxOffset);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={parallaxRef} className="relative overflow-hidden h-screen w-full">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
        className="absolute inset-0 bg-cover bg-fixed bg-center"
      />
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-5xl text-white font-bold mb-5">CareyRolls</h1>
          <p className="text-xl">Follow along with Conor and Alina</p>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
