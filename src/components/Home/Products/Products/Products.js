import { Grid, Typography } from "@mui/material";
import React from "react";
import cart1 from "../../../../images/product-1.jpg";
import cart2 from "../../../../images/product-2.jpg";
import cart3 from "../../../../images/product-3.jpg";
import cart4 from "../../../../images/product-4.jpg";
import cart5 from "../../../../images/product-5.jpg";
import cart6 from "../../../../images/product-6.jpg";
import cart7 from "../../../../images/product-7.jpg";
import cart8 from "../../../../images/product-7.jpg";
import cart9 from "../../../../images/product-7.jpg";
import cart10 from "../../../../images/product-7.jpg";
import Product from "../Product/Product";
import Navigation from "../../../Shared/Navigation/Navigation";

const products = [
  {
    image: cart1,
    title: "Premium Glass",
    rating: "4",
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    image: cart2,
    title: "Premium Glass",
    rating: "4.5",
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    image: cart3,
    title: "Premium Glass",
    rating: "4",
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    image: cart4,
    title: "Premium Glass",
    rating: "4.5",
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    image: cart5,
    title: "Premium Glass",
    rating: "4.5",
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    image: cart6,
    title: "Premium Glass",
    rating: "4.5",
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    image: cart7,
    title: "Premium Glass",
    rating: "4.5",
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    image: cart8,
    title: "Premium Glass",
    rating: "4.5",
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    image: cart9,
    title: "Premium Glass",
    rating: "4.5",
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    image: cart10,
    title: "Premium Glass",
    rating: "4.5",
    price: 20.0,
    discountPrice: 25.0,
  },
];

const Products = () => {
  return (
    <div>
      <Navigation />
      <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
        Our Products...
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ margin: "0 10px" }}
      >
        {products.map((product) => (
          <Product key={product.title} product={product}></Product>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
