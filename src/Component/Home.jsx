import React from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Card from "./Card/Card";
import Header from "./Header/Header";
import Value from "./Values/Value";
import Products from "./Products/Products";
import Process from "./Process/Process";
import Footer from "./Footer/Footer";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Card></Card>
      <Value></Value>
      <Products></Products>
      <Process></Process>
      <Review></Review>
    </div>
  );
};

export default Home;
