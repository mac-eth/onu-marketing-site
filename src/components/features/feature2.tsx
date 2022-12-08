import React from "react";
import FeatureSection from "./featureSection";
import { InboxIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Example2 from "../../assets/Example2.jpg";

const Feature2: React.FC = () => {
  return (
    <FeatureSection
      icon={<SparklesIcon className="" aria-hidden="true" />}
      name="Stay on top of customer support"
      description="Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."
      flipped={true}
      image={Example2}
    />
  );
};

export default Feature2;