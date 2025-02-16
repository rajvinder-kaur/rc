import React from 'react'
import Slider from "react-slick";

function Testimonials() {

    const testimonials = [
        {
            name: "Ankit Sharma",
            feedback: "Exceptional craftsmanship and attention to detail! Our home is stunning, and the entire process was seamless."
        },
        {
            name: "Pooja Mehta",
            feedback: "Built our dream duplex just as we envisioned! The team was professional, responsive, and highly skilled."
        },
        {
            name: "Rahul Verma",
            feedback: "The plot collaboration process was smooth and transparent. Their expertise helped us make the best decisions."
        },
        {
            name: "Sneha Kapoor",
            feedback: "Perfect for joint family homes! Custom floor plans and individual design meetings made a huge difference."
        },
        {
            name: "Vikram Joshi",
            feedback: "The modular kitchen design transformed our home! Sleek, modern, and extremely functional."
        }
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='bg-amber-600 text-white p-[4vh] text-center mt-[5vh] '>
        <h2 className='text-[4vh] text-center text-white font-semibold my-4 md:my-[1vw]'>Client Testimonials </h2>
        <p>Real Stories, Real Satisfaction – Hear from Our Happy Clients!</p>
            <Slider className='bg-white text-stone-800 w-[70vw] md:w-[60vw] md:py-[9vh] mx-auto px-[3vw] my-4 rounded-xl py-[7vh] shadow-xl shadow-[#A64205]' {...settings}>
                {testimonials.map((e) => (
                    <div className="text-center"  >
                        <h2 className='md:text-[16px] pb-2' >"{e.feedback}"</h2>
                        <p className='font-bold'>{e.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Testimonials