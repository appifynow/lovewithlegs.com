import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl text-white font-bold tracking-tighter">
          <motion.img
            whileHover={{ scale: 1.05 }}
            style={{ height: "80px" }}
            src="https://res.cloudinary.com/dwzatjoyv/image/upload/v1780411530/Love_With_Legs_Logo_All_Colors-09_auo6cj.jpg"
            alt="Love with Legs Logo"
          />
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {[ "Classes", "About", "Testimonials", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`/#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-sm text-white uppercase tracking-wider hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
          href="/#classes"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-triadic text-white font-bold uppercase tracking-wider"
          >
            Get Started
          </motion.a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black border-t border-white/10"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {["Services", "Schedule", "About", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wider hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2 bg-triadic text-white font-bold uppercase tracking-wider w-full">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
