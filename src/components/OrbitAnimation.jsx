import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const OrbitAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`absolute right-0 top-1/4 ${isMobile ? "w-[400px] h-[400px]" : "w-[800px] h-[800px]"} -translate-y-1/4 translate-x-1/4`}>
      {/* Main orbital system */}
      <div className="relative w-full h-full">
        {/* Orbit paths */}
        <div className="absolute inset-0 orbit-path"></div>
        <div className={`absolute ${isMobile ? "inset-[30px]" : "inset-[50px]"} orbit-path`}></div>
        <div className={`absolute ${isMobile ? "inset-[60px]" : "inset-[100px]"} orbit-path`}></div>
        <div className={`absolute ${isMobile ? "inset-[90px]" : "inset-[150px]"} orbit-path`}></div>

        {/* Larger sphere */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0 }}
          animate={
            mounted
              ? {
                  opacity: 1,
                  x: isMobile ? [150, 175, 150, 125, 150] : [300, 350, 300, 250, 300],
                  y: isMobile ? [150, 125, 100, 125, 150] : [300, 250, 200, 250, 300],
                }
              : {}
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <div className={`${isMobile ? "w-24 h-24" : "w-40 h-40"} rounded-full bg-gradient-to-r from-purple-400/80 to-cyan-400/80 blur-md`}></div>
            <div className={`absolute ${isMobile ? "inset-2" : "inset-4"} rounded-full bg-gradient-to-r from-purple-400 to-cyan-400`}></div>
          </div>
        </motion.div>

        {/* Smaller sphere */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0 }}
          animate={
            mounted
              ? {
                  opacity: 1,
                  x: isMobile ? [250, 225, 200, 225, 250] : [500, 450, 400, 450, 500],
                  y: isMobile ? [100, 75, 100, 125, 100] : [200, 150, 200, 250, 200],
                }
              : {}
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <div className={`${isMobile ? "w-16 h-16" : "w-24 h-24"} rounded-full bg-gradient-to-r from-pink-400/80 to-purple-400/80 blur-md`}></div>
            <div className={`absolute ${isMobile ? "inset-1" : "inset-2"} rounded-full bg-gradient-to-r from-pink-400 to-purple-400`}></div>
          </div>
        </motion.div>

        {/* Tiny orbiting dots */}
        {mounted &&
          Array(isMobile ? 6 : 10)
            .fill(0)
            .map((_, i) => (
              <motion.div
                key={i}
                className={`absolute ${isMobile ? "w-1 h-1" : "w-2 h-2"} rounded-full bg-cyan-300`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: (isMobile ? 200 : 400) + Math.cos((2 * Math.PI * i) / (isMobile ? 6 : 10)) * ((isMobile ? 75 : 150) + i * (isMobile ? 5 : 10)),
                  y: (isMobile ? 150 : 300) + Math.sin((2 * Math.PI * i) / (isMobile ? 6 : 10)) * ((isMobile ? 75 : 150) + i * (isMobile ? 5 : 10)),
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
      </div>
    </div>
  );
};

export default OrbitAnimation;
