import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import ExersiceDetail from "./pages/ExcersiseDetail";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExersiceDetail />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
