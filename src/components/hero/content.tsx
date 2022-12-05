import React from "react";
import Typewriter from "typewriter-effect";
import TitleButtons from "./titleButtons";
import Stats from "./stats";
import HeroImage from "./HeroImage";

const titleArray = [
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
      <div className="flex col-span-1 justify-center lg:justify-start mx-12 lg:mx-24 pt-2 xl:pt-10 2xl:pt-40 ">
        <div>
          <h1 className="text-center lg:text-left text-5xl lg:text-7xl font-bold font-poppins text-black">
            Take Control of Your
          </h1>
          <h1
            className={`text-center lg:text-left lg:inline-flex text-5xl lg:text-7xl font-bold break-after-column font-poppins ${currentTitle.color} flex-wrap lg:inline-flex`}
          >
            <Typewriter
              options={{
                strings: currentTitle.title,
                autoStart: true,
                loop: true,
              }}
            />
            <a className="text-center lg:text-left text-5xl lg:text-7xl font-bold font-poppins text-black">
              Business.
            </a>
          </h1>

          <p className="text-center lg:text-left mt-8 text-gray-800 font-poppins text-lg lg:text-2xl ">
            Oni gives you the tools you need to grow your platforms. With an
            extremely customizable interface, Oni is built specifically for you.
          </p>
          <TitleButtons />
          <Stats />
        </div>
      </div>
      <HeroImage />
    </div>
  );
};

export default Content;
