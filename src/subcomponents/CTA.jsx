import React from 'react'
import { Link } from 'react-router'

function CTA({ title, description, button, button_link,bg_color, text_color, button_color }) {
    return (
        <div className={`bg-${bg_color} text-${text_color} py-[20px]`}>
            <div className='flex flex-col items-center '>
                <h1 className='font-medium text-[24px] text-center '>{title}</h1>
                <p className='text-center text-[15px] my-[10px] w-[80vw]'>{description}</p>
                <button className={`btn btn-${button_color} w-[80vw] shadow-none`}
                > <Link to={button_link} >{button}</Link> </button>
            </div>
        </div>
    )
}

export default CTA