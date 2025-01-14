import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Explore from "./pages/Explore";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
