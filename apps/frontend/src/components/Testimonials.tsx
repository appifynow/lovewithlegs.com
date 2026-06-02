import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useInView } from "./hooks/useInView";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Lost 40 lbs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    text: "This program changed my life. I've never felt stronger or more confident. The personalized approach made all the difference.",
  },
  {
    name: "Marcus Johnson",
    role: "Gained 20 lbs Muscle",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    text: "Finally found a trainer who understands what it takes to build real muscle. The results speak for themselves.",
  },
  {
    name: "Emily Chen",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    text: "Improved my endurance by 300% and crushed my first marathon. The training methodology is scientifically sound and incredibly effective.",
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section id="testimonials" className="py-32 px-6 bg-zinc-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-brand uppercase tracking-[0.3em] text-sm font-bold">
            Success Stories
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4">
            REAL RESULTS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-black border border-white/10 p-8 hover:border-yellow-400 transition-all group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-brand"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-brand text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
