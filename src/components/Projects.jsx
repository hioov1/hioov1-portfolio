import { motion } from "framer-motion";
import FlipCard from "./FlipCard";
import salaryapp from "/img/salaryapp.jpg";
import portfolio1 from "/img/portfolio1.jpg";
import portfolio2 from "/img/portfolio2.jpg";

const projects = [
  {
    title: "Portfolio Website",
    image: portfolio1,
    url: "https://github.com/hioov1/ReactTailwind-portfolio",
    tools: ["Vite", "React", "TailwindCSS", "Framer-Motion"],
    photographer: " Lautaro Andreani",
    imgurl: "https://unsplash.com/photos/black-laptop-computer-turned-on-beside-white-and-black-robot-toy-SQIpFNb0Nk4?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  },
  {
    title: "Portfolio Website",
    image: portfolio2,
    url: "https://github.com/hioov1/ReactTailwind-MyPortfolio",
    tools: ["Vite", "React", "TailwindCSS", "Framer-Motion"],
    photographer: " Arnold Francisca",
    imgurl: "https://unsplash.com/photos/black-laptop-computer-on-white-surface-nPhl2x4fk2s?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  },
  {
    title: "Salary Management System",
    image: salaryapp,
    url: "https://github.com/hioov1/SalaryApp-doc",
    tools: ["MongoDB", "Express", "React", "Node.js", "CRUD", "Postman"],
    photographer: " Walling",
    imgurl: "https://unsplash.com/photos/a-computer-screen-with-a-logo-on-it-xkBaqlcqeb4?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  },
];

// Variants for container to stagger children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <section
      id="project"
      className="bg-transparent text-white relative min-h-screen overflow-hidden py-16 px-6 md:px-16 font-poppins"
    >
      {/* background circle */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3/4 h-3/4 border-2 border-blue-400/20 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        className="max-w-6xl mx-auto space-y-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          Here are some of the projects I've built using modern front-end tools.
        </p>
      </motion.div>

      {/* grid with staggered flip cards, replayable on scroll */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}  // set once to false for replay
      >
        {projects.map((proj, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <FlipCard project={proj} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;