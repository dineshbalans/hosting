import React from "react";
import { deidcatedServerData } from "../data/serverData";
import dedicatedServers from "./assets/svg/dedicated-server-hero.svg";
import ServerMainContext from "../../../components/General/HeadBlueStarMainContext";
import Review from "../../../components/Review/Review";
import ServerTile from "../components/ServerTile";
import Highlights from "../../../components/General/Highlights";
import Reason from "../../../components/General/Reason";
import ServiceTiles from "../../../components/ServiceTiles/ServiceTiles";
import FAQ from "../../../components/FAQ/FAQ";
import TrustedCompanies from "../../../components/TrustedCompanies/TrustedCompanies";

const DedicatedServers = () => {
  return (
    <section className="bg-white">
      <ServerMainContext
        mcTitle="Managed Dedicated Servers"
        mcStitle="Built for Business"
        desc="When you need class-leading performance, security and availability, our managed 
        dedicated servers give you everything you need to power your business to success."
        img={dedicatedServers}
      />
      <ul className="centerContainer pdng space-y-8 lg:space-y-5 ">
        {deidcatedServerData.tile.map(({ id, title, specs, price }) => (
          <ServerTile
            key={id}
            title={title}
            specs={specs}
            price={price}
            hasSix
          />
        ))}
      </ul>
      <Highlights
        title={deidcatedServerData.highlights.title}
        subTitle={deidcatedServerData.highlights.subTitle}
        items={deidcatedServerData.highlights.items}
      />
      <Reason why={deidcatedServerData.reason} isLeft />
      <div className="centerContainer pdng">
        <ServiceTiles />
      </div>
      <Review />
      <FAQ />
      <TrustedCompanies />
    </section>
  );
};

export default DedicatedServers;
