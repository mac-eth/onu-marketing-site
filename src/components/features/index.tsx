import React from "react";
import FeatureSectionDescription from "./featureSectionDescription";
import Feature1 from "./feature1";
import Feature2 from "./feature2";

const Features: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-white">
      <div className="py-24 mx-12">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <FeatureSectionDescription />
        </div>
      </div>
      <div className="rounded-3xl bg-white mx-12">
      <Feature1 />
      <Feature2 />
      </div>
    </div>
  );
};

export default Features;
