import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Top10Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="mb-5 dark-theme" sticky="top" variant="dark">
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
          David Blomberg
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
