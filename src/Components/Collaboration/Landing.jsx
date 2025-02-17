import React from 'react'
import '../components.css';
import { Link } from 'react-router';


function Landing() {
    return (
        <div>
            <div className='collaboration_landing w-full h-[85vh] '>
                <div className='bg-[#03030391] w-full h-full flex items-center justify-center text-white'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[24px] font-medium text-center lg:text-[42px] '>Collaboration Services</h1>
                        <p className='text-[16px] text-center'>We provide hassle-free collaboration services in major cities, ensuring that plot owners can build their dream homes without financial or logistical burdens.</p>
                        <Link to="https://docs.google.com/forms/d/e/1FAIpQLScYonzIT0laM-TSXoXbukjbEiMtXdEU8a2GLCrV7Xmv9geb1Q/viewform?usp=preview" ><button className='btn border-t-neutral-100 shadow-none my-[18px]'>Schedule a meeting</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing