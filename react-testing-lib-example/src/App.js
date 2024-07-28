import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <div>
      <Link to="/" data-testid="main-link">
        Main
      </Link>
      <Link to="/about" data-testid="about-link">
        About
      </Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
