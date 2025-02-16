import React from 'react'
import { Link } from 'react-router'
import Content from '../Components/Turnkey/Content'

function Turnkey() {
  return (
    <div>
      <div className='Turnkey_landing w-full h-[70vh] '>
        <div className='bg-[#03030385] w-full h-full 
         flex items-center justify-center text-white'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[24px] font-medium text-center lg:text-[42px] '>Seamless Turnkey Solutions – From Concept to Completion</h1>
            <p>Delivering fully operational, high-quality projects with zero hassle. We handle everything so you can focus on what matters most.</p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScYonzIT0laM-TSXoXbukjbEiMtXdEU8a2GLCrV7Xmv9geb1Q/viewform?usp=preview" ><button className='btn border-t-neutral-100 shadow-none my-[18px]'>Schedule a meeting</button></Link>
          </div>
        </div>
      </div>
      <Content/>
    </div>
  )
}

export default Turnkey