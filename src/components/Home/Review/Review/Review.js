import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea, Grid, Rating } from "@mui/material";

const Review = ({ review }) => {
  const { image, displayName, rating, comment } = review;
  return (
    <Grid
      xs={12}
      sm={6}
      md={4}
      gap={4}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card sx={{ width: 345, height: 300, p: 2, my: 3 }}>
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
              {displayName}
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
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Review;
