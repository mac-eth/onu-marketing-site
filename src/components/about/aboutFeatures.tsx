import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to Deploy",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL Certificates",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple Queues",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced Security",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Powerful API",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: CogIcon,
  },
  {
    name: "Database Backups",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

const AboutFeatures: React.FC = () => {
  return (
    <div className="py-20 relative mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="z-10 pt-6">
            <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 border border-gray-900 shadow-md shadow-gray-900 transition duration-150 hover:scale-110">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex border border-gray-900 items-center justify-center rounded-xl bg-secondary p-3">
                    <feature.icon
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-5 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="z-1 rounded-3xl shadow-sm shadow-black absolute inset-0 inset-y-1/4 bg-cream" />
    </div>
  );
};

export default AboutFeatures;
