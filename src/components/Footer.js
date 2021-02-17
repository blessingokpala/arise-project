import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
      <h4>FOOTER</h4>
        <div className="row">
          {/* Column 1. react comment in curly braces*/}
          <div className="col">
          <h3>lorem</h3>
            <ul className="list-unstyled">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          {/* col 2 */}
          <div className="col">
          <h3>lorem</h3>
            <ul className="list-unstyled">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
      </div>
      <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Arise | All Rights Reserved | Privacy | Terms & Conditions
            </p>
          </div>
    </div>
    </div>
  )
}

export default Footer
