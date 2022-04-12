import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className='content'>
        <div className="title">
          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quo voluptatibus officia vero nemo reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic non fugit totam ipsum maxime facere enim error, sapiente voluptatibus et porro optio.</h3>
        </div>
        <div className="box">
          <h1>Marketplace</h1>
          <div>
            <li>Home</li>
            <li>Activity</li>
            <li>Discover</li>
            <li>Learn More</li>
          </div>
        </div>
        <div className="box">
          <h1>Company</h1>
          <div>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
          </div>
        </div>
        <div className="box">
          <h1>Contact</h1>
          <div>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Email</li>
          </div>
        </div>
      </div>
      <hr />
      <div className='icons'>
        <div className='sicon'>
        <i className="fab fa-github iii"></i>
        <i className="fab fa-facebook iii"></i>
        <i className="fab fa-linkedin iii"></i>
        </div>
        <div className='copy'>
         <h3>Copyright 2022 Gaslur</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer