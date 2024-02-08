import { IoIosRocket, IoIosGitBranch, IoMdSettings } from "react-icons/io";
import { BiMicrochip } from "react-icons/bi";
import { AiOutlineThunderbolt, AiTwotoneControl } from "react-icons/ai";
import { FaRegChartBar, FaWindows } from "react-icons/fa";
import { BsArrowRepeat, BsBoxSeam } from "react-icons/bs";
import {
  LiaPhoneSolid,
  LiaUserCogSolid,
  LiaServerSolid,
  LiaPhp,
} from "react-icons/lia";
import { LuDatabaseBackup } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { PiHandHeartDuotone } from "react-icons/pi";
import { SiPlesk, SiAdguard } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { RiComputerLine } from "react-icons/ri";

import dedicatedServer from "../assets/svg/dedicated-server.svg";
import windowsVps from "../assets/svg/windows-vps.svg";

export const linuxVpsData = {
  reason: {
    image: null,
    question: "Why VPS Hosting?",
    answer: "Take control of your VPS hosting...",
    description:
      "With a VPS (Virtual Private Server) you get your own operating system and hosting environment dedicated to you, complete with unrestricted access to the operating system. This makes VPS hosting a great choice when you require more control and more resources or if you no longer wish to be limited by the restrictions of a shared hosting account.",
  },
  highlights: {
    title: "Linux VPS Hosting Highlights",
    subTitle: "VPS Hosting with Enterprise-Class Features",
    items: [
      {
        id: "hli_1",
        Icon: LiaPhoneSolid,
        itemTitle: "24x7 Pro Support",
        itemDesc:
          "Available when you need us, our team of professionals are never more than a call or live chat away, whatever the hour.",
      },
      {
        id: "hli_2",
        Icon: LiaUserCogSolid,
        itemTitle: "Daily Snapshot",
        itemDesc:
          "Every Hyperslice server includes 3 days of snapshots that protect your critical data.",
      },
      {
        id: "hli_3",
        Icon: FaRegChartBar,
        itemTitle: "Deployed in 90 Seconds",
        itemDesc:
          "Deploy your new server in under 90 seconds and start working on your project straight away.",
      },
      {
        id: "hli_4",
        Icon: BiMicrochip,
        itemTitle: "Included Firewall",
        itemDesc:
          "Every server includes a firewall that is easily configurable through our client portal.",
      },
      {
        id: "hli_5",
        Icon: AiOutlineThunderbolt,
        itemTitle: "NVMe SSD Storage",
        itemDesc:
          "Every server includes high performance, low latency, enterprise class NVMe SSD storage as standard.",
      },
      {
        id: "hli_6",
        Icon: LiaServerSolid,
        itemTitle: "Intel Xeon Processors",
        itemDesc:
          "We only use Intel Xeon processors in our VPS server nodes, these provide class-leading performance helping ensure your server never skips a beat.",
      },
      {
        id: "hli_7",
        Icon: IoMdSettings,
        itemTitle: "Choice of OS",
        itemDesc:
          "Whether you require Linux or Windows, we have a range of operating systems to suit almost any application.",
      },
      {
        id: "hli_8",
        Icon: AiTwotoneControl,
        itemTitle: "Choice of Control Panel",
        itemDesc:
          "cPanel or Plesk, the choice is yours. Don’t require a control panel? No problem, we have you covered.",
      },
      {
        id: "hli_9",
        Icon: BsBoxSeam,
        itemTitle: "Full Root Level Access",
        itemDesc:
          "Take full control of your VPS and manage as you see fit. With root access, there are no limits to what you can do with your VPS.",
      },
      {
        id: "hli_10",
        Icon: LuDatabaseBackup,
        itemTitle: "Advanced Backups",
        itemDesc:
          "Choose our backup service and enjoy stress-free, managed backups with full control over the backup frequency, retention length and encryption level",
      },
      {
        id: "hli_11",
        Icon: TbBrandSpeedtest,
        itemTitle: "More Resources",
        itemDesc:
          "Our VPS hosting platform is designed for serious business. We purposely keep a low contention ratio, ensuring more resources are available to your VPS.",
      },
      {
        id: "hli_12",
        Icon: BsArrowRepeat,
        itemTitle: "The Managed Difference",
        itemDesc:
          "Our managed hosting is designed to be flexible and provides support far beyond what other web hosts typically offer.",
      },
    ],
  },
  tile: [
    // Hyperslice VPS SG
    {
      id: "lvpsd_1",
      title: "Hyperslice VPS SG1",
      specs: {
        core: "2",
        RAM: "2",
        storage: "35 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "1500",
    },
    {
      id: "lvpsd_2",
      title: "Hyperslice VPS SG2",
      specs: {
        core: "2",
        RAM: "3",
        storage: "50 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "1900",
    },
    {
      id: "lvpsd_3",
      title: "Hyperslice VPS SG3",
      specs: {
        core: "3",
        RAM: "4",
        storage: "75 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "2700",
    },
    {
      id: "lvpsd_4",
      title: "Hyperslice VPS SG4",
      specs: {
        core: "4",
        RAM: "6",
        storage: "125 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "4100",
    },
    {
      id: "lvpsd_5",
      title: "Hyperslice VPS SG5",
      specs: {
        core: "6",
        RAM: "8",
        storage: "200 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "6200",
    },
    {
      id: "lvpsd_6",
      title: "Hyperslice VPS SG6",
      specs: {
        core: "8",
        RAM: "16",
        storage: "300 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "9600",
    },
    //   Hyperslice VPS SR
    {
      id: "lvpsd_7",
      title: "Hyperslice VPS SR1",
      specs: {
        core: "2",
        RAM: "4",
        storage: "35 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "1800",
    },
    {
      id: "lvpsd_8",
      title: "Hyperslice VPS SR2",
      specs: {
        core: "2",
        RAM: "6",
        storage: "50 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "2300",
    },
    {
      id: "lvpsd_9",
      title: "Hyperslice VPS SR3",
      specs: {
        core: "3",
        RAM: "8",
        storage: "75 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "3300",
    },
    {
      id: "lvpsd_10",
      title: "Hyperslice VPS SR4",
      specs: {
        core: "4",
        RAM: "12",
        storage: "125 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "5000",
    },
    {
      id: "lvpsd_11",
      title: "Hyperslice VPS SR5",
      specs: {
        core: "6",
        RAM: "16",
        storage: "200 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "7400",
    },
    {
      id: "lvpsd_12",
      title: "Hyperslice VPS SR6",
      specs: {
        core: "8",
        RAM: "32",
        storage: "300 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "11,900",
    },
    //   Hyperslice VPS SD
    {
      id: "lvpsd_13",
      title: "Hyperslice VPS SD1",
      specs: {
        core: "2",
        RAM: "2",
        storage: "70 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "2000",
    },
    {
      id: "lvpsd_14",
      title: "Hyperslice VPS SD2",
      specs: {
        core: "2",
        RAM: "3",
        storage: "100 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "2600",
    },
    {
      id: "lvpsd_15",
      title: "Hyperslice VPS SD3",
      specs: {
        core: "3",
        RAM: "4",
        storage: "150 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "3800",
    },
    {
      id: "lvpsd_16",
      title: "Hyperslice VPS SD4",
      specs: {
        core: "4",
        RAM: "6",
        storage: "250 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "5900",
    },
    {
      id: "lvpsd_17",
      title: "Hyperslice VPS SD5",
      specs: {
        core: "6",
        RAM: "8",
        storage: "400 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "9100",
    },
    {
      id: "lvpsd_18",
      title: "Hyperslice VPS SD6",
      specs: {
        core: "8",
        RAM: "16",
        storage: "500 GB NVMe",
        system: true,
        cORp: true,
      },
      price: "12,400",
    },
  ],
};

export const windowsVpsData = {
  reason: {
    image: windowsVps,
    question: "Why Windows VPS?",
    answer: "Take control of your VPS hosting...",
    description:
      "With a Windows VPS (Virtual Private Server), you get your own operating system and server environment dedicated to you, complete with unrestricted access. This makes VPS a great choice for when you require more control and more resources or for when you no longer want to be limited by the restrictions of a shared hosting account.",
  },
  highlights: {
    title: "Windows VPS highlights",
    subTitle: "Learn about what makes us the No.1 choice for Managed VPS.",
    items: [
      {
        id: "hli_1",
        Icon: LiaServerSolid,
        itemTitle: "Windows Server 2022",
        itemDesc:
          "The latest release of Windows Server 2022 is pre-installed, fully patched and ready for you to start using immediately!",
      },
      {
        id: "hli_2",
        Icon: FaWindows,
        itemTitle: "The Latest MS Technology",
        itemDesc:
          "Ready to go with the latest .NET core framework and optional MSSQL. Need to run legacy applications? Then we have you covered with Classic ASP.",
      },
      {
        id: "hli_3",
        Icon: LiaPhp,
        itemTitle: "PHP7 & MySQL",
        itemDesc:
          "Have the best of both worlds: run ASP.net and MSSQL applications alongside PHP and MySQL applications, such as WordPress and Magento.",
      },
      {
        id: "hli_4",
        Icon: FaRegChartBar,
        itemTitle: "Proactive Monitoring",
        itemDesc:
          "In the event our monitoring flags an issue, our team is ready to respond. We will often fix a problem before you are even aware.",
      },
      {
        id: "hli_5",
        Icon: PiHandHeartDuotone,
        itemTitle: "The Managed Difference",
        itemDesc:
          "Our management is designed to be flexible and provides support far beyond that typically offered by other hosts.",
      },
      {
        id: "hli_6",
        Icon: BiMicrochip,
        itemTitle: "Intel Xeon Processors",
        itemDesc:
          "We only use Intel Xeon processors in our VPS server nodes, these provide class-leading performance helping ensure your server never skips a beat.",
      },
      {
        id: "hli_7",
        Icon: AiOutlineThunderbolt,
        itemTitle: "Lightning-Fast Storage",
        itemDesc:
          "Pure enterprise-class SSD arrays across our Windows VPS platform mean lightning-fast data storage and retrieval and outstanding reliability.",
      },
      {
        id: "hli_8",
        Icon: IoIosGitBranch,
        itemTitle: "More Resources",
        itemDesc:
          "Our Windows VPS are designed for serious business. We purposely keep a low contention ratio, ensuring more resources are available to your VPS.",
      },
      {
        id: "hli_9",
        Icon: SiPlesk,
        itemTitle: "Plesk Control Panel (Optional)",
        itemDesc:
          "Take full control of your VPS and manage as you see fit. With root access, there are no limits to what you can do with your VPS.",
      },
      {
        id: "hli_10",
        Icon: LuDatabaseBackup,
        itemTitle: "Advanced Backups",
        itemDesc:
          "Choose our backup service and enjoy stress-free, managed backups with full control over the backup frequency, retention length and encryption level",
      },
      {
        id: "hli_11",
        Icon: TbBrandSpeedtest,
        itemTitle: "Unmetered Bandwidth",
        itemDesc:
          "We don’t limit your growth with artificial bandwidth limits, all we have is a simple AUP that is fair for all.",
      },
      {
        id: "hli_12",
        Icon: LiaUserCogSolid,
        itemTitle: "Full Administrator Level Access",
        itemDesc:
          "Take full control over your server and manage it as you see fit. With administrator access there are no limits to what you can do with your Windows VPS.",
      },
    ],
  },
  tile: [
    // Hyperslice VPS SG
    {
      id: "wvpsd_1",
      title: "Hyperslice VPS SG1",
      specs: {
        core: "2",
        RAM: "2",
        storage: "35 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "2100",
    },
    {
      id: "wvpsd_2",
      title: "Hyperslice VPS SG2",
      specs: {
        core: "2",
        RAM: "3",
        storage: "50 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "2400",
    },
    {
      id: "wvpsd_3",
      title: "Hyperslice VPS SG3",
      specs: {
        core: "3",
        RAM: "4",
        storage: "75 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "3300",
    },
    {
      id: "wvpsd_4",
      title: "Hyperslice VPS SG4",
      specs: {
        core: "4",
        RAM: "6",
        storage: "125 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "4700",
    },
    {
      id: "wvpsd_5",
      title: "Hyperslice VPS SG5",
      specs: {
        core: "6",
        RAM: "8",
        storage: "200 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "6800",
    },
    {
      id: "wvpsd_6",
      title: "Hyperslice VPS SG6",
      specs: {
        core: "8",
        RAM: "16",
        storage: "300 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "10,200",
    },
    //   Hyperslice VPS SR
    {
      id: "wvpsd_7",
      title: "Hyperslice VPS SR1",
      specs: {
        core: "2",
        RAM: "4",
        storage: "34 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "2400",
    },
    {
      id: "wvpsd_8",
      title: "Hyperslice VPS SR2",
      specs: {
        core: "2",
        RAM: "6",
        storage: "50 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "2900",
    },
    {
      id: "wvpsd_9",
      title: "Hyperslice VPS SR3",
      specs: {
        core: "3",
        RAM: "8",
        storage: "75 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "3900",
    },
    {
      id: "wvpsd_10",
      title: "Hyperslice VPS SR4",
      specs: {
        core: "4",
        RAM: "12",
        storage: "125 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "5600",
    },
    {
      id: "wvpsd_11",
      title: "Hyperslice VPS SR5",
      specs: {
        core: "6",
        RAM: "16",
        storage: "200 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "8000",
    },
    {
      id: "wvpsd_12",
      title: "Hyperslice VPS SR6",
      specs: {
        core: "8",
        RAM: "32",
        storage: "300 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "12,900",
    },
    //   Hyperslice VPS SD
    {
      id: "wvpsd_13",
      title: "Hyperslice VPS SD1",
      specs: {
        core: "2",
        RAM: "2",
        storage: "70 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "2600",
    },
    {
      id: "wvpsd_14",
      title: "Hyperslice VPS SD2",
      specs: {
        core: "2",
        RAM: "3",
        storage: "100 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "3100",
    },
    {
      id: "wvpsd_15",
      title: "Hyperslice VPS SD3",
      specs: {
        core: "3",
        RAM: "4",
        storage: "150 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "4400",
    },
    {
      id: "wvpsd_16",
      title: "Hyperslice VPS SD4",
      specs: {
        core: "4",
        RAM: "6",
        storage: "250 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "6500",
    },
    {
      id: "wvpsd_17",
      title: "Hyperslice VPS SD5",
      specs: {
        core: "6",
        RAM: "8",
        storage: "400 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "9600",
    },
    {
      id: "wvpsd_18",
      title: "Hyperslice VPS SD6",
      specs: {
        core: "8",
        RAM: "16",
        storage: "500 GB NVMe",
        system: false,
        cORp: false,
      },
      price: "13,600",
    },
  ],
};

export const cloudServerData = {
  reason: {
    image: null,
    question: "Why Cloud Servers?",
    answer: "Reliable Cloud for mission-critical applications.",
    description:
      "Cloud Servers are built for high availability and scalability. Providing separation between storage and compute, they allow servers to float between physical hardware locations, enabling them to be used to scale resources or maintain availability if there is a failure elsewhere in the network. This makes them ideal for clients hosting mission-critical websites or applications",
  },
  tile: [
    // Hyperslice VPS SG
    {
      id: "csd_1",
      title: "Hyperslice VPS SG1",
      specs: {
        core: "2",
        RAM: "2",
        storage: "35 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "2300",
    },
    {
      id: "csd_2",
      title: "Hyperslice VPS SG2",
      specs: {
        core: "2",
        RAM: "3",
        storage: "50 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "2900",
    },
    {
      id: "csd_3",
      title: "Hyperslice VPS SG3",
      specs: {
        core: "3",
        RAM: "4",
        storage: "75 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "4300",
    },
    {
      id: "csd_4",
      title: "Hyperslice VPS SG4",
      specs: {
        core: "4",
        RAM: "6",
        storage: "125 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "6700",
    },
    {
      id: "csd_5",
      title: "Hyperslice VPS SG5",
      specs: {
        core: "6",
        RAM: "8",
        storage: "200 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "10,300",
    },
    {
      id: "csd_6",
      title: "Hyperslice VPS SG6",
      specs: {
        core: "8",
        RAM: "16",
        storage: "300 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "15,700",
    },
    //   Hyperslice VPS SR
    {
      id: "csd_7",
      title: "Hyperslice VPS SR1",
      specs: {
        core: "2",
        RAM: "4",
        storage: "35 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "2600",
    },
    {
      id: "csd_8",
      title: "Hyperslice VPS SR2",
      specs: {
        core: "2",
        RAM: "6",
        storage: "50 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "3400",
    },
    {
      id: "csd_9",
      title: "Hyperslice VPS SR3",
      specs: {
        core: "3",
        RAM: "8",
        storage: "75 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "5000",
    },
    {
      id: "csd_10",
      title: "Hyperslice VPS SR4",
      specs: {
        core: "4",
        RAM: "12",
        storage: "125 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "7700",
    },
    {
      id: "csd_11",
      title: "Hyperslice VPS SR5",
      specs: {
        core: "6",
        RAM: "16",
        storage: "200 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "11,700",
    },
    {
      id: "csd_12",
      title: "Hyperslice VPS SR6",
      specs: {
        core: "8",
        RAM: "32",
        storage: "300 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "18,400",
    },
    //   Hyperslice VPS SD
    {
      id: "csd_13",
      title: "Hyperslice VPS SD1",
      specs: {
        core: "2",
        RAM: "2",
        storage: "70 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "3400",
    },
    {
      id: "csd_14",
      title: "Hyperslice VPS SD2",
      specs: {
        core: "2",
        RAM: "3",
        storage: "100 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "4500",
    },
    {
      id: "csd_15",
      title: "Hyperslice VPS SD3",
      specs: {
        core: "3",
        RAM: "4",
        storage: "150 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "6700",
    },
    {
      id: "csd_16",
      title: "Hyperslice VPS SD4",
      specs: {
        core: "4",
        RAM: "6",
        storage: "250 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "10,600",
    },
    {
      id: "csd_17",
      title: "Hyperslice VPS SD5",
      specs: {
        core: "6",
        RAM: "8",
        storage: "400 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "16,600",
    },
    {
      id: "csd_18",
      title: "Hyperslice VPS SD6",
      specs: {
        core: "8",
        RAM: "16",
        storage: "500 GB SSD Cloud",
        system: true,
        cORp: true,
      },
      price: "22,600",
    },
  ],
};

export const deidcatedServerData = {
  reason: {
    image: dedicatedServer,
    question: "Why Dedicated Server?",
    answer: "For Reliability, Performance and Scalability.",
    description:
      "Dedicated servers are reserved solely for a single user. This lets you as a user to tailor both the hardware and software to meet your performance and availability targets. If desired, multiple servers can be deployed to cater to different services and, with the addition of a FortiGate firewall, load balancing can be achieved for true scalability.",
  },
  highlights: {
    title: "Dedicated Server Highlights",
    subTitle: "Professionally hosted managed dedicated servers",
    items: [
      {
        id: "hli_1",
        Icon: LiaPhoneSolid,
        itemTitle: "24x7 Pro Support",
        itemDesc:
          "Available when you need us, our team of professionals is never more than a call or live chat away, whatever the hour.",
      },
      {
        id: "hli_2",
        Icon: FaRegChartBar,
        itemTitle: "Proactive Monitoring",
        itemDesc:
          "Should our monitoring flag an issue, our team is ready to respond. We will often fix a problem before you’re even aware.",
      },
      {
        id: "hli_3",
        Icon: PiHandHeartDuotone,
        itemTitle: "The Managed Difference",
        itemDesc:
          "Our management is designed to be flexible and provides support far beyond what other hosts typically provide.",
      },
      {
        id: "hli_4",
        Icon: RiComputerLine,
        itemTitle: "Windows or Linux",
        itemDesc:
          "A choice of the latest versions of Windows Server, Linux CentOS, Ubuntu or Debian with all dedicated servers.",
      },
      {
        id: "hli_5",
        Icon: BiMicrochip,
        itemTitle: "Intel Xeon Processors",
        itemDesc:
          "For class-leading performance, we only use Intel Xeon processors across our server range.",
      },
      {
        id: "hli_6",
        Icon: AiOutlineThunderbolt,
        itemTitle: "Lightning-Fast Storage",
        itemDesc:
          "Choose SSD based storage to enjoy lightning-fast data access and retrieval, together with outstanding reliability.",
      },
      {
        id: "hli_7",
        Icon: SiAdguard,
        itemTitle: "Next-gen Firewalls",
        itemDesc:
          "Upgrade your dedicated server with a FortiGate firewall and enjoy advanced security services.",
      },
      {
        id: "hli_8",
        Icon: SlGlobe,
        itemTitle: "IPv4 Address",
        itemDesc: "An IPv4 address included in the price of every server.",
      },
      {
        id: "hli_9",
        Icon: IoMdSettings,
        itemTitle: "Choice of OS",
        itemDesc:
          "Whether you require Linux or Windows, we have a range of operating systems to suit almost any application.",
      },
    ],
  },
  tile: [
    {
      id: "dsd_1",
      title: "Professional 1220 4 Core",
      specs: [
        { id: "spec_1", desc: "Intel Xeon E3-1220v5", Icon: IoIosRocket },
        { id: "spec_2", desc: "4 CPU Cores (4C/4T)", Icon: IoIosGitBranch },
        { id: "spec_3", desc: "8GB DDR4 (Max 32GB)", Icon: BiMicrochip },
        {
          id: "spec_4",
          desc: "2 x 480GB SSD (RAID 1)",
          Icon: AiOutlineThunderbolt,
        },
      ],
      price: "7454",
    },
    {
      id: "dsd_2",
      title: "Professional 2336 6 Core",
      specs: [
        { id: "spec_1", desc: " Intel Xeon E-2336", Icon: IoIosRocket },
        {
          id: "spec_2",
          desc: "6 CPU Cores (6C/412T)",
          Icon: IoIosGitBranch,
        },
        { id: "spec_3", desc: " 32GB DDR4 (Max 128GB)", Icon: BiMicrochip },
        {
          id: "spec_4",
          desc: " 2 x 1TB SSD (RAID 1)",
          Icon: AiOutlineThunderbolt,
        },
      ],
      price: "13,271",
    },
    {
      id: "dsd_3",
      title: "Enterprise 4210 10 Core",
      specs: [
        { id: "spec_1", desc: "Intel Xeon 4210", Icon: IoIosRocket },
        {
          id: "spec_2",
          desc: "10 CPU Cores (10C/20T)",
          Icon: IoIosGitBranch,
        },
        { id: "spec_3", desc: " 64GB DDR4 (Max 384GB)", Icon: BiMicrochip },
        {
          id: "spec_4",
          desc: " 2 x 1TB SSD (RAID 1)",
          Icon: AiOutlineThunderbolt,
        },
      ],
      price: "21,779",
    },
    {
      id: "dsd_4",
      title: "Enterprise 4210 20 Core",
      specs: [
        {
          id: "spec_1",
          desc: "2 x Intel Xeon 4210",
          Icon: IoIosRocket,
        },
        {
          id: "spec_2",
          desc: "20 CPU Cores (20C/40T)",
          Icon: IoIosGitBranch,
        },
        { id: "spec_3", desc: " 64GB DDR4 (Max 768GB)", Icon: BiMicrochip },
        {
          id: "spec_4",
          desc: " 2 x 1TB SSD (RAID 1)",
          Icon: AiOutlineThunderbolt,
        },
      ],
      price: "27,604",
    },
  ],
};
