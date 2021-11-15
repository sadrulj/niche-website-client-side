import * as React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@material-ui/core";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../AddReview/AddReview";
import Pay from "../Pay/Pay";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddProduct from "../AddProduct/AddProduct";
import ManageProducts from "../ManageProducts/ManageProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, admin, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { path, url } = useRouteMatch();

  const drawer = (
    <div>
      <Box sx={{ backgroundColor: "#1976d2", color: "white" }}>
        <CssBaseline />
        <Typography
          variant="h6"
          noWrap
          component="div"
          style={{ fontWeight: 600, textAlign: "left" }}
          sx={{ mx: 1 }}
        >
          Welcome,
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          style={{ fontWeight: 600, textAlign: "right" }}
          sx={{ mx: 1 }}
        >
          {user.email}
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <Link to="/home">
            <Button>Home</Button>
          </Link>
        </ListItem>
        {admin ? (
          <Box>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Link to={`${url}/manageAllOrders`}>
                <Button>Manage All Orders</Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Link to={`${url}/addProduct`}>
                <Button>Add a Product</Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Link to={`${url}/makeAdmin`}>
                <Button>Make Admin</Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Link to={`${url}/manageProducts`}>
                <Button>Manage Products</Button>
              </Link>
            </ListItem>
          </Box>
        ) : (
          <Box>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Link to={`${url}/myOrders`}>
                <Button>My Orders</Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Link to={`${url}/review`}>
                <Button>Review</Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Link to={`${url}/pay`}>
                <Button>Pay</Button>
              </Link>
            </ListItem>
          </Box>
        )}
        <Button onClick={logout}>Logout</Button>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <Route path={`${path}/manageAllOrders`}>
            <ManageAllOrders />
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct />
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
