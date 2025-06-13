import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlurText from "./BlurText";

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const rotatingVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="about" ref={ref} className="relative min-h-screen bg-navy-dark overflow-hidden py-16 px-6 md:px-16 pt-24 font-sans text-white">
      {/* Background circle outline */}
      <motion.div className="absolute bottom-1/3 left-1/4 w-3/4 h-3/4 border-2 border-blue-400/20 rounded-full" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 0.5 }} transition={{ duration: 2, ease: "easeOut" }} />

      <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left side with text */}
        <motion.div variants={itemVariants} className="md:w-1/2 mb-12 md:mb-0">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </motion.h2>

          <BlurText
            text="Hello, my name is Hioo, I am a Junior Web Developer based in Serang, Banten, Indonesia. I have a strong enthusiasm for continuously learning the latest developments in the world of programming, especially in the realm of web development."
            delay={70}
            animateBy="words"
            direction="top"
            className="text-xl mb-8"
            repeat={true}
          />

          <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-base font-sans">
            My passion lies in building the bridge between design and users through code. I'm Hioo, a junior web developer enthusiastic about the digital world.
          </motion.p>
        </motion.div>

        {/* Right side visual elements */}
        <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center items-center relative h-96">
          {/* Glowing orb */}
          <motion.div variants={pulseVariants} initial="initial" animate="animate" className="absolute top-0 left-12 md:left-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full opacity-90 blur-sm" />
          <motion.div className="absolute top-0 left-12 md:left-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-400/80 to-blue-400/80 rounded-full" />
          <motion.div className="absolute top-0 left-12 md:left-0 w-48 h-48 md:w-64 md:h-64 border border-white/30 rounded-full" variants={rotatingVariants} initial="initial" animate="animate" />

          {/* Floating orbs */}
          <motion.div variants={floatingVariants} initial="initial" animate="animate" className="absolute top-48 left-32 md:left-20 w-12 h-12 bg-cyan-400/80 rounded-full" />
          <motion.div variants={floatingVariants} initial="initial" animate="animate" className="absolute top-56 left-16 md:left-8 w-8 h-8 bg-cyan-300/80 rounded-full" />

          {/* Gem */}
          <motion.div variants={pulseVariants} initial="initial" animate="animate" className="absolute bottom-8 right-0 md:right-12 w-24 h-40 bg-gradient-to-br from-cyan-400 to-emerald-400 clip-gem shadow-lg shadow-cyan-500/50" />
          <motion.div className="absolute bottom-6 right-0 md:right-12 w-24 h-6 bg-cyan-400/30 blur-md rounded-full" />

          {/* Bottom outline */}
          <motion.div
            className="absolute bottom-0 left-1/4 w-full h-1 border border-blue-400/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
