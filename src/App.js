import React from "react";

// UI Elements
import { CSSReset, theme, ThemeProvider } from "@chakra-ui/core";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/home";
import BreedGroup from "./pages/breedGroup";

// Components
import Layout from "./components/layout";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: "#723c0d",
    grey: "#999999",
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/breed-group/:id" element={<BreedGroup />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
