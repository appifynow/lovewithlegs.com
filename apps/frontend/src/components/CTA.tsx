import { motion } from "motion/react";

export const CTA = () => {
    return (
        <motion.div
        initial={{
            height: "0px",
            opacity: 0,
        }}
        exit={{
            height: 0,
            opacity: 0,
        }}
         animate="visible"
        variants={{
            hidden: { height: "0px", opacity: 0 },
            visible: { height: "3%", opacity: 1 },
        }}
        transition={{
            duration: 0.5,
            delay: 1,
        }}
         className="sticky bottom-0 left-0 right-0 bg-triadic text-white font-bold uppercase tracking-wider text-center py-4 z-50">
        Are you looking to book new events at your venue? <a className="bold text-white hover:underline" href="mailto:events@lovewithlegs.com?subject=Book Coach Classic at My Venue">Contact us</a>
        </motion.div>
    );
}