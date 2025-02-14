import React from 'react'
import Landing from '../Components/home/Landing'
import OurServices from '../Components/home/OurServices'
import "./screens.css";
import Reasons from '../Components/home/Reasons';
import Statistics from '../Components/home/Statistics';
import Testimonials from '../Components/home/Testimonials';
import Awards from '../Components/home/Awards';

function Home() {
  return (
    <div id='home'>
      <Landing/>
      <OurServices/>
      <Statistics/>
      <Reasons/>
      <Testimonials/>
      <Awards/>
    </div>
  )
}

export default Home