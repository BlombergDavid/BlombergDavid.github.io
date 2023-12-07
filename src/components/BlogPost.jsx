import React from "react";
import "./BlogPost.css";
import Footer from "../components/Footer";
import Top10Header from "../components/Top10Header";
import { Image, Row, Col } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer";
import { returnListOfStrings, renderDescription } from "../functions";
import BackButton from "./BackButton";

const BlogPost = ({ post }) => {
  const {
    title,
    intro,
    mainTextPart1,
    mainTextPart2,
    images,
    author,
    timestamp,
    type,
    videoUrl,
  } = post;

  return (
    <>
      <Top10Header />
      <div className="post-container">
        <h1 className="post-title">{title}</h1>
        <p className="post-intro-section">{intro}</p>
        <p className="post-type">
          <i>{returnListOfStrings(type)}</i>
        </p>
        <Row className="justify-content-center mt-3 mb-5">
          <Col md={10}>
            <Image
              src={images[0]}
              fluid
              alt={title}
              className="post-image"
              rounded
            ></Image>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <p className="post-main-text">{renderDescription(mainTextPart1)}</p>
          </Col>
        </Row>
        <VideoPlayer youtubeLink={videoUrl} width="100%" height="45vh" />
        <Row className="justify-content-center">
          <Col md={10}>
            <p className="post-main-text">{renderDescription(mainTextPart2)}</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3 mb-5">
          <Col md={10}>
            <Image
              src={images[1]}
              fluid
              alt={title}
              className="post-image-2"
              rounded
            ></Image>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <BackButton link="/interests/posts" text="Tillbaka till inlägg" />
          </Col>
          <Col>
            <p className="post-author-name"> {author}</p>
          </Col>
        </Row>
        <p className="post-time-of-publishing">{timestamp}</p>
      </div>
      <Footer />
    </>
  );
};
export default BlogPost;
