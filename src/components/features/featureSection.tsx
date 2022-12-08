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
    <div className="relative overflow-hidden bg-white pb-32">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div
            className={`mx-auto max-w-xl lg:mx-0 lg:max-w-none lg:py-16 ${
              flipped ? "lg:col-start-2" : ""
            }`}
          >
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
                  {icon}
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  {name}
                </h2>
                <p className="mt-4 text-lg text-gray-500">{description}</p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6" />
          </div>
          <div
            className={`mt-12 sm:mt-16 lg:mt-0 ${
              flipped ? "lg:col-start-1 -ml-60" : ""
            }`}
          >
            <div className="lg:relative lg:m-0 lg:h-full ">
              <Image
                className={`col-span-1 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none`}
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
