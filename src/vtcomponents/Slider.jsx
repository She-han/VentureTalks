import React from 'react';
import './Slider.css';
import img1 from '../assets/images/1.webp'
import img2 from '../assets/images/2.webp'
import img3 from '../assets/images/3.webp'
import img4 from '../assets/images/4.webp'
import img5 from '../assets/images/5.webp'
import img6 from '../assets/images/6.webp'
import img7 from '../assets/images/7.webp'
import img8 from '../assets/images/8.webp'
import img9 from '../assets/images/9.webp'
import img10 from '../assets/images/10.webp'
import me from '../assets/images/logoo.png'
import Navbar from './VTnavbar';

const Hero = () => {
   return (
      <>
      
     <div className='max-w-[100%] mx-auto dark:bg-gray-300 justify-between h-[20vh] md:h-[70vh] lg:h-[100vh] mb-20'>
     
     
       <div className="back banner">
       <Navbar/>
         <p className="banner background-text">VENTURE TALKS VENTURE RE TALKS VENTURE TALKS</p>
         
         
         <div className="slider" style={{ '--quantity': 10 }}>
           <div className="item" style={{ '--position': 1 }}>
             <img src={img1} alt="Dragon 1" />
           </div>
           <div className="item" style={{ '--position': 2 }}>
             <img src={img2} alt="1" />
           </div>
           <div className="item" style={{ '--position': 3 }}>
             <img src={img3} alt="1" />
           </div>
           <div className="item" style={{ '--position': 4 }}>
             <img src={img4} alt="1" />
           </div>
           <div className="item" style={{ '--position': 5 }}>
             <img src={img5} alt="1" />
           </div>
           <div className="item" style={{ '--position': 6 }}>
             <img src={img6} alt="1" />
           </div>
           <div className="item" style={{ '--position': 7 }}>
             <img src={img7} alt="1" />
           </div>
           <div className="item" style={{ '--position': 8 }}>
             <img src={img8} alt="1" />
           </div>
           <div className="item" style={{ '--position': 9 }}>
             <img src={img9} alt="1" />
           </div>
           <div className="item" style={{ '--position': 10 }}>
             <img src={img10} alt="1" />
           </div>
         </div>
         <div className="content">
           <div className="model">
             <img src={me} alt="Model" />
           </div>
         </div>
       </div>
     </div>
     </>
   );
 };
 

export default Hero;
