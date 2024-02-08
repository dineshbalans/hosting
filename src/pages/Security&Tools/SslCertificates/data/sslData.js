import { FiLock } from "react-icons/fi";
import { GoVerified } from "react-icons/go";
import { BsGlobe2 } from "react-icons/bs";
import { IoShieldCheckmarkOutline, IoRibbonOutline } from "react-icons/io5";

export const sslPlanData = {
  items: [
    {
      id: "sslpd_1",
      title: "Alpha",
      price: 2417,
      warranty: 1000,
    },
    {
      id: "sslpd_2",
      title: "Domains",
      price: 4917,
      warranty: 10000,
    },
    {
      id: "sslpd_3",
      title: "Organisation",
      price: 7517,
      warranty: 12500000,
    },
  ],
  features: [
    {
      id: "sslfid_1",
      Icon: FiLock,
      title: "Standard Browser Padlock",
      desc: "Displays the standard browser padlock.",
    },
    {
      id: "sslfid_2",
      Icon: GoVerified,
      title: "Domain Level Validation",
      desc: "Check the domain owner before issuance.",
    },
    {
      id: "sslfid_3",
      Icon: BsGlobe2,
      title: "Secures Main Domain",
      desc: "Secures you main domain.",
    },
    {
      id: "sslfid_4",
      Icon: BsGlobe2,
      title: "Secures Sub Domains",
      desc: "Secure all subdomains created under your main domain.",
    },
    {
      id: "sslfid_5",
      Icon: FiLock,
      title: "256-bit Encryption & 2048-bit Root",
      desc: "Provided industry leading levels of encryption.",
    },
  ],
};
