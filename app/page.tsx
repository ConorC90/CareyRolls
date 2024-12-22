import * as Craft from "@/components/craft/layout";
import HomePage from "./home/page";
import Test from "./test";
import MapIframe from "../components/content/mapIframe";

export default function Home() {
  return (
    <Craft.Main>
      <Test />
      <HomePage />
      <MapIframe />
    </Craft.Main>
  );
}
