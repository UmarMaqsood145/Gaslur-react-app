import React from 'react'
import './Hotaction.css'
import Hotapi from './Hotactionapi';
function Hotaction() {
  return (
    <>
    
    <div className='hotaction'>
                {/* discover navbar */}
                <div className='discovernav'>
                    <h1>Hot auction</h1>
                    <div className='view'>
                        <button>view all 	&#8594;</button>
                    </div>
                </div>
                {/* discover cards */}
                <div className='discovercard'>
                    {
                      Hotapi.map((Hotapi1)=>{
                           return <div className='viewcard'>
                                <img src={Hotapi1.img} alt="" />
                                <div className='firstcontent1'>
                                    <h5>{Hotapi1.title}</h5>
                                    <h5>{Hotapi1.size}</h5>
                                </div>
                                <hr />
                                <div className='secondcontent1'>
                                    <p>{Hotapi1.time}</p>
                                    <button>{Hotapi1.btn}</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
    
    </>
  )
}

export default Hotaction