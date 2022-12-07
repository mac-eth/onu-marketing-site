import React from "react";
import Navbar from "./navbar";
import Content from "./content";

const Hero: React.FC = () => {
  return (
    <div className="h-screen faint-grid lg:snap-start lg:snap-proximity ">
      <Navbar />
      <Content />
    </div>
  );
};

export default Hero;
