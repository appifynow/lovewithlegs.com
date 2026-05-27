import { motion } from "motion/react";
import { Award, Target, Heart } from "lucide-react";
import { useInView } from "./hooks/useInView";

const stats = [
  { icon: Award, value: "500+", label: "Clients Trained" },
  { icon: Target, value: "15", label: "Years Experience" },
  { icon: Heart, value: "98%", label: "Success Rate" },
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-400/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold">
              About Me
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-6">
              YOUR FITNESS
              <br />
              <span className="text-yellow-400">ARCHITECT</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm not just a trainer—I'm your partner in transformation. With over
              15 years of experience, I've helped hundreds achieve their dream
              physique and develop unshakeable confidence.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My approach combines science-backed training methods with
              personalized nutrition strategies. No cookie-cutter programs—just
              real results tailored to your unique body and goals.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-10 py-5 bg-yellow-400 text-black font-bold uppercase tracking-wider text-lg"
            >
              Book Consultation
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://scontent-atl3-3.xx.fbcdn.net/v/t39.30808-6/685079613_1555121839947684_1001290735895294678_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UEQzyu_Uz5QQ7kNvwEma6lX&_nc_oc=AdoLOLhNlmQfcjTz1Z-MtfZG672DfIlcjImuTYnQEYVLoZrS5c6PlG1nWvDmkWmqK2E&_nc_zt=23&_nc_ht=scontent-atl3-3.xx&_nc_gid=RAmaSkYNjXXKRwo8b9bgaA&_nc_ss=7b2a8&oh=00_Af68kbrKrH2svqUh0xFe1OJo6TCnsdlgr6MWHiEj0EJWmA&oe=6A1D335C"
                alt="Trainer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-4 text-center backdrop-blur-sm"
                >
                  <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-black text-yellow-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
