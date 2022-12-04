import React from "react";
import Typewriter from "typewriter-effect";
import TitleButtons from "./titleButtons";
import Stats from "./stats";

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
    title: "E-Commerce",
    color: "text-[#96bd5a]",
    delay: 4100,
  },
  {
    title: "Blockchain",
    color: "text-sky-500",
    delay: 4100,
  },
];

const Title: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((i) => (i + 1) % titleArray.length);
    }, titleArray[currentTitleIndex].delay);
    return () => clearInterval(interval);
  }, [currentTitleIndex]);

  const currentTitle = titleArray[currentTitleIndex];

  return (
    <div className="grid gap-1 grid-cols-1 md:grid-cols-2 md:gap-8">
      <div className="flex col-span-1 justify-center md:justify-start mx-12 md:mx-24 pt-8 md:pt-40 ">
        <div>
          <h1 className="text-center md:text-left text-5xl md:text-7xl font-bold font-poppins text-black">
            Take Control of Your
          </h1>
          <h1
            className={`text-center md:text-left md:inline-flex text-5xl md:text-7xl font-bold font-poppins ${currentTitle.color} flex-wrap md:inline-flex`}
          >
            <Typewriter
              options={{
                strings: currentTitle.title,
                autoStart: true,
                loop: true,
              }}
            />
            <a className="text-center md:text-left text-5xl md:text-7xl font-bold font-poppins text-black">
              Business.
            </a>
          </h1>

          <p className="text-center md:text-left mt-8 text-gray-800 font-poppins text-lg md:text-2xl ">
            Oni gives you the tools you need to grow your platforms. With an
            extremely customizable interface, Oni is built specifically for you.
          </p>
          <TitleButtons />
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Title;
