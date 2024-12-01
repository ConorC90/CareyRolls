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
import Logo from "@/public/logo.svg";
import Balancer from "react-wrap-balancer";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t drop-shadow-sm">
      <Craft.Section>
        <Craft.Container className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">Craft UI</h3>
              <Image src={Logo} alt="Logo" width={100} height={50}></Image>
            </Link>
            <p>
              <Balancer>
                Follow along with Conor and Alina on thier bike trip.
              </Balancer>
            </p>

            <div className="flex gap-2">
              <ModeToggle />
              <Button variant="outline" asChild size="icon">
                <Link href={"www.google.com"}>
                  <Mail className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span className="sr-only">Visit Twitter</span>
                </Link>
              </Button>
              <Button variant="outline" asChild size="icon">
                <Link href={"www.google.com"}>
                  <Instagram className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span className="sr-only">Visit Twitter</span>
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground hidden sm:block">
              CareyRolls.com © 2024-present.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-0">
            <div className="flex flex-col gap-2">
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
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-muted-foreground">Blog</h4>
              <ul>
                {Object.entries(careyRolls.menu.content).map(([key, href]) => (
                  <li key={key}>
                    <Link href={href}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground block sm:hidden">
            Code © <a href="https://9d8.dev">9d8</a>. 2023-present.
          </p>
        </Craft.Container>
      </Craft.Section>
    </footer>
  );
};

export default Footer;
