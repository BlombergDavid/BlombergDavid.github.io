import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BrowsePosts.css";
import Footer from "../components/Footer";
import Top10Header from "../components/Top10Header";
import { returnListOfStrings } from "../functions";
import BlogPostFilter from "../components/BlogPostFilter";
import BackButton from "../components/BackButton";

const BrowsePosts = () => {
  const blogPostData = require("../jsonFiles/blogPosts.json");
  const blogPostArray = blogPostData.value;
  const itemsPerRow = blogPostArray.length < 6 ? 1 : 3;
  const [filteredPosts, setFilteredPosts] = useState(blogPostArray);

  const filterAndSortPosts = (posts, filterType, sortDescending = true) => {
    // Filter based on type
    const filteredPosts = filterType
      ? posts.filter((post) => post.type.includes(filterType))
      : posts;

    // Sort based on timestamp
    const sortedPosts = filteredPosts.sort((postA, postB) => {
      const timestampA = new Date(postA.timestamp).getTime();
      const timestampB = new Date(postB.timestamp).getTime();

      // Sort in descending order by default
      return sortDescending ? timestampB - timestampA : timestampA - timestampB;
    });

    return sortedPosts;
  };

  const handleFilterChange = (filterType) => {
    const newFilteredPosts = filterAndSortPosts(
      blogPostArray,
      filterType,
      true
    );
    setFilteredPosts(newFilteredPosts);
  };

  return (
    <>
      <Top10Header />
      <div className="browse-posts-container">
        <Row>
          <Col>
            <h1>Mina Inlägg</h1>
          </Col>
          <Col>
            <BlogPostFilter
              posts={blogPostArray}
              onFilterChange={handleFilterChange}
            />
          </Col>
        </Row>
        <p>This is a list of posts:</p>
        {itemsPerRow === 1 ? (
          filteredPosts.map((post, index) => (
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
                <p className="post-preview-description">
                  {returnListOfStrings(post.type)}
                </p>
                <p className="post-preview-timestamp">{post.timestamp}</p>
              </Col>
              <Col>
                <Image
                  src={post.images[0]}
                  fluid
                  alt={post.title}
                  className="preview-image"
                  rounded
                ></Image>
              </Col>
            </Row>
          ))
        ) : (
          <Row className="blogpost-item-row-container">
            {filteredPosts.map((post, index) => (
              <Col
                style={{ backgroundColor: "rgba(150, 150, 150, 0.1)" }}
                className="mb-5 px-5"
                lg={6}
                xl={4}
              >
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
                  rounded
                ></Image>
              </Col>
            ))}
          </Row>
        )}
        <Row className="pt-3">
          <Col>
            <BackButton link="/" text="Tillbaka till startsidan" />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default BrowsePosts;
