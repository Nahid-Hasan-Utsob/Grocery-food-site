import React from "react";
import Header from "../Header/Header";
import { FaLeaf, FaIndustry, FaAward, FaTruck } from "react-icons/fa";

const Process = () => {
  return (
    <div className="max-w-[1400px] mx-auto md:mt-30 mt-20">
      <div className="">
        <Header HFText="Our" HBText="Process"></Header>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:mt-[100px] mt-[80px]">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col items-center ${
              index === 0 || index === 2 ? "mt-0" : "md:mt-80"
            }`}
          >
            {/* Circle Number */}
            <div className="w-24 h-24 rounded-full  flex items-center justify-center font-bold border-4 border-black border-dotted mb-2  ">
              <span className="bg-white outline-4 w-20 h-20 flex justify-center items-center rounded-full text-4xl mx-auto">
                {step.id}
              </span>
            </div>

            {/* Icon + Text */}
            <div className="flex justify-center items-center gap-5">
              <div className="w-15 h-15 rounded-full bg-orange-500 flex items-center justify-center">
                {step.icon}
              </div>
              <div className="text-start">
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    title: "Sourcing",
    des: "It is a long established fact that a reader",
    icon: <FaLeaf className="text-white text-2xl" />,
  },
  {
    id: 2,
    title: "Manufacturing",
    des: "It is a long established fact that a reader",
    icon: <FaIndustry className="text-white text-2xl" />,
  },
  {
    id: 3,
    title: "Quality Control",
    des: "It is a long established fact that a reader",
    icon: <FaAward className="text-white text-2xl" />,
  },
  {
    id: 4,
    title: "Logistics",
    des: "It is a long established fact that a reader",
    icon: <FaTruck className="text-white text-2xl" />,
  },
];
