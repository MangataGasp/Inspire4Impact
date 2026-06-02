import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineTrackChanges } from "react-icons/md";

export default function About() {
  return (
    <div className="container mx-auto py-32 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="absolute -top-10 -left-10 bottom-0 w-32 h-32 bg-[#FF6B35] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-20"></div> 
          <div className="relative overflow-hidden rounded-3xl shadow-2xl mx-2">
            <img
              src="/src/assets/about.png"
              alt="youths displaying their tribes"
              className="w-full h-auto"
            />
          </div>
           <div className="absolute  -bottom-3 md:-bottom-5 right-0 md:-right-5 bg-[#7A211E] font-semibold text-xl text-white rounded-lg p-5">100% <br /> Youth-Led</div> 
        </div>

        <div className="order-1 lg:order-2">
          <h1 className="uppercase mx-10 mb-2 text-xl text-[#FF6B35]">Who we are</h1>
          <h2 className="font-bold text-4xl text-[#7A211E] mx-10 mb-4">About Us</h2>
          <p className="max-w-130 text-left text-lg lg:text-xl text-gray-400 mx-2 mb-4">
            Inspire4Impact is a youth-led, impact-driven initiative designed to
            equip young people with the skills, confidence, and networks to
            thrive in today's world. We connect vision to action, transforming
            ideas into movements and passion into purpose.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2">
            <div className="w-full border-l-4 border-[#FF6B35] bg-[#f3efef3a] rounded-2xl p-4">
              <div className="flex gap-1 items-center mb-2">
                <MdOutlineTrackChanges size={20} className="text-[#FF6B35]"/>
                <h1 className="text-[#7A211E] font-bold text-xl">
                Mission
                </h1>
              </div>
              
              To inspire and empower young Africans to take bold steps toward
              personal growth, community transformation, and national
              development.
            </div>
            <p className="w-full border-l-4 rounded-2xl border-[#3d1ce4] bg-[#f3efef3a] p-4">
              <div>
                <FaRegEye size={20} className="text-[#3d1ce4]"/>
                <h1 className="text-[#7A211E] font-bold text-xl">Vision</h1>
              </div>
              A generation of purpose-driven youth transforming Africa through
              innovation, leadership, and social impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
