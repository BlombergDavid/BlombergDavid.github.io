import React from "react";
import { Navbar, Container, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { UserAuth } from "../context/AuthContext";
import GoogleSignInButton from "./GoogleSignInButton";

const Top10Header = (props) => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar
      expand="md"
      className={props.marginBottom + " dark-theme"}
      sticky="top"
      variant="dark"
    >
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
          <ButtonGroup aria-label="Buttongroup header">
            <Button
              variant="light"
              onClick={() => {
                navigate("/");
              }}
            >
              Hem
            </Button>
            <Button
              variant="light"
              onClick={() => {
                navigate("/interests");
              }}
            >
              Mina Intressen
            </Button>
            {!user?.email && !user?.emailVerified ? (
              <GoogleSignInButton />
            ) : (
              <Button variant="light" onClick={handleSignOut}>
                Logga ut
              </Button>
            )}
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top10Header;
