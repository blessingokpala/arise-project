import React from 'react';
import Logo from '../arise-logo.png';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="arise-navbar">
  <a className="navbar-brand" href="#"><img src={Logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/technologies">Technologies</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/projects">Projects</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar

