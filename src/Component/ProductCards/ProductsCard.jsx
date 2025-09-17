import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Button from "../Button/Button";

const ProductsCard = ({ image, title, price }) => {
  return (
    <section className="p-5 rounded-lg">
      <div className="flex justify-between text-zinc-200 items-center py-2">
        <span className="text-3xl p-3">
          <FaHeart></FaHeart>
        </span>
        <span className="text-xl p-3 bg-orange-500 text-white rounded-lg">
          <FaPlus></FaPlus>
        </span>
      </div>

      <div className="w-full h-50  mb-4">
        <img src={image} className="mx-auto my-5 w-full h-full rounded-lg  object-cover" />
      </div>

      <div>
        <div className="flex justify-center flex-col gap-4 text-center items-center">
          <p className="text-3xl">{title}</p>
          <p className="text-2xl font-bold tracking-wider">${price.toFixed(2)}</p>
          <Button btnContant="Buy Now"></Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCard;
