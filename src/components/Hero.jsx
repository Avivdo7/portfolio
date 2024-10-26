import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/me.png";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import cvFile from "../assets/AvivDoronResume.pdf";

const container = (initPos, endPos, duration, delay) => ({
  hidden: { x: initPos, opacity: 0 },
  visible: {
    x: endPos,
    opacity: 1,
    transition: { duration: duration, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap pt-4">
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(-100, 0, 0.5, 0)}
              initial="hidden"
              animate="visible"
              className="mt-16 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Aviv Doron
            </motion.h1>
            <motion.span
              variants={container(-100, 0, 0.5, 0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p
              variants={container(-100, 0, 0.5, 1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight text-2xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-full object-cover"
              variants={container(100, 0, 1, 1.05)}
              initial="hidden"
              animate="visible"
              src={profilePic}
              alt="Aviv Doron"
            />
          </div>
          <div className="flex justify-center pt-8">
            <motion.a
              whileHover={{ scale: 1.25 }}
              variants={container(100, 0, 1, 1.05)}
              initial="hidden"
              animate="visible"
              href={cvFile}
              download="AvivDoronResume.pdf"
              className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors text-2xl"
            >
              <span>Download CV</span>
              <FaDownload />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
