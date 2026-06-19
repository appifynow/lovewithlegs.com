import { motion } from "motion/react";
import { useState } from "react";

export const CTA = ({ visible }: { visible: boolean })=> {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
        initial="hidden"
        exit="hidden"
        animate={visible ? [ "visible" ] : "hidden"}
        variants={{
            hidden: { bottom: -100, opacity: 0 },
            visible: { bottom: 0, opacity: 1 },
            enlarged: {
                height: "30vh",
                transition: { duration: 0.25, delay: 0 }
            }
        }}
        whileHover="enlarged"
        transition={{
            duration: 0.5,
        }}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         className="fixed w-full bg-slate-700  text-white font-bold  tracking-wider text-center py-0 z-50">
             
        <div className="bg-brand w-full h-16 border border-white">
        <span className="text-lg leading-[64px] uppercase">Are you looking to book new events at your venue? </span>
        </div>
        <div className={`sm:px-4 mt-10 mx-auto w-250 flex  flex-col ${isHovered ? '' : 'hidden'}`}>
            <div className="text-lg flex-row text-left">Coach Classic brings unmatched energy, professionalism, and community spirit to every gathering, making him the ideal choice for your next wellness event, corporate activity, or group fitness session. With engaging classes designed for all ages and fitness levels, he transforms local parks and recreation centers into vibrant spaces where people move, laugh, and feel inspired. Whether you're planning a team‑building day, a community celebration, or a special wellness initiative, Coach Classic delivers an experience that leaves everyone feeling stronger and more connected.</div>
            <a className=" hover:bg-brand active:bg-active flex-shrink border-white border-2 mt-10 p-4 text-white hover:underline" href="mailto:events@lovewithlegs.com?subject=Book Coach Classic at My Venue">Contact Me Today</a>
        </div>


       </motion.div>
    );
}