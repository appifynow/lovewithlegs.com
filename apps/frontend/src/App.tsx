import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Schedule } from "./components/Schedule";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Navigation } from "./components/Navigation";
import "./styles/index.css";

export default function App() {
  return (
    <div className="size-full bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Schedule />
      <About />
      <Testimonials />
      <CTA />
    </div>
  );
}