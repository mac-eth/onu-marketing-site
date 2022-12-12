import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const TitleButtons: React.FC = () => {
  return (
    <div>
    <div className="flex justify-center text-center lg:justify-start mt-12 gap-6 pb-8">
      <button className="flex flex-row text-center px-6 py-3 rounded-xl shadow-md bg-white shadow-secondary border-2 border-secondary text-gray-900 font-medium text-lg lg:text-xl hover:bg-secondary hover:text-white hover:scale-110 duration-150" role="button" aria-label="Read-More">
        Read More
      </button>
      <button className="flex flex-row text-center px-6 py-3 rounded-xl whitespace-nowrap shadow-md shadow-gray-900 bg-secondary border-2 border-gray-900 text-white font-medium text-lg lg:text-xl hover:bg-gray-900 hover:text-white hover:scale-110 duration-150" role="button" aria-label="Get-Started">
        Get Started
        < ArrowUpRightIcon className="ml-2 h-7 w-7 text-white" />
      </button>
    </div>
    </div>
  );
};

export default TitleButtons;