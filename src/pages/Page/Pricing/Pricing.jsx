import React from "react";
import InfoHeader from "../../../components/General/InfoHeader";
import Plans from "../../../components/Plans/Plans";
import DifferenceTable from "../../../components/Table/DifferenceTable";
import VpsPricePlan from "../../Hosting/VpsHosting/components/VpsPricePlan";
import PackageTable from "../../../components/Table/PackageTable";
import FAQ from "../../../components/FAQ/FAQ";
import Review from "../../../components/Review/Review";
import PopularDomain from "../../../components/Domain/PopularDomain";
import CallToAction from "../../../components/General/CallToAction";
import BgSection from "../../../components/General/BgSection";
import DomainList from "../../Home/DomainSearchTwo/components/DomainList";

const Pricing = () => {
  return (
    <BgSection>
      <InfoHeader
        title="Pricing"
        desc="Enthusiastically embrace resource-leveling functionalities after
            leveraged paradigms. Distinctively optimize scalable quality vectors 
            with highly efficient."
      />
      <DifferenceTable />
      <PopularDomain />
      <Plans />
      <PackageTable />
      <CallToAction />
      {/* <div className="translate-y-36 relative">
        <DomainList />
      </div> */}
      <VpsPricePlan />
      <FAQ />
      <Review />
    </BgSection>
  );
};

export default Pricing;
