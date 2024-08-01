import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState, useEffect } from "react";
import AppContext from "./context/AppContext";
import GenresPage from "./pages/GenresPage";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      name: "",
      username: "",
      email: "",
      phone: ""
    }
  );
  const [selectedGenres, setSelectedGenres] = useState(
    JSON.parse(localStorage.getItem("selectedGenres")) || []
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
  }, [selectedGenres]);

  return (
    <>
      <AppContext.Provider
        value={{ user, setUser, selectedGenres, setSelectedGenres }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/home" element={<RegisterPage />} />
            <Route path="/dashboard" element={<RegisterPage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/carousel" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
