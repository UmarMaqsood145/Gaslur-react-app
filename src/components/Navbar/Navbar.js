import React, { useState } from 'react';
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <h1>GASLUR</h1>
      <div className="openmanue"><i className={show ? "fas fa-times" : "fas fa-bars"} onClick={() => setShow(!show)} ></i></div>
      <div className={show ? "nav-items active" : "nav-items"}>
        <div className='items'>
          <li><a href="#">HOME</a></li>
          <li><a href="#">MY PROFILE</a></li>
          <li><a href="#">ACTIVITY</a></li>
          <li><a href="#">HOW IT WORKS</a></li>
        </div>
        <div className='btns'>
          <button>CREATE</button>
          <button>SIGN IN</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar