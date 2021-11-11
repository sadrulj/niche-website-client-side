import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea, Grid, Rating } from "@mui/material";

const Review = ({ blog }) => {
  const { image, title, rating, comment } = blog;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Avatar
            alt=""
            src={image}
            sx={{
              width: 96,
              height: 96,
              mx: "auto",
              mt: 2,
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Rating
              name="read-only"
              value={rating}
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <Typography variant="body2" color="text.secondary">
              {comment}
            </Typography>
            <Box
              style={{ display: "flex", justifyContent: "space-between" }}
            ></Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Review;
