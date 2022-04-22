import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Article from "./assets/pages/Article";
import Profil from "./assets/pages/Profil";
import Categorie from "./assets/pages/Categorie";
const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/categorie" element={<Categorie />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
