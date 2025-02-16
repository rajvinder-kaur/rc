import React from 'react'
import pic1 from '../../assets/smart.jpg'
import pic2 from '../../assets/beautifulhome.jpg'
import pic3 from '../../assets/smart_solution.jpg'
import pic4 from '../../assets/quality_home.jpg'
import { useNavigate } from "react-router";
import { Link } from 'react-router'




const homeFeatures1 = [
    {
        title: "1ft High Skirting in Stilt",
        description: "Frequent washing of stilts can cause seepage issues in the walls. A 1ft high skirting acts as a protective barrier, preventing water damage and increasing the longevity of the structure."
    },
    {
        title: "Underslung Plumbing",
        description: "A modern plumbing system used in luxury hotels and high-end residences. This setup makes maintenance easier, keeps pipelines accessible, and allows quick detection of any leaks, ensuring a hassle-free plumbing experience."
    },
    {
        title: "Provisioning for AC Pipes",
        description: "Instead of embedding AC copper pipes and electrical wires together inside the walls, we route electrical wires separately through conduits. This prevents future complications when repairs or replacements are needed."
    },
    {
        title: "Texture Paint",
        description: "In high-traffic areas like stilts and staircases, marks, scratches, and stains are inevitable. Texture paint provides a durable and aesthetic solution that resists dust and minor damage while keeping the walls looking clean and fresh."
    },
    {
        title: "Crystalline Waterproofing",
        description: "To ensure water resistance, we use a crystalline waterproofing compound mixed directly into the concrete. This provides long-lasting protection, even if minor cracks or scratches appear on the slab."
    },
    {
        title: "Toe Walls",
        description: "Toe walls are small concrete barriers built along bathroom edges, balconies, and terraces. These act as an additional layer of defense against water seepage, keeping interiors safe from moisture-related damage."
    },
    {
        title: "Water Supply Pipes on Terrace",
        description: "Instead of running pipes beneath the terrace floor, which can lead to costly repairs in case of leaks, we place them along the parapet wall, similar to bathroom plumbing. This method ensures accessibility and prevents structural damage."
    },
    {
        title: "Video Door Phone",
        description: "We recommend installing individual video door phones for each floor instead of a single unit. This setup enhances security and allows each floor to monitor visitors independently, ensuring a safer and more convenient living environment."
    },
    {
        title: "Fresh Water Pipes in Bathroom",
        description: "To simplify future maintenance and avoid breaking floor tiles for repairs, we install fresh water pipes along bathroom walls and run them through the false ceiling. This design makes servicing easier without damaging flooring."
    }
];

const homeFeatures2 = [
    {
        title: "Factory-Made Doors",
        description: "Ensures a high-quality, uniform finish with precision, just like top hotels and luxury residences. Factory-made doors offer better durability and aesthetics compared to on-site carpentry."
    },
    {
        title: "Brick Wall Shoulders",
        description: "Provides stronger support for doors and windows, ensuring a stable and aesthetically pleasing installation while preventing cracks or misalignment over time."
    },
    {
        title: "Smart Lighting",
        description: "Equipped with separate lighting options for different moods—bright white for general use and warm white for a cozy ambiance, enhancing both functionality and comfort."
    },
    {
        title: "High Parapet Wall on Mumty",
        description: "Designed to conceal the water tank, creating a neat and clean look for the rooftop while also offering additional safety."
    },
    {
        title: "Japanese Aluminium Windows",
        description: "Sleek, durable, and modern aluminium windows that offer excellent insulation, noise reduction, and long-lasting performance."
    },
    {
        title: "Parapet Wall Coping",
        description: "A protective feature that prevents cracks caused by weathering, increasing the lifespan and durability of external walls."
    },
    {
        title: "8 Feet High Doors & Windows",
        description: "Enhances the home's aesthetics by creating a sense of openness, allowing more natural light and ventilation to flow through the space."
    },
    {
        title: "Stone Finish on Manhole Covers",
        description: "Manhole covers are given a stone finish to seamlessly blend with the surrounding flooring, ensuring a premium and uniform look."
    },
    {
        title: "Matching Bathroom Accessories",
        description: "All chrome fittings in bathrooms are from the same brand, ensuring consistency in design, quality, and longevity."
    },
    {
        title: "Mesh on Joints Before Plaster",
        description: "Prevents cracks at the junction of brick walls and concrete structures, maintaining a smooth and crack-free wall surface over time."
    },
    {
        title: "Grooves on Joint Walls",
        description: "A technical solution to reduce visible cracks where brick walls meet the structure, ensuring a neater finish."
    },
    {
        title: "Flushed Marble Skirting",
        description: "Provides a seamless wall finish by embedding the skirting slightly within the wall, creating a refined and elegant look."
    },
    {
        title: "Built-in Bathroom Niches",
        description: "A smart, space-saving feature that allows for built-in storage within bathroom walls, keeping toiletries organized without the need for additional shelves."
    }
];

const homeFeatures3 = [
    {
        title: "Vertical Plumbing Stack",
        description: "Install vertical pipes after brickwork and plastering to minimize structural damage and ensure easy future maintenance."
    },
    {
        title: "Direct Material Procurement",
        description: "Purchase materials directly from manufacturers to avoid counterfeit products, reduce costs, and ensure better technical support."
    },
    {
        title: "Structure Certificate",
        description: "An independent third-party certification guarantees that both design and execution meet high-quality standards."
    },
    {
        title: "Cover Block",
        description: "Ensures full concrete coverage around steel reinforcements, preventing rust and increasing the durability of the structure."
    },
    {
        title: "Shuttering Oil",
        description: "Using proper shuttering oil prevents concrete from sticking to formwork, resulting in smoother finishes and easier removal."
    },
    {
        title: "Leading Brands",
        description: "Use of top-quality materials from leading brands ensures durability, reducing maintenance and enhancing longevity."
    },
    {
        title: "PCC Below Foundation",
        description: "A layer of Plain Cement Concrete (PCC) separates the foundation from the earth, providing additional structural strength."
    },
    {
        title: "Covering Vertical Pipes",
        description: "Enclose visible vertical plumbing pipes in aesthetic brick or WPC shafts with accessible aluminum panels for easy maintenance."
    },
    {
        title: "Lintels on Doors",
        description: "Cast lintels above doors instead of relying on beams for better structural support and long-term stability."
    },
    {
        title: "Ready-Mix Concrete (RMC)",
        description: "Use of factory-made concrete ensures consistent quality, better strength, and faster construction compared to on-site mixing."
    }
];

