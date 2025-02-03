import React from "react";
import { Link } from 'react-router-dom'; // Only import Link, no need for Router here
import './style/header.css'; // Make sure to add the correct CSS file


function Header() {
  return ( 
    <header className="header">
      <div className="logo-container">
        
        <h1 className="project-name">Worked constraints</h1>
      </div>
      
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    
  );
}

export default Header;