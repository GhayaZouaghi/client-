import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./NavBar.css";
// import logo from "../../assests/logo.png";
const NavBar = () => {
  return (
    <div className="baro">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand href="#">
              <h2>Logo Devnet</h2>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">
                <Nav.Link href="#action1">Home</Nav.Link>
              </Link>
              <Link to="/developers">
                <Nav.Link href="#action2">Developers</Nav.Link>
              </Link>
              <Link to="/contact">
                <Nav.Link href="#action3">Contact US </Nav.Link>
              </Link>
              <Link to="/login">
                <Nav.Link href="#action4">Login</Nav.Link>
              </Link>
              <Link to="/register">
                <Nav.Link href="#action5">Register</Nav.Link>
              </Link>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="btn" variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
