import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './MyInterests.css';

const MyInterests = () => {
  const navigate = useNavigate();

  return (
    <div className="my-interests-container">
      <Row>
        <Col>
          <h1 className="my-interests-title">Mina Intressen</h1>
        </Col>
      </Row>
      <Row>
        <Col className="turntable-side">
        <DropdownButton drop="down-centered" id="top10dropdown" title="Mina Top-10 Listor" variant="outline-light" size="lg" className="my-5">
            <Dropdown.Item
              onClick={() => {
                navigate("/interests/top-albums");
              }}
            >
              Album
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                navigate("/interests/top-movies");
              }}
            >
              Filmer
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                navigate("/interests/top-games");
              }}
            >
              TV-spel
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                navigate("/interests/top-shows");
              }}
            >
              TV-serier
            </Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col className="cinema-side">
          <Button
            variant="outline-light"
            onClick={() => {
              navigate("/interests/posts");
            }}
            size="lg"
            className="my-posts-button my-5"
            //style={{ borderRadius: "3rem" }}
          >
            Mina Inlägg
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default MyInterests;
