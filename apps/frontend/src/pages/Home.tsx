import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Schedule } from "../components/Schedule";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
import { CTA } from "../components/CTA";

export default function Home() {
  return (
    <main className="size-full bg-black text-white overflow-x-hidden">
      <Hero />
      <Schedule />
      <About />
      <Services />
      <Testimonials />
      <Footer />
      <CTA />
    </main>
  );
}
