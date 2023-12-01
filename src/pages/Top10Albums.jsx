import React, { useEffect } from "react";
import "./Top10.css";
import { Row, Col, Image } from "react-bootstrap";
import MadvillainyCover from "../images/albums/madvillainy.jpg";
import MyWomanCover from "../images/albums/mywoman.jpg";
import FromMarsToSiriusCover from "../images/albums/frommarstosirius.jpg";
import JaneDoeCover from "../images/albums/janedoe.png";
import AtrocityExhibitionCover from "../images/albums/AtrocityExhibition.jpg";
import OkComputerCover from "../images/albums/okcomputer.jpg";
import EnterTheWuTang from "../images/albums/enterthewutang.jpeg";
import HybridTheoryCover from "../images/albums/hybridtheory.jpg";
import PinataCover from "../images/albums/pinata.jpg";
import IsThisItCover from "../images/albums/isthisit.jpg";
import { returnListOfStrings, renderDescription } from "../functions";
import Footer from "../components/Footer";
import Top10Header from "../components/Top10Header";

const Top10Albums = () => {
  const data = require("../jsonFiles/albums.json");
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

  const returnAlbumData = (title) => {
    for (let i = 0; i < data.value.length; i++) {
      if (data.value[i].title === title) {
        const returnData = data.value[i];
        return (
          <div>
            <h2 className="item-title">{returnData.title}</h2>
            <p>
              <strong>Artist / Grupp: </strong>
              {returnData.artist}
            </p>
            <p>
              <strong>Utgivningsdatum: </strong>
              {returnData.year}
            </p>
            <p>
              <strong>Genre: </strong>
              {returnListOfStrings(returnData.genre)}
            </p>
            <p>
              <strong>Albumbeskrivning: </strong>
              <span>{renderDescription(returnData.description)}</span>
            </p>
            <p>
              <strong>Favoritlåtar: </strong>
              {returnListOfStrings(returnData.bestSongs)}
            </p>
            <p>
              <strong>Spotifylänk: </strong>
              <a rel="noopener noreferrer" target="_blank" href={returnData.link}>{returnData.link}</a>
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
        <h1 className="top-10-title">Mina top 10 album</h1>
        <Row className="item-entry">
          <Col xs={{ order: 2 }} md={{ order: 2 }} lg={{ order: 1, span: 5 }}>
            <Image
              src={MadvillainyCover}
              fluid
              alt="Madvillainy"
              className="album-image"
            />
          </Col>
          <Col md={{ order: 1 }} lg={{ order: 2, span: 5, offset: 1 }} xl={{ order: 2, span: 5, offset: 2 }}>
            {returnAlbumData("Madvillainy")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1 }} lg={{ order: 1, span: 5 }}>
            {returnAlbumData("MY WOMAN")}
          </Col>
          <Col xs={{ order: 2 }} md={{ order: 2 }} lg={{ order: 2, span: 5, offset: 1 }} xl={{ order: 2, span: 5, offset: 2 }}>
            <Image
              src={MyWomanCover}
              fluid
              alt="My Woman"
              className="album-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col xs={{ order: 2 }} md={{ order: 2 }} lg={{ order: 1, span: 5 }}>
            <Image
              src={FromMarsToSiriusCover}
              fluid
              alt="From Mars to Sirius"
              className="album-image"
            />
          </Col>
          <Col md={{ order: 1 }} lg={{ order: 2, span: 5, offset: 1 }} xl={{ order: 2, span: 5, offset: 2 }}>
            {returnAlbumData("From Mars to Sirius")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1 }} lg={{ order: 1, span: 5 }}>
            {returnAlbumData("Jane Doe")}
          </Col>
          <Col xs={{ order: 2 }} md={{ order: 2 }} lg={{ order: 2, span: 5, offset: 1 }} xl={{ order: 2, span: 5, offset: 2 }}>
            <Image
              src={JaneDoeCover}
              fluid
              alt="Jane Doe"
              className="album-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col xs={{ order: 2 }} md={{ order: 2 }} lg={{ order: 1, span: 5 }}>
            <Image
              src={AtrocityExhibitionCover}
              fluid
              alt="Atrocity Exhibition"
              className="album-image"
            />
          </Col>
          <Col md={{ order: 1 }} lg={{ order: 2, span: 5, offset: 1 }} xl={{ order: 2, span: 5, offset: 2 }}>
            {returnAlbumData("Atrocity Exhibition")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1 }} lg={{ order: 1, span: 5 }}>
            {returnAlbumData("OK Computer")}
          </Col>
          <Col xs={{ order: 2 }} md={{ order: 2 }} lg={{ order: 2, span: 5, offset: 1 }} xl={{ order: 2, span: 5, offset: 2 }}>
            <Image
              src={OkComputerCover}
              fluid
              alt="Ok Computer"
              className="album-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col xs={{ order: 2 }} md={{ order: 2 }} lg={{ order: 1, span: 5 }}>
            <Image
              src={EnterTheWuTang}
              fluid
              alt="Enter the Wu-Tang (36 Chambers)"
              className="album-image"
            />
          </Col>
          <Col md={{ order: 1 }} lg={{ order: 2, span: 5, offset: 1 }} xl={{ order: 2, span: 5, offset: 2 }}>
            {returnAlbumData("Enter the Wu-Tang (36 Chambers)")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1 }} lg={{ order: 1, span: 5 }}>
            {returnAlbumData("Hybrid Theory")}
          </Col>
          <Col xs={{ order: 2 }} md={{ order: 2 }} lg={{ order: 2, span: 5, offset: 1 }} xl={{ order: 2, span: 5, offset: 2 }}>
            <Image
              src={HybridTheoryCover}
              fluid
              alt="Hybrid Theory"
              className="album-image"
            />
          </Col>
        </Row>
        <Row className="item-entry">
          <Col xs={{ order: 2 }} md={{ order: 2 }} lg={{ order: 1, span: 5 }}>
            <Image
              src={PinataCover}
              fluid
              alt="Piñata"
              className="album-image"
            />
          </Col>
          <Col md={{ order: 1 }} lg={{ order: 2, span: 5, offset: 1 }} xl={{ order: 2, span: 5, offset: 2 }}>
            {returnAlbumData("Piñata")}
          </Col>
        </Row>
        <Row className="item-entry">
          <Col md={{ order: 1 }} lg={{ order: 1, span: 5 }}>
            {returnAlbumData("Is This It")}
          </Col>
          <Col xs={{ order: 2 }} md={{ order: 2 }} lg={{ order: 2, span: 5, offset: 1 }} xl={{ order: 2, span: 5, offset: 2 }}>
            <Image
              src={IsThisItCover}
              fluid
              alt="Is this it"
              className="album-image"
            />
          </Col>
        </Row>
      </div>
      <Row className="mb-5 text-center">
        <Col md={4}>
          <a href="/top-movies">Mina top 10 filmer.</a>
        </Col>
        <Col md={4}>
          <a href="/top-games">Mina top 10 TV-spel.</a>
        </Col>
        <Col md={4}>
          <a href="/top-shows">Mina top 10 TV-serier.</a>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Top10Albums;
