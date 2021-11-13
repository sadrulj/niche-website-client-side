import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Promotion from "../Promotion/Promotion";
import ProductsHome from "../Products/ProductsHome/ProductsHome";
import Reviews from "../Review/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Promotion />
      <ProductsHome />
      <Reviews />
    </div>
  );
};

export default Home;
