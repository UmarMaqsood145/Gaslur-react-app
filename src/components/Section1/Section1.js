import React from 'react';
import './Section1.css';

function Section1() {
  return (
    <div id='section1'>
        <div className='contentBox'>
            <h1>Discover, Collect, and chaerity in extraordinary NFT marketplace</h1>
            <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
            <button className='explore'>Explore</button>
            <button className='create'>Create</button>
        </div> 
        <div className='imgBox'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/RYB.png/250px-RYB.png" alt="" />
            <div className='smallBox'>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <div>
                        <p>Umar</p>
                        <p>0.21 Weth</p>
                    </div>
                </div>
                <div>
                    <p>WE ARE HERE</p>
                    <p style={{marginLeft:"40px"}}><i className="fal fa-heart" style={{marginRight:'5px'}}></i>25</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1