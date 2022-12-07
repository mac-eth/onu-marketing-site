import React from "react";
import Description from "./description";
import AboutFeatures from "./aboutFeatures";

const About: React.FC = () => {
  return (
    <div className="h-screen relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <Description />
        <AboutFeatures />
      </div>
    </div>
  );
};

export default About;
