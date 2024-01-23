import React from "react";
import "./BlogPost.css";
import Footer from "../components/Footer";
import Top10Header from "../components/Top10Header";
import { Image, Row, Col } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer";
import { returnListOfStrings, renderDescription } from "../functions";
import MusicSamplesPost from "./CustomBlogPosts/MusicSamplesPost";
import { CommentField } from "./CommentField";

const BlogPost = ({ post }) => {
  const {
    title,
    intro,
    paragraph1,
    paragraph2,
    imageLinks,
    author,
    timestamp,
    type,
    videoUrl,
    score,
    useCustomFormat,
    customComponentName,
  } = post;

  const DynamicComponent = ({ customComponentName }) => {
    // Use a switch statement or if-else conditions to determine the component based on the string
    let ComponentToRender;

    switch (customComponentName) {
      case "MusicSamplesPost":
        ComponentToRender = MusicSamplesPost;
        break;
      default:
        ComponentToRender = MusicSamplesPost;
        break;
    }

    return <ComponentToRender />;
  };

  return (
    <>
      <Top10Header />
      {useCustomFormat !== true ? (
        <div className="post-container">
          <h1 className="post-title">{title}</h1>
          <p className="post-intro-section">{intro}</p>
          <p className="post-type">
            <i>{returnListOfStrings(type)}</i>
          </p>
          <Row className="justify-content-center mt-3 mb-5">
            <Col md={10}>
              <Image
                src={imageLinks[0]}
                fluid
                alt={title}
                className="post-image"
                rounded
              ></Image>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10}>
              <p className="post-main-text">{renderDescription(paragraph1)}</p>
            </Col>
          </Row>
          <VideoPlayer youtubeLink={videoUrl} width="100%" height="45vh" />
          <Row className="justify-content-center">
            <Col md={10}>
              <p className="post-main-text">{renderDescription(paragraph2)}</p>
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            <Col md={10}>
              <Image
                src={imageLinks[1]}
                fluid
                alt={title}
                className="post-image-2"
                rounded
              ></Image>
            </Col>
          </Row>
          {!!score ? (
            <Row className="justify-content-center mt-3 mb-5">
              <Col md={10}>
                <p className="post-score">{score}</p>
              </Col>
            </Row>
          ) : null}
          <Row className="pt-3">
            <Col>
              <p className="post-author-name"> {author}</p>
            </Col>
          </Row>
          <p className="post-time-of-publishing">
            {timestamp
              .toDate()
              .toLocaleString("sv-SE", {
                timeZone: "Europe/Stockholm",
              })
              .substring(0, 10)}
          </p>
          <CommentField />
        </div>
      ) : (
        <DynamicComponent customComponentName={customComponentName} />
      )}
      <Footer />
    </>
  );
};
export default BlogPost;
