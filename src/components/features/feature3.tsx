import React from "react";
import FeatureSection from "./featureSection";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import Example2 from "../../assets/Example2.jpg";

const Feature3: React.FC = () => {
  return (
    <FeatureSection
      id={3}
      icon={<ChartBarSquareIcon className="" aria-hidden="true" aria-label="ChartBarSquareIcon" />}
      name="Get real time analytics using OnuPulse"
      description="Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."
      flipped={false}
      image={Example2}
    />
  );
};

export default Feature3;