import {
  Grid,
  IconButton,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
// import MuiButton from "../../../StyledComponent/MuiButton";
const useStyle = makeStyles({
  socialIcon: {
    color: "white !important",
    border: "1px solid white !important",
    margin: "20px 10px 30px 0 !important",
    "&:hover": {
      background: "#19D3AE !important",
      color: "#fff !important",
    },
  },
});
const Footer = () => {
  const { socialIcon } = useStyle();
  return (
    <footer>
      <Box style={{ backgroundColor: "#3f51b5" }}>
        <Grid container spacing={3} sx={{ my: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List sx={{ mt: 4 }}>
              <ListItemText>
                <Typography
                  variant="h4"
                  sx={{ color: "#fff", fontWeight: 400 }}
                >
                  MakeMyGlasses
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ color: "#fff", fontWeight: 400, mb: 1 }}>
                Explore
              </ListItemText>
              <ListItemText sx={{ color: "#fff", fontWeight: 400, mb: 1 }}>
                Reviews
              </ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ color: "#fff", fontWeight: 400, mb: 1 }}>
                Dashboard
              </ListItemText>
              <ListItemText sx={{ color: "#fff", fontWeight: 400 }}>
                My Orders
              </ListItemText>
              <ListItemText sx={{ color: "#fff", fontWeight: 400 }}>
                Add Reviews
              </ListItemText>
              <ListItemText sx={{ color: "#fff", fontWeight: 400 }}>
                Payments
              </ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ color: "#fff", mb: 1 }}>
                Our Address
              </ListItemText>
              <ListItemText sx={{ color: "#fff" }}>
                New York - 101010 Hudson
              </ListItemText>
              <ListItemText sx={{ color: "#fff" }}>Yards</ListItemText>
            </List>
            <IconButton className={socialIcon}>
              <GoogleIcon />
            </IconButton>
            <IconButton className={socialIcon}>
              <TwitterIcon />
            </IconButton>
            <IconButton className={socialIcon}>
              <InstagramIcon />
            </IconButton>
            <Typography sx={{ color: "#fff", fontWeight: 400 }}>
              Call Now
            </Typography>
            {/* <MuiButton variant="contained">+8065432145</MuiButton> */}
          </Grid>
        </Grid>
        <Typography
          sx={{ textAlign: "center", py: 4, color: "#fff", fontWeight: 400 }}
          variant="subtitle2"
        >
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
