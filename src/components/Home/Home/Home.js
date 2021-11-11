import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Promotion from "../Promotion/Promotion";
import ProductsHome from "../Products/ProductsHome/ProductsHome";
import ReviewsHome from "../Review/ReviewsHome/ReviewsHome";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Promotion />
      <ProductsHome />
      <ReviewsHome />
    </div>
  );
};

export default Home;
