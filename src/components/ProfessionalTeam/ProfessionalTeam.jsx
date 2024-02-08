import React from "react";
import MainContext from "../General/MainContext";
import { teamData } from "./data/teamData";
import { FaFacebook, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

const ProfessionalTeam = () => {
  return (
    <section className="bg-white">
      <section className="pddng space-y-10 centerContainer">
        <MainContext
          title="Meet Our Professional Team"
          subTitle="Distinctively grow go forward manufactured products and optimal networks.
            Enthusiastically disseminate user-centric outsourcing through revolutionary"
        />

        <ul className="flex flex-wrap justify-center items-center">
          {teamData.map(({ id, name, image, desc, design }) => (
            <li key={id} className="w-full md:w-1/2 lg:w-1/3 sml:p-8 py-5">
              <div className="flex flex-col items-center border rounded-lg space-y-1 bg-[#fafafa]">
                <img src={image} className="rounded-t-lg mb-2" />
                <h1 className="font-semibold text-lg">{name}</h1>
                <h5 className="text-primeBlue text-[15px] font-medium">
                  {design}
                </h5>
                <p className="px-3 text-sm text-center">{desc}</p>
                <div className="flex justify-center gap-7 pt-2 pb-4">
                  <FaFacebook className="scale-[1.25] text-quadra cursor-pointer" />
                  <FaLinkedinIn className="scale-[1.25] text-quadra cursor-pointer" />
                  <FaMailBulk className="scale-[1.25] text-quadra cursor-pointer" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ProfessionalTeam;
