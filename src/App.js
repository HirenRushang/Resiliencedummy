import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Navbar2, Footer, Manifest, SaviourPlus } from "./components";




const App = () => {
  return (
    <>
        <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saviourplus" element={<SaviourPlus />} />
        <Route path="/manifest" element={<Manifest />} />
        
      </Routes>
      <Footer />   


     
     
 
   
    
    </>
  );
};

export default App;
