import { HERO_CONTENT } from "../constants";
import heroImage from "../assets/hero.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { straggerChildren: 0.2 } },
};

const fadeinUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-28 lg:pt-36"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          variants={fadeinUp}
          className="mb-8 border border-neutral-800 px-3 py-2 rounded-full text-xs"
        >
          {HERO_CONTENT.updates}
        </motion.div>
        <motion.h1
          variants={fadeinUp}
          className="text-5xl lg:text-7xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
        >
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeinUp}
          className="mt-6 text-neutral-400 max-w-xl"
        >
          {HERO_CONTENT.subHeading}
        </motion.p>
        <motion.div variants={fadeinUp} className="mt-6 space-x-4">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transtion-hover duration-300"
          >
            {HERO_CONTENT.actions.primary}
          </a>
          <a
            href="#"
            className="inline-block border border-neutral-700 hover:bg-neutral-700 text-white py-3 px-6 rounded-lg font-medium transtion-hover duration-300"
          >
            {HERO_CONTENT.actions.secondary}
          </a>
        </motion.div>
        <motion.div variants={fadeIn} className="py-10">
          <p className="text-gray-400 text-center mt-8">
            {HERO_CONTENT.trustedByText}
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="mt-12">
          <img
            src={heroImage}
            alt="Animathic Interface"
            className="w-full h-auto rounded-3xl border border-neutral-800 mb-20"
            draggable={false}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
