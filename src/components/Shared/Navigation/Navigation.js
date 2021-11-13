import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(8),
    display: "flex",
    textDecoration: "none",
    color: "white",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontWeight: "600",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { user, logout } = useAuth();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Link to="/home" className={classes.navlinks}>
          <Typography variant="h4" className={classes.logo}>
            MakeMyGlasses
          </Typography>
        </Link>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/home" className={classes.link}>
              Home
            </Link>
            <Link to="/explore" className={classes.link}>
              Explore
            </Link>
            <Link to="/blogs" className={classes.link}>
              Blogs
            </Link>

            {user?.email ? (
              <div>
                <Link
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "20px",
                    margin: "0 50px",
                  }}
                >
                  Dashboard
                </Link>
                <Button onClick={logout} color="inherit">
                  Logout
                </Button>
              </div>
            ) : (
              <Link
                to="/login"
                className={classes.link}
                style={{ display: "flex", alignItems: "center" }}
              >
                <LoginIcon />
                Login
              </Link>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
