import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BrowsePosts.css";
import Footer from "../components/Footer";
import Top10Header from "../components/Top10Header";

const BrowsePosts = () => {
  const blogPostData = require("../jsonFiles/blogPosts.json");
  const blogPostArray = blogPostData.value;
  const itemsPerRow = blogPostArray.length < 6 ? 1 : 3;

  return (
    <>
      <Top10Header />
      <div className="browse-posts-container">
        <h1>Post List</h1>
        <p>This is a list of posts:</p>
        {itemsPerRow === 1 ? (
          blogPostArray.map((post, index) => (
            <Row className="blogpost-item-container">
              <Col>
                <Link
                  key={index}
                  className="post-link"
                  to={`/interests/posts/${index + 1}`}
                >
                  {post.title}
                </Link>
                <p className="post-preview-description">{post.intro}</p>
                <p className="post-preview-timestamp">{post.timestamp}</p>
              </Col>
              <Col>
                <Image
                  src={post.images[0]}
                  fluid
                  alt={post.title}
                  className="preview-image"
                ></Image>
              </Col>
            </Row>
          ))
        ) : (
          <Row className="blogpost-item-row-container">
            {blogPostArray.map((post, index) => (
              <Col style={{ backgroundColor: "rgba(150, 150, 150, 0.1)" }} className="mb-5 px-5" lg={6} xl={4}>
                <Link
                  key={index}
                  className="post-link"
                  to={`/interests/posts/${index + 1}`}
                >
                  {post.title}
                </Link>
                <p className="post-preview-row-description">{post.intro}</p>
                <p className="post-preview-timestamp">{post.timestamp}</p>
                <Image
                  src={post.images[0]}
                  fluid
                  alt={post.title}
                  className="preview-image"
                ></Image>
              </Col>
            ))}
          </Row>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BrowsePosts;
