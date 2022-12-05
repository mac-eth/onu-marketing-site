import About from "../components/about";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll bg-white font-poppins">
      <Hero />
      <About />
    </div>
  );
}
