import { motion } from "motion/react";
import { Dumbbell, Users, WavesHorizontal as Zap, TrendingUp } from "lucide-react";
import { useInView } from "./hooks/useInView";

const services = [
  {
    icon: Dumbbell,
    title: "1-on-1 Training",
    description: "Personalized workout plans tailored to your goals and fitness level",
  },
  {
    icon: Users,
    title: "Group Sessions",
    description: "High-energy group workouts that push you to your limits",
  },
  {
    icon: Zap,
    title: "Pool Training",
    description: "Low Impact aquatic workouts for strength, endurance, and recovery",
  },
  {
    icon: TrendingUp,
    title: "Nutrition Coaching",
    description: "Custom meal plans and nutritional guidance for optimal results",
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(250,204,21,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold">
            What We Offer
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4">
            OUR SERVICES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm group hover:border-yellow-400 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                <service.icon size={32} className="text-black" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
