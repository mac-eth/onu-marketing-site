import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const includedFeatures: Array<string> = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

const PricingSectionDescription: React.FC = () => {
  return (
    <div className="py-12 relative flex justify-center">
      <div className="relative flex justify-center max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-lg lg:flex lg:max-w-none lg:gap-8">
          <div className="z-10 flex-1 bg-cream px-6 py-8 lg:p-12 border-2 border-black rounded-3xl shadow-md shadow-black">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight ">
              Get Started Absolutely Free
            </h3>
            <div className="mt-6">
              <div className="rounded-md shadow">
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900 hover:duration-150 hover:scale-110"
                >
                  Get Access
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 text-base font-semibold text-indigo-600">
                  Whats included
                </h4>
                <div className="flex-1 border-t-2 border-gray-200" />
              </div>
              <ul
                role="list"
                className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-tertiary text-center border-2 border-black rounded-3xl my-12 py-12 px-4 shadow-md shadow-black lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
            <p className="text-lg font-medium leading-6 text-gray-900">
              Per Plugin /Month
            </p>
            <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
              <span>$29</span>
              <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">
                USD
              </span>
            </div>
            <p className="mt-4 text-sm">
              <a href="#" className="font-medium text-gray-500 underline">
                Learn about our membership policy
              </a>
            </p>
            <div className="mt-6">
              <div className="rounded-md shadow">
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900 hover:duration-150 hover:scale-110"
                >
                  Get Access
                </Link>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <a href="#" className="font-medium text-gray-900">
                Get a free sample{" "}
                <span className="font-normal text-gray-500">(20MB)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSectionDescription;
