import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./Components/Navbar";
import ExersiceDetail from "./pages/ExersizeDetail";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Exersices from "./Components/Exersices";
import Hero from "./Components/Hero";
import SearchExercises from "./Components/SearchExercises";

const App = () => {
  return (
    <Router>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExersiceDetail />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
