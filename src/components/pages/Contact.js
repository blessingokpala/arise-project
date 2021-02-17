import React from 'react';

function Contact() {
  return (
    <div className="container" id="contact">
      <div class="card">
        <div className="card-body">
          <h1>CONTACT US</h1>
          <div>
            <div className="form-group">
            <label for="name" placeholder="First name">First Name</label>
            <input type="name" className="form-control" id="name" />
            <label for="name" placeholder="Last name">Last Name</label>
            <input type="name" className="form-control" id="name" />
              <label for="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
              <label for="message" placeholder="message name">Message</label>
            <textarea rows="5" type="message" className="form-control" id="message" />
            </div>
        <button id="submit-button" type="submit" className="btn">SUBMIT</button>
  </div>
        </div>
      </div>
    </div>
    
  )
}

export default Contact
