import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll spy logic
  useEffect(() => {
    const sectionIds = ["home", "about", "project", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          rootMargin: "0px 0px -70% 0px", // Deteksi saat bagian tengah viewport
          threshold: 0.1,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Link style helper
  const linkStyle = (id) => `text-xl font-medium transition-colors ${activeSection === id ? "text-white" : "text-white/70"}`;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-2 pl-6 pr-2 z-30 bg-navy/50 backdrop-blur-sm shadow-md">
        <motion.div className="flex justify-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-accent to-cyan-accent p-[2px]">
            <div className="w-full h-full rounded-full bg-navy flex items-center justify-center">
              <span className="text-lg font-bold text-white">DevH.io</span>
            </div>
          </div>
        </motion.div>

        <button onClick={toggleMenu} className="p-2 text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 bg-navy-dark z-20 pt-24" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <div className="flex flex-col items-center space-y-8 py-8">
              <motion.a href="#home" className={linkStyle("home")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(false)}>
                Home
              </motion.a>
              <motion.a href="#about" className={linkStyle("about")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(false)}>
                About
              </motion.a>
              <motion.a href="#project" className={linkStyle("project")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(false)}>
                Project
              </motion.a>
              <motion.a href="#contact" className={linkStyle("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(false)}>
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
