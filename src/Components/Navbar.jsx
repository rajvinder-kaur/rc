import React from 'react'
import { Link } from 'react-router';


function Navbar() {
  return (
    <div className="navbar bg-transparent backdrop-blur-sm shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Why Us?</Link></li>
        <li>
          <Link to ='/'>Turnkey</Link>
        </li>
        <li><Link to ='/'>Collaboration</Link></li>
        <li><Link to ='/'>Our Projects</Link></li>
      </ul>
    </div>
    <Link to ='/' className='font-bold'>RC constructions</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Why Us?</Link></li>
        <li>
          <Link to ='/'>Turnkey</Link>
        </li>
        <li><Link to ='/'>Collaboration</Link></li>
        <li><Link to ='/'>Our Projects</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className=' bg-[#D1683D] p-3 rounded text-white'><Link to='/' >Contact Us</Link></button>
  </div>
</div>
  )
}

export default Navbar;


