import React from "react";
import { Link } from "react-router-dom";
import './style/home.css'; 

function Home() {
    return(
        <div className="container">
        <Link to="/logs" className="logs">Logs</Link>
        </div>
    );
}

export default Home;
