import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import pic7 from './assets/18.jpg';
import { NavLink } from 'react-router-dom';
import Typed from 'typed.js';

const Home = () => {
  const typedElement = useRef(null);
  const [colorClass, setColorClass] = useState('color1');

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["M.ABDULLAH", "CH ABDULLAH"],
      typeSpeed: 100,
      backSpeed: 70,
      loop: true,
      onStringTyped: (arrayPos) => {
        setColorClass((prevClass) => (prevClass === 'color1' ? 'color2' : 'color1'));
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="home">
        <div className="aboutme">
          <div className="texxt">
            <h2>Hi!</h2>
            <h1>I'M <span className={`span ${colorClass}`} ref={typedElement}></span></h1>
            <p>I am from Pakistan. My city is Faisalabad. <br />
               I graduated from Falcon School System. <br/>
               I am a Front End Developer and UI/UX Developer. <br />
               I create every type of website according to your vision. </p>
            <button><NavLink to="/contact">Contact me</NavLink></button>

            <div className="iconsdiv">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-square-twitter"></i>
              <i className="fa-brands fa-dribbble"></i>
            </div>
          </div>
        </div>
        <div className="picme">
          <img src={pic7} alt="My Picture" />
        </div>
      </div>
    </>
  );
}

export default Home;
