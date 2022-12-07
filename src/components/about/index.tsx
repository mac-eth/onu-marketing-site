import React from "react";
import AboutSectionDescription from "./aboutSectionDescription";
import AboutFeatures from "./aboutFeatures";

const About: React.FC = () => {
  return (
    <div className="min-h-screen relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <AboutSectionDescription />
        <AboutFeatures />
      </div>
    </div>
  );
};

export default About;
