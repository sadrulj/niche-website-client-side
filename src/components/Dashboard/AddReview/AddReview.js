import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  width: 500,
  boxShadow: 16,
  padding: 5,
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
    fetch("https://make-my-glasses.herokuapp.com/reviews", {
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
    </div>
  );
};

export default Review;
