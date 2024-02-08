import React from "react";
import linuxVps from "./assets/svg/linux-vps-hero.svg";
import ServerMainContext from "../../../components/General/HeadBlueStarMainContext";
import { linuxVpsData } from "../data/serverData";
import ServerTile from "../components/ServerTile";
import Review from "../../../components/Review/Review";
import Highlights from "../../../components/General/Highlights";
import Reason from "../../../components/General/Reason";
import ServiceTiles from "../../../components/ServiceTiles/ServiceTiles";
import FAQ from "../../../components/FAQ/FAQ";
import TrustedCompanies from "../../../components/TrustedCompanies/TrustedCompanies";

const LinuxVps = () => {
  return (
    <section className="bg-white">
      <ServerMainContext
        mcTitle="Managed Virtual Servers"
        mcStitle="Reliable, High Performance VPS with NVMe Powered Storage."
        desc="Don’t be left high and dry. Choose a managed Linux VPS that gives
              you professional, 24x7 support, superior performance and
              reliability, backed by a host with over 21 years’ experience - all
              from only £15.54/mo!"
        img={linuxVps}
      />
      <ul className="centerContainer pdng space-y-8 lg:space-y-5 ">
        {linuxVpsData.tile.map(({ id, title, specs, price }) => (
          <ServerTile key={id} title={title} specs={specs} price={price} />
        ))}
      </ul>
      <Highlights
        title={linuxVpsData.highlights.title}
        subTitle={linuxVpsData.highlights.subTitle}
        items={linuxVpsData.highlights.items}
      />
      <Reason why={linuxVpsData.reason} />
      <div className="centerContainer pdng">
        <ServiceTiles />
      </div>
      <Review />
      <FAQ />
      <TrustedCompanies />
    </section>
  );
};

export default LinuxVps;
