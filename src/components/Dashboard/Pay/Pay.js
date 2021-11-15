import { Button } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Pay = () => {
  return (
    <div
      style={{
        backgroundImage:
          "https://cdni.iconscout.com/illustration/premium/thumb/online-payment-with-mobile-2645883-2218295.png",
      }}
    >
      <Typography variant="h4">Payment page coming soon...</Typography>
      <NavLink to="/home">
        <Button variant="contained" sx={{ fontWeight: 600 }}>
          back to Home
        </Button>
      </NavLink>

      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/online-payment-with-mobile-2645883-2218295.png"
        alt=""
      />
    </div>
  );
};

export default Pay;
