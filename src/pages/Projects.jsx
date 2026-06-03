import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";

export default function Projects() {
  return (
    <div className="container mx-auto py-32">
      <div className="mb-4 mx-2">
        <h1 className="uppercase text-[#FF6B35] mb-2">Making an Impact</h1>
        <div className="flex justify-between gap-2 items-center text-[#7A211E]">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold">
            Our Featured Projects
          </h1>
          <div className="flex  items-center text-sm md:text-xl">
            <a href="" className="text-nowrap">
              View All Initiatives
            </a>
            <IoMdArrowForward size={20} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group border border-[#e5e2e1] hover:translate-xy-8 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-xl rounded-2xl hover:border-[#FF6B35]"
        >
          <img
            src="/prof1.png"
            alt=""
            className="w-full h-80 object-cover rounded-tr-2xl rounded-tl-2xl "
          />
          <div className="p-4">
            <h1 className="text-[#7A211E] text-2xl font-semibold md:text-3xl md:font-bold group-hover:text-[#FF6B35] transition-colors mb-3">
              The Youth Opportunity Summit
            </h1>
            <p className="text-sm text-gray-400 mb-3">
              A flagship gathering connecting ambitious youths with global
              opportunities, mentorship, and career-defining networks.
            </p>
            <a
              href=""
              className="inline-flex gap-2 items-center text-[#7A211E]"
            >
              Explore summit{" "}
              <span>
                <FaArrowRight size={20} />
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" group border border-[#e5e2e1] hover:translate-xy-8 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-xl rounded-2xl hover:border-[#3d1ce4]"
        >
          <img
            src="/prof2.png"
            alt=""
            className="w-full h-80 object-cover rounded-tr-2xl rounded-tl-2xl group-hover:scale-100 transition-transform duration-500 "
          />
          <div className="p-4">
            <h1 className="text-[#7A211E] text-2xl font-semibold md:text-4xl md:font-bold group-hover:text-[#3d1ce4] transition-colors mb-3">
              The Youth Entrepreneurs Impact Project
            </h1>
            <p className="text-sm text-gray-400 mb-3">
              Empowering emerging business leaders with grants, technical
              skills, and sustainable growth strategies for their startups.
            </p>
            <a
              href=""
              className="inline-flex gap-2 items-center text-[#7A211E]"
            >
              Explore summit{" "}
              <span>
                <FaArrowRight size={20} />
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="group border border-[#e5e2e1] hover:translate-xy-8 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-xl rounded-2xl hover:border-[#FF6B35]"
        >
          <img
            src="/prof3.png"
            alt=""
            className="w-full h-80 object-cover rounded-tr-2xl rounded-tl-2xl "
          />
          <div className="p-4">
            <h1 className="text-[#7A211E] text-2xl font-semibold md:text-4xl md:font-bold group-hover:text-[#FF6B35] transition-colors mb-3">
              The Naija Change Makers
            </h1>
            <p className="text-sm text-gray-400 mb-3">
              A community-focused program identifying and training local leaders
              to solve unique challenges within their immediate environments.
            </p>
            <a
              href=""
              className="inline-flex gap-2 items-center text-[#7A211E]"
            >
              Explore summit{" "}
              <span>
                <FaArrowRight size={20} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
