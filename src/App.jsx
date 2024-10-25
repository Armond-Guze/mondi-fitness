import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import Navbar from './Components/Navbar.jsx';
import ExersiceDetail from "./pages/ExcersiseDetail";
import Home from "./pages/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
        {/* routes */}
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        {/* fg */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExersiceDetail />} />
        </Routes>
        <Footer />
      </Box>
     {/* DFG */}
      {/* df */}
      {/* dfdsf */}
      {/* DF */}
    </Router>
  );
};

export default App;
