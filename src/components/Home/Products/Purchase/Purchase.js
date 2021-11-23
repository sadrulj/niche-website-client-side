import React, { useState, useEffect } from "react";
import { Container, Grid, Rating, TextField, Typography } from "@mui/material";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Navigation from "../../../Shared/Navigation/Navigation";
import Footer from "../../../Shared/Footer/Footer";
import { Button } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";

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
      <Container>
        <Grid container spacing={3} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <img src={products.image} alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
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
            <Typography variant="h4" align="left" sx={{ my: 4 }}></Typography>
            <Grid
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                my: 2,
              }}
            >
              <Grid item xs={6} md={3}>
                <TextField
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    width: "80px",
                    marginTop: "25px",
                  }}
                  type="number"
                  defaultValue="1"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Button
                  onClick={handleOnClick}
                  variant="contained"
                  sx={{ height: "58px", marginTop: "28px", marginLeft: "20px" }}
                >
                  Buy Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Purchase;
