import React from "react";

const TitleButtons: React.FC = () => {
  return (
    <div className="flex justify-center lg:justify-start mt-12 gap-6 pb-8">
      <button className="px-6 py-3 rounded-xl shadow-md bg-white shadow-secondary border-2 border-secondary text-black font-poppins font-medium text-lg lg:text-xl hover:bg-secondary hover:text-white">
        Read More
      </button>
      <button className="px-6 py-3 rounded-xl shadow-md shadow-black bg-secondary border-2 border-black text-white font-poppins font-medium text-lg lg:text-xl hover:bg-black hover:text-white">
        Get Started
      </button>
    </div>
  );
};

export default TitleButtons;