import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="brand">
          <span className="name">Akshay Tiwari</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="about">About</a>
          </li>
          <li className="navbar-item">
            <a href="experience">Experience</a>
          </li>
          <li className="navbar-item">
            <a href="#work">Work</a>
          </li>
          <li className="navbar-item">
            <a href="#projects">Projects</a>
          </li>
		  <li className="navbar-item">
		  	<a href="#resume">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
