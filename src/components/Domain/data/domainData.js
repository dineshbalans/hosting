// DOMAIN
import com from "../../../assets/img/com.png";
import net from "../../../assets/img/net.png";
import club from "../../../assets/img/club.png";
import org from "../../../assets/img/org.png";
import store from "../../../assets/img/store.png";
import online from "../../../assets/img/online.png";

export const popularDomainData = [
  {
    id: "dmn_1",
    img: com,
    URL: "/",
    discountPrice: "$2.56",
    actualPrice: "$29.95",
    desc: "Holisticly parallel task team building results bleeding-edge.",
    isPopular: true,
  },
  {
    id: "dmn_2",
    img: online,
    URL: "/",
    discountPrice: "$2.56",
    actualPrice: "$29.95",
    desc: "Uniquely synergize cost effective it is technologies performance.",
    isPopular: false,
  },
  {
    id: "dmn_3",
    img: club,
    URL: "/",
    discountPrice: "$1.56",
    actualPrice: "$19.00",
    desc: "Competently fabricate leveraged methods of empowerment.",
    isPopular: false,
  },
  {
    id: "dmn_4",
    img: net,
    URL: "/",
    discountPrice: "$4.99",
    actualPrice: "$49.99",
    desc: "Dynamically network front results for methods empowerment.",
    isPopular: false,
  },
  {
    id: "dmn_5",
    img: store,
    URL: "/",
    discountPrice: "$0.99",
    actualPrice: "$4.99",
    desc: "Synergistically create visionary for our multifunctional schemas.",
    isPopular: false,
  },
  {
    id: "dmn_6",
    img: org,
    URL: "/",
    discountPrice: "$6.99",
    actualPrice: "$59.95",
    desc: "Quickly promote B2B markets rather than impactful results.",
    isPopular: false,
  },
];

export const pickDomainData = {
  filterResult: [
    {
      id: "ftr_1",
      txt: "Show All",
    },
    {
      id: "ftr_2",
      txt: ".com",
    },
    {
      id: "ftr_3",
      txt: ".net",
    },
    {
      id: "ftr_4",
      txt: ".online",
    },
    {
      id: "ftr_5",
      txt: ".org",
    },
    {
      id: "ftr_6",
      txt: ".xyz",
    },
    {
      id: "ftr_7",
      txt: ".store",
    },
    {
      id: "ftr_8",
      txt: ".website",
    },
    {
      id: "ftr_9",
      txt: ".club",
    },
  ],
  domainOptions: [
    {
      id: "do_1",
      domain: ".com",
      price: "3.95",
      percentage: "30",
      tileStyle: "text-primeBlue bg-primeBlue/20",
    },
    {
      id: "do_2",
      domain: ".net",
      price: "8.95",
      percentage: "50",
      tileStyle: "text-red-500 bg-red-500/20",
    },
    {
      id: "do_3",
      domain: ".org",
      price: "12.95",
      percentage: "10",
      tileStyle: "text-primeBlue bg-primeBlue/20",
    },
    {
      id: "do_4",
      domain: ".info",
      price: "15.95",
      percentage: "30",
      tileStyle: "text-primeBlue bg-primeBlue/20",
    },
    {
      id: "do_5",
      domain: ".store",
      price: "23.95",
      percentage: "40",
      tileStyle: "text-green-500 bg-green-500/20",
    },
    {
      id: "do_6",
      domain: ".online",
      price: "29.95",
      percentage: "10",
      tileStyle: "text-primeBlue bg-primeBlue/20",
    },
  ],
};
