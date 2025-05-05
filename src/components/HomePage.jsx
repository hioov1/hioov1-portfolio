import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import OrbitAnimation from "./OrbitAnimation";
import { Typewriter } from "react-simple-typewriter";

const HomePage = ({ isMobile }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section ref={ref} id="home" className={`min-h-[calc(100vh-80px)] flex items-center relative ${isMobile ? "px-0 py-0" : "px-16"} overflow-hidden ml-10`}>
      <div className={`max-w-2xl relative z-10 ${isMobile ? "px-0 pt-0" : "px-16"} overflow-hidden ml-2`}>
        <motion.h1 className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold mb-4`} custom={0} initial="hidden" animate={controls} variants={textVariants}>
          Hi, I’m Hioo
        </motion.h1>

        <motion.h2 className={`${isMobile ? "text-2xl" : "text-6xl"} font-bold mb-4`} custom={1} initial="hidden" animate={controls} variants={textVariants}>
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            <Typewriter words={["Front-End", "Web Developer", "Tech Enthusiast"]} loop={0} cursor cursorStyle="_" typeSpeed={100} deleteSpeed={50} delaySpeed={2000} />
          </span>
        </motion.h2>

        <motion.h3 className={`${isMobile ? "text-2xl" : "text-4xl"} font-medium mb-12`} custom={2} initial="hidden" animate={controls} variants={textVariants}>
          <p className="text-sm md:text-base mt-4 text-gray-400 max-w-lg">Building the web with code and creativity.</p>
        </motion.h3>

        <motion.div className={`flex ${isMobile ? "flex-col space-y-4" : "flex-row gap-6"}`} custom={3} initial="hidden" animate={controls} variants={textVariants}>
          <motion.button
            className={`bg-gradient-to-r from-purple-accent to-cyan-accent ${isMobile ? "px-6 py-3 w-full" : "px-8 py-3"} rounded-full text-white font-medium transition-colors`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a href="mailto:hioov1@gmail.com" className="text-white" target="_blank">
              <span>Hire Me</span>
            </a>
          </motion.button>
        </motion.div>
      </div>

      <OrbitAnimation />

      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-dark opacity-80 -z-10"></div>

      {/* Background subtle dots */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
    </section>
  );
};

export default HomePage;
