import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../Components/Hero";
import SearchExercises from "../Components/SearchExercises";
import Exersices from "../Components/Exersices";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exersices />
    </Box>
  );
};

export default Home;
