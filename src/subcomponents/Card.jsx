import React from 'react'
import pic from '../assets/interiordesign.jpg'

function Card() {
  return (
    <div className='bg-white mb-4 flex items-center w-[45vh] text-[#424243]
     flex-col md:flex-row md:w-[70vw] mx-auto md:gap-[3vw] '> 
      <img src={pic} className='w-[45vh] md:w-[30vw]  ' />


      <div className='flex flex-col items-center md:items-start mt-2 mb-2 '>
        <div className='text-[3vh] md:text-[3vw] font-medium ' >Interior and Exterior design</div>
        <div className=' text-[1.75vh] md:text-[1.5vw] mt-2 w-[45vh] text-center md:text-left'>Enhancing aesthetics and functionality for both commercial and residential spaces with modern and timeless designs.</div>
      </div>
    </div>
  )
}

export default Card