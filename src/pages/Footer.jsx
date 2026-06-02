import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#7A211E] w-full py-10 mt-6 border-t border-[#7A211E]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 container mx-auto text-[#57000e]">
          <div className="space-y-6">
            <div className="flex gap-2 items-center mb-4">
              <img src="src/assets/logo.png" alt="" className="w-10 h-10" />
              <span className="text-white text-3xl md:text-5xl font-semibold">
                Inspire4Impact
              </span>
            </div>
            <p className="text-white/80">
              &copy; {new Date().getFullYear()} Inspire4Impact Initiative.
              Empowering the next generation of change-makers across the African
              continent.
            </p>
            <div className="flex gap-6">
              <a
                target="blank"
                rel="noopener noreferrer"
                href="https://web.facebook.com/people/Inspire-4-Impact-Initiative/61559372346392/"
                className="rounded-full bg-white/20 hover:bg-[#FF6B35] cursor-pointer backdrop-blur p-2"
              >
                <FaFacebook size={20} className="text-white" />
              </a>
              <a
                target="blank"
                rel="noopener noreferrer"
                href="instagram.com/i4i_initiative?igsh=MXd4cGI4aGdlbHdieA=="
                className="rounded-full bg-white/20 hover:bg-[#FF6B35] cursor-pointer backdrop-blur p-2"
              >
                <FaInstagram size={20} className="text-white" />
              </a>
              <a
                target="blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@inspire4impact_?_r=1&_t=ZS-9144925ImEa"
                className="rounded-full bg-white/20 hover:bg-[#FF6B35] cursor-pointer backdrop-blur p-2"
              >
                <FaTiktok size={20} className="text-white" />
              </a>
            </div>
          </div>
          <div className="space-y-6 ">
            <h1 className="uppercase text-[#FF6B35]">Quick Links</h1>
            <ul className="text-white">
              <li className="w-fit hover:translate-x-3 cursor-pointer transition-all duration-300">Impact Reports</li>
              <li className="w-fit hover:translate-x-3 cursor-pointer transition-all duration-300">Media Kit</li>
              <li className="w-fit hover:translate-x-3 cursor-pointer transition-all duration-300">Privacy Policy</li>
              <li className="w-fit hover:translate-x-3 cursor-pointer transition-all duration-300">Contact</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h1 className="uppercase text-[#FF6B35]">Contact Info</h1>
            <ul className="flex flex-col gap-1 text-white space-y-3">
              <li className="inline-flex items-center gap-2">
                <span>
                  <CiMail size={20} className="text-[#FF6B35]" />
                </span>
                contact@inspireforimpact.org
              </li>
              <li className="inline-flex items-center gap-2">
                <span>
                  <IoMdCall size={20} className="text-[#FF6B35]" />
                </span>
                +234 903 633 33300
              </li>
              <li className="inline-flex gap-2">
                <span>
                  <MdLocationOn size={20} className="text-[#FF6B35]" />
                </span>
                No. 33 Nelson Mandela Street, Asokoro Federal Capital Territory,
                Abuja Nigeria.
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
