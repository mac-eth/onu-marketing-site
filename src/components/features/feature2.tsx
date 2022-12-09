

import React from "react";
import FeatureSection from "./featureSection";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Example2 from "../../assets/Example2.jpg";

const Feature3: React.FC = () => {
  return (
    <FeatureSection
      icon={<ChatBubbleLeftRightIcon className="h-8 w-8" aria-hidden="true" />}
      name="Increase engagement rates with our AI powered algorithms  "
      description="Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."
      flipped={true}
      image={Example2}
    />
  );
};

export default Feature3;