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

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-customTeal drop-shadow-sm flex py-4 justify-between items-center",
        className
      )}
      id={id}
    >
      <Link className="hover:opacity-75 transition-all px-8" href="/">
        <h2 className="sr-only">Carey Rolls</h2>
        <Image src={careyRolls.logo} alt="Logo" width={72} height={48}></Image>
      </Link>
      {children}
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-center items-center"
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
