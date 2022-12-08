import React from "react";
import PricingSection from "./pricingSection";
import PricingSectionDescription from "./pricingSectionDescription";

const Pricing: React.FC = () => {
  return (
    <div>
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <PricingSectionDescription />
      </div>
      <PricingSection />
    </div>
  );
};

export default Pricing;
