import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import Navigation from "../../../Shared/Navigation/Navigation";
import { Container } from "@material-ui/core";
import Footer from "../../../Shared/Footer/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Navigation />
      <Container>
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
            <Product key={product._id} product={product}></Product>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Products;
