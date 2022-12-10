import React from "react";
import FeatureSection from "./featureSection";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import Example1 from "../../assets/Example1.jpg";

const Feature1: React.FC = () => {
  return (
    <FeatureSection
      id={1}
      icon={
        <CpuChipIcon
          className="h-8 w-8"
          aria-hidden="true"
          aria-label="CpuChipIcon"
        />
      }
      name="Connect all your social media platforms to one dashboard"
      description="Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."
      flipped={false}
      image={Example1}
    />
  );
};

export default Feature1;
