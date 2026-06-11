import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useInView } from "./hooks/useInView";

const testimonials = [
  {
    "name": "Princess",
    "text": "Coach Classics energy is amazing. This is my first time in class. I'm trying to get back in shape. This was a very good introduction. You have no choice but to have fun, smile and praise God. I love that aspect. I didn't come here thinking I was going to get that, so it was a great surprise. I'll be back.",
    "image": "https://source.unsplash.com/featured/?fitness,energy"
  },
  {
    "name": "Joy T",
    "text": "I've been taking Coach Classics class since he started here and he saved my life. I wasn't taking my medicine for almost a year. I'm diabetic and I was super sick and didn't know it, but because I was exercising I'm still here. Thank you Coach!",
    "image": "https://source.unsplash.com/featured/?health,wellness"
  },
  {
    "name": "Marquita",
    "text": "The combination of movement while concentrating on breathing makes the class great for everyone.",
    "image": "https://source.unsplash.com/featured/?breathing,stretch"
  },
  {
    "name": "Inez",
    "text": "Josh is so personal to everyone and encouraging. He makes you feel so good that you are trying to improve your mobility and physique. He smiles, encourages you to do more than you think you can, notices even small improvements, and genuinely cares.",
    "image": "https://source.unsplash.com/featured/?motivation,coach"
  },
  {
    "name": "Floyd R",
    "text": "Joshua is the best instructor. He really works all parts of the body. You feel 100 percent better after his class. He will be missed on the Thursday morning class. Thank you for your energy and support.",
    "image": "https://source.unsplash.com/featured/?workout,class"
  },
  {
    "name": "Rita G",
    "text": "So happy to discover these classes and enjoy them immensely.",
    "image": "https://source.unsplash.com/featured/?happy,fitness"
  },
  {
    "name": "Brad T",
    "text": "I really love the energy Josh brings to classes. They feel like a celebration of life—challenging, but also life-affirming.",
    "image": "https://source.unsplash.com/featured/?celebration,exercise"
  },
  {
    "name": "Erma H",
    "text": "After leaving class, I always feel energetic and inspired to continue practicing at home.",
    "image": "https://source.unsplash.com/featured/?inspiration,exercise"
  },
  {
    "name": "Yvette H",
    "text": "Josh is a wonderful teacher and inspires everyone he meets.",
    "image": "https://source.unsplash.com/featured/?teacher,inspiration"
  },
  {
    "name": "Neila J",
    "text": "Before starting Aqua Fit and Breathe and Stretch classes with Josh, I was short of breath, my knees were weak and I was completely off balance. I was constantly falling and unhappy with my health. Now I am stronger, breathing without an oxygen machine at night, and I haven't fallen in about a year. Thank God for my health and strength and Josh for motivating me to keep striving.",
    "image": "https://source.unsplash.com/featured/?aquafit,stretch"
  },
  {
    "name": "Gloria M",
    "text": "Joshua is an excellent and fun fitness instructor. He makes the class very enjoyable. I love his enthusiasm!",
    "image": "https://source.unsplash.com/featured/?fun,fitness"
  },
  {
    "name": "Charmayne B",
    "text": "I have truly enjoyed being in both the Breathe and Stretch class and the Aqua Fit class with Josh. His energy, warm heart, care, and enthusiasm bring me to class with purpose. Coach is a blessing to all in his classes, touching everyone spiritually and emotionally.",
    "image": "https://source.unsplash.com/featured/?warmth,community"
  }
]
;

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
                    className="fill-brand text-brand"
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
