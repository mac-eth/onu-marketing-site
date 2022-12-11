import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Content from "../src/components/hero/content";

// Content Component Tests
describe("Content", () => {
  it("Renders the component unchanged", () => {
    const content = render(<Content />);
    expect(content).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const { container } = render(<Content />);
    expect(container).toBeDefined();
  });

  it("imports and renders the 'TitleButtons' component", () => {
    render(<Content />)    
    const ReadMoreButton = screen.getByRole("button", { name: 'Read-More' });
    const GetStartedButton = screen.getByRole("button", { name: 'Get-Started' });
    expect(GetStartedButton).toBeDefined();
    expect(ReadMoreButton).toBeDefined();
  });

  it("renders the `OnuHeroImage` asset in the `Image` component", () => {
    render(<Content />);
    const heroImage = screen.getByRole("img", { name: "HeroImage" });
    expect(heroImage).toBeDefined();
  });

  it("imports and renders the 'Stats' component", () => {
    render(<Content />);
    const statsComponent = screen.getByRole("banner", { name: "stats" });
    expect(statsComponent).toBeDefined();
  });
});
