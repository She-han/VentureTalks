import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Invitation01 from "./pages/Invitation01";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/invite01" element={<Invitation01 />} />
     
     
        
      </Routes>
    </div>
  );
}

export default App;
