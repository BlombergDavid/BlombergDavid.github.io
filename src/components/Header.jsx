import React from "react";
import { Navbar, Container, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import ScrollToButton from "./ScrollToButton";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="mb-5 dark-theme" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand title="Hem"></Navbar.Brand>
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
          <ButtonGroup aria-label="Buttongroup header" className="flex-wrap">
            <ScrollToButton
              text="Hem"
              variant="light"
              linkTo="home"
              offset={-150}
            />
            <ScrollToButton
              text="Om mig"
              variant="light"
              linkTo="about-me"
              offset={-100}
            />
            <ScrollToButton
              text="Erfarenheter"
              variant="light"
              linkTo="work-experiences"
              offset={-100}
            />
            <ScrollToButton
              text="Relevanta kunskaper"
              variant="light"
              linkTo="skills"
              offset={-100}
            />
            <ScrollToButton
              text="Intressen"
              variant="light"
              linkTo="interests"
              offset={-100}
            />
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
