import React from 'react'
import Navbar from '../vtcomponents/InviteNavbar'
import Hero from '../vtcomponents/VThero'

import About from '../vtcomponents/AboutNew'
import Explore from './Explore'
import Contact from '../vtcomponents/VTcontact'
import Gototop from '../vtcomponents/Gototop'
import Footer from '../vtcomponents/VTfooter'
import Shorts from '../vtcomponents/Shorts'

const Invitation01 = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    
      <About />
      <Shorts />
      <Explore/>
      <Contact/>
      <Footer />
      <Gototop />
      

    </div>
  )
}

export default Invitation01