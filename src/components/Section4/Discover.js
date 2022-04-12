import React from 'react'
import './Discover.css'
import discover from './Discoverapi';
function Discover() {
    return (
        <>
            <div className='discover'>
                {/* discover navbar */}
                <div className='discovernav'>
                    <h1>Discover</h1>
                    <div className='disitem'>
                        <li><i className="fas fa-abacus" style={{marginRight: "5px"}}></i>Category</li>
                        <li>Cheapest<i className="fas fa-angle-down icon"></i></li>
                        <li>Newest<i className="fas fa-angle-down icon"></i></li>
                        <button ><i className="fas fa-filter " style={{marginRight: "5px"}}></i>Filter</button>
                    </div>
                </div>
                {/* discover cards */}
                <div className='discovercard'>
                    {
                        discover.map((data)=>{
                           return <div className='card'>
                                <img src={data.img} alt="" />
                                <div className='firstcontent'>
                                    <h5>{data.title}</h5>
                                    <h5>{data.size}</h5>
                                </div>
                                <hr />
                                <div className='secondcontent'>
                                    <p>{data.time}</p>
                                    <button>{data.btn}</button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className='read'>
                <button>Read more</button>
                </div>
            </div>
        </>
    )
}

export default Discover