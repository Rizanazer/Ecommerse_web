import React, { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import HeroContent from "./assets/components/Hero";
import FilterMenu from "./assets/components/Filter";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <FilterMenu/>
    </div>
  );
};

export default App;
