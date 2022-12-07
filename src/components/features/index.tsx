import React from "react";
import FeatureSectionDescription from "./featureSectionDescription";
import Feature1 from "./feature1";
import Feature2 from "./feature2";

const Features: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <div className="py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <FeatureSectionDescription />
        </div>
      </div>
      <Feature1 />
      <Feature2 />
    </div>
  );
};

export default Features;
