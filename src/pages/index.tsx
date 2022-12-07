import About from "../components/about";
import Features from "../components/features";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className="bg-white select-none scroll-smooth lg:snap-y lg:h-screen lg:overflow-scroll">
      <Hero />
      <div className="mx-12">
      <Features />
      <About />
      </div>
    </div>
  );
}
