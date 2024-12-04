import * as Craft from "@/components/craft/layout";
import HomePage from "./home/page";

export default function Home() {
  return (
    <Craft.Main>
      <div className="flex flex-col items-center justify-center text-center bg-customTeal p-2 pb-8">
        <p className="text-4xl my-2 text-white font-playfair ">CAREYROLLS</p>
        <span className="text-xl text-white  font-raleway">
          A travel blog by Conor & Alina.
        </span>
      </div>
      <HomePage />
    </Craft.Main>
  );
}
