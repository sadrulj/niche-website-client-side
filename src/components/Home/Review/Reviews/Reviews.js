import { Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Container>
        <Typography
          sx={{ fontWeight: 600, my: 5 }}
          variant="h4"
          component="div"
        >
          Our Reviews...
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Reviews;
