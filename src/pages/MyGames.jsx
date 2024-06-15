import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import "./MyGames.css";
import Top10Header from "../components/Top10Header";
import Footer from "../components/Footer";
import GamePreviewButton from "../components/GamePreviewButton";

const MyGames = () => {
  // const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const correctPassword = "Ozzy1996";

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setErrorMessage("");
      const currentTime = new Date().getTime();
      localStorage.setItem(
        "verifiedGames",
        JSON.stringify({ verified: true, timestamp: currentTime })
      );
    } else {
      setErrorMessage("Felaktigt lösenord, vänliga försök igen.");
    }
  };

  useEffect(() => {
    setErrorMessage("");
  }, [password]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("verifiedGames"));
    if (data) {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - data.timestamp;
      const hoursDifference = timeDifference / (1000 * 60 * 60);
      if (data.verified && hoursDifference < 24) {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const listOfGames = [
    {
      title: "Midsommar 2024",
      backgroundImageURL:
        "https://www.spectator.co.uk/wp-content/uploads/2023/06/Life21WebMidsummer.jpg?w=1280g",
      description: "This is a game for midsummer",
      link: "midsummer-jeopardy",
    },
    {
      title: "TBA",
      backgroundImageURL:
        "https://www.shutterstock.com/image-vector/question-mark-icon-vector-illustration-600nw-545832988.jpg",
      description: "This is game has not yet been announced",
      link: "",
    },
    {
      title: "TBA",
      backgroundImageURL:
        "https://www.shutterstock.com/image-vector/question-mark-icon-vector-illustration-600nw-545832988.jpg",
      description: "This is game has not yet been announced",
      link: "",
    },
    {
      title: "TBA",
      backgroundImageURL:
        "https://www.shutterstock.com/image-vector/question-mark-icon-vector-illustration-600nw-545832988.jpg",
      description: "This is game has not yet been announced",
      link: "",
    },
  ];
  return (
    <>
      <Top10Header />
      {!isAuthenticated ? (
        <div className="password-container">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter password"
                size="lg"
                className="mb-3"
                onKeyPress={handleKeyPress}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <Button onClick={handlePasswordSubmit} size="lg">
                Submit
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12}>
              {errorMessage && (
                <p style={{ color: "red", marginTop: "1em", fontSize: "64px" }}>
                  {errorMessage}
                </p>
              )}
            </Col>
          </Row>
        </div>
      ) : (
        <div className="my-games-container">
          <div className="my-games-content">
            <Row>
              {listOfGames.map((game, index) => (
                <Col
                  xs={12}
                  sm={{ span: 3, offset: 2 }}
                  key={index}
                  style={{ marginBottom: "2em", marginTop: "3em" }}
                >
                  <GamePreviewButton
                    title={game.title}
                    backgroundImageURL={game.backgroundImageURL}
                    description={game.description}
                    link={game.link}
                    width="400px"
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MyGames;
