// careyRolls Config
import careyRolls from "@/careyRolls.config";

// Component Imports
import * as Craft from "@/components/craft/layout";
import { ModeToggle } from "../theme/theme-toggle";
import { Button } from "@/components/ui/button";

// React and Next Imports
import Image from "next/image";
import Link from "next/link";

// Utility Imports
import BikeLogo from "@/public/CRFooterWhite.png";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t drop-shadow-sm bg-customTeal">
      <Craft.Section className="hidden md:flex sm:flex flex-col text-center">
        <Craft.Container className="grid gap-6 p-2">
          <Image src={BikeLogo} alt="BikeLogo" width={250} height={200}></Image>
        </Craft.Container>
        <Craft.Container className="max-w-10xl p-2">
          <ul className="flex gap-12 text-white">
            {Object.entries(careyRolls.menu.main).map(([key, href]) => (
              <li key={key}>
                <Link
                  href={href}
                  className="hover:underline hover:text-coral font-bold"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </Craft.Container>
        <Craft.Container className="p-2">
          <Button variant={"ghost"} asChild size="icon">
            <Link
              className="flex items-center justify-center"
              href="https://www.instagram.com/careyandrolls/"
            >
              <Instagram className="h-[2.2rem] w-[2.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">Visit Instagram</span>
            </Link>
          </Button>
        </Craft.Container>
      </Craft.Section>

      <Craft.Section className="block md:hidden sm:hidden flex flex-col text-center">
        <Craft.Container className="flex items-center">
          <Image src={BikeLogo} alt="BikeLogo" width={200} height={200}></Image>
        </Craft.Container>

        <Craft.Container>
          <h4 className="text-coral">{careyRolls.site_name}</h4>
          <ul className="text-white">
            {Object.entries(careyRolls.menu.main).map(([key, href]) => (
              <li key={key}>
                <Link href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </Craft.Container>
        <Craft.Container className="flex p-2 items-center">
          <Button variant={"ghost"} asChild size="icon">
            <Link
              className="flex items-center justify-center"
              href="https://www.instagram.com/careyandrolls/"
            >
              <Instagram className="h-[2.2rem] w-[2.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">Visit Instagram</span>
            </Link>
          </Button>
        </Craft.Container>
      </Craft.Section>
      <Craft.Container className="md:p-1">
        <p className="text-center text-coral block">
          © CareyRolls.com 2024-present.
        </p>
      </Craft.Container>
    </footer>
  );
};

export default Footer;
