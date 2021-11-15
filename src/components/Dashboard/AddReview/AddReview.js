import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

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

const Review = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...reviews };
    newInfo[field] = value;
    setReviews(newInfo);
  };
  const handleBookingSubmit = (e) => {
    // collect data
    const review = {
      ...reviews,
      displayName: user.displayName,
      email: user.email,
    };
    // send to the server
    fetch("https://obscure-temple-56874.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review sucessfully Added.");
        }
      });

    e.preventDefault();
  };
  return (
    <Box sx={style} matches>
      <Typography variant="h4">Add Review</Typography>
      <form onSubmit={handleBookingSubmit}>
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          value={user.email}
          label="Email"
          size="small"
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          value={user.displayName}
          label="User Name"
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
          name="comment"
          rows={4}
          onBlur={handleOnBlur}
          label="Comments"
          size="small"
          multiline
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Review;
