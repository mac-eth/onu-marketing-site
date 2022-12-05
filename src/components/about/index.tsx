import React from "react";
import Description from "./description";
import AboutFeatures from "./aboutFeatures";

const About: React.FC = () => {
  return (
    <div className="snap-start h-screen w-full">
      <Description />
      <AboutFeatures />
    </div>
  );
};

export default About;

