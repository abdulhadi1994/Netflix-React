import "./index.css";
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import MoviePage from "./pages/MoviePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieInfo from "./pages/MovieInfo";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import ProtectedRoute from "./components/ProtectedRoute";

function App (){
return (
  <Router>
    <MainContent />
  </Router>
)
}

function MainContent() {
  const [movies1, setMovies1] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  async function fetchMovies(value) {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=13d20677&s=${value}`
      );

      if (data.Response === "True" && data.Search) {
        setMovies1(data.Search);
      } else {
        setMovies1([]);
      }
    } catch (error) {
      console.error(error.message === "Network Error");
    } finally {
      setLoading(false);
    }
  }

  const isLoginPage = location.pathname === "/login";

  return (
    <AppContext.Provider value={{ movies1, setMovies1, fetchMovies, loading }}>
      {!isLoginPage && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute component={<HomePage />} />} />
          <Route path="/moviepage" element={<ProtectedRoute component={<MoviePage />} />} />
          <Route path="/moviepage/:id" element={<ProtectedRoute component={<MovieInfo />} />} />
        </Routes>
        {!isLoginPage && <Footer />}
    </AppContext.Provider>
  );
}

export default App;
