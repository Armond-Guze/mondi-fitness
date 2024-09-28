import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";
import "./app.css";

import Navbar from "./components/Navbar";
import ExersiceDetail from "./pages/ExcersiseDetail";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Exersices from "./components/Exercises";
import Hero from "./components/Hero";
import SearchExercises from "./components/SearchExercises";

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
