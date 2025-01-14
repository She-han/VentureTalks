import React from 'react'
import Slider from '../vtcomponents/Slider2'
import Hero from '../vtcomponents/VThero'
import About from '../vtcomponents/VTabout'
import Episodes from '../vtcomponents/Episodes'
import Sponsor from '../vtcomponents/Sponsor'
import Contact from '../vtcomponents/VTcontact'
import Footer from '../vtcomponents/VTfooter'
import Gototop from '../vtcomponents/Gototop'
import Shorts from '../vtcomponents/Shorts'


const Home = () => {
  return (
    <div>
      <Slider/>
      <Hero/>
      <About/> 
     
      <Sponsor/>   
     
      
      <Contact/>
      <Footer/>
      <Gototop/>
    </div>
  )
}

export default Home