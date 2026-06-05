import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export default function Hero() {
  return (
    <header id="home" className="relative mt-20 lg:mt-0 py-20 lg:py-32 overflow-hidden bg-linear-to-br from-[#FDFCFB] to-[#f6f3f2]">
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-60 items-center ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase max-w-fit border border-[#FF6B35] text-sm mb-5 text-[#FF6B35] bg-[#faddd3] px-3 py-1 rounded-2xl">
            Fueling African Innovation
          </p>
          <h1 className="font-bold tracking-[0.04rem] text-4xl md:text-6xl mb-5">
            Empowering the Next Generation of African Leaders
          </h1>
          <p className="text-slate-600 text-xs md:text-sm tracking-wide mb-4">
            We connect vision to action, transforming ideas into movements and
            passion into purpose for a thriving African continent.
          </p>
          <div className="text-white md:flex gap-3">
            <div className="px-7 md:px-10 py-3 md:py-4 max-w-fit bg-[#7A211E] cursor-pointer active:scale-95 hover:scale-[1.01]  transition-all rounded-xl mb-5 md:mb-0">
              Join the Movement
            </div>
            <Link to="about" smooth={true} className="px-14 md:px-17 py-3 md:py-4 max-w-fit bg-[#7A211E] cursor-pointer active:scale-95 hover:scale-[1.01] transition-all rounded-xl">
              Learn More
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, rotate: "30deg" }}
          whileInView={{ opacity: 3, rotate: 3 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className=" hidden lg:flex border border-slate-300 rounded-2xl shadow-2xl transition-all duration-500">
          <div
          className="hidden lg:flex w-150 h-auto bg-white p-3 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500"
        >
          <img src="hero1.jpg" alt="" className="rounded-2xl" />
        </div>
        </motion.div>
      </div>
    </header>
  );
}
