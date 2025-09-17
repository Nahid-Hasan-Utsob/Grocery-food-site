import React from "react";
import Header from "../Header/Header";
import { FaHeart, FaLeaf, FaShieldAlt } from "react-icons/fa";
import { TbSeedingFilled } from "react-icons/tb";
import busketImg from "../../assets/basket-full-vegetables.png";

const Value = () => {
  const LeftContent = ourValues.slice(0, 2).map((item) => {
    return (
      <section key={item.id} className="flex items-center gap-3 mb-4 md:text-end flex-row-reverse md:flex-row text-start">
        <div className="">
          <p className="font-bold text-2xl">{item.title}</p>
          <p className="text-gray-600 text-sm md:max-w-[370px] p-2">{item.des}</p>
        </div>
        <div className="text-3xl text-white flex justify-center items-center bg-orange-600 p-3 rounded-full">
          {item.icon}
        </div>
      </section>
    );
  });

  const RightContent = ourValues.slice(2).map((item) => {
    return (
      <section
        key={item.id}
        className="flex items-center gap-3 mb-4 text-start mt-4 md:mt-0"
      >
        <div className="text-3xl text-white flex justify-center items-center bg-orange-600 p-3 rounded-full">
          {item.icon}
        </div>
        <div className="">
          <p className="font-bold text-2xl">{item.title}</p>
          <p className="text-gray-600 text-sm md:max-w-[370px] p-2">{item.des}</p>
        </div>
      </section>
    );
  });

  return (
    <section className="py-10 max-w-[1400px] mx-auto">
      <div className="text-center mb-8">
        <Header HFText="Our" HBText="Value" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center md:gap-6 ">
        {/* Left Content */}
        <div className="flex flex-col justify-evenly items-center h-full gap-4">
          {LeftContent}
        </div>

        {/* Middle Image */}
        <div className="md:flex justify-center hidden  mt-4 md:mt-0">
          <img src={busketImg} alt="Basket" className="" />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-evenly items-center h-full gap-4">
          {RightContent}
        </div>
      </div>
    </section>
  );
};

export default Value;

const ourValues = [
  {
    id: 1,
    title: "Trust",
    des: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    des: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <TbSeedingFilled />,
  },
];
