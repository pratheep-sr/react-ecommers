import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Ourproducts from "./Component/Ourproducts";
import Combo from "./Component/Combo";
import Contact from "./Component/Contact";
import Karasev from "./Component/Karasev";
import Cornmixture from "./Component/Cornmixture";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Ourproducts" element={<Ourproducts/>} />
          <Route path="Karasev" element={<Karasev/>} />
          <Route path="/Cornmixture" element={<Cornmixture/>} />
          <Route path="/Combo" element={<Combo />} />
          <Route path="/Contact" element={<Contact/>} />
          
        </Routes>
      
    </>
  );
};

export default App;
