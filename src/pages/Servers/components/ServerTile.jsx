import React from "react";
import { IoIosRocket } from "react-icons/io";
import { BiMicrochip } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
// HAS_SIX
import { IoIosGlobe, IoMdWifi } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";

const ServerTile = ({ title, specs, price, hasSix = false }) => {
  return (
    <li
      className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-0 justify-between border bg-cement/50 p-5 rounded-lg shadow-xl 
    hover:scale-[1.03] transition-all ease-linear"
    >
      <h1 className="w-full lg:w-1/4 text-xl font-semibold text-ternary">
        {title}
      </h1>
      {hasSix ? (
        <ul className="flex flex-wrap gap-2 justify-between w-full lg:w-[39%] text-sm">
          {specs.map(({ id, desc, Icon }) => (
            <li key={id} className="w-full md:w-[48%] flex gap-3 items-center">
              <Icon className="text-primeBlue scale-[1.25]" />
              <h6>{desc}</h6>
            </li>
          ))}
          <li className="w-full md:w-[48%] flex gap-3 items-center">
            <IoMdWifi className="text-primeBlue scale-[1.25]" />
            <h6> 1 Gbit Port Speed</h6>
          </li>
          <li className="w-full md:w-[48%] flex gap-3 items-center">
            <IoCloudUploadOutline className="text-primeBlue scale-[1.25]" />
            <h6> 10TB Monthly Transfer</h6>
          </li>
          <li className="w-full md:w-[48%] flex gap-3 items-center">
            <IoIosGlobe className="text-primeBlue scale-[1.25]" />
            <h6> IPv4 IP Address</h6>
          </li>
          <li className="w-full md:w-[48%] flex gap-3 items-center">
            <RiComputerLine className="text-primeBlue scale-[1.25]" />
            <h6> Windows or Linux</h6>
          </li>
        </ul>
      ) : (
        <ul className="flex flex-wrap gap-2 justify-between w-full lg:w-[35%] text-sm">
          <li className="w-full md:w-[48%] flex gap-3 items-center">
            <IoIosRocket className="text-primeBlue scale-[1.25]" />
            <h6>{specs.core} CPU Cores</h6>
          </li>
          <li className="w-full md:w-[48%] flex gap-3 items-center">
            <BiMicrochip className="text-primeBlue scale-[1.25]" />
            <h6>{specs.RAM} GB RAM</h6>
          </li>
          <li className="w-full md:w-[48%] flex gap-3 items-center">
            <AiOutlineThunderbolt className="text-primeBlue scale-[1.25]" />
            <h6>{specs.storage} Storage</h6>
          </li>
          <li className="w-full md:w-[48%] flex gap-3 items-center">
            <BsArrowRepeat className="text-primeBlue scale-[1.25]" />
            <h6>Daily Snapshot</h6>
          </li>
          <li className="w-full md:w-[48%] flex gap-3 items-center">
            {specs.system ? (
              <IoCodeSlashOutline className="text-primeBlue scale-[1.25]" />
            ) : (
              <FaWindows className="text-primeBlue scale-[1.25]" />
            )}
            <h6>{specs.system ? "Linux or Windows" : "Windows Server 2022"}</h6>
          </li>
          <li className="w-full md:w-[48%] flex gap-3 items-center">
            <MdOutlineSettingsSuggest className="text-primeBlue scale-[1.25]" />
            <h6>
              {specs.cORp ? " cPanel or Plesk (Optional)" : "Plesk (Optional)"}
            </h6>
          </li>
        </ul>
      )}
      <div className="border-t-2 lg:border-t-0 lg:border-l-2 w-full lg:w-fit pt-5 lg:pl-7 flex gap-3 flex-col justify-between items-center">
        <h5 className="text-3xl text-orange-700">
          ₹ {price}
          <span className="text-xs text-ternary"> /month ex VAT</span>
        </h5>
        <button className="primeBttn w-full md:w-1/2 lg:w-full">
          Order Now
        </button>
      </div>
    </li>
  );
};

export default ServerTile;
