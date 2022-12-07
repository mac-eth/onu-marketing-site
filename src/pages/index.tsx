import About from "../components/about";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className="bg-white select-none scroll-smooth lg:snap-y lg:h-screen lg:overflow-scroll">
      <Hero />
      <About />
    </div>
  );
}
