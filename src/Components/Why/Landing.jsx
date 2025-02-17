import React from 'react'

function Landing() {
    return (
        <div className='why_landing_div bg-cover h-[85vh] bg-center  w-full text-white ' >
            <div className='bg-[#0000007a] w-full h-full flex flex-col  items-center justify-center'>
                <h1 className='text-[24px] font-medium text-center lg:text-[42px] '>Why Settle for Less ? <br />
                    When You Can Have the Best</h1>
                <p>When you can get your home built by a professional builder with an experienced team of architects and construction experts in Darbhanga, why take chances with local, unorganized builders?</p>
                <p>We take pride in delivering homes that are not just well-designed but also structurally superior and built to last. With our expertise, you get better quality, innovative designs, and a hassle-free construction experience.</p>
                <p>Still unsure? – Scroll down to explore how we make a difference.</p>
                <div><svg className='w-[40px] fill-amber-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg></div>
            </div>
        </div>
    )
}

export default Landing