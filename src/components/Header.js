import React from 'react';
import Typed from 'react-typed';
import { Button } from '@material-ui/core';

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
              loop/>
          <Button className="header-button" variant="contained" color="primary">CONTACT US</Button>
          </div>
        </div>
      
  )
}

export default Header
