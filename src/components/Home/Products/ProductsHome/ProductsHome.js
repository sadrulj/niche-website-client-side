import { Grid, Typography } from "@mui/material";
import React from "react";
import Product from "../Product/Product";
import cart1 from "../../../../images/product-1.jpg";
import cart2 from "../../../../images/product-2.jpg";
import cart3 from "../../../../images/product-3.jpg";
import cart4 from "../../../../images/product-4.jpg";
import cart5 from "../../../../images/product-5.jpg";
import cart6 from "../../../../images/product-6.jpg";

const products = [
  {
    id: 1,
    image: cart1,
    title: "Premium Glass",
    rating: "4",
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    id: 2,
    image: cart2,
    title: "Premium Glass",
    rating: 4.5,
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    id: 3,
    image: cart3,
    title: "Premium Glass",
    rating: 4,
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    id: 4,
    image: cart4,
    title: "Premium Glass",
    rating: 4.5,
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    id: 5,
    image: cart5,
    title: "Premium Glass",
    rating: 4.5,
    price: 20.0,
    discountPrice: 25.0,
  },
  {
    id: 6,
    image: cart6,
    title: "Premium Glass",
    rating: 4.5,
    price: 20.0,
    discountPrice: 25.0,
  },
];

const ProductsHome = () => {
  return (
    <div>
      <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
        Our Products...
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsHome;
