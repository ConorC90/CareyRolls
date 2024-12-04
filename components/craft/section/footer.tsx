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
import BikeLogo from "@/public/CRFooterGraphic.png";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t drop-shadow-sm bg-customTeal">
      <Craft.Section className="hidden sm:flex flex-col text-center">
        <Craft.Container className="grid gap-6 p-2">
          <Image src={BikeLogo} alt="BikeLogo" width={200} height={200}></Image>
        </Craft.Container>
        <Craft.Container className="max-w-10xl p-2">
          <ul className="flex gap-12">
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
        <Craft.Container>
          <Button asChild size="icon">
            <Link
              className="flex items-center justify-center"
              href="https://www.google.com"
            >
              <Instagram className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">Visit Instagram</span>
            </Link>
          </Button>
        </Craft.Container>
      </Craft.Section>

      <Craft.Section className="block md:hidden flex flex-col text-center">
        <Craft.Container className="flex items-center">
          <Image src={BikeLogo} alt="BikeLogo" width={200} height={200}></Image>
        </Craft.Container>

        <Craft.Container>
          <h4 className="text-muted-foreground">{careyRolls.site_name}</h4>
          <ul>
            {Object.entries(careyRolls.menu.main).map(([key, href]) => (
              <li key={key}>
                <Link href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </Craft.Container>
        <Craft.Container className="flex items-center">
          <Button asChild size="icon">
            <Link
              className="flex items-center justify-center"
              href="https://www.google.com"
            >
              <Instagram className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">Visit Instagram</span>
            </Link>
          </Button>
        </Craft.Container>
      </Craft.Section>
      <Craft.Container className="md:p-1">
        <p className="text-center text-muted-foreground block">
          © CareyRolls.com 2024-present.
        </p>
      </Craft.Container>
    </footer>
  );
};

export default Footer;
