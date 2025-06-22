import React from 'react'
import Navbar from '../vtcomponents/InviteNavbar'
import Hero from '../vtcomponents/VThero'
import VTabout from '../vtcomponents/VTabout'
import Marquee from '../vtcomponents/Marquee'
import Shorts from '../vtcomponents/Shorts'
import About from '../vtcomponents/AboutNew'
import Explore from './Explore'
import Contact from '../vtcomponents/VTcontact'
import Gototop from '../vtcomponents/Gototop'
import Footer from '../vtcomponents/VTfooter'

const Invitation01 = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    
      <About />
  
      <Explore/>
      <Contact/>
      <Footer />
      <Gototop />
      

    </div>
  )
}

export default Invitation01