import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // استيراد BrowserRouter و Route و Routes
import Header from "./pages/header";
import Home from "./pages/home";
import Logs from "./pages/logs";
import Footer from "./pages/footer";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
