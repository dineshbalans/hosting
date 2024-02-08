import React from "react";
import cloudServer from "./assets/svg/cloud-hosting-hero.svg";
import ServerMainContext from "../../../components/General/HeadBlueStarMainContext";
import { cloudServerData } from "../data/serverData";
import ServerTile from "../components/ServerTile";
import Reason from "../../../components/General/Reason";
import Review from "../../../components/Review/Review";
import FreqAskQstn from "../../../components/FAQ/FreqAskQstn";
import Blog from "../../Page/Blog/Blog";
import TrustedCompanies from "../../../components/TrustedCompanies/TrustedCompanies";
import Solution from "../../../components/Solution/Solution";
import DifferenceTable from "../../../components/Table/DifferenceTable";

const CloudServers = () => {
  return (
    <section className="bg-white">
      <ServerMainContext
        mcTitle="Secure Cloud Servers"
        mcStitle="Designed for mission-critical applications"
        desc="Hyperslice managed cloud servers are the ideal solution for when uptime, performance, scalability and support are critical for your enterprise."
        img={cloudServer}
      />
      <ul className="centerContainer pdng space-y-8 lg:space-y-5 ">
        {cloudServerData.tile.map(({ id, title, specs, price }) => (
          <ServerTile key={id} title={title} specs={specs} price={price} />
        ))}
      </ul>
      <Reason why={cloudServerData.reason} />
      <DifferenceTable />
      <Review />
      <FreqAskQstn />
      <TrustedCompanies />
    </section>
  );
};

export default CloudServers;
