import React from 'react'
import "./header.css"
import Btn from './Btn'
import Me from "../../assets/IMG-20221204-WA0008.jpg"
import Headersocials from './Headersocials'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <div className="header__intro">
          <h5 data-aos="fade-down">Hello I'm</h5>
          <h1 data-aos="zoom-out">Augustine John</h1>
          <h5 className="text-light">
            <TypeAnimation
              sequence={[
                'Front-End Developer',
                2000,
                'Back-End Developer',
                2000,
                'React Developer',
                2000,
                'App Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h5>
          <Btn />
        </div>

        <Headersocials />

        <div className="me">
          {/* Orbital Rings with Dots */}
          <div className="ring one" data-aos="zoom-out">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="ring two" data-aos="zoom-out">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="ring three" data-aos="zoom-out">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          
          {/* Centered Circular Image */}
          <div className="me-image" data-aos="fade-in">
            <img src={Me} alt="Augustine John" className="ME" />
          </div>
        </div>

        <a href="#footer" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header