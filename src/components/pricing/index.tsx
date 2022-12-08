import React from "react";
import PricingSection from "./pricingSection";
import PricingSectionDescription from "./pricingSectionDescription";
import type { PricingTier } from "./pricingSection";

const hobby: PricingTier = {
  name: "Hobby",
  price: 79,
  features: [
    "Access to all features",
    "Unlimited users and organizations",
    "Free updates and support",
  ],
};

const team: PricingTier = {
  name: "Team",
  price: 199,
  features: [
    "Access to all features",
    "Unlimited users and organizations",
    "Free updates and support",
    "Priority support",
  ],
};

const enterprise: PricingTier = {
  name: "Enterprise",
  price: 499,
  features: [
    "Access to all features",
    "Unlimited users and organizations",
    "Free updates and support",
    "Priority support",
    "Dedicated account manager",
  ],
};

const Pricing: React.FC = () => {
  return (
    <div>
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <PricingSectionDescription />
      </div>
      <PricingSection pricing={[hobby, team, enterprise]} />
    </div>
  );
};

export default Pricing;
