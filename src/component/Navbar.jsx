import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Importing the CSS file
import sandeshLogo from '../assets/sandesh.png';

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container-fluid  nav-container">
          <div className="logo-container">
            <Link className="" to="/business">
              <img src={sandeshLogo} alt="Sandesh" style={{width:"120px",height:"auto",  WebkitFilter:" drop-shadow(3px 3px 3px #111111)",
              filter: "drop-shadow(3px 3px 3px #111111)"}} />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/general"> Home </Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology </Link> </li>
            </ul>
           </div>
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
          
        </div>
         
    
      </nav>
    </div>
  );
}

export default Navbar;