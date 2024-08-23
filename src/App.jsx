import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./Components/Navbar";
import ExersizeDetail from "./pages/ExersizeDetail";
import Home from "./pages/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Box width="400px" sx={{ width: { xl: '1488px' }}} m='auto'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercize/:id" element={<ExersizeDetail />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
