import { Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import banner1 from "../../../images/banner-1.jpg";
import banner2 from "../../../images/banner-2.jpg";
import banner3 from "../../../images/banner-3.jpg";

const bannerBg1 = {
  backgroundImage: `url(${banner1})`,
  width: "450px",
  height: "300px",
  margin: "20px 0",
  objectFit: "cover",
};
const bannerBg2 = {
  backgroundImage: `url(${banner2})`,
  width: "450px",
  height: "300px",
  margin: "20px 0",
  objectFit: "cover",
};
const bannerBg3 = {
  backgroundImage: `url(${banner3})`,
  width: "450px",
  height: "300px",
  margin: "20px 0",
  objectFit: "cover",
};

const Promotion = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 12, sm: 6, md: 4 }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Paper style={bannerBg1} elevation={2}>
          <Box
            style={{
              textAlign: "right",
              flexDirection: "row-reverse",
              marginRight: "20px",
              paddingTop: "20px",
            }}
          >
            <Typography variant="h6">Special Offer</Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 16, fontWeight: 900, color: "gray" }}
            >
              Upto 50%
            </Typography>
            <NavLink to="/explore" style={{ textDecoration: "none" }}>
              <Button variant="outlined">Explore</Button>
            </NavLink>
          </Box>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Paper style={bannerBg2} elevation={3} spacing={2}>
          <Box
            style={{
              textAlign: "right",
              flexDirection: "row-reverse",
              marginRight: "20px",
              paddingTop: "20px",
            }}
          >
            <Typography variant="h6">Special Offer</Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 16, fontWeight: 900, color: "gray" }}
            >
              Upto 50%
            </Typography>
            <NavLink to="/explore" style={{ textDecoration: "none" }}>
              <Button variant="outlined">Explore</Button>
            </NavLink>
          </Box>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Paper style={bannerBg3} elevation={3}>
          <Box
            style={{
              textAlign: "right",
              flexDirection: "row-reverse",
              marginRight: "20px",
              paddingTop: "20px",
            }}
          >
            <Typography variant="h6">Special Offer</Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 16, fontWeight: 900, color: "gray" }}
            >
              Upto 50%
            </Typography>
            <NavLink to="/explore" style={{ textDecoration: "none" }}>
              <Button variant="outlined">Explore</Button>
            </NavLink>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Promotion;
