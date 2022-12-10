import About from "../components/about";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Pricing from "../components/pricing";

export default function Home() {
  return (
    <div className="bg-white select-none scroll-smooth lg:snap-y lg:h-screen">
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
}
