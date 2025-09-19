import React from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
import FoodItems from "../../assets/fruits-and-veggies.png";
import FoodItems2 from "../../assets/dairy-and-eggs.png";
import FoodItems3 from "../../assets/meat-and-seafood.png";
import { Link } from "react-router-dom";

const Card = () => {
  const randerCard = Category.map((card) => {
    return (
      <section
        key={card.id}
        className="flex-1 flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
      >
        {/* Image Section */}
        <div className="w-full h-[200px] flex items-center justify-center">
          <img
            src={card.img}
            alt={card.title}
            className="max-h-full object-contain"
          />
        </div>

        {/* Text + Button */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <p className="text-2xl font-bold text-zinc-800 mb-3">
              {card.title}
            </p>
            <p className="text-base text-zinc-500 mb-6">{card.des}</p>
          </div>
            <Link className='text-xl w-fit rounded-xl text-white bg-orange-400 px-7 py-4 hover:bg-orange-500 hover:scale-105 transition-all transform-300' to={card.path}>See All</Link>
        </div>
      </section>
    );
  });

  return (
    <section className="max-w-[1400px] mx-auto">
      <Header HFText="Shop" HBText="By Category" />

      {/* Grid Layout */}
      <section className="grid md:grid-cols-3 gap-10 mt-20">
        {randerCard}
      </section>
    </section>
  );
};

const Category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    des: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables",
    img: FoodItems,
    path:'/frurits',
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    des: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses",
    img: FoodItems2,
      path:'/dairy',
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    des: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more",
    img: FoodItems3,
      path:'/meat',
  },
];

export default Card;
