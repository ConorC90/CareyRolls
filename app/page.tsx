import * as Craft from "@/components/craft/layout";
import HomePage from "./home/page";
import Test from "./test";
import MapIframe from "../components/content/mapIframe";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Craft.Main>
      <Test />
      <HomePage />
      <MapIframe />

      <Craft.Container className="flex text-center flex-col justify-center px-0">
        <h2>Sign up to our mailing list!</h2>
        <p className="mb-6">
          By signing up to our mailing list, you will be able to keep up to date
          with all our happenings.
        </p>
        <Button size={"lg"} asChild>
          <Link
            className="flex items-center justify-center text-coral hover:underline max-w-[300px] w-full mx-auto"
            href="https://mailchi.mp/d4f8a952daeb/mailing-list-sign-up"
            aria-label="Sign up for Carey and Rolls' mailing list"
          >
            Sign Up
          </Link>
        </Button>
      </Craft.Container>
    </Craft.Main>
  );
}
