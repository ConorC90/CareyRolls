import * as Craft from "@/components/craft/layout";
import HomePage from "./home/page";

export default function Home() {
  return (
    <Craft.Main>
      <div className="flex flex-col items-center justify-center text-center bg-customTeal">
        <span className="text-8xl my-2   text-white font-playfair ">
          CAREYROLLS
        </span>
        <span className="text-4xl my-4 text-white font-raleway">
          A travel blog by Conor & Alina.
        </span>
      </div>
      <HomePage />
    </Craft.Main>
  );
}
