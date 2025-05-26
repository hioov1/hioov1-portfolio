import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import HomePage from "./components/HomePage";
import MobileNav from "./components/MobileNav";
import AboutMe from "./components/About";
import ContactAndFooter from "./components/ContactFooter";
import SkillsSection from "./components/Skills";
import Projects from "./components/Projects";

function App() {
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

  return (
    <div className="min-h-screen flex bg-navy-dark">
      {!isMobile && <Sidebar />}
      <div className="flex-1">
        {isMobile ? <MobileNav /> : <Navbar />}
        <main className="relative overflow-hidden">
          <HomePage isMobile={isMobile} />
          <div className="relative z-10">
            <AboutMe />
            <SkillsSection />
            <Projects />

            <ContactAndFooter />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
