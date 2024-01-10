import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Top10Albums from "./pages/Top10Albums";
import Top10Movies from "./pages/Top10Movies";
import Top10Shows from "./pages/Top10Shows";
import Top10VideoGames from "./pages/Top10VideoGames";
import BlogPost from "./components/BlogPost";
import BrowsePosts from "./pages/BrowsePosts";
import NotFound from "./components/NotFound";
import MyInterests from "./pages/MyInterests";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const location = useLocation();
  const blogPostData = require("./jsonFiles/blogPosts.json");
  const blogPostArray = blogPostData.value;

  const [firebasePosts, setFirebasePosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setFirebasePosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  useEffect(() => {
    if (firebasePosts.length > 0) {
      console.log(firebasePosts);
    }
  }, [firebasePosts]);

  const ScrollToTop = () => {
    const { location } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <StartPage />
              </motion.div>
            }
          />
          <Route
            path="/interests"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <MyInterests />
              </motion.div>
            }
          />
          <Route
            path="/interests/top-albums"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Top10Albums />
              </motion.div>
            }
          />
          <Route
            path="/interests/top-movies"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Top10Movies />
              </motion.div>
            }
          />
          <Route
            path="/interests/top-games"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Top10VideoGames />
              </motion.div>
            }
          />
          <Route
            path="/interests/top-shows"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Top10Shows />
              </motion.div>
            }
          />
          <Route
            path="/interests/posts"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <BrowsePosts />
              </motion.div>
            }
          />
          {blogPostArray.map((post, index) => (
            <Route
              key={index}
              path={`/interests/posts/${post.postID}`}
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <BlogPost post={post} />
                </motion.div>
              }
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
