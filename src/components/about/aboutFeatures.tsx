import { AboutFeaturesArray } from "../../../types";
import {
  GiftIcon,
  BriefcaseIcon,
  TrophyIcon,
  RectangleGroupIcon,
  BoltIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

const features: AboutFeaturesArray = [
  {
    name: "Customizable Rewards",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: GiftIcon,
  },
  {
    name: "Customizable Tasks",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BriefcaseIcon,
  },
  {
    name: "Competitive Leaderboards",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: TrophyIcon,
  },
  {
    name: "Configuration Templates",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: RectangleGroupIcon,
  },
  {
    name: "Powerful API",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BoltIcon,
  },
  {
    name: "Database Backups",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: CircleStackIcon,
  },
];

const AboutFeatures: React.FC = () => {
  return (
    <div className="my-20 relative mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} data-testid="feature" className="z-10 pt-6">
            <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 border border-gray-900 shadow-md shadow-gray-900 transition duration-150 hover:scale-110">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex border border-gray-900 items-center justify-center rounded-xl bg-tertiary p-3">
                    <feature.icon
                      className="h-8 w-8 text-gray-900"
                      aria-hidden="true"
                      data-testid={`${feature.name}-icon`}
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900" data-testid={`${feature.name}-name`}>
                  {feature.name}
                </h3>
                <p className="mt-5 text-base leading-7 text-gray-600" data-testid={`${feature.name}-description`}>
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="z-1 border border-gray-900 rounded-3xl absolute inset-0 lg:inset-y-1/4 bg-secondary" />
    </div>
  );
};

export default AboutFeatures;
