import React from "react";

const TitleButtons: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-start mt-12 gap-6">
      <button className="px-6 py-3 bg-black rounded-xl border-2 border-black text-white font-poppins font-medium text-md md:text-xl hover:bg-transparent hover:text-black">
        Read More
      </button>
      <button className="px-6 py-3 bg-transparent rounded-xl border-2 border-black text-black font-poppins font-medium text-md md:text-xl hover:bg-black hover:text-white">
        Get Started
      </button>
    </div>
  );
};

export default TitleButtons;