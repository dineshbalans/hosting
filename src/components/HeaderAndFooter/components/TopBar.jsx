import React from "react";
import { FaPhoneAlt, FaUser, FaLock } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";

const TopBar = () => {
  return (
    <section className="bg-[#F1F1F1]">
      <div
        className="flex px-6 md:px-12 lg:px-[75px] py-[7px]  text-[13px]
        text-quadra font-medium justify-end lg:justify-between items-center 2xl:container 2xl:mx-auto"
      >
        {/* Left Section */}
        <nav className="hidden lg:flex gap-[10px] items-center">
          <div className="flex items-center gap-2 hover:text-primary transition-colors ease-linear">
            <FaPhoneAlt className="scale-90 -translate-y-[1.5px]" />
            <span className="cursor-pointer">
              24x7 Technical Support (+91)9025352515
            </span>
          </div>
          <div className="flex items-center gap-2 hover:text-primary transition-colors ease-linear">
            <IoChatbubblesSharp className=" -translate-y-[1.5px]" />
            <span className="cursor-pointer ">Live Chat</span>
          </div>
        </nav>
        {/* Right Section */}
        <nav className="flex gap-[12px] items-center">
          <div className="flex items-center gap-2 hover:text-primary transition-colors ease-linear">
            <FaUser className="scale-90 -translate-y-[1.5px]" />
            <span className="cursor-pointer">Login</span>
          </div>
          <div className="flex items-center gap-2 hover:text-primary transition-colors ease-linear">
            <FaLock className="scale-90 -translate-y-[1.5px]" />
            <span className="cursor-pointer">Register</span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TopBar;
