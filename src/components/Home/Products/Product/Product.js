import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Rating } from "@mui/material";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const { image, title, rating, price, discountPrice } = product;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 375, border: 2, boxShadow: 2 }}>
        <CardMedia
          component="img"
          style={{ width: "100%", height: "200px", margin: "0 auto" }}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Rating
            name="read-only"
            value={rating}
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h4" color="text.secondary">
                ${price}
              </Typography>
              <Typography
                variant="h6"
                style={{ marginLeft: 2, textDecoration: "line-through" }}
                color="text.secondary"
              >
                ${discountPrice}
              </Typography>
            </Box>
            <Box>
              <NavLink to="/products" style={{ textDecoration: "none" }}>
                <Button variant="contained">Buy Now</Button>
              </NavLink>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
