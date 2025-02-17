import React from 'react'
import './screens.css'
import { Link } from 'react-router'

function contact() {
  return (
    <div className='contact_landing w-full h-screen flex  justify-items-center '>
      <div className='bg-[#a4a4a509] text-[#ffffff] backdrop-blur-md w-[70vw] h-[70vh] mx-auto my-auto flex justify-center items-center '>
        <div className='mx-auto my-auto '>
        <h1 className='text-[4vh] text-center text-[#ffffff] font-semibold mb-[20px]'>Contact Us</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[10px] w-[70%] mx-auto gap-y-[30px] '>
          <div>
            <div className='font-medium text-[18px] text-center '>Address</div>
            <div className='text-center text-[12px] my-[10px] '>RC Construction Private Limited
Opp Wow water park, Bijli halt, Darbhanga </div>
          </div>
          <div>
            <div className='font-medium text-[18px] text-center'>Contact info</div>
            <div className='text-center text-[12px] my-[10px] '>+91 74881 96116</div>
            <div className='text-center text-[12px] my-[10px] '></div>
          </div>
          <div>
            <div className='font-medium text-[18px] text-center'>Opening hours</div>
            <div className='text-center text-[12px] my-[10px] '>Mon-Sun</div>
            <div className='text-center text-[12px] my-[10px] '>9:00 am - 7:00 pm</div>
          </div>
          <div>
            <div className='font-medium text-[18px] text-center'>Let's meet</div>
            <div className='text-center text-[12px] my-[10px] '> fill your information in the given google form <Link to='https://docs.google.com/forms/d/e/1FAIpQLScYonzIT0laM-TSXoXbukjbEiMtXdEU8a2GLCrV7Xmv9geb1Q/viewform?usp=preview' className='underline'>here</Link> We will connect with you soon.  </div>
          </div>

        </div>
        </div>
      </div>

    </div>
  )
}

export default contact