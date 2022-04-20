import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
