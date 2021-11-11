import { Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import banner1 from "../../../images/banner-1.jpg";
import banner2 from "../../../images/banner-2.jpg";
import banner3 from "../../../images/banner-3.jpg";

const bannerBg1 = {
  backgroundImage: `url(${banner1})`,
  width: "450px",
  height: "300px",
};
const bannerBg2 = {
  backgroundImage: `url(${banner2})`,
  width: "450px",
  height: "300px",
};
const bannerBg3 = {
  backgroundImage: `url(${banner3})`,
  width: "450px",
  height: "300px",
};

const Promotion = () => {
  return (
    <div>
      <Box
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          p: 4,
          m: 1,
          background: "background.paper",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
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
                  sx={{ my: 3, fontSize: 13, fontWeight: 600, color: "gray" }}
                >
                  Upto 50%
                </Typography>
                <Button variant="outlined">Explore</Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
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
                  sx={{ my: 3, fontSize: 13, fontWeight: 600, color: "gray" }}
                >
                  Upto 50%
                </Typography>
                <Button variant="outlined">Explore</Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
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
                  sx={{ my: 3, fontSize: 13, fontWeight: 600, color: "gray" }}
                >
                  Upto 50%
                </Typography>
                <Button variant="outlined">Explore</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Promotion;
