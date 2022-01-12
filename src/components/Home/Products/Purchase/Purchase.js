import React, { useState, useEffect } from "react";
import {
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Navigation from "../../../Shared/Navigation/Navigation";
import Footer from "../../../Shared/Footer/Footer";
import { Button } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";
import { Box } from "@mui/material";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch(`https://obscure-temple-56874.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  const handleOnClick = () => {
    const newInfo = {
      image: products.image,
      price: products.price,
      productCode: products.productCode,
      rating: products.rating,
      title: products.title,
      email: user.email,
    };

    fetch("https://obscure-temple-56874.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.productCode) {
          alert("Already Added to Order List");
          return;
        } else if (result.insertedId) {
          alert("Order Added to dashboard/myOrder");
          const destination = location?.state?.from || "/dashboard/myOrders";
          history.replace(destination);
        }
      });

    console.log(newInfo);
  };
  return (
    <div>
      <Navigation />
      <Container style={{ margin: "25px auto" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <Paper style={{ display: "flex", justifyContent: "center" }}>
              <CardMedia
                component="img"
                style={{
                  width: "100%",
                  height: "400px",
                  marginTop: "25px auto",
                  padding: "10px",
                }}
                image={products.image}
                alt={products.title}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CardContent>
              <Typography variant="h4" align="left">
                {products.title} ({products.productCode})
              </Typography>
              <Rating
                name="read-only"
                value={products.rating}
                size="large"
                defaultValue={2.5}
                precision={0.5}
                readOnly
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  margin: "25px 0",
                }}
              />
              <Typography variant="h4" align="left" sx={{ my: 4 }}>
                $ {products.price}
              </Typography>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    width: "80px",
                  }}
                  type="number"
                  defaultValue="1"
                  InputLabelProps={{ shrink: true }}
                />
                <Button onClick={handleOnClick} variant="contained">
                  Buy Now
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Purchase;
