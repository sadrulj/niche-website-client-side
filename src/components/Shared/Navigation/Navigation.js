import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#3f51b5" }}
      >
        <Container>
          <Navbar.Brand href="#home">MakeMyGlasses</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/explore">
                Explore
              </NavLink>
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center">
              {user.email ? (
                <div className="d-lg-flex justify-content-center align-items-center d-md-block">
                  <p className="text-light d-flex justify-content-center align-items-center">
                    Welcome, {user.displayName}
                  </p>
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                  <Button onClick={logout}>Logout</Button>
                </div>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
