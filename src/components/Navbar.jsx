import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";
const styles = {
  navthings:
    "hover:text-[#7A121E] hover:border-b-3 border-[#FF6B35] text-[#929090] cursor-pointer font-medium px-3 py-2 transition-colors duration-700 text-sm lg:text-base",
};
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="relative overflow-hidden">
      <nav className="container mx-auto fixed top-0 left-0 z-50 transition-all duration-300 bg-white min-w-full">
        <div className="flex justify-between items-center px-4 py-6 md:px-6 lg:px-8 ">
          <div className="flex gap-2 items-center">
            <img src="src/assets/logo.png" alt="" className="w-10 h-10" />
            <h1 className="text-xl md:text-2xl font-bold text-[#7A211E] font-grotesk">
              Inspire4Impact
            </h1>
          </div>
          <div className="hidden md:flex gap-x-4 lg:gap-x-8">
            <a href="#home" className={styles.navthings}>
              Home
            </a>

            <a href="#projects" className={styles.navthings}>
              Projects
            </a>

            <a href="#about" className={styles.navthings}>
              About Us
            </a>

            <a href="#contact" className={styles.navthings}>
              Our Impact
            </a>

            <div className="px-6 py-3 rounded-full font-bold hidden md:block bg-[#7A211E] cursor-pointer active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
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
        {/* Nav for Smaller screens */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden translate-y-0">
            <a href="#home" className={styles.navthings}>
              HOME
            </a>

            <a href="#projects" className={styles.navthings}>
              PROJECTS
            </a>

            <a href="#about" className={styles.navthings}>
              ABOUT
            </a>

            <a href="#contact" className={styles.navthings}>
              CONTACT
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
/*  md:hidden items-center flex flex-col gap-y-6 mt-4 text-center w-full min-h-screen */