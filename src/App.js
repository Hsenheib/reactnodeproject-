import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/header";
import Home from "./pages/home";
import Logs from "./pages/logs";
import Footer from "./pages/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import RequestShift from "./pages/RequestShift";

function App() {
  const [selectedShifts, setSelectedShifts] = useState({});

  return (
    <Router> 
      <div className="App">
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs selectedShifts={selectedShifts} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/RequestShift" element={<RequestShift selectedShifts={selectedShifts} setSelectedShifts={setSelectedShifts} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
