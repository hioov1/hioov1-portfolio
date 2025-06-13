import { motion } from "framer-motion";

const certificates = [
  {
    title: "Front-End Web Development",
    issuer: "Dicoding, powered by DBS Foundation",
    date: "2025",
    url: "https://drive.google.com/file/d/1Ap2Uslvpx4cR5wkk1u7fol32yHy_YkHe/view?usp=sharing",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "Dicoding, powered by Amazon Web Services",
    date: "2025",
    url: "https://drive.google.com/file/d/1ZcFJCRfXUP2WdZvpZo3Vy4YhKpuO14yd/view?usp=sharing",
  },
  {
    title: "Backend Development with NodeJS",
    issuer: "Dicoding, powered by Amazon Web Services",
    date: "2025",
    url: "https://drive.google.com/file/d/11Y9_DqHQQjf7tZ2i9WbpEF9u5kLVufMG/view?usp=sharing",
  },
  {
    title: "Cloud and Gen AI Amazon Web Services",
    issuer: "Dicoding, powered by Amazon Web Services",
    date: "2025",
    url: "#",
  },
  {
    title: "Python Programming",
    issuer: "Dicoding, powered by DBS Foundation",
    date: "2025",
    url: "https://drive.google.com/file/d/1aGL0aWfMJmbALlCP5-KsfoDsoYIjdGKd/view?usp=sharing",
  },
  {
    title: "Machine Learning",
    issuer: "Dicoding, powered by DBS Foundation",
    date: "2025",
    url: "#",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CertificateSec() {
  return (
    <section id="certificates" className="py-16 px-6 md:px-16 bg-gray-900">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
          Bootcamp Certifications
        </h2>
        <div className="mt-2 w-20 h-1 bg-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          I'm dedicated to continuous learning. These certifications showcase my commitment to staying current in the fast-paced world of IT.
        </p>
      </motion.div>

      {/* Certificate cards grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {certificates.map((cert, idx) => (
          <motion.a
            key={idx}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="block bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2l4 -4m2 8H7a2 2 0 0 1-2 -2V6a2 2 0 0 1 2 -2h5l2 2h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              <span className="font-medium">Issuer:</span> {cert.issuer}
            </p>
            <p className="text-gray-400 text-sm mb-4">
              <span className="font-medium">Year:</span> {cert.date}
            </p>
            <button className="mt-auto inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm">
              View Certificate
n            </button>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
