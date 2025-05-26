import React from "react";
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
    title: "Backend Development with Node.js",
    issuer: "Dicoding, powered by Amazon Web Services",
    date: "2025",
    url: "#",
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

const CertificateSec = () => {
  return (
    <div className="text-center text-white space-y-9">
      <h2 className="text-3xl md:text-4xl font-bold font-poppins">Bootcamp Certifications</h2>
      <div className="w-56 h-1 bg-blue-500 mx-auto mb-6"></div>
      <p className="text-blue-300 max-w-2xl mx-auto font-sans">
        As someone deeply passionate about the world of IT, I am committed to continuous learning and growth to keep up with the ever-evolving technology landscape. The certifications I have obtained reflect my dedication to enhancing my
        skills and expanding my knowledge in this field.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="block bg-blue-900 rounded-xl p-6 text-left space-y-2 shadow-md hover:bg-blue-800 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold">{cert.title}</h3>
            <p className="text-gray-400 text-sm">Issued by: {cert.issuer}</p>
            <p className="text-gray-500 text-sm">Year: {cert.date}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default CertificateSec;
