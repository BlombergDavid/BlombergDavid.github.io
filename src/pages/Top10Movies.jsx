import React, { useEffect } from "react";
import "./Top10.css";
import { Row, Col, Image } from "react-bootstrap";
import { returnListOfStrings, renderDescription } from "../functions";
import Footer from "../components/Footer";
import Top10Header from "../components/Top10Header";
import PulpFictionCover from "../images/movies/pulpfiction.jpg";
import NightmareBeforeChristmasCover from "../images/movies/nightmarebeforechristmas.jpg";
import InBrugesCover from "../images/movies/inbruges.jpg";
import TheSilenceOfTheLambsCover from "../images/movies/silenceofthelambs.jpg";
import ParasiteCover from "../images/movies/parasite.jpg";
import SpiritedAwayCover from "../images/movies/spiritedaway.jpg";
import ToyStoryCover from "../images/movies/toystory.jpg";
import AmelieCover from "../images/movies/amelie.jpg";
import SuperbadCover from "../images/movies/superbad.jpg";
import FantasticMrFoxCover from "../images/movies/mrfox.jpg";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { CommentField } from "../components/CommentField";


const Top10Movies = () => {
  const data = require("../jsonFiles/movies.json");
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

  const returnMovieData = (title) => {
    for (let i = 0; i < data.value.length; i++) {
      if (data.value[i].title === title) {
        const returnData = data.value[i];
        return (
          <div>
            <h2 className="item-title">{returnData.title}</h2>
            <p>
              <strong>Utgivningsdatum: </strong>
              {returnData.year}
            </p>
            <p>
              <strong>Regissör: </strong>
              {returnData.director}
            </p>
            <p>
              <strong>Manus: </strong>
              {returnListOfStrings(returnData.writer)}
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
              <strong>Filmtrailer: </strong>
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
        <h1 className="top-10-title">Mina top 10 filmer</h1>
        <Row className="item-entry">
          <Col
            className="centered-image-small-screen"
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 1, span: 4 }}
          >
            <Image
              src={PulpFictionCover}
              fluid
              alt="Pulp Fiction"
              className="movie-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} lg={{ order: 2, span: 6, offset: 2 }}>
            {returnMovieData("Pulp Fiction")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} lg={{ order: 1, span: 6 }}>
            {returnMovieData("The Nightmare Before Christmas")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={NightmareBeforeChristmasCover}
              fluid
              alt="The Nightmare Before Christmas"
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
              src={InBrugesCover}
              fluid
              alt="In Bruges"
              className="movie-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} lg={{ order: 2, span: 6, offset: 2 }}>
            {returnMovieData("In Bruges")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} lg={{ order: 1, span: 6 }}>
            {returnMovieData("The Silence of the Lambs")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={TheSilenceOfTheLambsCover}
              fluid
              alt="The Silence of the Lambs"
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
              src={ParasiteCover}
              fluid
              alt="Parasite"
              className="movie-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} lg={{ order: 2, span: 6, offset: 2 }}>
            {returnMovieData("Parasite")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} lg={{ order: 1, span: 6 }}>
            {returnMovieData("Spirited Away")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={SpiritedAwayCover}
              fluid
              alt="Spirited Away"
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
              src={ToyStoryCover}
              fluid
              alt="Toy Story"
              className="movie-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} lg={{ order: 2, span: 6, offset: 2 }}>
            {returnMovieData("Toy Story")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} lg={{ order: 1, span: 6 }}>
            {returnMovieData("Amélie")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={AmelieCover}
              fluid
              alt="Amélie"
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
              src={SuperbadCover}
              fluid
              alt="Superbad"
              className="movie-image"
            />
          </Col>
          <Col md={{ order: 1, span: 6 }} lg={{ order: 2, span: 6, offset: 2 }}>
            {returnMovieData("Superbad")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1, span: 6 }} lg={{ order: 1, span: 6 }}>
            {returnMovieData("Fantastic Mr. Fox")}
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 4, offset: 2 }}
          >
            <Image
              src={FantasticMrFoxCover}
              fluid
              alt="Fantastic Mr. Fox"
              className="movie-image"
            />
          </Col>
        </Row>
      </div>
      <Row className="mb-5 text-center" style={{ maxWidth: "100%" }}>
        <Col md={4} className="mb-3">
          <Link to="/interests/top-albums">Mina top 10 album.</Link>
        </Col>
        <Col md={4} className="mb-3">
          <Link to="/interests/top-games">Mina top 10 TV-spel.</Link>
        </Col>
        <Col md={4}>
          <Link to="/interests/top-shows">Mina top 10 TV-serier.</Link>
        </Col>
      </Row>
      <CommentField/>
      <Row className="py-5 px-5" style={{ maxWidth: "100%" }}>
        <Col>
          <BackButton link="/interests" text="Tillbaka" />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Top10Movies;
