import React from 'react'
import img1 from '../../assets/interiordesign.jpg';
import img2 from '../../assets/duplex.jpg';
import img3 from '../../assets/modular kitchen.jpg';
import img4 from '../../assets/plans.jpg'
import img5 from '../../assets/plot collab.jpg'



const services = [
  {
    id: 1,
    title: "Interior and Exterior Design",
    description: "Enhancing aesthetics and functionality for both commercial and residential spaces with modern and timeless designs.",
    image: img1
  },
  {
    id: 2,
    title: "Duplex Construction",
    description: "Expertly crafted duplexes tailored for both commercial and residential needs, ensuring space optimization and superior quality.",
    image: img2
  },
  {
    id: 3,
    title: "Modular Kitchen",
    description: "Sleek, efficient, and fully customized modular kitchen designs tailored for convenience, durability, and style.",
    image: img3
  },
  {
    id: 4,
    title: "2D & 3D Floor Plan",
    description: "Accurate and detailed floor plans for commercial and residential projects, bringing your vision to life before construction begins.",
    image: img4
  },
  {
    id: 5,
    title: "Plot Collaboration",
    description: "Partnering with landowners for strategic development, ensuring mutual growth and high-value construction solutions.",
    image: img5
  }
];


function OurServices() {
  return (
    <div>
      <h1 className='text-[4vh] text-center text-[#424243] font-semibold my-4 md:my-[4vw]'>Our Services</h1>
      {services.map((e)=>{
        return(
          <div className='bg-white mb-4 flex items-center w-[45vh] text-[#424243]
     flex-col md:flex-row md:w-[60vw] mx-auto md:gap-[3vw] '>
      <img src={e.image} className='w-[45vh] md:w-[30vw]  ' />


      <div className='flex flex-col items-center md:items-start mt-2 mb-2 '>
        <div className='text-[3vh] md:text-[24px] font-medium ' >{e.title}</div>
        <div className=' text-[1.75vh] md:text-[16px] mt-2 w-[45vh] text-center md:text-left'>{e.description}</div>
      </div>
    </div>
        )
      })}
    </div>
  )
}

export default OurServices