const homeFeatures4 = [
    {
        title: "Curing Chemical",
        description: "Replace traditional water-based curing with modern curing compounds to reduce water wastage in large construction projects."
    },
    {
        title: "Rain Water Harvesting",
        description: "Collect and filter rainwater from terraces and open areas to replenish underground water levels, with overflow provisions for excess water management."
    },
    {
        title: "Two Internet Connections",
        description: "Ensure uninterrupted connectivity by provisioning for two independent internet service providers, allowing one to act as a backup."
    },
    {
        title: "Electric Car Charging Provision",
        description: "Pre-install charging points in the stilt area, ensuring readiness for future electric vehicle requirements."
    },
    {
        title: "Intrusion Alarm System",
        description: "Enhance home security with an alarm system that triggers alerts in case of forced entry or window damage, covered under warranty for maintenance ease."
    },
    {
        title: "Overflow Provision in Underground Tanks",
        description: "Prevent water wastage by directing excess water from underground tanks to the rainwater harvesting pit using an NRV (Non-Return Valve) system."
    },
    {
        title: "Quality Definition for Materials",
        description: "Establish clear quality standards for unbranded materials such as bricks, sand, and aggregates to eliminate ambiguity and ensure durability."
    },
    {
        title: "200+ Drawings",
        description: "Provide over 200 detailed construction drawings, ensuring precise execution and minimizing errors on-site."
    },
    {
        title: "Better Defined Plaster Ratio",
        description: "Use a carefully balanced mix of cement, coarse sand, and fine sand to optimize both strength and workability for superior wall finishes."
    },
    {
        title: "Wall Thickness",
        description: "Construct external walls with 9-inch thickness and apply the same for internal walls requiring concealed fixtures, ensuring long-term durability."
    }
];

function Content() {
    let navigate = useNavigate();
    return (
        <div className='pt-[30px]'>

            <div className='flex flex-col items-center justify-center'>
                {/* <img src={pic1} className='h-[40vh]' alt="" /> */}
                <div className="w-[90vw]">
                    <h1 className='text-[3rem]'>Smart Building Solutions</h1>
                    {
                        homeFeatures1.map((e) => {
                            return (
                                <div className="collapse collapse-arrow bg-base-200">
                                    <input type="radio" name="my-accordion-2" defaultChecked />
                                    <div className="collapse-title text-xl font-medium">{e.title}</div>
                                    <div className="collapse-content">
                                        <p>{e.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col items-center justify-center my-[30px]'>
                {/* <img src={pic2} className='h-[40vh]' alt="" /> */}
                <div className="w-[90vw]">
                    <h1 className='text-[3rem]'>Why Our Homes Stand Out?</h1>
                    {
                        homeFeatures2.map((e) => {
                            return (
                                <div className="collapse collapse-arrow bg-base-200">
                                    <input type="radio" name="my-accordion-2" defaultChecked />
                                    <div className="collapse-title text-xl font-medium">{e.title}</div>
                                    <div className="collapse-content">
                                        <p>{e.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col items-center justify-center my-[30px]'>
                {/* <img src={pic3} className='h-[40vh]' alt="" /> */}
                <div className="w-[90vw]">
                    <h1 className='text-[3rem]'>Quality Construction Practices</h1>
                    {
                        homeFeatures3.map((e) => {
                            return (
                                <div className="collapse collapse-arrow bg-base-200">
                                    <input type="radio" name="my-accordion-2" defaultChecked />
                                    <div className="collapse-title text-xl font-medium">{e.title}</div>
                                    <div className="collapse-content">
                                        <p>{e.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col items-center justify-center my-[30px]'>
                {/* <img src={pic4} className='h-[40vh] w-[90vw]' alt="" /> */}
                <div className="w-[90vw]">
                    <h1 className='text-[3rem]'>Enhancing Home Quality</h1>
                    {
                        homeFeatures4.map((e) => {
                            return (
                                <div className="collapse collapse-arrow bg-base-200">
                                    <input type="radio" name="my-accordion-2" defaultChecked />
                                    <div className="collapse-title text-xl font-medium">{e.title}</div>
                                    <div className="collapse-content">
                                        <p>{e.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='bg-[#D1683D] text-white py-[20px]'>
                <div className='flex flex-col items-center '>
                    <h1 className='font-medium text-[24px] text-center '>To discover why homes built by us offer superior quality and value for you.</h1>
                    <p className='text-center text-[15px] my-[10px] w-[80vw]'>Discuss your home design & construction queries with us. And, understand how you'll have a surprise-free home construction experience at RC. Schedule a meeting today.</p>
                    <button className='btn w-[80vw] shadow-none'
                    > <Link to="https://docs.google.com/forms/d/e/1FAIpQLScYonzIT0laM-TSXoXbukjbEiMtXdEU8a2GLCrV7Xmv9geb1Q/viewform?usp=preview" >Schedule a meeting</Link> </button>
                </div>
            </div>

        </div>
    )
}

export default Content