import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../images/logo.jpg';
import './header.css'




export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand me-3" to="/" >
            <img src={logo}  className="logo" alt="Logo" height="140px" width="149px" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/test">Test Series</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/practice">Carriers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/answer-writing">About Us </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> Contact us</Link>
              </li>
            </ul>
            <a href="login.html" className="btn btn-primary ms-lg-3" id="nav-btn"> <span style={{ marginRight: '5px' }}><i className="fa fa-user-circle-o" aria-hidden="true"></i></span>
            <span style={{
                marginRight: '10px'
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="25px" width="25px" >
            <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15
             9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 
             0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3
              32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 
              53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/
              
              ></svg>
            </span>Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
