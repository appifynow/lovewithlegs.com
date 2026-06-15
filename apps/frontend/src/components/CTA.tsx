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
         className=" fixed w-full bg-triadic text-white font-bold  tracking-wider text-center py-4 z-50">
        <span className="text-lg uppercase">Are you looking to book new events at your venue? </span>
        <div className={` mt-10 mx-auto w-250 flex  flex-col ${isHovered ? '' : 'hidden'}`}>
            <div className="text-lg flex-row">Coach Classic is the perfect solution for your next event. Contact Me Today to learn more!</div>
            <a className="bold border-white border-2 mt-10 p-10 text-white hover:underline" href="mailto:events@lovewithlegs.com?subject=Book Coach Classic at My Venue">Contact us</a>
        </div>
       </motion.div>
    );
}