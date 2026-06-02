import React from "react";
import { motion } from 'motion/react';
import { FaRegMap } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { PiMoney } from "react-icons/pi";
import { TiGroup } from "react-icons/ti";

export default function Stories() {
  return (
    <div className="py-32 container mx-auto">
      <div className="text-center mb-15">
        <h1 className="font-bold text-3xl text-[#7A211E] mb-4">
          Our Short Story in Numbers...
        </h1>
        <div className="w-20 h-1.5 bg-[#FF6B35] mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mx-auto">
        <div className="group w-full ">
          <div className="border border-gray-300 rounded-xl w-fit mx-auto p-3 group-hover:rotate-10 group-hover:border-[#FF6B35] transition-all">
            <GoRocket size={20} className="text-[#FF6B35]" />
          </div>
          <div className="text-[#7A211E] text-4xl lg:text-5xl w-full font-bold text-center">
            200+
          </div>
          <div className="uppercase text-gray-400 text-center w-full font-bold text-xs">
            Entrepreneurs impact
          </div>
        </div>

        <div className="group w-full">
          <div className="border border-gray-300 rounded-xl w-fit mx-auto p-3 group-hover:-rotate-10 group-hover:border-[#3d1ce4] transition-all">
            <TiGroup size={20} className="text-[#3d1ce4]" />
          </div>
          <div className="text-[#7A211E] w-full text-4xl lg:text-5xl font-bold text-center">
            100+
          </div>
          <div className="uppercase text-gray-400 text-center w-full font-bold text-xs">
            Volunteers Engaged
          </div>
        </div>

        <div className="group w-full">
          <div className="border border-gray-300 rounded-xl w-fit mx-auto p-3 group-hover:rotate-10 group-hover:border-[#FF6B35] transition-all">
            <TiGroup size={20} className="text-[#FF6B35]" />
          </div>
          <div className="text-[#7A211E] w-full text-4xl lg:text-5xl font-bold text-center">
            12k+
          </div>
          <div className="uppercase text-gray-400 text-center w-full font-bold text-xs">
            Youths Inspired
          </div>
        </div>

        <div className="group w-full">
          <div className="border border-gray-300 rounded-xl w-fit mx-auto p-3 group-hover:-rotate-10 group-hover:border-[#3d1ce4] transition-all">
            <FaRegMap size={20} className="text-[#3d1ce4]" />
          </div>
          <div className="text-[#7A211E] w-full text-4xl lg:text-5xl font-bold text-center">
            7
          </div>
          <div className="uppercase text-gray-400 text-center w-full font-bold text-xs">
            States Visited
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="group w-full justify-center items-center">
            <div className="border border-gray-300 rounded-xl w-fit mx-auto p-3 group-hover:rotate-10 group-hover:border-[#FF6B35] transition-all">
              <PiMoney size={20} className="text-[#FF6B35]" />
            </div>
            <div className="text-[#7A211E] w-full text-4xl lg:text-5xl font-bold text-center">
              15m+
            </div>
            <div className="uppercase text-gray-400 text-center font-bold text-xs">
              Grants Distributed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
