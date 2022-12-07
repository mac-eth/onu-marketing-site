import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const TitleButtons: React.FC = () => {
  return (
    <div className="flex justify-center text-center lg:justify-start mt-12 gap-6 pb-8">
      <button className="px-6 py-3 rounded-xl shadow-md bg-gray-100 bg-white shadow-secondary border-2 border-secondary text-black font-poppins font-medium text-lg lg:text-xl hover:bg-secondary hover:text-white">
        Read More
      </button>
      <button className="px-6 py-3 flex rounded-xl whitespace-nowrap shadow-md shadow-black bg-secondary border-2 border-black text-white font-poppins font-medium text-lg lg:text-xl hover:bg-black hover:text-white">
        Get Started
        < ArrowUpRightIcon className="ml-2 h-7 w-7 text-white" />
      </button>
    </div>
  );
};

export default TitleButtons;