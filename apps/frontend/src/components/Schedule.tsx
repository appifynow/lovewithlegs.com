import { motion } from "motion/react";
import { Calendar, Clock, Users } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { useState } from "react";
import {classes} from '../data/classes';

export function Schedule() {
  const { ref, isInView } = useInView();
  const [selectedDay, _] = useState("Thursday");
  const boundaryMapLink = 'https://www.google.com/maps/place/Boundary+Waters+Activity+Center/@33.6675242,-84.666522,17z/data=!3m1!4b1!4m6!3m5!1s0x88f4df0120dcb53d:0x4bad8c314ce78ae6!8m2!3d33.6675242!4d-84.6639471!16s%2Fg%2F11syczxf1_?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D'

  return (
    <section id="classes" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(250,204,21,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="subtitle uppercase tracking-[0.3em] text-sm font-bold">
            Group Classes
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-6">
            <span className="sr-only"> Group classes</span> {/* AT should read this subheading as Group classes Weekly Schedule*/}
            WEEKLY CLASSES 
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our high-energy group sessions and train with like-minded athletes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {/* {Object.keys(classes).map((day, index) => (
            <motion.button
              key={day}
              disabled={classes[day as keyof typeof classes].length === 0}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 font-bold uppercase disabled:bg-gray-500 transition-all ${
                selectedDay === day
                  ? "bg-brand text-white"
                  : "bg-white/5 text-white border border-white/10 hover:border-yellow-400"
              }`}
            >
              {day.slice(0, 3)}
            </motion.button>
          ))} */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {classes[selectedDay as keyof typeof classes].map((session, index) => (
            <motion.div
              key={`${session.time}-${session.class}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 5, scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-yellow-400 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight group-hover:text-brand transition-colors">
                    {session.class}
                  </h3>
                  <p className="text-gray-400 mt-1">{session.days} @ <a className="text-active hover:underline" href={boundaryMapLink} target="_blank" rel="noopener noreferrer">
                    {session.location}
                  </a></p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className=" w-12 h-12 bg-brand flex items-center justify-center"
                >
                  <Calendar className="text-white" size={24} />
                </motion.div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={16} className="text-brand" />
                  <span className="font-bold">{session.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users size={16} className="text-brand" />
                  <span>{session.spots} spots available</span>
                </div>
              </div>
            <div className="flex gap-4 mt-6">
              <motion.a
              href={session.link}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className=" mt-4 py-3 px-3 border-2 hover:bg-brand active:bg-active active:text-black border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-brand-300 transition-colors"
              >
                Learn More
              </motion.a>
              <motion.a
              href="https://secure.rec1.com/GA/douglas-county-parks-recreation/catalog/index/e411fca80fdee6f46fe950c8b1088819?filter=c2VhcmNoPSZsb2NhdGlvbiU1QjE3ODA3JTVEPTEmZGF5c09mVGhlV2VlayU1QjElNUQ9MSZkYXlzT2ZUaGVXZWVrJTVCMyU1RD0x" 
              target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className=" mt-4 py-3 px-3 hover:bg-brand active:bg-active active:text-black border-2 border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-brand-300 transition-colors"
              >
                Reserve Spot
                <span className="sr-only"> (opens in a new tab)</span>
              </motion.a>
              </div>
            </motion.div>
            
          ))}
          
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">First Class Free!</h3>
          <p className="text-gray-300 mb-6">
            New to group training? Try any class for just $12 and experience the Love with Legs difference.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-brand text-white font-bold uppercase tracking-wider"
          >
            Claim Free Class
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}
