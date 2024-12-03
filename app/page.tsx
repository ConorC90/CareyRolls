import * as Craft from "@/components/craft/layout";
import HomePage from "./home/page";

export default function Home() {
  return (
    <Craft.Main>
      <div className="flex flex-col items-center justify-center text-center bg-nav-navMenu">
        <h2 className="text-2xl font-bold font-bobby">CAREYROLLS</h2>
        <p className="text-lg text-gray-600">A travel blog by Conor & Alina</p>
      </div>
      <HomePage />
    </Craft.Main>
  );
}
