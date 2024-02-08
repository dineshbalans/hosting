import React from "react";
import windowsVps from "./assets/svg/windows-vps-hero.svg";
import ServerMainContext from "../../../components/General/HeadBlueStarMainContext";
import { windowsVpsData } from "../data/serverData";
import ServerTile from "../components/ServerTile";
import Highlights from "../../../components/General/Highlights";
import Reason from "../../../components/General/Reason";
import Review from "../../../components/Review/Review";
import FreqAskQstn from "../../../components/FAQ/FreqAskQstn";
import Blog from "../../Page/Blog/Blog";
import TrustedCompanies from "../../../components/TrustedCompanies/TrustedCompanies";
import TSolution from "../../../components/Solution/TSolution";
import DifferenceTable from "../../../components/Table/DifferenceTable";

const WindowsVps = () => {
  return (
    <section className="bg-white">
      <ServerMainContext
        mcTitle="Windows VPS Hosting"
        mcStitle="Managed by Experts"
        desc="Equipped with lightning-fast NVMe storage, backed by our 24x7 pro
              support and featuring the latest Windows Server 2022, our Windows
              VPS hosting plans are designed for real work."
        img={windowsVps}
      />
      <ul className="centerContainer pdng space-y-8 lg:space-y-5 ">
        {windowsVpsData.tile.map(({ id, title, specs, price }) => (
          <ServerTile key={id} title={title} specs={specs} price={price} />
        ))}
      </ul>
      <Highlights
        title={windowsVpsData.highlights.title}
        subTitle={windowsVpsData.highlights.subTitle}
        items={windowsVpsData.highlights.items}
      />
      <Reason why={windowsVpsData.reason} />
      <Review />
      <FreqAskQstn />
      <DifferenceTable />
      <TrustedCompanies />
    </section>
  );
};

export default WindowsVps;
