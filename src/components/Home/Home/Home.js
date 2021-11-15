import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Promotion from "../Promotion/Promotion";
import ProductsHome from "../Products/ProductsHome/ProductsHome";
import Reviews from "../Review/Reviews/Reviews";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Promotion />
      <ProductsHome />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
