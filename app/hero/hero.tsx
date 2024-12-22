import {heroEmojies} from "@/app/lib/emojies";
import Emoji from "@/app/utils/emoji";
import { Emoji as EmojiType } from "@/app/lib/interfaces";
import { displayFont } from "@/app/lib/fonts";
import { GlobeWrapper } from "./globeWrapper";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-primary xl:px-40 xl:py-20 md:px-12 md:py-12 px-4 py-8 z-20">
      <div className="w-full h-full relative grid place-items-center">
        <h1 className={`xl:text-8xl md:text-6xl text-3xl text-center text-secondary z-20 ${displayFont.className}`}>
          Unvieling The Code Artisian
        </h1>
        {
          heroEmojies.map((emoji: EmojiType, index) => (
            <Emoji data={emoji} key={index} />
          ))
        }
        <GlobeWrapper />
      </div>
    </section>
  );
};

export default Hero;
