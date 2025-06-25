import React from 'react'
import Navbar from '../vtcomponents/InviteNavbar'
import Hero from '../vtcomponents/VThero'

import About from '../vtcomponents/AboutNew'
import Form from '../vtcomponents/Form03'
import Contact from '../vtcomponents/VTcontact'
import Gototop from '../vtcomponents/Gototop'
import Footer from '../vtcomponents/VTfooter'
import Shorts from '../vtcomponents/Shorts'


const Invitation03 = () => {
  return (
    <div>
      <Navbar />
      <Hero />    
      <About />
      <Shorts />
      <Form/>
      <Contact/>
      <Footer />
      <Gototop />
      

    </div>
  )
}

export default Invitation03