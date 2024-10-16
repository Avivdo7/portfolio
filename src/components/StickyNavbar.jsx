import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import cvFile from "../assets/AvivDoronResume.pdf";

const StickyNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible =
        currentScrollPos < 10 ||
        prevScrollPos > currentScrollPos ||
        currentScrollPos > prevScrollPos;

      setIsVisible(isVisible);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start(isVisible ? "visible" : "hidden");
  }, [isVisible, controls]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust this to match your navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 1000); // Show Navbar after 1 second
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 bg-opacity-90 shadow-md"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex space-x-4 lg:space-x-0 lg:flex-row lg:justify-between lg:w-full">
          {/* Hamburger Menu Icon */}
          <button
            className="lg:hidden text-white hover:text-cyan-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Menu Links */}
          <div
            className={`flex-col lg:flex lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 ${
              menuOpen ? "flex" : "hidden"
            } lg:flex`}
          >
            <button
              onClick={scrollToTop}
              className="text-white hover:text-cyan-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("exp")}
              className="text-white hover:text-cyan-300 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("tech")}
              className="text-white hover:text-cyan-300 transition-colors"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-cyan-300 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-cyan-300 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.5 }}
              href="https://www.linkedin.com/in/Avivd7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-300 transition-colors text-2xl"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5 }}
              href="https://github.com/Avivdo7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-300 transition-colors text-2xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5 }}
              href={cvFile}
              download="AvivDoronResume.pdf"
              className="text-white hover:text-cyan-300 transition-colors text-2xl"
            >
              <PiReadCvLogo />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5 }}
              href="mailto:avivdm7@gmail.com"
              className="text-white hover:text-cyan-300 transition-colors text-2xl"
            >
              <SiMinutemailer />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default StickyNavbar;
