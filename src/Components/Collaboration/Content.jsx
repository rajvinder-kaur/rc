import React from 'react'
import { Link } from 'react-router'
import collab1 from '../../assets/collab1.jpg'
import collab2 from '../../assets/collab2.jpg'
import collab3 from '../../assets/collab3.jpg'
import collab4 from '../../assets/collab4.jpg'
import collab5 from '../../assets/collab5.jpg'
import Testimonials from '../home/Testimonials'


export default function Content() {
  return (
    <div>

      {/* A information section with a image and paragraphs , positioned using a flexbox  */}
      {/* section 1  */}

      <section className='mt-[10vh]'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[30px] '>
          <img className=' w-[70vw] aspect-square  lg:w-[30vw] ' src={collab1} alt="" />
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >How Our Collaboration Works</h1>
            <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px]  '>
              <p><strong>Zero Investment for Plot Owners-</strong>We construct the home at our own expense.
              </p>
              <p><strong>Shared Ownership Model-</strong>In return, we take a portion of the newly built property.
              </p>
              <p><strong>End-to-End Management-</strong>We handle design, construction, legal approvals, and neighborhood coordination.
              </p>
              <p><strong>Premium Construction & Modern Amenities-</strong>Ensuring top-quality results.
              </p>
              <p><strong>Timely Delivery Guarantee-</strong>With penalty payments for delays.
              </p>
              <p><strong>Long-Term Warranty-</strong> Up to 10 years of assurance on your home.
              </p>
              <p>📅 Schedule a Meeting to discuss your project and collaborate with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* section 2  */}

      <section className=' mt-[10vh]'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[30px] '>
          <img className=' w-[70vw] aspect-square  lg:w-[30vw] lg:order-2 ' src={collab2} alt="" />
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >Quality That You Can Track</h1>
            <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px]  '>
              <p>Every project site is managed by a dedicated site in-charge, ensuring rigorous quality control.
              </p>
              <p>Up to <strong>2,000 quality checks</strong> performed during construction.</p>
              <p> <strong>Time-stamped photographs</strong> for complete documentation.</p>
              <p>Clients can monitor progress with <strong>real-time updates.</strong> </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 3  */}

      <section className=' mt-[10vh]'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[30px] '>
          <img className=' w-[70vw] aspect-square  lg:w-[30vw] ' src={collab3} alt="" />
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >Branded Materials & Trusted Quality</h1>
            <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px]  '>
              <p>Every material delivery is documented with <strong>time-stamped photographs.</strong> </p>
              <p>Clients have access to real-time updates on materials used.</p>
              <p> <strong>Time-stamped photographs</strong> for complete documentation.</p>
              <p>Only <strong>approved brands and high-quality materials</strong> are used in construction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* section 4  */}

      <section className=' mt-[10vh]'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[30px] '>
          <img className=' w-[70vw] aspect-square  lg:w-[30vw] lg:order-2 ' src={collab4} alt="" />
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >100% Clarity Before Construction Begins</h1>
            <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px]  '>
              <p><strong>Pre-approved designs</strong> (floor plans, elevations, 3D renders).</p>
              <p> <strong>Defined construction timeline</strong>with clear milestones.</p>
              <p> <strong>Time-stamped photographs</strong> for complete documentation.</p>
              <p>Enjoy complete <strong>peace of mind</strong> with full transparency at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* consist of icons and related info */}
      {/* banner 1  */}

      <div class=" bg-[#212020]  mt-[10vh]  py-24 sm:py-32">
                <h1 className='text-[4vh] w-full  text-center text-white font-semibold mb-4 md:mb-[2vw]' >Reliable Warranty Support – We've Got You Covered!</h1>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 justify-center items-center">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Separate team for warranty </dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className='fill-amber-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320l213.3 0c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7l-42.7 0C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2l-103.2 0C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7l300.6 0c-2.1-5.2-3.2-10.9-3.2-16.4l0-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192l-42.7 0c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3l0-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6l0 3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3l-2.9 1.7c-9.2 5.3-20.4 4-29.6-1.3s-16.1-14.5-16.1-25.1l0-3.4c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9l0 3.4c0 10.6-6.9 19.8-16.1 25.1s-20.4 6.6-29.6 1.3l-2.9-1.7c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l2.9 1.7c9.2 5.3 13.7 15.8 13.7 26.4s-4.5 21.1-13.7 26.4l-3 1.7c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3l2.9-1.7c9.2-5.3 20.4-4 29.6 1.3s16.1 14.5 16.1 25.1l0 3.4c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9l0-3.4c0-10.6 6.9-19.8 16.1-25.1s20.4-6.6 29.6-1.3l2.9 1.7c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-3-1.7c-9.2-5.3-13.7-15.8-13.7-26.4s4.5-21.1 13.7-26.4l3-1.7zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"/></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Raise and track warranty queries virtually.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className='fill-amber-600'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-19.3c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2l-64 0c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2L80 448c-8.8 0-16-7.2-16-16s7.2-16 16-16l8.2 0c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8 8.9 0c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7L384 203.6l0-43.6-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM549.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z"/></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Buy extended warranty for additional peace of mind</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className='fill-amber-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 159-42.4 17L304 224l-32 0c-8.8 0-16 7.2-16 16l0 32 0 24.2 0 7.8c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9l-96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-96 0c-26.5 0-48-21.5-48-48L0 48zM80 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm80 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM64 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 96c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm80 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8l0 187.8c68.2-33 91.5-99 95.4-149.7z"/></svg></dd>
                        </div>

                    </dl>
                </div>
            </div>
          
      {/*-------------------------------- banner 2 ----------------------------------------  */}

      <div class=" bg-amber-600    py-24 sm:py-32">
                <h1 className='text-[4vh] w-full  text-center text-white font-semibold mb-4 md:mb-[2vw]' >Building Stronger, Smarter, and More Sustainable Homes for You</h1>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 justify-center items-center">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Superior Comfort & Livability </dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M250.8 1.4c-35.2-3.7-66.6 21.8-70.3 57L174 119 156.7 69.6C145 36.3 108.4 18.8 75.1 30.5S24.2 78.8 35.9 112.1L88.7 262.2C73.5 276.7 64 297.3 64 320c0 0 0 0 0 0l0 24c0 92.8 75.2 168 168 168l48 0c92.8 0 168-75.2 168-168l0-72 0-16 0-32c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4c-10.4-21.3-32.3-36-57.6-36c-.7 0-1.5 0-2.2 0l5.9-56.3c3.7-35.2-21.8-66.6-57-70.3zm-.2 155.4C243.9 166.9 240 179 240 192l0 48c0 .7 0 1.4 0 2c-5.1-1.3-10.5-2-16-2l-7.4 0-5.4-15.3 17-161.3c.9-8.8 8.8-15.2 17.6-14.2s15.2 8.8 14.2 17.6l-9.5 90.1zM111.4 85.6L165.7 240 144 240c-4 0-8 .3-11.9 .9L81.2 96.2c-2.9-8.3 1.5-17.5 9.8-20.4s17.5 1.5 20.4 9.8zM288 192c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48zm38.4 108c10.4 21.3 32.3 36 57.6 36c5.5 0 10.9-.7 16-2l0 10c0 66.3-53.7 120-120 120l-48 0c-66.3 0-120-53.7-120-120l0-24s0 0 0 0c0-17.7 14.3-32 32-32l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c35.3 0 64-28.7 64-64c0-.7 0-1.4 0-2c5.1 1.3 10.5 2 16 2c7.9 0 15.4-1.4 22.4-4zM400 272c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 0 16z"/></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Low Maintenance, High Durability</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M192 0c17.7 0 32 14.3 32 32l0 112-64 0 0-112c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80-64 0 0-80zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6l0 8.6c0 52.3-25.1 98.8-64 128l0 96c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-78.4c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267l0-27c0-35.3 28.7-64 64-64l88 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-56 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l56 0c39.8 0 72-32.2 72-72z"/></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Extended Lifespan of Homes</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 88.6 0c-5.4-9.4-8.6-20.3-8.6-32l0-128c0-23.7 12.9-44.4 32-55.4l0-24.6c0-30.5 12.2-58.2 32-78.4L384 48c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM464 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z"/></svg></dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Peace of Mind Guaranteed</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"/></svg></dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Modern Aesthetic & Design</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM183.2 132.6c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L176 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L242.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm160 0c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L336 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L402.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm6.3 175.8c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5c10.4-16.1-6.8-32.5-25.5-28.1z"/></svg></dd>
                        </div>

                    </dl>
                </div>
            </div>

            {/*---------------------- section 5------------------- */}

            <section className=' mt-[10vh]'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[30px] '>
          <img className=' w-[70vw] aspect-square  lg:w-[30vw]  ' src={collab5} alt="" />
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >A Team of Experts Driving Excellence in Construction</h1>
            <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px]  '>
              <p>✅<strong>200+ Full-time Employees-</strong> Skilled professionals dedicated to top-notch quality.</p>
              <p>✅<strong>Elite Engineers & Architects–</strong> Blending creativity with functionality.</p>
              <p>✅<strong>100+ Construction Professionals–</strong> Delivering strength, stability, and excellence.</p>
              <p>✅<strong>Dedicated Quality & Compliance Team–</strong>Ensuring safety and superior standards.</p>
            </div>
          </div>
        </div>
      </section>

<Testimonials/>

    </div>
  )
}
