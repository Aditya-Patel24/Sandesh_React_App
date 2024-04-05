import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Importing the CSS file

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container-fluid">
          <Link className="" to="/business">
            <img src="src\assets\sandesh.png" alt="Sandesh" style={{width:"120px",height:"auto", paddingBottom: "2px", marginRight:"50px", WebkitFilter:" drop-shadow(3px 3px 3px #111111)",
        filter: "drop-shadow(3px 3px 3px #111111)"}} />
          </Link>
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;