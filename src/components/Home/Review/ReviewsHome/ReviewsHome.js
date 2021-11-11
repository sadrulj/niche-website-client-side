import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import blog1 from "../../../../images/blog-1.jpg";
import blog2 from "../../../../images/blog-2.jpg";
import blog3 from "../../../../images/blog-3.jpg";
import blog4 from "../../../../images/blog-4.jpg";
import blog5 from "../../../../images/blog-5.jpg";
import blog6 from "../../../../images/blog-6.jpg";
import Review from "../Review/Review";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Blog Title Goes Here",
    rating: 2,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos minus modi porro perferendis error quas, labore, asperiores, assumenda sed ex neque distinctio laudantium nam cupiditate esse praesentium eligendi officiis.",
  },
  {
    id: 2,
    image: blog2,
    title: "Blog Title Goes Here",
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos minus modi porro perferendis error quas, labore, asperiores, assumenda sed ex neque distinctio laudantium nam cupiditate esse praesentium eligendi officiis.",
  },
  {
    id: 3,
    image: blog3,
    title: "Blog Title Goes Here",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos minus modi porro perferendis error quas, labore, asperiores, assumenda sed ex neque distinctio laudantium nam cupiditate esse praesentium eligendi officiis.",
  },
  {
    id: 4,
    image: blog4,
    title: "Blog Title Goes Here",
    rating: 3.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos minus modi porro perferendis error quas, labore, asperiores, assumenda sed ex neque distinctio laudantium nam cupiditate esse praesentium eligendi officiis.",
  },
  {
    id: 5,
    image: blog5,
    title: "Blog Title Goes Here",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos minus modi porro perferendis error quas, labore, asperiores, assumenda sed ex neque distinctio laudantium nam cupiditate esse praesentium eligendi officiis.",
  },
  {
    id: 6,
    image: blog6,
    title: "Blog Title Goes Here",
    rating: 3,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos minus modi porro perferendis error quas, labore, asperiores, assumenda sed ex neque distinctio laudantium nam cupiditate esse praesentium eligendi officiis.",
  },
];

const ReviewsHome = () => {
  return (
    <Container>
      <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
        Our Blogs...
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {blogs.splice(0, 3).map((blog) => (
          <Review key={blog.id} blog={blog}></Review>
        ))}
      </Grid>
    </Container>
  );
};

export default ReviewsHome;
