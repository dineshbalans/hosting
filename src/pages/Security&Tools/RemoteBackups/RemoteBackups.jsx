import React from "react";
import backUpHero from "../assets/svg/remote-backup-hero.svg";
import HeadBlueStarMainContext from "../../../components/General/HeadBlueStarMainContext";
import { backUpData } from "../data/security&ToolsData";
import Review from "../../../components/Review/Review";
import Highlights from "../../../components/General/Highlights";
import TrustedCompanies from "../../../components/TrustedCompanies/TrustedCompanies";
import FreqAskQstn from "../../../components/FAQ/FreqAskQstn";
import SpaceSlider from "./components/SpaceSlider";

const RemoteBackups = () => {
  const { items, subTitle, title } = backUpData.highlights;

  return (
    <section>
      <HeadBlueStarMainContext
        img={backUpHero}
        mcTitle="Remote Backups"
        mcStitle="Secure Offsite Backups"
        desc="The ultimate disaster recovery insurance. With automated scheduling and impenetrable encryption, our remote backups provide rock-solid data protection that helps make data loss a thing of the past."
      />
      <SpaceSlider />
      <Highlights title={title} subTitle={subTitle} items={items} />
      <Review />
      <FreqAskQstn />
      <TrustedCompanies />
    </section>
  );
};

export default RemoteBackups;
