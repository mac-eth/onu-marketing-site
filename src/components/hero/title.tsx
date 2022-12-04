import React from "react";

const titleArray = [
  {
    title: "Youtube",
    color: "red-500",
  },
  {
    title: "Twitch",
    color: "purple-500",
  },
  {
    title: "E-Commerce",
    color: "blue-500",
  },
];

const Title: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((i) => (i + 1) % titleArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentTitle = titleArray[currentTitleIndex];

  return (
    <div className="flex justify-start items-center mx-24 pt-40 ">
      <div>
        <h1 className="text-7xl font-bold font-poppins text-black">
          Take Control of Your
        </h1>
        <div className="flex">
          <h1
            className={`text-7xl font-bold font-poppins text-${currentTitle.color}`}
          >
            {currentTitle.title} <a className="text-7xl font-bold font-poppins text-black"> Business.</a>
          </h1>
        </div>

        <p className="text-gray-600">Description</p>
        <div className="flex mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            Button 1
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 ml-4">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
