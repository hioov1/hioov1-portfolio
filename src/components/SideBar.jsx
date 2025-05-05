import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3", href: "#home" },
  { id: "about", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", href: "#about" },
  { id: "project", icon: "M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z", href: "#project" },
  { id: "contact", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 0l8 6 8-6", href: "#contact" },
];

const Sidebar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.aside
      className="fixed left-0 top-48 -translate-y-1/2 h-[50vh] w-14 flex flex-col items-center justify-center py-6 
                 bg-[#bebad0] backdrop-blur-md shadow-[10px_0_40px_5px_rgba(128,90,213,0.4)] 
                 rounded-r-[40px] z-50"
      initial={{ x: -60 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-6">
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            onClick={() => setActive(item.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative w-12 h-12 flex items-center justify-center rounded-full 
              ${active === item.id ? "text-white" : "text-[#0e0b3d]"}`}
          >
            {active === item.id && <motion.span layoutId="activeHighlight" className="absolute inset-0 bg-[#5e54a4] rounded-full" transition={{ type: "spring", stiffness: 300, damping: 20 }} />}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
