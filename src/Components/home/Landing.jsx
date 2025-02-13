
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../components.css';
import { useNavigate } from "react-router";


export default function Landing() {

    let navigate = useNavigate();

    return (
        <div className=" landing_div bg-cover bg-center h-screen w-full text-white ">
            <div className='bg-radial from-transparent from-10% to-black w-full h-full flex justify-items-center items-center'>
                <div className='mx-auto my-auto md:absolute md:bottom-0 md:left-0 md:p-10 '>
                    <ul className='flex flex-row gap-5'>
                        <li className='flex flex-col'>
                            <div className='text-[5vh] md:text-[5vw] '>300 +</div>
                            <div className=' mt-2 text-[2vh] md:text-[2vw] font-light'>Happy <br /> Clients</div>
                        </li>
                        <li className='flex flex-col'>
                            <div className='text-[5vh] md:text-[5vw]'>500+</div>
                            <div className=' mt-2 text-[2vh] md:text-[2vw] font-light'>Amazing <br /> Projects</div>
                        </li>
                        <li className='flex flex-col'>
                            <div className=' text-[5vh] md:text-[5vw] '>10</div>
                            <div className='mt-2 text-[2vh] md:text-[2vw]  font-light'>Awards <br /> Received</div>
                        </li>
                    </ul>
                    <div className='text-[5vh] md:text-[6vw]'>Building Excellence, <br /> Crafting Dreams.</div>
                    <div className='text-[2vh] md:text-[2vw] font-light md:w-full w-[40vh]'>Innovative designs, quality construction, and timeless value.</div>
                    <button onClick={() => {
                        navigate("/OurProjects");
                    }} className='btn bg-transparent text-[2vh] md:text-[1.5vw] text-white font-light mt-5 md:p-7'> See Our Projects</button>
                </div>
            </div>
        </div>
    )
}
