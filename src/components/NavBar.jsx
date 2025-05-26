import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1.1, 1]);
  const opacity = useTransform(scrollY, [0, 200], [1.1, 0.9]);

  return (
    <>
      {/* Fixed logo scroll */}
      <motion.div style={{ scale, opacity }} whileHover={{ scale: 1.3 }} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 cursor-pointer">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-accent to-cyan-accent p-[2px] shadow-lg">
          <div className="w-full h-full rounded-full bg-navy flex items-center justify-center">
            <span className="text-xl font-bold text-white">DevH.io</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
