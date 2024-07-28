import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Users from "./users/Users.jsx";
import UserDetailsPage from "./pages/UserDetailsPage.jsx";
import AppRouter from "./routes/AppRouter.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <AppRouter />
    </div>
  );
}

export default App;
