import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {


  return (
    <>
      <nav>
        <h1 id='head'><a href="">AR~Developer</a></h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
