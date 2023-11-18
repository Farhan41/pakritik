import React, { useState } from 'react'

import leaf from '../assets/leaf.png'
import { FaBarsStaggered } from "react-icons/fa6";
import  { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const TopNavbar = () => {

  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };



 let [bar, setBar] = useState(false)

 let handleBar = () =>{
   if(!bar){
    setBar(true)
   }else{
    setBar(false)
   }
 }

  return (
   
        <nav className='fixed w-full top-0 z-20 bg-slate-50 px-4'>
        <div className='flex justify-between'>
        <div className='font-dm font-bold flex items-center'>
            <img src={leaf} alt="leaf" className='w-[50px] h-[50px]'/>
            <h3>PAKRITIK <span className='text-emerald-500'>FOODS</span></h3>
        </div>
        
        <div>
        <FaBarsStaggered onClick={handleBar} className='mt-4 mr-3 text-lg font-bold text-emerald-500 lg:hidden' />
       
            <ul className='font-dm font-normal  text-base hidden lg:flex items-center pt-3 gap-x-5 pr-3'>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                  <li className='cursor-pointer text-emerald-500 font-bold hover:font-bold hover:text-black'>Home</li>
              </Link>
              <Link activeClass="active" to="service" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                  <li className='cursor-pointer hover:font-bold'>Products</li>
              </Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                  <li className='cursor-pointer hover:font-bold'>Contact</li>
              </Link>
            </ul>
        </div>
        </div>
        {
            bar &&
            
            <ul className='font-dm font-normal text-emerald-500 text-base flex flex-col text-center lg:hidden pt-2  gap-y-5'>
               <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
               <li className=' cursor-pointer border-b-1 hover:font-bold'>Home</li>
              </Link>
              <Link activeClass="active" to="service" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
              <li className=' cursor-pointer border-b-1 hover:font-bold'>Products</li>
              </Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
              <li className='cursor-pointer mb-3 hover:font-bold'>Contact</li>
              </Link>
        </ul>
        }
        </nav>

  )
}

export default TopNavbar