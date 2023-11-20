import React from 'react'
import vg from '../assets/background.jpg'
import Typewriter from 'typewriter-effect';
const BannerWorld = () => {





  return (

      <div className='banner' id="home">
        <div className="overlay"></div>
        <img className='bannerimg' src={vg} alt="" />
        <div  className="content text-[18px] lg:text-[35px]"> 
        <Typewriter
        
        options={{
        strings: ['ASSALAMU ALAIKUM', 'WELCOME TO PAKRITIK FOODS'],
        autoStart: true,
        loop: true,
        }}
        />
            
        </div>
    </div>

    
    
  )
}

export default BannerWorld



