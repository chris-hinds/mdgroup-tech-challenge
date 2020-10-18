import React from "react";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/home";
import BreedGroup from "./pages/breedGroup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breed-group/:id" element={<BreedGroup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
