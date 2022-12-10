import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Content from "../src/components/hero/content";
import { TitleWordArray } from "../types";

const titleArray: TitleWordArray = [
  {
    title: "Youtube",
    color: "text-[#fe0021]",
    delay: 3300,
  },
  {
    title: "Twitch",
    color: "text-[#5631bf]",
    delay: 3100,
  },
  {
    title: "Spotify",
    color: "text-[#0cd569]",
    delay: 3250,
  },
  {
    title: "Influencer",
    color: "text-[#f64229]",
    delay: 4100,
  },
  {
    title: "Blockchain",
    color: "text-sky-500",
    delay: 4100,
  },
];

describe("Content", () => {
  it("Renders the component unchanged", () => {
    const content = render(<Content />);
    expect(content).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const { container } = render(<Content />);
    expect(container).toBeDefined();
  });

  it("defines the `titleArray` variable correctly", () => {
    expect(titleArray).toBeDefined();
    expect(titleArray.length).toBe(5);
  });

  it("renders the current title from `titleArray` in the `Typewriter` component", () => {
    const { getByText } = render(<Content />);
    const titleText = getByText(/^Take Control of Your/);
    expect(titleText).toBeDefined();

    const currentTitle = titleArray[0].title;
    const currentTitleElement = getByText(currentTitle);
    expect(currentTitleElement).toBeDefined();
  });

  it("imports and renders the `TitleButtons` and `Stats` components", () => {
    const { getByText } = render(<Content />);
    const titleButtons = getByText(/TitleButtons/);
    expect(titleButtons).toBeDefined();

    const stats = getByText(/Stats/);
    expect(stats).toBeDefined();
  });

  it("renders the `OnuHeroImage` asset in the `Image` component", () => {
    const { getByAltText } = render(<Content />);
    const heroImage = getByAltText(/HeroImage/);
    expect(heroImage).toBeDefined();
  });
});
