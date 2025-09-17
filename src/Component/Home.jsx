import React from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Card from "./Card/Card";
import Header from "./Header/Header";
import Value from "./Values/Value";
import Products from "./Products/Products";
import Process from "./Process/Process";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Card></Card>
      <Value></Value>
      <Products></Products>
      <Process></Process>
    </div>
  );
};

export default Home;
