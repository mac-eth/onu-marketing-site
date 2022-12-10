import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Feature1 from "../src/components/features/feature1";
import Feature2 from "../src/components/features/feature2";
import Feature3 from "../src/components/features/feature3";
import FeatureSection from "../src/components/features/featureSection";
import Example1 from "../src/assets/Example1.jpg";
import type { FeatureProps } from "../types";

const testFeatureProps: FeatureProps = {
  id: 1,
  icon: <span>icon</span>,
  name: "Test Feature",
  description: "This is a test feature",
  flipped: false,
  image: Example1,
};

// Feature1
describe("Feature1", () => {
  it("Renders the component unchanged", () => {
    const aboutFeatures = render(<Feature1 />);
    expect(aboutFeatures).toMatchSnapshot();
  });

  it("should render the feature's icon", () => {
    render(<Feature1 />);
    expect(screen.getByLabelText("CpuChipIcon")).toBeInTheDocument();
  });

  it("should render the feature's name", () => {
    render(<Feature1 />);
    expect(
      screen.getByText(
        "Connect all your social media platforms to one dashboard"
      )
    ).toBeInTheDocument();
  });

  it("should render the feature's description", () => {
    render(<Feature1 />);
    expect(
      screen.getByText(
        "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."
      )
    ).toBeInTheDocument();
  });

  it("should render the feature's image", () => {
    render(<Feature1 />);
    expect(
      screen.getByRole("img", { name: "FeatureImage-1" })
    ).toBeInTheDocument();
  });
});

//Feature2
describe("Feature2", () => {
  it("Renders the component unchanged", () => {
    const aboutFeatures = render(<Feature2 />);
    expect(aboutFeatures).toMatchSnapshot();
  });

  it("should render the feature's icon", () => {
    render(<Feature2 />);
    expect(
      screen.getByLabelText("ChatBubbleLeftRightIcon")
    ).toBeInTheDocument();
  });

  it("should render the feature's name", () => {
    render(<Feature2 />);
    expect(
      screen.getByText(
        "Increase engagement rates with our AI powered algorithms"
      )
    ).toBeInTheDocument();
  });

  it("should render the feature's description", () => {
    render(<Feature2 />);
    expect(
      screen.getByText(
        "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."
      )
    ).toBeInTheDocument();
  });

  it("should render the feature's image", () => {
    render(<Feature2 />);
    expect(
      screen.getByRole("img", { name: "FeatureImage-2" })
    ).toBeInTheDocument();
  });
});

//Feature3
describe("Feature3", () => {
  it("Renders the component unchanged", () => {
    const aboutFeatures = render(<Feature3 />);
    expect(aboutFeatures).toMatchSnapshot();
  });

  it("should render the feature's icon", () => {
    render(<Feature3 />);
    expect(screen.getByLabelText("ChartBarSquareIcon")).toBeInTheDocument();
  });

  it("should render the feature's name", () => {
    render(<Feature3 />);
    expect(
      screen.getByText("Get real time analytics using OnuPulse")
    ).toBeInTheDocument();
  });

  it("should render the feature's description", () => {
    render(<Feature3 />);
    expect(
      screen.getByText(
        "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."
      )
    ).toBeInTheDocument();
  });

  it("should render the feature's image", () => {
    render(<Feature3 />);
    expect(
      screen.getByRole("img", { name: "FeatureImage-3" })
    ).toBeInTheDocument();
  });
});

describe("FeatureSection", () => {

  it("should render the feature section with the correct text and image", () => {
    render(<FeatureSection {...testFeatureProps} />);
    expect(screen.getByText("Test Feature")).toBeInTheDocument();
    expect(screen.getByText("This is a test feature")).toBeInTheDocument();
    expect(screen.getByAltText("FeatureImage-1")).toBeInTheDocument();
  });
  
  it("should apply the correct styles based on the flipped property", () => {
    render(<FeatureSection {...testFeatureProps} flipped={true} />);
    const textElement = screen.getByTestId("FlippedText");
    const imageElement = screen.getByTestId("FlippedImage");
    expect(textElement).toHaveClass("lg:col-start-2");
    expect(imageElement).toHaveClass("lg:flex lg:justify-end hover:-rotate-3");
  });
});
