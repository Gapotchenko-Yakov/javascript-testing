import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Users from "./users/Users.jsx";
import UserDetailsPage from "./pages/UserDetailsPage.jsx";
import AppRouter from "./routes/AppRouter.jsx";

function App() {
  return (
    <div>
      <Link to="/" data-testid="main-link">
        Main
      </Link>
      <br />
      <Link to="/about" data-testid="about-link">
        About
      </Link>
      <br />
      <Link to="/users" data-testid="users-link">
        Users
      </Link>
      <br />
      <br />
      <br />
      <AppRouter />
    </div>
  );
}

export default App;
