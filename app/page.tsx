import * as Craft from "@/components/craft/layout";
import HomePage from "./home/page";
import Test from "./test";

export default function Home() {
  return (
    <Craft.Main>
      <Test />
      <HomePage />
    </Craft.Main>
  );
}
