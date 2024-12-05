import * as Craft from "@/components/craft/layout";
import HomePage from "./home/page";
import Parallax from "@/components/craft/parallax";
import Logo from "@/public/placeholder-2.jpg";

export default function Home() {
  return (
    <Craft.Main>
      {/* <div className="flex flex-col items-center justify-center text-center bg-customTeal p-2 pb-8">
        <p className="text-4xl my-2 text-white font-playfair ">CAREYROLLS</p>
        <span className="text-xl text-white  font-raleway">
          A travel blog by Conor & Alina.
        </span>
      </div> */}
      <Parallax
        backgroundImage={
          "https://api.careyrolls.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-09-09-at-11.49.44-1.jpeg"
        }
      ></Parallax>
      <HomePage />
    </Craft.Main>
  );
}
