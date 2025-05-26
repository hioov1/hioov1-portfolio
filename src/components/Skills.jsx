import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CertificateSec from "./CertificateSec";

// Daftar Skills dengan ikon
const skillsData = [
  {
    name: "HTML",
    icon: <img src="./icons/html.svg" alt="HTML" className="w-8 h-8" />,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: <img src="./icons/css.svg" alt="CSS" className="w-8 h-8" />,
    color: "text-blue-500",
  },
  {
    name: "Bootstrap",
    icon: <img src="./icons/bootstrap.svg" alt="Bootstrap" className="w-8 h-8" />,
    color: "text-purple-600",
  },
  {
    name: "TailwindCSS",
    icon: <img src="./icons/tailwindcss.svg" alt="TailwindCSS" className="w-8 h-8" />,
    color: "text-teal-500",
  },
  {
    name: "JavaScript",
    icon: <img src="./icons/javascript.svg" alt="JavaScript" className="w-8 h-8" />,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    icon: <img src="./icons/typescript.svg" alt="TypeScript" className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "Python",
    icon: <img src="./icons/python.svg" alt="Python" className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "React",
    icon: <img src="./icons/react.svg" alt="React" className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "Next",
    icon: <img src="./icons/nextjs.svg" alt="Next" className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "Node js",
    icon: <img src="./icons/nodejs.svg" alt="Node" className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "Express",
    icon: <img src="./icons/express.svg" alt="Express" className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "MongoDB",
    icon: <img src="./icons/mongodb.svg" alt="MongoDB" className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "Postman",
    icon: <img src="./icons/postman.svg" alt="Postman" className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "Git",
    icon: <img src="./icons/git.svg" alt="Git" className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "AWS",
    icon: <img src="./icons/aws.svg" alt="aws" className="w-8 h-8" />,
    color: "text-blue-600",
  },
];

const SkillCard = ({ skill }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      className="flex flex-col items-center p-4 bg-blue-900 bg-opacity-20 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:bg-blue-800 hover:bg-opacity-30"
    >
      <motion.div whileHover="hover" className={`${skill.color} mb-3`}>
        <motion.div variants={iconVariants}>{skill.icon}</motion.div>
      </motion.div>
      <h3 className="text-lg font-medium text-white">{skill.name}</h3>
    </motion.div>
  );
};

function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative min-h-screen bg-navy-dark  py-16 px-6 md:px-16 text-white overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, rgba(30, 58, 138, 1) 0%, rgba(7, 19, 59, 1) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants} className="max-w-6xl mx-auto">
          <motion.div variants={titleVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins ">My Skills</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-blue-300 max-w-2xl mx-auto font-sans">Here are the technologies and tools I work with to build modern, responsive web applications.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
      <div className="py-4 mt-16">
        <CertificateSec />
      </div>
    </section>
  );
}

export default SkillsSection;
