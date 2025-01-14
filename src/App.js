import Home from "./pages/Home";
import About from "./pages/About";

import Join from "./pages/Join";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />} />   
          <Route path="/about" element={<About />} />
          
          <Route path="/join" element={<Join />} /> 
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;