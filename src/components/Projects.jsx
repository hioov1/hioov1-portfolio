import { motion } from "framer-motion";
import salaryapp from "/img/salaryapp.png";
import project2 from "/img/project2.png";
import project3 from "/img/project3.png";
import { p } from "framer-motion/client";

const projects = [
  {
    title: "Portfolio Website",
    image: project2,
    url: "https://github.com/hioov1/ReactTailwind-portfolio",
    tools: ["Vite", "React", "TailwindCSS", "Framer-Motion"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    url: "https://github.com/hioov1/ReactTailwind-MyPortfolio",
    tools: ["Vite", "React", "TailwindCSS", "Framer-Motion"],
  },
  {
    title: "Salary Management System",
    image: salaryapp,
    url: "https://github.com/hioov1/SalaryApp-doc",
    tools: ["MongoDB", "Express", "React", "Node.js", "CRUD"],
  },
];

const Projects = () => {
  return (
    <section id="project" className="bg-transparent text-white relative min-h-screen overflow-hidden py-16 px-6 md:px-16 font-poppins">
      <motion.div className="absolute bottom-1/3 left-1/4 w-3/4 h-3/4 border-2 border-blue-400/20 rounded-full" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 0.5 }} transition={{ duration: 2, ease: "easeOut" }} />
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.5 }} className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins ">Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-base max-w-2xl mx-auto font-sans">Here are some of the projects I've built using modern front-end tools.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="group block bg-blue-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="text-xs bg-blue-800 px-2 py-1 rounded-full text-gray-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
