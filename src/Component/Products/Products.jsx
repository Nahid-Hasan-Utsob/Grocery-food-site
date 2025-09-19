import React, { useState } from "react";
import Header from "../Header/Header";
import ProductsCard from "../ProductCards/ProductsCard";
import ProductList from "../ProductsList/ProductList";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruit", "Vegetable", "Dairy", "Seafood","Grain","Beverage"];
  const [activeTab, setActiveTab] = useState("All");


  let filteredItems = activeTab === "All" ? ProductList : ProductList.filter(item=>item.category ===activeTab)

  const renderProducts = filteredItems.slice(0,8).map((product) => {
    return (
      <ProductsCard
        key={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
      />
    );
  });

  return (
    <section className="mx-auto max-w-[1400px] px-4">
      <div>
        <Header HFText="Our" HBText="Products" />

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 my-10">
          {categories.map((categorie) => (
            <button
              key={categorie}
              className={`text-lg sm:text-xl py-2 px-4 sm:py-3 sm:px-5 rounded-lg transition-colors duration-300 ${
                activeTab === categorie
                  ? "bg-orange-500 text-white"
                  : " text-black  "
              }`}
              onClick={() => setActiveTab(categorie)}
            >
              {categorie}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderProducts}
      </div>

      <div className="w-fit mx-auto my-10">
           <Link className='text-xl w-fit rounded-xl text-white bg-orange-400 px-7 py-4 hover:bg-orange-500 hover:scale-105 transition-all transform-300' to='/all_products'>All Products</Link>
      </div>
    </section>
  );
};

export default Products;
