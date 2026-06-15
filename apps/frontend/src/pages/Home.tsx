import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Schedule } from "../components/Schedule";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
import { Construction } from "../components/Construction";
import { useState } from "react";

export default function Home() {
  const [isConstructionVisible, setIsConstructionVisible] = useState(true);
  return (
    <main className="size-full bg-black text-white overflow-x-hidden">
      <Construction visible={isConstructionVisible} setShow={setIsConstructionVisible} />
      <Hero />
      <Schedule />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
