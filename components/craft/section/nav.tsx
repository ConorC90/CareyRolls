"use client";

import { useEffect, useState } from "react";

// careyRolls Config
import careyRolls from "@/careyRolls.config";

// Next Imports
import Link from "next/link";
import Image from "next/image";

// Utility Imports
import { cn } from "@/lib/utils";

// Component Imports
import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";

import Logo from "@/public/CRLogo.png";

const Nav = ({ className, children, id }: NavProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // Current scroll position
      const currentScrollY = window.scrollY;

      // Set the navbar to be invisible if scrolling down, and visible if scrolling up
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 90);

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-customTeal drop-shadow-sm flex py-4 justify-between items-center transition-transform duration-300 ${
        isVisible ? "" : "-translate-y-full"
      } ${className}`}
      id={id}
    >
      <Link className="hover:opacity-75 transition-all px-8" href="/">
        <h2 className="sr-only">Carey Rolls</h2>
        <Image src={Logo} alt="Logo" width={50} height={48}></Image>
      </Link>
      {children}
      <div
        id="nav-container"
        className="max-w-5xl mx-auto p2-4 px-6 sm:px-8 flex justify-center items-center"
      >
        <div className="flex items-center gap-2 justify-center">
          <NavMenu />
        </div>
      </div>
      <div className="flex justify-end px-10">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
