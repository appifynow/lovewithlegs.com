import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { CTA } from "./CTA";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const  isInView  = useInView(ref, { once: false, initial: true });
  console.log(isInView, 'hero is visible');
  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <CTA visible={!isInView} />
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source
            src="https://assets.mixkit.co/videos/23940/23940-720.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-white uppercase tracking-[0.3em] text-sm font-bold">
              Build your best Self Today
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]"
          >
            
            <span className="text-brand">Love </span>
            
            is an <br /><span className="text-brand">Action</span> Word
            
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Love With Legs exists to put love into action through movement, empowering people to stay active through fitness, health and wellness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
            href="/#classes"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-white border-2 text-white font-bold uppercase tracking-wider text-lg flex items-center justify-center gap-2 group hover:bg-white hover:text-black transition-colors"
            >
              Start Training
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            {/* <motion.a
              href="/#schedule"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider text-lg hover:bg-white hover:text-black transition-colors"
            >
              View Programs
            </motion.a> */}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
