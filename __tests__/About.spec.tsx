import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutFeatures from "../src/components/about/aboutFeatures";
import { AboutFeaturesArray } from "../types";
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

describe("About", () => {
  it("Renders the component unchanged", () => {
    const aboutFeatures = render(<AboutFeatures />);
    expect(aboutFeatures).toMatchSnapshot();
  });

  it("Renders the correct number of features", () => {
    const aboutFeatures = render(<AboutFeatures />);
    expect(aboutFeatures.getAllByTestId("feature")).toHaveLength(6);
  });

  it("Renders the correct icons for each feature", () => {
    render(<AboutFeatures />);
    features.forEach((feature) => {
      const iconElement = screen.getByTestId(`${feature.name}-icon`);
      expect(iconElement).toBeInTheDocument();
    });
  });

  it("Renders the correct names for each feature", () => {
    render(<AboutFeatures />);
    features.forEach((feature) => {
      const nameElement = screen.getByTestId(`${feature.name}-name`);
      expect(nameElement).toBeInTheDocument();
    });
  });

  it("Renders the correct descriptions for each feature", () => {
    render(<AboutFeatures />);
    features.forEach((feature) => {
      const descriptionElement = screen.getByTestId(
        `${feature.name}-description`
      );
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});
