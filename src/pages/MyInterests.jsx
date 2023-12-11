import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./MyInterests.css";
import Top10Header from "../components/Top10Header";
import Footer from "../components/Footer";

const MyInterests = () => {
  const navigate = useNavigate();
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  return (
    <>
      <Top10Header />
      <div className="my-interests-container">
        <Row style={{ maxWidth: "100%" }}>
          <Col>
            <h1 className="my-interests-title">Mina Intressen</h1>
          </Col>
        </Row>
        <Row style={{ maxWidth: "100%" }}>
          <Col className="turntable-side">
            
            <Button
              variant="light"
              size="lg"
              className="my-posts-button mt-5 mx-3"
              onClick={() => {
                setShowAdditionalButtons(!showAdditionalButtons);
              }}
            >
              Mina Top-10 Listor
            </Button>
            {showAdditionalButtons && (
              <Row style={{ textAlign: "center" }}>
                <Col sm={12} md={6} lg={3}>
                  <Button
                    onClick={() => {
                      navigate("/interests/top-albums");
                    }}
                    variant="primary"
                    style={{ whiteSpace: 'nowrap' }}
                    className="m-3"
                  >
                    Album
                  </Button>
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <Button
                    onClick={() => {
                      navigate("/interests/top-movies");
                    }}
                    variant="primary"
                    style={{ whiteSpace: 'nowrap' }}
                    className="m-3"
                  >
                    Filmer
                  </Button>
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <Button
                    onClick={() => {
                      navigate("/interests/top-games");
                    }}
                    variant="primary"
                    style={{ whiteSpace: 'nowrap' }}
                    className="m-3"
                  >
                    TV-spel
                  </Button>
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <Button
                    onClick={() => {
                      navigate("/interests/top-shows");
                    }}
                    variant="primary"
                    style={{ whiteSpace: 'nowrap' }}
                    className="m-3"
                  >
                    TV-serier
                  </Button>
                </Col>
              </Row>
            )}
          </Col>
          <Col className="cinema-side">
            <Button
              variant="light"
              onClick={() => {
                navigate("/interests/posts");
              }}
              size="lg"
              className="my-posts-button my-5 mx-3"
              //style={{ borderRadius: "3rem" }}
            >
              Mina Inlägg
            </Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default MyInterests;
