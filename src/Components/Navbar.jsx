import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className="navbar z-1 fixed  text-white bg-[#212020]  backdrop-blur-md shadow-sm">
      <div className="navbar-start">
        <div className="dropdown bg-[#212020]">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm z-[999] dropdown-content b rounded-box  mt-3 w-52 p-2 shadow bg-[#212020]">
            <li><Link to='/WhyUs'> Why Us?</Link> </li>
            <li><Link to='/Turnkey'> Turnkey</Link></li>
            <li><Link to='/Collaboration'> Collaboration</Link></li>
            <li><Link to='/OurProjects'> Our Projects</Link></li>
          </ul>



        </div>
        <Link to='/' className="text-xl">RC Construction</Link>
      </div>
      <div className="navbar-center hidden lg:flex">


        <ul className="menu menu-horizontal px-1">
          <li> <Link to='/WhyUs'> Why Us?</Link> </li>
          <li>
            <Link to='/Turnkey'> Turnkey</Link>
          </li>
          <li><Link to='/Collaboration'> Collaboration</Link></li>
          <li><Link to='/OurProjects'> Our Projects</Link></li>
        </ul>


      </div>
      <div className="navbar-end">
        <Link to='/Contact' className="btn btn-secondary text-white">Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar