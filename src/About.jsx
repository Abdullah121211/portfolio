import React, { useEffect, useRef, useState } from 'react';
import './about.css';
import CV from './assets/cv.pdf';
import pic9 from './assets/12.jpeg';
import Typed from 'typed.js';

const About = () => {
  const typedElement = useRef(null);
  const [colorClass, setColorClass] = useState('color1');

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Front End Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 70,
      loop: true,
      onStringTyped: (arrayPos) => {
        // Toggle between color1 and color2 classes
        setColorClass((prevClass) => (prevClass === 'color1' ? 'color2' : 'color1'));
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  

  return (
    <>
      <div className="div1">
        <div className="photoab">
          <img src={pic9} alt="Profile" />
        </div>
        <div className="details">
          <h1>My Bio</h1>
          <h3>I'm <span>ABDULLAH</span></h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the blind texts. Separated
            <br />
            they live in Bookmarksgrove right at the coast of the Semantics,
            <br />
            a large language ocean.
          </p>
          <hr />
          <p>
            A small river named Duden flows by their place and supplies it
            <br />
            with the necessary regelialia. It is a paradisematic country,
            <br /> in which roasted parts of sentences fly into your mouth.
          </p>
          <h2>I'm <span className={`span ${colorClass}`} ref={typedElement}></span></h2>

<div className="skall">
<h2>Html 5</h2>
<div className="items"><div className='inner_item1'></div></div>
<h2>Css 3</h2>
<div className="items"><div className='inner_item2'></div></div>
<h2>Java Script</h2>
<div className="items"><div className='inner_item3'></div></div>
<h2>BootsStrap</h2>
<div className="items"><div className='inner_item4'></div></div>
<h2>ReactJs</h2>
<div className="items"><div className='inner_item5'></div></div>
</div>

          <div className="but">
            <button>
              <a href="./Contact">Hire Me</a>
            </button>
            <button>
              <a href={CV} download>Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
