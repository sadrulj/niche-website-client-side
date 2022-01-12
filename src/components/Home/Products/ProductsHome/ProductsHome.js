import { Container } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductHome from "../../Products/ProductHome/ProductHome";

const ProductsHome = () => {
  const [productsHome, setProductHome] = useState([]);

  useEffect(() => {
    fetch("https://obscure-temple-56874.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProductHome(data));
  }, []);
  return (
    <div>
      <Container>
        <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Our Products...
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {productsHome.slice(0, 6).map((product) => (
            <ProductHome key={product._id} product={product}></ProductHome>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsHome;
