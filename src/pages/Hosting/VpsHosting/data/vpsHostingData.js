import { TfiShield } from "react-icons/tfi";
import { MdMemory, MdStorage } from "react-icons/md";
import { BsSpeedometer2 } from "react-icons/bs";

export const vpsHostingData = [
  {
    id: "vhd_1",
    txt: "Core",
    multiplier: 1,
    Icon: TfiShield,
  },
  {
    id: "vhd_2",
    txt: "Memory",
    multiplier: 2,
    Icon: MdMemory,
  },
  {
    id: "vhd_3",
    txt: "Storage",
    multiplier: 10,
    Icon: MdStorage,
  },
  {
    id: "vhd_4",
    txt: "Bandwidth",
    multiplier: 1000,
    Icon: BsSpeedometer2,
  },
];

export const VpsPricingPlanData = {
  vpsHead: [
    {
      id: "vpsHead_1",
      txt: "VCPU",
    },
    {
      id: "vpsHead_2",
      txt: "MEMORY",
    },
    {
      id: "vpsHead_3",
      txt: "CPU POWER",
    },
    {
      id: "vpsHead_4",
      txt: "STORAGE",
    },
    {
      id: "vpsHead_5",
      txt: "GEEKBENCH SCORE",
    },
    {
      id: "vpsHead_6",
      txt: "BANDWIDTH",
    },
    {
      id: "vpsHead_7",
      txt: "PRICE",
    },
  ],
  vpsBody: [
    {
      id: "vpsBody_1",
      vcpu: 1,
      memory: 2,
      power: 2.4,
      score: {
        number: 3513,
        percentage: 30,
      },
      price: 3.95,
      sale: {
        color: "text-primeBlue bg-primeBlue/20",
        percentage: 30,
      },
    },
    {
      id: "vpsBody_2",
      vcpu: 2,
      memory: 4,
      power: 4.8,
      score: {
        number: 5363,
        percentage: 40,
      },
      price: 8.95,
      sale: {
        color: "text-red-500 bg-red-500/20",
        percentage: 50,
      },
    },
    {
      id: "vpsBody_3",
      vcpu: 3,
      memory: 6,
      power: 7.2,
      score: {
        number: 7545,
        percentage: 60,
      },
      price: 12.95,
      sale: {
        color: "text-primeBlue bg-primeBlue/20",
        percentage: 10,
      },
    },
    {
      id: "vpsBody_4",
      vcpu: 4,
      memory: 8,
      power: 9.6,
      score: {
        number: 8953,
        percentage: 75,
      },
      price: 15.95,
      sale: {
        color: "text-primeBlue bg-primeBlue/20",
        percentage: 30,
      },
    },
    {
      id: "vpsBody_5",
      vcpu: 6,
      memory: 12,
      power: 14.4,
      score: {
        number: 10789,
        percentage: 85,
      },
      price: 23.95,
      sale: {
        color: "text-green-500 bg-green-500/20",
        percentage: 40,
      },
    },
    {
      id: "vpsBody_6",
      vcpu: 8,
      memory: 16,
      power: 19.2,
      score: {
        number: 12632,
        percentage: 100,
      },
      price: 29.95,
      sale: {
        color: "text-primeBlue bg-primeBlue/20",
        percentage: 10,
      },
    },
  ],
};
