import * as Craft from "@/components/craft/layout";
import HomePage from "./home/page";
import Logo from "@/public/placeholder-2.jpg";
import { Parallax } from "react-scroll-parallax";
import ParallaxComponent from "../components/craft/parallax";
import Test from "./test";

export default function Home() {
  return (
    <Craft.Main>
      <Test />
      <HomePage />
    </Craft.Main>
  );
}
