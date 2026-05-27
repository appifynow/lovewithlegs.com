import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
              READY TO
              <br />
              START YOUR
              <br />
              <span className="text-yellow-400">JOURNEY?</span>
            </h2>
            <p className="text-2xl text-gray-200 mb-10">
              Don't wait another day. Your transformation starts now.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-yellow-400 text-black font-bold uppercase tracking-wider text-xl flex items-center gap-3 group"
            >
              Book Free Consultation
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:info@lovewithlegs.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-lg group"
                >
                  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-black" />
                  </div>
                  <span>info@lovewithlegs.com</span>
                </motion.a>

                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-lg group"
                >
                  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-black" />
                  </div>
                  <span>+1 (234) 567-890</span>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-lg group"
                >
                  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="text-black" />
                  </div>
                  <span>123 Fitness Ave, Los Angeles, CA</span>
                </motion.div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
              <h4 className="font-bold mb-3">Operating Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-yellow-400">6AM - 10PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="text-yellow-400">8AM - 8PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-20 relative z-10"
      >
        <p className="text-sm text-gray-300">
          © 2026 lovewithlegs. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
