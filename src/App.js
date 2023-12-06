import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Top10Albums from "./pages/Top10Albums";
import Top10Movies from "./pages/Top10Movies";
import Top10Shows from "./pages/Top10Shows";
import Top10VideoGames from "./pages/Top10VideoGames";
import BlogPost from "./components/BlogPost";
import BrowsePosts from "./pages/BrowsePosts";

function App() {
  const location = useLocation();
  const blogPostData = require("./jsonFiles/blogPosts.json");
  const blogPostArray = blogPostData.value;


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
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<StartPage />} />
        <Route path="/interests/top-albums" element={<Top10Albums />} />
        <Route path="/interests/top-movies" element={<Top10Movies />} />
        <Route path="/interests/top-games" element={<Top10VideoGames />} />
        <Route path="/interests/top-shows" element={<Top10Shows />} />
        <Route path="/interests/posts" element={<BrowsePosts />} />
        {blogPostArray.map((post, index) => (
          <Route
            key={index}
            path={`/interests/posts/${index + 1}`}
            element={<BlogPost post={post} />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
