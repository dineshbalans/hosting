import React from "react";
import sslHero from "../assets/svg/ssl-hero.svg";
import HeadBlueStarMainContext from "../../../components/General/HeadBlueStarMainContext";
import Reason from "../../../components/General/Reason";
import Highlights from "../../../components/General/Highlights";
import PlanList from "./components/PlanList";
import { sslData } from "../data/security&ToolsData";
import Review from "../../../components/Review/Review";
import FAQ from "../../../components/FAQ/FAQ";
import TrustedCompanies from "../../../components/TrustedCompanies/TrustedCompanies";

const SslCertificates = () => {
  const { title, subTitle, items } = sslData.highlights;
  return (
    <div>
      <HeadBlueStarMainContext
        img={sslHero}
        mcTitle="Buy SSL Certificates"
        mcStitle="Buy SSL Website Security From Only £24.17/yr."
        desc="SSL certificates provide essential security. Without one, your site will be marked as insecure by the major browsers and penalised by search engines."
      />
      <PlanList />
      <Highlights title={title} subTitle={subTitle} items={items} />
      <Reason why={sslData.reason} />
      <Review />
      <FAQ />
      <TrustedCompanies />
    </div>
  );
};

export default SslCertificates;
