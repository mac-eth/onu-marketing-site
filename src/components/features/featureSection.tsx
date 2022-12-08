import React from "react";
import Image, { StaticImageData } from "next/image";

type FeatureProps = {
  icon: React.ReactElement;
  name: string;
  description: string;
  flipped: boolean;
  image: StaticImageData;
};

const FeatureSection: React.FC<FeatureProps> = ({
  icon,
  name,
  description,
  flipped,
  image,
}) => {
  return (
    <div className="relative pb-32">
      <div className="relative">
        <div className="bg-cream rounded-3xl border-2 border-black shadow-md shadow-black lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div
            className={`mx-auto max-w-xl lg:mx-0 lg:max-w-none lg:py-16 ${
              flipped ? "lg:col-start-2" : ""
            }`}
          >
            <div className="mx-12 lg:mx-4 mt-12 lg:mt-4">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary text-gray-900 border-2 border-gray-900 ">
                  {icon}
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  {name}
                </h2>
                <p className="mt-4 text-lg text-gray-500">{description}</p>
                <div className="mt-6 flex justify-center lg:justify-start">
                  <a
                    href="#"
                    className="px-6 py-3 inline-flex rounded-xl whitespace-nowrap shadow-md shadow-gray-900 bg-secondary border-2 border-gray-900 text-white font-medium lg:text-xl hover:bg-gray-900 hover:shadow-gray-900 hover:scale-90"
                  >
                    Check it out
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`mt-12 sm:mt-16 lg:mt-0 ${
              flipped ? "lg:col-start-1" : ""
            }`}
          >
            <div className="lg:relative lg:m-0 lg:h-full scale-110 ">
              <Image
                className={`col-span-1 rounded-3xl border-2 border-black shadow-sm shadow-black lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none`}
                src={image}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
