import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Invitation01 from "./pages/Invitation01";
import Invitation02 from "./pages/Invitation02";
import Invitation03 from "./pages/Invitation03";
import Invitation04 from "./pages/Invitation04";
import Invitation05 from "./pages/Invitation05";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/invite01" element={<Invitation01 />} />
        <Route path="/invite02" element={<Invitation02 />} />
        <Route path="/invite03" element={<Invitation03 />} />
        <Route path="/invite04" element={<Invitation04 />} />
        <Route path="/invite05" element={<Invitation05 />} />
     
     
        
      </Routes>
    </div>
  );
}

export default App;
