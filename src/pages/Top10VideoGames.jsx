import React, { useEffect } from "react";
import "./Top10.css";
import { Row, Col, Image } from "react-bootstrap";
import { returnListOfStrings, renderDescription } from "../functions";
import Footer from "../components/Footer";
import Top10Header from "../components/Top10Header";
import DarkSouls3Cover from "../images/videogames/darksouls3.jpg";
import HeroesOfMightAndMagic3Cover from "../images/videogames/homm3.jpg";
import Persona5Cover from "../images/videogames/persona5.jpg";
import HadesCover from "../images/videogames/hades.jpg";
import SlayTheSpireCover from "../images/videogames/slaythespire.jpg";
import RockBand2Cover from "../images/videogames/rockband2.jpg";
import Portal2Cover from "../images/videogames/portal2.jpg";
import Halo3Cover from "../images/videogames/halo3.JPG";
import WarCraft3Cover from "../images/videogames/wc3.jpg";
import DivinityOriginalSin2Cover from "../images/videogames/dos2.jpg";
import { Link } from "react-router-dom";


const Top10VideoGames = () => {
  const data = require("../jsonFiles/games.json");
  useEffect(() => {
    window.scrollTo(0, 0);
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

  const returnGameData = (title) => {
    for (let i = 0; i < data.value.length; i++) {
      if (data.value[i].title === title) {
        const returnData = data.value[i];
        return (
          <div>
            <h2 className="item-title">{returnData.title}</h2>
            <p>
              <strong>Utgivningsår: </strong>
              {returnData.year}
            </p>
            <p>
              <strong>Utvecklare: </strong>
              {returnData.developer}
            </p>
            <p>
              <strong>Genre: </strong>
              {returnListOfStrings(returnData.genre)}
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
      <Top10Header />
      <div className="pt-3 text-color movie-section">
        <h1 className="top-10-title">Mina top 10 TV-spel</h1>
        <Row className="item-entry">
          <Col
            className="centered-image-small-screen"
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 1, span: 4 }}
          >
            <Image
              src={DarkSouls3Cover}
              fluid
              alt="Dark Souls 3"
              className="album-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} lg={{ order: 2, span: 6, offset: 2 }}>
            {returnGameData("Dark Souls 3")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} lg={{ order: 1, span: 6 }}>
            {returnGameData("Heroes of Might and Magic 3")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={HeroesOfMightAndMagic3Cover}
              fluid
              alt="Heroes of Might and Magic 3"
              className="album-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 1, span: 4 }}
          >
            <Image
              src={Persona5Cover}
              fluid
              alt="Persona 5"
              className="album-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} lg={{ order: 2, span: 6, offset: 2 }}>
            {returnGameData("Persona 5")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} lg={{ order: 1, span: 6 }}>
            {returnGameData("Hades")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 4, offset: 2 }}
          >
            <Image src={HadesCover} fluid alt="Hades" className="movie-image" />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 1, span: 4 }}
          >
            <Image
              src={SlayTheSpireCover}
              fluid
              alt="Slay the Spire"
              className="album-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} lg={{ order: 2, span: 6, offset: 2 }}>
            {returnGameData("Slay the Spire")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} lg={{ order: 1, span: 6 }}>
            {returnGameData("Rock Band 2")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={RockBand2Cover}
              fluid
              alt="Rock Band 2"
              className="album-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 1, span: 4 }}
          >
            <Image
              src={Portal2Cover}
              fluid
              alt="Portal 2"
              className="movie-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} lg={{ order: 2, span: 6, offset: 2 }}>
            {returnGameData("Portal 2")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} lg={{ order: 1, span: 6 }}>
            {returnGameData("Halo 3")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={Halo3Cover}
              fluid
              alt="Halo 3"
              className="movie-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 1, span: 4 }}
          >
            <Image
              src={WarCraft3Cover}
              fluid
              alt="Warcraft III: Reign of Chaos / The Frozen Throne"
              className="movie-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} lg={{ order: 2, span: 6, offset: 2 }}>
            {returnGameData("Warcraft III: Reign of Chaos / The Frozen Throne")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} lg={{ order: 1, span: 6 }}>
            {returnGameData("Divinity: Original Sin 2")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={DivinityOriginalSin2Cover}
              fluid
              alt="Divinity: Original Sin 2"
              className="album-image"
            />
          </Col>
        </Row>
      </div>
      <Row className="mb-5 text-center">
        <Col md={4}>
          <Link to="/top-albums">Mina top 10 album.</Link>
        </Col>
        <Col md={4}>
          <a href="/top-shows">Mina top 10 serier.</a>
        </Col>
        <Col md={4}>
          <Link to="/top-movies">Mina top 10 filmer.</Link>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Top10VideoGames;
