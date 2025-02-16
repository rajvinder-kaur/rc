import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import WhyUs from './WhyUs'
import Turnkey from './Turnkey'
import Collaboration from './Collaboration'
import Contact from './Contact'
import OurProjects from './OurProjects'


function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/WhyUs' element={<WhyUs/>}/>
        <Route path='/Turnkey' element={<Turnkey/>}/>
        <Route path='/Collaboration' element={<Collaboration/>}/>
        <Route path='/OurProjects' element={<OurProjects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Router