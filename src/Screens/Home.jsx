import React from 'react'
import Landing from '../Components/home/Landing'
import OurServices from '../Components/home/OurServices'
import "./screens.css";

function Home() {
  return (
    <div id='home'>
      <Landing/>
      <OurServices/>
    </div>
  )
}

export default Home