import customerSupport from "../assets/svg/customer-support.svg";
import creditCard from "../assets/svg/credit-card.svg";
import moneyBack from "../assets/svg/money-back.svg";

import { CiClock2, CiGlobe } from "react-icons/ci";
import { MdPayment } from "react-icons/md";

export const supportItemsData = [
  {
    id: "si_1",
    URL: customerSupport,
    title: "24/7/365 Support",
    desc: "Day or night, rain or shine, anytime our team is here for you!",
  },
  {
    id: "si_2",
    URL: creditCard,
    title: "Secure Payment",
    desc: "Intrinsicly evolve holistic processes without virtual process",
  },
  {
    id: "si_3",
    URL: moneyBack,
    title: "Money Back Guarantee",
    desc: "We make sure you are served by person with the competency",
  },
];

export const categoryData = [
  {
    id: "category_1",
    Icon: CiClock2,
    URL: "#",
    title: "Our servers status",
    desc: "Rapidiously reconceptualize technically sound sources with professional.",
    iconStyle: "text-green-500",
    iconWrapperStyle: "bg-green-500/20",
  },
  {
    id: "category_2",
    Icon: CiGlobe,
    URL: "#",
    title: "Our domains services",
    desc: "Efficiently target tactical growth strategies and 24/365 e-commerce.",
    iconStyle: "text-blue-500",
    iconWrapperStyle: "bg-blue-500/20",
  },
  {
    id: "category_1",
    Icon: CiClock2,
    URL: "#",
    title: "Payment issue",
    desc: "Intrinsicly iterate functional customer service and cooperative systems.",
    iconStyle: "text-orange-500",
    iconWrapperStyle: "bg-orange-500/20",
  },
];
