import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

export type PricingTier = {
  name: string;
  price: number;
  features: string[];
};

export type PricingProps = {
  pricing: PricingTier[];
};

const PricingSection: React.FC<PricingProps> = ({ pricing }) => {
  return (
    <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
      <div className="relative z-0">
        <div className="absolute inset-0 h-5/6 bg-white lg:h-2/3" />
        <div className="mx-auto max-w-7xl">
          <div className="relative lg:grid lg:grid-cols-6 lg:gap-4">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className="max-w-none w-full lg:col-span-2 lg:max-w-5xl"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id={`tier-${tier.name}`}
                        >
                          {tier.name}
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                              $
                            </span>
                            <span className="font-bold">{tier.price}</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 flex-shrink-0 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby={`tier-${tier.name}`}
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
