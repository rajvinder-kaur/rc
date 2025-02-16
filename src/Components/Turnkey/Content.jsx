import React from 'react'
import { Link } from 'react-router'
import image from '../../assets/custombase.jpg'
import lookbook from '../../assets/lookbook.jpg'
import instrcutions from '../../assets/pexels-cottonbro-6648411.jpg'
import blueprint from '../../assets/blueprint.jpg'
import material from '../../assets/pexels-tima.jpg'
import inspect from '../../assets/inspect.jpg'
import money from '../../assets/money.jpg'
import CTA from '../../subcomponents/CTA'



function Content() {
    return (
        <div>


            {/* this is a banner section that displays icons and text, positioned using a grid  */}

            {/* banner 1  */}


            <div class=" py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 justify-center items-center">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4 flex flex-col items-center">
                            <dt class="text-base/7 text-gray-600 ">From design and construction to approvals and interiors, we handle every aspect of your project seamlessly.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z" /></svg></dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4 flex flex-col items-center">
                            <dt class="text-base/7 text-gray-600">No hidden costs—our pricing is transparent and pre-determined to help you plan your budget with confidence.</dt>
                            <dd class="order-first text-md font-semibold w-[60px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" /></svg></dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4 flex flex-col items-center">
                            <dt class="text-base/7 text-gray-600">We strictly follow deadlines—if we miss them, we take responsibility with a penalty.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg></dd>
                        </div>
                        <div class="mx-auto flex max-w-xs  gap-y-4 flex flex-col items-center">
                            <dt class="text-base/7 text-gray-600">Enjoy up to 10 years of warranty, ensuring quality workmanship and durable materials for your project.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z" /></svg></dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4 flex flex-col items-center">
                            <dt class="text-base/7 text-gray-600">We provide services across Darbhanga, Laheriasarai, Bahera, Jale, Benipur, and Rosera.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg></dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4 flex flex-col items-center">
                            <dt class="text-base/7 text-gray-600">We incorporate energy-efficient designs and sustainable materials to create environmentally responsible and cost-effective homes.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" /></svg></dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* A information section with a image and paragraphs , positioned using a flexbox  */}

            {/* section 1 */}

            <section className='turnkey_content_section2'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-[30px] '>
                    <img className=' w-[70vw] aspect-square  lg:w-[30vw] ' src={image} alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >CustomBase: The Perfect Foundation for Your Dream Home</h1>
                        <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px]  '>
                            <p>Imagine CustomBase as a blank canvas—you can either admire its simplicity or add your personal touches to create a masterpiece that reflects your style and preferences.</p>
                            <p>With CustomBase, you get a fully finished home equipped with essential features like wardrobes, a modular kitchen, lighting, fans, and more. You can either move in as it is or enhance it with additional upgrades to craft a truly personalized living space.</p>
                            <p>This detailed 50+ page guide outlines everything—from the materials and brands we use to delivery timelines, pricing, payment plans, and warranty coverage. We recommend watching our brief introductory video for a quick overview before scheduling a consultation with us. This way, you’ll understand why CustomBase is the industry benchmark that others strive to replicate!</p>
                        </div>
                        <button className='btn w-[80vw] btn-secondary lg:w-[50vw] text-white my-[30px] shadow-none'
                        > <Link to="https://docs.google.com/forms/d/e/1FAIpQLScYonzIT0laM-TSXoXbukjbEiMtXdEU8a2GLCrV7Xmv9geb1Q/viewform?usp=preview" >Schedule a meeting</Link> </button>
                    </div>
                </div>
            </section>


            {/*-------------------------------------- section 2-----------------------------------------------------------------  */}


            <section className='turnkey_content_section2'>
                <div className='flex flex-col lg:flex-row justify-center  items-center gap-[30px] '>
                    <img className=' w-[70vw] aspect-square lg:order-2  lg:w-[30vw] ' src={lookbook} alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >Personalize Your Home with Our Design Guides, Add-ons, and Upgrades</h1>
                        <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px] '>
                            <p> <strong>Add-ons</strong> Enhance your home with premium features such as a swimming pool, solar panels, steam room, VRV air-conditioning, terrace garden, and more. Our flexible add-on options allow you to create a space that truly matches your lifestyle.</p>
                            <p> <strong>Upgrades:</strong> Tailor your home’s specifications to your taste. Whether it’s upgrading wardrobe finishes to PU, Acrylic, or Glass shutters, or modifying specific rooms or entire floors, our upgrade options give you the freedom to refine every detail to perfection.</p>
                            <p> <strong>Design Guides:</strong> Struggling to coordinate your floor tiles, wall tiles, bathroom countertops, or kitchen aesthetics? Our expert-curated Design Guides make it easy to visualize and select cohesive styles for your kitchen, bathrooms, bedrooms, and beyond.</p>
                            <p>All add-ons, upgrades, and design guides come with predefined pricing and transparent details, ensuring that you have full control over your budget and design decisions, all from the comfort of your home.</p>
                            <p>✅ Start Customizing Today! ✅</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* -----------------------------------------section 3---------------------------------------------------------------------------- */}

            <section className='turnkey_content_section2'>
                <div className='flex flex-col lg:flex-row justify-center  items-center gap-[30px] '>
                    <img src={instrcutions} className=' w-[70vw] aspect-square   lg:w-[30vw] ' alt="" />
                    {/* <video className=' w-[70vw] aspect-square order-2  lg:w-[30vw] '  >
                        <source src='../../assets/construction_timelapse.mp4' type="video/mp4" />
                    </video> */}
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >How Does the Process Begin for Turnkey Home Construction?</h1>
                        <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px] '>
                            <p className=' text-secondary font-semibold' >Step-by-Step Journey</p>
                            <p> <strong>Step 1:</strong> Receive a detailed price quote based on full FAR consumption.</p>
                            <p> <strong>Step 2:</strong> Sign the agreement, finalize pricing, and set the project duration.</p>
                            <p> <strong>Step 3:</strong> Begin drawings and approvals, updating the contract based on the actual area.</p>
                            <p> <strong>Step 4:</strong> Construction starts, bringing your vision to life.</p>
                            <p> <strong>Step 5:</strong> Conduct regular meetings to track progress, finalize materials, and select design upgrades/add-ons.</p>
                            <p> <strong>Step 6:</strong> Upon completion, receive an invitation for handover inspection, and get the Completion Certificate issued.</p>
                            <p> <strong>Step 7:</strong> Official handover with all necessary drawings and warranty documents.</p>
                            <p> <strong>Step 8:</strong> Warranty period begins, ensuring long-term peace of mind.</p>

                            <p>Start your hassle-free home-building journey today! 🏡✨</p>
                        </div>

                    </div>
                </div>
            </section>


            {/*------------------------------ banner 2 ---------------------------------------------------------------- */}


            <div class=" bg-[#212020] mb-[20vh]  py-24 sm:py-32">
                <h1 className='text-[4vh] w-full  text-center text-white font-semibold mb-4 md:mb-[2vw]' >Well-Structured Payment Plan</h1>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 justify-center items-center">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Secure Your Spot with Just 2.5%</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className="fill-amber-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Milestone-Based Payments</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className="fill-amber-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M80 32C53.5 32 32 53.5 32 80s21.5 48 48 48l152 0 0 40-48 48-56 0c-48.6 0-88 39.4-88 88l0 48-8 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-8 0 0-48c0-22.1 17.9-40 40-40l56 0 48 48 0 40-8 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-8 0 0-40 48-48 56 0c22.1 0 40 17.9 40 40l0 48-8 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-8 0 0-48c0-48.6-39.4-88-88-88l-56 0-48-48 0-40 152 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L80 32z" /></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Flexible Plans with 11 to 16 Milestones</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className="fill-amber-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 16 192 0 0-16c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-16-192 0 0 16c0 1.7-.1 3.4-.3 5L272 288l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-1.7 .1-3.4 .3-5L144 224l-96 0c-26.5 0-48-21.5-48-48L0 80z" /></svg></dd>
                        </div>

                    </dl>
                </div>
            </div>


            {/*---------------------------------------------------- section 4 ---------------------------------------------------------- */}


            <section className='turnkey_content_section2'>
                <div className='flex flex-col lg:flex-row justify-center  items-center gap-[30px] '>
                    <img src={blueprint} className=' w-[70vw] aspect-square  lg:order-2 lg:w-[30vw] ' alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >Understanding the Floor Plan Process at RC Construction</h1>
                        <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px] '>
                            <p>Every family has unique needs when it comes to their home design. Some may require additional storage space, while others prioritize an open seating area. At RC Construction, we create personalized floor plans tailored to each client’s preferences. The designs displayed on our page serve as references, but every project is customized to suit specific family requirements. Our team works closely with clients to develop the perfect floor plan that aligns with their lifestyle and vision, ensuring both functionality and aesthetic appeal.</p>
                        </div>

                    </div>
                </div>
            </section>


            {/*-------------------------------- banner 3------------------------------------------------- */}

            <div class=" bg-[#212020] mb-[20vh]  py-24 sm:py-32">
                <h1 className='text-[4vh] w-full  text-center text-white font-semibold mb-4 md:mb-[2vw]' >Reliable Warranty Support at RC Construction</h1>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 justify-center items-center">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Our specialized team is always available to address your warranty concerns and ensure quick resolutions.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className="fill-amber-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" /></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Easily raise and monitor warranty requests through our seamless online system.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className="fill-amber-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm54.2 253.8c-6.1 20.3-24.8 34.2-46 34.2L80 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l8.2 0c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8 54.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 349l-9.8 32.8z" /></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Opt for an extended warranty to enjoy added security and long-term peace of mind.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className="fill-amber-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c.2 35.5-28.5 64.3-64 64.3l-320.4 0c-35.3 0-64-28.7-64-64l0-160.4-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0z" /></svg></dd>
                        </div>

                    </dl>
                </div>
            </div>


            {/*-------------------------------------- section 5 ------------------------------------------------*/}


            <section className='turnkey_content_section2'>
                <div className='flex flex-col lg:flex-row justify-center  items-center gap-[30px] '>
                    <img src={material} className=' w-[70vw] aspect-square  lg:w-[30vw] ' alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >Quality You Can Trust</h1>
                        <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px] '>
                            <p>Each project site is managed by a dedicated site supervisor who ensures rigorous quality checks. With up to 2000 inspections conducted using advanced tracking systems, we maintain high construction standards. Clients can access detailed reports and supporting images for complete transparency.</p>
                        </div>

                    </div>
                </div>
            </section>



            {/*-------------------------------------- section 6 ------------------------------------------------*/}



            <section className='turnkey_content_section2'>
                <div className='flex flex-col lg:flex-row justify-center  items-center gap-[30px] '>
                    <img src={inspect} className=' w-[70vw] aspect-square  lg:order-2 lg:w-[30vw] ' alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >Materials You Can Track</h1>
                        <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px] '>
                            <p>All materials delivered to the site are recorded with time-stamped photographs, ensuring compliance with quality standards. Clients can review these images anytime, guaranteeing that only approved materials are used in construction.</p>
                        </div>

                    </div>
                </div>
            </section>


            {/*-------------------------------------- section 7 ------------------------------------------------*/}


            <section className='turnkey_content_section2'>
                <div className='flex flex-col lg:flex-row justify-center  items-center gap-[30px] '>
                    <img src={money} className=' w-[70vw] aspect-square   lg:w-[30vw] ' alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[4vh] w-[80vw] lg:w-[50vw] text-left text-[#424243] font-semibold mb-4 md:mb-[2vw]' >RC Construction Saves You Money</h1>
                        <div className='lg:w-[50vw] text-[14px] my-[5px] w-[80vw] text-justify flex flex-col gap-[15px] '>
                            <p>Thinking of building on your own to cut costs? While it may seem like a way to save, hidden expenses and inefficiencies can add up. Our cost-efficient approach ensures that you save significantly without compromising on quality. A detailed cost comparison shows how our expertise helps you save up to ₹35 lakhs on your dream home.</p>
                        </div>

                    </div>
                </div>
            </section>


            {/*------------------------------------ banner 4 ------------------------------------ */}


            <div class=" bg-amber-600   py-24 sm:py-32">
                <h1 className='text-[4vh] w-full  text-center text-white font-semibold mb-4 md:mb-[2vw]' >Why RC Construction is the Right Choice for You</h1>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 justify-center items-center">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Experience superior living standards with well-designed and optimized spaces.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className='fill-[#212020]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 160C64 89.3 121.3 32 192 32l256 0c70.7 0 128 57.3 128 128l0 33.6c-36.5 7.4-64 39.7-64 78.4l0 48-384 0 0-48c0-38.7-27.5-71-64-78.4L64 160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48l0 176c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L96 448c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L0 272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3l0 48 0 32 32 0 384 0 32 0 0-32 0-48z" /></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Our high-quality materials ensure lesser repairs and long-lasting durability.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className='fill-[#212020]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Reinforced concrete construction guarantees a longer lifespan for your home.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className='fill-[#212020]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm88 40c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zM232 88l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zm144-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16z" /></svg></dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4  items-center">
                            <dt class="text-base/7 text-white ">Reliable structural integrity ensures safety and security for your family.</dt>
                            <dd class="order-first text-md font-semibold w-[80px]"><svg className='fill-[#212020]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM144 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z" /></svg></dd>
                        </div>

                    </dl>
                </div>
            </div>

            {/* this is a CTA section for clients to schedule a meeting  */}

            {/*------------------------------------ CTA 1----------------------------------- */}

            <CTA
                bg_color='white'
                text_color='[#424243]'
                button_color='secondary'
                title='Schedule a Consultation With Us'
                description='Discuss your construction and structural design queries with our experts. Learn how we ensure a strong, durable, and cost-effective construction process tailored to your needs. Book a consultation today and take the first step toward your dream project.'
                button='Schedule a Consultation'
                button_link='https://docs.google.com/forms/d/e/1FAIpQLScYonzIT0laM-TSXoXbukjbEiMtXdEU8a2GLCrV7Xmv9geb1Q/viewform?usp=header'
            />

        </div>
    )
}

export default Content