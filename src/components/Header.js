import React from 'react';
import Typed from 'react-typed';

function Header() {
  return (
      <div className="header-container">
        <div className="hero-info">
          <h1>light up</h1>
          <Typed 
              className="typed-text"
              strings={["Shine", "and", "Glow..."]}
              typeSpeed={50}
              backSpeed={70}
              loop
          />
          <div className="button">
          <button type="button" class="btn btn-outline-dark">CONTACT US</button>
          </div>
        </div>
      </div>
  )
}

export default Header
