import { CiDollar } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";
import {
  IoSearchOutline,
  IoInfiniteOutline,
  IoCheckmark,
  IoCheckmarkCircleOutline,
  IoLockClosedOutline,
  IoShieldCheckmarkOutline
} from "react-icons/io5";
import { LiaPhoneSolid } from "react-icons/lia";
import { BsArrowRepeat,BsGlobe } from "react-icons/bs";
import { TfiPanel } from "react-icons/tfi";

export const backUpData = {
  reason: {
    image: null,
    question: "",
    answer: "",
    description: "",
  },
  highlights: {
    title: "Feature Highlights",
    subTitle: "",
    items: [
      {
        id: "hli_1",
        Icon: BsGlobe,
        itemTitle: "Offsite Protection",
        itemDesc:
          "Data is backed up to a geographically separate data centre which ensures your data is safe even if the very worst happens.",
      },
      {
        id: "hli_2",
        Icon: IoShieldCheckmarkOutline,
        itemTitle: "Continuous Data Protection",
        itemDesc:
          "Low-resource, block-level backups enable remote backups to take place as frequently as every 15 minutes.",
      },
      {
        id: "hli_3",
        Icon: BsArrowRepeat,
        itemTitle: "Quick Restore",
        itemDesc:
          "Quickly and easily recover everything from a whole server to a directory, to a single file. Your data is always available.",
      },
      {
        id: "hli_4",
        Icon: IoLockClosedOutline,
        itemTitle: "AES-256 Encryption",
        itemDesc:
          "In-transit encryption is enabled as standard, while optional, at-rest encryption keeps your data secure, even if compromised.",
      },
      {
        id: "hli_5",
        Icon: IoCheckmarkCircleOutline,
        itemTitle: "Data Verification",
        itemDesc:
          "All backups go through a comprehensive data verification process to ensure there is no corruption, giving you the confidence that they can be relied upon when needed.",
      },
      {
        id: "hli_6",
        Icon: TfiPanel,
        itemTitle: "Control Panel",
        itemDesc:
          "Our powerful but easy to use control panel makes setting up schedules and restoring backups a breeze.",
      },
    ],
  },
};

export const sslData = {
  reason: {
    image: null,
    question: "Why SSL?",
    answer: " ",
    description:
      "SSL certificates are essential for all websites. They encrypt all data moving between your website and your visitors’ browsers, ensuring sensitive information, such as personal data and payment details are kept secure. In addition, sites without SSL certificates may be classed as ‘not secure’ by browsers such as Chrome and may incur a search engine ranking penalty.",
  },
  highlights: {
    title: "SSL Certificate Features",
    subTitle: "",
    items: [
      {
        id: "hli_1",
        Icon: CiDollar,
        itemTitle: "Up to $1,500,000 Warranty",
        itemDesc:
          "Undersigned by GlobalSign, the warranty protects you against financial loss should the SSL encryption ever be broken.",
      },
      {
        id: "hli_2",
        Icon: FaDownload,
        itemTitle: "Free Installation and Testing",
        itemDesc:
          "For a hassle-free solution, we will install and test your SSL certificate for you.",
      },
      {
        id: "hli_3",
        Icon: IoSearchOutline,
        itemTitle: "Improve your Google SEO",
        itemDesc:
          "Recent changes to Google's ranking algorithm give a higher weighting for sites with SSL certificate.",
      },
      {
        id: "hli_4",
        Icon: IoInfiniteOutline,
        itemTitle: "Unlimited Re-Issues",
        itemDesc:
          "Should you ever lose your private key, we will re-issue your SSL certificate for free, upon request.",
      },
      {
        id: "hli_5",
        Icon: LiaPhoneSolid,
        itemTitle: "24x7 Support when you need it",
        itemDesc:
          "Our friendly support team is never more than a phone call or live chat away should you need help with your SSL certificate.",
      },
      {
        id: "hli_6",
        Icon: IoCheckmark,
        itemTitle: "Get the Green Bar",
        itemDesc:
          "Build trust by upgrading to an EV certificate and your visitors will see the green trust bar when they visit your site.",
      },
    ],
  },
};
