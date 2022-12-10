import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Content from "../src/components/hero/content";

describe('Content', () => {
    it('renders without crashing', () => {
      const { container } = render(<Content />);
      expect(container).toBeDefined();
    });
  
    it('defines the `titleArray` variable correctly', () => {
      expect(titleArray).toBeDefined();
      expect(titleArray.length).toBe(5);
    });
  
    it('renders the current title from `titleArray` in the `Typewriter` component', () => {
      const { getByText } = render(<Content />);
      const titleText = getByText(/^Take Control of Your/);
      expect(titleText).toBeDefined();
  
      const currentTitle = titleArray[0].title;
      const currentTitleElement = getByText(currentTitle);
      expect(currentTitleElement).toBeDefined();
    });
  
    it('imports and renders the `TitleButtons` and `Stats` components', () => {
      const { getByText } = render(<Content />);
      const titleButtons = getByText(/TitleButtons/);
      expect(titleButtons).toBeDefined();
  
      const stats = getByText(/Stats/);
      expect(stats).toBeDefined();
    });
  
    it('renders the `OnuHeroImage` asset in the `Image` component', () => {
      const { getByAltText } = render(<Content />);
      const heroImage = getByAltText(/HeroImage/);
      expect(heroImage).toBeDefined();
    });
  });