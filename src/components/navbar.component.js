import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "../images/bitmoji22.png";
export default class Navbar extends Component {

  render() {
    return (
      <>
      {/* <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav> */}


      <header id="header" className="d-flex align-items-center ">
    <div className="container-fluid container-xxl d-flex align-items-center justify-content-center">

      <div id="logo" className="me-auto">
        
        <h1><a href="index.html">Fit<span>Bit</span></a></h1>
        {/* <a href="index.html" className="scrollto"><img src={logo} alt="" title=""/></a> */}
      </div>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero"><Link to="/" className="nav-link">Home</Link></a></li>
       

          {/* <li><a className="nav-link scrollto" href="#speakers">
          <Link to="/" className="navbar-brand">ExcerTracker</Link>
  </a></li> */}

          {/* <li><a className="nav-link scrollto" href="#speakers">
          <Link to="/" className="nav-link">Exercises</Link>

          </a></li> */}
          <li><a className="nav-link scrollto" href="#schedule">
          <Link to="/create" className="nav-link">Create Schedule</Link>
          </a></li>

          <li><a className="nav-link scrollto" href="#venue">

          <Link to="/user" className="nav-link">Register User</Link>
          </a></li>

          <li><a className="nav-link scrollto" href="#about">About</a></li>

          {/* <li><a className="nav-link scrollto" href="#hotels">Hotels</a></li>
          <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
          <li><a className="nav-link scrollto" href="#supporters">Sponsors</a></li> */}
         
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <a className="buy-tickets scrollto" href="mailto:itznihal143@gmail.com">Connect Us</a>
    </div>
  </header>







      </>
    );
  }
}