import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
  mt: 3,
  mx: 5,
};

const Purchase = () => {
  const { user } = useAuth();
  const { productCode } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productCode}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const imageRef = useRef();
  const titleRef = useRef();
  const productCodeRef = useRef();
  const priceRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const handleSubmit = (e) => {
    // collect data
    const image = imageRef.current.value;
    const title = titleRef.current.value;
    const productCode = productCodeRef.current.value;
    const price = priceRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    const newItem = { image, title, productCode, price, phone, address };
    // send to the server
    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    //   if (data.insertedId) {
    //     alert("Your Item sucessfully Added to Dashboard/MyOrder .");
    //   }
    // });
    // if (data.insertedId) {
    //        alert("Your Item sucessfully Added to Dashboard/MyOrder .");

    e.preventDefault();
  };
  const { image, title, price } = products;
  return (
    <Box sx={style}>
      <Typography variant="h4">Purchase Info</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          disabled
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          ref={imageRef}
          defaultValue={image}
          size="small"
        />
        <TextField
          disabled
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          ref={titleRef}
          defaultValue={title}
          size="small"
        />
        <TextField
          disabled
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          ref={productCodeRef}
          defaultValue={productCode}
          size="small"
        />
        <TextField
          disabled
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          ref={priceRef}
          defaultValue={price}
          size="small"
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          defaultValue={user.displayName}
          size="small"
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          defaultValue={user.email}
          size="small"
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          ref={phoneRef}
          type="number"
          label="phone number"
          size="small"
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          ref={addressRef}
          type="text"
          label="address"
          size="small"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Purchase;
