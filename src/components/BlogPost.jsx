import React from "react";
import "./BlogPost.css";
import Footer from "../components/Footer";
import Top10Header from "../components/Top10Header";
import { Image } from "react-bootstrap";

const BlogPost = ({ post }) => {
  const { title, intro, mainText, images, author, timestamp } = post;

  return (
    <>
      <Top10Header />
      <div className="post-container">
        <h1 className="post-title">{title}</h1>
        <p className="post-intro-section">{intro}</p>
        <Image
          src={images[0]}
          fluid
          alt={title}
          className="post-image"
        ></Image>
        <p className="post-main-text">{mainText}</p>
        <Image
          src={images[1]}
          fluid
          alt={title}
          className="post-image-2"
        ></Image>
        <p className="post-author-name">Author: {author}</p>
        <p className="post-time-of-publishing">Timestamp: {timestamp}</p>
      </div>
      <Footer />
    </>
  );
};
export default BlogPost;
