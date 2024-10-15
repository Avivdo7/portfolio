import { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import cvFile from "../assets/AvivDoronResume.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute left-0 top-16 w-48 bg-neutral-800 p-4 shadow-md">
          <ul>
            <li
              className="py-2 cursor-pointer hover:text-cyan-300"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </li>
            <li
              className="py-2 cursor-pointer hover:text-cyan-300"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="py-2 cursor-pointer hover:text-cyan-300"
              onClick={() => scrollToSection("tech")}
            >
              Technologies
            </li>
            <li
              className="py-2 cursor-pointer hover:text-cyan-300"
              onClick={() => scrollToSection("exp")}
            >
              Experience
            </li>
            <li
              className="py-2 cursor-pointer hover:text-cyan-300"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <li
              className="py-2 cursor-pointer hover:text-cyan-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/avivd7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Avivdo7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href={cvFile}
          download="AvivDoronResume.pdf"
          className="hover:text-cyan-300 transition-colors duration-300"
        >
          <PiReadCvLogo />
        </a>

        <a
          href="mailto:avivdm7@gmail.com"
          className="hover:text-cyan-300 transition-colors duration-300"
        >
          <SiMinutemailer />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
