import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Top10Albums from "./pages/Top10Albums";
import Top10Movies from "./pages/Top10Movies";
import Top10Shows from "./pages/Top10Shows";
import Top10VideoGames from "./pages/Top10VideoGames";

function App() {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<StartPage />} />
      <Route path="/top-albums" element={<Top10Albums />} />
      <Route path="/top-movies" element={<Top10Movies />} />
      <Route path="/top-games" element={<Top10VideoGames />} />
      <Route path="/top-shows" element={<Top10Shows />} />
    </Routes>
  );
}

export default App;
