import React from 'react';
import './Section3.css';
import icons from '../../assets/icon.png'

function Section3() {
  return (
    <div id='sec3'>
      <h1>Getting Started</h1>
      <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum</p>
      <div className='cardsContainer'>
        <div className='cards'>
          <div className='box'>
            <img src={icons} alt="" />
          </div>
          <p>Connect your wallet</p>
        </div>
        <div className='cards'>
          <div className='box'>
            <img src={icons} alt="" />
          </div>
          <p>Connect your wallet</p>
        </div>
        <div className='cards'>
          <div className='box'>
            <img src={icons} alt="" />
          </div>
          <p>Connect your wallet</p>
        </div>
        <div className='cards'>
          <div className='box'>
            <img src={icons} alt="" />
          </div>
          <p>Connect your wallet</p>
        </div>
      </div>
    </div>
  )
}

export default Section3