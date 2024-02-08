import { BiSolidServer, BiSupport } from "react-icons/bi";
import { MdEmail, MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaBox, FaCloud, FaBlogger, FaLinux, FaWindows } from "react-icons/fa";
import { BsServer, BsClipboard2DataFill } from "react-icons/bs";
import { IoIosSpeedometer, IoLogoWordpress, IoIosPeople } from "react-icons/io";
import { HiServerStack, HiMiniSignal } from "react-icons/hi2";
import { VscCommentDiscussion } from "react-icons/vsc";
import { LiaStopwatchSolid } from "react-icons/lia";
import { GiStairsGoal, GiServerRack } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa6";
import { AiOutlineCloudServer } from "react-icons/ai";
import { LuDatabaseBackup } from "react-icons/lu";
import { SiAdguard } from "react-icons/si";

export const navData = [
  {
    id: "nbd_1",
    title: "Home",
  },
  {
    id: "nbd_2",
    title: "Pages",
  },
  {
    id: "nbd_3",
    title: "Hosting",
  },
  {
    id: "nbd_4",
    title: "Element",
  },
  {
    id: "nbd_5",
    title: "Support",
  },
  {
    id: "nbd_6",
    title: "About",
  },
];

export const homeSectionData = {
  sec1: {
    title: "Unbeatable WordPress Hosting",
    sec1Items: [
      {
        id: "sec1Id_1",
        bItem: "",
        item: "Flexible, Easy to Use Control Panel",
      },
      {
        id: "sec1Id_2",
        bItem: "Unmetered",
        item: "Bandwidth",
      },
      {
        id: "sec1Id_3",
        bItem: "Unmetered",
        item: "Sub Domains, FTP Accounts",
      },
      {
        id: "sec1Id_4",
        bItem: "99 %",
        item: "Uptime Guarantee",
      },
      {
        id: "sec1Id_5",
        bItem: "45-Day",
        item: "Money-Back Guarantee",
      },
    ],
  },
  sec2: {
    title: "Home Demos",
    sec2Items: [
      {
        id: "sec2Id_1",
        item: "Home Default",
        isHot: false,
        URL: "/",
      },
      {
        id: "sec2Id_2",
        item: "Home Image",
        isHot: false,
        URL: "/image",
      },
      {
        id: "sec2Id_3",
        item: "Home Domain Search",
        isHot: true,
        URL: "/domain-search-one",
      },
      {
        id: "sec2Id_4",
        item: "Home Domain Search Two",
        isHot: false,
        URL: "/domain-search-two",
      },
      {
        id: "sec2Id_5",
        item: "Home Background Image",
        isHot: false,
        URL: "/domain-search-three",
      },
      {
        id: "sec2Id_6",
        item: "Home Background Video",
        isHot: false,
        URL: "/domain-search-four",
      },
    ],
  },
  sec3: {
    title: "",
    sec3Items: [
      {
        id: "sec3Id_1",
        item: "Home Offer",
        isNew: false,
        URL: "/offer",
      },
      {
        id: "sec3Id_2",
        item: "Home Slider",
        isNew: false,
        URL: "/domain-slider",
      },
      // {
      //   id: "sec3Id_3",
      //   item: "Home Content Slider",
      //   isNew: false,
      //   URL: "/",
      // },
      {
        id: "sec3Id_4",
        item: "Reseller Demo",
        isNew: true,
        URL: "/reseller-hosting",
      },
    ],
  },
};

export const pageSectionData = [
  {
    id: "pgsd_1",
    item: "About Us",
    isNew: false,
    URL: "/about-us",
  },
  {
    id: "pgsd_2",
    item: "Our Services",
    isNew: false,
    URL: "/services",
  },
  {
    id: "pgsd_3",
    item: "Client Reviews",
    isNew: false,
    URL: "/reviews",
  },
  {
    id: "pgsd_4",
    item: "Search Result",
    isNew: false,
    URL: "/domain-search",
  },
  // {
  //   id: "pgsd_5",
  //   item: "Image Gallery",
  //   isNew: false,
  //   URL: "/",
  // },
  {
    id: "pgsd_6",
    item: "Black Friday Sale",
    isNew: true,
    URL: "/black-friday-sale",
  },
  {
    id: "pgsd_7",
    item: "Black Friday Single",
    isNew: true,
    URL: "/black-friday-offer",
  },
  {
    id: "pgsd_8",
    item: "Pricing",
    isNew: false,
    URL: "/pricing",
  },
  {
    id: "pgsd_9",
    item: "Blog",
    isNew: false,
    URL: "/blog",
  },
  {
    id: "pgsd_10",
    item: "Login & Signup",
    isNew: false,
    URL: "/get-in",
  },
  // {
  //   id: "pgsd_11",
  //   item: "Signup",
  //   isNew: false,
  //   URL: "/signup",
  // },
  // {
  //   id: "pgsd_12",
  //   item: "Utilities",
  //   isNew: false,
  //   URL: "/",
  // },
  // {
  //   id: "pgsd_13",
  //   item: "Specialty",
  //   isNew: false,
  //   URL: "/",
  // },
];

export const hostingSectionData = {
  title: "Web Hosting with 24/7 Expert Support",
  items: [
    {
      id: "hsd_1",
      Icon: BiSolidServer,
      title: "Shared Hosting",
      subTitle: "Innovate reliable quality Starting at",
      price: "$2.99",
      URL: "/hosting/shared-hosting",
    },
    {
      id: "hsd_2",
      Icon: MdEmail,
      title: "Email Hosting",
      subTitle: "Per Mailbox Starting at ",
      price: "$0.99/mo",
      URL: "/hosting/email-hosting",
    },
    {
      id: "hsd_3",
      Icon: FaBox,
      title: "VPS Hosting",
      subTitle: "Pefficiently maintain Starting at ",
      price: "$11.99",
      URL: "/hosting/vps-hosting",
    },
    {
      id: "hsd_4",
      Icon: BsServer,
      title: "Shared Wordpress Hosting",
      subTitle: "Conveniently Starting at ",
      price: "$9.99/mo",
      URL: "/hosting/shared-wp-hosting",
    },
    {
      id: "hsd_5",
      Icon: IoIosSpeedometer,
      title: "Dedicated Hosting",
      subTitle: "Quickly build Starting at ",
      price: "$150.99/mo",
      URL: "/hosting/dedicated-server-hosting",
    },
    {
      id: "hsd_6",
      Icon: IoLogoWordpress,
      title: "Wordpress Hosting",
      subTitle: "Conveniently Starting at ",
      price: "$19.99/mo",
      URL: "/hosting/wp-hosting",
    },
    {
      id: "hsd_7",
      Icon: FaCloud,
      title: "Cloud Hosting",
      subTitle: "Conveniently cloud Starting at ",
      price: "$5.99/mo",
      URL: "/hosting/cloud-hosting",
    },
    {
      id: "hsd_8",
      Icon: HiServerStack,
      title: "WooCommerce Hosting",
      subTitle: "Globally Starting at ",
      price: "$99.99/mo",
      URL: "/hosting/woocommerce-hosting",
    },
  ],
};

export const elementSectionData = {
  title: "Individual Elements and Blocks",
  items: [
    {
      id: "esd_1",
      title: "Accordions",
      URL: "/",
    },
    {
      id: "esd_2",
      title: "Breadcrumbs",
      URL: "/",
    },
    {
      id: "esd_3",
      title: "Buttons",
      URL: "/",
    },
    {
      id: "esd_4",
      title: "Clients",
      URL: "/",
    },
    {
      id: "esd_5",
      title: "Carousel",
      URL: "/",
    },
    {
      id: "esd_6",
      title: "Call to Action",
      URL: "/",
    },
    {
      id: "esd_7",
      title: "Testimonials",
      URL: "/",
    },
    {
      id: "esd_8",
      title: "Typography",
      URL: "/",
    },
    {
      id: "esd_9",
      title: "Team",
      URL: "/",
    },
    {
      id: "esd_10",
      title: "Tab",
      URL: "/",
    },
    {
      id: "esd_11",
      title: "Videos",
      URL: "/",
    },
    {
      id: "esd_12",
      title: "Form",
      URL: "/",
    },
  ],
  discount: [
    {
      id: "esdd_1",
      number: "0",
      text: "Day",
    },
    {
      id: "esdd_2",
      number: "00",
      text: "Hours",
    },
    {
      id: "esdd_3",
      number: "00",
      text: "Minutes",
    },
    {
      id: "esdd_4",
      number: "00",
      text: "Seconds",
    },
  ],
};

export const supportSectionData = [
  {
    id: "ssd_1",
    Icon: VscCommentDiscussion,
    title: "Submit a Request",
    subTitle: "Support team quickly response",
    URL: "/submit-request",
  },
  {
    id: "ssd_2",
    Icon: BiSupport,
    title: "24/7/365 Support",
    subTitle: "Support and statement",
    URL: "/support",
  },
  {
    id: "ssd_3",
    Icon: BsClipboard2DataFill,
    title: "Our Datacenter",
    subTitle: "24 Data center globally",
    URL: "/network",
  },
  {
    id: "ssd_4",
    Icon: LiaStopwatchSolid,
    title: "Uptime Commitment",
    subTitle: "Monitoring and secure",
    URL: "/status",
  },
];

export const aboutSectionData = [
  {
    id: "asd_1",
    Icon: MdOutlineConnectWithoutContact,
    title: "Contact Us",
    subTitle: "Face any problem contact with us",
    URL: "/contact-us",
  },
  {
    id: "asd_2",
    Icon: IoIosPeople,
    title: "About Us",
    subTitle: "We are leading hosting company",
    URL: "/about-us",
  },
  {
    id: "asd_3",
    Icon: GiStairsGoal,
    title: "Client Testimonial",
    subTitle: "More than 100k lovly customer",
    URL: "/reviews",
  },
  {
    id: "asd_4",
    Icon: FaPeopleArrows,
    title: "Our Partner",
    subTitle: "We have trusted partners globally",
    URL: "/partner",
  },
  {
    id: "asd_5",
    Icon: HiMiniSignal,
    title: "Network",
    subTitle: "Keep your data save and secure",
    URL: "/network",
  },
  {
    id: "asd_6",
    Icon: FaBlogger,
    title: "Company Blog",
    subTitle: "Industry latest technology news",
    URL: "/blog",
  },
];

export const serverSectionData = {
  title: "Virtual, Cloud and Dedicated Servers",
  items: [
    {
      id: "ssd_1",
      Icon: FaLinux,
      title: "Linux VPS",
      subTitle:
        "Don’t be left high and dry, choose a managed VPS that gives you professional 24x7 support as well as superior performance and reliability.",
      URL: "/linus-vps",
    },
    {
      id: "ssd_2",
      Icon: FaWindows,
      title: "Windows VPS",
      subTitle:
        "With lightning fast performance, backed by our expert 24x7 support and featuring the latest Microsoft® Windows server 2022.",
      URL: "/windows-vps",
    },
    {
      id: "ssd_3",
      Icon: AiOutlineCloudServer,
      title: "Cloud Servers",
      subTitle:
        "Hyperslice managed cloud servers for when uptime, performance, scalability and support are critical for your enterprise.",
      URL: "/cloud-servers",
    },
    {
      id: "ssd_4",
      Icon: GiServerRack,
      title: "Dedicated Servers",
      subTitle:
        "Enterprise performance, security and availability with our managed dedicated servers.Trust in our server to optimize your server resources",
      URL: "/dedicated-servers",
    },
  ],
};

export const securitySectionData = {
  title: "Security and Website Tools",
  items: [
    {
      id: "swt_1",
      Icon: LuDatabaseBackup,
      title: "Remote Backups",
      subTitle: "Continous Data Protection with R1soft guarantee.",
      URL: "/backups",
    },
    {
      id: "swt_2",
      Icon: SiAdguard,
      title: "SSL Certificates",
      subTitle: "Essential Security certificate for your website.",
      URL: "/ssl-certificates",
    },
  ],
};
