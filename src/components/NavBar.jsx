import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex justify-center p-8">
      <div className="flex items-center justify-between w-full max-w-5xl">
        <div className="flex items-center space-x-8 md:space-x-12">
          <motion.a href="#" className="text-white font-medium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Home
          </motion.a>
          <motion.a href="#about" className="text-white/70 font-medium" whileHover={{ scale: 1.05, color: "rgba(255, 255, 255, 1)" }} whileTap={{ scale: 0.95 }}>
            About me
          </motion.a>
        </div>

        <motion.div className="flex justify-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-accent to-cyan-accent p-[2px]">
            <div className="w-full h-full rounded-full bg-navy flex items-center justify-center">
              <span className="text-xl font-bold text-white">DevH.io</span>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center space-x-8 md:space-x-12">
          <motion.a href="#project" className="text-white/70 font-medium" whileHover={{ scale: 1.05, color: "rgba(255, 255, 255, 1)" }} whileTap={{ scale: 0.95 }}>
            Project
          </motion.a>
          <motion.a href="#contact" className="text-white/70 font-medium" whileHover={{ scale: 1.05, color: "rgba(255, 255, 255, 1)" }} whileTap={{ scale: 0.95 }}>
            Contact
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
