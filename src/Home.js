import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from './logo.jpeg';

function Home() {

  return (
    <main className="home-page">
      <div className="image-collage">
        <img src={logo} alt="Logo" />
      </div>

      <div className="contact-section">
        <h2>Contact Me</h2>
        <address>
          123 Gaming Street<br />
          Cityville, Ontario 12345<br />
          Phone: (123) 456-7890<br />
          Email: info@awesomegame.com
        </address>
      </div>
    </main>
  );
}

export default Home;
