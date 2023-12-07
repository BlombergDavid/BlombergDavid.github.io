import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Top10Header = (props) => {
  const navigate = useNavigate();

  return (
    <Navbar className={props.marginBottom + " dark-theme"} sticky="top" variant="dark">
      <Container>
        <Navbar.Brand
          title="Hem"
          style={{ cursor: "pointer" }}
          onClick={() => {}}
        ></Navbar.Brand>
        <h1
          className="header-title"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="cursive-font">David Blomberg</span>
        </h1>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button
            variant="light"
            onClick={() => {
              navigate("/");
            }}
          >
            Hem
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top10Header;
