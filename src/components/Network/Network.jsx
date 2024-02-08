import React from "react";
import MainContext from "../General/MainContext";
import map from "./assets/img/map-dark.svg";
import "./style.css";

const Network = () => {
  return (
    <section className="bg-white">
      <section className="pddng space-y-10 centerContainer">
        <MainContext
          title="Our Data centers Location"
          subTitle="Cloudhub offers a low latency worldwide network, enabling you to deploy your service infrastructure in close proximity to your customer base."
        />
        <div class="network-map-wrap">
          <ul class="custom-map-location">
            <li style={{ top: "29%", left: "15.5%" }}>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="Canada"
              ></span>
            </li>
            <li style={{ top: "42%", left: "20%" }}>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="United States"
              ></span>
            </li>
            <li style={{ top: "70%", left: "32%" }}>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="Brazil"
              ></span>
            </li>
            <li style={{ top: "57%", left: "48%" }}>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="Nigeria"
              ></span>
            </li>
            <li style={{ top: "18%", left: "53%" }}>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="Finland"
              ></span>
            </li>
            <li style={{ top: "34%", left: "55%" }}>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="Ukraine"
              ></span>
            </li>
            <li style={{ top: "45%", left: "68%" }}>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="India"
              ></span>
            </li>
            <li style={{ top: "35%", left: "80%" }}>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="China"
              ></span>
            </li>
            <li style={{ top: "77%", left: "85%" }}>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="Australia"
              ></span>
            </li>
          </ul>
          <img src={map} className="w-full -z-50" alt="" />
        </div>
      </section>
    </section>
  );
};

export default Network;
