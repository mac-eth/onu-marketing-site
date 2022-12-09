import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import TitleButtons from "./titleButtons";
import Stats from "./stats";
import OnuHeroImage from "../../assets/OnuHeroImage.png";
import { TitleWordArray } from "../../../types";

const titleArray: TitleWordArray = [
  {
    title: "Youtube",
    color: "text-[#fe0021]",
    delay: 3300,
  },
  {
    title: "Twitch",
    color: "text-[#5631bf]",
    delay: 3100,
  },
  {
    title: "Spotify",
    color: "text-[#0cd569]",
    delay: 3250,
  },
  {
    title: "Influencer",
    color: "text-[#f64229]",
    delay: 4100,
  },
  {
    title: "Blockchain",
    color: "text-sky-500",
    delay: 4100,
  },
];

const Content: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((i) => (i + 1) % titleArray.length);
    }, titleArray[currentTitleIndex].delay);
    return () => clearInterval(interval);
  }, [currentTitleIndex]);

  const currentTitle = titleArray[currentTitleIndex];

  return (
    <div className="grid gap-1 grid-cols-1 lg:grid-cols-2 lg:gap-8">
      <div className="flex col-span-1 justify-center lg:justify-start mx-12 lg:mx-24 pt-2 xl:pt-10 2xl:pt-40">
        <div>
          <h1 className="text-center lg:text-left text-3xl lg:text-7xl font-bold text-gray-900">
            Take Control of Your
          </h1>
          <h1
            className={`text-center lg:text-left text-3xl lg:text-7xl font-bold ${currentTitle.color} flex-wrap`}
          >
            <Typewriter
              options={{
                strings: currentTitle.title,
                autoStart: true,
                loop: true,
              }}
            />
            <a className="text-center lg:text-left text-3xl lg:text-7xl font-bold text-gray-900">
              Business.
            </a>
          </h1>

          <p className="text-center lg:text-left mt-8 text-gray-800 text-md lg:text-xl">
            With an extremely customizable and easy to you use interface, Onu gives you the tools you need to grow your business.
          </p>
          <TitleButtons />
            <Stats />
        </div>
      </div>
      <div className="relative hidden lg:flex">
      <div className="absolute w-2/3 h-2/3 bottom-14 right-20 rounded-full border-2 border-gray-800 shadow-md shadow-gray-900 bg-tertiary"/>
      <Image
        src={OnuHeroImage}
        alt="HeroImage"
        className="z-30"
      />
      </div>
    </div>
  );
};

export default Content;
