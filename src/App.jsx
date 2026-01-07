import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Ourproducts from "./Component/Ourproducts";
import Combo from "./Component/Combo";
import Contact from "./Component/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import WallNut from "./Component/Wallnut";
import Drygrap from "./Component/Drygrap";

const App = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Ourproducts" element={<Ourproducts/>} />
          <Route path="/WallNut" element={<WallNut/>} />
          <Route path="/Drygrap" element={<Drygrap/>} />
          <Route path="/Combo" element={<Combo />} />
          <Route path="/Contact" element={<Contact/>} />
          
        </Routes>
      
    </>
  );
};

export default App;
