import { FaUpload, FaRegHandPointDown, FaPhp, FaHeadset } from "react-icons/fa";
import { LuInfinity } from "react-icons/lu";
import { LiaMailBulkSolid } from "react-icons/lia";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { IoShieldOutline, IoCheckmarkOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";

export const offersProvided = [
  {
    id: "op_1",
    title: "Cloud Starter",
    subTitle: "Medium traffic personal sites",
    isPopular: false,
    price: {
      monthly: "$19",
      yearly: "$69",
      biannual: "$130",
      triennial: "$199",
    },
    hosting: 10,
    storage: 25,
    bandwidth: 200,
    domain: 1,
    ssd:10,
    mysql:'10'
  },
  {
    id: "op_2",
    title: "Cloud Buisness",
    subTitle: "High traffic corporate sites",
    isPopular: true,
    price: {
      monthly: "$49",
      yearly: "$159",
      biannual: "$299",
      triennial: "$429",
    },
    hosting: 70,
    storage: 75,
    bandwidth: 700,
    domain: 3,
    ssd:20,
    mysql:'30'
  },
  {
    id: "op_3",
    title: "Cloud Enterprise",
    subTitle: "Enterprise content management",
    isPopular: false,
    price: {
      monthly: "$69",
      yearly: "$259",
      biannual: "$499",
      triennial: "$739",
    },
    hosting: 60,
    storage: 175,
    bandwidth: 1500,
    domain: 6,
    ssd:30,
    mysql:'Unlimited'
  },
];

export const threeTierPlanData = [
  {
    id: "ttpd_1",
    title: { cloud: "Cloud", wp: "WP", vps: "VPS" },
    subTitle: "Medium traffic personal sites",
    isPopular: false,
    price: { cloud: 0, wp: 5, vps: 19 },
    hosting: { cloud: 1, wp: 50, vps: 10 },
    storage: { cloud: "5 GB", wp: "15 GB", vps: "25 GB" },
    bandwidth: { cloud: "100 GB", wp: "100 GB", vps: "200 GB" },
    domain: "1 Free",
  },
  {
    id: "ttpd_2",
    title: { cloud: "Cloud", wp: "WP", vps: "VPS" },
    subTitle: "High traffic corporate sites",
    isPopular: true,
    price: { cloud: 39, wp: 19, vps: 49 },
    hosting: { cloud: 10, wp: 10, vps: 30 },
    storage: { cloud: "55 GB", wp: "45 GB", vps: "75 GB" },
    bandwidth: { cloud: "800 GB", wp: "200 GB", vps: "700 GB" },
    domain: { cloud: "2 Free", wp: "2 Free", vps: "3 Free" },
  },
  {
    id: "ttpd_3",
    title: { cloud: "Cloud", wp: "WP", vps: "VPS" },
    subTitle: "Enterprise content management",
    isPopular: false,
    price: { cloud: 49, wp: 59, vps: 69 },
    hosting: { cloud: 40, wp: 30, vps: 60 },
    storage: { cloud: "675 GB", wp: "155 GB", vps: "175 GB" },
    bandwidth: { cloud: "1200 GB", wp: "1200 GB", vps: "1500 GB" },
    domain: { cloud: "3 Free", wp: "4 Free", vps: "6 Free" },
  },
];

export const offerFeatuesData = [
  {
    id: "offd_1",
    Icon: FaUpload,
    title: "Unmetered Bandwith",
    desc: "No bandwidth limits, just a simple fair use policy.",
  },
  {
    id: "offd_2",
    Icon: LuInfinity,
    title: "Unlimited Websites",
    desc: "Host unlimited websites on a single hosting plan at no extra cost!",
  },
  {
    id: "offd_3",
    Icon: LiaMailBulkSolid,
    title: "Unlimited Email Addresses",
    desc: "Create unlimited email addresses at no extra cost.",
  },
  {
    id: "offd_4",
    Icon: MdOutlineSettingsSuggest,
    title: "cPanel Control Panel",
    desc: "Manage your web hosting using cPanel",
  },
  {
    id: "offd_5",
    Icon: IoShieldOutline,
    title: "Spam Filtering",
    desc: "We filter your email for viruses, malware and spam.",
  },
  {
    id: "offd_6",
    Icon: FaRegHandPointDown,
    title: "1 Click App Installer",
    desc: "Hundreds of apps at your fingertips including WordPress, Joomla and Magento.",
  },
  {
    id: "offd_7",
    Icon: FaPhp,
    title: "PHP 8.x +OP Cache",
    desc: "PHP 8 enabled with OPcache for high performance websites.",
  },
  {
    id: "offd_8",
    Icon: IoCheckmarkOutline,
    title: "Free Daily Backup",
    desc: "We backup your website daily and retain that data for 7 days so you are safe in the knowledge you can recover your data if required.",
  },
  {
    id: "offd_9",
    Icon: HiOutlineLockClosed,
    title: "Free Lets Encrypt SSL",
    desc: "Free SSL from Let encrypt, create as many certificates as required at no extra cost.",
  },
  {
    id: "offd_10",
    Icon: FaHeadset,
    title: "24x7 Technical Support",
    desc: "Phone, Live chat and ticket support available 24x7x365.",
  },
];
