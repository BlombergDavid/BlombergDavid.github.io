import React, { useEffect } from "react";
import "./Top10.css";
import { Row, Col, Image } from "react-bootstrap";
import { returnListOfStrings, renderDescription } from "../functions";
import Footer from "../components/Footer";
import Top10Header from "../components/Top10Header";
import TheSopranosCover from "../images/shows/sopranos.webp";
import TheWireCover from "../images/shows/thewire.jpg";
import TheBearCover from "../images/shows/thebear.jpg";
import ItsAlwaysSunnyCover from "../images/shows/itsalwayssunny.jpg";
import BreakingBadCover from "../images/shows/breakingbad.jpg";
import BoJackCover from "../images/shows/bojack.jpg";
import AvatarTheLastAirbenderCover from "../images/shows/avatarthelastairbender.jpg";
import TrueDetectiveCover from "../images/shows/truedetective.webp";
import SeinfeldCover from "../images/shows/seinfeld.jpg";
import FreaksAndGeeksCover from "../images/shows/freaksandgeeks.jpg";
import { Link } from "react-router-dom";




const Top10Shows = () => {
  const data = require("../jsonFiles/shows.json");
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".item-entry");

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add("item-entry-visible");
        } else {
          element.classList.remove("item-entry-visible");
        }
      });
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Call the handleScroll function once to check the initial state
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const returnShowData = (title) => {
    for (let i = 0; i < data.value.length; i++) {
      if (data.value[i].title === title) {
        const returnData = data.value[i];
        return (
          <div>
            <h2 className="item-title">{returnData.title}</h2>
            <p>
              <strong>År: </strong>
              {returnData.year}
            </p>
            <p>
              <strong>Säsonger: </strong>
              {returnData.seasons}
            </p>
            <p>
              <strong>Genre: </strong>
              {returnListOfStrings(returnData.genre)}
            </p>
            <p>
              <strong>Skådespelare: </strong>
              {returnListOfStrings(returnData.actors)}
            </p>
            <p>
              <strong>Beskrivning: </strong>
              <span>{renderDescription(returnData.description)}</span>
            </p>
            <p>
              <strong>Klipp: </strong>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={returnData.link}
              >
                {returnData.link}
              </a>
            </p>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <>
      <Top10Header marginBottom="mb-5" />
      <div className="pt-3 text-color movie-section">
        <h1 className="top-10-title">Mina top 10 serier</h1>
        <Row className="item-entry">
          <Col
            className="centered-image-small-screen"
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            xl={{ order: 1, span: 4 }}
          >
            <Image
              src={TheSopranosCover}
              fluid
              alt="The Sopranos"
              className="show-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} xl={{ order: 2, span: 6, offset: 2 }}>
            {returnShowData("The Sopranos")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} xl={{ order: 1, span: 6 }}>
            {returnShowData("The Wire")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            xl={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={TheWireCover}
              fluid
              alt="The Wire"
              className="show-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            xl={{ order: 1, span: 4 }}
          >
            <Image
              src={TheBearCover}
              fluid
              alt="The Bear"
              className="movie-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} xl={{ order: 2, span: 6, offset: 2 }}>
            {returnShowData("The Bear")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} xl={{ order: 1, span: 6 }}>
            {returnShowData("It's Always Sunny in Philadelphia")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            xl={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={ItsAlwaysSunnyCover}
              fluid
              alt="It's Always Sunny in Philadelphia"
              className="show-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            xl={{ order: 1, span: 4 }}
          >
            <Image
              src={BreakingBadCover}
              fluid
              alt="Breaking Bad"
              className="show-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} xl={{ order: 2, span: 6, offset: 2 }}>
            {returnShowData("Breaking Bad")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} xl={{ order: 1, span: 6 }}>
            {returnShowData("BoJack Horseman")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            xl={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={BoJackCover}
              fluid
              alt="BoJack Horseman"
              className="movie-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            xl={{ order: 1, span: 4 }}
          >
            <Image
              src={AvatarTheLastAirbenderCover}
              fluid
              alt="Avatar: The Last Airbender"
              className="movie-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} xl={{ order: 2, span: 6, offset: 2 }}>
            {returnShowData("Avatar: The Last Airbender")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} xl={{ order: 1, span: 6 }}>
            {returnShowData("True Detective")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            xl={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={TrueDetectiveCover}
              fluid
              alt="True Detective"
              className="movie-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            xl={{ order: 1, span: 4 }}
          >
            <Image
              src={SeinfeldCover}
              fluid
              alt="Seinfeld"
              className="show-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} xl={{ order: 2, span: 6, offset: 2 }}>
            {returnShowData("Seinfeld")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} xl={{ order: 1, span: 6 }}>
            {returnShowData("Freaks and Geeks")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            xl={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={FreaksAndGeeksCover}
              fluid
              alt="Freaks and Geeks"
              className="show-image"
            />
          </Col>
        </Row>
      </div>
      <Row className="mb-5 text-center">
        <Col md={4}>
          <Link to="/interests/top-albums">Mina top 10 album.</Link>
        </Col>
        <Col md={4}>
          <Link to="/interests/top-games">Mina top 10 TV-spel.</Link>
        </Col>
        <Col md={4}>
          <Link to="/interests/top-movies">Mina top 10 filmer.</Link>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Top10Shows;
