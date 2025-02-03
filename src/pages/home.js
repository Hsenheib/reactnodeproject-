import React from "react";
import { Link } from "react-router-dom";
import './style/home.css'; 

function Home() {
    return(
        <div className="container">
        <button><Link to="/logs" className="logs">Logs</Link></button>
        <button><Link to="/RequestShift" className="RequestShift">Request Shift</Link></button> 
        </div>
    );
}

export default Home;
