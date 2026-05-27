import { motion } from "motion/react";
import { Calendar, Clock, Users } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { useState } from "react";

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const scheduleData = {
  Monday: [
    { time: "6:00 AM", class: "HIIT Bootcamp", instructor: "Sarah", spots: 12 },
    { time: "9:00 AM", class: "Strength Training", instructor: "Marcus", spots: 8 },
    { time: "5:30 PM", class: "CrossFit", instructor: "Sarah", spots: 15 },
    { time: "7:00 PM", class: "Yoga Flow", instructor: "Emily", spots: 20 },
  ],
  Tuesday: [
    { time: "6:00 AM", class: "Spin Class", instructor: "Marcus", spots: 18 },
    { time: "12:00 PM", class: "Boxing", instructor: "Sarah", spots: 10 },
    { time: "6:00 PM", class: "HIIT Cardio", instructor: "Emily", spots: 12 },
  ],
  Wednesday: [
    { time: "6:00 AM", class: "Bootcamp", instructor: "Sarah", spots: 12 },
    { time: "9:00 AM", class: "Pilates", instructor: "Emily", spots: 15 },
    { time: "5:30 PM", class: "Olympic Lifting", instructor: "Marcus", spots: 8 },
    { time: "7:00 PM", class: "Mobility & Stretch", instructor: "Emily", spots: 20 },
  ],
  Thursday: [
    { time: "6:00 AM", class: "Spin Class", instructor: "Marcus", spots: 18 },
    { time: "12:00 PM", class: "Functional Training", instructor: "Sarah", spots: 12 },
    { time: "6:00 PM", class: "HIIT Bootcamp", instructor: "Sarah", spots: 15 },
  ],
  Friday: [
    { time: "6:00 AM", class: "Strength & Conditioning", instructor: "Marcus", spots: 10 },
    { time: "9:00 AM", class: "Yoga Flow", instructor: "Emily", spots: 20 },
    { time: "5:30 PM", class: "Friday Night Burn", instructor: "Sarah", spots: 15 },
  ],
  Saturday: [
    { time: "8:00 AM", class: "Weekend Warrior", instructor: "Marcus", spots: 20 },
    { time: "10:00 AM", class: "Yoga & Meditation", instructor: "Emily", spots: 25 },
    { time: "12:00 PM", class: "Open Gym", instructor: "All", spots: 30 },
  ],
  Sunday: [
    { time: "9:00 AM", class: "Recovery Yoga", instructor: "Emily", spots: 20 },
    { time: "11:00 AM", class: "Sunday Stretch", instructor: "Emily", spots: 15 },
  ],
};

export function Schedule() {
  const { ref, isInView } = useInView();
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <section id="schedule" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(250,204,21,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold">
            Group Classes
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-6">
            WEEKLY SCHEDULE
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
          {weekDays.map((day, index) => (
            <motion.button
              key={day}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 font-bold uppercase tracking-wider transition-all ${
                selectedDay === day
                  ? "bg-yellow-400 text-black"
                  : "bg-white/5 text-white border border-white/10 hover:border-yellow-400"
              }`}
            >
              {day.slice(0, 3)}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {scheduleData[selectedDay as keyof typeof scheduleData].map((session, index) => (
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
                  <h3 className="text-2xl font-black tracking-tight group-hover:text-yellow-400 transition-colors">
                    {session.class}
                  </h3>
                  <p className="text-gray-400 mt-1">with {session.instructor}</p>
                </div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-yellow-400 flex items-center justify-center"
                >
                  <Calendar className="text-black" size={24} />
                </motion.div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={16} className="text-yellow-400" />
                  <span className="font-bold">{session.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users size={16} className="text-yellow-400" />
                  <span>{session.spots} spots available</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 py-3 bg-yellow-400 text-black font-bold uppercase tracking-wider text-sm hover:bg-yellow-300 transition-colors"
              >
                Reserve Spot
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
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
            className="px-10 py-4 bg-yellow-400 text-black font-bold uppercase tracking-wider"
          >
            Claim Free Class
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
