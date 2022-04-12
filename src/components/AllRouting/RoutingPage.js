import React from 'react'
import Navbar from '../Navbar/Navbar'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Hotaction';
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Discover';
import Footer from "../Footer/Footer";

function RoutingPage() {
  return (
    <>
    <Navbar />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Footer />
    </>
  )
}

export default RoutingPage