import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const style = {
  width: 500,
  boxShadow: 16,
  padding: 5,
};

const AddProduct = () => {
  const [productInfo, setProductInfo] = useState([]);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...productInfo };
    newInfo[field] = value;
    setProductInfo(newInfo);
  };
  const handleBookingSubmit = (e) => {
    // collect data
    const product = {
      ...productInfo,
    };
    // send to the server
    fetch("https://make-my-glasses.herokuapp.com//products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product sucessfully Added.");
        }
      });

    e.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={style}>
        <Typography variant="h4">Add Product</Typography>
        <form onSubmit={handleBookingSubmit}>
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="image"
            onBlur={handleOnBlur}
            label="Image URL"
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="title"
            onBlur={handleOnBlur}
            label="Title"
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="productCode"
            onBlur={handleOnBlur}
            label="Product Code"
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="rating"
            onBlur={handleOnBlur}
            label="Ratings"
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="price"
            onBlur={handleOnBlur}
            label="Price"
            size="small"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AddProduct;
