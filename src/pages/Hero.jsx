import React from "react";
import { motion } from 'motion/react';
export default function Hero() {
  return (
    <header
      className="relative mt-20 lg:mt-0 py-20 lg:py-32 overflow-hidden bg-linear-to-br from-[#FDFCFB] to-[#f6f3f2]"
    >
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-60 items-center ">
        <div>
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
            <div className="px-7 md:px-10 py-3 md:py-4 max-w-fit bg-[#7A211E] rounded-xl mb-3 md:mb-0">
              Join the Movement
            </div>
            <div className="px-14 md:px-17 py-3 md:py-4 max-w-fit bg-[#7A211E] rounded-xl">
              Learn More
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-150 h-auto bg-white p-3 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
          <img src="src/assets/hero1.jpg" alt="" className="rounded-2xl" />
        </div>
      </div>
    </header>
  );
}
