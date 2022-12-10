import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavbarStructure from "../src/components/footer/footerStructure";

describe("NavbarStructure", () => {
  it("Renders the component unchanged", () => {
    const aboutFeatures = render(<NavbarStructure />);
    expect(aboutFeatures).toMatchSnapshot();
  });

  it("renders the expected elements", () => {
    render(<NavbarStructure />);
    const footer = screen.getByRole("contentinfo", { name: "footer" });
    expect(footer).toBeInTheDocument();
  });

  it("renders the expected social media icons", () => {
    render(<NavbarStructure />);
    const discordIcon = screen.getByRole("button", { name: "discord" });
    expect(discordIcon).toBeInTheDocument();

    const twitterIcon = screen.getByRole("button", { name: "twitter" });
    expect(twitterIcon).toBeInTheDocument();

    const githubIcon = screen.getByRole("button", { name: "github" });
    expect(githubIcon).toBeInTheDocument();
  });

  it("renders the expected copyright notice", () => {
    render(<NavbarStructure />);
    const copyright = screen.getByText("© Onu, Inc. All rights reserved.");
    expect(copyright).toBeInTheDocument();
  });
});
