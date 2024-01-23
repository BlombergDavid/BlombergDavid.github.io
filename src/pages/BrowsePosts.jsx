import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BrowsePosts.css";
import Footer from "../components/Footer";
import Top10Header from "../components/Top10Header";
import { returnListOfStrings, truncateString } from "../functions";
import BlogPostFilter from "../components/BlogPostFilter";
import BackButton from "../components/BackButton";
import { db } from "../firebase-config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const BrowsePosts = () => {
  const [itemsPerRow, setItemsPerRow] = useState(1);

  const [firebasePosts, setFirebasePosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getPosts = async () => {
      // const data = await getDocs(postsCollectionRef);
      const orderedQuery = query(
        collection(db, "posts"),
        orderBy("timestamp", "desc")
      );
      const data = await getDocs(orderedQuery);
      setFirebasePosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setFilteredPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setItemsPerRow(firebasePosts.length < 6 ? 1 : 3);
  }, [firebasePosts]);

  const filterAndSortPosts = (posts, filterType, sortDescending = true) => {
    // Filter based on type
    const filteredPosts = filterType
      ? posts.filter(
          (post) =>
            post &&
            post.type &&
            Array.isArray(post.type) &&
            post.type.includes(filterType)
        )
      : posts;

    // Sort based on timestamp
    const sortedPosts = filteredPosts.sort((postA, postB) => {
      const timestampA = new Date(
        postA.timestamp
          .toDate()
          .toLocaleString("sv-SE", {
            timeZone: "Europe/Stockholm",
          })
          .substring(0, 10)
      ).getTime();
      const timestampB = new Date(
        postB.timestamp
          .toDate()
          .toLocaleString("sv-SE", {
            timeZone: "Europe/Stockholm",
          })
          .substring(0, 10)
      ).getTime();

      // Sort in descending order by default
      return sortDescending ? timestampB - timestampA : timestampA - timestampB;
    });

    return sortedPosts;
  };

  const handleFilterChange = (filterType) => {
    const newFilteredPosts = filterAndSortPosts(
      firebasePosts,
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
          <Col xs={6} lg={3}>
            <h1 className="browse-posts-title">Mina Inlägg</h1>
          </Col>
          <Col xs={6} lg={3} className="d-flex align-items-center">
            <BlogPostFilter
              posts={firebasePosts}
              onFilterChange={handleFilterChange}
            />
          </Col>
        </Row>
        {itemsPerRow === 1 ? (
          filteredPosts.map((post, index) => (
            <Row className="blogpost-item-container">
              <Col xs={12} md={6} xl={8}>
                <Link
                  key={index}
                  className="post-link"
                  to={`/interests/posts/${post.id}`}
                >
                  {post.title}
                </Link>
                <p className="post-preview-description">
                  {truncateString(post?.intro, 200)}
                </p>
                <p className="post-preview-description">
                  <i>{returnListOfStrings(post.type)}</i>
                </p>
                <p className="post-preview-timestamp">
                  {post.timestamp
                    .toDate()
                    .toLocaleString("sv-SE", {
                      timeZone: "Europe/Stockholm",
                    })
                    .substring(0, 10)}
                </p>
              </Col>
              <Col>
                <Image
                  src={post.imageLinks[0]}
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
                  to={`/interests/posts/${post.id}`}
                >
                  {post.title}
                </Link>
                <p className="post-preview-row-description">{post.intro}</p>
                <p className="post-preview-description">
                  <i>{returnListOfStrings(post.type)}</i>
                </p>
                <p className="post-preview-timestamp">
                  {post.timestamp
                    .toDate()
                    .toLocaleString("sv-SE", {
                      timeZone: "Europe/Stockholm",
                    })
                    .substring(0, 10)}
                </p>
                <Image
                  src={post.imageLinks[0]}
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
            <BackButton link="/interests" text="Tillbaka" />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default BrowsePosts;
