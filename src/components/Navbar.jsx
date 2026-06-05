import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-scroll";
const styles = {
  navthings:
    "hover:text-[#7A121E] hover:border-b-3 border-[#FF6B35] text-[#929090] cursor-pointer font-medium px-3 py-2 transition-colors duration-700 text-sm lg:text-base",
};
export default function Navbar(sectionId) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <div className="relative overflow-hidden">
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.4 }}
        className="container mx-auto fixed top-0 left-0 z-50 transition-all duration-300 bg-white min-w-full"
      >
        <div className="flex justify-between items-center px-4 py-6 md:px-6 lg:px-8 ">
          <div className="flex gap-2 items-center">
            <img src="/logo.png" alt="" className="w-10 h-10" />
            <h1 className="text-xl md:text-2xl font-bold text-[#7A211E] font-grotesk">
              Inspire4Impact
            </h1>
          </div>
          <div className="hidden md:flex gap-x-4 lg:gap-x-8">
            <Link to="home" smooth={true} duration={500} className={styles.navthings}>
              Home
            </Link>

            <Link to="projects" smooth={true}  duration={500} className={styles.navthings}>
              Projects
            </Link>

            <Link to="about" smooth={true} duration={500} className={styles.navthings}>
              About Us
            </Link>

            <Link to="impact" smooth={true} duration={500} className={styles.navthings}>
              Our Impact
            </Link>

            <div className="px-6 py-3 rounded-full font-bold hidden md:block bg-[#7A211E] cursor-pointer active:scale-95 hover:scale-[1.01] transition-all">
              <a
                className="lg:text-base font-medium text-white"
                href="https://wa.link/1tbhf7"
                rel="noopenr"
                target="blank"
              >
                Join us
              </a>
            </div>
          </div>

          {/* Icons : to install => npm install react-icons */}
          <div className="cursor-pointer md:hidden text-[#7A121E]">
            {menuOpen ? (
              <RiCloseLargeFill size={35} onClick={toggleMenu} />
            ) : (
              <CiMenuBurger size={35} onClick={toggleMenu} />
            )}
          </div>
        </div>
      </motion.nav>
      {/* Nav for Smaller screens */}
      {menuOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8  translate-y-0 transition-all duration-100"
        >
          <Link onClick={handleLinkClick} to="home" className="text-3xl cursor-pointer">
            HOME
          </Link>

          <Link onClick={handleLinkClick} to="projects" className="text-3xl cursor-pointer">
            PROJECTS
          </Link>

          <Link onClick={handleLinkClick} to="about" className="text-3xl cursor-pointer">
            ABOUT
          </Link>

          <Link onClick={handleLinkClick} to="impact" className="text-3xl cursor-pointer">
            OUR IMPACT
          </Link>

          <a
            className="text-3xl px-7 py-3 bg-[#7A121E] rounded-full text-white active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
            href="https://wa.link/1tbhf7"
            rel="noopenr"
            target="blank"
          >
            Join Us
          </a>
        </motion.div>
      )}
    </div>
  );
}
/*  md:hidden items-center flex flex-col gap-y-6 mt-4 text-center w-full min-h-screen */
