import { useState } from "react";
import { motion } from "framer-motion";

export default function FlipCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(prev => !prev);

  return (
    <div style={{ perspective: 1000 }} className="cursor-pointer hover:scale-105 transition-transform">
      <motion.div
        onClick={handleClick}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-64"
      >
        {/* Front Side: Title + Photo by clickable name */}
        <div
          className="absolute inset-0 bg-blue-900 text-white rounded-xl overflow-hidden shadow-md flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-4/6 object-cover"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-xs text-gray-300">
              Photo by:{' '}
              <a
                href={project.imgurl}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-300"
              >
                {project.photographer}
              </a>
            </p>
          </div>
        </div>

        {/* Back Side: Tools + View Repo */}
        <div
          className="absolute inset-0 bg-white text-gray-900 rounded-xl shadow-md flex flex-col items-center justify-center p-4"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <ul className="space-y-1 mb-4">
            {project.tools.map((tool, i) => (
              <li key={i} className="text-sm">
                • {tool}
              </li>
            ))}
          </ul>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            View Repo
          </a>
        </div>
      </motion.div>
    </div>
  );
}
